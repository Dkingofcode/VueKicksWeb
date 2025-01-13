<script setup lang="tsx">
import { ref } from 'vue';
import TheFooter from '@/components/UI/TheFooter.vue';
import GoogleIcon from "../../assets/logos_google-icon.png";
import appleLogo from "../../assets/ic_baseline-apple.png";
import facebookLogo from "../../assets/logos_facebook.png";

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');

const handleRegister = () => {
  console.log(firstname.value, lastname.value, email.value, password.value);
};

</script>

<template>
  <div class="registerPage"> 
    
    <div class="Top">
      <div class="registerForm">
        <h2>Register</h2>
      <p>Sign up with</p>

     <div class="Btns">
       <div class="SignBtn"><img :src="GoogleIcon" /></div>
       <div class="SignBtn"><img :src="appleLogo" /></div>
       <div class="SignBtn"><img :src="facebookLogo" /></div>
     </div>
     
     <p>OR</p>

      
      <form @submit.prevent="handleRegister"> 
        <div class="form-group">
          <label for="firstname">Your Name</label>
          <input type="text" id="first-name" placeholder="First Name" v-model="firstname" required />
          
          <input type="text" id="last-name" placeholder="Last Name" v-model="lastname" required />

          <h4>Gender</h4> 
          <div style="display: flex;">
            <input type="checkbox" />
            <label for="male">Male</label>
            <input type="checkbox" />
            <label for="female">Female</label>
            <input type="checkbox" />
            <label for="other">Other</label>  
          </div>

            <label for="email">Login Details</label>
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="confirmPassword" />
             <p style="font-size: 12px;">Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</p>
             

             <div style="display: flex; gap: 10px; padding: 20px 0px;">
               <input  type="checkbox" style="display: block; width: 15px" />
               <label>By clicking 'Log In' you agree to our website Kicks<a>Club Terms & Conditions</a>, <a>Kicks Privacy Notice</a> and <a>Terms & Conditions</a></label>
              
             </div>


               <div style="display: flex; gap: 5px; padding: 20px 0px;">
                 <input type="checkbox"  style="display: block; width: 15px;" />
                 <label>Keep me logged in - applies to all log in options below. More info</label>
               </div>
             
            <button class="registerBtn" type="submit">Register</button>
            </div>
            </form>
          </div>
          
          
          <div class="clubVoucher">
            <div>
             
              <h2>Join Kicks Club Get Rewarded Today.</h2>
              <p>As kicks club member you get rewarded with what you love for doing what you love.</p>
              <p>Sign up today and receive immediate access to these Level 1 benefits:</p>
              
              <ul class="benefits">
                <li>Free shipping</li>
                <li>A 15% off voucher for your next purchase</li>
                <li>Access to Members Only products and sales</li>
                <li>Access to adidas Running and Training apps</li>
                <li>Special offers and promotions</li>
              </ul>
              
              <p>Join now to start earning points, reach new levels and unlock more rewards and benefits form adiClub.</p>
              
              <button class="JoinClub">JOIN THE CLUB</button>
            </div>
          </div>
        
            </div>  
            
        </div>

            <TheFooter />
            </template>

          <style scoped>
            .registerPage {
            display: flex;
            background-color: rgb(213, 213, 213);
            justify-content: center;
            align-items: center;
            height: 150vh;
            }

          .Top{
             display: flex;
             gap: 3px;
             width: 90%;
             height: 600px;
             margin: 5px auto;
            padding: 20px;
            border-radius: 5px;
           }

            .registerForm {
            width: 400px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 25px;
            border: 1px solid #ccc;
            border-radius: 5px;
            }

            .form-group {
            margin-bottom: 20px;
            }

            label {
            display: block;
            margin-bottom: 5px;
            }

            input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 5px;
            }

            .tick{
              
            }

            .Btns{
              display: flex;
              gap: 30px;
            }

            .SignBtn{
              border: 1px solid black;
              padding: 5px 21px;
              border-radius: 10px;
            }

            .SignBtn img{
              width: 18px;
            }

            button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #333;
            color: white;
            cursor: pointer;
            }

            button:hover {
            background-color: #555;
            }

            

            .clubVoucher{
              border-radius: 20px;
              background-color: white;
              width: 700px;
              height: 500px;
              padding: 30px;
              text-align: left;
            }

            .clubVoucher h2{
            
              padding: 5px 190px 50px 0px;
              font-size: 24px;
            }

            .benefits{
              font-size: 14px;
              padding: 30px 0px;
            }

            .clubVoucher p{
              font-size: 14px;;
            }

            .JoinClub{
              margin: 20px 0px;
  
            }

            </style>
            ```

            The RegisterPage component is a simple form that allows users to register for the app. The form includes fields for the user's email, password, and confirm password, as well as a submit button. The component is styled using CSS to center the form on the page and style the form elements.

            The component is structured using a template tag, which contains the HTML markup for the form, and a style tag, which contains the CSS styles for the form. The script tag is used to define the component's logic using the setup attribute.   

            ```