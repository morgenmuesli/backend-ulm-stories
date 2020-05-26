<template>
  <div class="container center">
    <PuzzleDND win-call-back="" />
  </div>
</template>

<script>
import PuzzleDND from "~/components/content/games/dndpuzzle/PuzzleDND";
export default {
  name: "PuzzleWrapper",
  components: { PuzzleDND },
  methods: {
    nextPage: () => {
      this.$emit("nextPage");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>
