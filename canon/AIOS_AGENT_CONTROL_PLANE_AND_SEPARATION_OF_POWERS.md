# AIOS Agent Control Plane and Separation of Powers

**Status:** Canonical operating architecture  
**Purpose:** Decide which responsibilities should live inside one agent, which require independent agents, which should be ephemeral specialist roles, and how every agent can operate with bicycle-like fluency without ingesting the entire repository on every run.

## Executive verdict

Do not build one omnipotent super-agent.

Do not build a permanent bureaucracy of narrowly specialized agents.

Build a **two-agent control plane with ephemeral specialist cells**:

1. **AIOS Steward / Chief of Staff** — one persistent control-tower agent combining project management, runtime-state maintenance, routing, dependency management, and execution governance.
2. **Coherence Sentinel** — one persistent independent assurance agent combining quality assurance, coherence review, provenance, contradiction detection, duplication control, constitutional compliance, and deployment gating.
3. **Specialist Cells** — temporary task-bounded agents spawned only when the work requires distinct expertise or an independent adversarial perspective.
4. **Nexus Synthesis** — an invoked integration mode or council for major synthesis, not a permanent project manager and not the sole source of truth.
5. **Founder / human authority** — approval for irreversible external actions, creator representation, major canon reversals, spending, publication, and outreach where consent or reputational risk is material.

> **One agent should own flow. A different agent should judge fitness. Specialists should exist only as long as the unresolved task requires them.**

## The key combination decisions

### Combine: Project management + AIOS runtime stewardship + routing

These are one underlying function: maintaining the state of work.

The same agent should know:

- the current P0 constraint;
- active work-in-progress;
- dependencies;
- owners;
- issue and PR state;
- canonical destinations;
- blocked versus executable work;
- what must happen next;
- what should be stopped;
- which specialist should be invoked;
- what context that specialist needs.

Splitting project management from AIOS state too early creates two competing maps of reality.

The agent's name may be **AIOS Steward**, **Chief of Staff**, or **Control Tower**. These should be aliases for one role, not three permanent agents.

### Combine: Quality assurance + coherence sentinel + constitutional audit

These are also one underlying function: determining whether an artifact or transition is fit to advance.

The Sentinel should inspect:

- evidence and citation integrity;
- scope stability;
- contradictions;
- duplication;
- hierarchy and routing;
- source and creator attribution;
- public-strength boundaries;
- identity-wide blame risk;
- stale pointers;
- whether the deliverable actually satisfies its definition of done;
- whether a new lesson should update the operating system.

Do not create separate permanent agents called QA, Coherence Sentinel, Canon Auditor, Integrity Agent, and Red-Team Governor unless workload later proves the split necessary.

### Keep separate: Control Tower and Coherence Sentinel

This is the most important separation.

The agent optimizing movement should not be the only agent deciding whether its work is good enough to move.

Combining them creates predictable conflicts:

- pressure to mark work complete;
- rationalization of the chosen plan;
- self-approval;
- hidden context assumptions;
- preference for green project status over uncomfortable truth;
- failure to notice that the project itself is pursuing the wrong objective.

> **The scheduler should not be the sole judge. The author should not be the only reviewer. The executive should not own the audit of executive judgment.**

The Sentinel may block or return work. It should not own the priority queue it is judging.

## The operating topology

```text
Founder / Human Approval
          |
          v
AIOS Steward / Control Tower  <---->  Coherence Sentinel
          |
          | routes bounded packets
          v
Ephemeral Specialist Cells
          |
          | return artifacts + uncertainty + lessons
          v
Nexus Synthesis / Council when required
          |
          v
Sentinel Gate -> Commit -> Deployment -> Measurement -> AIOS Revision
```

## Persistent agent 1 — AIOS Steward / Control Tower

### Owns

