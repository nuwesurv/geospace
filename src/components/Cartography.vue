<script setup>
import { ref, onMounted } from 'vue';
import { addVectorTileLayersMapbox } from '@/utils/addVectorTileLayers';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
import { useProjectStore } from '@/Stores/Projects';
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())
const { projectSelected } = storeToRefs(useProjectStore())


const map = ref(null);

onMounted(() => {
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
  <div class="cartography-section" v-if="projectSelected==='web-mapping'">
    <div class="positioning-div">
      <div class="cartography-text">
        <h2>CARTOGRAPHY</h2>
        <p>
          This map visualizes Uganda’s regions using <b>vector tiles</b>.
          <br /><br />
          By leveraging vector tiles, the map loads quickly and handles
          <b>large datasets efficiently</b>, highlighting my focus on optimized workflows and modern GIS techniques.
        </p>
      </div>

      <!-- ✅ Wrapper ensures map container is empty -->
      <div class="map-wrapper">
        <div id="map"></div>
        <div class="map-title">A UGANDA REGIONAL MAP</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cartography-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 2rem 0;
  background-color: rgb(249, 249, 249);
}

.positioning-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 95%;
  height: auto;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.205);
  position: relative;
  background-color: white;
}

/* ✅ New wrapper for the map */
.map-wrapper {
  position: relative;
  width: 70%;
  height: 65dvh;
  border-radius: 2rem;
}

#map {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
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

.cartography-text {
  width: 50%;
  word-break: break-word;
  overflow-wrap: break-word;
}

h2 {
  font-size: 3rem;
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

/* 📱 Mobile responsiveness */
@media (max-width: 700px) {
  .positioning-div {
    flex-direction: column;
    width: 95%;
    height: auto;
    padding: 1rem;
    gap: 1.5rem;
    border-radius: 1rem;
  }

  .map-wrapper {
    width: 100%;
    height: 60dvh;
  }

  .cartography-text {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    word-break: break-word;
  }

  .map-title {
    font-size: 1rem;
  }
}
</style>
