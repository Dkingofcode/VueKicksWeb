<script setup lang="jsx">

</script>


<template>
    <button class="btn">
       <slot></slot> 
    </button>
</template>

<style scoped>
.btn{
    background-color: rgb(80, 46, 252);
    padding: 5px 5px;
    color: white;
    width: 120px;
    height: 45px;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 10px;
}


</style>