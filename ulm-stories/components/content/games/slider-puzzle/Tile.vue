<template>
  <div
    :style="tile.styles"
    @click="move"
    :class="{ empty: tile.isEmpty }"
    class="puzzle-tile"
  ></div>
</template>

<script>
export default {
  props: {
    tile: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    move() {
      this.$emit("moving", this.tile);
    }
  }
};
</script>

<style lang="scss">
.puzzle-tile {
  border: 1px solid #111;

  &.empty {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px inset;

    &:hover {
      border-color: #111;
      cursor: default;
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
