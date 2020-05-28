<template>
  <div id="inventory" class="container is-central-mobile">
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
  layout: "Phone",
  components: {
    crystal
  },
  data: () => ({
    finishedList: [],
    crystalSize: {
      height: "100%",
      width: "100%"
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

<style scoped>
#inventory {
  display: flex;
  align-content: center;
  justify-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
  background-image: url("../../assets/img/background/backpack-clipart-4.png");
  background-size: cover;
  padding: 0.5rem;
}
</style>
