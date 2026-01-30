<script setup>
import { ref, defineProps } from 'vue';


const props = defineProps({
    message: String,
    who_sent: String,
})

</script>


<template>
    <div class="messages-container" :style="{ justifyContent: who_sent === 'surveyor' ? 'end' : 'start' }">
        <div class="message-card" :class="{ userMessage: who_sent === 'surveyor', ugspaceMessage: who_sent != 'surveyor' }">
            <p class="message">{{ message }}</p>
            <p class="who-sent">{{ who_sent }}
            </p>
            <div class="triangle" :class="{ userMessage: who_sent === 'surveyor', ugspaceMessage: who_sent != 'surveyor' }"
                :style="{ right: who_sent === 'surveyor' ? '-0.27rem' : '97.5%' }"></div>
        </div>
    </div>



</template>


<style scoped>
.messages-container {
    display: flex;
    width: 100%;
    /* border: 1px solid blue; */
}

.message-card {
    position: relative;
    display: flex;
    width: 70%;
    border-radius: 0.5rem;
    padding: 0.6rem 0.5rem;
    /* border: 1px solid red; */
}

.message-card.userMessage {
    background-color: rgb(243, 255, 238);
}

.message-card.ugspaceMessage {
    background-color: rgb(241, 252, 255);
}


.message-card {
    word-break: break-word;
    /* break long words */
    overflow-wrap: break-word;
    /* fallback for older browsers */
    white-space: normal;
    /* ensures wrapping */
    margin: 0;
    /* optional, avoids extra spacing */
}


.who-sent {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    font-size: 0.6rem;
    color: rgb(193, 203, 211);
}


.triangle {
    position: absolute;
    /* left: -0.3rem; */
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 0.2rem;
    transform: rotate(45deg);
    background-color: blue;
}

.triangle.userMessage {
    background-color: rgb(243, 255, 238);
}

.triangle.ugspaceMessage {
    background-color: rgb(241, 252, 255);
}
</style>