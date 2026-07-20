# Model Routing (this seat) — measured, not asserted

**Source of numbers:** 2026-07-10 hardening-factory pilot. Four cards (005, 007, 008, 006-backfill) drafted by Sonnet 5, then attacked by three refuter lenses run at BOTH tiers (Sonnet 5 and Fable 5) on identical prompts and identical drafts, twice (run 2 re-ran on the same cached drafts; 3 Sonnet refuters lost to server rate-limits). n = 21 complete Sonnet↔Fable verdict pairs.

## Measured agreement (overall verdict: HOLDS / WEAKENED / REFUTED)

| Lens | Pairs | Agree | Rate |
|---|---|---|---|
| primary-source | 7 | 7 | **100%** |
| hostile-historian | 8 | 8 | **100%** |
| category-collapse | 6 | 2 | **33%** |
| **All** | **21** | **17** | **81%** |

Every disagreement was the same shape: **Fable said REFUTED where Sonnet said WEAKENED, always on the category-collapse lens** (blueprint/builder conflation, era collapse, smear-category mismatch). Sonnet returned REFUTED exactly once — on the card missing entire sections, i.e., a mechanical-level failure. Conclusion: Sonnet refutes reliably where the evidence is fetchable (citations, counter-history); it under-detects conceptual conflation.

Two honesty notes: (1) single-refuter verdicts are noisy — Fable's own 007 category-collapse verdict flipped REFUTED→WEAKENED between runs on the identical draft; treat refuter verdicts as findings-generators, not pass/fail gates (the gate is `scripts/evals.mjs` + adjudication). (2) The Opus 4.8 second pass on card 007 surfaced a materially new attack (classical *'aqila* collective-liability doctrine) that all six first-pass refuters missed — fresh-eyes second passes earn their cost on blast-radius cards.

## Routing table (in force 2026-07-10; revisit each Fable-Day with new agreement data)

| Task | Tier | Basis |
|---|---|---|
| Card drafting (10-section + transcript) | **Sonnet 5** | 4/4 pilot cards passed the gate after revision |
| Refuter: primary-source lens | **Sonnet 5** | 100% verdict agreement; findings were concrete live-fetch catches (incl. one fabricated-excerpt catch) |
| Refuter: hostile-historian lens | **Sonnet 5** | 100% verdict agreement |
| Refuter: category-collapse lens | **Frontier (Fable on Fable-Days, else Opus 4.8)** | 33% agreement — Sonnet misses REFUTED-level conflations |
| Revision after refuter pass | **Sonnet 5** | produced all four gate-passing revisions |
| Blast-radius second pass | **Opus 4.8** | found the 'aqila hole after 6 first-pass refuters missed it |
| Grade-A promotion / final adjudication | **Frontier + human sample audit** | gate rule (DEPLOYMENT_READINESS_GATE.md); Sonnet ceiling = B/C |
| Mechanical checks | **`node scripts/evals.mjs`** (no model) | deterministic |
| Planning, strategy, judge panels, spec-writing | **Fable 5 only** | operator directive 2026-07-10: Fable is reserved for highest-leverage judgment; execution is delegated |

**Demotion achieved this window:** card drafting + 2 of 3 refutation lenses + revision moved from frontier-bound to Sonnet, with the category-collapse lens and final grades explicitly retained at frontier tier. The next Fable-Day re-measures agreement before moving that boundary.

## Role mapping (binding 2026-07-11 — roles from `canon/FOUNDER_AGENT_RESEARCH_DIVISION_OF_LABOR.md`)

| Role (canon doc) | Tier (measured, this table is authoritative) |
|---|---|
| Founder | Human — signal, taste, merge decisions, sensitive sign-off |
| Architect | **Fable 5** — specs, judge panels, adjudication, strategy (operator directive 2026-07-10) |
| Scout (research/drafting) | **Sonnet 5** — drafting, fetching, formatting (4/4 pilot cards passed gate) |
| Red-team | **Sonnet 5** for primary-source + hostile-historian lenses (100% agreement); **frontier** for category-collapse (33%); **Opus 4.8** for blast-radius second passes |
| Integration | **Sonnet 5 + `scripts/evals.mjs`** — mechanical checks are model-free |
| Editor / force calibration | **Sonnet 5 under the gate**; final grade sign-off stays frontier |

## Manifest role mapping (binding 2026-07-13 — roles from `aios/AGENT_MANIFEST.yaml`)

The agent-control-plane wave introduced a second role taxonomy. It maps onto the measured tiers above — this table is authoritative for tier; the manifest is authoritative for lifecycle/WIP.

| Manifest role | Tier | Notes |
|---|---|---|
| `aios-steward` (Control Tower) | **Sonnet 5** | runs `agents/digital-house-of-wisdom/OPERATING_LOOP.md` Standing Checks; escalates judgment calls to Fable |
| `coherence-sentinel` | **Opus 4.8** (adversarial) / **Fable 5** (adjudication) | judgment layer ATOP `scripts/evals.mjs`; a Sentinel PASS never replaces a green run |
| `nexus-synthesis` | **Fable 5** | invoked for cross-artifact synthesis, not standing |
| specialist cells | per `templates/AGENT_TASK_PACKET.md` | tier named in the task packet; defaults to Scout=Sonnet, Red-team=Opus |
| Founder | **Human** | irreversible external approval, sensitive sign-off |

## The Fable-Only List (binding 2026-07-14 — operator directive: Fable usage goes only to what only Fable can do)

**Fable-only** (frontier judgment; no rubric exists yet, or the task IS writing the rubric):
- Whole-corpus Pareto adjudication — selecting/ranking/displacing entries in `archive/LOAD_BEARING_INDEX.md` (which ~50 of ~200 graded atoms carry the map)
- Grand-synthesis authorship and audit (the canonical narrative spine and its traceability verdicts)
- Constitutions, schemas, and charters (the Canonical Claim Record, the MECE five-planes map, THE_ARCHIVIST, gate genres)
- Judge panels and their final verdicts; grade-**A** promotion sign-off; MECE architecture decisions
- Reconciling incoming AI waves (fold-vs-fork adjudication of parallel-authority proposals)

**Everything else demotes:** drafting/harvest/fetch/registration/annotation-mechanics → **Sonnet 5**; adversarial verification/citation re-fetch/blast-radius second passes/diff audits → **Opus 4.8**; deterministic checks → **code** (`evals.mjs`, `archive.mjs`, `render.mjs`).

> **The test: if a task has a rubric, it is not Fable work. Fable writes rubrics.**
