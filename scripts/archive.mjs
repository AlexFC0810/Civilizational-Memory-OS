// Civilizational-Memory-OS — the Canonical Claim Record layer.
// A LIBRARY imported by scripts/evals.mjs (the ONE gate), never a second entrypoint.
// - validateFrontmatter: the five typed axes + closure-conditional provenance sections
// - deriveFields: reads grade / anchors / safe_wording FROM THE BODY (never re-typed)
// - buildIndex: emits archive/claims.json, the sole queryable substrate + the ONLY
//   path to publication (scripts/render.mjs reads this, never cards). The receipt IS
//   the index row. See research-ledger/CANONICAL_CLAIM_RECORD.md.
// Dependency-free. No side effects on import.

import fs from "node:fs";
import path from "node:path";
import { parseFrontmatter, splitSections } from "./lib.mjs";

// Cards authored on/after this date MUST carry canonical frontmatter (else FAIL);
// older cards WARN to backfill (the proven transcript-migration pattern).
export const FRONTMATTER_CUTOFF = Date.parse("2026-07-14");

const CLAIM_LAYERS = ["quran", "prophetic", "fiqh", "institution", "culture", "outcome", "synthesis"];
const EPISTEMIC = ["established", "probable", "contested", "unresolved", "unsupported", "category-error"];
const CLOSURE = ["open", "reconnaissance", "provenance-audited", "source-closed"];
const LIFECYCLE = ["untriaged", "triaged", "verified", "disputed", "stale", "superseded", "retracted"];
const REQUIRED_KEYS = [
  "id", "claim_layer", "epistemic_status", "closure",
  "source_tier_best", "independent_chains", "grade_scope", "lifecycle", "date",
];
// Derived fields must live in the body only — never duplicated in frontmatter.
const FORBIDDEN_IN_FRONTMATTER = ["grade", "anchors", "safe_wording", "unsafe_wording"];
const DEEP_PROVENANCE_CLOSURE = new Set(["provenance-audited", "source-closed"]);
const DEEP_PROVENANCE_SECTIONS = [
  [/original.language|translation provenance/i, "Original-Language & Translation Provenance"],
  [/dating basis/i, "Dating Basis"],
  [/independent corroboration|corroboration & absence/i, "Independent Corroboration & Absence"],
];

// Validate a card's canonical frontmatter against the schema. bodyText = frontmatter-stripped.
export function validateFrontmatter(fm, bodyText) {
  const failures = [];
  const warnings = [];

  for (const k of REQUIRED_KEYS) {
    if (fm[k] === undefined || fm[k] === null || fm[k] === "") failures.push(`frontmatter: missing required key '${k}'`);
  }
  for (const k of FORBIDDEN_IN_FRONTMATTER) {
    if (fm[k] !== undefined) failures.push(`frontmatter: '${k}' is derived from the body — never put it in frontmatter (drift risk)`);
  }
  if (fm.id !== undefined && !/^(CMOS|HCC)-[A-Za-z0-9-]+$/.test(String(fm.id))) failures.push(`frontmatter: id '${fm.id}' must be namespaced (CMOS-#### or HCC-####)`);
  if (fm.claim_layer !== undefined && !CLAIM_LAYERS.includes(fm.claim_layer)) failures.push(`frontmatter: claim_layer '${fm.claim_layer}' not in {${CLAIM_LAYERS.join("|")}}`);
  if (fm.epistemic_status !== undefined && !EPISTEMIC.includes(fm.epistemic_status)) failures.push(`frontmatter: epistemic_status '${fm.epistemic_status}' not in {${EPISTEMIC.join("|")}}`);
  if (fm.closure !== undefined && !CLOSURE.includes(fm.closure)) failures.push(`frontmatter: closure '${fm.closure}' not in {${CLOSURE.join("|")}}`);
  if (fm.lifecycle !== undefined && !LIFECYCLE.includes(fm.lifecycle)) failures.push(`frontmatter: lifecycle '${fm.lifecycle}' not in {${LIFECYCLE.join("|")}}`);
  if (fm.source_tier_best !== undefined && !(Number.isInteger(fm.source_tier_best) && fm.source_tier_best >= 0 && fm.source_tier_best <= 5)) failures.push(`frontmatter: source_tier_best must be an integer 0–5`);
  if (fm.independent_chains !== undefined && !(Number.isInteger(fm.independent_chains) && fm.independent_chains >= 0)) failures.push(`frontmatter: independent_chains must be a non-negative integer`);

  // Closure-conditional deep-provenance body sections.
  if (DEEP_PROVENANCE_CLOSURE.has(fm.closure)) {
    for (const [re, name] of DEEP_PROVENANCE_SECTIONS) {
      if (!re.test(bodyText)) failures.push(`closure='${fm.closure}' requires body section: ${name}`);
    }
  }
  return { failures, warnings };
}

