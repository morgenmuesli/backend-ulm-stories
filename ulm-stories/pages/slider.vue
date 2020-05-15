<template>
  <div id="slider">
    <header>
      <h1>Slider Puzzle</h1>
      <div class="board-frame">
        <Board ref="board" @solved="onSolved" />
      </div>
    </header>
  </div>
</template>

<script>
import Board from "../components/minigame/slider-puzzle/Board";

export default {
  name: "Slider",
  components: {
    Board
  },
  mounted() {
    const size = { horizontal: 3, vertical: 3 };
    const image = require("@/assets/img/slider/aicher.png");
    this.$refs.board.start({ image, size });
  },
  methods: {
    onSolved() {
      // TODO: do stuff
    }
  }
};
</script>
<style scoped>
#slider {
  font: 16px Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.board-frame {
  background: #f0f;
  padding: 1rem;
}
</style>
