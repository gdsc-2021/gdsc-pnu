<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./views/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #2c3e50;
}
</style>
