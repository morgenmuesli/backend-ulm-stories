<template>
  <Quiz :key="componentKey" />
</template>

<script>
import Quiz from "~/components/content/games/Quiz";
export default {
  name: "Map",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Quiz
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
