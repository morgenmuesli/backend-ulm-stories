(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    111(t, e, n) {
      t.exports = n(112);
    },
    112(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          n(58), n(63), n(39);
          const e = n(14);
          const r = (n(22), n(122), n(3));
          const o =
            (n(85),
            n(87),
            n(28),
            n(19),
            n(68),
            n(69),
            n(90),
            n(126),
            n(138),
            n(140),
            n(1));
          const c = n(107);
          const l = n(72);
          const f = n(2);
          const h = n(15);
          const d = n(57);
          o.a.component(d.a.name, d.a),
            o.a.component("NLink", d.a),
            t.fetch || (t.fetch = c.a);
          let m;
          let x;
          let v = [];
          const y = window.__NUXT__ || {};
          Object.assign(o.a.config, { silent: !0, performance: !1 });
          const w = o.a.config.errorHandler || console.error;
          function _(t, e, n) {
            const r = function(component) {
              const t =
                (function(component, t) {
                  if (!component || !component.options || !component.options[t])
                    return {};
                  const option = component.options[t];
                  if (typeof option === "function") {
                    for (
                      var e = arguments.length,
                        n = new Array(e > 2 ? e - 2 : 0),
                        r = 2;
                      r < e;
                      r++
                    )
                      n[r - 2] = arguments[r];
                    return option.apply(void 0, n);
                  }
                  return option;
                })(component, "transition", e, n) || {};
              return typeof t === "string" ? { name: t } : t;
            };
            return t.map(function(t) {
              const e = Object.assign({}, r(t));
              if (n && n.matched.length && n.matched[0].components.default) {
                const o = r(n.matched[0].components.default);
                Object.keys(o)
                  .filter(function(t) {
                    return o[t] && t.toLowerCase().includes("leave");
                  })
                  .forEach(function(t) {
                    e[t] = o[t];
                  });
              }
              return e;
            });
          }
          function j(t, e, n) {
            return k.apply(this, arguments);
          }
          function k() {
            return (k = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                let o;
                let c;
                let l;
                let h;
                const d = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._pathChanged =
                              Boolean(m.nuxt.err) || n.path !== e.path),
                            (this._queryChanged =
                              JSON.stringify(e.query) !==
                              JSON.stringify(n.query)),
                            (this._diffQuery = this._queryChanged
                              ? Object(f.g)(e.query, n.query)
                              : []),
                            this._pathChanged &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 4),
                            this._pathChanged || !this._queryChanged)
                          ) {
                            t.next = 11;
                            break;
                          }
                          return (
                            (t.next = 8),
                            Object(f.n)(e, function(t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 8:
                          (o = t.sent),
                            o.some(function(t) {
                              const r = t.Component;
                              const o = t.instance;
                              const c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function(t) {
                                      return d._diffQuery[t];
                                    })
                                  : typeof c === "function" &&
                                    c.apply(o, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 11:
                          r(), (t.next = 25);
                          break;
                        case 14:
                          if (
                            ((t.prev = 14),
                            (t.t0 = t.catch(4)),
                            (c = t.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (h = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                          ) {
                            t.next = 22;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 22:
                          this.error({ statusCode: l, message: h }),
                            this.$nuxt.$emit("routeChanged", e, n, c),
                            r();
                        case 25:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[4, 14]]
                );
              })
            )).apply(this, arguments);
          }
          function O(t, e) {
            return y.serverRendered && e && Object(f.a)(t, e), (t._Ctor = t), t;
          }
          function C(t) {
            const path = Object(f.d)(t.options.base, t.options.mode);
            return Object(f.c)(
              t.match(path),
              (function() {
                const t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    let l;
                    return regeneratorRuntime.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (typeof e !== "function" || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (l = O(
                                Object(f.o)(e),
                                y.data ? y.data[c] : null
                              )),
                              (r.components[o] = l),
                              t.abrupt("return", l)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function(e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function $(t, e, n) {
            const r = this;
            let o = [];
            let c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(f.o)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function(t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function(t) {
                return typeof t === "function"
                  ? t
                  : (typeof l.a[t] !== "function" &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                      })),
                    l.a[t]);
              })),
              !c)
            )
              return Object(f.k)(o, e);
          }
          function R(t, e, n) {
            return E.apply(this, arguments);
          }
          function E() {
            return (E = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                let o;
                let c;
                let l;
                let d;
                let x;
                let y;
                let w;
                let j;
                let k;
                let O;
                let C;
                let R;
                let E;
                let T;
                let S;
                let P;
                let N;
                let A;
                const D = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._pathChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", r());
                        case 2:
                          return (
                            e === n
                              ? (v = [])
                              : ((o = []),
                                (v = Object(f.e)(n, o).map(function(t, i) {
                                  return Object(f.b)(n.matched[o[i]].path)(
                                    n.params
                                  );
                                }))),
                            (c = !1),
                            (l = function(path) {
                              n.path === path.path &&
                                D.$loading.finish &&
                                D.$loading.finish(),
                                n.path !== path.path &&
                                  D.$loading.pause &&
                                  D.$loading.pause(),
                                c || ((c = !0), r(path));
                            }),
                            (t.next = 7),
                            Object(f.p)(m, {
                              route: e,
                              from: n,
                              next: l.bind(this)
                            })
                          );
                        case 7:
                          if (
                            ((this._dateLastError = m.nuxt.dateErr),
                            (this._hadError = Boolean(m.nuxt.err)),
                            (d = []),
                            (x = Object(f.e)(e, d)).length)
                          ) {
                            t.next = 26;
                            break;
                          }
                          return (t.next = 14), $.call(this, x, m.context);
                        case 14:
                          if (!c) {
                            t.next = 16;
                            break;
                          }
                          return t.abrupt("return");
                        case 16:
                          return (
                            (y = (h.a.options || h.a).layout),
                            (t.next = 19),
                            this.loadLayout(
                              typeof y === "function"
                                ? y.call(h.a, m.context)
                                : y
                            )
                          );
                        case 19:
                          return (
                            (w = t.sent),
                            (t.next = 22),
                            $.call(this, x, m.context, w)
                          );
                        case 22:
                          if (!c) {
                            t.next = 24;
                            break;
                          }
                          return t.abrupt("return");
                        case 24:
                          return (
                            m.context.error({
                              statusCode: 404,
                              message: "This page could not be found"
                            }),
                            t.abrupt("return", r())
                          );
                        case 26:
                          return (
                            x.forEach(function(t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch));
                            }),
                            this.setTransitions(_(x, e, n)),
                            (t.prev = 28),
                            (t.next = 31),
                            $.call(this, x, m.context)
                          );
                        case 31:
                          if (!c) {
                            t.next = 33;
                            break;
                          }
                          return t.abrupt("return");
                        case 33:
                          if (!m.context._errored) {
                            t.next = 35;
                            break;
                          }
                          return t.abrupt("return", r());
                        case 35:
                          return (
                            typeof (j = x[0].options.layout) === "function" &&
                              (j = j(m.context)),
                            (t.next = 39),
                            this.loadLayout(j)
                          );
                        case 39:
                          return (
                            (j = t.sent),
                            (t.next = 42),
                            $.call(this, x, m.context, j)
                          );
                        case 42:
                          if (!c) {
                            t.next = 44;
                            break;
                          }
                          return t.abrupt("return");
                        case 44:
                          if (!m.context._errored) {
                            t.next = 46;
                            break;
                          }
                          return t.abrupt("return", r());
                        case 46:
                          (k = !0),
                            (t.prev = 47),
                            (O = !0),
                            (C = !1),
                            (R = void 0),
                            (t.prev = 51),
                            (E = x[Symbol.iterator]());
                        case 53:
                          if ((O = (T = E.next()).done)) {
                            t.next = 65;
                            break;
                          }
                          if (
                            typeof (S = T.value).options.validate === "function"
                          ) {
                            t.next = 57;
                            break;
                          }
                          return t.abrupt("continue", 62);
                        case 57:
                          return (t.next = 59), S.options.validate(m.context);
                        case 59:
                          if ((k = t.sent)) {
                            t.next = 62;
                            break;
                          }
                          return t.abrupt("break", 65);
                        case 62:
                          (O = !0), (t.next = 53);
                          break;
                        case 65:
                          t.next = 71;
                          break;
                        case 67:
                          (t.prev = 67),
                            (t.t0 = t.catch(51)),
                            (C = !0),
                            (R = t.t0);
                        case 71:
                          (t.prev = 71),
                            (t.prev = 72),
                            O || E.return == null || E.return();
                        case 74:
                          if (((t.prev = 74), !C)) {
                            t.next = 77;
                            break;
                          }
                          throw R;
                        case 77:
                          return t.finish(74);
                        case 78:
                          return t.finish(71);
                        case 79:
                          t.next = 85;
                          break;
                        case 81:
                          return (
                            (t.prev = 81),
                            (t.t1 = t.catch(47)),
                            this.error({
                              statusCode: t.t1.statusCode || "500",
                              message: t.t1.message
                            }),
                            t.abrupt("return", r())
                          );
                        case 85:
                          if (k) {
                            t.next = 88;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: "This page could not be found"
                            }),
                            t.abrupt("return", r())
                          );
                        case 88:
                          return (
                            (t.next = 90),
                            Promise.all(
                              x.map(function(t, i) {
                                if (
                                  ((t._path = Object(f.b)(e.matched[d[i]].path)(
                                    e.params
                                  )),
                                  (t._dataRefresh = !1),
                                  (D._pathChanged && D._queryChanged) ||
                                    t._path !== v[i])
                                )
                                  t._dataRefresh = !0;
                                else if (!D._pathChanged && D._queryChanged) {
                                  const r = t.options.watchQuery;
                                  !0 === r
                                    ? (t._dataRefresh = !0)
                                    : Array.isArray(r)
                                    ? (t._dataRefresh = r.some(function(t) {
                                        return D._diffQuery[t];
                                      }))
                                    : typeof r === "function" &&
                                      (P || (P = Object(f.f)(e)),
                                      (t._dataRefresh = r.apply(P[i], [
                                        e.query,
                                        n.query
                                      ])));
                                }
                                if (
                                  D._hadError ||
                                  !D._isMounted ||
                                  t._dataRefresh
                                ) {
                                  const o = [];
                                  const c =
                                    t.options.asyncData &&
                                    typeof t.options.asyncData === "function";
                                  const l = Boolean(t.options.fetch);
                                  const h = c && l ? 30 : 45;
                                  if (c) {
                                    const x = Object(f.m)(
                                      t.options.asyncData,
                                      m.context
                                    ).then(function(e) {
                                      Object(f.a)(t, e),
                                        D.$loading.increase &&
                                          D.$loading.increase(h);
                                    });
                                    o.push(x);
                                  }
                                  if (
                                    ((D.$loading.manual =
                                      !1 === t.options.loading),
                                    l)
                                  ) {
                                    let p = t.options.fetch(m.context);
                                    (p &&
                                      (p instanceof Promise ||
                                        typeof p.then === "function")) ||
                                      (p = Promise.resolve(p)),
                                      p.then(function(t) {
                                        D.$loading.increase &&
                                          D.$loading.increase(h);
                                      }),
                                      o.push(p);
                                  }
                                  return Promise.all(o);
                                }
                              })
                            )
                          );
                        case 90:
                          c ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            r()),
                            (t.next = 107);
                          break;
                        case 93:
                          if (
                            ((t.prev = 93),
                            (t.t2 = t.catch(28)),
                            (N = t.t2 || {}).message !== "ERR_REDIRECT")
                          ) {
                            t.next = 98;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", e, n, N)
                          );
                        case 98:
                          return (
                            (v = []),
                            Object(f.i)(N),
                            typeof (A = (h.a.options || h.a).layout) ===
                              "function" && (A = A(m.context)),
                            (t.next = 104),
                            this.loadLayout(A)
                          );
                        case 104:
                          this.error(N),
                            this.$nuxt.$emit("routeChanged", e, n, N),
                            r();
                        case 107:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [28, 93],
                    [47, 81],
                    [51, 67, 71, 79],
                    [72, , 74, 78]
                  ]
                );
              })
            )).apply(this, arguments);
          }
          function T(t, n) {
            Object(f.c)(t, function(t, n, r, c) {
              return (
                Object(e.a)(t) !== "object" ||
                  t.options ||
                  (((t = o.a.extend(t))._Ctor = t), (r.components[c] = t)),
                t
              );
            });
          }
          function S(t) {
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              this.error();
            let e = this.$options.nuxt.err
              ? (h.a.options || h.a).layout
              : t.matched[0].components.default.options.layout;
            typeof e === "function" && (e = e(m.context)), this.setLayout(e);
          }
          function P(t, e) {
            const n = this;
            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
              const r = Object(f.f)(t);
              const c = Object(f.e)(t);
              o.a.nextTick(function() {
                r.forEach(function(t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    typeof t.constructor.options.data === "function"
                  ) {
                    const e = t.constructor.options.data.call(t);
                    for (const n in e) o.a.set(t.$data, n, e[n]);
                    window.$nuxt.$nextTick(function() {
                      window.$nuxt.$emit("triggerScroll");
                    });
                  }
                }),
                  S.call(n, t);
              });
            }
          }
          function N(t) {
            window.onNuxtReadyCbs.forEach(function(e) {
              typeof e === "function" && e(t);
            }),
              typeof window._onNuxtLoaded === "function" &&
                window._onNuxtLoaded(t),
              x.afterEach(function(e, n) {
                o.a.nextTick(function() {
                  return t.$nuxt.$emit("routeChanged", e, n);
                });
              });
          }
          function A() {
            return (A = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                let n, r, c, l;
                return regeneratorRuntime.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (m = e.app),
                          (x = e.router),
                          e.store,
                          (n = new o.a(m)),
                          (r = function() {
                            n.$mount("#__nuxt"),
                              x.afterEach(T),
                              x.afterEach(P.bind(n)),
                              o.a.nextTick(function() {
                                N(n);
                              });
                          }),
                          (t.next = 7),
                          Promise.all(C(x))
                        );
                      case 7:
                        if (
                          ((c = t.sent),
                          (n.setTransitions = n.$options.nuxt.setTransitions.bind(
                            n
                          )),
                          c.length &&
                            (n.setTransitions(_(c, x.currentRoute)),
                            (v = x.currentRoute.matched.map(function(t) {
                              return Object(f.b)(t.path)(x.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          y.error && n.error(y.error),
                          x.beforeEach(j.bind(n)),
                          x.beforeEach(R.bind(n)),
                          !y.serverRendered)
                        ) {
                          t.next = 17;
                          break;
                        }
                        return r(), t.abrupt("return");
                      case 17:
                        (l = function() {
                          T(x.currentRoute, x.currentRoute),
                            S.call(n, x.currentRoute),
                            r();
                        }),
                          R.call(n, x.currentRoute, x.currentRoute, function(
                            path
                          ) {
                            if (path) {
                              var t = x.afterEach(function(e, n) {
                                t(), l();
                              });
                              x.push(path, void 0, function(t) {
                                t && w(t);
                              });
                            } else l();
                          });
                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(h.b)()
            .then(function(t) {
              return A.apply(this, arguments);
            })
            .catch(w);
        }.call(this, n(23));
    },
    15(t, e, n) {
      "use strict";
      n(22), n(95), n(39), n(28), n(19), n(68);
      const r = n(3);
      const o = n(56);
      const c = (n(69), n(1));
      const l = n(108);
      const f = n(73);
      const h = n.n(f);
      const d = n(29);
      const m = n.n(d);
      const x = n(41);
      const v = n(2);
      "scrollRestoration" in window.history &&
        ((window.history.scrollRestoration = "manual"),
        window.addEventListener("beforeunload", function() {
          window.history.scrollRestoration = "auto";
        }),
        window.addEventListener("load", function() {
          window.history.scrollRestoration = "manual";
        }));
      const y = function() {};
      const w = x.a.prototype.push;
      (x.a.prototype.push = function(t) {
        const e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
        const n = arguments.length > 2 ? arguments[2] : void 0;
        return w.call(this, t, e, n);
      }),
        c.a.use(x.a);
      const _ = {
        mode: "hash",
        base: decodeURI("/"),
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior(t, e, n) {
          let r = !1;
          const o = Object(v.e)(t);
          o.length < 2 &&
          o.every(function(t) {
            return !1 !== t.options.scrollToTop;
          })
            ? (r = { x: 0, y: 0 })
            : o.some(function(t) {
                return t.options.scrollToTop;
              }) && (r = { x: 0, y: 0 }),
            n && (r = n);
          const c = window.$nuxt;
          return (
            t.path === e.path &&
              t.hash !== e.hash &&
              c.$nextTick(function() {
                return c.$emit("triggerScroll");
              }),
            new Promise(function(e) {
              c.$once("triggerScroll", function() {
                if (t.hash) {
                  let n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (t) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: "/about",
            component() {
              return Object(v.j)(n.e(2).then(n.bind(null, 217)));
            },
            name: "about"
          },
          {
            path: "/game",
            component() {
              return Object(v.j)(n.e(3).then(n.bind(null, 216)));
            },
            name: "game"
          },
          {
            path: "/preferences",
            component() {
              return Object(v.j)(n.e(5).then(n.bind(null, 218)));
            },
            name: "preferences"
          },
          {
            path: "/",
            component() {
              return Object(v.j)(n.e(4).then(n.bind(null, 219)));
            },
            name: "index"
          }
        ],
        fallback: !1
      };
      function j() {
        return new x.a(_);
      }
      let k;
      const O = {
        name: "NuxtChild",
        functional: !0,
        props: {
          nuxtChildKey: { type: String, default: "" },
          keepAlive: Boolean,
          keepAliveProps: { type: Object, default: void 0 }
        },
        render(t, e) {
          let n = e.parent;
          const data = e.data;
          const r = e.props;
          data.nuxtChild = !0;
          for (
            var o = n,
              c = n.$nuxt.nuxt.transitions,
              l = n.$nuxt.nuxt.defaultTransition,
              f = 0;
            n;

          )
            n.$vnode && n.$vnode.data.nuxtChild && f++, (n = n.$parent);
          data.nuxtChildDepth = f;
          const h = c[f] || l;
          const d = {};
          C.forEach(function(t) {
            void 0 !== h[t] && (d[t] = h[t]);
          });
          const m = {};
          $.forEach(function(t) {
            typeof h[t] === "function" && (m[t] = h[t].bind(o));
          });
          const x = m.beforeEnter;
          if (
            ((m.beforeEnter = function(t) {
              if (
                (window.$nuxt.$nextTick(function() {
                  window.$nuxt.$emit("triggerScroll");
                }),
                x)
              )
                return x.call(o, t);
            }),
            !1 === h.css)
          ) {
            const v = m.leave;
            (!v || v.length < 2) &&
              (m.leave = function(t, e) {
                v && v.call(o, t), o.$nextTick(e);
              });
          }
          let y = t("routerView", data);
          return (
            r.keepAlive &&
              (y = t("keep-alive", { props: r.keepAliveProps }, [y])),
            t("transition", { props: d, on: m }, [y])
          );
        }
      };
      var C = [
        "name",
        "mode",
        "appear",
        "css",
        "type",
        "duration",
        "enterClass",
        "leaveClass",
        "appearClass",
        "enterActiveClass",
        "enterActiveClass",
        "leaveActiveClass",
        "appearActiveClass",
        "enterToClass",
        "leaveToClass",
        "appearToClass"
      ];
      var $ = [
        "beforeEnter",
        "enter",
        "afterEnter",
        "enterCancelled",
        "beforeLeave",
        "leave",
        "afterLeave",
        "leaveCancelled",
        "beforeAppear",
        "appear",
        "afterAppear",
        "appearCancelled"
      ];
      const R = {
        name: "NuxtError",
        props: { error: { type: Object, default: null } },
        computed: {
          statusCode() {
            return (this.error && this.error.statusCode) || 500;
          },
          message() {
            return this.error.message || "Error";
          }
        },
        head() {
          return {
            title: this.message,
            meta: [
              {
                name: "viewport",
                content:
                  "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
              }
            ]
          };
        }
      };
      const E = (n(155), n(16));
      const T = Object(E.a)(
        R,
        function() {
          const t = this;
          const e = t.$createElement;
          const n = t._self._c || e;
          return n("div", { staticClass: "__nuxt-error-page" }, [
            n("div", { staticClass: "error" }, [
              n(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "90",
                    height: "90",
                    fill: "#DBE1EC",
                    viewBox: "0 0 48 48"
                  }
                },
                [
                  n("path", {
                    attrs: {
                      d:
                        "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                    }
                  })
                ]
              ),
              t._v(" "),
              n("div", { staticClass: "title" }, [t._v(t._s(t.message))]),
              t._v(" "),
              t.statusCode === 404
                ? n(
                    "p",
                    { staticClass: "description" },
                    [
                      n(
                        "NuxtLink",
                        { staticClass: "error-link", attrs: { to: "/" } },
                        [t._v("Back to the home page")]
                      )
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t._m(0)
            ])
          ]);
        },
        [
          function() {
            const t = this.$createElement;
            const e = this._self._c || t;
            return e("div", { staticClass: "logo" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://nuxtjs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [this._v("Nuxt.js")]
              )
            ]);
          }
        ],
        !1,
        null,
        null,
        null
      ).exports;
      const S = (n(96), n(97), n(71), n(40));
      const P = {
        name: "Nuxt",
        components: { NuxtChild: O, NuxtError: T },
        props: {
          nuxtChildKey: { type: String, default: void 0 },
          keepAlive: Boolean,
          keepAliveProps: { type: Object, default: void 0 },
          name: { type: String, default: "default" }
        },
        errorCaptured(t) {
          this.displayingNuxtError &&
            ((this.errorFromNuxtError = t), this.$forceUpdate());
        },
        computed: {
          routerViewKey() {
            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
              return (
                this.nuxtChildKey ||
                Object(v.b)(this.$route.matched[0].path)(this.$route.params)
              );
            const t = Object(S.a)(this.$route.matched, 1)[0];
            if (!t) return this.$route.path;
            const e = t.components.default;
            if (e && e.options) {
              const n = e.options;
              if (n.key)
                return typeof n.key === "function" ? n.key(this.$route) : n.key;
            }
            return /\/$/.test(t.path)
              ? this.$route.path
              : this.$route.path.replace(/\/$/, "");
          }
        },
        beforeCreate() {
          c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
        },
        render(t) {
          const e = this;
          return this.nuxt.err
            ? this.errorFromNuxtError
              ? (this.$nextTick(function() {
                  return (e.errorFromNuxtError = !1);
                }),
                t("div", {}, [
                  t("h2", "An error occured while showing the error page"),
                  t(
                    "p",
                    "Unfortunately an error occured and while showing the error page another error occured"
                  ),
                  t(
                    "p",
                    "Error details: ".concat(this.errorFromNuxtError.toString())
                  ),
                  t("nuxt-link", { props: { to: "/" } }, "Go back to home")
                ]))
              : ((this.displayingNuxtError = !0),
                this.$nextTick(function() {
                  return (e.displayingNuxtError = !1);
                }),
                t(T, { props: { error: this.nuxt.err } }))
            : t("NuxtChild", { key: this.routerViewKey, props: this.$props });
        }
      };
      const N =
        (n(58),
        {
          name: "NuxtLoading",
          data() {
            return {
              percent: 0,
              show: !1,
              canSucceed: !0,
              reversed: !1,
              skipTimerCount: 0,
              rtl: !1,
              throttle: 200,
              duration: 5e3,
              continuous: !1
            };
          },
          computed: {
            left() {
              return (
                !(!this.continuous && !this.rtl) &&
                (this.rtl
                  ? this.reversed
                    ? "0px"
                    : "auto"
                  : this.reversed
                  ? "auto"
                  : "0px")
              );
            }
          },
          beforeDestroy() {
            this.clear();
          },
          methods: {
            clear() {
              clearInterval(this._timer),
                clearTimeout(this._throttle),
                (this._timer = null);
            },
            start() {
              const t = this;
              return (
                this.clear(),
                (this.percent = 0),
                (this.reversed = !1),
                (this.skipTimerCount = 0),
                (this.canSucceed = !0),
                this.throttle
                  ? (this._throttle = setTimeout(function() {
                      return t.startTimer();
                    }, this.throttle))
                  : this.startTimer(),
                this
              );
            },
            set(t) {
              return (
                (this.show = !0),
                (this.canSucceed = !0),
                (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                this
              );
            },
            get() {
              return this.percent;
            },
            increase(t) {
              return (
                (this.percent = Math.min(100, Math.floor(this.percent + t))),
                this
              );
            },
            decrease(t) {
              return (
                (this.percent = Math.max(0, Math.floor(this.percent - t))), this
              );
            },
            pause() {
              return clearInterval(this._timer), this;
            },
            resume() {
              return this.startTimer(), this;
            },
            finish() {
              return (
                (this.percent = this.reversed ? 0 : 100), this.hide(), this
              );
            },
            hide() {
              const t = this;
              return (
                this.clear(),
                setTimeout(function() {
                  (t.show = !1),
                    t.$nextTick(function() {
                      (t.percent = 0), (t.reversed = !1);
                    });
                }, 500),
                this
              );
            },
            fail() {
              return (this.canSucceed = !1), this;
            },
            startTimer() {
              const t = this;
              this.show || (this.show = !0),
                void 0 === this._cut &&
                  (this._cut = 1e4 / Math.floor(this.duration)),
                (this._timer = setInterval(function() {
                  t.skipTimerCount > 0
                    ? t.skipTimerCount--
                    : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                      t.continuous &&
                        (t.percent >= 100
                          ? ((t.skipTimerCount = 1), (t.reversed = !t.reversed))
                          : t.percent <= 0 &&
                            ((t.skipTimerCount = 1),
                            (t.reversed = !t.reversed))));
                }, 100));
            }
          },
          render(t) {
            let e = t(!1);
            return (
              this.show &&
                (e = t("div", {
                  staticClass: "nuxt-progress",
                  class: {
                    "nuxt-progress-notransition": this.skipTimerCount > 0,
                    "nuxt-progress-failed": !this.canSucceed
                  },
                  style: { width: this.percent + "%", left: this.left }
                })),
              e
            );
          }
        });
      const A =
        (n(157), Object(E.a)(N, void 0, void 0, !1, null, null, null).exports);
      const D = (n(159), n(161), n(167), { name: "Map" });
      const U = {
        _default: Object(E.a)(
          {},
          function() {
            const t = this.$createElement;
            const e = this._self._c || t;
            return e("div", { staticClass: "container" }, [e("nuxt")], 1);
          },
          [],
          !1,
          null,
          "6dcfbf96",
          null
        ).exports,
        _map: Object(E.a)(
          D,
          function() {
            const t = this.$createElement;
            const e = this._self._c || t;
            return e("v-app", [e("nuxt")], 1);
          },
          [],
          !1,
          null,
          "4c25cc8a",
          null
        ).exports
      };
      const B = {
        head: {
          titleTemplate: "%s - ulm-stories",
          title: "ulm-stories",
          meta: [
            { charset: "utf-8" },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1"
            },
            {
              hid: "description",
              name: "description",
              content: "A interactive travel guide as pwa for 12 years old kids"
            },
            {
              hid: "mobile-web-app-capable",
              name: "mobile-web-app-capable",
              content: "yes"
            },
            {
              hid: "apple-mobile-web-app-title",
              name: "apple-mobile-web-app-title",
              content: "ulm-stories"
            },
            { hid: "author", name: "author", content: "Christoph Meyer" },
            { hid: "theme-color", name: "theme-color", content: "#fff" },
            {
              hid: "og:type",
              name: "og:type",
              property: "og:type",
              content: "website"
            },
            {
              hid: "og:title",
              name: "og:title",
              property: "og:title",
              content: "ulm-stories"
            },
            {
              hid: "og:site_name",
              name: "og:site_name",
              property: "og:site_name",
              content: "ulm-stories"
            },
            {
              hid: "og:description",
              name: "og:description",
              property: "og:description",
              content: "A interactive travel guide as pwa for 12 years old kids"
            }
          ],
          link: [
            { rel: "icon", type: "image/x-icon", href: "../favicon.ico" },
            { rel: "manifest", href: "nuxtfiles/manifest.217583aa.json" },
            {
              rel: "shortcut icon",
              href: "nuxtfiles/icons/icon_64.5f6a36.png"
            },
            {
              rel: "apple-touch-icon",
              href: "nuxtfiles/icons/icon_512.5f6a36.png",
              sizes: "512x512"
            }
          ],
          script: [{ src: "cordova.js" }],
          style: [],
          htmlAttrs: { lang: "en" }
        },
        render(t, e) {
          const n = t("NuxtLoading", { ref: "loading" });
          const r = t(this.layout || "nuxt");
          const o = t(
            "div",
            { domProps: { id: "__layout" }, key: this.layoutName },
            [r]
          );
          const c = t(
            "transition",
            {
              props: { name: "layout", mode: "out-in" },
              on: {
                beforeEnter(t) {
                  window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit("triggerScroll");
                  });
                }
              }
            },
            [o]
          );
          return t("div", { domProps: { id: "__nuxt" } }, [n, c]);
        },
        data() {
          return { isOnline: !0, layout: null, layoutName: "" };
        },
        beforeCreate() {
          c.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
        },
        created() {
          (c.a.prototype.$nuxt = this),
            (window.$nuxt = this),
            this.refreshOnlineStatus(),
            window.addEventListener("online", this.refreshOnlineStatus),
            window.addEventListener("offline", this.refreshOnlineStatus),
            (this.error = this.nuxt.error),
            (this.context = this.$options.context);
        },
        mounted() {
          this.$loading = this.$refs.loading;
        },
        watch: { "nuxt.err": "errorChanged" },
        computed: {
          isOffline() {
            return !this.isOnline;
          }
        },
        methods: {
          refreshOnlineStatus() {
            void 0 === window.navigator.onLine
              ? (this.isOnline = !0)
              : (this.isOnline = window.navigator.onLine);
          },
          refresh:
            ((k = Object(r.a)(
              regeneratorRuntime.mark(function t() {
                let e;
                let n;
                const r = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((e = Object(v.f)(this.$route)).length) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (
                            this.$loading.start(),
                            (n = e.map(function(t) {
                              const p = [];
                              return (
                                t.$options.fetch &&
                                  p.push(
                                    Object(v.m)(t.$options.fetch, r.context)
                                  ),
                                t.$options.asyncData &&
                                  p.push(
                                    Object(v.m)(
                                      t.$options.asyncData,
                                      r.context
                                    ).then(function(e) {
                                      for (const n in e)
                                        c.a.set(t.$data, n, e[n]);
                                    })
                                  ),
                                Promise.all(p)
                              );
                            })),
                            (t.prev = 5),
                            (t.next = 8),
                            Promise.all(n)
                          );
                        case 8:
                          t.next = 15;
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(5)),
                            this.$loading.fail(),
                            Object(v.i)(t.t0),
                            this.error(t.t0);
                        case 15:
                          this.$loading.finish();
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 10]]
                );
              })
            )),
            function() {
              return k.apply(this, arguments);
            }),
          errorChanged() {
            this.nuxt.err &&
              this.$loading &&
              (this.$loading.fail && this.$loading.fail(),
              this.$loading.finish && this.$loading.finish());
          },
          setLayout(t) {
            return (
              (t && U["_" + t]) || (t = "default"),
              (this.layoutName = t),
              (this.layout = U["_" + t]),
              this.layout
            );
          },
          loadLayout(t) {
            return (
              (t && U["_" + t]) || (t = "default"), Promise.resolve(U["_" + t])
            );
          }
        },
        components: { NuxtLoading: A }
      };
      const M = n(74);
      c.a.use(M.a);
      let I = {};
      (I = (function(t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            "[nuxt] ".concat(
              e,
              " should export a method that returns a Vuex instance."
            )
          );
        return (
          typeof t !== "function" && (t = Object.assign({}, t)),
          (function(t, e) {
            if (t.state && typeof t.state !== "function") {
              console.warn(
                "'state' should be a method that returns an object in ".concat(
                  e
                )
              );
              const n = Object.assign({}, t.state);
              t = Object.assign({}, t, {
                state() {
                  return n;
                }
              });
            }
            return t;
          })(t, e)
        );
      })(n(169), "store/index.js")).modules = I.modules || {};
      const z =
        I instanceof Function
          ? I
          : function() {
              return new M.a.Store(Object.assign({ strict: !1 }, I));
            };
      function F() {
        return (F = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            let e, r, o;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!(!1 in navigator)) {
                      t.next = 2;
                      break;
                    }
                    throw new Error(
                      "serviceWorker is not supported in current browser!"
                    );
                  case 2:
                    return (t.next = 4), n.e(8).then(n.bind(null, 215));
                  case 4:
                    return (
                      (e = t.sent),
                      (r = e.Workbox),
                      (o = new r("/sw.js", { scope: "/" })),
                      (t.next = 9),
                      o.register()
                    );
                  case 9:
                    return t.abrupt("return", o);
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      window.$workbox = (function() {
        return F.apply(this, arguments);
      })().catch(function(t) {});
      const K = function(t, e) {
        return H.apply(this, arguments);
      };
      function H() {
        return (H = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            let r;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (r = {
                      "64x64": "nuxtfiles/icons/icon_64.5f6a36.png",
                      "120x120": "nuxtfiles/icons/icon_120.5f6a36.png",
                      "144x144": "nuxtfiles/icons/icon_144.5f6a36.png",
                      "152x152": "nuxtfiles/icons/icon_152.5f6a36.png",
                      "192x192": "nuxtfiles/icons/icon_192.5f6a36.png",
                      "384x384": "nuxtfiles/icons/icon_384.5f6a36.png",
                      "512x512": "nuxtfiles/icons/icon_512.5f6a36.png"
                    }),
                      n("icon", function(t) {
                        return r[t + "x" + t] || "";
                      });
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      const J = n(187);
      const W = n(188);
      const V = n(189);
      const Q = n(190);
      const X = n(191);
      const G = n(192);
      const Y = n(193);
      const Z = n(194);
      const tt = n(195);
      const et = n(196);
      const nt = n(197);
      const ot = n(198);
      const it = n(199);
      const at = n(200);
      const st = n(201);
      const ct = n(202);
      const ut = n(203);
      const pt = n(204);
      const lt = n(205);
      const ft = n(206);
      const ht = n(207);
      const mt = n(208);
      c.a.component("l-circle", J.a),
        c.a.component("l-circle-marker", W.a),
        c.a.component("l-control", V.a),
        c.a.component("l-control-attribution", Q.a),
        c.a.component("l-control-layers", X.a),
        c.a.component("l-control-scale", G.a),
        c.a.component("l-control-zoom", Y.a),
        c.a.component("l-feature-group", Z.a),
        c.a.component("l-geo-json", tt.a),
        c.a.component("l-icon", et.a),
        c.a.component("l-icon-default", nt.a),
        c.a.component("l-image-overlay", ot.a),
        c.a.component("l-layer-group", it.a),
        c.a.component("l-map", at.a),
        c.a.component("l-marker", st.a),
        c.a.component("l-polygon", ct.a),
        c.a.component("l-polyline", ut.a),
        c.a.component("l-popup", pt.a),
        c.a.component("l-rectangle", lt.a),
        c.a.component("l-tile-layer", ft.a),
        c.a.component("l-tooltip", ht.a),
        c.a.component("l-lwms-tile-layer", mt.a),
        delete L.Icon.Default.prototype._getIconUrl,
        (L.Icon.Default.imagePath = ""),
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png"
        });
      const xt = {
        install(t, e) {
          t.prototype.$L = L;
        }
      };
      c.a.use(xt);
      const vt = function(t) {
        return gt.apply(this, arguments);
      };
      function gt() {
        return (gt = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    e.router, e.store;
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      n(63);
      for (
        var bt = n(42),
          yt = n.n(bt),
          wt = n(110),
          _t = n.n(wt),
          jt = {
            setBaseURL(t) {
              this.defaults.baseURL = t;
            },
            setHeader(t, e) {
              const n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "common";
              let r = !0;
              let o = !1;
              let c = void 0;
              try {
                for (
                  var l, f = (Array.isArray(n) ? n : [n])[Symbol.iterator]();
                  !(r = (l = f.next()).done);
                  r = !0
                ) {
                  const h = l.value;
                  if (!e) return void delete this.defaults.headers[h][t];
                  this.defaults.headers[h][t] = e;
                }
              } catch (t) {
                (o = !0), (c = t);
              } finally {
                try {
                  r || f.return == null || f.return();
                } finally {
                  if (o) throw c;
                }
              }
            },
            setToken(t, e) {
              const n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "common";
              const r = t ? (e ? e + " " : "") + t : null;
              this.setHeader("Authorization", r, n);
            },
            onRequest(t) {
              this.interceptors.request.use(function(e) {
                return t(e) || e;
              });
            },
            onResponse(t) {
              this.interceptors.response.use(function(e) {
                return t(e) || e;
              });
            },
            onRequestError(t) {
              this.interceptors.request.use(void 0, function(e) {
                return t(e) || Promise.reject(e);
              });
            },
            onResponseError(t) {
              this.interceptors.response.use(void 0, function(e) {
                return t(e) || Promise.reject(e);
              });
            },
            onError(t) {
              this.onRequestError(t), this.onResponseError(t);
            },
            create(t) {
              return $t(_t()(t, this.defaults));
            }
          },
          kt = function() {
            const t = Ct[Ot];
            jt["$" + t] = function() {
              return this[t].apply(this, arguments).then(function(t) {
                return t && t.data;
              });
            };
          },
          Ot = 0,
          Ct = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch"
          ];
        Ot < Ct.length;
        Ot++
      )
        kt();
      var $t = function(t) {
        const e = yt.a.create(t);
        return (
          (e.CancelToken = yt.a.CancelToken),
          (e.isCancel = yt.a.isCancel),
          (function(t) {
            for (const e in jt) t[e] = jt[e].bind(t);
          })(e),
          Rt(e),
          e
        );
      };
      var Rt = function(t) {
        const e = {
          finish() {},
          start() {},
          fail() {},
          set() {}
        };
        const n = function() {
          return window.$nuxt &&
            window.$nuxt.$loading &&
            window.$nuxt.$loading.set
            ? window.$nuxt.$loading
            : e;
        };
        let r = 0;
        t.onRequest(function(t) {
          (t && !1 === t.progress) || r++;
        }),
          t.onResponse(function(t) {
            (t && t.config && !1 === t.config.progress) ||
              (--r <= 0 && ((r = 0), n().finish()));
          }),
          t.onError(function(t) {
            (t && t.config && !1 === t.config.progress) ||
              (r--, yt.a.isCancel(t) || (n().fail(), n().finish()));
          });
        const o = function(t) {
          if (r) {
            const progress = (100 * t.loaded) / (t.total * r);
            n().set(Math.min(100, progress));
          }
        };
        (t.defaults.onUploadProgress = o), (t.defaults.onDownloadProgress = o);
      };
      const Et = function(t, e) {
        const n = {
          baseURL: "http://localhost:3000/",
          headers: {
            common: { Accept: "application/json, text/plain, */*" },
            delete: {},
            get: {},
            head: {},
            post: {},
            put: {},
            patch: {}
          }
        };
        (n.headers.common =
          t.req && t.req.headers ? Object.assign({}, t.req.headers) : {}),
          delete n.headers.common.accept,
          delete n.headers.common.host,
          delete n.headers.common["cf-ray"],
          delete n.headers.common["cf-connecting-ip"],
          delete n.headers.common["content-length"],
          delete n.headers.common["content-md5"],
          delete n.headers.common["content-type"];
        const r = $t(n);
        (t.$axios = r), e("axios", r);
      };
      const Tt = n(14);
      const St = function(t, e) {
        const n = t.app;
        ({
          initialize() {
            document.addEventListener(
              "deviceready",
              this.onDeviceReady.bind(this),
              !1
            );
          },
          onDeviceReady() {
            try {
              this.initStatusBar();
            } catch (t) {}
            try {
              this.initWKWebView();
            } catch (t) {}
            try {
              this.initCustomUrlScheme();
            } catch (t) {}
          },
          initCustomUrlScheme() {
            window.handleOpenURL = function(t) {
              alert("DeepLink: " + t);
            };
          },
          initStatusBar() {
            window.StatusBar.overlaysWebView(!1),
              window.StatusBar.backgroundColorByHexString("#009896");
          },
          initWKWebView() {}
        }.initialize(),
          (n.context.redirect = function(t, path, e) {
            if (t) {
              n.context._redirected = !0;
              let r = Object(Tt.a)(path);
              typeof t === "number" ||
                (r !== "undefined" && r !== "object") ||
                ((e = path || {}),
                (path = t),
                (r = Object(Tt.a)(path)),
                (t = 302)),
                r === "object" && (path = n.router.resolve(path).href),
                /(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)
                  ? n.context.next({ path, query: e, status: t })
                  : window.location.replace(path);
            }
          }));
      };
      function Pt(object, t) {
        const e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Nt(t) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          i % 2
            ? Pt(Object(source), !0).forEach(function(e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Pt(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      n.d(e, "b", function() {
        return Dt;
      }),
        n.d(e, "a", function() {
          return T;
        }),
        c.a.component(h.a.name, h.a),
        c.a.component(
          m.a.name,
          Nt({}, m.a, {
            render(t, e) {
              return (
                m.a._warned ||
                  ((m.a._warned = !0),
                  console.warn(
                    "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                  )),
                m.a.render(t, e)
              );
            }
          })
        ),
        c.a.component(O.name, O),
        c.a.component("NChild", O),
        c.a.component(P.name, P),
        c.a.use(l.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid"
        });
      const At = {
        name: "page",
        mode: "out-in",
        appear: !0,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      };
      function Dt(t) {
        return Lt.apply(this, arguments);
      }
      function Lt() {
        return (Lt = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            let n, r, o, l, f, path, h;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), j();
                  case 2:
                    return (
                      (n = t.sent),
                      ((r = z(e)).$router = n),
                      (o = Nt(
                        {
                          store: r,
                          router: n,
                          nuxt: {
                            defaultTransition: At,
                            transitions: [At],
                            setTransitions(t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function(t) {
                                  return (t = t
                                    ? typeof t === "string"
                                      ? Object.assign({}, At, { name: t })
                                      : Object.assign({}, At, t)
                                    : At);
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              );
                            },
                            err: null,
                            dateErr: null,
                            error(t) {
                              (t = t || null),
                                (o.context._errored = Boolean(t)),
                                (t = t ? Object(v.l)(t) : null);
                              const n = this.nuxt || this.$options.nuxt;
                              return (
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              );
                            }
                          }
                        },
                        B
                      )),
                      (r.app = o),
                      (l = e
                        ? e.next
                        : function(t) {
                            return o.router.push(t);
                          }),
                      e
                        ? (f = n.resolve(e.url).route)
                        : ((path = Object(v.d)(n.options.base, n.options.mode)),
                          (f = n.resolve(path).route)),
                      (t.next = 11),
                      Object(v.p)(o, {
                        store: r,
                        route: f,
                        next: l,
                        error: o.nuxt.error.bind(o),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e
                      })
                    );
                  case 11:
                    (h = function(t, e) {
                      if (!t)
                        throw new Error(
                          "inject(key, value) has no key provided"
                        );
                      if (void 0 === e)
                        throw new Error(
                          "inject(key, value) has no value provided"
                        );
                      (o[(t = "$" + t)] = e), (r[t] = o[t]);
                      const n = "__nuxt_" + t + "_installed__";
                      c.a[n] ||
                        ((c.a[n] = !0),
                        c.a.use(function() {
                          Object.prototype.hasOwnProperty.call(c.a, t) ||
                            Object.defineProperty(c.a.prototype, t, {
                              get() {
                                return this.$root.$options[t];
                              }
                            });
                        }));
                    }),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        r.replaceState(window.__NUXT__.state),
                      (t.next = 16);
                    break;
                  case 16:
                    return (t.next = 19), K(o.context, h);
                  case 19:
                    return (t.next = 22), vt(o.context, h);
                  case 22:
                    return (t.next = 25), Et(o.context, h);
                  case 25:
                    return (t.next = 28), St(o.context);
                  case 28:
                    t.next = 31;
                    break;
                  case 31:
                    return t.abrupt("return", { store: r, app: o, router: n });
                  case 32:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    155(t, e, n) {
      "use strict";
      const r = n(53);
      n.n(r).a;
    },
    156(t, e, n) {
      (e = n(30)(!1)).push([
        t.i,
        ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",
        ""
      ]),
        (t.exports = e);
    },
    157(t, e, n) {
      "use strict";
      const r = n(54);
      n.n(r).a;
    },
    158(t, e, n) {
      (e = n(30)(!1)).push([
        t.i,
        ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",
        ""
      ]),
        (t.exports = e);
    },
    167(t, e, n) {
      "use strict";
      const r = n(55);
      n.n(r).a;
    },
    168(t, e, n) {
      (e = n(30)(!1)).push([
        t.i,
        ".container[data-v-6dcfbf96]{min-height:100vh}",
        ""
      ]),
        (t.exports = e);
    },
    169(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function() {
          return r;
        }),
        n.d(e, "mutations", function() {
          return o;
        });
      var r = function() {
        return { counter: 0 };
      };
      var o = {
        increment(t) {
          t.counter++;
        }
      };
    },
    2(t, e, n) {
      "use strict";
      n.d(e, "i", function() {
        return m;
      }),
        n.d(e, "j", function() {
          return x;
        }),
        n.d(e, "a", function() {
          return v;
        }),
        n.d(e, "o", function() {
          return y;
        }),
        n.d(e, "e", function() {
          return w;
        }),
        n.d(e, "f", function() {
          return _;
        }),
        n.d(e, "c", function() {
          return j;
        }),
        n.d(e, "n", function() {
          return k;
        }),
        n.d(e, "h", function() {
          return O;
        }),
        n.d(e, "p", function() {
          return $;
        }),
        n.d(e, "k", function() {
          return E;
        }),
        n.d(e, "m", function() {
          return T;
        }),
        n.d(e, "d", function() {
          return S;
        }),
        n.d(e, "b", function() {
          return P;
        }),
        n.d(e, "g", function() {
          return N;
        }),
        n.d(e, "l", function() {
          return A;
        });
      n(95), n(39);
      const r = n(40);
      const o = (n(143), n(144), n(145), n(14));
      const c = (n(96), n(97), n(148), n(151), n(71), n(22), n(3));
      const l = (n(58), n(28), n(19), n(68), n(69), n(56));
      const f = n(1);
      function h(object, t) {
        const e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function d(t) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function(e) {
                Object(l.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function m(t) {
        f.a.config.errorHandler && f.a.config.errorHandler(t);
      }
      function x(t) {
        return t.then(function(t) {
          return t.default || t;
        });
      }
      function v(t, e) {
        if (e || !t.options.__hasNuxtData) {
          const n =
            t.options._originDataFn ||
            t.options.data ||
            function() {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function() {
              const data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                d({}, data, {}, e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function y(t) {
        return t.options && t._Ctor === t
          ? t
          : (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = f.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file),
            t);
      }
      function w(t) {
        const e =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, r) {
            return Object.keys(t[n]).map(function(o) {
              return e && e.push(r), t[n][o];
            });
          })
        );
      }
      function _(t) {
        const e =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return w(t, e, "instances");
      }
      function j(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.components).reduce(function(r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          })
        );
      }
      function k(t, e) {
        return Promise.all(
          j(
            t,
            (function() {
              const t = Object(c.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (typeof n !== "function" || n.options) {
                            t.next = 4;
                            break;
                          }
                          return (t.next = 3), n();
                        case 3:
                          n = t.sent;
                        case 4:
                          return (
                            (o.components[c] = n = y(n)),
                            t.abrupt(
                              "return",
                              typeof e === "function" ? e(n, r, o, c) : n
                            )
                          );
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function(e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function O(t) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = Object(c.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), k(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      d({}, e, {
                        meta: w(e).map(function(t, n) {
                          return d(
                            {},
                            t.options.meta,
                            {},
                            (e.matched[n] || {}).meta
                          );
                        })
                      })
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function $(t, e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = Object(c.a)(
          regeneratorRuntime.mark(function t(e, n) {
            let c, l, f, h;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: "/",
                          env: {}
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function(t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            let r = Object(o.a)(path);
                            if (
                              (typeof t === "number" ||
                                (r !== "undefined" && r !== "object") ||
                                ((n = path || {}),
                                (path = t),
                                (r = Object(o.a)(path)),
                                (t = 302)),
                              r === "object" &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw ((path = I(path, n)),
                              window.location.replace(path),
                              new Error("ERR_REDIRECT"));
                            e.context.next({ path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([O(n.route), O(n.from)])
                    );
                  case 3:
                    (c = t.sent),
                      (l = Object(r.a)(c, 2)),
                      (f = l[0]),
                      (h = l[1]),
                      n.route && (e.context.route = f),
                      n.from && (e.context.from = h),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function E(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : T(t[0], e).then(function() {
              return E(t.slice(1), e);
            });
      }
      function T(t, e) {
        let n;
        return (n =
          t.length === 2
            ? new Promise(function(n) {
                t(e, function(t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          typeof n.then === "function"
          ? n
          : Promise.resolve(n);
      }
      function S(base, t) {
        let path = decodeURI(window.location.pathname);
        return t === "hash"
          ? window.location.hash.replace(/^#\//, "")
          : (base &&
              path.indexOf(base) === 0 &&
              (path = path.slice(base.length)),
            (path || "/") + window.location.search + window.location.hash);
      }
      function P(t, e) {
        return (function(t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            Object(o.a)(t[i]) === "object" &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", M(e)));
          return function(e, r) {
            for (
              var path = "",
                data = e || {},
                o = (r || {}).pretty ? L : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              const l = t[c];
              if (typeof l !== "string") {
                const f = data[l.name || "pathMatch"];
                let h = void 0;
                if (f == null) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + l.name + '" to be defined'
                  );
                }
                if (Array.isArray(f)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(f) +
                        "`"
                    );
                  if (f.length === 0) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (let d = 0; d < f.length; d++) {
                    if (((h = o(f[d])), !n[c].test(h)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(h) +
                          "`"
                      );
                    path += (d === 0 ? l.prefix : l.delimiter) + h;
                  }
                } else {
                  if (((h = l.asterisk ? L(f, !0) : o(f)), !n[c].test(h)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        h +
                        '"'
                    );
                  path += l.prefix + h;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function(t, e) {
            let n;
            const r = [];
            let o = 0;
            let c = 0;
            let path = "";
            const l = (e && e.delimiter) || "/";
            for (; (n = D.exec(t)) != null; ) {
              const f = n[0];
              const h = n[1];
              const d = n.index;
              if (((path += t.slice(c, d)), (c = d + f.length), h))
                path += h[1];
              else {
                const m = t[c];
                const x = n[2];
                const v = n[3];
                const y = n[4];
                const w = n[5];
                const _ = n[6];
                const j = n[7];
                path && (r.push(path), (path = ""));
                const k = x != null && m != null && m !== x;
                const O = _ === "+" || _ === "*";
                const C = _ === "?" || _ === "*";
                const $ = n[2] || l;
                const pattern = y || w;
                r.push({
                  name: v || o++,
                  prefix: x || "",
                  delimiter: $,
                  optional: C,
                  repeat: O,
                  partial: k,
                  asterisk: Boolean(j),
                  pattern: pattern ? B(pattern) : j ? ".*" : "[^" + U($) + "]+?"
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e),
          e
        );
      }
      function N(t, e) {
        const n = {};
        const r = d({}, t, {}, e);
        for (const o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function A(t) {
        let e;
        if (t.message || typeof t === "string") e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return d({}, t, {
          message: e,
          statusCode:
            t.statusCode || t.status || (t.response && t.response.status) || 500
        });
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(t) {
          window.onNuxtReadyCbs.push(t);
        });
      var D = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
        ].join("|"),
        "g"
      );
      function L(t, e) {
        const n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function(t) {
          return (
            "%" +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function U(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function B(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function M(t) {
        return t && t.sensitive ? "" : "i";
      }
      function I(t, e) {
        let n;
        const o = t.indexOf("://");
        o !== -1
          ? ((n = t.substring(0, o)), (t = t.substring(o + 3)))
          : t.startsWith("//") && (t = t.substring(2));
        let c;
        let l = t.split("/");
        let f = (n ? n + "://" : "//") + l.shift();
        let path = l.filter(Boolean).join("/");
        if ((l = path.split("#")).length === 2) {
          const h = l;
          const d = Object(r.a)(h, 2);
          (path = d[0]), (c = d[1]);
        }
        return (
          (f += path ? "/" + path : ""),
          e &&
            JSON.stringify(e) !== "{}" &&
            (f +=
              (t.split("?").length === 2 ? "&" : "?") +
              (function(t) {
                return Object.keys(t)
                  .sort()
                  .map(function(e) {
                    const n = t[e];
                    return n == null
                      ? ""
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function(t) {
                            return [e, "=", t].join("");
                          })
                          .join("&")
                      : e + "=" + n;
                  })
                  .filter(Boolean)
                  .join("&");
              })(e)),
          (f += c ? "#" + c : "")
        );
      }
    },
    53(t, e, n) {
      let content = n(156);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(31).default)("72daabed", content, !0, { sourceMap: !1 });
    },
    54(t, e, n) {
      let content = n(158);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(31).default)("3191d5ad", content, !0, { sourceMap: !1 });
    },
    55(t, e, n) {
      let content = n(168);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(31).default)("5bcf601a", content, !0, { sourceMap: !1 });
    },
    57(t, e, n) {
      "use strict";
      n(19), n(63), n(39), n(28), n(85), n(87);
      const r = n(1);
      const o =
        window.requestIdleCallback ||
        function(t) {
          const e = Date.now();
          return setTimeout(function() {
            t({
              didTimeout: !1,
              timeRemaining() {
                return Math.max(0, 50 - (Date.now() - e));
              }
            });
          }, 1);
        };
      const c =
        window.cancelIdleCallback ||
        function(t) {
          clearTimeout(t);
        };
      const l =
        window.IntersectionObserver &&
        new window.IntersectionObserver(function(t) {
          t.forEach(function(t) {
            const e = t.intersectionRatio;
            const link = t.target;
            e <= 0 || link.__prefetch();
          });
        });
      e.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 }
        },
        mounted() {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = o(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy() {
          c(this.handleId),
            this.__observed &&
              (l.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe() {
            l &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              l.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch() {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch() {
            const t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function(t) {
                return t.components.default;
              })
              .filter(function(t) {
                return typeof t === "function" && !t.options && !t.__prefetched;
              });
          },
          prefetchLink() {
            if (this.canPrefetch()) {
              l.unobserve(this.$el);
              const t = this.getPrefetchComponents();
              let e = !0;
              let n = !1;
              let r = void 0;
              try {
                for (
                  var o, c = t[Symbol.iterator]();
                  !(e = (o = c.next()).done);
                  e = !0
                ) {
                  const f = o.value;
                  const h = f();
                  h instanceof Promise && h.catch(function() {}),
                    (f.__prefetched = !0);
                }
              } catch (t) {
                (n = !0), (r = t);
              } finally {
                try {
                  e || c.return == null || c.return();
                } finally {
                  if (n) throw r;
                }
              }
            }
          }
        }
      };
    },
    72(t, e, n) {
      "use strict";
      e.a = {};
    }
  },
  [[111, 6, 1, 7]]
]);
