// Civilizational-Memory-OS — shared parsing primitives for the ONE gate.
// Used by scripts/evals.mjs (the gate) and scripts/archive.mjs (the index builder).
// Dependency-free. No side effects on import.

// Split markdown into { heading, body } sections on H2/H3 headings.
// (Lifted verbatim from evals.mjs so the gate and the archive parse identically.)
export function splitSections(text) {
  const sections = [];
  const lines = text.split(/\r?\n/);
  let current = { heading: "(preamble)", level: 1, body: [] };
  for (const line of lines) {
    const m = line.match(/^(#{2,3})\s+(.*)/);
    if (m) {
      sections.push(current);
      current = { heading: m[2].trim(), level: m[1].length, body: [] };
    } else {
      current.body.push(line);
    }
  }
  sections.push(current);
  // `level` (2 = H2, 3 = H3) lets callers scope a section together with its own
  // subsections without swallowing the rest of the document — see deriveFields.
  return sections.map((s) => ({ heading: s.heading, level: s.level, body: s.body.join("\n") }));
}

// Minimal YAML-subset frontmatter parser. Handles ONLY what the Canonical Claim
// Record schema uses: leading `---` block of flat `key: value`, where value is a
// quoted/bare string, integer, null, or an inline list `[]` / `[a, b]`. Anything
// nested is deliberately unsupported — rich content belongs in body sections
// (see CANONICAL_CLAIM_RECORD.md). Returns { hasFrontmatter, fm, body }.
export function parseFrontmatter(raw) {
  const norm = raw.replace(/\r\n/g, "\n");
  if (!norm.startsWith("---\n")) return { hasFrontmatter: false, fm: {}, body: raw };
  const end = norm.indexOf("\n---", 4);
  if (end === -1) return { hasFrontmatter: false, fm: {}, body: raw };
  const block = norm.slice(4, end);
  // body starts after the closing `---` line
  const afterClose = norm.indexOf("\n", end + 1);
  const body = afterClose === -1 ? "" : norm.slice(afterClose + 1);
  const fm = {};
  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    fm[m[1]] = coerce(m[2].trim());
  }
  return { hasFrontmatter: true, fm, body };
}

function coerce(v) {
  if (v === "" || v === "null" || v === "~") return null;
  if (/^-?\d+$/.test(v)) return parseInt(v, 10);
  if (/^\[.*\]$/.test(v)) {
    const inner = v.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((s) => unquote(s.trim()));
  }
  return unquote(v);
}

function unquote(v) {
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

// Strip a leading frontmatter block, returning body-only text. Used by the gate
// so splitSections never mistakes a `#`-leading frontmatter value for a heading.
export function stripFrontmatter(raw) {
  return parseFrontmatter(raw).body;
}

// The overclaim lexicon — unhedged absolutes that must never ship in deploy-facing
// text. ONE list, shared by the gate (evals.mjs, scanned per deploy section) and the
// publish guard (render.mjs, scanned over rendered output). See DEPLOYMENT_READINESS_GATE.md.
export const OVERCLAIMS = [
  /\bfirst ever\b/i,
  /\bonly islam\b/i,
  /\bislam invented\b/i,
  /\bnever (?:mistreat|wrong|fail)/i,
  /\balways (?:treated|acted|ruled)/i,
  /\bproves? (?:that )?islam is\b/i,
  /\bno other (?:civilization|religion|tradition)\b/i,
];

// A match is hedged (not an overclaim) when nearby text negates it — e.g.
// "Do not say 'Islam invented women's rights'". Shared by the gate and every
// publish guard so hedged caveat-discipline lines never false-positive.
export const NEGATION_NEARBY = /\b(not|n't|no|never|refuse|avoid|without|does not|do not|cannot)\b[^.]{0,60}$/i;

// A TRAILING repudiation hedges just as well as a leading one. The house's standard
// caveat idiom quotes the forbidden line first and rejects it after:
//
//   "Only the Qur'an has a decline-theory" and "no other tradition warns against
//    decadence" are all false and must never be deployed.
//
// NEGATION_NEARBY only looks backward, so honest prohibition lists tripped the guard and
// blocked a pack build (CMOS-0018, 2026-08-02). Requires an explicit repudiation verb —
// not merely a stray negation word — so the guard is widened only for genuine rejections.
export const REPUDIATION_TRAILING = new RegExp(
  "^[^.]{0,160}?(?:" +
    "\\b(?:is|are|was|were)\\s+(?:all\\s+)?(?:false|untrue|wrong|misleading|an overclaim|overclaims)\\b" +
    "|\\bmust never be (?:deployed|said|used|repeated|claimed)\\b" +
    "|\\b(?:do not|don't|never)\\s+(?:say|deploy|use|repeat|claim)\\b" +
  ")",
  "i",
);

// Scan text for unhedged overclaims; returns the first match string or null.
export function findOverclaim(text) {
  for (const re of OVERCLAIMS) {
    let m;
    const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    while ((m = g.exec(text)) !== null) {
      const before = text.slice(Math.max(0, m.index - 80), m.index);
      const after = text.slice(m.index + m[0].length, m.index + m[0].length + 200);
      if (!NEGATION_NEARBY.test(before) && !REPUDIATION_TRAILING.test(after)) return m[0];
    }
  }
  return null;
}
