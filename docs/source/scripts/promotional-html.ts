import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

/**
 * Compose the promotional HTML partials without adding wrappers or changing IDs.
 * The same assembler is used for ?raw imports in Make and standalone HTML builds.
 */
export function assemblePromotionalHtml(entry: string, source?: string) {
  const directory = path.dirname(path.resolve(entry));
  const files = new Set<string>();

  function expand(filename: string, ancestors: string[], supplied?: string): string {
    const relative = path.relative(directory, filename);
    if (
      relative === ".." ||
      relative.startsWith(".." + path.sep) ||
      path.isAbsolute(relative) ||
      path.extname(filename) !== ".html"
    ) {
      throw new Error(`Promotional includes must be HTML files inside ${directory}: ${filename}`);
    }
    if (ancestors.includes(filename)) {
      throw new Error(
        `Circular promotional include: ${[...ancestors, filename].map((file) => path.basename(file)).join(" → ")}`,
      );
    }
    files.add(filename);
    const html = supplied ?? fs.readFileSync(filename, "utf8");
    return html.replace(/<!--\s*include:\s*"([^"]+)"\s*-->/g, (_directive, include: string) =>
      expand(path.resolve(path.dirname(filename), include), [...ancestors, filename]),
    );
  }

  return { html: expand(path.resolve(entry), [], source), files: [...files] };
}

export function promotionalHtml(): Plugin {
  let entry: string;
  const watched = new Set<string>();
  const normalized = (filename: string) => filename.replace(/\\/g, "/");
  const assemble = (source?: string) => {
    const result = assemblePromotionalHtml(entry, source);
    result.files.forEach((file) => watched.add(normalized(file)));
    return result;
  };

  return {
    name: "motofix-promotional-html",
    enforce: "pre",
    configResolved(config) {
      entry = path.resolve(config.root, "promotional/index.html");
    },
    load(id) {
      const [filename, query = ""] = id.split("?");
      if (normalized(filename) !== normalized(entry) || !new URLSearchParams(query).has("raw"))
        return;
      const { html, files } = assemble();
      files.forEach((file) => this.addWatchFile(file));
      return `export default ${JSON.stringify(html)};`;
    },
    transformIndexHtml: {
      order: "pre",
      handler(html, context) {
        if (normalized(context.filename) === normalized(entry)) return assemble(html).html;
      },
    },
    handleHotUpdate(context) {
      if (!watched.has(normalized(context.file))) return;
      // Raw HTML is consumed by React as well as by Vite's standalone page.
      // Reload both views after invalidating the composed document.
      context.server.moduleGraph.getModulesByFile(entry)?.forEach((module) => {
        context.server.moduleGraph.invalidateModule(module);
      });
      context.server.ws.send({ type: "full-reload" });
      return [];
    },
  };
}
