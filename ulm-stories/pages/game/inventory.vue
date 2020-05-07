<template>
  <crystal
    ref="kristall"
    :size="crystalSize"
    :visible-characters="finishedList"
  ></crystal>
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
  mounted() {}
};
</script>

<style scoped></style>
