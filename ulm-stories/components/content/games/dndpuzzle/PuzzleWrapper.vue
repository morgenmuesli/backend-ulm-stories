<template>
  <div>
    <div v-if="won">
      <won-component
        id="won"
        v-if="this.hasWon"
        :won="this.nextPage"
      ></won-component>
    </div>
    <div class="container center">
      <PuzzleDND wincallback="won" />
    </div>
  </div>
</template>

<script>
import PuzzleDND from "~/components/content/games/dndpuzzle/PuzzleDND";
export default {
  name: "PuzzleWrapper",
  components: { PuzzleDND },
  data: () => ({
    hasWon: false
  }),
  methods: {
    won() {
      this.hasWon = true;
    },
    nextPage() {
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
