# Transcript-to-Immunity Protocol

**Purpose:** Convert a full media transcript into source-hardened claim intelligence, fair-context clip candidates, public corrective assets, and recursively improving propaganda immunity.

**Canonical parent:** `canon/MEDIA_TO_IMMUNITY_ENGINE.md`

## Trigger

Run this protocol when the user supplies:

- a full transcript;
- a video or audio file;
- timestamped screenshots of a debate;
- a podcast, sermon, interview, documentary, or panel;
- or a request to analyze recurring claims in public discourse.

## Non-negotiable rule

> Analyze the claim architecture before designing the content response.

Do not jump directly from transcript to rebuttal clip.

## Phase 1 — Intake and provenance

Record:

- media title;
- source URL or file reference;
- publication date;
- uploader/publisher;
- speakers and roles;
- original language;
- transcript source and confidence;
- runtime;
- target audience;
- known edits or omissions;
- legal/reuse status;
- user objective.

Assign a `media_id`.

## Phase 2 — Transcript integrity

1. Preserve timestamps.
2. Preserve speaker turns.
3. Mark uncertain words.
4. Separate direct quotations from original claims.
5. Retain enough surrounding context to evaluate intent and meaning.
6. Note sarcasm, jokes, rhetorical questions, and apparent slips.
7. Never infer a speaker's private motive as fact.

Output: normalized transcript plus transcript-confidence notes.

## Phase 3 — Claim atomization

Create one row per atomic claim. Each row receives a `claim_id` or links to an existing claim family.

Classify each item as:

- factual;
- causal;
- definitional;
- comparative;
- historical;
- legal;
- moral;
- theological;
- predictive;
- rhetorical label;
- implied premise;
- concession;
- open question.

For every claim, include:

- exact timestamp;
- exact wording;
- charitable paraphrase;
- dependencies;
- scope words such as all, never, only, caused, proved, or impossible;
- initial status: established, probable, contested, unsupported, category error, unresolved, or non-factual opinion.

## Phase 4 — Strain and tactic mapping

Match the claim against known narrative strains. If no match exists, create a provisional `strain_id`.

Tag relevant mechanisms:

- loaded-label compression;
- source-layer collapse;
- context stripping;
- true-fact/false-map construction;
- causal monoculture;
- presentism;
- cherry-picking;
- ideal/practice asymmetry;
- authority laundering;
- false dichotomy;
- motte-and-bailey;
- anecdotal generalization;
- guilt by association;
- scapegoating;
- emotional priming;
- fabricated precision;
- false equivalence;
- unsupported universal;
- category error.

Also tag:

- strongest valid criticism;
- good-faith uncertainty;
- correction or concession made by the speaker;
- shared moral ground.

## Phase 5 — Triage

Score 1–5:

| Dimension | Question |
|---|---|
| Prevalence | How widely does this strain circulate? |
| Harm | What damage can belief in it cause? |
| Recurrence | Does it reappear across speakers and topics? |
| Salience | Does the target audience care? |
| Tractability | Can the claim be resolved or bounded with available evidence? |
| Leverage | Would correcting it repair several downstream beliefs? |
| Amplification risk | Would responding spread a fringe claim? |

Prioritize high-leverage, high-recurrence, source-closable claims. Archive or privately monitor high-amplification-risk fringe claims unless harm demands response.

## Phase 6 — Truth-closure routing

For each priority claim:

1. identify the exact source layer;
2. define contested terms;
3. retrieve primary evidence and specialist scholarship;
4. construct the strongest supporting case;
5. construct the strongest opposing case;
6. identify comparison classes and baselines;
7. map causal alternatives and confounders;
8. state uncertainty;
9. identify breaker evidence;
10. assign a provisional verdict and grade;
11. list prohibited overclaims;
12. route unresolved dependencies into bounded research packets.

No content package may imply closure where the research remains unresolved.

## Phase 7 — Clip selection

Identify three different segment classes:

### A. Evidence-of-belief clip
A concise, fair-context segment showing the claim as people actually encounter it.

