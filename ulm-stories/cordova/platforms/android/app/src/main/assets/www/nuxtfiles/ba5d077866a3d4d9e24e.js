(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    214: function(e, t, c) {
      var content = c(219);
      "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, c(32).default)("8dfc0a30", content, !0, { sourceMap: !1 });
    },
    218: function(e, t, c) {
      "use strict";
      var n = c(214);
      c.n(n).a;
    },
    219: function(e, t, c) {
      (t = c(31)(!1)).push([
        e.i,
        ".container[data-v-a742cc84]{margin:auto;min-height:100vh}.dialog[data-v-a742cc84]{background-size:cover}#characterimage[data-v-a742cc84],#text[data-v-a742cc84]{width:50%}.columns[data-v-a742cc84]{bottom:10px}",
        ""
      ]),
        (e.exports = t);
    },
    226: function(e, t, c) {
      "use strict";
      c.r(t);
      var n = {
          data: function() {
            return {
              chapter_id: this.$route.params.chapter,
              id: this.$route.params.id,
              dialogs: [
                {
                  chapter: 1,
                  id: "ensinger",
                  title: "Blubber",
                  imagePath: "~nuxtfiles/img/character/ensinger.png",
                  background: "@assets/img/background/ensinger.jpg",
                  text:
                    "Saggrament, Rutschn, Fettl, Aufgeiga, aus’gschammta, Zwidawurzn, Geizgroogn, Grachal, mogsd a Wadschn, Lätschnbebbi, Schwindsüchtl, Kircharutschn, Bettwanzn, Beitlschneida, Hausdracha, Schanial, halbseidener, Freibialädschn, gscheate Ruam, hoit’s Mei, Asphaltwanzn, Flaschn, Luada, Betschwesta, Zwidawurzn, Schwobndeifi, ja, wo samma denn, Auftreiwa, damischa Depp, bsuffas Wagscheidl, Schwindsüchtl, glei foid da Wadschnbam um, gscheate Ruam, Lätschnbebbi, Herrgoddsacklzementfixlujja, Zwedschgnmanndl, Hemmadbiesla, Radlfahra, schau, dass di schleichst, Schuggsn, Grawurgl, Pfingsdochs, Oaschgsicht, Rotzgloggn, Schoaswiesn, i glaub, dir brennt da Huat, fade Noggn, hosd mi, aus’gschammta, Bauantrampl!"
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
            currentText: function() {
              return this.dialogs[this.chapter_id]
                ? this.dialogs[this.chapter_id].text
                : "Souffleuse! Ich hab meinen Text vergessen!!!";
            }
          },
          methods: {
            getBackgroundUrl: function() {
              var e = this.dialogs[this.chapter_id].background;
              return (
                window.console.log(e),
                { "background-image": 'url("' + e + '")' }
              );
            },
            getImagePath: function() {
              var img = this.dialogs[this.chapter_id].imagePath;
              return window.console.log(img), img;
            }
          }
        },
        h = (c(218), c(16)),
        component = Object(h.a)(
          n,
          function() {
            var e = this,
              t = e.$createElement,
              c = e._self._c || t;
            return c(
              "div",
              { staticClass: "container dialog", style: e.getBackgroundUrl() },
              [
                c("div", [
                  c("img", {
                    attrs: { src: e.getImagePath(), id: "characterimage" }
                  }),
                  e._v(" "),
                  c("p", { attrs: { id: "text" } }, [e._v(e._s(e.currentText))])
                ]),
                e._v(" "),
                e._m(0)
              ]
            );
          },
          [
            function() {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", { staticClass: "columns" }, [
                t("div", { staticClass: "column" }, [this._v("Option A")]),
                this._v(" "),
                t("div", { staticClass: "column" }, [this._v("Option B")])
              ]);
            }
          ],
          !1,
          null,
          "a742cc84",
          null
        );
      t.default = component.exports;
    }
  }
]);
