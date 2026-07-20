# The Canonical Claim Record (v1 — 2026-07-14)

The single structured form for every atom of the historical substrate. It ends the six-vocabulary fragmentation not by collapsing the vocabularies but by giving each claim **five typed, orthogonal axes** as machine-readable frontmatter, on top of the prose card the gate already checks. One record, one identity, one queryable index — from which every site (islamicgoldenages.org, islamlovesjesus.org, islamfromfirstprinciples.org) and every downstream consumer renders.

> **The load-bearing insight:** evidence *grade* and source *closure* are independent. Card 005 is grade **A** (specialist consensus) yet **not** source-closed on primaries. A single status word cannot carry both; five axes can.

## The record = frontmatter (typed axes) + prose body (the argument) + generated index row

Every card in `source-cards/` and `historical-calibration/cards/` carries a YAML frontmatter block. The block holds **only the irreducible typed axes that have no prose home**. Everything the gate already parses from the body — the A–D grade, the source anchors, the safe wording — is **derived into the index, never re-typed in frontmatter** (duplication is drift; derivation is truth).

```yaml
---
id: CMOS-0001                      # stable, namespaced, immutable once assigned
claim_layer: institution           # category firewall — which source layer this claim lives on
epistemic_status: established       # the verdict about the proposition itself
closure: reconnaissance             # how deep the provenance actually goes
source_tier_best: 4                 # best source tier ACTUALLY reached (0 strongest … 5 weakest)
independent_chains: 1               # count of genuinely independent witness lines
grade_scope: "Baghdad/Cairo/Damascus bimaristans, 9th–13thC"   # what the derived grade applies to
lifecycle: verified                 # workflow state of the record
supersedes: []                      # ids this record replaces
superseded_by: null                 # id that replaces this record, or null
date: 2026-07-10                    # authored/last-hardened date
---
```

## The five axes (why five, and why orthogonal)

1. **`claim_layer`** — the category firewall. Which layer of reality the claim is about; prevents "the sources teach X" collapsing into "Muslims did X" (or the reverse smear). This is also the **routing key** to a site's public layers.
   `quran | prophetic | fiqh | institution | culture | outcome | synthesis`
2. **`grade`** (DERIVED from the body's Evidence Grade section, A–D) — strength of support for the claim *as scoped*. Not in frontmatter. Scoped by `grade_scope`.
3. **`closure`** — provenance depth: how far the evidence chain has actually been walked. Orthogonal to grade (you can be grade-A on consensus with closure=reconnaissance).
   `open` (no sources yet) · `reconnaissance` (sources identified, not audited) · `provenance-audited` (chain walked to edition/translation, primary gap named) · `source-closed` (primary text + edition + translation + corroboration + counterevidence all verified)
4. **`epistemic_status`** — the verdict about the proposition. Distinct from grade (how well supported) and from lifecycle (workflow).
   `established | probable | contested | unresolved | unsupported | category-error`
5. **`lifecycle`** — the record's workflow state; where it sits in the correction pipeline.
   `untriaged | triaged | verified | disputed | stale | superseded | retracted`

Supporting scalars: `source_tier_best` (0 = surviving artifact/documentary text … 5 = discovery-only lead), `independent_chains` (two Wikipedia mirrors = 1 chain, not 2), `grade_scope`, `supersedes`/`superseded_by`, `date`.

## Deep-provenance body sections — required only where closure demands them

A smear-response card graded on specialist consensus does not need a Greek manuscript siglum; a source-closed claim does. So these three sections are **required iff `closure ∈ {provenance-audited, source-closed}`**, and optional otherwise:

- **`## Original-Language & Translation Provenance`** — the actual Greek/Arabic/Latin passage at stake, the edition, whose translation (or "card author's own rendering"). Without the original there is nothing to audit.
- **`## Dating Basis`** — colophon / internal reference / archaeology / scholarly consensus / traditional attribution. (The 005 al-Razi/981 anachronism catch was a dating-basis failure.)
- **`## Independent Corroboration & Absence`** — how many independent witness lines exist and why they're independent; and any argument-from-silence marked as such (absence ≠ counterevidence).

## Hard rules (enforced by `scripts/evals.mjs` — the ONE gate; a new schema is never a new gate)

- Frontmatter is a **genre-agnostic header**: the same block serves source cards and HCC cards (only the `id` prefix differs). Migration is the proven transcript pattern — a card **with** frontmatter is validated; a legacy card **without** it WARNs to backfill (or FAILs if dated ≥ the frontmatter cutoff).
- **Derive, never duplicate.** `grade`, `anchors`, `safe_wording` are read from the body and written to the index. If a value ever appears in both frontmatter and body, they must be equal or the gate FAILs (redundancy becomes a consistency check).
- **No `TBD`/`???` anywhere** — the placeholder scan runs on the whole file, frontmatter included. Fill or omit; never scaffold.
- `id` is immutable once assigned; corrections change the body + `lifecycle`, never the id. Supersession is an explicit `supersedes`/`superseded_by` edge, so provenance is a graph, not a rewrite.

## The forcing function (why this won't become a seventh unfilled vocabulary)

The generated index (`archive/claims.json`, built by `scripts/archive.mjs` inside the gate) is the **only** path to publication: `scripts/render.mjs` reads only the index, never cards directly, and refuses any node absent from it. **The receipt is the index row.** Frontmatter is therefore not paperwork — it is the sole route by which a claim reaches a site. Combined with "derive everything derivable," every frontmatter field is a high-value typed axis with no empty scaffold. See `EVIDENCE_VOCABULARY_CROSSWALK.md` for how the six legacy vocabularies map onto these axes.
