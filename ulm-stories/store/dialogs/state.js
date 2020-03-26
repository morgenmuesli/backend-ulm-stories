const types = {
  GAME: "GAME",
  VIDEO: "VIDEO",
  IMAGE: "IMAGE"
};

export default () => ({
  dialogs: [
    {
      id: 1,
      type: types.GAME,
      title: "Blubber",
      visit: false,
      imagePath: "img/character/ensinger.png",
      background: "assets/img/background/ensinger.jpg",
      text:
        "Saggrament, Rutschn, Fettl, Aufgeiga, aus’gschammta, Zwidawurzn, Geizgroogn, Grachal, mogsd a Wadschn, Lätschnbebbi, Schwindsüchtl, Kircharutschn, Bettwanzn, Beitlschneida, Hausdracha, Schanial, halbseidener, Freibialädschn, gscheate Ruam, hoit’s Mei, Asphaltwanzn, Flaschn, Luada, Betschwesta, Zwidawurzn, Schwobndeifi, ja, wo samma denn, Auftreiwa, damischa Depp, bsuffas Wagscheidl, Schwindsüchtl, glei foid da Wadschnbam um, gscheate Ruam, Lätschnbebbi, Herrgoddsacklzementfixlujja, Zwedschgnmanndl, Hemmadbiesla, Radlfahra, schau, dass di schleichst, Schuggsn, Grawurgl, Pfingsdochs, Oaschgsicht, Rotzgloggn, Schoaswiesn, i glaub, dir brennt da Huat, fade Noggn, hosd mi, aus’gschammta, Bauantrampl!",
      previous: null,
      nextId: 2
    }
  ]
});
