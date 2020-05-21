<template>
  <div class="hiddenO">
    v-for="(item, index) in element.answers" :key="index" :class="select ?
    check(item) : ''" @click="found" >
    <p></p>
  </div>
</template>

<script>
export default {
  name: "HiddenObject",
  data() {
    return {};
  },
  methods: {
    check() {},
    found() {
      this.select = true;
    }
  }
};
</script>

<style lang="scss">
.hiddenO {
  background-image: url("../../../../assets/img/Collage/Collage_Handy.png");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
