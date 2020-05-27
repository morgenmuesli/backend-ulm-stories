<template>
  <div>
    <div>
      <won-component
        id="won"
        v-if="this.hasWon"
        :won="nextPage"
      ></won-component>
    </div>
    <div class="container center">
      <PuzzleDND :wincallback="winning" />
    </div>
  </div>
</template>

<script>
import wonComponent from "~/components/content/games/wonComponent";
import PuzzleDND from "~/components/content/games/dndpuzzle/PuzzleDND";
export default {
  name: "PuzzleWrapper",
  components: { PuzzleDND, wonComponent },
  data: () => ({
    hasWon: false
  }),
  methods: {
    winning() {
      this.hasWon = true;
      console.info("start confetti");
      this.$confetti.start();
    },
    nextPage() {
      this.$confetti.stop();
      this.$emit("nextPage");
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
