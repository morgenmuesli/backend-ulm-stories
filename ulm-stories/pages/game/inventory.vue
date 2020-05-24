<template>
  <div class="container is-central">
    <crystal
      ref="kristall"
      :size="crystalSize"
      :visible-characters="finishedList"
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
    finishedList: ["holl", "ensinger", "berblinger", "aicher", "berblinger"],
    crystalSize: {
      height: "100%",
      width: "100%"
    }
  }),
  mounted() {
    const set = this.$store.getters.getChaptersAsSet;
    this.finishedList = Array.from(set);
  }
};
</script>

<style scoped></style>
