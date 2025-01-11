<script setup lang="tsx">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log(email.value, password.value);
};
</script>

<template>

  <div class="LoginPage">
    <div class="LoginForm">
      <h2>Login</h2>

      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />


            <button type="submit">Login</button>
            </div>
        </form>
     </div>
  </div>
 </template>

            <style scoped>
            .LoginPage {
            display: flex;
            background-color: rgb(213, 213, 213);
            justify-content: center;
            align-items: center;
            height: 100vh;
            }

            .LoginForm {
            width: 400px;
            padding: 20px;
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

            </style>