### B. Self-correcting clip
A segment where the original speaker concedes, refines, or exposes a contradiction. Prefer this when available because it reduces adversarial framing.

### C. Truth-bearing companion clip
A separate source, expert, primary document, visual, or historical example that repairs the claim.

For every proposed clip include:

- start/end timestamp;
- transcript excerpt;
- context before and after;
- why it matters;
- clipping risk;
- required caption or qualifier;
- rights/reuse note.

## Phase 8 — Antibody design

For each priority claim produce:

### Specific antibody
- truth anchor;
- strongest concession;
- exact break in reasoning;
- best evidence;
- replacement model;
- uncertainty boundary;
- counterattack response.

### Transferable immunity gene
- manipulation pattern;
- recognition cue;
- one new-domain example;
- one load-bearing question.

### Dignity bridge
A line that makes updating psychologically and socially possible without humiliating the audience or speaker.

## Phase 9 — Content package

Produce only the formats justified by the claim and audience:

- reply text;
- claim card;
- cold-audience short;
- original-clip plus correction;
- expert/primary-source clip pair;
- 3–10 minute explainer;
- visual map or timeline;
- article/source thread;
- quiz or conversational exercise;
- booster sequence.

Each asset must declare:

- learning objective;
- audience state;
- exact claim ID;
- verdict version;
- sources;
- content risk;
- call to inquiry or action;
- intended metric.

## Phase 10 — Adversarial and integrity gate

Run at least these lenses:

1. primary-source verifier;
2. hostile specialist;
3. sympathetic insider critic;
4. category-collapse detector;
5. audience misunderstanding tester;
6. counter-propaganda detector;
7. fair-context clipping reviewer.

Reject or revise content that:

- distorts the original speaker;
- omits a decisive concession;
- repeats a smear more vividly than the truth;
- substitutes ridicule for explanation;
- hides uncertainty;
- uses weak sources for strong language;
- could not survive its own standard when aimed at our preferred side;
- optimizes outrage at the expense of understanding.

## Phase 11 — Measurement plan

Pre-register:

- hypothesis;
- audience;
- variants;
- primary metric;
- minimum sample or stopping rule;
- belief/recognition question;
- delayed follow-up if feasible;
- booster date;
- doctrine-edit threshold.

Track:

- reach and retention;
- source clicks;
- factual belief shift;
- manipulation-recognition transfer;
- calibrated confidence;
- willingness to share;
- comment quality;
- counterattack survival;
- delayed recall;
- cross-tribal acceptance.

Do not change doctrine from one viral clip.

## Phase 12 — Repository integration

### Civilizational Memory OS
Store or update:

- claim family;
- strain taxonomy;
- source ledger;
- verdict;
- framework insight;
- research packet;
- supersession note;
- prohibited language.

### Truth and Peace Engine
Store or update:

- media manifest;
- transcript;
- segment manifest;
- content package;
- experiment manifest;
- publish record;
- performance data;
- operator verdict.

Link both planes using stable IDs.

## Required final report

Every run ends with:

1. executive synthesis;
2. strongest valid points from each side;
3. complete claim inventory;
4. top recurring strains;
5. tactic map;
6. truth-closure status;
7. prioritized research gaps;
8. fair-context clip candidates;
9. antibody and immunity-gene set;
10. content ladder;
11. risks and integrity findings;
12. measurement plan;
13. repository changes;
14. one highest-leverage next move.

## Stop conditions

Do not publish when:

- the transcript is too unreliable;
- the clip would materially distort context;
- the claim is too fringe and amplification risk dominates;
- the evidence cannot yet support a public verdict;
- the relevant person is private and exposure would be disproportionate;
- the response depends on speculation about motives;
- legal/reuse status is unresolved;
- the correction is likely to deepen the false map without a viable replacement.

## Canonical close

> Extract what people believe. Separate claim from frame. Preserve the true part. Source-close the disputed part. Repair the map. Teach the recognition pattern. Measure whether the audience can carry the skill forward.