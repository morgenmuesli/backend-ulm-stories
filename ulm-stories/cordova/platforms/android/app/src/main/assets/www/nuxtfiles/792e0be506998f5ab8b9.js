(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    112: function(t, e, n) {
      t.exports = n(113);
    },
    113: function(t, e, n) {
      "use strict";
      n.r(e),
        function(t) {
          n(60), n(46), n(29);
          var e = n(14),
            r = (n(22), n(123), n(3)),
            o =
              (n(68),
              n(87),
              n(23),
              n(19),
              n(70),
              n(71),
              n(90),
              n(127),
              n(139),
              n(141),
              n(1)),
            c = n(108),
            l = n(74),
            f = n(2),
            h = n(15),
            d = n(59);
          o.a.component(d.a.name, d.a),
            o.a.component("NLink", d.a),
            t.fetch || (t.fetch = c.a);
          var m,
            v,
            x = [],
            y = window.__NUXT__ || {};
          Object.assign(o.a.config, { silent: !0, performance: !1 });
          var w = o.a.config.errorHandler || console.error;
          function _(t, e, n) {
            var r = function(component) {
              var t =
                (function(component, t) {
                  if (!component || !component.options || !component.options[t])
                    return {};
                  var option = component.options[t];
                  if ("function" == typeof option) {
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
              return "string" == typeof t ? { name: t } : t;
            };
            return t.map(function(t) {
              var e = Object.assign({}, r(t));
              if (n && n.matched.length && n.matched[0].components.default) {
                var o = r(n.matched[0].components.default);
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
                var o,
                  c,
                  l,
                  h,
                  d = this;
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
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function(t) {
                                      return d._diffQuery[t];
                                    })
                                  : "function" == typeof c &&
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
            var path = Object(f.d)(t.options.base, t.options.mode);
            return Object(f.c)(
              t.match(path),
              (function() {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var l;
                    return regeneratorRuntime.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
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
            var r = this,
              o = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(f.o)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function(t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function(t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof l.a[t] &&
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
                var o,
                  c,
                  l,
                  d,
                  v,
                  y,
                  w,
                  j,
                  O,
                  k,
                  C,
                  E,
                  R,
                  T,
                  S,
                  P,
                  N,
                  A,
                  L = this;
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
                                L.$loading.finish &&
                                L.$loading.finish(),
                                n.path !== path.path &&
                                  L.$loading.pause &&
                                  L.$loading.pause(),
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
                              "function" == typeof y
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
                            "function" == typeof (j = v[0].options.layout) &&
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
                            "function" == typeof (S = T.value).options.validate
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
                            k || null == R.return || R.return();
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
                                  (L._pathChanged && L._queryChanged) ||
                                    t._path !== x[i])
                                )
                                  t._dataRefresh = !0;
                                else if (!L._pathChanged && L._queryChanged) {
                                  var r = t.options.watchQuery;
                                  !0 === r
                                    ? (t._dataRefresh = !0)
                                    : Array.isArray(r)
                                    ? (t._dataRefresh = r.some(function(t) {
                                        return L._diffQuery[t];
                                      }))
                                    : "function" == typeof r &&
                                      (P || (P = Object(f.f)(e)),
                                      (t._dataRefresh = r.apply(P[i], [
                                        e.query,
                                        n.query
                                      ])));
                                }
                                if (
                                  L._hadError ||
                                  !L._isMounted ||
                                  t._dataRefresh
                                ) {
                                  var o = [],
                                    c =
                                      t.options.asyncData &&
                                      "function" == typeof t.options.asyncData,
                                    l = Boolean(t.options.fetch),
                                    h = c && l ? 30 : 45;
                                  if (c) {
                                    var v = Object(f.m)(
                                      t.options.asyncData,
                                      m.context
                                    ).then(function(e) {
                                      Object(f.a)(t, e),
                                        L.$loading.increase &&
                                          L.$loading.increase(h);
                                    });
                                    o.push(v);
                                  }
                                  if (
                                    ((L.$loading.manual =
                                      !1 === t.options.loading),
                                    l)
                                  ) {
                                    var p = t.options.fetch(m.context);
                                    (p &&
                                      (p instanceof Promise ||
                                        "function" == typeof p.then)) ||
                                      (p = Promise.resolve(p)),
                                      p.then(function(t) {
                                        L.$loading.increase &&
                                          L.$loading.increase(h);
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
                            "ERR_REDIRECT" !== (N = t.t2 || {}).message)
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
                            (x = []),
                            Object(f.i)(N),
                            "function" ==
                              typeof (A = (h.a.options || h.a).layout) &&
                              (A = A(m.context)),
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
                "object" !== Object(e.a)(t) ||
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
            var e = this.$options.nuxt.err
              ? (h.a.options || h.a).layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof e && (e = e(m.context)), this.setLayout(e);
          }
          function P(t, e) {
            var n = this;
            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
              var r = Object(f.f)(t),
                c = Object(f.e)(t);
              o.a.nextTick(function() {
                r.forEach(function(t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.a.set(t.$data, n, e[n]);
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
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
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
                var n, r, c, l;
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
                              v.afterEach(P.bind(n)),
                              o.a.nextTick(function() {
                                N(n);
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
        }.call(this, n(24));
    },
    15: function(t, e, n) {
      "use strict";
      n(22), n(95), n(29), n(23), n(19), n(70);
      var r = n(3),
        o = n(58),
        c = (n(71), n(1)),
        l = n(109),
        f = n(75),
        h = n.n(f),
        d = n(30),
        m = n.n(d),
        v = n(41),
        x = n(2);
      "scrollRestoration" in window.history &&
        ((window.history.scrollRestoration = "manual"),
        window.addEventListener("beforeunload", function() {
          window.history.scrollRestoration = "auto";
        }),
        window.addEventListener("load", function() {
          window.history.scrollRestoration = "manual";
        }));
      var y = function() {},
        w = v.a.prototype.push;
      (v.a.prototype.push = function(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return w.call(this, t, e, n);
      }),
        c.a.use(v.a);
      var _ = {
        mode: "hash",
        base: decodeURI("/"),
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function(t, e, n) {
          var r = !1,
            o = Object(x.e)(t);
          o.length < 2 &&
          o.every(function(t) {
            return !1 !== t.options.scrollToTop;
          })
            ? (r = { x: 0, y: 0 })
            : o.some(function(t) {
                return t.options.scrollToTop;
              }) && (r = { x: 0, y: 0 }),
            n && (r = n);
          var c = window.$nuxt;
          return (
            t.path === e.path &&
              t.hash !== e.hash &&
              c.$nextTick(function() {
                return c.$emit("triggerScroll");
              }),
            new Promise(function(e) {
              c.$once("triggerScroll", function() {
                if (t.hash) {
                  var n = t.hash;
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
            component: function() {
              return Object(x.j)(n.e(2).then(n.bind(null, 218)));
            },
            name: "about"
          },
          {
            path: "/game",
            component: function() {
              return Object(x.j)(n.e(3).then(n.bind(null, 217)));
            },
            name: "game"
          },
          {
            path: "/preferences",
            component: function() {
              return Object(x.j)(n.e(5).then(n.bind(null, 219)));
            },
            name: "preferences"
          },
          {
            path: "/",
            component: function() {
              return Object(x.j)(n.e(4).then(n.bind(null, 220)));
            },
            name: "index"
          }
        ],
        fallback: !1
      };
      function j() {
        return new v.a(_);
      }
      var O,
        k = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 }
          },
          render: function(t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props;
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
            var h = c[f] || l,
              d = {};
            C.forEach(function(t) {
              void 0 !== h[t] && (d[t] = h[t]);
            });
            var m = {};
            $.forEach(function(t) {
              "function" == typeof h[t] && (m[t] = h[t].bind(o));
            });
            var v = m.beforeEnter;
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
              var x = m.leave;
              (!x || x.length < 2) &&
                (m.leave = function(t, e) {
                  x && x.call(o, t), o.$nextTick(e);
                });
            }
            var y = t("routerView", data);
            return (
              r.keepAlive &&
                (y = t("keep-alive", { props: r.keepAliveProps }, [y])),
              t("transition", { props: d, on: m }, [y])
            );
          }
        },
        C = [
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
        ],
        $ = [
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
        ],
        E = {
          name: "NuxtError",
          props: { error: { type: Object, default: null } },
          computed: {
            statusCode: function() {
              return (this.error && this.error.statusCode) || 500;
            },
            message: function() {
              return this.error.message || "Error";
            }
          },
          head: function() {
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
        },
        R = (n(155), n(16)),
        T = Object(R.a)(
          E,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
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
                404 === t.statusCode
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
              var t = this.$createElement,
                e = this._self._c || t;
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
        ).exports,
        S = (n(97), n(98), n(54), n(40)),
        P = {
          name: "Nuxt",
          components: { NuxtChild: k, NuxtError: T },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: "default" }
          },
          errorCaptured: function(t) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = t), this.$forceUpdate());
          },
          computed: {
            routerViewKey: function() {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(x.b)(this.$route.matched[0].path)(this.$route.params)
                );
              var t = Object(S.a)(this.$route.matched, 1)[0];
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var n = e.options;
                if (n.key)
                  return "function" == typeof n.key
                    ? n.key(this.$route)
                    : n.key;
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, "");
            }
          },
          beforeCreate: function() {
            c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
          },
          render: function(t) {
            var e = this;
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
                      "Error details: ".concat(
                        this.errorFromNuxtError.toString()
                      )
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
        },
        N =
          (n(60),
          {
            name: "NuxtLoading",
            data: function() {
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
              left: function() {
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
            beforeDestroy: function() {
              this.clear();
            },
            methods: {
              clear: function() {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function() {
                var t = this;
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
              set: function(t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function() {
                return this.percent;
              },
              increase: function(t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function(t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function() {
                return clearInterval(this._timer), this;
              },
              resume: function() {
                return this.startTimer(), this;
              },
              finish: function() {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function() {
                var t = this;
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
              fail: function() {
                return (this.canSucceed = !1), this;
              },
              startTimer: function() {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function() {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100
                            ? ((t.skipTimerCount = 1),
                              (t.reversed = !t.reversed))
                            : t.percent <= 0 &&
                              ((t.skipTimerCount = 1),
                              (t.reversed = !t.reversed))));
                  }, 100));
              }
            },
            render: function(t) {
              var e = t(!1);
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
          }),
        A =
          (n(157),
          Object(R.a)(N, void 0, void 0, !1, null, null, null).exports),
        D = (n(159), n(161), n(167), { name: "Map" }),
        I = {
          _default: Object(R.a)(
            {},
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
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
              var t = this.$createElement,
                e = this._self._c || t;
              return e("v-app", [e("nuxt")], 1);
            },
            [],
            !1,
            null,
            "4c25cc8a",
            null
          ).exports
        },
        U = {
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
                content:
                  "A interactive travel guide as pwa for 12 years old kids"
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
                content:
                  "A interactive travel guide as pwa for 12 years old kids"
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
            script: [
              { src: "cordova.js" },
              { src: "js/plugins/LaunchMyApp.js" }
            ],
            style: [],
            htmlAttrs: { lang: "en" }
          },
          render: function(t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              r = t(this.layout || "nuxt"),
              o = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function(t) {
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
          data: function() {
            return { isOnline: !0, layout: null, layoutName: "" };
          },
          beforeCreate: function() {
            c.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function() {
            (c.a.prototype.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function() {
            this.$loading = this.$refs.loading;
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function() {
              return !this.isOnline;
            }
          },
          methods: {
            refreshOnlineStatus: function() {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh:
              ((O = Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var e,
                    n,
                    r = this;
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
                                var p = [];
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
                                        for (var n in e)
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
            errorChanged: function() {
              this.nuxt.err &&
                this.$loading &&
                (this.$loading.fail && this.$loading.fail(),
                this.$loading.finish && this.$loading.finish());
            },
            setLayout: function(t) {
              return (
                (t && I["_" + t]) || (t = "default"),
                (this.layoutName = t),
                (this.layout = I["_" + t]),
                this.layout
              );
            },
            loadLayout: function(t) {
              return (
                (t && I["_" + t]) || (t = "default"),
                Promise.resolve(I["_" + t])
              );
            }
          },
          components: { NuxtLoading: A }
        },
        M = (n(46), n(68), n(96), n(73));
      c.a.use(M.a);
      var B = ["state", "getters", "actions", "mutations"],
        z = {};
      ((z = (function(t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            "[nuxt] ".concat(
              e,
              " should export a method that returns a Vuex instance."
            )
          );
        return "function" != typeof t && (t = Object.assign({}, t)), F(t, e);
      })(n(169), "store/index.js")).modules = z.modules || {}),
        (function(t, e) {
          t = t.default || t;
          var n = e.replace(/\.(js|mjs)$/, "").split("/"),
            r = n[n.length - 1],
            o = "store/".concat(e);
          if (
            ((t =
              "state" === r
                ? (function(t, e) {
                    if ("function" != typeof t) {
                      console.warn(
                        "".concat(
                          e,
                          " should export a method that returns an object"
                        )
                      );
                      var n = Object.assign({}, t);
                      return function() {
                        return n;
                      };
                    }
                    return F(t, e);
                  })(t, o)
                : F(t, o)),
            B.includes(r))
          ) {
            var c = r;
            W(G(z, n, { isProperty: !0 }), t, c);
          } else {
            "index" === r && (n.pop(), (r = n[n.length - 1]));
            var l = G(z, n),
              f = !0,
              h = !1,
              d = void 0;
            try {
              for (
                var m, v = B[Symbol.iterator]();
                !(f = (m = v.next()).done);
                f = !0
              ) {
                var x = m.value;
                W(l, t[x], x);
              }
            } catch (t) {
              (h = !0), (d = t);
            } finally {
              try {
                f || null == v.return || v.return();
              } finally {
                if (h) throw d;
              }
            }
            !1 === t.namespaced && delete l.namespaced;
          }
        })(n(170), "currentLocation.js");
      var H =
        z instanceof Function
          ? z
          : function() {
              return new M.a.Store(Object.assign({ strict: !1 }, z));
            };
      function F(t, e) {
        if (t.state && "function" != typeof t.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e)
          );
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function() {
              return n;
            }
          });
        }
        return t;
      }
      function G(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          o = void 0 !== r && r;
        if (!e.length || (o && 1 === e.length)) return t;
        var c = e.shift();
        return (
          (t.modules[c] = t.modules[c] || {}),
          (t.modules[c].namespaced = !0),
          (t.modules[c].modules = t.modules[c].modules || {}),
          G(t.modules[c], e, { isProperty: o })
        );
      }
      function W(t, e, n) {
        e &&
          ("state" === n
            ? (t.state = e || t.state)
            : (t[n] = Object.assign({}, t[n], e)));
      }
      function K() {
        return (K = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e, r, o;
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
                    return (t.next = 4), n.e(8).then(n.bind(null, 216));
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
        return K.apply(this, arguments);
      })().catch(function(t) {});
      var J = function(t, e) {
        return V.apply(this, arguments);
      };
      function V() {
        return (V = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var r;
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
      var Q = n(188),
        X = n(189),
        Y = n(190),
        Z = n(191),
        tt = n(192),
        et = n(193),
        nt = n(194),
        ot = n(195),
        it = n(196),
        at = n(197),
        st = n(198),
        ct = n(199),
        ut = n(200),
        lt = n(201),
        pt = n(202),
        ft = n(203),
        ht = n(204),
        mt = n(205),
        vt = n(206),
        xt = n(207),
        gt = n(208),
        bt = n(209);
      c.a.component("l-circle", Q.a),
        c.a.component("l-circle-marker", X.a),
        c.a.component("l-control", Y.a),
        c.a.component("l-control-attribution", Z.a),
        c.a.component("l-control-layers", tt.a),
        c.a.component("l-control-scale", et.a),
        c.a.component("l-control-zoom", nt.a),
        c.a.component("l-feature-group", ot.a),
        c.a.component("l-geo-json", it.a),
        c.a.component("l-icon", at.a),
        c.a.component("l-icon-default", st.a),
        c.a.component("l-image-overlay", ct.a),
        c.a.component("l-layer-group", ut.a),
        c.a.component("l-map", lt.a),
        c.a.component("l-marker", pt.a),
        c.a.component("l-polygon", ft.a),
        c.a.component("l-polyline", ht.a),
        c.a.component("l-popup", mt.a),
        c.a.component("l-rectangle", vt.a),
        c.a.component("l-tile-layer", xt.a),
        c.a.component("l-tooltip", gt.a),
        c.a.component("l-lwms-tile-layer", bt.a),
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
      var yt = {
        install: function(t, e) {
          t.prototype.$L = L;
        }
      };
      c.a.use(yt);
      var wt = function(t) {
        return _t.apply(this, arguments);
      };
      function _t() {
        return (_t = Object(r.a)(
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
        var jt = n(42),
          Ot = n.n(jt),
          kt = n(111),
          Ct = n.n(kt),
          $t = {
            setBaseURL: function(t) {
              this.defaults.baseURL = t;
            },
            setHeader: function(t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = !0,
                o = !1,
                c = void 0;
              try {
                for (
                  var l, f = (Array.isArray(n) ? n : [n])[Symbol.iterator]();
                  !(r = (l = f.next()).done);
                  r = !0
                ) {
                  var h = l.value;
                  if (!e) return void delete this.defaults.headers[h][t];
                  this.defaults.headers[h][t] = e;
                }
              } catch (t) {
                (o = !0), (c = t);
              } finally {
                try {
                  r || null == f.return || f.return();
                } finally {
                  if (o) throw c;
                }
              }
            },
            setToken: function(t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = t ? (e ? e + " " : "") + t : null;
              this.setHeader("Authorization", r, n);
            },
            onRequest: function(t) {
              this.interceptors.request.use(function(e) {
                return t(e) || e;
              });
            },
            onResponse: function(t) {
              this.interceptors.response.use(function(e) {
                return t(e) || e;
              });
            },
            onRequestError: function(t) {
              this.interceptors.request.use(void 0, function(e) {
                return t(e) || Promise.reject(e);
              });
            },
            onResponseError: function(t) {
              this.interceptors.response.use(void 0, function(e) {
                return t(e) || Promise.reject(e);
              });
            },
            onError: function(t) {
              this.onRequestError(t), this.onResponseError(t);
            },
            create: function(t) {
              return St(Ct()(t, this.defaults));
            }
          },
          Et = function() {
            var t = Tt[Rt];
            $t["$" + t] = function() {
              return this[t].apply(this, arguments).then(function(t) {
                return t && t.data;
              });
            };
          },
          Rt = 0,
          Tt = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch"
          ];
        Rt < Tt.length;
        Rt++
      )
        Et();
      var St = function(t) {
          var e = Ot.a.create(t);
          return (
            (e.CancelToken = Ot.a.CancelToken),
            (e.isCancel = Ot.a.isCancel),
            (function(t) {
              for (var e in $t) t[e] = $t[e].bind(t);
            })(e),
            Pt(e),
            e
          );
        },
        Pt = function(t) {
          var e = {
              finish: function() {},
              start: function() {},
              fail: function() {},
              set: function() {}
            },
            n = function() {
              return window.$nuxt &&
                window.$nuxt.$loading &&
                window.$nuxt.$loading.set
                ? window.$nuxt.$loading
                : e;
            },
            r = 0;
          t.onRequest(function(t) {
            (t && !1 === t.progress) || r++;
          }),
            t.onResponse(function(t) {
              (t && t.config && !1 === t.config.progress) ||
                (--r <= 0 && ((r = 0), n().finish()));
            }),
            t.onError(function(t) {
              (t && t.config && !1 === t.config.progress) ||
                (r--, Ot.a.isCancel(t) || (n().fail(), n().finish()));
            });
          var o = function(t) {
            if (r) {
              var progress = (100 * t.loaded) / (t.total * r);
              n().set(Math.min(100, progress));
            }
          };
          (t.defaults.onUploadProgress = o),
            (t.defaults.onDownloadProgress = o);
        },
        Nt = function(t, e) {
          var n = {
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
          var r = St(n);
          (t.$axios = r), e("axios", r);
        },
        At = n(14),
        Lt = function(t, e) {
          var n = t.app;
          ({
            initialize: function() {
              document.addEventListener(
                "deviceready",
                this.onDeviceReady.bind(this),
                !1
              );
            },
            onDeviceReady: function() {
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
            initCustomUrlScheme: function() {
              window.handleOpenURL = function(t) {
                alert("DeepLink: " + t);
              };
            },
            initStatusBar: function() {
              window.StatusBar.overlaysWebView(!1),
                window.StatusBar.backgroundColorByHexString("#009896");
            },
            initWKWebView: function() {}
          }.initialize(),
            (n.context.redirect = function(t, path, e) {
              if (t) {
                n.context._redirected = !0;
                var r = Object(At.a)(path);
                "number" == typeof t ||
                  ("undefined" !== r && "object" !== r) ||
                  ((e = path || {}),
                  (path = t),
                  (r = Object(At.a)(path)),
                  (t = 302)),
                  "object" === r && (path = n.router.resolve(path).href),
                  /(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)
                    ? n.context.next({ path: path, query: e, status: t })
                    : window.location.replace(path);
              }
            }));
        };
      function Dt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function qt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Dt(Object(source), !0).forEach(function(e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Dt(Object(source)).forEach(function(e) {
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
        return Ut;
      }),
        n.d(e, "a", function() {
          return T;
        }),
        c.a.component(h.a.name, h.a),
        c.a.component(
          m.a.name,
          qt({}, m.a, {
            render: function(t, e) {
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
        c.a.component(P.name, P),
        c.a.use(l.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid"
        });
      var It = {
        name: "page",
        mode: "out-in",
        appear: !0,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      };
      function Ut(t) {
        return Mt.apply(this, arguments);
      }
      function Mt() {
        return (Mt = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n, r, o, l, f, path, h;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), j();
                  case 2:
                    return (
                      (n = t.sent),
                      ((r = H(e)).$router = n),
                      (o = qt(
                        {
                          store: r,
                          router: n,
                          nuxt: {
                            defaultTransition: It,
                            transitions: [It],
                            setTransitions: function(t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function(t) {
                                  return (t = t
                                    ? "string" == typeof t
                                      ? Object.assign({}, It, { name: t })
                                      : Object.assign({}, It, t)
                                    : It);
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function(t) {
                              (t = t || null),
                                (o.context._errored = Boolean(t)),
                                (t = t ? Object(x.l)(t) : null);
                              var n = this.nuxt || this.$options.nuxt;
                              return (
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              );
                            }
                          }
                        },
                        U
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
                      var n = "__nuxt_" + t + "_installed__";
                      c.a[n] ||
                        ((c.a[n] = !0),
                        c.a.use(function() {
                          Object.prototype.hasOwnProperty.call(c.a, t) ||
                            Object.defineProperty(c.a.prototype, t, {
                              get: function() {
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
                    return (t.next = 19), J(o.context, h);
                  case 19:
                    return (t.next = 22), wt(o.context, h);
                  case 22:
                    return (t.next = 25), Nt(o.context, h);
                  case 25:
                    return (t.next = 28), Lt(o.context);
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
    155: function(t, e, n) {
      "use strict";
      var r = n(55);
      n.n(r).a;
    },
    156: function(t, e, n) {
      (e = n(31)(!1)).push([
        t.i,
        ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",
        ""
      ]),
        (t.exports = e);
    },
    157: function(t, e, n) {
      "use strict";
      var r = n(56);
      n.n(r).a;
    },
    158: function(t, e, n) {
      (e = n(31)(!1)).push([
        t.i,
        ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",
        ""
      ]),
        (t.exports = e);
    },
    167: function(t, e, n) {
      "use strict";
      var r = n(57);
      n.n(r).a;
    },
    168: function(t, e, n) {
      (e = n(31)(!1)).push([
        t.i,
        ".container[data-v-6dcfbf96]{min-height:100vh}",
        ""
      ]),
        (t.exports = e);
    },
    169: function(t, e, n) {
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
        },
        o = {
          increment: function(t) {
            t.counter++;
          }
        };
    },
    170: function(t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        state: function() {
          return {
            loading: !1,
            watching: !1,
            watchID: null,
            geolocation: { long: 9.9793, lat: 48.4043 }
          };
        },
        getters: {
          locationAsList: function(t) {
            return [t.geolocation.lat, t.geolocation.long];
          }
        },
        actions: { onLocationUpdateSuccess: function() {} },
        mutations: {
          TOGGLE_WATCHING: function(t, e) {
            t.watching = !!e;
          },
          CHANGE_WATCHID: function(t, e) {
            t.watchID = e;
          },
          TOGGLE_LOADING: function(t, e) {
            t.loading = !!e;
          },
          CHANGE_GEOLOCATION: function(t, e) {
            t.geolocation = e;
          }
        }
      };
    },
    2: function(t, e, n) {
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
          return P;
        }),
        n.d(e, "g", function() {
          return N;
        }),
        n.d(e, "l", function() {
          return A;
        });
      n(95), n(29);
      var r = n(40),
        o = (n(96), n(144), n(145), n(14)),
        c = (n(97), n(98), n(148), n(151), n(54), n(22), n(3)),
        l = (n(60), n(23), n(19), n(70), n(71), n(58)),
        f = n(1);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
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
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function() {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function() {
              var data = n.call(this, this);
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
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
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
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
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
              var t = Object(c.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("function" != typeof n || n.options) {
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
                              "function" == typeof e ? e(n, r, o, c) : n
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
            var c, l, f, h;
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
                            var r = Object(o.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== r && "object" !== r) ||
                                ((n = path || {}),
                                (path = t),
                                (r = Object(o.a)(path)),
                                (t = 302)),
                              "object" === r &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw ((path = B(path, n)),
                              window.location.replace(path),
                              new Error("ERR_REDIRECT"));
                            e.context.next({ path: path, query: n, status: t });
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
        var n;
        return (n =
          2 === t.length
            ? new Promise(function(n) {
                t(e, function(t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function S(base, t) {
        var path = decodeURI(window.location.pathname);
        return "hash" === t
          ? window.location.hash.replace(/^#\//, "")
          : (base &&
              0 === path.indexOf(base) &&
              (path = path.slice(base.length)),
            (path || "/") + window.location.search + window.location.hash);
      }
      function P(t, e) {
        return (function(t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(o.a)(t[i]) &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", M(e)));
          return function(e, r) {
            for (
              var path = "",
                data = e || {},
                o = (r || {}).pretty ? D : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ("string" != typeof l) {
                var f = data[l.name || "pathMatch"],
                  h = void 0;
                if (null == f) {
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
                  if (0 === f.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (var d = 0; d < f.length; d++) {
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
                    path += (0 === d ? l.prefix : l.delimiter) + h;
                  }
                } else {
                  if (((h = l.asterisk ? D(f, !0) : o(f)), !n[c].test(h)))
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
            var n,
              r = [],
              o = 0,
              c = 0,
              path = "",
              l = (e && e.delimiter) || "/";
            for (; null != (n = L.exec(t)); ) {
              var f = n[0],
                h = n[1],
                d = n.index;
              if (((path += t.slice(c, d)), (c = d + f.length), h))
                path += h[1];
              else {
                var m = t[c],
                  v = n[2],
                  x = n[3],
                  y = n[4],
                  w = n[5],
                  _ = n[6],
                  j = n[7];
                path && (r.push(path), (path = ""));
                var O = null != v && null != m && m !== v,
                  k = "+" === _ || "*" === _,
                  C = "?" === _ || "*" === _,
                  $ = n[2] || l,
                  pattern = y || w;
                r.push({
                  name: x || o++,
                  prefix: v || "",
                  delimiter: $,
                  optional: C,
                  repeat: k,
                  partial: O,
                  asterisk: Boolean(j),
                  pattern: pattern ? U(pattern) : j ? ".*" : "[^" + I($) + "]+?"
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
        var n = {},
          r = d({}, t, {}, e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function A(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
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
      var L = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
        ].join("|"),
        "g"
      );
      function D(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
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
      function U(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function M(t) {
        return t && t.sensitive ? "" : "i";
      }
      function B(t, e) {
        var n,
          o = t.indexOf("://");
        -1 !== o
          ? ((n = t.substring(0, o)), (t = t.substring(o + 3)))
          : t.startsWith("//") && (t = t.substring(2));
        var c,
          l = t.split("/"),
          f = (n ? n + "://" : "//") + l.shift(),
          path = l.filter(Boolean).join("/");
        if (2 === (l = path.split("#")).length) {
          var h = l,
            d = Object(r.a)(h, 2);
          (path = d[0]), (c = d[1]);
        }
        return (
          (f += path ? "/" + path : ""),
          e &&
            "{}" !== JSON.stringify(e) &&
            (f +=
              (2 === t.split("?").length ? "&" : "?") +
              (function(t) {
                return Object.keys(t)
                  .sort()
                  .map(function(e) {
                    var n = t[e];
                    return null == n
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
    55: function(t, e, n) {
      var content = n(156);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(32).default)("72daabed", content, !0, { sourceMap: !1 });
    },
    56: function(t, e, n) {
      var content = n(158);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(32).default)("3191d5ad", content, !0, { sourceMap: !1 });
    },
    57: function(t, e, n) {
      var content = n(168);
      "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(32).default)("5bcf601a", content, !0, { sourceMap: !1 });
    },
    59: function(t, e, n) {
      "use strict";
      n(19), n(46), n(29), n(23), n(68), n(87);
      var r = n(1),
        o =
          window.requestIdleCallback ||
          function(t) {
            var e = Date.now();
            return setTimeout(function() {
              t({
                didTimeout: !1,
                timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - e));
                }
              });
            }, 1);
          },
        c =
          window.cancelIdleCallback ||
          function(t) {
            clearTimeout(t);
          },
        l =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function(t) {
            t.forEach(function(t) {
              var e = t.intersectionRatio,
                link = t.target;
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
        mounted: function() {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = o(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function() {
          c(this.handleId),
            this.__observed &&
              (l.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function() {
            l &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              l.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function() {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function() {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents: function() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function(t) {
                return t.components.default;
              })
              .filter(function(t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function() {
            if (this.canPrefetch()) {
              l.unobserve(this.$el);
              var t = this.getPrefetchComponents(),
                e = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var o, c = t[Symbol.iterator]();
                  !(e = (o = c.next()).done);
                  e = !0
                ) {
                  var f = o.value,
                    h = f();
                  h instanceof Promise && h.catch(function() {}),
                    (f.__prefetched = !0);
                }
              } catch (t) {
                (n = !0), (r = t);
              } finally {
                try {
                  e || null == c.return || c.return();
                } finally {
                  if (n) throw r;
                }
              }
            }
          }
        }
      };
    },
    74: function(t, e, n) {
      "use strict";
      e.a = {};
    }
  },
  [[112, 6, 1, 7]]
]);
