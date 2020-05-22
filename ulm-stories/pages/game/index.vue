<template>
  <div class="container">
    <LeafletMap :key="componentKey" />
    <div v-if="checkIfProfIsCalling" @click="openProf" class="profcall">
      blubber
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
  mounted() {
    this.forceRerender();
  },
  computed: {
    ...mapGetters(["checkIfProfIsCalling"])
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    profCall() {}
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
</style>
