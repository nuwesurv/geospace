<script setup>
import { onMounted, ref } from 'vue';
import { useNavbarStore } from '@/Stores/NavBar';
import { storeToRefs } from 'pinia';
import videoSrc from '@/assets/topological solver.mp4'

const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())


const fontLoaded = ref(false);
onMounted(() => {
    document.fonts.load('1em "Material Symbols Outlined"').then(() => {
        fontLoaded.value = true;
    });
});

</script>

<template>
    <div class="projects-div">
        <div class="page-container">

            <div class="heading">PERSONAL GIS PROJECT</div>
            <div class="media-div">
                <video :src="videoSrc" loop controls playsinline></video>
            </div>
            <div class="details">
                <p>This plugin is designed and built to automate parcel boundary manipulation to ensure nearby parcel
                    boundaries touch each other given a manipulation distance tolerance (e.g. 0.05m).<br><br> Given two
                    nearby parcels, in a distance less than the tolerance distance e.g. 0.05m, the plugin manipulates
                    the boundaries of one of the parcels to touch the neighbor just as it would be on ground.
                </p>
            </div>
            <div class="projects-btn" @click="seePortifolio = true">See other projects
                <div class="icondiv">
                    <span class="material-symbols-outlined forwardarrow" v-if="fontLoaded">arrow_forward</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: auto;
    padding: 2rem 0;
    background-color: rgb(251, 255, 251);
    color: var(--theme-color);
    /* border: 1px solid red; */
    box-shadow: inset 0 0 15px rgba(0, 128, 11, 0.182);
}

.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: auto;
    padding: 2rem 0;
    background-color: rgb(251, 255, 251);
    color: var(--theme-color);
    /* border: 1px solid red; */
    box-shadow: inset 0 0 15px rgba(0, 128, 11, 0.182);
}

.heading {
    font-size: 1.1rem;
    font-weight: 500;
}


.media-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    flex: 1;
    margin-bottom: 0.5rem;
}

video {
    height: 100%;
    width: 100%;
}



.details {
    padding: 0 1rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

/* p{
    line-height: 0.95rem;
} */


.projects-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 1.25rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
    color: aliceblue;
    background-color: var(--theme-color);
}

.projects-btn:active {
    background-color: rgb(0, 139, 14);
}

.icondiv {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 0.3rem;
}




@media (min-width: 720px) {
    .projects-div{
        padding: 3rem 0;
    }

    .page-container {
        width: 60%;
        height: 100%;
        box-shadow: 0 0 10px 2px #5c4bf125;
        border-radius: 1rem;
    }
}
</style>