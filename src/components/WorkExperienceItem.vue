<script setup lang="ts">
const { jobTitle, link, company, dateRange, description, buzzwords } = defineProps<{
  jobTitle: string;
  link: string;
  company: string;
  dateRange: string;
  description: string;
  buzzwords: string;
}>();
</script>

<template>
  <div>
    <h3 class="job-title">{{ jobTitle }}</h3>
    <a class="company" :href="link" target="_blank" rel="noopener noreferrer">
      <h4>{{ company }}</h4>
    </a>
    <p class="date">{{ dateRange }}</p>
    <p class="description">{{ description }}</p>
    <p class="buzzwords"><span class="green">Buzzwords:</span> {{ buzzwords }}</p>
    <hr />
  </div>
</template>

<style scoped>
.job-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}
.company {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
  padding: 0;
}

.company:hover {
  background-color: none;
  text-decoration: underline;
}
.date {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}
.description {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.buzzwords {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.buzzwords > span {
  font-weight: 500;
}
hr {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
