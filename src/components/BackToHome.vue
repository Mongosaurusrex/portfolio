<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink to="/">
    <div class="back-to-home">
      <v-icon class="back-arrow" name="bi-arrow-left-square-fill" />
      <span>Back to Home</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.back-arrow {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}
.back-to-home {
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
