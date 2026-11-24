import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I dropped the users table on prod at 3 a.m. — staging looked identical — then auto-scaled the outage to all 14 regions before anyone woke up.";

// Runtime gate guard: the entry must be a single line of 1–200 characters.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry violates gate: ${[...ENTRY].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
