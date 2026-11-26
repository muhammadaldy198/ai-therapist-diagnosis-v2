import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Diagnosis: teacher's-pet syndrome. You did your therapy homework in the waiting room, in pen, and asked for more. Homework: one task, done badly. Doing it well is cheating.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);

// Deterministic: one fixed line, no input, no network, no clock.
