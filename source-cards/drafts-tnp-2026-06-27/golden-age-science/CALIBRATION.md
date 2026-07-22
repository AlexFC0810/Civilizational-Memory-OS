# Golden-Age science cards — adversarial calibration + integration plan (2026-06-27)

I now have full grounding. The 6 draft cards map almost exactly onto the SOURCE_SPINE "Priority Claims to Harden" (#2 translation, #3 transmission, #4 algebra/algorithm, plus optics, paper, astronomy) — they are the per-claim source-hardened expansions of the existing inline proof cards, and their canonical home is `civilizational-memory/islamic-golden-ages/`, NOT the top-level `source-cards/` (whose `005`/`007` slots are reserved for unrelated topics — that's the filename collision in the first draft card).

Here is the calibration audit and integration plan.

---

# ADVERSARIAL CALIBRATION AUDIT

Verdict against the Public Language Standard ("no invented/first/uniquely") and the 5 Disciplines (METAHISTORIAN_STANDARD.md). All 6 are **clean on the cardinal sins**, with 3 precise residual fixes.

### 1. Residual "invented / first / uniquely" overclaim?
**None asserted.** Every card replaces "invented" with synthesized/advanced/transmitted, and the two highest-risk honorifics are properly demoted:
- `ibn_al_haytham` — **REJECTS** "invented the scientific method / first scientist," downgrades "father of modern optics" to Lindberg's "pivotal figure between antiquity and the 17th c.," and downgrades "invented the camera obscura" to "first clear analysis of the dark-chamber effect." Correct.
- `al_khwarizmi` — "father of algebra" flagged as debated (Diophantus rival); numerals explicitly Indian. Correct.

**One residual to tighten (not a sin, a hedge-word):** `al_khwarizmi` one-liner says "wrote **the** book that carried the Indian decimal numerals westward." The definite article smuggles a soft "first/sole-channel" claim. Fix → "wrote **a** book that became a principal channel carrying the Indian decimal numerals westward." Same for the `ibn_al_haytham` one-liner "**the** foundation European optics built on" → "**a** foundation," since the card itself names Greek antecedents (Euclid/Ptolemy) and parallel Latin figures.

### 2. Honest about Greek/Persian/Indian/Chinese inheritance?
**Yes, all six — this is the strongest dimension.** Greek inheritance is named in 5/6; Indian numerals in al-Khwarizmi; Persian/Indian in astronomy and translation-movement; Chinese origin of paper conceded "up front and repeatedly." Non-Muslim agents are centered, not erased (Hunayn ibn Ishaq the Christian translator; Jewish + Christian scholars at Toledo working "under a Catholic archbishop"). This satisfies Symmetry Discipline.

### 3. Honest about the real (debated) decline?
**Mostly yes, with one gap.**
- `007_graeco_arabic` and `al_khwarizmi` and `islamic_astronomy` all name decline as "real but contested and multi-causal (Saliba)" and explicitly bar "al-Ghazali killed science." Correct, and matches the OS's own `DECLINE_AS_SYSTEM_DEGRADATION.md`.
- `paper_revolution` handles decline well in a domain-specific way ("the lead was genuinely lost to Italian mills by the 13th–14th c.").
- **GAP:** `ibn_al_haytham`, `arabic_to_latin_toledo`, and `al_khwarizmi` do not each independently restate the multi-causal-decline caveat. Not fatal (they're single-figure/transmission cards, not arc cards), but to be airtight, add one line to each pointing at the shared decline card so no card can be quoted in isolation implying a tidy rise-then-villain story. **Cheap fix: a one-line "Decline note" cross-ref in all six.**

### 4. Is any contested transmission asserted as settled? (the Maragha→Copernicus tripwire)
**No — handled correctly, and this is the highest-risk claim in the set.**
- `islamic_astronomy_maragha`: holds it as "a striking, still-debated parallel, not a settled fact," names the dissenter (Blasjo), states "unknown whether Copernicus read Ibn al-Shatir," lists "Muslims invented heliocentrism" as Unsafe, and repeatedly states the models were **geocentric**. Grade B-/C on the channel is correct.
- `arabic_to_latin_toledo`: Copernicus-influence and exact causal weight "flagged as still-debated, not asserted as settled." Correct.
- **One consistency nit:** the astronomy one-liner is excellent ("whether his hand reached theirs is a striking, still-debated parallel, not a settled fact") — make sure the *short/social* derivatives inherit that exact hedge, because this is the single claim most likely to get flattened into "Copernicus stole from Muslims" in a 15-second cut. Flag it in the card's Unsafe Wording as the #1 compression risk (the way `paper_revolution` flags its own "owed entirely" risk).

**One symmetry addition (optional, strengthens durability):** `arabic_to_latin_toledo` rightly cites the Gouguenheim debate (the surviving Greek/Byzantine channel) — good honesty. Confirm the *bridge* line doesn't quietly drop it; the calibrated claim is "a major, often-underacknowledged channel," not "the channel."

**Bottom line:** 0 cardinal overclaims. 3 small fixes — (a) "the"→"a" in two one-liners, (b) a shared decline-note cross-ref on all six, (c) mark Maragha→Copernicus as the #1 compression risk in Unsafe Wording. None block publication of the strong cards; they're polish.

---

# INTEGRATION PLAN

**Canonical home:** `civilizational-memory/islamic-golden-ages/` (NOT top-level `source-cards/`). Reason: `source-cards/005` is reserved for `knowledge_hospitals_libraries` and `007` for `terrorism_collective_guilt` per `source-cards/README.md` — so the draft `007_graeco_arabic_translation_movement.md` filename **collides** and must be renumbered out of that namespace. These six are the per-claim hardened expansions of the inline proof cards in `islamic-golden-ages/CLAIMS_AND_PROOF_CARDS.md` (#2, #3, #4) and SOURCE_SPINE "Priority Claims to Harden" (#2, #3, #4, +optics/paper/astronomy). Create a new subfolder so they don't pollute either namespace.

**Branch:** `tnp/research-contributions-2026-06-27` already exists — commit there (T&P is read-only-by-convention on CM-OS main; contribute via the tnp/ branch + coordinate on CM-OS#7).

### Proposed filenames (zero-padded, topic-named like existing cards)

| Draft | Proposed path | Number rationale |
|---|---|---|
| `007_graeco_arabic_translation_movement.md` | `civilizational-memory/islamic-golden-ages/proof-cards/01_graeco_arabic_translation_movement.md` | new local namespace; maps to CLAIMS card #2 |
| `al_khwarizmi_algebra_algorithm.md` | `.../proof-cards/02_algebra_and_algorithm_lineage.md` | SOURCE_SPINE priority #4 |
| `ibn_al_haytham_optics_method` | `.../proof-cards/03_ibn_al_haytham_optics.md` | (note: draft has no `.md` — add it) |
| `paper_revolution_knowledge_economy` | `.../proof-cards/04_paper_and_knowledge_economy.md` | maps to CLAIMS #3 |
| `islamic_astronomy_maragha` | `.../proof-cards/05_astronomy_maragha_and_star_names.md` | |
| `arabic_to_latin_toledo_transmission` | `.../proof-cards/06_toledo_arabic_to_latin_transmission.md` | keystone bridge |

Plus a `proof-cards/README.md` mirroring the `source-cards/` 10-field card spec, and a back-link from the inline CLAIMS_AND_PROOF_CARDS #2/#3/#4 to the hardened cards.

### Publish-readiness triage

**PUBLISH-READY now (Grade A core + bridge, no extra sourcing needed — only the 3 polish fixes):**
- **`02_algebra_and_algorithm` (al-Khwarizmi)** — strongest. Etymology + systematization + transmission = cross-school A; payload morally neutral and in everyday use. The card's own self-audit says PASS.
- **`03_ibn_al_haytham_optics`** — A on the achievement + Latin bridge; rejections are correctly pre-made. Ready once the "the→a" fix lands.
- **`06_toledo_transmission`** — keystone bridge; B+ but honest about the Gouguenheim counter-channel. Ready.

**PUBLISH-READY WITH the decline cross-ref added (B+ core, one structural line):**
- **`01_graeco_arabic_translation_movement`** — ready, but the House-of-Wisdom myth (graded C, Gutas) MUST stay foregrounded; never let a derivative cut say "House of Wisdom = greatest university." Treat the C-grade as a hard caption-gate.
- **`04_paper_and_knowledge_economy`** — ready; period book-counts are C-grade "traditional scale claims," so any on-screen number needs a "traditional figure, not audited" qualifier.

**NEEDS ONE MORE SOURCING PASS before the contested angle ships:**
- **`05_astronomy_maragha`** — the *named achievements* (star names, Tusi-couple, Ibn al-Shatir equant-free models, Zij-i Ilkhani) are A and publish-ready NOW. The **Maragha→Copernicus parallel is B-/C and gates the most viral angle** — ship the star-names/observatory angle first; hold the Copernicus-parallel cut until the hedge is locked into the short-form template (it's the single claim most likely to be flattened into a false "Copernicus stole it" by an editor). Add one primary-citation anchor for the Tusi-couple/Ibn-al-Shatir mathematical-identity claim (currently asserted via Saliba; pair with a second source) before the contested cut.

### Strongest BRIDGE angle per card (ILJ American-Christian; Fruit Test / "what school didn't teach you")

1. **Translation movement** — *"What school didn't teach you":* "The Greek science behind your civilization's Renaissance survived because Baghdad paid to translate it — and the lead translator, Hunayn ibn Ishaq, was a **Christian**." Fruit Test: the smear "Islam is anti-knowledge" can't explain a two-century state-funded translation economy. (Caption-gate: never call it the House of Wisdom academy.)
2. **al-Khwarizmi** — *Everyday-words hook* (highest viral floor): "You used three things this week that came through one man in Baghdad — **algebra, the word algorithm, and the digits 0–9.**" Concede the inheritance instantly (India originated the numerals) to disarm the "they invented nothing" rebuttal. This is the debut/viral pick.
3. **Ibn al-Haytham** — *"What school didn't teach you":* "When a Christian student at 13th-century Oxford learned how the eye sees, the textbook under the lesson was an Arab Muslim's — and that book ran unbroken to Kepler." Do NOT lead with "father of the scientific method" (rejected).
4. **Paper** — *Fruit Test on the Reformation:* "The paper Gutenberg's press needed — the substrate of printed Bibles and Reformation pamphlets — reached Christian Europe through Muslim hands (Xàtiva → Sicily → Fabriano)." Calibrated verb: *nourished*, never *owed entirely* — Europe added watermarks + mechanized stamping.
5. **Astronomy** — *Look-up-tonight hook:* "The bright stars in your night sky have Arabic names — **Aldebaran, Betelgeuse, Rigel, Vega** — and so do zenith, nadir, azimuth, almanac. The West reads the night sky in Arabic." (Lead here; hold the Copernicus-parallel for a sourced follow-up.)
6. **Toledo** — *Keystone "what school didn't teach you":* "**Thomas Aquinas** leaned so hard on the Muslim philosopher Averroes he called him simply 'The Commentator' — and Aristotle, Euclid, Ptolemy, and Avicenna reached Christian universities **through Arabic**, translated by Christians, Jews, and Muslims side by side under a Catholic archbishop." Gratitude, not rivalry — the most disarming frame in the set.

**Cross-cutting deployment rule (matches `animal_mercy` house style):** every bridge concedes the inheritance *before* the payoff ("India originated the numerals," "paper is Chinese," "built on Greek optics") — that pre-empts the "Muslims invented nothing" rebuttal and is exactly why these survive hostile-but-fair scrutiny. Frame is always *torch handed forward*, never *Muslims gave the West everything* and never *the West stole it*.

---

**Files referenced (all absolute):**
- Convention/format: `C:\Users\Alexel\1. AI Operations\1b-Workspaces-Content&Remotion\history-of-islamic-civillization-os\source-cards\README.md` + `source-cards\003_animal_mercy.md` (the gold-standard template to match)
- Standard: `...\history-of-islamic-civillization-os\canon\METAHISTORIAN_STANDARD.md`
- Canonical home for the 6 cards: `...\history-of-islamic-civillization-os\civilizational-memory\islamic-golden-ages\` (esp. `CLAIMS_AND_PROOF_CARDS.md`, `SOURCE_SPINE.md`)
- Decline cross-ref target: `...\civilizational-memory\decline-and-renewal-os\DECLINE_AS_SYSTEM_DEGRADATION.md`
- Ledger to update on completion: `...\research-ledger\ISLAMIC_GOLDEN_AGES_SOURCE_HARDENING_2026-06-24.md` (Next Research Sprint items #4 translation, #5 math/algorithm are now satisfied by these cards)
- Branch for the contribution: `tnp/research-contributions-2026-06-27`

**Naming-collision flag (load-bearing):** the draft filename `007_graeco_arabic_translation_movement.md` must NOT go into `source-cards/` — `007` is reserved there for `terrorism_collective_guilt`. Renumber into the new `islamic-golden-ages/proof-cards/` namespace as above.