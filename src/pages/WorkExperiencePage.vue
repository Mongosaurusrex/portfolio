<script setup lang="ts">
import data from '../data/config';
import BackToHome from '../components/BackToHome.vue';
import WorkExperienceItem from '../components/WorkExperienceItem.vue';
</script>

<script lang="ts">
export default {
  beforeMount() {
    const element = document.getElementById('app');
    if (element) {
      element.style.display = 'block';
    }
  },
  unmounted() {
    const element = document.getElementById('app');
    if (element) {
      element.style.display = 'grid';
    }
  }
};
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <div class="work-experience">
      <h2 class="site-title green">Work Experience</h2>
      <WorkExperienceItem
        v-for="(experience, index) in data.experiences"
        :key="index"
        :jobTitle="experience.jobTitle"
        :link="experience.link"
        :company="experience.company"
        :dateRange="experience.dateRange"
        :description="experience.description"
        :buzzwords="experience.buzzwords"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.work-experience {
  margin-top: 2rem;
}
.site-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
