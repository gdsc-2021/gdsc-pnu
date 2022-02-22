<template>
  <div class="card-item-wrapper">
    <div v-for="content in cards" :key="content.id">
      <div id="card">
        <div class="inner-wrapper">
          <div class="top">
            <img src="../assets/logo.png" alt="avatar" />
          </div>
          <div class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      props: {
        cards: {
          type: Array,
          required: false,
          default: () => [
            {
              id: 1,
              name: "string",
              address: "string",
              githubAvatarUrl:
                "https://avatars.githubusercontent.com/sangeunnn",
              git: "string",
              skillAndLanguage: [{ 1: "string", 2: "string", 3: "string" }],
              attendingSessions: [{ 1: "string", 2: "string", 3: "string" }],
            },
            {
              id: 2,
              name: "string",
              address: "string",
              githubAvatarUrl:
                "https://avatars.githubusercontent.com/sangeunnn",
              git: "string",
              skillAndLanguage: [{ 1: "string", 2: "string", 3: "string" }],
              attendingSessions: [{ 1: "string", 2: "string", 3: "string" }],
            },
            {
              id: 3,
              name: "string",
              address: "string",
              githubAvatarUrl:
                "https://avatars.githubusercontent.com/sangeunnn",
              git: "string",
              skillAndLanguage: [{ 1: "string", 2: "string", 3: "string" }],
              attendingSessions: [{ 1: "string", 2: "string", 3: "string" }],
            },
          ],
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

#card {
  width: 526px;
  height: 304px;
  object-fit: contain;
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin: 60px;
}
</style>
