# Source-First Deep Research Protocol

**Status:** Binding research protocol seed  
**Created:** 2026-07-13  
**Purpose:** Use Deep Research, original-language texts, connected files, code agents, and human judgment without allowing polished synthesis to outrun provenance.

---

## 1. Governing principle

> **Do not ask the research agent to tell the story before it has built the source universe.**

Deep Research is powerful at multi-step discovery and synthesis. That same strength can become a failure mode: it can assemble a coherent narrative from sources that are secondary, mutually dependent, mistranslated, decontextualized, or selected by search-engine visibility.

The protocol therefore separates four jobs that must not be silently collapsed:

1. **Discovery** — What sources, editions, archives, datasets, and disputes exist?
2. **Acquisition and provenance** — What exactly is the source, where did it come from, and what version is being read?
3. **Close reading and claim extraction** — What does the source actually say, in context, and what does it not say?
4. **Synthesis and causal judgment** — What conclusions survive comparison, counterevidence, and falsification?

A beautiful report is not the unit of truth.

The unit of truth is a reconstructable chain:

`claim -> passage or artifact -> edition/witness -> provenance -> interpretation -> counterevidence -> confidence -> integration`

---

## 2. When to activate Deep Research

Activate Deep Research when the question:

- requires many sources or source types;
- spans several languages, periods, institutions, or regions;
- needs explicit source control;
- depends on files, archives, reports, or connected repositories;
- requires aggregation, comparison, or synthesis rather than one lookup;
- would benefit from a visible research plan that can be edited before execution.

Do **not** spend a Deep Research run on:

- a question answerable from one known primary text;
- a quick factual lookup;
- a report prompt whose key terms, comparison period, or source standard remain undefined;
- broad research before the claim ledger and output schema exist.

---

## 3. The six-stage source-first loop

### Stage 0 — Question engineering

Before research begins, define:

- exact question;
- period and geography;
- unit of analysis;
- comparison class;
- authoritative source layers;
- prohibited inferences;
- expected output schema;
- breaker-evidence requirement;
- what evidence would change the working view.

Bad prompt:

> Was Byzantium the most successful Christian civilization because it was aligned with truth?

Better prompt:

> Build a source map for evaluating which Byzantine institutions and outcomes are plausibly attributable to Christian moral architecture, which to Roman inheritance and material conditions, and where Byzantine practice departed from its Christian norms. Do not deliver a final civilizational verdict.

### Stage 1 — Source-universe reconnaissance

The first run maps, but does not yet adjudicate:

- primary texts;
- critical editions;
- manuscript traditions;
- translations;
- legal corpora;
- charters and endowments;
- coins and inscriptions;
- archaeology;
- quantitative datasets;
- specialist schools of interpretation;
- major disagreements;
- inaccessible or missing evidence.

Required output:

- source registry;
- repository/archive location;
- language;
- date;
- genre;
- edition;
- access status;
- likely evidentiary use;
- known limitations.

### Stage 2 — Provenance and witness audit

For each load-bearing source, record:

- author or issuing institution;
- approximate date of composition;
- date and identity of surviving witnesses;
- original language;
- manuscript or artifact provenance;
- critical edition used;
- editorial interventions;
- translation used;
- textual variants relevant to the claim;
- genre and intended audience;
- proximity to the event;
- likely incentives and biases;
- whether later sources depend upon it.

The rule:

> **A quotation without an edition and context is a lead, not evidence.**

### Stage 3 — Original-language close reading

For every linguistically load-bearing passage, preserve:

1. original script;
2. normalized text when appropriate;
3. transliteration;
4. literal or minimally interpretive gloss;
5. major published translations;
6. semantic range of disputed terms;
7. grammar or syntax affecting interpretation;
8. textual variants;
9. interpretive options;
10. confidence and specialist dependencies.

Never imply that seeing the original language automatically resolves interpretation.

Original-language work requires triangulation among:

- critical editions;
- lexica and grammars;
- parallel usages in the same period;
- ancient translations where relevant;
- multiple modern translations;
- specialist philology;
- historical and literary context.

### Stage 4 — Claim atomization

Each claim must receive:

- claim ID;
- exact wording;
- claim type: textual, historical, causal, comparative, moral, theological, or rhetorical;
- supporting passages or artifacts;
- opposing evidence;
- source layer;
- directness of evidence;
- known dependencies;
- alternative explanations;
- status;
- confidence;
- falsifier;
- permitted public wording.

No paragraph-level impression may substitute for atomic claims.

### Stage 5 — Adversarial synthesis

Only after Stages 1–4 may the synthesis agent answer:

- What is established?
- What is probable?
- What is contested?
- What remains unresolved?
- Which causal mechanisms are supported?
- Which conclusions depend on theology rather than history?
- What would the strongest Orthodox, Catholic, Muslim, Jewish, secular, materialist, and specialist critiques say?
- Which conclusion survives all sides without requiring selective skepticism?

