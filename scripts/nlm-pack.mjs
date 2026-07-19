// Civilizational-Memory-OS — NotebookLM source-pack exporter.
// The substrate → NotebookLM conveyor: turns the Load-Bearing Index + gated
// cards into upload-ready source packs with generated focus-box steering.
//
//   node scripts/nlm-pack.mjs             # build all packs into nlm/packs/
//
// Per the notebooklm-mastery skill's vital levers:
//   lever 2 (structure in = structure out): 01_SPINE.md is a pre-segmented
//     3-act outline built from load-bearing facts, so the overview infers a
//     real arc instead of mush; ~2 tight sources per pack, never a dump.
//   lever 1 (steer everything): 03_STEERING.md carries generated focus-box
//     prompts (persona + audience + arc + tone), never-say constraints
//     distilled from the cards' unsafe-wording DISCIPLINE (as categories,
//     not verbatim unsafe lines), custom-visual-style picks, and chat-mining
//     questions derived from the cards' Load-Bearing Questions (lever 4).
//
// SAFETY BY CONSTRUCTION (same discipline as render.mjs):
//   - sources (01/02) are built ONLY from allowlisted deploy-facing sections
//     (Safe Wording, S-Tier, Load-Bearing Question, Public Responses, Content
//     Angles, Honest Caveats, Counterattack Simulation) + index entries.
//     Unsafe Wording and raw Claim sections have NO code path into sources.
//   - 03_STEERING.md is focus-box/chat material ONLY — marked DO NOT UPLOAD.
//   - every pack carries MANIFEST.json with its provenance (LB + CMOS ids)
//     so the gate receipt travels with the pack.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { splitSections, parseFrontmatter, findOverclaim } from "./lib.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INDEX_MD = path.join(REPO_ROOT, "archive", "LOAD_BEARING_INDEX.md");
const CLAIMS = path.join(REPO_ROOT, "archive", "claims.json");
const OUT_ROOT = path.join(REPO_ROOT, "nlm", "packs");

// Card sections that may enter an uploadable source (allowlist; unsafe/raw-claim excluded).
const SOURCE_SECTIONS = [
  /^safe wording/i, /s-tier/i, /load-bearing question/i, /cold-friendly question/i,
  /public response/i, /content angles/i, /honest caveat/i, /counterattack simulation/i,
];

// ---- pack definitions -------------------------------------------------------
const PACKS = [
  {
    slug: "golden-age-knowledge",
    title: "The Knowledge Institutions — how faith funded science",
    audience: "curious skeptics and history lovers who assume 'religion vs science'; cold audience, no prior sympathy assumed",
    lb: ["LB-15", "LB-16", "LB-17", "LB-18", "LB-23", "LB-24", "LB-25", "LB-26", "LB-27", "LB-28", "LB-43", "LB-44"],
    cards: ["CMOS-0005", "CMOS-0009"],
    hook: "The word 'algorithm' is a man's name. He worked in Baghdad — and the institutions that paid him were charity endowments.",
    payoff: "Knowledge became infrastructure when belief was translated into endowments, hospitals, and provenance chains — inherited honestly, scaled remarkably, and lost by degrees, not in one fall.",
    style: "museum-doc cinematic (proven photoreal) — archival warmth, manuscripts, astrolabes, hospital courtyards; NO generic 'AI slideshow' look",
  },
  {
    slug: "mercy-and-the-powerless",
    title: "Mercy as law — the powerless given standing",
    audience: "warm-story audiences (the mercy lane's proven fitness signal): people moved by kindness stories who have never heard these",
    lb: ["LB-02", "LB-06", "LB-07", "LB-08", "LB-21", "LB-19"],
    cards: ["CMOS-0002", "CMOS-0003", "CMOS-0001"],
    hook: "In one tradition, a woman is condemned for starving a cat — and a person is forgiven everything for giving water to a dying dog.",
    payoff: "Mercy here is not sentiment; it is obligation with legal teeth — reaching orphans, debtors, strangers, and even the creature that cannot speak.",
    style: "watercolor-warmth or paper-craft — soft, humane, story-book sincerity; the mercy lane's warm-story register",
  },
];

