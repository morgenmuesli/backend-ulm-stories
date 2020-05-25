<template>
  <div class="itemfield">
    <div @click="pressTile" :class="{ open: isOpen }" class="Tile">
      <img
        v-if="dataFromParent.isOpen"
        :src="require(`@/assets/img/${dataFromParent.path}`)"
        width="100%"
        height="100%"
      />
    </div>
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

<style scoped lang="scss">
.itemfield {
  width: 45vw;
  height: 45vw;
}

.Tile {
  width: 98%;
  height: 98%;
  background-color: whitesmoke;
  margin: 2px;
  border-radius: 3px;
}
</style>
