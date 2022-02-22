<template>
  <div class="root">
    <img class="wave1" alt="wave1" src="../assets/4.png" />
    <div class="wrapper">
      <div class="middle">
        <img alt="logo" src="../assets/3.svg" />
        <span
          >Google Developer Students Club<br />
          Pusan National University Chapter</span
        >
      </div>
    </div>
    <div class="wrapper2">
      <div class="item">
        <div class="intro">
          <a href="/intro">
            <span>Introduce</span>
            <img alt="aroow" src="../assets/14.svg" />
          </a>
        </div>
        <img alt="line" src="../assets/1.svg" />
      </div>
    </div>
    <img id="bottom-wave" alt="12" src="../assets/144.svg" />
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
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
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 477px;
  min-width: 1920px;
}

.wave1 {
  position: absolute;
  height: 403px;
  max-height: 391px;
  max-width: 403px;
  top: 0;
  left: 0;
}

.middle {
  display: flex;
  align-items: flex-end;
  padding-top: 250px;
  width: 80%;
  /* min-width: 1536px; */
}

.middle span {
  width: auto;
  height: 120px;
  object-fit: contain;
  font-family: "AppleSDGothicNeo";
  font-size: 50px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #050505;
  padding-left: 5%;
}
.intro img {
  width: 45px;
  height: 29px;
  object-fit: contain;
}

.wrapper2 {
  display: flex;
  margin-top: 20px;
  /* margin-top: 10%; */
  justify-content: end;
  align-items: center;
  min-width: 1920px;
}

.wrapper2 .item {
  justify-content: end;
  text-align: end;
}
.intro {
  display: flex;
  justify-content: end;
  padding-right: 120px;
  padding-bottom: 25px;
}
.intro a {
  width: 200px;
  border: none;
  background-color: transparent;
  align-items: center;
  display: flex;
  cursor: pointer;
  text-decoration: none;
}

.intro span {
  width: 159px;
  height: 48px;
  object-fit: contain;
  text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16);
  font-family: "AppleSDGothicNeo";
  font-size: 40px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  padding-bottom: 10px;
  padding-right: 10px;
}

#bottom-wave {
  position: absolute;
  right: -44px;
  bottom: 0;
  width: 1109.1px;
  height: 287.8px;
  transform: translate(0%, 0%);
}
</style>