// ---- index parsing ----------------------------------------------------------
function parseIndex() {
  const raw = fs.readFileSync(INDEX_MD, "utf8");
  const entries = {};
  const re = /\*\*(LB-\d+)\*\*\s*·\s*\[(T1|T2|T2-D)\]\s*([\s\S]*?)—\s*\*\*Carries:\*\*\s*([\s\S]*?)—\s*\*Trace:\*\s*([^\n]+)/g;
  let m;
  while ((m = re.exec(raw)) !== null) {
    entries[m[1]] = {
      id: m[1], tier: m[2],
      fact: m[3].replace(/\s+/g, " ").trim(),
      carries: m[4].replace(/\s+/g, " ").trim(),
      trace: m[5].replace(/\s+/g, " ").trim(),
    };
  }
  return entries;
}

// ---- card extraction (allowlist) --------------------------------------------
function cardExtract(row) {
  const file = path.join(REPO_ROOT, row.file);
  const { body } = parseFrontmatter(fs.readFileSync(file, "utf8"));
  const sections = splitSections(body);
  const out = [];
  for (const s of sections) {
    if (/unsafe/i.test(s.heading)) continue; // hard exclusion, before allowlist
    if (SOURCE_SECTIONS.some((re) => re.test(s.heading))) {
      out.push(`### ${s.heading}\n${s.body.trim()}`);
    }
  }
  return out.join("\n\n");
}

function loadBearingQuestions(row) {
  const file = path.join(REPO_ROOT, row.file);
  const { body } = parseFrontmatter(fs.readFileSync(file, "utf8"));
  const sections = splitSections(body);
  return sections
    .filter((s) => /load-bearing question|cold-friendly question/i.test(s.heading))
    .map((s) => (s.body.match(/^>\s?\*?\*?(.+?)\*?\*?$/m) ?? [null, null])[1])
    .filter(Boolean);
}

// ---- pack builders ----------------------------------------------------------
function buildSpine(pack, idx) {
  const facts = pack.lb.map((id) => idx[id]).filter(Boolean);
  const act1 = facts.slice(0, Math.min(3, facts.length));
  const act2 = facts.slice(3, facts.length - 2);
  const act3 = facts.slice(-2);
  const fmt = (f) => `- ${f.fact} *(confidence: ${f.tier === "T1" ? "gate-verified record" : f.tier === "T2" ? "graded ledger" : "working synthesis — hedge on air"})*`;
  return `# ${pack.title}
## How to read this source (for the AI hosts)
This outline is the intended structure: open on Act I's hook, build through Act II, land Act III's payoff. Every statement below is pre-verified at the stated confidence; where a line says "working synthesis," present it as interpretation, not settled fact.

## ACT I — THE HOOK
${pack.hook}

${act1.map(fmt).join("\n")}

## ACT II — THE BUILD
${act2.map(fmt).join("\n")}

## ACT III — THE PAYOFF
${act3.map(fmt).join("\n")}

${pack.payoff}

## Honest limits (say these on air — credibility is the product)
- These institutions inherited from Byzantine, Sasanian, Greek, Persian, and Indian precedents — "inherited, then scaled" is the honest claim; "invented" is not.
- Ideals and practice diverged; enforcement varied by ruler, region, and era.
- No single golden age, no single fall: plural flowerings, uneven multi-century decline.
`;
}

function buildEvidence(pack, claims) {
  const rows = pack.cards.map((id) => claims.find((c) => c.id === id)).filter(Boolean);
  const blocks = rows.map((row) => {
    const extract = cardExtract(row);
    return `## ${row.id} — evidence grade ${row.grade} (${row.grade_scope})\n*Source closure: ${row.closure} · layer: ${row.claim_layer}*\n\n${extract}\n\n**Primary anchors:**\n${row.anchors.slice(0, 6).map((u) => `- ${u}`).join("\n")}`;
  });
  return `# Evidence cards — ${pack.title}\n\nEach section below is a gate-verified evidence card (deploy-facing sections only). Grades: A = strong primary/consensus support; B = strong secondary support. Treat caveats as part of the claim, not hedging to skip.\n\n${blocks.join("\n\n---\n\n")}\n`;
}

