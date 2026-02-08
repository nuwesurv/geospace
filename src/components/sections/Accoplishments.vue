<script setup>
import { ref, onMounted } from 'vue';
import { addVectorTileLayersMapbox } from '@/utils/addVectorTileLayers';
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '@/Stores/NavBar';
import { useProjectStore } from '@/Stores/Projects';
const { iconSelected, seePortifolio } = storeToRefs(useNavbarStore())
const { projectSelected } = storeToRefs(useProjectStore())

const infoCard1 = ref(null)
const infoCard2 = ref(null)
const infoCard3 = ref(null)
const map = ref(null);
const fontLoaded = ref(false);
onMounted(() => {
    document.fonts.load('1em "Material Symbols Outlined"').then(() => {
        fontLoaded.value = true;
    });
    // Instantiate the Mapbox map
    mapboxgl.accessToken = 'pk.eyJ1IjoibnV3ZWFyaWhvIiwiYSI6ImNtNzNjNmN5NTBmNTAyaXNleXRrcjFkM3YifQ.6SBI1OnVfs50STLtPiYMNQ'
    map.value = new mapboxgl.Map({
        container: 'map',
        center: [32.3, 1.5],
        zoom: 5.3,
        bearing: 0,
        pitch: 0,
        style: 'mapbox://styles/mapbox/streets-v12',
        interactive: false,
        minZoom: 5.3,
        maxZoom: 20,
    });

    // Add map controls
    map.value.addControl(new mapboxgl.NavigationControl());
    map.value.addControl(new mapboxgl.ScaleControl({ position: 'bottom-left' }));
    map.value.addControl(new mapboxgl.FullscreenControl());

    // Add vector tile layers
    map.value.on('load', () => {
        addVectorTileLayersMapbox(map.value, 'Regions', '#0281f7', '#deefff');
    });

    map.value.on('load', () => {
        map.value.addLayer({
            id: '3d-buildings',
            source: 'composite',
            'source-layer': 'building',
            filter: ['==', 'extrude', 'true'],
            type: 'fill-extrusion',
            minzoom: 15,
            paint: {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-base': ['get', 'min_height'],
                'fill-extrusion-opacity': 0.6
            }
        });
    });


    map.value.on('load', () => {
        const marker1 = new mapboxgl.Marker({
            element: infoCard1.value,
            anchor: 'bottom' // makes the arrow point to location nicely
        })
            .setLngLat([32.61305115342631, 0.3283646500688633]) // your coordinates
            .setOffset([0, -10])
            .addTo(map.value)

        const marker2 = new mapboxgl.Marker({
            element: infoCard2.value,
            anchor: 'bottom' // makes the arrow point to location nicely
        })
            .setLngLat([32.622692871891985, 0.3618762161514155]) // your coordinates
            .setOffset([0, -10])
            .addTo(map.value)

        const marker3 = new mapboxgl.Marker({
            element: infoCard3.value,
            anchor: 'bottom' // makes the arrow point to location nicely
        })
            .setLngLat([33.383942851269325, 0.5271844934089529]) // your coordinates
            .setOffset([0, -10])
            .addTo(map.value)

    })

    map.value.on('zoom', (e) => {
        if (e.target.style.z > 15) {
            infoCard1.value.style.display = 'block'
            infoCard2.value.style.display = 'block'
            infoCard3.value.style.display = 'block'
            infoCard1.value.style.visibility = 'visible'
            infoCard2.value.style.visibility = 'visible'
            infoCard3.value.style.visibility = 'visible'
        }
        else {
            infoCard1.value.style.display = 'none'
            infoCard2.value.style.display = 'none'
            infoCard3.value.style.display = 'none'
            infoCard1.value.style.visibility = 'hidden'
            infoCard2.value.style.visibility = 'hidden'
            infoCard3.value.style.visibility = 'hidden'
        }
    })


    map.value.on('click', (e) => {
        // Clicked point coordinates
        const clickCoords = [e.lngLat.lng, e.lngLat.lat];

        // Accurate map center coordinates
        const center = map.value.getCenter(); // getCenter() returns a LngLat object
        const centerCoords = [center.lng, center.lat];

        // console.log('Clicked coordinates:', clickCoords);
        // console.log('Map center coordinates:', centerCoords);
    });



});




