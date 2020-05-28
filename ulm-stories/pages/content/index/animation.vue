<template>
  <div class="containerApp">
    <div>
      <video
        v-bind:src="
          require('@/assets/webm/' + this.currentData.video + '.webm')
        "
        @ended="nextPage"
        class="videoStyle"
        autoplay
        type='video/webm"'
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dialog",
  data: () => ({
    currentData: {
      video: "sample",
      chapter: "intro",
      scene: 0
    },
    chapter: "intro",
    scene: 0
  }),
  mounted() {
    console.debug("HELLO FROM ANIMATION");
    this.chapter = this.$route.query.chapter;
    this.scene = parseInt(this.$route.query.scene);
    this.currentData = this.$store.getters["videos/getAnimationByChapter"](
      this.chapter
    );
  },
  methods: {
    nextPage() {
      const path = "/content/";
      const query = {
        chapter: this.chapter,
        scene: this.scene + 1,
        direct: true
      };

      this.$router.push({ path, query });
    }
  }
};
</script>

<style scoped lang="scss">
.containerApp {
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
}
.videoStyle {
  position: absolute;
  height: 100vh;
  width: 100vw !important;
  object-fit: cover;
}
</style>
