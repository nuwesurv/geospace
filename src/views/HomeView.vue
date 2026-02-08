<script setup>
import { ref, watch } from 'vue';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/Sidebar.vue';
import WorkSpace from '@/components/WorkSpace.vue';
import PortifolioVue from '@/components/PortifolioVue.vue';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())

</script>

<template>
  <div class="home-page">
    <NavBar/>
    <div class="body" @click="iconSelected = 'menu'">
      <SideBar/>
      <WorkSpace/>
      <PortifolioVue/> 
    </div>

  </div>

</template>

<style scoped>
.home-page{
  height: 100dvh;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.body{
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;
  /* border: 1px solid red; */
}



</style>