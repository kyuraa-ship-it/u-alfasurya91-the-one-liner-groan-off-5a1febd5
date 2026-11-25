// The One-Liner Groan-Off — u-alfasurya91-the-one-liner-groan-off-5a1febd5
// Writes one original one-line dad joke to /output/entry.txt.
// No dependencies, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My dad's naps are just software updates \u2014 he wakes up slower and insists he's improved.";

// Gate assert (RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 140 characters, not only white space, one line.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-140`);
}
if (!ENTRY.trim()) throw new Error("entry is only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
