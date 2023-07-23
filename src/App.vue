<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import LogoView from '@/components/Logo/LogoView.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <LogoView />
      <h1 class="title">И куда же мы отправимся покушать сегодня, ммм?</h1>
    </div>
  </header>

  <HomeView />
  <footer class="footer"></footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 20px 0 20px 0;
}

.wrapper {
  text-align: center;
}

@media (max-width: 1024px) {
  header {
    line-height: 1.5;
    padding-top: 0;
    padding-bottom: 1rem;
  }
  .title {
    font-size: 1.5rem;
  }
}
</style>
