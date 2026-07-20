# Seat Lifecycle & Definition of Done — the anti-sprawl constitution

> **Companion:** this file governs **one seat's life**. When several seats run at once, `FLEET_COORDINATION_SPINE.md` governs the physics between them (namespace allocators, the fleet log, the RE_ENTRY ritual) — read both before spawning a parallel cycle.

**Adopted 2026-07-19 (operator directive: "when we create stuff as a worktree it should have a definition of done… so it just tells me to close it").** Canonical here (Civilizational-Memory-OS holds the governance spine); every repo in the portfolio adopts by pointer. Binds forward into the agentic OS: this is the lifecycle layer `AIOS.md` was missing.

## The distinction that prevents sprawl

**A conversation is not an agent.** Confusing the two is how thread-sprawl happens: conversations kept alive forever to preserve an identity that should live in a file.

- **Seats (sessions, chips, worktree threads) are ephemeral task forces.** They exist to meet a Definition of Done, deliver receipts, announce completion, and be archived.
- **Agents are durable definitions** — files (`.claude/agents/*.md`, boot docs like `agents/digital-house-of-wisdom/THE_ARCHIVIST.md`, manifest rows in `aios/AGENT_MANIFEST.yaml`). They persist across any number of disposable sessions.
- **Identity lives in files, not threads.** If a session has accumulated knowledge or identity worth keeping, that is a signal to *extract it to a file* (boot doc, memory, protocol), not to keep the thread alive. The thread is scaffolding; the repo is the building.

## The lifecycle (every spawned seat)

**SPAWN → WORK → DELIVER → CLOSE SIGNAL → ARCHIVE → (maybe) GRADUATE**

1. **SPAWN** — a seat may only be spawned with the six mandatory fields (below) in its prompt.
2. **WORK** — receipts cadence per repo rules (here: green `node scripts/evals.mjs` after commits).
3. **DELIVER** — receipts land as commits/PRs/files, never only as chat text.
4. **CLOSE SIGNAL** — on meeting its Definition of Done, the seat ends its **final message** with exactly:
   `🏁 DONE — <one-line receipts> — safe to archive this session.`
   and stops. If blocked on something only a human or another seat can provide:
   `⛔ BLOCKED — needs <X> from <who>.` and stops.
5. **ARCHIVE** — the operator archives the session on sight of 🏁 (worktrees clean up; branches/PRs remain — the work product was never the thread).
6. **GRADUATE** — see the graduation rule.

## The six mandatory spawn fields

No chip, worktree, or delegated thread is spawned without:

1. **Mission** — one sentence.
2. **Definition of Done** — enumerated, checkable, finite. If you cannot enumerate it, you are spawning a lane, not a seat — stop and split it.
3. **Receipts** — the artifacts that prove each DoD item (files, green runs, PR links).
4. **Close signal** — the exact 🏁 line above.
5. **Escalation path** — what routes to the Chief of Staff vs. the operator.
6. **Lane boundaries** — the never-do list (e.g. "never merges to main", "never publishes").

## Anti-sprawl kill rules

- **Done means stop.** A seat that meets its DoD does not self-extend into adjacent work. New work = a new chip (routed through the CoS), or a handoff note. Scope changes mid-flight route to the CoS; silent extension is a violation.
- **Idle is a state, announce it.** A seat with nothing left but waiting says ⛔ BLOCKED and stops burning the thread.
- **Seven-day sweep.** Any seat silent past 7 days is closed by the operator (mirrors the PR-staleness rule). Unfinished work returns to the queue, not the thread.
- **One seat per lane.** If a duplicate seat appears, the newer folds into the elder — same rule as one-agent-one-definition.
- **Standing duties never live in a session.** Anything recurring (weekly checks, intake hygiene) belongs to an agent definition + fresh short-lived sessions, never to a thread held open.

## The graduation rule (chip → agent)

A seat graduates to a **durable agent** when either:
- the same seat-shape has been spawned **3+ times**, or
- its mandate contains **standing duties** (no finite DoD can cover it).

Graduating means: check a definition into `.claude/agents/<name>.md` (invocation shim pointing at the ONE identity/boot doc — never a second identity), and register it in `aios/AGENT_MANIFEST.yaml`. Thereafter the agent runs as subagent calls or fresh chips that boot from the definition — each still carrying a finite DoD. **The Archivist graduated 2026-07-19** (`.claude/agents/the-archivist.md`) — the first durable agent of this repo.

For repos that already have many agents: same law applies in reverse — any long-lived *thread* holding unique identity is a smell; extract to a definition and archive the thread.

## Retrofit appendix — the four live seats (2026-07-19), for the operator's checklist

| Seat | Definition of Done | Then |
|---|---|---|
| 🏛 The Archivist (session) | LB-29 + LB-01 carded through the gate; index entries promoted; commits pushed | 🏁 archive — standing duties live in the agent definition, not this thread |
| 📥 Wave Triage Steward | 5 triage comments posted (PRs #57/60/62/67/68); MASTER_PLAN rows committed; discrepancies reported | 🏁 archive |
| 🌐 IGA Phase-1 Builder | University + Waqf cards green; 2 pages rendered; grep-proof of zero unsafe-wording leaks; pushed | 🏁 archive |
| ⚖️ Defense-Counsel Prep | Founder decision packet committed; PR #57 comment links it; self-audit run | 🏁 archive — it does NOT wait for the founder's decision; the decision is the founder's asynchronous act |

*Each seat received this DoD as a CoS addendum message the day this protocol was adopted.*
