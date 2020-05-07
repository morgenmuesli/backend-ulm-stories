<template>
  <div class="container">
    <NuxtChild :key="$route.query.scene" @nextPage="this.nextPage()" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "gamemw",
  asyncData: context => ({
    current_scene: context.query.scene,
    current_chapter: context.query.chapter
  }),
  mounted() {
    console.log("scene: ", this.current_scene);
    console.log("chapter: ", this.current_chapter);
  },
  computed: {
    ...mapGetters
  },
  methods: {
    nextPage() {
      const path = "/content/";
      const query = {
        chapter: this.current_chapter,
        scene: this.current_scene + 1,
        direct: true
      };
      this.$stable.dispatch("finishedScene");
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
  font-family: sans-serif;
  box-sizing: border-box;
}
</style>
