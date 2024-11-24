<script setup lang="jsx">
import TheHeader from '@/components/UI/TheHeader.vue';
import Hero from './Hero.vue';
import Highlights from './Highlights.vue';
import Categories from './Categories.vue';
import Reviews from './Reviews.vue';
import Footer from './Footer.vue';
//import Highlights from './Highlights.vue';
</script>


<template>
    <div class="main">
      <TheHeader  />

      <div class="hero">
        <div style="display: flex; justify-content: center;">
            <h1>Do  It <span>Right</span></h1>
        </div>  
           
          <Hero  />
        </div>

        <Highlights />

        <Categories />

        <Reviews />

        <Footer />
    </div>
</template>


<style scoped>
.main {
    padding: 10px 0px;
}

.hero{
    background-color:  rgb(213, 213, 213);;
    padding: 10px 50px;
}

.hero h1{
    font-size: 800%;
    width: 108%;
    display: flex;
    word-spacing: 60px;
    justify-content: center;
    gap: 60px;
    align-items: center;
    text-transform: uppercase;
}

.hero h1 span{
    color: rgb(69, 94, 216);
}

@media (max-width: 1000px) {
    


    .hero h1{
    font-size: 600%;
    width: 108%;
    display: flex;
    word-spacing: 60px;
    justify-content: center;
    gap: 60px;
    align-items: center;
    text-transform: uppercase;
}

}


@media (max-width: 850px) {

.hero h1{
font-size: 400%;
width: 108%;
display: flex;
word-spacing: 60px;
justify-content: center;
gap: 60px;
align-items: center;
text-transform: uppercase;
}

}

@media (max-width: 600px) {

.hero h1{
font-size: 200%;
width: 108%;
display: flex;
word-spacing: 60px;
justify-content: center;
gap: 60px;
align-items: center;
text-transform: uppercase;
}

}

</style>