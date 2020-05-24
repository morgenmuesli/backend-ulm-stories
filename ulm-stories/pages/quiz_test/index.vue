<template>
  <Quiz :key="componentKey" />
</template>

<script>
import Quiz from "~/components/content/games/quiz/Quiz";
export default {
  name: "Map",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Quiz
  },
  data: () => ({
    componentKey: 0
  }),
  mounted() {
    this.forceRerender();
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  }
};
</script>

<style scoped></style>
