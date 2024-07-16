<script setup lang="ts">
import BackToHome from '../components/BackToHome.vue';
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <div class="under-construction">
      <h1 class="green"><v-icon scale="3" name="gi-crane" />Under Construction</h1>
      <p>This page is under construction. Please check back later.</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
h1 svg {
  font-size: 2rem;
  margin-right: 0.5rem;
}
</style>
