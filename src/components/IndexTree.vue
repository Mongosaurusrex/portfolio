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

  <IndexItem link="/certificates">
    <template #icon>
      <v-icon scale="1.5" name="la-certificate-solid" />
    </template>
    <template #heading>Certificates</template>
    What certificates have I earned and what skills do they represent?
  </IndexItem>

  <IndexItem link="/allsvenskan-predictions">
    <template #icon>
      <v-icon scale="1.5" name="io-football" />
    </template>
    <template #heading>Football predictions</template>
    Probabilistic forecasts for upcoming Allsvenskan matches and season outcomes.
  </IndexItem>

  <IndexItem link="/knowledge-engine">
    <template #icon>
      <v-icon scale="1.5" name="la-brain-solid" />
    </template>
    <template #heading>Knowledge Engine</template>
    A future home for retrieval-augmented workflows and applied experiments.
  </IndexItem>
</template>
