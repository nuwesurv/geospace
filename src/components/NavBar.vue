<script setup>

</script>

<template>
  <div class="navbar">
    <div class="logo-div">
      <img src="@/assets/Geo_space_logo.png" alt="">
    </div>

    <div class="account-div">
      <img src="@/assets/userPhoto.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 10dvh;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.079);
  /* border: 1px solid rgb(37, 114, 1); */
  /* position: fixed; */
}

.logo-div, .account-div{
  display: flex;
  align-items: center;
  height: 80%;
  /* border: 1px solid blue; */
}

.logo-div img{
  height: 100%;
}
.account-div img{
  height: 70%;

}
</style>
