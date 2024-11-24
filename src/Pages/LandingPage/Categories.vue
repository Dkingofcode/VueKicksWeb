<script setup>
import { ref, computed } from 'vue';
import CategorySlide from "../../components/UI/CategorySlide.vue";

// Import images
import LifestyleShoe from "../../assets/BasketballShoes.png";
import RunningShoe from "../../assets/RunningShoes.png";
import BasketballShoeOne from "../../assets/BaketballShoeOne.jpg";
import RunningShoeOne from "../../assets/RunningShoeOne.jpg";
import BasketballShoeTwo from "../../assets/BasketballShoeTwo.jpg";
import RunningShoeTwo from "../../assets/RunningShoeTwo.jpg";
import BasketballShoeThree from "../../assets/BasketballShoeThree.jpg";
import RunningShoeThree from "../../assets/RunningShoeThree.jpg";

// Array of slides
const slides = [
  { imageOne: RunningShoe, imageTwo: LifestyleShoe },  
  { imageOne: RunningShoeOne, imageTwo: BasketballShoeOne },
  { imageOne: RunningShoeTwo, imageTwo: BasketballShoeTwo },
  { imageOne: RunningShoeThree, imageTwo: BasketballShoeThree },
];

// State for the currently active slide index
const currentSlideIndex = ref(0);

// Computed property to get the current slide
const currentSlide = computed(() => [slides[currentSlideIndex.value]]);

// Functions to navigate slides
function nextSlide() {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.length;
}

function prevSlide() {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + slides.length) % slides.length;
}
</script>

<template>
  <div class="category">
    <header>
      <h1>Categories</h1>
      <div class="btns">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </header>

    <div class="slide">
      <!-- Use v-for only with the filtered array -->
      <CategorySlide
        v-for="(slide, index) in currentSlide"
        :key="index"
        :imageOne="slide.imageOne"
        :imageTwo="slide.imageTwo"
      />
    </div>
  </div>
</template>
  
<style scoped>
/* Add styles for the parent component */

.category{
    background-color: black;
    padding: 150px 0px;
}



.slide {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 300px; /* Adjust as needed */
  background-color: black;
  transition: transform 0.5s ease; /* Smooth slide transition */
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 90px;
  padding: 30px 0px;
  color: white;
}

.btns{
    color: black;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: darkcyan;
}

@media (max-width: 1200px){
    .slide {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 900px; /* Adjust as needed */
  background-color: black;
  transition: transform 0.5s ease; /* Smooth slide transition */
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 90px;
  padding: 30px 0px;
  color: white;
}

}


</style>


