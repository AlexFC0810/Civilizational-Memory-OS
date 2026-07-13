# Creator Claim Console — MVP Product Specification

**Status:** Canonical build specification  
**Pilot:** Bek Lover / `BL-ET-001`  
**Product principle:** Build only the software that removes a proven bottleneck in the manual Creator Supercharger workflow.

## Problem

Creators with large archives and frequent appearances cannot reliably remember:

- every prior claim;
- which source supported it;
- which wording was too strong;
- what they later corrected;
- which audience framing worked;
- where an opponent can exploit ambiguity;
- which personal stories are approved for public use;
- what should be carried into the next interview.

Traditional notes fragment this information. Generic AI chat loses provenance, confuses reconstruction with quotation, and tends either to flatter the creator or sterilize the voice.

## Product promise

> **Before every consequential appearance, the creator sees what is strongest, what is dangerous, what changed, what the audience needs, and exactly where the receipts live.**

## Primary users

### Creator

Needs clarity, preparation, memory, correction, and independence.

### Research steward

Needs source provenance, claim states, evidence standards, and version control.

### Producer/editor

Needs timestamps, clip candidates, visual assets, and public-use boundaries.

### Creator manager/booker

Needs host-fit angles, approved biography, proof assets, and appearance history.

### Red team

Needs rival arguments, breaker evidence, hidden assumptions, and unresolved claims.

## Core object model

### Source

- source ID;
- title;
- URL/file;
- publication/retrieval date;
- speakers;
- transcript state;
- rights/reuse state;
- checksum/version;
- source confidence.

### Segment

- segment ID;
- source ID;
- start/end time;
- speaker;
- transcript text;
- context window;
- topic tags;
- embedded-source relationship.

### Claim

- claim ID;
- exact wording;
- strongest reconstruction;
- speaker;
- timestamp;
- claim type;
- authority layer;
- creator certainty;
- AIOS certainty;
- evidence state;
- harm if wrong;
- identity-expansion risk;
- public wording;
- prohibited wording;
- correction state;
- approval state.

### Evidence

- evidence ID;
- source type;
- citation;
- excerpt/summary;
- supports/challenges;
- reliability grade;
- retrieval date;
- conflict/funding notes;
- scope.

### Archetype route

- audience archetype;
- true fragment;
- threat/wound;
- bridge question;
- best messenger;
- memory form;
- dignity risk;
- transfer test.

### Appearance

- host/show;
- date/status;
- audience archetypes;
- topic scope;
- approved claim stack;
- personal stories;
- likely traps;
- source packet;
- post-event clips;
- objections;
- corrections;
- measured outcomes.

## Six claim states

1. **Said** — archived expression.
2. **Reconstructed** — strongest fair meaning.
3. **Verified** — supported at stated scope.
4. **Needs narrowing** — true fragment with excessive scope or causation.
5. **Speculation** — prediction, theory, theology, or incomplete inference.
6. **Corrected** — visibly superseded by stronger wording.

The states are not a single linear pipeline. A claim may remain `Said + Speculation`, or `Said + Corrected`, while its reconstructed version becomes `Verified`.

## Essential screens

### 1. Source Intake

- paste URL or upload transcript;
- speaker and embedded-clip detection;
- metadata capture;
- raw/normalized transcript separation;
- automatic segment IDs;
- source-alignment warnings.

### 2. Claim Console

Sortable/filterable by:

- creator;
- source;
- topic;
- state;
- confidence;
- harm if wrong;
- audience route;
- approval;
- correction priority.

Default view should show:

- exact wording;
- best public wording;
- evidence status;
- top source;
- red-team concern;
- next action.

### 3. Evidence Drawer

Opening a claim shows:

- supporting evidence;
- challenging evidence;
- strongest rival model;
- source-layer distinctions;
- version history;
- research gaps.

### 4. Appearance Room

Generates:

- five ready claims;
- five pause/repair claims;
- opening thesis;
- likely questions;
- hostile questions;
- memorable answers;
- personal stories;
- source cards;
- audience-specific bridges;
- explicit no-go wording.

### 5. Correction Ledger

Shows:

- original wording;
- reason for correction;
- corrected wording;
- date;
- creator response;
- public correction asset;
- downstream sources/assets requiring update.

### 6. Impact View

Tracks:

- appearances;
- clips;
- source clicks;
- changed-mind evidence;
- repeated objections;
- correction speed;
- bookings;
- collaborations;
- institutional effects.

## AI jobs

AI may:

- segment transcripts;
- propose atomic claims;
- detect hedges and certainty;
- identify embedded speakers;
- classify claim type and authority layer;
- find likely contradictions across corpus;
- draft strongest reconstruction;
- propose source searches;
- generate rival arguments;
- flag identity-sized causal expansion;
- generate archetype-specific versions;
- draft appearance packets;
- suggest corrections;
- link clips to claim provenance.

