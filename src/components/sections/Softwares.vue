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
    <div class="heading">Software Acquitance</div>
    <div class="positioning-div">
      <div class="displaycard">
        <p class="displaycard-heading">Langs, libs and frameworks</p>
        <div class="divs-grouper">
          <div class="image-div">
            <img src="@\assets\python.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\javascript.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\html.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\css.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\vuejs.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\flet.svg" alt="">
          </div>
        </div>
      </div>

      <div class="displaycard ">
        <p class="displaycard-heading">Services</p>
        <div class="divs-grouper">
          <div class="image-div">
            <img src="@\assets\netlify.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\supabase.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\mapbox1.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\chatgpt.webp" alt="">
          </div>
        </div>
      </div>

      <div class="displaycard">
        <p class="displaycard-heading">Softwares</p>
        <div class="divs-grouper">
          <div class="image-div">
            <img src="@\assets\qgis1.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\blender.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\arcmap.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\civil3d.webp" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\davinci.webp" alt="">
          </div>
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
  background-color: white;
  /* border: 1px solid red; */
  /* background-color: var(--background-primary); */
  color: var(--theme-color);
}


.positioning-div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 95%;
  height: auto;
  /* padding: 2rem; */
  border-radius: 2rem;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.205); */
  position: relative;
  /* background-color: white; */
}

.displaycard {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.144);
  border-radius: 1rem;
  gap: 0.4rem;
  color: var(--theme-color);
  background-color: rgb(240, 255, 242);
}

.displaycard-heading {
  font-size: 0.9rem;
  text-align: left;
  width: 100%;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.divs-grouper {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
}


.image-div {
  width: 4rem;
  aspect-ratio: 1/1;
  /* border: 1px solid red; */
  /* flex: 1 1 1; */
  flex-grow: 0;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
}

img {
  height: 100%;
  width: 100%;
  scale: 1.01;
  /* aspect-ratio: 1/1; */
  object-fit: cover;
}

/* 📱 Mobile responsiveness */
@media (min-width: 700px) {
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
