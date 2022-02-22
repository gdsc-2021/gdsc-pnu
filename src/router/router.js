//📁router/router.js
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Intro from "../views/Intro.vue";
import Members from "../views/Members.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
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
  history: createWebHistory(),
  routes,
});

export default router;