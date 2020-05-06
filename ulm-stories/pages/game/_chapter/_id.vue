<template>
  <div :style="getBackgroundUrl()" class="container">
    <div v-on:click="prev()" class="previous">Previous</div>
    <div v-on:click="next()" class="next">Next</div>
    <div class="characterimage">
      <!-- <img :src="require(`assets/${getImagePath}`)" alt="avatar" /> -->
      <video src="/img/sample.webm" autoplay loop type='video/webm"'></video>
    </div>
    <p class="text">{{ currentText }}</p>
  </div>
</template>

<script>
export default {
  layout: "dialog",
  data() {
    return {
      chapter_id: this.$route.params.chapter,
      id: this.$route.params.id,
      dialogs: [
        {
          id: 1,
          title: "Blubber",
          imagePath: "img/character/ensinger.png",
          background: "assets/img/background/ensinger.jpg",
          text:
            "Saggrament, Rutschn, Fettl, Aufgeiga, aus’gschammta, Zwidawurzn, Geizgroogn, Grachal, mogsd a Wadschn, Lätschnbebbi, Schwindsüchtl, Kircharutschn, Bettwanzn, Beitlschneida, Hausdracha, Schanial, halbseidener, Freibialädschn, gscheate Ruam, hoit’s Mei, Asphaltwanzn, Flaschn, Luada, Betschwesta, Zwidawurzn, Schwobndeifi, ja, wo samma denn, Auftreiwa, damischa Depp, bsuffas Wagscheidl, Schwindsüchtl, glei foid da Wadschnbam um, gscheate Ruam, Lätschnbebbi, Herrgoddsacklzementfixlujja, Zwedschgnmanndl, Hemmadbiesla, Radlfahra, schau, dass di schleichst, Schuggsn, Grawurgl, Pfingsdochs, Oaschgsicht, Rotzgloggn, Schoaswiesn, i glaub, dir brennt da Huat, fade Noggn, hosd mi, aus’gschammta, Bauantrampl!",
          nextId: 2
        },
        {
          chapter: 2,
          id: "ensinger",
          title: "Blubber",
          imagePath: null,
          text:
            "Schundnickl, Dipfalscheißa, Hornochs, Bagaasch, Fliedschal, Schwobnsäckle, Schwammal, glei fangst a boa, Hodalumb, Krampfhenna, Klobürschdn, Ratschkathl, Aufgeiga, Dramhappada, Katzlmacha, Aufschneida, Palmesel, elendiger, Badwaschl, Himbeerdoni, oide Schäwan, Bodschal, Klaubauf, Rabenviech, Pimpanell, Palmesel, Goggolore, Schuasda, gscheada Saubreiß, Hockableiba, junga Hubbfa, Bierdimpfl, Hosnscheissa, Wurznsepp, Beitlschneida, Hanswurst, oide Bixn, Erzdepp, i glaub, dir brennt da Huat, Grantla, Sautreiba, Vieh mit Haxn, Bagaasch, Ratschkathl, Kircharutschn, Lausbua, du saudamischa, Hubbfa, elendiger, schdaubiga Bruada!"
        },
        {
          chapter: 3,
          id: "einstein",
          title: "Blubber",
          imagePath: null,
          text:
            "Lausbua, Fünferl, Knedlfressa, Schdinkadores, Aufgeiga, gscherta Hamml, Woibbadinga, klebrigs Biaschal, Schuggsn, Auftaklta, Rotzgloggn, Blattada, Hubbfa, Zwedschgarl, Ecknsteha, boaniga, Voiksdepp, Fegeisen, Rotzgloggn, Ecknsteha, schau, dass di schleichst, Dramhappada, Himmeheagodna, greißlicha Uhu, Betschwesta, Badwaschl, Honigscheißa, oide Schäwan, du Ams’l, du bleede, Wurznsepp, depperta Doafdebb, schleich di, misdiga Lausbua, Heislmo, Schwammal, Zwedschgarl, Hemmadbiesla, Klaubauf, Flaschn, Daamaluudscha, Gschpusi, Schdehlratz, Hundsgribbe, Saufbeitl, hoid dei Babbn, klebrigs Biaschal, Zipfebritschn, Schoaswiesn, Schdehlratz, Blattada!"
        }
      ]
    };
  },
  computed: {
    currentText() {
      if (this.dialogs[this.chapter_id - 1]) {
        return this.dialogs[this.chapter_id - 1].text;
      } else {
        return "Souffleuse! Ich hab meinen Text vergessen!!!";
      }
    },
    getImagePath() {
      const img = this.dialogs[0].imagePath;
      return img;
    }
  },
  methods: {
    getBackgroundUrl() {
      const url = require("assets/img/background/ensinger.jpg");
      // const url = require(this.dialogs[0].background);
      window.console.log(url);
      return { "background-image": 'url("' + url + '")' };
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kalam&display=swap");
.container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-areas: "text text text text" "image image image image " "image image image image" "image image image image";
  padding: 16px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.characterimage {
  grid-area: image;
  height: 100%;
}
img {
  object-fit: cover;
}
.text {
  background: whitesmoke;
  padding: 15px;
  text-align: left;
  grid-area: text;
  border-radius: 20px;
  overflow: scroll;
  font-size: 18px;
  font-family: "Kalam", cursive;
}
.option {
  grid-area: option;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.optionItem {
  margin: 0 0.5rem;
  background: whitesmoke;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 7rem;
}
.previous {
  position: fixed;
  justify-content: flex-start;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 50%;
  height: 100%;
  border: dotted red 1px;
}
.next {
  position: fixed;
  justify-content: flex-end;
  top: 0;
  left: 50%;
  z-index: 99999;
  width: 50%;
  height: 100%;
  border: dotted red 1px;
}
</style>
