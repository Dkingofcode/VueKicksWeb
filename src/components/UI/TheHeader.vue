<script setup lang="jsx">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Logo from './Logo.vue';
import searchIcon from "../icons/iconSearch.vue";
import profileIcon from "../icons/iconProfile.vue";
import UserAccount from "../icons/iconUserAccount.vue";  
import hamburgerIcon from '../icons/iconHamburger.vue';

const list = ["Addidas", "Nike", "Puma", "Reebok"];

const isMenDropdownVisible = ref(false);
const isWomenDropdownVisible = ref(false);
const isMobileMenuVisible = ref(false);
const isMobileView = ref(window.innerWidth <= 768);

// Toggle dropdown visibility
  function toggleDropdown(gender) {
    if (gender === 'men'){
       isMenDropdownVisible.value =  !isMenDropdownVisible.value;

    } else if (gender === 'women') {
       isWomenDropdownVisible.value =  !isWomenDropdownVisible.value;       
    }
  }

  //TOggle mobile menu visibility
  function  toggleMobileMenu() {
    isMobileMenuVisible.value = !isMobileMenuVisible.value;
//   alert("mobile")  
}

// Update isMobileView based on screen width
function updateScreenWidth() {
  isMobileView.value = window.innerWidth <= 768;
} 

// Add and remove event listeners for screen resizing
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

// function handleDrop() {
//   return list;
// }

</script>

<template>
  <header class="navigation">

    <div class="container">

    

    <!-- Options -->
    <div class="NavMenu" :class="{ options: !isMobileView, mobileOptions: isMobileView && isMobileMenuVisible }">
      <p>New Drops 🧨</p>
      <div  class="dropdown-container">
          <p style="cursor: pointer;" @click="toggleDropdown('men')">Men &darr;</p>
          <!---  Dropdown for Men -->
          <ul v-if="isMenDropdownVisible" class="dropdown">
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
          </ul>
        </div>  
        <div class="dropdown-container">
            <p style="cursor: pointer;" @click="toggleDropdown('women')">Women &darr;</p>
            <!--- Dropdown for Women ---->
            <ul v-if="isWomenDropdownVisible" class="dropdown"> 
                <li v-for="(item, index) in list" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>

     <!-- Mobile View -->
     <div class="mobileView">
      <hamburgerIcon @click="toggleMobileMenu" />
    </div>

    
    <!-- Logo -->
    <div class="logo">
      <Logo />
    </div>  

    <!-- User Icons -->
    <div class="userIcons">
      <!-- Search Icon only shows on large screens -->
      <searchIcon class="search" v-if="!isMobileView" />
      <profileIcon />
      <UserAccount />
    </div>

   </div>
</header>

</template>

<style scoped>
.navigation {
  background:  rgb(213, 213, 213);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 10px;
}

.navigation .container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FAFAFa;
  padding: 0px 10px;
  width: 90%;
  border: 3px solid #FAFAFa;
  margin: 0 auto;
  border-radius: 20px;
}

.options {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.logo {
  width: 10vw;
  height: 100px;
  display: flex;
  align-items: center;
}

.dropdown-container {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px;
  list-style: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 150px;
}

.dropdown li {
  padding: 5px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

.mobileView {
  display: none;
}

.mobileOptions{
    display: none;
}

.userIcons {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

/* Styles for larger screens */



/* Styles for smaller screens */
@media (max-width: 760px) {
  .navigation {
    display: flex;
    background-color:  rgb(213, 213, 213);;
    justify-content: space-between;
    padding: 5px 50px;
    position: relative;
}

/* .navigation {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 98vw;
  padding: 0px 10px;
} */

.navigation .container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FAFAFa;
  padding: 0px 15px;
  width: 95%;
  border: 4px solid #fafafa;
  height: 80px;
  /* border: 3px solid red #FAFAFa; */
  margin: 0 auto;
  border-radius: 20px;
}

  .NavMenu{
    display: none;
  }


.mobileView {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .mobileOptions{
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: burlywood;
    border: 3px solid white;
    padding: 5px 10px;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    left: 20px;
    transition: all 5s ease;
  }

  .logo {
    width: 15vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .options {
    display: none;
  }

  .userIcons {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  .userIcons .search {
    display: none; /* Ensure search icon is hidden in mobile */
  }
}
</style>
