<script setup lang="jsx">
import { defineProps } from 'vue';
import rating from "../../assets/starRating.png";
 

defineProps({

    reviewImage: {
       type: String,
       required: true
    },
    
    profileImage: {
        type: String,
        required: true
    }
})
</script>


<template>

<div class="card">
   <header>
     <div class="profileInfo">
        <h5>Good Quality</h5>
        <p>I highly recommend shopping from kicks</p>
        <img class="rate" :src="rating" />
     </div>

     <div>
        <img class="profile" :src="profileImage" />
     </div>
   </header>


   <div>
    <img class="Cardimg" :src="reviewImage" />
   </div>
</div>

</template>


<style scoped>
header{
    width: 300px;
    border: 5px solid white;
    border-radius: 15px;
}

.card{
    background: white;
    border-radius: 15px;
    width: 300px;
    height: 250px;
}

.rate{
  
}

.profile {
  
}

.card header{
    display: flex;
}

.profileInfo{
    width: 190px;
}

.Cardimg{
    width: 300px;
    height: 230px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

</style>