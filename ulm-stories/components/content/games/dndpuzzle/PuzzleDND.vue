<template>
  <div class="frame" ref="puzzleFrame">
    <div :style="frameSize" class="puzzle" v-if="playing">
      <div
        :key="index"
        :style="item.style"
        @click="clickOnPuzzle(item)"
        class="puzzleTile"
        v-for="(item, index) in puzzleList"
      ></div>

      <p>Scrolle nach rechts oder links</p>
      <div class="dragList" style="width: 100%">
        <div
          :key="index"
          :style="item.style"
          @click="selectItem(item)"
          class="tile"
          v-for="(item, index) in tileList"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "PuzzleDND",
  props: { wincallback: Function },
  data: () => ({
    playing: true,
    won: false,

    puzzleList: [],
    tileList: [],
    selectedItem: null,

    tileSize: {
      width: 50,
      height: 50
    },
    size: {
      horizontal: 5,
      vertical: 5
    },
    frameSize: {
      width: 250,
      height: 250,

      display: "flex",
      flexWrap: "wrap"
    },
    hasWon: false
  }),

  computed: {
    /**
     * The total number of tiles in the current board.
     * @return {Number}
     */
    totalTiles() {
      return this.size.horizontal * this.size.vertical;
    }
  },
  mounted() {
    this.calculateSizes();
    this.generateTiles();
  },
  methods: {
    calculateSizes() {
      const frameSize = {
        width: this.$refs.puzzleFrame.offsetWidth,
        height: this.$refs.puzzleFrame.offsetWidth
      };
      this.frameSize.width = frameSize.width;
      this.frameSize.height = frameSize.width;
      this.tileSize.width = frameSize.width / this.size.horizontal;
      this.tileSize.height = frameSize.height / this.size.vertical;
    },
    generateTiles() {
      for (let i = 0; i < this.totalTiles; i++) {
        this.tileList.push({
          id: i,
          style: {
            backgroundImage:
              `url(` + require("@/assets/img/puzzleDND/raft.png"),
            backgroundSize: `${this.frameSize.width}px ${this.frameSize.height}px`,
            backgroundPositionX: `-${(i % this.size.horizontal) *
              this.tileSize.width}px`,
            backgroundPositionY: `-${Math.floor(i / this.size.horizontal) *
              this.tileSize.height}px`,
            width: `${this.tileSize.width}px`,
            height: `${this.tileSize.height}px`
          }
        });
        this.puzzleList.push({
          id: i,
          style: {
            width: `${this.tileSize.width}px`,
            height: `${this.tileSize.height}px`
          },
          containedItem: -1
        });

        this.tileList = _.shuffle(this.tileList);
      }
    },
    selectItem(item) {
      this.selectedItem = item;
    },
    __swapTile(item) {
      this.tileList.push({
        id: item.containedItem,
        style: item.style
      });
      this.__insertTile(item);
    },
    __insertTile(item) {
      item.containedItem = this.selectedItem.id;
      item.style = this.selectedItem.style;
      _.remove(this.tileList, x => x === this.selectedItem);
      this.selectedItem = null;
    },
    checkWin() {
      for (let i = 0; i < this.puzzleList.length; i++) {
        const item = this.puzzleList[i];
        if (item.id !== item.containedItem) {
          return false;
        }
      }
      return true;
    },
    clickOnPuzzle(item) {
      if (this.selectedItem) {
        const member = this.puzzleList.find(
          x => x.containedItem === this.selectedItem.id
        );
        if (member) {
          member.containedItem = -1;
          member.style = {
            width: `${this.tileSize.width}px`,
            height: `${this.tileSize.height}px`
          };
        }
        if (item.containedItem === -1) {
          this.__insertTile(item);
        } else {
          this.__swapTile(item);
        }
        if (this.checkWin()) {
          this.playing = false;
          this.won = true;
          this.hasWon = true;
          this.wincallback();
        }
      } else if (item.containedItem !== -1) {
        this.selectedItem = {
          id: item.containedItem,
          style: item.style
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.frame {
  max-width: 70vh;

  width: 100%;
  max-height: 100%;
  top: 0;
  left: 0;
  overflow-y: hidden;
  font-family: "Ubuntu", sans-serif;
  text-align: center;
}

.puzzle {
  margin-bottom: 2em;
  background-color: rgb(255, 235, 173);
}
.puzzleTile {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 0.01em solid rgba(0, 0, 0, 0.5);
}

.puzzleTile:hover {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid lightblue;
}

.dragList {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.tile {
  flex: 0 0 auto;
  border-radius: 2px;
  border: 1px solid black;
  margin-right: 0.2em;
}
p {
  padding: 0.5rem;
  text-align: center;
}
</style>
