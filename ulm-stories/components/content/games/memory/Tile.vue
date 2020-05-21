<template>
  <div @click="pressTile" :class="{ open: isOpen }" class="Tile">
    <img
      v-if="dataFromParent.isOpen"
      :src="require(`@/assets/img/${this.dataFromParent.path}`)"
      width="100%"
      height="100%"
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
  background-color: whitesmoke;
  margin: 2px;
  border-radius: 3px;
}
</style>
