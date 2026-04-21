<script setup lang="ts">
import { computed } from 'vue'

interface SeasonalTeam {
  team: string
  p_champion: number
  p_top3: number
  p_relegation: number
  expected_points: number
}

interface SeasonalPrediction {
  league: string
  season: number
  simulations: number
  rounds_completed: number
  min_upcoming_round: number
  max_upcoming_round: number
  total_remaining_rounds: number
  teams: SeasonalTeam[]
}

const props = defineProps<{
  seasonal: SeasonalPrediction
}>()

const likelyChampion = computed(() => {
  return [...props.seasonal.teams].sort((a, b) => b.p_champion - a.p_champion)[0]
})

const highestRelegationRisk = computed(() => {
  return [...props.seasonal.teams].sort((a, b) => b.p_relegation - a.p_relegation)[0]
})

const avgExpectedPoints = computed(() => {
  if (!props.seasonal.teams.length) return 0

  const sum = props.seasonal.teams.reduce((acc, team) => acc + team.expected_points, 0)
  return sum / props.seasonal.teams.length
})

function percent(value: number) {
  return `${(value * 100).toFixed(1)}%`
}
</script>

<template>
  <section class="snapshot-grid">
    <article class="snapshot-card">
      <p class="label">Season</p>
      <p class="value">{{ seasonal.season }} ({{ seasonal.league }})</p>
      <p class="meta">{{ seasonal.simulations }} simulations</p>
    </article>

    <article class="snapshot-card">
      <p class="label">Current Progress</p>
      <p class="value">{{ seasonal.rounds_completed }} rounds played</p>
      <p class="meta">
        Next rounds: {{ seasonal.min_upcoming_round }}-{{ seasonal.max_upcoming_round }}
      </p>
    </article>

    <article class="snapshot-card">
      <p class="label">Title Favorite</p>
      <p class="value">{{ likelyChampion?.team }}</p>
      <p class="meta">Champion chance: {{ percent(likelyChampion?.p_champion ?? 0) }}</p>
    </article>

    <article class="snapshot-card">
      <p class="label">Highest Relegation Risk</p>
      <p class="value">{{ highestRelegationRisk?.team }}</p>
      <p class="meta">Risk: {{ percent(highestRelegationRisk?.p_relegation ?? 0) }}</p>
    </article>

    <article class="snapshot-card wide">
      <p class="label">League Pulse</p>
      <p class="value">{{ seasonal.total_remaining_rounds }} rounds still to play</p>
      <p class="meta">Average expected points per team: {{ avgExpectedPoints.toFixed(1) }}</p>
    </article>
  </section>
</template>

<style scoped>
.snapshot-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.snapshot-card {
  padding: 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-background-soft);
}

.snapshot-card.wide {
  grid-column: span 4;
}

.label {
  font-size: 0.76rem;
  color: #6b7280;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.value {
  font-size: 1.05rem;
  font-weight: 600;
  margin-top: 0.2rem;
}

.meta {
  margin-top: 0.25rem;
  color: #6b7280;
  font-size: 0.88rem;
}

@media (max-width: 980px) {
  .snapshot-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .snapshot-card.wide {
    grid-column: span 2;
  }
}

@media (max-width: 600px) {
  .snapshot-grid {
    grid-template-columns: 1fr;
  }

  .snapshot-card.wide {
    grid-column: span 1;
  }
}
</style>
