<script setup lang="ts">
import BackToHome from '@/components/BackToHome.vue';
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <div class="under-construction">
      <h1 class="green"><v-icon scale="3" name="gi-crane" />Under Construction</h1>
      <p class="teaser">
        abacusLLM is my own LLM project built from scratch. This portfolio page is a placeholder
        until the model and hosting setup are ready for release.
      </p>
      <p class="teaser">
        Follow development here:
        <a
          href="https://github.com/Mongosaurusrex/abacus-llm"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Mongosaurusrex/abacus-llm
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.75rem 0 2.5rem;
}

.under-construction {
  max-width: 760px;
  padding: 0.75rem 0 0.5rem;
}

.under-construction h1 {
  margin-bottom: 1.25rem;
}

h1 svg {
  font-size: 2rem;
  margin-right: 0.5rem;
}

.status {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.teaser {
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

@media (min-width: 768px) {
  .wrapper {
    padding-top: 1.5rem;
  }

  .under-construction {
    padding-top: 1.5rem;
  }
}
</style>
