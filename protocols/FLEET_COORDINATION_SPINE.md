# Fleet Coordination Spine — CMOS bound to the eight laws

**Adopted 2026-07-20, after the first four-seat parallel cycle.** Companion to `SEAT_LIFECYCLE_AND_DEFINITION_OF_DONE.md`: that file governs **one seat's life**; this one governs **what happens when several run at once**. Upstream doctrine: DB29 *The Laws of Agentic Coordination* (doctrine-hub) + the Nexus Dispatch Standard. Nothing here is aspirational — the first cycle paid for the two mechanisms marked **NEW**.

## What the first cycle proved

Four seats ran in parallel worktrees overnight. **All four delivered** (archive 9 → 13 gated claims, a founder decision packet, six PRs triaged, two site pages rendered). **All four sessions then vanished** from the session list. Every receipt survived — on branches. That is Law 1 winning in our own yard, unprompted.

It also produced the failure the laws predict: two seats independently minted **CMOS-0010 and CMOS-0011**, and git merged both *silently* because the filenames differed. Nothing in the gate noticed. An hour later that would have been a corrupt public archive.

> **The lesson, stated as law:** parallel seats do not collide on *content* — the mission keeps them apart. They collide on **namespaces**: ids, row numbers, filenames, queue positions. Every shared namespace needs an allocator, and the allocator must be **mechanical**, because seats cannot see each other's branches.

## The eight laws, as they bind here

| # | Law | CMOS mechanism | Status |
|---|---|---|---|
| 1 | **Durable state beats chat** | Seats deliver as commits/branches/PR comments, never chat-only. Cross-repo handoff = the T&P `INBOX-*` file. | ✅ enforced by habit; proven under session death |
| 2 | **Single-writer family** | One card id ↔ one file (gate-enforced, below). One resolver seat (CoS) owns cross-lane synthesis. One fact, one home — the crosswalk, never a new vocabulary. | ✅ **NEW: now code-enforced** |
| 3 | **Suggestions down, receipts up** | CoS sends seats *labeled suggestions with reasoning* (the triage verdicts), and seats may refute them from fresher state — the Triage Steward did exactly this, upgrading row 21 into verified rows 21a–21f. Receipts flow up compressed. | ✅ proven this cycle |
| 4 | **A ritual per context state** | BOOT = `START_HERE` → `AIOS.md` → `MASTER_PLAN.md` → `MISSION_AND_VISION.md`. RE_ENTRY = the ritual below. | ⚠️ RE_ENTRY newly written, untested |
| 5 | **Sweeps make rot loud** | Standing Checks: PR-staleness >7d, `--intake` zero-delta, distribution boundary. Seat 7-day sweep. | ✅ enforced; consumer-coverage audit still a gap |
| 6 | **Authority binds to presence** | Merges to main = the operator's click. Founder sign-off gates the Aisha lane. Publishing requires a green gate receipt. | ✅ enforced, twice refused correctly |
| 7 | **Contracts over tools; splits earned by pain** | The collision check extended the **existing** gate — no new tool, no dashboard. Seats were spawned only after triage pain was demonstrated. | ✅ held |
| 8 | **Best solution wins by contact with reality** | The Steward's trench-built rows beat the CoS's summary row and replaced it. Outperform-or-explain. | ✅ proven this cycle |

## NEW — Mechanism 1: the ID allocator (Law 2, code-enforced)

**The filename prefix IS the allocator.** `012_waqf_endowment_engine.md` must carry `id: CMOS-0012`. Two checks now run inside the gate (`findIdCollisions` in `scripts/archive.mjs`, called by `scripts/evals.mjs`):

1. **One id, one card** — duplicate ids FAIL and name both files.
2. **Prefix ↔ id agreement** — a renamed file with a stale id FAILS.

Critically, the gate **refuses to write `archive/claims.json` when a collision exists** (exit 1). A corrupt index must never reach disk, because `render.mjs` and `nlm-pack.mjs` trust it completely. Verified by deliberately reintroducing the exact collision: caught, both files named, index untouched.

**Seat rule:** before minting a card number, run `ls source-cards/` **and** `git branch -r` — another seat's branch may already hold the next number. When two seats collide anyway, resolution order is (a) namespace owner (The Archivist owns card numbering), then (b) earlier `date:`. The later card renumbers — file, id, and every reference.

**Generalization:** the same discipline applies to every shared namespace. MASTER_PLAN row numbers collided this cycle too (two seats both wrote row 22). Rows are prose, so the fix is social: **append with your seat's initial** (`21f`, `22-cos`) or accept a renumber at integration.

## NEW — Mechanism 2: the FLEET_LOG (Law 1 + Law 3)

Harvesting four seats took four separate branch investigations, because their receipts were durable but **unindexed**. `agents/FLEET_LOG.md` fixes that at near-zero cost: each seat appends **one line** on completion — date, seat, branch, one-line receipt, 🏁/⛔. Harvest becomes one read.

This is the cheapest possible version on purpose (DB16 meta-law: coordination machinery that costs more than the coordination it saves is the disease). It is a log, not a board; nobody maintains it, seats only append.

## The RE_ENTRY ritual (Law 4) — for the CoS seat specifically

When this seat resumes after any gap, before answering anything:

1. **Watermark** — `git log origin/main --oneline -5` and note the last SHA this seat knew.
2. **Replay the world's journals since it** — `git branch -r --sort=-committerdate | head`, `gh pr list`, `agents/FLEET_LOG.md` tail, and the session list. Discovered state beats remembered state.
3. **Delta brief** — state out loud what changed and **which of my assumptions are now invalid**. (This cycle: "the four seats I believed were paused had in fact all delivered, and their sessions were gone.")
4. **Then** act.

Skipping this is how a resumed coordinator overwrites decisions made while it slept.

## The standing kill rules (fleet edition)

Parallel seats collide on namespaces, not content · every shared namespace needs a mechanical allocator · a corrupt index must never reach disk · the trenches may refute the coordinator and usually win · receipts live in commits, never only in chat · one resolver per cross-lane question · coordination machinery must cost less than the coordination it saves.
