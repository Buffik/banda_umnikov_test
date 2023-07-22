<template>
  <main>
    <h1>И куда же мы отправимся покушать сегодня, ммм?</h1>
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
console.log(store)
</script>
