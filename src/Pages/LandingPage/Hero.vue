<script setup lang="jsx">
//import HeroImg from "../../assets/KicksHeroImg.png";
import heroMainImg from "../../assets/KicksHeroImg.png";
import heroLabel from "../../assets/KicksHeroLabel.png";
import previewOne from "../../assets/KicksheroImgSmall.png";
import previewTwo from "../../assets/kicksheroSmallimg.png";
import Button from "@/components/UI/Button.vue";
import MobileHeroImg from "../../assets/KicksMobileScreenHero.png";

const mobileScreen = window.innerWidth <= 650;
</script>



<template>
<div class="heroImg">
    <div class="ImageBlock">
        <img class="main" :src="heroMainImg" />  
        <img class="label" :src="heroLabel"  />
        <img class="sideOne" :src="previewOne" />
        <img class="sideTwo" :src="previewTwo"  />
    </div>

  <div class="heroInfo">
    <h3>Nike Air Max</h3>
    <p>Nike introducing the new air max for everyone's comfort</p>
     <Button class="hero-btn">Shop now</Button>       
</div>
</div>

</template>

<style scoped>


.heroImg{
    text-align: center;
    align-items: center;
    position: relative;
    width: 1150px;
    
}

.ImageBlock{
    display: flex;
    justify-content: center;
    position: relative;
    
}


.heroImg .main{
   width: 100%;
   height: 100vh;
}

.heroImg .label {
   position: absolute;
   left: 0px;
   top: 90px;
}

.heroImg .sideOne {
  position: absolute;
  right: 20px;
  bottom: 190px;
}

.heroImg .sideTwo {
  position: absolute;
  right: 22px;
  bottom: 20px;
}

.heroInfo {
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    line-height: 1.3;
    width: 350px;
    left: 50px;
    bottom: 30px;
    color: white;
    padding: 30px 10px;
}

.heroInfo h3{
   font-size: 55px; 
   font-weight: 500;
}

.heroInfo p {
   margin-bottom: 20px;
}


@media (max-width: 1200px) {
.heroImg{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1000px;
 
}

.ImageBlock{
    width: 100%;
}

.heroImg .main{
   width: 100%;
   height: 90vh;
}


.heroImg .label {
   position: absolute;
   left: 0px;
   top: 50px;
   width: 50px;
}

.heroImg .sideOne {
  position: absolute;
  right: 20px;
  bottom: 190px;
  width: 120px;
}

.heroImg .sideTwo {
  position: absolute;
  right: 22px;
  bottom: 20px;
  width: 120px;
}

.heroInfo {
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    line-height: 1.3;
    width: 350px;
    left: 50px;
    bottom: 0px;
    color: white;
    padding: 30px 10px;
}

.heroInfo h3{
   font-size: 45px; 
   font-weight: 500;
}

.heroInfo p {
   margin-bottom: 20px;
   font-size: 14px;
}

.hero-btn{
    width: 90px;
    font-size: 12px;
    height: 35px;
}

}




@media (max-width: 1100px) {
    .heroImg{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    
}

.ImageBlock{
    width: 800px;
}

.heroImg .main{
   width: 800px;
   height: 80vh;
}



    .heroImg .label {
   position: absolute;
   left: 0px;
   top: 45px;
   width: 50px;
}

.heroImg .sideOne {
  position: absolute;
  right: 10px;
  bottom: 120px;
  width: 100px;
}

.heroImg .sideTwo {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 100px;
}

.heroInfo {
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    line-height: 1;
    width: 350px;
    text-align: left;
    bottom: 20px;
    left: 10px;
    color: white;
    padding: 10px 10px;
}

.heroInfo h3{
   font-size: 35px; 
   font-weight: 500;
}


.heroInfo p {
   margin-bottom: 10px;
   font-size: 14px;
}

.hero-btn{
    width: 90px;
    font-size: 12px;
    height: 35px;
}

}



@media (max-width: 950px) {
.heroImg{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 70vh;
    
}

.ImageBlock{
    width: 700px;
}

.heroImg .main{
    width: 700px;
    height: 70vh;
}



.heroImg .label {
   position: absolute;
   left: 0px;
   top: 35px;
   width: 35px;
}

.heroImg .sideOne {
  position: absolute;
  right: 10px;
  bottom: 100px;
  width: 90px;
}

.heroImg .sideTwo {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 90px;
}

.heroInfo {
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    line-height: 1;
    width: 250px;
    bottom: 10px;
    left: 10px;
    color: white;
    padding: 10px 10px;
}

.heroInfo h3{
   font-size: 25px; 
   font-weight: 500;
}


.heroInfo p {
   margin-bottom: 10px;
   font-size: 10px;
}

.hero-btn{
    width: 90px;
    font-size: 12px;
    height: 35px;
  }
}



@media (max-width: 850px) {
.heroImg{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 70vh;
    
}

.ImageBlock{
    width: 630px;
    height: 70vh;
}

.heroImg .main{
    width: 630px;
    height: 70vh;
}



.heroImg .label {
   position: absolute;
   left: 0px;
   top: 35px;
   width: 35px;
}

.heroImg .sideOne {
  position: absolute;
  right: 10px;
  bottom: 100px;
  width: 90px;
}

.heroImg .sideTwo {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 90px;
}

.heroInfo {
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    line-height: 1;
    width: 250px;
    bottom: 10px;
    left: 10px;
    color: white;
    padding: 10px 10px;
}

.heroInfo h3{
   font-size: 25px; 
   font-weight: 500;
}


.heroInfo p {
   margin-bottom: 10px;
   font-size: 10px;
}

.hero-btn{
    width: 90px;
    font-size: 12px;
    height: 35px;
  }
}



@media (max-width: 750px) {
.heroImg{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 65vh;
    
}

.ImageBlock{
    width: 570px;
    height: 63vh;
}

.heroImg .main{
    width: 570px;
    height: 63vh;
}



.heroImg .label {
   position: absolute;
   left: 0px;
   top: 35px;
   width: 35px;
}

.heroImg .sideOne {
  position: absolute;
  right: 10px;
  bottom: 100px;
  width: 90px;
}

.heroImg .sideTwo {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 90px;
}

.heroInfo {
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    line-height: 1;
    width: 250px;
    bottom: 10px;
    left: 10px;
    color: white;
    padding: 10px 10px;
}

.heroInfo h3{
   font-size: 25px; 
   font-weight: 500;
}


.heroInfo p {
   margin-bottom: 10px;
   font-size: 10px;
}

.hero-btn{
    width: 90px;
    font-size: 12px;
    height: 35px;
  }
}



@media (max-width: 650px) {
.heroImg{
  
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 98%;
    height: 50vh;
    
}

.ImageBlock{
    width: 98%;
    height: 50vh;
}

.heroImg .main{
    width: 98%;
    height: 50vh;
}



.heroImg .label {
   position: absolute;
   left: 0px;
   top: 35px;
   width: 35px;
}

.heroImg .sideOne {
  position: absolute;
  right: 10px;
  bottom: 100px;
  width: 90px;
}

.heroImg .sideTwo {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 90px;
}

.heroInfo {
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    line-height: 1;
    width: 250px;
    bottom: 10px;
    left: 10px;
    color: white;
    padding: 10px 10px;
}

.heroInfo h3{
   font-size: 25px; 
   font-weight: 500;
}


.heroInfo p {
   margin-bottom: 10px;
   font-size: 10px;
}

.hero-btn{
    width: 90px;
    font-size: 12px;
    height: 35px;
  }
}


</style>