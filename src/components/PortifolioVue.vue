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
    <div class="portfolio" v-if="seePortifolio">

        <div class="page1">
            <!-- <div class="top-light"></div>
            <div class="top-light2"></div>
            <div class="top-light3"></div> -->
            <div class="image-wrapper">
                <img src="@/assets/nuwepic1 cropped.jpg" alt="">
                <div class="image-haze"></div>
            </div>
            <div class="page-grouper">
                <div class="about-text">
                    I am a highly motivated individual who seeks knowledge and aims to apply it to solve real world
                    problems in an effective and most efficient way.
                </div>
                <div class="action-buttons">
                    <div class="profile-btn">Continue
                        <div class="icondiv">
                            <span class="material-symbols-outlined downaroow" v-if="fontLoaded">arrow_cool_down</span>
                        </div>
                    </div>
                    <div class="projects-btn" @click="seePortifolio = false">See projects
                        <div class="icondiv">
                            <span class="material-symbols-outlined forwardarrow" v-if="fontLoaded">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>
.portfolio {
    width: 100%;
    min-height: fit-content;
}

.page1 {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    /* justify-content: center; */
    flex-direction: column;
    width: 100%;
    height: 100dvh;
    background-color: #f2f2f2;
    /* background-color: #053200; */
}

/* .top-light {
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    width: 100%;
    height: 10rem;
    background: radial-gradient(rgb(8, 82, 0), rgb(6, 62, 0), transparent, transparent);
} */

/* .top-light2 {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
    width: 100%;
    height: 10rem;
    background: radial-gradient(rgba(8, 82, 0, 0.603), rgba(6, 62, 0, 0.62), rgba(6, 62, 0, 0.14), transparent, transparent);
    }
    
    .top-light3 {
        position: absolute;
    bottom: 3dvh;
    right: 0;
    transform: translate(+50%, 50%);
    width: 100%;
    height: 10rem;
    background: radial-gradient(rgba(8, 82, 0, 0.603), rgba(6, 62, 0, 0.62), rgba(6, 62, 0, 0.14), transparent, transparent);
    } */

.image-haze {
    position: absolute;
    bottom: 0;
    /* left: 50%; */
    /* transform: translate(-50%, 50%); */
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, transparent, #0532002d );
}

.page-grouper {
    /* height: 40%; */
    /* flex: 1; */
    /* width: 100%; */
    margin: 1rem;
    padding: 1.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* border: 1px solid red; */
    background-color: white;
    border-radius: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.072);

}

.image-wrapper {
    height: 55dvh;
    width: 100%;
    position: relative;
    /* border: 1px solid white; */
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.366);
    border-bottom: 0.5px solid rgb(255, 255, 255);
}

img {
    /* border-radius: 3rem; */
    height: 100%;
    width: 100%;
    object-fit: cover;
}




.about-text {
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
}


/* Action buttons */
.action-buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.profile-btn,
.projects-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 1.25rem;
}

.profile-btn:active,
.projects-btn:active {
    background-color: var(--theme-color);
}

.profile-btn {
    color: aliceblue;
    background-color: var(--theme-color);
}

.projects-btn {
    color: var(--text-secondary);
    border: 1px solid var(--theme-color);
    background-color: #f2fff0;
}

.icondiv {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 0.3rem;
}

.downarrow{
    color: #ffffff;
}
.forwardarrow{
    color: var(--text-secondary);
}

.material-symbols-outlined {
    font-size: 1.2rem;
    font-weight: 600;
}
</style>