<script setup>
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/Sidebar.vue';
import WorkSpace from '@/components/WorkSpace.vue';
import Portif from '@/components/Portif.vue';

</script>

<template>
  <div class="home-page">
    <NavBar/>
    <div class="body">
      <WorkSpace/>
      <Portif/>
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
  /* border: 1px solid red; */
}



</style>