<template>
  <div>
    <leaflet-map latitude="29.7545" longitude="-95.4093"></leaflet-map>
    <div class="">
      <NuxtChild />
    </div>
  </div>
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

.container {
  padding: 0;
  width: 100%;
  margin: 0;
}

#map {
}
</style>
