<template>
  <div>
    <div v-if="won">
      <won-component id="won" v-if="hasWon" :won="nextPage"></won-component>
    </div>
    <div class="hiddenO" v-if="playing">
      <img
        id="collage"
        src="../../../../assets/img/Collage/Collage_Handy.png"
        alt="Collage"
      />
      <div id="found_me" @click="found"></div>
    </div>
    <div id="myModal" class="modal fade" role="dialog"></div>
  </div>
</template>

<script>
import wonComponent from "~/components/content/games/wonComponent";
export default {
  name: "HiddenObject",
  components: { wonComponent },
  data() {
    return {
      hasWon: false,
      won: false,
      playing: true
    };
  },
  methods: {
    found() {
      document.getElementById("found_me").style.borderColor = "red";
      const modal = document.getElementById("myModal");
      setTimeout(() => this.showModal(modal), 100);
    },
    showModal(modal) {
      this.won = true;
      this.hasWon = true;
      this.playing = false;
      this.$confetti.start();
    },
    nextPage() {
      this.$emit("nextPage");
      this.$confetti.stop();
    }
  }
};
</script>

<style lang="scss">
.hiddenO {
  //background-image: url("../../../../assets/img/Collage/Collage_Handy.png");
  height: 100vh;
  width: auto;
  background-size: cover;
  background-repeat: no-repeat;
  //overflow: hidden;
}
#collage {
  position: fixed;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
}
#found_me {
  //display: none;
  position: absolute;
  right: 2%;
  bottom: 39%;
  width: 9%;
  height: 5%;
  border: 3px solid transparent;
}
#myModal {
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
