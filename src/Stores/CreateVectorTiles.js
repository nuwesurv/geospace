import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCreateVectorTilesStore = defineStore('vectorTile', () => {
  const inputVectorDataSet = ref('')

  return { inputVectorDataSet }
})
