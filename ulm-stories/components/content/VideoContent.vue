<template>
  <div>
    <div
      v-for="data in parentData"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/background/' + data.img + '.jpg') + ')'
      }"
      class="container"
    >
      <video
        class="videoStyle"
        v-bind:src="require('@/assets/webm/' + data.video + '.webm')"
        autoplay
        loop
        type='video/webm"'
      ></video>
      <div class="text">
        <ul>
          <li>
            <h3>{{ data.currentText }}</h3>
          </li>
        </ul>
      </div>
      <div v-on:click="buttonClicked" class="button">
        <button></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dialog",
  props: ["parentData"],
  methods: {
    buttonClicked() {
      alert("Hello");
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-areas: ". . text text" ". . text text " ". . . ." "video video . .";
  padding: 16px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.characterImage {
  grid-area: image;
  height: 100%;
}
img {
  object-fit: cover;
}
.text {
  background: whitesmoke;
  padding: 25px;
  text-align: center;
  grid-area: text;
  border-radius: 20px;
  overflow: hidden;
}
.button {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  background-repeat: no-repeat;
  outline: none;
  padding: 100% 100%;
  visibility: hidden;
}
.videoStyle {
  grid-area: video;
}
</style>
