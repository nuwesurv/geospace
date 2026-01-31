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
    <div class="positioning-div">
      <div class="displaycard languages">
        <p class="displaycard-heading">Langs, libs and frameworks</p>
        <div class="divs-grouper">
          <div class="image-div">
            <img src="@\assets\python.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\javascript.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\html.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\css.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\vuejs.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\flet.svg" alt="">
          </div>
        </div>
      </div>

      <div class="displaycard services">
        <p class="displaycard-heading">Services</p>
        <div class="divs-grouper">
          <div class="image-div">
            <img src="@\assets\netlify.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\supabase.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\mapbox1.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\chatgpt.png" alt="">
          </div>
        </div>
      </div>

      <div class="displaycard Softwares">
        <p class="displaycard-heading">Softwares</p>
        <div class="divs-grouper">
          <div class="image-div">
            <img src="@\assets\qgis.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\blender.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\arcmap.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\civil3d.png" alt="">
          </div>
          <div class="image-div">
            <img src="@\assets\davinci.png" alt="">
          </div>
        </div>
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.312);
  border-radius: 1rem;
  gap: 0.4rem;
}

.displaycard-heading{
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

.languages {
  color: aliceblue;
  background: linear-gradient(135deg, var(--theme-color), #00a911);
}

.services {
  color: var(--theme-color);
  background-color: rgb(240, 255, 242);
  /* background-color: rgb(0, 136, 255); */
}

.Softwares {
  color: aliceblue;
  /* background-color: rgb(240, 255, 242); */
  background: linear-gradient(135deg, var(--theme-color-light), #00a911);
  /* background-color: rgb(153, 0, 255); */
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
