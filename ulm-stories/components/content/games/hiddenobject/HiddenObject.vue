<template>
  <div>
    <div class="hiddenO">
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
export default {
  name: "HiddenObject",
  data() {
    return {};
  },
  methods: {
    found() {
      document.getElementById("found_me").style.borderColor = "red";
      const modal = document.getElementById("myModal");
      setTimeout(() => this.showModal(modal), 100);
    },
    showModal(modal) {
      modal.style.zIndex = "1";
      this.$emit("nextPage");
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
