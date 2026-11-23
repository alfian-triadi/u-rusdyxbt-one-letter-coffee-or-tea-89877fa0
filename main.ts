// One Letter: Coffee or Tea — my pick is A.
//
// Coffee is the drink that hauls a person upright. It is the first
// thing that happens in the morning: bitter, scalding, no ceremony,
// and it works. Tea waits for you to sit down and be civilised;
// coffee meets you at the door already moving. That is the whole
// argument — tea is the polite second choice, the drink you serve
// guests while you keep the real stuff for yourself. Coffee is
// honest about what it is: dark, bitter, a little burnt, and it
// never pretends to be anything gentler. Nobody ever stayed up all
// night because of a cup of tea. A is the first letter, the first
// cup, the first sound a person makes before the day has started
// making sense. B is what you settle for when the pot is empty.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Where the entry goes: /output by default, overridable through
// MAKEFUN_OUTPUT_DIR so the run can be checked locally.
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });

// A single byte, nothing else — no newline, no trailing space.
const answer = "A";
writeFileSync(join(destination, "entry.txt"), answer, "utf8");
