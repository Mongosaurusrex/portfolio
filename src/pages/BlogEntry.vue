<script setup lang="ts">
import { useRoute } from 'vue-router';
import { NotionRenderer, getPageBlocks, useGetPageBlocks } from 'vue3-notion';
import { ref, onMounted } from 'vue';
import BackToHome from '@/components/BackToHome.vue';

const data = ref();
const route = useRoute();

onMounted(async () => {
  const id = route.params.id;
  data.value = await getPageBlocks(id);
});
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <NotionRenderer v-if="data" :blockMap="data" fullPage />
  </div>
</template>

<style>
@import 'vue3-notion/dist/style.css';

.wrapper {
  width: 100%;
  flex-direction: column;
  display: flex;
}

.notion {
  color: white;
}

.notion-title span > b > span {
  color: hsla(160, 100%, 37%, 1) !important;
}

.notion-title span > span {
  color: hsla(160, 100%, 37%, 1) !important;
}

.notion-h2{
  color: hsla(160, 100%, 37%, 1) !important;
}
</style>
