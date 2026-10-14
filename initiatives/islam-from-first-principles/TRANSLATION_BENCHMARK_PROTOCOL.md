# Translation Lab — Minimum Viable Benchmark and Review Gate (v0.1)

**Goal:** support decisions on whether an original translation improves on existing alternatives without promising superiority from an LLM's self-assessment.  
**Status:** protocol only; no actual blinded reviewers, scores, or approvals as of 2026-10-14.  
**First passage:** [Al-Fātiḥa draft v0.2](AL_FATIHA_DRAFT_V0_2.md).  
**Owner:** [Translation Lab issue #109](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/109).

## Sampling
Start with full al-Fātiḥa and the existing anchor passage 6:38. These are handpicked and **cannot establish general excellence**. Independent assessors select a balanced blind sample: short/long verses; law, mercy, divine names, poetic imagery, polemical and narrative passages; genuine lexical ambiguity; different canonical readings; gender and pronoun reference; rhetorical shifts. Include high-conflict sections not selected by the founder.

## Review conditions
- Use anonymous identifiers A/B/C for our translation and benchmark translations, with edition details retained for later disclosure; randomize display order. Observe rights of copyrighted comparison works, quote very small passages under appropriate permissions or licensed access and do not republish whole translations.
- Each reviewer sees Arabic source, intended reading, adjacent context, and identical instructions. Reviewers disclose competence, institutional/theological commitments and conflicts.
- At least two **independent** Arabic/Qur'an specialists on contested cases, plus experienced literary English editing. Prefer varied approaches to exegesis. Do not portray a software pass as independent human expert review.
- Negative findings remain attached to the same record (including correction and retraction history).
- Reviewer score sheets live with versioned citations and unedited raw notes; a summary can be generated but cannot replace the underlying evidence.

## 0–4 dimensions, graded *separately*

| Dimension | Test |
| --- | --- |
| **Semantic fidelity** | Meaning, agents, modality, tense/aspect, polarity and reference preserved without additions |
| **Morphology and syntax** | Arabic grammatical relationships, word emphasis, active/passive contrasts accurately understood |
| **Ambiguity integrity** | Does not silently resolve genuine source ambiguities or canonical recitation differences |
| **Contextual integrity** | Does not create contradictions by mistranslating the neighboring passages |
| **Idiomatic readability** | Natural contemporary English without doctrinal smoothing or avoidable awkwardness |
| **Literary force** | Preserves rhetorical structure, repetitions, voice shifts and register without pretending to imitate Arabic rhyme |
| **Editorial auditability** | Exact source edition, alternatives and explanatory additions clearly traceable |

Rubric for each: **0** unacceptable, **1** major errors, **2** usable with material revision, **3** good with minor revision, **4** unusually clear and defensible. **Do not combine scores into a single "best" claim** unless preregistered weighting and inferential limits are disclosed.

## Automatic publication blockers regardless of average score
- Wrong, altered, missing, unlicensed or unattributed Arabic text.
- English asserts specific persons, groups, rulings or motives not established by the Arabic without explanatory labeling.
- Arabic canonical reading variation material to meaning is suppressed.
- Objection from a qualified reviewer on a material error remains unanswered.
- Unsupported certainty added to historical, theological or clinical interpretation.
- The editorial team treats reviewer disagreement as an inconvenience and hides it from the final record.

## Reviewer form template

```yaml
review_id: independent-id
passage: '1:7'
source_edition: 'NOT_YET_PINNED'
candidate: 'A'
reviewer_qualification: ''
independence_confirmed: false
scores:
  semantic_fidelity: null
  morphology_syntax: null
  ambiguity_integrity: null
  contextual_integrity: null
  idiomatic_readability: null
  literary_force: null
  editorial_auditability: null
critical_errors: []
counter_readings: []
verdict: 'pending'
recommendation: ''
correction_refs: []
review_date: null
```

## Versioning and process
1. Lock the Arabic corpus, numbering convention, qirāʾa and provenance (link/hash). License must be carried forward in repackaged data and sites.
2. Generate independent original English candidate; notes must identify lexical decisions.
3. Linguistic adversarial red team explores likely mistakes; **do not** quietly revise the frozen candidate after reading benchmark translations.
4. Specialist blind review, written objections and signed editorial disposition (accept/reject/explain each concern).
5. Re-run on independently sampled verses, measure failure mode recurrence, and keep revisions versioned.
6. Only release with provenance/correction page and explicit label "English interpretation/translation"; no "best in the world" marketing claim absent extraordinary external evidence.

**Measure real accuracy improvements, not how intensely the reader agrees with a theological position.**
