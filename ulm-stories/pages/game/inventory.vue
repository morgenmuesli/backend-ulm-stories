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
  name: "inventory",
  components: {
    crystal
  },
  data: () => ({
    finishedList: ["holl", "ensinger", "berblinger"],
    crystalSize: {
      height: "100%",
      width: "100%"
    }
  }),
  mounted() {}
};
</script>

<style scoped></style>
