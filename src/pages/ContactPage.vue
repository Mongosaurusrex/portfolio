<script lang="ts" setup>
import BackToHome from '../components/BackToHome.vue';
</script>

<template>
  <div class="wrapper">
    <BackToHome />
    <div class="main">
      <div class="item">
        <a href="https://github.com/mongosaurusrex" target="_blank">
          <v-icon scale="7 " name="bi-github" />
        </a>
      </div>
      <div class="item">
        <a href="https://www.linkedin.com/in/nathan-dygant-8178159b/" target="_blank">
          <v-icon scale="7 " name="bi-linkedin" />
        </a>
      </div>
      <div class="item">
        <a href="https://medium.com/@mongosaurusrex" target="_blank">
          <v-icon scale="7 " name="bi-medium" />
        </a>
      </div>
      <div class="item">
        <a href="mailto:nathan.dygant@gmail.com" target="_blank">
          <v-icon scale="7 " name="md-email" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 100%;
}
.wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>
