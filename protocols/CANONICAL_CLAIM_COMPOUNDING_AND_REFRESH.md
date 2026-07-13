# Canonical Claim Compounding and Refresh Protocol

**Status:** Governance candidate  
**Date:** 2026-07-13  
**Purpose:** Verify once to a declared standard, reuse many times, and know when reuse must stop.

---

## 1. The objective

The Civilizational Memory OS exists so verified work compounds.

Researchers and creators should not repeatedly restart the same investigation because the previous result was trapped in a conversation, scattered across notes, or published without a reusable evidence record.

The governing principle is:

> **Verify once to a declared standard. Reuse many times with visible scope, provenance, confidence, and review rules.**

This is not “verify once forever.”

Claims decay at different rates. New evidence appears. Translations improve. laws and statistics change. Interpretations remain disputed. The system must preserve both reuse and updateability.

---

## 2. The canonical claim object

A canonical claim is not merely a sentence.

It is a versioned evidence object containing:

```yaml
claim_id:
claim_text:
claim_type:
status:
verdict:
confidence:
scope:
source_layer:
canonical_owner:
created_at:
verified_at:
as_of:
review_due:
expires_at:

supporting_evidence:
opposing_evidence:
strongest_counterargument:
valid_criticism:
prohibited_overclaims:
uncertainties:
falsifiers:

short_answer:
long_answer:
retrieval_questions:
related_claims:
source_artifacts:
public_projections:
version_history:
```

Every field does not need to appear in every public view. The canonical object should preserve enough information to support responsible reuse.

---

## 3. Claim types and review behavior

### A. Textual claim

Examples:

- a verse contains a particular wording;
- a document states a named rule;
- a historical source attributes a statement to an author.

Required controls:

- edition, translation, manuscript, or source location;
- exact quotation boundary;
- translation status;
- direct versus inferred labeling.

Review trigger:

- source correction;
- translation dispute;
- newly relevant textual evidence.

### B. Historical claim

Examples:

- an institution existed;
- a person taught at a particular place;
- a report first appears within a transmission history;
- a policy had a documented effect.

Required controls:

- primary and secondary evidence;
- event/source distance;
- independence;
- chronological and geographical scope;
- alternative explanations.

Review trigger:

- new source discovery;
- major scholarly challenge;
- exposed dependency or circular citation.

### C. Interpretive claim

Examples:

- a verse has been interpreted in multiple ways;
- a school derived a rule from a text;
- this project endorses one interpretation over another.

Required controls:

- source tradition and interpreter;
- competing interpretations;
- method of derivation;
- project verdict versus historical record;
- uncertainty and moral consequences.

Review trigger:

- stronger competing interpretation;
- new linguistic or contextual evidence;
- previously omitted tradition.

### D. Empirical current claim

Examples:

- current population share;
- a present law or officeholder;
- an active restriction;
- platform policy;
- current product capability.

Required controls:

- `as_of` date;
- jurisdiction or population;
- data source;
- denominator;
- update frequency;
- expiration date.

Review trigger:

- expiration;
- source update;
- material current event.

### E. Causal claim

Examples:

- institution X caused outcome Y;
- colonial policy contributed to a modern pattern;
- a communication intervention improved audience recall.

Required controls:

- causal graph;
- confounders;
- mechanism;
- comparison class;
- counterfactual;
- strength and limits of evidence.

Review trigger:

- better causal design;
- contradictory outcomes;
- failed prediction.

### F. Normative or doctrinal claim

Examples:

- this project treats the Qur'an as the canonical divine anchor;
- public content must preserve valid criticism;
- no autonomous creator endorsement.

Required controls:

- owner and authority;
- exact scope;
- rationale;
- relationship to competing traditions or values;
- change-control requirement.

Review trigger:

- explicit governance revision;
- contradiction with higher doctrine;
- real-world failure demanding amendment.

---

## 4. Status vocabulary

Use one controlled status set.

- `seed` — observation or intuition, not yet formulated as a claim;
- `researching` — active evidence collection;
- `draft` — proposition formed but not source-closed;
- `verified` — meets the declared verification standard for its scope;
- `qualified` — verified only with important scope or wording constraints;
- `disputed` — substantial credible disagreement remains;
- `provisional` — usable for bounded experimentation but not durable publication;
- `stale` — review date passed or current conditions changed;
- `superseded` — replaced by a newer canonical version;
- `retracted` — evidence no longer supports the claim;
- `false_as_stated` — a stronger or broader formulation is unsupported;
- `unknown` — evidence is insufficient for a verdict.

Do not use `verified` as a synonym for “we currently like this.”

---

## 5. Confidence vocabulary

Recommended labels:

- established;
- strongly supported;
- probable;
- plausible;
- evenly disputed;
- weakly supported;
- unsupported;
- contradicted;
- unknown.

Confidence describes evidence strength within the declared scope. It does not erase normative disagreement.

---

## 6. Verification standards

A claim is ready for reusable `verified` or `qualified` status only when:

