<script setup lang="ts">
import { useHead } from '@unhead/vue';
import BackToHome from '@/components/BackToHome.vue';

useHead({ meta: [{ name: 'robots', content: 'noindex' }] });
</script>

<template>
  <div class="game-page">
    <BackToHome />
    <h1 class="green">DX-Ball</h1>
    <iframe
      src="https://dx-ball.ru/iframe.html"
      width="640"
      height="480"
      allow="fullscreen; autoplay"
      title="DX-Ball"
    ></iframe>
    <p><a href="https://dx-ball.ru/en/">Play DX-Ball online</a></p>
  </div>
</template>

<style scoped>
.game-page {
  width: min(640px, 100%);
}

iframe {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  border: 0;
}
</style>
