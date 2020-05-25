<template>
  <div id="map-wrap" style="height: 100%; width: 100%">
    <l-map :zoom="13" :center="userLocation">
      <l-tile-layer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="userLocation"></l-marker>
      <l-marker
        v-for="(location, index) in allLocations"
        :key="index"
        :lat-lng="location.latlng"
        @click="openLink(location)"
        :icon="getMarker(location)"
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
import { mapGetters } from "vuex";
import "leaflet/dist/leaflet.css";
import L, { icon } from "leaflet";
export default {
  name: "LeafletMap",
  data() {
    return {
      componentKey: 0
    };
  },
  computed: {
    ...mapGetters("npcLocation", ["allLocations"]),
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
    }
  },
  mounted() {
    this.forceRerender();
    console.debug("Load map");
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    getLink(npcInfo) {
      const path = "/content/";
      const query = { chapter: npcInfo.characterID, scene: 0, direct: true };
      return { path, query };
    },
    openLink(npcInfo) {
      if (!npcInfo.haveVisit) {
        const href = this.getLink(npcInfo);
        this.$router.push(href);
      }
    },
    getMarker(npcInfo) {
      // check if npcInfo is true
      const iconUrl = npcInfo.haveVisit
        ? require(`assets/img/mapmarker/${npcInfo.characterID}BW.png`) // true
        : require(`assets/img/mapmarker/${npcInfo.characterID}.png`); // false
      const marker = icon({
        iconUrl,
        iconSize: [50, 50],
        iconAnchor: [16, 37]
      });
      return marker;
    },

    checkDistanceToNpc(userLocation, allLocations) {
      for (const location in allLocations) {
        // check if user is under 1m away from location
        if (
          L.latLng(userLocation.lat, userLocation.long).distanceTo(
            location.latlng
          ) < 1
        ) {
          // trigger Event with n
          this.$emit("near-npc", location.characterID);
        }
      }
    }
  }
};
</script>

<style scoped></style>
