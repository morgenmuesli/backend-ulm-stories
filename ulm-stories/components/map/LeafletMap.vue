<template>
  <div>
    {{ location }}
    <br />
    {{ error }}
    <br />
    <div id="map-wrap" style="height: 100vh">
      <l-map :zoom="13" :center="location">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="location"></l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style scoped></style>
