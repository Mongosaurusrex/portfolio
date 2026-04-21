<script setup lang="ts">
import { computed, ref } from 'vue'

interface SeasonalTeam {
  team: string
  p_champion: number
  p_top3: number
  p_relegation: number
  expected_points: number
  points_p10: number
  points_p90: number
}

type SortKey = 'expected_points' | 'p_champion' | 'p_top3' | 'p_relegation'

const props = defineProps<{
  teams: SeasonalTeam[]
  selectedTeam?: string
}>()

const emit = defineEmits<{
  (e: 'select-team', team: SeasonalTeam): void
}>()

const sortBy = ref<SortKey>('expected_points')
const sortDesc = ref(true)

const sortedTeams = computed(() => {
  const copy = [...props.teams]

  return copy.sort((a, b) => {
    const direction = sortDesc.value ? -1 : 1
    const av = a[sortBy.value]
    const bv = b[sortBy.value]

    if (av === bv) return 0
    return av > bv ? direction : -direction
  })
})

function setSort(key: SortKey) {
  if (sortBy.value === key) {
    sortDesc.value = !sortDesc.value
    return
  }

  sortBy.value = key
  sortDesc.value = true
}

function percent(value: number) {
  return `${(value * 100).toFixed(1)}%`
}
</script>

<template>
  <section class="table-wrap">
    <table class="season-table">
      <thead>
        <tr>
          <th>Team</th>
          <th class="sortable" @click="setSort('p_champion')">Champion</th>
          <th class="sortable" @click="setSort('p_top3')">Top 3</th>
          <th class="sortable" @click="setSort('p_relegation')">Relegation</th>
          <th class="sortable" @click="setSort('expected_points')">Expected Pts</th>
          <th>Points Range</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="team in sortedTeams"
          :key="team.team"
          :class="{ selected: team.team === selectedTeam }"
          @click="emit('select-team', team)"
        >
          <td class="name">{{ team.team }}</td>
          <td>{{ percent(team.p_champion) }}</td>
          <td>{{ percent(team.p_top3) }}</td>
          <td>{{ percent(team.p_relegation) }}</td>
          <td>{{ team.expected_points.toFixed(1) }}</td>
          <td>{{ team.points_p10 }} - {{ team.points_p90 }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.table-wrap {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.season-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}

thead th {
  text-align: left;
  background: var(--color-background-soft);
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
  font-weight: 600;
  white-space: nowrap;
}

.sortable {
  cursor: pointer;
}

tbody td {
  padding: 0.7rem 0.75rem;
  border-bottom: 1px solid var(--color-border);
  white-space: nowrap;
}

tbody tr {
  cursor: pointer;
}

tbody tr:hover {
  background: var(--color-background-soft);
}

tbody tr.selected {
  background: rgba(22, 163, 74, 0.14);
}

.name {
  font-weight: 500;
}

@media (max-width: 720px) {
  .season-table {
    font-size: 0.85rem;
  }
}
</style>
