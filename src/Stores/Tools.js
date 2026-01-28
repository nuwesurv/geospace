import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToolsStore = defineStore('tools', () => {
  const tools = ref({
    create_vector_tiles: 'Create Vector Tiles',
    qgis_plugin: 'QGIS Plugins',
    // vector_clean: 'Vector Data clean',
    // auto_subdivide: 'Automated lot Subdivision',
    // create_contours: 'Generate contours',
    // terrain_analysis: 'Terrain Analysis',
  })
  const toolSelected = ref('create_vector_tiles')

  return { tools, toolSelected }
})
