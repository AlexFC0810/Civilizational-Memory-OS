# Cold Brain — Verified baseline and activation plan

**Captured:** 2026-11-12 from GitHub main contents and existing issues. **Status:** observed snapshot plus proposed actions, not evergreen truth. Refresh via repository contents and issue/API before reusing.

## Present (verified via GitHub)

| Component | Observed | Limitation / next |
|---|---|---|
| Constitutional AIOS | `AIOS.md`, `AGENTS.md`, `START_HERE.md` present | Very rich orientation, but a fresh conversation can easily lose the Pareto route amid ~dozens of canon folders. Use `COLD_BRAIN_BOOT.md` as one-hop boot. |
| Typed factual index | `archive/claims.json` schema `canonical-claim-record/v1`; 24 entries, 8 A / 16 B, 22 reconnaissance / 2 provenance-audited / 0 source-closed | Before saying "source closed", inspect the exact record, claim card and gate transcript. Structured records underrepresent the full research corpus; don't infer all other work is missing. |
| High-value facts index | `archive/LOAD_BEARING_INDEX.md` with T1/T2/T2-D tiers | Use to prioritize closure, never upgrade a T2 claim by narrative force alone. |
| Existing research | `source-cards/` 24 cards and many `canon/`, `source-ledgers/`, `research-ledger/`, `research-packets/`, and `civilizational-memory/` | One high-value "build out" move is provenance closure and de-duplication; don't restate all 24 cards. |
| Gate | `research-ledger/DEPLOYMENT_READINESS_GATE.md`, `scripts/evals.mjs` | Structural gate exists; code not executed by this GitHub audit. Gate output/primary source transcript must accompany any claim promoted for publication. |
| Islam from First Principles research | `initiatives/islam-from-first-principles/RESEARCH_CHARTER.md`, `TRANSLATION_LAB_V0_1.md`; issues [#107](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/107), [#109](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/109) open | Primary Arabic edition/translation peer review pending, not “complete”. |
| Islam from First Principles site | `sites/islam-from-first-principles/index.html` dependency-free alpha; documented Vercel project and alias | README dated 2026-10-10 says apex DNS misconfigured; **not live-verified in this audit**. Use fresh Vercel status + DNS + HTTPS checks rather than assuming fixed/failed. |
| IslamicGoldenAges.org site | `sites/islamicgoldenages.org/PUBLIC_KNOWLEDGE_ARCHITECTURE.md` + three rendered HTML proof pages in `public/` | Pages are `noindex` proof renders. No verified deployed site; Phase 1 proof bundle [#54](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/54) open. |
| Atlas | [#98](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/98) open; Baghdad → Palermo → Nishapur | Rich plan, not a completed tri-city source-closed atlas. |
| Production | `AlexFC0810/truth-and-peace-engine` (Golden Ages movement + foundries + review surfaces) | Human per-item release approval; review/current channel status separately. |
| November research upgrade | CMOS [draft #111](https://github.com/AlexFC0810/Civilizational-Memory-OS/pull/111) | Includes animal-law chronology and moral-progress thesis; not merged, so do not silently treat as main canon. |
| November creative upgrade | T&P [draft #243](https://github.com/AlexFC0810/truth-and-peace-engine/pull/243) | Contains static comparisons and POV system; still a draft. |

## One architecture, not many

```
Qur'an/Arabic editions + historical sources + specialist research + archives
                 ↓ (acquire)
CMOS evidence ledger + atomic claims + rival models
                 ↓ (adjudicate, corrections)
CMOS accepted canon + indexed claim records + provenance
             ↙                    ↘
First Principles site        Golden Ages site
 (revelation/grammar)         (record/comparison)
                 ↓ (approved source handoff)
     Truth & Peace Engine — original media, static memes, video, GIFs
                 ↓ (approved individual publication / measurement)
              audience feedback → CMOS corrections
```

### Disagreement to preserve
A public image might rely on a **jurist's legal doctrine**, an **enacted Ottoman city regulation**, or a **particular court's implementation**. These must not be collapsed. The stronger November source packet corrects our previous failure to call Islamic *laws* mere teachings; source-type precision must elevate strength, not suppress documented legal reality.

## Pareto backlog (do not create duplicate trackers)

1. **Claim closure, flagship animal law:** bring original editions of al-Māwardī / Ibn ʿAbd al-Salām / 1502–1507 Istanbul & Bursa codes / a real court-enforcement case into the existing record structure (CMOS [#112](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/112), older [#110](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/110)). Exact old-to-new source card identity must be assigned by existing ID allocator.
2. **First Principles alpha → accessible site:** resolve DNS and protected deployment after fresh external status; add an exact Arabic source-edition/version receipt, a bounded reviewed passage and correction workflow (CMOS [#107](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/107), [#109](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/109)).
3. **Golden Ages site proof → true four-layer pilot:** promote already rendered hospital/university/waqf materials into a source-gated, public-ready comparative matrix and mobile site, not an ungrounded landing page (CMOS [#54](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/54), [#98](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/98)).
4. **Media:** T&P [#246](https://github.com/AlexFC0810/truth-and-peace-engine/issues/246) static review batch, using CMOS closed claims; explicitly separate production from research. Don't post while review gate is incomplete.
5. **Distribution learning:** Feed exact comprehension, saves/shares, source questions, and corrections back into the same claim and approved-expression system. Keep approved language a *view* over claim records, not a competing factual database.

## Expected first 30 days (proposal; not a completed deliverable)

- **Week 1:** merge front door after review; fix stale handoffs and pointers; assign one atomic source closure, one website delivery audit per domain.
- **Week 2:** source-close first narrow animal law case with original texts and counterevidence; First Principles DNS and static alpha public GET proof if technically permitted.
- **Week 3:** Golden Ages site has one genuine four-layer institution page + one time-locked comparison with proper citations and correction route; after technical/site review.
- **Week 4:** source-to-site handoff and one public-ready, individually approved static/video package; record outcomes and open research questions.

**No claim that an agent is already executing an issue merely because the issue exists.**
