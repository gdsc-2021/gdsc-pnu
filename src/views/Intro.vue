<template>
  <div class="root">
    <img class="wave1" alt="wave1" src="../assets/4.png" />
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  width: 100%;
  min-width: 1920px;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
}

.wave1 {
  position: absolute;
  height: 45%;
  width: 24%;
  top: 0;
  left: 0;
}
</style>
