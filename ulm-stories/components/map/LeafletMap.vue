<template>
  <div id="map-wrap" style="height: 100vh; width: 100vw">
    <button @click="toggleVisit('holl')">Click me</button>
    <l-map :zoom="zoom" :center="userLocation()">
      <l-tile-layer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="userLocation()"></l-marker>
      <l-marker
        v-for="(location, index) in allLocations"
        :key="index"
        :lat-lng="location.latlng"
        :icon="getMarker(location)"
        @click="openLink(getLink(location))"
      >
        <l-popup>
          <nuxt-link :to="getLink(location)"
            >{{ location.characterName }}
          </nuxt-link>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import L, { icon } from "leaflet";
export default {
  name: "LeafletMap",
  data() {
    return {
      zoom: 13,
      watchID: null,
      location: L.latLng(20, 20),
      gettingLocation: false,
      errorStr: null
    };
  },
  computed: {
    ...mapGetters("npcLocation", ["allLocations"]),
    ...mapState(["npcLocation"])
  },
  methods: {
    userLocation() {
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
    toggleVisit(characterID) {
      alert(characterID);
      this.$store.dispatch("npcLocation/visitlocation", characterID);
    },
    getLink(npcInfo) {
      return `/game/${npcInfo.chapter}/${npcInfo.characterID}`;
    },
    openLink(href) {
      this.$router.push(href);
    },
    getMarker(npcInfo) {
      // check if npcInfo is true
      const iconUrl = npcInfo.haveVisit
        ? require(`assets/img/mapmarker/${npcInfo.characterID}BW.png`) // true
        : require(`assets/img/mapmarker/${npcInfo.characterID}.png`); // false
      const marker = icon({
        iconUrl,
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      });
      return marker;
    }
  }
};
</script>

<style scoped></style>