const currentPlace = ref(0)
const isFirsttime = ref(true)
const places = ref([
    {
        cardLocation: [32.61305115342631, 0.3283646500688633],
        mapcenter: [32.61131730123043, 0.33143420048942573]
    },
    {
        cardLocation: [32.622692871891985, 0.3618762161514155],
        mapcenter: [32.620884876872935, 0.3650326978459617]
    },
    {
        cardLocation: [33.384091994004365, 0.5272127625672169],
        mapcenter: [33.382146794408726, 0.5303377705440653]
    }
]);



function flyToPlace() {
    const target = places.value[currentPlace.value].mapcenter

    // STEP 1 — rotate toward 180 while flying halfway
    map.value.flyTo({
        center: target,
        zoom: 15.1,
        pitch: 40,
        bearing: 350,
        duration: 2000,
        essential: true
    })

    // STEP 2 — final cinematic landing
    map.value.once('moveend', () => {
        map.value.flyTo({
            center: target,
            zoom: 16,
            pitch: 80,
            bearing: 330,
            duration: 5000,
            essential: true
        })
    })
}


function goBack(){
    if (isFirsttime.value && currentPlace.value === 0){
        currentPlace.value = 0
        isFirsttime.value = false
        return
    }
    if (currentPlace.value > 0 && currentPlace.value < places.value.length+1){
        currentPlace.value--
    }
}
function goForward(){
    if (isFirsttime.value && currentPlace.value === 0){
        currentPlace.value = 0
        isFirsttime.value = false
        return
    }
    
    if (currentPlace.value > -1 && currentPlace.value < places.value.length-1){
        currentPlace.value++
        console.log(currentPlace.value)
        console.log(places.value.length)
    }
}

</script>


<template>
    <div class="accomplishment-container">
        <!-- ✅ Wrapper ensures map container is empty -->
        <div class="map-div">
            <div id="map"></div>
            <div class="map-title">WORK HISTORY</div>
        </div>
        <div class="button-wrapper">
            <div class="action-buttons" @click="goBack(), flyToPlace()">
                <div class="icondiv">
                    <span class="material-symbols-outlined" v-if="fontLoaded">keyboard_double_arrow_left</span>
                </div>
                Prev role
            </div>
            <div class="action-buttons" @click="goForward(), flyToPlace()">Next role
                <div class="icondiv">
                    <span class="material-symbols-outlined " v-if="fontLoaded">keyboard_double_arrow_right</span>
                </div>
            </div>
        </div>




        <!-- UNRA card -->
        <div ref="infoCard1" class="map-info-card">
            <div class="downward-arrow"></div>

            <div class="card-header">
                <div class="image-div">
                    <img src="@/assets/unra.webp" />
                </div>

                <div class="header-details">
                    <h3>UNRA, Nakawa</h3>
                    <h4>Land surveying Internee</h4>
                    <h4>Dec 2023 - Jan 2024</h4>
                </div>
            </div>

            <div class="card-body">
                <p>
                    I got the opportunity to work on land acquisition projects where I gained skills in the field of
                    mapping and spatial data management on a large scale.
                    <br><br>
                    It's at this time I got interested in GIS mapping softwares like QGIS.
                </p>
            </div>
        </div>


        <!-- I&G card -->
        <div ref="infoCard2" class="map-info-card">
            <div class="downward-arrow"></div>

            <div class="card-header">
                <div class="image-div">
                    <img src="@/assets/ig.webp" />
                </div>

                <div class="header-details">
                    <h3>I&amp;G Maxconsults, NSA mall</h3>
                    <h4>Land surveyor || GIS</h4>
                    <h4>Dec 2024 - till date</h4>
                </div>
            </div>

            <div class="card-body">
                <p>
                    I got the opportunity to work on land acquisition projects where I gained skills in the field of
                    mapping and spatial data management on a large scale.
                    <br><br>
                    It's at this time I got interested in GIS mapping softwares like QGIS.
                </p>
            </div>
        </div>

        <!-- MAYUGE Slaac card -->
        <div ref="infoCard3" class="map-info-card">
            <div class="downward-arrow"></div>

            <div class="card-header">
                <div class="image-div">
                    <img src="@/assets/mayuge_slaac.webp" />
                </div>

                <div class="header-details">
                    <h3>SLAAC Lot 5, Mayuge</h3>
                    <h4>Cartography</h4>
                    <h4>Jan 2025 - Feb 2025</h4>
                </div>
            </div>

            <div class="card-body">
                <p>
                    I got the opportunity to work on land acquisition projects where I gained skills in the field of
                    mapping and spatial data management on a large scale.
                    <br><br>
                    It's at this time I got interested in GIS mapping softwares like QGIS.
                </p>
            </div>
        </div>

    </div>


