<template>
  <FlappySchneider :key="componentKey" />
</template>

<script>
import FlappySchneider from "~/components/minigame/FlappySchneider.vue";
export default {
  name: "Map",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FlappySchneider
  },
  data: () => ({
    componentKey: 0
  }),
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  },
  mounted() {
    this.forceRerender();
  }
};
</script>

<style scoped></style>
