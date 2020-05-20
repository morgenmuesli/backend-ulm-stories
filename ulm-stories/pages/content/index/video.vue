<template>
  <div>
    <div
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/background/' + this.currentData.img + '.jpg') +
          ')',
      }"
      class="containerApp"
    >
      <div class="text">
        <ul>
          <li>
            <h3 v-html="currentData.text"></h3>
          </li>
        </ul>
      </div>
      <video
        v-bind:src="
          require('@/assets/webm/' + this.currentData.video + '.webm')
        "
        class="videoStyle"
        autoplay
        type='video/webm"'
      ></video>

      <button v-on:click="updateData" class="button">
        {{ currentData.answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dialog",
  data: () => ({
    currentData: {
      video: "sample",
      text: "sample text",
      img: "ensinger",
      answer: "sample",
    },
  }),
  asyncData: ({ query, store }) => ({
    chapter: query.chapter,
    scene: query.scene,
    currentData: store.getters["videos/getVideoByChapterAndScene"](
      query.chapter,
      query.scene
    ),
  }),
  mounted() {
    console.log("current Data: " + this.currentData);
  },
  methods: {
    updateData: () => {
      const newData = this.$store.getters["videos/getVideoByChapterAndScene"](
        this.currentData.chapter,
        this.currentData.scene + 1
      );
      if (!newData) {
        this.$router.push(this.currentData.chapter, this.currentData.scene + 1);
      } else {
        this.currentData = newData;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
.containerApp {
  display: block;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  object-fit: cover;
}

.text {
  background: whitesmoke;
  padding: 25px;
  font-family: Kalam, cursive;
  text-align: left;
  grid-area: text;
  border-radius: 20px;
  overflow: scroll;
}

.button {
  position: absolute;
  font-family: Ubuntu;
  color: black;
  background-color: #a5a5a5;
  border: 1px solid #6e6e6e;
  right: 5%;
  bottom: 5%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.videoStyle {
  position: absolute;
  bottom: 0;
  max-height: 70%;
}
</style>
