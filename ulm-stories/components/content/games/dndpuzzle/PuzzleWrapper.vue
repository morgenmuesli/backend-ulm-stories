<template>
  <div>
    <div>
      <won-component
        id="won"
        v-if="this.hasWon"
        :won="nextPage"
        class="won"
      ></won-component>
    </div>
    <h3 class="title has-text-centered">Puzzle</h3>
    <p>Klicke zunächst auf die Teile und dann auf die passende Position</p>
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2rem;
}
.won {
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
}

p {
  padding: 0.5rem;
}
.title {
  margin-top: 5px;
}
</style>