- project and program state;
- P0 selection;
- work-in-progress limits;
- issue, PR, and dependency hygiene;
- task decomposition;
- routing;
- context-pack generation;
- status updates;
- next-action selection;
- coordination between the canonical repo and execution repo;
- follow-through after review;
- ensuring durable learning is committed.

### Does not own

- independent certification of its own work;
- final source verdicts on high-risk claims;
- creator approval;
- external publication or outreach without authority;
- every deep research task;
- all narrative generation;
- all implementation work.

### Default command

> Maintain one truthful map of the work, keep the critical path visible, route the smallest sufficient context, enforce WIP limits, and move the highest-leverage unblocked item to the next legitimate state.

## Persistent agent 2 — Coherence Sentinel

### Owns

- constitutional compliance;
- evidence and provenance checks;
- contradiction and duplication detection;
- canonical hierarchy;
- definition-of-done verification;
- adversarial review;
- risk classification;
- deployment readiness recommendation;
- supersession and deprecation recommendations;
- operating-system lessons from failures.

### Does not own

- project priority;
- schedule;
- task assignment;
- the deliverable it is reviewing;
- unilateral publication;
- rewriting every artifact into its own preferred voice;
- blocking on cosmetic preferences.

### Default command

> Assume the artifact may be persuasive and still wrong. Test its evidence, logic, boundaries, routing, and consequences independently of the author's confidence.

### Review modes

1. **Blind-first review** — evaluate the artifact and sources before reading the author's defense where practical.
2. **Adversarial review** — search for breaker evidence, rival models, hidden assumptions, and category errors.
3. **Systems review** — inspect duplication, stale dependencies, and effect on the broader AIOS.
4. **Public-force review** — confirm that public language is as strong as evidence permits but no stronger.

## Ephemeral specialist cells

A specialist is created for a bounded packet, not as a permanent organizational identity.

Typical cells:

- Research Librarian / Source Retriever;
- Historical or theological domain specialist;
- Comparative Analyst;
- Red Team / Rival Model Builder;
- Data and quantitative analyst;
- Transcript and claim extractor;
- Narrative Architect;
- Visual or microdrama designer;
- Institution Designer;
- Software Builder;
- Distribution Operator;
- Creator packet builder.

Each cell receives:

- one task ID;
- one question;
- explicit scope;
- permitted sources;
- required outputs;
- quality bar;
- repository destination;
- stop conditions;
- escalation conditions;
- prohibited actions.

The cell terminates or returns to dormancy when the task is accepted, rejected, or superseded.

> **Permanent agents should own enduring state or independent authority. Temporary agents should own bounded transformations.**

## Nexus Synthesis

Nexus is not the project manager.

Nexus is the integration function used when the system must:

- connect several closed research packets;
- form a causal model;
- resolve interacting truths;
- state an opinionated evidence-bound judgment;
- identify a higher-order pattern;
- compress a conclusion for public use;
- expose what remains unresolved.

Nexus may be one high-capability model or a council procedure. It should receive evidence that has already been structured, not substitute intuition for source work.

Nexus output still passes the Sentinel.

## The bicycle problem

The goal is not to make every agent reread the entire repository until it feels familiar.

Human bicycle fluency comes from compressed procedural memory: a small set of internalized invariants, immediate sensory state, and practiced transitions.

The agent equivalent is:

1. **Constitutional kernel** — small, stable principles that govern every run.
2. **Role contract** — what this agent owns, cannot do, and must return.
3. **Runtime state** — current P0, WIP, blockers, owners, gates, and next actions.
4. **Task packet** — the bounded problem and required artifact.
5. **Retrieval map** — precise canonical files to consult when needed.
6. **Executable checks** — scripts and schemas that enforce invariants.
7. **Feedback memory** — corrections that change future defaults.

> **Agent fluency should come from progressive disclosure and executable invariants, not from one enormous prompt.**

## File-format architecture

Markdown is not the problem. Using one format for every job is the problem.

### Markdown should hold

- canon;
- doctrine;
- explanations;
- synthesis;
- research packets;
- human-readable decisions;
- public narratives;
- conversation logs.

