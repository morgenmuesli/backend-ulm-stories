export const state = () => ({
  locations: [
    {
      characterID: "einstein",
      characterName: "Albert Einstein",
      latlng: [48.396018, 9.991371],
      chapter: 7,
      haveVisit: true,
      isActive: false
    },
    {
      characterID: "ensinger",
      characterName: "Matthäus Ensinger",
      latlng: [48.398673, 9.990946],
      chapter: 1,
      haveVisit: false,
      isActive: true
    },
    {
      characterID: "aicher",
      characterName: "Otl Aicher ",
      latlng: [48.397866, 9.991598],
      chapter: 2,
      haveVisit: false,
      isActive: true
    },
    {
      characterID: "streicher",
      characterName: "Agathe Streicher",
      latlng: [48.397497, 9.993279],
      chapter: 3,
      haveVisit: false,
      isActive: true
    },
    {
      characterID: "berblinger",
      characterName: "Albrecht Ludwig Berblinger",
      latlng: [48.397045, 9.99348],
      chapter: 4,
      haveVisit: false,
      isActive: true
    },
    {
      characterID: "holl",
      characterName: "Maria Holl ",
      latlng: [48.396973, 9.991561],
      chapter: 5,
      haveVisit: false,
      isActive: true
    },
    {
      characterID: "schwanenwirtin",
      characterName: "Schwanenwirten",
      latlng: [48.396282, 9.990509],
      chapter: 6,
      haveVisit: false,
      isActive: true
    }
  ]
});
export const mutations = {
  toggleVisit(state, location) {
    location.haveVisit = !location.haveVisit;
  },
  toggleActive(state, location) {
    location.isActive = !location.isActive;
  }
};
export const actions = {
  visitlocation({ state, commit }, characterID) {
    const character = state.locations.find(
      item => item.characterID === characterID
    );
    commit("toggleVisit", character);
  }
};

export const getters = {
  allLocations: state => state.locations.filter(x => x.isActive)
};
