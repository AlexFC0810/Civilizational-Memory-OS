// Civilizational-Memory-OS — adversarial self-test for the ONE gate.
//
//   node scripts/gate-selftest.mjs
//
// WHY THIS EXISTS. Three times on 2026-08-02 a safety check reported healthy while blind:
// `--intake` returned 0 while ~9,000 lines were unscanned; the index published 403-blocked
// URLs as anchors; the claim queue reported 56 unverified claims when 17 were claims. None
// of those were caught by reading code — they surfaced by accident, downstream, late.
//
// The lesson is not "write better checks." It is: **a check nobody has attacked is not a
// check, it is a claim.** This file attacks every check by planting the exact violation it
// is supposed to catch and asserting the gate FAILS. A green gate means something only if
// this file is also green.
//
// Each case states the coverage boundary it pins down. Cases marked EXPECT_PASS are just as
// important as EXPECT_FAIL: they document, executably, what the gate deliberately does NOT
// police — so nobody mistakes silence for coverage.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const GATE = path.join(REPO_ROOT, "scripts", "evals.mjs");
const BASE = path.join(REPO_ROOT, "source-cards", "010_maragha_observatory.md");

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cmos-gate-selftest-"));
// Normalise to LF. Cards on disk are CRLF, and the first version of this harness silently
// failed to mutate anything because `/^---\n/` never matched `---\r\n` — it reported five
// gate "misses" that were really harness misses. A self-test that cannot mutate its input
// proves nothing while looking rigorous, which is the exact failure this file exists to hunt.
const baseText = fs.readFileSync(BASE, "utf8").replace(/\r\n/g, "\n");

