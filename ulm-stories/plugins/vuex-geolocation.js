import Vue from "vue";
import VuexGeolocation from "vuex-geolocation";
import GeolocationUtilities from "vuex-geolocation/dist/geolocation-utilities.js";

export default ({ store }) => {
  const vuexGeolocation = VuexGeolocation.sync(store);
  Vue.use(vuexGeolocation);
  Vue.use(GeolocationUtilities);
};
