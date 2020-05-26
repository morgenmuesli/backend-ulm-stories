<template>
  <div class="container">
    <LeafletMap style="height: 100%; width: 100% " />
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
  data: () => ({}),
  computed: {
    profCall() {
      return this.$store.state.profIsCalling;
    }
  },
  mounted() {
    this.$store.dispatch("updateProfCalling");
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.profcall {
  z-index: 10;
  margin-right: auto;
  margin-left: auto;
  background-color: red;
}
</style>
