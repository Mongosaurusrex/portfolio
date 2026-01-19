<script setup lang="ts">
defineProps<{
  title: string;
  institution: string;
  date: string;
  description: string;
  link: string;
  includedCourses: {
    id: string;
    label: string;
  }[];
}>();

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  el.classList.add('highlight');
  setTimeout(() => el.classList.remove('highlight'), 1200);
};
</script>

<template>
  <div class="academic-item">
    <h2 class="title green">{{ title }}</h2>
    <h3 class="institution">{{ institution }}</h3>
    <p class="date">Issue date: {{ date }}</p>
    <p class="description">
      {{ description }}
    </p>
    <a v-if="link" class="link" :href="link" target="_blank"><h3>View Certificate</h3></a>
    <div class="included-courses">
      <span class="label">Included courses:</span>
      <button
        v-for="course in includedCourses"
        :key="course.id"
        class="course-link"
        @click="scrollTo(course.id)"
      >
        {{ course.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.academic-item {
  border-left: 4px solid var(--color-accent);
  padding-left: 1.5rem;
  margin: 2rem;
  max-width: 900px;
}

.title {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.institution {
  font-size: 1.25rem;
  color: var(--color-heading);
  margin-bottom: 0.25rem;
}

.date {
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 1rem;
  opacity: 0.85;
}

.description {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.included-courses {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.label {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-right: 0.5rem;
}

.course-link {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.95rem;
  cursor: pointer;
  color: var(--color-heading);
  text-decoration: underline;
}

.course-link:hover {
  opacity: 0.75;
}

:global(.highlight) {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.6s ease;
}
a {
  font-size: 1rem;
  text-decoration: none;
  color: var(--color-heading);
  padding: 0;
}
</style>
