# Epistemic Architecture and Knowledge Pipeline

> **⛓ BINDING HEADER (added 2026-07-20 by the CoS; body unedited — issue #71).** This file arrived by direct commit to main (c063a22) without a PR, bypassing the wave-absorption protocol. Its content is sound and is retained in full. Two bindings apply:
> 1. **Vocabulary crosswalk — this document describes the SAME machine as `MASTER_PLAN.md`'s five planes, in different words.** Its chain maps as: *record* → **P1 ACQUIRE**; *adjudication* → **P2 ADJUDICATE**; *synthesis* + *canon* → **P3 PRESERVE**; *deployment* → **P4 EXPRESS**; *revision* → **P5 GOVERN**. Where its terms and the five planes conflict, the planes govern (one queue, one vocabulary — see `research-ledger/EVIDENCE_VOCABULARY_CROSSWALK.md`).
> 2. **No gate authority.** This is methodology, not an enforcement layer. `scripts/evals.mjs` remains the ONE gate; `research-ledger/DEPLOYMENT_READINESS_GATE.md` remains its spec. Nothing here creates a second pass/fail path, and no claim becomes deploy-facing by satisfying this document alone.
>
> Registered at grade D in `research-ledger/CLAIMS_TO_VERIFY.md` (intake 2026-07-20).

**Status:** Canonical operating doctrine  
**Created:** 2026-07-19  
**Purpose:** Define how Civilizational Memory OS moves from surviving evidence to justified claims, integrated synthesis, public memory, action, and correction without allowing quotations, inherited narratives, or elegant AI prose to outrun the historical record.

---

## 1. Governing thesis

> **The repository must preserve not only what sources say, but the full chain by which a source becomes a claim, a claim becomes a model, a model becomes a narrative, and a narrative becomes action.**

The system is not merely an archive, bibliography, encyclopedia, content factory, or collection of compelling ideas.

It is a **provenance-aware civilizational intelligence system**.

Its core epistemic chain is:

`record -> adjudication -> synthesis -> canon -> deployment -> revision`

The smallest reconstructable truth path is:

`public statement -> canonical verdict -> synthesis model -> adjudicated claims -> passages/artifacts/data -> edition/witness/provenance`

Every important conclusion should be traversable backward. Every important source should be traceable forward to the claims, models, narratives, and decisions it affects.

---

## 2. The decisive missing layer

A common but dangerous architecture contains only two layers:

1. evidence;
2. synthesis.

That is insufficient.

Raw evidence does not interpret itself. A quotation may be mistranslated, rhetorical, late, atypical, context-dependent, dependent on another source, contradicted elsewhere, or incapable of supporting the conclusion attached to it.

Synthesis must therefore never reason directly from an undifferentiated pile of sources.

Between record and synthesis sits the repository's most important truth-control mechanism:

> **The Adjudication Layer: the layer that determines what the record actually permits us to say.**

This is where the system separates:

- existence from authenticity;
- authenticity from meaning;
- meaning from representativeness;
- representativeness from causation;
- causation from moral judgment;
- evidence from rhetoric.

The repository's moat will not be having the most links. It will be having the strongest reconstructable path from evidence to judgment.

---

# Part I — The Three Core Epistemic Layers

## 3. Layer One — Record

**Question:** What survives, and what exactly is it?

The Record Layer preserves the recoverable historical and contemporary evidence before it is compressed into conclusions.

It includes:

- manuscript images and transcriptions;
- critical editions and textual apparatus;
- inscriptions, coins, papyri, objects, and archaeological reports;
- laws, charters, court records, waqf deeds, tax records, and administrative documents;
- complete books, letters, lectures, notebooks, and correspondence;
- official statistics, inspection reports, protocols, datasets, and institutional records;
- oral histories and recorded testimony with provenance;
- photographs, video, and audio with chain-of-custody metadata;
- modern scholarship and historiography;
- discovery-only sources kept visibly separate from evidentiary sources.

### Record-layer rule

> **Preserve the source before extracting the lesson.**

Every source record should include:

```yaml
source_id:
title:
author_or_issuer:
date_composed:
date_of_surviving_witness:
place:
language:
genre:
edition_or_version:
translator:
archive_or_repository:
stable_locator:
access_status:
provenance:
source_tier:
known_dependencies:
incentives_and_biases:
preservation_limitations:
rights_and_reuse_status:
checksum_or_snapshot:
notes:
```

The Record Layer does not decide whether a source is correct. It establishes what the source is, where it came from, what version is being used, and how it can be re-opened.

---

## 4. Layer Two — Adjudication

**Question:** What does the record justify us in claiming?

This is the bridge between archive and intelligence.

The Adjudication Layer converts source material into **atomic, contestable, confidence-rated knowledge objects**.

It includes:

- passage cards;
- translation cards;
- event cards;
- institution cards;
- person and intellectual-profile cards;
- practice and custom cards;
- quantitative finding cards;
- claim cards;
- source-dependency graphs;
- contradiction and variant records;
- representativeness assessments;
- causal assessments;
- counterevidence and falsifiers;
- permitted-public-wording fields.

### Adjudication-layer rule

> **A source can establish that someone said something. It does not automatically establish that the statement was typical, sincere, implemented, causal, or civilizationally dominant.**

Every adjudicated claim should include:

```yaml
claim_id:
exact_claim:
claim_type:
  # textual | event | institutional | quantitative | causal |
  # comparative | theological | moral | rhetorical
scope:
  time:
  geography:
  population_or_institution:
supporting_evidence:
opposing_evidence:
independent_evidentiary_chains:
translation_or_semantic_issues:
directness:
representativeness:
alternative_explanations:
causal_mechanism:
confounders:
falsifier:
status:
confidence:
confidence_rationale:
permitted_public_wording:
prohibited_overstatement:
review_history:
```

### Claim statuses

- `lead` — worth investigating; not evidence-closed;
- `source-found` — relevant source located, not yet audited;
- `source-open` — evidence is incomplete or material disputes remain;
- `source-closed-provisional` — current source universe supports a bounded conclusion;
- `source-closed-strong` — multiple independent chains support the claim and major objections have been tested;
- `contested` — serious rival interpretations remain;
- `not-established` — available evidence does not justify the claim;
- `falsified` — decisive evidence defeats the claim;
- `superseded` — replaced by a better-formulated or better-supported claim.

### The adjudication distinction stack

The system must separately assess:

1. **Authenticity** — is the source or passage genuine?
2. **Textual meaning** — what does it say in linguistic and literary context?
3. **Speaker position** — is it descriptive, normative, polemical, hypothetical, private, public, or strategic?
4. **Representativeness** — how typical was this view or practice?
5. **Implementation** — did institutions or populations act on it?
6. **Causation** — did it materially produce the outcome?
7. **Distribution** — who benefited, who paid, and who remained invisible?
8. **Comparative significance** — exceptional relative to what baseline?
9. **Moral significance** — what evaluative premises produce the judgment?

No layer may be silently substituted for another.

---

## 5. Layer Three — Synthesis

**Question:** What pattern best explains the adjudicated record?

The Synthesis Layer connects source-closed and explicitly bounded claims into:

- causal models;
- periodizations;
- intellectual genealogies;
- institutional operating systems;
- worldview maps;
- comparative civilizational judgments;
- rise, corruption, collapse, and renewal models;
- working theories;
- grand narratives;
- modern design implications.

### Synthesis-layer rule

> **Synthesis may be bold, but it may not be epistemically stronger than the adjudicated claims beneath it.**

Every major synthesis should state:

- thesis;
- scope;
- causal spine;
- load-bearing adjudicated claims;
- strongest rival synthesis;
- adverse and breaker evidence;
- assumptions and moral premises;
- domains where the model works;
- domains where it fails or remains untested;
- confidence;
- what would change the conclusion;
- downstream implications.

### Synthesis statuses

- `exploratory hypothesis`;
- `working synthesis`;
- `adversarially tested synthesis`;
- `provisional canon`;
- `accepted canon`;
- `contested internally`;
- `superseded`.

The synthesis layer is where Civilizational Memory OS performs its distinctive work: not neutrality, not apologetics, but **evidence-bound conviction**.

---

# Part II — The Full Institutional Pipeline

## 6. Layer Four — Canon

**Question:** What does the institution currently stand behind?

Canon is not eternal dogma. It is the versioned set of conclusions that have crossed defined evidence and adversarial-review thresholds.

Canon should contain:

- current institutional position;
- concise thesis;
- bounded claim language;
- evidence map;
- causal model;
- strongest rival view;
- unresolved questions;
- revision history;
- superseded versions;
- public citation package.

### Canon rule

> **Canon is a responsibility threshold, not a certainty performance.**

The repository should never hide uncertainty, but neither should it use uncertainty as an excuse to avoid judgment.

---

## 7. Layer Five — Deployment

**Question:** How does truth become cognitively usable and socially consequential?

Deployment translates canonical knowledge into:

- websites;
- claim pages;
- essays and books;
- curricula;
- documentaries and scripts;
- timelines and maps;
- visual explainers and carousels;
- speeches and debate packets;
- institutional prototypes;
- policy proposals;
- public datasets and APIs;
- prompts and evaluation suites.

### Deployment rule

> **No public claim may exceed the strongest source-closed internal verdict.**

Each deployed artifact should retain a traceable claim manifest. Compression may remove detail, but it may not change epistemic status.

Public language can be stronger when the evidence is stronger, not when the campaign needs more emotional force.

---

## 8. Layer Six — Revision

**Question:** How does reality correct the institution?

The Revision Layer prevents canon from becoming identity armor.

It includes:

- correction requests;
- newly discovered sources;
- source-link decay reports;
- translation disputes;
- expert-review notes;
- replication failures;
- contradiction alerts;
- red-team reports;
- supersession records;
- change logs;
- post-publication audits;
- model-performance evaluations.

### Revision rule

> **A correction must become permanent institutional memory, not a temporary conversational apology.**

Every correction should record:

```yaml
correction_id:
affected_claims:
affected_syntheses:
affected_public_assets:
trigger:
old_position:
new_position:
evidence:
severity:
why_the_system_missed_it:
process_change:
reviewer:
date:
```

Revision closes the loop:

`record -> adjudication -> synthesis -> canon -> deployment -> new evidence and criticism -> revision -> improved record and adjudication`

---

# Part III — How to Reconstruct a Thinker's Worldview

## 9. Complete-corpus intellectual profiles

Compiling all recoverable writings of Francis Bacon, René Descartes, Ibn Sina, al-Ghazali, Ibn Rushd, al-Jahiz, Ibn al-Haytham, or another thinker can materially improve interpretation—but a quotation database alone will still produce false confidence.

The goal is not **all quotes**. The goal is a **diachronic, genre-aware, provenance-aware intellectual model**.

For each thinker, preserve:

1. corpus registry;
2. chronology of writings;
3. textual witnesses and editions;
4. public versus private writing;
5. genre and intended audience;
6. recurring concepts and vocabulary;
7. explicit moral and theological commitments;
8. statements about nature, animals, knowledge, power, usefulness, and human purpose;
9. apparent contradictions;
10. development or reversal over time;
11. institutional setting and patronage;
12. intellectual predecessors;
13. students, readers, translators, and later reception;
14. policies or practices plausibly influenced;
15. claims later attributed to the thinker that the corpus does not support.

### Intellectual-profile schema

```yaml
person_id:
name:
life_dates:
regions:
roles:
traditions:
corpus_completeness:
works:
chronological_phases:
core_concepts:
worldview_propositions:
internal_tensions:
changes_over_time:
institutional_context:
patrons_and_incentives:
influence_claims:
reception_history:
misattributions:
representativeness_of_era:
confidence:
```

### Critical warning

> **A famous thinker is not automatically the worldview of a civilization.**

Bacon or Descartes cannot stand in for all of Europe. Ibn Sina, al-Ghazali, or Ibn Rushd cannot stand in for all Islamic civilization.

The system must distinguish:

- what an individual argued;
- what intellectual networks taught;
- what rulers funded;
- what jurists regulated;
- what institutions repeated;
- what ordinary people practiced;
- what critics condemned;
- what later societies remembered or distorted.

---

## 10. The five-witness civilizational triangulation

To infer a civilization's operative worldview, compare at least five witness classes:

### 1. Normative witness

What scripture, theology, philosophy, law, and moral teaching said ought to happen.

### 2. Institutional witness

What states, courts, schools, hospitals, waqfs, guilds, laboratories, markets, and charitable institutions funded, regulated, and repeated.

### 3. Practice witness

What people actually did, including ordinary, hidden, and illicit practices.

### 4. Critical witness

What insiders, reformers, victims, minorities, dissidents, and opponents condemned or demanded be changed.

### 5. Fruit witness

What outcomes appeared across time: knowledge, health, mercy, coercion, inequality, ecological effects, protection of vulnerable beings, and correction capacity.

The civilization-level model must explain all five.

This prevents three common errors:

- reducing a civilization to its ideals;
- reducing a civilization to its worst violations;
- reducing a civilization to a few celebrated elites.

---

# Part IV — Analytical Lenses and Repository Objects

## 11. Epistemic pipeline versus historical lenses

The epistemic pipeline answers **how we know**:

`record -> adjudication -> synthesis -> canon -> deployment -> revision`

Existing historical lenses answer **what we analyze**:

`Seed -> System -> Fruit -> Renewal`

and:

`Blueprint -> Builder -> Building`

These architectures are complementary, not competing.

Example:

- **Record:** Qur'anic passages, hadith corpora, legal manuals, veterinary manuscripts, waqf deeds, court cases, modern laboratory protocols.
- **Adjudication:** what each source establishes about animal standing, cruelty, use, enforcement, and actual practice.
- **Synthesis:** how sacred accountability, law, education, institutions, economic incentives, and moral disengagement interact.
- **Seed:** theological ontology and moral command.
- **System:** law, waqf, veterinary knowledge, norms, enforcement, and institutions.
- **Fruit:** observed protection, care, exploitation, cruelty, or reform.
- **Renewal:** what must be rebuilt under modern conditions.
- **Blueprint:** normative revelation or philosophy.
- **Builder:** interpreters, rulers, scientists, workers, and citizens.
- **Building:** actual historical and contemporary civilization.

---

## 12. Core repository object model

The repository should standardize the following objects:

- `SOURCE` — a recoverable evidentiary item;
- `WITNESS` — a manuscript, edition, artifact, recording, dataset version, or documentary manifestation;
- `PASSAGE` — bounded source content with context;
- `TRANSLATION` — a rendering with explicit linguistic choices;
- `EVENT` — a dated occurrence with competing reconstructions;
- `PERSON` — an actor with roles, chronology, corpus, and networks;
- `INSTITUTION` — a durable coordinated system;
- `PRACTICE` — repeated behavior, whether lawful or unlawful;
- `CLAIM` — an atomic proposition capable of support or defeat;
- `MODEL` — a causal or comparative explanation;
- `SYNTHESIS` — an integrated interpretation;
- `CANON` — an institutionally endorsed, versioned position;
- `ASSET` — a public or operational deployment;
- `CORRECTION` — a revision event with root-cause analysis.

Relationships should be machine-readable:

`SOURCE supports/weakens CLAIM`

`CLAIM composes/weakens MODEL`

`MODEL supports/rivals SYNTHESIS`

`SYNTHESIS becomes/supersedes CANON`

`CANON authorizes ASSET`

`CORRECTION modifies any upstream or downstream object`

---

## 13. Dependency and blast-radius tracking

When a source, translation, or claim changes, the system should identify every downstream dependency.

Example:

`translation correction -> claim confidence reduced -> causal model weakened -> canonical paragraph revised -> six graphics flagged for update`

This is essential because narrative systems otherwise preserve errors long after researchers have corrected them.

Every object should have:

- stable ID;
- version;
- status;
- owner or reviewing agent;
- upstream dependencies;
- downstream dependents;
- last-reviewed date;
- confidence;
- unresolved objections.

---

# Part V — Truth-Control Rules

## 14. Non-negotiable epistemic rules

1. **No quotation without context, edition, and provenance when load-bearing.**
2. **No source count without source-independence analysis.**
3. **No inference from elite texts directly to mass practice.**
4. **No inference from a law's existence directly to its enforcement.**
5. **No inference from a moral violation directly to the absence of a moral norm.**
6. **No inference from a moral norm directly to successful implementation.**
7. **No civilizational claim from one region, dynasty, century, school, or viral incident.**
8. **No causal claim without mechanism, rival explanations, and temporal logic.**
9. **No comparative claim without a matched baseline.**
10. **No public compression that upgrades uncertainty.**
11. **No cherished thesis without breaker evidence.**
12. **No correction without updating downstream assets and process.**

---

## 15. The strongest-possible-source principle

The repository should prefer the strongest obtainable evidence, not merely evidence sufficient to make a post.

For a major thinker:

- complete or near-complete corpus before representative quotations;
- critical editions before quote compilations;
- original language before translation-only claims;
- chronological development before static worldview labels;
- reception history before claims of influence.

For an institution:

- charter and funding records;
- operating rules;
- staffing and beneficiary records;
- physical remains and archaeology;
- contemporary descriptions;
- complaints and failures;
- longitudinal persistence.

For a cruelty or abuse claim:

- original footage or record;
- date and location;
- identity of institution or responsible actors where lawfully established;
- official investigation or inspection record;
- protocol or procedure;
- corroboration;
- legal context;
- outcome;
- uncertainty and chain-of-custody.

A viral clip may generate a research lead. It cannot by itself carry a civilizational verdict.

---

## 16. Truth quality function

A knowledge object should be evaluated on:

`Truth quality = provenance × contextual integrity × source independence × semantic accuracy × representativeness × causal validity × comparative calibration × adversarial survival × revision capacity`

This is multiplicative in spirit.

A catastrophic weakness in one load-bearing dimension can invalidate an otherwise impressive packet.

---

# Part VI — The Animal Mercy and Civilizational Power Pilot

## 17. Why this is an ideal pilot

Animal treatment is a high-value test case because it intersects:

- scripture and theology;
- philosophy of nature;
- scientific method;
- medicine and public health;
- law and enforcement;
- economic incentives;
- institutional moral disengagement;
- childhood moral formation;
- power over beings that cannot testify or retaliate;
- modern replacement technologies;
- civilizational claims about progress.

It makes visible the distinction between technical capacity and moral capacity.

The pilot's governing line is:

> **An animal's inability to hold you accountable does not mean God will not.**

## 18. Pilot source universes

The project should build parallel source universes for:

### A. Abrahamic and Islamic moral ontology

- Qur'anic animal passages;
- hadith corpora with isnad and grading distinctions;
- Biblical and Jewish animal-protection texts;
- early commentary;
- legal doctrine;
- sermons and moral literature;
- internal disputes and implementation gaps.

### B. Islamic civilizational record

- veterinary and zoological manuscripts;
- legal manuals and fatwas;
- waqf deeds and charitable provisions;
- court and market records;
- urban animal infrastructure;
- working-animal regulation;
- slaughter, hunting, experimentation, and pest-control norms;
- stories of mercy, cruelty, enforcement, and failure;
- regional and chronological variation.

### C. Early modern and Enlightenment worldviews

- complete-corpus profiles of major natural philosophers;
- theology of creation;
- mechanism and animal mind;
- experimental philosophy;
- dominion, stewardship, usefulness, mastery, and progress;
- vivisection debates;
- critics within Europe;
- institutional pathways from thought to practice.

### D. Modern animal experimentation

- statutes and regulatory exclusions;
- official annual-use reports;
- laboratory protocols;
- inspection and enforcement records;
- categories of pain and distress;
- historical experiments;
- scientific validity and translation rates;
- industry and grant incentives;
- worker testimony;
- replacement, reduction, and refinement methods;
- organoids, tissue chips, computational methods, and human-derived systems.

### E. Comparative civilizational cases

- China and the Wang Wang case, bounded to verified facts;
- United States and European research regimes;
- Muslim-majority countries' laws and actual enforcement;
- India and traditions of non-harm;
- other matched cases that prevent East/West or believer/nonbeliever caricatures.

## 19. Required pilot outputs

1. source registry;
2. incident ledger;
3. thinkers' corpus registry;
4. animal-ontology passage corpus;
5. laws-and-enforcement matrix;
6. experimentation protocol taxonomy;
7. institutional-incentive map;
8. comparative chronology;
9. claim ledger;
10. adversarial synthesis packet;
11. canonical narrative;
12. source-locked public visual series;
13. modern institutional design proposal;
14. corrections and unknowns register.

---

# Part VII — Repository Architecture

## 20. Recommended top-level knowledge flow

```text
sources/
  registries/
  primary-texts/
  artifacts/
  datasets/
  official-records/
  scholarship/

adjudication/
  passages/
  translations/
  events/
  people/
  institutions/
  practices/
  claims/
  dependency-graphs/
  breaker-evidence/

synthesis/
  causal-models/
  comparative-models/
  intellectual-genealogies/
  research-packets/
  working-syntheses/

canon/
  doctrines/
  narratives/
  positions/
  superseded/

deployment/
  websites/
  essays/
  curricula/
  visual-series/
  debate-packets/
  institutional-designs/

revision/
  corrections/
  red-teams/
  expert-reviews/
  link-and-source-audits/
  supersession-ledger/
```

Existing directories should not be reorganized destructively merely to match this tree. The immediate objective is to map current folders and objects onto this logic, then migrate only where the gain exceeds the disruption.

---

## 21. Mandatory manifests

Every major synthesis and public asset should contain or link to:

- `CLAIM_MANIFEST`;
- `SOURCE_MANIFEST`;
- `UNCERTAINTY_REGISTER`;
- `BREAKER_EVIDENCE`;
- `DEPENDENCY_MAP`;
- `REVISION_HISTORY`.

This converts transparency from a writing style into infrastructure.

---

# Part VIII — Implementation Sequence

## 22. Highest-leverage order of operations

Do not begin by ingesting every book ever written.

The system should grow around high-value research questions and load-bearing claims.

### Phase 1 — Standardize the epistemic objects

- canonical schemas;
- stable IDs;
- statuses;
- confidence vocabulary;
- manifests;
- dependency relationships;
- correction protocol.

### Phase 2 — Map the existing repository

- classify every current file as record, adjudication, synthesis, canon, deployment, revision, protocol, or log;
- detect duplicates and orphaned claims;
- identify canon without sufficient adjudication;
- identify strong evidence not yet integrated into synthesis.

### Phase 3 — Build one end-to-end vertical slice

Use **Animal Mercy, Scientific Power, and Civilizational Accountability** as the pilot.

The pilot should prove that the system can move from source universe to public visual while preserving backward traceability and revision capacity.

### Phase 4 — Build tooling

- ingestion and metadata extraction;
- citation validators;
- claim-source graph;
- source-independence detection;
- multilingual passage alignment;
- contradiction alerts;
- blast-radius analysis;
- public claim manifests;
- evaluation harnesses.

### Phase 5 — Expand by research program

Prioritize domains where:

`importance × distortion × evidentiary recoverability × design value × public leverage`

is highest.

---

## 23. Anti-bureaucracy constraint

The system must not mistake perfect archival completeness for progress.

> **Corpus completeness is a means. Source-closed judgment is the goal.**

For every ingestion effort, ask:

- Which live claim or model will this source help close?
- Is this source likely to change the verdict?
- Does it add an independent evidentiary chain?
- Is the marginal value greater than the cost of processing it?

The repository should pursue exhaustive coverage for load-bearing thinkers, texts, institutions, events, and disputes—not indiscriminate accumulation.

---

## 24. Canonical close

> **Record preserves what survives.**

> **Adjudication determines what the record permits us to say.**

> **Synthesis explains what the justified claims mean together.**

> **Canon states what the institution currently stands behind.**

> **Deployment makes truth usable.**

> **Revision ensures that reality remains sovereign.**

Civilizational Memory OS should become the place where humanity can inspect not only a conclusion, but the complete intellectual supply chain that produced it.

Its standard is not that no error ever enters.

Its standard is that no error can hide permanently behind authority, ideology, eloquence, or identity.

> **The institution must be capable of powerful judgment without surrendering its right to be corrected by truth.**
