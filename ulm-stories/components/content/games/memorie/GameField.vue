<template>
  <div>
    <div class="field">
      <div v-for="(item, index) in field" :key="index">
        <Tile
          :id="index"
          :data-from-parent="item"
          v-on:pressedTiled="pressedTile"
        />
      </div>
    </div>
    <button @click="createField(10)">Click ME</button>
  </div>
</template>

<script>
import _ from "lodash";
import Tile from "~/components/content/games/memorie/Tile";

export default {
  name: "GAMEFIELD",
  // eslint-disable-next-line vue/no-unused-components
  components: { Tile },
  data: () => ({
    field: [],
    count: 1,
    openTiles: [],
    keylog: false
  }),
  methods: {
    createField(numberOfTiles) {
      this.field = [];
      for (let i = 0; i < numberOfTiles / 2; i++) {
        this.field.push({
          number: i,
          isOpen: false,
          path: this.createImagePath(i)
        });
        this.field.push({
          number: i,
          isOpen: false,
          path: this.createImagePath(i)
        });
      }
      this.field = _.shuffle(this.field);
    },
    pressedTile(event) {
      if (!this.keylog) {
        console.log(
          "Tile was pressed id:",
          event.id,
          " number: ",
          event.number
        );
        this.field[event.id].isOpen = true;
        this.openTiles.push(event.id);
        if (this.count === 2) {
          this.checkPair(event.number);
          this.openTiles = [];
          this.count = 0;
        }
        this.count += 1;
      }
      setTimeout(() => (this.keylog = false), 1500);
    },
    checkPair(number) {
      this.keylog = true;
      if (this.field.length) {
        const pair = this.field.filter(
          item => item.number === number && item.isOpen
        );
        if (pair.length > 1) {
          console.log(pair);
          if (this.checkWin()) {
            alert("GEWONNEN");
          }
        } else {
          for (let i = 0; i < this.openTiles.length; i++) {
            const index = this.openTiles[i];
            setTimeout(() => (this.field[index].isOpen = false), 1500);
          }
        }
      }
    },
    checkWin() {
      const numberOfTiles = this.field.length;
      const numberOfOpenTiles = this.field.filter(item => item.isOpen).length;
      return numberOfTiles === numberOfOpenTiles;
    },
    createImagePath(number) {
      const path = "img/memory/" + number + ".jpg";
      return path;
    }
  }
};
</script>

<style scoped>
.field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px;
}
</style>
