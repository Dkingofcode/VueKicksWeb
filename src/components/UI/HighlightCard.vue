<script setup>
import Button from './Button.vue';
import ShoeOne from "../../assets/newShoeOne.png";
</script>


<template>
 <div class="card">

    <div class="CardImg">
    <Button class="btn">New</Button>
    <img :src="ShoeOne" />
</div>

<p class="cardText">Addidas 4dfwd x parley running shoes</p>

<button class="Cardbtn">View Product - <span>$125</span></button>



 </div>   

</template>

<style scoped>
.card{
    width: 290px;
}



.CardImg{
   position: relative;
   border-top-left-radius: 27px;
   border-top-right-radius: 30px;
   border-bottom-left-radius: 37px;
   border-bottom-right-radius: 39px;
}

.CardImg img {
    width: 250px;
    height: 300px;
    border-radius: 30px;
    border: 10px solid white;
}

.CardImg .btn{
  position: absolute;
  width: 60px;
  height: 50px;
  left: 10px;
  top: 10px;
  border-top-right-radius: 0px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 0px;
}

.cardText{
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
}

.Cardbtn{
    border: 4px solid black;
    color: white;
    background-color: black;
    width: 200px;
    padding: 5px 10px;
    border-radius: 10px;
}

.Cardbtn span{
    color: orange;
}


@media (max-width: 700px) {
    .card{
       width: 150px; 
       
    }

    .CardImg{
   border-top-left-radius: 27px;
   border-top-right-radius: 30px;
   border-bottom-left-radius: 37px;
   border-bottom-right-radius: 39px;
}

.CardImg img {
    width: 100%;
    height: 200px;
    border-radius: 25px;
    border: 10px solid white;
}

.CardImg .btn{
  position: absolute;
  width: 45px;
  height: 30px;
  left: 10px;
  top: 10px;
  font-size: 12px;
  border-top-right-radius: 0px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 0px;
}

.cardText{
    font-weight: 700;
    font-size: 12px;
    width: 200px;
    text-transform: uppercase;
}

.Cardbtn{
    
    color: white;
    background-color: black;
    width: 150px;
    padding: 5px 10px;
    border-radius: 5px;     
    }
}


</style>