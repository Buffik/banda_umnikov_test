<template>
  <div>
    <h2 class="title">{{ cafe.name }}</h2>
    <img class="photo" :src="cafe.photo" :alt="cafe.name" />
    <p class="address">{{ cafe.address }}</p>
    <p class="landmark">{{ cafe.landmark }}</p>
    <p class="cuisine">{{ cafe.cuisine }}</p>
    <p class="distance">{{ cafe.distance }}</p>
    <p class="time">{{ cafe.time }}</p>
    <p :class="hasBusinessLunch">
      {{ cafe.business_lunch ? 'Есть бизнес-ланч' : 'А бизнес-ланча тут нет :(' }}
    </p>
    <p class="price">{{ cafe.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type ICafe } from '../../api/models/CafeInterface'

const cafeData = defineProps<{
  cafe: ICafe
}>()

const hasBusinessLunch = computed(() => (cafeData.cafe.business_lunch ? 'hasLunch' : 'noLunch'))
</script>
<style></style>
