# Evidence Vocabulary Crosswalk (v1 — 2026-07-14)

Six evidence vocabularies accreted in this repo. This document reconciles them — **not by collapsing them onto one status word, but by routing each legacy term to the canonical axis it was really naming.** The reason six accreted is itself the finding: each team named a *different axis* and mistook it for "the" status. Once you see the axes, the six become one.

The canonical axes (see `CANONICAL_CLAIM_RECORD.md`): **`claim_layer`** (category firewall) · **`grade`** A–D (support strength, derived) · **`closure`** (provenance depth) · **`epistemic_status`** (verdict on the proposition) · **`lifecycle`** (workflow state).

> **The proof they are orthogonal, from our own repo:** card 005 is **grade A** (specialist consensus) and **closure: reconnaissance** (never source-closed on primaries) and **epistemic_status: established** and diagnoses its target smear as a **category-error**. Four different axes, four different values, one card. A `{grade, status}` 2-tuple would have silently deleted two of them — and they are exactly the two (firewall + verdict) that protect a *historical* record.

## The six vocabularies and where each term routes

### 1. A/B/C/D grade — `research-ledger/CLAIMS_TO_VERIFY.md`, the gate
Already canonical for the **`grade`** axis. Note the rubric reaches A two ways ("primary-source **or** specialist consensus") — that "or" is exactly why grade cannot also carry closure. `A/B/C/D → grade` (unchanged). Fetch-failure caps grade at B; scope lives in `grade_scope`.

### 2. Byzantium source-ledger — `Established/Probable/Contested/Unresolved/Unsupported/Category-error` + `High/Med confidence`
This vocabulary is really the **`epistemic_status`** axis (verdict on the proposition), plus a confidence shading that folds into `grade`.

| Legacy term | Axis | Canonical value |
|---|---|---|
| Established | epistemic_status | `established` |
| Probable | epistemic_status | `probable` |
| Contested | epistemic_status | `contested` |
| Unresolved | epistemic_status | `unresolved` |
| Unsupported | epistemic_status | `unsupported` |
| Category error | epistemic_status | `category-error` |
| High / Med confidence | grade (shading) | High→A/B, Med→C, per anchors |

### 3. Comparative-lens cases — `established/likely/contested/anecdotal/weak`
A conflation of `epistemic_status` and `grade`. Route by which the term is really claiming:

| Legacy term | Axis | Canonical value |
|---|---|---|
| established | epistemic_status | `established` |
| likely | epistemic_status | `probable` |
| contested | epistemic_status | `contested` |
| anecdotal | grade | `C`/`D` (single-witness) |
| weak | grade | `D` |

### 4. Contested-claim registry (PR #47) — `untriaged→triaged→verified→disputed→false_as_stated→stale→superseded→retracted`
Pure **`lifecycle`** (workflow), with two terms that are actually `epistemic_status` verdicts.

| Legacy term | Axis | Canonical value |
|---|---|---|
| untriaged / triaged / verified / stale / superseded / retracted | lifecycle | same terms |
| disputed | lifecycle→`disputed` + epistemic_status | `contested` |
| false_as_stated | epistemic_status | `unsupported` (+ lifecycle `disputed`) |

**Implication:** PR #47's registry does not need to exist as a parallel structure — `epistemic_status` + `lifecycle` on the canonical record already carry every column. Fold, don't fork.

### 5. Creator-console claim-states (Appendix A) — `Said/Reconstructed/Verified/Needs-narrowing/Speculation/Corrected`
Appendix A already concedes "Said = registration event, not an evidence level" and "Corrected = grade-change event" — i.e. these are mostly **`lifecycle`** with a grade bridge (already documented in `products/CREATOR_CLAIM_CONSOLE_MVP_SPEC.md`).

| Legacy state | Axis | Canonical value |
|---|---|---|
| Said | lifecycle | `untriaged` (registration event) |
| Reconstructed | lifecycle + grade | `triaged`, grade C/B |
| Verified | lifecycle + grade | `verified`, grade A/B at scope |
| Needs-narrowing | grade + grade_scope | `C`, narrow the scope |
| Speculation | epistemic_status | `unresolved`/`unsupported`, grade D |
| Corrected | lifecycle | grade-change event → new `date`, log in body |

### 6. Truth-Packet ladder (PR #53) — `raw→hypothesis→sourced_candidate→adversarially_tested→creator_ready→operator_approved→published→corrected→retired`
Pure **`lifecycle`**, more granular. Route to the canonical lifecycle; the extra rungs (`creator_ready`, `operator_approved`, `published`) are *distribution* states owned by the execution repo (T&P), not evidence states — they live in the cross-repo contract, not the claim record.

| Legacy rung | Axis | Canonical value |
|---|---|---|
| raw / hypothesis | lifecycle | `untriaged` |
| sourced_candidate | lifecycle | `triaged` |
| adversarially_tested | lifecycle | `verified` |
| creator_ready / operator_approved / published | (distribution — T&P) | not an evidence axis |
| corrected | lifecycle | grade-change event |
| retired | lifecycle | `retired`→`superseded`/`retracted` |

## The closure axis was missing entirely

None of the six vocabularies had a clean word for **provenance depth** — which is precisely why the Pantokrator pilot could look "done" (grade-able) while being un-excavated ("cartography not excavation"). `closure` (`open|reconnaissance|provenance-audited|source-closed`) + `source_tier_best` (0–5) + `independent_chains` are the new axis that makes "we actually read the primary text" a first-class, queryable fact rather than a buried caveat. This is the axis a *trustworthy historical* substrate cannot do without.

## One-line rule for future waves

> A new topic never needs a new grade vocabulary. It needs claim records with the five axes filled. If you find yourself inventing `Established/Likely/Weak` again, you are naming an axis that already exists — route it here.
