(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    211: function(t, n, e) {
      var content = e(215);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, e(32).default)("16c442a8", content, !0, { sourceMap: !1 });
    },
    214: function(t, n, e) {
      "use strict";
      var l = e(211);
      e.n(l).a;
    },
    215: function(t, n, e) {
      (n = e(31)(!1)).push([
        t.i,
        ".container[data-v-078fcf96]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:100%}.menu-list[data-v-078fcf96]{font-size:42px}",
        ""
      ]),
        (t.exports = n);
    },
    220: function(t, n, e) {
      "use strict";
      e.r(n);
      var l = { components: {} },
        c = (e(214), e(16)),
        component = Object(c.a)(
          l,
          function() {
            var t = this.$createElement,
              n = this._self._c || t;
            return n("div", { staticClass: "container" }, [
              n("div", { staticClass: "menu" }, [
                n("ul", { staticClass: "menu-list" }, [
                  n(
                    "li",
                    [
                      n("nuxt-link", { attrs: { to: "/game" } }, [
                        this._v("Start Game")
                      ])
                    ],
                    1
                  ),
                  this._v(" "),
                  n(
                    "li",
                    [
                      n("nuxt-link", { attrs: { to: "/preferences" } }, [
                        this._v("Einstellungen")
                      ])
                    ],
                    1
                  ),
                  this._v(" "),
                  n(
                    "li",
                    [
                      n("nuxt-link", { attrs: { to: "/about" } }, [
                        this._v("Über uns")
                      ])
                    ],
                    1
                  )
                ])
              ])
            ]);
          },
          [],
          !1,
          null,
          "078fcf96",
          null
        );
      n.default = component.exports;
    }
  }
]);
