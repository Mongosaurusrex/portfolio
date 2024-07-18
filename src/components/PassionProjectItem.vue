<script setup lang="ts">
const { name, url, description } = defineProps<{
  name: string;
  url: string;
  description: string;
}>();
</script>

<template>
  <div class="wrapper">
    <a class="link" :href="url" target="_blank">
      <h2 class="title">{{ name }}</h2>
      <p class="description">{{ description }}</p>
    </a>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 1px solid var(--color-border);
  /*A little rounded edges */
  border-radius: 0.5rem;
  padding: 1rem;
}
.link {
  text-decoration: none;
  color: var(--color-heading);
}
.title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}
.description {
  font-size: 1rem;
  color: var(--color-text);
}
</style>
