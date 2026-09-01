<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import config from '@/data/config';

const route = useRoute();

const title = computed(() => (route.meta.title as string) ?? config.defaultTitle);
const description = computed(
  () => (route.meta.description as string) ?? config.defaultDescription
);
const canonicalUrl = computed(() => `${config.url}${route.path}`);

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'author', content: config.author },
    { name: 'theme-color', content: config.themeColor },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: config.logo },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: config.logo }
  ],
  link: [{ rel: 'canonical', href: canonicalUrl }]
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
