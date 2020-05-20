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