// Derive index fields FROM THE BODY (single source of truth): grade, anchors, safe_wording.
export function deriveFields(bodyText) {
  const sections = splitSections(bodyText);
  const gradeSec = sections.find((s) => /evidence grade/i.test(s.heading));
  const gradeM = gradeSec && gradeSec.body.match(/\b([ABCD])\b/);
  const grade = gradeM ? gradeM[1] : null;

  const anchorsSec = sections.find((s) => /source anchors/i.test(s.heading));
  const scope = anchorsSec ? sections.slice(sections.indexOf(anchorsSec)).map((s) => s.body).join("\n") : bodyText;
  const anchors = [...new Set((scope.match(/https?:\/\/[^\s)>\]]+/g) ?? []))];

  // Safe Wording section — exclude the "Unsafe Wording" heading explicitly.
  const safeSec = sections.find((s) => /safe wording/i.test(s.heading) && !/unsafe/i.test(s.heading));
  const safe_wording = safeSec ? firstQuoteOrLine(safeSec.body) : null;

  return { grade, anchors, safe_wording };
}

function firstQuoteOrLine(body) {
  const q = body.match(/^>\s?(.+)$/m);
  if (q) return q[1].trim();
  const line = body.split("\n").map((l) => l.trim()).find((l) => l.length > 0);
  return line ?? null;
}

// Build the queryable index from a list of card file paths. Skips cards without
// frontmatter (legacy, not yet migrated). Returns { rows, skipped }.
export function buildIndex(cardFiles, repoRoot) {
  const rows = [];
  const skipped = [];
  for (const file of cardFiles) {
    const raw = fs.readFileSync(file, "utf8");
    const { hasFrontmatter, fm, body } = parseFrontmatter(raw);
    if (!hasFrontmatter) { skipped.push(path.relative(repoRoot, file)); continue; }
    const derived = deriveFields(body);
    rows.push({
      id: fm.id ?? null,
      file: path.relative(repoRoot, file).split(path.sep).join("/"),
      claim_layer: fm.claim_layer ?? null,
      grade: derived.grade,
      grade_scope: fm.grade_scope ?? null,
      closure: fm.closure ?? null,
      source_tier_best: fm.source_tier_best ?? null,
      independent_chains: fm.independent_chains ?? null,
      epistemic_status: fm.epistemic_status ?? null,
      lifecycle: fm.lifecycle ?? null,
      supersedes: fm.supersedes ?? [],
      superseded_by: fm.superseded_by ?? null,
      date: fm.date ?? null,
      anchors: derived.anchors,
      safe_wording: derived.safe_wording,
    });
  }
  rows.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  return { rows, skipped };
}

// Write archive/claims.json deterministically (sorted, no timestamps) so it diffs in git.
export function writeIndex(rows, repoRoot) {
  const dir = path.join(repoRoot, "archive");
  fs.mkdirSync(dir, { recursive: true });
  const out = { schema: "canonical-claim-record/v1", count: rows.length, claims: rows };
  fs.writeFileSync(path.join(dir, "claims.json"), JSON.stringify(out, null, 2) + "\n", "utf8");
  return path.join(dir, "claims.json");
}
