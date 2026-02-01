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
        interactive: true,
        minZoom: 5.3,
        maxZoom: 6,
    });

    // Add map controls
    map.value.addControl(new mapboxgl.NavigationControl());
    map.value.addControl(new mapboxgl.ScaleControl({ position: 'bottom-left' }));
    map.value.addControl(new mapboxgl.FullscreenControl());

    // Add vector tile layers
    map.value.on('load', () => {
        addVectorTileLayersMapbox(map.value, 'Regions', '#0281f7', '#deefff');
    });

    // Popup for hover
    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });

    map.value.on('mousemove', 'layer-fill', (e) => {
        if (e.features.length > 0) {
            const feature = e.features[0];
            const coordinates = e.lngLat;

            const properties = Object.entries(feature.properties)
                .map(([k, v]) => `<strong>${k}</strong>: ${v}`)
                .join('<br>');

            popup
                .setLngLat(coordinates)
                .setHTML(`<div style="font-size:12px;">${properties}</div>`)
                .addTo(map.value);

            map.value.setFilter('layer-outline-hover', [
                '==',
                ['get', 'ADM1_EN'],
                feature.properties.ADM1_EN || '',
            ]);
        }
    });

    map.value.on('mouseleave', 'layer-fill', () => {
        popup.remove();
        map.value.setFilter('layer-outline-hover', ['==', ['get', 'ADM1_EN'], '']);
    });
});
</script>

<template>
    <div class="accomplishment-container">
        <!-- ✅ Wrapper ensures map container is empty -->
        <div class="map-wrapper">
            <div id="map"></div>
            <div class="map-title">WORK HISTORY</div>
            <div class="action-buttons btn1">
                <div class="icondiv" @click="seePortifolio = true">
                    <span class="material-symbols-outlined icon1" v-if="fontLoaded">arrow_back</span>
                </div>
                Back
            </div>
            <div class="action-buttons btn2">Next
                <div class="icondiv">
                    <span class="material-symbols-outlined forwardarrow" v-if="fontLoaded">arrow_forward</span>
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
    width: 2.2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: width 0.2s ease, background-color 0.2s ease;
    box-sizing: border-box;
    color: aliceblue;
    background-color: var(--theme-color);
}


.icon1 {
    font-size: 1.45rem;
    font-weight: 600;
}

.icon2 {
    font-size: 1.6rem;
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
    gap: 0.5rem;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.521), 0 0 10px rgba(0, 0, 0, 0.432);
}

.btn1 {
    bottom: 1rem;
    left: 1rem;
}

.btn2 {
    bottom: 1rem;
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