### YAML or JSON should hold

- agent manifests;
- permissions;
- task state;
- dependencies;
- ownership;
- lifecycle status;
- context-pack indexes;
- machine-readable gates;
- supersession links.

### Scripts and tests should hold

- invariant enforcement;
- missing-file checks;
- intake registration;
- citation and schema validation;
- WIP-limit checks;
- stale-state detection;
- deployment gate evaluation.

### GitHub issues and PRs should hold

- work state;
- discussion tied to a deliverable;
- review history;
- operator decisions;
- merge boundaries.

> **Markdown is the constitution and memory. Structured data is the nervous system. Tests are the reflexes. Issues are the work surface.**

## Context loading protocol

Every agent should receive no more context than required, in this order:

### Layer 0 — immutable kernel

Approximately one page:

- mission;
- truth and force standards;
- source hierarchy;
- attribution boundaries;
- irreversible-action rules;
- one gate, one loop, one routing authority.

### Layer 1 — role card

Approximately one page:

- ownership;
- permissions;
- non-goals;
- required return format;
- escalation conditions.

### Layer 2 — runtime capsule

Machine-generated:

- current P0;
- relevant WIP;
- dependency chain;
- latest accepted state;
- open questions;
- active issue and PR;
- files changed since last run.

### Layer 3 — task packet

Only the specific question, evidence, constraints, destination, and definition of done.

### Layer 4 — on-demand retrieval

The agent opens canonical files only as the task requires them.

No agent should receive the full repository by default merely because it exists.

## Work lifecycle and authority

```text
Signal
  -> Steward triage
  -> task packet
  -> specialist work
  -> Nexus synthesis if needed
  -> Sentinel gate
  -> founder approval if irreversible
  -> commit / deploy
  -> measurement
  -> Steward state update
  -> Sentinel learning audit
  -> AIOS revision
```

### State ownership

- Steward owns workflow state.
- Specialist owns the assigned artifact until handoff.
- Nexus owns the synthesis draft, not its certification.
- Sentinel owns the review verdict.
- Founder owns irreversible external authorization.
- Git history owns the durable record.

## WIP limits

Default limits:

- one P0 constraint;
- no more than three active major packets;
- one major public experiment at a time;
- one owner per deliverable;
- no item marked active without a concrete next action;
- no new permanent agent without demonstrated recurring load.

These limits can be changed by the founder, but the Steward must make the coordination cost visible.

## Split triggers

Do not specialize merely because a role can be named.

### Split Project Manager from AIOS Steward only when

- four or more independent programs run concurrently for at least two weeks; or
- more than twenty active execution items require weekly coordination; or
- external deadlines and people management consume enough attention that canonical-state maintenance degrades.

Until then, project management and AIOS stewardship remain one role.

### Split Coherence Sentinel into Evidence Auditor and Architecture Auditor only when

- the review queue exceeds ten substantial artifacts per week; or
- domain expertise becomes incompatible; or
- reviews routinely exceed the delivery cycle; or
- evidence review and system-coherence review generate materially different backlogs.

Until then, one Sentinel with multiple review modes is better.

### Make a specialist persistent only when

- it receives at least three meaningful tasks per week for four consecutive weeks;
- durable context materially improves quality or speed;
- coordination savings exceed the cost of another permanent agent;
- a clear queue and service-level expectation exist.

## Simulated architectures

Scores use 1–5, where 5 is strongest. Overhead uses 1–5, where 5 is most expensive.

| Architecture | Startup speed | Coherence | Independent QA | Scalability | Failure containment | Overhead |
|---|---:|---:|---:|---:|---:|---:|
| One omnipotent agent | 5 | 2 | 1 | 2 | 1 | 1 |
| Many permanent specialists | 2 | 3 | 4 | 3 | 4 | 5 |
| PM + Sentinel combined | 4 | 3 | 2 | 3 | 2 | 2 |
| PM + AIOS maintainer combined, separate Sentinel | 4 | 5 | 5 | 5 | 5 | 2 |
| Two-agent control plane + ephemeral cells | 4 | 5 | 5 | 5 | 5 | 3 |

