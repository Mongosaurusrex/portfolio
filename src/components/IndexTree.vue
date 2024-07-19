<script setup lang="ts">
import IndexItem from './IndexItem.vue';
</script>

<template>
  <IndexItem link="/work-experience">
    <template #icon>
      <v-icon scale="1.5" name="md-work" />
    </template>
    <template #heading>Work experience</template>
    Where have I been working and what have I been doing?
  </IndexItem>

  <IndexItem link="/passion-projects">
    <template #icon>
      <v-icon scale="1.5" name="fa-project-diagram" />
    </template>
    <template #heading>Passion projects</template>
    What have I been working on in my free time?
  </IndexItem>

  <IndexItem link="/certificates">
    <template #icon>
      <v-icon scale="1.5" name="la-certificate-solid" />
    </template>
    <template #heading>Certificates</template>
    What certificates have I earned and what skills do they represent?
  </IndexItem>

  <IndexItem link="/contact">
    <template #icon>
      <v-icon scale="1.5" name="md-contactpage" />
    </template>
    <template #heading>Contact</template>
    How can you reach me? What are my social media profiles?
  </IndexItem>
</template>