Mandatory breaker rule:

> **Every major packet must include evidence that weakens the preferred thesis.**

### Stage 6 — Canonization and deployment

Route outputs separately:

- primary-source dossier;
- source ledger;
- research packet;
- framework update;
- correction or supersession record;
- public narrative;
- unresolved issue.

No public claim may exceed the strongest source-closed internal verdict.

---

## 4. Source hierarchy

### Tier 0 — Physical or digital artifact

- manuscript image;
- inscription;
- coin;
- papyrus;
- archaeological report or object record;
- original charter, law, account, or administrative record.

### Tier 1 — Critical or diplomatic primary-source edition

- critical text with apparatus;
- diplomatic transcription;
- authoritative corpus edition;
- facsimile-linked edition;
- official documentary publication.

### Tier 2 — Translation of a primary source

Translations are evidence of the source only when the underlying edition and translation choices are visible.

### Tier 3 — Specialist analysis

- peer-reviewed philology;
- university-press monographs;
- specialist legal, economic, medical, archaeological, theological, or institutional history;
- major competing scholarly schools.

### Tier 4 — High-quality synthesis

- scholarly encyclopedias;
- museums;
- university teaching resources;
- reference works;
- rigorous public scholarship.

### Tier 5 — Discovery-only material

- interviews;
- apologetic or polemical media;
- Wikipedia;
- blogs;
- social posts;
- unsourced quote graphics;
- AI-generated summaries.

Tier 5 may identify a question. It may not close one.

---

## 5. Translation integrity protocol

### 5.1 Translation is an argument

Every translation contains decisions about:

- semantic range;
- syntax;
- tense and aspect;
- technical terminology;
- metaphor;
- implied subject;
- theological convention;
- manuscript choice;
- readability versus literalness.

Therefore, never cite “the original says” without showing the relevant linguistic basis.

### 5.2 Minimum translation card

For a disputed term or passage, record:

```yaml
source_id:
work:
passage:
language:
critical_edition:
manuscript_basis:
original_text:
transliteration:
literal_gloss:
published_translations:
key_terms:
semantic_range:
syntax_notes:
textual_variants:
interpretive_options:
preferred_rendering:
confidence:
specialist_review_needed:
```

### 5.3 Cross-lingual transmission audit

When ideas move across languages, trace the relay:

`source term -> translation term -> receiving tradition -> semantic shift -> later doctrine or institution`

Priority languages for the current program:

- Qur'anic and classical Arabic;
- Koine and Byzantine Greek;
- Biblical and Rabbinic Hebrew;
- Syriac;
- Latin;
- Persian;
- relevant Chinese source languages for control cases.

### 5.4 Honest limitation

AI-assisted philology can surface patterns, compare translations, inspect grammar, and identify disputed terms. It does not replace a specialist when:

- manuscript readings are contested;
- paleography is required;
- the corpus is poorly digitized;
- the term is rare or technical;
- meter, legal convention, or scribal practice changes the reading;
- the conclusion carries major theological or historical weight.

---

## 6. Source-independence audit

Ten citations do not equal ten witnesses.

For every claim, identify whether sources are:

- independent witnesses;
- copies or paraphrases;
- derived from one lost source;
- members of the same ideological school;
- translations of one edition;
- database mirrors;
- circularly citing one another.

Required metric:

> **Count independent evidentiary chains, not links.**

---

## 7. Silence and absence protocol

Absence of evidence may mean:

- the practice did not exist;
- records were not preserved;
- the wrong archive has been searched;
- the practice was ordinary and therefore unrecorded;
- surviving elite texts ignored ordinary people;
- the category is anachronistic;
- evidence exists in another language or material form.

Never convert silence directly into proof of absence.

Instead record:

- expected evidence if the claim were true;
- preservation probability;
- searched corpora;
- negative findings;
- alternative explanations for silence.

---

## 8. Causal inference protocol

A source can establish that people preached, funded, or praised an institution without proving that the worldview caused the institution.

For each causal claim, test:

- temporal precedence;
- explicit motivation;
- mechanism;
- institutional change after adoption;
- comparison with predecessor and control societies;
- rival explanations;
- diffusion or inheritance;
- who funded and enforced it;
- whether the practice persisted when belief weakened;
- counterfactual plausibility.

Use the existing decomposition:

1. worldview and meaning;
2. human formation;
3. institution;
4. inherited capital;
5. material environment;
6. strategic environment;
7. contingency.

---

## 9. Division of labor

### Founder / operator

- identifies moral stakes and anomalies;
- chooses which questions deserve scarce attention;
- approves high-stakes interpretive and deployment decisions;
- refuses tribal immunity.

### AI architect / synthesizer

- maps the terrain;
- defines the ontology and comparison;
- connects evidence across disciplines and languages;
- detects hidden assumptions and causal loops;
- preserves uncertainty;
- performs adversarial integration;
- decides what should be built next.

