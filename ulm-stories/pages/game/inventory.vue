<template>
  <div class="container is-central">
    <crystal
      ref="kristall"
      :size="crystalSize"
      :visible-characters="finishedChapter"
    ></crystal>
  </div>
</template>

<script>
import crystal from "~/components/inventory/crystal";
export default {
  layout: "game",
  components: {
    crystal
  },
  data: () => ({
    finishedList: [],
    crystalSize: {
      height: "70%",
      width: "70%"
    }
  }),
  computed: {
    finishedChapter() {
      const finishedList = this.$store.getters["npcLocation/finishedChapter"];
      console.debug(finishedList);
      return this.$store.getters["npcLocation/finishedChapter"];
    }
  }
};
</script>

<style scoped></style>
