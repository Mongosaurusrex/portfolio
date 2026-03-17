<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MatchCard from '../components/MatchCard.vue';
import BackToHome from '../components/BackToHome.vue';

const predictions = ref<any[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await fetch(
      'https://mongosaurusrex.github.io/allsvenskan-predictor/predictions.json'
    );

    predictions.value = await res.json();
  } catch (e: any) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="divider">
    <BackToHome />
    <header>
      <div class="wrapper">
        <div class="greetings">
          <h1 class="green">Football Predictions</h1>
          <p class="subheading">
            Predictions are derived from a Bayesian Poisson model fitted on historical matches.
            Team-specific attack and defense parameters are inferred via MCMC, and outcome
            probabilities are computed from the resulting goal distributions.
          </p>
          <a
            href="https://github.com/mongosaurusrex/allsvenskan-predictor"
            target="_blank"
            rel="noopener"
            class="repo-link"
          >
            Learn more here →
          </a>
        </div>
      </div>
    </header>

    <main>
      <div v-if="loading">Loading...</div>
      <div v-if="error">Error: {{ error }}</div>

      <MatchCard v-for="m in predictions" :key="m.home_team + m.away_team" :match="m" />
    </main>
  </div>
</template>

<style>
.subheading {
  max-width: 700px;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #888;
  font-size: 0.95rem;
  line-height: 1.5;
}

.repo-link {
  display: inline-block;
  margin-top: 0.4rem;
  color: #42b883; /* Vue green — fits your theme */
  text-decoration: none;
  font-weight: 500;
}

.repo-link:hover {
  text-decoration: underline;
}
</style>
