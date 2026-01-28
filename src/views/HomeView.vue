<script setup>
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/Sidebar.vue';
import WorkSpace from '@/components/WorkSpace.vue';
</script>

<template>
  <div class="home-page">
    <NavBar/>
    <div class="body">
      <SideBar/>
      <WorkSpace/>
    </div>

  </div>

</template>

<style scoped>
.home-page{
  height: 100dvh;
  max-height: 100dvh;
  border: 1px solid;
  display: flex;
  flex-direction: column;
}

.body{
  display: flex;
  flex: 1;
  /* border: 1px solid red; */
}



</style>