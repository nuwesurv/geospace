<script setup>
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@/Stores/NavBar';
import { storeToRefs } from 'pinia';

const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())


const fontLoaded = ref(false);
onMounted(() => {
  document.fonts.load('1em "Material Symbols Outlined"').then(() => {
    fontLoaded.value = true;
  });
});

</script>

<template>
  <div class="navbar" :class="{ portifolio: seePortifolio }">

    <div class="projects-nav" v-if="!seePortifolio">
      <div class="icondiv" @click="seePortifolio = true">
        <span class="material-symbols-outlined icon1" v-if="fontLoaded">arrow_back</span>
      </div>

      <p class="heading">Capabilities</p>

      <div class="icondiv" v-if="iconSelected === 'menu'" @click="iconSelected = 'cancel-menu'">
        <span class="material-symbols-outlined icon2" v-if="fontLoaded">menu</span>
      </div>
      <div class="icondiv" v-if="iconSelected === 'cancel-menu'" @click="iconSelected = 'menu'">
        <span class="material-symbols-outlined icon2" v-if="fontLoaded">cancel</span>
      </div>
    </div>

    <div class="portifolio-nav" v-else>
      <p class="names">NUWE ARIHO</p>
      <p class="descriptions"> GIS || Software Dev || Content Creator</p>
    </div>

  </div>




</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4.2rem;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.079);
}

.navbar.portifolio {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.5rem;
  border: 0.5px solid rgba(240, 248, 255, 0.171);
  background: linear-gradient(#ffffff1f, #0a3f0040);
  backdrop-filter: blur(15px);
  z-index: 10;

}

.projects-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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

.heading {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
}




/* This is for portifolio */
.names {
  font-size: 2rem;
  color: aliceblue;
  line-height: 2.1rem;
  text-align: center;
}

.descriptions {
  font-size: 0.6rem;
  color: rgb(226, 226, 226);
  line-height: 0.6rem;
  text-align: center;
}
</style>
