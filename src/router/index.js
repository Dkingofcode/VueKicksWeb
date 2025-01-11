import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../Pages/LandingPage/index.vue";
import LoginPage from "../Pages/Auth/LoginPage.vue";
import RegisterPage from "../Pages/Auth/RegisterPage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
