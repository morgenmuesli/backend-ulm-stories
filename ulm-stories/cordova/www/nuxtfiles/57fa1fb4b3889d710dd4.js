(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    336(t, e, n) {
      "use strict";
      n(123);
      const l = n(124);
      e.a = Object(l.a)("flex");
    },
    337(t, e, n) {
      "use strict";
      n(123);
      const l = n(124);
      e.a = Object(l.a)("layout");
    },
    350(t, e, n) {
      "use strict";
      n.r(e);
      const l = n(40);
      const o = n(63);
      const c = n.n(o);
      const r = n(336);
      const h = n(337);
      const component = Object(l.a)(
        {},
        function() {
          const t = this.$createElement;
          const e = this._self._c || t;
          return e(
            "v-layout",
            [
              e("v-flex", { staticClass: "text-center" }, [
                e("img", {
                  staticClass: "mb-5",
                  attrs: { src: "../v.png", alt: "Vuetify.js" }
                }),
                this._v(" "),
                e("blockquote", { staticClass: "blockquote" }, [
                  this._v(
                    "\n      “First, solve the problem. Then, write the code.”\n      "
                  ),
                  e("footer", [
                    e("small", [e("em", [this._v("—John Johnson")])])
                  ])
                ])
              ])
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      );
      e.default = component.exports;
      c()(component, { VFlex: r.a, VLayout: h.a });
    }
  }
]);
