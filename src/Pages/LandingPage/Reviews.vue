<script setup lang="jsx">
import Button from '@/components/UI/Button.vue';
import ReviewCard from '@/components/UI/ReviewCard.vue';
import ReviewOne from "../../assets/reviewImgOne.png";
import ReviewTwo  from "../../assets/reviewImgTwo.png";
import ReviewThree  from "../../assets/reviewImgThree.png";
import profileOne from "../../assets/profileOne.png"
import Profiletwo from "../../assets/profileTwo.png"
import Profilethree from "../../assets/ProfileThree.png"
</script>


<template>

<div class="container">
    <header>
        <h1>Reviews</h1>
        <Button>See all</Button>
    </header>

    <div class="ReviewCards">
       <ReviewCard :reviewImage="ReviewOne" :profileImage="profileOne"  />
       <ReviewCard :reviewImage="ReviewTwo" :profileImage="Profiletwo" />
       <ReviewCard :reviewImage="ReviewThree" :profileImage="Profilethree" />
    </div>
</div>

</template>


<style scoped>
.container{
    background: rgb(213, 213, 213);
    padding: 90px 0px;
}


header{
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
}

.ReviewCards{
    display: flex;
    gap: 90px;
    flex-wrap: wrap;
    padding: 10px 50px;
    align-items: center;
    justify-content: space-between;
}


@media (max-width: 700px){


    
.ReviewCards{
    display: flex;
    gap: 90px;
    flex-wrap: wrap;
    padding: 10px 50px;
    align-items: center;
    justify-content: center;
}

}

</style>