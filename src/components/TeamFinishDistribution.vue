<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  positionProbs: Record<string, number>
}>()

const ordered = computed(() => {
  return Object.entries(props.positionProbs)
    .map(([position, probability]) => ({
      position: Number(position),
      probability
    }))
    .sort((a, b) => a.position - b.position)
})

const maxProbability = computed(() => {
  if (!ordered.value.length) return 0
  return Math.max(...ordered.value.map((entry) => entry.probability))
})

function width(probability: number) {
  if (maxProbability.value === 0) return '0%'
  return `${(probability / maxProbability.value) * 100}%`
}

function percent(probability: number) {
  return `${(probability * 100).toFixed(1)}%`
}

function bucketClass(position: number) {
  if (position === 1) return 'champion'
  if (position <= 3) return 'top3'
  if (position >= 14) return 'relegation'
  return 'mid'
}
</script>

<template>
  <section class="distribution">
    <div v-for="entry in ordered" :key="entry.position" class="line">
      <span class="position">{{ entry.position }}</span>
      <div class="track">
        <div class="fill" :class="bucketClass(entry.position)" :style="{ width: width(entry.probability) }"></div>
      </div>
      <span class="value">{{ percent(entry.probability) }}</span>
    </div>
  </section>
</template>

<style scoped>
.distribution {
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
}

.line {
  display: grid;
  grid-template-columns: 28px 1fr 56px;
  gap: 0.5rem;
  align-items: center;
}

.position {
  font-size: 0.85rem;
  color: #6b7280;
  text-align: right;
}

.track {
  height: 10px;
  border-radius: 999px;
  background: var(--color-background-mute);
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 999px;
}

.fill.champion {
  background: #f59e0b;
}

.fill.top3 {
  background: #16a34a;
}

.fill.mid {
  background: #64748b;
}

.fill.relegation {
  background: #dc2626;
}

.value {
  font-size: 0.83rem;
  color: #6b7280;
  text-align: right;
}
</style>
