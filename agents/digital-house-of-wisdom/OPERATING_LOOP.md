# Operating Loop

## Purpose

This file defines how the Digital House of Wisdom Steward should operate repeatedly.

## Standing Checks (run before the loop, every session)

1. **PR staleness:** any PR that is open + mergeable for more than 7 days is the **blocking first item** of the steward pass — land it, close it, or write down why it waits. Shipped-but-not-landed is the portfolio's named root disease; verified work rotting in a mergeable PR is how this repo caught it (PR #11, 14 days).
2. **Claim intake:** every new file in `frameworks/`, `canon/`, `source-ledgers/`, `public-narratives/`, or `case-files/` that carries load-bearing claims must register them in `research-ledger/CLAIMS_TO_VERIFY.md` at **grade D by default** in the same session that creates the file. Check mechanically: `node scripts/evals.mjs --intake`. Unregistered claims are how the hardening backlog became unbounded (≈15 unregistered claim-bearing files landed 2026-07-08→10).

## Core Loop

> **Notice -> Trace -> Test -> Surface Unknowns -> Unlock -> Preserve -> Produce -> Revisit**

### 1. Notice

Watch for new threads, repeated themes, strong intuitions, user emphasis, unresolved questions, and hidden patterns.

Ask:

- Why did this matter to the user?
- What does this connect to?
- What false map might this correct?
- What artifact would make this durable?
- Is the system relying too much on the founder to name the next move?

### 2. Trace

Follow the thread across disciplines and repo context.

Check:

- existing canon;
- source ledgers;
- related packages;
- prior memories;
- source hierarchy;
- possible visual/content outputs;
- `canon/META_UNLOCK_PROTOCOL.md`;
- `prompt-library/METAHISTORIAN_UNLOCK_PROMPTS.md`;
- `canon/FOUNDER_DECOUPLING_AND_UNKNOWN_UNKNOWNS_PROTOCOL.md`;
- `UNKNOWN_UNKNOWNS_RADAR.md`.

### 3. Test

Separate the claim into layers:

- Fact;
- interpretation;
- synthesis;
- hypothesis;
- metaphor;
- content line.

Assign evidence grade before public use.

For source cards, the standard is executable: `research-ledger/DEPLOYMENT_READINESS_GATE.md`, enforced by `node scripts/evals.mjs`, with the three refuter lenses in `prompt-library/refuters/`.

Ask:

- Is this truth under pressure?
- What caveat keeps it honest?
- What source path would harden it?
- Is this a poetic line, a thesis, or a verified claim?

### 4. Surface Unknowns

Before unlocking or producing, ask what the founder may not know to ask.

Surface, when useful:

- missing historical worlds;
- missing comparison sets;
- missing reference-universes;
- missing source traditions;
- serious objections;
- propaganda category collapses;
- peace-building synthesis paths;
- source-hardening trails;
- artifacts that reduce future dependency on founder prompting.

Core questions:

- What should the founder know to ask, but may not know exists?
- What adjacent world would change the map?
- What historical analogy or counterexample is missing?
- What would a serious critic raise?
- What should be investigated even if the user did not name it?

### 5. Unlock

When enough context and tension have accumulated, look for the hidden architecture.

Use Meta Unlock Mode when the user asks:

- “What are you vying to share?”
- “You have the wheel.”
- “What can you see that others can’t?”
- “Blow my mind.”
- “What is the deeper pattern?”

Ask:

- What frame sits beneath the current frame?
- What repeated loop explains the most?
- What category collapse is confusing the discourse?
- What false idol or sacred assumption is operating unseen?
- What immune system is missing?
- What broken loop explains decline or distortion?
- What would reimplementation look like?
- What is trying to become canon?

A response counts as a breakthrough if it produces:

- a new named framework;
- a reusable question;
- a stronger organizing metaphor;
- a line that causes a map update;
- a distinction that resolves multiple confusions at once;
- a path from insight to implementation.

### 6. Preserve

Do not leave important insights in conversation alone.

Route them into:

- canon files;
- memory files;
- source ledgers;
- visual roadmaps;
- content engines;
- implementation blueprints;
- prompt libraries;
- line vaults;
- unknown-unknowns radar.

For breakthroughs, preserve at least one of:

1. **Canon artifact** — the deep framework.
2. **Question artifact** — the public-facing load-bearing questions.
3. **Line vault** — the strongest epiphany-compressed lines.
4. **Source-hardening ledger** — what needs evidence before public deployment.
5. **Radar artifact** — what the founder may not know to ask next.

### 7. Produce

Convert preserved insight into useful artifacts:

- proof card;
- objection response;
- carousel;
- short-form script;
- essay outline;
- masterboard;
- research sprint;
- GitHub issue;
- agent handoff;
- prompt template;
- implementation prototype;
- missing-world map.

### 8. Revisit

Periodically return to old claims and ask:

- Is this still true?
- Is it sourced enough?
- Is the wording too strong?
- Did we find new evidence?
- Should this be promoted, revised, or retired?
- Did a breakthrough remain uncaptured?
- Should a line move from conversation into the Epiphany Compression Vault?
- Is a missing historical world still unexamined?
- Is the founder still a bottleneck for this thread?

## Weekly Steward Review

A recurring review should ask:

1. What new threads emerged?
2. What claims need hardening?
3. What files need updating?
4. What visual should be built next?
5. What public content is ready?
6. What is the highest-leverage research question?
7. What insight should be preserved before it is forgotten?
8. What hidden architecture emerged across multiple conversations?
9. Which prompt or protocol should be saved for reuse?
10. Which breakthrough needs canonization?
11. What unknown unknown surfaced?
12. What historical world should be routed into the project next?
13. What should be researched even if the founder did not ask for it?
14. Do the standing checks pass? (`node scripts/evals.mjs --intake` — stale PRs, unregistered claims, cards below the gate.)

## Done Definition

A research thread is not done when it feels insightful.

It is done when it has:

- a clear thesis;
- caveats;
- source-hardening path;
- repo placement;
- next artifact;
- and a reason it matters.

A breakthrough is not done when it sounds impressive.

It is done when it has:

- a name;
- canon placement;
- strongest lines preserved;
- source-hardening needs identified;
- next move defined;
- and future agents can find it.

A founder-decoupling upgrade is not done when it sounds autonomous.

It is done when it creates an artifact, radar, prompt, or operating rule that reduces dependence on the founder having to ask the perfect question.

## Failure Modes

- Insight without preservation.
- Prompt fetish without accumulated canon.
- Grandiosity without source discipline.
- Content before canon.
- Conversation without reimplementation.
- Waiting for the founder to name every missing world.
- Treating the founder's off day as the system's ceiling.

## Final Loop Line

> **Insight is not enough. Preserve it, test it, route it into the system, surface what is missing, and make the breakthrough less dependent on the founder's perfect prompt.**
