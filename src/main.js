import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const VueApp = createApp(App);
VueApp.use(router);
VueApp.mount("#app");
