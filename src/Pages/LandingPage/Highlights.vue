<script setup lang="jsx">
  import Button from '@/components/UI/Button.vue';
import HighlightCard from '@/components/UI/HighlightCard.vue';
//  import HighlightCard from '@/components/UI/HighlightCard.vue';

</script>


<template>
    <div class="container">

        <div class="header">
     <h1>Don't Miss Out New Drops</h1>
     <Button class="header-btn">Shop New Drops</Button>
   </div>

   <div class="NewCards">
     <HighlightCard></HighlightCard>
     <HighlightCard></HighlightCard>
     <HighlightCard></HighlightCard>
     <HighlightCard></HighlightCard>
   </div>

    </div>
   

</template>

<style scoped>
.container{
    padding: 10px 50px;
    background: rgb(213, 213, 213);
}


.header{
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
}

.NewCards{
    display: flex;
    gap: 0px;
    row-gap: 30px;
}

@media (max-width: 1200px) {
 .header{
    display: flex;
    justify-content: space-around;
}


    .NewCards{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        place-items: center;
        margin: 0 auto;
    }

}


@media (max-width: 700px){
    .header{
    display: flex;
    justify-content: space-around;
   }

   .header h1{
    font-size: 22px;
    align-items: center;
    display: flex;
    justify-content: center;
   }

   .header-btn{
    font-size: 12px;
   }
    
    .NewCards{
        width: 100%;
        display: grid;
        row-gap: 10px;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        place-items: center;
    }

}

</style>