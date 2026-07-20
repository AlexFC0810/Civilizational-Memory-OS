# Merge Authority Standard — what the CoS merges, and what always returns to the founder

**Granted 2026-07-20 by the operator, verbatim intent:** *"as far as PR #73 go ahead and merge it, you have my permission… it's too much friction for me to click it, open it and all that, so I'm just going to tell you for all PRs."*

The friction was real and the delegation is accepted. But blanket authority with no boundary would quietly delete the one safety rail this repo was built around — **authority binds to presence** (DB29 Law 6), where the founder's click *was* the presence. So the delegation is written down, bounded, and auditable. The founder can revoke or widen any line here at any time; until then, this is the standard the CoS operates under.

> **The governing principle:** the founder should never have to *fetch* — but must always *decide* the things only he can decide. Removing clicks is the goal. Removing judgment is not.

## Tier 1 — MERGE, no ask (the friction the founder wanted gone)

The CoS merges without asking when **all** of these hold:

- `node scripts/evals.mjs` green + `--intake` zero on the merge result;
- no unsafe-wording or overclaim leakage into any rendered/deploy-facing artifact;
- the change is **reversible** (docs, protocols, source cards, index, scripts, bindings, renders);
- it does not touch a Tier-3 subject below.

Typical: seat deliverables that pass every standing check · integrations the CoS itself verified · doctrine and binding headers · gate/index/render improvements · card additions · MASTER_PLAN and queue updates.

## Tier 2 — FIX, THEN MERGE (the real unlock)

Most open PRs were never blocked by the click alone — they were blocked by **reconciliation work nobody had done**. Under this standard the CoS performs that work itself, then merges under Tier 1 rules. The triage verdict on each PR is the work order.

The CoS reports what it changed on the PR before merging. It never rewrites an author's substance to make a PR mergeable — bindings are additive; if substance must change, it goes back to the author or to Tier 3.

## Tier 3 — ALWAYS RETURNS TO THE FOUNDER (never merged on standing authority)

These are not friction. These are the decisions the system exists to protect.

1. **The Aisha lane (RP-HA-001 / PR #57 and any successor).** Maximum blast radius by the founder's own repeated standing instruction — *"Opus 2nd pass + frontier adjudication + founder sign-off before anything deploy-facing… never rushed."* The decision packet is prepared **so the founder can decide**; merging it on his behalf would defeat the protocol that produced it.
2. **Anything deploy-facing that names a living person** — defamation discipline; the founder carries that risk personally.
3. **Anything that weakens or forks the gate's authority** — a second pass/fail path, a competing grade vocabulary, or a change that lets a claim ship without a green receipt. (Binding a proposal *into* the gate is Tier 2; creating a rival gate is Tier 3.)
4. **Publishing / distribution across the T&P boundary** — Standing Check #3. CMOS never publishes; that click is the Voice Engine operator's.
5. **Grade-A sign-off on a deploy-facing claim** — per `MODEL_ROUTING.md`, frontier + human, unchanged.
6. **One-way doors generally** — anything the CoS cannot undo with another commit: deleting history, force-pushing main, closing a lane, external commitments.

**When a PR is Tier 3, the CoS does not sit on it.** It does the preparation — packet, diff summary, recommendation, the exact question — and hands the founder a decision that takes one read and one word, not an investigation.

## Standing obligations under this grant

- **Every merge is announced** with its receipts (gate result, what changed, what was held). No silent merges.
- **Anything held is named**, with the reason and what would unblock it. A held PR with no stated path is a failure of this standard.
- **The FLEET_LOG and MASTER_PLAN record the merge train's actual state**, so the founder can audit without asking.
- **Escalate on doubt.** If a PR sits ambiguously between tiers, it is Tier 3. Cheap to ask, expensive to be wrong.

*Companion protocols: `SEAT_LIFECYCLE_AND_DEFINITION_OF_DONE.md` (one seat's life) · `FLEET_COORDINATION_SPINE.md` (many seats at once) · this file (what the CoS may land without the founder).*
