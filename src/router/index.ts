import { createRouter, createWebHistory } from 'vue-router'
import CafeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CafeView
    },
    {
      path: '/cafe/:id',
      name: 'cafe',
      component: () => import('../views/CafeView.vue')
    }
  ]
})

export default router
