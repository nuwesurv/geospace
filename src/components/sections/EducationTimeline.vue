<template>
    <div class="education-container">
        <div class="heading">
            Education Background
        </div>
        <div class="timeline">
            <div class="dots dot1"></div>
            <div class="dots dot2"></div>
            <div class="dots dot3"></div>


            <div class="educ-card card1">
                <div class="image-div">
                    <img src="@\assets\ntare.png" alt="">
                </div>
                <div class="details">
                    <p class="schname">Ntare school</p>
                    <p class="grades">24 agg</p>
                    <p class="year">2014 - 2017</p>
                </div>
            </div>

            <div class="educ-card card2">
                <div class="image-div">
                    <img src="@\assets\kitende.png" alt="">
                </div>
                <div class="details">
                    <p class="schname">St Mary's Kitende</p>
                    <p class="grades">19 pts</p>
                    <p class="year">2018 - 2019</p>
                </div>
            </div>

            <div class="educ-card card3">
                <div class="image-div">
                    <img src="@\assets\kyambogo.png" alt="">
                </div>
                <div class="details">
                    <p class="schname">Kyambogo University</p>
                    <p class="course">Land surveying || GIS</p>
                    <p class="grades">1st class</p>
                    <p class="year">2014 - 2017</p>
                </div>
            </div>

        </div>

    </div>

</template>


<style scoped>
.education-container {
    height: 24rem;
    position: relative;
    background-color: rgb(246, 255, 246);
    /* border: 1px solid var(--theme-color); */
}

.timeline {
    position: absolute;
    border-radius: 0.2rem;
    width: 0.2rem;
    height: 18rem;
    left: 0.8rem;
    top: 50%;
    transform: translate(0, -45%) ;
    background-color: var(--theme-color);
}

.dots{
position: absolute;
width: 0.9rem;
aspect-ratio: 1/1;
background-color: white;
left: 50%;
transform: translate(-50%, -50%);
border: 2px solid var(--theme-color);
border-radius: 50%;
}

.dot1{
    top: 2rem;
}

.dot2{
    top: 9rem;
}

.dot3{
    top: 16rem;
}



.heading{
    position: absolute;
    left: 50%;
    width: 100%;
    top: 1.5rem;
    text-align: center;
    transform: translate(-50%, -50%);
    /* height: 4rem; */
    color: var(--theme-color);
    /* color: var(--text-primary); */
}

.educ-card{
    position: absolute;
    left: 2rem;
    width: 80vw;
    top: 2rem;
    transform: translate(0, -50%);
    /* height: 4rem; */
    background-color: white;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.144);
}

.card1{
    top: 2rem;
}

.card2{
    top: 9rem;
}

.card3{
    top: 16rem;
}


.details{
    display: flex;
    flex-direction: column;
    /* gap: 0.2rem; */
    justify-content: center;
    padding-left: 0.5rem;
    border-left: 1px solid rgba(0, 0, 0, 0.264);
    height: fit-content;
    flex: 1;
}

.schname{
    font-size: 0.95rem;
    line-height: 0.95rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    /* text-decoration: underline; */
}

.course{
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 0.35rem;
}

.grades{
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: var(--text-secondary);
    margin-bottom: 0.35rem;
}
.year{
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: var(--text-secondary);
}





.image-div {
  width: 4rem;
  aspect-ratio: 1/1;
  /* border: 1px solid red; */
  /* flex: 1 1 1; */
  flex-grow: 0;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
}

img {
  height: 100%;
  width: 100%;
  scale: 0.85;
  /* aspect-ratio: 1/1; */
  object-fit: cover;
}
</style>