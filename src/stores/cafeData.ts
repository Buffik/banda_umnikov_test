import { defineStore } from 'pinia'
import { type ICafe } from '../api/models/CafeInterface'
import getAllCafes from '@/api/requests/getAllCafes'

export type ICafes = {
  data: ICafe[] | null
}

export interface IFetchedData {
  cafes: ICafes | null
}

export const useCafesStore = defineStore({
  id: 'Cafe',
  state: () =>
    ({
      cafes: null
    } as IFetchedData),
  getters: {
    cafesLoaded: (state) => state.cafes !== null
  },
  actions: {
    async fetchCafes(): Promise<void> {
      const { data } = await getAllCafes.get()
      console.log(data)
      if (data) this.cafes = data
    }
  }
})
