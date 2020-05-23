<template>
  <div class="container is-center">
    <div class="centerElement ">
      <h1 class="title">Super du hast es geschafft!!!</h1>
      <Button class="button" @click="won">Weiter</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["won"]
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(101, 138, 34, 0.8);
}
.centerElement {
  margin: auto auto;
  text-align: center;
  padding: 2rem;
}
</style>
