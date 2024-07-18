<script setup lang="ts">
import BackToHome from '../components/BackToHome.vue';
import PassionProjectItem from '../components/PassionProjectItem.vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_PINNED_REPOS } from '../data/github';

const { result, loading, error } = useQuery(GET_PINNED_REPOS);
console.log(result);
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <div>
      <div v-if="loading" class="loader">
        <v-icon scale="3" class="green spinner" name="pr-spinner" />
      </div>
      <div v-else-if="error" class="error">
        <h1 class="green">Error fetching data</h1>
        <p>{{ error.message }}</p>
      </div>
      <div v-else>
        <h1 class="green title">Passion Projects</h1>
        <PassionProjectItem
          :name="repo.name"
          :url="repo.url"
          :description="repo.description"
          v-for="repo in result?.user?.pinnedItems?.nodes"
          :key="repo.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.loader {
  display: flex;
  place-content: center;
  margin-top: 2rem;
  width: 100%;
}

.spinner {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
