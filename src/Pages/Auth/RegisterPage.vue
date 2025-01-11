<script setup lang="tsx">
import { ref } from 'vue';

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
    <div class="registerForm">
      <h2>Register</h2>

      
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="firstname">FirstName</label>
          <input type="text" id="first-name" v-model="firstname" required />
          
          <label for="lastname">LastName</label>
          <input type="text" id="first-name" v-model="lastname" required />

            <label for="password">Password</label>
            <input type="password" id="password" />

            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />

            <button type="submit">Register</button>
            </div>
            </form>
            </div>
            </div>
            </template>

            <style scoped>
            .registerPage {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            }

            .registerForm {
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
            ```

            The RegisterPage component is a simple form that allows users to register for the app. The form includes fields for the user's email, password, and confirm password, as well as a submit button. The component is styled using CSS to center the form on the page and style the form elements.

            The component is structured using a template tag, which contains the HTML markup for the form, and a style tag, which contains the CSS styles for the form. The script tag is used to define the component's logic using the setup attribute.   

            ```