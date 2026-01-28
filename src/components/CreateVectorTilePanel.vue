<script setup>
import { ref, onMounted, toRaw } from 'vue'
// import { GeoPackageAPI } from '@ngageoint/geopackage';

const geopackagePath = ref(null)
const isDragging = ref(false)
const fontLoaded = ref(false);

onMounted(() => {
  document.fonts.load('1em "Material Symbols Outlined"').then(() => {
    fontLoaded.value = true;
  });
});

// --- Drag and drop handlers ---
function handleDrop(event) {
  event.preventDefault();
  isDragging.value = false;
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    geopackagePath.value = files[0];
    console.log('File dropped:', files[0]);
  }
}

function handleDragOver(event) {
  event.preventDefault();
  isDragging.value = true;
}

function handleDragLeave(event) {
  event.preventDefault();
  isDragging.value = false;
}

// --- Read geopackage in the browser ---
async function readGeopackage() {
  if (!geopackagePath.value) return;

}
</script>

<template>
  <div class="background">
    <div class="create-vector-tiles">
      <div
        class="drag-and-drop"
        v-if="!geopackagePath"
        :class="{ dragging: isDragging }"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
      >
        <p>🗂️ Drag & drop your GeoPackage file here</p>
      </div>

      <div class="dataset-card" v-else @click="readGeopackage">
        <img src="@/assets/card_bg.jpg" alt="">
        <div class="dataset-attibs-grouper">
          <div class="dataset-labels">
            <p class="filename">{{ geopackagePath.name.slice(0, 13) }}...</p>
            <p class="type"> GeoPackage </p>
          </div>
          <div class="download-icon">
            <div class="download-button">
              <span class="material-symbols-outlined" v-if="fontLoaded">download</span>
              <p>Vect-tiles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.background {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    backdrop-filter: blur(5px);
    /* background-color: #58ea3834; */
    border: 1px solid #f0fff447;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.51);
    background-image: linear-gradient(rgba(255, 255, 255, 0.178), rgba(21, 255, 0, 0.099));
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 350px;
    height: 250px;
}

.create-vector-tiles {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #f9fafbaa;
    background-image: linear-gradient(rgba(43, 255, 0, 0.185),
            rgba(255, 255, 255, 0.243),
        );
}

.drag-and-drop {
    width: 100%;
    /* max-width: 500px; */
    height: 100%;
    border: 3px dashed var(--drag-drop-border);
    border-radius: 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    color: var(--vt-text-unfocused);
}

.drag-and-drop.dragging {
    border-color: #44c32e;
    background-color: #f0fff4;
    color: #44c32e;
    box-shadow: 0 0 10px rgba(68, 195, 46, 0.2);
}

.drag-and-drop p {
    font-size: 1.3rem;
    font-weight: 500;
}





/* After inserting the geopackage. */
.dataset-card {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: rgb(254, 255, 252);
    /* border: 1px solid green; */
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.082);
}

.dataset-card img {
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
}

.dataset-attibs-grouper {
    position: absolute;
    height: 35%;
    width: 100%;
    bottom: 0;
    padding: 0 1rem;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
    display: flex;
    align-items: center;
    /* border: 1px solid white; */
}

.dataset-labels {
    display: flex;
    flex-direction: column;

}

.filename {
    font-size: 1.4rem;
}

.type {
    font-size: 1.2rem;
}

.download-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* width: 50%; */
    border-radius: 1rem;
    /* border: 1px solid white; */
    /* background-color: antiquewhite; */
}

.download-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border-radius: 1.25rem;
    padding: 0 1rem;
    background-color: var(--theme-color);
}

.download-button p {
    font-size: 1.1rem;
}

.download-button:hover {
    background-color: var(--theme-color-light);
}
</style>
