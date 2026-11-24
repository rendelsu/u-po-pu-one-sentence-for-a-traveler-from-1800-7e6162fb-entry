import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const text = "Imagine every library and post office on earth joined by a road of light, so a letter written in London is read in Boston before its ink dries.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, text, "utf8");
chmodSync(outFile, 0o644);
