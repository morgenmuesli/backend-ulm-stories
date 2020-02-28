<template>
  <LeafletMap />
</template>

<script>
import LeafletMap from "~/components/map/LeafletMap.vue";
export default {
  name: "Map",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LeafletMap
  },
  data: () => ({})
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