1. the exact proposition is atomized;
2. the source layer is identified;
3. scope and comparison class are explicit;
4. primary evidence is inspected when reasonably available;
5. secondary scholarship is source-diverse and relevant;
6. the strongest opposing case is recorded;
7. dependencies and circular citations are checked;
8. uncertainty and valid criticism are preserved;
9. prohibited overclaims are written;
10. falsifiers or update conditions are stated;
11. the review policy matches the claim's decay rate;
12. a second pass can reproduce the reasoning from the record.

High-consequence public claims may require independent review or operator approval even after these conditions are met.

---

## 7. Claim freshness classes

### F0 — effectively immutable source identity

Examples:

- repository governance decision;
- verbatim archival record;
- canonical stable ID.

Review only on explicit challenge or migration.

### F1 — stable historical/textual

Default review horizon: long interval or event-triggered.

Examples:

- established dates;
- quotations;
- mature manuscript facts;
- documented institutional existence.

### F2 — evolving scholarship

Default review horizon: annual or major-publication-triggered.

Examples:

- scholarly consensus;
- disputed chronology;
- historical causal synthesis.

### F3 — slowly changing present conditions

Default review horizon: quarterly or semiannual.

Examples:

- demographic estimates;
- institutional descriptions;
- policy landscapes.

### F4 — fast-changing

Default review horizon: days to monthly.

Examples:

- officeholders;
- active conflict claims;
- live restrictions;
- prices;
- platform policies;
- current software capabilities.

Every F3/F4 public projection must display an `as_of` date.

---

## 8. Reuse policy

A downstream artifact may reuse a canonical claim without reopening the full investigation when:

- status permits reuse;
- scope matches;
- freshness is valid;
- the artifact does not strengthen the wording;
- source and stable ID remain linked;
- prohibited overclaims are respected;
- no known contradictory update has appeared.

The downstream artifact should record:

- `claim_id`;
- canonical version or commit;
- retrieval date;
- any additional contextual language;
- whether the projection is shorter than the canon.

> **The short answer must inherit the honesty of the long answer.**

---

## 9. Re-verification triggers

Reopen a claim when:

- review or expiration date passes;
- credible new evidence appears;
- a specialist identifies a source or method error;
- a public challenge exposes an omitted counterargument;
- the claim is moved into a higher-consequence context;
- scope changes;
- a translation or source attribution changes;
- a downstream projection repeatedly produces misunderstanding;
- reality contradicts a causal prediction;
- the claim depends on a current fact that may have changed.

Do not reopen merely because a new content format needs the same conclusion.

---

## 10. Correction and supersession

Never overwrite a consequential error without leaving a record.

A correction should state:

- previous claim and version;
- new claim and version;
- what changed;
- why it changed;
- whether public projections are affected;
- which artifacts require regeneration;
- whether the error was factual, interpretive, scoped, translational, causal, or freshness-related.

Use:

- `superseded` when the previous version was reasonable but outdated or improved;
- `retracted` when evidence no longer supports it;
- `false_as_stated` when only the broader wording failed.

Corrections are trust assets when they are visible and propagated.

---

## 11. Full-fidelity prose preservation

A canonical claim object and a full strategic synthesis serve different purposes.

The claim object enables reliable reuse.

The source synthesis preserves:

- conceptual architecture;
- memorable phrasing;
- inquiry path;
- nuance;
- analogies;
- moral force;
- candidate ideas not yet promoted into claims.

Therefore:

> **Do not delete the full synthesis after extracting claims. Link the claims back to the prose that made them intelligible.**

Execution agents may propose a refined public version, but the original synthesis should remain available unless an explicit redaction or correction is required.

---

## 12. Compounding metrics

Track whether the memory system is reducing repeated work.

Suggested measures:

- percentage of new artifacts using existing canonical claims;
- research hours avoided through reuse;
- stale-claim detection rate;
- number of downstream artifacts updated after a correction;
- claim retrieval latency;
- unsupported claims blocked before publication;
- disputes resolved by existing provenance;
- proportion of claims with explicit falsifiers;
- number of inquiry insights promoted into reusable frameworks.

Avoid turning claim count into the target. Goodhart's law applies.

A smaller set of load-bearing, reusable claims may be more valuable than thousands of trivia records.

---

## 13. Minimal claim record template

```markdown
# CLM-YYYY-NNN — Exact claim

**Status:**  
**Verdict:**  
**Confidence:**  
**Type:**  
**Source layer:**  
**Scope:**  
**Verified:**  
**As of:**  
**Review due:**

## Exact proposition

## Why it matters

## Supporting evidence

## Strongest opposing evidence

## Calibrated synthesis

## Valid criticism

## Prohibited overclaims

## Uncertainty and falsifiers

## Reuse language

### 15 seconds

### 60 seconds

### Full version

## Dependencies and related claims

## Version history
```

---

## 14. North star

> **The purpose of verification is not to finish a document. It is to create a trustworthy unit of memory that can be reused, challenged, corrected, and translated into action without starting civilization's reasoning over again.**
