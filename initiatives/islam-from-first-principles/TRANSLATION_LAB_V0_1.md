# Qur'an Translation Lab — Proposal, Protocol, and Pilot (v0.1)
**Status:** Research proposal and unreviewed working translation; NOT a commissioned/scholarly-certified Qur'an edition.  
**Created:** 2026-10-13. **Issue:** [#109](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/109). Parent initiative: [#107](https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/107).  
**Owner:** Civilizational Memory OS — Islam from First Principles.  
**Related canon:** `canon/MERCY_UNDER_ASYMMETRIC_POWER.md`; `canon/FRUIT_TEST_AND_MORAL_ARCHITECTURE.md`; existing research-ledger schema.  
**Public status:** *No verse certified for release as a definitive translation.* Do not claim the translation is the most accurate or best until external blinded evaluations establish that.

## Why
Create a high-fidelity, clear English interpretation of the Qur'an that does not disguise translation choices as the only reading. Make the reading experience compact (80/20), with optional expandable deeper layers: original Arabic → close rendering → readable rendering → linguistics and alternatives → intertext and manuscript/history → interpretive dispute → methodological confidence. Preserve interpretive pluralism without hiding the initiative's disclosed Qur'an-centered editorial lens.

The **translation itself must be the closest defensible reading**, not a vehicle for forcing contemporary ethics, theological agendas, comparative civilization claims, or modern science into the words. Footnotes can argue; translated text must resist editorial capture.

## Non-negotiable QA
1. **Primary edition and recitation.** Document chosen Arabic textual edition, orthography (Uthmani vs normalized), verse numbering, and qirāʾa (initially Ḥafṣ ʿan ʿĀṣim if selected after source audit). Record variants materially altering meaning. Copyright/license provenance required for bulk ingestion. Compare primary Arabic as actually attested, rather than inferring it from any English translation.
2. **Word-level analysis.** Morphology, inflection, possible syntax, semantic range (attested classical usage), discourse function, immediate context, parallel passages, ambiguity, and rhetoric. Use Corpus Qur'an and qualified Arabic lexicons as aids, not as automatic or infallible judges.
3. **Original English draft.** Two views only if useful: *close* vs *readable*. Place editorial expansions in labeled notes, not inside falsely literal quotation. Avoid borrowing extended wording from copyrighted translations.
4. **Alternatives and pressure test.** Compare, without simply copying, well-established English editions (e.g. Abdel Haleem, Arberry, Muhammad Asad, Pickthall, Sahih International, Mustafa Khattab), representative tafsir including different Islamic traditions, and scholarly philology. Explicitly state why alternatives were rejected.
5. **Blind audit.** Independent human Arabic/Qur'anic experts and experienced English editor assess semantic accuracy, stability of ambiguities, fluency, cadence, implications of translation choices, and correctionability. Reviewers must be able to veto publication and publish dissent. Correct direct mistakes before public promotion.
6. **Publication status ladder.** `draft` → `peer-reviewed` → `editorial-approved` → `published vX.Y` → `amended`. Preserve diff, rationale, reviewer and timestamp.
7. **Symmetric evidence standard.** Never lower standards to defend Islam nor raise them selectively to criticize opponents. Explicitly separate source words / scholarly inference / theology / consequences. The research adjudicator must not be compelled to reach a pro-Islam or anti-Islam result.
8. **Quality benchmark.** Before calling this 'best', define measurable human eval criteria, independent blinded expert scorecards, published error analyses, and sample passages chosen by external reviewers (not just favorable verses). Include clear failures.

## Pilot 1 — Qur'an 1:1 / the basmala
**Arabic (source locator: https://quran.com/1/1 ):**  
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ

**Close draft (unreviewed):** In the name of God, the All-Merciful, the Ever-Merciful.

**Readable/interpretive variant (unreviewed):** In the name of God—the Universally Merciful, the Especially Merciful.

**Tradeoff:** `ar-Raḥmān` and `ar-Raḥīm` derive from ر ح م. A frequently cited explanation distinguishes God's all-encompassing mercy from special mercy toward believers; another emphasizes intensity and lasting mercy or treats the names as mutually intensifying. The words *universal* and *especially* are explanatory additions, not self-evident word-for-word equivalents. `All-Merciful`/`Ever-Merciful` also over-selects semantic dimensions. Neither English rendering has been endorsed by a qualified reviewer. Consider conserving the names *al-Raḥmān* and *al-Raḥīm* with a footnote in the final edition if English cannot preserve nuance.

**References for competing distinctions:**
- https://quran.com/1/1
- https://corpus.quran.com/qurandictionary.jsp?root=rHm
- https://www.islamweb.net/en/fatwa/26038/two-names-of-allaah-explained — documents multiple explanations, not an independent philological consensus.
- https://cdn.csu.edu.au/__data/assets/pdf_file/0008/3345947/Presentation-2.-Mercy-in-the-Quran.pdf — an academic-setting treatment.

## Pilot 2 — Qur'an 6:38 / animals as communities
**Arabic (Uthmani-style reference at https://quran.com/6/38):**  
وَمَا مِن دَآبَّةٍۢ فِى ٱلْأَرْضِ وَلَا طَـٰٓئِرٍۢ يَطِيرُ بِجَنَاحَيْهِ إِلَّآ أُمَمٌ أَمْثَالُكُم ۚ مَّا فَرَّطْنَا فِى ٱلْكِتَـٰبِ مِن شَىْءٍۢ ۚ ثُمَّ إِلَىٰ رَبِّهِمْ يُحْشَرُونَ

**Close draft (unreviewed):** There is no creature moving on the earth, nor any bird flying on its two wings, except that they are communities like you. We have overlooked nothing in the Record. Then they will be gathered to their Lord.

**Translation flags:**
- `dābba`: living/moving creature; avoid implying exclusively a modern taxonomic class.
- `umamun amthālukum`: groups/communities like you; does not by itself set out a codified modern animal-rights regime.
- `al-kitāb`: translated 'Record' here as an editorial decision; could be rendered 'Book' and disputed interpretations include a divine record. Do not assume it unambiguously means the printed Qur'an.
- `yuḥsharūn`: passive gathering to the Lord; theological interpretation and consequences not embedded in English words.
- Keep 6:37–39 nearby and compare known tafsir, e.g. https://quran.com/6:38/tafsirs/ar-tafsir-ibn-kathir

**Other:** https://corpus.quran.com/translation.jsp?chapter=6&verse=38 ; https://quran.com/6/38

## Translation card schema (preferred compact)
```yaml
verse: "6:38"
source_arabic_url: "https://quran.com/6/38"
source_text_edition: "TBD"
qiraa: "TBD"
orthography: "TBD"
close_english: "draft only"
readable_english: "draft only"
semantic_alternatives: []
interpretive_additions: []
adjacent_context: ["6:37", "6:39"]
external_reviewers: []
review_status: draft
confidence: unassessed
references: []
corrections: []
```

## Sequencing
**Phase 0:** establish rights to a single verified Arabic corpus and QA harness.  
**Phase 1:** review al-Fātiḥa 1:1–7, 6:38, 16:90 and 4:135 as stress-test suite with external reviewers.  
**Phase 2:** blinded benchmark against leading translations on samples selected by independent reviewers, including ethically or doctrinally contentious verses.  
**Phase 3:** expand surah by surah. Keep existing English as the working display language; eventual Spanish edition after separate review.  
**Phase 4:** public site can include only clearly labeled, reviewed draft or published verses, with revision history. Never claim divine endorsement of a translation.

## Editor's principle
A powerful translation must sometimes leave hard Arabic ambiguities unresolved in English or explicitly footnoted. **Clarity that invents certainty is an error.**
