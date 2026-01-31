<script setup>
import { ref, onMounted } from 'vue';
import { addVectorTileLayersMapbox } from '@/utils/addVectorTileLayers';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
import { useProjectStore } from '@/Stores/Projects';
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())
const { projectSelected } = storeToRefs(useProjectStore())


</script>

<template>
  <div class="cartography-section" v-if="projectSelected==='3dmodelling'">
    <div class="positioning-div">
      <div class="cartography-text">
        <p class="heading">3D Modelling</p>
        <p>
          I use blender for 3d Modelling in most tasks
        </p>
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
  background-color: var(--background-primary);
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
