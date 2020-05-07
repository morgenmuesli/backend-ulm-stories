<template>
  <div class="frame">
    <div class="frame-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Phone"
};
</script>

<style scoped lang="scss">
.frame {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/phone.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  justify-content: center;

  .frame-content {
    width: 90%;
    height: 85%;
    position: relative;
    top: 7.5%;
  }
}
</style>
