<template>
  <div class="cafe-wrapper">
    <h2 class="title">{{ hasInfo(cafe.name) }}</h2>
    <div class="image-wrapper">
      <img :class="imageStyle" :src="hasImage" :alt="cafe.name" />
    </div>
    <p class="address"><span class="additional-title">Адрес: </span>{{ hasInfo(cafe.address) }}</p>
    <p class="landmark">
      <span class="additional-title">Как пройти: </span>{{ hasInfo(cafe.landmark) }}
    </p>
    <p class="cuisine"><span class="additional-title">Кухня: </span>{{ hasInfo(cafe.cuisine) }}</p>
    <p class="distance">
      <span class="additional-title">Расстояние: </span>{{ hasInfo(cafe.distance) }}
    </p>
    <p class="time"><span class="additional-title">Время: </span>{{ hasInfo(cafe.time) }}</p>
    <p :class="hasBusinessLunch">
      {{ hasBusinessLunch }}
    </p>
    <p class="price"><span class="additional-title">Стоимость: </span>{{ hasInfo(cafe.price) }}</p>
    <div class="share-button-wrapper">
      <a :href="shareLink" class="button" target="_blank">Здесь пообедаем! Поделиться в telegram</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { type ICafe } from '../../api/models/CafeInterface'
import placeholderPhoto from '../../assets/images/no-image.webp'

const cafeData = defineProps<{
  cafe: ICafe
}>()

const shareLink = ref(
  `https://telegram.me/share/url?url=${cafeData.cafe.address || 'Адрес посмотрим по пути'}&text=${
    cafeData.cafe.name
  }`
)

const hasBusinessLunch = computed(() =>
  cafeData.cafe.business_lunch ? 'Есть бизнес-ланч' : 'А бизнес-ланча тут нет :('
)
const hasImage = computed(() => cafeData.cafe.photo || placeholderPhoto)
const imageStyle = computed(() => (cafeData.cafe.photo ? 'has-photo' : 'photo-placeholder'))

function hasInfo(info: string | number) {
  return info || 'Информация отсутствует'
}
</script>
<style scoped>
.cafe-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 32px;
  box-shadow: 0 0 24px rgba(49, 49, 49, 0.28);
}

.title {
  margin: 0 auto;
  text-align: center;
  max-width: 80%;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
}

.additional-title {
  font-weight: 700;
  color: #dd2413;
}

.image-wrapper {
  height: 250px;
}

.has-photo {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: contain;
}

.price {
  margin-bottom: 20px;
}

.share-button-wrapper {
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0 20px 0;
}
</style>
