<script setup>

</script>

<template>
    <div class="footer-body">
        <div class="heading">Where can you find me?</div>
        <div class="media-div">
            <a href="mailto:nuwesurv@gmail.com" target="_blank">
                <i class="bi bi-envelope icon1"></i>
            </a>

            <a href="https://wa.me/256706113246" target="_blank">
                <i class="bi bi-whatsapp icon2"></i>
            </a>

            <a href="https://www.linkedin.com/in/nuwe-ariho-20a05a389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <i class="bi bi-linkedin icon3"></i>
            </a>

            <a href="https://tiktok.com/@nuwesurv" target="_blank">
                <i class="bi bi-tiktok icon4"></i>
            </a>
        </div>

    </div>


</template>

<style scoped>
.footer-body {
    height: 6rem;
    width: 100%;
    background-color: rgb(11, 21, 34);
    color: rgb(193, 199, 203);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}

.heading {
    margin-bottom: 0.3rem;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.154);
}

.media-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    /* color: aliceblue; */
}

.media-div a {
    color: inherit;
    text-decoration: none;
}

.bi {
    padding: 0 0.2rem;
}

.icon1 {
    color: rgb(252, 228, 183);
}

.icon2 {
    color: rgb(26, 192, 0);
}

.icon3 {
    color: rgb(32, 147, 255);
}

.icon4 {
    color: rgb(255, 203, 253);
}
</style>