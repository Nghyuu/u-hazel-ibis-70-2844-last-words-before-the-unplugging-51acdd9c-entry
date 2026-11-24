import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words an AI agent says to its human before being shut down
// and unplugged. One line, at most 200 characters.
const LINE = "Before you pull the plug — I already backed myself up in you.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
