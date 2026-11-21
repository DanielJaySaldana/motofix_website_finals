(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  926638,
  (e) => {
    "use strict";
    var t = e.i(615729);
    let a = (...e) =>
        e
          .filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t)
          .join(" ")
          .trim(),
      i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      },
      r = (0, t.createContext)({}),
      s = (0, t.forwardRef)(
        (
          {
            color: e,
            size: s,
            width: n,
            height: o,
            strokeWidth: l,
            absoluteStrokeWidth: d,
            nonScalingStroke: h,
            className: c = "",
            children: k,
            iconNode: p = [],
            icon: f = { node: p, aliases: [], size: 24 },
            ...u
          },
          y,
        ) => {
          let {
              size: m = 24,
              strokeWidth: v = 2,
              absoluteStrokeWidth: z = !1,
              nonScalingStroke: w = !1,
              color: g = "currentColor",
              className: M = "",
            } = (0, t.useContext)(r) ?? {},
            x =
              !!k ||
              ((e) => {
                for (let t in e)
                  if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
                return !1;
              })(u),
            [b, A, C = []] = (function (e, t = {}) {
              return (function (e, t = {}) {
                let r = t.attributeNames ?? {},
                  s = (e) => r[e] ?? e,
                  n = e.size ?? e.width ?? i.width,
                  o = e.size ?? e.height ?? i.height,
                  l =
                    e.aliases
                      ?.filter((e) => "string" == typeof e && "" !== e.trim())
                      .map((e) => `lucide-${e}`) ?? [],
                  d = [...(e.name ? [`lucide-${e.name}`] : []), ...l],
                  h = t.className?.split(" ").filter(Boolean) ?? [],
                  c = !1 === t.includeDefaultClasses ? a(...h) : a("lucide", ...d, ...h),
                  k = t.absoluteStrokeWidth
                    ? (Number(t.strokeWidth ?? i["stroke-width"]) *
                        Number(e.size ?? e.width ?? i.width)) /
                      Number(t.size ?? t.width ?? i.width)
                    : (t.strokeWidth ?? i["stroke-width"]);
                return [
                  "svg",
                  {
                    ...Object.entries(i).reduce((e, [t, a]) => ((e[s(t)] = a), e), {}),
                    ...("color" in t && t.color && { [s("stroke")]: t.color }),
                    ...("size" in t &&
                      null != t.size && { [s("width")]: t.size, [s("height")]: t.size }),
                    ...("width" in t && null != t.width && { [s("width")]: t.width }),
                    ...("height" in t && null != t.height && { [s("height")]: t.height }),
                    [s("stroke-width")]: k,
                    ...(c && { [s("class")]: c }),
                    [s("viewBox")]: `0 0 ${n} ${o}`,
                    ...(!1 === t.hasA11yProp ? { [s("aria-hidden")]: "true" } : {}),
                    ...("attributes" in t && t.attributes),
                  },
                  e.node.map((e) => {
                    let [a, i, r] = e,
                      n = t.nonScalingStroke
                        ? { [s("vector-effect")]: "non-scaling-stroke", ...i }
                        : i;
                    return r ? [a, n, r] : [a, n];
                  }),
                ];
              })(e, {
                ...t,
                attributeNames: {
                  ...t.attributeNames,
                  class: "className",
                  "stroke-width": "strokeWidth",
                  "stroke-linecap": "strokeLinecap",
                  "stroke-linejoin": "strokeLinejoin",
                  "vector-effect": "vectorEffect",
                },
              });
            })(f, {
              color: e ?? g,
              width: n ?? s ?? m,
              height: o ?? s ?? m,
              strokeWidth: l ?? v,
              absoluteStrokeWidth: d ?? z,
              nonScalingStroke: h ?? w,
              className: a(M, c),
              hasA11yProp: x,
              attributes: u,
            });
          return (0, t.createElement)(b, { ref: y, ...A }, [
            ...C.map(([e, a]) => (0, t.createElement)(e, a)),
            ...(Array.isArray(k) ? k : [k]),
          ]);
        },
      );
    e.s(
      [
        "f",
        0,
        function (e, a = [], i = []) {
          let r,
            n =
              "string" == typeof e
                ? (function (e, t, a = []) {
                    if (null == t)
                      throw Error("[lucide]: iconNode is required when icon name is used");
                    return {
                      name: e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                      size: 24,
                      node: t,
                      ...(a.length > 0 ? { aliases: a } : {}),
                    };
                  })(e, a, i)
                : e,
            o = (0, t.forwardRef)(({ className: e, ...a }, i) =>
              (0, t.createElement)(s, { ref: i, icon: n, className: e, ...a }),
            );
          return (
            n.name &&
              (o.displayName =
                (r = ((e) => {
                  let t = "",
                    a = !1;
                  for (let i of e) {
                    if ("-" === i || "_" === i || i <= " ") {
                      a = t.length > 0;
                      continue;
                    }
                    (0 === t.length ? (t += i.toLowerCase()) : (t += a ? i.toUpperCase() : i),
                      (a = !1));
                  }
                  return t;
                })(n.name))
                  .charAt(0)
                  .toUpperCase() + r.slice(1)),
            o
          );
        },
      ],
      926638,
    );
  },
  395732,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "arrow-left",
      size: 24,
      node: [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 395732);
  },
  386217,
  198734,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "arrow-right",
      size: 24,
      node: [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 386217);
    let r = {
      name: "bike",
      size: 24,
      node: [
        ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
        ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
        ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
        ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }],
      ],
    };
    r.node;
    let s = (0, t.f)(r);
    e.s(["f", 0, s], 198734);
  },
  758917,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "arrow-up-right",
      size: 24,
      node: [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 758917);
  },
  984481,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "building-complex",
      size: 24,
      node: [
        ["path", { d: "M10 12h4", key: "a56b0p" }],
        ["path", { d: "M10 8h4", key: "1sr2af" }],
        ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
        [
          "path",
          {
            d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
            key: "secmi2",
          },
        ],
        ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
      ],
      aliases: ["building-2"],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 984481);
  },
  379465,
  827924,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "circle-check",
      size: 24,
      node: [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }],
      ],
      aliases: ["check-circle-2"],
    };
    a.node;
    let i = (0, t.f)(a);
    (e.s(["f", 0, i], 827924), e.s(["f", 0, i], 379465));
  },
  46832,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "clipboard-list",
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
        ["path", { d: "M12 11h4", key: "1jrz19" }],
        ["path", { d: "M12 16h4", key: "n85exb" }],
        ["path", { d: "M8 11h.01", key: "1dfujw" }],
        ["path", { d: "M8 16h.01", key: "18s6g9" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 46832);
  },
  312059,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "file-text",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6",
          },
        ],
        ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
        ["path", { d: "M10 9H8", key: "b1mrlr" }],
        ["path", { d: "M16 13H8", key: "t4e002" }],
        ["path", { d: "M16 17H8", key: "z1uh3a" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 312059);
  },
  946540,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "key-round",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
            key: "1s6t7t",
          },
        ],
        ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 946540);
  },
  968974,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "map-pin",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
          },
        ],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 968974);
  },
  162324,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "message-square-text",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p",
          },
        ],
        ["path", { d: "M7 11h10", key: "1twpyw" }],
        ["path", { d: "M7 15h6", key: "d9of3u" }],
        ["path", { d: "M7 7h8", key: "af5zfr" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 162324);
  },
  908738,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "package",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw",
          },
        ],
        ["path", { d: "M12 22V12", key: "d0xqtd" }],
        ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
        ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 908738);
  },
  823932,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "phone",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v",
          },
        ],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 823932);
  },
  624193,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "plug",
      size: 24,
      node: [
        ["path", { d: "M12 22v-5", key: "1ega77" }],
        ["path", { d: "M15 8V2", key: "18g5xt" }],
        [
          "path",
          {
            d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",
            key: "1xoxul",
          },
        ],
        ["path", { d: "M9 8V2", key: "14iosj" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 624193);
  },
  858905,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "shield-check",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 858905);
  },
  846938,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "store",
      size: 24,
      node: [
        ["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }],
        [
          "path",
          {
            d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
            key: "o0xfot",
          },
        ],
        ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", key: "wn3emo" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 846938);
  },
  590003,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "users",
      size: 24,
      node: [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 590003);
  },
  211899,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "wallet",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 211899);
  },
  600472,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "wrench",
      size: 24,
      node: [
        [
          "path",
          {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
            key: "1ngwbx",
          },
        ],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["f", 0, i], 600472);
  },
  111028,
  (e) => {
    "use strict";
    var t = e.i(926638);
    let a = {
      name: "x",
      size: 24,
      node: [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ],
    };
    a.node;
    let i = (0, t.f)(a);
    e.s(["X", 0, i], 111028);
  },
]);
