import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projects', () => {
  const projectSelected = ref('vector-tiles')

  return { projectSelected }
})
