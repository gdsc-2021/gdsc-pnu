<template>
  <div class="root">
    <img class="wave1" alt="wave1" src="../assets/4.png" />
    <img class="wave2" alt="wave2" src="../assets/intro/12.svg" />
    <img class="wave3" alt="wave3" src="../assets/intro/5.svg" />
    <div class="wrapper1">
      <div class="top-left">
        <img src="../assets/19.svg" alt="img" />
      </div>
      <div class="top-right">
        <span class="title">안녕하세요<br /></span>
        <span class="title"
          >Google Developer Students Club 부산대학교(Pusan National
          Univ.)입니다.<br /><br
        /></span>
        <span class="body"
          >이곳에는 Google Developer Students Club 소개및 GDSC PNU 소개가
          들어갈예정입니다~! 어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구</span
        >
      </div>
    </div>
    <div class="wrapper2">
      <div class="top-right">
        <span class="title">안녕하세요<br /></span>
        <span class="title"
          >Google Developer Students Club 부산대학교(Pusan National
          Univ.)입니다.<br /><br
        /></span>
        <span class="body"
          >이곳에는 Google Developer Students Club 소개및 GDSC PNU 소개가
          들어갈예정입니다~! 어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구</span
        >
      </div>
      <div class="top-left">
        <img src="../assets/19.svg" alt="img" />
      </div>
    </div>
    <div class="wrapper1">
      <div class="top-left">
        <img src="../assets/19.svg" alt="img" />
      </div>
      <div class="top-right">
        <span class="title">안녕하세요<br /></span>
        <span class="title"
          >Google Developer Students Club 부산대학교(Pusan National
          Univ.)입니다.<br /><br
        /></span>
        <span class="body"
          >이곳에는 Google Developer Students Club 소개및 GDSC PNU 소개가
          들어갈예정입니다~! 어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
          소개어쩌구저쩌구저쩌구</span
        >
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "Intro",
  props: {},
  components: { Footer },
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
  align-items: center;
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
  z-index: 0;
}

.wave3 {
  position: absolute;
  height: 45%;
  width: 24%;
  bottom: -750px;
  right: -30px;
}

.wrapper1 {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 227px;
  z-index: 1;
}

.wrapper1 .top-left img {
  width: 555px;
  height: 303px;
}

.wrapper1 .top-right {
  display: flex;
  flex-direction: column;
  margin-left: 87px;
}
.wrapper1 .top-right .title {
  font-family: AppleSDGothicNeo;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.wrapper1 .top-right .body {
  text-align: left;
}
.wrapper2 {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 227px;
  z-index: 1;
}

.wrapper2 .top-left img {
  width: 555px;
  height: 303px;
}

.wrapper2 .top-right {
  display: flex;
  flex-direction: column;
}

.wrapper2 .top-right .title {
  font-family: AppleSDGothicNeo;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.wrapper2 .top-right .body span {
  text-align: left;
  margin-top: 90px;
}
</style>
