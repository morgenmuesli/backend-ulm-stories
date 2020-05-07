<template>
  <div>
    <div
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/background/' + this.currentData.img + '.jpg') +
          ')'
      }"
      class="container"
    >
      <video
        class="videoStyle"
        v-bind:src="
          require('@/assets/webm/' + this.currentData.video + '.webm')
        "
        autoplay
        loop
        type='video/webm"'
      ></video>
      <div class="text">
        <ul>
          <li>
            <h3>{{ currentData.text }}</h3>
          </li>
        </ul>
      </div>
      <div v-on:click="updateData" class="button">
        <button></button>
      </div>
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
      img: "ensinger"
    }
  }),
  asyncData: ({ query, store }) => ({
    chapter: query.chapter,
    scene: query.scene,
    currentData: store.getters["videos/getVideoByChapterAndScene"](
      query.chapter,
      query.scene
    )
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
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-areas: ". . text text" ". . text text " ". . . ." "video video . .";
  padding: 16px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.characterImage {
  grid-area: image;
  height: 100%;
}

img {
  object-fit: cover;
}

.text {
  background: whitesmoke;
  padding: 25px;
  text-align: center;
  grid-area: text;
  border-radius: 20px;
  overflow: scroll;
}

.button {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  background-repeat: no-repeat;
  outline: none;
  padding: 100% 100%;
  visibility: hidden;
}

.videoStyle {
  grid-area: video;
}
</style>
