<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink to="/" class="back-to-home">
    <v-icon class="back-arrow" name="bi-arrow-left-square-fill" />
    <span>Back to Home</span>
  </RouterLink>
</template>

<style scoped>
.back-to-home {
  display: inline-flex;
  align-items: center;

  padding: 1.5rem 0;

  color: var(--color-text);
  font-size: 1.1rem;
  text-decoration: none; /* 👈 important */

  transition: color 0.15s ease;
}

.back-to-home:hover {
  color: #42b883; /* subtle hover instead of weird artifacts */
}

.back-arrow {
  font-size: 1.3rem;
  margin-right: 0.5rem;
}
</style>
