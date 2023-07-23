<template>
  <div class="button-wrapper">
    <button @click="showPopup" class="button">Пусть мне повезет!</button>
  </div>
  <div
    v-if="popupVisible"
    class="popup"
    :class="{ visible: popupVisible }"
    @click.self="hidePopup()"
  >
    <div class="popup-content">
      <button class="close-button" type="button" aria-label="Close" @click="hidePopup()">
        <span aria-hidden="true">×</span>
      </button>
      <div class="cafe-wrapper">
        <CafeItem :cafe="randomCafe" :key="randomCafe.id" />
      </div>
      <div class="button-control-wrapper">
        <button class="button" @click="getAnotherCafe">Не хочу сюда, давай выберем заново!</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CafeItem from '@/components/Cafe/CafeItem.vue'
import { useCafesStore } from '@/stores/cafeData'
import type { ICafe } from '@/api/models/CafeInterface'

const initialCafe = {
  id: 0,
  name: '',
  address: '',
  landmark: '',
  cuisine: '',
  distance: 0,
  time: 0,
  photo: '',
  business_lunch: false,
  price: 0
}

const store = useCafesStore()
const MAX_NUMBER = store.cafes!.data!.length - 1
const getRandomNumber = (max: number) => {
  let rand = Math.random() * (max + 1)
  const result = Math.floor(rand)
  console.log(result)

  return result
}
const getRandomCafe = (): ICafe => {
  const randomNumber = getRandomNumber(MAX_NUMBER)
  const cafe: ICafe | null | undefined = store.cafes!.data![randomNumber]
  if (randomCafe.value) return cafe
  return initialCafe
}

const randomCafe = ref<ICafe>(initialCafe)

const popupVisible = ref(false)

const showPopup = () => {
  popupVisible.value = true
  randomCafe.value = getRandomCafe()
  document.body.classList.add('freeze')
}

const hidePopup = () => {
  popupVisible.value = false
  document.body.classList.remove('freeze')
}

const getAnotherCafe = () => (randomCafe.value = getRandomCafe())
</script>

<style scoped>
.button-wrapper {
  text-align: center;
  margin-bottom: 1rem;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.popup-content {
  background-color: white;
  border-radius: 36px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: scroll;
  position: relative;
}

.close-button {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-15px, 15px);
  color: #fff;
  background-color: #db4242;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease;
}

.close-button:hover {
  background-color: #46bed7;
  box-shadow: 0 4px 4px rgba(15, 40, 77, 0.25);
}

.popup.visible {
  transition: opacity 0.3s ease;
  opacity: 1;
}

.cafe-wrapper {
  margin-bottom: 20px;
}

.button-control-wrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  margin-bottom: 20px;
}

.button-control-wrapper button {
  margin-bottom: 20px;
}
</style>
