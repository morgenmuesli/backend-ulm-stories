<template>
  <phone>
    <LeafletMap :key="componentKey" />
  </phone>
</template>

<script>
import LeafletMap from "~/components/map/LeafletMap";
import Phone from "~/components/Phone";

export default {
  name: "Map",
  components: {
    Phone,
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
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
