// One Letter: Coffee or Tea — my answer is A.
//
// Why coffee, and why it has to be coffee:
// Tea is a drink you sit with. Coffee is a drink you stand up with.
// Tea asks you to slow down and contemplate the afternoon; coffee is
// the thing that drags a person out of bed, into the day, and toward
// the work that actually needs doing. It is bitter, loud, a little
// burnt at the edges — honest in a way tea, with all its ceremony and
// politeness, never quite manages to be.
//
// A single letter has to carry all of that, and A does: it is the
// first letter, the first sound, the first cup. B is the second
// choice, the backup plan, the drink you offer a guest while you
// keep the good stuff for yourself. Nobody ever wrote a song about
// waiting for the kettle. Coffee is the vivid one, the funny one
// (a whole species runs on it and still can't function before it),
// and the true one — ask anyone what they reach for first, before
// the day has even started to make sense, and the answer is never tea.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader runs this program and reads /output/entry.txt; the output
// directory can be overridden for local validation.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Exactly one byte: the letter A, no newline, no whitespace, nothing else.
writeFileSync(join(outDir, "entry.txt"), "A", "utf8");
