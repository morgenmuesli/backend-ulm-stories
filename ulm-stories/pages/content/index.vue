<template>
  <div class="container">
    <NuxtChild :key="this.$route.query.scene" @nextPage="this.nextPage" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  middleware: "gamemw",
  computed: {},
  asyncData: context => ({
    current_scene: context.query.scene,
    current_chapter: context.query.chapter
  }),
  mounted() {
    console.log("scene: ", this.current_scene);
    console.log("chapter: ", this.current_chapter);
    this.$store.dispatch("finishedScene", {
      chapter: this.current_chapter,
      scene: parseInt(this.current_scene)
    });
  },
  methods: {
    ...mapActions(["finishedScene"]),
    nextPage() {
      const path = "/content/";
      const query = {
        chapter: this.current_chapter,
        scene: this.current_scene + 1,
        direct: true
      };
      const chapter = this.current_chapter;
      const scene = query.scene;
      this.finishedScene({ chapter, scene });
      this.$router.push({ path, query });
    }
  }
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s, transform 0.4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter,
.page-leave-active {
  opacity: 0.5;
  transform: rotateY(100deg);
}
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
