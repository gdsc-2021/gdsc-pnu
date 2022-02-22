<template>
  <div class="root">
    <img class="wave1" alt="wave1" src="../assets/4.png" />
    <img class="wave2" alt="wave2" src="../assets/intro/12.svg" />
    <img class="wave3" alt="wave3" src="../assets/intro/5.svg" />
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
  height: 403px;
  max-height: 391px;
  max-width: 403px;
  top: 0;
  left: 0;
}
.wave2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 27%);
}

.wave3 {
  position: absolute;
  height: 45%;
  width: 24%;
  bottom: -500px;
  right: -30px;
}
</style>