function buildSteering(pack, claims) {
  const rows = pack.cards.map((id) => claims.find((c) => c.id === id)).filter(Boolean);
  const questions = rows.flatMap((row) => loadBearingQuestions(row)).slice(0, 6);
  return `# STEERING — ${pack.title}
> ⛔ **DO NOT UPLOAD THIS FILE AS A SOURCE.** Paste-material for the Customize/focus box and chat only.

## Focus box — Video Overview (Explainer)
Persona: a warm, precise historian-guide — Sherlock-Holmes attention to evidence, zero triumphalism.
Audience: ${pack.audience}.
Arc: open on the hook — "${pack.hook}" — build through the institutions and mechanisms in the spine's Act II, land on: "${pack.payoff}"
Tone: curious, generous, bridge-building; concede honest limits out loud (the spine's "Honest limits" section) — never defensive, never promotional.
Constraints: use only what the sources state at their stated confidence. Never use superlatives like "first ever," "only civilization," "invented X." Present "working synthesis" items as interpretation. Credit Byzantine/Sasanian/Greek/Indian precedents wherever the sources do.

## Focus box — Audio Overview (Brief, sub-2-min)
One idea only: the hook fact plus its single strongest "carries" line. End on the load-bearing question, unanswered — let the listener carry it.

## Custom visual style (always Custom, never Classic)
${pack.style}

## Chat-mine BEFORE generating (lever 4)
1. "What are the 3 most counterintuitive, quotable lines in these sources?"
2. "Find the exact passage where the strongest caveat is stated."
${questions.map((q, i) => `${i + 3}. "${q}"`).join("\n")}

## Receipts rule (non-negotiable)
Every claim in the generated output must trace to the uploaded sources. If the hosts introduce a fact NOT in the pack, that segment is cut or the output is discarded — NotebookLM is a renderer here, never a source of truth. The pack's MANIFEST.json is the provenance receipt; publishing follows the standing gate discipline (Standing Check #3).
`;
}

// ---- main -------------------------------------------------------------------
function main() {
  const idx = parseIndex();
  const claims = JSON.parse(fs.readFileSync(CLAIMS, "utf8")).claims;
  const built = [];
  for (const pack of PACKS) {
    const dir = path.join(OUT_ROOT, pack.slug);
    fs.mkdirSync(dir, { recursive: true });
    const spine = buildSpine(pack, idx);
    const evidence = buildEvidence(pack, claims);
    const steering = buildSteering(pack, claims);

    // Publish guard on uploadable sources (same lexicon + hedge semantics as the gate).
    for (const [name, text] of [["01_SPINE.md", spine], ["02_EVIDENCE_CARDS.md", evidence]]) {
      const hit = findOverclaim(text);
      if (hit) throw new Error(`overclaim '${hit}' in ${pack.slug}/${name} — refusing to write`);
    }

    fs.writeFileSync(path.join(dir, "01_SPINE.md"), spine, "utf8");
    fs.writeFileSync(path.join(dir, "02_EVIDENCE_CARDS.md"), evidence, "utf8");
    fs.writeFileSync(path.join(dir, "03_STEERING.md"), steering, "utf8");
    fs.writeFileSync(path.join(dir, "MANIFEST.json"), JSON.stringify({
      pack: pack.slug, title: pack.title, generated_from: "archive/LOAD_BEARING_INDEX.md + archive/claims.json",
      lb_entries: pack.lb, cmos_records: pack.cards,
      upload_as_sources: ["01_SPINE.md", "02_EVIDENCE_CARDS.md"],
      never_upload: ["03_STEERING.md"],
      receipts: "all source content allowlist-extracted from gate-verified material; overclaim-scanned",
    }, null, 2) + "\n", "utf8");
    built.push(`${pack.slug} (${pack.lb.length} LB facts, ${pack.cards.length} cards)`);
  }
  console.log(`built ${built.length} pack(s):\n  ${built.join("\n  ")}\n→ ${path.relative(REPO_ROOT, OUT_ROOT)}`);
}

main();
