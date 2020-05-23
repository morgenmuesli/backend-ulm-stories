<template>
  <div class="container">
    <LeafletMap :key="componentKey" style="height: 100%; width: 100% " />
    <div v-if="checkIfProfIsCalling" @click="openProf" class="profcall">
      <nuxt-link to="/game/phoneCall">Push me Hard!</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LeafletMap from "~/components/map/LeafletMap";

export default {
  name: "Map",
  layout: "Phone",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LeafletMap
  },
  data: () => ({
    componentKey: 0
  }),
  computed: {
    ...mapGetters(["checkIfProfIsCalling"])
  },
  mounted() {
    this.forceRerender();
    this.$store.dispatch("updateProfCalling");
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    profCall() {
      this.$router.push();
    }
  }
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
