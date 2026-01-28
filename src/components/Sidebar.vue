<script setup>

import { useCreateVectorTilesStore } from '@/Stores/CreateVectorTiles';
import { useToolsStore } from '@/Stores/Tools';
import { storeToRefs } from 'pinia';


const { tools, toolSelected } = storeToRefs(useToolsStore())


</script>

<template>
    <div class="sidebar">
        <h3>TOOLS</h3>
        <div class="button-grouper">
            <div class="button" v-for="tool, id in tools" :key="id" @click="toolSelected=id" :class="{active: toolSelected===id, inactive: toolSelected!=id}">
                <p>{{ tool }}</p>
            </div>
        </div>

        <a href="">About dev</a>
    </div>


</template>

<style scoped>
.sidebar{
    height: 100%;
    width: 380px;
    min-width: 380px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem 0;
    background-color: var(--vt-c-white-mute);
}

.button-grouper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    flex: 1;
}


.button.active{
    display: flex;
    align-items: center;
    width: 90%;
    height: 3.5rem;
    border-radius: 1.75rem;
    padding: 0 1.5rem;
    color: aliceblue;
    background-color: var(--theme-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.096);
}
.button.active:hover{
    background-color: var(--theme-color-light);
}

.button.inactive{
    display: flex;
    align-items: center;
    width: 90%;
    height: 3.5rem;
    border-radius: 1.75rem;
    padding: 0 1.5rem;
    color: var(--vt-text-unfocused);
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.096);
}


h3{
    font-size: 2rem;
    margin-bottom: 0.6rem;
    color: var(--vt-heading);
}

p{
    font-size: 1.3rem;
}

a{
    color: var(--text-links);
    font-size: 1.2rem;
    text-underline-offset: 0.2rem;
}

a:hover{
    border-radius: 1rem;
    padding: 0.1rem 1rem;
    box-shadow: 0 0 5px blue;
    text-decoration: none;
}
</style>