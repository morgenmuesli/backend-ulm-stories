<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :width="size.width"
    :height="size.height"
    viewBox="0 0 959 841.9"
    style="enable-background:new 0 0 959 841.9"
    xml:space="preserve"
  >
    <image
      style="overflow:visible;"
      width="959"
      height="842"
      xlink:href="@/assets/img/crystals/crystalcontainer.png"
      transform="matrix(1 0 0 1 0 -0.1102)"
    ></image>
    <image
      ref="ensinger"
      style="overflow:visible;"
      width="204"
      height="306"
      xlink:href="@/assets/img/crystals/crystal.png"
      transform="matrix(1 0 0 1 80.1965 135.2236)"
      visibility="hidden"
    ></image>
    <image
      ref="holl"
      style="overflow:visible;"
      width="204"
      height="306"
      xlink:href="@/assets/img/crystals/crystal.png"
      transform="matrix(1 0 0 1 246.4397 59.4886)"
      visibility="hidden"
    ></image>
    <image
      ref="schwanenwirtin"
      style="overflow:visible;"
      width="204"
      height="306"
      xlink:href="@/assets/img/crystals/crystal.png"
      transform="matrix(1 0 0 1 429.4425 -9)"
      visibility="hidden"
    ></image>
    <image
      ref="aicher"
      style="overflow:visible;"
      width="204"
      height="306"
      xlink:href="@/assets/img/crystals/crystal.png"
      transform="matrix(1 0 0 1 499.5955 102.8898)"
      visibility="hidden"
    ></image>
    <image
      ref="streicher"
      style="overflow:visible;"
      width="204"
      height="306"
      xlink:href="@/assets/img/crystals/crystal.png"
      transform="matrix(1 0 0 1 304.5955 192.081)"
      visibility="hidden"
    ></image>
    <image
      ref="berblinger"
      style="overflow:visible;"
      width="204"
      height="306"
      xlink:href="@/assets/img/crystals/crystal.png"
      transform="matrix(1 0 0 1 108.4917 241.0919)"
      visibility="hidden"
    ></image>
  </svg>
</template>

<script>
export default {
  name: "cristalPage",
  data: () => ({
    hideArray: []
  }),
  props: {
    size: Object,
    visibleCharacters: Array
  },
  mounted() {
    this.visibleCharacters.map(x => this.showImageByReference(x));
  },
  methods: {
    showImageByReference(id) {
      console.log(id);
      console.log(this);
      if (this.$refs[id]) {
        this.$refs[id].setAttribute("visibility", "visible");
      }
    }
  }
};
</script>

<style scoped></style>
