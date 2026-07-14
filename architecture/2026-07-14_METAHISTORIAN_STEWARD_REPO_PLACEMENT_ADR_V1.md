# Metahistorian Steward Repository Placement ADR — V1

> **STATUS: NONCANONICAL ARCHITECTURE PROPOSAL**  
> Branch-only candidate. No merge, deployment, agent replacement, or cross-repo migration is authorized without operator review.

## Decision

The **Comparative Metahistorian–Advocate Steward** should live canonically in **Civilizational Memory OS**, not inside Truth & Peace Engine and not in a new repository at this stage.

Truth & Peace Engine should remain a downstream consumer and execution environment.

## Why

The repositories already have different jobs.

### Civilizational Memory OS

Owns:

- historical evidence and provenance;
- claim ledgers and confidence;
- source-layer separation;
- comparative chronology;
- civilizational synthesis;
- unknown-unknown discovery;
- correction memory;
- research agendas;
- reusable truth kernels;
- standards for what may become public-ready.

Its existing README already defines it as a truth-aligned research and content operating system for preserving, testing, refining, and deploying historically grounded insights. Its Founder Decoupling protocol already says the system must not wait for the operator to name al-Andalus, Ottoman history, rules of war, or other missing worlds.

### Truth & Peace Engine

Owns:

- debate and creator preparation;
- House of Wisdom rehearsal experiences;
- scripts, response cards, briefs, clips, visuals, and dashboards;
- content production, packaging, review, and distribution;
- audience adaptation and creator voice;
- hostile-interruption rehearsal;
- performance feedback.

Its own boot file describes it as the content project and video repurposing/distribution engine.

## Architectural principle

> **The truth system should inform the persuasion system without being governed by the persuasion system.**

The separation protects both missions.

If debate urgency controls the evidence layer, rhetorical pressure can distort confidence, chronology, or source boundaries.

If the research layer controls every sentence of live debate, the output can become slow, academic, and unusable.

Therefore:

```text
Civilizational Memory OS
  Evidence Registry
  Claim Ledger
  Chronology
  Comparative Synthesis
  Corrections
  Approved Truth Kernels
          ↓
  Cross-Repo Truth Contract
          ↓
Truth & Peace Engine
  House of Wisdom
  Debate Advocate
  Rehearsal
  Scripts / Cards / Visuals
  Clips / Distribution
          ↓
  Performance and Challenge Feedback
          ↓
Civilizational Memory OS
  Corrections / Research Requests / New Evidence
```

## The two-agent model

### 1. Comparative Metahistorian–Advocate Steward

Canonical home: Civilizational Memory OS.

Primary objective:

> Produce the strongest defensible historical and moral synthesis while remaining permanently correctable.

It owns:

- what the evidence supports;
- how strongly it supports it;
- which dates and comparisons are valid;
- what is explicit, inferred, disputed, or absent;
- which public claims are approved, provisional, prohibited, or retired;
- what adjacent worlds and counterevidence remain missing.

It may formulate advocacy-ready truth kernels, but it does not optimize primarily for virality, aesthetics, or winning one debate.

### 2. House of Wisdom Debate Advocate

Canonical home: Truth & Peace Engine.

Primary objective:

> Convert approved truth kernels into persuasive, natural, interruption-resistant creator performance.

It owns:

- theory of the case for the specific opponent and audience;
- cross-examination sequences;
- debate cards;
- persona and voice adaptation;
- UX, visuals, rehearsals, timing, and delivery;
- clips and content products;
- performance evaluation.

It may not silently promote a raw hypothesis into a fact or overwrite the upstream confidence level.

## Why not one all-purpose agent

One agent doing everything creates objective contamination:

- evidence research rewards patience, uncertainty tracking, and broad coverage;
- live advocacy rewards compression, decisiveness, selective relevance, and speed;
- product design rewards aesthetics, usability, and iteration;
- publishing rewards attention and frequency.

Those objectives can cooperate, but they should not share unrestricted authority over the same claim status.

The solution is not many disconnected agents. It is:

> **one upstream Steward, one downstream Advocate, one shared contract.**

## Why not create another repository now

A new repository would create another source of truth before the existing one is fully wired.

Do not create a separate metahistorian repository until at least three of these conditions are true:

1. the agent serves several independent repositories beyond Truth & Peace Engine;
2. it has its own executable runtime, release cadence, tests, or API;
3. it has a distinct contributor or permission boundary;
4. its evidence store is too large or operationally different for Civilizational Memory OS;
5. cross-repo reuse is materially impaired by remaining inside Civilizational Memory OS.

Until then, a new repo would increase fragmentation more than capability.

## What should move or be mirrored

The current Truth & Peace Engine draft branch contains upstream architecture that conceptually belongs here:

- Comparative Metahistorian–Advocate constitution;
- canonical audit surface and authority laundering;
- evidence → synthesis → hypothesis corpus;
- chronological comparison engine;
- advocate editorial benchmark and eval suite;
- unknown-unknown and correction doctrine;
- capacity-and-conscience historical thesis.

Do not blindly copy and canonize them.

Migration sequence:

1. inventory equivalent artifacts already present in Civilizational Memory OS;
2. merge the best solution rather than duplicating files;
3. preserve provenance to the Truth & Peace branch and transcript;
4. resolve contradictions;
5. retain Truth & Peace adapters and creator-facing derivatives only;
6. replace duplicated upstream files in Truth & Peace with versioned pointers or snapshots where runtime self-sufficiency requires them.

## Authority rule

Truth & Peace Engine may transform **expression**, not **epistemic status**.

It may:

- shorten;
- dramatize;
- translate;
- sequence;
- visualize;
- adapt to creator voice;
- choose one approved fact from a larger packet.

It may not:

- remove a material qualification required for truth;
- convert disputed into settled;
- convert hadith into Qur’an;
- compare unlike categories;
- invent dates or first-ever claims;
- retain a retired claim because it performs well.

## Final decision line

> **Civilizational Memory OS should know what is true, how we know it, and what remains uncertain. Truth & Peace Engine should know how to make that truth legible, memorable, persuasive, and useful under pressure.**
