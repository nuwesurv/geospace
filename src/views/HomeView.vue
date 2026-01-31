<script setup>
import { ref, watch } from 'vue';
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/Sidebar.vue';
import WorkSpace from '@/components/WorkSpace.vue';
import PortifolioVue from '@/components/PortifolioVue.vue';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())


// const workspace = ref(null)

// function scrollToTop() {
//     workspace.value.scrollTo({
//         top: -workspace.value.scrollHeight,
//         behavior: 'smooth'
//     });
// }
// watch(iconSelected, (newValue,oldValue)=>{
//   console.log(newValue)
// })
</script>

<template>
  <div class="home-page">
    <NavBar/>
    <div class="body" ref="workspace" @click="scrollToTop">
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