<template>
  <div id="app">
    <div @click="upperBird" class="bkg-main">
      <div v-if="playing">
        <div class="score">Meter: {{ game.score }}0</div>
        <div class="score-max">Rekord: {{ max }}0</div>
        <div class="score-text">Du musst 70 Meter überwinden!</div>
      </div>
      <div v-if="win" class="end">Du hast es geschafft!</div>
      <div :style="styleBgr" class="bkg">
        <div v-if="playing" class="pipe-group">
          <div
            v-for="(pipe, id) in game.pipes"
            :key="id"
            :style="{ left: pipe.position + 'px' }"
            class="pipe"
          >
            <div
              :style="{ height: pipe.topPipeHeight + 'px' }"
              class="pipe-top"
            ></div>
            <div class="space" style="height: 100px;"></div>
            <div
              :style="{ height: bottomPipeHeight(pipe) + 'px' }"
              class="pipe-bottom"
            ></div>
          </div>
        </div>

        <div
          :class="'bird-' + game.bird.wingState"
          :style="styleBird"
          class="bird"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueConfetti from "vue-confetti";

Vue.use(VueConfetti);
export default {
  name: "FlappySchneider",
  data() {
    return {
      max: 0,
      playing: true,
      win: false,
      defoult: {
        score: 0,
        pipes: [],

        bird: {
          vBird: 1,
          uBird: 10,
          dt: 0.025,

          xBird: 1650,
          yBird: 100,

          g: 300,

          wingState: 1
        },

        bgr: {
          width: 1920
        }
      },
      game: {}
    };
  },
  computed: {
    styleBird() {
      return {
        width: "33px",
        height: "24px",
        left: this.game.bird.xBird + "px",
        top: this.game.bird.yBird + "px"
      };
    },
    styleBgr() {
      return {
        width: this.game.bgr.width + "px",
        right: 0,
        height: 1920
      };
    }
  },
  created() {
    this.$set(this, "game", JSON.parse(JSON.stringify(this.defoult)));
  },
  mounted() {
    setTimeout(() => {
      this.addPipe();
      setInterval(this.gameLoop, 30);
      // eslint-disable-next-line no-unused-vars
      const interval = setInterval(this.addPipe, 1000);
    }, 1000);
  },
  methods: {
    start() {
      this.$confetti.start();
      this.playing = false;
      this.win = true;
      setTimeout(() => {
        this.stop();
      }, 4000);
    },
    stop() {
      window.location = "ulm-stories/pages/index.vue";
      this.$confetti.stop();
    },
    gameLoop() {
      this.game.bird.vBird += this.game.bird.dt * this.game.bird.g;
      this.game.bird.yBird += this.game.bird.dt * this.game.bird.vBird;
      if (this.game.bird.yBird > 480) this.game.bird.vBird = -100;
      if (this.game.bird.yBird < 0) this.game.bird.vBird = 100;

      // this.bird.uBird += this.bird.dt * this.bird.g
      this.game.bird.xBird += this.game.bird.uBird;

      this.game.bgr.width += this.game.bird.uBird;
      this.checkDue();
    },
    upperBird() {
      this.game.bird.vBird = -100;
      this.game.bird.wingState = 2;
      setTimeout(() => {
        this.game.bird.wingState = 0;
        setTimeout(() => {
          this.game.bird.wingState = 1;
        }, 500);
      }, 500);
    },
    addPipe() {
      this.game.pipes.push({
        position: this.game.bgr.width,
        topPipeHeight: 100 + Math.random() * 100
      });
    },
    bottomPipeHeight(pipe) {
      return 505 - pipe.topPipeHeight - 100;
    },
    checkDue() {
      if (this.game.pipes.length > 10) delete this.$delete(this.game.pipes, 0);

      this.game.pipes.forEach((pipe, i) => {
        if (
          this.game.bird.xBird + 33 > pipe.position &&
          this.game.bird.xBird < pipe.position + 100
        ) {
          if (
            this.game.bird.yBird < pipe.topPipeHeight ||
            this.game.bird.yBird + 24 > pipe.topPipeHeight + 100
          ) {
            if (this.max < this.game.score) this.max = this.game.score;
            this.$set(this, "game", JSON.parse(JSON.stringify(this.defoult)));
          }
        }
        if (
          this.game.score < i + 1 &&
          this.game.bird.xBird > pipe.position + 100
        ) {
          this.game.score = i + 1;
        }
        if (this.game.score === 8) {
          this.start();
        }
      });
    }
  }
};
</script>

<style>
.bkg-main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.bkg {
  width: 100%;
  height: 100%;
  background-image: url("../../../../assets/img/flappybird/background2.png");
  position: absolute;
  overflow: hidden;
}

.bird {
  z-index: 20;
  width: 133px;
  height: 24px;
  position: absolute;
  transition: transform 0.5s;
}

.bird-0 {
  background: url("../../../../assets/img/flappybird/schneider1.png") 50% 50%
    no-repeat;
}
.bird-1 {
  background: url("../../../../assets/img/flappybird/schneider2.png") 50% 50%
    no-repeat;
}
.bird-2 {
  background: url("../../../../assets/img/flappybird/schneider3.png") 50% 50%
    no-repeat;
}

.pipe-top {
  background: url("../../../../assets/img/flappybird/pipeup.svg") bottom
    no-repeat;
  background-size: cover;
}

.pipe-bottom {
  background: url("../../../../assets/img/flappybird/pipedown.svg") no-repeat;
  background-size: 100%;
}

.pipe-group {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  z-index: 20;
  overflow: hidden;
}
.pipe-group li {
  text-decoration: none;
}

.pipe {
  width: 100px;

  position: absolute;
}

.space {
  height: 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20%;
  overflow: hidden;
}

.score,
.score-max {
  position: absolute;
  left: 3%;
  top: 3%;
  font-size: 2em;
  font-weight: bolder;
}
.score-max {
  left: 48%;
}
.score-text {
  position: absolute;
  left: 3%;
  top: 0%;
  font-size: 1em;
  font-weight: bolder;
}
.end {
  position: absolute;
  left: 3%;
  top: 0%;
  font-size: 2em;
  font-weight: bolder;
}
</style>
