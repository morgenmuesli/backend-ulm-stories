<template>
  <div class="mapfield">
    <LeafletMap :rerenderkey="rerenderkey" />
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
  computed: {},
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
</style>