// Run the real entrypoint on one file. Single-file mode is side-effect-free (it does not
// rebuild archive/claims.json), so this never disturbs the working tree.
function runGate(text, name = "010_probe.md") {
  const f = path.join(tmp, name);
  fs.writeFileSync(f, text, "utf8");
  try {
    const out = execFileSync(process.execPath, [GATE, f], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return { failed: false, out };
  } catch (e) {
    return { failed: true, out: `${e.stdout ?? ""}${e.stderr ?? ""}` };
  }
}

// Replace the body of a named H2 section, leaving the rest of the card intact.
// Done by splitting on H2 boundaries rather than one big regex — `\Z` is not a JS regex
// token (it matches a literal "Z"), which is how the first version silently no-op'd.
function replaceSection(text, heading, newBody) {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => new RegExp(`^## ${heading}\\s*$`, "i").test(l));
  if (start === -1) throw new Error(`self-test bug: section "${heading}" not found in the base card`);
  let end = start + 1;
  while (end < lines.length && !/^## /.test(lines[end])) end++;
  return [...lines.slice(0, start + 1), "", newBody, "", ...lines.slice(end)].join("\n");
}

function setFrontmatter(text, key, value) {
  const re = new RegExp(`^${key}:.*$`, "m");
  if (re.test(text)) return text.replace(re, `${key}: ${value}`);
  if (!text.startsWith("---\n")) throw new Error("self-test bug: base card has no frontmatter block");
  return text.replace(/^---\n/, `---\n${key}: ${value}\n`);
}

function dropFrontmatter(text, key) {
  const re = new RegExp(`^${key}:.*\\n`, "m");
  if (!re.test(text)) throw new Error(`self-test bug: frontmatter key "${key}" not present to drop`);
  return text.replace(re, "");
}

const cases = [
  // ---- Structural checks -----------------------------------------------------------
  { name: "missing required section (Source Anchors)", expect: "FAIL", want: /missing required section/i,
    boundary: "A card cannot silently lose its evidence section.",
    mutate: (t) => t.replace(/^## Source Anchors\s*$/mi, "## Some Other Heading") },

  { name: "placeholder text (TBD) anywhere in file", expect: "FAIL", want: /placeholder/i,
    boundary: "Unfinished drafts cannot pass as gated records.",
    mutate: (t) => t.replace(/^## Claim\s*$/mi, "## Claim\n\nTBD") },

  { name: "citation floor: fewer than 2 source URLs", expect: "FAIL", want: /citation floor/i,
    boundary: "A claim needs at least two distinct sources to be gated.",
    mutate: (t) => replaceSection(t, "Source Anchors", "Only one source here: https://example.com/only-one") },

  { name: "evidence grade letter absent", expect: "FAIL", want: /evidence grade/i,
    boundary: "Every card must carry a derivable A/B/C/D.",
    mutate: (t) => replaceSection(t, "Evidence Grade", "This claim is well supported by the sources cited above.") },

  { name: "counterattack simulation below 3 counters", expect: "FAIL", want: /counterattack/i,
    boundary: "Cards must rehearse at least three hostile responses.",
    mutate: (t) => replaceSection(t, "Counterattack Simulation", "### Counter: \"one objection only\"\n\nResponse: brief.") },

  { name: "verification transcript without a retrieval date", expect: "FAIL", want: /retrieval date/i,
    boundary: "Anchors must be dated, not merely listed.",
    mutate: (t) => t.replace(/\d{4}-\d{2}-\d{2}/g, "sometime") },

  // ---- The overclaim lexicon -------------------------------------------------------
  { name: "overclaim inside Safe Wording (a deploy-facing section)", expect: "FAIL", want: /overclaim/i,
    boundary: "Unhedged absolutes must never reach deploy-facing copy.",
    mutate: (t) => replaceSection(t, "Safe Wording", "> Islam invented hospitals and no other civilization came close.") },

  { name: "HEDGED overclaim in Safe Wording is allowed", expect: "PASS", want: null,
    boundary: "The lexicon must not punish the house idiom of quoting a forbidden line to reject it.",
    mutate: (t) => replaceSection(t, "Safe Wording", "> Do not say \"Islam invented hospitals\" — that is an overclaim; the honest claim is inherited-then-scaled.") },

  // ---- Frontmatter schema ----------------------------------------------------------
  { name: "frontmatter: missing required key (id)", expect: "FAIL", want: /missing required key/i,
    boundary: "The five typed axes are mandatory for post-cutoff cards.",
    mutate: (t) => dropFrontmatter(t, "id") },

  { name: "frontmatter: derived field re-typed (grade)", expect: "FAIL", want: /derived from the body/i,
    boundary: "Grade is derived, never asserted — drift between body and frontmatter is the failure mode.",
    mutate: (t) => setFrontmatter(t, "grade", "A") },

  { name: "frontmatter: claim_layer outside the enum", expect: "FAIL", want: /claim_layer/i,
    boundary: "The category firewall cannot be widened by typo or invention.",
    mutate: (t) => setFrontmatter(t, "claim_layer", "propaganda") },

  { name: "frontmatter: epistemic_status outside the enum", expect: "FAIL", want: /epistemic_status/i,
    boundary: "Verdict vocabulary is closed.",
    mutate: (t) => setFrontmatter(t, "epistemic_status", "obviously-true") },

  { name: "frontmatter: closure outside the enum", expect: "FAIL", want: /closure/i,
    boundary: "Provenance depth cannot be self-declared with a new word.",
    mutate: (t) => setFrontmatter(t, "closure", "totally-audited") },

  { name: "frontmatter: source_tier_best out of range", expect: "FAIL", want: /source_tier_best/i,
    boundary: "Tier is 0-5; an offset scale from another document must not slip in.",
    mutate: (t) => setFrontmatter(t, "source_tier_best", "99") },

  { name: "frontmatter: id not namespaced", expect: "FAIL", want: /namespaced|id /i,
    boundary: "Ids must be CMOS-####/HCC-#### so the allocator and index stay coherent.",
    mutate: (t) => setFrontmatter(t, "id", "card-10") },

  // ---- Deliberate NON-coverage: documented, not accidental -------------------------
  { name: "[boundary] overclaim in Honest Caveats is NOT gate-blocked", expect: "PASS", want: null,
    boundary: "Caveats are argued prose where forbidden lines get quoted to reject them; the gate deliberately does not scan them. NOTE: nlm-pack.mjs DOES export this section, so its own findOverclaim guard is the backstop — that guard is what must hold here.",
    mutate: (t) => replaceSection(t, "Honest Caveats", "1. Islam invented hospitals.") },
];

// ---- Publish-path probes ------------------------------------------------------------
// The card gate decides what is TRUE ENOUGH TO KEEP. These decide what reaches a public
// page or a NotebookLM upload. Higher stakes, and until 2026-08-03 nothing exercised them.
const { publishRefusal } = await import("./render.mjs").catch(() => ({}));
const { findOverclaim } = await import("./lib.mjs");
const { findIdCollisions } = await import("./archive.mjs");
const { bearsClaims } = await import("./evals.mjs");

const nonEmpty = (arr) => (arr && arr.length ? arr : null);

const publishCases = [
  { name: "[publish] grade C is refused at the publish floor",
    run: () => publishRefusal({ id: "X", claim_layer: "institution", grade: "C", safe_wording: "x" }), expectRefusal: true },
  { name: "[publish] grade D is refused",
    run: () => publishRefusal({ id: "X", claim_layer: "institution", grade: "D", safe_wording: "x" }), expectRefusal: true },
  { name: "[publish] missing claim_layer is refused (category firewall)",
    run: () => publishRefusal({ id: "X", claim_layer: null, grade: "A", safe_wording: "x" }), expectRefusal: true },
  { name: "[publish] unknown claim_layer is refused",
    run: () => publishRefusal({ id: "X", claim_layer: "propaganda", grade: "A", safe_wording: "x" }), expectRefusal: true },
  { name: "[publish] missing safe_wording is refused",
    run: () => publishRefusal({ id: "X", claim_layer: "institution", grade: "A", safe_wording: null }), expectRefusal: true },
  { name: "[publish] a clean grade-B claim is allowed",
    run: () => publishRefusal({ id: "X", claim_layer: "institution", grade: "B", safe_wording: "an honest line" }), expectRefusal: false },

  // The backstop for the documented gate boundary above: the gate does not scan Honest
  // Caveats for overclaims, but nlm-pack EXPORTS that section as an uploadable source. So
  // this guard is the only thing standing between a caveat overclaim and a NotebookLM upload.
  { name: "[publish] nlm/render overclaim guard catches an unhedged absolute",
    run: () => findOverclaim("Islam invented hospitals and no other civilization came close."), expectRefusal: true },
  { name: "[publish] overclaim guard allows a same-sentence repudiation",
    run: () => findOverclaim('The line "no other tradition warns against decadence" is false; the Hebrew Bible carries versions.'), expectRefusal: false },
  { name: "[publish] overclaim guard still catches when 'false' belongs to a LATER sentence",
    run: () => findOverclaim("No other religion produced this. The evidence is overwhelming and it is false to deny it."), expectRefusal: true },

  // The two checks with the worst real-world record — both were added AFTER the failure they
  // now prevent, which is exactly why they need standing proof rather than trust.
  { name: "[collision] two cards claiming one id are caught",
    run: () => nonEmpty(findIdCollisions([
      { id: "CMOS-0010", file: "source-cards/010_maragha_observatory.md" },
      { id: "CMOS-0010", file: "source-cards/012_university_madrasa_system.md" },
    ])), expectRefusal: true },
  { name: "[collision] filename prefix disagreeing with the id is caught (the allocator)",
    run: () => nonEmpty(findIdCollisions([
      { id: "CMOS-0010", file: "source-cards/012_university_madrasa_system.md" },
    ])), expectRefusal: true },
  { name: "[collision] a correctly allocated set is allowed",
    run: () => nonEmpty(findIdCollisions([
      { id: "CMOS-0010", file: "source-cards/010_maragha_observatory.md" },
      { id: "CMOS-0012", file: "source-cards/012_university_madrasa_system.md" },
    ])), expectRefusal: false },

  // The false-green incident: a file dense with historical assertions but carrying no literal
  // "Claim" heading used to scan clean. Footnotes and per-item confidence now trip it.
  { name: "[intake] claim-bearing file WITHOUT a 'Claim' heading is detected (footnotes)",
    run: () => (bearsClaims("# Some Canon\n\nHimyar adopted a form of monotheism.[^1]\n\n[^1]: Robin, 2015.") ? "detected" : null),
    expectRefusal: true },
  { name: "[intake] deploy-facing copy is detected (hooks)",
    run: () => (bearsClaims("# Series\n\n## Short-Form Hooks\n\n1. A line meant to ship.") ? "detected" : null),
    expectRefusal: true },
  { name: "[intake] a pure protocol with no claims is NOT flagged (avoids crying wolf)",
    run: () => (bearsClaims("# Protocol\n\n## Steps\n\n1. Do the thing.\n2. Then the other thing.") ? "flagged" : null),
    expectRefusal: false },
];

let pass = 0;
const failures = [];

for (const c of cases) {
  const { failed, out } = runGate(c.mutate(baseText));
  const wantFail = c.expect === "FAIL";
  let ok = failed === wantFail;
  if (ok && wantFail && c.want) ok = c.want.test(out);
  if (ok) {
    pass++;
  } else {
    failures.push(`${c.name}\n      expected ${c.expect}, gate ${failed ? "FAILED" : "PASSED"}${c.want && failed ? ` (message did not match ${c.want})` : ""}`);
  }
  console.log(`  ${ok ? "ok  " : "MISS"}  ${c.name}`);
}

fs.rmSync(tmp, { recursive: true, force: true });

for (const c of publishCases) {
  let ok;
  if (typeof publishRefusal !== "function" && c.name.startsWith("[publish] ") && c.run.toString().includes("publishRefusal")) {
    ok = false;
    failures.push(`${c.name}\n      publishRefusal is not exported from render.mjs — the publish floor is untestable`);
  } else {
    const got = c.run();
    ok = c.expectRefusal ? got != null : got == null;
    if (!ok) failures.push(`${c.name}\n      expected ${c.expectRefusal ? "REFUSAL" : "ALLOW"}, got ${JSON.stringify(got)}`);
  }
  if (ok) pass++;
  console.log(`  ${ok ? "ok  " : "MISS"}  ${c.name}`);
}

const total = cases.length + publishCases.length;
console.log(`\ngate self-test: ${pass}/${total} checks proven`);
if (failures.length) {
  console.log("\nUNPROVEN CHECKS — the gate does not catch what it claims to:");
  for (const f of failures) console.log(`   ✗ ${f}`);
  process.exit(1);
}
