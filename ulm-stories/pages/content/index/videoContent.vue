<template>
  <div>
    <div
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/background/' + this.currentData.img + '.jpg') +
          ')'
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
import { mapGetters } from "vuex";
export default {
  layout: "dialog",
  data: () => ({
    currentData: {
      video: "sample",
      text: "sample text",
      img: "ensinger",
      answer: "sample",
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

    this.chapter = this.$route.query.chapter;
    this.scene = this.$route.query.scene;
    console.log("chapter&scene ", this.chapter, " ", this.scene);
    this.currentData = this.$store.getters["videos/getVideoByChapterAndScene"](
      this.$route.query.chapter,
      this.$route.query.scene
    );
  },
  computed: {
    ...mapGetters({
      getVideoByChapterAndScene: ["videos/getVideoByChapterAndScene"]
    })
  },
  methods: {
    updateData() {
      console.log(this.currentData);
      this.scene = this.scene + 1;

      const newData = this.getVideoByChapterAndScene(this.chapter, this.scene);
      if (!newData) {
        const path = "/content/";
        const query = {
          chapter: this.current_chapter,
          scene: this.scene,
          direct: true
        };
        this.$router.push({ path, query });
      } else {
        this.currentData = newData;
      }
    }
  }
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
  box-shadow: 0px 17px 10px -7px rgba(0, 0, 0, 0.4);
}

.videoStyle {
  position: absolute;
  bottom: 0;
  max-height: 70%;
}
</style>