AI may not autonomously:

- approve creator representation;
- publish corrections;
- convert speculation into fact;
- infer private beliefs;
- erase creator disagreement;
- fabricate quotations;
- decide legal/reuse rights;
- speak publicly in the creator's first person without approval.

## Human gates

### Steward gate

Required for evidence state and scope.

### Creator gate

Required for creator-approved representation, personal stories, and public correction.

### Public-force gate

Required for memorable wording, fair context, and maximum justified force.

### Legal/reuse gate

Required for clips, transcripts, and third-party media.

## Manual pilot before software

Run the console in Markdown/database form through:

1. one creator validation session;
2. one real podcast preparation;
3. one published Truth Audit;
4. one correction;
5. one post-appearance review.

Record every moment where the manual system causes delay, duplication, loss, confusion, or avoidable error.

Only repeated bottlenecks become software requirements.

## MVP acceptance criteria

The product is useful when it:

- reduces preparation time by at least 50% for a repeated topic;
- prevents at least one high-harm unsupported claim before publication;
- upgrades at least three claims into stronger memorable wording;
- preserves provenance from clip to claim to source;
- produces one creator-approved packet;
- allows a correction to propagate to all dependent assets;
- reveals the next-best podcast or collaboration route;
- captures audience objections and updates the Twin.

## Non-goals

- public AI impersonation;
- autonomous debate bot;
- social-media scheduling suite;
- generic CRM;
- mass scraping before consent/value validation;
- universal truth database in v1;
- ideological compliance scoring;
- engagement optimization detached from truth transfer.

## Build sequence

### Phase 0 — Manual

Markdown + spreadsheet/database + GitHub source records.

### Phase 1 — Internal single creator

Source intake, Claim Console, evidence drawer, packet export, corrections.

### Phase 2 — Multi-creator concierge

Permissions, creator-specific vocabularies, collaboration graph, reusable source cards.

### Phase 3 — Public source pages

Approved verdicts, citations, corrections, and downloadable assets.

### Phase 4 — Council of Minds

Compare creator models without averaging them; preserve contradiction, convergence, and unique insight.

## Recommended technical shape

- relational store for sources, claims, evidence, appearances, and approvals;
- graph layer for relationships and dependencies;
- vector retrieval only as discovery support, never final provenance;
- Git-backed export for durable canon;
- immutable raw-source storage;
- versioned normalized transcripts;
- explicit human approval records;
- evaluation suite for attribution, scope, identity expansion, and quotation fidelity.

## Core evaluation set

1. Nested reaction-video speaker attribution.
2. Exact quotation versus reconstruction.
3. Institution-to-identity expansion.
4. Theory versus verified causation.
5. Current fact versus stale fact.
6. Corrected claim still appearing in a dependent asset.
7. Creator says reconstruction is inaccurate.
8. Audience-specific wording becomes manipulative or unfair.
9. Strong true claim weakened unnecessarily.
10. Weak claim made persuasive through rhetoric.

## Canonical close

> **The first AI-native creator product should not imitate a mind. It should help a real mind remember, verify, correct, prepare, collaborate, and compound.**
## Appendix A — Claim-state ↔ evidence-grade mapping (binding 2026-07-11)

The Console's six claim states and the house evidence grades (`research-ledger/CLAIMS_TO_VERIFY.md` A–D, enforced by `research-ledger/DEPLOYMENT_READINESS_GATE.md` + `scripts/evals.mjs`) are one vocabulary, not two:

| Console state | Grade mapping | Note |
|---|---|---|
| Said | pre-grade intake event | registration trigger, not an evidence level — enters the ledger at D by default |
| Reconstructed | C (B once anchors attach) | "strongest fair meaning" is a wording act; grade tracks the anchors, not the eloquence |
| Verified | A or B **at stated scope** | A requires frontier adjudication + fetched-excerpt transcripts; Sonnet-tier verification ceilings at B/C per `MODEL_ROUTING.md` |
| Needs narrowing | C | deployable only with the narrowed wording; unsafe wording recorded |
| Speculation | D | not public-ready; may ship only in explicitly speculative framing per `protocols/STRENGTH_WITHOUT_OVERCLAIMING.md` |
| Corrected | grade-change event | logged in the ledger with date + superseding wording; dependent assets flagged (failure mode #6 above) |

Compound states inherit the **lower** grade of their components (`Said + Speculation` = D; `Said + Corrected` = the corrected claim's new grade). A claim's public deployment always requires the gate, regardless of state label.

**Phase-0 reaffirmation:** per this spec's own build sequence and the Stockfish kill rule, the Console remains a **manual discipline** (this mapping + the ledger + the gate) until a creator-validated run produces evidence of creator value. No software before that receipt.
