import * as React from "react";
import * as JSX from "react/jsx-runtime";
import * as ReactDOM from "react-dom";

// The published site exposes compiled client modules, not its original TSX.
// This small compatibility layer reuses those modules without a Next.js server.
type Factory = (context: any, module?: any, exports?: any) => void;
const factories = new Map<number, Factory>();
const modules = new Map<number, any>();
const host = globalThis as any;
host.TURBOPACK = {
  push(chunk: any[]) {
    let ids: number[] = [];
    for (const item of chunk.slice(1)) {
      if (typeof item === "number") ids.push(item);
      if (typeof item === "function") {
        for (const id of ids) factories.set(id, item);
        ids = [];
      }
    }
  },
};

function Image({ src, width, height, priority, fill, ...props }: any) {
  return <img src={src} width={width} height={height} {...props} />;
}

function Splash({ preparing = false, onComplete }: any) {
  React.useEffect(() => {
    if (preparing || !onComplete) return;
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [preparing, onComplete]);
  const scene = preparing ? "loading" : "welcome";
  return (
    <div
      className={`system-splash ${preparing ? "preparing" : ""}`}
      role="status"
      aria-label={preparing ? "Preparing your MotoFix account" : "Welcome to MotoFix"}
    >
      <picture>
        <source media="(min-width: 900px)" srcSet={`/promo/splash/${scene}-desktop.png`} />
        <img
          src={`/promo/splash/${scene}-mobile.png`}
          alt={
            preparing
              ? "Hang in there, we are preparing everything for you!"
              : "MotoFix — Save Time, Less Stress, and Fix Smarter"
          }
        />
      </picture>
    </div>
  );
}

modules.set(615729, React);
modules.set(840512, JSX);
modules.set(739682, ReactDOM);
modules.set(262577, { default: Image });
modules.set(307563, { f: Splash });
export function publishedModule(id: number): any {
  if (modules.has(id)) return modules.get(id);
  const factory = factories.get(id);
  if (!factory) throw new Error(`Missing published client module: ${id}`);
  const initial = {};
  const module = { exports: initial as any };
  modules.set(id, module.exports);
  const context = {
    i: publishedModule,
    r: publishedModule,
    F: (path: string) => path,
    n(value: any) {
      module.exports = value;
      modules.set(id, value);
    },
    s(exports: any[], target = id) {
      const output = modules.get(target) || {};
      modules.set(target, output);
      for (let i = 0; i < exports.length;) {
        const key = exports[i++];
        const kind = exports[i++];
        const get =
          kind === 0
            ? (() => {
                const value = exports[i++];
                return () => value;
              })()
            : kind;
        Object.defineProperty(output, key, { enumerable: true, configurable: true, get });
      }
    },
  };
  factory(context, module, module.exports);
  if (module.exports !== initial) {
    modules.set(id, { ...module.exports, default: module.exports });
  }
  return modules.get(id);
}

export async function loadSystem() {
  await import("./icons.js");
  await import("../system/system.js");
  return publishedModule(681792).default;
}
