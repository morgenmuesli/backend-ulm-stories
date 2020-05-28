<template>
  <div class="fullscreen">
    <div class="header">
      <nuxt-link to="/game">
        <icon
          name="back"
          style="width: 100%; height: 100%"
          class="is-one-fifth"
        />
      </nuxt-link>
    </div>
    <div id="inventory">
      <crystal
        ref="kristall"
        :size="crystalSize"
        :visible-characters="finishedChapter"
      ></crystal>
    </div>
  </div>
</template>

<script>
import crystal from "~/components/inventory/crystal";
export default {
  layout: "Phone",
  components: {
    crystal
  },
  data: () => ({
    finishedList: [],
    crystalSize: {
      height: "100%",
      width: "100%"
    }
  }),
  computed: {
    finishedChapter() {
      const finishedList = this.$store.getters["npcLocation/finishedChapter"];
      console.debug(finishedList);
      return this.$store.getters["npcLocation/finishedChapter"];
    }
  }
};
</script>

<style scoped>
#inventory {
  flex-grow: 1;
  width: 100%;
  background-color: whitesmoke;
  background-size: cover;
  padding: 0.5rem;
}

.header {
  width: 100%;
  top: 0;
  background-color: #272727;
  opacity: 0.95;
  height: 10%;
  display: flex;
  z-index: 5;
}
.fullscreen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
