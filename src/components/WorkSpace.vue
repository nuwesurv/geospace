<script setup>
import { onMounted, ref, watch, nextTick } from 'vue';
// import CreateVectorTilePanel from './CreateVectorTilePanel.vue';
import { storeToRefs } from 'pinia';
import { useProjectStore } from '@/Stores/Projects';
import Sidebar from './Sidebar.vue';
import { useNavbarStore } from '@/Stores/NavBar';
import ProjectManagement from './ProjectManagement.vue';
import Cartography from '@/components/Cartography.vue';


const { projectSelected } = storeToRefs(useProjectStore())
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())

// let map = ref(null)
// const fontLoaded = ref(false);
// onMounted(() => {
//   // Teleza fallback fonts icons.
//   document.fonts.load('1em "Material Symbols Outlined"').then(() => {
//     fontLoaded.value = true;
//   });

//   // Instantiate the mapboxgl object.
//  mapboxgl.accessToken = 'pk.eyJ1IjoibnV3ZWFyaWhvIiwiYSI6ImNtNzNjNmN5NTBmNTAyaXNleXRrcjFkM3YifQ.6SBI1OnVfs50STLtPiYMNQ';
//   map.value = new mapboxgl.Map({
//     container: 'map',
//     center: [32.3, 1],
//     zoom: 7,
//     style: 'mapbox://styles/mapbox/streets-v12',
//     minZoom: 5.3,
//     maxZoom: 20,
//   });

// })


</script>

<template>
    <div class="workspace" v-if="!seePortifolio" >
        <Sidebar />
        <div class="create-vector-tiles" v-if="projectSelected === 'vector-tiles'">
            <div id="map"></div>
        </div>
        <ProjectManagement />
        <Cartography />
    </div>

</template>

<style scoped>
.workspace {
    flex: 1;
    max-height: fit-content;
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