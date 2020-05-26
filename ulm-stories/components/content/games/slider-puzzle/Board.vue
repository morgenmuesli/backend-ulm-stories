<template>
  <div class="board">
    <div class="frame-wrapper">
      <div v-if="won">
        <won-component id="won" v-if="hasWon" :won="nextPage"></won-component>
      </div>
      <div v-if="playing">
        <div
          v-if="showingOriginal && image"
          @click="showingOriginal = false"
          :style="{ background: `url(${image})` }"
          class="original"
        ></div>
        <div :style="frameSize" class="frame">
          <Tile
            ref="tiles"
            v-for="tile in tiles"
            :key="tile.position"
            :tile="tile"
            @moving="moveTile"
          />
        </div>

        <div class="controls">
          <Button v-on:click="shuffleTiles" class="button"
            >Erneut mischen</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Tile from "./Tile";
import wonComponent from "~/components/content/games/wonComponent";

let backupTiles = null;

export default {
  components: { Tile, wonComponent },

  data() {
    return {
      playing: true,
      hasWon: false,
      won: false,
      image: null,
      showingOriginal: false,
      size: {
        horizontal: 0,
        vertical: 0
      },
      tiles: [],
      tileSize: {
        width: 0,
        height: 0
      },
      boardSize: {
        width: 0,
        height: 0
      }
    };
  },

  computed: {
    frameSize() {
      return {
        width: this.boardSize.width + "px",
        height: this.boardSize.height + "px"
      };
    },
    /**
     * The total number of tiles in the current board.
     * @return {Number}
     */
    totalTiles() {
      return this.size.horizontal * this.size.vertical;
    },

    /**
     * Determine if the current board is valid (solved).
     * @return {boolean}
     */
    valid() {
      if (!this.tiles.length) {
        return false;
      }

      for (let i = 0; i < this.totalTiles; ++i) {
        if (this.tiles[i].styles.order !== this.tiles[i].position) {
          return true;
        }
      }

      return true;
    }
  },
  watch: {
    valid() {
      if (this.valid) {
        this.playing = false;
        this.won = true;
        this.hasWon = true;
        this.$confetti.start();
      }
    }
  },

  methods: {
    start({ image, size }) {
      console.log(image);
      this.size = size;
      // detect the width and height of the frame
      const img = new Image();
      img.onload = () => {
        this.boardSize = {
          width: this.$el.clientWidth,
          height: (this.$el.clientWidth / img.width) * img.height
        };
        this.tileSize.width = this.boardSize.width / size.horizontal;
        this.tileSize.height = this.boardSize.height / size.vertical;
        this.image = this.resizeImage(img, this.boardSize);
        this.generateTiles();
        this.shuffleTiles();
      };
      img.src = image;
    },
    /**
     * Generate the tiles for the current game.
     */
    generateTiles() {
      this.tiles = [];
      for (let i = 0; i < this.totalTiles; ++i) {
        this.tiles.push({
          styles: {
            background: i === 0 ? "transparent" : `url(${this.image})`,
            backgroundPositionX: `-${(i % this.size.horizontal) *
              this.tileSize.width}px`,
            backgroundPositionY: `-${Math.floor(i / this.size.horizontal) *
              this.tileSize.height}px`,
            width: `${this.tileSize.width}px`,
            height: `${this.tileSize.height}px`,
            order: i
          },
          position: i,
          isEmpty: i === 0
        });
      }
    },

    /**
     * Shuffle the generated tiles.
     */
    shuffleTiles() {
      // To make sure the puzzle is solvable, we execute a series of random moves
      for (let i = 0, j = this.totalTiles * 5; i < j; ++i) {
        const emptyTile = this.tiles.find(t => t.isEmpty);
        const movableTiles = this.tiles.filter(t => {
          return this.getAdjacentOrders(emptyTile).includes(t.styles.order);
        });
        this.switchTiles(emptyTile, _.sample(movableTiles));
      }

      // Make a backup for later reset
      backupTiles = JSON.stringify(this.tiles);
    },

    /**
     * Move a (movable) tile
     * @param  {Object} tile
     */
    moveTile(tile) {
      if (tile.isEmpty) {
        return;
      }

      // Find the 4 direct (non-diagonal) adjacent tiles and see if any of them is the empty tile
      const target = this.tiles.find(t => {
        return (
          t.isEmpty && this.getAdjacentOrders(tile).includes(t.styles.order)
        );
      });

      // If found the empty tile, just switch the flex order and we're good.
      target && this.switchTiles(target, tile);
    },

    /**
     * Switch two tiles.
     * @param  {Object} a First tile
     * @param  {Object} b Second tile
     */
    switchTiles(a, b) {
      [a.styles.order, b.styles.order] = [b.styles.order, a.styles.order];
    },

    /**
     * Get the four direct (non-diagonal) adjacent tiles' orders of a tile.
     * @param  {Object} tile
     * @return {Array.<Number>}
     */
    getAdjacentOrders(tile) {
      const pos = tile.styles.order;
      return [
        pos % this.size.horizontal ? pos - 1 : null,
        (pos + 1) % this.size.horizontal ? pos + 1 : null,
        pos - this.size.horizontal,
        pos + this.size.horizontal
      ];
    },

    /**
     * Reset the board.
     */
    reset() {
      this.tiles = JSON.parse(backupTiles);
    },

    /**
     * Restart the game.
     */
    restart() {
      this.$emit("restart");
    },
    resizeImage(image, size) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = size.width;
      canvas.height = size.height;
      ctx.drawImage(image, 0, 0, size.width, size.height);
      return canvas.toDataURL();
    },
    nextPage() {
      this.$emit("nextPage");
      this.$confetti.stop();
    }
  }
};
</script>

<style scoped lang="scss">
.board {
  width: 100%;
}

.frame-wrapper {
  margin: 0 auto;
  box-shadow: 0 0 0 10px;
  width: 100%;

  .original {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  p.win {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 40px;
    margin: 0 0;
    background: rgba(43, 181, 82, 0.7);
    text-transform: uppercase;
  }
}

.frame {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  background-size: cover;
}
.button {
  position: absolute;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  height: 60px;
  width: 80%;
  color: #272727;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
}
.controls {
  margin-top: 30px;

  a {
    display: inline-block;
    text-decoration: none;
    padding: 6px 12px;
    background: #f78403;
    color: #fff;
    border-radius: 3px;

    &.toggle-original {
      background: #d05b88;
    }

    &.restart {
      background: #368ba0;
    }

    &.shuffle {
      background: #3ebb5c;
    }
  }
}
</style>
