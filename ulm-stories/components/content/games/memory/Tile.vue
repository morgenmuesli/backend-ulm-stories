<template>
  <div class="Tile" @click="pressTile" :class="{ open: isOpen }">
    <img
      v-if="dataFromParent.isOpen"
      width="100%"
      height="100%"
      :src="require(`@/assets/img/${this.dataFromParent.path}`)"
    />
  </div>
</template>

<script>
export default {
  name: "Tile",
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
  width: 10em;
  height: 10em;
  background-color: lightblue;
  margin: 2px;
}
.Tile:hover {
  box-shadow: 2px 2px 4px #000000;
}
</style>
