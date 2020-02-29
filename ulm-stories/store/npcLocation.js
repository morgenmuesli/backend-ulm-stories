export const state = () => ({
  locations: [
    {
      characterID: "einstein",
      characterName: "Alber Einstein",
      latlng: [48.39997, 9.99451],
      chapter: 7
    },
    {
      characterID: "ensinger",
      characterName: "Matthäus Ensinger",
      latlng: [48.398523, 9.992555],
      chapter: 1
    },
    {
      characterID: "Aicher",
      characterName: "Otl Aicher ",
      latlng: [48.39791801073818, 9.991607437432059],
      chapter: 2
    },
    {
      characterID: "Streicher",
      characterName: "Agathe Streicher",
      latlng: [48.395318, 9.990801],
      chapter: 3
    },
    {
      characterID: "Berblinger",
      characterName: "Albrecht Ludwig Berblinger",
      latlng: [48.395624, 9.993633],
      chapter: 4
    },
    {
      characterID: "Holl",
      characterName: "Maria Holl ",
      latlng: [48.396976, 9.991556],
      chapter: 5
    },
    {
      characterID: "Schwanenwirten",
      characterName: "Schwanenwirten",
      latlng: [48.397154, 9.98873],
      chapter: 6
    }
  ]
});

export const getters = {
  allLocations: state => state.locations
};
