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
  <div class="cartography-section" v-if="projectSelected === 'software' || seePortifolio">
    <div class="heading">What my References say?</div>
    <div class="positioning-div">
      <div class="map-info-card">

        <div class="card-header">
          <div class="image-div">
            <img src="@/assets/ig.webp" />
          </div>

          <div class="header-details">
            <h3>RSU Ignatious Tumukunde</h3>
            <p>I&G Co-founder</p>
            <p>NSA Mall, Kiwatule</p>
          </div>
        </div>

        <div class="card-body">
          <p>
            I got the opportunity to work on land acquisition projects where I gained skills in the field of
            mapping and spatial data management on a large scale.
            <br><br>
            It's at this time I got interested in GIS mapping softwares like QGIS.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>


<style scoped>
.cartography-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  height: auto;
  padding: 1.2rem 0;
  background-color: rgb(231, 255, 231);
  /* background-color: var(--background-primary); */
  color: var(--theme-color);
}


.positioning-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 95%;
  border-radius: 2rem;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.205); */
  /* border: 1px solid green; */
  height: auto;
}


/* ===============================
   MAP INFO CARD
   =============================== */

.map-info-card {
  /* height: 30dvh; */
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  font-family: Arial, sans-serif;
}


/* ===============================
   HEADER
   =============================== */

.card-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 0.5rem;
  margin-bottom: 0.6rem;
}

/* image container */
.image-div {
  width: 3rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  flex-shrink: 0;
}

.image-div img {
  width: 100%;
  height: 100%;
  scale: 0.9;
  object-fit: cover;
  border-radius: 0.2rem;
}

/* ===============================
   TEXT
   =============================== */

.header-details h3 {
  margin: 0 0 4px 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.header-details p {
  margin: 0;
  font-size: 0.75rem;
  line-height: 0.9rem;
  color: var(--text-secondary);
}

/* ===============================
   BODY
   =============================== */

.card-body p {
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--text-secondary);
}
</style>