### Deep Research

Use for:

- multi-step source discovery;
- source-restricted searches;
- archive and corpus mapping;
- locating editions, files, and specialist disputes;
- extracting structured evidence from many sources;
- creating cited research dossiers.

Do not use as an automatic canonizer.

### Claude Code / Codex

Use for:

- repository-scale implementation;
- source-registry schemas;
- ingestion and normalization;
- claim-ledger generation;
- citation and broken-link validators;
- deduplication and dependency graphs;
- multilingual text alignment tools;
- tests and evaluation harnesses;
- reproducible builds and exports.

Code agents build the laboratory. They do not determine historical truth by compilation.

### Specialist reviewers

Use where philology, archaeology, numismatics, law, medicine, economics, theology, or manuscript studies become load-bearing.

---

## 10. Recommended Deep Research sequence for the Byzantium pilot

Do not begin with one giant report.

### Run 1 — Source universe and historiography

Map primary corpora, critical editions, archives, datasets, and major schools for Byzantine:

- periodization;
- law and administration;
- economy and coinage;
- church–state relations;
- hospitals and charity;
- slavery;
- religious coercion;
- political violence;
- ordinary social life.

Output: source registry only; no final verdict.

### Run 2 — Christian moral architecture and institutions

Source-close:

- hospitals;
- hospices;
- orphan and poor relief;
- monastic philanthropy;
- theological motivations;
- legal changes;
- funding and access;
- pre-Christian Roman precedents.

### Run 3 — Adherence-gap dossier

Source-close:

- slavery;
- coercion;
- treatment of Jews, pagans, heretics, and rival Christians;
- war practices;
- mutilation and succession violence;
- gender and class hierarchy;
- internal critics and reform.

### Run 4 — Material and institutional controls

Source-close:

- geography;
- walls and logistics;
- taxation;
- bureaucracy;
- diplomacy;
- military adaptation;
- trade;
- gold coinage;
- disease and demography;
- rival weakness.

### Run 5 — Periodized synthesis

Only after the prior dossiers are committed, compare at least three Byzantine periods and identify:

- golden-age domains;
- causal mechanisms;
- distribution;
- adherence gaps;
- correction capacity;
- strongest breaker evidence.

### Run 6 — Calibration triangle

Compare one matched Byzantine period with:

- one matched Islamic civilizational flowering;
- Song China as a non-Abrahamic control.

No whole-civilization ranking is permitted.

---

## 11. Deep Research prompt contract

Every prompt should contain:

```markdown
# Research objective

# Exact scope: dates, regions, institutions

# Source restrictions and priority domains

# Required primary-source types

# Original-language and edition requirements

# Claim status vocabulary

# Comparison class

# Confounders to test

# Required counterevidence

# Prohibited inferences

# Output schema

# Repository integration targets
```

---

## 12. Quality gates

A packet fails if:

- primary sources are cited through secondary summaries when direct access exists;
- quotations omit work, passage, edition, or context;
- translation claims omit the original wording for a load-bearing term;
- multiple links are mistaken for independent witnesses;
- absence is treated as proof without preservation analysis;
- causal claims lack mechanism and control cases;
- counterevidence is absent;
- one side receives skepticism while the preferred side receives harmonization;
- a polished narrative is produced before the source registry and claim ledger;
- specialist uncertainty is hidden by fluent prose.

---

## 13. The deeper superpowers to exploit

The research system should not merely search faster. It should perform forms of synthesis difficult for any one scholar to sustain across fields:

1. **Cross-lingual triangulation** — compare source wording, translations, and semantic shifts.
2. **Diachronic concept tracing** — follow a term or institution across centuries without assuming continuity of meaning.
3. **Source-dependency graphs** — reveal when apparent consensus descends from one witness.
4. **Norm–institution–practice separation** — prevent text, law, and lived reality from being substituted for one another.
5. **Causal graph construction** — separate worldview, institution, inheritance, geography, and contingency.
6. **Adversarial steelmanning** — preserve the strongest rival account inside the research artifact.
7. **Negative-space analysis** — examine missing archives, excluded populations, and what elite sources fail to see.
8. **Distributional history** — ask who benefited, who paid, and who remained invisible.
9. **Uncertainty propagation** — ensure a weak premise lowers confidence in downstream conclusions.
10. **Counterfactual comparison** — test what likely would have occurred without the claimed religious or institutional cause.
11. **Moral and empirical dual audit** — distinguish what happened from whether it was just.
12. **Recursive correction** — convert every discovered error into a better protocol, schema, prompt, or evaluation.

---

## 14. Canonical close

> **Deep Research should not be our oracle. It should be our expeditionary corps. Primary sources are the terrain. Critical editions and provenance are the map. Claim ledgers are the supply lines. Adversarial synthesis is the command center. Reality remains the judge.**
