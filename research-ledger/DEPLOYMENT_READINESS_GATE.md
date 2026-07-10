# Deployment-Readiness Gate (v1 — 2026-07-10)

The executable standard a source card must pass before its lines may ship publicly. Derived from the five exemplar cards (`source-cards/001–006`) and the A–D rubric in `CLAIMS_TO_VERIFY.md`. Enforced mechanically by `scripts/evals.mjs`; adjudicated finally by a frontier-model or human pass.

> **Operating rule (unchanged): no viral line without a source card. New rule: no source card without a green gate run.**

## The ten required sections

Every card in `source-cards/` must contain all ten, as headings:

1. **Claim** — one honest claim, with its own scope-limiter sentence (what it does NOT prove).
2. **Source Anchors** — ≥2 anchors; each anchor has a quoted summary AND a `Source: https://…` line.
3. **Evidence Grade** — A/B/C/D per the rubric in `CLAIMS_TO_VERIFY.md`; may be split (A for anchors, B for the broader claim).
4. **Load-Bearing Question** — the question that makes the smear carry the weight of reality.
5. **S-Tier Lines** — the deployable lines.
6. **Content Angles** — post / hook / debate-reply forms.
7. **Honest Caveats** — numbered; what we refuse to overclaim.
8. **Unsafe Wording to Avoid** — the brittle versions, listed so they are never shipped.
9. **Safe Wording** — the version that survives hostile review.
10. **Counterattack Simulation** — ≥3 counters, each with a response that concedes the true part.

## Hard rules

- **Verification transcript:** cards hardened on or after 2026-07-10 must carry a `## Verification Transcript` section: per anchor — URL, retrieval date, and a verbatim fetched excerpt. Done = re-reading the external source and recording it. (Legacy cards: WARN until backfilled.)
- **Fetch-failure caps the grade:** if an anchor's source could not be live-fetched and excerpted, the card's grade is capped at **B** — never silently passed. Paywalled/Arabic-corpus anchors are named as such in the transcript.
- **Overclaim scan:** deploy-facing sections (Claim, S-Tier, Safe Wording, Public Responses) must not contain unhedged absolutes ("first ever", "only Islam", "never", "always", "invented X", "proves Islam is"). The Unsafe-Wording section is exempt — that is where those phrases belong.
- **Grade authority:** Sonnet-tier refutation may promote to **B/C only**. Grade-**A** promotion requires frontier-model adjudication plus the refuter transcripts, with a periodic human sample audit. (Measured Sonnet-vs-Fable agreement lives in `MODEL_ROUTING.md`; the ceiling moves only when the data says so.)
- **Blast-radius rule:** cards answering maximum-hostility smears (e.g. 007 terrorism/collective-guilt) take a **mandatory second adversarial pass** before grading.
- **Gates are floors, not proofs:** passing evals means mechanically complete, not true. The three refuter lenses (`prompt-library/refuters/`) and human taste remain the truth layer.

## Refuter lenses (run all three on every new card)

| Lens | Prompt | Kills |
|---|---|---|
| Primary-source | `prompt-library/refuters/REFUTER_PRIMARY_SOURCE.md` | anchors that don't say what the card claims |
| Hostile historian | `prompt-library/refuters/REFUTER_HOSTILE_HISTORIAN.md` | claims a competent adversary can flip |
| Category collapse | `prompt-library/refuters/REFUTER_CATEGORY_COLLAPSE.md` | blueprint/builder/building conflations, era-baseline errors |

## Kill rule

If a hardening run produces zero cards through the gate, stop factory work and hand-harden with a frontier model directly. Cards on main outrank factory existence.

## How to run

```
node scripts/evals.mjs               # gate all cards in source-cards/
node scripts/evals.mjs <file...>     # gate specific cards
node scripts/evals.mjs --intake      # also scan frameworks/canon/source-ledgers for unregistered claims
```

Exit code 1 on any FAIL. Statuses: PASS / WARN / FAIL.
