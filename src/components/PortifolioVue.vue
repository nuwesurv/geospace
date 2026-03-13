<script setup>
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@/Stores/NavBar';
import { storeToRefs } from 'pinia';
import Softwares from './sections/Softwares.vue';
import FooterVue from './sections/FooterVue.vue';
import LandingVue from './sections/LandingVue.vue';
import EducationTimeline from './sections/EducationTimeline.vue';
import Accoplishments from './sections/Accoplishments.vue';
import NotableProjects from './sections/NotableProjects.vue';
import References from './sections/References.vue';

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

        <LandingVue />
        <EducationTimeline/>
        <Accoplishments/>
        <NotableProjects/>
        <References/>
        <Softwares />
        <FooterVue />

    </div>

</template>

<style scoped>
.portfolio {
    width: 100%;
    max-height: fit-content;
    overflow-y: scroll;
}
/* 
.portfolio::-webkit-scrollbar {
    width: 6px;
}

.portfolio::-webkit-scrollbar-thumb {
    background: var(--theme-color);
    border-radius: 10px;
}

.portfolio::-webkit-scrollbar-track {
    background: transparent;
} */
</style>