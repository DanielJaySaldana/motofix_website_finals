(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  681792,
  (e) => {
    "use strict";
    let t;
    var s,
      a = e.i(840512),
      i = e.i(615729),
      r = {
        get url() {
          return e.F(
            "node_modules/.pnpm/react-router@7.18.5_react-dom@19.3.1_react@19.3.1__react@19.3.1/node_modules/react-router/dist/development/chunk-6KYCQHYJ.mjs",
          );
        },
        env: { DEV: !1, PROD: !0, MODE: "production", BASE_URL: "/", SSR: !1 },
      },
      n = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
      o = /^[\\/]{2}/,
      l = (((s = l || {}).Pop = "POP"), (s.Push = "PUSH"), (s.Replace = "REPLACE"), s),
      c = "popstate";
    function d(e) {
      return (
        "object" == typeof e &&
        null != e &&
        "pathname" in e &&
        "search" in e &&
        "hash" in e &&
        "state" in e &&
        "key" in e
      );
    }
    function m(e, t) {
      if (!1 === e || null == e) throw Error(t);
    }
    function h(e, t) {
      if (!e) {
        "u" > typeof console && console.warn(t);
        try {
          throw Error(t);
        } catch (e) {}
      }
    }
    function p(e, t) {
      return {
        usr: e.state,
        key: e.key,
        idx: t,
        masked: e.mask ? { pathname: e.pathname, search: e.search, hash: e.hash } : void 0,
      };
    }
    function u(e, t, s = null, a, i) {
      return {
        pathname: "string" == typeof e ? e : e.pathname,
        search: "",
        hash: "",
        ...("string" == typeof t ? f(t) : t),
        state: s,
        key: (t && t.key) || a || Math.random().toString(36).substring(2, 10),
        mask: i,
      };
    }
    function x({ pathname: e = "/", search: t = "", hash: s = "" }) {
      return (
        t && "?" !== t && (e += "?" === t.charAt(0) ? t : "?" + t),
        s && "#" !== s && (e += "#" === s.charAt(0) ? s : "#" + s),
        e
      );
    }
    function f(e) {
      let t = {};
      if (e) {
        let s = e.indexOf("#");
        s >= 0 && ((t.hash = e.substring(s)), (e = e.substring(0, s)));
        let a = e.indexOf("?");
        (a >= 0 && ((t.search = e.substring(a)), (e = e.substring(0, a))), e && (t.pathname = e));
      }
      return t;
    }
    function g(e, t, s = "/") {
      return j(e, t, s, !1);
    }
    function j(e, t, s, a, i) {
      let r,
        n = N(("string" == typeof t ? f(t) : t).pathname || "/", s);
      if (null == n) return null;
      let o =
          i ??
          ((r = (function e(t, s = [], a = [], i = "", r = !1) {
            let n = (t, n, o = r, l) => {
              var c, d;
              let h,
                p,
                u = {
                  relativePath: void 0 === l ? t.path || "" : l,
                  caseSensitive: !0 === t.caseSensitive,
                  childrenIndex: n,
                  route: t,
                };
              if (u.relativePath.startsWith("/")) {
                if (!u.relativePath.startsWith(i) && o) return;
                (m(
                  u.relativePath.startsWith(i),
                  `Absolute route path "${u.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
                ),
                  (u.relativePath = u.relativePath.slice(i.length)));
              }
              let x = R([i, u.relativePath]),
                f = a.concat(u);
              (t.children &&
                t.children.length > 0 &&
                (m(
                  !0 !== t.index,
                  `Index routes must not have child routes. Please remove all child routes from route path "${x}".`,
                ),
                e(t.children, s, f, x, o)),
                (null != t.path || t.index) &&
                  s.push({
                    path: x,
                    score:
                      ((c = x),
                      (d = t.index),
                      (p = (h = c.split("/")).length),
                      h.some(y) && (p += -2),
                      d && (p += 2),
                      h
                        .filter((e) => !y(e))
                        .reduce((e, t) => e + (b.test(t) ? 3 : "" === t ? 1 : 10), p)),
                    routesMeta: f.map((e, t) => {
                      let [s, a] = w(e.relativePath, e.caseSensitive, t === f.length - 1);
                      return { ...e, matcher: s, compiledParams: a };
                    }),
                  }));
            };
            return (
              t.forEach((e, t) => {
                if ("" !== e.path && e.path?.includes("?"))
                  for (let s of (function e(t) {
                    let s = t.split("/");
                    if (0 === s.length) return [];
                    let [a, ...i] = s,
                      r = a.endsWith("?"),
                      n = a.replace(/\?$/, "");
                    if (0 === i.length) return r ? [n, ""] : [n];
                    let o = e(i.join("/")),
                      l = [];
                    return (
                      l.push(...o.map((e) => ("" === e ? n : [n, e].join("/")))),
                      r && l.push(...o),
                      l.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                    );
                  })(e.path))
                    n(e, t, !0, s);
                else n(e, t);
              }),
              s
            );
          })(e)).sort((e, t) => {
            var s, a;
            return e.score !== t.score
              ? t.score - e.score
              : ((s = e.routesMeta.map((e) => e.childrenIndex)),
                (a = t.routesMeta.map((e) => e.childrenIndex)),
                s.length === a.length && s.slice(0, -1).every((e, t) => e === a[t])
                  ? s[s.length - 1] - a[a.length - 1]
                  : 0);
          }),
          r),
        l = null,
        c = (function (e) {
          try {
            return e
              .split("/")
              .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
              .join("/");
          } catch (t) {
            return (
              h(
                !1,
                `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
              ),
              e
            );
          }
        })(n);
      for (let e = 0; null == l && e < o.length; ++e)
        l = (function (e, t, s = !1) {
          let { routesMeta: a } = e,
            i = {},
            r = "/",
            n = [];
          for (let e = 0; e < a.length; ++e) {
            let o = a[e],
              l = e === a.length - 1,
              c = "/" === r ? t : t.slice(r.length) || "/",
              d = { path: o.relativePath, caseSensitive: o.caseSensitive, end: l },
              m = o.matcher && o.compiledParams ? k(d, c, o.matcher, o.compiledParams) : v(d, c),
              h = o.route;
            if (
              (!m &&
                l &&
                s &&
                !a[a.length - 1].route.index &&
                (m = v({ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 }, c)),
              !m)
            )
              return null;
            (Object.assign(i, m.params),
              n.push({
                params: i,
                pathname: R([r, m.pathname]),
                pathnameBase: E(R([r, m.pathnameBase])),
                route: h,
              }),
              "/" !== m.pathnameBase && (r = R([r, m.pathnameBase])));
          }
          return n;
        })(o[e], c, a);
      return l;
    }
    new WeakMap();
    var b = /^:[\w-]+$/,
      y = (e) => "*" === e;
    function v(e, t) {
      "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
      let [s, a] = w(e.path, e.caseSensitive, e.end);
      return k(e, t, s, a);
    }
    function k(e, t, s, a) {
      let i = t.match(s);
      if (!i) return null;
      let r = i[0],
        n = $(r, 1),
        o = i.slice(1);
      return {
        params: a.reduce((e, { paramName: t, isOptional: s }, a) => {
          if ("*" === t) {
            let e = o[a] || "";
            n = $(r.slice(0, r.length - e.length), 1);
          }
          let i = o[a];
          return (s && !i ? (e[t] = void 0) : (e[t] = (i || "").replace(/%2F/g, "/")), e);
        }, {}),
        pathname: r,
        pathnameBase: n,
        pattern: e,
      };
    }
    function w(e, t = !1, s = !0) {
      h(
        "*" === e || !e.endsWith("*") || e.endsWith("/*"),
        `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
      );
      let a = [],
        i =
          "^" +
          e
            .replace(/\/*\*?$/, "")
            .replace(/^\/*/, "/")
            .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
            .replace(/\/:([\w-]+)(\?)?/g, (e, t, s, i, r) => {
              if ((a.push({ paramName: t, isOptional: null != s }), s)) {
                let t = r.charAt(i + e.length);
                return t && "/" !== t ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
              }
              return "/([^\\/]+)";
            })
            .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
      return (
        e.endsWith("*")
          ? (a.push({ paramName: "*" }),
            (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : s
            ? (i += "\\/*$")
            : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))"),
        [new RegExp(i, t ? void 0 : "i"), a]
      );
    }
    function N(e, t) {
      if ("/" === t) return e;
      if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
      let s = t.endsWith("/") ? t.length - 1 : t.length,
        a = e.charAt(s);
      return a && "/" !== a ? null : e.slice(s) || "/";
    }
    function C(e, t) {
      let s = $(t).split("/");
      return (
        e.split("/").forEach((e) => {
          ".." === e ? s.length > 1 && s.pop() : "." !== e && s.push(e);
        }),
        s.length > 1 ? s.join("/") : "/"
      );
    }
    function S(e, t, s, a) {
      return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function M(e) {
      let t = e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
      return t.map((e, s) => (s === t.length - 1 ? e.pathname : e.pathnameBase));
    }
    function P(e, t, s, a = !1) {
      let i, r;
      "string" == typeof e
        ? (i = f(e))
        : (m(
            !(i = { ...e }).pathname || !i.pathname.includes("?"),
            S("?", "pathname", "search", i),
          ),
          m(!i.pathname || !i.pathname.includes("#"), S("#", "pathname", "hash", i)),
          m(!i.search || !i.search.includes("#"), S("#", "search", "hash", i)));
      let n = "" === e || "" === i.pathname,
        o = n ? "/" : i.pathname;
      if (null == o) r = s;
      else {
        let e = t.length - 1;
        if (!a && o.startsWith("..")) {
          let t = o.split("/");
          for (; ".." === t[0];) (t.shift(), (e -= 1));
          i.pathname = t.join("/");
        }
        r = e >= 0 ? t[e] : "/";
      }
      let l = (function (e, t = "/") {
          let { pathname: s, search: a = "", hash: i = "" } = "string" == typeof e ? f(e) : e;
          return {
            pathname: s
              ? (s = A(s)).startsWith("/") || s.startsWith("\\")
                ? C(s.substring(1), "/")
                : C(s, t)
              : t,
            search: D(a),
            hash: T(i),
          };
        })(i, r),
        c = o && "/" !== o && o.endsWith("/"),
        d = (n || "." === o) && s.endsWith("/");
      return (!l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l);
    }
    var A = (e) => e.replace(/[\\/]{2,}/g, "/"),
      R = (e) => A(e.join("/"));
    function $(e, t = 0) {
      let s = e.length;
      for (; s > t && 47 === e.charCodeAt(s - 1);) s--;
      return s === e.length ? e : e.slice(0, s);
    }
    var E = (e) => $(e).replace(/^\/*/, "/"),
      D = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
      T = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : ""),
      z = class {
        constructor(e, t, s, a = !1) {
          ((this.status = e),
            (this.statusText = t || ""),
            (this.internal = a),
            s instanceof Error ? ((this.data = s.toString()), (this.error = s)) : (this.data = s));
        }
      };
    function I(e) {
      return (
        null != e &&
        "number" == typeof e.status &&
        "string" == typeof e.statusText &&
        "boolean" == typeof e.internal &&
        "data" in e
      );
    }
    var F =
      "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
    function L(e, t) {
      let s = e;
      if ("string" != typeof s || !n.test(s)) return { absoluteURL: void 0, isExternal: !1, to: s };
      let a = s,
        i = !1;
      if (F)
        try {
          var r;
          let e = new URL(window.location.href),
            a = new URL(o.test(s) ? ((r = s), e.protocol + r.replace(/\\/g, "/")) : s),
            n = N(a.pathname, t);
          a.origin === e.origin && null != n ? (s = n + a.search + a.hash) : (i = !0);
        } catch (e) {
          h(
            !1,
            `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
          );
        }
      return { absoluteURL: a, isExternal: i, to: s };
    }
    (Symbol("Uninstrumented"), Object.getOwnPropertyNames(Object.prototype).sort().join("\0"));
    var O = new URL("http://localhost");
    function B(e) {
      if (e.createURL) return e.createURL("/");
      try {
        return new URL(e.createHref("/"), O);
      } catch {
        return O;
      }
    }
    function U(e, t) {
      return (
        e.origin === t.origin &&
        ("null" !== e.origin || (e.protocol === t.protocol && e.host === t.host))
      );
    }
    function q(e, t, s, a) {
      let i = null;
      try {
        i = null == e ? null : new URL(e, s);
      } catch {}
      let r = new URL(t, s),
        n = null != i && !U(i, s),
        o = !U(r, s);
      if ("reject" === a) {
        if (n || o) throw Error("External navigation is not allowed");
      } else if (
        o &&
        (null == i ||
          !(function (e, t) {
            if (e.startsWith("//")) return !0;
            let s = t.protocol.toLowerCase();
            return (
              !!e.toLowerCase().startsWith(s) &&
              ("" === t.host || e.slice(s.length).startsWith("//"))
            );
          })(e, i) ||
          !U(i, r))
      )
        throw Error("External navigation is not allowed");
    }
    var H = ["POST", "PUT", "PATCH", "DELETE"];
    (new Set(H),
      [...H],
      Symbol("ResetLoaderData"),
      new WeakMap(),
      new WeakMap(),
      new WeakMap(),
      new WeakMap());
    var V = [
        "about:",
        "blob:",
        "chrome:",
        "chrome-untrusted:",
        "content:",
        "data:",
        "devtools:",
        "file:",
        "filesystem:",
        "javascript:",
      ],
      W = i.createContext(null);
    W.displayName = "DataRouter";
    var Y = i.createContext(null);
    Y.displayName = "DataRouterState";
    var G = i.createContext(!1);
    function _() {
      return i.useContext(G);
    }
    var J = i.createContext({ isTransitioning: !1 });
    ((J.displayName = "ViewTransition"),
      (i.createContext(new Map()).displayName = "Fetchers"),
      (i.createContext(null).displayName = "Await"));
    var X = i.createContext(null);
    X.displayName = "Navigation";
    var K = i.createContext(null);
    K.displayName = "Location";
    var Q = i.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    Q.displayName = "Route";
    var Z = i.createContext(null);
    Z.displayName = "RouteError";
    var ee = "REACT_ROUTER_ERROR";
    function et() {
      return null != i.useContext(K);
    }
    function es() {
      return (
        m(et(), "useLocation() may be used only in the context of a <Router> component."),
        i.useContext(K).location
      );
    }
    var ea =
      "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function ei(e) {
      i.useContext(X).static || i.useLayoutEffect(e);
    }
    function er() {
      let { isDataRoute: e } = i.useContext(Q);
      return e
        ? (function () {
            let e,
              { router: t } = (m((e = i.useContext(W)), eh("useNavigate")), e),
              s = eu("useNavigate"),
              a = i.useRef(!1);
            return (
              ei(() => {
                a.current = !0;
              }),
              i.useCallback(
                async (e, i = {}) => {
                  (h(a.current, ea),
                    a.current &&
                      ("number" == typeof e
                        ? await t.navigate(e)
                        : await t.navigate(e, { fromRouteId: s, ...i })));
                },
                [t, s],
              )
            );
          })()
        : (function () {
            m(et(), "useNavigate() may be used only in the context of a <Router> component.");
            let e = i.useContext(W),
              { basename: t, navigator: s } = i.useContext(X),
              { matches: a } = i.useContext(Q),
              { pathname: r } = es(),
              n = JSON.stringify(M(a)),
              o = i.useRef(!1);
            return (
              ei(() => {
                o.current = !0;
              }),
              i.useCallback(
                (a, i = {}) => {
                  if ((h(o.current, ea), !o.current)) return;
                  if ("number" == typeof a) return void s.go(a);
                  let l = P(a, JSON.parse(n), r, "path" === i.relative);
                  (null == e &&
                    "/" !== t &&
                    (l.pathname = "/" === l.pathname ? t : R([t, l.pathname])),
                    q("string" == typeof a ? a : x(a), s.createHref(l), B(s), "reject"),
                    (i.replace ? s.replace : s.push)(l, i.state, i));
                },
                [t, s, n, r, e],
              )
            );
          })();
    }
    function en(e, { relative: t } = {}) {
      let { matches: s } = i.useContext(Q),
        { pathname: a } = es(),
        r = JSON.stringify(M(s));
      return i.useMemo(() => P(e, JSON.parse(r), a, "path" === t), [e, r, a, t]);
    }
    i.createContext(null);
    var eo = i.createElement(function () {
        let e,
          t,
          s,
          a =
            ((e = i.useContext(Z)),
            (t = ep("useRouteError")),
            (s = eu("useRouteError")),
            void 0 !== e ? e : t.errors?.[s]),
          r = I(a)
            ? `${a.status} ${a.statusText}`
            : a instanceof Error
              ? a.message
              : JSON.stringify(a),
          n = a instanceof Error ? a.stack : null,
          o = "rgba(200,200,200, 0.5)",
          l = { padding: "2px 4px", backgroundColor: o },
          c = null;
        return (
          console.error("Error handled by React Router default ErrorBoundary:", a),
          (c = i.createElement(
            i.Fragment,
            null,
            i.createElement("p", null, "💿 Hey developer 👋"),
            i.createElement(
              "p",
              null,
              "You can provide a way better UX than this when your app throws errors by providing your own ",
              i.createElement("code", { style: l }, "ErrorBoundary"),
              " or",
              " ",
              i.createElement("code", { style: l }, "errorElement"),
              " prop on your route.",
            ),
          )),
          i.createElement(
            i.Fragment,
            null,
            i.createElement("h2", null, "Unexpected Application Error!"),
            i.createElement("h3", { style: { fontStyle: "italic" } }, r),
            n
              ? i.createElement("pre", { style: { padding: "0.5rem", backgroundColor: o } }, n)
              : null,
            c,
          )
        );
      }, null),
      el = class extends i.Component {
        constructor(e) {
          (super(e),
            (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          this.props.onError
            ? this.props.onError(e, t)
            : console.error("React Router caught the following error during render", e);
        }
        render() {
          let e = this.state.error;
          if (
            this.context &&
            "object" == typeof e &&
            e &&
            "digest" in e &&
            "string" == typeof e.digest
          ) {
            let t = (function (e) {
              if (e.startsWith(`${ee}:ROUTE_ERROR_RESPONSE:{`))
                try {
                  let t = JSON.parse(e.slice(40));
                  if (
                    "object" == typeof t &&
                    t &&
                    "number" == typeof t.status &&
                    "string" == typeof t.statusText
                  )
                    return new z(t.status, t.statusText, t.data);
                } catch {}
            })(e.digest);
            t && (e = t);
          }
          let t =
            void 0 !== e
              ? i.createElement(
                  Q.Provider,
                  { value: this.props.routeContext },
                  i.createElement(Z.Provider, { value: e, children: this.props.component }),
                )
              : this.props.children;
          return this.context ? i.createElement(ed, { error: e }, t) : t;
        }
      };
    el.contextType = G;
    var ec = new WeakMap();
    function ed({ children: e, error: t }) {
      let { basename: s, navigator: a } = i.useContext(X);
      if ("object" == typeof t && t && "digest" in t && "string" == typeof t.digest) {
        let e = (function (e) {
          if (e.startsWith(`${ee}:REDIRECT:{`))
            try {
              let t = JSON.parse(e.slice(28));
              if (
                "object" == typeof t &&
                t &&
                "number" == typeof t.status &&
                "string" == typeof t.statusText &&
                "string" == typeof t.location &&
                "boolean" == typeof t.reloadDocument &&
                "boolean" == typeof t.replace
              )
                return t;
            } catch {}
        })(t.digest);
        if (e) {
          let r = ec.get(t);
          if (r) throw r;
          let n = L(e.location, s),
            o = n.absoluteURL || n.to;
          if (
            (q(e.location, o, B(a), "allow-explicit"),
            (function (e) {
              try {
                return V.includes(new URL(e).protocol);
              } catch {
                return !1;
              }
            })(o))
          )
            throw Error("Invalid redirect location");
          if (F && !ec.get(t))
            if (n.isExternal || e.reloadDocument) window.location.href = o;
            else {
              let s = Promise.resolve().then(() =>
                window.__reactRouterDataRouter.navigate(n.to, { replace: e.replace }),
              );
              throw (ec.set(t, s), s);
            }
          return i.createElement("meta", { httpEquiv: "refresh", content: `0;url=${o}` });
        }
      }
      return e;
    }
    function em({ routeContext: e, match: t, children: s }) {
      let a = i.useContext(W);
      return (
        a &&
          a.static &&
          a.staticContext &&
          (t.route.errorElement || t.route.ErrorBoundary) &&
          (a.staticContext._deepestRenderedBoundaryId = t.route.id),
        i.createElement(Q.Provider, { value: e }, s)
      );
    }
    function eh(e) {
      return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function ep(e) {
      let t = i.useContext(Y);
      return (m(t, eh(e)), t);
    }
    function eu(e) {
      let t,
        s = (m((t = i.useContext(Q)), eh(e)), t),
        a = s.matches[s.matches.length - 1];
      return (
        m(a.route.id, `${e} can only be used on routes that contain a unique "id"`), a.route.id
      );
    }
    var ex = {};
    function ef(e, t, s) {
      t || ex[e] || ((ex[e] = !0), h(!1, s));
    }
    function eg({
      basename: e = "/",
      children: t = null,
      location: s,
      navigationType: a = "POP",
      navigator: r,
      static: n = !1,
      useTransitions: o,
    }) {
      m(
        !et(),
        "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
      );
      let l = e.replace(/^\/*/, "/"),
        c = i.useMemo(
          () => ({ basename: l, navigator: r, static: n, useTransitions: o, future: {} }),
          [l, r, n, o],
        );
      "string" == typeof s && (s = f(s));
      let {
          pathname: d = "/",
          search: p = "",
          hash: u = "",
          state: x = null,
          key: g = "default",
          mask: j,
        } = s,
        b = i.useMemo(() => {
          let e = N(d, l);
          return null == e
            ? null
            : {
                location: { pathname: e, search: p, hash: u, state: x, key: g, mask: j },
                navigationType: a,
              };
        }, [l, d, p, u, x, g, a, j]);
      return (h(
        null != b,
        `<Router basename="${l}"> is not able to match the URL "${d}${p}${u}" because it does not start with the basename, so the <Router> won't render anything.`,
      ),
      null == b)
        ? null
        : i.createElement(
            X.Provider,
            { value: c },
            i.createElement(K.Provider, { children: t, value: b }),
          );
    }
    (i.useOptimistic,
      i.memo(function ({ routes: e, manifest: t, future: s, state: a, isStatic: r, onError: n }) {
        return (function (e, t, s) {
          let a;
          m(et(), "useRoutes() may be used only in the context of a <Router> component.");
          let { navigator: r } = i.useContext(X),
            { matches: n } = i.useContext(Q),
            o = n[n.length - 1],
            l = o ? o.params : {},
            c = o ? o.pathname : "/",
            d = o ? o.pathnameBase : "/",
            p = o && o.route;
          {
            let e = (p && p.path) || "";
            ef(
              c,
              !p || e.endsWith("*") || e.endsWith("*?"),
              `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${"/" === e ? "*" : `${e}/*`}">.`,
            );
          }
          let u = es();
          if (t) {
            let e = "string" == typeof t ? f(t) : t;
            (m(
              "/" === d || e.pathname?.startsWith(d),
              `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
            ),
              (a = e));
          } else a = u;
          let x = a.pathname || "/",
            j = x;
          if ("/" !== d) {
            let e = d.replace(/^\//, "").split("/");
            j = "/" + x.replace(/^\//, "").split("/").slice(e.length).join("/");
          }
          let b =
            s && s.state.matches.length
              ? s.state.matches.map((e) =>
                  Object.assign(e, { route: s.manifest[e.route.id] || e.route }),
                )
              : g(e, { pathname: j });
          (h(p || null != b, `No routes matched location "${a.pathname}${a.search}${a.hash}" `),
            h(
              null == b ||
                void 0 !== b[b.length - 1].route.element ||
                void 0 !== b[b.length - 1].route.Component ||
                void 0 !== b[b.length - 1].route.lazy,
              `Matched leaf route at location "${a.pathname}${a.search}${a.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
            ));
          let y = (function (e, t = [], s) {
            let a = s?.state;
            if (null == e) {
              if (!a) return null;
              if (a.errors) e = a.matches;
              else {
                if (0 !== t.length || a.initialized || !(a.matches.length > 0)) return null;
                e = a.matches;
              }
            }
            let r = e,
              n = a?.errors;
            if (null != n) {
              let e = r.findIndex((e) => e.route.id && n?.[e.route.id] !== void 0);
              (m(
                e >= 0,
                `Could not find a matching route for errors on route IDs: ${Object.keys(n).join(",")}`,
              ),
                (r = r.slice(0, Math.min(r.length, e + 1))));
            }
            let o = !1,
              l = -1;
            if (s && a) {
              o = a.renderFallback;
              for (let e = 0; e < r.length; e++) {
                let t = r[e];
                if (
                  ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (l = e),
                  t.route.id)
                ) {
                  let { loaderData: e, errors: i } = a,
                    n =
                      t.route.loader &&
                      !e.hasOwnProperty(t.route.id) &&
                      (!i || void 0 === i[t.route.id]);
                  if (t.route.lazy || n) {
                    (s.isStatic && (o = !0), (r = l >= 0 ? r.slice(0, l + 1) : [r[0]]));
                    break;
                  }
                }
              }
            }
            let c = s?.onError,
              d =
                a && c
                  ? (e, t) => {
                      c(e, {
                        location: a.location,
                        params: a.matches?.[0]?.params ?? {},
                        pattern: R(a.matches.map((e) => e.route.path).filter(Boolean)) || "/",
                        errorInfo: t,
                      });
                    }
                  : void 0;
            return r.reduceRight((e, s, c) => {
              let m,
                h = !1,
                p = null,
                u = null;
              a &&
                ((m = n && s.route.id ? n[s.route.id] : void 0),
                (p = s.route.errorElement || eo),
                o &&
                  (l < 0 && 0 === c
                    ? (ef(
                        "route-fallback",
                        !1,
                        "No `HydrateFallback` element provided to render during initial hydration",
                      ),
                      (h = !0),
                      (u = null))
                    : l === c && ((h = !0), (u = s.route.hydrateFallbackElement || null))));
              let x = t.concat(r.slice(0, c + 1)),
                f = () => {
                  let t;
                  return (
                    (t = m
                      ? p
                      : h
                        ? u
                        : s.route.Component
                          ? i.createElement(s.route.Component, null)
                          : s.route.element
                            ? s.route.element
                            : e),
                    i.createElement(em, {
                      match: s,
                      routeContext: { outlet: e, matches: x, isDataRoute: null != a },
                      children: t,
                    })
                  );
                };
              return a && (s.route.ErrorBoundary || s.route.errorElement || 0 === c)
                ? i.createElement(el, {
                    location: a.location,
                    revalidation: a.revalidation,
                    component: p,
                    error: m,
                    children: f(),
                    routeContext: { outlet: null, matches: x, isDataRoute: !0 },
                    onError: d,
                  })
                : f();
            }, null);
          })(
            b &&
              b.map((e) =>
                Object.assign({}, e, {
                  params: Object.assign({}, l, e.params),
                  pathname: R([
                    d,
                    r.encodeLocation
                      ? r.encodeLocation(
                          e.pathname
                            .replace(/%/g, "%25")
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23"),
                        ).pathname
                      : e.pathname,
                  ]),
                  pathnameBase:
                    "/" === e.pathnameBase
                      ? d
                      : R([
                          d,
                          r.encodeLocation
                            ? r.encodeLocation(
                                e.pathnameBase
                                  .replace(/%/g, "%25")
                                  .replace(/\?/g, "%3F")
                                  .replace(/#/g, "%23"),
                              ).pathname
                            : e.pathnameBase,
                        ]),
                }),
              ),
            n,
            s,
          );
          return t && y
            ? i.createElement(
                K.Provider,
                {
                  value: {
                    location: {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                      mask: void 0,
                      ...a,
                    },
                    navigationType: "POP",
                  },
                },
                y,
              )
            : y;
        })(e, void 0, { manifest: t, state: a, isStatic: r, onError: n, future: s });
      }),
      i.Component);
    var ej = "get",
      eb = "application/x-www-form-urlencoded";
    function ey(e) {
      return "u" > typeof HTMLElement && e instanceof HTMLElement;
    }
    var ev = null,
      ek = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    function ew(e) {
      return null == e || ek.has(e)
        ? e
        : (h(
            !1,
            `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eb}"`,
          ),
          null);
    }
    (Object.getOwnPropertyNames(Object.prototype).sort().join("\0"), "u" > typeof window && window);
    function eN(e, t) {
      if (!1 === e || null == e) throw Error(t);
    }
    function eC(e, t, s, a) {
      let i =
        "string" == typeof e
          ? new URL(e, "u" < typeof window ? "server://singlefetch/" : window.location.origin)
          : e;
      return (
        s
          ? i.pathname.endsWith("/")
            ? (i.pathname = `${i.pathname}_.${a}`)
            : (i.pathname = `${i.pathname}.${a}`)
          : "/" === i.pathname
            ? (i.pathname = `_root.${a}`)
            : t && "/" === N(i.pathname, t)
              ? (i.pathname = `${$(t)}/_root.${a}`)
              : (i.pathname = `${$(i.pathname)}.${a}`),
        i
      );
    }
    async function eS(e, t) {
      if (e.id in t) return t[e.id];
      try {
        let s = await import(e.module);
        return ((t[e.id] = s), s);
      } catch (t) {
        if (
          (console.error(`Error loading route module \`${e.module}\`, reloading page...`),
          console.error(t),
          window.__reactRouterContext && window.__reactRouterContext.isSpaMode && r.hot)
        )
          throw t;
        return (window.location.reload(), new Promise(() => {}));
      }
    }
    function eM(e) {
      return (
        null != e &&
        (null == e.href
          ? "preload" === e.rel &&
            "string" == typeof e.imageSrcSet &&
            "string" == typeof e.imageSizes
          : "string" == typeof e.rel && "string" == typeof e.href)
      );
    }
    async function eP(e, t, s) {
      var a;
      let i, r;
      return (
        (a = (
          await Promise.all(
            e.map(async (e) => {
              let a = t.routes[e.route.id];
              if (a) {
                let e = await eS(a, s);
                return e.links ? e.links() : [];
              }
              return [];
            }),
          )
        )
          .flat(1)
          .filter(eM)
          .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
          .map((e) =>
            "stylesheet" === e.rel
              ? { ...e, rel: "prefetch", as: "style" }
              : { ...e, rel: "prefetch" },
          )),
        (i = new Set()),
        (r = new Set(void 0)),
        a.reduce((e, t) => {
          !1;
          let s = JSON.stringify(
            (function (e) {
              let t = {};
              for (let s of Object.keys(e).sort()) t[s] = e[s];
              return t;
            })(t),
          );
          return (i.has(s) || (i.add(s), e.push({ key: s, link: t })), e);
        }, [])
      );
    }
    function eA(e, t, s, a, i, r) {
      let n = (e, t) => !s[t] || e.route.id !== s[t].route.id,
        o = (e, t) =>
          s[t].pathname !== e.pathname ||
          (s[t].route.path?.endsWith("*") && s[t].params["*"] !== e.params["*"]);
      return "assets" === r
        ? t.filter((e, t) => n(e, t) || o(e, t))
        : "data" === r
          ? t.filter((t, r) => {
              let l = a.routes[t.route.id];
              if (!l || !l.hasLoader) return !1;
              if (n(t, r) || o(t, r)) return !0;
              if (t.route.shouldRevalidate) {
                let a = t.route.shouldRevalidate({
                  currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
                  currentParams: s[0]?.params || {},
                  nextUrl: new URL(e, window.origin),
                  nextParams: t.params,
                  defaultShouldRevalidate: !0,
                });
                if ("boolean" == typeof a) return a;
              }
              return !0;
            })
          : [];
    }
    function eR(e, t, { includeHydrateFallback: s } = {}) {
      return [
        ...new Set(
          e
            .map((e) => {
              let a = t.routes[e.route.id];
              if (!a) return [];
              let i = [a.module];
              return (
                a.clientActionModule && (i = i.concat(a.clientActionModule)),
                a.clientLoaderModule && (i = i.concat(a.clientLoaderModule)),
                s && a.hydrateFallbackModule && (i = i.concat(a.hydrateFallbackModule)),
                a.imports && (i = i.concat(a.imports)),
                i
              );
            })
            .flat(1),
        ),
      ];
    }
    function e$() {
      let e = i.useContext(W);
      return (
        eN(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
      );
    }
    function eE() {
      let e = i.useContext(Y);
      return (
        eN(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
      );
    }
    Symbol("SingleFetchRedirect");
    var eD = i.createContext(void 0);
    function eT() {
      let e = i.useContext(eD);
      return (eN(e, "You must render this element inside a <HydratedRouter> element"), e);
    }
    function ez(e, t) {
      return (s) => {
        (e && e(s), s.defaultPrevented || t(s));
      };
    }
    function eI({ page: e, ...t }) {
      let s = _(),
        { nonce: a } = eT(),
        { router: r } = e$(),
        n = i.useMemo(() => g(r.routes, e, r.basename), [r.routes, e, r.basename]);
      return n
        ? (null == t.nonce && a && (t = { ...t, nonce: a }), s)
          ? i.createElement(eF, { page: e, matches: n, ...t })
          : i.createElement(eL, { page: e, matches: n, ...t })
        : null;
    }
    function eF({ page: e, matches: t, ...s }) {
      let a = es(),
        { future: r } = eT(),
        { basename: n } = e$(),
        o = i.useMemo(() => {
          if (e === a.pathname + a.search + a.hash) return [];
          let s = eC(e, n, r.v8_trailingSlashAwareDataRequests, "rsc"),
            i = !1,
            o = [];
          for (let e of t)
            "function" == typeof e.route.shouldRevalidate ? (i = !0) : o.push(e.route.id);
          return (
            i && o.length > 0 && s.searchParams.set("_routes", o.join(",")), [s.pathname + s.search]
          );
        }, [n, r.v8_trailingSlashAwareDataRequests, e, a, t]);
      return i.createElement(
        i.Fragment,
        null,
        o.map((e) =>
          i.createElement("link", { key: e, rel: "prefetch", as: "fetch", href: e, ...s }),
        ),
      );
    }
    function eL({ page: e, matches: t, ...s }) {
      let a = es(),
        { future: r, manifest: n, routeModules: o } = eT(),
        { basename: l } = e$(),
        { loaderData: c, matches: d } = eE(),
        m = i.useMemo(() => eA(e, t, d, n, a, "data"), [e, t, d, n, a]),
        h = i.useMemo(() => eA(e, t, d, n, a, "assets"), [e, t, d, n, a]),
        p = i.useMemo(() => {
          if (e === a.pathname + a.search + a.hash) return [];
          let s = new Set(),
            i = !1;
          if (
            (t.forEach((e) => {
              let t = n.routes[e.route.id];
              t &&
                t.hasLoader &&
                ((!m.some((t) => t.route.id === e.route.id) &&
                  e.route.id in c &&
                  o[e.route.id]?.shouldRevalidate) ||
                t.hasClientLoader
                  ? (i = !0)
                  : s.add(e.route.id));
            }),
            0 === s.size)
          )
            return [];
          let d = eC(e, l, r.v8_trailingSlashAwareDataRequests, "data");
          return (
            i &&
              s.size > 0 &&
              d.searchParams.set(
                "_routes",
                t
                  .filter((e) => s.has(e.route.id))
                  .map((e) => e.route.id)
                  .join(","),
              ),
            [d.pathname + d.search]
          );
        }, [l, r.v8_trailingSlashAwareDataRequests, c, a, n, m, t, e, o]),
        u = i.useMemo(() => eR(h, n), [h, n]),
        x = (function (e) {
          let { manifest: t, routeModules: s } = eT(),
            [a, r] = i.useState([]);
          return (
            i.useEffect(() => {
              let a = !1;
              return (
                eP(e, t, s).then((e) => {
                  a || r(e);
                }),
                () => {
                  a = !0;
                }
              );
            }, [e, t, s]),
            a
          );
        })(h);
      return i.createElement(
        i.Fragment,
        null,
        p.map((e) =>
          i.createElement("link", { key: e, rel: "prefetch", as: "fetch", href: e, ...s }),
        ),
        u.map((e) => i.createElement("link", { key: e, rel: "modulepreload", href: e, ...s })),
        x.map(({ key: e, link: t }) =>
          i.createElement("link", {
            key: e,
            nonce: s.nonce,
            ...t,
            crossOrigin: t.crossOrigin ?? s.crossOrigin,
          }),
        ),
      );
    }
    eD.displayName = "FrameworkContext";
    i.Component;
    var eO =
      "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
    try {
      eO && (window.__reactRouterVersion = "7.18.5");
    } catch (e) {}
    function eB({ basename: e, children: t, useTransitions: s, window: a }) {
      let r = i.useRef();
      null == r.current &&
        (r.current = (function (e = {}) {
          return (function (e, t, s = {}) {
            let { window: a = document.defaultView, v5Compat: i = !1 } = s,
              r = a.history,
              n = "POP",
              l = null,
              h = f();
            function f() {
              return (r.state || { idx: null }).idx;
            }
            function g() {
              n = "POP";
              let e = f(),
                t = null == e ? null : e - h;
              ((h = e), l && l({ action: n, location: b.location, delta: t }));
            }
            function j(e) {
              return (function (e, t, s = !1) {
                let a = "http://localhost";
                (e && (a = "null" !== e.location.origin ? e.location.origin : e.location.href),
                  m(a, "No window.location.(origin|href) available to create URL"));
                let i = "string" == typeof t ? t : x(t);
                return (
                  (i = i.replace(/ $/, "%20")), !s && o.test(i) && (i = a + i), new URL(i, a)
                );
              })(a, e);
            }
            null == h && ((h = 0), r.replaceState({ ...r.state, idx: h }, ""));
            let b = {
              get action() {
                return n;
              },
              get location() {
                return e(a, r);
              },
              listen(e) {
                if (l) throw Error("A history only accepts one active listener");
                return (
                  a.addEventListener(c, g),
                  (l = e),
                  () => {
                    (a.removeEventListener(c, g), (l = null));
                  }
                );
              },
              createHref: (e) => t(a, e),
              createURL: j,
              encodeLocation(e) {
                let t = j(e);
                return { pathname: t.pathname, search: t.search, hash: t.hash };
              },
              push: function (e, t) {
                n = "PUSH";
                let s = d(e) ? e : u(b.location, e, t);
                let o = p(s, (h = f() + 1)),
                  c = b.createHref(s.mask || s);
                try {
                  r.pushState(o, "", c);
                } catch (e) {
                  if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
                  a.location.assign(c);
                }
                i && l && l({ action: n, location: b.location, delta: 1 });
              },
              replace: function (e, t) {
                n = "REPLACE";
                let s = d(e) ? e : u(b.location, e, t);
                let a = p(s, (h = f())),
                  o = b.createHref(s.mask || s);
                (r.replaceState(a, "", o),
                  i && l && l({ action: n, location: b.location, delta: 0 }));
              },
              go: (e) => r.go(e),
            };
            return b;
          })(
            function (e, t) {
              let s = t.state?.masked,
                { pathname: a, search: i, hash: r } = s || e.location;
              return u(
                "",
                { pathname: a, search: i, hash: r },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || "default",
                s
                  ? {
                      pathname: e.location.pathname,
                      search: e.location.search,
                      hash: e.location.hash,
                    }
                  : void 0,
              );
            },
            function (e, t) {
              return "string" == typeof t ? t : x(t);
            },
            e,
          );
        })({ window: a, v5Compat: !0 }));
      let n = r.current,
        [l, h] = i.useState({ action: n.action, location: n.location }),
        f = i.useCallback(
          (e) => {
            !1 === s ? h(e) : i.startTransition(() => h(e));
          },
          [s],
        );
      return (
        i.useLayoutEffect(() => n.listen(f), [n, f]),
        i.createElement(eg, {
          basename: e,
          children: t,
          location: l.location,
          navigationType: l.action,
          navigator: n,
          useTransitions: s,
        })
      );
    }
    var eU = i.forwardRef(function (
      {
        onClick: e,
        discover: t = "render",
        prefetch: s = "none",
        relative: a,
        reloadDocument: r,
        replace: o,
        mask: l,
        state: c,
        target: d,
        to: h,
        preventScrollReset: p,
        viewTransition: u,
        defaultShouldRevalidate: f,
        ...g
      },
      j,
    ) {
      let { basename: b, navigator: y, useTransitions: v } = i.useContext(X),
        k = "string" == typeof h && n.test(h),
        w = L(h, b),
        N = (function (e, { relative: t } = {}) {
          m(et(), "useHref() may be used only in the context of a <Router> component.");
          let { basename: s, navigator: a } = i.useContext(X),
            { hash: r, pathname: n, search: o } = en(e, { relative: t }),
            l = n;
          return (
            "/" !== s && (l = "/" === n ? s : R([s, n])),
            a.createHref({ pathname: l, search: o, hash: r })
          );
        })((h = w.to), { relative: a }),
        C = es(),
        S = null;
      if (l) {
        let e = P(l, [], C.mask ? C.mask.pathname : "/", !0);
        ("/" !== b && (e.pathname = "/" === e.pathname ? b : R([b, e.pathname])),
          (S = y.createHref(e)));
      }
      let [M, A, $] = (function (e, t) {
          let s = i.useContext(eD),
            [a, r] = i.useState(!1),
            [n, o] = i.useState(!1),
            { onFocus: l, onBlur: c, onMouseEnter: d, onMouseLeave: m, onTouchStart: h } = t,
            p = i.useRef(null);
          (i.useEffect(() => {
            if (("render" === e && o(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    o(e.isIntersecting);
                  });
                },
                { threshold: 0.5 },
              );
              return (
                p.current && e.observe(p.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            i.useEffect(() => {
              if (a) {
                let e = setTimeout(() => {
                  o(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [a]));
          let u = () => {
              r(!0);
            },
            x = () => {
              (r(!1), o(!1));
            };
          return s
            ? "intent" !== e
              ? [n, p, {}]
              : [
                  n,
                  p,
                  {
                    onFocus: ez(l, u),
                    onBlur: ez(c, x),
                    onMouseEnter: ez(d, u),
                    onMouseLeave: ez(m, x),
                    onTouchStart: ez(h, u),
                  },
                ]
            : [!1, p, {}];
        })(s, g),
        E = (function (
          e,
          {
            target: t,
            replace: s,
            mask: a,
            state: r,
            preventScrollReset: n,
            relative: o,
            viewTransition: l,
            defaultShouldRevalidate: c,
            useTransitions: d,
          } = {},
        ) {
          let m = er(),
            h = es(),
            p = en(e, { relative: o });
          return i.useCallback(
            (u) => {
              if (
                0 === u.button &&
                (!t || "_self" === t) &&
                !(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey)
              ) {
                u.preventDefault();
                let t = void 0 !== s ? s : x(h) === x(p),
                  f = () =>
                    m(e, {
                      replace: t,
                      mask: a,
                      state: r,
                      preventScrollReset: n,
                      relative: o,
                      viewTransition: l,
                      defaultShouldRevalidate: c,
                    });
                d ? i.startTransition(() => f()) : f();
              }
            },
            [h, m, p, s, a, r, t, e, n, o, l, c, d],
          );
        })(h, {
          replace: o,
          mask: l,
          state: c,
          target: d,
          preventScrollReset: p,
          relative: a,
          viewTransition: u,
          defaultShouldRevalidate: f,
          useTransitions: v,
        }),
        D = !(w.isExternal || r),
        T = i.createElement("a", {
          ...g,
          ...$,
          href: (D ? S : void 0) || w.absoluteURL || N,
          onClick: D
            ? function (t) {
                (e && e(t), t.defaultPrevented || E(t));
              }
            : e,
          ref: (function (...e) {
            return (t) => {
              e.forEach((e) => {
                "function" == typeof e ? e(t) : null != e && (e.current = t);
              });
            };
          })(j, A),
          target: d,
          "data-discover": k || "render" !== t ? void 0 : "true",
        });
      return M && !k ? i.createElement(i.Fragment, null, T, i.createElement(eI, { page: N })) : T;
    });
    ((eU.displayName = "Link"),
      (i.forwardRef(function (
        {
          "aria-current": e = "page",
          caseSensitive: t = !1,
          className: s = "",
          end: a = !1,
          style: r,
          to: n,
          viewTransition: o,
          children: l,
          ...c
        },
        d,
      ) {
        let h,
          p = en(n, { relative: c.relative }),
          u = es(),
          x = i.useContext(Y),
          { navigator: f, basename: g } = i.useContext(X),
          j =
            null != x &&
            (function (e, { relative: t } = {}) {
              let s = i.useContext(J);
              m(
                null != s,
                "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
              );
              let { basename: a } = eq("useViewTransitionState"),
                r = en(e, { relative: t });
              if (!s.isTransitioning) return !1;
              let n = N(s.currentLocation.pathname, a) || s.currentLocation.pathname,
                o = N(s.nextLocation.pathname, a) || s.nextLocation.pathname;
              return null != v(r.pathname, o) || null != v(r.pathname, n);
            })(p) &&
            !0 === o,
          b = f.encodeLocation ? f.encodeLocation(p).pathname : p.pathname,
          y = u.pathname,
          k = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
        (t || ((y = y.toLowerCase()), (k = k ? k.toLowerCase() : null), (b = b.toLowerCase())),
          k && g && (k = N(k, g) || k));
        let w = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length,
          C = y === b || (!a && y.startsWith(b) && "/" === y.charAt(w)),
          S = null != k && (k === b || (!a && k.startsWith(b) && "/" === k.charAt(b.length))),
          M = { isActive: C, isPending: S, isTransitioning: j },
          P = C ? e : void 0;
        h =
          "function" == typeof s
            ? s(M)
            : [s, C ? "active" : null, S ? "pending" : null, j ? "transitioning" : null]
                .filter(Boolean)
                .join(" ");
        let A = "function" == typeof r ? r(M) : r;
        return i.createElement(
          eU,
          { ...c, "aria-current": P, className: h, ref: d, style: A, to: n, viewTransition: o },
          "function" == typeof l ? l(M) : l,
        );
      }).displayName = "NavLink"),
      (i.forwardRef(
        (
          {
            discover: e = "render",
            fetcherKey: t,
            navigate: s,
            reloadDocument: a,
            replace: r,
            state: o,
            method: l = ej,
            action: c,
            onSubmit: d,
            relative: h,
            preventScrollReset: p,
            viewTransition: u,
            defaultShouldRevalidate: f,
            ...g
          },
          j,
        ) => {
          let { useTransitions: b } = i.useContext(X),
            y = (function () {
              let { router: e } = eq("useSubmit"),
                { basename: t } = i.useContext(X),
                s = eu("useRouteId"),
                a = e.fetch,
                r = e.navigate;
              return i.useCallback(
                async (e, i = {}) => {
                  let {
                    action: n,
                    method: o,
                    encType: l,
                    formData: c,
                    body: d,
                  } = (function (e, t) {
                    let s, a, i, r, n;
                    if (ey(e) && "form" === e.tagName.toLowerCase()) {
                      let n = e.getAttribute("action");
                      ((a = n ? N(n, t) : null),
                        (s = e.getAttribute("method") || ej),
                        (i = ew(e.getAttribute("enctype")) || eb),
                        (r = new FormData(e)));
                    } else if (
                      (ey(e) && "button" === e.tagName.toLowerCase()) ||
                      (ey(e) &&
                        "input" === e.tagName.toLowerCase() &&
                        ("submit" === e.type || "image" === e.type))
                    ) {
                      let n = e.form;
                      if (null == n)
                        throw Error(
                          'Cannot submit a <button> or <input type="submit"> without a <form>',
                        );
                      let o = e.getAttribute("formaction") || n.getAttribute("action");
                      if (
                        ((a = o ? N(o, t) : null),
                        (s = e.getAttribute("formmethod") || n.getAttribute("method") || ej),
                        (i =
                          ew(e.getAttribute("formenctype")) || ew(n.getAttribute("enctype")) || eb),
                        (r = new FormData(n, e)),
                        !(function () {
                          if (null === ev)
                            try {
                              (new FormData(document.createElement("form"), 0), (ev = !1));
                            } catch (e) {
                              ev = !0;
                            }
                          return ev;
                        })())
                      ) {
                        let { name: t, type: s, value: a } = e;
                        if ("image" === s) {
                          let e = t ? `${t}.` : "";
                          (r.append(`${e}x`, "0"), r.append(`${e}y`, "0"));
                        } else t && r.append(t, a);
                      }
                    } else if (ey(e))
                      throw Error(
                        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
                      );
                    else ((s = ej), (a = null), (i = eb), (n = e));
                    return (
                      r && "text/plain" === i && ((n = r), (r = void 0)),
                      { action: a, method: s.toLowerCase(), encType: i, formData: r, body: n }
                    );
                  })(e, t);
                  if (!1 === i.navigate) {
                    let e = i.fetcherKey || `__${String(++eH)}__`;
                    await a(e, s, i.action || n, {
                      defaultShouldRevalidate: i.defaultShouldRevalidate,
                      preventScrollReset: i.preventScrollReset,
                      formData: c,
                      body: d,
                      formMethod: i.method || o,
                      formEncType: i.encType || l,
                      flushSync: i.flushSync,
                    });
                  } else
                    await r(i.action || n, {
                      defaultShouldRevalidate: i.defaultShouldRevalidate,
                      preventScrollReset: i.preventScrollReset,
                      formData: c,
                      body: d,
                      formMethod: i.method || o,
                      formEncType: i.encType || l,
                      replace: i.replace,
                      state: i.state,
                      fromRouteId: s,
                      flushSync: i.flushSync,
                      viewTransition: i.viewTransition,
                    });
                },
                [a, r, t, s],
              );
            })(),
            v = (function (e, { relative: t } = {}) {
              let { basename: s } = i.useContext(X),
                a = i.useContext(Q);
              m(a, "useFormAction must be used inside a RouteContext");
              let [r] = a.matches.slice(-1),
                n = { ...en(e || ".", { relative: t }) },
                o = es();
              if (null == e) {
                n.search = o.search;
                let e = new URLSearchParams(n.search),
                  t = e.getAll("index");
                if (t.some((e) => "" === e)) {
                  (e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t)));
                  let s = e.toString();
                  n.search = s ? `?${s}` : "";
                }
              }
              return (
                (!e || "." === e) &&
                  r.route.index &&
                  (n.search = n.search ? n.search.replace(/^\?/, "?index&") : "?index"),
                "/" !== s && (n.pathname = "/" === n.pathname ? s : R([s, n.pathname])),
                x(n)
              );
            })(c, { relative: h }),
            k = "get" === l.toLowerCase() ? "get" : "post",
            w = "string" == typeof c && n.test(c);
          return i.createElement("form", {
            ref: j,
            method: k,
            action: v,
            onSubmit: a
              ? d
              : (e) => {
                  if ((d && d(e), e.defaultPrevented)) return;
                  e.preventDefault();
                  let a = e.nativeEvent.submitter,
                    n = a?.getAttribute("formmethod") || l,
                    c = () =>
                      y(a || e.currentTarget, {
                        fetcherKey: t,
                        method: n,
                        navigate: s,
                        replace: r,
                        state: o,
                        relative: h,
                        preventScrollReset: p,
                        viewTransition: u,
                        defaultShouldRevalidate: f,
                      });
                  b && !1 !== s ? i.startTransition(() => c()) : c();
                },
            ...g,
            "data-discover": w || "render" !== e ? void 0 : "true",
          });
        },
      ).displayName = "Form"));
    function eq(e) {
      var t;
      let s = i.useContext(W);
      return (
        m(
          s,
          ((t = e),
          `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`),
        ),
        s
      );
    }
    var eH = 0,
      eV = e.i(262577);
    let eW = {
        motohub: [36.5, 57],
        revline: [54.5, 33],
        pitstop: [84, 80],
        gearup: [27, 24],
        twowheel: [69, 66],
        roadready: [19, 65],
        apex: [78, 41],
        ridecare: [55, 78],
      },
      eY = [
        [31, 35],
        [42, 53],
        [44, 30],
        [22, 38],
        [58, 52],
        [66, 41],
        [75, 60],
        [81, 53],
        [38, 79],
        [55, 84],
        [62, 73],
        [76, 87],
        [34, 65],
        [61, 25],
        [70, 18],
        [87, 67],
      ];
    function eG(e, t) {
      return eY[((/new pandan/i.test(e) ? 8 : 4 * !!/santo ni[ñn]o/i.test(e)) + t) % eY.length];
    }
    let e_ = [
        {
          id: "gearup",
          name: "GearUp Moto Works",
          rating: 4.7,
          reviews: 52,
          distance: 1.8,
          address: "New Visayas, Panabo City",
          open: !0,
          available: !0,
          services: ["Oil Change", "General Maintenance", "Chain Service"],
          phone: "",
        },
        {
          id: "twowheel",
          name: "TwoWheel Repair Center",
          rating: 4.8,
          reviews: 73,
          distance: 3.1,
          address: "New Pandan, Panabo City",
          open: !0,
          available: !0,
          services: ["Brake Service", "Tire Replacement", "General Maintenance"],
          phone: "",
        },
        {
          id: "roadready",
          name: "RoadReady Moto Garage",
          rating: 4.6,
          reviews: 41,
          distance: 2.7,
          address: "New Visayas, Panabo City",
          open: !0,
          available: !0,
          services: ["Engine Repair", "Electrical Repair", "Oil Change"],
          phone: "",
        },
        {
          id: "apex",
          name: "Apex Motorcycle Service",
          rating: 4.9,
          reviews: 95,
          distance: 3.5,
          address: "Santo Niño, Panabo City",
          open: !0,
          available: !0,
          services: ["Engine Repair", "Brake Service", "Chain Service"],
          phone: "",
        },
        {
          id: "ridecare",
          name: "RideCare Motor Shop",
          rating: 4.7,
          reviews: 62,
          distance: 2.2,
          address: "New Pandan, Panabo City",
          open: !0,
          available: !0,
          services: ["Tire Replacement", "Electrical Repair", "General Maintenance"],
          phone: "",
        },
      ],
      eJ = [
        {
          id: "motohub",
          name: "MotoHub Service Center",
          distance: 1.2,
          address: "124 Street, New Visayas, Panabo City",
        },
        {
          id: "revline",
          name: "Revline Moto Garage",
          distance: 2.4,
          address: "Street 120, Santo Niño, Panabo City",
        },
        {
          id: "pitstop",
          name: "Pitstop Motorcycle Care",
          distance: 3.8,
          address: "Street 125, New Pandan, Panabo City",
        },
        ...e_,
      ],
      eX = "motofix-demo-session",
      eK = "motofix-demo-accounts",
      eQ = (e, t) => {
        try {
          return JSON.parse(localStorage.getItem(e) || "null") ?? t;
        } catch {
          return t;
        }
      },
      eZ = (e, t) => localStorage.setItem(e, JSON.stringify(t)),
      e0 = { rider: "2026_001", shop: "2026_002", mechanic: "2026_003" };
    function e1() {
      let e = eQ(eK, []).filter(
          (e) =>
            "shop" === e.role && "demo-shop" !== e.id && e.shopName && "Active" === e.accountStatus,
        ),
        t = new Set();
      return e.map((e, s) => {
        let a = eQ(`motofix-demo-state:shop:${e.id}:motofix-owner-v1`, {}),
          i = a.profile?.address || e.shopAddress || "New Visayas, Panabo City",
          r = eG(i, s);
        for (let e = 1; t.has(r.join(",")) && e < 16; e++) r = eG(i, s + e);
        return (
          t.add(r.join(",")),
          {
            id: e.id,
            name: a.profile?.name || e.shopName,
            phone: a.profile?.phone || e.phone,
            address: i,
            services: a.services?.map((e) => e.name) || ["General Maintenance"],
            open: !0,
            available: !0,
            rating: 0,
            reviews: 0,
            distance: 0,
            mapPosition: r,
          }
        );
      });
    }
    function e2(e, t = {}) {
      return {
        id: "shop" === e ? "demo-shop" : `demo-${e}`,
        name: "rider" === e ? "Alex Santos" : "shop" === e ? "Miguel Santos" : "Marco Reyes",
        email:
          "rider" === e
            ? "rider@motofix.local"
            : "shop" === e
              ? "owner@motofix.local"
              : "mechanic@motofix.local",
        phone: "0917 555 0123",
        role: e,
        username: "mechanic" === e ? "mechanic.marco" : e,
        shopName: "rider" === e ? "" : "MotoHub Service Center",
        shopId: "rider" === e ? "" : "demo-shop",
        homeShopId: "demo-shop",
        mechanicId: "mechanic" === e ? "M-01" : void 0,
        accountStatus: "Active",
        createdAt: new Date().toISOString(),
        ...t,
        displayId: e0[e],
      };
    }
    function e5() {
      try {
        return JSON.parse(sessionStorage.getItem(eX) || "null");
      } catch {
        return null;
      }
    }
    function e3(e) {
      return (sessionStorage.setItem(eX, JSON.stringify(e)), { user: e });
    }
    function e4(e) {
      let t = e5();
      if (!t) throw Error("Open a demo account first.");
      let s = { ...t, ...e },
        a = eQ(eK, []);
      return (eZ(eK, [...a.filter((e) => e.id !== s.id), s]), e3(s));
    }
    async function e6(e, t = {}) {
      let s,
        a = "string" == typeof t.body ? JSON.parse(t.body) : {},
        i = e5();
      if ("/auth/session" === e) s = { user: i };
      else if ("/auth/login" === e) {
        let e = String(a.identity).trim().toLowerCase(),
          t = eQ(eK, []).find((t) =>
            [t.email, t.username, t.phone].some((t) => t?.toLowerCase() === e),
          ),
          i =
            "rider@motofix.local" === e
              ? "rider"
              : "owner@motofix.local" === e
                ? "shop"
                : ["mechanic@motofix.local", "mechanic.marco"].includes(e)
                  ? "mechanic"
                  : null;
        if (!t && !i) throw Error("Use a demo account below, or create a browser-only account.");
        if (!a.password) throw Error("Enter a demo password.");
        s = e3(t || e2(i));
      } else if ("/auth/register" === e || "/auth/google/complete-signup" === e) {
        let e = eQ(eK, []);
        if (e.some((e) => e.email.toLowerCase() === a.email.toLowerCase()))
          throw Error("This email already has a demo account in this browser.");
        let t = e2(a.role, {
          id: crypto.randomUUID(),
          name: a.name,
          email: a.email,
          phone: a.phone,
          shopName: a.shopName || "",
          shopAddress: a.shopAddress || "",
          username: a.email,
        });
        ("shop" === a.role && (t.shopId = t.id), eZ(eK, [...e, t]), (s = e3(t)));
      } else if ("/auth/logout" === e) (sessionStorage.removeItem(eX), (s = { ok: !0 }));
      else if ("/auth/profile" === e) s = e4(a);
      else if ("/auth/shop-registration" === e) s = e4({ shopName: a.shopName });
      else if ("/auth/forgot-password" === e)
        s = {
          message:
            "Frontend preview only: no email is sent. Return to Login and use any non-empty demo password. No real credentials are stored.",
        };
      else if ("/auth/change-password" === e || "/auth/reset-password" === e) s = { ok: !0 };
      else if ("/shops/directory" === e) s = { shops: e1() };
      else if (e.startsWith("/state/")) {
        let r = i?.role === "rider" ? `rider:${i.id}` : `shop:${i?.shopId || "demo-shop"}`,
          n = `motofix-demo-state:${r}:${decodeURIComponent(e.slice(7))}`;
        ("PUT" === t.method && eZ(n, a.value),
          (s = { value: eQ(n, null), updatedAt: new Date().toISOString() }));
      } else if ("/support/tickets" === e) {
        let e = `DEMO-${Date.now()}`;
        (eZ("motofix-demo-support", [...eQ("motofix-demo-support", []), { ...a, id: e }]),
          (s = { id: e, status: "Saved locally (not sent)" }));
      } else if ("/mechanics" === e) {
        let e = e2("mechanic", {
            ...a,
            id: crypto.randomUUID(),
            mechanicId: `M-${Date.now()}`,
            shopId: i?.shopId || "demo-shop",
            shopName: i?.shopName || "",
          }),
          { password: t, ...r } = e;
        (eZ(eK, [...eQ(eK, []), r]), (s = { mechanicId: e.mechanicId, user: r }));
      } else if (e.startsWith("/mechanics/"))
        if (e.endsWith("/reset-password")) s = { password: "DemoOnly123!" };
        else {
          let t = decodeURIComponent(e.split("/")[2]),
            i = eQ(eK, []),
            r = i.find((e) => e.mechanicId === t) || e2("mechanic", { mechanicId: t }),
            { password: n, ...o } = a,
            l = { ...r, ...o };
          (eZ(eK, [...i.filter((e) => e.id !== l.id), l]), (s = { user: l }));
        }
      else throw Error("This action is unavailable in the frontend preview.");
      return s;
    }
    function e7() {
      return new Promise((e, t) => {
        let s = indexedDB.open("motofix-demo-files", 1);
        ((s.onupgradeneeded = () => s.result.createObjectStore("files")),
          (s.onsuccess = () => e(s.result)),
          (s.onerror = () => t(Error("Browser file storage is unavailable."))));
      });
    }
    async function e8(e) {
      let t = e.get("file");
      if (!(t instanceof File)) throw Error("Choose a file.");
      let s = await fetch(demoApiUrl("/files"), {
        method: "POST",
        body: e,
        credentials: "same-origin",
      });
      let a = await s.json().catch(() => ({}));
      if (!s.ok) throw Error(a.message || "Unable to save this file on the local MotoFix server.");
      return a;
    }
    async function e9(e) {
      return fetch(demoApiUrl("/files/" + encodeURIComponent(e)), {
        credentials: "same-origin",
      });
    }
    function demoApiUrl(e) {
      return `${window.MOTOFIX_BASE || ""}/api.php?path=${encodeURIComponent(e)}`;
    }
    async function te(e, t = {}) {
      let s = window.MOTOFIX_BASE || "",
        a = e.startsWith(s + "/") ? e.slice(s.length) : e,
        i = await fetch(demoApiUrl(a), {
          method: t.method || "GET",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: t.body || null,
          credentials: "same-origin",
        }),
        r = await i.json().catch(() => ({}));
      if (!i.ok) throw Error(r.message || r.error || "MotoFix could not complete that action.");
      return r;
    }
    async function tt() {
      return te("/auth/session");
    }
    async function ts(e, t) {
      return te("/auth/login", {
        method: "POST",
        body: JSON.stringify({ identity: e, password: t }),
      });
    }
    async function ta(e) {
      return te("/auth/register", { method: "POST", body: JSON.stringify(e) });
    }
    async function ti(e) {
      return te("/auth/google/pending-signup?token=" + encodeURIComponent(e));
    }
    async function tr(e, t) {
      return te("/auth/google/complete-signup", {
        method: "POST",
        body: JSON.stringify({ ...t, token: e }),
      });
    }
    async function tn() {
      return te("/shops/directory");
    }
    async function to() {
      return te("/auth/logout", { method: "POST" });
    }
    async function tl(e, t) {
      return te("/auth/change-password", {
        method: "POST",
        body: JSON.stringify({ currentPassword: e, newPassword: t }),
      });
    }
    async function tc(e) {
      return te("/auth/profile", { method: "PATCH", body: JSON.stringify({ name: e }) });
    }
    async function td(e) {
      return te("/auth/profile", { method: "PATCH", body: JSON.stringify({ phone: e }) });
    }
    async function tm(e) {
      return te("/auth/shop-registration", { method: "PATCH", body: JSON.stringify(e) });
    }
    async function th(e) {
      return te("/auth/forgot-password", { method: "POST", body: JSON.stringify({ identity: e }) });
    }
    async function tp(e, t) {
      return te("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token: e, newPassword: t }),
      });
    }
    async function tu(e, t) {
      return te("/support/tickets", {
        method: "POST",
        body: JSON.stringify({ subject: e, message: t }),
      });
    }
    async function tx(e) {
      return te("/mechanics", { method: "POST", body: JSON.stringify(e) });
    }
    async function tf(e, t) {
      return te("/mechanics/" + encodeURIComponent(e), {
        method: "PATCH",
        body: JSON.stringify(t),
      });
    }
    async function tg(e) {
      return te("/mechanics/" + encodeURIComponent(e) + "/reset-password", { method: "POST" });
    }
    async function tj(e) {
      return te("/state/" + encodeURIComponent(e));
    }
    async function tb(e, t) {
      return te("/state/" + encodeURIComponent(e), {
        method: "PUT",
        body: JSON.stringify({ value: t }),
      });
    }
    async function ty(e) {
      return e8(e);
    }
    async function tv(e) {
      return e9(e);
    }
    var tk = e.i(739682),
      tw = e.i(162324),
      tN = e.i(823932),
      tC = e.i(926638);
    let tS = {
      name: "send",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
          },
        ],
        ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
      ],
    };
    tS.node;
    let tM = (0, tC.f)(tS);
    var tP = e.i(111028);
    let tA = "motofix-conversations-v1",
      tR = (e) => ({ id: `rider:${e}`, name: e, role: "Motorcycle rider" }),
      t$ = (e = "MotoHub Service Center", t) => ({
        id: "owner:motohub",
        name: e,
        role: "Shop owner",
        phone: t,
      }),
      tE = (e) => ({ ...e, id: `mechanic:${e.id}`, role: "Mechanic" });
    function tD() {
      try {
        let e = JSON.parse(localStorage.getItem(tA) || "[]");
        return Array.isArray(e) ? e : [];
      } catch {
        return [];
      }
    }
    function tT({ actor: e, contacts: t }) {
      let [s, r] = (0, i.useState)(tD),
        [n, o] = (0, i.useState)(null),
        [l, c] = (0, i.useState)("message"),
        [d, m] = (0, i.useState)(""),
        [h, p] = (0, i.useState)(""),
        u = (0, i.useRef)(null),
        x = (0, i.useRef)(null),
        f = (0, i.useRef)(null),
        g = (0, i.useRef)(null),
        j = (0, i.useRef)(null),
        b = n ? [e.id, n.id].sort().join("|") : "",
        y = s.filter((e) => e.thread === b);
      ((0, i.useEffect)(() => {
        let e = () => r(tD());
        return (
          window.addEventListener("storage", e),
          window.addEventListener("motofix-conversations", e),
          () => {
            (window.removeEventListener("storage", e),
              window.removeEventListener("motofix-conversations", e));
          }
        );
      }, []),
        (0, i.useEffect)(() => {
          j.current?.scrollIntoView({ block: "nearest" });
        }, [n, s, l]),
        (0, i.useEffect)(() => {
          n && ("message" === l ? x.current?.focus() : f.current?.focus());
        }, [n, l]));
      let v = (e, t) => {
          ((g.current = document.activeElement), o(e), c(t), m(""), p(""));
        },
        k = () => {
          (o(null), g.current?.focus());
        },
        w = u.current?.closest(".phone-screen"),
        N =
          n &&
          (0, a.jsx)("div", {
            className: "mf-contact-overlay",
            onKeyDown: (e) => {
              if (("Escape" === e.key && k(), "Tab" === e.key)) {
                let t = e.currentTarget.querySelectorAll(
                    "button:not(:disabled), input:not(:disabled)",
                  ),
                  s = t[0],
                  a = t[t.length - 1];
                e.shiftKey && document.activeElement === s
                  ? (e.preventDefault(), a?.focus())
                  : e.shiftKey || document.activeElement !== a || (e.preventDefault(), s?.focus());
              }
            },
            children: (0, a.jsxs)("section", {
              className: "mf-conversation",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": `${"call" === l ? "Call" : "Conversation with"} ${n.name}`,
              children: [
                (0, a.jsxs)("header", {
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("small", { children: n.role }),
                        (0, a.jsx)("h2", { children: n.name }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      ref: f,
                      onClick: k,
                      "aria-label": "Close conversation",
                      children: (0, a.jsx)(tP.X, { size: 19 }),
                    }),
                  ],
                }),
                "message" === l
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("p", {
                          className: "mf-demo-label",
                          children: "Messages sync with your repair team.",
                        }),
                        (0, a.jsxs)("div", {
                          className: "mf-message-list",
                          "aria-live": "polite",
                          children: [
                            !y.length &&
                              (0, a.jsx)("p", {
                                className: "mf-message-empty",
                                children:
                                  "Ask about the repair, parts, or pickup time. Messages appear in the other account when they open this conversation.",
                              }),
                            y.map((t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  className: `mf-message ${t.sender === e.id ? "outgoing" : "incoming"}`,
                                  children: [
                                    (0, a.jsx)("p", { children: t.text }),
                                    (0, a.jsx)("time", {
                                      children: new Date(t.time).toLocaleString("en-PH", {
                                        month: "short",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "2-digit",
                                      }),
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                            (0, a.jsx)("div", { ref: j }),
                          ],
                        }),
                        (0, a.jsxs)("form", {
                          onSubmit: (t) => {
                            (t.preventDefault(),
                              d.trim() &&
                                ((t) => {
                                  try {
                                    let s = [
                                      ...tD(),
                                      {
                                        id: crypto.randomUUID(),
                                        thread: b,
                                        sender: e.id,
                                        text: t,
                                        time: new Date().toISOString(),
                                      },
                                    ];
                                    return (
                                      localStorage.setItem(tA, JSON.stringify(s)),
                                      r(s),
                                      window.dispatchEvent(new Event("motofix-conversations")),
                                      p(""),
                                      !0
                                    );
                                  } catch {
                                    return (p("Unable to save. Device storage may be full."), !1);
                                  }
                                })(d.trim()) &&
                                m(""));
                          },
                          children: [
                            (0, a.jsx)("input", {
                              ref: x,
                              "aria-label": "Message",
                              placeholder: "Write a message…",
                              value: d,
                              maxLength: 2e3,
                              onChange: (e) => m(e.target.value),
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: !d.trim(),
                              "aria-label": "Send message",
                              children: (0, a.jsx)(tM, { size: 18 }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("button", {
                          className: "mf-switch-call",
                          onClick: () => c("call"),
                          children: [(0, a.jsx)(tN.f, { size: 14 }), " Call ", n.name],
                        }),
                      ],
                    })
                  : (0, a.jsxs)("div", {
                      className: "mf-call-body",
                      children: [
                        (0, a.jsx)("span", {
                          className: "mf-call-icon",
                          children: (0, a.jsx)(tN.f, { size: 30 }),
                        }),
                        (0, a.jsxs)("h3", { children: ["Call ", n.name] }),
                        n.phone
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("p", { children: n.phone }),
                                (0, a.jsxs)("a", {
                                  className: "mf-call-action",
                                  href: "tel:" + n.phone,
                                  children: [(0, a.jsx)(tN.f, { size: 17 }), " Open phone dialer"],
                                }),
                              ],
                            })
                          : (0, a.jsx)("p", {
                              children: "No phone number is available for this contact.",
                            }),
                        (0, a.jsx)("p", {
                          children:
                            "Your phone handles the call. MotoFix voice calls are not enabled.",
                        }),
                      ],
                    }),
                h && (0, a.jsx)("p", { role: "alert", className: "mf-demo-label", children: h }),
              ],
            }),
          });
      return (0, a.jsxs)("div", {
        className: "mf-contacts",
        ref: u,
        children: [
          (0, a.jsx)("h3", { children: "Stay connected" }),
          (0, a.jsx)("p", {
            className: "mf-contact-caption",
            children: "Your repair team, one conversation away.",
          }),
          t
            .filter((t, s, a) => t.id !== e.id && a.findIndex((e) => e.id === t.id) === s)
            .map((e) =>
              (0, a.jsxs)(
                "div",
                {
                  className: "mf-contact-row",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("small", { children: e.role }),
                        (0, a.jsx)("strong", { children: e.name }),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      onClick: () => v(e, "message"),
                      "aria-label": `Message ${e.name}`,
                      children: [
                        (0, a.jsx)(tw.f, { size: 17 }),
                        (0, a.jsx)("span", { children: "Message" }),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      onClick: () => v(e, "call"),
                      "aria-label": `Call ${e.name}`,
                      children: [
                        (0, a.jsx)(tN.f, { size: 17 }),
                        (0, a.jsx)("span", { children: "Call" }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          N && (w ? (0, tk.createPortal)(N, w) : N),
        ],
      });
    }
    var tz = e.i(46832);
    let tI = {
      name: "download",
      size: 24,
      node: [
        ["path", { d: "M12 15V3", key: "m9g1x1" }],
        ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
        ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
      ],
    };
    tI.node;
    let tF = (0, tC.f)(tI),
      tL = {
        name: "plus",
        size: 24,
        node: [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "M12 5v14", key: "s699le" }],
        ],
      };
    tL.node;
    let tO = (0, tC.f)(tL);
    var tB = e.i(858905);
    function tU(e, t) {
      try {
        return JSON.parse(localStorage.getItem(e) || "null") ?? t;
      } catch {
        return t;
      }
    }
    function tq(e, t) {
      let [s, a] = (0, i.useState)(() => tU(e, t));
      return (
        (0, i.useEffect)(() => {
          let s = () => a(tU(e, t));
          return (
            window.addEventListener("storage", s),
            window.addEventListener("motofix-records", s),
            () => {
              (window.removeEventListener("storage", s),
                window.removeEventListener("motofix-records", s));
            }
          );
        }, [e]),
        [
          s,
          (s) => {
            let i = tU(e, t),
              r = "function" == typeof s ? s(i) : s;
            (localStorage.setItem(e, JSON.stringify(r)),
              a(r),
              window.dispatchEvent(new Event("motofix-records")));
          },
        ]
      );
    }
    async function tH(e) {
      if (!["application/pdf", "image/jpeg", "image/png"].includes(e.type))
        throw Error("Choose a PDF, JPG, or PNG file.");
      if (e.size > 5242880) throw Error("Each file must be 5 MB or smaller.");
      let t = new FormData();
      return (t.append("file", e), ty(t));
    }
    async function tV(e) {
      let t = await tv(e.id);
      if (!t.ok)
        throw Error((await t.json().catch(() => ({}))).error || "Unable to open this file.");
      let s = await t.blob(),
        a = URL.createObjectURL(s),
        i = document.createElement("a");
      ((i.href = a),
        (i.download = e.name),
        i.click(),
        window.setTimeout(() => URL.revokeObjectURL(a), 3e4));
    }
    function tW({ title: e, children: t, confirm: s, onConfirm: r, onClose: n }) {
      let o = (0, i.useRef)(null),
        l = (0, i.useRef)(null);
      (0, i.useEffect)(() => {
        let e = document.activeElement;
        return (l.current?.focus(), () => e?.focus());
      }, []);
      let c = document.querySelector(".phone-screen"),
        d = (0, a.jsx)("div", {
          ref: o,
          className: "mf-contact-overlay mf-workflow",
          onKeyDown: (e) => {
            if (("Escape" === e.key && n(), "Tab" === e.key)) {
              let t = e.currentTarget.querySelectorAll("button");
              e.shiftKey && document.activeElement === t[0]
                ? (e.preventDefault(), t[t.length - 1]?.focus())
                : e.shiftKey ||
                  document.activeElement !== t[t.length - 1] ||
                  (e.preventDefault(), t[0]?.focus());
            }
          },
          children: (0, a.jsxs)("section", {
            className: "mf-conversation mf-confirm",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "workflow-confirm-title",
            children: [
              (0, a.jsx)("h2", { id: "workflow-confirm-title", children: e }),
              t,
              (0, a.jsxs)("div", {
                className: "so-actions",
                children: [
                  (0, a.jsx)("button", {
                    ref: l,
                    className: "so-button",
                    onClick: n,
                    children: "Go back",
                  }),
                  (0, a.jsx)("button", {
                    className: "so-button so-primary",
                    onClick: r,
                    children: s,
                  }),
                ],
              }),
            ],
          }),
        });
      return c ? (0, tk.createPortal)(d, c) : d;
    }
    let tY = [
        "Submitted",
        "Acknowledged",
        "Investigating",
        "Awaiting Rider",
        "Resolution Proposed",
        "Resolved",
        "Withdrawn",
      ],
      tG = {
        service: "",
        subject: "",
        category: "Repair quality",
        against: "Service center",
        incident: "",
        description: "",
        request: "Reinspection / repair",
        consent: !1,
      };
    function t_({ mode: e, rider: t, services: s = [], shopId: r = "motohub", mechanics: n = [] }) {
      let [o, l] = tq("motofix-complaints-v1", []),
        [c, d] = (0, i.useState)(""),
        [m, h] = (0, i.useState)(!1),
        [p, u] = (0, i.useState)(0),
        [x, f] = (0, i.useState)(tG),
        [g, j] = (0, i.useState)([]),
        [b, y] = (0, i.useState)(!1),
        [v, k] = (0, i.useState)(""),
        [w, N] = (0, i.useState)(""),
        [C, S] = (0, i.useState)("All"),
        [M, P] = (0, i.useState)(""),
        [A, R] = (0, i.useState)(null),
        $ = o.filter((s) => ("owner" === e ? s.service.shopId === r : s.riderId === t?.id)),
        E = $.find((e) => e.id === c),
        D = s.find((e) => e.id === x.service),
        T = (e) => {
          try {
            (e(), k(""), R(null));
          } catch {
            (k("Unable to save. Check device storage and try again."), R(null));
          }
        },
        z = (s, a, i = !1) => {
          E &&
            T(() =>
              l((r) =>
                r.map((r) =>
                  r.id === E.id
                    ? {
                        ...r,
                        ...s,
                        events: [
                          ...r.events,
                          {
                            time: new Date().toISOString(),
                            author: "owner" === e ? "Shop owner" : t?.name || "Rider",
                            text: a,
                            internal: i,
                          },
                        ],
                      }
                    : r,
                ),
              ),
            );
        },
        I = async (e) => {
          if (e) {
            if (g.length + e.length > 3) return void k("Attach up to 3 evidence files.");
            (y(!0), k(""));
            try {
              let t = [];
              for (let s of Array.from(e)) t.push(await tH(s));
              j((e) => [...e, ...t]);
            } catch (e) {
              k(e.message);
            } finally {
              y(!1);
            }
          }
        },
        F = (e) =>
          (0, a.jsxs)("button", {
            type: "button",
            className: "so-button mf-file",
            onClick: () => tV(e).catch((e) => k(e.message)),
            children: [(0, a.jsx)(tF, { size: 13 }), e.name],
          });
      return (0, a.jsxs)("div", {
        className: "mf-workflow",
        children: [
          (0, a.jsxs)("div", {
            className: "so-callout",
            children: [
              (0, a.jsx)(tB.f, { size: 20 }),
              (0, a.jsxs)("p", {
                children: [
                  (0, a.jsx)("strong", {
                    children:
                      "owner" === e
                        ? "Listen. Investigate. Make it right."
                        : "A clear path to getting things resolved.",
                  }),
                  "owner" === e
                    ? "Review evidence, coordinate with your mechanic, and keep the rider informed."
                    : "Tell the service center what happened and track their response here.",
                  " ",
                  "Records and uploaded evidence sync to the MotoFix server.",
                ],
              }),
            ],
          }),
          w && (0, a.jsx)("p", { role: "status", className: "mf-feedback", children: w }),
          v && (0, a.jsx)("p", { role: "alert", className: "mf-feedback mf-error", children: v }),
          m
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: "mf-steps",
                    children: ["Service", "Details", "Review"].map((e, t) =>
                      (0, a.jsxs)(
                        "span",
                        { className: t === p ? "current" : "", children: [t + 1, ". ", e] },
                        e,
                      ),
                    ),
                  }),
                  (0, a.jsxs)("form", {
                    className: "so-form",
                    onSubmit: (e) => {
                      (e.preventDefault(), p < 2)
                        ? u(p + 1)
                        : D &&
                          t &&
                          x.consent &&
                          R({
                            title: "Submit this complaint?",
                            text: "The service center can review your complaint and attached evidence. You can follow its progress here.",
                            label: "Submit complaint",
                            action: () =>
                              T(() => {
                                let e = `CMP-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
                                (l((s) => [
                                  {
                                    ...x,
                                    id: e,
                                    riderId: t.id,
                                    rider: t.name,
                                    email: t.email,
                                    phone: t.phone,
                                    service: D,
                                    evidence: g,
                                    status: "Submitted",
                                    assigned: "",
                                    priority: "Normal",
                                    resolution: "",
                                    events: [
                                      {
                                        time: new Date().toISOString(),
                                        author: t.name,
                                        text: "Complaint submitted",
                                      },
                                    ],
                                  },
                                  ...s,
                                ]),
                                  h(!1),
                                  d(e),
                                  N(
                                    `Complaint ${e} submitted. The service center can now review it.`,
                                  ));
                              }),
                          });
                    },
                    children: [
                      0 === p &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("h2", { children: "1. Select the affected service" }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsxs)("span", {
                                  children: [
                                    "Booking or repair ",
                                    (0, a.jsx)("em", { children: "*" }),
                                  ],
                                }),
                                (0, a.jsxs)("select", {
                                  required: !0,
                                  value: x.service,
                                  onChange: (e) => f({ ...x, service: e.target.value }),
                                  children: [
                                    (0, a.jsx)("option", {
                                      value: "",
                                      children: "Choose a booking or repair",
                                    }),
                                    s.map((e) =>
                                      (0, a.jsxs)(
                                        "option",
                                        {
                                          value: e.id,
                                          children: [e.id, " · ", e.motorcycle, " · ", e.shop],
                                        },
                                        e.id,
                                      ),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            D &&
                              (0, a.jsxs)("div", {
                                className: "so-card",
                                children: [
                                  (0, a.jsx)("strong", { children: D.shop }),
                                  (0, a.jsxs)("p", { children: [D.service, " · ", D.motorcycle] }),
                                  (0, a.jsxs)("p", {
                                    children: ["Mechanic: ", D.mechanic || "Not specified"],
                                  }),
                                ],
                              }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", { children: "Complaint about" }),
                                (0, a.jsx)("select", {
                                  value: x.against,
                                  onChange: (e) => f({ ...x, against: e.target.value }),
                                  children: [
                                    "Service center",
                                    "Assigned mechanic",
                                    "Both service center and mechanic",
                                  ].map((e) => (0, a.jsx)("option", { children: e }, e)),
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "mf-caption",
                              children:
                                "Mechanic complaints are handled by the service center owner. If there is an immediate safety concern, stop riding until the motorcycle is checked.",
                            }),
                          ],
                        }),
                      1 === p &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("h2", { children: "2. Tell us what happened" }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsxs)("span", {
                                  children: ["Subject ", (0, a.jsx)("em", { children: "*" })],
                                }),
                                (0, a.jsx)("input", {
                                  required: !0,
                                  maxLength: 120,
                                  value: x.subject,
                                  onChange: (e) => f({ ...x, subject: e.target.value }),
                                  placeholder: "e.g. Brake issue after servicing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", { children: "Category" }),
                                (0, a.jsx)("select", {
                                  value: x.category,
                                  onChange: (e) => f({ ...x, category: e.target.value }),
                                  children: [
                                    "Repair quality",
                                    "Safety concern",
                                    "Unexpected charges",
                                    "Delay / missed completion",
                                    "Mechanic conduct",
                                    "Damaged / missing parts",
                                    "Warranty / repeat issue",
                                    "Other",
                                  ].map((e) => (0, a.jsx)("option", { children: e }, e)),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsxs)("span", {
                                  children: ["Incident date ", (0, a.jsx)("em", { children: "*" })],
                                }),
                                (0, a.jsx)("input", {
                                  type: "date",
                                  required: !0,
                                  max: new Date().toLocaleDateString("en-CA"),
                                  value: x.incident,
                                  onChange: (e) => f({ ...x, incident: e.target.value }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsxs)("span", {
                                  children: [
                                    "What happened? ",
                                    (0, a.jsx)("em", { children: "*" }),
                                  ],
                                }),
                                (0, a.jsx)("textarea", {
                                  required: !0,
                                  minLength: 20,
                                  maxLength: 4e3,
                                  value: x.description,
                                  onChange: (e) => f({ ...x, description: e.target.value }),
                                  placeholder:
                                    "Describe the problem, what was agreed, and any steps you have already taken (at least 20 characters).",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", { children: "Requested outcome" }),
                                (0, a.jsx)("select", {
                                  value: x.request,
                                  onChange: (e) => f({ ...x, request: e.target.value }),
                                  children: [
                                    "Reinspection / repair",
                                    "Explanation of charges",
                                    "Refund discussion",
                                    "Replacement of damaged parts",
                                    "Apology / conduct review",
                                    "Other resolution",
                                  ].map((e) => (0, a.jsx)("option", { children: e }, e)),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", {
                                  children: "Evidence (optional · up to 3 files)",
                                }),
                                (0, a.jsx)("input", {
                                  type: "file",
                                  accept: "application/pdf,image/jpeg,image/png",
                                  multiple: !0,
                                  disabled: b,
                                  onChange: (e) => {
                                    (I(e.target.files), (e.target.value = ""));
                                  },
                                }),
                                (0, a.jsx)("small", {
                                  children:
                                    "Photos, receipts, or service records. PDF / JPG / PNG, up to 5 MB each. Use sample files, not sensitive personal records.",
                                }),
                              ],
                            }),
                            g.map((e) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  className: "mf-file-row",
                                  children: [
                                    F(e),
                                    (0, a.jsx)("button", {
                                      type: "button",
                                      className: "so-button",
                                      onClick: () => j(g.filter((t) => t.id !== e.id)),
                                      children: "Remove",
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          ],
                        }),
                      2 === p &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("h2", { children: "3. Review your complaint" }),
                            (0, a.jsxs)("div", {
                              className: "so-card mf-summary",
                              children: [
                                (0, a.jsx)("strong", { children: x.subject }),
                                (0, a.jsxs)("p", { children: [D?.shop, " · ", D?.id] }),
                                (0, a.jsxs)("p", { children: [x.against, " · ", x.category] }),
                                (0, a.jsxs)("p", { children: ["Incident: ", x.incident] }),
                                (0, a.jsx)("p", { children: x.description }),
                                (0, a.jsxs)("p", { children: ["Requested outcome: ", x.request] }),
                                (0, a.jsxs)("p", { children: ["Attachments: ", g.length] }),
                                (0, a.jsxs)("p", {
                                  children: ["Reply contact: ", t?.email, " · ", t?.phone],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "mf-checkbox",
                              children: [
                                (0, a.jsx)("input", {
                                  required: !0,
                                  type: "checkbox",
                                  checked: x.consent,
                                  onChange: (e) => f({ ...x, consent: e.target.checked }),
                                }),
                                (0, a.jsx)("span", {
                                  children:
                                    "I confirm this information is accurate and agree to share the complaint and evidence with the service center.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, a.jsxs)("div", {
                        className: "so-actions",
                        children: [
                          (0, a.jsx)("button", {
                            type: "button",
                            className: "so-button",
                            onClick: () => (p ? u(p - 1) : h(!1)),
                            children: p ? "Back" : "Cancel",
                          }),
                          (0, a.jsx)("button", {
                            className: "so-button so-primary",
                            type: "submit",
                            disabled: b,
                            children: b
                              ? "Saving files…"
                              : 2 === p
                                ? "Submit complaint"
                                : "Continue",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : E
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("button", {
                      className: "so-button",
                      onClick: () => {
                        (d(""), P(""));
                      },
                      children: "← All complaints",
                    }),
                    (0, a.jsxs)("div", {
                      className: "so-card mf-summary",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "so-card-top",
                          children: [
                            (0, a.jsx)("small", { children: E.id }),
                            (0, a.jsx)("span", { className: "so-badge warm", children: E.status }),
                          ],
                        }),
                        (0, a.jsx)("h2", { children: E.subject }),
                        (0, a.jsxs)("p", { children: [E.service.shop, " · ", E.service.id] }),
                        (0, a.jsxs)("p", {
                          children: [E.service.motorcycle, " · ", E.service.service],
                        }),
                        (0, a.jsxs)("p", {
                          children: [E.against, " · ", E.category, " · ", E.incident],
                        }),
                        (0, a.jsx)("p", { children: E.description }),
                        (0, a.jsxs)("p", {
                          children: [
                            (0, a.jsx)("strong", { children: "Requested outcome:" }),
                            " ",
                            E.request,
                          ],
                        }),
                        "owner" === e &&
                          (0, a.jsxs)("p", {
                            children: [
                              (0, a.jsx)("strong", { children: "Rider:" }),
                              " ",
                              E.rider,
                              (0, a.jsx)("br", {}),
                              E.email,
                              " · ",
                              E.phone,
                            ],
                          }),
                        E.evidence.map((e) => (0, a.jsx)("div", { children: F(e) }, e.id)),
                        E.resolution &&
                          (0, a.jsxs)("p", {
                            children: [
                              (0, a.jsx)("strong", { children: "Proposed resolution:" }),
                              " ",
                              E.resolution,
                            ],
                          }),
                      ],
                    }),
                    "owner" === e &&
                      !["Resolved", "Withdrawn"].includes(E.status) &&
                      (0, a.jsxs)(
                        "form",
                        {
                          className: "so-form",
                          onSubmit: (e) => {
                            e.preventDefault();
                            let t = new FormData(e.currentTarget),
                              s = String(t.get("status")),
                              a = String(t.get("resolution") || "").trim();
                            if ("Resolution Proposed" === s && !a)
                              return void k(
                                "Describe the proposed resolution before offering it to the rider.",
                              );
                            let i = String(t.get("assigned") || ""),
                              r = String(t.get("priority"));
                            (z(
                              { status: s, resolution: a, assigned: i, priority: r },
                              `Status: ${s}. ${a ? `Proposed resolution: ${a}` : ""}`,
                            ),
                              (i !== E.assigned || r !== E.priority) &&
                                N("Complaint updated. Internal assignment and priority saved."));
                          },
                          children: [
                            (0, a.jsx)("h3", { children: "Manage this complaint" }),
                            (0, a.jsx)("p", {
                              className: "mf-caption",
                              children:
                                "Acknowledge → investigate with the mechanic → request details if needed → propose a resolution. The rider confirms resolution.",
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", { children: "Status" }),
                                (0, a.jsx)("select", {
                                  name: "status",
                                  defaultValue: E.status,
                                  children: tY
                                    .filter((e) => !["Resolved", "Withdrawn"].includes(e))
                                    .map((e) => (0, a.jsx)("option", { children: e }, e)),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", {
                                  children: "Internal investigation assignment",
                                }),
                                (0, a.jsxs)("select", {
                                  name: "assigned",
                                  defaultValue: E.assigned,
                                  children: [
                                    (0, a.jsx)("option", { value: "", children: "Shop owner" }),
                                    n.map((e) =>
                                      (0, a.jsx)("option", { value: e.id, children: e.name }, e.id),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", { children: "Priority" }),
                                (0, a.jsx)("select", {
                                  name: "priority",
                                  defaultValue: E.priority,
                                  children: ["Normal", "High", "Urgent / safety"].map((e) =>
                                    (0, a.jsx)("option", { children: e }, e),
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className: "so-field",
                              children: [
                                (0, a.jsx)("span", {
                                  children: "Proposed resolution / next steps",
                                }),
                                (0, a.jsx)("textarea", {
                                  name: "resolution",
                                  defaultValue: E.resolution,
                                  maxLength: 3e3,
                                  placeholder: "Explain the remedy, cost, and expected timeframe.",
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              className: "so-button so-primary",
                              children: "Save complaint update",
                            }),
                          ],
                        },
                        E.id + E.status,
                      ),
                    (0, a.jsx)("h3", { children: "Conversation & timeline" }),
                    (0, a.jsx)("div", {
                      className: "so-card mf-complaint-timeline",
                      children: E.events
                        .filter((t) => "owner" === e || !t.internal)
                        .map((e, t) =>
                          (0, a.jsxs)(
                            "article",
                            {
                              children: [
                                (0, a.jsxs)("strong", {
                                  children: [e.author, e.internal ? " · Internal note" : ""],
                                }),
                                (0, a.jsx)("time", {
                                  children: new Date(e.time).toLocaleString("en-PH"),
                                }),
                                (0, a.jsx)("p", { children: e.text }),
                              ],
                            },
                            t,
                          ),
                        ),
                    }),
                    !["Resolved", "Withdrawn"].includes(E.status) &&
                      (0, a.jsxs)("form", {
                        className: "so-form",
                        onSubmit: (e) => {
                          if ((e.preventDefault(), !M.trim())) return;
                          let t = "on" === new FormData(e.currentTarget).get("internal");
                          (z({}, M.trim(), t), P(""));
                        },
                        children: [
                          (0, a.jsxs)("label", {
                            className: "so-field",
                            children: [
                              (0, a.jsx)("span", {
                                children:
                                  "owner" === e
                                    ? "Response to rider / investigation note"
                                    : "Add information or respond",
                              }),
                              (0, a.jsx)("textarea", {
                                required: !0,
                                maxLength: 3e3,
                                value: M,
                                onChange: (e) => P(e.target.value),
                              }),
                            ],
                          }),
                          "owner" === e &&
                            (0, a.jsxs)("label", {
                              className: "mf-checkbox",
                              children: [
                                (0, a.jsx)("input", { name: "internal", type: "checkbox" }),
                                (0, a.jsx)("span", {
                                  children: "Internal note (visible only to the owner)",
                                }),
                              ],
                            }),
                          (0, a.jsxs)("button", {
                            className: "so-button so-primary",
                            children: [(0, a.jsx)(tw.f, { size: 14 }), "Send update"],
                          }),
                        ],
                      }),
                    "rider" === e &&
                      "Resolution Proposed" === E.status &&
                      (0, a.jsxs)("div", {
                        className: "so-actions",
                        children: [
                          (0, a.jsx)("button", {
                            className: "so-button so-primary",
                            onClick: () =>
                              R({
                                title: "Confirm the issue is resolved?",
                                text: "Only confirm after the agreed remedy has been completed. The complaint will be marked resolved.",
                                label: "Confirm resolved",
                                action: () =>
                                  z(
                                    { status: "Resolved" },
                                    "Rider accepted the resolution and confirmed the issue is resolved.",
                                  ),
                              }),
                            children: "Accept & confirm resolved",
                          }),
                          (0, a.jsx)("button", {
                            className: "so-button",
                            onClick: () =>
                              z(
                                { status: "Investigating" },
                                "Rider requested further investigation of the proposed resolution.",
                              ),
                            children: "Request further review",
                          }),
                        ],
                      }),
                    "rider" === e &&
                      !["Resolved", "Withdrawn"].includes(E.status) &&
                      (0, a.jsx)("button", {
                        className: "so-button so-danger",
                        onClick: () =>
                          R({
                            title: "Withdraw this complaint?",
                            text: "The record remains in your history, but the service center will no longer need to act on it.",
                            label: "Withdraw complaint",
                            action: () =>
                              z({ status: "Withdrawn" }, "Rider withdrew the complaint."),
                          }),
                        children: "Withdraw complaint",
                      }),
                    "rider" === e &&
                      ["Resolved", "Withdrawn"].includes(E.status) &&
                      (0, a.jsx)("button", {
                        className: "so-button",
                        onClick: () =>
                          z(
                            { status: "Submitted" },
                            "Rider reopened the complaint for further review.",
                          ),
                        children: "Reopen complaint",
                      }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    "rider" === e &&
                      (0, a.jsxs)("button", {
                        className: "so-button so-primary so-wide",
                        onClick: () => {
                          (h(!0), u(0), f(tG), j([]), k(""), N(""));
                        },
                        disabled: !s.length,
                        children: [(0, a.jsx)(tO, { size: 16 }), "New complaint"],
                      }),
                    (0, a.jsxs)("label", {
                      className: "so-field",
                      children: [
                        (0, a.jsx)("span", { children: "Filter complaints" }),
                        (0, a.jsx)("select", {
                          value: C,
                          onChange: (e) => S(e.target.value),
                          children: ["All", ...tY].map((e) =>
                            (0, a.jsx)("option", { children: e }, e),
                          ),
                        }),
                      ],
                    }),
                    $.filter((e) => "All" === C || e.status === C).map((t) =>
                      (0, a.jsxs)(
                        "button",
                        {
                          className: "so-card mf-complaint-card",
                          onClick: () => {
                            (d(t.id), N(""), P(""));
                          },
                          children: [
                            (0, a.jsxs)("div", {
                              className: "so-card-top",
                              children: [
                                (0, a.jsx)("small", { children: t.id }),
                                (0, a.jsx)("span", {
                                  className: "so-badge warm",
                                  children: t.status,
                                }),
                              ],
                            }),
                            (0, a.jsx)("strong", { children: t.subject }),
                            (0, a.jsxs)("p", {
                              children: [
                                "owner" === e ? t.rider : t.service.shop,
                                " · ",
                                t.service.id,
                              ],
                            }),
                            (0, a.jsxs)("small", {
                              children: [
                                t.category,
                                " · ",
                                new Date(t.events[0].time).toLocaleDateString("en-PH"),
                              ],
                            }),
                          ],
                        },
                        t.id,
                      ),
                    ),
                    !$.some((e) => "All" === C || e.status === C) &&
                      (0, a.jsxs)("div", {
                        className: "so-empty",
                        children: [
                          (0, a.jsx)(tz.f, { size: 25 }),
                          (0, a.jsxs)("strong", {
                            children: ["No complaints ", "All" === C ? "yet" : "with this status"],
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "owner" === e
                                ? "Customer submissions will appear here, ready for review."
                                : "Submit a complaint about a booking, repair, or mechanic to start the resolution process.",
                          }),
                        ],
                      }),
                  ],
                }),
          A &&
            (0, a.jsx)(tW, {
              title: A.title,
              confirm: A.label,
              onClose: () => R(null),
              onConfirm: A.action,
              children: (0, a.jsx)("p", { children: A.text }),
            }),
        ],
      });
    }
    function tJ({ to: e }) {
      return (0, a.jsxs)(eU, {
        className: "account-brand",
        to: e,
        "aria-label": "MotoFix — return to home",
        children: [
          (0, a.jsx)(eV.default, { width: 1139, height: 1210, src: "/motofix-logo.jpg", alt: "" }),
          (0, a.jsx)("span", { children: "MotoFix" }),
        ],
      });
    }
    let tX = {
      name: "bell",
      size: 24,
      node: [
        ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
        [
          "path",
          {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi",
          },
        ],
      ],
    };
    tX.node;
    let tK = (0, tC.f)(tX);
    function tQ({ items: e, onMarkAll: t }) {
      let s = e.every((e) => !e.unread);
      return (0, a.jsxs)("section", {
        className: "notification-feed",
        "aria-label": "Recent notifications",
        children: [
          (0, a.jsxs)("div", {
            className: "notification-feed-toolbar",
            children: [
              (0, a.jsx)("p", { children: "Sample activity feed" }),
              (0, a.jsx)("button", {
                type: "button",
                onClick: t,
                children: s ? "All read" : "Mark all read",
              }),
            ],
          }),
          e.map((e) =>
            (0, a.jsxs)(
              "button",
              {
                type: "button",
                onClick: e.onOpen,
                className: "notification-feed-card",
                children: [
                  (0, a.jsxs)("span", {
                    className: "notification-feed-icon",
                    children: [
                      (0, a.jsx)(tK, { size: 16 }),
                      e.unread &&
                        (0, a.jsx)("span", {
                          className: "notification-feed-dot",
                          "aria-label": "Unread",
                        }),
                    ],
                  }),
                  (0, a.jsxs)("span", {
                    className: "notification-feed-copy",
                    children: [
                      (0, a.jsx)("strong", { children: e.title }),
                      (0, a.jsx)("span", { children: e.message }),
                      (0, a.jsx)("small", { children: e.time }),
                    ],
                  }),
                ],
              },
              e.id,
            ),
          ),
          !e.length &&
            (0, a.jsx)("p", {
              className: "notification-feed-empty",
              children: "You’re all caught up. New updates will appear here.",
            }),
        ],
      });
    }
    let tZ = {
      name: "pencil",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu",
          },
        ],
        ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
      ],
    };
    tZ.node;
    let t0 = (0, tC.f)(tZ),
      t1 = {
        name: "trash",
        size: 24,
        node: [
          ["path", { d: "M10 11v6", key: "nco0om" }],
          ["path", { d: "M14 11v6", key: "outv1u" }],
          ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
          ["path", { d: "M3 6h18", key: "d0wm0j" }],
          ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
        ],
        aliases: ["trash-2"],
      };
    t1.node;
    let t2 = (0, tC.f)(t1);
    var t5 = e.i(211899);
    let t3 = [
        "Fuel",
        "Maintenance",
        "Repairs",
        "Parts & accessories",
        "Registration & insurance",
        "Parking & tolls",
        "Other",
      ],
      t4 = (e) => new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(e),
      t6 = (e) => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`,
      t7 = () => `${t6(new Date())}-${String(new Date().getDate()).padStart(2, "0")}`,
      t8 = () => ({
        title: "",
        amount: 0,
        date: t7(),
        category: "Fuel",
        motorcycle: "",
        payment: "Cash",
        notes: "",
      });
    function t9({ motorcycles: e }) {
      let [t, s] = (0, i.useState)(() => {
          try {
            let e = JSON.parse(localStorage.getItem("motofix-rider-expenses-v1") || "null");
            return e && Array.isArray(e.expenses) && "number" == typeof e.budget
              ? e
              : { expenses: [], budget: 0 };
          } catch {
            return { expenses: [], budget: 0 };
          }
        }),
        [r, n] = (0, i.useState)(!1);
      (0, i.useEffect)(() => {
        try {
          (localStorage.setItem("motofix-rider-expenses-v1", JSON.stringify(t)), n(!1));
        } catch {
          n(!0);
        }
      }, [t]);
      let [o, l] = (0, i.useState)(t6(new Date())),
        [c, d] = (0, i.useState)("All"),
        [m, h] = (0, i.useState)(""),
        [p, u] = (0, i.useState)(null),
        [x, f] = (0, i.useState)(!1),
        [g, j] = (0, i.useState)(t8),
        [b, y] = (0, i.useState)(null),
        [v, k] = (0, i.useState)(""),
        w = t.expenses.filter((e) => e.date.startsWith(o)),
        N = w.reduce((e, t) => e + t.amount, 0),
        C = new Date(`${o}-01T12:00:00`);
      C.setMonth(C.getMonth() - 1);
      let S = t.expenses.filter((e) => e.date.startsWith(t6(C))).reduce((e, t) => e + t.amount, 0),
        M = w
          .filter(
            (e) =>
              ("All" === c || c === e.category) &&
              `${e.title} ${e.motorcycle} ${e.notes}`.toLowerCase().includes(m.toLowerCase()),
          )
          .sort((e, t) => t.date.localeCompare(e.date)),
        P = Array.from({ length: 6 }, (e, s) => {
          let a = new Date(`${o}-01T12:00:00`);
          a.setMonth(a.getMonth() - 5 + s);
          let i = t6(a);
          return {
            key: i,
            label: a.toLocaleDateString("en-PH", { month: "short" }),
            total: t.expenses.filter((e) => e.date.startsWith(i)).reduce((e, t) => e + t.amount, 0),
          };
        }),
        A = Math.max(1, ...P.map((e) => e.total));
      return (0, a.jsxs)("section", {
        className: "expense-tracker",
        children: [
          (0, a.jsxs)("div", {
            className: "expense-heading",
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsx)("h2", { children: "Track what you spend and plan ahead" }),
              }),
              (0, a.jsxs)("button", {
                className: "expense-primary",
                onClick: () => {
                  (j({ ...t8(), motorcycle: e[0] || "" }), u(null), f(!0));
                },
                children: [(0, a.jsx)(tO, { size: 18 }), " Add expense"],
              }),
            ],
          }),
          r &&
            (0, a.jsx)("p", {
              role: "alert",
              children: "Browser storage is unavailable. Your changes will not survive a reload.",
            }),
          (0, a.jsxs)("div", {
            className: "expense-toolbar",
            children: [
              (0, a.jsxs)("label", {
                children: [
                  "Viewing month",
                  (0, a.jsx)("input", {
                    "aria-label": "Viewing month",
                    type: "month",
                    value: o,
                    required: !0,
                    onChange: (e) => {
                      /^\d{4}-\d{2}$/.test(e.target.value) && l(e.target.value);
                    },
                  }),
                ],
              }),
              (0, a.jsxs)("button", {
                disabled: !M.length,
                onClick: function () {
                  let e = [
                      [
                        "Date",
                        "Description",
                        "Category",
                        "Motorcycle",
                        "Amount (PHP)",
                        "Payment",
                        "Notes",
                      ],
                      ...M.map((e) => [
                        e.date,
                        e.title,
                        e.category,
                        e.motorcycle,
                        String(e.amount),
                        e.payment,
                        e.notes,
                      ]),
                    ]
                      .map((e) =>
                        e
                          .map((e) => `"${e.replace(/^[=+\-@\t\r]/, "'$&").replace(/"/g, '""')}"`)
                          .join(","),
                      )
                      .join("\r\n"),
                    t = URL.createObjectURL(
                      new Blob(["\uFEFF", e], { type: "text/csv;charset=utf-8;" }),
                    ),
                    s = document.createElement("a");
                  ((s.href = t),
                    (s.download = `MotoFix-expenses-${o}.csv`),
                    s.click(),
                    setTimeout(() => URL.revokeObjectURL(t), 1e3),
                    k("Filtered expenses exported."));
                },
                children: [(0, a.jsx)(tF, { size: 16 }), " Export CSV"],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "expense-stats",
            children: [
              (0, a.jsxs)("article", {
                className: "expense-card",
                children: [
                  (0, a.jsx)("span", { children: "Monthly expenses" }),
                  (0, a.jsx)("strong", { children: t4(N) }),
                  (0, a.jsxs)("small", {
                    children: [w.length, " recorded transaction", 1 === w.length ? "" : "s"],
                  }),
                ],
              }),
              (0, a.jsxs)("article", {
                className: "expense-card",
                children: [
                  (0, a.jsx)("span", { children: "Compared with last month" }),
                  (0, a.jsx)("strong", {
                    children: S ? `${N > S ? "+" : ""}${(((N - S) / S) * 100).toFixed(1)}%` : "—",
                  }),
                  (0, a.jsxs)("small", { children: ["Previous month: ", t4(S)] }),
                ],
              }),
              (0, a.jsxs)("article", {
                className: "expense-card",
                children: [
                  (0, a.jsx)("span", {
                    children: t.budget && N > t.budget ? "Over monthly budget" : "Budget remaining",
                  }),
                  (0, a.jsx)("strong", {
                    children: t.budget ? t4(Math.abs(t.budget - N)) : "Not set",
                  }),
                  (0, a.jsx)("small", {
                    children: t.budget
                      ? `Monthly limit: ${t4(t.budget)}`
                      : "Set a monthly spending goal below",
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "expense-charts",
            children: [
              (0, a.jsxs)("article", {
                className: "expense-card",
                children: [
                  (0, a.jsx)("h3", { children: "Expense trend" }),
                  (0, a.jsx)("p", { children: "Six months ending in the selected month · PHP" }),
                  (0, a.jsx)("div", {
                    className: "expense-chart",
                    role: "img",
                    "aria-label": P.map((e) => `${e.key}: ${t4(e.total)}`).join("; "),
                    children: P.map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "expense-bar-column",
                          children: [
                            (0, a.jsx)("small", { children: t4(e.total) }),
                            (0, a.jsx)("div", {
                              className: "expense-bar-track",
                              children: (0, a.jsx)("div", {
                                className: "expense-bar",
                                style: { height: `${(e.total / A) * 100}%` },
                              }),
                            }),
                            (0, a.jsx)("span", { children: e.label }),
                          ],
                        },
                        e.key,
                      ),
                    ),
                  }),
                  !P.some((e) => e.total) &&
                    (0, a.jsx)("p", {
                      children: "Add your first expense to start building your chart.",
                    }),
                ],
              }),
              (0, a.jsxs)("article", {
                className: "expense-card",
                children: [
                  (0, a.jsx)("h3", { children: "Spending breakdown" }),
                  (0, a.jsx)("p", { children: "By category · selected month" }),
                  (0, a.jsx)("div", {
                    className: "expense-breakdown",
                    children: t3.map((e) => {
                      let t = w.filter((t) => t.category === e).reduce((e, t) => e + t.amount, 0);
                      return (0, a.jsxs)(
                        "div",
                        {
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("span", { children: e }),
                                (0, a.jsx)("b", { children: t4(t) }),
                              ],
                            }),
                            (0, a.jsx)("progress", {
                              "aria-label": `${e} share of spending`,
                              max: N || 1,
                              value: t,
                            }),
                          ],
                        },
                        e,
                      );
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("article", {
            className: "expense-card",
            children: [
              (0, a.jsxs)("div", {
                className: "expense-heading",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", { children: "Monthly budget" }),
                      (0, a.jsx)("p", {
                        children:
                          "One recurring monthly goal. Change it anytime; enter 0 to remove it.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("form", {
                    className: "expense-budget",
                    onSubmit: (e) => {
                      e.preventDefault();
                      let t = Number(new FormData(e.currentTarget).get("budget"));
                      Number.isFinite(t) &&
                        t >= 0 &&
                        (s((e) => ({ ...e, budget: t })), k("Monthly budget updated."));
                    },
                    children: [
                      (0, a.jsxs)("label", {
                        children: [
                          "Budget (PHP)",
                          (0, a.jsx)(
                            "input",
                            {
                              name: "budget",
                              type: "number",
                              min: "0",
                              max: "100000000",
                              step: "0.01",
                              defaultValue: t.budget,
                              required: !0,
                            },
                            t.budget,
                          ),
                        ],
                      }),
                      (0, a.jsx)("button", { type: "submit", children: "Save budget" }),
                    ],
                  }),
                ],
              }),
              t.budget > 0 &&
                (0, a.jsx)("progress", {
                  "aria-label": "Monthly budget used",
                  max: t.budget,
                  value: N,
                }),
            ],
          }),
          x &&
            (0, a.jsxs)("article", {
              className: "expense-card expense-form-card",
              children: [
                (0, a.jsxs)("div", {
                  className: "expense-heading",
                  children: [
                    (0, a.jsx)("h3", { children: p ? "Edit expense" : "New expense" }),
                    (0, a.jsx)("button", {
                      "aria-label": "Close expense form",
                      onClick: () => f(!1),
                      children: (0, a.jsx)(tP.X, { size: 18 }),
                    }),
                  ],
                }),
                (0, a.jsxs)("form", {
                  onSubmit: function (e) {
                    if ((e.preventDefault(), !Number.isFinite(g.amount) || g.amount <= 0)) return;
                    let t = {
                      ...g,
                      title: g.title.trim(),
                      amount: Math.round(100 * g.amount) / 100,
                      id: p || crypto.randomUUID(),
                    };
                    t.title &&
                      (s((e) => ({
                        ...e,
                        expenses: p
                          ? e.expenses.map((e) => (e.id === p ? t : e))
                          : [t, ...e.expenses],
                      })),
                      f(!1),
                      k(p ? "Expense updated." : "Expense added."));
                  },
                  className: "expense-form",
                  children: [
                    (0, a.jsxs)("label", {
                      children: [
                        "Description",
                        (0, a.jsx)("input", {
                          autoFocus: !0,
                          required: !0,
                          maxLength: 100,
                          value: g.title,
                          placeholder: "e.g. Fuel refill",
                          onChange: (e) => j({ ...g, title: e.target.value }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("label", {
                      children: [
                        "Amount (PHP)",
                        (0, a.jsx)("input", {
                          type: "number",
                          min: "0.01",
                          max: "100000000",
                          step: "0.01",
                          required: !0,
                          value: g.amount || "",
                          onChange: (e) => j({ ...g, amount: Number(e.target.value) }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("label", {
                      children: [
                        "Date",
                        (0, a.jsx)("input", {
                          type: "date",
                          required: !0,
                          max: t7(),
                          value: g.date,
                          onChange: (e) => j({ ...g, date: e.target.value }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("label", {
                      children: [
                        "Category",
                        (0, a.jsx)("select", {
                          value: g.category,
                          onChange: (e) => j({ ...g, category: e.target.value }),
                          children: t3.map((e) => (0, a.jsx)("option", { children: e }, e)),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("label", {
                      children: [
                        "Motorcycle",
                        (0, a.jsxs)("select", {
                          value: g.motorcycle,
                          onChange: (e) => j({ ...g, motorcycle: e.target.value }),
                          children: [
                            (0, a.jsx)("option", {
                              value: "",
                              children: "General / other motorcycle",
                            }),
                            Array.from(new Set([...e, g.motorcycle].filter(Boolean))).map((e) =>
                              (0, a.jsx)("option", { children: e }, e),
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("label", {
                      children: [
                        "Payment method",
                        (0, a.jsx)("select", {
                          value: g.payment,
                          onChange: (e) => j({ ...g, payment: e.target.value }),
                          children: [
                            "Cash",
                            "GCash",
                            "Maya",
                            "MariBank",
                            "PayPal",
                            "Visa",
                            "Bank transfer",
                            "Other",
                          ].map((e) => (0, a.jsx)("option", { children: e }, e)),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("label", {
                      className: "expense-full",
                      children: [
                        "Notes (optional)",
                        (0, a.jsx)("textarea", {
                          maxLength: 500,
                          value: g.notes,
                          onChange: (e) => j({ ...g, notes: e.target.value }),
                          placeholder: "Shop, receipt reference, or other details",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "expense-actions expense-full",
                      children: [
                        (0, a.jsx)("button", {
                          type: "submit",
                          className: "expense-primary",
                          children: "Save expense",
                        }),
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: () => f(!1),
                          children: "Cancel",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          (0, a.jsxs)("article", {
            className: "expense-card",
            children: [
              (0, a.jsxs)("div", {
                className: "expense-heading",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", { children: "Expense history" }),
                      (0, a.jsxs)("p", {
                        children: [
                          M.length,
                          " results ·",
                          " ",
                          t4(M.reduce((e, t) => e + t.amount, 0)),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "expense-filters",
                    children: [
                      (0, a.jsxs)("label", {
                        children: [
                          "Search",
                          (0, a.jsx)("input", {
                            type: "search",
                            placeholder: "Description or motorcycle",
                            value: m,
                            onChange: (e) => h(e.target.value),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("label", {
                        children: [
                          "Category",
                          (0, a.jsxs)("select", {
                            value: c,
                            onChange: (e) => d(e.target.value),
                            children: [
                              (0, a.jsx)("option", { children: "All" }),
                              t3.map((e) => (0, a.jsx)("option", { children: e }, e)),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              M.length
                ? (0, a.jsx)("ul", {
                    className: "expense-list",
                    children: M.map((e) =>
                      (0, a.jsxs)(
                        "li",
                        {
                          children: [
                            (0, a.jsxs)("div", {
                              className: "expense-entry",
                              children: [
                                (0, a.jsx)("strong", { children: e.title }),
                                (0, a.jsxs)("span", {
                                  children: [
                                    new Date(`${e.date}T12:00:00`).toLocaleDateString("en-PH", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    }),
                                    " ",
                                    "· ",
                                    e.category,
                                    " · ",
                                    e.payment,
                                  ],
                                }),
                                e.motorcycle && (0, a.jsx)("small", { children: e.motorcycle }),
                                e.notes && (0, a.jsx)("p", { children: e.notes }),
                              ],
                            }),
                            (0, a.jsx)("b", { children: t4(e.amount) }),
                            (0, a.jsxs)("div", {
                              className: "expense-actions",
                              children: [
                                (0, a.jsx)("button", {
                                  "aria-label": `Edit ${e.title}`,
                                  onClick: () => {
                                    (j(e), u(e.id), f(!0));
                                  },
                                  children: (0, a.jsx)(t0, { size: 16 }),
                                }),
                                (0, a.jsx)("button", {
                                  "aria-label": `Delete ${e.title}`,
                                  onClick: () => y(e.id),
                                  children: (0, a.jsx)(t2, { size: 16 }),
                                }),
                              ],
                            }),
                            b === e.id &&
                              (0, a.jsxs)("div", {
                                className: "expense-delete",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Delete this expense permanently?",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      (s((t) => ({
                                        ...t,
                                        expenses: t.expenses.filter((t) => t.id !== e.id),
                                      })),
                                        y(null),
                                        k("Expense deleted."));
                                    },
                                    children: "Delete expense",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => y(null),
                                    children: "Keep expense",
                                  }),
                                ],
                              }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  })
                : (0, a.jsxs)("div", {
                    className: "expense-empty",
                    children: [
                      (0, a.jsx)(t5.f, { size: 32 }),
                      (0, a.jsx)("h3", { children: "No expenses found" }),
                      (0, a.jsx)("p", {
                        children: w.length
                          ? "Try a different search or category."
                          : "Add an expense or select another month to see your spending.",
                      }),
                    ],
                  }),
            ],
          }),
          (0, a.jsx)("p", { role: "status", className: "expense-status", children: v }),
        ],
      });
    }
    let se = { name: "check", size: 24, node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]] };
    se.node;
    let st = (0, tC.f)(se);
    var ss = e.i(395732);
    let sa = {
      name: "credit-card",
      size: 24,
      node: [
        ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
        ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
        ["path", { d: "M6 14h2", key: "mk7k0u" }],
      ],
    };
    sa.node;
    let si = (0, tC.f)(sa),
      sr = {
        name: "smartphone",
        size: 24,
        node: [
          ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
          ["path", { d: "M12 18h.01", key: "mhygvu" }],
        ],
      };
    sr.node;
    let sn = (0, tC.f)(sr),
      so = "motofix-parts-orders-v1",
      sl = [
        {
          id: "P-01",
          name: "Motul 10W-40 Oil",
          brand: "Motul",
          category: "Engine oil",
          compatibility: "All 4-stroke motorcycles",
          quantity: 18,
          price: 450,
          description: "Premium 4-stroke engine oil, 1 liter.",
          photo: "",
          status: "In Stock",
        },
        {
          id: "P-02",
          name: "Front Brake Pads",
          brand: "Bendix",
          category: "Brakes",
          compatibility: "Honda Click 125i, Yamaha NMAX",
          quantity: 3,
          price: 650,
          description: "High-performance ceramic brake pads.",
          photo: "",
          status: "Low Stock",
        },
        {
          id: "P-03",
          name: "NGK Spark Plug",
          brand: "NGK",
          category: "Engine",
          compatibility: "Suzuki Raider R150, Honda Click",
          quantity: 4,
          price: 280,
          description: "Reliable ignition and smoother performance.",
          photo: "",
          status: "Low Stock",
        },
        {
          id: "P-04",
          name: "Michelin City Grip Tire",
          brand: "Michelin",
          category: "Tires",
          compatibility: "Yamaha NMAX 155",
          quantity: 8,
          price: 2200,
          description: "All-weather scooter tire.",
          photo: "",
          status: "In Stock",
        },
      ];
    function sc() {
      try {
        return JSON.parse(localStorage.getItem(so) || "[]");
      } catch {
        return [];
      }
    }
    function sd(e) {
      (localStorage.setItem(so, JSON.stringify(e)),
        window.dispatchEvent(new Event("motofix-commerce")));
    }
    function sm() {
      let e = {};
      try {
        e = JSON.parse(localStorage.getItem("motofix-owner-v1") || "{}");
      } catch {}
      let t = sc().filter((t) => !e.commerceApplied?.includes(t.id));
      return {
        shop: e.profile?.name || "MotoHub Service Center",
        address: e.profile?.address || "124 Street, New Visayas, Panabo City",
        parts: (e.parts || sl).map((e) => ({
          ...e,
          quantity: Math.max(
            0,
            e.quantity - t.filter((t) => t.partId === e.id).reduce((e, t) => e + t.quantity, 0),
          ),
        })),
      };
    }
    function sh() {
      let [, e] = (0, i.useState)(0);
      return (
        (0, i.useEffect)(() => {
          let t = () => e((e) => e + 1);
          return (
            window.addEventListener("storage", t),
            window.addEventListener("motofix-commerce", t),
            window.addEventListener("motofix-catalog", t),
            () => {
              (window.removeEventListener("storage", t),
                window.removeEventListener("motofix-commerce", t),
                window.removeEventListener("motofix-catalog", t));
            }
          );
        }, []),
        sc()
      );
    }
    let sp = (e) =>
      new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(e);
    function su({
      method: e,
      amount: t,
      shop: s,
      item: r,
      onCancel: n,
      onPay: o,
      subscription: l = !1,
      transactionFee: c = 2,
      billing: d,
      accountRole: m = "rider",
    }) {
      let h = (0, i.useRef)(null),
        p =
          d ||
          ("owner" === m
            ? { ...tU("motofix-owner-v1", {}).profile, ...tU("motofix-owner-account", {}) }
            : tU("motofix-profile", {}));
      (0, i.useEffect)(() => {
        let e = document.activeElement,
          t = h.current;
        t?.showModal();
        let s = document.body.style.overflow;
        return (
          (document.body.style.overflow = "hidden"),
          () => {
            (t?.close(), (document.body.style.overflow = s), e?.focus());
          }
        );
      }, []);
      let [u, x] = (0, i.useState)("details"),
        [f, g] = (0, i.useState)("Success"),
        [j, b] = (0, i.useState)(""),
        [y, v] = (0, i.useState)(""),
        [k, w] = (0, i.useState)(!1),
        N = (0, i.useRef)(o);
      N.current = o;
      let C = "Visa" === e,
        S = l ? 0 : Math.max(0, c);
      return (
        (0, i.useEffect)(() => {
          if ("processing" !== u) return;
          let e = setTimeout(() => {
            "Failed" === f ? x("failed") : N.current() || x("order-error");
          }, 1400);
          return () => clearTimeout(e);
        }, [u, f]),
        (0, tk.createPortal)(
          (0, a.jsx)("dialog", {
            ref: h,
            className: "payment-checkout-dialog",
            "aria-label": "MotoFix checkout",
            onCancel: (e) => {
              (e.preventDefault(), "processing" !== u && n());
            },
            children: (0, a.jsxs)("section", {
              className: "payment-sim",
              "aria-label": "Simulated payment checkout",
              children: [
                (0, a.jsxs)("div", {
                  className: "payment-demo-banner",
                  children: [(0, a.jsx)(tB.f, { size: 17 }), " MOTOFIX CHECKOUT · No real payment"],
                }),
                (0, a.jsxs)("div", {
                  className: "payment-layout",
                  children: [
                    (0, a.jsxs)("aside", {
                      className: "payment-order",
                      children: [
                        (0, a.jsxs)("button", {
                          type: "button",
                          onClick: n,
                          disabled: "processing" === u,
                          children: [(0, a.jsx)(ss.f, { size: 16 }), " Cancel"],
                        }),
                        (0, a.jsx)("h2", { children: s }),
                        !l && (0, a.jsx)("p", { children: r }),
                        (0, a.jsx)("strong", { className: "payment-amount", children: sp(t) }),
                        (0, a.jsxs)("dl", {
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("dt", {
                                  children: l ? `${r} Subscription` : "Motor parts",
                                }),
                                (0, a.jsx)("dd", { children: sp(l ? t : t - S) }),
                              ],
                            }),
                            !l &&
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("dt", { children: "MotoFix transaction fee" }),
                                  (0, a.jsx)("dd", { children: sp(S) }),
                                ],
                              }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("dt", { children: "Total" }),
                                (0, a.jsx)("dd", { children: sp(t) }),
                              ],
                            }),
                          ],
                        }),
                        !l &&
                          S > 0 &&
                          (0, a.jsx)("p", {
                            children:
                              "The ₱2 fee is for the MotoFix development team. This is a simulation; no funds are transferred.",
                          }),
                        !l &&
                          0 === S &&
                          (0, a.jsx)("p", {
                            children:
                              "Your active rider subscription waives the MotoFix transaction fee. This is a simulation; no funds are transferred.",
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "payment-surface",
                      children: [
                        (0, a.jsx)("ol", {
                          className: "payment-steps",
                          "aria-label": "Payment progress",
                          children: ["Details", "Authorize", "Result"].map((e, t) =>
                            (0, a.jsxs)(
                              "li",
                              {
                                "aria-current":
                                  ("details" === u ? 0 : "authorize" === u ? 1 : 2) === t
                                    ? "step"
                                    : void 0,
                                children: [t + 1, ". ", e],
                              },
                              e,
                            ),
                          ),
                        }),
                        "details" === u &&
                          (0, a.jsxs)("form", {
                            onSubmit: (e) => {
                              (e.preventDefault(), b(""), x("authorize"));
                            },
                            children: [
                              (0, a.jsxs)("span", {
                                className: "payment-method",
                                children: [
                                  C ? (0, a.jsx)(si, { size: 23 }) : (0, a.jsx)(sn, { size: 23 }),
                                  e,
                                ],
                              }),
                              (0, a.jsx)("h2", { children: "Payment details" }),
                              (0, a.jsxs)("p", {
                                children: [
                                  "Review your account details and complete any missing billing information. Use only the displayed test ",
                                  C ? "Visa card" : "payment",
                                  " and verification values; no real payment is processed.",
                                ],
                              }),
                              (0, a.jsxs)("fieldset", {
                                children: [
                                  (0, a.jsx)("legend", { children: "Billing information" }),
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Full name",
                                      (0, a.jsx)("input", {
                                        required: !0,
                                        autoComplete: "off",
                                        defaultValue: p.name || "",
                                        placeholder: "Full name",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Email address",
                                      (0, a.jsx)("input", {
                                        required: !0,
                                        type: "email",
                                        autoComplete: "off",
                                        defaultValue: p.email || "",
                                        placeholder: "Email address",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Mobile number",
                                      (0, a.jsx)("input", {
                                        required: !0,
                                        type: "tel",
                                        autoComplete: "off",
                                        inputMode: "numeric",
                                        defaultValue: p.phone || "",
                                        placeholder: "Mobile number",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Billing address",
                                      (0, a.jsx)("input", {
                                        required: !0,
                                        autoComplete: "off",
                                        defaultValue: p.address || "",
                                        placeholder: "Billing address",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "payment-fields",
                                    children: [
                                      (0, a.jsxs)("label", {
                                        children: [
                                          "City",
                                          (0, a.jsx)("input", {
                                            required: !0,
                                            autoComplete: "off",
                                            defaultValue: p.city || "",
                                            placeholder: "City",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("label", {
                                        children: [
                                          "Postal code",
                                          (0, a.jsx)("input", {
                                            required: !0,
                                            autoComplete: "off",
                                            inputMode: "numeric",
                                            defaultValue: p.postalCode || "",
                                            placeholder: "Postal code",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Country",
                                      (0, a.jsx)("select", {
                                        "aria-label": "Billing country",
                                        children: (0, a.jsx)("option", { children: "Philippines" }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              C &&
                                (0, a.jsxs)("fieldset", {
                                  children: [
                                    (0, a.jsx)("legend", { children: "Test Visa details" }),
                                    (0, a.jsx)("p", {
                                      children:
                                        "Only the displayed test Visa values are accepted. These are not sent to a payment provider.",
                                    }),
                                    (0, a.jsxs)("label", {
                                      children: [
                                        "Cardholder name",
                                        (0, a.jsx)("input", {
                                          required: !0,
                                          autoComplete: "off",
                                          defaultValue: p.name || "",
                                          placeholder: "Full name",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("label", {
                                      children: [
                                        "Visa number",
                                        (0, a.jsx)("input", {
                                          required: !0,
                                          inputMode: "numeric",
                                          autoComplete: "off",
                                          placeholder: "4242 4242 4242 4242",
                                          pattern: "4242 ?4242 ?4242 ?4242",
                                          title: "Use 4242 4242 4242 4242 only",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "payment-fields",
                                      children: [
                                        (0, a.jsxs)("label", {
                                          children: [
                                            "Expiry (MM/YY)",
                                            (0, a.jsx)("input", {
                                              required: !0,
                                              autoComplete: "off",
                                              placeholder: "12/30",
                                              pattern: "12/30",
                                              title: "Use 12/30",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("label", {
                                          children: [
                                            "Test CVC",
                                            (0, a.jsx)("input", {
                                              required: !0,
                                              autoComplete: "off",
                                              type: "password",
                                              inputMode: "numeric",
                                              placeholder: "123",
                                              pattern: "123",
                                              maxLength: 3,
                                              title: "Use test CVC 123 only",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, a.jsxs)("label", {
                                children: [
                                  "Simulation outcome",
                                  (0, a.jsxs)("select", {
                                    value: f,
                                    onChange: (e) => g(e.target.value),
                                    children: [
                                      (0, a.jsx)("option", { children: "Success" }),
                                      (0, a.jsx)("option", { children: "Failed" }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                className: "payment-submit",
                                type: "submit",
                                children: ["Continue to ", C ? "Visa verification" : e],
                              }),
                            ],
                          }),
                        "authorize" === u &&
                          (0, a.jsxs)("form", {
                            onSubmit: (e) => {
                              (e.preventDefault(), "123456" !== y)
                                ? b("Enter the displayed test code: 123456.")
                                : (b(""), x("processing"));
                            },
                            children: [
                              (0, a.jsxs)("span", {
                                className: "payment-method",
                                children: [
                                  C ? (0, a.jsx)(tB.f, { size: 24 }) : (0, a.jsx)(sn, { size: 24 }),
                                  C ? "Visa verification" : `${e} \xb7 Demo authorization`,
                                ],
                              }),
                              (0, a.jsx)("h2", {
                                children: C ? "Verify your test payment" : `Authorize with ${e}`,
                              }),
                              C &&
                                (0, a.jsx)("p", {
                                  children:
                                    "This simulates an issuing bank’s 3-D Secure challenge.",
                                }),
                              (0, a.jsxs)("div", {
                                className: "payment-test-note",
                                children: [
                                  (0, a.jsx)("strong", { children: "Test account: 0917 ••• 4567" }),
                                  (0, a.jsxs)("p", {
                                    children: [
                                      "Use demo verification code ",
                                      (0, a.jsx)("b", { children: "123456" }),
                                      ". Never enter a real OTP, wallet PIN, or password here.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("label", {
                                children: [
                                  "Demo verification code",
                                  (0, a.jsx)("input", {
                                    autoFocus: !0,
                                    required: !0,
                                    inputMode: "numeric",
                                    autoComplete: "off",
                                    pattern: "[0-9]{6}",
                                    maxLength: 6,
                                    placeholder: "123456",
                                    value: y,
                                    onChange: (e) => v(e.target.value.replace(/\D/g, "")),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("button", {
                                className: "payment-secondary",
                                type: "button",
                                onClick: () => {
                                  (v("123456"), b(""));
                                },
                                children: "Use test code 123456",
                              }),
                              (0, a.jsxs)("dl", {
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("dt", { children: "Merchant" }),
                                      (0, a.jsx)("dd", { children: l ? "MotoFix" : s }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("dt", {
                                        children: l
                                          ? "Subscription total"
                                          : S
                                            ? "Total including ₱2 fee"
                                            : "Total · fee waived",
                                      }),
                                      (0, a.jsx)("dd", { children: sp(t) }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("label", {
                                className: "payment-consent",
                                children: [
                                  (0, a.jsx)("input", {
                                    type: "checkbox",
                                    required: !0,
                                    checked: k,
                                    onChange: (e) => w(e.target.checked),
                                  }),
                                  " ",
                                  "I authorize this simulated payment. No money will be charged.",
                                ],
                              }),
                              j && (0, a.jsx)("p", { role: "alert", children: j }),
                              (0, a.jsxs)("button", {
                                className: "payment-submit",
                                type: "submit",
                                disabled: !k,
                                children: ["Authorize demo payment · ", sp(t)],
                              }),
                              (0, a.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                  (x("details"), v(""), w(!1));
                                },
                                children: "Back to payment details",
                              }),
                            ],
                          }),
                        "processing" === u &&
                          (0, a.jsxs)("div", {
                            className: "payment-result",
                            role: "status",
                            "aria-live": "polite",
                            children: [
                              (0, a.jsx)("div", { className: "payment-spinner" }),
                              (0, a.jsx)("h2", { children: "Processing demo payment" }),
                              (0, a.jsx)("p", {
                                children: "Simulating authorization and returning to MotoFix…",
                              }),
                              (0, a.jsx)("p", { children: "No actual payment request is sent." }),
                            ],
                          }),
                        ("failed" === u || "order-error" === u) &&
                          (0, a.jsxs)("div", {
                            className: "payment-result",
                            role: "alert",
                            children: [
                              (0, a.jsx)(si, { size: 40 }),
                              (0, a.jsx)("h2", {
                                children:
                                  "failed" === u
                                    ? "Demo payment declined"
                                    : "Order could not be completed",
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "failed" === u
                                    ? "The simulated provider declined this attempt. No order was placed, stock deducted, or transaction fee charged."
                                    : "Stock, price, or browser storage changed. No order was completed and no real payment occurred. Return to checkout to review the message.",
                              }),
                              (0, a.jsx)("button", {
                                className: "payment-submit",
                                onClick: () => {
                                  (x("details"), v(""), w(!1));
                                },
                                children: "Try again with test details",
                              }),
                              (0, a.jsx)("button", {
                                onClick: n,
                                children: "Return to order review",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          document.body,
        )
      );
    }
    let sx = ["GCash", "Maya", "MariBank", "PayPal", "Visa"],
      sf = [
        { label: "Monthly", months: 1 },
        { label: "Quarterly", months: 3 },
        { label: "Semi-annually", months: 6 },
        { label: "Annually", months: 12 },
      ],
      sg = { rider: [75, 200, 375, 700], owner: [500, 1350, 2500, 4500] };
    function sj(e) {
      try {
        let t = JSON.parse(localStorage.getItem(e) || "null");
        return {
          expires: Number(t?.expires) || 0,
          plan: "string" == typeof t?.plan ? t.plan : "",
          simulated: !0,
          cancelled: !!t?.cancelled,
        };
      } catch {
        return { expires: 0, plan: "", simulated: !0 };
      }
    }
    function sb(e, t = "local") {
      let [{ key: s, record: a }] = (0, i.useState)(() =>
          (function (e, t) {
            let s = `motofix-subscription-${e}-${encodeURIComponent(t)}-v1`,
              a = sj(s);
            if (a.plan || a.expires || a.cancelled) return { key: s, record: a };
            let i = `motofix-subscription-${e}-v1`,
              r = sj(i);
            if (r.plan || r.expires || r.cancelled)
              try {
                return (
                  localStorage.setItem(s, JSON.stringify(r)),
                  localStorage.removeItem(i),
                  { key: s, record: r }
                );
              } catch {
                return { key: s, record: r };
              }
            return { key: s, record: a };
          })(e, t),
        ),
        [r, n] = (0, i.useState)(a),
        [o, l] = (0, i.useState)(Date.now());
      return (
        (0, i.useEffect)(() => {
          n(sj(s));
          let e = window.setInterval(() => l(Date.now()), 1e3),
            t = () => n(sj(s));
          return (
            window.addEventListener("storage", t),
            () => {
              (clearInterval(e), window.removeEventListener("storage", t));
            }
          );
        }, [s]),
        {
          active: r.expires > o,
          plan: r.plan,
          expiresAt: r.expires,
          cancelled: !0 === r.cancelled,
          activate(e) {
            if (!sf[e]) return !1;
            let t = new Date(Math.max(Date.now(), r.expires)),
              a = t.getDate();
            (t.setDate(1), t.setMonth(t.getMonth() + sf[e].months));
            let i = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
            t.setDate(Math.min(a, i));
            try {
              let a = { expires: t.getTime(), plan: sf[e].label, simulated: !0, cancelled: !1 };
              return (localStorage.setItem(s, JSON.stringify(a)), n(a), l(Date.now()), !0);
            } catch {
              return !1;
            }
          },
          cancel() {
            try {
              let e = { ...r, expires: 0, cancelled: !0 };
              return (localStorage.setItem(s, JSON.stringify(e)), n(e), l(Date.now()), !0);
            } catch {
              return !1;
            }
          },
        }
      );
    }
    function sy({
      role: e,
      billing: t,
      reason: s,
      onClose: r,
      onPaid: n,
      initialPlan: o = 0,
      fixedPlan: l = !1,
    }) {
      let c = (0, i.useRef)(null),
        [d, m] = (0, i.useState)(Math.max(0, Math.min(o, sf.length - 1))),
        [h, p] = (0, i.useState)("GCash"),
        [u, x] = (0, i.useState)(!1),
        [f, g] = (0, i.useState)("");
      return (
        (0, i.useEffect)(() => {
          let e = document.activeElement;
          return (
            c.current?.showModal(),
            () => {
              (c.current?.close(), e?.focus());
            }
          );
        }, []),
        (0, a.jsx)("dialog", {
          ref: c,
          className: "so-dialog subscription-dialog",
          "aria-labelledby": u ? void 0 : "subscription-title",
          "aria-label": u ? "Subscription payment checkout" : void 0,
          onCancel: (e) => {
            (e.preventDefault(), u || r());
          },
          children: u
            ? (0, a.jsx)(su, {
                subscription: !0,
                billing: t,
                accountRole: e,
                method: h,
                amount: sg[e][d],
                shop: "MotoFix Subscription",
                item: sf[d].label,
                onCancel: () => {
                  (x(!1), g("Payment cancelled. Your features remain locked."));
                },
                onPay: () =>
                  !!n(d) ||
                  (x(!1),
                  g("Could not save your demo subscription. Check browser storage and try again."),
                  !1),
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "so-dialog-heading",
                    children: [
                      (0, a.jsx)(tB.f, {}),
                      (0, a.jsx)("h2", {
                        id: "subscription-title",
                        children: "Unlock more Limits",
                      }),
                      (0, a.jsx)("button", {
                        className: "so-button",
                        "aria-label": "Close subscription",
                        onClick: r,
                        children: (0, a.jsx)(tP.X, { size: 20 }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("p", {
                    className: "subscription-benefits",
                    children: [(0, a.jsx)(st, { size: 18 }), s],
                  }),
                  l
                    ? (0, a.jsxs)("p", {
                        className: "subscription-selected-plan",
                        children: [
                          "Selected plan: ",
                          (0, a.jsx)("strong", { children: sf[d].label }),
                          " · ₱",
                          sg[e][d],
                        ],
                      })
                    : (0, a.jsx)("div", {
                        className: "subscription-plans",
                        role: "group",
                        "aria-label": "Subscription plans",
                        children: sf.map((t, s) =>
                          (0, a.jsxs)(
                            "button",
                            {
                              className: `so-button ${d === s ? "so-primary" : ""}`,
                              "aria-pressed": d === s,
                              onClick: () => m(s),
                              children: [
                                (0, a.jsxs)("strong", { children: ["₱", sg[e][s]] }),
                                (0, a.jsx)("span", { children: t.label }),
                              ],
                            },
                            t.label,
                          ),
                        ),
                      }),
                  (0, a.jsxs)("label", {
                    className: "subscription-method",
                    children: [
                      "Payment method",
                      (0, a.jsx)("select", {
                        value: h,
                        onChange: (e) => p(e.target.value),
                        children: sx.map((e) => (0, a.jsx)("option", { children: e }, e)),
                      }),
                    ],
                  }),
                  f && (0, a.jsx)("p", { role: "alert", children: f }),
                  (0, a.jsxs)("button", {
                    className: "so-button so-primary",
                    onClick: () => x(!0),
                    children: ["Continue to payment · ₱", sg[e][d]],
                  }),
                ],
              }),
        })
      );
    }
    let sv = {
      name: "check-check",
      size: 24,
      node: [
        ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
        ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
      ],
    };
    sv.node;
    let sk = (0, tC.f)(sv);
    var sw = e.i(908738),
      sN = e.i(846938);
    function sC({ customer: e, phone: t, initialSearch: s = "", subscriptionActive: r = !1 }) {
      let n = sh(),
        o = sm(),
        [l, c] = (0, i.useState)("Shop parts"),
        [d, m] = (0, i.useState)(s),
        [h, p] = (0, i.useState)("All"),
        [u, x] = (0, i.useState)(null),
        [f, g] = (0, i.useState)(1),
        [j, b] = (0, i.useState)("GCash"),
        [y, v] = (0, i.useState)(!1),
        [k, w] = (0, i.useState)(null),
        [N, C] = (0, i.useState)(""),
        [S, M] = (0, i.useState)(!1),
        P = n.filter((t) => t.customer === e),
        A = "Pay at shop" !== j,
        R = "Pay at shop" === j || r ? 0 : 2;
      function $() {
        C("");
        let s = sm().parts.find((e) => e.id === u?.id);
        if (!s || !Number.isInteger(f) || f < 1 || f > s.quantity)
          return (C("Stock has changed. Choose an available quantity."), !1);
        if (s.price !== u?.price)
          return (
            C(
              "The shop updated this price. Return to parts and review the new price before checkout.",
            ),
            !1
          );
        let a = Math.round(s.price * f * 100) / 100,
          i = {
            id: `MP-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
            partId: s.id,
            name: s.name,
            quantity: f,
            unitPrice: s.price,
            subtotal: a,
            fee: R,
            total: a + R,
            customer: e,
            phone: t,
            shop: o.shop,
            payment: j,
            status: "New",
            created: new Date().toISOString(),
          };
        try {
          return (sd([i, ...sc()]), w(i), x(null), M(!1), !0);
        } catch {
          return (
            C("Browser storage is unavailable. Your order was not saved. Please try again."), !1
          );
        }
      }
      return S && u
        ? (0, a.jsx)("div", {
            className: "commerce",
            children: (0, a.jsx)(su, {
              method: j,
              amount: Math.round(u.price * f * 100) / 100 + R,
              transactionFee: R,
              shop: o.shop,
              item: `${f} \xd7 ${u.name}`,
              onCancel: () => {
                (M(!1),
                  C("Payment was cancelled or left incomplete. No order or fee was created."));
              },
              onPay: $,
            }),
          })
        : (0, a.jsxs)("div", {
            className: "commerce",
            children: [
              (0, a.jsx)("div", {
                className: "commerce-tabs",
                children: ["Shop parts", "My purchases"].map((e) =>
                  (0, a.jsxs)(
                    "button",
                    {
                      "aria-pressed": l === e,
                      onClick: () => {
                        (c(e), x(null), w(null));
                      },
                      children: [e, "My purchases" === e ? ` (${P.length})` : ""],
                    },
                    e,
                  ),
                ),
              }),
              k &&
                (0, a.jsxs)("section", {
                  className: "commerce-card commerce-receipt",
                  role: "status",
                  children: [
                    (0, a.jsx)(sk, { size: 32 }),
                    (0, a.jsx)("h3", { children: "Demo order placed" }),
                    (0, a.jsxs)("p", {
                      children: [
                        k.id,
                        " ·",
                        " ",
                        "Pay at shop" === k.payment
                          ? "Payment due at pickup"
                          : "Simulated payment successful",
                      ],
                    }),
                    (0, a.jsxs)("p", { children: [k.quantity, " × ", k.name] }),
                    (0, a.jsxs)("dl", {
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("dt", { children: "Shop earnings" }),
                            (0, a.jsx)("dd", { children: sp(k.subtotal) }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("dt", { children: "MotoFix development-team fee" }),
                            (0, a.jsx)("dd", { children: sp(k.fee) }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("dt", {
                              children: k.fee ? "Demo total paid" : "Due at shop",
                            }),
                            (0, a.jsx)("dd", { children: sp(k.total) }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      children: [
                        "Pickup at ",
                        k.shop,
                        ". Wait until the shop marks your order ready.",
                      ],
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => {
                        (c("My purchases"), w(null));
                      },
                      children: "View my purchases",
                    }),
                  ],
                }),
              "Shop parts" === l &&
                !u &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "commerce-filters",
                      children: [
                        (0, a.jsxs)("label", {
                          children: [
                            "Find motor parts",
                            (0, a.jsx)("input", {
                              type: "search",
                              placeholder: "Search part, brand, or motorcycle",
                              value: d,
                              onChange: (e) => m(e.target.value),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("label", {
                          children: [
                            "Category",
                            (0, a.jsx)("select", {
                              value: h,
                              onChange: (e) => p(e.target.value),
                              children: ["All", ...new Set(o.parts.map((e) => e.category))].map(
                                (e) => (0, a.jsx)("option", { children: e }, e),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      className: "commerce-shop",
                      children: [(0, a.jsx)(sN.f, { size: 17 }), " ", o.shop, " · Pickup only"],
                    }),
                    (0, a.jsx)("div", {
                      className: "commerce-products",
                      children: o.parts
                        .filter(
                          (e) =>
                            ("All" === h || h === e.category) &&
                            `${e.name} ${e.brand} ${e.compatibility}`
                              .toLowerCase()
                              .includes(d.toLowerCase()),
                        )
                        .map((e) =>
                          (0, a.jsxs)(
                            "article",
                            {
                              className: "commerce-card",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "commerce-product-art",
                                  children: e.photo
                                    ? (0, a.jsx)(eV.default, {
                                        width: 600,
                                        height: 400,
                                        src: e.photo,
                                        alt: e.name,
                                      })
                                    : (0, a.jsx)(sw.f, { size: 48, strokeWidth: 1.3 }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "commerce-product-details",
                                  children: [
                                    (0, a.jsxs)("span", {
                                      className: "commerce-eyebrow",
                                      children: [e.brand, " · ", e.category],
                                    }),
                                    (0, a.jsx)("h3", { children: e.name }),
                                    (0, a.jsx)("p", { children: e.compatibility }),
                                    (0, a.jsx)("p", { children: e.description }),
                                    (0, a.jsxs)("div", {
                                      className: "commerce-row",
                                      children: [
                                        (0, a.jsx)("strong", { children: sp(e.price) }),
                                        (0, a.jsx)("small", {
                                          children: e.quantity
                                            ? `${e.quantity} available`
                                            : "Out of stock",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("button", {
                                  className: "commerce-primary",
                                  disabled: e.quantity < 1 || e.price <= 0,
                                  onClick: () => {
                                    (x(e), g(1), v(!1), C(""), w(null));
                                  },
                                  children: "Buy motor part",
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                    }),
                    !o.parts.some(
                      (e) =>
                        ("All" === h || h === e.category) &&
                        `${e.name} ${e.brand} ${e.compatibility}`
                          .toLowerCase()
                          .includes(d.toLowerCase()),
                    ) &&
                      (0, a.jsxs)("div", {
                        className: "commerce-card",
                        children: [
                          (0, a.jsx)("h3", { children: "No matching parts" }),
                          (0, a.jsx)("p", { children: "Try a different search or category." }),
                        ],
                      }),
                  ],
                }),
              u &&
                (0, a.jsxs)("section", {
                  className: "commerce-card",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "commerce-row",
                      children: [
                        (0, a.jsx)("h3", { children: "Review & checkout" }),
                        (0, a.jsx)("button", { onClick: () => x(null), children: "Back to parts" }),
                      ],
                    }),
                    (0, a.jsxs)("p", { children: [u.name, " · ", sp(u.price), " each"] }),
                    (0, a.jsxs)("div", {
                      className: "commerce-checkout",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("label", {
                              children: [
                                "Quantity",
                                (0, a.jsx)("input", {
                                  type: "number",
                                  min: "1",
                                  max: u.quantity,
                                  step: "1",
                                  value: f,
                                  onChange: (e) => g(Number(e.target.value)),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              children: [
                                "Payment method",
                                (0, a.jsx)("select", {
                                  value: j,
                                  onChange: (e) => {
                                    (b(e.target.value), v(!1));
                                  },
                                  children: [...sx, "Pay at shop"].map((e) =>
                                    (0, a.jsx)("option", { children: e }, e),
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsx)("h3", { children: "Pickup details" }),
                            (0, a.jsxs)("p", { children: [e, " · ", t] }),
                            (0, a.jsxs)("p", {
                              children: [o.shop, (0, a.jsx)("br", {}), o.address],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "commerce-summary",
                          children: [
                            (0, a.jsx)("h3", { children: "Order summary" }),
                            (0, a.jsxs)("dl", {
                              children: [
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("dt", { children: "Parts subtotal" }),
                                    (0, a.jsx)("dd", { children: sp(u.price * f || 0) }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsxs)("dt", {
                                      children: [
                                        "MotoFix transaction fee",
                                        r && 0 === R ? " · waived by subscription" : "",
                                      ],
                                    }),
                                    (0, a.jsx)("dd", { children: sp(R) }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsxs)("dt", {
                                      children: [
                                        "Total",
                                        "Pay at shop" === j ? " due at pickup" : " to pay",
                                      ],
                                    }),
                                    (0, a.jsx)("dd", { children: sp(u.price * f + R || 0) }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              children:
                                "Pay at shop" === j
                                  ? "No MotoFix online transaction fee for pay-at-shop orders."
                                  : r
                                    ? "Your active rider subscription waives the ₱2 MotoFix transaction fee on motorcycle-part purchases."
                                    : "₱2 per successful online order goes to the MotoFix development team. The shop receives the parts subtotal; no fee is deducted from it.",
                            }),
                            (0, a.jsxs)("label", {
                              className: "commerce-consent",
                              children: [
                                (0, a.jsx)("input", {
                                  type: "checkbox",
                                  checked: y,
                                  onChange: (e) => v(e.target.checked),
                                }),
                                " ",
                                "I reviewed the item compatibility, pickup details, total, and fee.",
                              ],
                            }),
                            (0, a.jsx)("button", {
                              className: "commerce-primary",
                              disabled: !y || !Number.isInteger(f) || f < 1 || f > u.quantity,
                              onClick: () => {
                                A ? (C(""), M(!0)) : $();
                              },
                              children: A
                                ? `Continue to payment \xb7 ${sp(u.price * f + R || 0)}`
                                : "Place demo pickup order",
                            }),
                            N && (0, a.jsx)("p", { role: "alert", children: N }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              "My purchases" === l &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("h3", { children: "Your parts orders" }),
                    !P.length &&
                      (0, a.jsxs)("div", {
                        className: "commerce-card",
                        children: [
                          (0, a.jsx)(sw.f, { size: 32 }),
                          (0, a.jsx)("h3", { children: "No purchases yet" }),
                          (0, a.jsx)("p", {
                            children: "Your receipts and pickup updates will appear here.",
                          }),
                        ],
                      }),
                    P.map((e) =>
                      (0, a.jsxs)(
                        "article",
                        {
                          className: "commerce-card",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "commerce-row",
                              children: [
                                (0, a.jsx)("h3", { children: e.name }),
                                (0, a.jsx)("span", {
                                  className: "commerce-badge",
                                  children: e.status,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              children: [
                                e.id,
                                " · ",
                                new Date(e.created).toLocaleString(),
                                " · ",
                                e.shop,
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              children: [
                                e.quantity,
                                " × ",
                                sp(e.unitPrice),
                                " · ",
                                e.payment,
                                " ·",
                                " ",
                                "Pay at shop" === e.payment && "Collected" !== e.status
                                  ? "Due at pickup"
                                  : "Demo paid",
                              ],
                            }),
                            (0, a.jsxs)("dl", {
                              children: [
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("dt", { children: "Parts subtotal" }),
                                    (0, a.jsx)("dd", { children: sp(e.subtotal) }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("dt", { children: "MotoFix fee" }),
                                    (0, a.jsx)("dd", { children: sp(e.fee) }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("dt", { children: "Total" }),
                                    (0, a.jsx)("dd", { children: sp(e.total) }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              children:
                                "Ready for pickup" === e.status
                                  ? "Your shop has marked this order ready. Bring your order reference to pickup."
                                  : "Collected" === e.status
                                    ? "Pickup completed. Thank you for riding with MotoFix."
                                    : "Awaiting shop preparation. Check back for pickup updates.",
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  ],
                }),
            ],
          });
    }
    let sS = {
      name: "locate-fixed",
      size: 24,
      node: [
        ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
        ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
        ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
        ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
        ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ],
    };
    sS.node;
    let sM = (0, tC.f)(sS),
      sP = { name: "minus", size: 24, node: [["path", { d: "M5 12h14", key: "1ays0h" }]] };
    sP.node;
    let sA = (0, tC.f)(sP),
      sR = (e, t) => [e[0] - t[0], e[1] - t[1]],
      s$ = (e, t) => e[0] * t[1] - e[1] * t[0],
      sE = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]),
      sD = (e, t, s) => [e[0] + (t[0] - e[0]) * s, e[1] + (t[1] - e[1]) * s],
      sT = ([e, t]) => [(1568 * e) / 100, (786 * t) / 100],
      sz = ([e, t]) => [(e / 1568) * 100, (t / 786) * 100],
      sI = [
        [
          [359, 0],
          [396, 65],
          [434, 130],
          [474, 198],
          [512, 263],
          [548, 326],
          [564, 353],
          [576, 370],
          [592, 381],
          [623, 392],
          [700, 418],
          [777, 444],
          [812, 456],
        ],
        [
          [1012, 0],
          [970, 100],
          [925, 200],
          [881, 300],
          [838, 400],
          [812, 456],
          [784, 520],
          [748, 600],
          [731, 638],
          [704, 700],
          [677, 760],
          [665, 786],
        ],
        [
          [0, 281],
          [96, 354],
          [177, 396],
          [235, 424],
          [365, 480],
          [478, 529],
          [594, 579],
          [731, 638],
          [855, 689],
          [1034, 766],
          [1080, 786],
        ],
        [
          [812, 456],
          [900, 477],
          [1e3, 521],
          [1100, 565],
          [1200, 609],
          [1300, 654],
          [1400, 700],
          [1531, 760],
          [1568, 778],
        ],
        [
          [748, 600],
          [792, 584],
          [831, 569],
          [855, 545],
          [887, 606],
          [875, 628],
          [855, 689],
        ],
        [
          [731, 638],
          [774, 634],
          [813, 610],
          [831, 569],
        ],
        [
          [855, 689],
          [873, 643],
          [895, 605],
          [920, 583],
          [980, 551],
          [1040, 519],
          [1095, 502],
          [1168, 482],
          [1275, 454],
        ],
        [
          [848, 377],
          [904, 401],
          [956, 423],
          [1004, 444],
          [1033, 481],
          [1074, 536],
          [1062, 567],
        ],
        [
          [1074, 536],
          [1160, 526],
          [1220, 513],
          [1290, 501],
          [1331, 504],
        ],
        [
          [1270, 320],
          [1260, 350],
          [1252, 389],
          [1255, 430],
          [1259, 471],
          [1275, 520],
          [1276, 551],
          [1260, 597],
          [1240, 648],
          [1215, 702],
          [1198, 760],
        ],
        [
          [881, 300],
          [920, 323],
          [964, 326],
          [1024, 321],
          [1140, 320],
          [1270, 320],
          [1375, 323],
          [1497, 329],
        ],
        [
          [838, 400],
          [862, 345],
          [887, 290],
          [914, 234],
          [935, 190],
        ],
        [
          [900, 477],
          [925, 421],
          [951, 363],
          [978, 305],
          [1003, 244],
        ],
        [
          [855, 545],
          [879, 488],
          [900, 438],
          [925, 381],
        ],
        [
          [1004, 444],
          [1001, 398],
          [1001, 350],
          [1003, 324],
          [1e3, 275],
          [996, 221],
          [994, 145],
          [974, 127],
        ],
        [
          [935, 190],
          [982, 212],
          [1003, 244],
        ],
        [
          [377, 35],
          [382, 101],
          [377, 165],
          [374, 235],
          [369, 301],
          [366, 355],
          [365, 414],
          [365, 480],
          [364, 550],
          [365, 625],
          [360, 691],
          [361, 756],
        ],
        [
          [374, 235],
          [425, 236],
          [497, 232],
        ],
        [
          [474, 198],
          [518, 174],
          [553, 155],
          [581, 155],
        ],
        [
          [497, 232],
          [535, 231],
          [581, 228],
          [584, 192],
          [581, 155],
          [580, 106],
        ],
        [
          [512, 263],
          [546, 264],
          [581, 264],
        ],
        [
          [581, 228],
          [581, 264],
          [578, 299],
          [577, 347],
          [576, 370],
        ],
        [
          [369, 301],
          [418, 299],
          [473, 297],
          [532, 296],
        ],
        [
          [366, 355],
          [414, 350],
          [465, 347],
          [559, 346],
        ],
        [
          [365, 414],
          [423, 416],
          [479, 417],
          [542, 420],
          [586, 414],
          [650, 413],
          [655, 424],
          [664, 436],
          [681, 431],
          [686, 413],
        ],
        [
          [542, 420],
          [566, 390],
          [576, 386],
          [584, 378],
        ],
        [
          [586, 414],
          [592, 469],
          [632, 466],
          [683, 463],
          [724, 460],
          [748, 402],
        ],
        [
          [592, 429],
          [633, 428],
          [632, 466],
        ],
        [
          [600, 449],
          [632, 448],
        ],
        [
          [235, 424],
          [249, 436],
          [250, 488],
          [280, 489],
          [282, 511],
          [320, 512],
          [365, 513],
        ],
        [
          [282, 511],
          [280, 543],
          [263, 565],
          [236, 580],
          [303, 579],
          [365, 580],
        ],
        [
          [0, 770],
          [80, 744],
          [144, 784],
          [226, 765],
          [297, 760],
          [361, 756],
          [390, 751],
          [437, 720],
          [480, 694],
          [544, 696],
          [608, 696],
          [651, 690],
          [678, 685],
          [704, 700],
        ],
        [
          [365, 625],
          [421, 626],
          [479, 628],
          [545, 631],
          [597, 638],
          [650, 659],
          [697, 675],
        ],
        [
          [544, 696],
          [548, 660],
          [568, 630],
          [580, 608],
          [594, 579],
        ],
        [
          [831, 569],
          [842, 539],
          [860, 496],
          [879, 453],
          [900, 405],
        ],
        [
          [1331, 504],
          [1340, 459],
          [1350, 410],
          [1356, 358],
          [1358, 323],
        ],
        [
          [1331, 504],
          [1331, 551],
          [1326, 600],
          [1314, 660],
        ],
        [
          [1160, 526],
          [1162, 566],
          [1168, 595],
        ],
      ].flatMap((e) => e.slice(1).map((t, s) => [e[s], t])),
      sF = sI.map(() => [0, 1]);
    for (let e = 0; e < sI.length; e++) {
      let [t, s] = sI[e],
        a = sR(s, t);
      for (let s = e + 1; s < sI.length; s++) {
        let [i, r] = sI[s],
          n = sR(r, i),
          o = s$(a, n);
        if (1e-8 > Math.abs(o)) continue;
        let l = s$(sR(i, t), n) / o,
          c = s$(sR(i, t), a) / o;
        l >= 0 && l <= 1 && c >= 0 && c <= 1 && (sF[e].push(l), sF[s].push(c));
      }
    }
    let sL = [],
      sO = new Map(),
      sB = [];
    function sU(e) {
      let t = { point: sL[0], edge: sB[0], distance: 1 / 0 };
      for (let s of sB) {
        let [a, i] = s.map((e) => sL[e]),
          r = sR(i, a),
          n = sR(e, a),
          o = sD(
            a,
            i,
            Math.max(0, Math.min(1, (n[0] * r[0] + n[1] * r[1]) / (r[0] ** 2 + r[1] ** 2))),
          ),
          l = sE(e, o);
        l < t.distance && (t = { point: o, edge: s, distance: l });
      }
      return t;
    }
    sI.forEach(([e, t], s) => {
      let a = [...new Set(sF[s])]
        .sort((e, t) => e - t)
        .map((s) => {
          var a;
          let i, r;
          return (
            (i = (a = sD(e, t, s)).map((e) => e.toFixed(4)).join(",")),
            void 0 === (r = sO.get(i)) && ((r = sL.length), sO.set(i, r), sL.push(a)),
            r
          );
        });
      a.slice(1).forEach((e, t) => {
        a[t] !== e && sB.push([a[t], e]);
      });
    });
    let sq = "/panabo-demo-map.png",
      sH = [
        [20, 17, "NEW VISAYAS"],
        [18, 34, "Davao del Norte State College"],
        [42, 66, "Panabo City Hall"],
        [59, 70, "Panabo Public Market"],
        [55, 90, "Freedom Park"],
        [78, 92, "NEW PANDAN"],
      ],
      sV = [34, 32],
      sW = [-1, 0, 1].flatMap((e) =>
        [-1, 0, 1]
          .filter((t) => 0 !== e || 0 !== t)
          .map((t) => ({
            id: `${t}:${e}`,
            transform: `translate(${2e3 * (1 === t)} ${1e3 * (1 === e)}) scale(${0 === t ? 1 : -1} ${0 === e ? 1 : -1})`,
          })),
      ),
      sY = (e) => e.map(([e, t]) => `${10 * e},${5 * t}`).join(" ");
    function sG(e) {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(e)}&travelmode=driving`;
    }
    function s_({
      selected: e,
      onSelect: t,
      shops: s,
      route: r = !1,
      started: n = !1,
      explorable: o = !1,
      showHelpText: l = !0,
    }) {
      let c = (0, i.useId)(),
        [d, m] = (0, i.useState)(1),
        [h, p] = (0, i.useState)({ x: 0, y: 0 }),
        [u, x] = (0, i.useState)(!1),
        f = (0, i.useRef)(null),
        g = (0, i.useRef)(null),
        j = (0, i.useRef)(!1),
        b = e1(),
        y = [...new Map([...eJ, ...b, ...s].map((e) => [e.id, e])).values()],
        v = (e) =>
          e?.mapPosition ||
          b.find((t) => t.id === e?.id)?.mapPosition ||
          eW[e?.id || "motohub"] ||
          eW.motohub,
        k = y.find((t) => t.id === e),
        [w, N] = v(k),
        C = (0, i.useMemo)(
          () =>
            r
              ? (function (e, t) {
                  let s = sU(sT(e)),
                    a = sU(sT(t)),
                    i = [...sL, s.point, a.point],
                    r = sL.length,
                    n = r + 1,
                    o = i.map(() => []);
                  function l(e, t) {
                    let s = sE(i[e], i[t]);
                    (o[e].push({ id: t, cost: s }), o[t].push({ id: e, cost: s }));
                  }
                  (sB.forEach(([e, t]) => l(e, t)),
                    s.edge.forEach((e) => l(r, e)),
                    a.edge.forEach((e) => l(n, e)),
                    s.edge === a.edge && l(r, n));
                  let c = i.map(() => 1 / 0),
                    d = i.map(() => -1),
                    m = new Set();
                  for (c[r] = 0; m.size < i.length;) {
                    let e = -1;
                    for (let t = 0; t < i.length; t++)
                      !m.has(t) && Number.isFinite(c[t]) && (e < 0 || c[t] < c[e]) && (e = t);
                    if (e < 0 || e === n) break;
                    for (let { id: t, cost: s } of (m.add(e), o[e]))
                      c[e] + s < c[t] && ((c[t] = c[e] + s), (d[t] = e));
                  }
                  if (!Number.isFinite(c[n])) return { road: [], access: [] };
                  let h = [];
                  for (let e = n; -1 !== e; e = d[e]) h.unshift(sz(i[e]));
                  return {
                    road: h,
                    access: [
                      [e, sz(s.point)],
                      [sz(a.point), t],
                    ],
                  };
                })(sV, [w, N])
              : null,
          [r, w, N],
        );
      function S() {
        (M(), m(1), p({ x: 0, y: 0 }));
      }
      function M() {
        (g.current && window.clearTimeout(g.current.timer), (g.current = null), x(!1));
      }
      function P(e) {
        let t = f.current?.getBoundingClientRect();
        if (!t) return;
        let s = (o ? 3 : 1) * d,
          a = (t.width * (s - 1)) / 2,
          i = (t.height * (s - 1)) / 2;
        p((t) => {
          let s = "function" == typeof e ? e(t) : e,
            r = Math.max(-a, Math.min(a, s.x)),
            n = Math.max(-i, Math.min(i, s.y));
          return t.x === r && t.y === n ? t : { x: r, y: n };
        });
      }
      return (
        (0, i.useEffect)(
          () => () => {
            g.current && window.clearTimeout(g.current.timer);
          },
          [],
        ),
        (0, i.useEffect)(() => {
          S();
        }, [e, r]),
        (0, i.useEffect)(() => {
          let e = () => P((e) => e);
          e();
          let t = new ResizeObserver(e);
          return (f.current && t.observe(f.current), () => t.disconnect());
        }, [d, o]),
        (0, a.jsxs)("div", {
          className: "mf-map",
          children: [
            (0, a.jsxs)("div", {
              ref: f,
              className: `mf-map-viewport${o ? " is-explorable" : ""}${u ? " is-dragging" : ""}`,
              tabIndex: o ? 0 : void 0,
              role: o ? "region" : void 0,
              "aria-label": "Illustrative Panabo City motor shop map",
              "aria-describedby": l ? c : void 0,
              onKeyDown: (e) => {
                if (!o || e.target !== e.currentTarget) return;
                let t = {
                  ArrowLeft: [80, 0],
                  ArrowRight: [-80, 0],
                  ArrowUp: [0, 80],
                  ArrowDown: [0, -80],
                }[e.key];
                (t && (e.preventDefault(), P({ x: h.x + t[0], y: h.y + t[1] })),
                  "Home" === e.key && (e.preventDefault(), S()));
              },
              onPointerDown: (e) => {
                if (!o || 0 !== e.button || e.target.closest(".mf-map-controls") || g.current)
                  return;
                j.current = !1;
                let t = e.pointerId,
                  s = window.setTimeout(() => {
                    g.current?.id === t && ((g.current.ready = !0), x(!0));
                  }, 180);
                g.current = {
                  id: t,
                  x: e.clientX,
                  y: e.clientY,
                  pan: h,
                  moved: !1,
                  ready: !1,
                  timer: s,
                };
              },
              onPointerMove: (e) => {
                let t = g.current;
                if (!t || !t.ready || t.id !== e.pointerId) return;
                let s = e.clientX - t.x,
                  a = e.clientY - t.y;
                (!t.moved && 6 > Math.hypot(s, a)) ||
                  ((t.moved = !0),
                  e.currentTarget.setPointerCapture(e.pointerId),
                  (j.current = !0),
                  x(!0),
                  P({ x: t.pan.x + s, y: t.pan.y + a }));
              },
              onPointerUp: M,
              onPointerCancel: M,
              onLostPointerCapture: M,
              onPointerLeave: () => {
                g.current?.moved || M();
              },
              onContextMenu: (e) => {
                o && e.preventDefault();
              },
              onClickCapture: (e) => {
                j.current && (e.stopPropagation(), e.preventDefault(), (j.current = !1));
              },
              children: [
                (0, a.jsxs)("div", {
                  className: "mf-map-world",
                  style: { transform: `translate(${h.x}px, ${h.y}px) scale(${d})` },
                  children: [
                    o &&
                      (0, a.jsx)("svg", {
                        className: "mf-map-extension",
                        viewBox: "-1000 -500 3000 1500",
                        preserveAspectRatio: "none",
                        "aria-hidden": "true",
                        children: sW.map((e) =>
                          (0, a.jsx)(
                            "image",
                            {
                              href: sq,
                              x: "-.5",
                              y: "-.5",
                              width: "1001",
                              height: "501",
                              preserveAspectRatio: "none",
                              transform: e.transform,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    (0, a.jsx)(eV.default, {
                      width: 1771,
                      height: 888,
                      className: "mf-map-background",
                      src: sq,
                      alt: "",
                      draggable: !1,
                    }),
                    r &&
                      (0, a.jsxs)("svg", {
                        className: "mf-map-roads",
                        viewBox: "0 0 1000 500",
                        preserveAspectRatio: "none",
                        "aria-hidden": "true",
                        children: [
                          (0, a.jsx)("polyline", {
                            className: "mf-map-route",
                            points: sY(C?.road || []),
                          }),
                          C?.access.map((e, t) =>
                            (0, a.jsx)(
                              "polyline",
                              { className: "mf-map-route mf-map-access", points: sY(e) },
                              t,
                            ),
                          ),
                        ],
                      }),
                    sH.map(([e, t, s]) =>
                      (0, a.jsx)(
                        "span",
                        {
                          className: "mf-map-place",
                          style: { left: `${e}%`, top: `${t}%` },
                          children: s,
                        },
                        s,
                      ),
                    ),
                    (0, a.jsx)("span", {
                      className: "mf-map-you",
                      role: "img",
                      "aria-label": "Your Location",
                      tabIndex: 0,
                      children: (0, a.jsx)("span", {
                        className: "mf-map-shop-name",
                        "aria-hidden": "true",
                        children: "Your Location",
                      }),
                    }),
                    y.map((s) => {
                      let [i, r] = v(s);
                      return (0, a.jsxs)(
                        "button",
                        {
                          type: "button",
                          className: `mf-map-shop ${e === s.id ? "is-selected" : ""}`,
                          style: { left: `${i}%`, top: `${r}%` },
                          "aria-label": `${s.name}${e === s.id ? ", selected" : ""}`,
                          "aria-pressed": e === s.id,
                          onClick: () => t?.(s.id),
                          children: [
                            (0, a.jsx)("span", {
                              className: "mf-map-shop-icon",
                              children: (0, a.jsx)(sN.f, { size: 20 }),
                            }),
                            (0, a.jsx)("span", { className: "mf-map-shop-name", children: s.name }),
                          ],
                        },
                        s.id,
                      );
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "mf-map-controls",
                  children: [
                    (0, a.jsx)("button", {
                      type: "button",
                      "aria-label": "Zoom in",
                      disabled: d >= 1.8,
                      onClick: () => m((e) => Math.min(1.8, e + 0.2)),
                      children: (0, a.jsx)(tO, { size: 18 }),
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      "aria-label": "Zoom out",
                      disabled: d <= 1,
                      onClick: () => m((e) => Math.max(1, e - 0.2)),
                      children: (0, a.jsx)(sA, { size: 18 }),
                    }),
                    (0, a.jsx)("button", {
                      type: "button",
                      "aria-label": "Reset map to show all locations",
                      onClick: S,
                      children: (0, a.jsx)(sM, { size: 18 }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mf-map-caption",
              role: "status",
              children: [
                (0, a.jsx)("span", {
                  children: n
                    ? `Demo navigation active \xb7 Orange route to ${k?.name || "shop"}`
                    : r
                      ? `Demo route to ${k?.name || "shop"}`
                      : "Demo map · Panabo City",
                }),
                (0, a.jsxs)("span", {
                  children: [
                    (0, a.jsx)(sN.f, { size: 14 }),
                    " Motor shop ",
                    (0, a.jsx)("i", {}),
                    " Sample rider location",
                  ],
                }),
                l &&
                  (0, a.jsxs)("small", {
                    id: c,
                    children: [
                      o
                        ? "Press and hold, then drag to explore · Arrow keys to move · Reset to return · Illustrative map extension · "
                        : "",
                      r
                        ? "Solid route follows mapped roads · Dotted links show approximate off-road access · "
                        : "",
                      "Panabo place names · Approximate shop and landmark placements · Not live navigation",
                    ],
                  }),
              ],
            }),
          ],
        })
      );
    }
    function sJ(e) {
      return e.type.startsWith("image/")
        ? e.size > 0xa00000
          ? Promise.reject(Error("Choose an image smaller than 10 MB."))
          : new Promise((t, s) => {
              let a = new FileReader();
              ((a.onerror = () => s(Error("Unable to read that image."))),
                (a.onload = () => {
                  let e = new Image();
                  ((e.onerror = () => s(Error("That image could not be opened."))),
                    (e.onload = () => {
                      try {
                        let a = Math.min(1, 512 / e.width, 512 / e.height),
                          i = document.createElement("canvas");
                        ((i.width = Math.max(1, Math.round(e.width * a))),
                          (i.height = Math.max(1, Math.round(e.height * a))));
                        let r = i.getContext("2d");
                        if (!r) return void s(Error("Your browser could not process that image."));
                        ((r.fillStyle = "#ffffff"),
                          r.fillRect(0, 0, i.width, i.height),
                          r.drawImage(e, 0, 0, i.width, i.height),
                          t(i.toDataURL("image/jpeg", 0.78)));
                      } catch {
                        s(Error("Unable to process that image."));
                      }
                    }),
                    (e.src = String(a.result)));
                }),
                a.readAsDataURL(e));
            })
        : Promise.reject(Error("Choose an image file for your profile photo."));
    }
    var sX = e.i(386217),
      sK = e.i(198734);
    let sQ = {
      name: "camera",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg",
          },
        ],
        ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
      ],
    };
    sQ.node;
    let sZ = (0, tC.f)(sQ),
      s0 = {
        name: "calendar-days",
        size: 24,
        node: [
          ["path", { d: "M8 2v3", key: "1ioesn" }],
          ["path", { d: "M16 2v3", key: "otl347" }],
          ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "M8 13h.01", key: "1sbv64" }],
          ["path", { d: "M12 13h.01", key: "y0uutt" }],
          ["path", { d: "M16 13h.01", key: "wip0gl" }],
          ["path", { d: "M8 17h.01", key: "p3bg7i" }],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
          ["path", { d: "M16 17h.01", key: "ql8jdd" }],
        ],
      };
    s0.node;
    let s1 = (0, tC.f)(s0);
    var s2 = e.i(379465);
    let s5 = {
      name: "chevron-right",
      size: 24,
      node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
    };
    s5.node;
    let s3 = (0, tC.f)(s5);
    var s4 = e.i(827924),
      s4 = s4;
    let s6 = {
      name: "clock-3",
      size: 24,
      node: [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 6v6h4", key: "135r8i" }],
      ],
    };
    s6.node;
    let s7 = (0, tC.f)(s6),
      s8 = {
        name: "heart",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
              key: "mvr1a0",
            },
          ],
        ],
      };
    s8.node;
    let s9 = (0, tC.f)(s8),
      ae = {
        name: "house",
        size: 24,
        node: [
          ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
          [
            "path",
            {
              d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              key: "r6nss1",
            },
          ],
        ],
        aliases: ["home"],
      };
    ae.node;
    let at = (0, tC.f)(ae);
    var as = e.i(968974);
    let aa = {
      name: "log-out",
      size: 24,
      node: [
        ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
        ["path", { d: "M21 12H9", key: "dn1m92" }],
        ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
      ],
    };
    aa.node;
    let ai = (0, tC.f)(aa),
      ar = {
        name: "navigation",
        size: 24,
        node: [["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]],
      };
    ar.node;
    let an = (0, tC.f)(ar),
      ao = {
        name: "palette",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
              key: "e79jfc",
            },
          ],
          ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
          ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
          ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
          ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
        ],
      };
    ao.node;
    let al = (0, tC.f)(ao),
      ac = {
        name: "search",
        size: 24,
        node: [
          ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ],
      };
    ac.node;
    let ad = (0, tC.f)(ac),
      am = {
        name: "settings-2",
        size: 24,
        node: [
          ["path", { d: "M14 17H5", key: "gfn3mx" }],
          ["path", { d: "M19 7h-9", key: "6i9tg" }],
          ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
          ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
        ],
      };
    am.node;
    let ah = (0, tC.f)(am),
      ap = {
        name: "sliders-horizontal",
        size: 24,
        node: [
          ["path", { d: "M10 5H3", key: "1qgfaw" }],
          ["path", { d: "M12 19H3", key: "yhmn1j" }],
          ["path", { d: "M14 3v4", key: "1sua03" }],
          ["path", { d: "M16 17v4", key: "1q0r14" }],
          ["path", { d: "M21 12h-9", key: "1o4lsq" }],
          ["path", { d: "M21 19h-5", key: "1rlt1p" }],
          ["path", { d: "M21 5h-7", key: "1oszz2" }],
          ["path", { d: "M8 10v4", key: "tgpxqk" }],
          ["path", { d: "M8 12H3", key: "a7s4jb" }],
        ],
      };
    ap.node;
    let au = (0, tC.f)(ap),
      ax = {
        name: "star",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
              key: "r04s7s",
            },
          ],
        ],
      };
    ax.node;
    let af = (0, tC.f)(ax),
      ag = {
        name: "user-round",
        size: 24,
        node: [
          ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
          ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
        ],
        aliases: ["user-2"],
      };
    ag.node;
    let aj = (0, tC.f)(ag);
    var ab = e.i(600472);
    let ay = [
        {
          id: "motohub",
          name: "MotoHub Service Center",
          rating: 4.9,
          reviews: 128,
          distance: 1.2,
          address: "124 Street, New Visayas, Panabo City",
          open: !0,
          available: !0,
          services: ["Oil Change", "Brake Service", "General Maintenance", "Chain Service"],
          phone: "+639171234567",
        },
        {
          id: "revline",
          name: "Revline Moto Garage",
          rating: 4.8,
          reviews: 86,
          distance: 2.4,
          address: "Street 120, Santo Niño, Panabo City",
          open: !0,
          available: !0,
          services: ["Engine Repair", "Electrical Repair", "Tire Replacement", "Oil Change"],
          phone: "+639181234567",
        },
        {
          id: "pitstop",
          name: "Pitstop Motorcycle Care",
          rating: 4.6,
          reviews: 64,
          distance: 3.8,
          address: "Street 125, New Pandan, Panabo City",
          open: !1,
          available: !1,
          services: ["Brake Service", "Tire Replacement", "Chain Service"],
          phone: "+639191234567",
        },
        ...e_,
      ],
      av = [
        "Oil Change",
        "Brake Service",
        "Tire Replacement",
        "Chain Service",
        "Engine Repair",
        "Electrical Repair",
        "General Maintenance",
      ],
      ak = {
        "Oil Change": [650, "45 minutes"],
        "Brake Service": [1250, "1–2 hours"],
        "Tire Replacement": [1800, "1 hour"],
        "Chain Service": [850, "1 hour"],
        "Engine Repair": [3500, "1–2 days"],
        "Electrical Repair": [1500, "2–3 hours"],
        "General Maintenance": [1200, "2 hours"],
      },
      aw = [
        {
          id: "pads",
          name: "Front Brake Pads",
          brand: "Brembo",
          category: "Brakes",
          models: "Yamaha NMAX 155, Aerox 155",
          price: 850,
          stock: "Available",
          shops: ["motohub", "pitstop"],
        },
        {
          id: "oil",
          name: "10W-40 Engine Oil · 1L",
          brand: "Motul",
          category: "Engine",
          models: "All 4-stroke motorcycles",
          price: 450,
          stock: "Available",
          shops: ["motohub", "revline"],
        },
        {
          id: "tire",
          name: "City Grip 2 Rear Tire",
          brand: "Michelin",
          category: "Tires",
          models: "Yamaha NMAX 155",
          price: 2850,
          stock: "Limited Stock",
          shops: ["revline"],
        },
        {
          id: "chain",
          name: "428 Drive Chain Kit",
          brand: "DID",
          category: "Drivetrain",
          models: "Honda Wave 125, Suzuki Raider 150",
          price: 1450,
          stock: "Out of Stock",
          shops: [],
        },
      ],
      aN = [
        {
          id: "MF-2048",
          shop: "motohub",
          bike: "Yamaha NMAX 155",
          service: "Oil Change",
          problem: "Scheduled oil change and routine check.",
          date: "2026-10-05",
          time: "09:00",
          cost: 650,
          duration: "45 minutes",
          status: "Upcoming",
        },
        {
          id: "MF-2039",
          shop: "motohub",
          bike: "Yamaha NMAX 155",
          service: "Brake Service",
          problem: "Front brakes squeak and feel less responsive.",
          date: "2026-10-02",
          time: "10:00",
          cost: 1250,
          duration: "1–2 hours",
          status: "Ongoing",
        },
        {
          id: "MF-1920",
          shop: "revline",
          bike: "Yamaha NMAX 155",
          service: "General Maintenance",
          problem: "Periodic maintenance.",
          date: "2026-09-10",
          time: "09:00",
          cost: 1200,
          duration: "2 hours",
          status: "Completed",
        },
        {
          id: "MF-1901",
          shop: "pitstop",
          bike: "Yamaha NMAX 155",
          service: "Chain Service",
          problem: "Booking made in error.",
          date: "2026-09-01",
          time: "14:00",
          cost: 850,
          duration: "1 hour",
          status: "Cancelled",
        },
      ],
      aC = [
        "Booking Confirmed",
        "Motorcycle Received",
        "Inspection",
        "Diagnosis",
        "Repair in Progress",
        "Parts Replaced",
        "Testing",
        "Completed",
        "Ready for Pickup",
      ],
      aS = (e) => `₱${e.toLocaleString("en-PH")}`,
      aM = (e) =>
        new Date(`${e}T12:00:00`).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
    function aP(e, t) {
      let [s, a] = (0, i.useState)(() => {
        try {
          return JSON.parse(localStorage.getItem(e) || "null") ?? t;
        } catch {
          return t;
        }
      });
      return (
        (0, i.useEffect)(() => {
          try {
            localStorage.setItem(e, JSON.stringify(s));
          } catch {}
        }, [e, s]),
        [s, a]
      );
    }
    let aA = "rounded-[20px] border border-[#31597c] bg-[#123f65] p-4",
      aR = "text-[#b4cde2]",
      a$ =
        "w-full rounded-xl border border-[#406687] bg-[#0b3153] px-3 py-3 text-sm text-[#edf5ff] outline-none focus:border-[#ffad76] [color-scheme:dark]";
    function aE({
      children: e,
      onClick: t,
      secondary: s = !1,
      disabled: i = !1,
      type: r = "button",
    }) {
      return (0, a.jsx)("button", {
        type: r,
        onClick: t,
        disabled: i,
        className: `flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-40 ${s ? "border border-[#eaa16f] bg-[#123f65] text-[#ffad76]" : "bg-[#ff9a50] text-[#082a4a] shadow-lg shadow-orange-950/10"}`,
        children: e,
      });
    }
    function aD({ children: e }) {
      return (0, a.jsx)("span", {
        className:
          "inline-flex rounded-md border border-[#5e7a8e] bg-[#224d70] px-2 py-1 text-[10px] font-semibold text-[#ffe0c7]",
        children: e,
      });
    }
    function aT({ title: e, action: t, onClick: s }) {
      return (0, a.jsxs)("div", {
        className: "mb-3 flex items-center justify-between gap-2",
        children: [
          (0, a.jsx)("h2", { className: "text-[15px] font-bold text-[#edf5ff]", children: e }),
          t &&
            (0, a.jsxs)("button", {
              onClick: s,
              className: "text-[11px] font-semibold text-[#ffad76]",
              children: [t, " ", (0, a.jsx)("span", { "aria-hidden": "true", children: "→" })],
            }),
        ],
      });
    }
    function az({ rows: e }) {
      return (0, a.jsx)("dl", {
        className: "space-y-3",
        children: e.map(([e, t]) =>
          (0, a.jsxs)(
            "div",
            {
              className: "flex justify-between gap-4 text-xs",
              children: [
                (0, a.jsx)("dt", { className: `${aR} shrink-0`, children: e }),
                (0, a.jsx)("dd", {
                  className: "text-right font-medium leading-relaxed text-[#edf5ff]",
                  children: t,
                }),
              ],
            },
            e,
          ),
        ),
      });
    }
    function aI({ value: e, onChange: t, placeholder: s }) {
      return (0, a.jsxs)("label", {
        className:
          "flex items-center gap-2 rounded-xl border border-[#406687] bg-[#123f65] px-3 py-3",
        children: [
          (0, a.jsx)(ad, { size: 17, className: "shrink-0 text-[#ffad76]" }),
          (0, a.jsx)("input", {
            "aria-label": s,
            className:
              "min-w-0 flex-1 bg-transparent text-xs text-[#edf5ff] outline-none placeholder:text-[#b4cde2]",
            placeholder: s,
            value: e,
            onChange: (e) => t(e.target.value),
          }),
          e &&
            (0, a.jsx)("button", {
              onClick: () => t(""),
              "aria-label": "Clear search",
              children: (0, a.jsx)(tP.X, { size: 15 }),
            }),
        ],
      });
    }
    function aF({ distance: e }) {
      return (0, a.jsxs)("div", {
        className: "grid grid-cols-2 gap-3",
        "aria-live": "polite",
        children: [
          (0, a.jsxs)("div", {
            className: `${aA} text-center`,
            children: [
              (0, a.jsxs)("p", {
                className: "text-xl font-bold text-[#ffad76]",
                children: [e, " km"],
              }),
              (0, a.jsx)("p", {
                className: `mt-1 text-[10px] ${aR}`,
                children: "Estimated distance",
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: `${aA} text-center`,
            children: [
              (0, a.jsxs)("p", {
                className: "text-xl font-bold text-[#ffad76]",
                children: [Math.ceil(5 * e), " min"],
              }),
              (0, a.jsx)("p", {
                className: `mt-1 text-[10px] ${aR}`,
                children: "Estimated travel time",
              }),
            ],
          }),
        ],
      });
    }
    function aL() {
      let [e, t] = (0, i.useState)(() => new Date());
      return (
        (0, i.useEffect)(() => {
          let e = window.setInterval(() => t(new Date()), 1e3);
          return () => window.clearInterval(e);
        }, []),
        (0, a.jsxs)("span", {
          className: "block whitespace-nowrap text-xs font-normal leading-3",
          children: [
            e.toLocaleDateString("en-US", {
              timeZone: "Asia/Manila",
              weekday: "long",
              month: "long",
              day: "numeric",
            }),
            " ",
            "•",
            " ",
            e.toLocaleTimeString("en-US", {
              timeZone: "Asia/Manila",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: !0,
            }),
          ],
        })
      );
    }
    function aO({ onLogout: e, user: t }) {
      let s,
        r = er(),
        n = es(),
        o = n.pathname.split("/").filter(Boolean),
        l = o[1] || "home",
        c = sb("rider", t.id),
        [d, m] = (0, i.useState)([]),
        h = (0, i.useMemo)(() => [...ay, ...d], [d]),
        [p, u] = (0, i.useState)(null),
        [x, f] = (0, i.useState)(0),
        [g, j] = (0, i.useState)(!1),
        b = o[2],
        y = (0, i.useRef)(null),
        [v, k] = aP("motofix-profile", {
          name: t.name || "Alex Santos",
          phone: t.phone || "0917 555 0123",
          email: t.email || "alex.santos@email.com",
          bike: "Yamaha NMAX 155",
          plate: "MC 2841",
          year: "2024",
          photo: "",
        });
      (0, i.useEffect)(() => {
        let e = !0;
        return (
          tn()
            .then(({ shops: t }) => {
              e &&
                m(
                  t.map((e) => ({
                    id: e.id,
                    name: e.name,
                    phone: e.phone,
                    address: e.address,
                    services: e.services,
                    open: e.open,
                    available: e.available,
                    rating: e.rating,
                    reviews: e.reviews,
                    distance: e.distance,
                    mapPosition: e.mapPosition,
                  })),
                );
            })
            .catch(() => {
              e && m([]);
            }),
          () => {
            e = !1;
          }
        );
      }, [t.id]);
      let [w, N] = aP("motofix-motorcycles", [
          { id: "primary-motorcycle", bike: v.bike, plate: v.plate, year: v.year },
        ]),
        [C, S] = aP("motofix-bookings", aN),
        [M, P] = aP("motofix-saved-shops", ["motohub"]),
        [A, R] = aP("motofix-reservations", []),
        [$, E] = (0, i.useState)(v),
        [D, T] = aP("motofix-rider-preferences-v1", { dashboardDensity: "Comfortable" }),
        z = D?.dashboardDensity === "Compact" ? "Compact" : "Comfortable",
        [I] = (0, i.useState)(() => {
          try {
            let e = JSON.parse(localStorage.getItem("motofix-owner-v1") || "null"),
              t =
                e?.repairs?.find(
                  (e) =>
                    "Completed" !== e.status && (e.customer === v.name || e.motorcycle === v.bike),
                ) || e?.repairs?.find((e) => "R-0241" === e.id),
              s = e?.mechanics?.find((e) => e.id === t?.mechanic);
            return {
              rider: tR(t?.customer || "Miguel Santos"),
              owner: t$(e?.profile?.name, e?.profile?.phone),
              mechanic: s
                ? tE(s)
                : tE({ id: "M-01", name: "Marco Reyes", phone: "+63 917 456 7890" }),
            };
          } catch {
            return {
              rider: tR("Miguel Santos"),
              owner: t$(),
              mechanic: tE({ id: "M-01", name: "Marco Reyes" }),
            };
          }
        }),
        F = (0, a.jsx)(tT, {
          actor: { ...I.rider, name: v.name },
          contacts: [I.mechanic, I.owner],
        }),
        [L, O] = (0, i.useState)({ bike: "", plate: "", year: "", photo: "" }),
        [B, U] = (0, i.useState)(""),
        [q, H] = (0, i.useState)("All"),
        [V, W] = (0, i.useState)("Upcoming"),
        [Y, G] = (0, i.useState)("motohub"),
        [_, J] = (0, i.useState)(!1),
        [X, K] = (0, i.useState)({
          distance: "All",
          rating: "All",
          service: "All",
          open: !1,
          available: !1,
        }),
        [Q, Z] = (0, i.useState)(""),
        [ee, et] = (0, i.useState)(!1),
        [ea, ei] = aP("motofix-notifications-read", !1),
        [en, eo] = (0, i.useState)(0),
        el = new Date().toISOString().slice(0, 10),
        [ec, ed] = (0, i.useState)({
          shop: "motohub",
          bike: v.bike,
          service: "Oil Change",
          problem: "",
          date: el,
          time: "09:00",
        }),
        [em, eh] = (0, i.useState)(el),
        [ep, eu] = (0, i.useState)("09:00"),
        [ex, ef] = (0, i.useState)(!1),
        eg = h.find((e) => e.id === b) || h.find((e) => e.id === Y);
      aw.find((e) => e.id === b) || aw[0];
      let ej = C.find((e) => e.id === b) || C[0],
        eb = h.find((e) => e.id === ej.shop),
        ey = C.filter((e) => !aN.some((t) => t.id === e.id)).length >= 3,
        ev = (e) => {
          !c.active && ("expenses" === e || ("book" === e && ey)) ? u(e) : r(`/rider/${e}`);
        };
      ((0, i.useEffect)(() => {
        !c.active && ("expenses" === l || ("book" === l && ey)) && u(l);
      }, [l, c.active, ey]),
        (0, i.useEffect)(() => {
          (y.current?.scrollTo({ top: 0 }), U(""), Z(""), ef(!1));
        }, [n.pathname]),
        (0, i.useEffect)(() => {
          E(v);
        }, [v, l]));
      let ek = (e) => {
          (ed({
            shop: e || Y,
            bike: v.bike,
            service: "Oil Change",
            problem: "",
            date: el,
            time: "09:00",
          }),
            eo(0),
            ev("book"));
        },
        ew = (e) => S((t) => t.map((t) => (t.id === ej.id ? { ...t, ...e } : t))),
        eN = B || new URLSearchParams(n.search).get("q") || "",
        eC = h.filter(
          (e) =>
            `${e.name} ${e.services.join(" ")}`.toLowerCase().includes(eN.toLowerCase()) &&
            ("All" === X.distance || e.distance <= Number(X.distance)) &&
            ("All" === X.rating || e.rating >= Number(X.rating)) &&
            ("All" === X.service || e.services.includes(X.service)) &&
            (!X.open || e.open) &&
            (!X.available || e.available),
        );
      aw.filter(
        (e) =>
          ("All" === q || e.category === q) &&
          `${e.name} ${e.brand} ${e.models}`.toLowerCase().includes(eN.toLowerCase()),
      );
      let eS = C.find((e) => "Upcoming" === e.status),
        eM =
          "expenses" === l
            ? "expenses"
            : ["shops", "shop", "search", "navigation", "saved"].includes(l)
              ? "shops"
              : ["book", "bookings", "booking", "confirmation", "reschedule"].includes(l)
                ? "bookings"
                : ["repair", "repair-details", "cost", "updates", "history"].includes(l)
                  ? "repair"
                  : [
                        "profile",
                        "settings",
                        "subscriptions",
                        "billing",
                        "customization",
                        "edit",
                        "motorcycles",
                        "complaints",
                        "security",
                        "help",
                        "notifications",
                      ].includes(l)
                    ? "profile"
                    : "home",
        eP = (e) =>
          (0, a.jsxs)(
            "article",
            {
              className: aA,
              children: [
                (0, a.jsxs)("div", {
                  className: "mb-2 flex items-start justify-between gap-2",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h3", { className: "text-sm font-bold", children: e.name }),
                        (0, a.jsxs)("p", {
                          className: "mt-1 flex items-center gap-1 text-[11px]",
                          children: [
                            (0, a.jsx)(af, {
                              size: 12,
                              className: "fill-[#ffad76] text-[#ffad76]",
                            }),
                            " ",
                            e.rating,
                            " ",
                            (0, a.jsxs)("span", {
                              className: aR,
                              children: ["(", e.reviews, ") · ", e.distance, " km away"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      "aria-label": M.includes(e.id) ? "Unsave shop" : "Save shop",
                      className: "p-1 text-[#ffad76]",
                      onClick: () =>
                        P((t) => (t.includes(e.id) ? t.filter((t) => t !== e.id) : [...t, e.id])),
                      children: (0, a.jsx)(s9, {
                        size: 18,
                        fill: M.includes(e.id) ? "currentColor" : "none",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("p", {
                  className: `mb-3 text-[10px] ${aR}`,
                  children: e.services.join(" · "),
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, a.jsxs)(aD, {
                      children: [
                        e.open ? "Open now" : "Closed",
                        e.available ? " · Slots available" : " · No slots",
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className: "flex items-center gap-1 text-[11px] font-bold text-[#ffad76]",
                      onClick: () => {
                        (G(e.id), ev(`shop/${e.id}`));
                      },
                      children: ["View Shop ", (0, a.jsx)(s3, { size: 14 })],
                    }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        eA = (e) =>
          (0, a.jsxs)(
            "article",
            {
              className: aA,
              children: [
                (0, a.jsxs)("div", {
                  className: "mb-2 flex items-center justify-between",
                  children: [
                    (0, a.jsxs)("span", {
                      className: "text-[10px] text-[#ffad76]",
                      children: ["#", e.id],
                    }),
                    (0, a.jsx)(aD, { children: e.status }),
                  ],
                }),
                (0, a.jsx)("h3", {
                  className: "text-sm font-bold",
                  children: h.find((t) => t.id === e.shop)?.name,
                }),
                (0, a.jsxs)("p", {
                  className: `mt-1 text-xs ${aR}`,
                  children: [e.service, " · ", e.bike],
                }),
                (0, a.jsxs)("p", {
                  className: `mt-3 flex items-center gap-1 text-[11px] ${aR}`,
                  children: [(0, a.jsx)(s1, { size: 13 }), aM(e.date), " · ", e.time],
                }),
                (0, a.jsxs)("div", {
                  className: "mt-3 flex items-center justify-between",
                  children: [
                    (0, a.jsxs)("strong", {
                      className: "text-sm text-[#ffad76]",
                      children: [
                        aS(e.cost),
                        " ",
                        (0, a.jsx)("small", {
                          className: `text-[10px] font-normal ${aR}`,
                          children: "estimated",
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      className: "text-[11px] font-semibold text-[#ffad76]",
                      onClick: () => ev(`booking/${e.id}`),
                      children: "View Details →",
                    }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        eR = (0, a.jsxs)("article", {
          className:
            "rounded-[20px] border border-[#59738b] bg-gradient-to-br from-[#205983] to-[#123f65] p-4",
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsx)("span", {
                  className: "text-[10px] font-bold uppercase tracking-[.12em] text-[#ffad76]",
                  children: "Repair in progress",
                }),
                (0, a.jsx)(aD, { children: "60%" }),
              ],
            }),
            (0, a.jsxs)("h3", {
              className: "mt-3 text-sm font-bold",
              children: ["Brake service · ", v.bike],
            }),
            (0, a.jsx)("p", {
              className: `mt-1 text-[11px] ${aR}`,
              children: "MotoHub · Mechanic: Marco Reyes",
            }),
            (0, a.jsx)("progress", {
              value: 60,
              max: 100,
              "aria-label": "Repair progress",
              className:
                "mt-4 h-1.5 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-[#082a4a] [&::-webkit-progress-value]:bg-[#ffad76] [&::-moz-progress-bar]:bg-[#ffad76]",
            }),
            (0, a.jsxs)("div", {
              className: "mt-3 flex justify-between text-[11px]",
              children: [
                (0, a.jsx)("span", { className: aR, children: "Est. ready today, 3:30 PM" }),
                (0, a.jsx)("button", {
                  onClick: () => ev("repair"),
                  className: "font-bold text-[#ffad76]",
                  children: "Track repair →",
                }),
              ],
            }),
          ],
        }),
        e$ = [
          ["Booking number", ej.id],
          ["Motor shop", eb.name],
          ["Motorcycle", ej.bike],
          ["Service", ej.service],
          ["Problem", ej.problem],
          ["Date", aM(ej.date)],
          ["Time", ej.time],
          ["Estimated cost", aS(ej.cost)],
          ["Estimated duration", ej.duration],
          ["Status", (0, a.jsx)(aD, { children: ej.status })],
        ],
        eE = (e, t, s) =>
          (0, a.jsxs)(
            "button",
            {
              onClick: () => ev(t),
              className:
                "flex w-full items-center gap-3 border-b border-[#31597c] py-4 text-left text-xs last:border-0",
              children: [
                (0, a.jsx)(s, { size: 18, className: "text-[#ffad76]" }),
                (0, a.jsx)("span", { className: "flex-1", children: e }),
                (0, a.jsx)(s3, { size: 15, className: aR }),
              ],
            },
            e,
          );
      switch (l) {
        case "home":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "rider-home-header grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3",
                children: [
                  (0, a.jsx)("div", {
                    className: "min-w-0",
                    children: (0, a.jsxs)("h1", {
                      className: "mt-1 text-[25px] font-extrabold",
                      children: [
                        "Hello, ",
                        v.name.split(" ")[0],
                        " ",
                        (0, a.jsx)("span", { className: "text-[#ffad76]", children: "." }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "justify-self-end",
                    children: (0, a.jsxs)("button", {
                      "aria-label": "Notifications",
                      onClick: () => ev("notifications"),
                      className: "relative rounded-xl border border-[#31597c] bg-[#123f65] p-3",
                      children: [
                        (0, a.jsx)(tK, { size: 19 }),
                        !ea &&
                          (0, a.jsx)("span", {
                            className:
                              "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#ffad76]",
                          }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", { className: "min-w-0", children: (0, a.jsx)(aL, {}) }),
                  (0, a.jsx)("div", {
                    className: "w-max justify-self-end whitespace-nowrap",
                    children: (0, a.jsx)(aE, {
                      onClick: () => ev("subscriptions"),
                      children: "Upgrade your Ride",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("button", {
                onClick: () => ev("motorcycles"),
                className:
                  "flex w-full items-center gap-3 rounded-[20px] border border-[#3c678b] bg-gradient-to-r from-[#195683] to-[#123f65] p-4 text-left",
                children: [
                  (0, a.jsx)("div", {
                    className: "rounded-xl bg-[#082a4a] p-3 text-[#ffad76]",
                    children: (0, a.jsx)(sK.f, { size: 32 }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, a.jsxs)("p", {
                        className: `text-[10px] ${aR}`,
                        children: ["MY MOTORCYCLES · ", w.length],
                      }),
                      (0, a.jsx)("h2", { className: "mt-1 text-sm font-bold", children: v.bike }),
                      (0, a.jsxs)("p", {
                        className: `mt-1 text-[10px] ${aR}`,
                        children: [v.year, " · ", v.plate],
                      }),
                    ],
                  }),
                  (0, a.jsx)(s3, { size: 17 }),
                ],
              }),
              (0, a.jsx)("form", {
                onSubmit: (e) => {
                  (e.preventDefault(),
                    r(
                      B.trim() ? `/rider/search?q=${encodeURIComponent(B.trim())}` : "/rider/shops",
                    ));
                },
                children: (0, a.jsx)(aI, {
                  value: B,
                  onChange: U,
                  placeholder: "Search motor shops, services, or parts.",
                }),
              }),
              (0, a.jsx)("div", {
                className: "grid grid-cols-4 gap-2",
                children: [
                  [
                    "Find Motor Shop",
                    sN.f,
                    () =>
                      B.trim() ? r(`/rider/search?q=${encodeURIComponent(B.trim())}`) : ev("shops"),
                  ],
                  [
                    "Find Parts",
                    sw.f,
                    () =>
                      B.trim() ? r(`/rider/parts?q=${encodeURIComponent(B.trim())}`) : ev("parts"),
                  ],
                  ["Book Repair", s1, () => ek()],
                  ["Track Repair", ab.f, () => ev("repair")],
                ].map(([e, t, s]) =>
                  (0, a.jsxs)(
                    "button",
                    {
                      onClick: s,
                      className: "flex flex-col items-center gap-2 text-center",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "flex h-12 w-12 items-center justify-center rounded-2xl border border-[#416686] bg-[#16466e] text-[#ffad76]",
                          children: (0, a.jsx)(t, { size: 22, strokeWidth: 1.7 }),
                        }),
                        (0, a.jsx)("span", {
                          className: "max-w-16 text-[10px] leading-snug",
                          children: e,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, {
                    title: "Upcoming booking",
                    action: "View all",
                    onClick: () => ev("bookings"),
                  }),
                  eS
                    ? eA(eS)
                    : (0, a.jsxs)("div", {
                        className: aA,
                        children: [
                          (0, a.jsx)("p", {
                            className: `mb-3 text-xs ${aR}`,
                            children: "Your next ride deserves a little care.",
                          }),
                          (0, a.jsx)(aE, { onClick: () => ek(), children: "Book a service" }),
                        ],
                      }),
                ],
              }),
              (0, a.jsxs)("section", {
                children: [(0, a.jsx)(aT, { title: "Your active repair" }), eR],
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, {
                    title: "Shops around you",
                    action: "Explore",
                    onClick: () => ev("shops"),
                  }),
                  (0, a.jsx)("div", { className: "space-y-3", children: h.slice(0, 2).map(eP) }),
                ],
              }),
            ],
          });
          break;
        case "search": {
          let e = eN.trim().toLowerCase(),
            t = h.filter((t) => `${t.name} ${t.services.join(" ")}`.toLowerCase().includes(e)),
            i = sm().parts.filter((t) =>
              `${t.name} ${t.brand} ${t.category} ${t.compatibility}`.toLowerCase().includes(e),
            );
          s = (0, a.jsxs)("div", {
            className: "space-y-5",
            children: [
              (0, a.jsxs)("p", {
                className: `text-xs ${aR}`,
                children: [
                  "Results for ",
                  (0, a.jsxs)("strong", { className: "text-[#edf5ff]", children: ["“", eN, "”"] }),
                ],
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: `Motor shops & services \xb7 ${t.length}` }),
                  t.map((t) => {
                    let s = t.services.filter((t) => t.toLowerCase().includes(e));
                    return (0, a.jsxs)(
                      "button",
                      {
                        onClick: () => ev(`shop/${t.id}`),
                        className: `${aA} mb-3 flex w-full items-start gap-3 border border-[#31597c] text-left`,
                        children: [
                          (0, a.jsx)(sN.f, {
                            size: 19,
                            className: "mt-0.5 shrink-0 text-[#ffad76]",
                          }),
                          (0, a.jsxs)("span", {
                            className: "min-w-0 flex-1",
                            children: [
                              (0, a.jsx)("strong", {
                                className: "block text-sm",
                                children: t.name,
                              }),
                              (0, a.jsx)("small", {
                                className: `mt-1 block text-[10px] ${aR}`,
                                children: s.length
                                  ? s.join(" · ")
                                  : `${t.distance} km away \xb7 ★ ${t.rating}`,
                              }),
                            ],
                          }),
                          (0, a.jsx)(s3, { size: 16, className: "mt-1 shrink-0" }),
                        ],
                      },
                      t.id,
                    );
                  }),
                  !t.length &&
                    (0, a.jsx)("p", {
                      className: `rounded-xl border border-[#31597c] bg-[#123f65] p-3 text-xs ${aR}`,
                      children: "No motor shops or services match this search.",
                    }),
                ],
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: `Motorcycle parts \xb7 ${i.length}` }),
                  i.map((e) =>
                    (0, a.jsxs)(
                      "button",
                      {
                        onClick: () => ev(`parts?q=${encodeURIComponent(eN)}`),
                        className: `${aA} mb-3 flex w-full items-start gap-3 border border-[#31597c] text-left`,
                        children: [
                          (0, a.jsx)(sw.f, {
                            size: 19,
                            className: "mt-0.5 shrink-0 text-[#ffad76]",
                          }),
                          (0, a.jsxs)("span", {
                            className: "min-w-0 flex-1",
                            children: [
                              (0, a.jsx)("strong", {
                                className: "block text-sm",
                                children: e.name,
                              }),
                              (0, a.jsxs)("small", {
                                className: `mt-1 block text-[10px] ${aR}`,
                                children: [e.brand, " · ", e.category, " · ", aS(e.price)],
                              }),
                            ],
                          }),
                          (0, a.jsx)(s3, { size: 16, className: "mt-1 shrink-0" }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                  !i.length &&
                    (0, a.jsx)("p", {
                      className: `rounded-xl border border-[#31597c] bg-[#123f65] p-3 text-xs ${aR}`,
                      children: "No motorcycle parts match this search.",
                    }),
                ],
              }),
              !t.length &&
                !i.length &&
                (0, a.jsx)(aE, {
                  secondary: !0,
                  onClick: () => ev("shops"),
                  children: "Browse all motor shops",
                }),
            ],
          });
          break;
        }
        case "shops":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex-1",
                    children: (0, a.jsx)(aI, {
                      value: B || new URLSearchParams(n.search).get("q") || "",
                      onChange: (e) => {
                        (U(e), n.search && r("/rider/shops", { replace: !0 }));
                      },
                      placeholder: "Search shops or services",
                    }),
                  }),
                  (0, a.jsx)("button", {
                    "aria-label": "Filter shops",
                    onClick: () => J(!_),
                    className: "rounded-xl border border-[#ffad76] p-3 text-[#ffad76]",
                    children: (0, a.jsx)(au, { size: 18 }),
                  }),
                ],
              }),
              _ &&
                (0, a.jsxs)("div", {
                  className: `${aA} space-y-3`,
                  children: [
                    (0, a.jsx)(aT, { title: "Filter shops" }),
                    (0, a.jsx)("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        ["Distance", "distance", ["All", "2", "5", "10"]],
                        ["Rating", "rating", ["All", "4.8", "4.5", "4"]],
                        ["Service", "service", ["All", ...av]],
                      ].map(([e, t, s]) =>
                        (0, a.jsxs)(
                          "label",
                          {
                            className: `text-[11px] ${aR}`,
                            children: [
                              e,
                              (0, a.jsx)("select", {
                                className: `${a$} mt-1`,
                                value: X[t],
                                onChange: (e) => K({ ...X, [t]: e.target.value }),
                                children: s.map((e) =>
                                  (0, a.jsx)(
                                    "option",
                                    {
                                      value: e,
                                      children:
                                        "All" === e
                                          ? "Any"
                                          : "distance" === t
                                            ? `Within ${e} km`
                                            : "rating" === t
                                              ? `${e}+ stars`
                                              : e,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex gap-4 text-xs",
                      children: [
                        (0, a.jsxs)("label", {
                          children: [
                            (0, a.jsx)("input", {
                              type: "checkbox",
                              className: "mr-2 accent-[#ffad76]",
                              checked: X.open,
                              onChange: (e) => K({ ...X, open: e.target.checked }),
                            }),
                            "Open Now",
                          ],
                        }),
                        (0, a.jsxs)("label", {
                          children: [
                            (0, a.jsx)("input", {
                              type: "checkbox",
                              className: "mr-2 accent-[#ffad76]",
                              checked: X.available,
                              onChange: (e) => K({ ...X, available: e.target.checked }),
                            }),
                            "Availability",
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      className: "text-xs text-[#ffad76]",
                      onClick: () =>
                        K({
                          distance: "All",
                          rating: "All",
                          service: "All",
                          open: !1,
                          available: !1,
                        }),
                      children: "Reset filters",
                    }),
                  ],
                }),
              (0, a.jsx)(s_, { explorable: !0, route: !0, shops: h, selected: Y, onSelect: G }),
              (0, a.jsxs)("button", {
                className: "flex justify-between rounded-xl bg-[#16466e] p-3 text-left text-xs",
                onClick: () => ev(`shop/${Y}`),
                children: [
                  (0, a.jsx)("span", { children: h.find((e) => e.id === Y)?.name }),
                  (0, a.jsx)(s3, { size: 16 }),
                ],
              }),
              (0, a.jsx)(aF, { distance: eg.distance }),
              (0, a.jsx)(aT, { title: `${eC.length} nearby shops` }),
              eC.map(eP),
              !eC.length &&
                (0, a.jsx)("p", {
                  className: aR,
                  children: "No matching shops. Try adjusting your filters.",
                }),
            ],
          });
          break;
        case "shop":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(eV.default, {
                width: 600,
                height: 400,
                src: "/motofix-system/5.2/rider-workshop.jpg",
                alt: "Motorcycle being serviced in a workshop; illustrative shop photo",
                className: "h-40 w-full rounded-[20px] object-cover",
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex justify-between gap-2",
                    children: [
                      (0, a.jsx)("h2", { className: "text-xl font-bold", children: eg.name }),
                      (0, a.jsx)("button", {
                        "aria-label": "Toggle saved shop",
                        onClick: () =>
                          P((e) =>
                            e.includes(eg.id) ? e.filter((e) => e !== eg.id) : [...e, eg.id],
                          ),
                        className: "text-[#ffad76]",
                        children: (0, a.jsx)(s9, {
                          size: 21,
                          fill: M.includes(eg.id) ? "currentColor" : "none",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("p", {
                    className: "mt-2 flex items-center gap-1 text-xs text-[#ffad76]",
                    children: [
                      (0, a.jsx)(af, { size: 14, fill: "currentColor" }),
                      " ",
                      eg.rating,
                      " · ",
                      eg.reviews,
                      " reviews",
                      " ",
                      (0, a.jsxs)("span", { className: aR, children: ["· ", eg.distance, " km"] }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: aA,
                children: (0, a.jsx)(az, {
                  rows: [
                    ["Address", eg.address],
                    ["Opening hours", "Mon–Sat, 8:00 AM–6:00 PM"],
                    ["Status", eg.open ? "Open now" : "Closed today"],
                    [
                      "Contact",
                      (0, a.jsx)("a", {
                        href: `tel:${eg.phone}`,
                        className: "text-[#ffad76]",
                        children: eg.phone,
                      }),
                    ],
                  ],
                }),
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: "Services & estimated prices" }),
                  (0, a.jsx)("div", {
                    className: `${aA} space-y-3`,
                    children: eg.services.map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "flex justify-between text-xs",
                          children: [
                            (0, a.jsx)("span", { children: e }),
                            (0, a.jsxs)("span", {
                              className: "text-[#ffad76]",
                              children: ["from ", aS(ak[e][0])],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, {
                    title: "Available parts",
                    action: "Browse parts",
                    onClick: () => ev("parts"),
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      aw
                        .filter((e) => e.shops.includes(eg.id))
                        .map((e) =>
                          (0, a.jsxs)(
                            "button",
                            {
                              onClick: () => ev(`part/${e.id}`),
                              className:
                                "flex w-full justify-between rounded-xl bg-[#16466e] p-3 text-xs",
                              children: [
                                (0, a.jsx)("span", { children: e.name }),
                                (0, a.jsx)("span", {
                                  className: "text-[#ffad76]",
                                  children: aS(e.price),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      !aw.some((e) => e.shops.includes(eg.id)) &&
                        (0, a.jsx)("p", {
                          className: `text-xs ${aR}`,
                          children: "Contact the shop for current inventory.",
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: "About the shop" }),
                  (0, a.jsxs)("p", {
                    className: `text-xs leading-relaxed ${aR}`,
                    children: [
                      "Friendly local specialists for everyday riders. ",
                      eg.name,
                      " provides honest estimates, quality parts, and clear updates from inspection to pickup.",
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: "Rider reviews" }),
                  (0, a.jsxs)("div", {
                    className: aA,
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-xs text-[#ffad76]",
                        children: "★★★★★ · Jamie R.",
                      }),
                      (0, a.jsx)("p", {
                        className: `mt-2 text-xs ${aR}`,
                        children:
                          "Clear pricing and helpful mechanics. My motorcycle runs smoothly again.",
                      }),
                      (0, a.jsx)("p", {
                        className: `mt-2 text-[10px] ${aR}`,
                        children: "Sample review · September 2026",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(aE, {
                disabled: !eg.available,
                onClick: () => ek(eg.id),
                children: "Book Repair",
              }),
              (0, a.jsxs)(aE, {
                secondary: !0,
                onClick: () => ev(`navigation/${eg.id}`),
                children: [(0, a.jsx)(an, { size: 16 }), "Get Directions"],
              }),
            ],
          });
          break;
        case "parts":
          s = (0, a.jsx)(sC, {
            customer: v.name,
            phone: v.phone,
            initialSearch: eN,
            subscriptionActive: c.active,
          });
          break;
        case "part":
          s = (0, a.jsx)(sC, { customer: v.name, phone: v.phone, subscriptionActive: c.active });
          break;
        case "book": {
          let e = [
              "Choose a motor shop",
              "Select your motorcycle",
              "What service do you need?",
              "Describe the problem",
              "Choose a date",
              "Choose a time",
              "Review your booking",
            ],
            t = h.find((e) => e.id === ec.shop),
            i =
              0 === en
                ? h
                    .filter((e) => e.available)
                    .map((e) => [e.id, e.name, `${e.distance} km \xb7 ★ ${e.rating}`])
                : 1 === en
                  ? w.map((e) => [e.bike, e.bike, `${e.year} \xb7 ${e.plate}`])
                  : 2 === en
                    ? t.services.map((e) => [e, e, `${aS(ak[e][0])} \xb7 ${ak[e][1]}`])
                    : [],
            r = 0 === en ? "shop" : 1 === en ? "bike" : "service",
            n =
              3 === en
                ? ec.problem.trim().length > 0
                : 4 === en
                  ? !!(ec.date && ec.date >= el)
                  : 5 !== en ||
                    !!(
                      ec.time &&
                      (ec.date !== el || ec.time > new Date().toTimeString().slice(0, 5))
                    );
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between text-[11px]",
                children: [
                  (0, a.jsxs)("span", {
                    className: "text-[#ffad76]",
                    children: ["STEP ", en + 1, " OF 7"],
                  }),
                  (0, a.jsxs)("span", {
                    className: aR,
                    children: [Math.round(((en + 1) / 7) * 100), "% complete"],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex gap-1.5",
                children: e.map((e, t) =>
                  (0, a.jsx)(
                    "span",
                    {
                      className: `h-1 flex-1 rounded-full ${t <= en ? "bg-[#ffad76]" : "bg-[#31597c]"}`,
                    },
                    e,
                  ),
                ),
              }),
              (0, a.jsx)("h2", { className: "text-xl font-bold", children: e[en] }),
              i.map(([e, t, s]) =>
                (0, a.jsxs)(
                  "button",
                  {
                    onClick: () =>
                      ed({
                        ...ec,
                        [r]: e,
                        ...(0 === en ? { service: h.find((t) => t.id === e).services[0] } : {}),
                      }),
                    className: `${aA} flex w-full items-center justify-between text-left ${ec[r] === e ? "border-[#ffad76]!" : ""}`,
                    children: [
                      (0, a.jsxs)("span", {
                        children: [
                          (0, a.jsx)("span", { className: "block text-sm font-bold", children: t }),
                          (0, a.jsx)("span", {
                            className: `mt-1 block text-xs ${aR}`,
                            children: s,
                          }),
                        ],
                      }),
                      ec[r] === e && (0, a.jsx)(s4.f, { size: 20, className: "text-[#ffad76]" }),
                    ],
                  },
                  e,
                ),
              ),
              3 === en &&
                (0, a.jsxs)("label", {
                  className: "space-y-2 text-xs",
                  children: [
                    (0, a.jsx)("span", { children: "Tell the mechanic what you noticed" }),
                    (0, a.jsx)("textarea", {
                      required: !0,
                      maxLength: 1e3,
                      className: `${a$} mt-2 min-h-36`,
                      placeholder: "For example: My front brake squeaks when slowing down…",
                      value: ec.problem,
                      onChange: (e) => ed({ ...ec, problem: e.target.value }),
                    }),
                    (0, a.jsx)("span", {
                      className: aR,
                      children: "Include symptoms, when they started, and any recent repairs.",
                    }),
                  ],
                }),
              4 === en &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("label", {
                      className: "text-xs",
                      children: [
                        "Preferred date",
                        (0, a.jsx)("input", {
                          type: "date",
                          className: `${a$} mt-2`,
                          min: el,
                          value: ec.date,
                          onChange: (e) => ed({ ...ec, date: e.target.value }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: `text-xs ${aR}`,
                      children:
                        "Select today or a future date. Demo slots are not live shop availability.",
                    }),
                  ],
                }),
              5 === en &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("p", {
                      className: `text-xs ${aR}`,
                      children: [aM(ec.date), " · Select a preferred slot"],
                    }),
                    (0, a.jsx)("div", {
                      className: "grid grid-cols-3 gap-3",
                      children: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"].map(
                        (e) =>
                          (0, a.jsx)(
                            "button",
                            {
                              disabled:
                                ec.date === el && e <= new Date().toTimeString().slice(0, 5),
                              onClick: () => ed({ ...ec, time: e }),
                              className: `rounded-xl border p-3 text-sm disabled:opacity-30 ${ec.time === e ? "border-[#ffad76] bg-[#ffad76] text-[#082a4a]" : "border-[#406687] bg-[#123f65]"}`,
                              children: e,
                            },
                            e,
                          ),
                      ),
                    }),
                  ],
                }),
              6 === en &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: aA,
                      children: (0, a.jsx)(az, {
                        rows: [
                          ["Motor shop", t.name],
                          ["Motorcycle", ec.bike],
                          ["Service", ec.service],
                          ["Problem", ec.problem],
                          ["Date", aM(ec.date)],
                          ["Time", ec.time],
                          ["Estimated cost", aS(ak[ec.service][0])],
                          ["Duration", ak[ec.service][1]],
                        ],
                      }),
                    }),
                    (0, a.jsx)("p", {
                      className: `text-[11px] leading-relaxed ${aR}`,
                      children:
                        "This is a demo booking. Final pricing may change after inspection and your approval.",
                    }),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: "mt-5 flex gap-3",
                children: [
                  en > 0 &&
                    (0, a.jsx)(aE, { secondary: !0, onClick: () => eo(en - 1), children: "Back" }),
                  (0, a.jsx)(aE, {
                    disabled: !n,
                    onClick: () => {
                      if (en < 6) eo(en + 1);
                      else {
                        if (!c.active && ey) return void u("book");
                        let e = {
                          ...ec,
                          id: `MF-${Date.now().toString().slice(-7)}`,
                          cost: ak[ec.service][0],
                          duration: ak[ec.service][1],
                          status: "Upcoming",
                        };
                        (S([e, ...C]), ev(`confirmation/${e.id}`));
                      }
                    },
                    children:
                      6 === en
                        ? "Confirm Booking"
                        : (0, a.jsxs)(a.Fragment, {
                            children: ["Continue ", (0, a.jsx)(sX.f, { size: 15 })],
                          }),
                  }),
                ],
              }),
            ],
          });
          break;
        }
        case "confirmation":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "py-3 text-center",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-[#ffad76] bg-[#20537a] text-[#ffad76]",
                    children: (0, a.jsx)(s4.f, { size: 43, strokeWidth: 1.5 }),
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-2xl font-bold",
                    children: "Booking Confirmed",
                  }),
                  (0, a.jsx)("p", {
                    className: `mt-2 text-xs ${aR}`,
                    children: "Your next service is on the calendar.",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: aA,
                children: (0, a.jsx)(az, {
                  rows: e$.filter(
                    ([e]) => !["Problem", "Motorcycle", "Estimated duration", "Status"].includes(e),
                  ),
                }),
              }),
              (0, a.jsx)(aE, { onClick: () => ev(`booking/${ej.id}`), children: "View Booking" }),
              (0, a.jsx)(aE, {
                secondary: !0,
                onClick: () => ev(`navigation/${ej.shop}`),
                children: "Get Directions",
              }),
              (0, a.jsx)("p", {
                className: `text-center text-[10px] ${aR}`,
                children: "Demo confirmation · No real shop request sent",
              }),
            ],
          });
          break;
        case "bookings":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "flex gap-1 rounded-xl bg-[#082a4a] p-1",
                children: ["Upcoming", "Ongoing", "Completed", "Cancelled"].map((e) =>
                  (0, a.jsx)(
                    "button",
                    {
                      onClick: () => W(e),
                      className: `flex-1 rounded-lg px-1 py-2.5 text-[10px] ${V === e ? "bg-[#ffad76] font-bold text-[#082a4a]" : aR}`,
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
              C.filter((e) => e.status === V).map(eA),
              !C.some((e) => e.status === V) &&
                (0, a.jsxs)("div", {
                  className: `${aA} py-8 text-center`,
                  children: [
                    (0, a.jsx)(s1, { className: "mx-auto mb-3 text-[#ffad76]" }),
                    (0, a.jsxs)("p", {
                      className: `text-xs ${aR}`,
                      children: ["No ", V.toLowerCase(), " bookings yet."],
                    }),
                  ],
                }),
              (0, a.jsx)(aE, { onClick: () => ek(), children: "Book a Repair" }),
            ],
          });
          break;
        case "booking":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", { className: aA, children: (0, a.jsx)(az, { rows: e$ }) }),
              (0, a.jsxs)("div", {
                className: aA,
                children: [
                  (0, a.jsx)(aT, { title: "Shop information" }),
                  (0, a.jsx)("p", { className: `mb-3 text-xs ${aR}`, children: eb.address }),
                  (0, a.jsxs)("a", {
                    href: `tel:${eb.phone}`,
                    className: "flex items-center gap-2 text-xs text-[#ffad76]",
                    children: [(0, a.jsx)(tN.f, { size: 14 }), eb.phone],
                  }),
                ],
              }),
              "Upcoming" === ej.status &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(aE, {
                      onClick: () => {
                        (eh(ej.date), eu(ej.time), ev(`reschedule/${ej.id}`));
                      },
                      children: "Reschedule",
                    }),
                    ex
                      ? (0, a.jsxs)("div", {
                          className: aA,
                          children: [
                            (0, a.jsx)("p", {
                              className: "mb-3 text-xs",
                              children: "Cancel this booking? This cannot be undone.",
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)(aE, {
                                  secondary: !0,
                                  onClick: () => ef(!1),
                                  children: "Keep booking",
                                }),
                                (0, a.jsx)(aE, {
                                  onClick: () => {
                                    (ew({ status: "Cancelled" }), ef(!1), Z("Booking cancelled."));
                                  },
                                  children: "Yes, cancel",
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, a.jsx)(aE, {
                          secondary: !0,
                          onClick: () => ef(!0),
                          children: "Cancel Booking",
                        }),
                  ],
                }),
              "Ongoing" === ej.status &&
                (0, a.jsx)(aE, { onClick: () => ev("repair"), children: "Track Active Repair" }),
              "Completed" === ej.status &&
                (0, a.jsx)(aE, {
                  onClick: () => ev(`repair-details/${ej.id}`),
                  children: "View Repair Details",
                }),
              (0, a.jsx)(aE, {
                secondary: !0,
                onClick: () => ev(`navigation/${ej.shop}`),
                children: "Get Directions",
              }),
              (0, a.jsxs)("a", {
                className:
                  "flex items-center justify-center gap-2 py-3 text-xs font-bold text-[#ffad76]",
                href: `tel:${eb.phone}`,
                children: [(0, a.jsx)(tN.f, { size: 16 }), "Contact Shop"],
              }),
            ],
          });
          break;
        case "reschedule":
          s = (0, a.jsxs)("form", {
            className: "space-y-4",
            onSubmit: (e) => {
              (e.preventDefault(),
                "Upcoming" === ej.status && (ew({ date: em, time: ep }), ev(`booking/${ej.id}`)));
            },
            children: [
              (0, a.jsxs)("p", {
                className: `text-xs ${aR}`,
                children: ["Choose a new date and time for #", ej.id, "."],
              }),
              (0, a.jsxs)("label", {
                className: "block text-xs",
                children: [
                  "Preferred date",
                  (0, a.jsx)("input", {
                    required: !0,
                    type: "date",
                    min: el,
                    className: `${a$} mt-2`,
                    value: em,
                    onChange: (e) => eh(e.target.value),
                  }),
                ],
              }),
              (0, a.jsxs)("label", {
                className: "block text-xs",
                children: [
                  "Preferred time",
                  (0, a.jsx)("select", {
                    className: `${a$} mt-2`,
                    value: ep,
                    onChange: (e) => eu(e.target.value),
                    children: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"].map(
                      (e) =>
                        (0, a.jsx)(
                          "option",
                          {
                            disabled: em === el && e <= new Date().toTimeString().slice(0, 5),
                            children: e,
                          },
                          e,
                        ),
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(aE, {
                type: "submit",
                disabled: em < el || (em === el && ep <= new Date().toTimeString().slice(0, 5)),
                children: "Save new schedule",
              }),
            ],
          });
          break;
        case "repair":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              eR,
              F,
              (0, a.jsx)("div", {
                className: aA,
                children: (0, a.jsx)(az, {
                  rows: [
                    ["Repair number", "RP-1039"],
                    ["Motorcycle", v.bike],
                    ["Shop", "MotoHub Service Center"],
                    ["Assigned mechanic", "Marco Reyes"],
                    ["Current status", "Repair in Progress"],
                    ["Progress", "60%"],
                    ["Est. completion", "Today, 3:30 PM"],
                  ],
                }),
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: "Your repair journey" }),
                  (0, a.jsx)("div", {
                    className: aA,
                    children: aC.map((e, t) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "relative flex items-start gap-3 pb-5 last:pb-0",
                          children: [
                            t < aC.length - 1 &&
                              (0, a.jsx)("span", {
                                className: `absolute left-[11px] top-6 h-5 w-px ${t < 4 ? "bg-[#ffad76]" : "bg-[#426887]"}`,
                              }),
                            (0, a.jsx)("span", {
                              className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${t <= 4 ? "border-[#ffad76] bg-[#ffad76] text-[#082a4a]" : "border-[#426887] text-[#83a3bd]"}`,
                              children:
                                t < 4
                                  ? (0, a.jsx)(st, { size: 13 })
                                  : (0, a.jsx)("span", {
                                      className: "text-[10px]",
                                      children: t + 1,
                                    }),
                            }),
                            (0, a.jsxs)("span", {
                              className: `pt-1 text-xs ${4 === t ? "font-bold text-[#ffad76]" : t > 4 ? aR : "text-[#edf5ff]"}`,
                              children: [
                                e,
                                4 === t &&
                                  (0, a.jsx)("span", {
                                    className: `mt-1 block text-[10px] font-normal ${aR}`,
                                    children: "Brake pads being replaced",
                                  }),
                              ],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(aE, {
                onClick: () => ev("repair-details"),
                children: "View Repair Details",
              }),
              (0, a.jsx)(aE, {
                secondary: !0,
                onClick: () => ev("updates"),
                children: "View Mechanic Updates",
              }),
              (0, a.jsx)(aE, {
                secondary: !0,
                onClick: () => ev("cost"),
                children: "View Repair Cost",
              }),
            ],
          });
          break;
        case "repair-details": {
          let e = b ? C.find((e) => e.id === b && "Completed" === e.status) : void 0;
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: aA,
                children: (0, a.jsx)(az, {
                  rows: [
                    ["Repair number", e ? `RP-${e.id.slice(3)}` : "RP-1039"],
                    ["Motorcycle", e?.bike || v.bike],
                    ["Shop", e ? h.find((t) => t.id === e.shop).name : h[0].name],
                    ["Assigned mechanic", e ? "Luis Garcia" : "Marco Reyes"],
                    [
                      "Reported problem",
                      e?.problem || "Front brake squeaks; reduced braking response",
                    ],
                    [
                      "Diagnosis",
                      e
                        ? "Routine service; no additional faults"
                        : "Front brake pads worn below safe thickness",
                    ],
                    ["Services performed", e?.service || "Brake inspection, caliper cleaning"],
                    [
                      "Parts replaced",
                      e ? "Engine oil, oil filter" : "Front brake pads (in progress)",
                    ],
                    [
                      "Mechanic notes",
                      e
                        ? "Road-tested and ready for riding."
                        : "Rotor in good condition. Testing to follow.",
                    ],
                    ["Repair progress", e ? "100% · Completed" : "60% · Repair in Progress"],
                    ["Estimated cost", aS(e?.cost || 1250)],
                    ["Final cost", e ? aS(e.cost) : "Pending completion"],
                  ],
                }),
              }),
              (0, a.jsx)(aE, {
                secondary: !0,
                onClick: () => ev(e ? `cost/${e.id}` : "cost"),
                children: "View Cost Breakdown",
              }),
              !e &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    F,
                    (0, a.jsx)(aE, { onClick: () => ev("updates"), children: "View Updates" }),
                  ],
                }),
            ],
          });
          break;
        }
        case "cost": {
          let e = b ? C.find((e) => e.id === b && "Completed" === e.status) : void 0;
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(aD, {
                children: e ? "Final invoice" : "Estimate · Final invoice pending",
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: "Parts used" }),
                  (0, a.jsx)("div", {
                    className: aA,
                    children: (0, a.jsx)(az, {
                      rows: e
                        ? [
                            ["Engine oil · Qty 1", aS(450)],
                            ["Oil filter · Qty 1", aS(250)],
                          ]
                        : [["Brembo brake pads · Qty 1", aS(850)]],
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: "Labor" }),
                  (0, a.jsx)("div", {
                    className: aA,
                    children: (0, a.jsx)(az, {
                      rows: [
                        [e ? "General maintenance" : "Brake service & testing", aS(e ? 500 : 400)],
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "rounded-[20px] border border-[#ffad76] bg-[#16466e] p-4",
                children: (0, a.jsx)(az, {
                  rows: [
                    ["Estimated Total", aS(e?.cost || 1250)],
                    ["Final Total", e ? aS(e.cost) : "Pending completion"],
                  ],
                }),
              }),
              (0, a.jsx)("p", {
                className: `text-xs leading-relaxed ${aR}`,
                children: e
                  ? "Sample completed service invoice."
                  : "The final total will be available after testing. Any extra work requires your approval.",
              }),
            ],
          });
          break;
        }
        case "updates":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("p", {
                className: `text-xs ${aR}`,
                children: "RP-1039 · Updates from Marco Reyes",
              }),
              [
                ["Brake pad replacement in progress", "Oct 2, 2026", "1:15 PM"],
                ["Brake pads need replacement", "Oct 2, 2026", "12:30 PM"],
                ["Inspection completed", "Oct 2, 2026", "11:45 AM"],
                ["Motorcycle received", "Oct 2, 2026", "10:05 AM"],
              ].map(([e, t, s], i) =>
                (0, a.jsx)(
                  "article",
                  {
                    className: aA,
                    children: (0, a.jsxs)("div", {
                      className: "flex gap-3",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#225b86] text-[#ffad76]",
                          children:
                            0 === i ? (0, a.jsx)(ab.f, { size: 16 }) : (0, a.jsx)(sk, { size: 16 }),
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("p", { className: "text-xs font-semibold", children: e }),
                            (0, a.jsxs)("p", {
                              className: `mt-2 text-[10px] ${aR}`,
                              children: [t, " · ", s],
                            }),
                            (0, a.jsx)("p", {
                              className: "mt-1 text-[10px] text-[#ffad76]",
                              children: "Marco Reyes · Mechanic",
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e,
                ),
              ),
              (0, a.jsxs)("div", {
                className: `${aA} text-xs ${aR}`,
                children: [
                  (0, a.jsx)("p", {
                    className: "mb-2 font-semibold text-[#edf5ff]",
                    children: "Coming next",
                  }),
                  "Brake pads replaced → Testing in progress → Repair completed. Future updates appear here when the mechanic posts them.",
                ],
              }),
            ],
          });
          break;
        case "navigation":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(s_, {
                explorable: !0,
                shops: h,
                selected: eg.id,
                onSelect: (e) => ev(`navigation/${e}`),
                route: !0,
              }),
              (0, a.jsxs)("div", {
                className: aA,
                children: [
                  (0, a.jsxs)("div", {
                    className: "mb-4 flex gap-3",
                    children: [
                      (0, a.jsx)(as.f, { className: "shrink-0 text-[#73c6ff]", size: 18 }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-xs font-semibold",
                            children: "Your current location",
                          }),
                          (0, a.jsx)("p", {
                            className: `mt-1 text-[10px] ${aR}`,
                            children: "DNSC, New Visayas, Panabo City",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-3",
                    children: [
                      (0, a.jsx)(sN.f, { className: "shrink-0 text-[#ffad76]", size: 18 }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-xs font-semibold",
                            children: eg.name,
                          }),
                          (0, a.jsx)("p", {
                            className: `mt-1 text-[10px] ${aR}`,
                            children: eg.address,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(aF, { distance: eg.distance }),
              (0, a.jsx)("a", {
                href: sG(eg.address),
                target: "_blank",
                rel: "noreferrer",
                className: "text-center text-xs font-bold text-[#ffad76]",
                children: "Open real directions in Google Maps ↗",
              }),
            ],
          });
          break;
        case "history":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              C.filter((e) => "Completed" === e.status).map((e) =>
                (0, a.jsxs)(
                  "article",
                  {
                    className: aA,
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-[10px] text-[#ffad76]",
                        children: aM(e.date),
                      }),
                      (0, a.jsx)("h3", {
                        className: "mt-2 text-sm font-bold",
                        children: e.service,
                      }),
                      (0, a.jsx)("p", {
                        className: `mt-1 text-xs ${aR}`,
                        children: h.find((t) => t.id === e.shop)?.name,
                      }),
                      (0, a.jsx)("p", {
                        className: `mt-3 text-[11px] ${aR}`,
                        children: "Parts replaced: Engine oil, oil filter",
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-4 flex justify-between",
                        children: [
                          (0, a.jsxs)("strong", {
                            className: "text-sm text-[#ffad76]",
                            children: [aS(e.cost), " total"],
                          }),
                          (0, a.jsx)("button", {
                            className: "text-xs text-[#ffad76]",
                            onClick: () => ev(`repair-details/${e.id}`),
                            children: "View Details →",
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
              !C.some((e) => "Completed" === e.status) &&
                (0, a.jsx)("p", { className: aR, children: "No completed repairs yet." }),
            ],
          });
          break;
        case "notifications":
          s = (0, a.jsx)(tQ, {
            items: [
              [
                "Repair update",
                "Marco is replacing your front brake pads.",
                "Today · 1:15 PM",
                "updates",
              ],
              [
                "Cost updated",
                "Your brake service estimate is ₱1,250.",
                "Today · 12:35 PM",
                "cost",
              ],
              [
                "Part replacement",
                "Front brake pads approved for replacement.",
                "Today · 12:30 PM",
                "repair-details",
              ],
              [
                "Repair started",
                "Your motorcycle is being inspected.",
                "Today · 10:15 AM",
                "repair",
              ],
              [
                "Booking reminder",
                "Oil change on Oct 5 at 9:00 AM.",
                "Today · 8:00 AM",
                "booking/MF-2048",
              ],
              [
                "Booking accepted",
                "MotoHub accepted your oil change booking.",
                "Yesterday · 4:00 PM",
                "booking/MF-2048",
              ],
              [
                "Booking rejected",
                "Pitstop could not accept your requested slot.",
                "Sep 12 · 2:00 PM",
                "shops",
              ],
              [
                "Repair completed",
                "General maintenance is complete.",
                "Sep 10 · 11:00 AM",
                "repair-details/MF-1920",
              ],
              [
                "Ready for pickup",
                "Your motorcycle is ready at Revline Garage.",
                "Sep 10 · 11:15 AM",
                "navigation/revline",
              ],
            ].map(([e, t, s, a], i) => ({
              id: e,
              title: e,
              message: t,
              time: s,
              unread: !ea && i < 2,
              onOpen: () => ev(a),
            })),
            onMarkAll: () => ei(!0),
          });
          break;
        case "expenses":
          s = c.active
            ? (0, a.jsx)(t9, { motorcycles: w.map((e) => e.bike) })
            : (0, a.jsx)(aE, {
                onClick: () => u("expenses"),
                children: "Subscribe to unlock Expense Tracker",
              });
          break;
        case "subscriptions":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("section", {
                className: `${aA} space-y-3`,
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-sm font-bold",
                        children: "Current subscription",
                      }),
                      (0, a.jsx)(aD, {
                        children: c.active
                          ? "Active"
                          : c.cancelled
                            ? "Cancelled"
                            : c.plan
                              ? "Expired"
                              : "Not subscribed",
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "text-base font-bold",
                    children: c.active
                      ? `${c.plan} rider plan`
                      : c.cancelled
                        ? "Your subscription is cancelled"
                        : c.plan
                          ? `${c.plan} plan expired`
                          : "No active subscription",
                  }),
                  c.active &&
                    (0, a.jsxs)("p", {
                      className: `text-xs ${aR}`,
                      children: [
                        "Active through ",
                        new Date(c.expiresAt).toLocaleDateString(),
                        ".",
                      ],
                    }),
                  (0, a.jsx)("p", {
                    className: `text-xs leading-relaxed ${aR}`,
                    children: "Choose a plan below to unlock shop subscription benefits.",
                  }),
                  c.active &&
                    (g
                      ? (0, a.jsxs)("div", {
                          className: "space-y-3 rounded-xl border border-[#eaa16f] p-3",
                          children: [
                            (0, a.jsx)("p", {
                              className: "text-xs",
                              children:
                                "Cancel this plan now? Subscription features will be locked immediately.",
                            }),
                            (0, a.jsx)(aE, {
                              onClick: () => {
                                c.cancel()
                                  ? (j(!1),
                                    Z(
                                      "Subscription cancelled. Rider plan features are now locked.",
                                    ))
                                  : Z(
                                      "Unable to cancel the demo subscription. Check browser storage and try again.",
                                    );
                              },
                              children: "Confirm cancellation",
                            }),
                            (0, a.jsx)(aE, {
                              secondary: !0,
                              onClick: () => j(!1),
                              children: "Keep subscription",
                            }),
                          ],
                        })
                      : (0, a.jsx)(aE, {
                          secondary: !0,
                          onClick: () => j(!0),
                          children: "Cancel subscription",
                        })),
                ],
              }),
              (0, a.jsx)(aT, { title: "Available subscription types" }),
              (0, a.jsx)("div", {
                className: "so-subscription-options",
                children: sf.map((e, t) =>
                  (0, a.jsxs)(
                    "article",
                    {
                      className: `${aA} so-subscription-option`,
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center justify-between gap-2",
                          children: [
                            (0, a.jsx)("h2", { className: "text-sm font-bold", children: e.label }),
                            c.active &&
                              c.plan === e.label &&
                              (0, a.jsx)(aD, { children: "Current plan" }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl font-bold text-[#ffad76]",
                          children: aS(sg.rider[t]),
                        }),
                        (0, a.jsxs)("p", {
                          className: `text-xs ${aR}`,
                          children: [
                            e.months,
                            " ",
                            1 === e.months ? "month" : "months",
                            " · one-time demo payment",
                          ],
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2 text-xs",
                          children: [
                            (0, a.jsxs)("li", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)(s2.f, {
                                  size: 15,
                                  className: "shrink-0 text-[#ffad76]",
                                }),
                                "Unlimited repair bookings",
                              ],
                            }),
                            (0, a.jsxs)("li", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)(s2.f, {
                                  size: 15,
                                  className: "shrink-0 text-[#ffad76]",
                                }),
                                "Expense Tracker access",
                              ],
                            }),
                            (0, a.jsxs)("li", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)(s2.f, {
                                  size: 15,
                                  className: "shrink-0 text-[#ffad76]",
                                }),
                                "No ₱2 MotoFix fee on motorcycle-part purchases while active",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(aE, {
                          onClick: () => {
                            (f(t), u("subscriptions"));
                          },
                          children: c.active
                            ? c.plan === e.label
                              ? "Renew this plan"
                              : "Switch to this plan"
                            : "Choose this plan",
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          });
          break;
        case "billing":
          s = (0, a.jsxs)("form", {
            className: "space-y-4",
            onSubmit: (e) => {
              (e.preventDefault(),
                k({
                  ...v,
                  name: $.name.trim(),
                  email: $.email.trim(),
                  phone: $.phone.trim(),
                  address: $.address?.trim() || "",
                  city: $.city?.trim() || "",
                  postalCode: $.postalCode?.trim() || "",
                }),
                Z("Billing details saved for demo checkout."));
            },
            children: [
              (0, a.jsx)("p", {
                className: `text-xs leading-relaxed ${aR}`,
                children:
                  "Saved billing details prefill your simulated MotoFix checkout. No payment is processed.",
              }),
              [
                ["Full name", "name", "text"],
                ["Email address", "email", "email"],
                ["Mobile number", "phone", "tel"],
                ["Billing address", "address", "text"],
                ["City", "city", "text"],
                ["Postal code", "postalCode", "text"],
              ].map(([e, t, s]) =>
                (0, a.jsxs)(
                  "label",
                  {
                    className: "block text-xs",
                    children: [
                      e,
                      (0, a.jsx)("input", {
                        required: !0,
                        type: s,
                        className: `${a$} mt-2`,
                        value: $[t] || "",
                        onChange: (e) => E({ ...$, [t]: e.target.value }),
                      }),
                    ],
                  },
                  t,
                ),
              ),
              (0, a.jsx)(aE, { type: "submit", children: "Save Billing Details" }),
            ],
          });
          break;
        case "customization":
          s = (0, a.jsxs)("section", {
            className: `${aA} space-y-3`,
            children: [
              (0, a.jsx)("h2", { className: "text-sm font-bold", children: "Dashboard spacing" }),
              (0, a.jsx)("p", {
                className: `text-xs leading-relaxed ${aR}`,
                children: "Choose how much space to show between items on your rider home screen.",
              }),
              ["Comfortable", "Compact"].map((e) =>
                (0, a.jsxs)(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": z === e,
                    onClick: () => {
                      (T({ dashboardDensity: e }), Z(`${e} dashboard spacing saved.`));
                    },
                    className: `flex w-full items-center justify-between rounded-xl border p-3 text-left text-xs ${z === e ? "border-[#ffad76] bg-[#16466e]" : "border-[#406687] bg-[#0b3153]"}`,
                    children: [
                      e,
                      z === e && (0, a.jsx)(st, { size: 16, className: "text-[#ffad76]" }),
                    ],
                  },
                  e,
                ),
              ),
            ],
          });
          break;
        case "profile":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "py-2 text-center",
                children: [
                  (0, a.jsx)("div", {
                    role: "img",
                    "aria-label": `${v.name} profile avatar`,
                    className:
                      "mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-[26px] border-2 border-[#ffad76] bg-[#225b86] text-2xl font-bold text-[#ffad76]",
                    children: v.photo
                      ? (0, a.jsx)(eV.default, {
                          width: 600,
                          height: 400,
                          src: v.photo,
                          alt: `${v.name} profile photo`,
                          className: "h-full w-full object-cover",
                        })
                      : v.name
                          .split(" ")
                          .map((e) => e[0])
                          .slice(0, 2)
                          .join(""),
                  }),
                  (0, a.jsxs)("label", {
                    className:
                      "mx-auto mt-3 inline-flex min-h-9 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#406687] bg-[#0b3153] px-3 text-xs font-semibold text-[#edf5ff]",
                    children: [
                      (0, a.jsx)("input", {
                        type: "file",
                        accept: "image/*",
                        className: "sr-only",
                        "aria-label": "Upload profile photo",
                        onChange: async (e) => {
                          let t = e.currentTarget.files?.[0];
                          if (((e.currentTarget.value = ""), t))
                            try {
                              let e = await sJ(t);
                              (k((t) => ({ ...t, photo: e })), Z("Profile photo updated."));
                            } catch (e) {
                              Z(
                                e instanceof Error
                                  ? e.message
                                  : "Unable to update your profile photo.",
                              );
                            }
                        },
                      }),
                      (0, a.jsx)(sZ, { size: 15 }),
                      (0, a.jsx)("span", {
                        children: v.photo ? "Change photo" : "Upload profile photo",
                      }),
                    ],
                  }),
                  v.photo &&
                    (0, a.jsx)("button", {
                      type: "button",
                      className: "mt-2 text-[11px] text-[#b4cde2] underline underline-offset-2",
                      onClick: () => {
                        (k((e) => ({ ...e, photo: "" })), Z("Profile photo removed."));
                      },
                      children: "Remove photo",
                    }),
                  (0, a.jsx)("h2", { className: "mt-3 text-xl font-bold", children: v.name }),
                  t.displayId &&
                    (0, a.jsxs)("p", {
                      className: `mt-1 text-xs ${aR}`,
                      children: ["ID: ", t.displayId],
                    }),
                ],
              }),
              (0, a.jsx)(aT, { title: "Profile" }),
              (0, a.jsxs)("button", {
                onClick: () => ev("motorcycles"),
                className: `${aA} flex w-full items-center gap-3 text-left`,
                children: [
                  (0, a.jsx)(sK.f, { size: 28, className: "text-[#ffad76]" }),
                  (0, a.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      (0, a.jsx)("strong", { className: "text-sm", children: v.bike }),
                      (0, a.jsxs)("p", {
                        className: `mt-1 text-[10px] ${aR}`,
                        children: [v.year, " · ", v.plate, " · ", w.length, " saved"],
                      }),
                    ],
                  }),
                  (0, a.jsx)(s3, { size: 17 }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: aA,
                children: [
                  eE("Account", "edit", aj),
                  eE("Settings", "settings", ah),
                  eE("Send a Complaint", "complaints", tB.f),
                  eE("Service History", "history", s7),
                  eE("Saved Motor Shops", "saved", s9),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mt-4 border-t border-[#31597c] pt-4",
                children: (0, a.jsxs)("button", {
                  type: "button",
                  onClick: e,
                  className: `${aA} flex w-full items-center gap-3 text-left text-sm text-[#ffad76]`,
                  children: [
                    (0, a.jsx)(ai, { size: 18 }),
                    (0, a.jsx)("span", { children: "Logout" }),
                  ],
                }),
              }),
            ],
          });
          break;
        case "settings":
          s = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: aA,
              children: [
                eE("Subscriptions", "subscriptions", si),
                eE("Billing", "billing", t5.f),
                eE("Customization Preference", "customization", al),
                eE("Notifications", "notifications", tK),
                eE("Security", "security", tB.f),
                eE("Help & Support", "help", tN.f),
              ],
            }),
          });
          break;
        case "complaints":
          s = (0, a.jsx)(t_, {
            mode: "rider",
            rider: { id: "demo-rider", name: v.name, email: v.email, phone: v.phone },
            services: [
              {
                id: "RP-1039",
                shop: I.owner.name,
                shopId: "motohub",
                motorcycle: v.bike,
                service: "Active motorcycle repair",
                mechanic: I.mechanic.name,
              },
              ...C.map((e) => {
                let t = h.find((t) => t.id === e.shop);
                return {
                  id: e.id,
                  shop: t?.name || e.shop,
                  shopId: t?.id || e.shop,
                  motorcycle: e.bike,
                  service: e.service,
                  mechanic: t?.id === "motohub" ? I.mechanic.name : void 0,
                };
              }),
            ],
          });
          break;
        case "edit":
          s = (0, a.jsxs)("form", {
            className: "space-y-4",
            onSubmit: (e) => {
              (e.preventDefault(),
                k({ ...v, name: $.name.trim(), phone: $.phone.trim(), email: $.email.trim() }),
                ev("profile"));
            },
            children: [
              [
                ["Full name", "name", "text"],
                ["Mobile number", "phone", "tel"],
                ["Email", "email", "email"],
              ].map(([e, t, s]) =>
                (0, a.jsxs)(
                  "label",
                  {
                    className: "block text-xs",
                    children: [
                      e,
                      (0, a.jsx)("input", {
                        required: !0,
                        type: s,
                        className: `${a$} mt-2`,
                        value: $[t],
                        onChange: (e) => E({ ...$, [t]: e.target.value }),
                      }),
                    ],
                  },
                  t,
                ),
              ),
              (0, a.jsx)(aE, {
                type: "submit",
                disabled: !$.name.trim(),
                children: "Save Profile",
              }),
            ],
          });
          break;
        case "motorcycles":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex h-32 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#225b86] to-[#123f65] text-[#ffad76]",
                children: (0, a.jsx)(sK.f, { size: 85, strokeWidth: 1.2 }),
              }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(aT, { title: `Saved motorcycles (${w.length})` }),
                  (0, a.jsx)("div", {
                    className: "space-y-3",
                    children: w.map((e) => {
                      let t = e.bike === v.bike && e.plate === v.plate;
                      return (0, a.jsxs)(
                        "article",
                        {
                          className: `${aA} flex w-full items-center gap-3 ${t ? "border-[#ffad76]!" : ""}`,
                          children: [
                            (0, a.jsxs)("button", {
                              type: "button",
                              onClick: () => {
                                (k({ ...v, bike: e.bike, plate: e.plate, year: e.year }),
                                  Z(`${e.bike} is now your active motorcycle.`));
                              },
                              className: "flex min-w-0 flex-1 items-center gap-3 text-left",
                              children: [
                                (0, a.jsx)("span", {
                                  className:
                                    "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#082a4a] text-[#ffad76]",
                                  children: e.photo
                                    ? (0, a.jsx)(eV.default, {
                                        width: 600,
                                        height: 400,
                                        src: e.photo,
                                        alt: "",
                                        className: "h-full w-full object-cover",
                                      })
                                    : (0, a.jsx)(sK.f, { size: 23 }),
                                }),
                                (0, a.jsxs)("span", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    (0, a.jsx)("strong", {
                                      className: "block truncate text-sm",
                                      children: e.bike,
                                    }),
                                    (0, a.jsxs)("span", {
                                      className: `mt-1 block text-[10px] ${aR}`,
                                      children: [e.year, " · ", e.plate],
                                    }),
                                  ],
                                }),
                                t
                                  ? (0, a.jsxs)("span", {
                                      className:
                                        "flex items-center gap-1 text-[10px] font-bold text-[#ffad76]",
                                      children: [(0, a.jsx)(st, { size: 14 }), " Active"],
                                    })
                                  : (0, a.jsx)("span", {
                                      className: `text-[10px] ${aR}`,
                                      children: "Set active",
                                    }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              className:
                                "inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[#406687] bg-[#0b3153] px-2 text-[10px] font-semibold text-[#ffad76]",
                              title: `Upload photo for ${e.bike}`,
                              children: [
                                (0, a.jsx)("input", {
                                  type: "file",
                                  accept: "image/*",
                                  className: "sr-only",
                                  "aria-label": `Upload photo for ${e.bike}`,
                                  onChange: async (t) => {
                                    let s = t.currentTarget,
                                      a = s.files?.[0];
                                    if (((s.value = ""), a))
                                      try {
                                        let t = await sJ(a);
                                        (N((s) =>
                                          s.map((s) => (s.id === e.id ? { ...s, photo: t } : s)),
                                        ),
                                          Z(`${e.bike} photo updated.`));
                                      } catch (e) {
                                        Z(
                                          e instanceof Error
                                            ? e.message
                                            : "Unable to update the motorcycle photo.",
                                        );
                                      }
                                  },
                                }),
                                "Add picture",
                              ],
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(aT, { title: "Add another motorcycle" }),
              (0, a.jsxs)("form", {
                className: "space-y-4",
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = {
                    id: crypto.randomUUID(),
                    bike: L.bike.trim(),
                    plate: L.plate.trim(),
                    year: L.year.trim(),
                    photo: L.photo,
                  };
                  (N((e) => {
                    let s = e.find((e) => e.plate.toLowerCase() === t.plate.toLowerCase());
                    return s ? e.map((e) => (e.id === s.id ? { ...t, id: s.id } : e)) : [...e, t];
                  }),
                    k({ ...v, bike: t.bike, plate: t.plate, year: t.year }),
                    O({ bike: "", plate: "", year: "", photo: "" }),
                    Z("Motorcycle saved and set as active."));
                },
                children: [
                  [
                    ["Motorcycle make & model", "bike"],
                    ["Plate number", "plate"],
                    ["Model year", "year"],
                  ].map(([e, t]) =>
                    (0, a.jsxs)(
                      "label",
                      {
                        className: "block text-xs",
                        children: [
                          e,
                          (0, a.jsx)("input", {
                            required: !0,
                            className: `${a$} mt-2`,
                            value: L[t],
                            onChange: (e) => O({ ...L, [t]: e.target.value }),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                  (0, a.jsxs)("label", {
                    className: "block text-xs",
                    children: [
                      "Motorcycle photo (optional)",
                      (0, a.jsx)("input", {
                        type: "file",
                        accept: "image/*",
                        className: `${a$} mt-2`,
                        onChange: async (e) => {
                          let t = e.currentTarget,
                            s = t.files?.[0];
                          if (((t.value = ""), s))
                            try {
                              let e = await sJ(s);
                              (O((t) => ({ ...t, photo: e })),
                                Z("Motorcycle photo ready to save."));
                            } catch (e) {
                              Z(
                                e instanceof Error
                                  ? e.message
                                  : "Unable to read that motorcycle photo.",
                              );
                            }
                        },
                      }),
                      L.photo &&
                        (0, a.jsx)(eV.default, {
                          width: 600,
                          height: 400,
                          src: L.photo,
                          alt: "Motorcycle photo preview",
                          className: "mt-3 h-32 w-full rounded-xl object-cover",
                        }),
                    ],
                  }),
                  (0, a.jsx)(aE, {
                    type: "submit",
                    disabled: !L.bike.trim() || !L.plate.trim() || !L.year.trim(),
                    children: "Add Motorcycle",
                  }),
                ],
              }),
              (0, a.jsx)(aE, {
                secondary: !0,
                onClick: () => ev("history"),
                children: "View Service History",
              }),
            ],
          });
          break;
        case "saved":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              h.filter((e) => M.includes(e.id)).map(eP),
              !M.length &&
                (0, a.jsx)("p", {
                  className: `text-xs ${aR}`,
                  children: "Tap the heart on a motor shop to save it here.",
                }),
              (0, a.jsx)(aE, {
                secondary: !0,
                onClick: () => ev("shops"),
                children: "Explore Shops",
              }),
            ],
          });
          break;
        case "security":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: aA,
                children: [
                  (0, a.jsx)(tB.f, { className: "mb-3 text-[#ffad76]" }),
                  (0, a.jsx)("h2", {
                    className: "text-sm font-bold",
                    children: "Account security",
                  }),
                  (0, a.jsx)("p", {
                    className: `mt-2 text-xs leading-relaxed ${aR}`,
                    children:
                      "Your MotoFix account uses server-side password authentication. Enter your current password to make a change.",
                  }),
                ],
              }),
              (0, a.jsxs)("form", {
                className: "rider-security-form",
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = e.currentTarget,
                    s = new FormData(t),
                    a = String(s.get("currentPassword") || ""),
                    i = String(s.get("newPassword") || "");
                  i !== String(s.get("confirmPassword") || "")
                    ? Z("New passwords do not match.")
                    : (et(!0),
                      tl(a, i)
                        .then(() => {
                          (Z("Your password was updated."), t.reset());
                        })
                        .catch((e) =>
                          Z(e instanceof Error ? e.message : "Unable to update your password."),
                        )
                        .finally(() => et(!1)));
                },
                children: [
                  (0, a.jsxs)("label", {
                    children: [
                      "Current password",
                      (0, a.jsx)("input", {
                        className: a$,
                        name: "currentPassword",
                        type: "password",
                        autoComplete: "current-password",
                        required: !0,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("label", {
                    children: [
                      "New password",
                      (0, a.jsx)("input", {
                        className: a$,
                        name: "newPassword",
                        type: "password",
                        autoComplete: "new-password",
                        minLength: 8,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("label", {
                    children: [
                      "Confirm new password",
                      (0, a.jsx)("input", {
                        className: a$,
                        name: "confirmPassword",
                        type: "password",
                        autoComplete: "new-password",
                        minLength: 8,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, a.jsx)(aE, {
                    secondary: !0,
                    type: "submit",
                    disabled: ee,
                    children: ee ? "Updating…" : "Change Password",
                  }),
                ],
              }),
            ],
          });
          break;
        case "help":
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: aA,
                children: [
                  (0, a.jsx)("h2", {
                    className: "text-sm font-bold",
                    children: "How can we help?",
                  }),
                  (0, a.jsx)("p", {
                    className: `mt-2 text-xs leading-relaxed ${aR}`,
                    children:
                      "For booking or repair questions, contact your shop directly. Bookings and reservations sync with your MotoFix account.",
                  }),
                ],
              }),
              [
                "How do I book a repair?",
                "Can I cancel or reschedule?",
                "How are repair costs calculated?",
              ].map((e, t) =>
                (0, a.jsxs)(
                  "details",
                  {
                    className: aA,
                    children: [
                      (0, a.jsx)("summary", {
                        className: "cursor-pointer text-xs font-bold",
                        children: e,
                      }),
                      (0, a.jsx)("p", {
                        className: `mt-3 text-xs leading-relaxed ${aR}`,
                        children: [
                          "Tap Book Repair, select your shop and motorcycle, choose a service and time, then confirm the review.",
                          "Open My Bookings and select View Details. Upcoming bookings can be cancelled or rescheduled.",
                          "The estimate combines parts and labor. A final total is shown once work is complete; extra work requires approval.",
                        ][t],
                      }),
                    ],
                  },
                  e,
                ),
              ),
              (0, a.jsx)(aE, { onClick: () => ev(`shop/${Y}`), children: "Contact My Shop" }),
            ],
          });
          break;
        default:
          s = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("p", { children: "That rider screen was not found." }),
              (0, a.jsx)(aE, { onClick: () => ev("home"), children: "Return Home" }),
            ],
          });
      }
      return (0, a.jsxs)("div", {
        "data-page": l,
        "data-dashboard-density": z.toLowerCase(),
        className:
          "rider-workspace h-full bg-gradient-to-b from-[#10436e] to-[#082a4a] text-[#edf5ff]",
        children: [
          (0, a.jsxs)("div", {
            ref: y,
            className:
              "rider-content h-full overflow-y-auto px-5 pb-28 pt-14 [scrollbar-width:none]",
            children: [
              "home" !== l &&
                (0, a.jsxs)("header", {
                  className: "mb-5 flex items-center gap-3",
                  children: [
                    (0, a.jsx)("button", {
                      "aria-label": "Go back",
                      className: "rounded-xl border border-[#31597c] bg-[#16466e] p-2",
                      onClick: () => {
                        "book" === l && en > 0
                          ? eo(en - 1)
                          : "default" !== n.key
                            ? r(-1)
                            : ev("home");
                      },
                      children: (0, a.jsx)(ss.f, { size: 19 }),
                    }),
                    (0, a.jsx)("h1", {
                      className: "flex-1 text-[19px] font-bold",
                      children:
                        {
                          home: "",
                          search: "Search results",
                          shops: "Find motor shops",
                          shop: "Motor shop",
                          parts: "Find motorcycle parts",
                          part: "Part details",
                          book: "Book a repair",
                          confirmation: "Booking confirmed",
                          bookings: "My bookings",
                          expenses: "Expense Tracker",
                          booking: "Booking details",
                          reschedule: "Reschedule booking",
                          repair: "Active repair",
                          "repair-details": "Repair details",
                          cost: "Repair cost",
                          updates: "Repair updates",
                          navigation: "Get directions",
                          history: "Service history",
                          notifications: "Notifications",
                          profile: "My profile",
                          settings: "Settings",
                          edit: "Account",
                          motorcycles: "My motorcycles",
                          complaints: "Send a Complaint",
                          saved: "Saved motor shops",
                          security: "Security",
                          help: "Help & support",
                          subscriptions: "Subscriptions",
                          billing: "Billing",
                          customization: "Customization Preference",
                        }[l] || "MotoFix",
                    }),
                    "notifications" !== l &&
                      (0, a.jsx)("button", {
                        "aria-label": "Notifications",
                        onClick: () => ev("notifications"),
                        className: "p-2 text-[#ffad76]",
                        children: (0, a.jsx)(tK, { size: 18 }),
                      }),
                  ],
                }),
              (0, a.jsxs)("div", {
                className: "rider-page-content space-y-5",
                children: [
                  "book" === l && ey && !c.active
                    ? (0, a.jsx)(aE, {
                        onClick: () => u("book"),
                        children: "Subscribe for unlimited bookings",
                      })
                    : s,
                  Q &&
                    (0, a.jsx)("div", {
                      role: "status",
                      className:
                        "rounded-xl border border-[#ffad76] bg-[#16466e] p-3 text-xs text-[#ffd0ae]",
                      children: Q,
                    }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("nav", {
            "aria-label": "Rider navigation",
            className:
              "absolute inset-x-0 bottom-0 z-10 flex h-20 items-start justify-around border-t border-[#31597c] bg-[#082a4a] px-2 pt-3",
            children: [
              (0, a.jsx)(tJ, { to: "/rider/home" }),
              [
                ["Home", "home", at],
                ["Bookings", "bookings", s1],
                ["Expense Tracker", "expenses", t5.f],
                ["Profile", "profile", aj],
              ].map(([e, t, s]) =>
                (0, a.jsxs)(
                  "button",
                  {
                    "aria-current": eM === t ? "page" : void 0,
                    onClick: () => ev(t),
                    className: `flex min-h-14 min-w-12 flex-col items-center gap-[7px] rounded-xl px-1 py-2 text-xs ${eM === t ? "text-[#ffad76]" : "text-[#9fbcd3]"}`,
                    children: [(0, a.jsx)(s, { size: 21, strokeWidth: eM === t ? 2.2 : 1.6 }), e],
                  },
                  t,
                ),
              ),
            ],
          }),
          p &&
            (0, a.jsx)(sy, {
              role: "rider",
              billing: v,
              initialPlan: "subscriptions" === p ? x : 0,
              fixedPlan: "subscriptions" === p,
              reason:
                "book" === p
                  ? "Your first three repair bookings are free. Subscribe to make your fourth booking and keep booking without limits."
                  : "subscriptions" === p
                    ? "Confirm your selected rider subscription plan."
                    : "Subscribe to unlock Expense Tracker and keep your motorcycle expenses organized.",
              onClose: () => {
                (u(null), ("expenses" === l || ("book" === l && ey)) && r("/rider/home"));
              },
              onPaid: (e) =>
                !!c.activate(e) &&
                (u(null),
                r(`/rider/${p}`),
                Z(
                  "subscriptions" === p
                    ? "Demo subscription activated. Your rider plan is now active."
                    : "Demo subscription activated. Your included features are now unlocked.",
                ),
                !0),
            }),
        ],
      });
    }
    let aB = {
      name: "file-check-corner",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",
            key: "g5mvt7",
          },
        ],
        ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
        ["path", { d: "m14 20 2 2 4-4", key: "15kota" }],
      ],
      aliases: ["file-check-2"],
    };
    aB.node;
    let aU = (0, tC.f)(aB),
      aq = [
        [
          "registration",
          "DTI / SEC / CDA registration",
          "Match the certificate to your selected business structure.",
        ],
        [
          "bir",
          "BIR Certificate of Registration",
          "BIR Form 2303 or applicable registration certificate.",
        ],
        [
          "permit",
          "Panabo City business / mayor’s permit",
          "Current permit with the legal name and business address.",
        ],
        [
          "barangay",
          "Barangay business clearance",
          "Clearance from the barangay where the shop operates.",
        ],
        ["fire", "Fire safety inspection certificate", "Current FSIC for the business premises."],
        [
          "identity",
          "Authorized owner / representative ID",
          "Sample government-issued ID and authorization if applicable.",
        ],
        [
          "address",
          "Proof of business premises",
          "Lease, ownership document, or utility bill matching the shop address.",
        ],
      ];
    function aH({ shop: e }) {
      let [t, s] = tq("motofix-business-legitimacy-v1", {
          legalName: "",
          tradeName: e.name,
          entity: "Sole proprietorship (DTI)",
          owner: "",
          email: "",
          phone: e.phone,
          address: e.address,
          registration: "",
          registeredOn: "",
          tin: "",
          bir: "",
          permit: "",
          permitIssued: "",
          permitExpiry: "",
          barangay: "",
          fireCertificate: "",
          fireExpiry: "",
          sanitaryApplicable: !1,
          sanitaryPermit: "",
          documents: {},
          status: "Draft",
          submitted: "",
        }),
        [r, n] = (0, i.useState)(t),
        [o, l] = (0, i.useState)(!1),
        [c, d] = (0, i.useState)(""),
        [m, h] = (0, i.useState)(""),
        [p, u] = (0, i.useState)(""),
        [x, f] = (0, i.useState)(!1),
        [g, j] = (0, i.useState)(!1),
        b = new Date().toISOString().slice(0, 10),
        y = [
          ...aq,
          ...(r.sanitaryApplicable
            ? [
                [
                  "sanitary",
                  "Sanitary / health permit",
                  "Include when required for your business by the LGU.",
                ],
              ]
            : []),
        ],
        v = (e) => {
          try {
            (s(e),
              n(e),
              l(!1),
              f(!1),
              h(""),
              u(
                "Submitted for demo review" === e.status
                  ? "Documents submitted for demo review. No actual business verification has taken place."
                  : "Business legitimacy draft saved.",
              ));
          } catch {
            (f(!1), h("Unable to save your details. Check device storage."));
          }
        },
        k = (e, t, s = "text", i = !0) =>
          (0, a.jsxs)("label", {
            className: "so-field",
            children: [
              (0, a.jsxs)("span", { children: [t, i && (0, a.jsx)("em", { children: " *" })] }),
              (0, a.jsx)("input", {
                type: s,
                required: i,
                value: String(r[e] || ""),
                maxLength: 200,
                max: "date" === s && ["registeredOn", "permitIssued"].includes(e) ? b : void 0,
                min: "date" === s && ["permitExpiry", "fireExpiry"].includes(e) ? b : void 0,
                onChange: (t) => n({ ...r, [e]: t.target.value }),
              }),
            ],
          });
      return (0, a.jsxs)("section", {
        className: "mf-workflow",
        children: [
          (0, a.jsxs)("div", {
            className: "so-callout",
            children: [
              (0, a.jsx)(tB.f, { size: 20 }),
              (0, a.jsxs)("p", {
                children: [
                  (0, a.jsx)("strong", { children: "Business legitimacy & documents" }),
                  "Maintain your registration, permits, and proof of operation. This is a MotoFix demo checklist, not legal certification. Requirements vary by business type and Panabo City LGU rules.",
                ],
              }),
            ],
          }),
          m && (0, a.jsx)("p", { className: "mf-feedback mf-error", role: "alert", children: m }),
          p && (0, a.jsx)("p", { className: "mf-feedback", role: "status", children: p }),
          o
            ? (0, a.jsxs)("form", {
                className: "so-form",
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = y.filter(([e]) => !r.documents[e]);
                  t.length
                    ? h(`Upload the required documents: ${t.map((e) => e[1]).join(", ")}.`)
                    : r.permitExpiry < r.permitIssued
                      ? h("Business permit expiry must be on or after its issue date.")
                      : g
                        ? (h(""), f(!0))
                        : h("Confirm the declaration before submitting.");
                },
                children: [
                  (0, a.jsx)("h3", { children: "1. Registered business" }),
                  k("legalName", "Registered legal business name"),
                  k("tradeName", "Shop / trade name"),
                  (0, a.jsxs)("label", {
                    className: "so-field",
                    children: [
                      (0, a.jsxs)("span", {
                        children: ["Business structure ", (0, a.jsx)("em", { children: "*" })],
                      }),
                      (0, a.jsx)("select", {
                        value: r.entity,
                        onChange: (e) => n({ ...r, entity: e.target.value }),
                        children: [
                          "Sole proprietorship (DTI)",
                          "Partnership (SEC)",
                          "Corporation (SEC)",
                          "Cooperative (CDA)",
                        ].map((e) => (0, a.jsx)("option", { children: e }, e)),
                      }),
                    ],
                  }),
                  k("owner", "Owner / authorized representative"),
                  k("email", "Business email", "email"),
                  k("phone", "Business contact number", "tel"),
                  k("address", "Registered business address"),
                  (0, a.jsx)("p", {
                    className: "mf-caption",
                    children:
                      "Include street, barangay, and Panabo City. The registered name and address should match your certificates.",
                  }),
                  (0, a.jsx)("h3", { children: "2. Registration & current permits" }),
                  k("registration", "DTI / SEC / CDA registration number"),
                  k("registeredOn", "Registration date", "date"),
                  k("tin", "Business TIN"),
                  k("bir", "BIR registration / certificate number"),
                  k("permit", "Business / mayor’s permit number"),
                  (0, a.jsx)("p", {
                    className: "mf-caption",
                    children: "Issuing LGU: Panabo City",
                  }),
                  k("permitIssued", "Business permit issue date", "date"),
                  k("permitExpiry", "Business permit expiry", "date"),
                  k("barangay", "Barangay clearance number"),
                  k("fireCertificate", "Fire safety inspection certificate number"),
                  k("fireExpiry", "Fire certificate expiry", "date"),
                  (0, a.jsxs)("label", {
                    className: "mf-checkbox",
                    children: [
                      (0, a.jsx)("input", {
                        type: "checkbox",
                        checked: r.sanitaryApplicable,
                        onChange: (e) => n({ ...r, sanitaryApplicable: e.target.checked }),
                      }),
                      (0, a.jsx)("span", {
                        children:
                          "My business requires a sanitary / health permit under applicable LGU rules.",
                      }),
                    ],
                  }),
                  r.sanitaryApplicable && k("sanitaryPermit", "Sanitary / health permit number"),
                  (0, a.jsx)("h3", { children: "3. Supporting documents" }),
                  (0, a.jsx)("p", {
                    className: "mf-caption",
                    children:
                      "PDF / JPG / PNG · up to 5 MB per file. Files are stored in this browser only. The following is the app’s review checklist; confirm applicable requirements with the LGU.",
                  }),
                  y.map(([e, t, s]) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: "mf-document",
                        children: [
                          (0, a.jsxs)("label", {
                            className: "so-field",
                            children: [
                              (0, a.jsxs)("span", {
                                children: [t, " ", (0, a.jsx)("em", { children: "*" })],
                              }),
                              (0, a.jsx)("small", { children: s }),
                              (0, a.jsx)("input", {
                                type: "file",
                                accept: "application/pdf,image/jpeg,image/png",
                                disabled: !!c,
                                onChange: async (t) => {
                                  let s = t.target.files?.[0];
                                  if (((t.target.value = ""), s)) {
                                    (d(e), h(""));
                                    try {
                                      let t = await tH(s);
                                      n((s) => ({ ...s, documents: { ...s.documents, [e]: t } }));
                                    } catch (e) {
                                      h(e.message);
                                    } finally {
                                      d("");
                                    }
                                  }
                                },
                              }),
                            ],
                          }),
                          r.documents[e] &&
                            (0, a.jsxs)("div", {
                              className: "mf-file-row",
                              children: [
                                (0, a.jsx)("span", { children: r.documents[e].name }),
                                (0, a.jsx)("button", {
                                  type: "button",
                                  className: "so-button",
                                  onClick: () => {
                                    let t = { ...r.documents };
                                    (delete t[e], n({ ...r, documents: t }));
                                  },
                                  children: "Remove",
                                }),
                              ],
                            }),
                          c === e &&
                            (0, a.jsx)("small", { role: "status", children: "Saving document…" }),
                        ],
                      },
                      e,
                    ),
                  ),
                  (0, a.jsx)("h3", { children: "4. Declaration & submission" }),
                  (0, a.jsxs)("label", {
                    className: "mf-checkbox",
                    children: [
                      (0, a.jsx)("input", {
                        type: "checkbox",
                        checked: g,
                        onChange: (e) => j(e.target.checked),
                      }),
                      (0, a.jsx)("span", {
                        children:
                          "I am authorized to represent this business. The details are accurate, documents are current, and I understand this demo does not verify the business.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "so-actions",
                    children: [
                      (0, a.jsx)("button", {
                        type: "button",
                        className: "so-button",
                        disabled: !!c,
                        onClick: () => v({ ...r, status: "Draft", submitted: "" }),
                        children: "Save draft",
                      }),
                      (0, a.jsx)("button", {
                        type: "submit",
                        className: "so-button so-primary",
                        disabled: !!c,
                        children: "Submit for demo review",
                      }),
                    ],
                  }),
                  (0, a.jsx)("button", {
                    type: "button",
                    className: "so-button",
                    disabled: !!c,
                    onClick: () => l(!1),
                    children: "Cancel edits",
                  }),
                ],
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "so-card mf-summary",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "so-card-top",
                        children: [
                          (0, a.jsx)(aU, { size: 20 }),
                          (0, a.jsx)("span", { className: "so-badge warm", children: t.status }),
                        ],
                      }),
                      (0, a.jsx)("h3", {
                        children: t.legalName || "Complete your business legitimacy record",
                      }),
                      (0, a.jsxs)("p", { children: ["Business type: ", t.entity] }),
                      (0, a.jsxs)("p", {
                        children: ["Authorized owner: ", t.owner || "Not provided"],
                      }),
                      (0, a.jsxs)("p", { children: ["Registered address: ", t.address] }),
                      (0, a.jsxs)("p", {
                        children: ["Registration number: ", t.registration || "Not provided"],
                      }),
                      (0, a.jsxs)("p", {
                        children: ["TIN: ", t.tin ? `••• ${t.tin.slice(-4)}` : "Not provided"],
                      }),
                      (0, a.jsxs)("p", {
                        children: ["Business permit: ", t.permit || "Not provided"],
                      }),
                      (0, a.jsxs)("p", {
                        children: [
                          "Permit expiry: ",
                          t.permitExpiry || "Not provided",
                          t.permitExpiry && t.permitExpiry < b
                            ? " · Expired — renewal required"
                            : "",
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        children: [
                          "Fire certificate expiry: ",
                          t.fireExpiry || "Not provided",
                          t.fireExpiry && t.fireExpiry < b ? " · Expired — renewal required" : "",
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        children: ["Documents uploaded: ", Object.keys(t.documents).length],
                      }),
                      t.submitted &&
                        (0, a.jsxs)("p", {
                          children: ["Submitted: ", new Date(t.submitted).toLocaleString("en-PH")],
                        }),
                      Object.entries(t.documents).map(([e, t]) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: "mf-file-row",
                            children: (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("small", {
                                  children: [...aq, ["sanitary", "Sanitary / health permit"]].find(
                                    (t) => t[0] === e,
                                  )?.[1],
                                }),
                                (0, a.jsxs)("button", {
                                  type: "button",
                                  className: "so-button mf-file",
                                  onClick: () => tV(t).catch((e) => h(e.message)),
                                  children: [(0, a.jsx)(tF, { size: 13 }), t.name],
                                }),
                              ],
                            }),
                          },
                          e,
                        ),
                      ),
                    ],
                  }),
                  (0, a.jsx)("button", {
                    className: "so-button so-primary so-wide",
                    onClick: () => {
                      (n(t), l(!0), j(!1), u(""));
                    },
                    children: t.legalName
                      ? "Edit legitimacy information & documents"
                      : "Add legitimacy information & documents",
                  }),
                  (0, a.jsx)("p", {
                    className: "mf-caption",
                    children:
                      "A submission is not a verified badge. Demo data and uploaded files remain in this browser. Upload sample documents only, not real IDs, tax records, or confidential information.",
                  }),
                ],
              }),
          x &&
            (0, a.jsx)(tW, {
              title: "Submit legitimacy documents?",
              confirm: "Submit for demo review",
              onClose: () => f(!1),
              onConfirm: () =>
                v({
                  ...r,
                  status: "Submitted for demo review",
                  submitted: new Date().toISOString(),
                }),
              children: (0, a.jsxs)("p", {
                children: [
                  "Your details and ",
                  y.length,
                  " required documents will be recorded locally. No government lookup or real verification is performed.",
                ],
              }),
            }),
        ],
      });
    }
    let aV = {
      name: "trending-up",
      size: 24,
      node: [
        ["path", { d: "M16 7h6v6", key: "box55l" }],
        ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
      ],
    };
    aV.node;
    let aW = (0, tC.f)(aV);
    var aY = e.i(590003);
    let aG = (e) => `₱${e.toLocaleString()}`,
      a_ = (e) =>
        new Date(`${e}-01T12:00:00`).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
    function aJ({ rows: e }) {
      let t = (0, i.useId)(),
        [s, r] = (0, i.useState)(null);
      if (!e.length)
        return (0, a.jsxs)("div", {
          className: "revenue-chart-empty",
          children: [
            "No completed revenue for this period.",
            (0, a.jsx)("span", {
              children: "Complete a booking to start tracking revenue trends.",
            }),
          ],
        });
      let n = new Map(e),
        o = [],
        l = new Date(`${e[0][0]}-01T12:00:00`),
        c = new Date(`${e[e.length - 1][0]}-01T12:00:00`);
      for (; l <= c;) {
        let e = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}`;
        (o.push([e, n.get(e) ?? 0]), l.setMonth(l.getMonth() + 1));
      }
      let d = o.find(([e]) => e === s) ?? o[o.length - 1],
        m = 4 * Math.ceil(Math.max(1, ...o.map(([, e]) => e)) / 4),
        h = Math.max(520, 90 * o.length + 100),
        p = (h - 82 - 24) / o.length,
        u = o.reduce((e, [, t]) => e + t, 0);
      return (0, a.jsxs)("div", {
        className: "revenue-chart",
        children: [
          (0, a.jsxs)("div", {
            className: "revenue-chart-summary",
            children: [
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("span", { children: "Period revenue" }),
                  (0, a.jsx)("strong", { children: aG(u) }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "revenue-chart-selection",
                "aria-live": "polite",
                children: [
                  (0, a.jsx)("span", { children: a_(d[0]) }),
                  (0, a.jsx)("strong", { children: aG(d[1]) }),
                ],
              }),
            ],
          }),
          (0, a.jsx)("div", {
            className: "revenue-chart-scroll",
            role: "region",
            "aria-label": "Monthly revenue chart, scroll horizontally to view all months",
            tabIndex: 0,
            children: (0, a.jsxs)("svg", {
              width: h,
              height: "276",
              viewBox: `0 0 ${h} 276`,
              role: "img",
              "aria-label": "Estimated monthly completed revenue in Philippine pesos",
              children: [
                (0, a.jsx)("defs", {
                  children: (0, a.jsxs)("linearGradient", {
                    id: t,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      (0, a.jsx)("stop", { offset: "0%", stopColor: "#ffad76" }),
                      (0, a.jsx)("stop", {
                        offset: "100%",
                        stopColor: "#ed762e",
                        stopOpacity: ".55",
                      }),
                    ],
                  }),
                }),
                [0, 1, 2, 3, 4].map((e) => {
                  let t = 224 - (200 * e) / 4;
                  return (0, a.jsxs)(
                    "g",
                    {
                      children: [
                        (0, a.jsx)("line", {
                          x1: 82,
                          x2: h - 24,
                          y1: t,
                          y2: t,
                          stroke: "#31597c",
                          strokeDasharray: e ? "4 6" : void 0,
                        }),
                        (0, a.jsx)("text", {
                          x: 70,
                          y: t + 4,
                          textAnchor: "end",
                          fill: "#9fbcd3",
                          fontSize: "11",
                          children: aG((m * e) / 4),
                        }),
                      ],
                    },
                    e,
                  );
                }),
                o.map(([e, s], i) => {
                  let n = 82 + p * (i + 0.5),
                    o = (s / m) * 200,
                    l = Math.min(42, 0.48 * p);
                  return (0, a.jsxs)(
                    "g",
                    {
                      tabIndex: 0,
                      role: "button",
                      "aria-label": `${a_(e)}: ${aG(s)}`,
                      onFocus: () => r(e),
                      onMouseEnter: () => r(e),
                      onClick: () => r(e),
                      onKeyDown: (t) => {
                        ("Enter" === t.key || " " === t.key) && (t.preventDefault(), r(e));
                      },
                      className: "revenue-chart-month",
                      children: [
                        (0, a.jsxs)("title", { children: [a_(e), ": ", aG(s)] }),
                        (0, a.jsx)("rect", {
                          x: n - p / 2 + 4,
                          y: 24,
                          width: p - 8,
                          height: 200,
                          rx: "8",
                          fill: d[0] === e ? "#ffad760c" : "transparent",
                        }),
                        (0, a.jsx)("rect", {
                          x: n - l / 2,
                          y: 224 - Math.max(o, 2),
                          width: l,
                          height: Math.max(o, 2),
                          rx: "5",
                          fill: `url(#${t})`,
                          opacity: d[0] === e ? 1 : 0.72,
                        }),
                        (0, a.jsx)("text", {
                          x: n,
                          y: 248,
                          textAnchor: "middle",
                          fill: d[0] === e ? "#ffd0ae" : "#9fbcd3",
                          fontSize: "11",
                          children: a_(e),
                        }),
                      ],
                    },
                    e,
                  );
                }),
              ],
            }),
          }),
          (0, a.jsxs)("div", {
            className: "revenue-chart-legend",
            children: [(0, a.jsx)("span", {}), "Estimated revenue · PHP"],
          }),
          (0, a.jsx)("p", {
            className: "so-muted",
            children:
              "Select or hover over a month to view its total. Months without completed revenue show ₱0.",
          }),
        ],
      });
    }
    let aX = (e) => `₱${e.toLocaleString()}`;
    function aK({ title: e, children: t }) {
      return (0, a.jsxs)("section", {
        className: "so-card analytics-panel",
        children: [(0, a.jsx)("h2", { children: e }), t],
      });
    }
    function aQ({ rows: e, currency: t = !1 }) {
      let s = Math.max(1, ...e.map(([, e]) => e));
      return e.length
        ? (0, a.jsx)("div", {
            className: "analytics-bars",
            children: e.map(([e, i]) =>
              (0, a.jsxs)(
                "div",
                {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "analytics-bar-label",
                      children: [
                        (0, a.jsx)("span", { children: e }),
                        (0, a.jsx)("strong", { children: t ? aX(i) : i }),
                      ],
                    }),
                    (0, a.jsx)("progress", { "aria-label": e, value: i, max: s }),
                  ],
                },
                e,
              ),
            ),
          })
        : (0, a.jsx)("p", { className: "so-muted", children: "No records for this period." });
    }
    function aZ({ data: e }) {
      let [t, s] = (0, i.useState)("all"),
        r = new Date(),
        n = new Date(r);
      n.setDate(n.getDate() - Number(t));
      let o = e.bookings.filter(
          (e) =>
            "all" === t ||
            (e.date >= n.toISOString().slice(0, 10) && e.date <= r.toISOString().slice(0, 10)),
        ),
        l = o.filter((e) => "Completed" === e.status),
        c = (t) =>
          e.repairs.find((e) => e.booking === t.id && "Completed" === e.status)?.cost ?? t.cost,
        d = l.reduce((e, t) => e + c(t), 0),
        m = o.filter((e) => "Cancelled" === e.status).length,
        h = (e, t, s = (e) => 1) => {
          let a = new Map();
          return (e.forEach((e) => a.set(t(e), (a.get(t(e)) || 0) + s(e))), [...a]);
        },
        p = h(l, (e) => e.date.slice(0, 7), c).sort(([e], [t]) => e.localeCompare(t)),
        u = h(
          o.filter((e) => "Cancelled" !== e.status),
          (e) => e.service,
        ).sort((e, t) => t[1] - e[1]),
        x = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
          (e, t) => [e, o.filter((e) => new Date(`${e.date}T12:00:00`).getDay() === t).length],
        ),
        f = h(o, (e) => e.customer),
        g = f.filter(([, e]) => e > 1).length,
        j = e.parts.filter((e) => e.quantity <= 5);
      return (0, a.jsxs)("div", {
        className: "analytics-page",
        children: [
          (0, a.jsxs)("div", {
            className: "analytics-toolbar",
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsx)("h2", {
                  children: "A clearer view of your shop’s performance.",
                }),
              }),
              (0, a.jsxs)("label", {
                children: [
                  "Reporting period",
                  (0, a.jsxs)("select", {
                    value: t,
                    onChange: (e) => s(e.target.value),
                    children: [
                      (0, a.jsx)("option", { value: "all", children: "All time" }),
                      (0, a.jsx)("option", { value: "30", children: "Last 30 days" }),
                      (0, a.jsx)("option", { value: "90", children: "Last 90 days" }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("button", {
                className: "so-button",
                onClick: () => {
                  let e = [
                      ["Metric", "Value"],
                      ["Period", "all" === t ? "All time" : `Last ${t} days`],
                      ["Estimated completed revenue", d],
                      ["Bookings", o.length],
                      ["Completed bookings", l.length],
                      ["Cancelled bookings", m],
                      ["Customers", f.length],
                      ...p.map(([e, t]) => [`Revenue ${e}`, t]),
                      ...u.map(([e, t]) => [`Service: ${e}`, t]),
                    ]
                      .map((e) => e.map((e) => `"${String(e).replace(/"/g, '""')}"`).join(","))
                      .join("\r\n"),
                    s = URL.createObjectURL(
                      new Blob(["\uFEFF", e], { type: "text/csv;charset=utf-8;" }),
                    ),
                    a = document.createElement("a");
                  ((a.href = s),
                    (a.download = "motofix-business-analytics.csv"),
                    a.click(),
                    URL.revokeObjectURL(s));
                },
                children: [(0, a.jsx)(tF, { size: 17 }), "Export summary"],
              }),
            ],
          }),
          (0, a.jsx)("div", {
            className: "analytics-kpis",
            children: [
              [aW, "Estimated revenue", aX(d)],
              [s1, "Total bookings", o.length],
              [
                ab.f,
                "Completion rate",
                `${o.length ? Math.round((l.length / o.length) * 100) : 0}%`,
              ],
              [aY.f, "Customers", f.length],
            ].map(([e, t, s]) =>
              (0, a.jsxs)(
                "div",
                {
                  className: "so-card analytics-kpi",
                  children: [
                    (0, a.jsx)(e, { size: 23 }),
                    (0, a.jsx)("span", { children: String(t) }),
                    (0, a.jsx)("strong", { children: String(s) }),
                  ],
                },
                String(t),
              ),
            ),
          }),
          (0, a.jsxs)("div", {
            className: "analytics-grid",
            children: [
              (0, a.jsxs)(aK, {
                title: "Revenue Trends",
                children: [
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children: "Estimated completed revenue by booking month.",
                  }),
                  (0, a.jsx)(aJ, { rows: p }),
                ],
              }),
              (0, a.jsxs)(aK, {
                title: "Popular Services",
                children: [
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children: "Ranked by non-cancelled bookings in the selected period.",
                  }),
                  (0, a.jsx)(aQ, { rows: u }),
                ],
              }),
              (0, a.jsxs)(aK, {
                title: "Booking Patterns",
                children: [
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children: "Booking volume by scheduled day, including cancellations.",
                  }),
                  (0, a.jsx)(aQ, { rows: x }),
                ],
              }),
              (0, a.jsxs)(aK, {
                title: "Booking Status",
                children: [
                  (0, a.jsx)(aQ, { rows: h(o, (e) => e.status) }),
                  (0, a.jsxs)("p", {
                    className: "so-muted",
                    children: [
                      "Cancellation rate:",
                      " ",
                      o.length ? Math.round((m / o.length) * 100) : 0,
                      "% · Average completed booking:",
                      " ",
                      aX(l.length ? Math.round(d / l.length) : 0),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(aK, {
                title: "Mechanic Workload Reports",
                children: [
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children: "Current all-time workload, independent of the reporting period.",
                  }),
                  (0, a.jsx)("div", {
                    className: "analytics-table-wrap",
                    children: (0, a.jsxs)("table", {
                      children: [
                        (0, a.jsx)("thead", {
                          children: (0, a.jsxs)("tr", {
                            children: [
                              (0, a.jsx)("th", { children: "Mechanic" }),
                              (0, a.jsx)("th", { children: "Active tasks" }),
                              (0, a.jsx)("th", { children: "Completed" }),
                              (0, a.jsx)("th", { children: "Status" }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("tbody", {
                          children: e.mechanics.map((t) =>
                            (0, a.jsxs)(
                              "tr",
                              {
                                children: [
                                  (0, a.jsx)("th", { scope: "row", children: t.name }),
                                  (0, a.jsx)("td", {
                                    children: e.tasks.filter(
                                      (e) =>
                                        e.mechanic === t.id &&
                                        !["Completed", "Cancelled"].includes(e.status),
                                    ).length,
                                  }),
                                  (0, a.jsx)("td", {
                                    children: e.tasks.filter(
                                      (e) => e.mechanic === t.id && "Completed" === e.status,
                                    ).length,
                                  }),
                                  (0, a.jsx)("td", { children: t.status }),
                                ],
                              },
                              t.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  !e.mechanics.length &&
                    (0, a.jsx)("p", { className: "so-muted", children: "No mechanics added yet." }),
                  (0, a.jsxs)("p", {
                    className: "so-muted",
                    children: [
                      "Unassigned active tasks:",
                      " ",
                      e.tasks.filter(
                        (t) =>
                          !e.mechanics.some((e) => e.id === t.mechanic) &&
                          !["Completed", "Cancelled"].includes(t.status),
                      ).length,
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(aK, {
                title: "Customer Insights",
                children: [
                  (0, a.jsx)(aQ, {
                    rows: [
                      ["One-booking customers", f.length - g],
                      ["Repeat customers", g],
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children:
                      "Repeat customers have two or more bookings in the selected period. Customers are identified by their recorded name.",
                  }),
                ],
              }),
              (0, a.jsxs)(aK, {
                title: "Inventory Health",
                children: [
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children: "Current stock snapshot, independent of the reporting period.",
                  }),
                  (0, a.jsxs)("div", {
                    className: "analytics-bar-label",
                    children: [
                      (0, a.jsx)("span", { children: "Stock value at listed selling price" }),
                      (0, a.jsx)("strong", {
                        children: aX(e.parts.reduce((e, t) => e + t.price * t.quantity, 0)),
                      }),
                    ],
                  }),
                  (0, a.jsx)(aQ, { rows: j.map((e, t) => [`${e.name} (${t + 1})`, e.quantity]) }),
                  (0, a.jsxs)("p", {
                    className: "so-muted",
                    children: [
                      j.length,
                      " parts at or below 5 units.",
                      " ",
                      0 === j.length
                        ? "No low-stock alerts."
                        : "Review stock before accepting parts-dependent work.",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(aK, {
                title: "Business Summary",
                children: (0, a.jsxs)("ul", {
                  className: "analytics-summary",
                  children: [
                    (0, a.jsx)("li", {
                      children: u.length
                        ? `${u[0][0]} is the most booked service (${u[0][1]} bookings).`
                        : "Service trends will appear once bookings are recorded.",
                    }),
                    (0, a.jsx)("li", {
                      children: o.length
                        ? `${[...x].sort((e, t) => t[1] - e[1])[0][0]} has the highest scheduled booking volume.`
                        : "Add bookings to identify your busiest days.",
                    }),
                    (0, a.jsxs)("li", {
                      children: [
                        o.filter((e) => "Pending" === e.status).length,
                        " pending bookings in this period.",
                      ],
                    }),
                    (0, a.jsx)("li", {
                      children:
                        "Use workload and stock reports together before assigning new work.",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    }
    var a0 = e.i(984481);
    let a1 = {
      name: "archive",
      size: 24,
      node: [
        ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
        ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
        ["path", { d: "M10 12h4", key: "a56b0p" }],
      ],
    };
    a1.node;
    let a2 = (0, tC.f)(a1),
      a5 = {
        name: "arrow-right-left",
        size: 24,
        node: [
          ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
          ["path", { d: "M20 7H4", key: "zbl0bi" }],
          ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
          ["path", { d: "M4 17h16", key: "g4d7ey" }],
        ],
      };
    a5.node;
    let a3 = (0, tC.f)(a5),
      a4 = "motofix-branches-demo-v1";
    function a6({ data: e, shopId: t = "motohub" }) {
      let [s, r] = (0, i.useState)(() => {
          try {
            let e = JSON.parse(localStorage.getItem(a4) || "null");
            if (e && Array.isArray(e.branches) && e.assignments && Array.isArray(e.transfers))
              return e;
          } catch {}
          return {
            branches: [
              {
                id: "main",
                ...e.profile,
                manager: "",
                status: "Active",
                services: e.services.map((e) => e.name).join(", "),
                notes:
                  "Original shop. Existing bookings and financial records belong to this location.",
              },
            ],
            assignments: {},
            transfers: [],
          };
        }),
        [n, o] = (0, i.useState)("main"),
        [l, c] = (0, i.useState)(null),
        [d, m] = (0, i.useState)(""),
        [h, p] = (0, i.useState)(""),
        [u, x] = (0, i.useState)("Overview"),
        [f, g] = (0, i.useState)(t);
      (0, i.useEffect)(() => {
        try {
          localStorage.setItem(a4, JSON.stringify(s));
        } catch {
          p("Storage is unavailable. Branch changes are kept for this session only.");
        }
      }, [s]);
      let j = s.branches.find((e) => e.id === n) ?? s.branches[0],
        b = (e) => s.branches.find((t) => t.id === e)?.name || e,
        y = (t) => e.mechanics.filter((e) => (s.assignments[e.id] || "main") === t),
        v = (t, a) => {
          let i = ("main" === t && e.parts.find((e) => e.id === a)?.quantity) || 0;
          return s.transfers
            .filter((e) => e.part === a)
            .reduce(
              (e, s) => e + (s.to === t ? s.quantity : 0) - (s.from === t ? s.quantity : 0),
              i,
            );
        },
        k = s.branches.filter((e) => "Active" === e.status);
      return (0, a.jsxs)("div", {
        className: "branch-page",
        children: [
          (0, a.jsxs)("div", {
            className: "branch-heading",
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsx)("h2", {
                  children: "Manage your locations, people, and stock in one place.",
                }),
              }),
              (0, a.jsxs)("button", {
                className: "so-button so-primary",
                onClick: () => c("new"),
                children: [(0, a.jsx)(tO, { size: 18 }), "Add Branch"],
              }),
            ],
          }),
          h && (0, a.jsx)("p", { role: "status", className: "branch-notice", children: h }),
          (0, a.jsx)("div", {
            className: "branch-stats",
            children: [
              ["Total branches", s.branches.length],
              ["Active branches", k.length],
              ["Mechanics", e.mechanics.length],
              ["Stock transfers", s.transfers.length],
            ].map(([e, t]) =>
              (0, a.jsxs)(
                "div",
                {
                  className: "so-card",
                  children: [
                    (0, a.jsx)("span", { children: e }),
                    (0, a.jsx)("strong", { children: t }),
                  ],
                },
                e,
              ),
            ),
          }),
          null !== l &&
            (0, a.jsxs)("section", {
              className: "so-card branch-editor",
              children: [
                (0, a.jsx)("h2", { children: "new" === l ? "Add a branch" : "Edit branch" }),
                (0, a.jsxs)(
                  "form",
                  {
                    onSubmit: (e) => {
                      e.preventDefault();
                      let t = Object.fromEntries(new FormData(e.currentTarget));
                      if (!t.name.trim() || !t.address.trim())
                        return void p("Enter a branch name and address.");
                      if (
                        s.branches.some(
                          (e) =>
                            e.name.trim().toLowerCase() === t.name.trim().toLowerCase() &&
                            ("new" === l || e.id !== l.id),
                        )
                      )
                        return void p("A branch with this name already exists.");
                      let a = {
                        id: "new" === l ? crypto.randomUUID() : l.id,
                        name: t.name.trim(),
                        address: t.address.trim(),
                        phone: t.phone,
                        manager: t.manager,
                        hours: t.hours,
                        status: t.status,
                        services: t.services,
                        notes: t.notes,
                      };
                      (r((e) => ({
                        ...e,
                        branches:
                          "new" === l
                            ? [...e.branches, a]
                            : e.branches.map((e) => (e.id === a.id ? a : e)),
                      })),
                        o(a.id),
                        c(null),
                        p("Branch saved."));
                    },
                    children: [
                      [
                        ["name", "Branch name"],
                        ["address", "Address"],
                        ["phone", "Contact number"],
                        ["manager", "Branch manager"],
                        ["hours", "Operating hours"],
                        ["services", "Services offered"],
                        ["notes", "Branch notes"],
                      ].map(([e, t]) =>
                        (0, a.jsxs)(
                          "label",
                          {
                            children: [
                              t,
                              (0, a.jsx)("input", {
                                name: e,
                                required: "name" === e || "address" === e,
                                type: "phone" === e ? "tel" : "text",
                                defaultValue: "new" === l ? "" : l[e],
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                      (0, a.jsxs)("label", {
                        children: [
                          "Operating status",
                          (0, a.jsxs)("select", {
                            name: "status",
                            defaultValue: "new" === l ? "Active" : l.status,
                            children: [
                              (0, a.jsx)("option", { children: "Active" }),
                              (0, a.jsx)("option", { children: "Temporarily Closed" }),
                              (0, a.jsx)("option", { children: "Archived" }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "branch-actions",
                        children: [
                          (0, a.jsx)("button", {
                            className: "so-button so-primary",
                            type: "submit",
                            children: "Save Branch",
                          }),
                          (0, a.jsx)("button", {
                            className: "so-button",
                            type: "button",
                            onClick: () => c(null),
                            children: "Cancel",
                          }),
                        ],
                      }),
                    ],
                  },
                  "new" === l ? "new" : l.id,
                ),
              ],
            }),
          (0, a.jsxs)("label", {
            className: "branch-search",
            children: [
              "Find a branch",
              (0, a.jsx)("input", {
                value: d,
                onChange: (e) => m(e.target.value),
                placeholder: "Search name or address",
              }),
            ],
          }),
          (0, a.jsx)("div", {
            className: "branch-cards",
            children: s.branches
              .filter((e) => `${e.name} ${e.address}`.toLowerCase().includes(d.toLowerCase()))
              .map((e) =>
                (0, a.jsxs)(
                  "button",
                  {
                    className: `so-card branch-location ${j.id === e.id ? "selected" : ""}`,
                    onClick: () => {
                      (o(e.id), x("Overview"));
                    },
                    "aria-pressed": j.id === e.id,
                    children: [
                      (0, a.jsx)(a0.f, { size: 24 }),
                      (0, a.jsx)("strong", { children: e.name }),
                      (0, a.jsx)("span", { className: "branch-status", children: e.status }),
                      (0, a.jsxs)("span", {
                        children: [(0, a.jsx)(as.f, { size: 14 }), e.address],
                      }),
                      (0, a.jsxs)("small", {
                        children: [y(e.id).length, " mechanics · ", e.manager || "Manager not set"],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
          }),
          !s.branches.some((e) =>
            `${e.name} ${e.address}`.toLowerCase().includes(d.toLowerCase()),
          ) &&
            (0, a.jsx)("p", { className: "so-muted", children: "No branches match your search." }),
          (0, a.jsxs)("section", {
            "aria-labelledby": "branch-map-title",
            children: [
              (0, a.jsx)("h2", { id: "branch-map-title", children: "Demo Location Map" }),
              (0, a.jsx)(s_, {
                explorable: !0,
                showHelpText: !1,
                selected: f,
                onSelect: g,
                shops: [
                  { id: t, name: s.branches.find((e) => "main" === e.id)?.name || e.profile.name },
                ],
              }),
            ],
          }),
          (0, a.jsxs)("section", {
            className: "so-card branch-detail",
            children: [
              (0, a.jsxs)("div", {
                className: "branch-heading",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h2", { children: j.name }),
                      (0, a.jsxs)("p", {
                        className: "so-muted",
                        children: [j.status, " · Branch workspace"],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "branch-actions",
                    children: [
                      (0, a.jsxs)("button", {
                        className: "so-button",
                        onClick: () => c(j),
                        children: [(0, a.jsx)(t0, { size: 16 }), "Edit"],
                      }),
                      "main" !== j.id &&
                        "Archived" !== j.status &&
                        (0, a.jsxs)("button", {
                          className: "so-button",
                          onClick: () => {
                            y(j.id).length || e.parts.some((e) => v(j.id, e.id) > 0)
                              ? p(
                                  "Reassign staff and transfer remaining stock before archiving this branch.",
                                )
                              : window.confirm(
                                  `Archive ${j.name}? Its records will be retained.`,
                                ) &&
                                (r((e) => ({
                                  ...e,
                                  branches: e.branches.map((e) =>
                                    e.id === j.id ? { ...e, status: "Archived" } : e,
                                  ),
                                })),
                                p("Branch archived."));
                          },
                          children: [(0, a.jsx)(a2, { size: 16 }), "Archive"],
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "branch-tabs",
                role: "group",
                "aria-label": "Branch sections",
                children: ["Overview", "Staff", "Inventory", "Performance"].map((e) =>
                  (0, a.jsx)(
                    "button",
                    {
                      className: "so-button",
                      "aria-pressed": u === e,
                      onClick: () => x(e),
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
              "Overview" === u &&
                (0, a.jsx)("dl", {
                  className: "branch-info",
                  children: [
                    ["Address", j.address],
                    ["Contact", j.phone],
                    ["Manager", j.manager],
                    ["Operating hours", j.hours],
                    ["Services", j.services],
                    ["Notes", j.notes],
                  ].map(([e, t]) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        children: [
                          (0, a.jsx)("dt", { children: e }),
                          (0, a.jsx)("dd", { children: t || "Not set" }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              "Staff" === u &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("p", {
                      className: "so-muted",
                      children:
                        "Allocate mechanics to a branch. Existing tasks and account permissions are not changed.",
                    }),
                    (0, a.jsx)("div", {
                      className: "branch-table",
                      children: (0, a.jsxs)("table", {
                        children: [
                          (0, a.jsx)("thead", {
                            children: (0, a.jsxs)("tr", {
                              children: [
                                (0, a.jsx)("th", { children: "Mechanic" }),
                                (0, a.jsx)("th", { children: "Status" }),
                                (0, a.jsx)("th", { children: "Branch allocation" }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("tbody", {
                            children: e.mechanics.map((e) =>
                              (0, a.jsxs)(
                                "tr",
                                {
                                  children: [
                                    (0, a.jsx)("th", { scope: "row", children: e.name }),
                                    (0, a.jsx)("td", { children: e.status }),
                                    (0, a.jsx)("td", {
                                      children: (0, a.jsx)("select", {
                                        "aria-label": `Branch for ${e.name}`,
                                        value: s.assignments[e.id] || "main",
                                        onChange: (t) => {
                                          (r((s) => ({
                                            ...s,
                                            assignments: {
                                              ...s.assignments,
                                              [e.id]: t.target.value,
                                            },
                                          })),
                                            p("Staff allocation updated."));
                                        },
                                        children: s.branches
                                          .filter(
                                            (t) =>
                                              "Archived" !== t.status ||
                                              t.id === s.assignments[e.id],
                                          )
                                          .map((e) =>
                                            (0, a.jsx)(
                                              "option",
                                              { value: e.id, children: e.name },
                                              e.id,
                                            ),
                                          ),
                                      }),
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                    !e.mechanics.length && (0, a.jsx)("p", { children: "No mechanics added yet." }),
                  ],
                }),
              "Inventory" === u &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("p", {
                      className: "so-muted",
                      children:
                        "Branch stock is a planning allocation of the current Motor Parts quantities. Transfers below are recorded locally.",
                    }),
                    (0, a.jsx)("div", {
                      className: "branch-table",
                      children: (0, a.jsxs)("table", {
                        children: [
                          (0, a.jsx)("thead", {
                            children: (0, a.jsxs)("tr", {
                              children: [
                                (0, a.jsx)("th", { children: "Part" }),
                                (0, a.jsx)("th", { children: "Allocated units" }),
                                (0, a.jsx)("th", { children: "Stock status" }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("tbody", {
                            children: e.parts.map((e) =>
                              (0, a.jsxs)(
                                "tr",
                                {
                                  children: [
                                    (0, a.jsx)("th", { scope: "row", children: e.name }),
                                    (0, a.jsx)("td", { children: v(j.id, e.id) }),
                                    (0, a.jsx)("td", {
                                      children:
                                        0 >= v(j.id, e.id)
                                          ? "Out of stock"
                                          : 5 >= v(j.id, e.id)
                                            ? "Low stock"
                                            : "In stock",
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("h3", {
                      className: "branch-subheading",
                      children: [(0, a.jsx)(a3, { size: 18 }), "Record a stock transfer"],
                    }),
                    k.length < 2
                      ? (0, a.jsx)("p", {
                          className: "so-muted",
                          children: "Add at least two active branches to transfer stock.",
                        })
                      : (0, a.jsxs)("form", {
                          className: "branch-transfer",
                          onSubmit: (e) => {
                            e.preventDefault();
                            let t = Object.fromEntries(new FormData(e.currentTarget)),
                              s = Number(t.quantity);
                            t.from === t.to ||
                            !Number.isInteger(s) ||
                            s < 1 ||
                            s > v(String(t.from), String(t.part))
                              ? p(
                                  "Choose different branches and a quantity within the available source stock.",
                                )
                              : (r((e) => ({
                                  ...e,
                                  transfers: [
                                    {
                                      id: crypto.randomUUID(),
                                      part: String(t.part),
                                      from: String(t.from),
                                      to: String(t.to),
                                      quantity: s,
                                      date: new Date().toISOString(),
                                    },
                                    ...e.transfers,
                                  ],
                                })),
                                p("Stock transfer recorded."));
                          },
                          children: [
                            (0, a.jsxs)("label", {
                              children: [
                                "Part",
                                (0, a.jsx)("select", {
                                  name: "part",
                                  required: !0,
                                  children: e.parts.map((e) =>
                                    (0, a.jsx)("option", { value: e.id, children: e.name }, e.id),
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              children: [
                                "From",
                                (0, a.jsx)("select", {
                                  name: "from",
                                  children: k.map((e) =>
                                    (0, a.jsx)("option", { value: e.id, children: e.name }, e.id),
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              children: [
                                "To",
                                (0, a.jsx)("select", {
                                  name: "to",
                                  defaultValue: k[1].id,
                                  children: k.map((e) =>
                                    (0, a.jsx)("option", { value: e.id, children: e.name }, e.id),
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("label", {
                              children: [
                                "Quantity",
                                (0, a.jsx)("input", {
                                  name: "quantity",
                                  type: "number",
                                  min: "1",
                                  step: "1",
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              className: "so-button so-primary",
                              disabled: !e.parts.length,
                              children: "Record Transfer",
                            }),
                          ],
                        }),
                    (0, a.jsx)("h3", {
                      className: "branch-subheading",
                      children: "Transfer history",
                    }),
                    s.transfers
                      .filter((e) => e.from === j.id || e.to === j.id)
                      .map((t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: "branch-history",
                            children: [
                              (0, a.jsxs)("strong", {
                                children: [
                                  e.parts.find((e) => e.id === t.part)?.name || "Removed part",
                                  " · ",
                                  t.quantity,
                                  " ",
                                  "units",
                                ],
                              }),
                              (0, a.jsxs)("span", { children: [b(t.from), " → ", b(t.to)] }),
                              (0, a.jsx)("small", { children: new Date(t.date).toLocaleString() }),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    !s.transfers.some((e) => e.from === j.id || e.to === j.id) &&
                      (0, a.jsx)("p", {
                        className: "so-muted",
                        children: "No transfers recorded for this branch.",
                      }),
                  ],
                }),
              "Performance" === u &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("p", {
                      className: "so-muted",
                      children:
                        "Existing booking records belong to the original shop. New branches do not yet have branch-linked bookings or revenue.",
                    }),
                    (0, a.jsx)("div", {
                      className: "branch-stats",
                      children: [
                        ["Bookings", "main" === j.id ? e.bookings.length : 0],
                        [
                          "Completed bookings",
                          "main" === j.id
                            ? e.bookings.filter((e) => "Completed" === e.status).length
                            : 0,
                        ],
                        ["Allocated mechanics", y(j.id).length],
                        ["Allocated stock units", e.parts.reduce((e, t) => e + v(j.id, t.id), 0)],
                      ].map(([e, t]) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: "so-card",
                            children: [
                              (0, a.jsx)("span", { children: e }),
                              (0, a.jsx)("strong", { children: t }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, a.jsx)("p", {
                      className: "so-muted",
                      children:
                        "Financial trends remain available in Dashboard → Access Business Analytics. Branch-level profit and payment tracking are not simulated.",
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
    }
    function a7() {
      let e = sh(),
        [t, s] = (0, i.useState)("All"),
        [r, n] = (0, i.useState)("");
      return (0, a.jsxs)("section", {
        className: "commerce commerce-sales",
        children: [
          e.length > 0 &&
            (0, a.jsxs)("div", {
              className: "commerce-row",
              children: [
                (0, a.jsx)("h3", { children: "Customer parts orders" }),
                (0, a.jsxs)("label", {
                  children: [
                    "Order status",
                    (0, a.jsx)("select", {
                      value: t,
                      onChange: (e) => s(e.target.value),
                      children: ["All", "New", "Ready for pickup", "Collected"].map((e) =>
                        (0, a.jsx)("option", { children: e }, e),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          r && (0, a.jsx)("p", { role: "alert", children: r }),
          e
            .filter((e) => "All" === t || e.status === t)
            .map((e) =>
              (0, a.jsxs)(
                "article",
                {
                  className: "commerce-card",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "commerce-row",
                      children: [
                        (0, a.jsxs)("h3", { children: [e.quantity, " × ", e.name] }),
                        (0, a.jsx)("span", { className: "commerce-badge", children: e.status }),
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      children: [e.id, " · ", new Date(e.created).toLocaleString()],
                    }),
                    (0, a.jsxs)("p", { children: [e.customer, " · ", e.phone] }),
                    (0, a.jsxs)("dl", {
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("dt", { children: "Shop proceeds" }),
                            (0, a.jsx)("dd", { children: sp(e.subtotal) }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("dt", { children: "MotoFix fee (not shop revenue)" }),
                            (0, a.jsx)("dd", { children: sp(e.fee) }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("dt", { children: "Customer total" }),
                            (0, a.jsx)("dd", { children: sp(e.total) }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      children: [
                        e.payment,
                        " ·",
                        " ",
                        "Pay at shop" === e.payment && "Collected" !== e.status
                          ? "Collect payment at pickup"
                          : "Demo payment recorded",
                        " ",
                        "· Stock reserved at order placement",
                      ],
                    }),
                    "Collected" !== e.status &&
                      (0, a.jsx)("button", {
                        className: "commerce-primary",
                        onClick: () =>
                          (function (e) {
                            try {
                              (sd(
                                sc().map((t) =>
                                  t.id === e.id
                                    ? {
                                        ...t,
                                        status:
                                          "New" === e.status ? "Ready for pickup" : "Collected",
                                      }
                                    : t,
                                ),
                              ),
                                n(""));
                            } catch {
                              n("Could not save the order update. Please retry.");
                            }
                          })(e),
                        children:
                          "New" === e.status
                            ? "Mark ready for pickup"
                            : "Pay at shop" === e.payment
                              ? "Confirm cash received & collected"
                              : "Confirm collected",
                      }),
                  ],
                },
                e.id,
              ),
            ),
        ],
      });
    }
    function a8() {
      let [e, t] = (0, i.useState)(() => new Date());
      return (
        (0, i.useEffect)(() => {
          let e = window.setInterval(() => t(new Date()), 1e3);
          return () => window.clearInterval(e);
        }, []),
        (0, a.jsxs)("span", {
          className: "so-dashboard-date",
          children: [
            e.toLocaleDateString("en-US", {
              timeZone: "Asia/Manila",
              weekday: "long",
              month: "long",
              day: "numeric",
            }),
            " ",
            "·",
            " ",
            e.toLocaleTimeString("en-US", {
              timeZone: "Asia/Manila",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: !0,
            }),
          ],
        })
      );
    }
    let a9 = (e) =>
      String(e).replace(
        /[&<>"']/g,
        (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[e],
      );
    function ie(e, t, s) {
      let a = URL.createObjectURL(new Blob([e], { type: s })),
        i = document.createElement("a");
      ((i.href = a),
        (i.download = t),
        i.click(),
        window.setTimeout(() => URL.revokeObjectURL(a), 1e3));
    }
    var it = e.i(758917);
    let is = {
      name: "copy",
      size: 24,
      node: [
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
      ],
    };
    is.node;
    let ia = (0, tC.f)(is);
    var ii = e.i(312059);
    let ir = {
      name: "gauge",
      size: 24,
      node: [
        ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
        ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
      ],
    };
    ir.node;
    let io = (0, tC.f)(ir),
      il = {
        name: "circle-question-mark",
        size: 24,
        node: [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5", key: "1awbb0" }],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
        ],
        aliases: ["help-circle", "circle-help"],
      };
    il.node;
    let ic = (0, tC.f)(il);
    var id = e.i(624193);
    let im = {
      name: "badge-check",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336",
          },
        ],
        ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }],
      ],
      aliases: ["verified"],
    };
    im.node;
    let ih = (0, tC.f)(im),
      ip = {
        name: "table-2",
        size: 24,
        node: [
          ["path", { d: "M3 9h18", key: "1pudct" }],
          ["path", { d: "M9 3v18", key: "fh3hqa" }],
          ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
        ],
      };
    ip.node;
    let iu = (0, tC.f)(ip),
      ix = "/motofix-system/5.2/shop-workshop.jpg",
      ig = new Date().toISOString().slice(0, 10),
      ij = (e) => `₱${e.toLocaleString()}`,
      ib = (e) => `${e}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`,
      iy = ["Available", "Assigned", "On Leave", "Inactive"],
      iv = ["Pending", "Assigned", "In Progress", "Waiting", "Completed", "Cancelled"],
      ik = {
        demoVersion: 2,
        profile: {
          name: "MotoHub Service Center",
          description:
            "Expert hands. Better rides. Your neighborhood motorcycle service specialists.",
          address: "124 Street, New Visayas, Panabo City",
          phone: "+63 917 123 4567",
          hours: "Monday–Saturday · 8:00 AM–6:00 PM",
          brands: "Honda, Yamaha, Suzuki, Kawasaki",
          latitude: "14.6205",
          longitude: "121.0584",
          photo: "",
        },
        mechanics: [
          {
            id: "M-01",
            name: "Marco Reyes",
            phone: "+63 917 456 7890",
            email: "marco@motohub.demo",
            username: "mechanic.marco",
            specialization: "Engine specialist",
            experience: "8",
            skills: "Engine overhaul, fuel injection, diagnostics",
            employment: "Full-time",
            status: "Assigned",
            notes: "Senior mechanic and team lead.",
            photo: "",
          },
          {
            id: "M-02",
            name: "Jay Santos",
            phone: "+63 918 234 5678",
            email: "jay@motohub.demo",
            username: "mechanic.jay",
            specialization: "General maintenance",
            experience: "5",
            skills: "Oil change, brakes, tire replacement",
            employment: "Full-time",
            status: "Available",
            notes: "",
            photo: "",
          },
          {
            id: "M-03",
            name: "Luis Garcia",
            phone: "+63 919 345 6789",
            email: "luis@motohub.demo",
            username: "mechanic.luis",
            specialization: "Electrical specialist",
            experience: "6",
            skills: "Wiring, battery systems, ECU diagnostics",
            employment: "Full-time",
            status: "Assigned",
            notes: "",
            photo: "",
          },
          {
            id: "M-04",
            name: "Nico Cruz",
            phone: "+63 920 456 7890",
            email: "nico@motohub.demo",
            username: "mechanic.nico",
            specialization: "Brakes & suspension",
            experience: "3",
            skills: "Brake service, suspension, alignment",
            employment: "Part-time",
            status: "On Leave",
            notes: "Returns next week.",
            photo: "",
          },
          {
            id: "M-05",
            name: "Paolo Ramos",
            phone: "+63 921 567 8901",
            email: "paolo@motohub.demo",
            username: "mechanic.paolo",
            specialization: "Preventive maintenance",
            experience: "4",
            skills: "Tune-ups, fluid service, safety inspections",
            employment: "Full-time",
            status: "Available",
            notes: "",
            photo: "",
          },
        ],
        bookings: [
          {
            id: "B-1042",
            customer: "Alex Mendoza",
            motorcycle: "Yamaha NMAX 155",
            service: "Oil Change",
            problem: "Scheduled oil change and general check-up.",
            date: ig,
            time: "09:00",
            cost: 650,
            mechanic: "M-02",
            status: "Confirmed",
          },
          {
            id: "B-1043",
            customer: "Daniel Cruz",
            motorcycle: "Honda Click 125i",
            service: "Brake Service",
            problem: "Squeaking noise when braking. Please check the front brake pads.",
            date: ig,
            time: "10:30",
            cost: 1200,
            mechanic: "",
            status: "Pending",
          },
          {
            id: "B-1044",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            service: "Engine Repair",
            problem: "Engine loses power and stalls at low speeds.",
            date: ig,
            time: "11:00",
            cost: 3500,
            mechanic: "M-01",
            status: "Ongoing",
          },
          {
            id: "B-1045",
            customer: "Carlo Villanueva",
            motorcycle: "Honda PCX 160",
            service: "Electrical Repair",
            problem: "Battery drains overnight and headlight flickers.",
            date: ig,
            time: "13:00",
            cost: 1800,
            mechanic: "M-03",
            status: "Ongoing",
          },
          {
            id: "B-1046",
            customer: "Andrea Lim",
            motorcycle: "Yamaha Aerox 155",
            service: "Tire Replacement",
            problem: "Rear tire replacement.",
            date: ig,
            time: "14:30",
            cost: 2200,
            mechanic: "",
            status: "Pending",
          },
          {
            id: "B-1047",
            customer: "Rica Flores",
            motorcycle: "Honda ADV 160",
            service: "General Maintenance",
            problem: "Routine tune-up and pre-ride safety inspection.",
            date: ig,
            time: "16:00",
            cost: 950,
            mechanic: "",
            status: "Pending",
          },
          {
            id: "B-1038",
            customer: "Alex Mendoza",
            motorcycle: "Yamaha NMAX 155",
            service: "General Maintenance",
            problem: "Routine maintenance.",
            date: "2026-07-25",
            time: "09:00",
            cost: 950,
            mechanic: "M-02",
            status: "Completed",
          },
          {
            id: "B-1037",
            customer: "Lara Gomez",
            motorcycle: "Kawasaki Barako II",
            service: "General Maintenance",
            problem: "Hard starting and uneven idle.",
            date: "2026-07-28",
            time: "11:30",
            cost: 1230,
            mechanic: "M-02",
            status: "Completed",
          },
          {
            id: "B-1039",
            customer: "Daniel Cruz",
            motorcycle: "Honda Click 125i",
            service: "Chain Service",
            problem: "Chain adjustment.",
            date: "2026-07-26",
            time: "10:00",
            cost: 350,
            mechanic: "",
            status: "Cancelled",
          },
        ],
        repairs: [
          {
            id: "R-0241",
            booking: "B-1044",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            problem: "Engine loses power at low speeds.",
            diagnosis:
              "Worn spark plug and clogged fuel injector. Clean fuel system and replace spark plug.",
            mechanic: "M-01",
            status: "In Progress",
            progress: 65,
            completion: "Today, 3:00 PM",
            services: ["Engine Repair"],
            parts: ["NGK Spark Plug"],
            cost: 3500,
            notes: "Compression test passed. Fuel injector cleaning underway.",
            updates: ["Diagnosis completed", "Parts approved by customer"],
          },
          {
            id: "R-0242",
            booking: "B-1045",
            customer: "Carlo Villanueva",
            motorcycle: "Honda PCX 160",
            problem: "Battery drain and flickering headlight.",
            diagnosis: "Loose ground connection. Check regulator and charging circuit.",
            mechanic: "M-03",
            status: "In Progress",
            progress: 35,
            completion: "Today, 4:30 PM",
            services: ["Electrical Repair"],
            parts: [],
            cost: 1800,
            notes: "Battery voltage is within spec.",
            updates: ["Motorcycle received", "Electrical diagnosis started"],
          },
          {
            id: "R-0230",
            booking: "B-1038",
            customer: "Alex Mendoza",
            motorcycle: "Yamaha NMAX 155",
            problem: "Routine maintenance.",
            diagnosis: "Routine oil change and safety checks.",
            mechanic: "M-02",
            status: "Completed",
            progress: 100,
            completion: "July 25",
            services: ["General Maintenance"],
            parts: ["Motul 10W-40 Oil"],
            cost: 950,
            notes: "All checks passed.",
            updates: ["Repair completed"],
          },
          {
            id: "R-0231",
            booking: "B-1037",
            customer: "Lara Gomez",
            motorcycle: "Kawasaki Barako II",
            problem: "Hard starting and uneven idle.",
            diagnosis: "Spark plug gap corrected and carburetor cleaned.",
            mechanic: "M-02",
            status: "Completed",
            progress: 100,
            completion: "July 28",
            services: ["General Maintenance"],
            parts: ["NGK Spark Plug"],
            cost: 1230,
            notes: "Road test completed successfully.",
            updates: ["Diagnosis completed", "Repair completed"],
          },
        ],
        tasks: [
          {
            id: "T-081",
            name: "Clean fuel injector",
            description: "Remove, clean, and test the fuel injector.",
            mechanic: "M-01",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            repair: "R-0241",
            priority: "High",
            due: `${ig}T14:00`,
            assigned: ig,
            status: "In Progress",
            instructions: "Run a spray pattern test after cleaning.",
            notes: "Cleaning in progress.",
            photos: [],
          },
          {
            id: "T-082",
            name: "Inspect charging circuit",
            description: "Test regulator, wiring, and ground connections.",
            mechanic: "M-03",
            customer: "Carlo Villanueva",
            motorcycle: "Honda PCX 160",
            repair: "R-0242",
            priority: "Normal",
            due: `${ig}T15:30`,
            assigned: ig,
            status: "Assigned",
            instructions: "Document voltage readings.",
            notes: "",
            photos: [],
          },
          {
            id: "T-083",
            name: "Perform final safety inspection",
            description: "Check lights, brakes, tire pressure, and fluid levels.",
            mechanic: "M-01",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            repair: "R-0241",
            priority: "Normal",
            due: `${ig}T16:30`,
            assigned: ig,
            status: "Assigned",
            instructions: "Record the final checklist before road testing.",
            notes: "",
            photos: [],
          },
          {
            id: "T-079",
            name: "Oil change & safety check",
            description: "Replace engine oil and perform safety inspection.",
            mechanic: "M-02",
            customer: "Alex Mendoza",
            motorcycle: "Yamaha NMAX 155",
            repair: "R-0230",
            priority: "Normal",
            due: "2026-07-25T12:00",
            assigned: "2026-07-25",
            status: "Completed",
            instructions: "Use manufacturer recommended oil.",
            notes: "Completed and quality checked.",
            photos: [],
          },
        ],
        parts: [
          {
            id: "P-01",
            name: "Motul 10W-40 Oil",
            brand: "Motul",
            category: "Engine oil",
            compatibility: "All 4-stroke motorcycles",
            quantity: 18,
            price: 450,
            description: "Premium 4-stroke engine oil, 1 liter.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-02",
            name: "Front Brake Pads",
            brand: "Bendix",
            category: "Brakes",
            compatibility: "Honda Click 125i, Yamaha NMAX",
            quantity: 3,
            price: 650,
            description: "High-performance ceramic brake pads.",
            photo: "",
            status: "Low Stock",
          },
          {
            id: "P-03",
            name: "NGK Spark Plug",
            brand: "NGK",
            category: "Engine",
            compatibility: "Suzuki Raider R150, Honda Click",
            quantity: 4,
            price: 280,
            description: "Reliable ignition and smoother performance.",
            photo: "",
            status: "Low Stock",
          },
          {
            id: "P-04",
            name: "Michelin City Grip Tire",
            brand: "Michelin",
            category: "Tires",
            compatibility: "Yamaha NMAX 155",
            quantity: 8,
            price: 2200,
            description: "All-weather scooter tire.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-05",
            name: "Yuasa Maintenance-Free Battery",
            brand: "Yuasa",
            category: "Electrical",
            compatibility: "Honda Click 125i, Yamaha Mio, Suzuki Burgman",
            quantity: 7,
            price: 1850,
            description: "Sealed motorcycle battery with reliable starting power.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-06",
            name: "DID 428 Drive Chain",
            brand: "DID",
            category: "Drivetrain",
            compatibility: "Suzuki Raider R150, Honda Wave 125",
            quantity: 9,
            price: 1450,
            description: "Durable replacement chain for daily and performance use.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-07",
            name: "K&N Air Filter",
            brand: "K&N",
            category: "Engine",
            compatibility: "Yamaha NMAX 155, Aerox 155",
            quantity: 6,
            price: 1200,
            description: "Washable high-flow air filter for improved airflow.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-08",
            name: "Rear Brake Shoe Set",
            brand: "Bendix",
            category: "Brakes",
            compatibility: "Honda Wave 125, Yamaha Sight",
            quantity: 2,
            price: 520,
            description: "Low-noise rear brake shoes with dependable stopping power.",
            photo: "",
            status: "Low Stock",
          },
          {
            id: "P-09",
            name: "LED Headlight Bulb",
            brand: "Osram",
            category: "Electrical",
            compatibility: "Universal H4 motorcycle fitment",
            quantity: 12,
            price: 780,
            description: "Bright, energy-efficient headlight replacement bulb.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-10",
            name: "IRC Scooter Front Tire",
            brand: "IRC",
            category: "Tires",
            compatibility: "Honda Click 125i, Yamaha Mio i125",
            quantity: 10,
            price: 1650,
            description: "City-focused front tire with stable wet-road grip.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-11",
            name: "Oil Filter Cartridge",
            brand: "Hiflofiltro",
            category: "Engine",
            compatibility: "Yamaha NMAX 155, Aerox 155",
            quantity: 15,
            price: 320,
            description: "High-efficiency filter for routine oil service.",
            photo: "",
            status: "In Stock",
          },
          {
            id: "P-12",
            name: "Fork Oil 10W",
            brand: "Motul",
            category: "Engine oil",
            compatibility: "Most street and scooter front forks",
            quantity: 8,
            price: 690,
            description: "Suspension fluid for smooth damping and fork response.",
            photo: "",
            status: "In Stock",
          },
        ],
        services: [
          {
            id: "S-01",
            name: "Oil Change",
            description: "Engine oil replacement and fluid check.",
            price: 650,
            duration: "30 minutes",
          },
          {
            id: "S-02",
            name: "Brake Service",
            description: "Brake inspection, adjustment, and pad replacement.",
            price: 1200,
            duration: "1 hour",
          },
          {
            id: "S-03",
            name: "Tire Replacement",
            description: "Tire fitting, balancing, and pressure check.",
            price: 2200,
            duration: "45 minutes",
          },
          {
            id: "S-04",
            name: "Chain Service",
            description: "Chain cleaning, lubrication, and tension adjustment.",
            price: 350,
            duration: "30 minutes",
          },
          {
            id: "S-05",
            name: "Engine Repair",
            description: "Engine diagnostics, tune-up, and component repairs.",
            price: 3500,
            duration: "3–5 hours",
          },
          {
            id: "S-06",
            name: "Electrical Repair",
            description: "Battery, wiring, and charging system diagnostics.",
            price: 1800,
            duration: "2 hours",
          },
          {
            id: "S-07",
            name: "General Maintenance",
            description: "Complete safety inspection and routine servicing.",
            price: 950,
            duration: "1 hour",
          },
        ],
        notices: [
          {
            id: "N1",
            title: "New booking request",
            text: "Daniel Cruz requested Brake Service at 10:30 AM.",
            route: "bookings/B-1043",
            read: !1,
            kind: "booking",
          },
          {
            id: "N2",
            title: "Low stock alert",
            text: "Front Brake Pads have only 3 units left.",
            route: "parts",
            read: !1,
            kind: "stock",
          },
          {
            id: "N3",
            title: "Mechanic task update",
            text: "Marco started cleaning the fuel injector.",
            route: "tasks/T-081",
            read: !1,
            kind: "task",
          },
          {
            id: "N4",
            title: "Task completed",
            text: "Jay completed an oil change and safety check.",
            route: "tasks/T-079",
            read: !0,
            kind: "task",
          },
          {
            id: "N5",
            title: "Upcoming booking",
            text: "Alex Mendoza is scheduled for an oil change today.",
            route: "bookings/B-1042",
            read: !0,
            kind: "booking",
          },
          {
            id: "N6",
            title: "Booking cancelled",
            text: "Daniel cancelled the previous chain service booking.",
            route: "bookings/B-1039",
            read: !0,
            kind: "booking",
          },
          {
            id: "N7",
            title: "Customer message",
            text: "Miguel: Please let me know when my motorcycle is ready.",
            route: "customers/Miguel%20Santos",
            read: !0,
            kind: "message",
          },
          {
            id: "N8",
            title: "Customer request",
            text: "Carlo requested an update on the electrical diagnosis.",
            route: "repairs/R-0242",
            read: !1,
            kind: "message",
          },
          {
            id: "N9",
            title: "Repair update",
            text: "Fuel system diagnosis is complete for R-0241.",
            route: "repairs/R-0241",
            read: !0,
            kind: "repair",
          },
        ],
      };
    function iw() {
      return JSON.parse(JSON.stringify(ik));
    }
    function iN({ children: e, variant: t = "secondary", className: s = "", ...i }) {
      return (0, a.jsx)("button", {
        type: "button",
        className: `so-button so-${t} ${s}`,
        ...i,
        children: e,
      });
    }
    function iC({ children: e }) {
      let t = ["Available", "Confirmed", "Completed", "In Stock", "Active"].includes(e)
        ? "good"
        : ["Cancelled", "Inactive", "Urgent", "Out of Stock"].includes(e)
          ? "danger"
          : ["In Progress", "Assigned", "Ongoing"].includes(e)
            ? "blue"
            : "warm";
      return (0, a.jsxs)("span", {
        className: `so-badge ${t}`,
        children: [(0, a.jsx)("i", {}), e],
      });
    }
    function iS({ name: e, photo: t, large: s = !1 }) {
      return (0, a.jsx)("span", {
        className: `so-avatar ${s ? "large" : ""}`,
        children: t
          ? (0, a.jsx)(eV.default, { width: 600, height: 400, src: t, alt: `${e}'s profile` })
          : e
              .split(" ")
              .slice(0, 2)
              .map((e) => e[0])
              .join(""),
      });
    }
    function iM({ children: e, className: t = "" }) {
      return (0, a.jsx)("div", { className: `so-card ${t}`, children: e });
    }
    function iP({ title: e, action: t, onAction: s, children: i }) {
      return (0, a.jsxs)("section", {
        className: "so-section",
        children: [
          (0, a.jsxs)("div", {
            className: "so-section-heading",
            children: [
              (0, a.jsx)("h2", { children: e }),
              t &&
                (0, a.jsxs)(iN, {
                  variant: "text",
                  onClick: s,
                  children: [t, (0, a.jsx)(s3, { size: 13 })],
                }),
            ],
          }),
          i,
        ],
      });
    }
    function iA({ items: e }) {
      return (0, a.jsx)("dl", {
        className: "so-info",
        children: e.map(([e, t]) =>
          (0, a.jsxs)(
            "div",
            {
              children: [
                (0, a.jsx)("dt", { children: e }),
                (0, a.jsx)("dd", { children: t || "Not provided" }),
              ],
            },
            e,
          ),
        ),
      });
    }
    function iR({
      text: e = "Nothing here yet",
      detail: t = "Your shop activity will appear here.",
    }) {
      return (0, a.jsxs)("div", {
        className: "so-empty",
        children: [
          (0, a.jsx)(tz.f, { size: 30 }),
          (0, a.jsx)("strong", { children: e }),
          (0, a.jsx)("p", { children: t }),
        ],
      });
    }
    function i$({ fields: e, submit: t, onSubmit: s, initialValues: r = {} }) {
      let [n, o] = (0, i.useState)({}),
        [l, c] = (0, i.useState)(""),
        [d, m] = (0, i.useState)(!1);
      return (0, a.jsxs)("form", {
        className: "so-form",
        onSubmit: async (e) => {
          if ((e.preventDefault(), d)) return;
          let t = Object.fromEntries(new FormData(e.currentTarget).entries());
          (c(""), m(!0));
          try {
            await s({ ...t, ...n });
          } catch (e) {
            c(e instanceof Error ? e.message : "Unable to save these changes.");
          } finally {
            m(!1);
          }
        },
        children: [
          e.map((e) =>
            (0, a.jsxs)(
              "label",
              {
                className: "so-field",
                children: [
                  (0, a.jsxs)("span", {
                    children: [
                      e.label,
                      !1 !== e.required &&
                        "file" !== e.type &&
                        (0, a.jsx)("em", { children: " *" }),
                    ],
                  }),
                  e.options
                    ? (0, a.jsx)("select", {
                        name: e.name,
                        defaultValue: r[e.name] ?? e.value ?? e.options[0],
                        required: !1 !== e.required,
                        children: e.options.map((e) => (0, a.jsx)("option", { children: e }, e)),
                      })
                    : "textarea" === e.type
                      ? (0, a.jsx)("textarea", {
                          name: e.name,
                          rows: 3,
                          defaultValue: r[e.name] ?? e.value,
                          required: !1 !== e.required,
                        })
                      : "file" === e.type
                        ? (0, a.jsx)("input", {
                            name: e.name,
                            type: "file",
                            accept: "image/*",
                            onChange: (t) => {
                              let s = t.currentTarget,
                                a = s.files?.[0];
                              ((s.value = ""),
                                a &&
                                  (c(""),
                                  m(!0),
                                  sJ(a)
                                    .then((t) => {
                                      o((s) => ({ ...s, [e.name]: t }));
                                    })
                                    .catch((e) => {
                                      c(e instanceof Error ? e.message : "Unable to read image.");
                                    })
                                    .finally(() => {
                                      m(!1);
                                    })));
                            },
                          })
                        : (0, a.jsx)("input", {
                            name: e.name,
                            type: e.type || "text",
                            min: e.min ?? ("number" === e.type ? 0 : void 0),
                            step: "number" === e.type ? "any" : void 0,
                            minLength: "password" === e.type ? 8 : void 0,
                            defaultValue: r[e.name] ?? e.value,
                            required: !1 !== e.required,
                          }),
                  e.hint && (0, a.jsx)("small", { children: e.hint }),
                  n[e.name] &&
                    (0, a.jsx)(eV.default, {
                      width: 600,
                      height: 400,
                      className: "so-upload-preview",
                      src: n[e.name],
                      alt: "Selected upload preview",
                    }),
                ],
              },
              e.name,
            ),
          ),
          l && (0, a.jsx)("p", { role: "alert", className: "so-error", children: l }),
          (0, a.jsxs)(iN, {
            variant: "primary",
            type: "submit",
            disabled: d,
            children: [(0, a.jsx)(st, { size: 17 }), d ? "Saving…" : t],
          }),
        ],
      });
    }
    let iE = (e, t, s, a = !0) => ({ name: e, label: t, type: s, required: a }),
      iD = (e, t, s) => ({ name: e, label: t, options: s });
    function iT({ onLogout: e, onUserUpdated: t, user: s }) {
      let r,
        n = er(),
        o = es(),
        l = sb("owner", s.id),
        [c, d] = (0, i.useState)(null),
        [m, h] = (0, i.useState)(0),
        [p, u] = (0, i.useState)(!1),
        [x, f] = (0, i.useState)([]),
        [g, j] = (0, i.useState)(() =>
          (function (e) {
            try {
              let t = JSON.parse(localStorage.getItem("motofix-owner-v1") || "null");
              return t?.profile && t?.mechanics && t?.notices
                ? {
                    ...t,
                    demoVersion: 2,
                    mechanics:
                      t.demoVersion >= 2
                        ? t.mechanics
                        : [
                            ...t.mechanics,
                            ...ik.mechanics.filter(
                              (e) => "M-05" === e.id && !t.mechanics.some((t) => t.id === e.id),
                            ),
                          ],
                    bookings:
                      t.demoVersion >= 2
                        ? t.bookings
                        : [
                            ...t.bookings,
                            ...ik.bookings.filter(
                              (e) =>
                                ["B-1037", "B-1047"].includes(e.id) &&
                                !t.bookings.some((t) => t.id === e.id),
                            ),
                          ],
                    repairs:
                      t.demoVersion >= 2
                        ? t.repairs
                        : [
                            ...t.repairs,
                            ...ik.repairs.filter(
                              (e) => "R-0231" === e.id && !t.repairs.some((t) => t.id === e.id),
                            ),
                          ],
                    tasks:
                      t.demoVersion >= 2
                        ? t.tasks
                        : [
                            ...t.tasks,
                            ...ik.tasks.filter(
                              (e) => "T-083" === e.id && !t.tasks.some((t) => t.id === e.id),
                            ),
                          ],
                    parts:
                      t.demoVersion >= 2
                        ? t.parts
                        : [
                            ...t.parts,
                            ...ik.parts.filter(
                              (e) =>
                                Number(e.id.slice(2)) >= 5 && !t.parts.some((t) => t.id === e.id),
                            ),
                          ],
                    profile: {
                      ...t.profile,
                      address:
                        "124 P. Tuazon Blvd, Quezon City" === t.profile.address
                          ? "124 Street, New Visayas, Panabo City"
                          : t.profile.address,
                    },
                  }
                : {
                    ...ik,
                    profile: {
                      ...ik.profile,
                      name: e?.shopName || e?.name || ik.profile.name,
                      address: e?.shopAddress || ik.profile.address,
                      phone: e?.phone || ik.profile.phone,
                    },
                  };
            } catch {
              return {
                ...ik,
                profile: {
                  ...ik.profile,
                  name: e?.shopName || e?.name || ik.profile.name,
                  address: e?.shopAddress || ik.profile.address,
                  phone: e?.phone || ik.profile.phone,
                },
              };
            }
          })(s),
        ),
        [b, y] = (0, i.useState)("demo-shop" === s.id ? "motohub" : s.id),
        [v] = tq("motofix-complaints-v1", []),
        [k, w] = tq("motofix-owner-account", { name: s.name, email: s.email, phone: s.phone }),
        [N, C] = tq("motofix-owner-preferences-v1", { dashboardDensity: "Comfortable" }),
        S = N?.dashboardDensity === "Compact" ? "Compact" : "Comfortable",
        M = sh(),
        [P, A] = (0, i.useState)(""),
        [R, $] = (0, i.useState)("Pending"),
        [E, D] = (0, i.useState)("All"),
        [T, z] = (0, i.useState)("Active"),
        [I, F] = (0, i.useState)("All"),
        [L, O] = (0, i.useState)("All"),
        [B, U] = (0, i.useState)(""),
        [q, H] = (0, i.useState)(null),
        [V, W] = (0, i.useState)(null),
        Y = (0, i.useRef)(null),
        [G = "dashboard", _ = "", J = ""] = o.pathname.replace(/^\/shop\/?/, "").split("/"),
        X = g.mechanics.filter((e) => !ik.mechanics.some((t) => t.id === e.id)).length,
        K = v.filter((e) => e.service?.shopId === "motohub").length,
        Q = (e) => {
          (!l.active && ["analytics", "branches", "integrations"].includes(e.split("/")[0])) ||
          ("mechanics/new" === e && !l.active && X >= 3)
            ? d(e)
            : n(`/shop/${e}`);
        };
      ((0, i.useEffect)(() => {
        (!l.active && ["analytics", "branches", "integrations"].includes(G) && d(G),
          !l.active &&
            "mechanics" === G &&
            "new" === _ &&
            X >= 3 &&
            (d("mechanics/new"), n("/shop/mechanics", { replace: !0 })));
      }, [G, _, l.active, X, n]),
        (0, i.useEffect)(() => {
          try {
            (localStorage.setItem("motofix-owner-v1", JSON.stringify(g)),
              window.dispatchEvent(new Event("motofix-catalog")));
          } catch {
            U("Storage is full or unavailable. Changes are kept for this session only.");
          }
        }, [g]),
        (0, i.useEffect)(() => {
          let e = sc().filter((e) => !g.commerceApplied?.includes(e.id));
          e.length &&
            j((t) => {
              let s = e.filter((e) => !t.commerceApplied?.includes(e.id));
              return s.length
                ? {
                    ...t,
                    commerceApplied: [...(t.commerceApplied || []), ...s.map((e) => e.id)],
                    parts: t.parts.map((e) => {
                      let t = Math.max(
                        0,
                        e.quantity -
                          s.filter((t) => t.partId === e.id).reduce((e, t) => e + t.quantity, 0),
                      );
                      return {
                        ...e,
                        quantity: t,
                        status: 0 === t ? "Out of Stock" : t <= 5 ? "Low Stock" : "In Stock",
                      };
                    }),
                    notices: [
                      ...s.map((e) => ({
                        id: `sale-${e.id}`,
                        title: "New motor parts order",
                        text: `${e.customer} ordered ${e.quantity} \xd7 ${e.name}. ${"Pay at shop" === e.payment ? "Payment due at pickup." : "Demo online payment successful."}`,
                        route: "parts",
                        read: !1,
                        kind: "stock",
                      })),
                      ...t.notices,
                    ],
                  }
                : t;
            });
        }, [M, g.commerceApplied]),
        (0, i.useEffect)(() => {
          (Y.current?.scrollTo(0, 0), A(""), H(null));
        }, [o.pathname]),
        (0, i.useEffect)(() => {
          if (!B) return;
          let e = setTimeout(() => U(""), 4200);
          return () => clearTimeout(e);
        }, [B]));
      let Z = (e, t, s) => ({ id: ib("N"), title: e, text: t, route: s, kind: "task", read: !1 }),
        ee = (e) => g.mechanics.find((t) => t.id === e)?.name || "Not assigned",
        et = (e) =>
          g.tasks.filter((t) => t.mechanic === e && !["Completed", "Cancelled"].includes(t.status)),
        ea = (e) => g.repairs.filter((t) => t.mechanic === e && "Completed" !== t.status),
        ei = g.mechanics.filter((e) => ["Available", "Assigned"].includes(e.status)),
        en = ["Not assigned", ...ei.map((e) => e.name)],
        eo = (e) => g.mechanics.find((t) => t.name === e)?.id || "",
        el = (e) => e.toLowerCase().includes(P.toLowerCase()),
        ec = g.bookings.filter((e) => "Pending" === e.status),
        ed = g.repairs.filter((e) => "Completed" !== e.status),
        em = g.parts.filter((e) => e.quantity <= 5),
        eh = [...new Set(g.bookings.map((e) => e.customer))],
        ep =
          {
            dashboard: "Shop Dashboard",
            analytics: "Business Analytics",
            integrations: "App Integrations",
            branches: "Multi-Branch Management",
            mechanics: "Mechanic Management",
            bookings: "Shop Bookings",
            repairs: "Active Repairs",
            tasks: "Task Management",
            parts: "Motor Parts",
            services: "Shop Services",
            customers: "Customers",
            profile: "Profile",
            settings: "Settings",
            subscriptions: "Subscriptions",
            billing: "Billing",
            customization: "Customization Preference",
            complaints: "Manage Complaints",
            "shop-profile": "Shop Profile",
            location: "Shop Location",
            notifications: "Notifications",
            security: "Security",
            help: "Help & Support",
          }[G] || "Shop Dashboard",
        eu = "Everything your shop needs, in one place.",
        ex = (e) =>
          (0, a.jsxs)("label", {
            className: "so-search",
            children: [
              (0, a.jsx)(ad, { size: 17 }),
              (0, a.jsx)("input", {
                "aria-label": e,
                placeholder: e,
                value: P,
                onChange: (e) => A(e.target.value),
              }),
              P &&
                (0, a.jsx)(iN, {
                  variant: "icon",
                  "aria-label": "Clear search",
                  onClick: () => A(""),
                  children: (0, a.jsx)(tP.X, { size: 15 }),
                }),
            ],
          }),
        ef = (e, t, s) =>
          (0, a.jsx)("div", {
            className: "so-tabs",
            role: "tablist",
            children: e.map((e) =>
              (0, a.jsx)(
                iN,
                {
                  role: "tab",
                  "aria-selected": t === e,
                  className: t === e ? "selected" : "",
                  onClick: () => s(e),
                  children: e,
                },
                e,
              ),
            ),
          }),
        eg = (e, t, s, i = s3) =>
          (0, a.jsxs)(
            iN,
            {
              className: "so-link-row",
              onClick: () => Q(s),
              children: [
                (0, a.jsx)("span", {
                  className: "so-row-icon",
                  children: (0, a.jsx)(i, { size: 18 }),
                }),
                (0, a.jsxs)("span", {
                  children: [
                    (0, a.jsx)("strong", { children: e }),
                    t && (0, a.jsx)("small", { children: t }),
                  ],
                }),
                (0, a.jsx)(s3, { size: 16 }),
              ],
            },
            e,
          ),
        ej = (e, t, s = "This action cannot be undone.") =>
          H({
            title: e,
            body: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("p", { children: s }),
                (0, a.jsxs)("div", {
                  className: "so-actions",
                  children: [
                    (0, a.jsx)(iN, { onClick: () => H(null), children: "Keep it" }),
                    (0, a.jsx)(iN, {
                      variant: "danger",
                      onClick: () => {
                        (t(), H(null));
                      },
                      children: "Confirm",
                    }),
                  ],
                }),
              ],
            }),
          }),
        eb = (e, t, s, i, r) =>
          H({
            title: e,
            body: (0, a.jsx)(i$, {
              fields: t,
              submit: s,
              initialValues: r,
              onSubmit: async (e) => {
                (await i(e), H(null));
              },
            }),
          }),
        ey = (e, t) => {
          (j((s) => ({
            ...s,
            bookings: s.bookings.map((s) => (s.id === e.id ? { ...s, status: t } : s)),
            notices: [
              Z(
                `Booking ${t.toLowerCase()}`,
                `${e.customer} \xb7 ${e.service}`,
                `bookings/${e.id}`,
              ),
              ...s.notices,
            ],
          })),
            U(`Booking ${t.toLowerCase()}`));
        },
        ev = (e, t, s) => {
          ei.length
            ? eb(
                "Assign mechanic",
                [
                  iD(
                    "mechanic",
                    "Mechanic",
                    ei.map((e) => e.name),
                  ),
                ],
                "Save Assignment",
                (s) => {
                  let a = eo(s.mechanic);
                  (j((s) => ({
                    ...s,
                    bookings: s.bookings.map((s) =>
                      "booking" === e && s.id === t ? { ...s, mechanic: a } : s,
                    ),
                    repairs: s.repairs.map((s) =>
                      "repair" === e && s.id === t ? { ...s, mechanic: a } : s,
                    ),
                    tasks: s.tasks.map((s) =>
                      "task" === e && s.id === t ? { ...s, mechanic: a, status: "Assigned" } : s,
                    ),
                    mechanics: s.mechanics.map((e) =>
                      e.id === a ? { ...e, status: "Assigned" } : e,
                    ),
                  })),
                    U("Mechanic assigned"));
                },
                { mechanic: ee(s) },
              )
            : U("Add or activate an available mechanic first.");
        },
        ek = (e) => {
          et(e.id).length || ea(e.id).length
            ? U("Reassign this mechanic’s active tasks and repairs before deactivating.")
            : ej(
                "Deactivate mechanic?",
                () => {
                  (j((t) => ({
                    ...t,
                    mechanics: t.mechanics.map((t) =>
                      t.id === e.id ? { ...t, status: "Inactive" } : t,
                    ),
                  })),
                    U("Mechanic account deactivated"));
                },
                "The mechanic will no longer be able to log in. Their work history will be retained.",
              );
        },
        ew = (e) => {
          (j((t) => ({
            ...t,
            tasks: t.tasks.map((t) => (t.id === e.id ? { ...t, status: "Completed" } : t)),
            notices: [
              Z("Task completed", `${ee(e.mechanic)} completed ${e.name}.`, `tasks/${e.id}`),
              ...t.notices,
            ],
          })),
            U("Task marked completed"));
        },
        eN = (e, t = !1) =>
          (0, a.jsxs)(
            iM,
            {
              children: [
                (0, a.jsxs)("div", {
                  className: "so-card-top",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "so-person",
                      children: [
                        (0, a.jsx)(iS, { name: e.customer }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("strong", { children: e.customer }),
                            (0, a.jsx)("small", { children: e.motorcycle }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(iC, { children: e.status }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "so-booking-service",
                  children: [
                    (0, a.jsx)(ab.f, { size: 14 }),
                    (0, a.jsx)("strong", { children: e.service }),
                    (0, a.jsx)("span", { children: ij(e.cost) }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "so-meta",
                  children: [
                    (0, a.jsx)(s1, { size: 13 }),
                    e.date === ig ? "Today" : e.date,
                    (0, a.jsx)(s7, { size: 13 }),
                    e.time,
                  ],
                }),
                !t &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("p", { className: "so-muted", children: e.problem }),
                      (0, a.jsxs)("p", {
                        className: "so-meta",
                        children: [(0, a.jsx)(aY.f, { size: 13 }), ee(e.mechanic)],
                      }),
                    ],
                  }),
                (0, a.jsxs)("div", {
                  className: "so-actions",
                  children: [
                    (0, a.jsxs)(iN, {
                      onClick: () => Q(`bookings/${e.id}`),
                      children: ["View Details", (0, a.jsx)(s3, { size: 13 })],
                    }),
                    "Pending" === e.status &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)(iN, {
                            variant: "primary",
                            onClick: () => ey(e, "Confirmed"),
                            children: [(0, a.jsx)(st, { size: 13 }), "Accept"],
                          }),
                          !t &&
                            (0, a.jsx)(iN, {
                              variant: "danger",
                              onClick: () => ej("Reject booking?", () => ey(e, "Cancelled")),
                              children: "Reject",
                            }),
                        ],
                      }),
                    !t &&
                      ["Pending", "Confirmed"].includes(e.status) &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(iN, { onClick: () => eC(e), children: "Reschedule" }),
                          (0, a.jsx)(iN, {
                            onClick: () => ev("booking", e.id, e.mechanic),
                            children: "Assign Mechanic",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        eC = (e) =>
          eb(
            "Reschedule booking",
            [iE("date", "Appointment date", "date"), iE("time", "Appointment time", "time")],
            "Save Schedule",
            (t) => {
              (j((s) => ({
                ...s,
                bookings: s.bookings.map((s) =>
                  s.id === e.id ? { ...s, date: t.date, time: t.time } : s,
                ),
              })),
                U("Appointment rescheduled"));
            },
            { date: e.date, time: e.time },
          ),
        eS = (e) =>
          (0, a.jsxs)(
            iN,
            {
              className: "so-card so-repair-card",
              onClick: () => Q(`repairs/${e.id}`),
              children: [
                (0, a.jsxs)("div", {
                  className: "so-card-top",
                  children: [
                    (0, a.jsx)("span", { className: "so-meta", children: e.id }),
                    (0, a.jsx)(iC, { children: e.status }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "so-person",
                  children: [
                    (0, a.jsx)("span", {
                      className: "so-bike-icon",
                      children: (0, a.jsx)(sK.f, { size: 24 }),
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("strong", { children: e.motorcycle }),
                        (0, a.jsx)("small", { children: e.customer }),
                      ],
                    }),
                    (0, a.jsx)(s3, { size: 16 }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "so-progress-label",
                  children: [
                    (0, a.jsx)("span", { children: ee(e.mechanic) }),
                    (0, a.jsxs)("strong", { children: [e.progress, "%"] }),
                  ],
                }),
                (0, a.jsx)("progress", {
                  value: e.progress,
                  max: 100,
                  "aria-label": `${e.motorcycle} repair progress`,
                }),
                (0, a.jsxs)("span", {
                  className: "so-meta",
                  children: [(0, a.jsx)(s7, { size: 13 }), "Est. completion: ", e.completion],
                }),
              ],
            },
            e.id,
          ),
        eM = (e) =>
          (0, a.jsxs)(
            iM,
            {
              children: [
                (0, a.jsxs)("div", {
                  className: "so-card-top",
                  children: [
                    (0, a.jsxs)("span", {
                      className: "so-meta",
                      children: [e.id, " · ", e.repair],
                    }),
                    (0, a.jsx)(iC, { children: e.status }),
                  ],
                }),
                (0, a.jsx)("h3", { children: e.name }),
                (0, a.jsxs)("div", {
                  className: "so-meta",
                  children: [
                    (0, a.jsx)(aY.f, { size: 13 }),
                    ee(e.mechanic),
                    (0, a.jsx)(iC, { children: e.priority }),
                  ],
                }),
                (0, a.jsxs)("p", {
                  className: "so-muted",
                  children: [e.customer, " · ", e.motorcycle],
                }),
                (0, a.jsxs)("div", {
                  className: "so-meta",
                  children: [(0, a.jsx)(s7, { size: 13 }), "Due: ", e.due.replace("T", " · ")],
                }),
                (0, a.jsxs)("div", {
                  className: "so-actions",
                  children: [
                    (0, a.jsx)(iN, { onClick: () => Q(`tasks/${e.id}`), children: "View Details" }),
                    (0, a.jsx)(iN, {
                      onClick: () => Q(`tasks/${e.id}/edit`),
                      children: "Edit Task",
                    }),
                    !["Completed", "Cancelled"].includes(e.status) &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(iN, {
                            onClick: () => ev("task", e.id, e.mechanic),
                            children: "Reassign",
                          }),
                          (0, a.jsxs)(iN, {
                            variant: "primary",
                            onClick: () => ew(e),
                            children: [(0, a.jsx)(st, { size: 13 }), "Mark Completed"],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            },
            e.id,
          );
      if ("dashboard" === G) {
        let e = [
          ["Pending bookings", ec.length, s7, "bookings"],
          ["Active repairs", ed.length, ab.f, "repairs"],
          ["Low-stock parts", em.length, sw.f, "parts"],
          ["Total mechanics", g.mechanics.length, aY.f, "mechanics"],
          [
            "Available mechanics",
            g.mechanics.filter((e) => "Available" === e.status).length,
            tB.f,
            "mechanics",
          ],
          [
            "Assigned tasks",
            g.tasks.filter((e) => !["Completed", "Cancelled"].includes(e.status)).length,
            tz.f,
            "tasks",
          ],
          ["Customers", eh.length, aY.f, "customers"],
          ["Manage Complaints", K, tw.f, "complaints"],
        ];
        r = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "so-dashboard-hero",
              children: [
                (0, a.jsx)(eV.default, {
                  width: 600,
                  height: 400,
                  src: ix,
                  alt: "Mechanic servicing a motorcycle in the workshop",
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)("h2", {
                      children: ["Good Day, ", s.name.trim().split(/\s+/)[0] || "Owner"],
                    }),
                    (0, a.jsx)(a8, {}),
                    (0, a.jsxs)(iN, {
                      variant: "primary",
                      className: "so-analytics-access",
                      onClick: () => Q("analytics"),
                      children: ["Access Business Analytics", (0, a.jsx)(it.f, { size: 15 })],
                    }),
                    (0, a.jsx)("div", {
                      className: "so-integration-access",
                      children: (0, a.jsxs)(iN, {
                        onClick: () => Q("integrations"),
                        children: [
                          (0, a.jsx)(id.f, { size: 17 }),
                          "App Integrations",
                          (0, a.jsx)(it.f, { size: 15 }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "so-stat-grid",
              children: e.map(([e, t, s, i]) =>
                (0, a.jsxs)(
                  iN,
                  {
                    className: "so-stat",
                    onClick: () => {
                      ("Active repairs" === e && z("Active"),
                        "Available mechanics" === e && F("Available"),
                        "Low-stock parts" === e && O("Low Stock"),
                        Q(i));
                    },
                    children: [
                      (0, a.jsx)("span", {
                        className: "so-stat-icon",
                        children: (0, a.jsx)(s, { size: 17 }),
                      }),
                      (0, a.jsx)("strong", { children: String(t).padStart(2, "0") }),
                      (0, a.jsx)("small", { children: e }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            (0, a.jsx)("div", {
              className: "so-quick-actions",
              children: [
                ["Mechanics", aY.f, "mechanics"],
                ["Tasks", tz.f, "tasks"],
                ["Services", ab.f, "services"],
                ["Customers", sK.f, "customers"],
              ].map(([e, t, s]) =>
                (0, a.jsxs)(
                  iN,
                  {
                    onClick: () => Q(s),
                    children: [(0, a.jsx)("span", { children: (0, a.jsx)(t, { size: 19 }) }), e],
                  },
                  e,
                ),
              ),
            }),
            (0, a.jsx)(iP, {
              title: "Today's Schedule",
              action: "View all",
              onAction: () => {
                ($("Confirmed"), Q("bookings"));
              },
              children: (0, a.jsx)(iM, {
                className: "so-schedule",
                children: g.bookings
                  .filter((e) => e.date === ig && ["Confirmed", "Ongoing"].includes(e.status))
                  .slice(0, 3)
                  .map((e) =>
                    (0, a.jsxs)(
                      iN,
                      {
                        onClick: () => Q(`bookings/${e.id}`),
                        children: [
                          (0, a.jsxs)("span", {
                            className: "so-time",
                            children: [
                              e.time,
                              (0, a.jsx)("small", {
                                children: Number(e.time.slice(0, 2)) >= 12 ? "PM" : "AM",
                              }),
                            ],
                          }),
                          (0, a.jsx)("span", { className: "so-schedule-dot" }),
                          (0, a.jsxs)("span", {
                            children: [
                              (0, a.jsx)("strong", { children: e.service }),
                              (0, a.jsxs)("small", { children: [e.customer, " · ", e.motorcycle] }),
                            ],
                          }),
                          (0, a.jsx)(s3, { size: 15 }),
                        ],
                      },
                      e.id,
                    ),
                  ),
              }),
            }),
            (0, a.jsx)(iP, {
              title: "Pending Requests",
              action: `${ec.length} new`,
              onAction: () => {
                ($("Pending"), Q("bookings"));
              },
              children: ec.length
                ? ec.slice(0, 2).map((e) => eN(e, !0))
                : (0, a.jsx)(iR, { text: "All caught up", detail: "No pending booking requests." }),
            }),
            (0, a.jsx)(iP, {
              title: "Active Repairs",
              action: "View all",
              onAction: () => Q("repairs"),
              children: ed.length
                ? ed.slice(0, 2).map(eS)
                : (0, a.jsx)(iR, { text: "No active repairs" }),
            }),
            (0, a.jsx)(iP, {
              title: "Mechanics",
              action: "Manage team",
              onAction: () => Q("mechanics"),
              children: (0, a.jsx)(iM, {
                children: g.mechanics.slice(0, 3).map((e) =>
                  (0, a.jsxs)(
                    iN,
                    {
                      className: "so-team-row",
                      onClick: () => Q(`mechanics/${e.id}`),
                      children: [
                        (0, a.jsx)(iS, { name: e.name, photo: e.photo }),
                        (0, a.jsxs)("span", {
                          children: [
                            (0, a.jsx)("strong", { children: e.name }),
                            (0, a.jsxs)("small", {
                              children: [et(e.id).length, " active tasks · ", e.specialization],
                            }),
                          ],
                        }),
                        (0, a.jsx)(iC, { children: e.status }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            }),
            (0, a.jsx)(iP, {
              title: "Recent Customers",
              action: "View all",
              onAction: () => Q("customers"),
              children: (0, a.jsx)(iM, {
                children: eh.slice(0, 3).map((e) =>
                  (0, a.jsxs)(
                    iN,
                    {
                      className: "so-team-row",
                      onClick: () => Q(`customers/${encodeURIComponent(e)}`),
                      children: [
                        (0, a.jsx)(iS, { name: e }),
                        (0, a.jsxs)("span", {
                          children: [
                            (0, a.jsx)("strong", { children: e }),
                            (0, a.jsx)("small", {
                              children: g.bookings.find((t) => t.customer === e)?.motorcycle,
                            }),
                          ],
                        }),
                        (0, a.jsx)(s3, { size: 16 }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
          ],
        });
      } else if ("branches" === G)
        ((eu = ""),
          (r = l.active
            ? (0, a.jsx)(a6, { data: g, shopId: "demo-shop" === s.id ? "motohub" : s.id })
            : (0, a.jsx)(iN, {
                onClick: () => d("branches"),
                children: "Subscribe to unlock Branches",
              })));
      else if ("analytics" === G)
        ((eu = ""),
          (r = l.active
            ? (0, a.jsx)(aZ, { data: g })
            : (0, a.jsx)(iN, {
                onClick: () => d("analytics"),
                children: "Subscribe to unlock Business Analytics",
              })));
      else if ("integrations" === G) {
        eu = "";
        let e = [
            ["Booking", "Date", "Customer", "Service", "Status", "Estimated amount (PHP)"],
            ...g.bookings.map((e) => [
              e.id,
              e.date,
              e.customer,
              e.service,
              e.status,
              g.repairs.find((t) => t.booking === e.id && "Completed" === t.status)?.cost ?? e.cost,
            ]),
          ],
          t = [
            ["Part", "Brand", "Category", "Stock", "Unit price (PHP)"],
            ...g.parts.map((e) => [e.name, e.brand, e.category, e.quantity, e.price]),
          ],
          s = [
            ["Order", "Date", "Customer", "Part", "Quantity", "Shop proceeds (PHP)", "Status"],
            ...M.map((e) => [
              e.id,
              new Date(e.created).toISOString(),
              e.customer,
              e.name,
              e.quantity,
              e.subtotal,
              e.status,
            ]),
          ],
          i = (e, t) => {
            (ie(
              "\uFEFF" +
                e
                  .map((e) =>
                    e
                      .map((e) => {
                        let t =
                          "number" == typeof e ? String(e) : /^[\s]*[=+\-@]/.test(e) ? `'${e}` : e;
                        return `"${t.replace(/"/g, '""')}"`;
                      })
                      .join(","),
                  )
                  .join("\r\n"),
              `motofix-${t}.csv`,
              "text/csv;charset=utf-8;",
            ),
              U("Export downloaded. Import the file into your application."));
          },
          n = [
            {
              name: "Microsoft Excel",
              icon: iu,
              description: "Review sales and stock in a spreadsheet.",
              actions: [
                { label: "Export service sales · CSV", run: () => i(e, "service-sales") },
                { label: "Export inventory · CSV", run: () => i(t, "inventory") },
              ],
            },
            {
              name: "Microsoft Word",
              icon: ii.f,
              description: "Create an editable shop operations report.",
              actions: [
                {
                  label: "Download report · DOC",
                  run: () => {
                    var a, i;
                    (ie(
                      ((a = g.profile.name),
                      (i = [
                        { title: "Service sales estimates", rows: e },
                        { title: "Parts sales", rows: s },
                        { title: "Inventory", rows: t },
                      ]),
                      `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Shop operations report</title></head><body><h1>${a9(a)}</h1><p>Local demo records \xb7 not verified payments</p>${i.map(({ title: e, rows: t }) => `<h2>${a9(e)}</h2><table border="1">${t.map((e, t) => `<tr>${e.map((e) => (0 === t ? `<th>${a9(e)}</th>` : `<td>${a9(e)}</td>`)).join("")}</tr>`).join("")}</table>`).join("")}</body></html>`),
                      "motofix-operations.doc",
                      "application/msword",
                    ),
                      U("Word-compatible report downloaded."));
                  },
                },
              ],
            },
            {
              name: "Google Sheets",
              icon: iu,
              description: "Prepare sales and inventory files for your team.",
              actions: [
                { label: "Export service sales · CSV", run: () => i(e, "sheets-sales") },
                { label: "Export inventory · CSV", run: () => i(t, "sheets-inventory") },
              ],
            },
            {
              name: "QuickBooks",
              icon: si,
              description: "Prepare parts sales for accounting review. Map columns when importing.",
              actions: [{ label: "Export parts sales · CSV", run: () => i(s, "parts-sales") }],
            },
          ];
        r = l.active
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(iM, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "so-meta",
                      children: [
                        (0, a.jsx)(id.f, { size: 18 }),
                        (0, a.jsx)("strong", { children: "Frontend demo" }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "so-muted",
                      children: "Tools for your shop’s operations and sales.",
                    }),
                  ],
                }),
                n.map(({ name: e, icon: t, description: s, actions: i }) => {
                  let r = x.includes(e);
                  return (0, a.jsx)(
                    iP,
                    {
                      title: e,
                      children: (0, a.jsxs)(iM, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "so-card-top",
                            children: [
                              (0, a.jsx)(t, { size: 25 }),
                              (0, a.jsx)(iC, { children: r ? "Demo connected" : "Not connected" }),
                            ],
                          }),
                          (0, a.jsx)("p", { className: "so-muted", children: s }),
                          (0, a.jsxs)("div", {
                            className: "so-actions",
                            children: [
                              r &&
                                i.map(({ label: e, run: t }) =>
                                  (0, a.jsxs)(
                                    iN,
                                    { onClick: t, children: [(0, a.jsx)(tF, { size: 14 }), e] },
                                    e,
                                  ),
                                ),
                              (0, a.jsx)(iN, {
                                variant: r ? "text" : "primary",
                                onClick: () => {
                                  (f((t) => (r ? t.filter((t) => t !== e) : [...t, e])),
                                    U(
                                      r
                                        ? `${e} demo disconnected.`
                                        : `${e} demo connected. File exports are ready.`,
                                    ));
                                },
                                children: r ? "Disconnect" : "Connect demo",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e,
                  );
                }),
              ],
            })
          : (0, a.jsx)(iN, {
              onClick: () => d("integrations"),
              children: "Subscribe to unlock App Integrations",
            });
      } else if ("mechanics" === G) {
        let e = g.mechanics.find((e) => e.id === _);
        if ("new" === _ || "edit" === J) {
          ep = "new" === _ ? "Add Mechanic" : "Edit Mechanic";
          let t = [
            iE("name", "Full Name"),
            iE("phone", "Mobile Number", "tel"),
            iE("email", "Email", "email"),
            iE("photo", "Profile Photo", "file", !1),
            iE("specialization", "Specialization"),
            iE("experience", "Years of Experience", "number"),
            iE("skills", "Skills", "textarea"),
            iD("employment", "Employment Status", ["Full-time", "Part-time", "Contract"]),
            iE("username", "Username"),
            ...("new" === _
              ? [
                  {
                    ...iE("password", "Password", "password"),
                    hint: "At least 8 characters. Share this password privately with the mechanic.",
                  },
                ]
              : []),
          ];
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "so-callout",
                children: [
                  (0, a.jsx)(tB.f, { size: 22 }),
                  (0, a.jsxs)("p", {
                    children: [
                      (0, a.jsx)("strong", { children: "Created by the shop owner" }),
                      "Mechanics do not use the public Create Account screen. Share their credentials so they can use the normal MotoFix Login with the credentials you provide.",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(i$, {
                fields: t,
                initialValues: e,
                submit: "new" === _ ? "Create Mechanic Account" : "Save Mechanic",
                onSubmit: async (t) => {
                  if (!e && !l.active && X >= 3) return void d("mechanics/new");
                  if (
                    g.mechanics.some(
                      (s) =>
                        s.id !== e?.id &&
                        (s.email.toLowerCase() === t.email.toLowerCase() ||
                          s.username.toLowerCase() === t.username.toLowerCase()),
                    )
                  )
                    return void U("A mechanic already uses that email or username.");
                  let s = e?.id;
                  e
                    ? await tf(e.id, {
                        name: t.name,
                        phone: t.phone,
                        email: t.email,
                        username: t.username,
                        specialization: t.specialization,
                        experience: t.experience,
                        skills: t.skills,
                        employment: t.employment,
                        ...(t.password ? { password: t.password } : {}),
                      })
                    : (s = (
                        await tx({
                          name: t.name,
                          phone: t.phone,
                          email: t.email,
                          username: t.username,
                          password: t.password,
                          specialization: t.specialization,
                          experience: t.experience,
                          skills: t.skills,
                          employment: t.employment,
                        })
                      ).mechanicId);
                  let a = {
                    id: s || ib("M"),
                    name: t.name,
                    phone: t.phone,
                    email: t.email,
                    username: t.username,
                    specialization: t.specialization,
                    experience: t.experience,
                    skills: t.skills,
                    employment: t.employment,
                    status: e?.status || "Available",
                    notes: e?.notes || "",
                    photo:
                      "string" == typeof t.photo && t.photo.startsWith("data:")
                        ? t.photo
                        : e?.photo || "",
                  };
                  (j((t) => ({
                    ...t,
                    mechanics: e
                      ? t.mechanics.map((t) => (t.id === e.id ? a : t))
                      : [...t.mechanics, a],
                  })),
                  e)
                    ? (Q(`mechanics/${e.id}`), U("Mechanic updated"))
                    : (W({ id: a.id, password: t.password }), Q(`mechanics/${a.id}/credentials`));
                },
              }),
            ],
          });
        } else
          e && "credentials" === J
            ? ((ep = "Account Credentials"),
              (r = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "so-success",
                    children: [
                      (0, a.jsx)(tB.f, { size: 32 }),
                      (0, a.jsx)("h2", { children: "Mechanic account ready" }),
                      (0, a.jsxs)("p", {
                        children: [
                          "Share these details privately with ",
                          e.name.split(" ")[0],
                          ".",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(iM, {
                    children: (0, a.jsx)(iA, {
                      items: [
                        ["Mechanic", e.name],
                        ["Account email", e.email],
                        ["Username", e.username],
                        [
                          "Password",
                          V?.id === e.id
                            ? (0, a.jsx)("code", { children: V.password })
                            : "Only shown when it is first created. Reset to issue a new password.",
                        ],
                        ["Account status", (0, a.jsx)(iC, { children: e.status })],
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "so-callout",
                    children: [
                      (0, a.jsx)(tB.f, { size: 20 }),
                      (0, a.jsx)("p", {
                        children:
                          "Use the normal MotoFix Login screen. Passwords are stored as secure hashes and shown only when created or reset.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "so-stack",
                    children: [
                      (0, a.jsxs)(iN, {
                        variant: "primary",
                        disabled: V?.id !== e.id,
                        onClick: async () => {
                          try {
                            (await navigator.clipboard.writeText(`MotoFix Login
Name: ${e.name}
Email: ${e.email}
Username: ${e.username}
Password: ${V?.password}`),
                              U("Login credentials copied"));
                          } catch {
                            U("Clipboard unavailable. Select and copy the credentials above.");
                          }
                        },
                        children: [(0, a.jsx)(ia, { size: 16 }), "Copy Login Credentials"],
                      }),
                      (0, a.jsx)(iN, {
                        onClick: async () => {
                          try {
                            let t = await tg(e.id);
                            (W({ id: e.id, password: t.password }),
                              U("New mechanic password generated."));
                          } catch (e) {
                            U(e instanceof Error ? e.message : "Unable to reset this password.");
                          }
                        },
                        children: "Reset Password",
                      }),
                      (0, a.jsx)(iN, {
                        variant: "danger",
                        disabled: "Inactive" === e.status,
                        onClick: () => ek(e),
                        children: "Deactivate Account",
                      }),
                      (0, a.jsx)(iN, {
                        onClick: () => Q(`mechanics/${e.id}`),
                        children: "View Mechanic Details",
                      }),
                    ],
                  }),
                ],
              })))
            : e
              ? ((ep = "history" === J ? "Work History" : "Mechanic Details"),
                (r = (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(tT, {
                      actor: t$(g.profile.name, g.profile.phone),
                      contacts: [tE(e)],
                    }),
                    (0, a.jsxs)(iM, {
                      className: "so-profile-card",
                      children: [
                        (0, a.jsx)(iS, { name: e.name, photo: e.photo, large: !0 }),
                        (0, a.jsx)("h2", { children: e.name }),
                        (0, a.jsx)("p", { children: e.specialization }),
                        (0, a.jsx)(iC, { children: e.status }),
                      ],
                    }),
                    "history" !== J &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(iP, {
                            title: "Mechanic Information",
                            children: (0, a.jsx)(iM, {
                              children: (0, a.jsx)(iA, {
                                items: [
                                  ["Mobile number", e.phone],
                                  ["Email", e.email],
                                  ["Specialization", e.specialization],
                                  ["Skills", e.skills],
                                  ["Experience", `${e.experience} years`],
                                  ["Employment status", e.employment],
                                  [
                                    "Account status",
                                    (0, a.jsx)("select", {
                                      "aria-label": `Account status for ${e.name}`,
                                      className: "so-inline-select",
                                      value: e.status,
                                      onChange: (t) => {
                                        var s, a;
                                        return (
                                          (s = e),
                                          void (["Inactive", "On Leave"].includes(
                                            (a = t.target.value),
                                          ) &&
                                          (et(s.id).length || ea(s.id).length)
                                            ? U(
                                                "Reassign active tasks and repairs before changing this status.",
                                              )
                                            : (j((e) => ({
                                                ...e,
                                                mechanics: e.mechanics.map((e) =>
                                                  e.id === s.id ? { ...e, status: a } : e,
                                                ),
                                              })),
                                              U(`Account status changed to ${a.toLowerCase()}`)))
                                        );
                                      },
                                      children: iy.map((e) =>
                                        (0, a.jsx)("option", { children: e }, e),
                                      ),
                                    }),
                                  ],
                                  [
                                    "Current repair",
                                    ea(e.id)
                                      .map((e) => e.id)
                                      .join(", ") || "No active repair",
                                  ],
                                  ["Active tasks", et(e.id).length],
                                  [
                                    "Completed tasks",
                                    g.tasks.filter(
                                      (t) => t.mechanic === e.id && "Completed" === t.status,
                                    ).length,
                                  ],
                                  ["Notes", e.notes || "No additional notes"],
                                ],
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "so-actions",
                            children: [
                              (0, a.jsx)(iN, {
                                onClick: () => Q(`mechanics/${e.id}/edit`),
                                children: "Edit Mechanic",
                              }),
                              (0, a.jsx)(iN, {
                                variant: "primary",
                                disabled: ["Inactive", "On Leave"].includes(e.status),
                                onClick: () => Q(`tasks/new?mechanic=${e.id}`),
                                children: "Assign Task",
                              }),
                              (0, a.jsx)(iN, {
                                onClick: () => Q(`mechanics/${e.id}/history`),
                                children: "View Work History",
                              }),
                              (0, a.jsx)(iN, {
                                onClick: () => Q(`mechanics/${e.id}/credentials`),
                                children: "Login Credentials",
                              }),
                              (0, a.jsx)(iN, {
                                variant: "danger",
                                disabled: "Inactive" === e.status,
                                onClick: () => ek(e),
                                children: "Deactivate Account",
                              }),
                            ],
                          }),
                          (0, a.jsx)(iP, {
                            title: "Current Tasks",
                            children: et(e.id).length
                              ? et(e.id).map(eM)
                              : (0, a.jsx)(iR, { text: "No active tasks" }),
                          }),
                        ],
                      }),
                    (0, a.jsxs)(iP, {
                      title: "Completed Tasks & Work History",
                      children: [
                        g.tasks.filter((t) => t.mechanic === e.id && "Completed" === t.status)
                          .length
                          ? g.tasks
                              .filter((t) => t.mechanic === e.id && "Completed" === t.status)
                              .map(eM)
                          : (0, a.jsx)(iR, { text: "No completed tasks yet" }),
                        g.repairs
                          .filter((t) => t.mechanic === e.id && "Completed" === t.status)
                          .map(eS),
                      ],
                    }),
                  ],
                })))
              : _
                ? (r = (0, a.jsx)(iR, { text: "Mechanic not found" }))
                : ((eu = `${g.mechanics.length} mechanics \xb7 ${g.mechanics.filter((e) => "Available" === e.status).length} available`),
                  (r = (0, a.jsxs)(a.Fragment, {
                    children: [
                      ex("Search your mechanics"),
                      (0, a.jsxs)(iN, {
                        variant: "primary",
                        className: "so-wide",
                        onClick: () => Q("mechanics/new"),
                        children: [(0, a.jsx)(tO, { size: 16 }), "Add Mechanic"],
                      }),
                      ef(["All", ...iy], I, F),
                      g.mechanics
                        .filter(
                          (e) =>
                            el(`${e.name} ${e.specialization}`) && ("All" === I || e.status === I),
                        )
                        .map((e) =>
                          (0, a.jsxs)(
                            iM,
                            {
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "so-card-top",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "so-person",
                                      children: [
                                        (0, a.jsx)(iS, { name: e.name, photo: e.photo }),
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("strong", { children: e.name }),
                                            (0, a.jsx)("small", { children: e.specialization }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)(iC, { children: e.status }),
                                  ],
                                }),
                                (0, a.jsx)("p", { className: "so-meta", children: e.phone }),
                                (0, a.jsx)(iA, {
                                  items: [
                                    [
                                      "Current repair",
                                      ea(e.id)
                                        .map((e) => e.id)
                                        .join(", ") || "No active repair",
                                    ],
                                    ["Current task", et(e.id)[0]?.name || "No active task"],
                                    ["Active tasks", et(e.id).length],
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "so-actions",
                                  children: [
                                    (0, a.jsx)(iN, {
                                      onClick: () => Q(`mechanics/${e.id}`),
                                      children: "View Details",
                                    }),
                                    (0, a.jsx)(iN, {
                                      onClick: () => Q(`mechanics/${e.id}/edit`),
                                      children: "Edit",
                                    }),
                                    (0, a.jsx)(iN, {
                                      variant: "primary",
                                      disabled: ["Inactive", "On Leave"].includes(e.status),
                                      onClick: () => Q(`tasks/new?mechanic=${e.id}`),
                                      children: "Assign Task",
                                    }),
                                    (0, a.jsx)(iN, {
                                      variant: "danger",
                                      disabled: "Inactive" === e.status,
                                      onClick: () => ek(e),
                                      children: "Deactivate",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      !g.mechanics.some(
                        (e) =>
                          el(`${e.name} ${e.specialization}`) && ("All" === I || e.status === I),
                      ) && (0, a.jsx)(iR, { text: "No mechanics found" }),
                    ],
                  })));
      } else if ("bookings" === G) {
        let e = g.bookings.find((e) => e.id === _);
        if (e) {
          ep = "Booking Details";
          let t = g.repairs.find((t) => t.booking === e.id);
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(iM, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "so-card-top",
                    children: [
                      (0, a.jsx)("span", { className: "so-meta", children: e.id }),
                      (0, a.jsx)(iC, { children: e.status }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "so-person",
                    children: [
                      (0, a.jsx)(iS, { name: e.customer }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h2", { children: e.customer }),
                          (0, a.jsx)("p", { children: e.motorcycle }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(iA, {
                    items: [
                      ["Customer contact", "+63 917 555 0123 · Demo contact"],
                      ["Motorcycle", e.motorcycle],
                      ["Requested service", e.service],
                      ["Problem description", e.problem],
                      ["Appointment", `${e.date} \xb7 ${e.time}`],
                      ["Estimated cost", ij(e.cost)],
                      ["Assigned mechanic", ee(e.mechanic)],
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "so-actions",
                children: [
                  "Pending" === e.status &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(iN, {
                          variant: "primary",
                          onClick: () => ey(e, "Confirmed"),
                          children: "Accept Booking",
                        }),
                        (0, a.jsx)(iN, {
                          variant: "danger",
                          onClick: () => ej("Reject booking?", () => ey(e, "Cancelled")),
                          children: "Reject Booking",
                        }),
                      ],
                    }),
                  ["Pending", "Confirmed"].includes(e.status) &&
                    (0, a.jsx)(iN, { onClick: () => eC(e), children: "Reschedule" }),
                  !["Completed", "Cancelled"].includes(e.status) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(iN, {
                          onClick: () => ev("booking", e.id, e.mechanic),
                          children: "Assign Mechanic",
                        }),
                        (0, a.jsx)(iN, {
                          onClick: () => Q(`tasks/new?booking=${e.id}`),
                          children: "Create Task",
                        }),
                      ],
                    }),
                  "Confirmed" === e.status &&
                    (0, a.jsx)(iN, {
                      variant: "primary",
                      onClick: () => {
                        if (!e.mechanic)
                          return void U("Assign a mechanic before starting the repair.");
                        let t = {
                          id: ib("R"),
                          booking: e.id,
                          customer: e.customer,
                          motorcycle: e.motorcycle,
                          problem: e.problem,
                          diagnosis: "Awaiting initial diagnosis.",
                          mechanic: e.mechanic,
                          status: "In Progress",
                          progress: 0,
                          completion: "To be confirmed",
                          services: [e.service],
                          parts: [],
                          cost: e.cost,
                          notes: "",
                          updates: ["Repair started"],
                        };
                        (j((s) => ({
                          ...s,
                          bookings: s.bookings.map((t) =>
                            t.id === e.id ? { ...t, status: "Ongoing" } : t,
                          ),
                          repairs: [...s.repairs, t],
                          tasks: s.tasks.map((s) =>
                            s.booking === e.id ? { ...s, repair: t.id } : s,
                          ),
                          mechanics: s.mechanics.map((t) =>
                            t.id === e.mechanic ? { ...t, status: "Assigned" } : t,
                          ),
                        })),
                          Q(`repairs/${t.id}`),
                          U("Repair started"));
                      },
                      children: "Start Repair",
                    }),
                  t &&
                    (0, a.jsx)(iN, {
                      onClick: () => Q(`repairs/${t.id}`),
                      children: "View Repair",
                    }),
                ],
              }),
              (0, a.jsxs)(iP, {
                title: "Assigned Tasks",
                children: [
                  g.tasks.filter((s) => (t ? s.repair === t.id : s.booking === e.id)).map(eM),
                  !g.tasks.some((s) => (t ? s.repair === t.id : s.booking === e.id)) &&
                    (0, a.jsx)(iR, { text: "No tasks assigned yet" }),
                ],
              }),
            ],
          });
        } else if (_) r = (0, a.jsx)(iR, { text: "Booking not found" });
        else {
          eu = "Manage appointments from request to completion.";
          let e = g.bookings.filter(
            (e) => e.status === R && el(`${e.customer} ${e.motorcycle} ${e.service}`),
          );
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              ex("Search bookings"),
              ef(["Pending", "Confirmed", "Ongoing", "Completed", "Cancelled"], R, $),
              (0, a.jsxs)("div", {
                className: "so-list-label",
                children: [R, " bookings", (0, a.jsx)("span", { children: e.length })],
              }),
              e.length
                ? e.map((e) => eN(e))
                : (0, a.jsx)(iR, { text: `No ${R.toLowerCase()} bookings` }),
            ],
          });
        }
      } else if ("repairs" === G) {
        let e = g.repairs.find((e) => e.id === _);
        if (e) {
          ep = "Repair Management";
          let t = (t, s) => {
            (j((s) => ({
              ...s,
              repairs: s.repairs.map((s) => (s.id === e.id ? { ...s, ...t } : s)),
            })),
              U(s));
          };
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "so-card-top",
                children: [
                  (0, a.jsx)("span", { className: "so-meta", children: e.id }),
                  (0, a.jsx)(iC, { children: e.status }),
                ],
              }),
              eS(e),
              (0, a.jsx)(tT, {
                actor: t$(g.profile.name, g.profile.phone),
                contacts: [
                  tR(e.customer),
                  ...g.mechanics.filter((t) => t.id === e.mechanic).map(tE),
                ],
              }),
              (0, a.jsx)(iP, {
                title: "Repair Information",
                children: (0, a.jsx)(iM, {
                  children: (0, a.jsx)(iA, {
                    items: [
                      ["Customer", e.customer],
                      ["Motorcycle", e.motorcycle],
                      ["Problem", e.problem],
                      ["Diagnosis", e.diagnosis],
                      ["Assigned mechanic", ee(e.mechanic)],
                      ["Services", e.services.join(", ")],
                      ["Motor parts", e.parts.join(", ") || "No parts added"],
                      ["Total cost", ij(e.cost)],
                      ["Mechanic notes", e.notes || "No notes yet"],
                      ["Repair status", e.status],
                    ],
                  }),
                }),
              }),
              "Completed" !== e.status &&
                (0, a.jsxs)("div", {
                  className: "so-action-grid",
                  children: [
                    (0, a.jsx)(iN, {
                      onClick: () => ev("repair", e.id, e.mechanic),
                      children: "Assign Mechanic",
                    }),
                    (0, a.jsx)(iN, {
                      onClick: () => Q(`tasks/new?repair=${e.id}`),
                      children: "Create Task",
                    }),
                    (0, a.jsx)(iN, {
                      onClick: () =>
                        eb(
                          "Update repair progress",
                          [
                            {
                              ...iE("progress", "Progress (%)", "number"),
                              hint: "Enter a value from 0 to 100.",
                            },
                            iD("status", "Repair Status", [
                              "In Progress",
                              "Waiting for Parts",
                              "Quality Check",
                            ]),
                            iE("completion", "Estimated Completion"),
                            iE("diagnosis", "Diagnosis", "textarea"),
                            iE("notes", "Mechanic Notes", "textarea", !1),
                          ],
                          "Update Progress",
                          (e) =>
                            t(
                              {
                                progress: Math.min(100, Math.max(0, Number(e.progress))),
                                status: e.status,
                                completion: e.completion,
                                diagnosis: e.diagnosis,
                                notes: e.notes,
                              },
                              "Repair progress updated",
                            ),
                          {
                            progress: e.progress,
                            status: e.status,
                            completion: e.completion,
                            diagnosis: e.diagnosis,
                            notes: e.notes,
                          },
                        ),
                      children: "Update Progress",
                    }),
                    (0, a.jsx)(iN, {
                      onClick: () =>
                        eb(
                          "Add service to repair",
                          [
                            iD(
                              "service",
                              "Service",
                              g.services.map((e) => e.name),
                            ),
                          ],
                          "Add Service",
                          (s) => {
                            let a = g.services.find((e) => e.name === s.service);
                            e.services.includes(s.service)
                              ? U("This service is already on the repair.")
                              : t(
                                  {
                                    services: [...e.services, s.service],
                                    cost: e.cost + (a?.price || 0),
                                  },
                                  "Service and estimated cost added",
                                );
                          },
                        ),
                      children: "Add Service",
                    }),
                    (0, a.jsx)(iN, {
                      onClick: () => {
                        let t = g.parts.filter((e) => e.quantity > 0);
                        t.length
                          ? eb(
                              "Add motor part",
                              [
                                iD(
                                  "part",
                                  "Motor Part",
                                  t.map((e) => e.name),
                                ),
                              ],
                              "Add Motor Part",
                              (t) => {
                                let s = g.parts.find((e) => e.name === t.part);
                                s &&
                                  (j((t) => ({
                                    ...t,
                                    parts: t.parts.map((e) =>
                                      e.id === s.id
                                        ? {
                                            ...e,
                                            quantity: e.quantity - 1,
                                            status:
                                              e.quantity - 1 == 0
                                                ? "Out of Stock"
                                                : e.quantity - 1 <= 5
                                                  ? "Low Stock"
                                                  : "In Stock",
                                          }
                                        : e,
                                    ),
                                    repairs: t.repairs.map((t) =>
                                      t.id === e.id
                                        ? {
                                            ...t,
                                            parts: [...t.parts, s.name],
                                            cost: t.cost + s.price,
                                          }
                                        : t,
                                    ),
                                  })),
                                  U("Part added, stock and cost updated"));
                              },
                            )
                          : U("No parts in stock. Update your inventory first.");
                      },
                      children: "Add Motor Part",
                    }),
                    (0, a.jsx)(iN, {
                      onClick: () =>
                        eb(
                          "Update repair cost",
                          [iE("cost", "Total Cost (₱)", "number")],
                          "Update Cost",
                          (e) => t({ cost: Number(e.cost) }, "Repair cost updated"),
                          { cost: e.cost },
                        ),
                      children: "Update Cost",
                    }),
                    (0, a.jsx)(iN, {
                      onClick: () =>
                        eb(
                          "Send customer update",
                          [iE("message", "Update Message", "textarea")],
                          "Send Update",
                          (t) => {
                            (j((s) => ({
                              ...s,
                              repairs: s.repairs.map((s) =>
                                s.id === e.id ? { ...s, updates: [...s.updates, t.message] } : s,
                              ),
                              notices: [
                                Z(
                                  "Repair update sent",
                                  `${e.customer}: ${t.message}`,
                                  `repairs/${e.id}`,
                                ),
                                ...s.notices,
                              ],
                            })),
                              U("Customer update saved."));
                          },
                        ),
                      children: "Send Update",
                    }),
                    (0, a.jsx)(iN, {
                      variant: "primary",
                      onClick: () => {
                        g.tasks.some(
                          (t) =>
                            t.repair === e.id && !["Completed", "Cancelled"].includes(t.status),
                        )
                          ? U("Complete or cancel the assigned tasks first.")
                          : ej(
                              "Mark repair as completed?",
                              () => {
                                (j((t) => ({
                                  ...t,
                                  repairs: t.repairs.map((t) =>
                                    t.id === e.id
                                      ? {
                                          ...t,
                                          status: "Completed",
                                          progress: 100,
                                          updates: [...t.updates, "Repair completed"],
                                        }
                                      : t,
                                  ),
                                  bookings: t.bookings.map((t) =>
                                    t.id === e.booking ? { ...t, status: "Completed" } : t,
                                  ),
                                  notices: [
                                    Z(
                                      "Repair completed",
                                      `${e.motorcycle} is ready for pickup.`,
                                      `repairs/${e.id}`,
                                    ),
                                    ...t.notices,
                                  ],
                                })),
                                  U("Repair completed"));
                              },
                              "The booking will be completed and the motorcycle marked ready for pickup.",
                            );
                      },
                      children: "Mark as Completed",
                    }),
                  ],
                }),
              (0, a.jsx)(iP, {
                title: "Assigned Tasks",
                action: "Add task",
                onAction: () => Q(`tasks/new?repair=${e.id}`),
                children: g.tasks.filter((t) => t.repair === e.id).length
                  ? g.tasks.filter((t) => t.repair === e.id).map(eM)
                  : (0, a.jsx)(iR, { text: "No assigned tasks" }),
              }),
              (0, a.jsx)(iP, {
                title: "Repair Updates",
                children: (0, a.jsx)(iM, {
                  children: e.updates.map((e, t) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: "so-update",
                        children: [
                          (0, a.jsx)("span", { children: (0, a.jsx)(st, { size: 13 }) }),
                          (0, a.jsx)("p", { children: e }),
                        ],
                      },
                      `${e}-${t}`,
                    ),
                  ),
                }),
              }),
            ],
          });
        } else if (_) r = (0, a.jsx)(iR, { text: "Repair not found" });
        else {
          eu = "Keep every motorcycle moving toward the road.";
          let e = g.repairs.filter(
            (e) =>
              ("Active" === T ? "Completed" !== e.status : "Completed" === e.status) &&
              el(`${e.customer} ${e.motorcycle} ${e.id}`),
          );
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              ex("Search repairs"),
              ef(["Active", "Completed"], T, z),
              (0, a.jsxs)("div", {
                className: "so-list-label",
                children: [T, " repairs", (0, a.jsx)("span", { children: e.length })],
              }),
              e.length ? e.map(eS) : (0, a.jsx)(iR, { text: "No repairs found" }),
              (0, a.jsxs)(iN, {
                className: "so-wide",
                onClick: () => Q("tasks"),
                children: [
                  (0, a.jsx)(tz.f, { size: 17 }),
                  "Open Task Management",
                  (0, a.jsx)(s3, { size: 15 }),
                ],
              }),
            ],
          });
        }
      } else if ("tasks" === G) {
        let e = g.tasks.find((e) => e.id === _);
        if ("new" === _ || "edit" === J) {
          ep = "new" === _ ? "Add Task" : "Edit Task";
          let t = new URLSearchParams(o.search),
            s = g.repairs.find((e) => e.id === t.get("repair")),
            i = g.bookings.find((e) => e.id === t.get("booking")),
            n = t.get("mechanic") || s?.mechanic || i?.mechanic || "",
            l = [
              iE("name", "Task Name"),
              iE("description", "Task Description", "textarea"),
              iD("mechanic", "Mechanic", en),
              iD("customer", "Customer", eh),
              iD("motorcycle", "Motorcycle", [...new Set(g.bookings.map((e) => e.motorcycle))]),
              iD("repair", "Related Repair", [
                "Not linked",
                ...g.repairs
                  .filter((t) => "Completed" !== t.status || t.id === e?.repair)
                  .map((e) => e.id),
              ]),
              iD("priority", "Priority", ["Low", "Normal", "High", "Urgent"]),
              iE("due", "Due Date", "datetime-local"),
              ...(e ? [iD("status", "Task Status", iv)] : []),
              iE("instructions", "Instructions", "textarea"),
              iE("notes", "Notes", "textarea", !1),
            ],
            c = e
              ? {
                  name: e.name,
                  description: e.description,
                  customer: e.customer,
                  motorcycle: e.motorcycle,
                  priority: e.priority,
                  due: e.due,
                  status: e.status,
                  instructions: e.instructions,
                  notes: e.notes,
                  mechanic: ee(e.mechanic),
                  repair: e.repair || "Not linked",
                }
              : {
                  mechanic: ee(n),
                  customer: s?.customer || i?.customer || eh[0],
                  motorcycle: s?.motorcycle || i?.motorcycle || g.bookings[0]?.motorcycle,
                  repair: s?.id || "Not linked",
                  priority: "Normal",
                  due: `${ig}T17:00`,
                };
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "so-callout",
                children: [
                  (0, a.jsx)(tz.f, { size: 21 }),
                  (0, a.jsxs)("p", {
                    children: [
                      (0, a.jsx)("strong", { children: "A clear task is a better repair." }),
                      "Choose a mechanic, link a repair, and include the instructions they need.",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(i$, {
                fields: l,
                initialValues: c,
                submit: e ? "Save Task" : "Assign Task",
                onSubmit: (t) => {
                  let s = g.repairs.find((e) => e.id === t.repair);
                  if (s && (s.customer !== t.customer || s.motorcycle !== t.motorcycle))
                    return void U("Customer and motorcycle must match the related repair.");
                  if (
                    !g.bookings.some(
                      (e) => e.customer === t.customer && e.motorcycle === t.motorcycle,
                    )
                  )
                    return void U("Choose a motorcycle belonging to the selected customer.");
                  let a = eo(t.mechanic),
                    r = {
                      id: e?.id || ib("T"),
                      name: t.name,
                      description: t.description,
                      mechanic: a,
                      customer: t.customer,
                      motorcycle: t.motorcycle,
                      repair: s?.id || "",
                      priority: t.priority,
                      due: t.due,
                      assigned: e?.assigned || ig,
                      status: t.status || (a ? "Assigned" : "Pending"),
                      instructions: t.instructions,
                      notes: t.notes,
                      photos: e?.photos || [],
                      booking: e?.booking || i?.id,
                    };
                  (j((t) => ({
                    ...t,
                    tasks: e ? t.tasks.map((t) => (t.id === e.id ? r : t)) : [...t.tasks, r],
                    mechanics: t.mechanics.map((e) =>
                      e.id === a ? { ...e, status: "Assigned" } : e,
                    ),
                    notices: [
                      Z(
                        e ? "Task updated" : "Task assigned",
                        `${r.name} \xb7 ${ee(a)}`,
                        `tasks/${r.id}`,
                      ),
                      ...t.notices,
                    ],
                  })),
                    Q(`tasks/${r.id}`),
                    U(e ? "Task updated" : "Task created"));
                },
              }),
            ],
          });
        } else if (e)
          ((ep = "Task Details"),
            (r = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(iM, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: "so-card-top",
                      children: [
                        (0, a.jsx)("span", { className: "so-meta", children: e.id }),
                        (0, a.jsx)(iC, { children: e.status }),
                      ],
                    }),
                    (0, a.jsx)("h2", { children: e.name }),
                    (0, a.jsx)(iA, {
                      items: [
                        ["Assigned mechanic", ee(e.mechanic)],
                        ["Customer", e.customer],
                        ["Motorcycle", e.motorcycle],
                        ["Repair number", e.repair || "Not linked"],
                        ["Task description", e.description],
                        ["Instructions", e.instructions],
                        ["Priority", (0, a.jsx)(iC, { children: e.priority })],
                        ["Assigned date", e.assigned],
                        ["Due date", e.due.replace("T", " · ")],
                        ["Task status", e.status],
                        ["Mechanic notes", e.notes || "No notes yet"],
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "so-actions",
                  children: [
                    (0, a.jsx)(iN, {
                      onClick: () => Q(`tasks/${e.id}/edit`),
                      children: "Edit Task",
                    }),
                    (0, a.jsx)(iN, {
                      onClick: () => ev("task", e.id, e.mechanic),
                      children: "Reassign Mechanic",
                    }),
                    e.repair &&
                      (0, a.jsx)(iN, {
                        onClick: () => Q(`repairs/${e.repair}`),
                        children: "View Repair",
                      }),
                    !["Completed", "Cancelled"].includes(e.status) &&
                      (0, a.jsx)(iN, {
                        variant: "primary",
                        onClick: () => ew(e),
                        children: "Mark Completed",
                      }),
                  ],
                }),
                (0, a.jsx)(iP, {
                  title: "Task Photos",
                  action: "Add photo",
                  onAction: () =>
                    eb(
                      "Add task photo",
                      [iE("photo", "Task Photo", "file", !1)],
                      "Save Photo",
                      (t) => {
                        t.photo?.startsWith("data:")
                          ? (j((s) => ({
                              ...s,
                              tasks: s.tasks.map((s) =>
                                s.id === e.id ? { ...s, photos: [...s.photos, t.photo] } : s,
                              ),
                            })),
                            U("Photo added"))
                          : U("Choose an image first.");
                      },
                    ),
                  children: e.photos.length
                    ? (0, a.jsx)("div", {
                        className: "so-photo-grid",
                        children: e.photos.map((e, t) =>
                          (0, a.jsx)(
                            eV.default,
                            { width: 600, height: 400, src: e, alt: `Task documentation ${t + 1}` },
                            t,
                          ),
                        ),
                      })
                    : (0, a.jsx)(iR, {
                        text: "No task photos yet",
                        detail: "Upload repair photos to keep a visual work record.",
                      }),
                }),
              ],
            })));
        else if (_) r = (0, a.jsx)(iR, { text: "Task not found" });
        else {
          eu = "The right work, in the right hands.";
          let e = g.tasks.filter(
            (e) =>
              ("All" === E || e.status === E) && el(`${e.name} ${e.customer} ${ee(e.mechanic)}`),
          );
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              ex("Search tasks"),
              (0, a.jsxs)(iN, {
                variant: "primary",
                className: "so-wide",
                onClick: () => Q("tasks/new"),
                children: [(0, a.jsx)(tO, { size: 16 }), "Add Task"],
              }),
              ef(["All", ...iv.filter((e) => "Waiting" !== e)], E, D),
              e.length ? e.map(eM) : (0, a.jsx)(iR, { text: "No tasks found" }),
            ],
          });
        }
      } else if ("parts" === G) {
        let e = g.parts.find((e) => e.id === _);
        if ("new" === _ || "edit" === J)
          ((ep = e ? "Edit Motor Part" : "Add Motor Part"),
            (r = (0, a.jsx)(i$, {
              fields: [
                iE("name", "Motor Part Name"),
                iE("brand", "Brand"),
                iD("category", "Category", [
                  "Engine oil",
                  "Engine",
                  "Brakes",
                  "Tires",
                  "Electrical",
                  "Drivetrain",
                  "Other",
                ]),
                iE("compatibility", "Compatible Motorcycle"),
                iE("quantity", "Quantity", "number"),
                iE("price", "Price (₱)", "number"),
                iE("description", "Description", "textarea"),
                iE("photo", "Motor Part Image", "file", !1),
                ...(e
                  ? [iD("status", "Stock Status", ["In Stock", "Low Stock", "Out of Stock"])]
                  : []),
              ],
              initialValues: e,
              submit: e ? "Save Motor Part" : "Add Motor Part",
              onSubmit: (t) => {
                let s = Number(t.quantity);
                if (!Number.isInteger(s)) return void U("Quantity must be a whole number.");
                let a = {
                  id: e?.id || ib("P"),
                  name: t.name,
                  brand: t.brand,
                  category: t.category,
                  compatibility: t.compatibility,
                  quantity: s,
                  price: Number(t.price),
                  description: t.description,
                  photo:
                    "string" == typeof t.photo && t.photo.startsWith("data:")
                      ? t.photo
                      : e?.photo || "",
                  status:
                    0 === s
                      ? "Out of Stock"
                      : s <= 5
                        ? "Low Stock"
                        : t.status && "Out of Stock" !== t.status
                          ? t.status
                          : "In Stock",
                };
                (j((t) => ({
                  ...t,
                  parts: e ? t.parts.map((t) => (t.id === e.id ? a : t)) : [...t.parts, a],
                })),
                  Q("parts"),
                  U(e ? "Motor part updated" : "Motor part added"));
              },
            })));
        else {
          eu = `${g.parts.length} parts \xb7 ${em.length} need restocking`;
          let e = g.parts.filter(
            (e) => el(`${e.name} ${e.brand} ${e.compatibility}`) && ("All" === L || e.status === L),
          );
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              ex("Search parts or motorcycle"),
              (0, a.jsx)(a7, {}),
              (0, a.jsxs)(iN, {
                variant: "primary",
                className: "so-wide",
                onClick: () => Q("parts/new"),
                children: [(0, a.jsx)(tO, { size: 16 }), "Add Motor Part"],
              }),
              ef(["All", "In Stock", "Low Stock", "Out of Stock"], L, O),
              e.length
                ? e.map((e) =>
                    (0, a.jsxs)(
                      iM,
                      {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "so-card-top",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "so-person",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "so-part-icon",
                                    children: e.photo
                                      ? (0, a.jsx)(eV.default, {
                                          width: 600,
                                          height: 400,
                                          src: e.photo,
                                          alt: e.name,
                                        })
                                      : (0, a.jsx)(sw.f, { size: 25 }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("strong", { children: e.name }),
                                      (0, a.jsxs)("small", {
                                        children: [e.brand, " · ", e.category],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)(iC, { children: e.status }),
                            ],
                          }),
                          (0, a.jsx)("p", { className: "so-muted", children: e.compatibility }),
                          (0, a.jsxs)("div", {
                            className: "so-price-row",
                            children: [
                              (0, a.jsx)("strong", { children: ij(e.price) }),
                              (0, a.jsxs)("span", { children: [e.quantity, " units in stock"] }),
                            ],
                          }),
                          (0, a.jsx)("p", { className: "so-muted", children: e.description }),
                          (0, a.jsxs)("div", {
                            className: "so-actions",
                            children: [
                              (0, a.jsx)(iN, {
                                onClick: () => Q(`parts/${e.id}/edit`),
                                children: "Edit",
                              }),
                              (0, a.jsx)(iN, {
                                variant: "primary",
                                onClick: () =>
                                  eb(
                                    "Update stock",
                                    [iE("quantity", "New Quantity", "number")],
                                    "Update Stock",
                                    (t) => {
                                      let s = Number(t.quantity);
                                      Number.isInteger(s)
                                        ? (j((t) => ({
                                            ...t,
                                            parts: t.parts.map((t) =>
                                              t.id === e.id
                                                ? {
                                                    ...t,
                                                    quantity: s,
                                                    status:
                                                      0 === s
                                                        ? "Out of Stock"
                                                        : s <= 5
                                                          ? "Low Stock"
                                                          : "In Stock",
                                                  }
                                                : t,
                                            ),
                                          })),
                                          U("Stock updated"))
                                        : U("Quantity must be a whole number.");
                                    },
                                    { quantity: e.quantity },
                                  ),
                                children: "Update Stock",
                              }),
                              (0, a.jsx)(iN, {
                                variant: "danger",
                                onClick: () =>
                                  ej("Delete motor part?", () => {
                                    (j((t) => ({
                                      ...t,
                                      parts: t.parts.filter((t) => t.id !== e.id),
                                    })),
                                      U("Motor part deleted"));
                                  }),
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  )
                : (0, a.jsx)(iR, { text: "No motor parts found" }),
            ],
          });
        }
      } else if ("services" === G) {
        let e = g.services.find((e) => e.id === _);
        "new" === _ || "edit" === J
          ? ((ep = e ? "Edit Service" : "Add Service"),
            (r = (0, a.jsx)(i$, {
              fields: [
                iE("name", "Service Name"),
                iE("description", "Description", "textarea"),
                iE("price", "Estimated Price (₱)", "number"),
                iE("duration", "Estimated Duration"),
              ],
              initialValues: e,
              submit: e ? "Save Service" : "Add Service",
              onSubmit: (t) => {
                let s = {
                  id: e?.id || ib("S"),
                  name: t.name,
                  description: t.description,
                  price: Number(t.price),
                  duration: t.duration,
                };
                (j((t) => ({
                  ...t,
                  services: e ? t.services.map((t) => (t.id === e.id ? s : t)) : [...t.services, s],
                })),
                  Q("services"),
                  U(e ? "Service updated" : "Service added"));
              },
            })))
          : ((eu = "What your shop does best."),
            (r = (0, a.jsxs)(a.Fragment, {
              children: [
                ex("Search shop services"),
                (0, a.jsxs)(iN, {
                  variant: "primary",
                  className: "so-wide",
                  onClick: () => Q("services/new"),
                  children: [(0, a.jsx)(tO, { size: 16 }), "Add Service"],
                }),
                g.services
                  .filter((e) => el(e.name))
                  .map((e) =>
                    (0, a.jsxs)(
                      iM,
                      {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "so-person",
                            children: [
                              (0, a.jsx)("span", {
                                className: "so-bike-icon",
                                children: (0, a.jsx)(ab.f, { size: 20 }),
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h3", { children: e.name }),
                                  (0, a.jsx)("small", { children: e.duration }),
                                ],
                              }),
                              (0, a.jsx)("strong", {
                                className: "so-accent",
                                children: ij(e.price),
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", { className: "so-muted", children: e.description }),
                          (0, a.jsxs)("div", {
                            className: "so-actions",
                            children: [
                              (0, a.jsx)(iN, {
                                onClick: () => Q(`services/${e.id}/edit`),
                                children: "Edit Service",
                              }),
                              (0, a.jsx)(iN, {
                                variant: "danger",
                                onClick: () =>
                                  ej("Delete service?", () => {
                                    (j((t) => ({
                                      ...t,
                                      services: t.services.filter((t) => t.id !== e.id),
                                    })),
                                      U("Service deleted"));
                                  }),
                                children: "Delete Service",
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                !g.services.some((e) => el(e.name)) &&
                  (0, a.jsx)(iR, { text: "No services found" }),
              ],
            })));
      } else if ("customers" === G) {
        let e = decodeURIComponent(_);
        if (e && eh.includes(e)) {
          ep = "Customer Details";
          let t = g.bookings.filter((t) => t.customer === e),
            s = g.repairs.filter((t) => t.customer === e);
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(iM, {
                className: "so-profile-card",
                children: [
                  (0, a.jsx)(iS, { name: e, large: !0 }),
                  (0, a.jsx)("h2", { children: e }),
                  (0, a.jsx)("p", { children: "Motorcycle rider · MotoHub customer" }),
                ],
              }),
              (0, a.jsx)(iP, {
                title: "Customer Information",
                children: (0, a.jsx)(iM, {
                  children: (0, a.jsx)(iA, {
                    items: [
                      ["Name", e],
                      ["Contact number", "+63 917 555 0123 · Demo contact"],
                      ["Email", `${e.toLowerCase().replace(/ /g, ".")}@example.com`],
                      ["Motorcycles", [...new Set(t.map((e) => e.motorcycle))].join(", ")],
                      [
                        "Current repair",
                        s
                          .filter((e) => "Completed" !== e.status)
                          .map((e) => e.id)
                          .join(", ") || "No current repair",
                      ],
                      ["Previous repairs", s.filter((e) => "Completed" === e.status).length],
                    ],
                  }),
                }),
              }),
              (0, a.jsx)(iP, {
                title: "Current Repair",
                children: s.filter((e) => "Completed" !== e.status).length
                  ? s.filter((e) => "Completed" !== e.status).map(eS)
                  : (0, a.jsx)(iR, { text: "No current repair" }),
              }),
              (0, a.jsx)(iP, {
                title: "Repair History",
                children: s.filter((e) => "Completed" === e.status).length
                  ? s.filter((e) => "Completed" === e.status).map(eS)
                  : (0, a.jsx)(iR, { text: "No previous repairs" }),
              }),
              (0, a.jsx)(iP, {
                title: "Previous Services & Parts",
                children: (0, a.jsx)(iM, {
                  children: (0, a.jsx)(iA, {
                    items: [
                      [
                        "Services",
                        s
                          .filter((e) => "Completed" === e.status)
                          .flatMap((e) => e.services)
                          .join(", ") || "None yet",
                      ],
                      [
                        "Motor parts replaced",
                        s
                          .filter((e) => "Completed" === e.status)
                          .flatMap((e) => e.parts)
                          .join(", ") || "None yet",
                      ],
                    ],
                  }),
                }),
              }),
              (0, a.jsx)(iP, { title: "Bookings", children: t.map((e) => eN(e, !0)) }),
            ],
          });
        } else
          ((eu = "Know the riders who trust your shop."),
            (r = (0, a.jsxs)(a.Fragment, {
              children: [
                ex("Search customers"),
                eh.filter(el).map((e) => {
                  let t = g.bookings.filter((t) => t.customer === e),
                    s = g.repairs.filter((t) => t.customer === e);
                  return (0, a.jsxs)(
                    iM,
                    {
                      children: [
                        (0, a.jsxs)("div", {
                          className: "so-person",
                          children: [
                            (0, a.jsx)(iS, { name: e }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", { children: e }),
                                (0, a.jsx)("small", { children: t[0].motorcycle }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(iA, {
                          items: [
                            [
                              "Current repair",
                              s.find((e) => "Completed" !== e.status)?.id || "None",
                            ],
                            ["Previous repairs", s.filter((e) => "Completed" === e.status).length],
                            ["Contact", "+63 917 555 0123 · Demo contact"],
                          ],
                        }),
                        (0, a.jsxs)(iN, {
                          className: "so-wide",
                          onClick: () => Q(`customers/${encodeURIComponent(e)}`),
                          children: ["View Customer Details", (0, a.jsx)(s3, { size: 14 })],
                        }),
                      ],
                    },
                    e,
                  );
                }),
                !eh.some(el) && (0, a.jsx)(iR, { text: "No customers found" }),
              ],
            })));
      } else if ("complaints" === G)
        ((eu = "Review, respond, and resolve customer concerns."),
          (r = (0, a.jsx)(t_, { mode: "owner", mechanics: g.mechanics })));
      else if ("subscriptions" === G)
        ((eu = "Review your shop plan and available options."),
          (r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(iM, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "so-card-top",
                    children: [
                      (0, a.jsx)("span", {
                        className: "so-meta",
                        children: "CURRENT SHOP SUBSCRIPTION",
                      }),
                      (0, a.jsx)(iC, {
                        children: l.active
                          ? "Active"
                          : l.cancelled
                            ? "Cancelled"
                            : l.plan
                              ? "Expired"
                              : "Not subscribed",
                      }),
                    ],
                  }),
                  (0, a.jsx)("h2", {
                    children: l.active
                      ? l.plan
                      : l.cancelled
                        ? "Your subscription is cancelled"
                        : l.plan
                          ? `${l.plan} plan expired`
                          : "No active subscription",
                  }),
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children: l.active
                      ? `Your ${l.plan} plan is active through ${new Date(l.expiresAt).toLocaleDateString()}.`
                      : "Choose a plan below to unlock shop subscription benefits.",
                  }),
                  l.active &&
                    (p
                      ? (0, a.jsxs)("div", {
                          className: "so-cancel-subscription",
                          role: "group",
                          "aria-label": "Confirm subscription cancellation",
                          children: [
                            (0, a.jsx)("p", {
                              children:
                                "Cancel the active plan now? Subscription features will be locked immediately.",
                            }),
                            (0, a.jsx)(iN, {
                              variant: "danger",
                              onClick: () => {
                                l.cancel()
                                  ? (u(!1),
                                    U("Subscription cancelled. Shop plan features are now locked."))
                                  : U(
                                      "Unable to cancel the demo subscription. Check browser storage and try again.",
                                    );
                              },
                              children: "Confirm cancellation",
                            }),
                            (0, a.jsx)(iN, { onClick: () => u(!1), children: "Keep subscription" }),
                          ],
                        })
                      : (0, a.jsx)(iN, { onClick: () => u(!0), children: "Cancel subscription" })),
                ],
              }),
              (0, a.jsx)(iP, {
                title: "Available subscription types",
                children: (0, a.jsx)("div", {
                  className: "so-subscription-options",
                  children: sf.map((e, t) =>
                    (0, a.jsxs)(
                      iM,
                      {
                        className: "so-subscription-option",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "so-card-top",
                            children: [
                              (0, a.jsx)("h2", { children: e.label }),
                              l.active &&
                                l.plan === e.label &&
                                (0, a.jsx)(iC, { children: "Current plan" }),
                            ],
                          }),
                          (0, a.jsxs)("strong", {
                            className: "so-subscription-price",
                            children: ["₱", sg.owner[t]],
                          }),
                          (0, a.jsxs)("p", {
                            className: "so-muted",
                            children: [
                              e.months,
                              " ",
                              1 === e.months ? "month" : "months",
                              " · one-time demo payment",
                            ],
                          }),
                          (0, a.jsxs)("ul", {
                            children: [
                              (0, a.jsxs)("li", {
                                children: [
                                  (0, a.jsx)(s2.f, { size: 15 }),
                                  "Business Analytics access",
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                children: [
                                  (0, a.jsx)(s2.f, { size: 15 }),
                                  "Multi-branch management",
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                children: [
                                  (0, a.jsx)(s2.f, { size: 15 }),
                                  "Allows to add more than 3 mechanic accounts",
                                ],
                              }),
                              (0, a.jsxs)("li", {
                                children: [(0, a.jsx)(s2.f, { size: 15 }), "App integrations"],
                              }),
                            ],
                          }),
                          (0, a.jsx)(iN, {
                            variant: "primary",
                            onClick: () => {
                              (h(t), d("settings-subscription"));
                            },
                            className: "so-subscription-plan-action",
                            children: l.active
                              ? l.plan === e.label
                                ? "Renew this plan"
                                : "Switch to this plan"
                              : "Choose this plan",
                          }),
                        ],
                      },
                      e.label,
                    ),
                  ),
                }),
              }),
            ],
          })));
      else if ("billing" === G)
        ((eu = "Save the details used for subscription checkout."),
          (r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("p", {
                className: "so-muted",
                children:
                  "These details are saved on this device and will prefill MotoFix’s demo checkout. No payment is processed here.",
              }),
              (0, a.jsx)(i$, {
                fields: [
                  iE("name", "Full Name"),
                  iE("email", "Email Address", "email"),
                  iE("phone", "Mobile Number", "tel"),
                  iE("address", "Billing Address"),
                  iE("city", "City"),
                  iE("postalCode", "Postal Code"),
                ],
                initialValues: {
                  name: k.name || s.name || "",
                  email: k.email || s.email || "",
                  phone: k.phone || s.phone || "",
                  address: k.address || "",
                  city: k.city || "",
                  postalCode: k.postalCode || "",
                },
                submit: "Save Billing Details",
                onSubmit: (e) => {
                  (w({
                    name: e.name.trim(),
                    email: e.email.trim(),
                    phone: e.phone.trim(),
                    address: e.address.trim(),
                    city: e.city.trim(),
                    postalCode: e.postalCode.trim(),
                  }),
                    U("Billing details saved for future checkouts."));
                },
              }),
            ],
          })));
      else if ("customization" === G)
        ((eu = "Adjust how the shop dashboard is spaced."),
          (r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(iM, {
                children: [
                  (0, a.jsx)("h2", { children: "Dashboard spacing" }),
                  (0, a.jsx)("p", {
                    className: "so-muted",
                    children:
                      "Choose a comfortable layout or a compact layout with tighter dashboard spacing.",
                  }),
                ],
              }),
              (0, a.jsx)(i$, {
                fields: [iD("dashboardDensity", "Dashboard spacing", ["Comfortable", "Compact"])],
                initialValues: { dashboardDensity: S },
                submit: "Save Preference",
                onSubmit: (e) => {
                  (C({
                    dashboardDensity: "Compact" === e.dashboardDensity ? "Compact" : "Comfortable",
                  }),
                    U("Dashboard preference saved."));
                },
              }),
            ],
          })));
      else if ("settings" === G)
        ((eu = "Manage your account preferences."),
          (r = (0, a.jsx)(iP, {
            title: "Settings",
            children: (0, a.jsxs)(iM, {
              className: "so-menu",
              children: [
                eg(
                  "Subscriptions",
                  l.active
                    ? "View plan status and subscription options"
                    : "Choose a plan and manage shop features",
                  "subscriptions",
                  ih,
                ),
                eg("Billing", "Update details used at checkout", "billing", si),
                eg("Customization Preference", "Choose dashboard spacing", "customization", al),
                eg(
                  "Notifications",
                  `${g.notices.filter((e) => !e.read).length} unread updates`,
                  "notifications",
                  tK,
                ),
                eg("Security", "Password & demo authentication", "security", tB.f),
                eg("Help & Support", "We’re here to help", "help", ic),
              ],
            }),
          })));
      else if ("profile" === G)
        ((eu = ""),
          (r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "so-owner-profile",
                children: [
                  (0, a.jsx)(iS, { name: s.name, photo: g.profile.ownerPhoto, large: !0 }),
                  (0, a.jsxs)("label", {
                    className: "so-button so-owner-upload",
                    children: [
                      (0, a.jsx)("input", {
                        type: "file",
                        accept: "image/*",
                        className: "sr-only",
                        "aria-label": "Upload profile photo",
                        onChange: async (e) => {
                          let t = e.currentTarget.files?.[0];
                          if (((e.currentTarget.value = ""), t))
                            try {
                              let e = await sJ(t);
                              (j((t) => ({ ...t, profile: { ...t.profile, ownerPhoto: e } })),
                                U("Profile photo updated."));
                            } catch (e) {
                              U(
                                e instanceof Error
                                  ? e.message
                                  : "Unable to update your profile photo.",
                              );
                            }
                        },
                      }),
                      (0, a.jsx)(sZ, { size: 15 }),
                      "Upload profile photo",
                    ],
                  }),
                  (0, a.jsx)("h2", { children: s.name }),
                  s.displayId && (0, a.jsxs)("p", { children: ["ID: ", s.displayId] }),
                ],
              }),
              (0, a.jsxs)(iM, {
                className: "so-shop-identity",
                children: [
                  (0, a.jsx)(iS, { name: s.name || g.profile.name, photo: g.profile.photo }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h2", { children: g.profile.name }),
                      (0, a.jsx)(iN, {
                        variant: "text",
                        className: "so-edit-profile-photo",
                        onClick: () => Q("shop-profile/edit"),
                        children: "Edit profile photo",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(iP, {
                title: "Profile",
                children: (0, a.jsxs)(iM, {
                  className: "so-menu",
                  children: [
                    eg("Account", "Owner account information", "security/account", aj),
                    eg("Settings", "Subscriptions, billing, notifications & more", "settings", ah),
                  ],
                }),
              }),
              (0, a.jsx)(iP, {
                title: "Your Shop",
                children: (0, a.jsxs)(iM, {
                  className: "so-menu",
                  children: [
                    eg(
                      "Shop Information",
                      "Profile, photos & contact details",
                      "shop-profile",
                      sN.f,
                    ),
                    eg("Business Hours", g.profile.hours, "shop-profile/hours", s7),
                    eg("Shop Location", g.profile.address, "location", as.f),
                    eg("Services", `${g.services.length} services offered`, "services", ab.f),
                    eg("Motor Parts", `${g.parts.length} inventory items`, "parts", sw.f),
                    eg("Mechanics", `${g.mechanics.length} team members`, "mechanics", aY.f),
                    eg("Task Management", "Assignments & work progress", "tasks", tz.f),
                    eg("Customers", "Customer records & repair history", "customers", sK.f),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "mt-5 border-t border-[#31597c] pt-4",
                children: (0, a.jsxs)(iN, {
                  variant: "danger",
                  className: "so-wide",
                  onClick: e,
                  children: [(0, a.jsx)(ai, { size: 16 }), "Logout"],
                }),
              }),
            ],
          })));
      else if ("shop-profile" === G)
        if (["edit", "hours"].includes(_)) {
          ep = "hours" === _ ? "Edit Business Hours" : "Edit Shop Profile";
          let e =
            "hours" === _
              ? [iE("hours", "Opening Hours", "textarea")]
              : [
                  iE("name", "Shop Name"),
                  iE("description", "Description", "textarea"),
                  iE("address", "Address"),
                  iE("phone", "Contact Number", "tel"),
                  iE("brands", "Motorcycle Brands"),
                  iE("photo", "Owner Profile Picture", "file", !1),
                ];
          r = (0, a.jsx)(i$, {
            fields: e,
            initialValues: g.profile,
            submit: "Save Changes",
            onSubmit: (e) => {
              (j((t) => ({ ...t, profile: { ...t.profile, ...e } })),
                Q("shop-profile"),
                U("Shop profile updated"));
            },
          });
        } else
          r = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "so-shop-cover",
                children: [
                  (0, a.jsx)(eV.default, {
                    width: 600,
                    height: 400,
                    src: ix,
                    alt: "MotoHub workshop",
                  }),
                  (0, a.jsx)("span", { children: "Photo by Angry._.Kat / Unsplash" }),
                ],
              }),
              (0, a.jsxs)(iM, {
                className: "so-profile-card",
                children: [
                  (0, a.jsx)(iS, {
                    name: s.name || g.profile.name,
                    photo: g.profile.photo,
                    large: !0,
                  }),
                  (0, a.jsx)("p", {
                    className: "so-owner-photo-label",
                    children: "Owner profile picture",
                  }),
                  (0, a.jsx)("h2", { children: g.profile.name }),
                  (0, a.jsx)("p", { children: g.profile.description }),
                  (0, a.jsxs)("span", {
                    className: "so-rating",
                    children: [
                      (0, a.jsx)(af, { size: 15, fill: "currentColor" }),
                      "4.9 · 128 reviews · Demo rating",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(iM, {
                children: (0, a.jsx)(iA, {
                  items: [
                    ["Address", g.profile.address],
                    ["Map location", `${g.profile.latitude}, ${g.profile.longitude}`],
                    ["Opening hours", g.profile.hours],
                    ["Services", g.services.map((e) => e.name).join(", ")],
                    ["Motorcycle brands", g.profile.brands],
                    ["Contact number", g.profile.phone],
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "so-action-grid",
                children: [
                  (0, a.jsx)(iN, {
                    onClick: () => Q("shop-profile/edit"),
                    children: "Edit Profile",
                  }),
                  (0, a.jsx)(iN, { onClick: () => Q("location"), children: "Edit Location" }),
                  (0, a.jsx)(iN, {
                    onClick: () => Q("shop-profile/hours"),
                    children: "Edit Business Hours",
                  }),
                  (0, a.jsx)(iN, { onClick: () => Q("services"), children: "Edit Services" }),
                ],
              }),
              (0, a.jsxs)(iP, {
                title: "Shop Location",
                children: [
                  (0, a.jsx)(s_, {
                    explorable: !0,
                    selected: "demo-shop" === s.id ? "motohub" : s.id,
                    shops: [{ id: "demo-shop" === s.id ? "motohub" : s.id, name: g.profile.name }],
                  }),
                  (0, a.jsxs)("div", {
                    className: "so-actions",
                    children: [
                      (0, a.jsx)(iN, { onClick: () => Q("location"), children: "Edit Location" }),
                      (0, a.jsx)("a", {
                        className: "so-button",
                        href: sG(g.profile.address),
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Get Directions",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(aH, { shop: g.profile }),
              (0, a.jsx)(iP, {
                title: "Shop Photos",
                children: (0, a.jsx)(eV.default, {
                  width: 600,
                  height: 400,
                  className: "so-workshop-photo",
                  src: ix,
                  alt: "Motorcycle being serviced inside the workshop",
                }),
              }),
            ],
          });
      else if ("location" === G) {
        eu = "Explore routes to motor shops and manage your location.";
        let e = "demo-shop" === s.id ? "motohub" : s.id,
          t = [...eJ, ...e1()],
          i = {
            ...(t.find((t) => t.id === e) || { distance: 0 }),
            id: e,
            name: g.profile.name,
            address: g.profile.address,
          },
          n = [...t.filter((t) => t.id !== e), i],
          o = n.find((e) => e.id === b) || i;
        r = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s_, { explorable: !0, route: !0, selected: o.id, onSelect: y, shops: n }),
            (0, a.jsxs)(iM, {
              children: [
                (0, a.jsx)(iA, {
                  items: [
                    ["Your current location", "DNSC, New Visayas, Panabo City"],
                    ["Destination", o.name],
                    ["Destination address", o.address],
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "mf-caption",
                  children:
                    "Select any motor shop pin to see its illustrative route and estimates.",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "so-action-grid so-route-estimates",
              "aria-live": "polite",
              children: [
                (0, a.jsxs)(iM, {
                  children: [
                    (0, a.jsxs)("strong", { children: [o.distance, " km"] }),
                    (0, a.jsx)("div", { children: "Estimated distance" }),
                  ],
                }),
                (0, a.jsxs)(iM, {
                  children: [
                    (0, a.jsxs)("strong", { children: [Math.ceil(5 * o.distance), " min"] }),
                    (0, a.jsx)("div", { children: "Estimated travel time" }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("a", {
              className: "so-button so-wide",
              href: sG(o.address),
              target: "_blank",
              rel: "noreferrer",
              children: [(0, a.jsx)(as.f, { size: 16 }), " Open directions in Google Maps"],
            }),
            (0, a.jsx)(iM, {
              children: (0, a.jsx)(iA, {
                items: [
                  ["Shop address", g.profile.address],
                  ["Coordinates", `${g.profile.latitude}, ${g.profile.longitude}`],
                ],
              }),
            }),
            (0, a.jsxs)(iN, {
              className: "so-wide",
              onClick: () =>
                Y.current?.querySelector("form")?.scrollIntoView({ behavior: "smooth" }),
              children: [(0, a.jsx)(as.f, { size: 16 }), "Update Location"],
            }),
            (0, a.jsx)(i$, {
              fields: [
                iE("address", "Address"),
                iE("latitude", "Latitude", "number"),
                iE("longitude", "Longitude", "number"),
              ],
              initialValues: g.profile,
              submit: "Save Location",
              onSubmit: (e) => {
                let t = Number(e.latitude),
                  s = Number(e.longitude);
                !Number.isFinite(t) || !Number.isFinite(s) || Math.abs(t) > 90 || Math.abs(s) > 180
                  ? U("Enter valid latitude (−90 to 90) and longitude (−180 to 180).")
                  : (j((t) => ({
                      ...t,
                      profile: {
                        ...t.profile,
                        address: e.address,
                        latitude: e.latitude,
                        longitude: e.longitude,
                      },
                    })),
                    U("Shop location saved"));
              },
            }),
          ],
        });
      } else
        "notifications" === G
          ? ((eu = ""),
            (r = (0, a.jsx)(tQ, {
              items: g.notices.map((e) => ({
                id: e.id,
                title: e.title,
                message: e.text,
                time: "Shop activity",
                unread: !e.read,
                onOpen: () => {
                  (j((t) => ({
                    ...t,
                    notices: t.notices.map((t) => (t.id === e.id ? { ...t, read: !0 } : t)),
                  })),
                    Q(e.route));
                },
              })),
              onMarkAll: () => {
                (j((e) => ({ ...e, notices: e.notices.map((e) => ({ ...e, read: !0 })) })),
                  U("All notifications marked read"));
              },
            })))
          : "security" === G
            ? ((ep = "account" === _ ? "Owner Account" : "Security"),
              (r = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "so-callout",
                    children: [
                      (0, a.jsx)(tB.f, { size: 22 }),
                      (0, a.jsxs)("p", {
                        children: [
                          (0, a.jsx)("strong", { children: "Account security" }),
                          "Login credentials are checked by the MotoFix server. Passwords are stored as secure hashes.",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(iM, {
                    children: (0, a.jsx)(iA, {
                      items: [
                        ["Owner name", s.name],
                        ["Account role", "Motor Shop Owner"],
                        ["Shop", g.profile.name],
                        ["Contact", g.profile.phone],
                        ["Staff account access", "Created and managed by shop owner only"],
                      ],
                    }),
                  }),
                  (0, a.jsx)(iN, {
                    className: "so-wide",
                    onClick: () =>
                      eb(
                        "Update owner name",
                        [iE("name", "Owner Name")],
                        "Save Name",
                        async (e) => {
                          (t((await tc(e.name)).user), U("Owner name updated."));
                        },
                        { name: s.name },
                      ),
                    children: "Update Owner Name",
                  }),
                  (0, a.jsx)(iN, {
                    variant: "primary",
                    className: "so-wide",
                    onClick: () =>
                      eb(
                        "Change password",
                        [
                          iE("current", "Current Password", "password"),
                          iE("password", "New Password", "password"),
                          iE("confirm", "Confirm New Password", "password"),
                        ],
                        "Update Password",
                        async (e) => {
                          if (e.password !== e.confirm) throw Error("New passwords do not match.");
                          (await tl(e.current, e.password), U("Your password was updated."));
                        },
                      ),
                    children: "Change Password",
                  }),
                  (0, a.jsx)(iN, {
                    className: "so-wide",
                    onClick: () => Q("mechanics"),
                    children: "Manage Mechanic Access",
                  }),
                ],
              })))
            : (r =
                "help" === G
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)(iM, {
                          children: [
                            (0, a.jsx)("h2", { children: "We’re here for your shop." }),
                            (0, a.jsx)("p", {
                              className: "so-muted",
                              children:
                                "Manage appointments, keep repairs on track, and give your mechanics a clear plan.",
                            }),
                          ],
                        }),
                        (0, a.jsx)(iP, {
                          title: "Quick Guide",
                          children: (0, a.jsx)(iM, {
                            children: (0, a.jsx)(iA, {
                              items: [
                                [
                                  "Create a mechanic",
                                  "Mechanics → Add Mechanic. Share the generated credentials privately.",
                                ],
                                [
                                  "Start a repair",
                                  "Accept a booking, assign a mechanic, then tap Start Repair.",
                                ],
                                [
                                  "Assign work",
                                  "Tasks → Add Task. Choose the mechanic, customer, motorcycle, and related repair.",
                                ],
                                [
                                  "Inventory",
                                  "Adding parts to a repair reduces stock and updates the estimated cost.",
                                ],
                                [
                                  "Demo data",
                                  "Shop, rider, mechanic, complaint, and message data sync with the MotoFix server.",
                                ],
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)(iN, {
                          className: "so-wide",
                          onClick: () =>
                            eb(
                              "Contact support",
                              [iE("subject", "Subject"), iE("message", "Message", "textarea")],
                              "Send Message",
                              async (e) => {
                                (await tu(e.subject, e.message), U("Support request sent."));
                              },
                            ),
                          children: "Contact Support",
                        }),
                      ],
                    })
                  : (0, a.jsx)(iR, { text: "Screen not found" }));
      let eP = [
          ["Dashboard", "dashboard", io],
          ["Motor Parts", "parts", sw.f],
          ["Branches", "branches", a0.f],
          ["Profile", "profile", aj],
        ],
        eA = ["complaints", "integrations"].includes(G)
          ? "dashboard"
          : ["tasks"].includes(G)
            ? "repairs"
            : [
                  "mechanics",
                  "services",
                  "customers",
                  "shop-profile",
                  "settings",
                  "location",
                  "subscriptions",
                  "billing",
                  "customization",
                  "security",
                  "help",
                  "notifications",
                ].includes(G)
              ? "profile"
              : G;
      return (0, a.jsxs)("div", {
        className: "so-app",
        "data-page": G,
        "data-dashboard-density": S.toLowerCase(),
        children: [
          (0, a.jsxs)("header", {
            className: `so-header ${"dashboard" === G ? "dashboard" : ""}`,
            children: [
              "dashboard" === G
                ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                      className: "so-header-shop",
                      children: [
                        (0, a.jsx)(iS, { name: s.name || g.profile.name, photo: g.profile.photo }),
                        (0, a.jsxs)("div", {
                          className: "so-header-owner-details",
                          children: [
                            (0, a.jsx)("strong", { children: g.profile.name }),
                            (0, a.jsxs)("small", {
                              children: [(0, a.jsx)(as.f, { size: 10 }), "Panabo City"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(iN, {
                        variant: "icon",
                        "aria-label": "Back to previous shop screen",
                        onClick: () =>
                          Q(
                            "complaints" === G
                              ? "dashboard"
                              : [
                                    "subscriptions",
                                    "billing",
                                    "customization",
                                    "settings",
                                    "security",
                                    "notifications",
                                    "help",
                                  ].includes(G)
                                ? "profile"
                                : _
                                  ? G
                                  : "dashboard",
                          ),
                        children: (0, a.jsx)(ss.f, { size: 21 }),
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("h1", { children: ep }),
                          eu && (0, a.jsx)("p", { children: eu }),
                        ],
                      }),
                    ],
                  }),
              (0, a.jsxs)(iN, {
                variant: "icon",
                className: "so-bell",
                "aria-label": "Shop notifications",
                onClick: () => Q("notifications"),
                children: [
                  (0, a.jsx)(tK, { size: 20 }),
                  g.notices.some((e) => !e.read) && (0, a.jsx)("i", {}),
                ],
              }),
            ],
          }),
          (0, a.jsx)(
            "div",
            { className: "so-content", ref: Y, children: r },
            o.pathname + o.search,
          ),
          (0, a.jsxs)("nav", {
            className: "so-bottom-nav",
            "aria-label": "Shop navigation",
            children: [
              (0, a.jsx)(tJ, { to: "/shop/dashboard" }),
              eP.map(([e, t, s]) =>
                (0, a.jsxs)(
                  iN,
                  {
                    "aria-current": eA === t ? "page" : void 0,
                    className: eA === t ? "active" : "",
                    onClick: () => Q(t),
                    children: [(0, a.jsx)(s, { size: 21 }), (0, a.jsx)("span", { children: e })],
                  },
                  t,
                ),
              ),
            ],
          }),
          B &&
            (0, a.jsxs)("div", {
              className: "so-toast",
              role: "status",
              children: [
                (0, a.jsx)(st, { size: 17 }),
                (0, a.jsx)("span", { children: B }),
                (0, a.jsx)(iN, {
                  variant: "icon",
                  "aria-label": "Dismiss notification",
                  onClick: () => U(""),
                  children: (0, a.jsx)(tP.X, { size: 14 }),
                }),
              ],
            }),
          q && (0, a.jsx)(iz, { title: q.title, onClose: () => H(null), children: q.body }),
          c &&
            (0, a.jsx)(sy, {
              role: "owner",
              initialPlan: "settings-subscription" === c ? m : 0,
              fixedPlan: "settings-subscription" === c,
              reason:
                "mechanics/new" === c
                  ? "Your first three mechanic accounts are included. Subscribe to add a fourth mechanic and continue growing your team."
                  : "settings-subscription" === c
                    ? "Review the available shop plans. A simulated payment can activate or extend your shop subscription."
                    : "integrations" === c
                      ? "Subscribe to unlock App Integrations for your shop’s operations and sales."
                      : "Subscribe to access your business performance insights and manage multiple branches.",
              onClose: () => {
                (d(null),
                  ["analytics", "branches", "integrations"].includes(G) && n("/shop/dashboard"));
              },
              onPaid: (e) =>
                !!l.activate(e) &&
                (d(null),
                n(`/shop/${"settings-subscription" === c ? "subscriptions" : c}`),
                U(
                  "mechanics/new" === c
                    ? "Demo subscription activated. Add another mechanic to your shop."
                    : "settings-subscription" === c
                      ? "Demo shop subscription activated."
                      : "Demo subscription activated. Business Analytics, Branches, and App Integrations are now unlocked.",
                ),
                !0),
            }),
        ],
      });
    }
    function iz({ title: e, onClose: t, children: s }) {
      let r = (0, i.useRef)(null);
      return (
        (0, i.useEffect)(() => (r.current?.showModal(), () => r.current?.close()), []),
        (0, a.jsxs)("dialog", {
          className: "so-dialog",
          ref: r,
          onCancel: t,
          "aria-labelledby": "so-dialog-title",
          children: [
            (0, a.jsxs)("div", {
              className: "so-dialog-heading",
              children: [
                (0, a.jsx)("h2", { id: "so-dialog-title", children: e }),
                (0, a.jsx)(iN, {
                  variant: "icon",
                  "aria-label": "Close dialog",
                  onClick: t,
                  children: (0, a.jsx)(tP.X, { size: 20 }),
                }),
              ],
            }),
            s,
          ],
        })
      );
    }
    let iI = {
      name: "clipboard-check",
      size: 24,
      node: [
        ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
        [
          "path",
          {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196",
          },
        ],
        ["path", { d: "m9 14 2 2 4-4", key: "df797q" }],
      ],
    };
    iI.node;
    let iF = (0, tC.f)(iI),
      iL = {
        name: "file-clock",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85",
              key: "ryk6xj",
            },
          ],
          ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
          ["path", { d: "M8 14v2.2l1.6 1", key: "6m4bie" }],
          ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }],
        ],
      };
    iL.node;
    let iO = (0, tC.f)(iL),
      iB = {
        name: "rotate-ccw-clock",
        size: 24,
        node: [
          ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
          ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
          ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
        ],
        aliases: ["history"],
      };
    iB.node;
    let iU = (0, tC.f)(iB);
    var iq = e.i(946540);
    let iH = {
      name: "package-plus",
      size: 24,
      node: [
        ["path", { d: "M12 22V12", key: "d0xqtd" }],
        ["path", { d: "M16 17h6", key: "1ook5g" }],
        ["path", { d: "M19 14v6", key: "1ckrd5" }],
        [
          "path",
          {
            d: "M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",
            key: "28k6lz",
          },
        ],
        ["path", { d: "M3.29 7 12 12l8.71-5", key: "19ckod" }],
        ["path", { d: "m7.5 4.27 8.997 5.148", key: "9yrvtv" }],
      ],
    };
    iH.node;
    let iV = (0, tC.f)(iH),
      iW = new Date().toISOString().slice(0, 10),
      iY = new Date(Date.now() + 864e5).toISOString().slice(0, 10),
      iG = (e) => `${e}-${crypto.randomUUID().slice(0, 7).toUpperCase()}`,
      i_ = {
        profile: {
          name: "MotoHub Service Center",
          address: "124 Street, New Visayas, Panabo City",
          phone: "+63 917 123 4567",
          description: "Expert motorcycle care from a trusted local team.",
        },
        mechanics: [
          {
            id: "M-01",
            name: "Marco Reyes",
            phone: "+63 917 456 7890",
            email: "marco@motohub.demo",
            username: "mechanic.marco",
            specialization: "Engine specialist",
            experience: "8",
            skills: "Engine overhaul, fuel injection, diagnostics",
            employment: "Full-time",
            status: "Assigned",
            notes: "Senior mechanic and team lead.",
            photo: "",
          },
        ],
        tasks: [
          {
            id: "T-081",
            name: "Clean fuel injector",
            description: "Remove, clean, and test the fuel injector.",
            mechanic: "M-01",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            repair: "R-0241",
            priority: "High",
            due: `${iW}T14:00`,
            assigned: iW,
            status: "In Progress",
            instructions: "Run a spray pattern test after cleaning.",
            notes: "Cleaning in progress.",
            photos: [],
          },
          {
            id: "T-084",
            name: "Replace spark plug",
            description: "Install and gap a new NGK spark plug.",
            mechanic: "M-01",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            repair: "R-0241",
            priority: "Normal",
            due: `${iW}T16:00`,
            assigned: iW,
            status: "Pending",
            instructions: "Torque to manufacturer specification.",
            notes: "",
            photos: [],
          },
          {
            id: "T-090",
            name: "Final road test",
            description: "Road-test the motorcycle and confirm smooth acceleration.",
            mechanic: "M-01",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            repair: "R-0241",
            priority: "Normal",
            due: `${iY}T10:00`,
            assigned: iW,
            status: "Pending",
            instructions: "Complete the safety checklist before and after the test.",
            notes: "",
            photos: [],
          },
        ],
        repairs: [
          {
            id: "R-0241",
            booking: "B-1044",
            customer: "Miguel Santos",
            motorcycle: "Suzuki Raider R150",
            problem: "Engine loses power and stalls at low speeds.",
            diagnosis: "Worn spark plug and clogged fuel injector.",
            mechanic: "M-01",
            status: "In Progress",
            progress: 65,
            completion: "Today, 3:00 PM",
            services: ["Engine Repair"],
            parts: ["NGK Spark Plug"],
            cost: 3500,
            notes: "Compression test passed. Fuel injector cleaning underway.",
            updates: ["Diagnosis completed", "Parts approved by customer"],
          },
        ],
        notices: [],
        bookings: [],
        parts: [],
        services: [],
      };
    function iJ() {
      try {
        let e = JSON.parse(localStorage.getItem("motofix-owner-v1") || "null");
        if (e?.mechanics && e?.tasks && e?.repairs) {
          let t = i_.tasks.find((e) => "T-090" === e.id);
          return {
            ...i_,
            ...e,
            tasks: e.tasks.some((e) => e.id === t.id) ? e.tasks : [...e.tasks, t],
            notices: e.notices || [],
            profile: {
              ...i_.profile,
              ...e.profile,
              address:
                e.profile?.address === "124 P. Tuazon Blvd, Quezon City"
                  ? "124 Street, New Visayas, Panabo City"
                  : e.profile?.address || i_.profile.address,
            },
          };
        }
        return i_;
      } catch {
        return i_;
      }
    }
    function iX({ children: e, variant: t = "secondary", className: s = "", ...i }) {
      return (0, a.jsx)("button", {
        type: "button",
        className: `so-button so-${t} ${s}`,
        ...i,
        children: e,
      });
    }
    function iK({ children: e }) {
      let t = ["Completed", "Active", "Available"].includes(e)
        ? "good"
        : ["In Progress", "Assigned"].includes(e)
          ? "blue"
          : "High" === e
            ? "danger"
            : "";
      return (0, a.jsxs)("span", {
        className: `so-badge ${t}`,
        children: [(0, a.jsx)("i", {}), e],
      });
    }
    function iQ({ children: e, className: t = "" }) {
      return (0, a.jsx)("div", { className: `so-card ${t}`, children: e });
    }
    function iZ({ items: e }) {
      return (0, a.jsx)("dl", {
        className: "so-info",
        children: e.map(([e, t]) =>
          (0, a.jsxs)(
            "div",
            {
              children: [
                (0, a.jsx)("dt", { children: e }),
                (0, a.jsx)("dd", { children: t || "Not provided" }),
              ],
            },
            e,
          ),
        ),
      });
    }
    function i0({ mechanic: e, large: t = !1 }) {
      return (0, a.jsx)("span", {
        className: `so-avatar ${t ? "large" : ""}`,
        children: e.photo
          ? (0, a.jsx)(eV.default, {
              width: 600,
              height: 400,
              src: e.photo,
              alt: `${e.name}'s profile`,
            })
          : e.name
              .split(" ")
              .slice(0, 2)
              .map((e) => e[0])
              .join(""),
      });
    }
    function i1({ identity: e, onLogout: t, user: s }) {
      let r,
        n = er(),
        o = es(),
        l = (0, i.useRef)(null),
        [c, d] = (0, i.useState)(iJ),
        [m, h] = (0, i.useState)("Pending"),
        [p, u] = (0, i.useState)(""),
        [x, f] = (0, i.useState)(null),
        [g, j] = (0, i.useState)([]),
        [b = "dashboard", y = ""] = o.pathname.replace(/^\/mechanic\/?/, "").split("/"),
        v = (e || sessionStorage.getItem("motofix-mechanic-identity") || "").toLowerCase().trim(),
        k =
          c.mechanics.find((e) =>
            [e.email, e.username, e.phone].some((e) => e?.toLowerCase() === v),
          ) ||
          c.mechanics.find((e) => "Inactive" !== e.status) ||
          i_.mechanics[0],
        w = c.tasks.filter((e) => e.mechanic === k.id),
        N = c.repairs.filter((e) => e.mechanic === k.id),
        C = N.filter((e) => "Completed" !== e.status);
      ((0, i.useEffect)(() => {
        try {
          localStorage.setItem("motofix-owner-v1", JSON.stringify(c));
        } catch {
          u("Changes are available for this session only.");
        }
      }, [c]),
        (0, i.useEffect)(() => {
          (l.current?.scrollTo(0, 0), f(null));
        }, [o.pathname]),
        (0, i.useEffect)(() => {
          if (!p) return;
          let e = window.setTimeout(() => u(""), 3200);
          return () => window.clearTimeout(e);
        }, [p]));
      let S = (e) => n(`/mechanic/${e}`),
        M = (e) => u(e),
        P = (e, t, s, a) => [
          { id: iG("N"), title: t, text: s, route: a, read: !1, kind: "repair" },
          ...e.notices,
        ],
        A = (e, t) => {
          (d((s) => ({
            ...s,
            tasks: s.tasks.map((s) => (s.id === e.id ? { ...s, status: t } : s)),
            notices: P(
              s,
              `Task ${t.toLowerCase()}`,
              `${k.name} updated ${e.name}.`,
              `tasks/${e.id}`,
            ),
          })),
            M(`Task moved to ${t}`));
        },
        R = (e, t) =>
          f(
            (0, a.jsx)(i8, {
              title: "repair" === e ? "Add repair comment" : "Add work note",
              submit: "repair" === e ? "Post Comment" : "Save Note",
              fields: [
                { name: "note", label: "repair" === e ? "Comment" : "Note", type: "textarea" },
              ],
              onCancel: () => f(null),
              onSubmit: (s) => {
                (d((a) => ({
                  ...a,
                  tasks:
                    "task" === e
                      ? a.tasks.map((e) =>
                          e.id === t.id
                            ? {
                                ...e,
                                notes: [e.notes, s.note].filter(Boolean).join("\n"),
                                updates: [...(e.updates || []), `Mechanic comment: ${s.note}`],
                              }
                            : e,
                        )
                      : a.tasks,
                  repairs:
                    "repair" === e
                      ? a.repairs.map((e) =>
                          e.id === t.id
                            ? { ...e, notes: [e.notes, s.note].filter(Boolean).join("\n") }
                            : e,
                        )
                      : a.repairs,
                })),
                  f(null),
                  M("repair" === e ? "Comment added" : "Note saved"));
              },
            }),
          ),
        $ = (e, t) => {
          let s = document.createElement("input");
          ((s.type = "file"),
            (s.accept = "image/*"),
            (s.onchange = () => {
              let a = s.files?.[0];
              if (!a) return;
              if (a.size > 2097152) return void M("Choose a photo smaller than 2 MB.");
              let i = new FileReader();
              ((i.onload = () => {
                let s = String(i.result);
                (d((a) => ({
                  ...a,
                  tasks:
                    "task" === e
                      ? a.tasks.map((e) => (e.id === t.id ? { ...e, photos: [...e.photos, s] } : e))
                      : a.tasks,
                  repairs:
                    "repair" === e
                      ? a.repairs.map((e) =>
                          e.id === t.id ? { ...e, updates: [...e.updates, "Work photo added"] } : e,
                        )
                      : a.repairs,
                })),
                  M("Photo attached"));
              }),
                i.readAsDataURL(a));
            }),
            s.click());
        };
      if ("dashboard" === b) {
        let e = w.filter((e) => ["Pending", "Assigned"].includes(e.status)),
          t = w.filter((e) => "Completed" === e.status),
          s = w.filter((e) => e.due.slice(0, 10) > iW),
          i = w.filter((e) => e.due.slice(0, 10) === iW && "Completed" !== e.status);
        r = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "mc-greeting",
              children: [
                (0, a.jsxs)("h1", { children: ["Hello, ", k.name.split(" ")[0]] }),
                (0, a.jsx)(a8, {}),
              ],
            }),
            (0, a.jsxs)(iQ, {
              className: "mc-focus-card",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", { children: "TODAY'S ASSIGNMENTS" }),
                    (0, a.jsx)("strong", { children: i.length }),
                    (0, a.jsx)("p", {
                      children: i[0]?.name || "You're all caught up. Check upcoming work.",
                    }),
                  ],
                }),
                (0, a.jsxs)(iX, {
                  variant: "primary",
                  onClick: () => S("repairs"),
                  children: ["View repairs ", (0, a.jsx)(s3, { size: 14 })],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "mc-stat-grid",
              children: [
                [C.length, "Active repairs", sK.f],
                [e.length, "Pending tasks", s7],
                [t.length, "Completed", s2.f],
                [s.length, "Upcoming", iO],
              ].map(([e, t, s]) =>
                (0, a.jsxs)(
                  iQ,
                  {
                    className: "mc-stat",
                    children: [
                      (0, a.jsx)(s, { size: 17 }),
                      (0, a.jsx)("strong", { children: String(e) }),
                      (0, a.jsx)("span", { children: String(t) }),
                    ],
                  },
                  String(t),
                ),
              ),
            }),
            (0, a.jsx)(i2, { title: "Workspace" }),
            (0, a.jsx)("div", {
              className: "mc-access-grid",
              children: [
                [
                  "Repairs",
                  `${C.length} active jobs \xb7 ${e.length} pending tasks`,
                  sK.f,
                  "repairs",
                ],
                [
                  "Repair Updates",
                  "Send customer updates",
                  tw.f,
                  C[0] ? `update-repair/${C[0].id}` : "repairs",
                ],
                ["Work History", "Completed work log", iU, "history"],
              ].map(([e, t, s, i]) =>
                (0, a.jsxs)(
                  iX,
                  {
                    className: "mc-access",
                    onClick: () => S(String(i)),
                    children: [
                      (0, a.jsx)("span", { children: (0, a.jsx)(s, { size: 19 }) }),
                      (0, a.jsx)("strong", { children: String(e) }),
                      (0, a.jsx)("small", { children: String(t) }),
                    ],
                  },
                  String(e),
                ),
              ),
            }),
            (0, a.jsx)(i2, { title: "Next up", action: "See all", onAction: () => S("repairs") }),
            w
              .filter((e) => "Completed" !== e.status)
              .slice(0, 2)
              .map((e) =>
                (0, a.jsx)(i3, { task: e, onView: () => S(`task-details/${e.id}`) }, e.id),
              ),
          ],
        });
      } else if ("repairs" === b || "tasks" === b) {
        let e = w.filter((e) =>
          "Pending" === m ? ["Pending", "Assigned"].includes(e.status) : e.status === m,
        );
        r = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i2, { title: "Assigned repairs" }),
            (0, a.jsxs)("p", {
              className: "mc-list-count",
              children: [N.length, " ASSIGNED REPAIRS"],
            }),
            N.length
              ? N.map((e) =>
                  (0, a.jsx)(i4, { repair: e, onView: () => S(`repair-details/${e.id}`) }, e.id),
                )
              : (0, a.jsx)(i6, { text: "No assigned repairs" }),
            (0, a.jsx)(i2, { title: "Repair tasks" }),
            (0, a.jsx)("div", {
              className: "so-tabs",
              role: "tablist",
              children: ["Pending", "In Progress", "Waiting", "Completed"].map((e) =>
                (0, a.jsx)(
                  iX,
                  {
                    role: "tab",
                    "aria-selected": m === e,
                    className: m === e ? "selected" : "",
                    onClick: () => h(e),
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            (0, a.jsxs)("p", { className: "mc-list-count", children: [e.length, " TASKS"] }),
            e.length
              ? e.map((e) =>
                  (0, a.jsx)(
                    i3,
                    {
                      task: e,
                      onView: () => S(`task-details/${e.id}`),
                      actions: (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(iX, {
                            onClick: () => S(`task-details/${e.id}`),
                            children: "View Task",
                          }),
                          ["Pending", "Assigned"].includes(e.status) &&
                            (0, a.jsx)(iX, {
                              variant: "primary",
                              onClick: () => A(e, "In Progress"),
                              children: "Start Task",
                            }),
                          ["In Progress", "Waiting"].includes(e.status) &&
                            (0, a.jsx)(iX, {
                              onClick: () => S(`task-details/${e.id}`),
                              children: "Update Task",
                            }),
                          "Completed" !== e.status &&
                            (0, a.jsx)(iX, {
                              variant: "primary",
                              onClick: () => A(e, "Completed"),
                              children: "Mark Completed",
                            }),
                        ],
                      }),
                    },
                    e.id,
                  ),
                )
              : (0, a.jsx)(i6, { text: `No ${m.toLowerCase()} tasks` }),
          ],
        });
      } else if ("task-details" === b) {
        let e = w.find((e) => e.id === y);
        r = e
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)(iQ, {
                  className: "mc-detail-lead",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "so-card-top",
                      children: [
                        (0, a.jsx)("span", { className: "mc-id", children: e.id }),
                        (0, a.jsx)(iK, { children: e.status }),
                      ],
                    }),
                    (0, a.jsx)("h2", { children: e.name }),
                    (0, a.jsx)("p", { children: e.description }),
                  ],
                }),
                (0, a.jsx)(iQ, {
                  children: (0, a.jsx)(iZ, {
                    items: [
                      ["Customer", e.customer],
                      ["Motorcycle", e.motorcycle],
                      ["Repair number", e.repair],
                      ["Problem", c.repairs.find((t) => t.id === e.repair)?.problem],
                      ["Instructions", e.instructions],
                      ["Priority", (0, a.jsx)(iK, { children: e.priority }, "priority")],
                      ["Due date", re(e.due)],
                      ["Assigned by", "Shop Owner"],
                      ["Current status", e.status],
                      ["Mechanic notes", e.notes],
                    ],
                  }),
                }),
                e.photos.length > 0 &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(i2, { title: "Work photos" }),
                      (0, a.jsx)("div", {
                        className: "mc-photo-strip",
                        children: e.photos.map((e, t) =>
                          (0, a.jsx)(
                            eV.default,
                            { width: 600, height: 400, src: e, alt: `Task evidence ${t + 1}` },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                (0, a.jsxs)("div", {
                  className: "mc-action-panel",
                  children: [
                    ["Pending", "Assigned"].includes(e.status) &&
                      (0, a.jsxs)(iX, {
                        variant: "primary",
                        onClick: () => A(e, "In Progress"),
                        children: [(0, a.jsx)(ab.f, { size: 14 }), " Start Task"],
                      }),
                    (0, a.jsxs)(iX, {
                      onClick: () => A(e, "Waiting" === e.status ? "In Progress" : "Waiting"),
                      children: [(0, a.jsx)(ah, { size: 14 }), " Update Task"],
                    }),
                    (0, a.jsxs)(iX, {
                      onClick: () => R("task", e),
                      children: [(0, a.jsx)(tw.f, { size: 14 }), " Add Note"],
                    }),
                    (0, a.jsxs)(iX, {
                      onClick: () => $("task", e),
                      children: [(0, a.jsx)(sZ, { size: 14 }), " Add Photo"],
                    }),
                    "Completed" !== e.status &&
                      (0, a.jsxs)(iX, {
                        variant: "primary",
                        onClick: () => A(e, "Completed"),
                        children: [(0, a.jsx)(st, { size: 14 }), " Mark Completed"],
                      }),
                  ],
                }),
              ],
            })
          : (0, a.jsx)(i6, { text: "Task not found" });
      } else if ("repair-details" === b) {
        let e = N.find((e) => e.id === y),
          t = w.filter((t) => t.repair === e?.id);
        r = e
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(tT, {
                  actor: tE(k),
                  contacts: [tR(e.customer), t$(c.profile.name, c.profile.phone)],
                }),
                (0, a.jsxs)(iQ, {
                  className: "mc-detail-lead",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "so-card-top",
                      children: [
                        (0, a.jsx)("span", { className: "mc-id", children: e.id }),
                        (0, a.jsx)(iK, { children: e.status }),
                      ],
                    }),
                    (0, a.jsx)("h2", { children: e.motorcycle }),
                    (0, a.jsx)("p", { children: e.customer }),
                    (0, a.jsx)(i5, { value: e.progress }),
                  ],
                }),
                (0, a.jsx)(iQ, {
                  children: (0, a.jsx)(iZ, {
                    items: [
                      ["Reported problem", e.problem],
                      ["Diagnosis", e.diagnosis],
                      ["Services", e.services.join(", ")],
                      ["Parts", e.parts.join(", ")],
                      ["Mechanic notes", e.notes],
                      ["Estimated completion", e.completion],
                    ],
                  }),
                }),
                (0, a.jsx)(i2, { title: "Assigned tasks" }),
                t.map((e) =>
                  (0, a.jsx)(i3, { task: e, onView: () => S(`task-details/${e.id}`) }, e.id),
                ),
                (0, a.jsx)(i2, { title: "Repair timeline" }),
                (0, a.jsx)(iQ, {
                  className: "mc-timeline",
                  children: e.updates.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        children: [
                          (0, a.jsx)(st, { size: 12 }),
                          (0, a.jsx)("span", { children: e }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: "mc-action-panel",
                  children: [
                    (0, a.jsxs)(iX, {
                      variant: "primary",
                      onClick: () => S(`update-repair/${e.id}`),
                      children: [(0, a.jsx)(ah, { size: 14 }), " Update Progress"],
                    }),
                    (0, a.jsxs)(iX, {
                      onClick: () => R("repair", e),
                      children: [(0, a.jsx)(tw.f, { size: 14 }), " Add Comment"],
                    }),
                    (0, a.jsxs)(iX, {
                      onClick: () => $("repair", e),
                      children: [(0, a.jsx)(sZ, { size: 14 }), " Add Photo"],
                    }),
                    (0, a.jsxs)(iX, {
                      onClick: () => S(`update-repair/${e.id}`),
                      children: [(0, a.jsx)(tO, { size: 14 }), " Add Service"],
                    }),
                    (0, a.jsxs)(iX, {
                      onClick: () => S(`update-repair/${e.id}`),
                      children: [(0, a.jsx)(iV, { size: 14 }), " Add Part"],
                    }),
                    (0, a.jsxs)(iX, {
                      onClick: () => {
                        var t, s, a, i, r;
                        return (
                          (t = e),
                          (s = c),
                          (a = d),
                          (i = k),
                          (r = M),
                          void (a({
                            ...s,
                            repairs: s.repairs.map((e) =>
                              e.id === t.id
                                ? { ...e, updates: [...e.updates, "Customer update sent"] }
                                : e,
                            ),
                            notices: [
                              {
                                id: iG("N"),
                                title: "Customer update sent",
                                text: `${i.name} sent an update for ${t.id}.`,
                                route: `repairs/${t.id}`,
                                read: !1,
                                kind: "repair",
                              },
                              ...s.notices,
                            ],
                          }),
                          r("Update sent to customer and shop owner"))
                        );
                      },
                      children: [(0, a.jsx)(tM, { size: 14 }), " Send Update"],
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsx)(i6, { text: "Repair not found" });
      } else if ("update-repair" === b) {
        let e = N.find((e) => e.id === y);
        r = e
          ? (0, a.jsx)(i9, {
              repair: e,
              onCancel: () => S(`repair-details/${e.id}`),
              onSave: (t) => {
                let s = Number(t.progress),
                  a = t.services
                    .split(",")
                    .map((e) => e.trim())
                    .filter(Boolean),
                  i = t.part.trim() ? `${t.part.trim()} \xd7 ${t.quantity || "1"}` : "";
                (d((r) => ({
                  ...r,
                  repairs: r.repairs.map((r) =>
                    r.id === e.id
                      ? {
                          ...r,
                          status: t.status,
                          progress: s,
                          diagnosis: t.diagnosis,
                          notes: t.notes,
                          completion: t.completion,
                          services: a,
                          parts: i ? [...r.parts.filter((e) => e !== i), i] : r.parts,
                          updates: [...r.updates, `${k.name} updated progress to ${s}%`],
                        }
                      : r,
                  ),
                  notices: P(
                    r,
                    "Mechanic repair update",
                    `${k.name} updated ${e.id} to ${s}% progress.`,
                    `repairs/${e.id}`,
                  ),
                })),
                  M("Update sent to customer and shop owner"),
                  S(`repair-details/${e.id}`));
              },
            })
          : (0, a.jsx)(i6, { text: "Repair not found" });
      } else if ("history" === b) {
        let e = w.filter((e) => "Completed" === e.status),
          t = N.filter((e) => "Completed" === e.status);
        r = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "mc-history-summary",
              children: [
                (0, a.jsx)("strong", { children: t.length + e.length }),
                (0, a.jsx)("span", { children: "completed work records" }),
              ],
            }),
            (0, a.jsx)(i2, { title: "Completed repairs" }),
            t.length
              ? t.map((e) =>
                  (0, a.jsxs)(
                    iQ,
                    {
                      children: [
                        (0, a.jsxs)("div", {
                          className: "so-card-top",
                          children: [
                            (0, a.jsx)("span", { className: "mc-id", children: e.id }),
                            (0, a.jsx)(iK, { children: "Completed" }),
                          ],
                        }),
                        (0, a.jsx)("h3", { children: e.motorcycle }),
                        (0, a.jsx)(iZ, {
                          items: [
                            ["Customer", e.customer],
                            ["Service performed", e.services.join(", ")],
                            ["Date completed", e.completion],
                            ["Parts used", e.parts.join(", ") || "None"],
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                )
              : (0, a.jsx)(i6, { text: "No completed repairs yet" }),
            (0, a.jsx)(i2, { title: "Completed tasks" }),
            e.length
              ? e.map((e) =>
                  (0, a.jsx)(i3, { task: e, onView: () => S(`task-details/${e.id}`) }, e.id),
                )
              : (0, a.jsx)(i6, { text: "No completed tasks yet" }),
          ],
        });
      } else if ("account" === b)
        r = (0, a.jsx)(iQ, {
          children: (0, a.jsx)(iZ, {
            items: [
              ["Full name", k.name],
              ["Mobile number", k.phone],
              ["Email", k.email],
              ["Specialization", k.specialization],
              ["Skills", k.skills],
              ["Years of experience", `${k.experience} years`],
              ["Shop", c.profile.name],
              ["Employment", k.employment],
            ],
          }),
        });
      else if ("profile" === b)
        r = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "mc-profile-hero",
              children: [
                (0, a.jsx)(i0, { mechanic: k, large: !0 }),
                (0, a.jsxs)("label", {
                  className: "so-button mc-profile-photo-action",
                  children: [
                    (0, a.jsx)("input", {
                      type: "file",
                      accept: "image/*",
                      className: "sr-only",
                      "aria-label": "Upload profile photo",
                      onChange: async (e) => {
                        let t = e.currentTarget,
                          s = t.files?.[0];
                        if (((t.value = ""), s))
                          try {
                            let e = await sJ(s);
                            (d((t) => ({
                              ...t,
                              mechanics: t.mechanics.map((t) =>
                                t.id === k.id ? { ...t, photo: e } : t,
                              ),
                            })),
                              M("Profile photo updated."));
                          } catch (e) {
                            M(
                              e instanceof Error
                                ? e.message
                                : "Unable to update your profile photo.",
                            );
                          }
                      },
                    }),
                    (0, a.jsx)(sZ, { size: 14 }),
                    k.photo ? "Change profile photo" : "Upload profile photo",
                  ],
                }),
                (0, a.jsx)("h2", { children: k.name }),
                s.displayId && (0, a.jsxs)("p", { children: ["ID: ", s.displayId] }),
                (0, a.jsx)(iK, { children: "Inactive" === k.status ? "Inactive" : "Active" }),
              ],
            }),
            (0, a.jsxs)("section", {
              className: "mc-profile-settings",
              children: [
                (0, a.jsx)("h3", { children: "Profile" }),
                (0, a.jsx)("div", {
                  className: "mc-profile-links",
                  children: (0, a.jsx)(i7, {
                    icon: aj,
                    label: "Account",
                    detail: "View your personal and work information",
                    onClick: () => S("account"),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("section", {
              className: "mc-profile-settings",
              children: [
                (0, a.jsx)("h3", { children: "Settings" }),
                (0, a.jsxs)("div", {
                  className: "mc-profile-links",
                  children: [
                    (0, a.jsx)(i7, {
                      icon: iq.f,
                      label: "Change Password",
                      detail: "Update your MotoFix account password",
                      onClick: () =>
                        f(
                          (0, a.jsx)(i8, {
                            title: "Change password",
                            submit: "Update Password",
                            fields: [
                              { name: "current", label: "Current password", type: "password" },
                              {
                                name: "next",
                                label: "New password",
                                type: "password",
                                minLength: 8,
                              },
                              {
                                name: "confirm",
                                label: "Confirm new password",
                                type: "password",
                                minLength: 8,
                              },
                            ],
                            onCancel: () => f(null),
                            onSubmit: async (e) => {
                              if (e.next !== e.confirm) throw Error("New passwords do not match.");
                              (await tl(e.current, e.next),
                                f(null),
                                M("Your password was updated."));
                            },
                          }),
                        ),
                    }),
                    (0, a.jsx)(i7, {
                      icon: tK,
                      label: "Notifications",
                      detail: "View task alerts and repair reminders",
                      onClick: () => S("notifications"),
                    }),
                    (0, a.jsx)(i7, {
                      icon: ic,
                      label: "Help & Support",
                      detail: "Get support from your shop",
                      onClick: () => S("help"),
                    }),
                    (0, a.jsx)(i7, {
                      icon: ai,
                      label: "Logout",
                      detail: "Sign out of this mechanic account",
                      onClick: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      else if ("notifications" === b) {
        let e = [
          {
            title: "New task assigned",
            text: "Final road test was added to repair R-0241.",
            time: "Just now",
            route: "tasks",
            unread: !0,
          },
          {
            title: "Task due today",
            text: "Replace spark plug is due today at 4:00 PM.",
            time: "18 min ago",
            route: "task-details/T-084",
            unread: !0,
          },
          {
            title: "Repair progress reminder",
            text: "R-0241 is currently at 65%. Add an update for the customer.",
            time: "1 hr ago",
            route: "update-repair/R-0241",
            unread: !1,
          },
          {
            title: "Shop announcement",
            text: "Complete all end-of-day safety checks before clocking out.",
            time: "Yesterday",
            route: "dashboard",
            unread: !1,
          },
        ];
        r = (0, a.jsx)(tQ, {
          items: e.map((e) => ({
            id: e.title,
            title: e.title,
            message: e.text,
            time: e.time,
            unread: e.unread && !g.includes(e.title),
            onOpen: () => {
              (j((t) => [...t, e.title]), S(e.route));
            },
          })),
          onMarkAll: () => j(e.map((e) => e.title)),
        });
      } else
        r = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(iQ, {
              className: "mc-support-card",
              children: [
                (0, a.jsx)(ic, { size: 30 }),
                (0, a.jsx)("h2", { children: "How can we help?" }),
                (0, a.jsx)("p", {
                  children:
                    "For account access and work assignment questions, contact your shop owner or MotoFix support.",
                }),
              ],
            }),
            (0, a.jsx)(iQ, {
              children: (0, a.jsx)(iZ, {
                items: [
                  ["Shop", c.profile.name],
                  ["Shop contact", c.profile.phone],
                  ["MotoFix support", "support@motofix.demo"],
                ],
              }),
            }),
          ],
        });
      let E =
        "task-details" === b
          ? "repairs"
          : ["repair-details", "update-repair"].includes(b)
            ? "update-repair" === b
              ? `repair-details/${y}`
              : "repairs"
            : "history" === b
              ? "dashboard"
              : "profile";
      return (0, a.jsxs)("div", {
        className: "so-app mc-app",
        children: [
          (0, a.jsxs)("header", {
            className: `so-header ${"dashboard" === b ? "dashboard" : ""}`,
            children: [
              !["dashboard", "tasks", "repairs", "profile"].includes(b) &&
                (0, a.jsx)(iX, {
                  variant: "icon",
                  "aria-label": "Go back",
                  onClick: () => S(E),
                  children: (0, a.jsx)(ss.f, { size: 17 }),
                }),
              "dashboard" === b
                ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                      className: "so-header-shop",
                      children: [
                        (0, a.jsx)("span", {
                          className: "so-avatar",
                          "aria-label": `${c.profile.name} initials`,
                          children: c.profile.name
                            .trim()
                            .split(/\s+/)
                            .slice(0, 2)
                            .map((e) => e[0])
                            .join("")
                            .toUpperCase(),
                        }),
                        (0, a.jsxs)("div", {
                          className: "so-header-owner-details",
                          children: [
                            (0, a.jsx)("strong", { children: c.profile.name }),
                            (0, a.jsxs)("small", {
                              children: [
                                (0, a.jsx)(as.f, { size: 10 }),
                                c.profile.address.split(",").slice(-1)[0]?.trim(),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h1", {
                        children:
                          {
                            dashboard: "Mechanic Dashboard",
                            tasks: "Repairs",
                            "task-details": "Task Details",
                            repairs: "Repairs",
                            "repair-details": "Repair Details",
                            "update-repair": "Update Repair",
                            history: "Work History",
                            profile: "My Profile",
                            account: "Account",
                            notifications: "Notifications",
                            help: "Help & Support",
                          }[b] || "Mechanic Workspace",
                      }),
                      (0, a.jsx)("p", { children: c.profile.name }),
                    ],
                  }),
              (0, a.jsxs)(iX, {
                variant: "icon",
                className: "so-bell",
                "aria-label": "Notifications",
                onClick: () => S("notifications"),
                children: [(0, a.jsx)(tK, { size: 17 }), (0, a.jsx)("i", {})],
              }),
            ],
          }),
          (0, a.jsx)("main", { className: "so-content", ref: l, children: r }),
          (0, a.jsxs)("nav", {
            className: "mc-bottom-nav",
            "aria-label": "Mechanic navigation",
            children: [
              (0, a.jsx)(tJ, { to: "/mechanic/dashboard" }),
              [
                ["dashboard", "Dashboard", ab.f],
                ["repairs", "Repairs", sK.f],
                ["profile", "Profile", aj],
              ].map(([e, t, s]) => {
                let i =
                  b === e ||
                  ("profile" === e && "account" === b) ||
                  ("repairs" === e &&
                    ["tasks", "task-details", "repair-details", "update-repair"].includes(b));
                return (0, a.jsxs)(
                  iX,
                  {
                    className: i ? "active" : "",
                    onClick: () => S(String(e)),
                    children: [
                      (0, a.jsx)(s, { size: 21 }),
                      (0, a.jsx)("span", { children: String(t) }),
                    ],
                  },
                  String(e),
                );
              }),
            ],
          }),
          p && (0, a.jsx)("div", { className: "so-toast", children: p }),
          x &&
            (0, a.jsx)("div", {
              className: "so-dialog-backdrop",
              onMouseDown: () => f(null),
              children: (0, a.jsx)("div", {
                className: "so-dialog",
                onMouseDown: (e) => e.stopPropagation(),
                children: x,
              }),
            }),
        ],
      });
    }
    function i2({ title: e, action: t, onAction: s }) {
      return (0, a.jsxs)("div", {
        className: "so-section-heading",
        children: [
          (0, a.jsx)("h2", { children: e }),
          t &&
            (0, a.jsxs)(iX, {
              variant: "text",
              onClick: s,
              children: [t, " ", (0, a.jsx)(s3, { size: 12 })],
            }),
        ],
      });
    }
    function i5({ value: e }) {
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsxs)("div", {
            className: "so-progress-label",
            children: [
              (0, a.jsx)("span", { children: "Repair progress" }),
              (0, a.jsxs)("strong", { children: [e, "%"] }),
            ],
          }),
          (0, a.jsx)("progress", { value: e, max: "100" }),
        ],
      });
    }
    function i3({ task: e, onView: t, actions: s }) {
      return (0, a.jsxs)(iQ, {
        className: "mc-task-card",
        children: [
          (0, a.jsxs)("div", {
            className: "so-card-top",
            children: [
              (0, a.jsx)("span", { className: "mc-id", children: e.repair }),
              (0, a.jsx)(iK, { children: e.status }),
            ],
          }),
          (0, a.jsxs)("button", {
            className: "mc-card-title",
            type: "button",
            onClick: t,
            children: [
              (0, a.jsxs)("span", {
                children: [
                  (0, a.jsx)("strong", { children: e.name }),
                  (0, a.jsxs)("small", { children: [e.customer, " · ", e.motorcycle] }),
                ],
              }),
              (0, a.jsx)(s3, { size: 16 }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "mc-card-meta",
            children: [
              (0, a.jsx)(iK, { children: e.priority }),
              (0, a.jsxs)("span", { children: [(0, a.jsx)(s7, { size: 12 }), " Due ", re(e.due)] }),
            ],
          }),
          s && (0, a.jsx)("div", { className: "so-actions", children: s }),
        ],
      });
    }
    function i4({ repair: e, onView: t }) {
      return (0, a.jsxs)(iQ, {
        children: [
          (0, a.jsxs)("div", {
            className: "so-card-top",
            children: [
              (0, a.jsx)("span", { className: "mc-id", children: e.id }),
              (0, a.jsx)(iK, { children: e.status }),
            ],
          }),
          (0, a.jsxs)("button", {
            className: "mc-card-title",
            type: "button",
            onClick: t,
            children: [
              (0, a.jsxs)("span", {
                children: [
                  (0, a.jsx)("strong", { children: e.motorcycle }),
                  (0, a.jsx)("small", { children: e.customer }),
                ],
              }),
              (0, a.jsx)(s3, { size: 16 }),
            ],
          }),
          (0, a.jsx)("p", { className: "so-muted", children: e.problem }),
          (0, a.jsx)(iZ, {
            items: [
              ["Assigned date", "Current assignment"],
              ["Status", e.status],
            ],
          }),
          (0, a.jsx)(i5, { value: e.progress }),
          (0, a.jsx)(iX, { className: "so-wide", onClick: t, children: "View Repair" }),
        ],
      });
    }
    function i6({ text: e }) {
      return (0, a.jsxs)("div", {
        className: "so-empty",
        children: [
          (0, a.jsx)(iF, { size: 29 }),
          (0, a.jsx)("strong", { children: e }),
          (0, a.jsx)("p", { children: "Your assigned work will appear here." }),
        ],
      });
    }
    function i7({ icon: e, label: t, detail: s, onClick: i }) {
      return (0, a.jsxs)(iX, {
        className: "so-link-row",
        onClick: i,
        children: [
          (0, a.jsx)("span", { className: "so-row-icon", children: (0, a.jsx)(e, { size: 17 }) }),
          (0, a.jsxs)("span", {
            children: [(0, a.jsx)("strong", { children: t }), (0, a.jsx)("small", { children: s })],
          }),
          (0, a.jsx)(s3, { size: 15 }),
        ],
      });
    }
    function i8({ title: e, fields: t, submit: s, onSubmit: r, onCancel: n }) {
      let [o, l] = (0, i.useState)(!1),
        [c, d] = (0, i.useState)("");
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)("h2", { children: e }),
          (0, a.jsxs)("form", {
            className: "so-form",
            onSubmit: async (e) => {
              if ((e.preventDefault(), !o)) {
                (l(!0), d(""));
                try {
                  await r(Object.fromEntries(new FormData(e.currentTarget).entries()));
                } catch (e) {
                  d(e instanceof Error ? e.message : "Unable to save this change.");
                } finally {
                  l(!1);
                }
              }
            },
            children: [
              t.map((e) =>
                (0, a.jsxs)(
                  "label",
                  {
                    className: "so-field",
                    children: [
                      (0, a.jsx)("span", { children: e.label }),
                      "textarea" === e.type
                        ? (0, a.jsx)("textarea", {
                            name: e.name,
                            defaultValue: e.value,
                            rows: 4,
                            required: !0,
                          })
                        : (0, a.jsx)("input", {
                            name: e.name,
                            type: e.type || "text",
                            defaultValue: e.value,
                            minLength: e.minLength,
                            required: !0,
                          }),
                    ],
                  },
                  e.name,
                ),
              ),
              c && (0, a.jsx)("p", { role: "alert", className: "so-error", children: c }),
              (0, a.jsxs)("div", {
                className: "so-actions",
                children: [
                  (0, a.jsx)(iX, { onClick: n, disabled: o, children: "Cancel" }),
                  (0, a.jsx)(iX, { variant: "primary", type: "submit", disabled: o, children: s }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    function i9({ repair: e, onSave: t, onCancel: s }) {
      let [r, n] = (0, i.useState)(e.progress);
      return (0, a.jsxs)("form", {
        className: "so-form mc-update-form",
        onSubmit: (e) => {
          (e.preventDefault(), t(Object.fromEntries(new FormData(e.currentTarget).entries())));
        },
        children: [
          (0, a.jsxs)(iQ, {
            className: "mc-update-summary",
            children: [
              (0, a.jsx)("span", { className: "mc-id", children: e.id }),
              (0, a.jsx)("h2", { children: e.motorcycle }),
              (0, a.jsx)("p", { children: e.customer }),
            ],
          }),
          (0, a.jsxs)("label", {
            className: "so-field",
            children: [
              (0, a.jsx)("span", { children: "Repair status" }),
              (0, a.jsx)("select", {
                name: "status",
                defaultValue: e.status,
                children: [
                  "Diagnosing",
                  "In Progress",
                  "Waiting for Parts",
                  "Ready for Pickup",
                  "Completed",
                ].map((e) => (0, a.jsx)("option", { children: e }, e)),
              }),
            ],
          }),
          (0, a.jsxs)("label", {
            className: "so-field",
            children: [
              (0, a.jsxs)("span", { children: ["Repair progress: ", r, "% current"] }),
              (0, a.jsx)("input", {
                name: "progress",
                type: "range",
                min: "0",
                max: "100",
                value: r,
                onChange: (e) => n(Number(e.target.value)),
              }),
            ],
          }),
          (0, a.jsxs)("label", {
            className: "so-field",
            children: [
              (0, a.jsx)("span", { children: "Diagnosis" }),
              (0, a.jsx)("textarea", {
                name: "diagnosis",
                rows: 3,
                defaultValue: e.diagnosis,
                required: !0,
              }),
            ],
          }),
          (0, a.jsxs)("label", {
            className: "so-field",
            children: [
              (0, a.jsx)("span", { children: "Mechanic notes" }),
              (0, a.jsx)("textarea", {
                name: "notes",
                rows: 3,
                defaultValue: e.notes,
                required: !0,
              }),
            ],
          }),
          (0, a.jsxs)("label", {
            className: "so-field",
            children: [
              (0, a.jsx)("span", { children: "Services performed (comma separated)" }),
              (0, a.jsx)("input", {
                name: "services",
                defaultValue: e.services.join(", "),
                required: !0,
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "mc-form-pair",
            children: [
              (0, a.jsxs)("label", {
                className: "so-field",
                children: [
                  (0, a.jsx)("span", { children: "Part used" }),
                  (0, a.jsx)("input", { name: "part", placeholder: "Part name" }),
                ],
              }),
              (0, a.jsxs)("label", {
                className: "so-field",
                children: [
                  (0, a.jsx)("span", { children: "Quantity" }),
                  (0, a.jsx)("input", {
                    name: "quantity",
                    type: "number",
                    min: "1",
                    defaultValue: "1",
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("label", {
            className: "so-field",
            children: [
              (0, a.jsx)("span", { children: "Estimated completion" }),
              (0, a.jsx)("input", { name: "completion", defaultValue: e.completion, required: !0 }),
            ],
          }),
          (0, a.jsxs)("label", {
            className: "so-upload-label",
            children: [
              (0, a.jsx)(sZ, { size: 17 }),
              (0, a.jsx)("span", { children: "Add repair photos" }),
              (0, a.jsx)("input", { type: "file", accept: "image/*", multiple: !0 }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "so-actions",
            children: [
              (0, a.jsx)(iX, { onClick: s, children: "Cancel" }),
              (0, a.jsxs)(iX, {
                variant: "primary",
                type: "submit",
                children: [(0, a.jsx)(tM, { size: 14 }), " Send Update to Customer"],
              }),
            ],
          }),
        ],
      });
    }
    function re(e) {
      let t = new Date(e);
      return Number.isNaN(t.getTime())
        ? e
        : new Intl.DateTimeFormat("en-PH", {
            month: "short",
            day: "numeric",
            hour: e.includes("T") ? "numeric" : void 0,
            minute: e.includes("T") ? "2-digit" : void 0,
          }).format(t);
    }
    var rt = e.i(307563),
      rs = e.i(410230);
    let ra = [
        "motofix-owner-v1",
        "motofix-profile",
        "motofix-motorcycles",
        "motofix-bookings",
        "motofix-saved-shops",
        "motofix-reservations",
        "motofix-notifications-read",
        "motofix-complaints-v1",
        "motofix-conversations-v1",
        "motofix-business-legitimacy-v1",
        "motofix-owner-account",
        "motofix-rider-expenses-v1",
      ],
      ri = "motofix-state-scope",
      rr = new Map(),
      rn = new Set(),
      ro = !1;
    function rl(e) {
      let t = localStorage.getItem(e);
      if (null === t) return Promise.resolve();
      try {
        return tb(e, JSON.parse(t)).then(() => void 0);
      } catch {
        return Promise.resolve();
      }
    }
    async function rc(e, t) {
      var s;
      ro = !1;
      let a =
          "rider" === e.role ? "rider:" + e.id : "shop:" + ("shop" === e.role ? e.id : e.shopId),
        i = localStorage.getItem(ri) === a;
      if (!i) for (let e of ra) localStorage.removeItem(e);
      let r =
          "rider" === (s = e.role)
            ? [
                "motofix-profile",
                "motofix-motorcycles",
                "motofix-bookings",
                "motofix-saved-shops",
                "motofix-reservations",
                "motofix-notifications-read",
                "motofix-complaints-v1",
                "motofix-conversations-v1",
                "motofix-rider-expenses-v1",
              ]
            : "shop" === s
              ? [
                  "motofix-owner-v1",
                  "motofix-owner-account",
                  "motofix-complaints-v1",
                  "motofix-conversations-v1",
                  "motofix-business-legitimacy-v1",
                ]
              : ["motofix-owner-v1", "motofix-owner-account", "motofix-conversations-v1"],
        n = await Promise.all(r.map(async (e) => [e, await tj(e)]));
      for (let [e, t] of n)
        null !== t.value
          ? localStorage.setItem(e, JSON.stringify(t.value))
          : i || localStorage.removeItem(e);
      let o = "motofix-owner-v1";
      for (let [s, i] of ("mechanic" === e.role &&
        void 0 !== t &&
        n.find(([e]) => e === o)?.[1].value === null &&
        null === localStorage.getItem(o) &&
        localStorage.setItem(o, JSON.stringify(t)),
      localStorage.setItem(ri, a),
      (ro = !0),
      n))
        null === i.value && null !== localStorage.getItem(s) && rl(s).catch(() => {});
    }
    async function rd() {
      let e = [...rn];
      for (let t of e) {
        let e = rr.get(t);
        (e && window.clearTimeout(e), rr.delete(t), rn.delete(t));
      }
      await Promise.allSettled(e.map(rl));
    }
    function rm({ name: e, size: t = 20 }) {
      let s = {
        arrow: (0, a.jsx)("path", { d: "m15 18-6-6 6-6" }),
        bike: (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("circle", { cx: "6", cy: "17", r: "3" }),
            (0, a.jsx)("circle", { cx: "18", cy: "17", r: "3" }),
            (0, a.jsx)("path", { d: "M8.5 17h5l-3-7h4l3.5 7M5 14l3-5h3M9 7h3" }),
          ],
        }),
        briefcase: (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("rect", { x: "3", y: "7", width: "18", height: "12", rx: "2" }),
            (0, a.jsx)("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" }),
          ],
        }),
        check: (0, a.jsx)("path", { d: "m5 12 4 4L19 6" }),
        eye: (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("path", { d: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" }),
            (0, a.jsx)("circle", { cx: "12", cy: "12", r: "2.5" }),
          ],
        }),
        "eye-off": (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("path", {
            d: "m3 3 18 18M10.6 6.2A10.7 10.7 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-2.1 2.8M6.4 6.4C3.6 8.2 2 12 2 12s3.5 6 10 6c1.4 0 2.6-.3 3.6-.7",
          }),
        }),
        mail: (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("rect", { x: "3", y: "5", width: "18", height: "14", rx: "3" }),
            (0, a.jsx)("path", { d: "m4 7 8 6 8-6" }),
          ],
        }),
        phone: (0, a.jsx)("path", {
          d: "M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-4-1-1 2c-3.8-1.6-6.4-4.2-8-8l2-1-1-4Z",
        }),
        shield: (0, a.jsx)("path", {
          d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5",
        }),
        store: (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("path", { d: "M4 10v10h16V10M3 4h18l-2 6H5L3 4Z" }),
            (0, a.jsx)("path", { d: "M9 20v-6h6v6" }),
          ],
        }),
        tool: (0, a.jsx)("path", {
          d: "M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.4 7.2 6.1 5a4 4 0 0 0 5 5L19 18a2 2 0 1 0 3-3l-7.3-7.3Z",
        }),
        user: (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("circle", { cx: "12", cy: "8", r: "4" }),
            (0, a.jsx)("path", { d: "M4 21a8 8 0 0 1 16 0" }),
          ],
        }),
      };
      return (0, a.jsx)("svg", {
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: s[e],
      });
    }
    function rh({ compact: e = !1, inset: t = !1 }) {
      return (0, a.jsx)("div", {
        className: e ? "logo-wrap compact" : "logo-wrap",
        children: (0, a.jsx)(eV.default, {
          width: 1139,
          height: 1210,
          className: t ? "object-contain! p-2" : void 0,
          src: "/motofix-logo.jpg",
          alt: "MotoFix motorcycle helmet and wrench logo",
        }),
      });
    }
    function rp({ title: e, subtitle: t, onBack: s }) {
      return (0, a.jsxs)("header", {
        className: "screen-header",
        children: [
          s &&
            (0, a.jsx)("button", {
              className: "icon-button",
              onClick: s,
              "aria-label": "Go back",
              children: (0, a.jsx)(rm, { name: "arrow" }),
            }),
          (0, a.jsxs)("div", {
            children: [(0, a.jsx)("h1", { children: e }), t && (0, a.jsx)("p", { children: t })],
          }),
        ],
      });
    }
    function ru({
      label: e,
      icon: t,
      type: s = "text",
      placeholder: r,
      value: n,
      onChange: o,
      name: l,
      required: c,
      minLength: d,
      autoComplete: m,
      readOnly: h,
    }) {
      let [p, u] = (0, i.useState)(!1),
        x = "password" === s;
      return (0, a.jsxs)("label", {
        className: "field",
        children: [
          (0, a.jsx)("span", { children: e }),
          (0, a.jsxs)("div", {
            className: "field-control",
            children: [
              (0, a.jsx)(rm, { name: t }),
              (0, a.jsx)("input", {
                type: x && p ? "text" : s,
                name: l,
                placeholder: r,
                value: n,
                required: c,
                minLength: d,
                autoComplete: m,
                readOnly: h,
                onChange: (e) => o?.(e.target.value),
              }),
              x &&
                (0, a.jsx)("button", {
                  type: "button",
                  className: "field-action",
                  onClick: () => u(!p),
                  "aria-label": p ? "Hide password" : "Show password",
                  children: (0, a.jsx)(rm, { name: p ? "eye-off" : "eye", size: 19 }),
                }),
            ],
          }),
        ],
      });
    }
    function rx({ goTo: e, onLogin: t, onGoogle: s, error: r }) {
      let [n, o] = (0, i.useState)(""),
        [l, c] = (0, i.useState)(""),
        [d, m] = (0, i.useState)(""),
        [h, p] = (0, i.useState)(!1);
      return (0, a.jsxs)("main", {
        className: "screen login-screen",
        children: [
          (0, a.jsxs)("div", {
            className: "login-brand",
            children: [
              (0, a.jsx)(rh, { inset: !0 }),
              (0, a.jsx)("h1", { children: "Welcome back" }),
              (0, a.jsx)("p", { children: "Sign in to keep your journey moving." }),
            ],
          }),
          (0, a.jsxs)("form", {
            onSubmit: (e) => {
              (e.preventDefault(),
                p(!0),
                m(""),
                t(n, l)
                  .catch((e) => m(e instanceof Error ? e.message : "Unable to sign in."))
                  .finally(() => p(!1)));
            },
            className: "auth-form",
            children: [
              (d || r) &&
                (0, a.jsx)("p", { className: "auth-error", role: "alert", children: d || r }),
              (0, a.jsx)(ru, {
                label: "Email or Mobile Number",
                icon: "user",
                placeholder: "Enter email or mobile number",
                name: "identity",
                autoComplete: "username",
                required: !0,
                value: n,
                onChange: o,
              }),
              (0, a.jsx)(ru, {
                label: "Password",
                icon: "shield",
                type: "password",
                placeholder: "Enter your password",
                name: "password",
                autoComplete: "current-password",
                required: !0,
                value: l,
                onChange: c,
              }),
              (0, a.jsx)("button", {
                type: "button",
                className: "text-button forgot",
                onClick: () => e("forgot-password"),
                children: "Forgot Password?",
              }),
              (0, a.jsx)("button", {
                className: "primary-button",
                type: "submit",
                disabled: h,
                children: h ? "Signing in…" : "Login",
              }),
              (0, a.jsxs)("button", {
                type: "button",
                className: "google-button",
                onClick: s,
                children: [(0, a.jsx)(rb, {}), " Continue with Google"],
              }),
              (0, a.jsx)("div", {
                className: "divider",
                children: (0, a.jsx)("span", { children: "New to MotoFix?" }),
              }),
              (0, a.jsx)("button", {
                type: "button",
                className: "secondary-button",
                onClick: () => e("create-account"),
                children: "Create Account",
              }),
            ],
          }),
          (0, a.jsx)("p", {
            className: "role-note",
            children:
              "Local demo · Choose a rider, shop, or mechanic account. Your demo data is saved on this computer.",
          }),
          (0, a.jsx)("div", {
            className: "demo-logins",
            "aria-label": "Demo accounts",
            children: [
              ["Rider", "rider@motofix.local"],
              ["Shop", "owner@motofix.local"],
              ["Mechanic", "mechanic@motofix.local"],
            ].map(([e, t]) =>
              (0, a.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    (o(t), c("MotoFix123!"), m(""));
                  },
                  children: [e, " demo"],
                },
                e,
              ),
            ),
          }),
        ],
      });
    }
    let rf = ["Account type", "Personal details", "Profile details", "Security"];
    function rg({ step: e, onStep: t }) {
      return (0, a.jsxs)("nav", {
        className: "account-progress",
        "aria-label": "Account creation progress",
        children: [
          (0, a.jsxs)("div", {
            className: "account-progress-heading",
            children: [
              (0, a.jsxs)("span", { children: ["STEP ", e + 1, " OF ", rf.length] }),
              (0, a.jsxs)("span", {
                children: [Math.round(((e + 1) / rf.length) * 100), "% complete"],
              }),
            ],
          }),
          (0, a.jsx)("div", {
            className: "account-progress-bars",
            "aria-hidden": "true",
            children: rf.map((t, s) =>
              (0, a.jsx)("span", { className: s <= e ? "complete" : "" }, t),
            ),
          }),
          (0, a.jsx)("ol", {
            children: rf.map((s, i) =>
              (0, a.jsx)(
                "li",
                {
                  children: (0, a.jsx)("button", {
                    type: "button",
                    "aria-current": i === e ? "step" : void 0,
                    disabled: !t || i >= e,
                    onClick: () => t?.(i),
                    children: s,
                  }),
                },
                s,
              ),
            ),
          }),
        ],
      });
    }
    function rj({ goTo: e }) {
      let [t, s] = (0, i.useState)(null);
      return (0, a.jsxs)("main", {
        className: "screen",
        children: [
          (0, a.jsx)(rp, {
            title: "Create your account",
            subtitle: "How will you use MotoFix?",
            onBack: () => e("login"),
          }),
          (0, a.jsx)(rg, { step: 0 }),
          (0, a.jsxs)("div", {
            className: "role-list",
            children: [
              (0, a.jsxs)("button", {
                className: `role-card ${"rider" === t ? "selected" : ""}`,
                onClick: () => s("rider"),
                children: [
                  (0, a.jsx)("span", {
                    className: "role-icon blue",
                    children: (0, a.jsx)(rm, { name: "bike", size: 28 }),
                  }),
                  (0, a.jsxs)("span", {
                    className: "role-copy",
                    children: [
                      (0, a.jsx)("strong", { children: "Motorcycle Rider" }),
                      (0, a.jsx)("small", {
                        children: "Find trusted shops and manage your motorcycle service.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("span", {
                    className: "radio",
                    children: "rider" === t && (0, a.jsx)("i", {}),
                  }),
                ],
              }),
              (0, a.jsxs)("button", {
                className: `role-card ${"shop" === t ? "selected" : ""}`,
                onClick: () => s("shop"),
                children: [
                  (0, a.jsx)("span", {
                    className: "role-icon orange",
                    children: (0, a.jsx)(rm, { name: "store", size: 27 }),
                  }),
                  (0, a.jsxs)("span", {
                    className: "role-copy",
                    children: [
                      (0, a.jsx)("strong", { children: "Motor Shop Owner" }),
                      (0, a.jsx)("small", {
                        children: "Manage bookings, services, and your mechanic team.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("span", {
                    className: "radio",
                    children: "shop" === t && (0, a.jsx)("i", {}),
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "info-card",
            children: [
              (0, a.jsx)(rm, { name: "shield" }),
              (0, a.jsxs)("p", {
                children: [
                  (0, a.jsx)("strong", { children: "Are you a mechanic?" }),
                  " Your shop owner will create your staff account. You can then log in from the main screen.",
                ],
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "bottom-actions",
            children: [
              (0, a.jsx)("button", {
                className: "primary-button",
                disabled: !t,
                onClick: () => e("shop" === t ? "shop-signup" : "rider-signup"),
                children: "Continue",
              }),
              (0, a.jsxs)("p", {
                children: [
                  "Already have an account?",
                  " ",
                  (0, a.jsx)("button", {
                    className: "inline-link",
                    onClick: () => e("login"),
                    children: "Log in",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    function rb() {
      return (0, a.jsxs)("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [
          (0, a.jsx)("path", {
            fill: "#4285F4",
            d: "M22.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h6a5.2 5.2 0 0 1-2.2 3.3v2.8h3.6c2.1-2 3.2-4.8 3.2-8.2Z",
          }),
          (0, a.jsx)("path", {
            fill: "#34A853",
            d: "M12 23c3 0 5.5-1 7.4-2.6l-3.6-2.8c-1 .7-2.3 1-3.8 1a6.5 6.5 0 0 1-6.1-4.4H2.2V17A11.2 11.2 0 0 0 12 23Z",
          }),
          (0, a.jsx)("path", {
            fill: "#FBBC05",
            d: "M5.9 14.2A6.7 6.7 0 0 1 5.5 12c0-.8.1-1.5.4-2.2V7H2.2A11 11 0 0 0 1 12c0 1.8.4 3.5 1.2 5l3.7-2.8Z",
          }),
          (0, a.jsx)("path", {
            fill: "#EA4335",
            d: "M12 5.4c1.6 0 3.1.5 4.3 1.7l3.2-3.2A10.8 10.8 0 0 0 2.2 7l3.7 2.8A6.5 6.5 0 0 1 12 5.4Z",
          }),
        ],
      });
    }
    function ry({ role: e, goTo: t, onRegister: s, pendingGoogle: r, onGoogleComplete: n }) {
      let o = "shop" === e,
        [l, c] = (0, i.useState)(0),
        [d, m] = (0, i.useState)(""),
        [h, p] = (0, i.useState)(!1),
        [u, x] = (0, i.useState)({
          name: r?.name || "",
          email: r?.email || "",
          phone: "",
          shopName: "",
          shopAddress: "",
          legalName: "",
          tradeName: "",
          entity: "Sole proprietorship (DTI)",
          registration: "",
          registeredOn: "",
          tin: "",
          bir: "",
          permit: "",
          permitIssued: "",
          permitExpiry: "",
          barangay: "",
          fireCertificate: "",
          fireExpiry: "",
          sanitaryPermit: "",
          motorcycle: "",
          plate: "",
          year: "",
          password: "",
          confirmPassword: "",
          agreed: !1,
        });
      (0, i.useEffect)(() => {
        r && x((e) => ({ ...e, name: r.name, email: r.email }));
      }, [r?.name, r?.email]);
      let f = (e, t) => x((s) => ({ ...s, [e]: t })),
        g = {
          role: e,
          name: u.name.trim(),
          email: u.email.trim(),
          phone: u.phone.trim(),
          ...(o
            ? {
                shopName: u.shopName.trim(),
                shopAddress: u.shopAddress.trim(),
                businessLegitimacy: {
                  legalName: u.legalName.trim() || u.shopName.trim(),
                  tradeName: u.tradeName.trim() || u.shopName.trim(),
                  entity: u.entity.trim(),
                  registration: u.registration.trim(),
                  registeredOn: u.registeredOn.trim(),
                  tin: u.tin.trim(),
                  bir: u.bir.trim(),
                  permit: u.permit.trim(),
                  permitIssued: u.permitIssued.trim(),
                  permitExpiry: u.permitExpiry.trim(),
                  barangay: u.barangay.trim(),
                  fireCertificate: u.fireCertificate.trim(),
                  fireExpiry: u.fireExpiry.trim(),
                  sanitaryPermit: u.sanitaryPermit.trim(),
                },
              }
            : { motorcycle: u.motorcycle.trim(), plate: u.plate.trim(), year: u.year.trim() }),
        };
      return (0, a.jsxs)("main", {
        className: "screen signup-screen",
        children: [
          (0, a.jsx)(rp, {
            title:
              0 === l
                ? "Your personal details"
                : 1 === l
                  ? o
                    ? "Shop & business details"
                    : "Motorcycle details"
                  : "Secure your account",
            subtitle: o
              ? "Tell us about you and your business."
              : "Your smoother ride starts here.",
            onBack: () => (l > 0 ? c((e) => e - 1) : t("create-account")),
          }),
          (0, a.jsx)(rg, {
            step: l + 1,
            onStep: (e) => {
              0 === e ? t("create-account") : c(e - 1);
            },
          }),
          (0, a.jsxs)("form", {
            className: "auth-form signup-form",
            onSubmit: (e) => {
              (e.preventDefault(), m(""), l < 2)
                ? c((e) => e + 1)
                : r
                  ? u.agreed
                    ? (p(!0),
                      n(r.token, g)
                        .catch((e) =>
                          m(e instanceof Error ? e.message : "Unable to complete your account."),
                        )
                        .finally(() => p(!1)))
                    : m("Agree to the Terms of Service and Privacy Policy to continue.")
                  : u.password !== u.confirmPassword
                    ? m("Your passwords do not match.")
                    : (p(!0),
                      s({ ...g, password: u.password })
                        .catch((e) =>
                          m(e instanceof Error ? e.message : "Unable to create your account."),
                        )
                        .finally(() => p(!1)));
            },
            children: [
              0 === l &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(ru, {
                      label: o ? "Owner's Full Name" : "Full Name",
                      icon: "user",
                      placeholder: "Enter your full name",
                      name: "name",
                      autoComplete: "name",
                      required: !0,
                      readOnly: !!r,
                      value: u.name,
                      onChange: (e) => f("name", e),
                    }),
                    (0, a.jsx)(ru, {
                      label: "Email Address",
                      icon: "mail",
                      type: "email",
                      placeholder: "name@email.com",
                      name: "email",
                      autoComplete: "email",
                      required: !0,
                      readOnly: !!r,
                      value: u.email,
                      onChange: (e) => f("email", e),
                    }),
                    (0, a.jsx)(ru, {
                      label: "Mobile Number",
                      icon: "phone",
                      type: "tel",
                      placeholder: "+63 9XX XXX XXXX",
                      name: "phone",
                      autoComplete: "tel",
                      required: !0,
                      value: u.phone,
                      onChange: (e) => f("phone", e),
                    }),
                  ],
                }),
              1 === l &&
                (o
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(ru, {
                          label: "Motor Shop Name",
                          icon: "store",
                          placeholder: "Enter your shop name",
                          name: "shopName",
                          required: !0,
                          value: u.shopName,
                          onChange: (e) => f("shopName", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Shop Address",
                          icon: "store",
                          placeholder: "Street, barangay, city",
                          name: "shopAddress",
                          required: !0,
                          value: u.shopAddress,
                          onChange: (e) => f("shopAddress", e),
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xs font-semibold text-[#b9d5ed]",
                          children: "Business legitimacy record · text fields only",
                        }),
                        (0, a.jsx)(ru, {
                          label: "Legal business name",
                          icon: "briefcase",
                          placeholder: "Registered legal name",
                          required: !0,
                          value: u.legalName,
                          onChange: (e) => f("legalName", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Trade name (if different)",
                          icon: "briefcase",
                          placeholder: "Shop's registered trade name",
                          value: u.tradeName,
                          onChange: (e) => f("tradeName", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Business type / entity",
                          icon: "briefcase",
                          placeholder: "e.g. Sole proprietorship (DTI)",
                          required: !0,
                          value: u.entity,
                          onChange: (e) => f("entity", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "DTI / SEC / CDA registration number",
                          icon: "briefcase",
                          placeholder: "Registration number",
                          required: !0,
                          value: u.registration,
                          onChange: (e) => f("registration", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Business registration date",
                          icon: "briefcase",
                          placeholder: "YYYY-MM-DD or date on record",
                          value: u.registeredOn,
                          onChange: (e) => f("registeredOn", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "TIN",
                          icon: "briefcase",
                          placeholder: "Tax identification number",
                          value: u.tin,
                          onChange: (e) => f("tin", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "BIR Certificate of Registration",
                          icon: "briefcase",
                          placeholder: "BIR Form 2303 reference",
                          value: u.bir,
                          onChange: (e) => f("bir", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Business / mayor's permit number",
                          icon: "briefcase",
                          placeholder: "Permit number",
                          value: u.permit,
                          onChange: (e) => f("permit", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Business permit issue date",
                          icon: "briefcase",
                          placeholder: "YYYY-MM-DD",
                          value: u.permitIssued,
                          onChange: (e) => f("permitIssued", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Business permit expiry date",
                          icon: "briefcase",
                          placeholder: "YYYY-MM-DD",
                          value: u.permitExpiry,
                          onChange: (e) => f("permitExpiry", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Barangay business clearance",
                          icon: "briefcase",
                          placeholder: "Clearance reference",
                          value: u.barangay,
                          onChange: (e) => f("barangay", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Fire safety inspection certificate",
                          icon: "briefcase",
                          placeholder: "Certificate reference",
                          value: u.fireCertificate,
                          onChange: (e) => f("fireCertificate", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Fire certificate expiry date",
                          icon: "briefcase",
                          placeholder: "YYYY-MM-DD",
                          value: u.fireExpiry,
                          onChange: (e) => f("fireExpiry", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Sanitary / health permit (if applicable)",
                          icon: "briefcase",
                          placeholder: "Permit reference or Not applicable",
                          value: u.sanitaryPermit,
                          onChange: (e) => f("sanitaryPermit", e),
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(ru, {
                          label: "Motorcycle Make & Model",
                          icon: "bike",
                          placeholder: "e.g. Yamaha NMAX 155",
                          name: "motorcycle",
                          required: !0,
                          value: u.motorcycle,
                          onChange: (e) => f("motorcycle", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Plate Number",
                          icon: "bike",
                          placeholder: "Enter plate number",
                          name: "plate",
                          required: !0,
                          value: u.plate,
                          onChange: (e) => f("plate", e),
                        }),
                        (0, a.jsx)(ru, {
                          label: "Model Year",
                          icon: "bike",
                          type: "number",
                          placeholder: "e.g. 2024",
                          name: "year",
                          required: !0,
                          value: u.year,
                          onChange: (e) => f("year", e),
                        }),
                      ],
                    })),
              2 === l &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    r
                      ? (0, a.jsx)("p", {
                          className: "info-card",
                          children:
                            "Your Google account is verified. It will secure your MotoFix sign-in.",
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(ru, {
                              label: "Create Password",
                              icon: "shield",
                              type: "password",
                              placeholder: "At least 8 characters",
                              name: "password",
                              autoComplete: "new-password",
                              minLength: 8,
                              required: !0,
                              value: u.password,
                              onChange: (e) => f("password", e),
                            }),
                            (0, a.jsx)(ru, {
                              label: "Confirm Password",
                              icon: "shield",
                              type: "password",
                              placeholder: "Enter your password again",
                              name: "confirmPassword",
                              autoComplete: "new-password",
                              minLength: 8,
                              required: !0,
                              value: u.confirmPassword,
                              onChange: (e) => f("confirmPassword", e),
                            }),
                          ],
                        }),
                    (0, a.jsxs)("label", {
                      className: "terms",
                      children: [
                        (0, a.jsx)("input", {
                          type: "checkbox",
                          required: !0,
                          checked: u.agreed,
                          onChange: (e) => f("agreed", e.target.checked),
                        }),
                        (0, a.jsxs)("span", {
                          children: [
                            "I agree to the ",
                            (0, a.jsx)("button", { type: "button", children: "Terms of Service" }),
                            " and",
                            " ",
                            (0, a.jsx)("button", { type: "button", children: "Privacy Policy" }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              d && (0, a.jsx)("p", { className: "auth-error", role: "alert", children: d }),
              (0, a.jsx)("button", {
                className: "primary-button",
                type: "submit",
                disabled: h,
                children: h
                  ? "Creating account…"
                  : 2 === l
                    ? r
                      ? "Complete account"
                      : "Create Account"
                    : "Continue",
              }),
              2 === l &&
                !r &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: "divider",
                      children: (0, a.jsx)("span", { children: "or create your account with" }),
                    }),
                    (0, a.jsxs)("button", {
                      type: "submit",
                      className: "google-button",
                      disabled: h,
                      children: [(0, a.jsx)(rb, {}), " Sign up with Google"],
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
    }
    function rv({ goTo: e, onSubmit: t }) {
      let [s, r] = (0, i.useState)(!1),
        [n, o] = (0, i.useState)(""),
        [l, c] = (0, i.useState)(""),
        [d, m] = (0, i.useState)(""),
        [h, p] = (0, i.useState)(!1);
      return (0, a.jsxs)("main", {
        className: "screen",
        children: [
          (0, a.jsx)(rp, { title: "Reset password", onBack: () => e("login") }),
          (0, a.jsx)("div", {
            className: "reset-illustration",
            children: (0, a.jsx)(rm, { name: s ? "check" : "mail", size: 34 }),
          }),
          s
            ? (0, a.jsxs)("div", {
                className: "center-copy",
                children: [
                  (0, a.jsx)("h2", { children: "Demo password reset" }),
                  (0, a.jsx)("p", { children: typeof l === "string" ? l : l.message }),
                  l?.resetUrl &&
                    (0, a.jsx)("a", {
                      className: "primary-button",
                      href: l.resetUrl,
                      children: "Open Local Reset Link",
                    }),
                  (0, a.jsx)("button", {
                    className: "primary-button",
                    onClick: () => e("login"),
                    children: "Back to Login",
                  }),
                ],
              })
            : (0, a.jsxs)("form", {
                className: "auth-form",
                onSubmit: (e) => {
                  (e.preventDefault(),
                    p(!0),
                    m(""),
                    t(n)
                      .then((e) => {
                        (c(e), r(!0));
                      })
                      .catch((e) =>
                        m(e instanceof Error ? e.message : "Unable to send the request."),
                      )
                      .finally(() => p(!1)));
                },
                children: [
                  (0, a.jsxs)("div", {
                    className: "center-copy left",
                    children: [
                      (0, a.jsx)("h2", { children: "Forgot your password?" }),
                      (0, a.jsx)("p", {
                        children:
                          "This offline demo cannot send email. It creates a one-time local reset link instead.",
                      }),
                    ],
                  }),
                  (0, a.jsx)(ru, {
                    label: "Email Address",
                    icon: "user",
                    type: "email",
                    placeholder: "Enter your account email",
                    name: "identity",
                    autoComplete: "email",
                    required: !0,
                    value: n,
                    onChange: o,
                  }),
                  d && (0, a.jsx)("p", { className: "auth-error", role: "alert", children: d }),
                  (0, a.jsx)("button", {
                    className: "primary-button",
                    type: "submit",
                    disabled: h,
                    children: h ? "Sending…" : "Send Reset Link",
                  }),
                ],
              }),
        ],
      });
    }
    function rk({ token: e, goTo: t, onSubmit: s }) {
      let [r, n] = (0, i.useState)(""),
        [o, l] = (0, i.useState)(""),
        [c, d] = (0, i.useState)(""),
        [m, h] = (0, i.useState)(!1),
        [p, u] = (0, i.useState)(!1);
      return (0, a.jsxs)("main", {
        className: "screen",
        children: [
          (0, a.jsx)(rp, { title: "Choose a new password", onBack: () => t("forgot-password") }),
          p
            ? (0, a.jsxs)("div", {
                className: "center-copy",
                children: [
                  (0, a.jsx)("div", {
                    className: "reset-illustration",
                    children: (0, a.jsx)(rm, { name: "check", size: 34 }),
                  }),
                  (0, a.jsx)("h2", { children: "Password updated" }),
                  (0, a.jsx)("p", { children: "You can now sign in with your new password." }),
                  (0, a.jsx)("button", {
                    className: "primary-button",
                    onClick: () => t("login"),
                    children: "Back to Login",
                  }),
                ],
              })
            : (0, a.jsxs)("form", {
                className: "auth-form",
                onSubmit: (t) => {
                  (t.preventDefault(), d(""), r !== o)
                    ? d("The passwords do not match.")
                    : (h(!0),
                      s(e, r)
                        .then(() => u(!0))
                        .catch((e) =>
                          d(e instanceof Error ? e.message : "Unable to reset the password."),
                        )
                        .finally(() => h(!1)));
                },
                children: [
                  (0, a.jsx)("div", {
                    className: "center-copy left",
                    children: (0, a.jsx)("p", {
                      children: "Choose a password with at least 8 characters.",
                    }),
                  }),
                  (0, a.jsx)(ru, {
                    label: "New Password",
                    icon: "shield",
                    type: "password",
                    placeholder: "Enter a new password",
                    name: "newPassword",
                    autoComplete: "new-password",
                    minLength: 8,
                    required: !0,
                    value: r,
                    onChange: n,
                  }),
                  (0, a.jsx)(ru, {
                    label: "Confirm New Password",
                    icon: "shield",
                    type: "password",
                    placeholder: "Enter the new password again",
                    name: "confirmPassword",
                    autoComplete: "new-password",
                    minLength: 8,
                    required: !0,
                    value: o,
                    onChange: l,
                  }),
                  c && (0, a.jsx)("p", { className: "auth-error", role: "alert", children: c }),
                  (0, a.jsx)("button", {
                    className: "primary-button",
                    type: "submit",
                    disabled: m || !e,
                    children: m ? "Updating…" : "Reset Password",
                  }),
                  !e &&
                    (0, a.jsx)("p", {
                      className: "auth-error",
                      role: "alert",
                      children: "This reset link is missing its token. Request a new link.",
                    }),
                ],
              }),
        ],
      });
    }
    function rw(e) {
      return "shop" === e
        ? "shop-dashboard"
        : "mechanic" === e
          ? "mechanic-dashboard"
          : "rider-home";
    }
    function rN(e) {
      return "reset-password" === e
        ? "/preview"
        : "rider-home" === e
          ? "/rider/home"
          : "shop-dashboard" === e
            ? "/shop/dashboard"
            : "mechanic-dashboard" === e
              ? "/mechanic/dashboard"
              : "/preview";
    }
    function rC(e, t) {
      let s = {
        name: e.name.trim() || t.name.trim(),
        email: e.email.trim() || t.email.trim(),
        phone: t.phone.trim() || e.phone.trim(),
      };
      try {
        if ("shop" === t.role) {
          localStorage.setItem("motofix-owner-account", JSON.stringify(s));
          let a = iw();
          try {
            let e = JSON.parse(localStorage.getItem("motofix-owner-v1") || "null");
            e?.profile &&
              e?.mechanics &&
              e?.notices &&
              (a = { ...a, ...e, profile: { ...a.profile, ...e.profile } });
          } catch {}
          ((a.profile = {
            ...a.profile,
            name: t.shopName?.trim() || e.shopName || a.profile.name,
            address: t.shopAddress?.trim() || a.profile.address,
            phone: s.phone || a.profile.phone,
          }),
            localStorage.setItem("motofix-owner-v1", JSON.stringify(a)));
          let i = t.businessLegitimacy;
          localStorage.setItem(
            "motofix-business-legitimacy-v1",
            JSON.stringify({
              legalName: i?.legalName || t.shopName?.trim() || e.shopName,
              tradeName: i?.tradeName || t.shopName?.trim() || e.shopName,
              entity: i?.entity || "Sole proprietorship (DTI)",
              owner: s.name,
              email: s.email,
              phone: s.phone,
              address: t.shopAddress?.trim() || "",
              registration: i?.registration || "",
              registeredOn: i?.registeredOn || "",
              tin: i?.tin || "",
              bir: i?.bir || "",
              permit: i?.permit || "",
              permitIssued: i?.permitIssued || "",
              permitExpiry: i?.permitExpiry || "",
              barangay: i?.barangay || "",
              fireCertificate: i?.fireCertificate || "",
              fireExpiry: i?.fireExpiry || "",
              sanitaryApplicable: !!i?.sanitaryPermit,
              sanitaryPermit: i?.sanitaryPermit || "",
              documents: {},
              status: "Draft",
              submitted: "",
            }),
          );
          return;
        }
        let a = {};
        try {
          a = JSON.parse(localStorage.getItem("motofix-profile") || "{}");
        } catch {}
        let i = t.motorcycle?.trim() || String(a.bike || "Yamaha NMAX 155"),
          r = t.plate?.trim() || String(a.plate || "MC 2841"),
          n = t.year?.trim() || String(a.year || "2024");
        (localStorage.setItem(
          "motofix-profile",
          JSON.stringify({ ...a, ...s, bike: i, plate: r, year: n }),
        ),
          localStorage.setItem(
            "motofix-motorcycles",
            JSON.stringify([{ id: "primary-motorcycle", bike: i, plate: r, year: n }]),
          ));
      } catch {}
    }
    let rS = function () {
      let e = er(),
        t = es(),
        [s, r] = (0, i.useState)("login"),
        [n, o] = (0, i.useState)(
          () => new URLSearchParams(window.location.search).get("reset_token") || "",
        ),
        [l, c] = (0, i.useState)(null),
        [d, m] = (0, i.useState)(!1),
        [h, p] = (0, i.useState)(() => /^\/(rider|shop|mechanic)(\/|$)/.test(t.pathname)),
        [u, x] = (0, i.useState)(!1),
        f = (0, i.useCallback)(() => p(!0), []),
        [g, j] = (0, i.useState)(""),
        [b, y] = (0, i.useState)(null),
        [v, k] = (0, i.useState)(""),
        [w, N] = (0, i.useState)(!1),
        C = n ? "reset-password" : l ? rw(l.role) : s,
        S = (t) => {
          (o(""), r(t), e(rN(t)));
        },
        M = async (e, t) => {
          x(!0);
          try {
            if (
              (await Promise.all([
                rc(e, "mechanic" === e.role ? iw() : void 0),
                new Promise((e) => window.setTimeout(e, 2e3)),
              ]),
              t && rC(e, t),
              c(e),
              m(!0),
              j(""),
              "mechanic" === e.role)
            ) {
              let t = e.email || e.username;
              (k(t), sessionStorage.setItem("motofix-mechanic-identity", t));
            } else (k(""), sessionStorage.removeItem("motofix-mechanic-identity"));
            S(rw(e.role));
          } finally {
            x(!1);
          }
        },
        P = async (e, t) => {
          let s = await ts(e, t);
          await M(s.user);
        },
        A = async (e) => {
          let t = await ta(e);
          await M(t.user, e);
        },
        R = async (e, t) => {
          let s = await tr(e, t);
          (sessionStorage.removeItem("motofix-pending-google-login-token"),
            y(null),
            await M(s.user, t));
        },
        $ = async (e) => await th(e),
        E = async (e, t) => {
          await tp(e, t);
        },
        D = async () => {
          (await rd(),
            await to().catch(() => void 0),
            sessionStorage.removeItem("motofix-mechanic-identity"),
            k(""),
            c(null),
            j(""),
            N(!1),
            S("login"));
        };
      return ((0, i.useEffect)(() => {
        let s = !0;
        return (
          (async () => {
            let a = new URLSearchParams(window.location.search),
              i = a.get("google_signup_pending"),
              o = "";
            try {
              o = sessionStorage.getItem("motofix-pending-google-login-token") || "";
            } catch {}
            let l = i || o;
            if (l) {
              try {
                sessionStorage.setItem("motofix-pending-google-login-token", l);
              } catch {}
              i && e("/preview", { replace: !0 });
              try {
                let e = await ti(l);
                if (!s) return;
                (y({ token: l, ...e }), r("create-account"), j(""), m(!0));
                return;
              } catch (e) {
                if (!s) return;
                (sessionStorage.removeItem("motofix-pending-google-login-token"),
                  y(null),
                  j(
                    e instanceof Error
                      ? e.message
                      : "Google account setup expired. Start again with Continue with Google.",
                  ),
                  r("login"));
              }
            }
            let d = a.get("auth_error"),
              h = d
                ? {
                    bad_google_role:
                      "Choose Motorcycle Rider or Motor Shop before signing up with Google.",
                    google_not_configured:
                      "Google sign-up needs GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env file.",
                    google_origin_invalid:
                      "Google sign-up needs a secure HTTPS website address. Open MotoFix through its HTTPS link, or keep localhost for laptop testing.",
                    google_origin_mismatch:
                      "Google sign-up has no callback configured for this website address. Use localhost on your laptop or the configured HTTPS link on your phone.",
                    google_callback_mismatch:
                      "Google sign-up callback is not configured for this website address. Check GOOGLE_CALLBACK_URL and GOOGLE_CALLBACK_URLS in .env, then restart MotoFix.",
                    google_state_expired: "The Google sign-in session expired. Please try again.",
                    google_cancelled: "Google sign-up was cancelled.",
                    google_role_conflict:
                      "That Google email is already registered with a different MotoFix account type.",
                    google_account_not_found:
                      "No MotoFix account is linked to this Google account yet. Create an account first, then try again.",
                    google_account_conflict:
                      "This Google account conflicts with an existing MotoFix account. Contact support to link the accounts.",
                    google_account_inactive:
                      "This MotoFix account is inactive. Contact the motor shop owner.",
                    google_credentials_rejected:
                      "Google rejected the OAuth credentials. Check that the Client ID and Client Secret are from the same Web client in Google Cloud, then restart MotoFix.",
                    google_token_exchange_failed:
                      "Google could not finish the sign-in code exchange. Retry once; if it happens again, check the OAuth Client Secret and the exact callback URL in Google Cloud.",
                    google_profile_failed:
                      "Google did not return a verified account profile. Retry with a Google account that has a verified email address.",
                    google_account_save_failed:
                      "MotoFix could not save this account. Check that MySQL is running in XAMPP, then try again.",
                    google_failed: "Google could not complete sign-up. Please try again.",
                  }[d] || "Google sign-up could not be completed."
                : "";
            "google_account_not_found" === d
              ? (r("create-account"),
                j(""),
                sessionStorage.removeItem("motofix-pending-google-signup"),
                e("/preview", { replace: !0 }))
              : h && (j(h), sessionStorage.removeItem("motofix-pending-google-signup"));
            try {
              let a = await tt();
              if (!s) return;
              if (!a.user && !n) {
                let demoRole = new URLSearchParams(window.location.search).get("role"),
                  demoIdentity = {
                    rider: "rider@motofix.local",
                    shop: "owner@motofix.local",
                    mechanic: "mechanic@motofix.local",
                  }[demoRole];
                if (demoIdentity) {
                  await P(demoIdentity, "MotoFix123!");
                  return;
                }
              }
              if (a.user && !n) {
                if ((await rc(a.user, "mechanic" === a.user.role ? iw() : void 0), !s)) return;
                let i = a.user,
                  r = new URLSearchParams(window.location.search);
                if ("1" === r.get("oauth_created"))
                  try {
                    let e = JSON.parse(
                      sessionStorage.getItem("motofix-pending-google-signup") || "null",
                    );
                    if (e && e.role === i.role && ("rider" === e.role || "shop" === e.role)) {
                      if ((rC(i, e), e.phone.trim()))
                        try {
                          i = (await td(e.phone.trim())).user;
                        } catch {}
                      if ("shop" === e.role)
                        try {
                          i = (
                            await tm({
                              shopName: e.shopName?.trim() || i.shopName,
                              shopAddress: e.shopAddress?.trim() || "",
                            })
                          ).user;
                          let t = JSON.parse(
                            localStorage.getItem("motofix-business-legitimacy-v1") || "null",
                          );
                          t && (await tb("motofix-business-legitimacy-v1", t));
                        } catch {}
                    }
                  } catch {}
                if (
                  (sessionStorage.removeItem("motofix-pending-google-signup"),
                  c(i),
                  "mechanic" === i.role)
                ) {
                  let e = i.email || i.username;
                  (k(e), sessionStorage.setItem("motofix-mechanic-identity", e));
                }
                let n =
                  "rider" === i.role ? "/rider/" : "shop" === i.role ? "/shop/" : "/mechanic/";
                t.pathname.startsWith(n) || e(rN(rw(i.role)), { replace: !0 });
              } else
                (t.pathname.startsWith("/rider/") ||
                  t.pathname.startsWith("/shop/") ||
                  t.pathname.startsWith("/mechanic/")) &&
                  e("/preview", { replace: !0 });
            } catch (e) {
              s && j(e instanceof Error ? e.message : "MotoFix could not reach its server.");
            } finally {
              s && m(!0);
            }
          })(),
          () => {
            s = !1;
          }
        );
      }, []),
      (0, i.useEffect)(() => {
        !d ||
          !l ||
          u ||
          n ||
          t.pathname.startsWith(`/${l.role}/`) ||
          e(rN(rw(l.role)), { replace: !0 });
      }, [d, l, u, n, t.pathname, e]),
      h)
        ? (d || l) && !u && (!l || n || t.pathname.startsWith(`/${l.role}/`))
          ? (0, a.jsxs)("div", {
              className: "app-stage motofix-system",
              "data-system-version": rs.default.version,
              "data-system-route": `${t.pathname}${t.search}`,
              children: [
                (0, a.jsx)("a", {
                  className: "system-back-link",
                  href: window.MOTOFIX_BASE ? window.MOTOFIX_BASE + "/" : "/",
                  children: "Back to MotoFix website",
                }),
                (0, a.jsx)("div", {
                  className: "phone-shell",
                  children: (0, a.jsxs)("div", {
                    className: "phone-screen",
                    children: [
                      "login" === C &&
                        (0, a.jsx)(rx, {
                          goTo: S,
                          onLogin: P,
                          onGoogle: () => {
                            (j(""), S("create-account"));
                          },
                          error: g,
                        }),
                      "create-account" === C && (0, a.jsx)(rj, { goTo: S }),
                      ("rider-signup" === C || "shop-signup" === C) &&
                        (0, a.jsx)(ry, {
                          role: "shop-signup" === C ? "shop" : "rider",
                          goTo: S,
                          onRegister: A,
                          pendingGoogle: b,
                          onGoogleComplete: R,
                        }),
                      "forgot-password" === C && (0, a.jsx)(rv, { goTo: S, onSubmit: $ }),
                      "reset-password" === C && (0, a.jsx)(rk, { token: n, goTo: S, onSubmit: E }),
                      "rider-home" === C && (0, a.jsx)(aO, { user: l, onLogout: () => N(!0) }),
                      "shop-dashboard" === C &&
                        (0, a.jsx)(iT, { user: l, onUserUpdated: c, onLogout: () => N(!0) }),
                      "mechanic-dashboard" === C &&
                        (0, a.jsx)(i1, { identity: v, user: l, onLogout: () => N(!0) }),
                      w &&
                        (0, a.jsx)("div", {
                          className: "logout-modal-backdrop",
                          role: "presentation",
                          onMouseDown: () => N(!1),
                          children: (0, a.jsxs)("div", {
                            className: "logout-modal",
                            role: "alertdialog",
                            "aria-modal": "true",
                            "aria-labelledby": "logout-title",
                            "aria-describedby": "logout-description",
                            onMouseDown: (e) => e.stopPropagation(),
                            children: [
                              (0, a.jsx)("span", {
                                className: "logout-modal-icon",
                                children: (0, a.jsx)(rm, { name: "shield", size: 25 }),
                              }),
                              (0, a.jsx)("h2", {
                                id: "logout-title",
                                children: "Log out of MotoFix?",
                              }),
                              (0, a.jsx)("p", {
                                id: "logout-description",
                                children:
                                  "Your account data is saved on the MotoFix server. You can sign in again at any time.",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("button", {
                                    className: "logout-cancel",
                                    type: "button",
                                    onClick: () => N(!1),
                                    children: "Stay Logged In",
                                  }),
                                  (0, a.jsx)("button", {
                                    className: "logout-confirm",
                                    type: "button",
                                    onClick: () => void D(),
                                    children: "Log Out",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            })
          : (0, a.jsx)(rt.f, { preparing: !0 })
        : (0, a.jsx)(rt.f, { onComplete: f });
    };
    (!(function () {
      if (t) return;
      let e = (t = Storage.prototype.setItem);
      Storage.prototype.setItem = function (t, s) {
        if ((e.call(this, t, s), this !== window.localStorage || !ro || !ra.includes(t))) return;
        let a = rr.get(t);
        (a && window.clearTimeout(a), rn.add(t));
        let i = window.setTimeout(() => {
          (rr.delete(t), rn.delete(t), rl(t).catch(() => {}));
        }, 250);
        rr.set(t, i);
      };
    })(),
      e.s(
        [
          "default",
          0,
          function () {
            return (0, a.jsx)(eB, {
              basename: window.MOTOFIX_BASE || "/",
              children: (0, a.jsx)(rS, {}),
            });
          },
        ],
        681792,
      ));
  },
  711676,
  function (e) {
    e.n(e.i(681792));
  },
  410230,
  (e, t, s) => {
    t.exports = {
      version: "5.2",
      sourceFile: "MotoFix 5.2.make",
      sourceCommit: "8a2a2f55ef59cf36de856c5a578a1cbdb3029ad6",
      sourceExportedAt: "2026-11-18T05:09:11.652Z",
      runtime: "Local MySQL-backed interactive demo with simulated external payment and sign-in services.",
      files: [
        {
          source: "AccountBrand.tsx",
          path: "AccountBrand.tsx",
          sourceSHA256: "146b71845edea2191542f389fafac6966449ab8705cce82557dd76bb472e4684",
        },
        {
          source: "App.tsx",
          path: "MotoFixSystem.tsx",
          sourceSHA256: "55317ddc32b02199d904413105e53b84ce563b479e3b91b092c32377974ed0ca",
        },
        {
          source: "BranchManagement.tsx",
          path: "BranchManagement.tsx",
          sourceSHA256: "f32255b342fa982372a3c439d81358cda6e58fe218b7f6a04cb75497cbb3f52a",
        },
        {
          source: "BusinessAnalytics.tsx",
          path: "BusinessAnalytics.tsx",
          sourceSHA256: "7ff62960ee546f7660a19e4c9c77eead929a610791628668c314ffce4dc834f9",
        },
        {
          source: "BusinessLegitimacy.tsx",
          path: "BusinessLegitimacy.tsx",
          sourceSHA256: "d641e1ebaf2d03a2bd4288bc1b7e5d20cf0ed02241e93c3db385c6f20a9b8da7",
        },
        {
          source: "Communication.tsx",
          path: "Communication.tsx",
          sourceSHA256: "1ec843012673e3d26566dad66c432ce6960234463333f57f8bdcb9576187f97e",
        },
        {
          source: "ComplaintCenter.tsx",
          path: "ComplaintCenter.tsx",
          sourceSHA256: "ac0d6dc440fb714c1682a902db0cf01483fee299e8409b7a3c03a02aa3f7b5a0",
        },
        {
          source: "DashboardDateTime.tsx",
          path: "DashboardDateTime.tsx",
          sourceSHA256: "ac05567bfede7e927df832c4bf83e9dd7f738d95daeea07c9158295409c465ee",
        },
        {
          source: "DemoMap.tsx",
          path: "DemoMap.tsx",
          sourceSHA256: "f544aeb1862a68a42c49c0bfed11a802ab48d0e3fa04d7a102cb4cbe16de871e",
        },
        {
          source: "ExpenseTracker.tsx",
          path: "ExpenseTracker.tsx",
          sourceSHA256: "cf5d9a80b0022b0bf138b5d25de6a9a5b84af22b27fc5435308ab9bb58c97260",
        },
        {
          source: "Mechanic.tsx",
          path: "Mechanic.tsx",
          sourceSHA256: "2420be4b3d2c8beb8cffd016398298e0e3da7b345e229f0d7d1c23782664a982",
        },
        {
          source: "NotificationFeed.tsx",
          path: "NotificationFeed.tsx",
          sourceSHA256: "1bb84a678b50e54301901e32d37f295a8e8ac1ea97c98f3f518039589c88db5e",
        },
        {
          source: "PartsMarketplace.tsx",
          path: "PartsMarketplace.tsx",
          sourceSHA256: "050efdf7bcc14be8fd30efd838ec5c5d01d134f1e7539f70913f4379db854bf5",
        },
        {
          source: "PartsSales.tsx",
          path: "PartsSales.tsx",
          sourceSHA256: "1a88441f64bf1ccfa5534f815c7ec58b44a55175ff2b051cc6ca477dc0eee69c",
        },
        {
          source: "PaymentSimulation.tsx",
          path: "PaymentSimulation.tsx",
          sourceSHA256: "d46ba011255f4f80179038706779691cb66a2a3b81479c750d53588c1e613ce0",
        },
        {
          source: "RevenueChart.tsx",
          path: "RevenueChart.tsx",
          sourceSHA256: "dd8a688fca7626c639b90504da77172fdff1e44f7383b30ed62d6e0062d0ae5a",
        },
        {
          source: "Rider.tsx",
          path: "Rider.tsx",
          sourceSHA256: "c19f75bf0e6f64fd9ac497c9907c2b23571254ac2baf20ec821e2538fd0e7b35",
        },
        {
          source: "ShopOwner.tsx",
          path: "ShopOwner.tsx",
          sourceSHA256: "6cbb68408d1a9339bb2e7b03f4282ac15e553ff9c013367913d374e6298ab286",
        },
        {
          source: "Subscription.tsx",
          path: "Subscription.tsx",
          sourceSHA256: "406f7991ec2cf0ae1bf4eed2ed28ae9a76923ba237b118ce5a3dd12298b8debd",
        },
        {
          source: "WorkflowConfirm.tsx",
          path: "WorkflowConfirm.tsx",
          sourceSHA256: "7e48a2ee8c89ee87b8577188fb4172bfe5f264442eba1d013a59dccb017cbe7a",
        },
        {
          source: "analytics.css",
          path: "analytics.css",
          sourceSHA256: "8527ec3eaccded39c5180b29b92468904f580523fb0c47de19e611dfed98915c",
        },
        {
          source: "api.ts",
          path: "api.ts",
          sourceSHA256: "dfd19fadbe657e0a1c79f10d1cd5be46a3536d5630dd59e09e77ac653e5a8803",
        },
        {
          source: "branches.css",
          path: "branches.css",
          sourceSHA256: "5db38da58e31fdef20645bc4970d8c995fc2a305f967ee806b1624094956569a",
        },
        {
          source: "commerce.css",
          path: "commerce.css",
          sourceSHA256: "77d38f9c3b2cdc8523b73e7499aa483f20f57f668d914e38040fd8f9301ba348",
        },
        {
          source: "demoRecords.ts",
          path: "demoRecords.ts",
          sourceSHA256: "7dfd4bdf56f2d6b3bd22e18eccb20fdaeecf6030a4098e267cc126b157d910e0",
        },
        {
          source: "demoRouting.ts",
          path: "demoRouting.ts",
          sourceSHA256: "4e68f2453e66a44ffc4f0c50f7acc81b6ffc06eeb553d76c208dc24887b67d70",
        },
        {
          source: "demoShops.ts",
          path: "demoShops.ts",
          sourceSHA256: "58caa6f8b87f9534b9517ff893d49da7a34bba172831f074eae670a0ec9d0761",
        },
        {
          source: "expenses.css",
          path: "expenses.css",
          sourceSHA256: "0d337eae5d6f2e6cec3879089d329ea8114514866dada65ab614aac0f27e7d42",
        },
        {
          source: "frontendDemo.ts",
          path: "frontendDemo.ts",
          sourceSHA256: "0095675ab4440fda77dc2e7e03cf04a07469e9dde562bed8a3849f2a70eacd51",
        },
        {
          source: "index.css",
          path: "index.css",
          sourceSHA256: "a6e7f3b349371332ba6f4fd461e9c5dc772d8515aae5008ff4cb21feeda62056",
        },
        {
          source: "integrationExports.ts",
          path: "integrationExports.ts",
          sourceSHA256: "a3fcc37447fcd40a59aa5f89b3f92f2a78f78eb77ae7cee6fef7ec1462765874",
        },
        {
          source: "partsCommerce.ts",
          path: "partsCommerce.ts",
          sourceSHA256: "401d37a3f9a5f4ffe0c5b5eb02526f545df76cdefeb15e656718f31726adf29e",
        },
        {
          source: "payment-simulation.css",
          path: "payment-simulation.css",
          sourceSHA256: "46e18327331e7b254cb5fb8abc769ccd4bc8a8c6ea2c17dcdc2ed2e804f09171",
        },
        {
          source: "profilePhoto.ts",
          path: "profilePhoto.ts",
          sourceSHA256: "dd892d3742e6090c75d3bc95af7608dc1aa742c71de2f909bb4cda9e683a7ac2",
        },
        {
          source: "stateSync.ts",
          path: "stateSync.ts",
          sourceSHA256: "ac062946986ba985f7a9096ae672d46855252134fffbedcd331e5433574fe806",
        },
        {
          source: "subscription.css",
          path: "subscription.css",
          sourceSHA256: "05c8cc838f923576658413f007ac74b576adaa030ffe2846c626797563ebf865",
        },
        {
          source: "website.css",
          path: "website.css",
          sourceSHA256: "0bc8a9c666ecf57abbfdbdcee145654e303843cbc0ceb080a74f95794af9e400",
        },
      ],
      assets: [
        {
          source: "motofix-logo.jpg",
          path: "/motofix-logo.jpg",
          sha256: "dd4ad25957613df1a566cd2486d36d73b7f6edda489f9b41ae258b7fa88ca081",
        },
        {
          source: "panabo-demo-map.png",
          path: "/panabo-demo-map.png",
          sha256: "c4a0ba8ea2bfe5ec647e106bb25ebdbf0d683eaf7346d669f9f6e544b34ef4d1",
        },
        {
          source: "welcome-mobile.png",
          path: "/promo/splash/welcome-mobile.png",
          sha256: "69727b2855ce88b4166d06609f2b9390c29ab6085635e065f2a2a40a02d33bd3",
        },
        {
          source: "welcome-website.png",
          path: "/promo/splash/welcome-desktop.png",
          sha256: "8458f9ebd0c7f0c66a5f6b4c4307a4d24026553662bc22ef792372bd4319ced5",
        },
        {
          source: "loading-mobile.png",
          path: "/promo/splash/loading-mobile.png",
          sha256: "709229c8119f2ada7ce50f53eaaae03932b898cefa94258dc7337be56fca610b",
        },
        {
          source: "loading-website.png",
          path: "/promo/splash/loading-desktop.png",
          sha256: "954c2d1a225883170cf5069568f680363e8cd5a316981a201a13d19adcbc03fd",
        },
      ],
      photoMirrors: [
        {
          source:
            "https://images.unsplash.com/photo-1762604462465-76720d039e9f?auto=format&fit=crop&w=1080&q=80",
          path: "/motofix-system/5.2/shop-workshop.jpg",
        },
        {
          source:
            "https://images.unsplash.com/photo-1762604462368-aa69fdbb482e?auto=format&fit=crop&w=700&q=80",
          path: "/motofix-system/5.2/rider-workshop.jpg",
        },
      ],
      adaptations: [
        "Next.js client-only browser-router shell and full-viewport layout.",
        "Existing return-to-website link and shared two-second welcome/loading integration retained.",
        "All supplied raster assets verified identical to their local public files.",
        "Native image tags adapted to the existing Next.js image loader; supplied workshop photography mirrored locally.",
        "Template global font wiring reused; element defaults kept in the base cascade layer.",
        "Standalone login, logout, and reset navigation is scoped to /preview; signed-in screens wait for their role route to commit.",
      ],
    };
  },
]);
