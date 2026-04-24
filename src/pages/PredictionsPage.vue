<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import MatchCard from '../components/MatchCard.vue';
import BackToHome from '../components/BackToHome.vue';
import SeasonSnapshot from '../components/SeasonSnapshot.vue';
import SeasonTable from '../components/SeasonTable.vue';
import TeamFinishDistribution from '../components/TeamFinishDistribution.vue';

interface MatchPrediction {
  date: string;
  home_team: string;
  away_team: string;
  competition_format: string;
  lambda_home: number;
  lambda_away: number;
  p_home_win: number;
  p_draw: number;
  p_away_win: number;
  scoreline_probs?: Record<string, number>;
  unknown_team: boolean;
  unknown_home: boolean;
  unknown_away: boolean;
}

interface SeasonalTeam {
  team: string;
  position_probs: Record<string, number>;
  p_champion: number;
  p_top3: number;
  p_relegation: number;
  expected_points: number;
  points_p10: number;
  points_p90: number;
}

interface SeasonalPrediction {
  league: string;
  season: number;
  simulations: number;
  rounds_completed: number;
  min_upcoming_round: number;
  max_upcoming_round: number;
  total_remaining_rounds: number;
  teams: SeasonalTeam[];
}

const activeView = ref<'season' | 'matches'>('season');

const predictions = ref<MatchPrediction[]>([]);
const seasonalPrediction = ref<SeasonalPrediction | null>(null);
const selectedTeam = ref<SeasonalTeam | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const [matchRes, seasonalRes] = await Promise.all([
      fetch('https://mongosaurusrex.github.io/allsvenskan-predictor/coming_predictions.json'),
      fetch('https://mongosaurusrex.github.io/allsvenskan-predictor/seasonal_predictions.json')
    ]);

    if (!matchRes.ok) {
      throw new Error(`Failed to fetch match predictions (${matchRes.status})`);
    }

    if (!seasonalRes.ok) {
      throw new Error(`Failed to fetch seasonal predictions (${seasonalRes.status})`);
    }

    predictions.value = await matchRes.json();
    seasonalPrediction.value = await seasonalRes.json();

    if (seasonalPrediction.value?.teams?.length) {
      selectedTeam.value = [...seasonalPrediction.value.teams].sort(
        (a, b) => b.p_champion - a.p_champion
      )[0];
    }
  } catch (e: any) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});

function selectTeam(team: unknown) {
  selectedTeam.value = team as SeasonalTeam;
}
</script>

<template>
  <div class="divider">
    <BackToHome />
    <header>
      <div class="wrapper">
        <div class="greetings">
          <h1 class="green">Football Predictions</h1>
          <p class="subheading">
            Predictions are derived from a Bayesian Poisson model fitted on historical matches.
            Team-specific attack and defense parameters are inferred via MCMC, and outcome
            probabilities are computed from the resulting goal distributions.
          </p>
          <a
            href="https://github.com/mongosaurusrex/allsvenskan-predictor"
            target="_blank"
            rel="noopener"
            class="repo-link"
          >
            Learn more here →
          </a>
          <div>
            <RouterLink to="/passion-projects" class="other-projects-link">
              See other passion projects →
            </RouterLink>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div v-if="loading">Loading...</div>
      <div v-if="error">Error: {{ error }}</div>

      <div v-if="!loading && !error" class="mode-toggle">
        <button
          class="mode-btn"
          :class="{ active: activeView === 'season' }"
          @click="activeView = 'season'"
        >
          Season Forecast
        </button>
        <button
          class="mode-btn"
          :class="{ active: activeView === 'matches' }"
          @click="activeView = 'matches'"
        >
          Upcoming Matches
        </button>
      </div>

      <section v-if="!loading && !error && activeView === 'season' && seasonalPrediction" class="season-view">
        <SeasonSnapshot :seasonal="seasonalPrediction" />

        <div class="season-layout">
          <SeasonTable
            :teams="seasonalPrediction.teams"
            :selected-team="selectedTeam?.team"
            @select-team="selectTeam"
          />

          <aside v-if="selectedTeam" class="team-panel">
            <h2>{{ selectedTeam.team }}</h2>

            <div class="key-metrics">
              <div>
                <span class="metric-label">Champion</span>
                <span class="metric-value">{{ (selectedTeam.p_champion * 100).toFixed(1) }}%</span>
              </div>
              <div>
                <span class="metric-label">Top 3</span>
                <span class="metric-value">{{ (selectedTeam.p_top3 * 100).toFixed(1) }}%</span>
              </div>
              <div>
                <span class="metric-label">Relegation</span>
                <span class="metric-value">{{ (selectedTeam.p_relegation * 100).toFixed(1) }}%</span>
              </div>
            </div>

            <div class="points-band">
              <p class="points-title">Expected points</p>
              <p class="points-main">{{ selectedTeam.expected_points.toFixed(1) }}</p>
              <p class="points-range">Range (p10-p90): {{ selectedTeam.points_p10 }}-{{ selectedTeam.points_p90 }}</p>
            </div>

            <div>
              <p class="distribution-title">Finish-position probability</p>
              <TeamFinishDistribution :position-probs="selectedTeam.position_probs" />
            </div>
          </aside>
        </div>
      </section>

      <section v-if="!loading && !error && activeView === 'matches'" class="matches-view">
        <MatchCard v-for="m in predictions" :key="m.home_team + m.away_team" :match="m" />
      </section>
    </main>
  </div>
</template>

<style>
.mode-toggle {
  display: inline-flex;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  margin: 0.8rem 0 1.1rem;
  overflow: hidden;
}

.mode-btn {
  border: none;
  background: transparent;
  color: var(--color-text);
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.mode-btn.active {
  background: #16a34a;
  color: white;
}

.season-view {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.season-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 0.9rem;
  align-items: start;
}

.team-panel {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1rem;
  background: var(--color-background-soft);
}

.team-panel h2 {
  margin-bottom: 0.8rem;
  font-size: 1.15rem;
  font-weight: 600;
}

.key-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

.metric-label {
  display: block;
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
}

.metric-value {
  display: block;
  font-size: 1rem;
  font-weight: 600;
}

.points-band {
  border: 1px dashed var(--color-border);
  border-radius: 10px;
  padding: 0.7rem;
  margin-bottom: 0.8rem;
}

.points-title {
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
}

.points-main {
  font-size: 1.2rem;
  font-weight: 600;
}

.points-range {
  font-size: 0.86rem;
  color: #6b7280;
}

.distribution-title {
  font-size: 0.86rem;
  margin-bottom: 0.35rem;
  color: #6b7280;
}

.subheading {
  max-width: 700px;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #888;
  font-size: 0.95rem;
  line-height: 1.5;
}

.repo-link {
  display: inline-block;
  margin-top: 0.4rem;
  color: #42b883; /* Vue green — fits your theme */
  text-decoration: none;
  font-weight: 500;
}

.repo-link:hover {
  text-decoration: underline;
}

.other-projects-link {
  display: inline-block;
  margin-top: 0.8rem;
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
}

.other-projects-link:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .season-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .key-metrics {
    grid-template-columns: 1fr;
  }
}
</style>
