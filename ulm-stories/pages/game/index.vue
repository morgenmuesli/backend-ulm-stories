<template>
  <LeafletMap :key="componentKey" />
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
    componentKey: 0
  }),
  mounted() {
    this.forceRerender();
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    profCall() {}
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
