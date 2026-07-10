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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const CARDS_DIR = path.join(REPO_ROOT, "source-cards");
const LEDGER = path.join(REPO_ROOT, "research-ledger", "CLAIMS_TO_VERIFY.md");
const TRANSCRIPT_CUTOFF = Date.parse("2026-07-10");

// The ten required sections (DEPLOYMENT_READINESS_GATE.md), matched against headings.
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

function splitSections(text) {
  const sections = [];
  const lines = text.split(/\r?\n/);
  let current = { heading: "(preamble)", body: [] };
  for (const line of lines) {
    const m = line.match(/^#{2,3}\s+(.*)/);
    if (m) {
      sections.push(current);
      current = { heading: m[1].trim(), body: [] };
    } else {
      current.body.push(line);
    }
  }
  sections.push(current);
  return sections.map((s) => ({ heading: s.heading, body: s.body.join("\n") }));
}

function cardDate(text) {
  const m = text.match(/^Date:\s*(\d{4}-\d{2}-\d{2})/m);
  return m ? Date.parse(m[1]) : null;
}

function evalCard(file) {
  const raw = fs.readFileSync(file, "utf8");
  const failures = [];
  const warnings = [];
  const sections = splitSections(raw);

  // --- Ten required sections ---
  for (const [re, name] of REQUIRED_SECTIONS) {
    if (!re.test(raw)) failures.push(`missing required section: ${name}`);
  }

  // --- Placeholders (whole file) ---
  const ph = raw.match(PLACEHOLDERS);
  if (ph) failures.push(`placeholder text present: "${ph[0]}"`);

  // --- Citation floor: >=2 https anchors inside Source Anchors ---
  const anchorsSec = sections.find((s) => /source anchors/i.test(s.heading));
  const anchorBody = anchorsSec
    ? anchorBodyWithSubsections(sections, anchorsSec)
    : "";
  const urls = [...new Set((anchorBody.match(/https?:\/\/[^\s)>\]]+/g) ?? []))];
  if (urls.length < 2) failures.push(`citation floor: only ${urls.length} distinct source URL(s) in Source Anchors (< 2)`);

  // --- Evidence grade present ---
  const gradeSec = sections.find((s) => /evidence grade/i.test(s.heading));
  const gradeBody = gradeSec ? anchorBodyWithSubsections(sections, gradeSec) : "";
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

  // --- Counterattack minimum: >=3 counters ---
  const counters = (raw.match(/^#{3,4}\s+Counter/gim) ?? []).length;
  if (/counterattack simulation/i.test(raw) && counters < 3) {
    failures.push(`counterattack simulation: only ${counters} counter(s) (< 3)`);
  }

  // --- Verification transcript (hard for new cards, WARN for legacy) ---
  const hasTranscript = /^#{2,3}\s+.*verification transcript/im.test(raw);
  const dated = cardDate(raw);
  if (!hasTranscript) {
    if (dated !== null && dated >= TRANSCRIPT_CUTOFF) {
      failures.push("verification transcript: required for cards dated >= 2026-07-10 (URL + retrieval date + verbatim excerpt per anchor)");
    } else {
      warnings.push("no verification transcript (legacy card — backfill when next revisited)");
    }
  } else {
    // Transcript present: every anchor URL should reappear in the transcript.
    const tSec = sections.find((s) => /verification transcript/i.test(s.heading));
    const tBody = tSec ? anchorBodyWithSubsections(sections, tSec) : "";
    for (const u of urls) {
      if (!tBody.includes(u)) warnings.push(`transcript does not cover anchor: ${u}`);
    }
    if (!/\d{4}-\d{2}-\d{2}/.test(tBody)) failures.push("verification transcript: no retrieval date found");
  }

  const status = failures.length ? "FAIL" : warnings.length ? "WARN" : "PASS";
  return { status, failures, warnings };
}

// A section's content includes its ### subsections until the next same-or-higher heading.
function anchorBodyWithSubsections(sections, target) {
  const i = sections.indexOf(target);
  let body = target.body;
  for (let j = i + 1; j < sections.length; j++) {
    // Subsections of an H2 target are H3+ headings that were split out; we re-attach
    // consecutive sections until we hit a heading that matches another REQUIRED section.
    const isMajor = REQUIRED_SECTIONS.some(([re]) => re.test(`## ${sections[j].heading}`)) ||
      /verification transcript|deployment readiness|next source cards|final canon|status/i.test(sections[j].heading);
    if (isMajor && j > i) break;
    body += "\n" + sections[j].heading + "\n" + sections[j].body;
  }
  return body;
}

// --- Intake scan: claim-bearing files not registered in CLAIMS_TO_VERIFY.md ---
function intakeScan() {
  const ledger = fs.existsSync(LEDGER) ? fs.readFileSync(LEDGER, "utf8") : "";
  const dirs = ["frameworks", "canon", "source-ledgers", "public-narratives", "case-files"];
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

function main() {
  const argv = process.argv.slice(2);
  const intake = argv.includes("--intake");
  const files = argv.filter((a) => !a.startsWith("--"));

  const targets = files.length
    ? files.map((f) => path.resolve(REPO_ROOT, f))
    : fs.existsSync(CARDS_DIR)
      ? fs.readdirSync(CARDS_DIR)
          .filter((f) => /^\d{3}_.*\.md$/.test(f))
          .map((f) => path.join(CARDS_DIR, f))
      : [];

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

  console.log(`\n${targets.length} card(s): ${targets.length - failed} ok, ${failed} FAIL`);
  process.exit(failed ? 1 : 0);
}

main();
