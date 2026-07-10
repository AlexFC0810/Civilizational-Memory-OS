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
