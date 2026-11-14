# Public Sites — Build from One Cold Brain, Not Two Competing Archives

**Status:** Proposed execution contract. Site status observed 2026-11-12 via connected GitHub and Vercel account, not live public GET test. **Do not interpret this document as production-deploy authorization.**  
**Research owner:** Civilizational Memory OS (CMOS). **Publication/creative owner:** Truth & Peace Engine. **Site implementations:** the existing `sites/` directories in CMOS.  
**Purpose:** Launch `IslamFromFirstPrinciples.org` and `IslamicGoldenAges.org` as two views of a common provenance-backed knowledge graph, not two rival source databases.

## The two distinct promises

| | IslamFromFirstPrinciples.org | IslamicGoldenAges.org |
|---|---|---|
| **Question** | "What does the Qur'an actually say, in Arabic and context, and what do interpreters do with it?" | "What did people build, who benefited, and how did Islamic-period societies compare with their contemporaries?" |
| **Consumer job** | Inspect text, translation decision, interpretive alternative and authority type. | Explore a dated artifact, comparable institution/period, explanatory hypothesis and real failures. |
| **Canonical research** | `initiatives/islam-from-first-principles/RESEARCH_CHARTER.md` & `TRANSLATION_LAB_V0_1.md`; issues [#107](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/107) and [#109](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/109). | `sites/islamicgoldenages.org/PUBLIC_KNOWLEDGE_ARCHITECTURE.md`; issues [#54](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/54) and [#98](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/98). |
| **Research record genre** | Arabic edition + verse + grammar/context + translation alternative + tafsir/disagreement + review status. | Historical Record / Comparative Finding / Our Synthesis / Renewal Lab, each with its distinct label and claim/source links. |
| **Avoid** | Unreviewed original English rendered as definitive divine wording; root-count claims of theological rank; conflating Qur'an with hadith/fiqh. | Cherry-picked before/after, sources without period IDs, invented "first", doctrinal text presented as widespread lived practice, generic unsourced hero tales. |
| **MVP proof** | A fully traceable Arabic-first passage such as Qur'an 6:38 with explicit translation-draft label, alternate reading, provenance and corrections; visible source-first method. | One source-cleared institution / claim page with a time-locked, equally documented comparator, provenance/correction UI and public-safe verdict. |
| **Media bridge** | Selected source-cleared Jesus/Mary and Qur'anic-ethics episodes can be adapted to ILJ, by Truth & Peace. | Golden Ages social universe uses museum-like records, static revelations, sourced short video, original animation/GIFs. |

## Vercel status — actual connected-account inspection, 2026-11-12

### Islam From First Principles
- Vercel project: `islam-from-first-principles` (project id retained in Vercel, not duplicated in this repo).
- Project API returned `latestDeployment.readyState=READY` for a **preview** (target null), and `live=false`. **READY preview ≠ production domain verified.**
- Custom domain `islamfromfirstprinciples.org` is listed on the project, but `get_domain_config` returned `misconfigured=true`. Authoritative nameservers are SpaceShip `launch1.spaceship.net`/`launch2.spaceship.net`. Current apex A addresses returned were `34.216.117.25` and `54.149.79.189`, not the response's recommended `76.76.21.21` Vercel A record.
- Existing `sites/islam-from-first-principles/README.md` described the same failure in October. Verified it remains unresolved in current Vercel read.
- **Next action:** DNS admin first verifies no mail/other important records share these targets; change only the exact verified apex A configuration through the domain's actual DNS provider with an approved change window; rerun Vercel domain config, HTTPS/GET, accessibility, and source-accuracy QA. No DNS change was made by this session.

### Islamic Golden Ages
- `list_projects(search="islam")` returned the First Principles Vercel project only; **no matching Islamic Golden Ages Vercel project was found in that search**. It might exist under another name/team, so avoid categorical nonexistence claims until wider inventory.
- `get_domain_config(islamicgoldenages.org)` returned `misconfigured=true`, SpaceShip nameservers and old A values `34.216.117.25`/`54.149.79.189`, with Vercel A recommendation `76.76.21.21`. This is a DNS configuration check, not proof that the site is associated with a Vercel project.
- GitHub has three `noindex` **proof render** HTML pages in `sites/islamicgoldenages.org/public/`: hospital, university and waqf. No public site launch can be inferred from these.
- **Next action:** choose/verify the destination Vercel team/project and Git root; determine whether to serve a coherent mobile pilot landing + one source-gated proof page before removing `noindex`. Test preview first, get explicit go for production, then attach/configure custom domain after project-ownership and DNS checks. No production deploy was performed here.

**Domain state may change; always rerun account- and DNS-level checks before any update.** Do not modify unrelated domains or mail configurations.

## Smallest useful public release — not a generic brochure

### First Principles: "Read the source before the interpretation"
- On landing, visitors see precise Arabic, scoped close English gloss, alternate renderings and the *specific decision* behind the translation.
- Each note carries a status: original Arabic / transliteration / original draft translation / interpretive comment / specialist-reviewed. Show independent review outcome or transparently state review pending.
- First corpus: 1:1–7 and 6:38 with linguistic comments on `al-Raḥmān`, `al-Raḥīm`, and `umamun amthālukum`; textual genre and edition fixed. Use the existing v0.1 translation lab, not newly generated definitive scripture.
- Every card has "How to correct this" pointing to the existing issue/process; correction does not silently rewrite an old version.

### Golden Ages: "The most surprising history with the receipts attached"
- Lead with *one* human-scale surprising case tied to an approved claim, such as animal jurisprudence or a hospital comparison, plus its dated source label.
- Click into **four explicitly separated tabs/sections**: Historical Record, Comparative Finding, Our Synthesis, Renewal Lab.
- At least one dated comparator is **same era and same measure**; a multi-century comparison is labeled as a chronological/legal-history contrast, never synchronized cities.
- Link to `CMOS-####` record IDs and correction history; distinguish a normative jurist's clause from a governmental regulation from actual enforcement.
- Public copy leads with the strong finding, with contextual proof immediately available—not an accusation counterattack or a caveat wall.
- Existing hospital/university/waqf proof renders can be reused if source gated, but are not a complete application or a publication receipt.

## Provenance/data contract

No second claim ledger or database for the websites. The shared data contract is `research-ledger/CANONICAL_CLAIM_RECORD.md`; source of structured claims is `archive/claims.json` built from cards, using `scripts/archive.mjs`, `scripts/evals.mjs`, `scripts/render.mjs` as the current pipeline. Verify actual command flags from code before running.

**Minimum public JSON/object view for each record:**
- `id`, `source_record_url`, `claim_layer`, `epistemic_status`, `grade`, `closure`, `scope`, `safe_wording`, `original_evidence`, `scholarly_sources`, `counterevidence`, `last_reviewed`, `corrections`.
- Extra for Qur'an-first: `edition`, `qiraa`, `orthography`, `verse`, `translation_status`, `alternate_rendering`, `reviewers`.
- Extra for Golden Ages: `place_id`, `time_range`, `institution_id`, `comparison_axis`, `beneficiaries`, `practice_evidence`, `known_failure`, `historical_or_synthesis_label`.
- Never synthesize absent fields as if archived facts. **Don't pretend this list is already an implemented schema extension.** It is the serving/view contract to map into existing source models only when required by the first real page.

## Release QA before either public site goes live

1. Proof: exact owner/team/project/Git commit, environment, deployment status, domain DNS & HTTPS success.
2. History/linguistics: approved source cards, original editions, honest status labels, correction URL, no invented primary quotations.
3. UX: readable Arabic, RTL + accessible controls, mobile performance, link quality, license/attribution, screen-reader support and visual truth labels.
4. Security/privacy: no credentials, protected source data or sensitive account information exposed in generated files.
5. Distribution: media uses only claim-safe wording; Truth & Peace per-item explicit approval remains separate from site-PR approval.
6. Monitoring: verify error logs and version rollback/correction behavior after release.

## Existing work tickets (don't fork)

- [CMOS #107](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/107) — First Principles evidence + site.
- [CMOS #109](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/109) — translation QA.
- [CMOS #54](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/54) — Golden Ages proof site.
- [CMOS #98](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/98) — atlas.
- [T&P #238](https://github.com/AlexFC0810/truth-and-peace-engine/issues/238) — First Principles content handoff.
- [T&P #246](https://github.com/AlexFC0810/truth-and-peace-engine/issues/246) — Golden Ages static creative, pending source-gated release.

**Definition of done:** a new agent can locate the canonical research, current product state, source-readiness gate, exact unresolved blocker and owner *without* asking the founder to tell the story again.
