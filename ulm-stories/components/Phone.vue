<template>
  <div class="frame">
    <div class="frame-content">
      <slot></slot>
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
    width: 80%;
    height: 80%;
    position: relative;
    top: 7.5%;
  }
}
</style>
