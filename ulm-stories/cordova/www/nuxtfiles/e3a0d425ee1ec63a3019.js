(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    114(t, e, n) {
      t.exports = n(115);
    },
    115(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          n(61), n(46), n(24);
          const e = n(14);
          const r = (n(23), n(125), n(3));
          const o =
            (n(69),
            n(88),
            n(20),
            n(17),
            n(60),
            n(71),
            n(91),
            n(129),
            n(141),
            n(143),
            n(1));
          const c = n(108);
          const l = n(74);
          const f = n(2);
          const h = n(15);
          const d = n(59);
          o.a.component(d.a.name, d.a),
            o.a.component("NLink", d.a),
            t.fetch || (t.fetch = c.a);
          let m;
          let v;
          let x = [];
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
            return O.apply(this, arguments);
          }
          function O() {
            return (O = Object(r.a)(
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
          function k(t, e) {
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
                              (l = k(
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
          function E(t, e, n) {
            return R.apply(this, arguments);
          }
          function R() {
            return (R = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                let o;
                let c;
                let l;
                let d;
                let v;
                let y;
                let w;
                let j;
                let O;
                let k;
                let C;
                let E;
                let R;
                let T;
                let S;
                let N;
                let P;
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
                              ? (x = [])
                              : ((o = []),
                                (x = Object(f.e)(n, o).map(function(t, i) {
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
                            (v = Object(f.e)(e, d)).length)
                          ) {
                            t.next = 26;
                            break;
                          }
                          return (t.next = 14), $.call(this, v, m.context);
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
                            $.call(this, v, m.context, w)
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
                            v.forEach(function(t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch));
                            }),
                            this.setTransitions(_(v, e, n)),
                            (t.prev = 28),
                            (t.next = 31),
                            $.call(this, v, m.context)
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
                            typeof (j = v[0].options.layout) === "function" &&
                              (j = j(m.context)),
                            (t.next = 39),
                            this.loadLayout(j)
                          );
                        case 39:
                          return (
                            (j = t.sent),
                            (t.next = 42),
                            $.call(this, v, m.context, j)
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
                          (O = !0),
                            (t.prev = 47),
                            (k = !0),
                            (C = !1),
                            (E = void 0),
                            (t.prev = 51),
                            (R = v[Symbol.iterator]());
                        case 53:
                          if ((k = (T = R.next()).done)) {
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
                          if ((O = t.sent)) {
                            t.next = 62;
                            break;
                          }
                          return t.abrupt("break", 65);
                        case 62:
                          (k = !0), (t.next = 53);
                          break;
                        case 65:
                          t.next = 71;
                          break;
                        case 67:
                          (t.prev = 67),
                            (t.t0 = t.catch(51)),
                            (C = !0),
                            (E = t.t0);
                        case 71:
                          (t.prev = 71),
                            (t.prev = 72),
                            k || R.return == null || R.return();
                        case 74:
                          if (((t.prev = 74), !C)) {
                            t.next = 77;
                            break;
                          }
                          throw E;
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
                          if (O) {
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
                              v.map(function(t, i) {
                                if (
                                  ((t._path = Object(f.b)(e.matched[d[i]].path)(
                                    e.params
                                  )),
                                  (t._dataRefresh = !1),
                                  (D._pathChanged && D._queryChanged) ||
                                    t._path !== x[i])
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
                                      (N || (N = Object(f.f)(e)),
                                      (t._dataRefresh = r.apply(N[i], [
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
                                    const v = Object(f.m)(
                                      t.options.asyncData,
                                      m.context
                                    ).then(function(e) {
                                      Object(f.a)(t, e),
                                        D.$loading.increase &&
                                          D.$loading.increase(h);
                                    });
                                    o.push(v);
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
                            (P = t.t2 || {}).message !== "ERR_REDIRECT")
                          ) {
                            t.next = 98;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", e, n, P)
                          );
                        case 98:
                          return (
                            (x = []),
                            Object(f.i)(P),
                            typeof (A = (h.a.options || h.a).layout) ===
                              "function" && (A = A(m.context)),
                            (t.next = 104),
                            this.loadLayout(A)
                          );
                        case 104:
                          this.error(P),
                            this.$nuxt.$emit("routeChanged", e, n, P),
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
          function N(t, e) {
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
          function P(t) {
            window.onNuxtReadyCbs.forEach(function(e) {
              typeof e === "function" && e(t);
            }),
              typeof window._onNuxtLoaded === "function" &&
                window._onNuxtLoaded(t),
              v.afterEach(function(e, n) {
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
                          (v = e.router),
                          e.store,
                          (n = new o.a(m)),
                          (r = function() {
                            n.$mount("#__nuxt"),
                              v.afterEach(T),
                              v.afterEach(N.bind(n)),
                              o.a.nextTick(function() {
                                P(n);
                              });
                          }),
                          (t.next = 7),
                          Promise.all(C(v))
                        );
                      case 7:
                        if (
                          ((c = t.sent),
                          (n.setTransitions = n.$options.nuxt.setTransitions.bind(
                            n
                          )),
                          c.length &&
                            (n.setTransitions(_(c, v.currentRoute)),
                            (x = v.currentRoute.matched.map(function(t) {
                              return Object(f.b)(t.path)(v.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          y.error && n.error(y.error),
                          v.beforeEach(j.bind(n)),
                          v.beforeEach(E.bind(n)),
                          !y.serverRendered)
                        ) {
                          t.next = 17;
                          break;
                        }
                        return r(), t.abrupt("return");
                      case 17:
                        (l = function() {
                          T(v.currentRoute, v.currentRoute),
                            S.call(n, v.currentRoute),
                            r();
                        }),
                          E.call(n, v.currentRoute, v.currentRoute, function(
                            path
                          ) {
                            if (path) {
                              var t = v.afterEach(function(e, n) {
                                t(), l();
                              });
                              v.push(path, void 0, function(t) {
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
        }.call(this, n(25));
    },
    15(t, e, n) {
      "use strict";
      n(23), n(76), n(24), n(20), n(17), n(60);
      const r = n(3);
      const o = n(55);
      const c = (n(71), n(1));
      const l = n(109);
      const f = n(75);
      const h = n.n(f);
      const d = n(30);
      const m = n.n(d);
      const v = n(41);
      const x = n(2);
      "scrollRestoration" in window.history &&
        ((window.history.scrollRestoration = "manual"),
        window.addEventListener("beforeunload", function() {
          window.history.scrollRestoration = "auto";
        }),
        window.addEventListener("load", function() {
          window.history.scrollRestoration = "manual";
        }));
      const y = function() {};
      const w = v.a.prototype.push;
      (v.a.prototype.push = function(t) {
        const e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
        const n = arguments.length > 2 ? arguments[2] : void 0;
        return w.call(this, t, e, n);
      }),
        c.a.use(v.a);
      const _ = {
        mode: "hash",
        base: decodeURI("/"),
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior(t, e, n) {
          let r = !1;
          const o = Object(x.e)(t);
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
              return Object(x.j)(n.e(2).then(n.bind(null, 224)));
            },
            name: "about"
          },
          {
            path: "/game",
            component() {
              return Object(x.j)(n.e(4).then(n.bind(null, 223)));
            },
            name: "game"
          },
          {
            path: "/preferences",
            component() {
              return Object(x.j)(n.e(6).then(n.bind(null, 225)));
            },
            name: "preferences"
          },
          {
            path: "/game/:chapter/:id?",
            component() {
              return Object(x.j)(n.e(3).then(n.bind(null, 226)));
            },
            name: "game-chapter-id"
          },
          {
            path: "/",
            component() {
              return Object(x.j)(n.e(5).then(n.bind(null, 227)));
            },
            name: "index"
          }
        ],
        fallback: !1
      };
      function j() {
        return new v.a(_);
      }
      let O;
      const k = {
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
          const v = m.beforeEnter;
          if (
            ((m.beforeEnter = function(t) {
              if (
                (window.$nuxt.$nextTick(function() {
                  window.$nuxt.$emit("triggerScroll");
                }),
                v)
              )
                return v.call(o, t);
            }),
            !1 === h.css)
          ) {
            const x = m.leave;
            (!x || x.length < 2) &&
              (m.leave = function(t, e) {
                x && x.call(o, t), o.$nextTick(e);
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
      const E = {
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
      const R = (n(157), n(16));
      const T = Object(R.a)(
        E,
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
      const S = (n(97), n(98), n(54), n(40));
      const N = {
        name: "Nuxt",
        components: { NuxtChild: k, NuxtError: T },
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
                Object(x.b)(this.$route.matched[0].path)(this.$route.params)
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
      const P =
        (n(61),
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
        (n(159), Object(R.a)(P, void 0, void 0, !1, null, null, null).exports);
      const D = (n(161), n(163), n(169), { name: "Map" });
      const I = {
        _default: Object(R.a)(
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
        _map: Object(R.a)(
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
      const M = {
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
          script: [{ src: "cordova.js" }, { src: "js/plugins/LaunchMyApp.js" }],
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
            ((O = Object(r.a)(
              regeneratorRuntime.mark(function t() {
                let e;
                let n;
                const r = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((e = Object(x.f)(this.$route)).length) {
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
                                    Object(x.m)(t.$options.fetch, r.context)
                                  ),
                                t.$options.asyncData &&
                                  p.push(
                                    Object(x.m)(
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
                            Object(x.i)(t.t0),
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
              return O.apply(this, arguments);
            }),
          errorChanged() {
            this.nuxt.err &&
              this.$loading &&
              (this.$loading.fail && this.$loading.fail(),
              this.$loading.finish && this.$loading.finish());
          },
          setLayout(t) {
            return (
              (t && I["_" + t]) || (t = "default"),
              (this.layoutName = t),
              (this.layout = I["_" + t]),
              this.layout
            );
          },
          loadLayout(t) {
            return (
              (t && I["_" + t]) || (t = "default"), Promise.resolve(I["_" + t])
            );
          }
        },
        components: { NuxtLoading: A }
      };
      const U = (n(46), n(69), n(96), n(73));
      c.a.use(U.a);
      const B = ["state", "getters", "actions", "mutations"];
      let H = {};
      ((H = (function(t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            "[nuxt] ".concat(
              e,
              " should export a method that returns a Vuex instance."
            )
          );
        return typeof t !== "function" && (t = Object.assign({}, t)), F(t, e);
      })(n(171), "store/index.js")).modules = H.modules || {}),
        G(n(172), "currentLocation.js"),
        G(n(173), "npcLocation.js");
      const z =
        H instanceof Function
          ? H
          : function() {
              return new U.a.Store(Object.assign({ strict: !1 }, H));
            };
      function F(t, e) {
        if (t.state && typeof t.state !== "function") {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e)
          );
          const n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state() {
              return n;
            }
          });
        }
        return t;
      }
      function G(t, e) {
        t = t.default || t;
        const n = e.replace(/\.(js|mjs)$/, "").split("/");
        let r = n[n.length - 1];
        const o = "store/".concat(e);
        if (
          ((t =
            r === "state"
              ? (function(t, e) {
                  if (typeof t !== "function") {
                    console.warn(
                      "".concat(
                        e,
                        " should export a method that returns an object"
                      )
                    );
                    const n = Object.assign({}, t);
                    return function() {
                      return n;
                    };
                  }
                  return F(t, e);
                })(t, o)
              : F(t, o)),
          B.includes(r))
        ) {
          const c = r;
          K(W(H, n, { isProperty: !0 }), t, c);
        } else {
          r === "index" && (n.pop(), (r = n[n.length - 1]));
          const l = W(H, n);
          let f = !0;
          let h = !1;
          let d = void 0;
          try {
            for (
              var m, v = B[Symbol.iterator]();
              !(f = (m = v.next()).done);
              f = !0
            ) {
              const x = m.value;
              K(l, t[x], x);
            }
          } catch (t) {
            (h = !0), (d = t);
          } finally {
            try {
              f || v.return == null || v.return();
            } finally {
              if (h) throw d;
            }
          }
          !1 === t.namespaced && delete l.namespaced;
        }
      }
      function W(t, e) {
        const n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const r = n.isProperty;
        const o = void 0 !== r && r;
        if (!e.length || (o && e.length === 1)) return t;
        const c = e.shift();
        return (
          (t.modules[c] = t.modules[c] || {}),
          (t.modules[c].namespaced = !0),
          (t.modules[c].modules = t.modules[c].modules || {}),
          W(t.modules[c], e, { isProperty: o })
        );
      }
      function K(t, e, n) {
        e &&
          (n === "state"
            ? (t.state = e || t.state)
            : (t[n] = Object.assign({}, t[n], e)));
      }
      function J() {
        return (J = Object(r.a)(
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
                    return (t.next = 4), n.e(9).then(n.bind(null, 222));
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
        return J.apply(this, arguments);
      })().catch(function(t) {});
      const V = function(t, e) {
        return Q.apply(this, arguments);
      };
      function Q() {
        return (Q = Object(r.a)(
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
      const X = n(191);
      const Y = n(192);
      const Z = n(193);
      const tt = n(194);
      const et = n(195);
      const nt = n(196);
      const ot = n(197);
      const it = n(198);
      const at = n(199);
      const st = n(200);
      const ct = n(201);
      const ut = n(202);
      const lt = n(203);
      const pt = n(204);
      const ft = n(205);
      const ht = n(206);
      const mt = n(207);
      const gt = n(208);
      const vt = n(209);
      const xt = n(210);
      const bt = n(211);
      const yt = n(212);
      c.a.component("l-circle", X.a),
        c.a.component("l-circle-marker", Y.a),
        c.a.component("l-control", Z.a),
        c.a.component("l-control-attribution", tt.a),
        c.a.component("l-control-layers", et.a),
        c.a.component("l-control-scale", nt.a),
        c.a.component("l-control-zoom", ot.a),
        c.a.component("l-feature-group", it.a),
        c.a.component("l-geo-json", at.a),
        c.a.component("l-icon", st.a),
        c.a.component("l-icon-default", ct.a),
        c.a.component("l-image-overlay", ut.a),
        c.a.component("l-layer-group", lt.a),
        c.a.component("l-map", pt.a),
        c.a.component("l-marker", ft.a),
        c.a.component("l-polygon", ht.a),
        c.a.component("l-polyline", mt.a),
        c.a.component("l-popup", gt.a),
        c.a.component("l-rectangle", vt.a),
        c.a.component("l-tile-layer", xt.a),
        c.a.component("l-tooltip", bt.a),
        c.a.component("l-lwms-tile-layer", yt.a),
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
      const wt = {
        install(t, e) {
          t.prototype.$L = L;
        }
      };
      c.a.use(wt);
      const _t = function(t) {
        return jt.apply(this, arguments);
      };
      function jt() {
        return (jt = Object(r.a)(
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
      for (
        var Ot = n(42),
          kt = n.n(Ot),
          Ct = n(111),
          $t = n.n(Ct),
          Et = {
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
              return Nt($t()(t, this.defaults));
            }
          },
          Rt = function() {
            const t = St[Tt];
            Et["$" + t] = function() {
              return this[t].apply(this, arguments).then(function(t) {
                return t && t.data;
              });
            };
          },
          Tt = 0,
          St = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch"
          ];
        Tt < St.length;
        Tt++
      )
        Rt();
      var Nt = function(t) {
        const e = kt.a.create(t);
        return (
          (e.CancelToken = kt.a.CancelToken),
          (e.isCancel = kt.a.isCancel),
          (function(t) {
            for (const e in Et) t[e] = Et[e].bind(t);
          })(e),
          Pt(e),
          e
        );
      };
      var Pt = function(t) {
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
              (r--, kt.a.isCancel(t) || (n().fail(), n().finish()));
          });
        const o = function(t) {
          if (r) {
            const progress = (100 * t.loaded) / (t.total * r);
            n().set(Math.min(100, progress));
          }
        };
        (t.defaults.onUploadProgress = o), (t.defaults.onDownloadProgress = o);
      };
      const At = function(t, e) {
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
        const r = Nt(n);
        (t.$axios = r), e("axios", r);
      };
      const Dt = n(14);
      const Lt = function(t, e) {
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
            console.log("navigator.geolocation works well");
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
              let r = Object(Dt.a)(path);
              typeof t === "number" ||
                (r !== "undefined" && r !== "object") ||
                ((e = path || {}),
                (path = t),
                (r = Object(Dt.a)(path)),
                (t = 302)),
                r === "object" && (path = n.router.resolve(path).href),
                /(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)
                  ? n.context.next({ path, query: e, status: t })
                  : window.location.replace(path);
            }
          }));
      };
      const qt = n(112);
      const It = n.n(qt);
      const Mt = n(113);
      const Ut = n.n(Mt);
      const Bt = function(t) {
        const e = t.store;
        const n = It.a.sync(e);
        c.a.use(n), c.a.use(Ut.a);
      };
      function Ht(object, t) {
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
      function zt(t) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          i % 2
            ? Ht(Object(source), !0).forEach(function(e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Ht(Object(source)).forEach(function(e) {
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
        return Gt;
      }),
        n.d(e, "a", function() {
          return T;
        }),
        c.a.component(h.a.name, h.a),
        c.a.component(
          m.a.name,
          zt({}, m.a, {
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
        c.a.component(k.name, k),
        c.a.component("NChild", k),
        c.a.component(N.name, N),
        c.a.use(l.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid"
        });
      const Ft = {
        name: "page",
        mode: "out-in",
        appear: !0,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      };
      function Gt(t) {
        return Wt.apply(this, arguments);
      }
      function Wt() {
        return (Wt = Object(r.a)(
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
                      (o = zt(
                        {
                          store: r,
                          router: n,
                          nuxt: {
                            defaultTransition: Ft,
                            transitions: [Ft],
                            setTransitions(t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function(t) {
                                  return (t = t
                                    ? typeof t === "string"
                                      ? Object.assign({}, Ft, { name: t })
                                      : Object.assign({}, Ft, t)
                                    : Ft);
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
                                (t = t ? Object(x.l)(t) : null);
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
                        M
                      )),
                      (r.app = o),
                      (l = e
                        ? e.next
                        : function(t) {
                            return o.router.push(t);
                          }),
                      e
                        ? (f = n.resolve(e.url).route)
                        : ((path = Object(x.d)(n.options.base, n.options.mode)),
                          (f = n.resolve(path).route)),
                      (t.next = 11),
                      Object(x.p)(o, {
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
                    return (t.next = 19), V(o.context, h);
                  case 19:
                    return (t.next = 22), _t(o.context, h);
                  case 22:
                    return (t.next = 25), At(o.context, h);
                  case 25:
                    return (t.next = 28), Lt(o.context);
                  case 28:
                    return (t.next = 31), Bt(o.context);
                  case 31:
                    t.next = 34;
                    break;
                  case 34:
                    return t.abrupt("return", { store: r, app: o, router: n });
                  case 35:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    157(t, e, n) {
      "use strict";
      const r = n(56);
      n.n(r).a;
    },
    158(t, e, n) {
      (e = n(31)(!1)).push([
        t.i,
        ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",
        ""
      ]),
        (t.exports = e);
    },
    159(t, e, n) {
      "use strict";
      const r = n(57);
      n.n(r).a;
    },
    160(t, e, n) {
      (e = n(31)(!1)).push([
        t.i,
        ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",
        ""
      ]),
        (t.exports = e);
    },
    169(t, e, n) {
      "use strict";
      const r = n(58);
      n.n(r).a;
    },
    170(t, e, n) {
      (e = n(31)(!1)).push([
        t.i,
        ".container[data-v-6dcfbf96]{min-height:100vh}",
        ""
      ]),
        (t.exports = e);
    },
    171(t, e, n) {
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
    172(t, e, n) {
      "use strict";
      n.r(e);
      const r = {
        location(t) {
          return console.log(t), [t.geolocation.lat, t.geolocation.long];
        }
      };
      e.default = {
        state() {
          return {
            loading: !1,
            watching: !1,
            watchID: null,
            geolocation: { long: 9.9793, lat: 48.4043 }
          };
        },
        getters: r,
        actions: {
          getCurrentLocation(t, e) {
            t.commit();
          }
        },
        mutations: {
          TOGGLE_WATCHING(t, e) {
            t.watching = !!e;
          },
          CHANGE_WATCHID(t, e) {
            t.watchID = e;
          },
          TOGGLE_LOADING(t, e) {
            t.loading = !!e;
          },
          CHANGE_GEOLOCATION(t, e) {
            t.geolocation = e;
          }
        }
      };
    },
    173(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "state", function() {
          return r;
        }),
        n.d(e, "getters", function() {
          return o;
        });
      var r = function() {
        return {
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
              characterID: "Schwanenwirtin",
              characterName: "Schwanenwirtin",
              latlng: [48.397154, 9.98873],
              chapter: 6
            }
          ]
        };
      };
      var o = {
        allLocations(t) {
          return t.locations;
        }
      };
    },
    2(t, e, n) {
      "use strict";
      n.d(e, "i", function() {
        return m;
      }),
        n.d(e, "j", function() {
          return v;
        }),
        n.d(e, "a", function() {
          return x;
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
          return O;
        }),
        n.d(e, "h", function() {
          return k;
        }),
        n.d(e, "p", function() {
          return $;
        }),
        n.d(e, "k", function() {
          return R;
        }),
        n.d(e, "m", function() {
          return T;
        }),
        n.d(e, "d", function() {
          return S;
        }),
        n.d(e, "b", function() {
          return N;
        }),
        n.d(e, "g", function() {
          return P;
        }),
        n.d(e, "l", function() {
          return A;
        });
      n(76), n(24);
      const r = n(40);
      const o = (n(96), n(146), n(147), n(14));
      const c = (n(97), n(98), n(150), n(153), n(54), n(23), n(3));
      const l = (n(61), n(20), n(17), n(60), n(71), n(55));
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
      function v(t) {
        return t.then(function(t) {
          return t.default || t;
        });
      }
      function x(t, e) {
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
      function O(t, e) {
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
      function k(t) {
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
                    return (t.next = 4), O(e);
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
        return E.apply(this, arguments);
      }
      function E() {
        return (E = Object(c.a)(
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
                              throw ((path = B(path, n)),
                              window.location.replace(path),
                              new Error("ERR_REDIRECT"));
                            e.context.next({ path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([k(n.route), k(n.from)])
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
      function R(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : T(t[0], e).then(function() {
              return R(t.slice(1), e);
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
      function N(t, e) {
        return (function(t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            Object(o.a)(t[i]) === "object" &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", U(e)));
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
                const v = n[2];
                const x = n[3];
                const y = n[4];
                const w = n[5];
                const _ = n[6];
                const j = n[7];
                path && (r.push(path), (path = ""));
                const O = v != null && m != null && m !== v;
                const k = _ === "+" || _ === "*";
                const C = _ === "?" || _ === "*";
                const $ = n[2] || l;
                const pattern = y || w;
                r.push({
                  name: x || o++,
                  prefix: v || "",
                  delimiter: $,
                  optional: C,
                  repeat: k,
                  partial: O,
                  asterisk: Boolean(j),
                  pattern: pattern ? M(pattern) : j ? ".*" : "[^" + I($) + "]+?"
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
      function P(t, e) {
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
      function I(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function M(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function U(t) {
        return t && t.sensitive ? "" : "i";
      }
      function B(t, e) {
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
    56(t, e, n) {
      let content = n(158);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(32).default)("72daabed", content, !0, { sourceMap: !1 });
    },
    57(t, e, n) {
      let content = n(160);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(32).default)("3191d5ad", content, !0, { sourceMap: !1 });
    },
    58(t, e, n) {
      let content = n(170);
      typeof content === "string" && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(32).default)("5bcf601a", content, !0, { sourceMap: !1 });
    },
    59(t, e, n) {
      "use strict";
      n(17), n(46), n(24), n(20), n(69), n(88);
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
    74(t, e, n) {
      "use strict";
      e.a = {};
    }
  },
  [[114, 7, 1, 8]]
]);
