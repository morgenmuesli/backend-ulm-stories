export const state = () => ({
  locations: [
    {
      characterID: "einstein",
      characterName: "Alber Einstein",
      latlng: [48.396018, 9.991371],
      chapter: 7
    },
    {
      characterID: "ensinger",
      characterName: "Matthäus Ensinger",
      latlng: [48.398673, 9.990946],
      chapter: 1
    },
    {
      characterID: "Aicher",
      characterName: "Otl Aicher ",
      latlng: [48.397866, 9.991598],
      chapter: 2
    },
    {
      characterID: "Streicher",
      characterName: "Agathe Streicher",
      latlng: [48.397497, 9.993279],
      chapter: 3
    },
    {
      characterID: "Berblinger",
      characterName: "Albrecht Ludwig Berblinger",
      latlng: [48.397045, 9.99348],
      chapter: 4
    },
    {
      characterID: "Holl",
      characterName: "Maria Holl ",
      latlng: [48.396973, 9.991561],
      chapter: 5
    },
    {
      characterID: "Schwanenwirten",
      characterName: "Schwanenwirten",
      latlng: [48.396282, 9.990509],
      chapter: 6
    }
  ]
});

export const getters = {
  allLocations: state => state.locations
};
