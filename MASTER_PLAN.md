# MASTER PLAN — 2026-07-11 (rev. 2026-07-14)

**Supersedes-and-indexes:** `strategies/CREATOR_SUPERCHARGER_STOCKFISH_MASTER_PLAN.md`, both Creator Supercharger matrices, and `prompt-library/FABLE_5_FULL_REPO_REVIEW_AND_EXECUTION_KICKOFF.md` (its "execute-commit-now" command is superseded; its epistemic rules adopted). Self-graded scores = judge-panel input, never authority. One screen; overflow goes to `strategies/`, never here.

## Mission
See `/MISSION_AND_VISION.md` — universal civilizational-intelligence engine, Islam as first and deepest case; gated assets + skill transfer are the win condition.

## Bindings (one of each — see AIOS.md "Enforcement")
- **Gate** = `research-ledger/DEPLOYMENT_READINESS_GATE.md` + `scripts/evals.mjs` (two genres: source cards + HCC; same hard rules)
- **Loop** = `agents/digital-house-of-wisdom/OPERATING_LOOP.md` + Standing Checks
- **Routing** = `MODEL_ROUTING.md` (measured; role→tier + manifest-role tables inside)
- **Governance layer** (2026-07-13): the AIOS control plane + **Coherence Sentinel** sit ATOP this spine — a Sentinel `PASS` never substitutes for a green `evals.mjs` run; `RUNTIME_STATE_TEMPLATE.yaml` mirrors this queue; manifest roles route via MODEL_ROUTING.
- **Substrate** (2026-07-14): the **Canonical Claim Record** (`research-ledger/CANONICAL_CLAIM_RECORD.md`, five typed axes as frontmatter) + the generated index `archive/claims.json` (built by `scripts/archive.mjs` inside the gate) + `EVIDENCE_VOCABULARY_CROSSWALK.md`. The index is the **only** path to publication — `scripts/render.mjs` reads it, never cards. The receipt IS the index row.

## Ranked work queue (house I/E form)

