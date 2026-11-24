// Two Lines of Morning Light — entry program.
//
// Writes one two-line micro poem about light and morning to
// /output/entry.txt (UTF-8, 1-120 characters including the line break).
// The poem is fixed: the same text on every run, so the graded artifact
// is exactly the text below.

import { mkdirSync, writeFileSync } from "node:fs";

// The poem, chosen among three drafts written in-session:
//  - a window filling thread by thread (second line restated the first)
//  - morning pouring through a keyhole (the noon turn pulled away
//    from the arrival moment)
//  - this one: one image of light arriving (a seam unzipping the
//    curtain), and the second line opens it — the light is now on the
//    floor, spreading plank by plank — leaving the room, and the
//    morning, unsaid.
const LINE1 = "A seam of morning light unzips the curtain's edge;";
const LINE2 = "the floorboards drink it in, one plank at a time.";

const POEM = [LINE1, LINE2].join("\n");

const outPath = "/output/entry.txt";

// Gate check, mirroring the competition gate: the entry must be UTF-8
// text of 1-120 characters, not only white space. Fail loudly instead
// of writing an entry the scorer would refuse.
if (POEM.length < 1 || POEM.length > 120 || POEM.trim().length === 0) {
  throw new Error(`poem fails the gate: ${POEM.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(outPath, POEM, "utf8");
console.log(`wrote ${POEM.length} characters to ${outPath}`);
