<script setup lang="ts">
import { RouterLink } from 'vue-router';

const { link = '/' } = defineProps<{
  id?: string;
  title: string;
  seat: string;
  description: string;
  date: string;
  link: string;
}>();
</script>

<template>
  <div class="item" :id="id">
    <h2 class="title green">{{ title }}</h2>
    <h3 class="seat">{{ seat }}</h3>
    <p class="date">Issue date: {{ date }}</p>
    <p class="description">{{ description }}</p>
    <a class="link" :href="link" target="_blank"><h3>View Certificate</h3></a>
  </div>
</template>

<style scoped>
.item {
  padding-left: 1.5rem;
  margin: 2rem;
  max-width: 900px;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.seat {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: var(--color-heading);
}

.date {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-style: italic;
}

.description {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

a {
  font-size: 1rem;
  text-decoration: none;
  color: var(--color-heading);
  padding: 0;
}
</style>
