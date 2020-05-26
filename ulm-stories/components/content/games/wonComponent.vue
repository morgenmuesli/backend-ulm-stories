<template>
  <div class="container is-center">
    <div class="centerElement ">
      <img class="zweistein" src="../../../assets/img/winScreen/prof.png" />
      <h1 class="titleone">Super!</h1>
      <h2 class="titletwo">Du hast es geschafft!</h2>
      <Button @click="won" class="button">Weiter</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["won"],
  mounted() {
    this.$confetti.start();
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap");
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(60, 171, 116, 0.9);
}
.centerElement {
  margin: auto auto;
  padding: 2rem;
  text-align: center;
}

img {
  width: 60%;
  height: 60%;
}

.titleone {
  font-family: "Ubuntu", sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: whitesmoke;
}

.titletwo {
  font-family: "Ubuntu", sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: whitesmoke;
  margin-bottom: 10px;
}
</style>
