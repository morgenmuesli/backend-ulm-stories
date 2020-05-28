<template>
  <div class="mapfield">
    <LeafletMap :rerenderkey="rerenderkey" />
    <nav class="level bottom-menu is-mobile">
      <p class="level-item has-text-centered">
        <nuxt-link to="/game/inventory" class="link is-info">
          <icon
            name="inventory"
            color="black"
            style="width: 48px; height: 48px"
          ></icon>
        </nuxt-link>
      </p>
      <p class="level-item has-text-centered">
        <nuxt-link to="/game/phoneCall" class="link is-info">
          <icon
            name="message"
            color="black"
            style="height: 48px; width: 48px"
          ></icon>
        </nuxt-link>
      </p>
    </nav>
  </div>
</template>

<script>
import LeafletMap from "~/components/map/LeafletMap";
import Icon from "~/components/icon";

export default {
  name: "Map",
  layout: "Phone",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LeafletMap,
    Icon
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

.bottom-menu {
  background-color: lightgray;
  height: 10%;
  position: absolute;
  z-index: 401;
  bottom: 0;
  width: 100%;
}
</style>
