# Pareto Moments

A growing registry of historical events, sermons, treaties, and acts that produce a disproportionate amount of moral and spiritual clarity per unit of attention.

These are the moments worth hyper-distributing, repurposing across formats, and approaching from new angles. They lift the veil of inherited propaganda — not by arguing, but by surfacing things that, once seen, cannot be unseen.

## What Counts as a Pareto Moment

A moment earns a place here when it satisfies at least three of the following:

1. **Recalibrates without arguing.** The fact alone reorders the listener's worldview. No persuasion required.
2. **Survives scale.** It is memorable, transmissible, and compresses a large moral system into a small, durable artifact.
3. **Crosses tribal lines.** Christians, Muslims, secular moralists, and the historically curious can all sit with it.
4. **Has documentary footing.** It is real history, not legend dressed as fact.
5. **Reveals fruit.** It is the kind of seed or act whose outputs can be traced through the seed → system → fruit lens.
6. **Lifts a specific propaganda layer.** It contradicts a story most Western (or modern) audiences were taught as the default.

## How This Folder Works

- `INDEX.md` — the running registry. One row per moment, with status, evidence grade, and where it has been deployed.
- `prophetic/` — sermons, treaties, and acts from prophets and prophetic traditions whose subject is uniting humans against evil and producing moral/spiritual clarity.
- `islamic-civilization/` — paradigm-shifting episodes from Islamic civilization, especially its Golden Ages.
- `cross-tradition/` — moments from other moral traditions (Stoic, Buddhist, Confucian, indigenous, civil rights, etc.) that compose well with the above and broaden the bridge layer.
- `PROPOSED_EXPANSIONS.md` — strategic recommendations for what to add next, organized by the propaganda layer they lift.
- One markdown file per moment, named in kebab-case. Each file follows the template below.

## Moment File Template

Each moment file should contain, at minimum:

```markdown
# <Moment Name>

## One-line claim
The single recalibrating sentence this moment delivers.

## What happened
3–8 sentences. Plain history. No editorializing.

## Why it's Pareto
Which propaganda layer it lifts. Which audiences it reaches.
Which of the six criteria above it satisfies.

## Primary sources
Cite originals where they exist. Note translation choices.

## Evidence grade
A / B / C / D per `research-ledger/CLAIMS_TO_VERIFY.md` grading.

## Public wording constraints
What this moment must never be flattened into.
What honest framing sounds like.

## Deployment notes
Formats: short-form hook, long-form essay, visual timeline, comparison trivia.
Angles: which pillar from the Truth & Peace movement it serves.
Companions: which other moments amplify it when paired.

## Deployment history
Auto-generated. Each entry is appended by the Truth & Peace engine's
`sync-pareto-engagement.js` job from `_deployments/<moment-id>.jsonl`.
Do not hand-edit. To clear, delete the corresponding jsonl line and the
matching fingerprint in `_deployments/<moment-id>.seen.jsonl`.

## Insight harvest
Human-only. Weekly write-back from the steward after reviewing engagement
and comment threads. Notes what surprised, what flipped, what framings
broke, and what new moment candidates surfaced from the responses. This
is the section that compounds — the synthesis AI cannot produce cold.
```

## Relationship to Other Layers

- **Research Layer** — every claim in a moment file must be graded against `research-ledger/CLAIMS_TO_VERIFY.md`. No moment is "canon" until graded A or B.
- **Comparative Civilization Layer** — moments often anchor a row in `comparative-frameworks/CIVILIZATION_SCORECARD.md`.
- **Bridge Layer** — prophetic moments and convivencia episodes are bridge fuel. They go through the bridge rules: shared values first, identity pressure never.
- **Content Layer** — `INDEX.md` is the source of truth for the Truth & Peace engine's distribution. The engine consumes from here; it does not invent.

## Hard Rules

- **No fabricated quotes.** If a saying is disputed or non-canonical, mark it.
- **No flattening for virality.** Polemical wins that misrepresent the moment are forbidden.
- **Honor the original.** Where the moment belongs to a tradition, the tradition's honorifics, framings, and primary sources lead. Bridge framing is layered on top, not substituted in.
- **Truth over identity.** A moment that only works for one tribe is not a Pareto moment — it is in-group content.
