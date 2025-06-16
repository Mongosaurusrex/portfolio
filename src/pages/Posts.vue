<script lang="ts" setup>
import data from '@/data/config';
import BackToHome from '@/components/BackToHome.vue';
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <h1 class="site-title green">Recent blogposts</h1>

    <div class="posts">
      <router-link
        v-for="(post, index) in data.posts"
        :key="index"
        :to="`/blog/${post.id}`"
        class="post-card"
      >
        <h3 class="post-title green">
          {{ post.title }}
        </h3>
        <span class="post-date">{{ post.date }}</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 100%;
}

.site-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-card {
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.post-card:hover {
  background-color: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.post-title {
  margin: 0;
  font-size: 1.25rem;
}

.post-date {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  background-color: rgba(0, 255, 128, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: var(--color-green); 
}
</style>
