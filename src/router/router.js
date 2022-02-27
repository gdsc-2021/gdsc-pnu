//📁router/router.js
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Intro from "../views/Intro.vue";
import Members from "../views/Members.vue";
import Activity from "../views/Activity.vue";

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
  {
    path: "/activities",
    component: Activity,
  },
];

const router = createRouter({
  history: createWebHistory("/gdsc-pnu"),
  routes,
});

export default router;
