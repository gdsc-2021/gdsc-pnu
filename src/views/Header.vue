<template>
  <div class="hello">
    <div class="header">
      <div class="logo">
        <a href="/">Google Developer Students Club Pusan National Univ</a>
      </div>
      <div class="tabs">
        <a href="/intro">GDSC PNU 소개</a>
        <a href="/members">구성원 소개</a>
        <a href="/activities">활동 내용</a>
        <a href="/">참여 신청</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 19px 100px 9px 100px;
  object-fit: contain;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #011557;
  background-color: #fff;
  position: absolute;
  left: 0;
  width: 100%;
  min-width: 1670px;
  z-index: 2;
}
.header .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
}

.header .logo a {
  width: 547px;
  height: 31px;
  font-family: AppleSDGothicNeo;
  font-size: 25px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  text-decoration: none;
  color: #5c5c5c;
}
.header .tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin-right: 100px;
}
.header .tabs a {
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: auto;
  min-width: 160px;
  height: 24px;
  font-family: "AppleSDGothicNeo";
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #5c5c5c;
  text-decoration: none;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
