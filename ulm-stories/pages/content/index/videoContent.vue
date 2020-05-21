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
      chapter: "ensinger",
      scene: 0
    }
  }),
  mounted() {
    console.log("current Data: " + this.currentData);

    this.chapter = this.$route.query.chapter;
    this.scene = this.$route.query.scene;
    this.$store.dispatch("finishedScene", {
      chapter: this.chapter,
      scene: parseInt(this.scene)
    });
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
      this.$store.dispatch("finishedScene", {
        chapter: this.chapter,
        scene: parseInt(this.scene)
      });
      console.log(this.currentData);
      this.scene = this.scene + 1;

      const newData = this.getVideoByChapterAndScene(this.chapter, this.scene);
      if (!newData) {
        const path = "/content/";
        const query = {
          chapter: this.chapter,
          scene: this.scene,
          direct: true
        };
        console.debug({ path, query });
        this.$router.push({ path, query });
      } else {
        this.currentData = newData;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap");

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
  font-size: 20px;
  text-align: left;
  grid-area: text;
  border-radius: 20px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 33px solid transparent;
    border-top-color: whitesmoke;
    border-bottom: 0;
    border-left: 0;
    margin-left: -16.5px;
    margin-bottom: -33px;
  }
}

.button {
  position: absolute;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  background-color: whitesmoke;
  right: 5%;
  bottom: 5%;
}

.videoStyle {
  position: absolute;
  bottom: 0;
  max-height: 70%;
}
</style>
