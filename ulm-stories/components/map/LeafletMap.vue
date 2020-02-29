<template>
  <div id="map-wrap" style="height: 100vh">
    <l-map :zoom="13" :center="location">
      <l-tile-layer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="location"></l-marker>
      <l-marker
        v-for="(location, index) in allLocations"
        :key="index"
        :lat-lng="location.latlng"
      >
        <l-popup> {{ location.characterName }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LeafletMap",
  computed: {
    location() {
      return {
        lat: this.$store.state.geolocation.lat,
        lng: this.$store.state.geolocation.lng,
        acc: this.$store.state.geolocation.acc,
        alt: this.$store.state.geolocation.alt,
        altAcc: this.$store.state.geolocation.altAcc,
        head: this.$store.state.geolocation.head,
        spd: this.$store.state.geolocation.spd,
        ts: this.$store.state.geolocation.ts
      };
    },
    error() {
      return this.$store.state.geolocation.error;
    },
    ...mapGetters("npcLocation", ["allLocations"])
  },
  methods: {}
};
</script>

<style scoped></style>
