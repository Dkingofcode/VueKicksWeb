<script setup>
import { defineProps } from 'vue';

defineProps({
  imageOne: {
    type: String,
    required: true, // Ensures the prop is passed
  },
  imageTwo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">

    <div class="CardOne">
    <img class="imgOne" :src="imageOne" alt="Category One" />
    <div class="card-Info">
      <h3>Running Shoes</h3>
      <button>View More</button>
    </div>
  </div>

  <div class="CardTwo">
    <img class="imgTwo" :src="imageTwo" alt="Category Two" />
    <div class="card-Info">
      <h3>LifeStyle Shoes</h3>
      <button>View More</button>
    </div>
  </div>

  </div>  
  
</template>

<style scoped>
.container{
    display: flex;
    gap: 0px;

    border-top-left-radius: 35px;
    justify-content: right;
    width: 1200px;
}


.CardOne{
 position: relative;
 background-color: rgba(236, 238, 240, 1);
 width:  700px;
height: 500px;
align-items: center;
display: flex;
justify-content: center;
border-top-left-radius:   30px;
}

.CardTwo{
    position: relative;
    width: 700px;
    height: 500px; 
    background-color: rgba(246, 246, 246, 1);
    align-items: center;
display: flex;
justify-content: center;

}


.card-Info{
    bottom: 30px;
    display: flex;
}

.card-Info h3{ 
position: absolute;
left: 10px;
bottom: 13px;
font-size: 20px;
}

.card-Info button{
    position: absolute;
    right: 10px;
bottom: 13px;
}

.imgOne{
    width: 400px;
    height: 500px;
    
}

.imgTwo{
    
    width: 400px;
    height: 500px;
}


@media (max-width: 1200px){
    .container{
    display: flex;
    flex-direction: column;
    gap: 0px;
    
    border-top-left-radius: 35px;
    width: 1200px;
    justify-content: center;
    align-items: center;
}


}



@media (max-width: 800px){
    .container{
    display: flex;
    flex-direction: column;
    gap: 0px;

    border-top-left-radius: 35px;
    width: 700px;
    justify-content: center;
    align-items: center;
}


.CardOne{
 position: relative;
 background-color: rgba(236, 238, 240, 1);
 width: 80%;
align-items: center;
display: flex;
justify-content: center;
border-top-left-radius:   10px;
border-top-right-radius:   10px;
}

.CardTwo{
    position: relative;
    width: 80%;
    background-color: rgba(246, 246, 246, 1);
    align-items: center;
    display: flex;
    justify-content: center;

}


.card-Info{
    bottom: 30px;
    display: flex;
}

.card-Info h3{ 
position: absolute;
left: 10px;
bottom: 13px;
font-size: 20px;
}

.card-Info button{
    position: absolute;
    right: 10px;
bottom: 13px;
}

.imgOne{
   width: 400px;
    height: 450px;
}

.imgTwo{
    
    width: 400px;
    height: 500px;
}
}



@media (max-width: 600px){
    .container{
    display: flex;
    flex-direction: column;
    gap: 0px;
    
    border-top-left-radius: 15px;
    width: 700px;
    justify-content: center;
    align-items: center;
}


.CardOne{
 position: relative;
 background-color: rgba(236, 238, 240, 1);
 width: 80%;
align-items: center;
display: flex;
justify-content: center;
border-top-left-radius:   20px;
}

.CardTwo{
    position: relative;
    width: 80%;
    background-color: rgba(246, 246, 246, 1);
    align-items: center;
    display: flex;
    justify-content: center;

}


.card-Info{
    bottom: 30px;
    display: flex;
}

.card-Info h3{ 
position: absolute;
left: 10px;
bottom: 13px;
font-size: 20px;
}

.card-Info button{
    position: absolute;
    right: 10px;
    bottom: 13px;
}

.imgOne{
   width: 300px;
    height: 500px;
}

.imgTwo{
    
    width: 300px;
    height: 500px;
}
}

/* Add any required styles here */
</style>
