<template>
  <div class="mapfield">
    <LeafletMap :rerenderkey="rerenderkey" />
    <div v-show="profCall" class="profcall">
      <nuxt-link to="/game/phoneCall">Push me Hard!</nuxt-link>
    </div>
  </div>
</template>

<script>
import LeafletMap from "~/components/map/LeafletMap";

export default {
  name: "Map",
  layout: "Phone",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LeafletMap
  },
  data: () => ({
    rerenderkey: 0
  }),
  computed: {
    profCall() {
      return this.$store.state.profIsCalling;
    }
  },
  mounted() {
    this.forceRerender();
  },

  methods: {
    forceRerender() {
      this.rerenderkey += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.mapfield {
  height: 100%;
  width: 100%;
}

.profcall {
  z-index: 10;
  margin-right: auto;
  margin-left: auto;
  background-color: red;
}
</style>
