(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    329(t, e, n) {
      "use strict";
      n(124);
      const c = n(125);
      e.a = Object(c.a)("flex");
    },
    330(t, e, n) {
      "use strict";
      n(124);
      const c = n(125);
      e.a = Object(c.a)("layout");
    },
    343(t, e, n) {
      "use strict";
      n.r(e);
      const c = { components: {} };
      const r = n(40);
      const l = n(64);
      const o = n.n(l);
      const f = n(329);
      const v = n(330);
      const component = Object(r.a)(
        c,
        function() {
          const t = this.$createElement;
          const e = this._self._c || t;
          return e(
            "v-layout",
            {
              attrs: { column: "", "justify-center": "", "align-center": "" }
            },
            [
              e("v-flex", { attrs: { xs12: "", sm8: "", md6: "" } }, [
                e("h3", [this._v("Ulm Reiseführer")])
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
      o()(component, { VFlex: f.a, VLayout: v.a });
    }
  }
]);
