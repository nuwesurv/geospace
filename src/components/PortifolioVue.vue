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
            <div class="top-light"></div>
            <div class="top-light2"></div>
            <div class="top-light3"></div>
            <div class="page-grouper">
                <div class="image-wrapper">
                    <img src="@/assets/nuwepic1 cropped.jpg" class="img1" alt="">
                    <img src="@/assets/nuwepic1 cropped.jpg" class="img2" alt="">
                    <img src="@/assets/nuwepic1 cropped.jpg" class="img3" alt="">
                </div>
                <div class="about-text">
                    I am a highly motivated individual who seeks knowledge and aims to apply it to solve real world
                    problems in an effective and most efficient way.
                </div>
                <div class="action-buttons">
                    <div class="profile-btn">Continue
                        <div class="icondiv">
                            <span class="material-symbols-outlined" v-if="fontLoaded">arrow_cool_down</span>
                        </div>
                    </div>
                    <div class="projects-btn" @click="seePortifolio = false">See projects
                        <div class="icondiv">
                            <span class="material-symbols-outlined" v-if="fontLoaded">arrow_forward</span>
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
    justify-content: center;
    width: 100%;
    height: 100dvh;
    background-color: rgb(5, 50, 0);
}

.top-light {
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    width: 100%;
    height: 10rem;
    background: radial-gradient(rgb(8, 82, 0), rgb(6, 62, 0), transparent, transparent);
}

.top-light2 {
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
}

.page-grouper {
    /* height: 60%; */
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

}

.image-wrapper {
    height: 10rem;
    width: 10rem;
    position: relative;
    /* border: 1px solid white; */
}

.img1,
.img2,
.img3 {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    aspect-ratio: 1/1;
    border: 1px solid rgba(255, 255, 255, 0.425);
}

.img1 {
    transform: translate(-65%, -50%) rotateZ(-10deg) scale(0.9);
}

.img2 {
    transform: translate(-50%, -52%) rotateZ(0deg) scale(1.0);
}

.img3 {
    transform: translate(-35%, -50%) rotateZ(15deg) scale(1.03);
}


img {
    border-radius: 3rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
}




.about-text {
    text-align: center;
    font-size: 0.9rem;
    color: rgb(202, 202, 202);
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
    background-color: rgb(9, 69, 3);
}

.projects-btn {
    color: rgb(202, 202, 202);
    border: 1px solid rgb(9, 69, 3);
}

.icondiv {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--theme-color);
    margin-left: 0.3rem;
}


.material-symbols-outlined {
    font-size: 1.2rem;
    font-weight: 600;
}
</style>