<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import data from '@/data/config';
import BackToHome from '@/components/BackToHome.vue';
import AccomplishmentsItem from '@/components/AccomplishmentsItem.vue';
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <div>
      <h2 class="site-title green">Accomplishments</h2>
      <AccomplishmentsItem
        v-for="(certificate, index) in data.certificates"
        :key="index"
        :title="certificate.title"
        :link="certificate.link"
        :seat="certificate.seat"
        :date="certificate.date"
        :description="certificate.description"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}
.site-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
