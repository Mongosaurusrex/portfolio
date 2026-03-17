<script setup lang="ts">
import { computed } from "vue"
import OutcomeDensity from "./OutcomeDensity.vue"
import ScoreHeatmap from "./ScoreHeatmap.vue"

interface Prediction {
  date: string
  home_team: string
  away_team: string
  competition_format: string

  lambda_home: number
  lambda_away: number

  p_home_win: number
  p_draw: number
  p_away_win: number

  p_home_advance?: number
  p_away_advance?: number

  scoreline_probs?: Record<string, number>
}

const props = defineProps<{
  match: Prediction
}>()

// Most likely score
const best = computed(() => {
  const scores = props.match?.scoreline_probs
  if (!scores) return null

  const best = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])[0]

  return {
    score: best[0],
    prob: best[1]
  }
})
</script>

<template>
  <div class="match-card">

    <!-- HEADER -->
    <div class="match-header">

      <h2 class="title">
        {{ match.home_team }} vs {{ match.away_team }}
      </h2>

      <span
        v-if="match.competition_format === 'knockout'"
        class="tag"
      >
        Knockout
      </span>

    </div>

    <!-- CONTENT GRID -->
    <div class="content">

      <!-- LEFT SIDE -->
      <div class="left">

        <!-- League probabilities -->
        <OutcomeDensity
          v-if="match.competition_format === 'league'"
          :home="match.p_home_win"
          :draw="match.p_draw"
          :away="match.p_away_win"
        />

        <!-- Knockout probabilities -->
        <div
          v-if="match.competition_format === 'knockout'"
          class="advance"
        >

          <div class="row">
            <span>{{ match.home_team }}</span>

            <div class="bar">
              <div
                class="fill home"
                :style="{ width: (match.p_home_advance * 100) + '%' }"
              ></div>
            </div>

            <span>
              {{ (match.p_home_advance! * 100).toFixed(0) }}%
            </span>
          </div>

          <div class="row">
            <span>{{ match.away_team }}</span>

            <div class="bar">
              <div
                class="fill away"
                :style="{ width: (match.p_away_advance * 100) + '%' }"
              ></div>
            </div>

            <span>
              {{ (match.p_away_advance! * 100).toFixed(0) }}%
            </span>
          </div>

        </div>

        <!-- STATS -->
        <div class="stats">

          <div>
            <strong>Expected goals</strong><br>
            {{ match.lambda_home.toFixed(2) }} – {{ match.lambda_away.toFixed(2) }}
          </div>

          <div v-if="best">
            <strong>Most likely score</strong><br>
            {{ best.score }} ({{ (best.prob * 100).toFixed(1) }}%)
          </div>

        </div>

      </div>

      <!-- RIGHT SIDE (HEATMAP) -->
      <div
        v-if="match.scoreline_probs"
        class="right"
      >

        <div class="heatmap-title">
          Score distribution (90 min)
        </div>

        <ScoreHeatmap
          :scoreline_probs="match.scoreline_probs"
        />

      </div>

    </div>

  </div>
</template>

<style scoped>

/* ========================= */
/* CARD */
/* ========================= */

.match-card {
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 0;
}

/* ========================= */
/* HEADER */
/* ========================= */

.match-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}

.title {
  font-size: 1.3rem;
  margin: 0;
}

.tag {
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  background: #eee;
  color: #555;
  white-space: nowrap;
}

/* ========================= */
/* GRID */
/* ========================= */

.content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.right {
  width: 100%;
  min-width: 0;
}

/* ========================= */
/* STATS */
/* ========================= */

.stats {
  display: flex;
  gap: 2rem;
}

/* ========================= */
/* KNOCKOUT */
/* ========================= */

.advance {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.row {
  display: grid;
  grid-template-columns: 120px 1fr 40px;
  gap: 8px;
  align-items: center;
}

.bar {
  height: 8px;
  background: #eee;
  border-radius: 4px;
}

.fill {
  height: 100%;
}

.home { background: #16a34a; }
.away { background: #2563eb; }

/* ========================= */
/* HEATMAP */
/* ========================= */

.heatmap-title {
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
  color: #666;
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;   /* stack */
    gap: 1rem;
  }
}

</style>
