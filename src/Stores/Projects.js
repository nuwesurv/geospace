import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projects', () => {
  const projectSelected = ref('web-mapping')

  return { projectSelected }
})
