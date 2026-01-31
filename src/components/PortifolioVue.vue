<script setup>
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@/Stores/NavBar';
import { storeToRefs } from 'pinia';
import Softwares from './Softwares.vue';
import FooterVue from './FooterVue.vue';
import LandingVue from './LandingVue.vue';

const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())


const fontLoaded = ref(false);
onMounted(() => {
    document.fonts.load('1em "Material Symbols Outlined"').then(() => {
        fontLoaded.value = true;
    });
});
</script>


<template>
    <div class="portfolio" v-if="seePortifolio">

        <LandingVue/>

        <Softwares/>
        <FooterVue/>

    </div>

</template>

<style scoped>
.portfolio {
    width: 100%;
    max-height: fit-content;
    overflow-y: scroll;
}


</style>