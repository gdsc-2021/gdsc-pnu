<template>
  <div class="activity">
    <div class="wrapper1">
      <span class="title">Find Inspiration </span>

      <span class="body"
        >Learn how Google Developer Student Clubs have successfully built their
        communities and engaged members to learn and share best practices with
        one another.</span
      >
    </div>
    <div class="wrapper2"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "Activity",
  components: { Footer },
};
</script>
<style>
.activity {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1920px;
  justify-content: center;
  align-items: center;
}

.activity .wrapper1 {
  display: flex;
  min-height: 499px;
  min-width: 1920px;
  height: 499px;
  padding: 0 0 126px;
  background-color: #f0f0f0;
}

.activity .wrapper1 .title span {
  width: 349px;
  height: 60px;
  margin: 114px 1437px 34px 134px;
  font-family: AppleSDGothicNeo;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4887ff;
}

.activity .wrapper1 .body span {
  width: 1353px;
  height: 72px;
  margin: 34px 433px 0 134px;
  font-family: AppleSDGothicNeo;
  font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #5c5c5c;
}
</style>
