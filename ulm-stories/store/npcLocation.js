export const state = () => ({
  locations: [
    {
      characterID: "einstein",
      characterName: "Alber Einstein",
      latlng: [48.396018, 9.991371],
      chapter: 7,
      haveVisit: false
    },
    {
      characterID: "ensinger",
      characterName: "Matthäus Ensinger",
      latlng: [48.398673, 9.990946],
      chapter: 1,
      haveVisit: false
    },
    {
      characterID: "aicher",
      characterName: "Otl Aicher ",
      latlng: [48.397866, 9.991598],
      chapter: 2,
      haveVisit: false
    },
    {
      characterID: "streicher",
      characterName: "Agathe Streicher",
      latlng: [48.397497, 9.993279],
      chapter: 3,
      haveVisit: false
    },
    {
      characterID: "berblinger",
      characterName: "Albrecht Ludwig Berblinger",
      latlng: [48.397045, 9.99348],
      chapter: 4,
      haveVisit: false
    },
    {
      characterID: "holl",
      characterName: "Maria Holl ",
      latlng: [48.396973, 9.991561],
      chapter: 5,
      haveVisit: false
    },
    {
      characterID: "schwanenwirtin",
      characterName: "Schwanenwirten",
      latlng: [48.396282, 9.990509],
      chapter: 6,
      haveVisit: false
    }
  ]
});

export const getters = {
  allLocations: state => state.locations
};
