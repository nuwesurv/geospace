<script setup>

import { useCreateVectorTilesStore } from '@/Stores/CreateVectorTiles';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
import { useProjectStore } from '@/Stores/Projects';
import { watch } from 'vue';

const { projectSelected } = storeToRefs(useProjectStore())
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())
 



</script>

<template>
    <div class="sidebar" :class="{inactive: iconSelected==='menu' || seePortifolio}">
        <div class="button-grouper">
            <div class="button" @click="projectSelected = 'web-mapping'"
                :class="{ active: projectSelected === 'web-mapping' }">
                <p>Web mapping</p>
            </div>

            <div class="button" @click="projectSelected = 'vector-tiles'"
                :class="{ active: projectSelected === 'vector-tiles' }">
                <p>Create Vector Tiles</p>
            </div>

            <div class="button" @click="projectSelected = 'qgis-plugins'"
                :class="{ active: projectSelected === 'qgis-plugins' }">
                <p>QGIS plugins</p>
            </div>

            <div class="button" @click="projectSelected = 'messaging'"
                :class="{ active: projectSelected === 'messaging' }">
                <p>Realtime-messaging</p>
            </div>

        </div>

    </div>


</template>

<style scoped>
.sidebar {
    height: 100%;
    width: 70%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    background-color: rgb(250, 250, 250);
    transition: 0.2s ease;
}

.sidebar.inactive{
    transform: translate(-100%, 0);
}


.button-grouper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    width: 100%;
    flex: 1;
}

.button {
    display: flex;
    align-items: center;
    width: 90%;
    height: 2.5rem;
    border-radius: 1.75rem;
    padding: 0 1.5rem;
    color: var(--text-secondary);
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.096);
    transition: 0.3s ease;
}


.button.active {
    display: flex;
    align-items: center;
    width: 90%;
    height: 2.5rem;
    border-radius: 1.75rem;
    padding: 0 1.5rem;
    color: aliceblue;
    background-color: var(--theme-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.096);
}





p {
    font-size: 0.95rem;
}
</style>