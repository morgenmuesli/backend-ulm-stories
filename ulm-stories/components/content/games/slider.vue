<template>
  <div id="slider">
    <header>
      <div class="board-frame">
        <Board ref="board" @solved="onSolved" />
      </div>
    </header>
  </div>
</template>

<script>
import Board from "./slider-puzzle/Board.vue";

export default {
  name: "Slider",
  components: {
    Board
  },
  mounted() {
    const size = { horizontal: 3, vertical: 3 };
    const image = require("../../../assets/img/slider/aicher.png");
    this.$refs.board.start({ image, size });
  },
  methods: {
    onSolved() {}
  }
};
</script>
<style scoped lang="scss">
.board-frame {
  background-image: url("../../../assets/img/background/aicher.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;
  display: flex;
  align-items: center;
}
</style>
