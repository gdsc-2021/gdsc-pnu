<template>
  <div class="root">
    <div class="wrapper">
      <div class="dropdown-wrapper">
        <div class="dropdown">
          <button size="lg" class="btn" @click="handleBtn">
            {{ memeberNumbr }}th Members
            <b-icon-triangle-fill
              class="triangle--icon"
              :style="[
                btnState
                  ? {
                      color: '#000',
                      transform: 'rotateZ(180deg)',
                      transition: 'transform 0.2s ease-in-out',
                    }
                  : {
                      color: '#000',
                      transform: 'rotateZ(360deg)',
                      transition: 'transform 0.2s ease-in-out',
                    },
              ]"
            />
          </button>
          <div class="dropdown-content" v-if="btnState" v-on:click="handleBtn">
            <a href="#">1st Members</a>
            <a href="#">2nd Members</a>
            <a href="#">3rd Members</a>
            <a href="#">4th Members</a>
            <a href="#">5th Members</a>
          </div>
        </div>
      </div>
      <div class="card-item-wrapper">
        <!-- <Card :cards="cards" /> -->
        <div
          class="card-item-wrapper"
          v-for="content in cards"
          :key="content.id"
        >
          <div id="card" class="card">
            <div class="inner-wrapper">
              <div class="top">
                <div class="left-content">
                  <img :src="content.githubAvatarUrl" alt="avatar" />
                </div>
                <div class="right-content">
                  <div class="right-content-top">
                    <span>Name: {{ content.name }}</span>
                    <span>Address: {{ content.address }}</span>
                    <span>Git: {{ content.git }}</span>
                  </div>
                  <div class="right-content-bottom">
                    <div
                      class="bottom"
                      v-for="item in content.skillAndLanguage"
                      :key="item.id"
                    >
                      <div class="chip">
                        <span>{{ item.value }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div
                  class="attend-session"
                  v-for="item in content.attendingSessions"
                  :key="item.id"
                >
                  <div class="gray-chip">
                    <span>
                      {{ item.value }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Card from "../components/Card.vue";
import { data } from "./data/dummy.js";

export default {
  name: "Members",
  props: {},
  data() {
    return {
      btnState: false,
      cards: data,
      memeberNumbr: 0,
    };
  },
  components: {},
  methods: {
    handleBtn() {
      console.log(this.btnState);
      if (this.btnState) {
        this.btnState = false;
      } else {
        this.btnState = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  width: 100%;
  max-width: 2560px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1542px;
  max-width: 1542px;
  background-color: #fff;
  padding: 20px;
  padding-top: 200px;
}

.wave1 {
  position: absolute;
  height: 45%;
  width: 24%;
  top: 0;
  left: 0;
}
.card-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#card-left {
  width: 526px;
  height: 304px;
  object-fit: contain;
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin: 30px;
}
#card-right {
  width: 526px;
  height: 304px;
  object-fit: contain;
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin: 30px;
}

.dropdown-wrapper {
  width: 1542px;
  max-width: 1542px;
  display: flex;
  padding-left: 15%;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown .btn {
  width: 239px;
  height: 75px;
  border-radius: 10px;
  border: solid 1px #707070;
  background-color: #fff;
  font-family: AppleSDGothicNeo;
  font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.dropdown-content {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: center;
  flex-direction: column;
  background-color: #2c2c2c;
  width: 200px;
  height: 150px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px;
  padding-top: 67px;
}

.dropdown-content a {
  width: 200px;
  height: 100px;
  font-family: "AppleSDGothicNeo";
  font-size: 30px;
  font-weight: 300;
  padding: 10px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  text-decoration: none;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  width: 259px;
  height: 83px;
  background-color: #4c5664;
}

#card {
  width: 526px;
  height: 304px;
  object-fit: contain;
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin: 30px;
}
.card-item-wrapper {
  width: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card .inner-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card .inner-wrapper .top {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.card .inner-wrapper .top .left-content {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card .inner-wrapper .top .left-content img {
  width: 122px;
  height: 122px;
  object-fit: contain;
  border-radius: 50%;
}

.card .inner-wrapper .top .right-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
}

.card .inner-wrapper .top .right-content-top {
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
}
.card .inner-wrapper .top .right-content-bottom {
  display: flex;
  height: auto;
}

.card .inner-wrapper .top .right-content-top span {
  text-align: left;
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #0b0b0b;
}

.card .inner-wrapper .top .right-content-bottom .bottom {
  display: flex;
  align-items: center;
  justify-content: left;
  width: auto;
  height: auto;
}

.card .inner-wrapper .top .right-content-bottom .bottom .chip {
  width: auto;
  height: 22px;
  margin-right: 3px;
  padding: 2px 10px 1px 5px;
  border-radius: 11px;
  background-color: #4c5664;
}

.card .inner-wrapper .top .right-content-bottom .bottom .chip span {
  width: 76px;
  height: 19px;
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}

.card .inner-wrapper .bottom {
  display: flex;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
}

.card .inner-wrapper .bottom .attend-session {
}

.card .inner-wrapper .bottom .attend-session .gray-chip {
  width: auto;
  height: 22px;
  margin: 0 3px 3px 0;
  padding: 2px 10px 1px 5px;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 11px;
  background-color: #6a6a6a;
}

.card .inner-wrapper .bottom .attend-session .gray-chip span {
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}
</style>
