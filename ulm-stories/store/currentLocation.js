// Useless, because i found a library for that... but maybe we can use it Later :)

// this store saves the current geolocation from the user using the navigator tool
// IMPORTANT WHEN USING THIS STORE: don't forget to stop the watcher ⏰

// -------- STORE ---------
/**
 * contains all the data
 * @returns {{watchID: null, loading: boolean, watching: boolean, geolocation: {}}}
 */
const state = () => ({
  loading: false,
  watching: false,
  watchID: null,
  geolocation: { long: 9.9793, lat: 48.4043 }
});

const getters = {
  location: state => {
    console.log(state);
    return [state.geolocation.lat, state.geolocation.long];
  }
};

const actions = {
  getCurrentLocation(context, location) {
    context.commit();
  }
};

const mutations = {
  TOGGLE_WATCHING(state, payload) {
    state.watching = !!payload;
  },
  CHANGE_WATCHID(state, payload) {
    state.watchID = payload;
  },
  TOGGLE_LOADING(state, payload) {
    state.loading = !!payload;
  },
  CHANGE_GEOLOCATION(state, payload) {
    state.geolocation = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
