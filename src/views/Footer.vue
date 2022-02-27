<template>
  <div class="footer">
    <div class="wrapper1">
      <div class="left-content">
        <img src="../assets/41.svg" alt="footer-logo" />
      </div>
      <div class="right-content">
        <a href="/intro">GDSC PNU 소개</a>
        <a href="/members">구성원 소개</a>
        <a href="/activities">활동 내용</a>
        <a href="/">참여 신청</a>
      </div>
    </div>
    <div class="wrapper2">
      <span
        >Copyrights reserved by Google Developer Students Clubs Pusan National
        Univ.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background-color: #f4f4f4;

  display: flex;
  width: 100%;
  min-width: 1920px;
  flex-direction: column;
}

.wrapper1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.wrapper1 .left-content {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.wrapper1 .right-content {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.wrapper1 .right-content a {
  width: auto;
  height: 24px;
  margin-right: 50px;
  font-family: "AppleSDGothicNeo";
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #5c5c5c;
  text-decoration: none;
}

.wrapper2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper2 span {
  width: 646px;
  height: 24px;
  object-fit: contain;
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #9d9d9d;
}
</style>
