<template>
  <div class="mapfield">
    <LeafletMap :rerenderkey="rerenderkey" />
    <nav class="level bottom-menu is-mobile">
      <p class="level-item has-text-centered">
        <nuxt-link to="/game/inventory" class="link is-info">
          <icon
            name="inventory"
            color="white"
            style="width: 48px; height: 48px"
          ></icon>
        </nuxt-link>
      </p>
      <p class="level-item has-text-centered">
        <nuxt-link to="/game/phoneCall" class="link is-info">
          <icon
            v-if="profIsCalling"
            name="newMessage"
            color="white"
            style="height: 48px; width: 48px"
          ></icon>
          <icon
            v-else
            name="message"
            color="white"
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
  computed: {
    profIsCalling() {
      return this.$store.getters["profCall/checkifProfIsCalling"];
    }
  },
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
  background-color: #272727;
  height: 10%;
  position: absolute;
  z-index: 401;
  bottom: 0;
  width: 100%;
  opacity: 0.9;
}
</style>
