<template>
  <div>
    <video class="rightPanel" :src="parentData.src" autoplay></video>
    <div class="leftPanel">
      <p>{{ parentData.text }}</p>
      <button v-if="!!this.parentData.answer" @click="nextcontent">
        {{ parentData.answer }}
      </button>
    </div>
  </div>
</template>

<script>
import nextcontent from "../../js/contentUtil";
export default {
  name: "Video",
  props: ["parentData"],
  methods: {
    nextcontent
  }
};
</script>

<style scoped></style>
