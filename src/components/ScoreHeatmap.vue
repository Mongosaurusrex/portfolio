<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  scoreline_probs: Record<string, number>
}>()

// limit grid size
const MAX_GOALS = 5

// build matrix
const matrix = computed(() => {

  const grid: number[][] = []

  for (let h = 0; h <= MAX_GOALS; h++) {
    const row: number[] = []

    for (let a = 0; a <= MAX_GOALS; a++) {

      const key = `${h}-${a}`
      row.push(props.scoreline_probs[key] ?? 0)

    }

    grid.push(row)
  }

  return grid
})

// normalize for coloring
const maxProb = computed(() => {
  return Math.max(...Object.values(props.scoreline_probs))
})

function opacity(v: number) {
  if (maxProb.value === 0) return 0
  return v / maxProb.value
}

function percent(v: number) {
  return (v * 100).toFixed(1)
}
</script>

<template>

<div class="heatmap">

  <!-- header -->
  <div class="row header">
    <div></div>
    <div v-for="a in 6" :key="a">{{ a-1 }}</div>
  </div>

  <!-- rows -->
  <div
    v-for="(row, h) in matrix"
    :key="h"
    class="row"
  >
    <div class="label">{{ h }}</div>

    <div
      v-for="(cell, a) in row"
      :key="a"
      class="cell"
      :style="{ backgroundColor: `rgba(34,197,94, ${opacity(cell)})` }"
      :title="percent(cell) + '%'"
    >
    </div>

  </div>

</div>

</template>

<style scoped>

.heatmap {
  margin-top: 0.8rem;
  display: inline-block;
}

.row {
  display: grid;
  grid-template-columns: 20px repeat(6, 24px);
  gap: 4px;
  align-items: center;
}

.header {
  margin-bottom: 4px;
}

.label {
  font-size: 0.8rem;
  text-align: right;
  padding-right: 4px;
}

.cell {
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: #eee;
}

</style>
