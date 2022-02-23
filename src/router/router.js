//📁router/router.js
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Intro from "../views/Intro.vue";
import Members from "../views/Members.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/home",
    component: Main,
  },
  {
    path: "/intro",
    component: Intro,
  },
  {
    path: "/members",
    component: Members,
  },
];

const router = createRouter({
  history: createWebHistory("https://gdsc-2021.github.io/gdsc-pnu"),
  routes,
});

export default router;
