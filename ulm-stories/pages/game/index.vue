<template>
  <LeafletMap :key="componentKey" />
</template>

<script>
import LeafletMap from "~/components/map/LeafletMap.vue";
export default {
  name: "Map",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LeafletMap
  },
  data: () => ({
    componentKey: 0
  }),
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  },
  mounted() {
    this.forceRerender();
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
