<template>
  <div @click="pressTile" :class="{ open: isOpen }" class="Tile">
    <img
      v-if="dataFromParent.isOpen"
      :src="require(`assets/${this.dataFromParent.path}`)"
      width="100%"
      height="100%"
    />
  </div>
</template>

<script>
export default {
  name: "TILE",
  props: ["dataFromParent", "id"],
  computed: {
    isOpen() {
      return this.dataFromParent.isOpen;
    }
  },
  methods: {
    pressTile() {
      if (!this.dataFromParent.isOpen) {
        this.$emit("pressedTiled", {
          id: this.id,
          number: this.dataFromParent.number
        });
      }
    }
  }
};
</script>

<style scoped>
.Tile {
  width: 5em;
  height: 5em;
  background-color: lightblue;
  margin: 2px;
}
.Tile:hover {
  box-shadow: 2px 2px 4px #000000;
}
.open {
  background-color: red;
}
</style>
