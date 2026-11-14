# Civilizational Memory OS — Fresh-Thread Boot

**Status:** Active canonical front door on the default branch (activated via PR #113, 2026-11-13); ongoing research source-gating and editorial review remain separate.  
**Owner:** Civilizational Memory OS (research and truth); **operator interface:** an agent in a fresh conversation or a code agent with repository access.  
**Snapshot:** 2026-11-12. Operational facts age; verify issue/PR/deployment state at runtime.

## The one-minute contract

> **We do not start over. We retrieve, challenge, improve, and preserve what already exists.**

A fresh thread should begin from this repo's **accepted canon and actual evidence records**, not from an AI summary of an older chat. This repo is the **cold brain**: source material, claims, rival explanations, corrections, long-form synthesis, provenance, and research frontier. Its smaller **hot brain** is the working context of the current task: a short brief, the relevant canonical references, unresolved question, status, next action, and a receipt. Hot context is a cache, not the source of truth.

**North Star (working synthesis, not a claim that all historical questions are settled):** Recover overlooked civilizational history and moral intelligence so accurately and memorably that a curious person can learn a surprising truth, trace its sources, understand what it means, and pass it on. **The ultimate result is improved judgment and institutions—not views alone.**

**Current comparative thesis under investigation:** "More power does not mean more mercy." Islamic Golden Ages are a geographically plural, mixed, morally consequential case for studying what happens when mercy, knowledge, justice, and accountability become law, institutions, practice, and sometimes are betrayed by power. This is **our research lens**, not a substitute for independent verification. The modern world and other historic civilizations must be held to the same burden.

## Start with the existing authorities (do not reread the entire repo)

1. **Constitution and routing:** [AIOS.md](AIOS.md), [AGENTS.md](AGENTS.md), [START_HERE.md](START_HERE.md). `AGENTS.md` is binding for agents. `MASTER_PLAN.md` indexes ranked research work but contains dated milestones—verify current board and files before treating as live.
2. **Framework / verdict hierarchy:** [canon/ISLAMIC_CIVILIZATION_OPERATING_SYSTEM.md](canon/ISLAMIC_CIVILIZATION_OPERATING_SYSTEM.md), [canon/FRUIT_TEST_AND_MORAL_ARCHITECTURE.md](canon/FRUIT_TEST_AND_MORAL_ARCHITECTURE.md), [canon/OPINIONATED_TRUTH_SYNTHESIS_LAYER.md](canon/OPINIONATED_TRUTH_SYNTHESIS_LAYER.md), [canon/CIVILIZATIONAL_NARRATIVE_OPERATING_SYSTEM.md](canon/CIVILIZATIONAL_NARRATIVE_OPERATING_SYSTEM.md), [canon/TRUTH_CONSTRAINED_ZEALOUS_ADVOCACY_DOCTRINE.md](canon/TRUTH_CONSTRAINED_ZEALOUS_ADVOCACY_DOCTRINE.md). Open **only what the question requires**.
3. **Indexed historical facts:** [archive/LOAD_BEARING_INDEX.md](archive/LOAD_BEARING_INDEX.md) and [archive/claims.json](archive/claims.json) with source files in [source-cards/](source-cards/). The index is a *map of claims*, not automatic permission to publish.
4. **Evidence and QA:** [research-ledger/CANONICAL_CLAIM_RECORD.md](research-ledger/CANONICAL_CLAIM_RECORD.md), [research-ledger/DEPLOYMENT_READINESS_GATE.md](research-ledger/DEPLOYMENT_READINESS_GATE.md), [protocols/CANONICAL_INTEGRATION_GATE.md](protocols/CANONICAL_INTEGRATION_GATE.md), [source-ledgers/](source-ledgers/), [research-packets/](research-packets/). `node scripts/evals.mjs` is the existing mechanical gate. A structural PASS is not source truth.
5. **Conversation → memory:** [protocols/CONVERSATION_TO_CANON_MECE_PROTOCOL.md](protocols/CONVERSATION_TO_CANON_MECE_PROTOCOL.md). Every meaningful thread changes a canonical artifact, contributes a source/correction, or receives a bounded issue; another transcript dump by itself is not progress.

**Comparative-history trigger:** If the question concerns Islamic civilization's moral achievements, ask *what was actually normal at the time?* Read [the Fruit Stack & Comparative History Method](canon/FRUIT_STACK_AND_COMPARATIVE_HISTORY_METHOD.md), especially **Historical Calibration Loop — Evidence Before Intuition**. It preserves the founder's observation that deeper historical study sharpens recognition of benevolent institutions, while requiring actual contemporaries, law-to-law comparisons, and the full seed → law → enforcement → outcome chain. Report the genuinely new research delta rather than replaying generic claims.

**House of Wisdom launcher:** For a free-form new investigation or parallel research missions, use [HOUSE_OF_WISDOM_CONTINUOUS_DISCOVERY_BOOT.md](prompt-library/HOUSE_OF_WISDOM_CONTINUOUS_DISCOVERY_BOOT.md). Its run modes retrieve the evidence floor, seek genuinely new sources, form bounded archetypes, and save the **delta**. Companion working research in [CMOS draft PR #111](https://github.com/AlexFC0810/Civilizational-Memory-OS/pull/111) covers phase archetypes and ranked golden threads; a draft PR is not accepted canon.

**No three-page onboarding before every task:** Read this boot, run targeted repo search, load just the governing files for that task, inspect latest issues/PRs, then execute.

## The map: where each kind of work lives

| Layer | Owner | Input and output | Boundary |
|---|---|---|---|
| Civilizational **cold brain** | `AlexFC0810/Civilizational-Memory-OS` | Primary sources → evidence cards → adversarial audit → accepted, versioned claim/synthesis → source-safe exports | No automatic promotion from fascinating story to historical fact |
| Quran-first research | [initiatives/islam-from-first-principles/](initiatives/islam-from-first-principles/) | Arabic text, edition, root/grammar, translations, tafsir, disagreement, interpretive status; [issue #107](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/107), [translation #109](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/109) | Primary Qur'an ≠ hadith ≠ fiqh ≠ historical practice; translations not certified without specialist review |
| Golden Ages comparative history | [civilizational-memory/islamic-golden-ages/](civilizational-memory/islamic-golden-ages/), [research-ledger/](research-ledger/) and related accepted canon | Same-period institution comparisons; Baghdad–Palermo–Nishapur atlas [#98](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/98); proof bundle [#54](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/54) | Distinguish law from enforcement, norm from average outcomes, and dated artifacts from reconstruction |
| Truth & Peace **hot production brain** | `AlexFC0810/truth-and-peace-engine` | Source-cleared claims → approved language → static images, comparisons, reels, GIFs, long-form, measurement → feedback to CMOS | No new independent research verdict; no publishing without explicit per-asset founder go |
| Public Quran-first interface | [sites/islam-from-first-principles/](sites/islam-from-first-principles/) | Approved Arabic-first research, visible alternate readings and correction route | Alpha site exists in repo; Vercel/DNS status must be revalidated |
| Public Golden Ages interface | [sites/islamicgoldenages.org/](sites/islamicgoldenages.org/) | Evidence-led Historical Record → Comparative Finding → Our Synthesis → Renewal Lab | Three proof HTML pages currently explicitly `noindex`; these are NOT a verified live finished site |
| Portfolio / prioritization | `AlexFC0810/portfolio-command` | Cross-initiative allocation and routing | Do not move history source truth or media production here |

**Alias warning:** older references to `History-of-Islamic-Civilization-os` refer to the prior history-focused naming. The existing [Truth & Peace Golden Ages handoff](https://github.com/AlexFC0810/truth-and-peace-engine/blob/main/movements/islamic-golden-ages/HANDOFF.md) documents renaming the canonical claims base to `Civilizational-Memory-OS`. Do not fork that archive.

## How to determine whether a thought is already known

1. Restate the *exact* claim/question and decide its layer: `quran / prophetic / fiqh / institution / culture / outcome / synthesis`.
2. Search the 24-record [archive/claims.json](archive/claims.json), [archive/LOAD_BEARING_INDEX.md](archive/LOAD_BEARING_INDEX.md), then targeted canonical/ledger/research folders. Check archived names and supersession links.
3. Cite the strongest existing `CMOS-####` claim ID, allowed wording, evidence grade, `closure`, `epistemic_status`, `lifecycle`, last verification, counterevidence and **what it does not prove**.
4. If a claim is present but only reconnaissance-grade, **deepen it**: original-language document, dated edition, actual context, independent corroboration, rebutting source, observed implementation and exact scope. Avoid opening a duplicate "big research" issue.
5. If a finding is new, atomize it to an existing claims template. Link rather than rewrite the entire intellectual history.
6. If older working synthesis conflicts with stronger research, record correction + supersession; **don't silently overwrite**.
7. The public-facing copy should be as strong as the adjudicated evidence supports. Never convert real laws into "just teachings"; never convert jurists' prescriptions into universal implementation. Evidence-based conviction, not ritual caveating or triumphalist invention.

## Current benchmark — measured, not assumed complete

At **2026-11-12**, the `main` `archive/claims.json` contains **24 claim records: 8 grade A, 16 grade B; 22 closure `reconnaissance`, 2 `provenance-audited`, 0 `source-closed`; 16 lifecycle `verified`, 8 `triaged`**. These labels measure specific parts of the pipeline and do **not** mean only 24 claims have ever been researched. The repo contains extensive prose canon, source ledgers, and preliminary source packets, which still need structured closure where consequential.

**Do not call the cold brain "fully built" yet.** The defensible finish line is an operational system in which high-impact knowledge is discoverable, evidence-graded, current, source-checkable, correctable, linked to media outputs, and advances without rerunning old discovery.

**90-day outcome benchmark (proposed, not current reality):**
- Zero important research lost solely in conversation; every substantive insight routed or explicitly declined.
- Every top-priority deployment claim has a stable identifier, verification chain, named counterevidence, actual gate receipt and owner.
- A fresh thread can locate the relevant canon + open decision + exact next task **without founder retelling**.
- Both public site projects have deploy proofs, source labels and visible correction paths; no unreviewed translation or illustration is promoted to historical evidence.
- Every content asset links back to its source/correction record, and every correction can reach derivatives.

## Two pending November draft upgrades — do not mistake PR for merged canon

- [CMOS draft PR #111](https://github.com/AlexFC0810/Civilizational-Memory-OS/pull/111) — comparative Golden Ages research, thesis, **Islamic animal jurisprudence and Ottoman law before Britain's 1822 Act**, and open archival checks.
- [Truth & Peace draft PR #243](https://github.com/AlexFC0810/truth-and-peace-engine/pull/243) — animal-mercy content, comparative films, memetics, source-to-static tests and the stronger law-to-law story.
- Source closure: [CMOS #112](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/112); visual production: [T&P #246](https://github.com/AlexFC0810/truth-and-peace-engine/issues/246). **Open PRs are candidate changes, not accepted `main` truth.**

## Fresh thread / code agent handoff

> Read `AlexFC0810/Civilizational-Memory-OS/COLD_BRAIN_BOOT.md` on the **default branch**, then `AIOS.md` and `AGENTS.md`. Treat accepted claims and corrections as prior work, not fresh hypotheses. For my request, search the canonical index and relevant ledgers first; return a 5-line "Known / Evidence status / Missing / Recommended delta / Execution owner" diagnosis; execute the smallest source-validated improvement and commit it. Check latest active issues/PRs and avoid duplicate architectures. Truth & Peace owns production; two public sites own presentation; nobody auto-publishes. End with a commit or issue receipt, not only a chat summary.

**Work now, not from scratch.**
