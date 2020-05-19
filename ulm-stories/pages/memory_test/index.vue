<template>
  <GameField :key="componentKey" />
</template>

<script>
import GameField from "~/components/content/games/memory/GameField";
export default {
  name: "Map",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    GameField
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
