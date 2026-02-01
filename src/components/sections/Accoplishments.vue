<script setup>
import { ref, onMounted } from 'vue';
import { addVectorTileLayersMapbox } from '@/utils/addVectorTileLayers';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
import { useProjectStore } from '@/Stores/Projects';
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())
const { projectSelected } = storeToRefs(useProjectStore())


const map = ref(null);
const fontLoaded = ref(false);
onMounted(() => {
    document.fonts.load('1em "Material Symbols Outlined"').then(() => {
        fontLoaded.value = true;
    });
    // Instantiate the Mapbox map
    mapboxgl.accessToken = 'pk.eyJ1IjoibnV3ZWFyaWhvIiwiYSI6ImNtNzNjNmN5NTBmNTAyaXNleXRrcjFkM3YifQ.6SBI1OnVfs50STLtPiYMNQ';
    map.value = new mapboxgl.Map({
        container: 'map',
        center: [32.3, 1.5],
        zoom: 5.3,
        bearing: 0,
        pitch: 0,
        style: 'mapbox://styles/mapbox/streets-v12',
        // interactive: false,
        minZoom: 5.3,
        maxZoom: 20,
    });

    // Add map controls
    map.value.addControl(new mapboxgl.NavigationControl());
    map.value.addControl(new mapboxgl.ScaleControl({ position: 'bottom-left' }));
    map.value.addControl(new mapboxgl.FullscreenControl());

    // Add vector tile layers
    map.value.on('load', () => {
        addVectorTileLayersMapbox(map.value, 'Regions', '#0281f7', '#deefff');
    });

    map.value.on('load', () => {
  map.value.addLayer({
    id: '3d-buildings',
    source: 'composite',
    'source-layer': 'building',
    filter: ['==', 'extrude', 'true'],
    type: 'fill-extrusion',
    minzoom: 15,
    paint: {
      'fill-extrusion-color': '#aaa',
      'fill-extrusion-height': ['get', 'height'],
      'fill-extrusion-base': ['get', 'min_height'],
      'fill-extrusion-opacity': 0.6
    }
  });
});


    
    
});


// 0.32796357655926867, 32.61297762038232
function flyToPlace(direction) {
    map.value.flyTo({
      center: [32.61297762038232, 0.32796357655926867],
      zoom: 16,
      pitch: 60,
      essential: true
    });
  }


</script>

<template>
    <div class="accomplishment-container">
        <!-- ✅ Wrapper ensures map container is empty -->
        <div class="map-wrapper">
            <div id="map"></div>
            <div class="map-title">WORK HISTORY</div>
            <div class="action-buttons btn1">
                <div class="icondiv" @click="seePortifolio = true">
                    <span class="material-symbols-outlined" v-if="fontLoaded">keyboard_double_arrow_left</span>
                </div>
                Back
            </div>
            <div class="action-buttons btn2" @click="flyToPlace('next')">Next
                <div class="icondiv">
                    <span class="material-symbols-outlined " v-if="fontLoaded">keyboard_double_arrow_right</span>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.accomplishment-container {
    height: 30rem;
    position: relative;
    /* background-color: rgb(248, 252, 255); */
    /* border: 1px solid var(--theme-color); */
    display: flex;
    justify-content: center;
}

/* ✅ New wrapper for the map */
.map-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
}

#map {
    width: 100%;
    height: 100%;
    /* border-radius: 2rem; */
}

.map-title {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-weight: bold;
    color: #0281f7;
    font-size: 1.2rem;
}

.icondiv {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 2.2rem; */
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: width 0.2s ease, background-color 0.2s ease;
    box-sizing: border-box;
    color: aliceblue;
    /* border: 1px solid red; */
    /* background-color: var(--theme-color); */
}

.material-symbols-outlined{
    font-size: 1.5rem;
}

.action-buttons {
    position: absolute;
    z-index: 2;
    background-color: var(--theme-color);
    padding: 0.2rem 1rem;
    border-radius: 2rem;
    color: aliceblue;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.521), 0 0 10px rgba(0, 0, 0, 0.432);
    bottom: 1rem;
}

.btn1 {
    left: 1rem;
}

.btn2 {
    right: 1rem;
}

.cartography-text {
    width: 50%;
    word-break: break-word;
    overflow-wrap: break-word;
}

.heading {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.4rem;
    color: var(--text-secondary);
}

p b {
    font-size: inherit;
}
</style>