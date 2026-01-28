<script setup>
import { onMounted, ref, watch } from 'vue';
import CreateVectorTilePanel from './CreateVectorTilePanel.vue';
import { storeToRefs } from 'pinia';
import { useToolsStore } from '@/Stores/Tools';


const { tools, toolSelected } = storeToRefs(useToolsStore())
let map = ref(null)


function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibnV3ZWFyaWhvIiwiYSI6ImNtNzNjNmN5NTBmNTAyaXNleXRrcjFkM3YifQ.6SBI1OnVfs50STLtPiYMNQ';
  map.value = new mapboxgl.Map({
    container: 'map',
    center: [32.3, 1],
    zoom: 7,
    style: 'mapbox://styles/mapbox/streets-v12',
    minZoom: 5.3,
    maxZoom: 20,
  });
}

onMounted(() => {
  if (toolSelected.value === 'create_vector_tiles') {
    initMap();
  }
});

watch(toolSelected, (val) => {
  if (val === 'create_vector_tiles') {
    // Delay a tick to ensure DOM exists
    setTimeout(() => {
      initMap();
    }, 50);
  } else if (map.value) {
    map.value.remove();
    map.value = null;
  }
});





</script>

<template>
    <div class="workspace">
        <div class="create-vector-tiles" v-if="toolSelected==='create_vector_tiles'">
            <div id="map"></div>
            <CreateVectorTilePanel/>
        </div>

        <div class="qgis-plugins">

        </div>
    </div>


</template>

<style scoped>
.workspace{
    flex: 1;
    height: 100%;
    /* border: 1px solid purple; */
    position: relative;
}
.create-vector-tiles {
    width: 100%;
    height: 100%;
    /* border: 1px solid purple; */
}
#map {
    width: 100%;
    height: 100%;
    /* border: 1px solid purple; */
}
</style>