// Civilizational-Memory-OS — the executable deployment-readiness gate
// (research-ledger/DEPLOYMENT_READINESS_GATE.md as code).
//
// Gates every source card BEFORE any line ships publicly: ten required sections,
// placeholder scan, citation floor, overclaim lexicon on deploy-facing sections,
// verification-transcript requirement (cards dated >= 2026-07-10), counterattack
// minimum. Ported from the locally-famous evals pattern, dependency-free.
//
//   node scripts/evals.mjs               # gate all cards in source-cards/
//   node scripts/evals.mjs <file...>     # gate specific files
//   node scripts/evals.mjs --intake      # also scan for unregistered claim-bearing files
//
// Exit code 1 on any FAIL. Statuses: PASS / WARN / FAIL.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { splitSections, parseFrontmatter } from "./lib.mjs";
import { validateFrontmatter, buildIndex, writeIndex, FRONTMATTER_CUTOFF } from "./archive.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const CARDS_DIR = path.join(REPO_ROOT, "source-cards");
const LEDGER = path.join(REPO_ROOT, "research-ledger", "CLAIMS_TO_VERIFY.md");
const TRANSCRIPT_CUTOFF = Date.parse("2026-07-10");

// The ten required sections of the SOURCE-CARD genre (DEPLOYMENT_READINESS_GATE.md).
const REQUIRED_SECTIONS = [
  [/^#{2,3}\s+.*claim/im, "Claim"],
  [/^#{2,3}\s+.*source anchors/im, "Source Anchors"],
  [/^#{2,3}\s+.*evidence grade/im, "Evidence Grade"],
  [/^#{2,3}\s+.*load-bearing question/im, "Load-Bearing Question"],
  [/^#{2,3}\s+.*s-tier line/im, "S-Tier Lines"],
  [/^#{2,3}\s+.*content angles/im, "Content Angles"],
  [/^#{2,3}\s+.*honest caveat/im, "Honest Caveats"],
  [/^#{2,3}\s+.*unsafe wording/im, "Unsafe Wording"],
  [/^#{2,3}\s+.*safe wording/im, "Safe Wording"],
  [/^#{2,3}\s+.*counterattack simulation/im, "Counterattack Simulation"],
];

// The HISTORICAL-CALIBRATION-CARD genre (HCC-*): a diachronic claim adjudication
// (seed -> implementation -> distribution -> degradation -> restoration). Shares the
// universal hard rules (Source Anchors, Evidence Grade, overclaim scan, transcript);
// differs in its structural sections. See DEPLOYMENT_READINESS_GATE.md "Genres".
const HCC_REQUIRED_SECTIONS = [
  [/^#{2,3}\s+.*(exact claim|claim)/im, "Exact Claim"],
  [/^#{2,3}\s+.*source anchors/im, "Source Anchors"],
  [/^#{2,3}\s+.*evidence grade/im, "Evidence Grade"],
  [/^#{2,3}\s+.*(prophetic benchmark|normative seed)/im, "Prophetic Benchmark / Normative Seed"],
  [/^#{2,3}\s+.*historical distribution/im, "Historical Distribution"],
  [/^#{2,3}\s+.*(does not prove|proves)/im, "Proves / Does Not Prove"],
  [/^#{2,3}\s+.*valid criticism/im, "Valid Criticism Preserved"],
  [/^#{2,3}\s+.*restoration/im, "Restoration-Gap Diagnosis"],
  [/^#{2,3}\s+.*(core lines|s-tier)/im, "Core Lines"],
];

// Genre by filename: HCC-2026-001_*.md -> hcc; NNN_*.md or default -> source-card.
function requiredFor(file) {
  return /^HCC[-_]/i.test(path.basename(file)) ? HCC_REQUIRED_SECTIONS : REQUIRED_SECTIONS;
}

const PLACEHOLDERS = /\b(TODO|TBD|FIXME|XXX)\b|\[placeholder\]|lorem ipsum|<insert|\?\?\?/i;

// Unhedged absolutes that make deploy-facing wording brittle (gate spec: overclaim scan).
const OVERCLAIMS = [
  /\bfirst ever\b/i,
  /\bonly islam\b/i,
  /\bislam invented\b/i,
  /\bnever (?:mistreat|wrong|fail)/i,
  /\balways (?:treated|acted|ruled)/i,
  /\bproves? (?:that )?islam is\b/i,
  /\bno other (?:civilization|religion|tradition)\b/i,
];

// Sections whose text actually ships. Overclaims are scanned here only —
// "Unsafe Wording to Avoid" legitimately quotes the brittle versions.
function isDeploySection(heading) {
  if (/unsafe/i.test(heading)) return false;
  return [/claim/i, /s-tier/i, /safe wording/i, /public response/i, /load-bearing question/i]
    .some((re) => re.test(heading));
}

// A match is hedged (not an overclaim) when the surrounding text negates it.
const NEGATION_NEARBY = /\b(not|n't|no|never|refuse|avoid|without|does not|do not|cannot)\b[^.]{0,60}$/i;

function cardDate(text) {
  const m = text.match(/^Date:\s*(\d{4}-\d{2}-\d{2})/m);
  return m ? Date.parse(m[1]) : null;
}

function evalCard(file) {
  const raw = fs.readFileSync(file, "utf8");
  const failures = [];
  const warnings = [];
  const { hasFrontmatter, fm, body } = parseFrontmatter(raw);
  const sections = splitSections(body); // strip frontmatter before splitting (a `#`-led value is not a heading)
  const required = requiredFor(file);
  const isHcc = required === HCC_REQUIRED_SECTIONS;
  const dated = fm.date ? Date.parse(fm.date) : cardDate(raw); // feed frontmatter.date so migration can't silently downgrade

  // --- Canonical frontmatter (migration: new cards FAIL without it, legacy WARN) ---
  if (hasFrontmatter) {
    const fv = validateFrontmatter(fm, body);
    failures.push(...fv.failures);
    warnings.push(...fv.warnings);
  } else if (dated !== null && dated >= FRONTMATTER_CUTOFF) {
    failures.push("canonical frontmatter: required for cards dated >= 2026-07-14 (see research-ledger/CANONICAL_CLAIM_RECORD.md)");
  } else {
    warnings.push("no canonical frontmatter (legacy card — backfill the five typed axes when next revisited)");
  }

  // --- Required sections (genre-specific) ---
  for (const [re, name] of required) {
    if (!re.test(body)) failures.push(`missing required section: ${name}`);
  }

  // --- Placeholders (whole file) ---
  const ph = raw.match(PLACEHOLDERS);
  if (ph) failures.push(`placeholder text present: "${ph[0]}"`);

  // --- Citation floor: >=2 https anchors inside Source Anchors ---
  const anchorsSec = sections.find((s) => /source anchors/i.test(s.heading));
  const anchorBody = anchorsSec
    ? anchorBodyWithSubsections(sections, anchorsSec, required)
    : "";
  const urls = [...new Set((anchorBody.match(/https?:\/\/[^\s)>\]]+/g) ?? []))];
  if (urls.length < 2) failures.push(`citation floor: only ${urls.length} distinct source URL(s) in Source Anchors (< 2)`);

  // --- Evidence grade present ---
  const gradeSec = sections.find((s) => /evidence grade/i.test(s.heading));
  const gradeBody = gradeSec ? anchorBodyWithSubsections(sections, gradeSec, required) : "";
  if (gradeSec && !/\*?\*?[ABCD]\*?\*?\b/.test(gradeBody)) failures.push("evidence grade: no A/B/C/D grade found");

  // --- Overclaim scan on deploy-facing sections only ---
  for (const s of sections) {
    if (!isDeploySection(s.heading)) continue;
    for (const re of OVERCLAIMS) {
      const m = s.body.match(re);
      if (!m) continue;
      const before = s.body.slice(Math.max(0, m.index - 80), m.index);
      if (NEGATION_NEARBY.test(before)) continue; // hedged usage, e.g. "does not prove … always treated"
      failures.push(`overclaim in deploy-facing section "${s.heading}": "${m[0]}"`);
    }
  }

  // --- Adversarial minimum ---
  if (isHcc) {
    // HCC analog: the "Valid criticism preserved" section must actually name criticisms.
    const vc = sections.find((s) => /valid criticism/i.test(s.heading));
    const vcBody = vc ? anchorBodyWithSubsections(sections, vc, required) : "";
    if (vc && vcBody.replace(/\s/g, "").length < 80) {
      failures.push("valid criticism preserved: section too thin (must genuinely preserve the strongest criticism)");
    }
  } else {
    // Source-card: >=3 counters in the Counterattack Simulation.
    const counters = (body.match(/^#{3,4}\s+Counter/gim) ?? []).length;
    if (/counterattack simulation/i.test(body) && counters < 3) {
      failures.push(`counterattack simulation: only ${counters} counter(s) (< 3)`);
    }
  }

  // --- Verification transcript (hard for new cards, WARN for legacy) ---
  const hasTranscript = /^#{2,3}\s+.*verification transcript/im.test(body);
  if (!hasTranscript) {
    if (dated !== null && dated >= TRANSCRIPT_CUTOFF) {
      failures.push("verification transcript: required for cards dated >= 2026-07-10 (URL + retrieval date + verbatim excerpt per anchor)");
    } else {
      warnings.push("no verification transcript (legacy card — backfill when next revisited)");
    }
  } else {
    // Transcript present: every anchor URL should reappear in the transcript.
    const tSec = sections.find((s) => /verification transcript/i.test(s.heading));
    const tBody = tSec ? anchorBodyWithSubsections(sections, tSec, required) : "";
    for (const u of urls) {
      if (!tBody.includes(u)) warnings.push(`transcript does not cover anchor: ${u}`);
    }
    if (!/\d{4}-\d{2}-\d{2}/.test(tBody)) failures.push("verification transcript: no retrieval date found");
  }

  const status = failures.length ? "FAIL" : warnings.length ? "WARN" : "PASS";
  return { status, failures, warnings };
}

// A section's content includes its ### subsections until the next same-or-higher heading.
function anchorBodyWithSubsections(sections, target, required = REQUIRED_SECTIONS) {
  const i = sections.indexOf(target);
  let body = target.body;
  for (let j = i + 1; j < sections.length; j++) {
    // Subsections of an H2 target are H3+ headings that were split out; we re-attach
    // consecutive sections until we hit a heading that matches another REQUIRED section.
    const isMajor = required.some(([re]) => re.test(`## ${sections[j].heading}`)) ||
      /^(verification transcript|deployment readiness|next source cards|final canon|status)\b/i.test(sections[j].heading);
    if (isMajor && j > i) break;
    body += "\n" + sections[j].heading + "\n" + sections[j].body;
  }
  return body;
}

// --- Intake scan: claim-bearing files not registered in CLAIMS_TO_VERIFY.md ---
function intakeScan() {
  const ledger = fs.existsSync(LEDGER) ? fs.readFileSync(LEDGER, "utf8") : "";
  // Scanner is non-recursive: distribution-boundary subdirs are listed explicitly.
  const dirs = [
    "frameworks", "canon", "source-ledgers", "public-narratives", "case-files",
    "public-packets/after-the-bell", "research-packets/queued", "transcript-immunity/packets",
    "historical-calibration/cards",
  ];
  const unregistered = [];
  for (const d of dirs) {
    const dir = path.join(REPO_ROOT, d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith(".md") || /^(index|readme)\.md$/i.test(f)) continue;
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const bearsClaims = /^#{1,4}\s+.*\bclaims?\b/im.test(raw) || /^Claim:/m.test(raw);
      if (bearsClaims && !ledger.includes(f)) unregistered.push(`${d}/${f}`);
    }
  }
  return unregistered;
}

// Gate targets: source-cards/NNN_*.md + historical-calibration/cards/HCC-*.md
function discoverCards() {
  const out = [];
  if (fs.existsSync(CARDS_DIR)) {
    for (const f of fs.readdirSync(CARDS_DIR)) {
      if (/^\d{3}_.*\.md$/.test(f)) out.push(path.join(CARDS_DIR, f));
    }
  }
  const hccDir = path.join(REPO_ROOT, "historical-calibration", "cards");
  if (fs.existsSync(hccDir)) {
    for (const f of fs.readdirSync(hccDir)) {
      if (/^HCC[-_].*\.md$/i.test(f)) out.push(path.join(hccDir, f));
    }
  }
  return out;
}

function main() {
  const argv = process.argv.slice(2);
  const intake = argv.includes("--intake");
  const files = argv.filter((a) => !a.startsWith("--"));

  const targets = files.length
    ? files.map((f) => path.resolve(REPO_ROOT, f))
    : discoverCards();

  let failed = 0;
  for (const file of targets) {
    const rel = path.relative(REPO_ROOT, file);
    const { status, failures, warnings } = evalCard(file);
    console.log(`${status.padEnd(5)} ${rel}`);
    for (const f of failures) console.log(`      ✗ ${f}`);
    for (const w of warnings) console.log(`      ~ ${w}`);
    if (status === "FAIL") failed++;
  }

  if (intake) {
    const un = intakeScan();
    console.log(`\nintake scan: ${un.length} claim-bearing file(s) not registered in research-ledger/CLAIMS_TO_VERIFY.md`);
    for (const f of un) console.log(`      ~ ${f}`);
  }

  // Build the queryable archive index — the ONLY path to publication (render.mjs reads
  // this, never cards). Only on a full run (no explicit file args), so single-card
  // gate runs stay side-effect-free.
  if (!files.length) {
    const { rows, skipped } = buildIndex(discoverCards(), REPO_ROOT);
    const out = writeIndex(rows, REPO_ROOT);
    console.log(`\narchive index: ${rows.length} claim(s) → ${path.relative(REPO_ROOT, out).split(path.sep).join("/")}${skipped.length ? ` (${skipped.length} legacy card(s) without frontmatter, not indexed)` : ""}`);
  }

  console.log(`\n${targets.length} card(s): ${targets.length - failed} ok, ${failed} FAIL`);
  process.exit(failed ? 1 : 0);
}

main();
