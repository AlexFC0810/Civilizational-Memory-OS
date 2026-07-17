# The Mīzān Archive — Claude Code Implementation Handoff

**Date:** 2026-07-17  
**Status:** Canonical handoff  
**Target:** Claude Code, Codex, developers, designers, researchers, and future agents  
**Branch of origin:** `agent/mizan-archive-universe-canon`

---

## 1. What Was Decided

The image concept of a metahistorian detective-scholar was expanded into an original transmedia universe called **The Mīzān Archive**.

The strategic reframe is decisive:

> This is not an Islamic reskin of Sherlock Holmes. It is an original civilizational mystery, historical-intelligence, educational, and institution-building universe.

The visible story layer must sit above Civilizational Memory OS rather than become a separate source of historical truth.

The architecture is:

> Truth infrastructure underneath. Narrative mythology above. Public participation around it. Civilizational construction beyond it.

---

## 2. Mandatory Reading Order

Before implementation, read:

1. `AGENTS.md`
2. `canon/MIZAN_ARCHIVE_FOUNDING_CONSTITUTION.md`
3. `narrative-universe/README.md`
4. `narrative-universe/MIZAN_ARCHIVE_UNIVERSE_BIBLE.md`
5. `narrative-universe/CHARACTER_FACTION_AND_LONG_ARC_BIBLE.md`
6. `narrative-universe/VISUAL_SOUND_AND_LANGUAGE_SYSTEM.md`
7. `narrative-universe/CASE_001_THE_MISSING_CIVILIZATION.md`
8. `frameworks/MIZAN_TRANSMEDIA_AND_DATA_FLYWHEEL.md`
9. `templates/MIZAN_CASEFILE_TEMPLATE.md`
10. `research-agendas/MISSING_CIVILIZATION_SOURCE_HARDENING_ROADMAP.md`
11. `prompt-library/MIZAN_ARCHIVE_STORYROOM_MASTER_PROMPT.md`

For public Islamic defense or polemical work, also read:

12. `canon/TRUTH_CONSTRAINED_ZEALOUS_ADVOCACY_DOCTRINE.md`
13. `prompt-library/CREATOR_DEFENSE_COUNSEL_BOOT_PROMPT.md`

Do not implement from this handoff alone.

---

## 3. Project Placement

The Mīzān Archive belongs inside Civilizational Memory OS as the canonical narrative/distribution layer.

Do not create a separate repository yet unless implementation scale later requires it.

Reason:

- historical verdicts must inherit from existing source ledgers and canon;
- agent instructions need one root of truth;
- narrative and evidence drift must be prevented;
- public assets can later be exported into product repositories without duplicating canon.

Potential future deployment repositories may exist, but this repository remains the upstream constitutional and historical authority.

---

## 4. Immediate Implementation Objective

Build one complete vertical slice:

# Case 001 — The Missing Civilization

Do not build ten cases, a giant lore site, merchandise, or an elaborate fictional map first.

The vertical slice should include:

1. a 12–18 minute production-ready script;
2. a storyboard and shot list;
3. a scroll-based interactive casefile;
4. an evidence and confidence ledger;
5. a 30–60 second trailer;
6. four character cards;
7. a Seven Chambers visual map;
8. a classroom or creator briefing edition;
9. a Renewal Forge ending connected to IslamicGoldenAges.org and the Digital House of Wisdom.

The pilot is not ready for factual lock until the source-hardening roadmap is completed.

---

## 5. First Technical Build

The first useful product should not be a general chatbot.

Build:

# Which Layer Said It?

## Core Interaction

A user enters a claim attributed to Islam.

The system classifies or asks questions to determine whether the claim derives from:

- Qur'an;
- Prophetic report;
- jurisprudence;
- theology;
- scholarly interpretation;
- political implementation;
- local custom;
- historical practice;
- colonial or nationalist reconstruction;
- modern ideology;
- mixed or unknown provenance.

## Output

- exact claim;
- likely layer or layers;
- confidence;
- source path;
- chronology;
- what is established;
- what remains disputed;
- strongest corrective distinction;
- relevant casefiles.

## Guardrail

The tool must not answer every query with false confidence. Unknown and mixed provenance are legitimate outputs.

---

## 6. Data Architecture

Implement the case system around structured objects rather than prose pages alone.

Minimum entities:

- Claim;
- ClaimVariant;
- Source;
- SourceRelation;
- EvidenceRelation;
- Person;
- Institution;
- Location;
- Event;
- Interpretation;
- AuthorityLayer;
- PropagandaPattern;
- Verdict;
- Revision;
- RenewalImplication;
- NarrativeAsset.

Minimum relation types:

