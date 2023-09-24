import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";

import HomePage from "./views/HomePage.vue";
import LoginPage from "./views/LoginPage.vue";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
