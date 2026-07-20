# NotebookLM Packs — the substrate → NotebookLM conveyor

NotebookLM (now "Gemini Notebook") outputs are only as good as their sources and steering. This directory is where the archive fixes both at once: **`scripts/nlm-pack.mjs` generates upload-ready source packs from the Load-Bearing Index + gated claim records**, so every Audio/Video Overview the content lanes generate is grounded in gate-verified, safe-worded, hook-carrying material — with the steering pre-written from the cards themselves.

## Why this beats hand-curation (the mastery levers, applied by construction)

Per the notebooklm-mastery skill's vital few levers:
- **Structure in = structure out:** `01_SPINE.md` is a pre-segmented **3-act outline** (hook → build → payoff) built from load-bearing facts with per-line confidence labels — the overview infers a real arc because the source *is* an arc. Two tight sources per pack, never a dump.
- **Steer every generation:** `03_STEERING.md` ships generated **focus-box prompts** (persona + audience + arc + tone), **never-say constraints** (the overclaim discipline as instructions), a **Custom visual style** pick, and **chat-mining questions** derived from the cards' own Load-Bearing Questions. Defaults are how outputs end up generic; these packs make steering the default.
- **Receipts:** `MANIFEST.json` carries the pack's provenance (LB + CMOS ids). NotebookLM is a **renderer, never a source of truth** — any claim in an output that isn't in the pack gets cut or the output is discarded.

## Safety by construction
Uploadable sources (`01`, `02`) are built ONLY from allowlisted deploy-facing sections — **Unsafe Wording and raw Claims have no code path in** — and are overclaim-scanned (same lexicon + hedge semantics as the gate) before writing. `03_STEERING.md` is focus-box/chat material only: **never upload it as a source.**

## Per-pack workflow (slots into the proven Canon-Cut runbook)
1. Upload `01_SPINE.md` + `02_EVIDENCE_CARDS.md` as the notebook's sources.
2. **Chat-mine first** using `03_STEERING.md`'s questions (find the hook + quotable lines; NotebookLM cites the passages).
3. Generate with the steered focus box — **multiple variants** (Video Explainer + Audio Brief at minimum), always **Custom** visual style.
4. Download → the standard clip chain (trim past the canned host-intro → reframe → caption → publish). Production/publishing is truth-and-peace-engine's lane, gated by Standing Check #3.

## Ownership split (standing)
Civilizational-Memory-OS builds and regenerates packs (evidence side). Truth & Peace generates, cuts, and publishes (expression side). When cards or the index change, re-run `node scripts/nlm-pack.mjs` — packs are regenerable build artifacts, not hand-maintained.

## Current packs
- `packs/golden-age-knowledge/` — the knowledge-institutions story (12 LB facts; CMOS-0005 + the Byzantine calibration card CMOS-0009). For the ILJ/Golden-Age video lane.
- `packs/mercy-and-the-powerless/` — mercy-as-law (6 LB facts; CMOS-0001/0002/0003). **Aimed at the mercy lane's live fitness signal** — the warm-story register T&P's RSI loop measured as the outperformer.
