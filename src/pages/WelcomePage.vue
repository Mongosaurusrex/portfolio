<script setup lang="ts">
import IndexTree from '../components/IndexTree.vue';
</script>

<template>
  <header>
    <img alt="avatar" class="avatar" src="../assets/avatar.jpg" width="125" height="125" />
    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Hello, I'm Nathan!</h1>
        <h3>
          As a data engineer and software developer with a passion for data science and machine
          learning, I am dedicated to leverage data-driven methodologies to solve real-world
          problems and drive impactful decision-making.
        </h3>
      </div>
    </div>
  </header>
  <main>
    <IndexTree />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.avatar {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 100%;
  height: 150px;
  width: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .avatar {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