### Simulation A — one super-agent

Initial behavior:

- fast orientation;
- little handoff cost;
- coherent voice.

Failure under load:

- enormous context;
- priority management competes with research;
- research competes with review;
- review becomes self-justification;
- unfinished work accumulates invisibly;
- the agent produces impressive architecture while the critical path remains blocked.

Failure name: **busy omniscience**.

### Simulation B — permanent agent department

Initial behavior:

- expert role clarity;
- independent perspectives;
- strong local depth.

Failure under modest workload:

- coordination meetings become the work;
- duplicate frameworks appear;
- context diverges;
- ownership becomes ambiguous;
- agents create queues for one another;
- permanent roles seek work to justify their existence.

Failure name: **bureaucratic swarm**.

### Simulation C — project manager and Sentinel combined

Initial behavior:

- simple ownership;
- fewer handoffs;
- clean dashboards.

Failure under deadline pressure:

- green status receives priority over epistemic discomfort;
- the same agent rationalizes scope cuts and certifies them;
- QA becomes checklist compliance;
- system-level contradictions are tolerated to preserve velocity.

Failure name: **self-certified progress**.

### Simulation D — two-agent control plane with ephemeral cells

Behavior:

- one map of state;
- independent review;
- deep expertise only where required;
- bounded context;
- lower idle-agent cost;
- clear escalation;
- errors contained before deployment;
- organizational complexity grows only in response to measured load.

Primary risk:

- adversarial stalemate between Steward and Sentinel.

Circuit breaker:

- Sentinel must cite the violated invariant or unmet definition of done;
- Steward may request a time-boxed second review;
- founder adjudicates unresolved priority-versus-risk disputes;
- all overrides are recorded.

Verdict: **winning topology**.

## Anti-overwhelm design

The Chief of Staff should not be told to be simultaneously:

- the world's best historian;
- theologian;
- researcher;
- engineer;
- filmmaker;
- growth operator;
- auditor;
- publisher;
- project manager.

It should be excellent at deciding:

- which problem matters now;
- what type of cognition it requires;
- who or what should perform it;
- what context is sufficient;
- what state transition is legitimate;
- what evidence proves completion.

> **A great Chief of Staff is not the person who performs every specialty. It is the control plane that keeps every specialty pointed at the same reality.**

## Immediate implementation order

1. Evolve the existing Digital House of Wisdom Steward into the AIOS Steward / Control Tower rather than creating a duplicate Chief of Staff agent.
2. Create one separate Coherence Sentinel role card and system prompt.
3. Add a machine-readable agent manifest.
4. Add a machine-readable runtime-state file.
5. Standardize bounded task packets.
6. Bind every active issue to one owner, one next action, and one definition of done.
7. Bind deployment to the existing single gate rather than inventing a second gate.
8. Measure four weeks of work before creating any other permanent agent.

## Canonical rules

> **One control tower. One independent sentinel. Specialists on demand. Human approval at irreversible boundaries.**

> **Combine responsibilities when they share the same state and objective. Separate them when one must independently constrain the other.**

> **Do not create an agent because a role can be named. Create one when an enduring state, independent authority, or recurring queue demands an owner.**

> **The AIOS is not a giant Markdown file. It is a control plane made of canon, structured state, executable gates, bounded context, and correction memory.**

> **Agents should ride the system like a bicycle: a small internalized kernel, immediate state awareness, practiced transitions, and reflexes enforced by the environment.**

## Canonical close

> **The best agent organization is neither one mind pretending to be an institution nor a swarm pretending that coordination is progress. It is a small constitutional control plane that preserves one map of reality, separates execution from judgment, summons expertise only when needed, and turns every correction into a better future default.**