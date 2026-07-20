// Civilizational-Memory-OS — the archive's public face (content exports).
// Renders the queryable index (archive/claims.json) to static IslamicGoldenAges.org
// pages. The substrate publishing ITSELF — the missing "content exports."
//
//   node scripts/render.mjs                 # render every proof bundle (see BUNDLES)
//
// SAFETY BY CONSTRUCTION, not by filtering:
//   - reads ONLY archive/claims.json (never cards) — the index is the sole path to publish
//   - the template has slots ONLY for allowlisted fields; unsafe_wording / raw Claim have
//     NO code path here and therefore cannot leak
//   - every node must carry claim_layer (the category firewall) or it is refused
//   - only grade A/B renders (no distribution without a receipt)
//   - the OVERCLAIMS lexicon is re-run over the rendered output; any hit aborts the render
//   - deterministic output (sorted, no timestamps) so pages diff in git

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { OVERCLAIMS } from "./lib.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INDEX = path.join(REPO_ROOT, "archive", "claims.json");
const SITE_OUT = path.join(REPO_ROOT, "sites", "islamicgoldenages.org", "public");

// claim_layer (category firewall) → IslamicGoldenAges.org public layer + label.
const LAYER_ROUTING = {
  institution: ["Historical Record", "Historical Record — evidence-led reconstruction"],
  outcome: ["Historical Record", "Historical Record — evidence-led reconstruction"],
  culture: ["Historical Record", "Historical Record — evidence-led reconstruction"],
  quran: ["Historical Record", "Historical Record — what the source text states"],
  prophetic: ["Historical Record", "Historical Record — what the source text states"],
  fiqh: ["Historical Record", "Historical Record — legal-tradition record"],
  synthesis: ["Civilizational Synthesis", "Civilizational Synthesis — an evidence-grounded interpretive model"],
};

const CONFIDENCE_LABEL = { A: "High", B: "Moderate", C: "Contested", D: "Provisional" };

function esc(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderNode(c) {
  if (!c.claim_layer || !LAYER_ROUTING[c.claim_layer]) {
    throw new Error(`${c.id}: missing/unknown claim_layer '${c.claim_layer}' — every published node must declare its category firewall`);
  }
  if (!(c.grade === "A" || c.grade === "B")) {
    throw new Error(`${c.id}: grade '${c.grade}' is below the publish floor (A/B only)`);
  }
  if (!c.safe_wording) throw new Error(`${c.id}: no Safe Wording to publish`);
  const label = LAYER_ROUTING[c.claim_layer][1];
  const anchors = (c.anchors ?? []).map((u) => `      <li><a href="${esc(u)}" rel="nofollow noopener">${esc(u)}</a></li>`).join("\n");
  return `  <article class="claim" id="${esc(c.id)}" data-layer="${esc(c.claim_layer)}">
    <p class="firewall">${esc(label)}</p>
    <p class="claim-layer">Category firewall: <strong>${esc(c.claim_layer)}</strong> layer</p>
    <blockquote class="safe">${esc(c.safe_wording)}</blockquote>
    <dl class="meta">
      <dt>Evidence grade</dt><dd>${esc(c.grade)} — ${esc(CONFIDENCE_LABEL[c.grade])} confidence</dd>
      <dt>Applies to</dt><dd>${esc(c.grade_scope)}</dd>
      <dt>Source closure</dt><dd>${esc(c.closure)}</dd>
      <dt>Epistemic status</dt><dd>${esc(c.epistemic_status)}</dd>
      <dt>Independent source chains</dt><dd>${esc(c.independent_chains)}</dd>
    </dl>
    <details class="sources"><summary>Sources (${(c.anchors ?? []).length})</summary>
    <ul>
${anchors}
    </ul></details>
    <p class="record-link">Full record: <code>${esc(c.file)}</code> (${esc(c.id)})</p>
  </article>`;
}

function renderPage(section, nodes) {
  const body = nodes.map(renderNode).join("\n");
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(section)} — IslamicGoldenAges.org</title>
<meta name="robots" content="noindex"><!-- proof render, not production -->
</head><body>
<header>
  <h1>IslamicGoldenAges.org — ${esc(section)}</h1>
  <p class="creed">We do not ask you to admire Islamic civilization. We reconstruct the record, compare it fairly, expose disputes, and let the evidence update the map.</p>
  <p class="generated">Generated from <code>archive/claims.json</code> (the Canonical Claim Record index) by <code>scripts/render.mjs</code>. Every claim shows its evidence grade, source closure, and category-firewall layer. Only safe, gate-passing wording is published.</p>
</header>
<main>
${body}
</main>
</body></html>
`;
  // Publish guard: the same overclaim discipline as the gate, over the rendered output.
  for (const re of OVERCLAIMS) {
    const m = html.match(re);
    if (m) throw new Error(`publish guard: overclaim '${m[0]}' in rendered ${section} page — refusing to write`);
  }
  return html;
}

// The issue-#54 Phase-1 proof bundles. Each bundle is an explicit id-allowlist rendered
// to one page — adding a lane means adding an entry here, never widening a filter.
const BUNDLES = [
  { ids: ["CMOS-0005"], section: "Hospital & Knowledge Institutions", file: "hospital-knowledge-institutions.html" },
  { ids: ["CMOS-0012"], section: "University & Madrasa System", file: "university-madrasa-system.html" },
  { ids: ["CMOS-0013"], section: "Waqf Endowment Engine", file: "waqf-endowment-engine.html" },
];

function main() {
  if (!fs.existsSync(INDEX)) { console.error("no archive/claims.json — run `node scripts/evals.mjs` first"); process.exit(1); }
  const idx = JSON.parse(fs.readFileSync(INDEX, "utf8"));

  fs.mkdirSync(SITE_OUT, { recursive: true });
  for (const bundle of BUNDLES) {
    const wanted = new Set(bundle.ids);
    const nodes = idx.claims.filter((c) => wanted.has(c.id) && (c.grade === "A" || c.grade === "B"));
    if (nodes.length !== bundle.ids.length) {
      const missing = bundle.ids.filter((id) => !nodes.some((n) => n.id === id));
      console.error(`bundle '${bundle.section}': ${missing.join(", ")} absent from the index or below the A/B publish floor — refusing to render`);
      process.exit(1);
    }
    const html = renderPage(bundle.section, nodes);
    const outFile = path.join(SITE_OUT, bundle.file);
    fs.writeFileSync(outFile, html, "utf8");
    console.log(`rendered ${nodes.length} claim(s) → ${path.relative(REPO_ROOT, outFile).split(path.sep).join("/")}`);
    console.log(`  ${nodes.map((n) => `${n.id} (${n.claim_layer}, grade ${n.grade})`).join("; ")}`);
  }
}

main();
