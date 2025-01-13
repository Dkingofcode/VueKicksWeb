<script lang="tsx" setup>
import { ref } from 'vue';
import TheFooter from '@/components/UI/TheFooter.vue';
import GoogleIcon from '../../assets/logos_google-icon.png';
import appleLogo from '../../assets/ic_baseline-apple.png';
import facebookLogo from '../../assets/logos_facebook.png';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Email:', email.value, 'Password:', password.value);
};
</script>

<template>
  <div class="LoginPage">

    <div class="Top">
      <div class="LoginForm">
      <h2>Login</h2>
      <a href="#">Forgot your password?</a>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />

          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />

          <div class="checkbox-group">
            <input type="checkbox" id="keep-logged-in" />
            <label for="keep-logged-in">
              Keep me logged in - applies to all log-in options below.
              <a href="#">More info</a>
            </label>
          </div>

          <button type="submit">EMAIL LOGIN</button>
        </div>

        <div class="Btns">
          <div class="SignBtn">
            <img :src="GoogleIcon" alt="Google Icon" />
          </div>
          <div class="SignBtn">
            <img :src="appleLogo" alt="Apple Logo" />
          </div>
          <div class="SignBtn">
            <img :src="facebookLogo" alt="Facebook Logo" />
          </div>
        </div>

        <p>
          By clicking 'Log In' you agree to our website's <a href="#">Kicks Club Terms & Conditions</a>, 
          <a href="#">Kicks Privacy Notice</a>, and <a href="#">Terms & Conditions</a>.
        </p>
      </form>

      </div>

      <div class="clubVoucher">
        <div>
          <h2>Join Kicks Club and Get Rewarded Today</h2>
          <p>As a kicks club member, you get rewarded with what you love for doing what you love.</p>
          <p>Sign up today and receive immediate access to these Level 1 benefits:</p>
          <ul class="benefits">
            <li>Free shipping</li>
            <li>A 15% off voucher for your next purchase</li>
            <li>Access to Members Only products and sales</li>
            <li>Access to adidas Running and Training apps</li>
            <li>Special offers and promotions</li>
          </ul>
          <p>
            Join now to start earning points, reach new levels, and unlock more rewards and benefits
            from adiClub.
          </p>
          <button class="JoinClub">JOIN THE CLUB</button>
        </div>
      </div>

    </div>
    
    
    <TheFooter />
  </div>
</template>

<style scoped>
.LoginPage {
  background-color: rgb(213, 213, 213);
  justify-content: center;
  align-items: center;
  height: 100vh;
}

           .Top{
             display: flex;
             gap: 33px;
             width: 90%;
             height: 450px;
             margin: 10px auto;
            padding: 20px;
            border-radius: 5px;
           }


.LoginForm {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: transparent;
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

.Btns {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
}

.SignBtn {
  border: 1px solid black;
  padding: 5px 21px;
  border-radius: 10px;
}

.SignBtn img {
  width: 18px;
}

.clubVoucher {
  border-radius: 20px;
  background-color: white;
  width: 700px;
  height: 300px;
  height: auto;
  padding: 30px;
  text-align: left;
}

.clubVoucher h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.benefits {
  font-size: 14px;
  padding: 15px 0px;
}

.clubVoucher p {
  font-size: 14px;
}

.JoinClub {
  margin: 40px 0px 0px 0px;
}
</style>
