# Claude Code Handoff — Metahistorian Repository Boundary and Oversight Audit V1

> **STATUS: NONCANONICAL HANDOFF**  
> Read before implementing or relocating agents. No merge, deletion, deployment, or canonicalization is authorized without operator approval.

## Operator intent

The operator identified a recurring failure:

- each new conversation can lose the accumulated historical worldview;
- the operator must wrestle the model away from weak referee prose;
- important regions such as al-Andalus and Islamic Sicily can remain omitted until named manually;
- Truth & Peace Engine is becoming both a product studio and an accidental home for upstream truth architecture;
- the system needs a persistent truth-sovereign comparative metahistorian agent and clear repository boundaries.

## Recommended architecture

### Canonical upstream home

**Civilizational Memory OS**

Owns:

- evidence;
- historical claims;
- confidence and status;
- source layers;
- chronology;
- comparison sets;
- unknown-unknown discovery;
- corrections;
- civilizational synthesis;
- truth packets and public boundaries.

### Downstream consumer

**Truth & Peace Engine**

Owns:

- House of Wisdom product experience;
- Sneako/Alex Jones debate preparation;
- argument selection;
- trial-advocacy sequencing;
- creator voice;
- scripts, cards, visuals, rehearsals, clips, and distribution;
- challenge and performance feedback.

### Do not create a third repository yet

First wire the existing systems together. Reconsider a dedicated repository only when the metahistorian has an independent runtime/API, multiple unrelated consumers, separate contributors or permissions, and a release cadence that Civilizational Memory OS cannot support cleanly.

## Required first read

1. `architecture/2026-07-14_METAHISTORIAN_STEWARD_REPO_PLACEMENT_ADR_V1.md`
2. `architecture/2026-07-14_CROSS_REPO_TRUTH_CONTRACT_V1.md`
3. `agents/COMPARATIVE_METAHISTORIAN_STEWARD_V1.md`
4. `research-agendas/2026-07-14_ISLAMIC_CIVILIZATION_COVERAGE_AND_OVERSIGHT_RADAR_V1.md`
5. existing `canon/FOUNDER_DECOUPLING_AND_UNKNOWN_UNKNOWNS_PROTOCOL.md`
6. existing `README.md` and its canonical indexes
7. Truth & Peace Engine draft PR #90 and its full-thread handoff
8. the complete uploaded conversation transcript as provenance and design history

## Critical insight

The al-Andalus and Sicily omission is not an isolated factual mistake.

It indicates that the current pipeline lacks a mandatory **coverage audit**.

Before declaring a civilizational map complete, the system must inspect:

- geography;
- chronology;
- source languages;
- disciplines;
- institutions;
- women and minority participation;
- elite and ordinary life;
- urban, rural, maritime, and diasporic networks;
- valid contemporary comparisons;
- preservation and digitization bias.

## Likely additional oversights to investigate

Do not assume this list is exhaustive.

- Maghreb beyond its role as a bridge to al-Andalus;
- Fatimid, Ayyubid, and Mamluk Egypt as distinct worlds;
- Yemen, Oman, Hadramawt, Red Sea, and Indian Ocean networks;
- Persianate intellectual worlds and Persian-language sources;
- Central Asian cities beyond Bukhara and Samarqand;
- post-Mongol reconstruction, Golden Horde, Crimea, and Volga-Ural Islam;
- Ottoman provincial and Balkan worlds across distinct centuries;
- West African scholarship beyond Timbuktu;
- Swahili coast and East African Muslim cities;
- South Asian sultanates, Bengal, Deccan, Gujarat, Kashmir, and Mughal institutions;
- Southeast Asian Islam beyond the Indonesia rebuttal;
- Muslim China and Chinese-language Islamic thought;
- women, artisans, merchants, sailors, healers, administrators, enslaved and freed people;
- agriculture, veterinary care, sanitation, contracts, education, book culture, maritime law, crafts, and ordinary institutions;
- post-conquest civilizational afterlives;
- non-Arabic source languages;
- rival civilizational achievements outside Europe;
- colonial destruction, archive formation, manuscript dispersal, and modern memory-making.

## Migration task

The Truth & Peace Engine draft branch contains several documents that conceptually belong upstream.

Do not copy all files blindly.

Produce a migration matrix:

```yaml
artifact:
current_repo:
intended_owner:
overlap_with_existing_civilizational_memory_file:
action: merge | adapt | point | snapshot | retire | keep_downstream
provenance_to_preserve:
corrections_to_propagate:
operator_decision_needed:
```

Candidate upstream artifacts include:

- Comparative Metahistorian–Advocate Agent Constitution;
- canonical audit surface and authority laundering;
- evidence → synthesis → hypothesis corpus;
- chronological comparison engine;
- coverage/unknown-unknown logic;
- historical benchmark and correction ledger;
- capacity-and-conscience thesis.

Candidate downstream artifacts include:

- creator-specific Alex Jones response pack;
- Sneako rehearsal cards;
- House of Wisdom UI/product architecture;
- clip and script outputs;
- performance-specific language variants.

Some artifacts should split into an upstream truth packet and downstream expression adapter.

## Minimum executable implementation

Do not begin with a large multi-agent platform.

Propose the smallest implementation that proves the interface:

1. one machine-readable truth packet schema;
2. five source-closed example packets;
3. one versioned export/snapshot directory consumed by Truth & Peace Engine;
4. one freshness/version check;
5. one downstream challenge-report format;
6. one correction-propagation test;
7. one coverage-audit checklist;
8. one eval comparing generated debate output against the Golden benchmark.

Suggested first five packets:

- Qur’an and dog ownership;
- capacity-and-conscience Golden Ages thesis;
- women’s legal personhood with chronology;
- halal/animal covenant source layers;
- battle-manual/permanent-war claim.

## Required gap report

Before implementation, report:

1. insights present in the transcript but absent from both repositories;
2. duplicated concepts with conflicting names;
3. current canonical documents that the new proposal accidentally contradicts;
4. corrections made in conversation that have not propagated;
5. claims that sound public-ready but are still under-sourced;
6. likely historical worlds missing from the current corpus;
7. whether the current Truth & Peace agent is scoped as producer, researcher, coordinator, or an unsafe mixture;
8. the smallest changes needed in each repository;
9. any deletion or consolidation opportunities;
10. decisions that truly require operator judgment.

## No-go actions

Do not:

- merge PR #90 automatically;
- move or delete files without a migration matrix;
- create a new repository merely for conceptual neatness;
- let Truth & Peace Engine become a second editable truth canon;
- let Civilizational Memory OS become a video-production monorepo;
- promote every conversation insight to canon;
- replace existing stronger protocols with newer duplicate language;
- begin UI work before the truth-packet contract is proven.

## Final instruction

> **Treat the full thread as the seed and correction history, Civilizational Memory OS as the upstream memory and truth system, and Truth & Peace Engine as the downstream advocacy and production system. Find what is missing from all three—not only what is missing from the latest document.**
