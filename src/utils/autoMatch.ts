import Fuse from "fuse.js";
import type { Field } from "../types";

interface SearchEntry {
  fieldKey: string;
  candidate: string;
}

const NORMALIZE = /[\s_\-./]+/g;

function normalize(s: string): string {
  return s.toLowerCase().replace(NORMALIZE, "").trim();
}

/**
 * Auto-match incoming spreadsheet headers to field keys using Fuse fuzzy search.
 * Returns a map: headerIndex -> matched field key (or undefined when no good match).
 *
 * `distance` is fuse.js threshold; lower = stricter. Default 0.25 is fairly strict.
 */
export function autoMatchColumns(
  headers: ReadonlyArray<string>,
  fields: ReadonlyArray<Field>,
  distance = 0.25,
): Array<string | undefined> {
  const entries: SearchEntry[] = [];
  for (const f of fields) {
    const candidates = new Set<string>([f.key, f.label, ...(f.alternateMatches ?? [])]);
    for (const c of candidates) {
      entries.push({ fieldKey: f.key, candidate: normalize(c) });
    }
  }

  const fuse = new Fuse(entries, {
    keys: ["candidate"],
    threshold: distance,
    ignoreLocation: true,
    isCaseSensitive: false,
  });

  // Greedy assignment: each header gets its best field match, but each field key only used once.
  const used = new Set<string>();
  const result: Array<string | undefined> = headers.map(() => undefined);

  // Score every (header, fieldKey) pair, then pick best pairs first.
  type Match = { headerIdx: number; fieldKey: string; score: number };
  const all: Match[] = [];

  headers.forEach((h, idx) => {
    if (!h || !h.trim()) return;
    const found = fuse.search(normalize(h));
    // Best match per fieldKey (fuse may return many entries for the same fieldKey via alternates).
    const seen = new Map<string, number>();
    for (const r of found) {
      const score = r.score ?? 1;
      const key = r.item.fieldKey;
      const prev = seen.get(key);
      if (prev === undefined || score < prev) seen.set(key, score);
    }
    for (const [fieldKey, score] of seen) {
      all.push({ headerIdx: idx, fieldKey, score });
    }
  });

  all.sort((a, b) => a.score - b.score);
  const headerAssigned = new Set<number>();
  for (const m of all) {
    if (headerAssigned.has(m.headerIdx)) continue;
    if (used.has(m.fieldKey)) continue;
    result[m.headerIdx] = m.fieldKey;
    headerAssigned.add(m.headerIdx);
    used.add(m.fieldKey);
  }
  return result;
}