</template>

<style scoped>
.accomplishment-container {
    height: 35rem;
    display: flex;
    flex-direction: column;
    background-color: rgb(231, 255, 231);
    overflow: hidden;
    /* border-bottom: 1px solid var(--theme-color); */
}

.map-title {
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    height: 2rem;
    width: fit-content;
    border-radius: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    backdrop-filter: blur(15px);
    height: 2.5rem;
    text-align: center;
    
}

.map-div {
    flex: 1 1 auto;
    display: flex;
    position: relative;
}

#map {
    width: 100%;
    height: 100%;
    /* border-radius: 2rem; */
}

/* ✅ New wrapper for the map */
.button-wrapper {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.7rem;
    /* border: 1px solid red; */
    height: 3.5rem;
}

.action-buttons {
    background-color: var(--theme-color);
    padding: 0.3rem 1rem;
    border-radius: 2rem;
    color: aliceblue;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.521), 0 0 10px rgba(0, 0, 0, 0.432);
    bottom: 2rem;
}

.icondiv {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 2.2rem; */
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: width 0.2s ease, background-color 0.2s ease;
    box-sizing: border-box;
    color: aliceblue;
    /* border: 1px solid red; */
    /* background-color: var(--theme-color); */
}

.material-symbols-outlined {
    font-size: 1.5rem;
}

.cartography-text {
    width: 50%;
    word-break: break-word;
    overflow-wrap: break-word;
}

.heading {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.4rem;
    color: var(--text-secondary);
}

p b {
    font-size: inherit;
}




/* ===============================
   MAP INFO CARD
   =============================== */

.map-info-card {
    display: none;
    position: absolute;
    width: 300px;
    visibility: hidden;
    background: white;
    border-radius: 10px;

    padding: 10px;

    font-family: Arial, sans-serif;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);

    transform-origin: bottom center;

    /* makes Mapbox markers look crisp */
    user-select: none;
}

/* small arrow pointer */
.downward-arrow {
    width: 1rem;
    aspect-ratio: 1/1;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: white;
    border-radius: 0.25rem;
}

/* ===============================
   HEADER
   =============================== */

.card-header {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 0.5rem;
    margin-bottom: 0.6rem;
}

/* image container */
.image-div {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    flex-shrink: 0;
}

.image-div img {
    width: 100%;
    height: 100%;
    scale: 0.9;
    object-fit: cover;
}

/* ===============================
   TEXT
   =============================== */

.header-details h3 {
    margin: 0 0 4px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
}

.header-details h4 {
    margin: 0;
    font-size: 12px;
    line-height: 14px;
    color: var(--text-secondary);
}

/* ===============================
   BODY
   =============================== */

.card-body p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
    color: var(--text-secondary);
}
</style>