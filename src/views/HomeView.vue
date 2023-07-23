<template>
  <main class="wrapper">
    <LoaderItem v-if="!store.cafesLoaded" />
    <CafeItem v-else v-for="cafe in store.cafes?.data" :key="cafe.id" :cafe="cafe" />
  </main>
</template>
<script setup lang="ts">
import LoaderItem from '@/components/Loader/LoaderItem.vue'
import CafeItem from '@/components/Cafe/CafeItem.vue'
import { useCafesStore } from '@/stores/cafeData'

const store = useCafesStore()
store.fetchCafes()
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.5%;
  column-gap: 2%;
}

@media (max-width: 1025px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
    row-gap: 0.5%;
    column-gap: 2%;
  }
}

@media (max-width: 600px) {
  .wrapper {
    grid-template-columns: 1fr;
    row-gap: 0.5%;
    column-gap: 2%;
  }
}
</style>
