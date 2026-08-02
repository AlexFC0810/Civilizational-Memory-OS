# Research Packet Execution Index

**Purpose:** Convert the Civilizational Intelligence terrain map into bounded, auditable research assignments for Codex, Claude Code, and human researchers.

> Map centrally. Scout modularly. Red-team adversarially. Integrate cautiously. Publish only what survives.

## Packet lifecycle

`queued -> researching -> submitted -> red-team -> revision -> integrated -> superseded/closed`

No packet may move directly from raw research to canon.

## Packet ID convention

`RP-{THEATER}-{NUMBER}`

- `EA` — epistemic authority
- `HA` — historical allegation / source provenance
- `SL` — slavery and manumission
- `MC` — moral capital and secularization
- `VP` — violence and peace mechanisms
- `WV` — worldview and revelation
- `PI` — propaganda immunity
- `CI` — Civilizational Intelligence benchmark

## First execution batch

| Packet | Question | Priority | Parent issue | Status |
|---|---|---:|---:|---|
| `RP-EA-001` | How should Qur’an, Sunnah, hadith, sira, fiqh, consensus, custom, and empire be separated when attributing a claim to Islam? | P0 | #17 | queued |
| `RP-HA-001` | What is the provenance and historical reliability of the Aisha six/nine age reports? | P0 | #15, #17 | red-team — founder decision packet at `RP-HA-001_FOUNDER_DECISION_PACKET.md` (PR #57 adjudication; awaiting founder sign-off) |
| `RP-SL-001` | What slavery inflows, protections, and exits are present in the Qur’an, and does the architecture tend toward depletion or reproduction? | P0 | #15 | queued |
| `RP-MC-001` | Can the inherited-moral-capital hypothesis explain Nordic trust better than competing institutional and material explanations? | P0 | #15 | queued |
| `RP-VP-001` | Is institutional separation of religion and state sufficient to eliminate war or mass political violence? | P1 | #86, #87 | source-closure-needed — upstream TPE source ID `youtube:n6I-V3iNeFo` |

## Integration dependencies

- `RP-EA-001` should finish before any canon-level verdict relying on hadith or Sunnah.
- `RP-HA-001` depends on the distinctions formalized by `RP-EA-001`.
- `RP-SL-001` may begin in parallel but must separate Qur’anic architecture from later jurisprudence and empire.
- `RP-MC-001` is independent and should be explicitly assigned to both a supporting researcher and a falsification researcher.
- `RP-VP-001` depends on alignment of its upstream canonical recording, a matched comparative case matrix, and an independent causal red team; Karen Armstrong is a research mapmaker, not terminal authority.

## Upstream source promotion

Use `templates/SOURCE_PROMOTION_PACKET_TEMPLATE.md` when a bounded knowledge object originates in an external or sibling source-intelligence system. Promotion packets are intake objects and must still pass the existing Canonical Integration Gate and executable deployment-readiness floor. Do not copy raw archives into this repository merely to submit a proposition.

## Required output bundle

Every completed packet must include:

1. packet markdown using `templates/AGENT_RESEARCH_PACKET_TEMPLATE.md` or the source-promotion template when upstream lineage is load-bearing;
2. source bibliography with stable links or identifiers;
3. primary-source excerpt table;
4. strongest supporting case;
5. strongest opposing case;
6. breaker evidence;
7. confidence-scored verdict;
8. integration targets;
9. list of public claims that remain prohibited;
10. changelog entry.

## Agent role separation

### Scout agent

Collects and structures evidence. Does not decide canon.

### Red-team agent

Searches for counterexamples, source problems, mistranslations, anachronisms, and omitted comparison classes.

### Integration agent

Reconciles scout and red-team outputs, updates claim cards and ledgers, and proposes a provisional verdict.

### Canon editor

Accepts, narrows, rejects, or defers the proposed verdict.

## Stop conditions

Pause a packet when:

- the exact question has expanded into multiple independent questions;
- primary sources cannot be identified;
- the comparison class is unstable;
- key terms remain undefined;
- the agent is relying on public summaries rather than specialist evidence;
- a verdict is being forced despite unresolved breaker evidence.

## Canonical rule

> Research volume is not progress unless it reduces uncertainty, exposes disagreement, or improves the map.
