import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const source = new URL("../image-src/", import.meta.url);
const outDir = new URL("../public/images/", import.meta.url);
mkdirSync(outDir, { recursive: true });

for (const name of readdirSync(source)) {
  if (!name.endsWith(".b64")) continue;
  const jpg = name.slice(0, -4);
  const bytes = Buffer.from(readFileSync(new URL(name, source), "utf8"), "base64");
  writeFileSync(new URL(jpg, outDir), bytes);
}
