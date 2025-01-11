<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import TheHeader from './components/UI/TheHeader.vue';
import LandingPage from "./Pages/LandingPage/index.vue";
import LoginPage from './Pages/Auth/LoginPage.vue';
import RegisterPage from './Pages/Auth/RegisterPage.vue';
</script>

<template>
  <!-- <header>
    <TheHeader  />
  </header> -->
  <router-view />
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