- supports;
- contradicts;
- qualifies;
- contextualizes;
- depends_on;
- repeats;
- translates;
- mistranslates;
- projects_backward;
- conflates;
- institutionalizes;
- supersedes.

Do not assign arbitrary precision to confidence before the methodology is designed.

Start with explicit states:

- established;
- strong;
- probable;
- contested;
- weak;
- unresolved;
- unsupported.

---

## 7. Suggested Repository Implementation Structure

Do not move canonical files without a deliberate migration.

For app implementation, a future directory or deployment repo may use:

```text
/apps
  /archive-web
  /casefile-viewer
  /which-layer-tool
/packages
  /claim-schema
  /source-graph
  /design-system
  /agent-roles
/content
  /cases
  /characters
  /chambers
  /public-verdicts
```

The current repository remains the authority for canon and historical research.

---

## 8. Design-System Instructions

The visual system is not optional decoration. It communicates the epistemology.

Signature transformation:

> Red thread becomes geometry.

Required themes:

- lapis;
- parchment;
- restrained brass;
- charcoal;
- deep red for contested relations;
- emerald for renewal.

Prohibited defaults:

- deerstalker hat;
- pipe;
- Baker Street imitation;
- generic Arabian Nights imagery;
- gold-on-black luxury as the entire identity;
- meaningless AI-generated Arabic;
- Qur'an as magical prop;
- all-Muslim-history-as-sepia;
- random conspiracy board without evidence status.

Use the Seven Chambers as a modular product and navigation system.

---

## 9. Agent Architecture

Do not build one omniscient Mīzān chatbot.

Use chamber roles:

- Archivist: provenance and citation;
- Cartographer: chronology, institutions, power, and routes;
- Witness: lived experience and social reality;
- Examiner: strongest countercase and falsification;
- Advocate: public compression and burden control;
- Builder: renewal implications;
- Steward: synthesis and verdict.

The Steward may not bypass the other roles.

Store intermediate outputs so final verdicts have an auditable path.

---

## 10. Historical Safety and Verification

Every historical claim in a cinematic script must map to:

- a claim ledger entry;
- sources;
- authority layer;
- confidence;
- strongest counterevidence;
- allowed wording;
- prohibited overclaim.

Special caution areas:

- first-in-history claims;
- invention claims;
- direct causal claims from Qur'anic verses to later science;
- university and hospital genealogy;
- scientific-method claims;
- perfect-tolerance narratives;
- Europe-stole-everything narratives;
- singular Golden Age framing;
- depictions of historical figures whose appearance is unknown.

The narrative may be forceful. It may not be brittle.

---

## 11. Sacred Boundaries

- Do not depict God.
- Do not depict the Prophet Muhammad ﷺ, including silhouettes or glowing pseudo-depictions.
- Do not invent dialogue for prophets.
- Treat Qur'anic text and physical copies with reverence.
- Verify visible Arabic.
- Label translations as translations.
- Do not use sacred recitation as generic soundtrack.
- Do not convert revelation into a magical plot mechanic.

---

## 12. Anti-Drift Rules

Future agents must not:

- rename the universe casually;
- turn the Archive into generic fact-checking;
- turn the Steward into a sectarian hero;
- make the West, Christianity, Judaism, atheism, or modernity the universal villain;
- erase the Red Examiner's countercase;
- replace source ledgers with cinematic certainty;
- create a third-sect interpretation of the People of the Qiblah Commons;
- overbuild lore before Case 001 works;
- place the narrative layer above the constitutional truth layer;
- generate public copy from raw research without verdict status.

---

## 13. Definition of Done for Case 001

Case 001 is complete when:

- the script has a claim-by-claim evidence ledger;
- every major line has a confidence status;
- the strongest countercase remains in the final narrative;
- the film demonstrates all Seven Chambers or their functions;
- the audience learns at least one reusable investigative method;
- the interactive casefile exposes evidence and uncertainty;
- the story ends with concrete renewal;
- sacred and visual review is complete;
- public assets can be revised when historical verdicts change;
- the work points into the real institutional ecosystem.

---

## 14. Highest-Leverage Next Tasks

Execute in this order:

1. Convert the pilot treatment into a scene-by-scene script.
2. Build the claim ledger before polishing narration.
3. Select five to eight high-confidence historical case studies.
4. Create the Seven Chambers product map.
5. Build the first Which Layer Said It? prototype.
6. Produce a visual style frame set from the canonical design system.
7. Create a public landing page only after the above can be demonstrated.

---

## 15. Final Instruction

Do not merely plant seeds or summarize the idea.

Build from the full canon.

Preserve why the architecture exists:

- the story creates distribution;
- the Archive creates trust;
- the data creates compounding intelligence;
- the agents create scale;
- the Renewal Forge converts memory into civilization.

> **Until the first case works, expansion is camouflage.**