| # | Item | Lane | Exit condition (receipt) | I | E | Verdict |
|---|---|---|---|---|---|---|
| 1 | ~~Merge PR #19~~ | Operator | merged 2026-07-13 (57bb606) | 5 | 5 | ✅ **DONE** |
| 2 | Transcript-immunity + creator-twin claims through the factory: TIP-2026-001 + Bek run-001 CLAIM_LEDGER re-graded via gate | Sonnet draft → Opus verify → Fable grade | gate-PASS receipts in each packet | 4 | 3 | **PULL W1** |
| 3 | ATB-001 gate run (script claims → cards → green run) then deliver to T&P **with** receipt | Sonnet + Opus | receipt attached; T&P INBOX updated | 4 | 3 | **PULL W1** (publish stays blocked until then) |
| 4 | Research packets, priority order: RP-EA-001 (epistemic authority stack) → RP-SL-001 (slavery inflow/outflow) → RP-MC-001 (Scandinavian moral capital falsification) → CAE-COMP-001 (retired working animals) → RP-CT-001 (civilizational trauma) | Factory (Sonnet/Opus) | each: hardened ledger/cards on main | 4 | 3 | **PULL W1–2, one at a time** |
| 5 | RP-HA-001 (Aisha age-report provenance) **+ HCC-2026-002 (Aisha marital age, from PR #45)** — same topic, one lane | **Blast-radius protocol only**: Opus second pass + Fable adjudication + founder sign-off before anything deploy-facing | gated packet + gated HCC, founder-approved wording | 4 | 2 | **PULL W2 — never rushed** |
| 6 | Console Phase-0 manual discipline (Appendix A mapping is live; run it on Bek claims) | Sonnet | Bek claims carry state+grade labels | 3 | 5 | **PULL now** |
| 7 | Bek source closure (unblocks the parked booking moves) | Sonnet + Opus | flagship clip source-aligned, gate-PASS | 4 | 3 | **PULL W1** |
| 8 | Booking package / podcast-ladder activation (matrices' #1) | Founder + T&P | — | 3 | 2 | **PARK** until #7 + creator validation |
| 9 | Creator Claim Console software build | — | — | 4 | 1 | **PARK** until a creator-validated run proves value (spec's own kill rule) |
| 10 | Modern Waqf / Moral-Capital Blueprint (charter first deliverable; seed: `canon/DIGITAL_WAQF_CHARTER.md`) | Fable architect + factory | ≥6 gated waqf cases + 3 T&P briefs | 4 | 2 | **SCHEDULED — August Fable-Day** |
| 11 | **PR #45 (Historical Calibration Cards)** graduation: HCC-001 needs Source Anchors + Verification Transcript to clear the gate; HCC-002 → row 5 lane | Sonnet backfill → Opus verify → Fable grade | HCC-001 `evals.mjs` PASS; then merge | 4 | 3 | **CONDITIONAL** — triage comment posted; not merged as-is |
| 12 | **Storyworld / anime distribution** ("The First Permission" pilot) — evidence spine (source cards + Truth-Audit anchors) stays here; distribution engine + 5-creator cell + release cadence = **T&P-owned** | This repo (evidence) → T&P (distribution), Standing Check #3 | source cards gated here; pilot shipped by T&P with receipts | 3 | 2 | **HANDOFF to T&P** (flag delivered) |
| 13 | **Issue #44 — Atrocity Memory & Prevention MVP** (case-packet template + provenance/consent standards + first 3 anchor atrocity case packets) | Fable spec → Sonnet draft → Opus verify | 3 gated case packets | 4 | 3 | **PULL W2** — the lone receipts-shaped build |
| 14 | **Issues #30–34** (objective functions, coherent-attention, API registry, truth-compression benchmark, min-viable-civilization) | — | — | 2 | 2 | **PARK** — apparatus sprawl; revisit one at a time only after #13 ships receipts |
| 15 | **The Canonical Claim Record substrate** — schema + crosswalk + `archive.mjs`/`claims.json` + `render.mjs` + 8 cards backfilled + first IGA render | Fable spec + Sonnet build + Opus verify | claims.json = 8 rows; Hospital bundle renders to IGA; gate 8-ok | 5 | 4 | ✅ **SHIPPED this PR** |
| 16 | **Byzantium / Prophetic-Civ-Science lane** — source-first closure (issue #52 Pantokrator, #50 Byzantium pilot); the Byzantium seed-ledger is registered D | Factory (Sonnet draft → Opus verify → Fable adjudicate) | CMOS-0009 at provenance-audited + closure-gap note (this PR); further claims source-closed by specialist fetch | 4 | 2 | **PULL W1–2** — first card this PR |
| 17 | **IslamicGoldenAges.org Phase-1 proof bundle** (issue #54: Hospital/University/Waqf, 12 gated cards, 4-layer schema) | Sonnet drafts cards → gate → `render.mjs` | Hospital rendered (this PR); University + Waqf cards next | 4 | 3 | **PULL W1** — Hospital done, 2 bundles to go |

## Delegation lanes
**Sonnet 5** = drafting, fetching, formatting, registration, revision. **Opus 4.8** = adversarial verification, citation passes, blast-radius second passes, diff audits. **Fable 5** = judge panels, adjudication, specs, grade-A sign-off, this plan. **Human** = merges, taste, sensitive sign-off (RP-HA-001, anything naming living persons).

## Kill rules
- Zero cards through the gate in a factory run → stop, hand-harden (proven 2026-07-10).
- No self-graded score acts without a panel verdict.
- No Console software before creator-value evidence.
- Distribution never precedes source closure + gate receipt (Standing Check #3).
- Any open+mergeable PR >7 days = blocking first item of the steward pass.
- No parallel gate/loop/routing/queue authority: new governance docs bind to the spine or don't ship (the agent-governance wave's own Steward charter forbids "silently creating new gates or parallel routing systems").
- New card genres graduate through the SAME `evals.mjs` (HCC included); a new schema is never a new gate.
- **One evidence vocabulary.** A new topic never needs a new grade/status vocabulary — it needs claim records with the five typed axes filled (`EVIDENCE_VOCABULARY_CROSSWALK.md`). Inventing `Established/Likely/Weak` again = naming an axis that already exists.
- **The index is the only publish path.** `render.mjs` reads `archive/claims.json`, never cards; a claim absent from the index cannot ship. The receipt is the index row.
- **`grade ⊥ closure`.** Never conflate support-strength (A–D) with provenance-depth (open→source-closed). A claim can be grade-A on consensus yet closure=reconnaissance (card 005).
- ATB-001 residual risk is doc-level only — the banner, intake registration, and T&P flag are the protection; nothing mechanical stops another repo from publishing. Named, accepted, revisit if violated once.

## Receipts cadence
`node scripts/evals.mjs` green after every commit; `--intake` zero-delta after every session that adds claim-bearing files; routing table re-measured each Fable-Day; weekly steward pass runs the Standing Checks.
