<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import data from '@/data/config';
import BackToHome from '@/components/BackToHome.vue';
import CourseItem from '@/components/CourseItem.vue';
import AcademicCredentialItem from '@/components/AcademicCredentialItem.vue';
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <h2 class="site-title green">Accomplishments</h2>
    <h3 class="section-title">Academic Programs</h3>
    <AcademicCredentialItem
      v-for="program in data.academic"
      :key="program.title"
      v-bind="program"
    />
    <hr class="divider green" />
    <h3 class="section-title">Courses & Certificates</h3>
    <CourseItem
      v-for="course in data.certificates"
      :key="course.title"
      v-bind="course"
    />
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
.section-title {
  font-size: 1.6rem;
  margin: 1.5rem 0 0.5rem;
  color: var(--color-heading);
}

.divider {
  color: var(--color-heading);
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}
</style>
