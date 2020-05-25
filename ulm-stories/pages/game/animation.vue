<template>
  <div class="containerApp">
    <div>
      <video
        v-bind:src="
          require('@/assets/webm/' + this.currentData.video + '.webm')
        "
        class="videoStyle"
        autoplay
        type='video/webm"'
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dialog",
  data: () => ({
    currentData: {
      video: "sample",
      text: "sample text",
      img: "ensinger",
      answer: "sample",
      chapter: "ensinger",
      scene: 0
    }
  })
};
</script>

<style scoped lang="scss">
.containerApp {
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
}
.videoStyle {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
