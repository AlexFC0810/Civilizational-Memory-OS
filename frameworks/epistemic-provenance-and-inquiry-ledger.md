# Epistemic Provenance and the Inquiry Ledger

**Status:** Working framework / governance candidate  
**Date:** 2026-07-13  
**Parent frameworks:**
- `frameworks/load-bearing-truth-kernel.md`
- `frameworks/historical-calibration-and-restoration-gap.md`
- `foundations/WHAT_IS_ISLAM_QURANIC_ONTOLOGY.md`

---

## Purpose

The repository must preserve more than finished prose.

A conclusion without its path of discovery is fragile. Future researchers can repeat the words while losing:

- the question that unlocked the problem;
- the distinction that dissolved a false contradiction;
- the evidence that changed confidence;
- the rejected formulations;
- the uncertainty boundary;
- the mechanism that transferred to other cases.

> **Do not preserve only the answer. Preserve the inquiry that made the answer possible.**

This framework records the **epistemic provenance** of major outputs: where the idea came from, how it was decomposed, what evidence was considered, what failed, what changed, and why the final synthesis deserves its confidence level.

---

## Core insight

Human vocabulary is finite. Important mechanisms may be sensed before they are named.

The system must therefore capture both:

1. **named concepts** — first principles, Pareto selection, source calibration, temporal collapse, civilizational snapshot fallacy;
2. **pre-conceptual signals** — “something is being collapsed here,” “this example is doing too much work,” “the conclusion feels true but the source is wrong,” “history is being used as either an alibi or a weapon.”

> **A missing term must not become a missing observation.**

The inquiry ledger should preserve the raw intuition first, then propose candidate names and test whether the name improves retrieval, explanation, and transfer.

---

## The Inquiry DNA stack

Every major framework, claim card, or public synthesis should record the following.

### 1. Seed

What observation, frustration, contradiction, transcript, historical fact, or user intuition initiated the inquiry?

### 2. Load-bearing question

Which question changed the shape of the problem?

Examples:

- “When you say Islam, which layer do you mean?”
- “Is this a time series or a weaponized snapshot?”
- “What does the Qur'an explicitly say?”
- “What could this civilization once reproduce that it can no longer reproduce?”

### 3. First-principles decomposition

Break the object into irreducible categories before arguing about it.

Typical axes:

- normative authority;
- historical probability;
- interpretation;
- institution;
- implementation;
- outcome;
- comparison class;
- restoration target.

### 4. Source routing

Record which source answers which question.

- Qur'an: normative root;
- early documentary evidence: event proximity;
- hadith and sira: transmitted memory and later authority;
- tafsir and fiqh: interpretation and rule formation;
- historical records: institutions and outcomes;
- current data: present implementation;
- testimony and clips: leads, not terminal proof.

### 5. Adversarial alternatives

What are the strongest competing explanations or interpretations?

Do not preserve only the version that won.

### 6. Breakpoints

Which claims failed, weakened, or required narrower wording?

Record:

- the original formulation;
- why it failed;
- the corrected formulation;
- the evidence or distinction that caused the update.

### 7. Confidence movement

What raised or lowered confidence?

Use explicit states:

- established;
- strongly supported;
- probable;
- plausible;
- disputed;
- weak;
- unsupported;
- false as stated;
- unknown.

### 8. Compression

What is the smallest statement that preserves the long-form verdict without becoming more certain than the evidence?

### 9. Transfer

What new question, distinction, or recognition rule can be reused on another topic?

### 10. Restoration

What action, institution, norm, or capability should follow from the recovered truth?

---

## Inquiry Ledger schema

```yaml
inquiry_id:
title:
date_opened:
status:

seed:
raw_intuition:
unnamed_pattern:
candidate_names:

load_bearing_question:
first_principles_decomposition:

source_routing:
  quran:
  early_evidence:
  hadith_sira:
  tafsir_fiqh:
  historical_record:
  current_data:
  commentary_leads:

strongest_supporting_case:
strongest_opposing_case:
alternative_explanations:

breakpoints:
  - original_claim:
    failure_mode:
    corrected_claim:
    update_trigger:

confidence_before:
confidence_after:
confidence_reasons:

final_synthesis:
compressed_kernel:
prohibited_overclaims:
falsifiers:
transfer_rule:
restoration_target:

public_artifacts:
linked_claim_cards:
linked_frameworks:
open_questions:
```

---

## Named mechanisms emerging from the current inquiry

### Source-layer collapse

A claim moves from hadith, law, state, custom, or individual behavior into “the Qur'an says” without showing the transition.

### Temporal collapse

A medieval empire, modern state, prophetic event, and current citizen are treated as one timeless actor.

### Norm–history–implementation collapse

What should be true, what probably happened, and what later institutions did are treated as the same question.

### Civilizational snapshot fallacy

A selected regime, crime, or period becomes the permanent essence of a civilization.

### Golden-age alibi

Past achievement is used to evade present failure.

### Presentist essentialism

Present failure is projected backward as the timeless nature of the root tradition.

### Defender bottleneck

Truth appears to lose because the defender lacks memory, delivery, or debate training—not because the claim was false.

### Retrieval inequality

Propaganda is compressed and emotionally memorable; truth remains scattered across books, caveats, and disciplines.

### Vocabulary bottleneck

An important insight is not captured because the observer lacks the exact technical term.

### Inquiry evaporation

The finished answer survives while the questions, failed hypotheses, and mechanism of discovery disappear.

---

## Mandatory provenance block for flagship outputs

Every flagship page should include a collapsible **How We Got Here** section:

1. the initiating question;
2. the source-layer decomposition;
3. the strongest evidence on both sides;
4. the turning point in the inquiry;
5. what remains uncertain;
6. what would change the verdict;
7. what transferable method emerged.

This is not decorative transparency.

It allows the audience to learn **how to think**, not merely what conclusion to repeat.

---

## Quality test

An artifact fails epistemic provenance when a future reader can quote its conclusion but cannot answer:

- Why was this the right question?
- Which source layer carried the claim?
- Which alternative was strongest?
- What evidence changed the synthesis?
- What remains uncertain?
- What would falsify it?
- Which method transfers to the next case?

> **The durable unit of civilizational memory is not the fact alone. It is the fact plus the path that made it intelligible.**
