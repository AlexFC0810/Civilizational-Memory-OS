# Cross-Repo Truth Contract — V1

> **STATUS: NONCANONICAL INTERFACE PROPOSAL**  
> This document proposes a contract between Civilizational Memory OS and downstream systems such as Truth & Peace Engine. It authorizes no deployment or automatic publication.

## Purpose

Prevent two failure modes:

1. every downstream project researches the same claim independently and develops a different reality;
2. an upstream research system produces excellent work that is too abstract, inaccessible, or slow for actual public use.

The contract creates a two-way interface:

- upstream truth packets;
- downstream performance and challenge feedback.

## Upstream output: Truth Packet

Every claim exported from Civilizational Memory OS should have a stable identifier and the following minimum fields:

```yaml
claim_id:
title:
question_answered:
claim_text:
status: raw | hypothesis | sourced_candidate | adversarially_tested | creator_ready | operator_approved | published | corrected | retired
confidence:
source_layers:
  quran:
  hadith:
  fiqh:
  historical_sources:
  modern_research:
chronology:
  normative_date:
  implementation_dates:
  contemporary_baseline:
  reform_or_comparison_dates:
category_match:
strongest_support:
strongest_counterevidence:
valid_concession:
prohibited_overclaims:
load_bearing_fact:
load_bearing_question:
verdict:
short_forms:
  twelve_second:
  sixty_second:
public_citations:
source_closure_queue:
correction_history:
version:
last_reviewed:
```

## Status semantics

### Raw / hypothesis

May be explored internally. Must not be presented as established fact.

### Sourced candidate

Has meaningful evidence but has not survived the strongest informed counter.

### Adversarially tested

Has been challenged for source quality, chronology, category validity, and opposing evidence.

### Creator-ready

May be used in rehearsal or draft content with its required boundaries intact.

### Operator-approved

Approved for the defined use, not necessarily for all uses.

### Corrected / retired

Must be removed or updated downstream. Performance does not preserve a retired claim.

## Downstream rights

Truth & Peace Engine may:

- select relevant truth packets;
- reorder them for a specific debate;
- rewrite into natural creator voice;
- construct cross-examination ladders;
- compress into clips, cards, visuals, and scripts;
- translate into different reading levels and languages;
- test delivery and audience comprehension;
- propose stronger wording.

## Downstream obligations

Truth & Peace Engine must preserve:

- claim ID and version;
- source-layer labels;
- required chronology;
- confidence and status;
- material boundaries;
- prohibited overclaims;
- correction propagation.

Every published or rehearsal artifact should be traceable back to the truth packet used.

## Downstream feedback objects

The execution system should send structured feedback upstream.

### Challenge report

```yaml
claim_id:
opponent_counter:
where_encountered:
impact:
current_answer:
answer_failed_or_survived:
new_research_needed:
source_provided_by_opponent:
```

### Language improvement proposal

```yaml
claim_id:
current_wording:
proposed_wording:
why_stronger:
truth_risk:
clip_test_result:
operator_feedback:
```

### Oversight report

```yaml
topic:
missing_region:
missing_period:
missing_group:
missing_source_language:
missing_comparison:
why_it_changes_the_map:
priority:
```

### Correction incident

```yaml
claim_id:
incorrect_downstream_artifacts:
error_type:
source_of_error:
required_replacements:
publication_exposure:
owner:
status:
```

## The epistemic build gate

Before a claim enters a public debate pack, the consuming system should verify:

1. Is there a truth packet?
2. Is its status creator-ready or higher?
3. Is the version current?
4. Are dates and comparison baselines included where relevant?
5. Are source layers visible?
6. Is the strongest hostile counter represented?
7. Does the public wording trigger any prohibited overclaim?
8. Can the artifact be corrected globally if the packet changes?

If the answer to any required item is no, the system may create a **research request**, not fabricate completion.

## Local self-sufficiency without duplication

Truth & Peace Engine may keep versioned read-only snapshots of the truth packets needed for current production so that its runtime does not fail when another repository is unavailable.

Snapshots must include:

- origin repository;
- claim ID;
- version;
- source commit;
- sync date;
- stale-after or review date;
- warning that the upstream record governs corrections.

Do not maintain two editable canonical copies.

## Conflict resolution

When upstream and downstream disagree:

- the upstream Steward controls claim status and evidence conclusions;
- the downstream Advocate controls expression and use-case fitness;
- the operator resolves mission-level priorities;
- neither side may silently overwrite the other’s domain.

A strong new formulation from downstream returns upstream for evaluation. A correction upstream propagates downstream automatically or through a tracked migration task.

## Core interface sentence

> **The evidence layer decides what may honestly be said. The advocacy layer decides how to say it so people can finally see it.**
