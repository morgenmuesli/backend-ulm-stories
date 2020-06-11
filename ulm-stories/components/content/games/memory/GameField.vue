<template>
  <div class="memory">
    <div v-if="won">
      <won-component id="won" v-if="hasWon" :won="nextPage"></won-component>
    </div>
    <h1 style="text-shadow: 0 0 5px #272727">
      Memory
    </h1>
    <div ref="gamefield" class="field">
      <div v-for="(item, index) in field" :key="index">
        <Tile
          :id="index"
          :data-from-parent="item"
          v-on:pressedTiled="pressedTile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Tile from "~/components/content/games/memory/Tile";
import wonComponent from "~/components/content/games/wonComponent";

export default {
  name: "GameField",
  // eslint-disable-next-line vue/no-unused-components
  components: { wonComponent, Tile },
  data: () => ({
    won: false,
    field: [],
    count: 1,
    openTiles: [],
    keylog: false,
    memoryStarted: false,
    hasWon: false,
    tileSize: { width: 20 + "px", height: 20 + "px" }
  }),
  mounted() {
    this.createField(8);
    const width = this.$refs.gamefield.clientWidth;
    this.tileSize = { width: width / 2 + "px", height: width / 2 + "px" };
  },
  methods: {
    createField(numberOfTiles) {
      this.memoryStarted = true;
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
          if (this.checkWin()) {
            this.$confetti.start();
            this.hasWon = true;
            this.won = true;
          }
        } else {
          for (let i = 0; i < this.openTiles.length; i++) {
            const index = this.openTiles[i];
            setTimeout(() => (this.field[index].isOpen = false), 1000);
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
      const path = "memory/" + number + ".jpg";
      return path;
    },
    nextPage() {
      this.$confetti.stop();
      this.$emit("nextPage");
    }
  }
};
</script>

<style scoped lang="scss">
.memory {
  background-image: url("../../../../assets/img/background/schwanenwirtin.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 2rem;
}

.field {
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2px;
}

button {
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  width: 80%;
  height: 60px;
  background-color: whitesmoke;
  margin-bottom: 10px;
  border-radius: 3px;
}

h1 {
  font-family: "Ubuntu", sans-serif;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: whitesmoke;
  line-height: 10vh;
}

#won {
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
