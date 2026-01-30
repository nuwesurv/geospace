<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import MessageDisplay from './MessageDisplay.vue';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
import { useProjectStore } from '@/Stores/Projects';
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())
const { projectSelected } = storeToRefs(useProjectStore())


var messages = ref([
    { message: 'Greetings Supervisor', who_sent: 'surveyor' },
    { message: 'Hello! Have you updated the map layers for Kitgum District?', who_sent: 'supervisor' },
    { message: 'Yes, the vector tiles are ready and optimized.', who_sent: 'surveyor' },
    { message: 'Excellent. Did you use the latest UBOS shapefiles?', who_sent: 'supervisor' },
    { message: 'Absolutely. The data is fully up to date.', who_sent: 'surveyor' },
    { message: 'Great work! Let me know when the map is ready for review.', who_sent: 'supervisor' }
]);

const fontLoaded = ref(false);
onMounted(() => {
    document.fonts.load('1em "Material Symbols Outlined"').then(() => {
        fontLoaded.value = true;
    });
})

const newMessage = ref('');
const SupervisorMessage = ref('');

async function sendMessage(whosent) {
    if (newMessage.value && newMessage.value.trim() !== '') {
        messages.value.push({ message: newMessage.value, who_sent: whosent });
        newMessage.value = '';
        await nextTick()
        scrollToBottom();
    }
    if (SupervisorMessage.value && SupervisorMessage.value.trim() !== '') {
        messages.value.push({ message: SupervisorMessage.value, who_sent: whosent });
        SupervisorMessage.value = '';
        await nextTick()
        scrollToBottom();
    }
}

function scrollToBottom() {
    const wrapper = document.querySelector('.chat-wrapper');
    if (wrapper) {
        wrapper.scrollTo({
            top: wrapper.scrollHeight,
            behavior: 'smooth'  // <-- smooth scrolling
        });
    }
    const wrapper2 = document.querySelector('.chat-wrapper2');
    if (wrapper2) {
        wrapper2.scrollTo({
            top: wrapper2.scrollHeight,
            behavior: 'smooth'  // <-- smooth scrolling
        });
    }
}

// watch(messages, (newValue, oldValue)=>{
//     scrollToBottom()
// })


</script>

<template>
<div class="cartography-section" v-if="projectSelected==='messaging'">
    <div class="positioning-div">

        <div class="phone">
            <div class="topbar"></div>
            <p class="admin-heading">Project Supervisor</p>
            <div class="chat-wrapper" ref="chatWrapper">
                <div class="message-display" v-for="msg in messages">
                    <MessageDisplay :message="msg.message" :who_sent="msg.who_sent" />
                </div>
            </div>
            <div class="messaging-inputs">
                <div class="message-input-div">
                    <input type="text" placeholder="type here..." @click="scrollToBottom()" v-model="newMessage"
                        @keyup.enter="sendMessage('supervisor'), scrollToBottom()">
                </div>
                <div class="send-button" @click="sendMessage('supervisor')">
                    <span class="material-symbols-outlined icon" v-if="fontLoaded">send</span>
                </div>
            </div>
        </div>

        <div class="phone">
            <div class="topbar"></div>
            <p class="admin-heading">Surveyor's device</p>
            <div class="chat-wrapper chat-wrapper2" ref="chatWrapper">
                <div class="message-display" v-for="msg in messages">
                    <MessageDisplay :message="msg.message" :who_sent="msg.who_sent" />
                </div>
            </div>
            <div class="messaging-inputs">
                <div class="message-input-div">
                    <input type="text" placeholder="type here..." @click="scrollToBottom()" v-model="SupervisorMessage"
                        @keyup.enter="sendMessage('surveyor'), scrollToBottom()">
                </div>
                <div class="send-button" @click="sendMessage('surveyor')">
                    <span class="material-symbols-outlined icon" v-if="fontLoaded">send</span>
                </div>
            </div>
        </div>

        <div class="cartography-text">
            <h2>PROJECT MANAGEMENT.</h2>
            <p>In addition to map display showing realtime progress of field data capture in remote areas,
                I have implemented <b>Realtime chats</b> between Project supervisor and Field Surveyor.
            <br><br>This Platform also gives <b>evaluation</b> of each surveyor's perfomance as well as the whole project progress</p>
        </div>

    </div>
</div>
</template>

<style scoped>
.cartography-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 5rem 0;
    /* background-color: var(--vt-c-white); */
    background-image: var(--background-color);
}

.positioning-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 95%;
    height: 80dvh;
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.205);
    position: relative;
}

.cartography-text {
    width: 50%;
}

h2 {
    font-size: 3rem;
    color: var(--vt-c-black-soft);
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.4rem;
    color: var(--vt-c-black-mute);
}

p b {
    font-size: inherit;  /* fixes bold text shrinking */
}



/* The phones */
.phone {
    height: 100%;
    width: 350px;
    padding: 0.5rem;
    border-radius: 2rem;
    border: 2px solid #a3a3a3;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--vt-c-white-mute);
}

.topbar{
    height: 0.2rem;
    width: 50px;
    margin-bottom: 0.2rem;
    background-color: var(--vt-c-black-mute);
}

.admin-heading {
    margin: 0.3rem 0;
    color: black;
}

/* Chats aready texted are handled here */
.chat-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 0.8rem;
    height: 20dvh;
    width: 96%;
    padding: 0.5rem;
    background-color: var(--vt-c-white);
    overflow-y: scroll;
    border: 1px solid rgb(221, 221, 221);
    flex: 1;
}

.chat-wrapper::-webkit-scrollbar {
    appearance: none;
    width: 0;
}

/* Text message inputs */
.messaging-inputs {
    height: 8dvh;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.message-input-div {
    display: flex;
    align-items: center;
    flex: 1;
    height: 6.5dvh;
    min-height: 6.5dvh;
}

.message-input-div input {
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
    border-radius: 3.25dvh;
    margin: 0 0.5rem;
    font-size: 1rem;
    padding: 0 1rem;
    overflow-wrap: break-word;
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    color: var(--heading1-text-color);
}

.message-input-div input:-webkit-autofill {
    background-color: transparent !important;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    box-shadow: 0 0 0px 1000px white inset !important;
}

.message-input-div input:focus {
    border: 0.5px solid var(--theme-color2);
}

.send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.5dvh;
    border-radius: 50%;
    background-color: var(--theme-color2);
    aspect-ratio: 1/1;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.send-button span {
    color: white;
    margin-left: 0.2rem;
}

/* Media queries */
@media (max-width: 700px) {
    .positioning-div {
        flex-direction: column;
        width: 95%;
        height: auto;
        padding: 1rem;
        gap: 1.5rem;
        border-radius: 1rem;
    }


    .cartography-text {
        width: 100%;
    }

    h2 {
        font-size: 1.6rem;
        text-align: left;
    }

    p {
        font-size: 1rem;
        word-break: break-word;
    }

    .phone {
        width: 90%;
        max-width: 350px;
        height: 60dvh;
        padding: 0.5rem 0.2rem;
    }

    .chat-wrapper {
        height: 30dvh;
    }

    .messaging-inputs {
        height: 10dvh;
    }
}
</style>
