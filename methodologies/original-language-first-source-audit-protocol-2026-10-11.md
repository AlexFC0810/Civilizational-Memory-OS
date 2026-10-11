# Original-Language First — Source Audit Protocol
**Proposed:** 2026-10-11 | **Status:** Research-method draft awaiting canon adoption; applies immediately to exploratory "Mercy as the Operating System" research.  
**Why:** Alex wants the text read in its source language before any English-language synthesis, design, media, book chapter, or claim about Islam / Jesus / historical civilization.

> **Original-language evidence first. English explanation second. Interpretation always labeled.**

## Critical distinction

*Source-language fidelity* is not identical to *truth*. The oldest accessible wording still requires textual criticism, genre, semantics, context, chronology, opposing evidence, and careful interpretation. Translating a prompt or asking an LLM a question in Arabic does **not** automatically increase accuracy; the improvement comes from anchoring claims to verified original wording and competent scholarship.

## 1. Match each claim to the correct surviving source language

| Inquiry | Text to prioritize | Important limits |
|---|---|---|
| **What does the Qur'an actually say?** | Qur'anic Arabic in an identified written reading/edition; preserved verse refs. | Arabic root analysis alone does not settle meaning; account for syntax, polysemy, rhetoric, context, recitation readings/qira'at when materially relevant. |
| **What does a passage in the canonical Gospels say?** | Earliest available **Koine Greek** witnesses / critical reconstructed text of the New Testament; compare variants. | The surviving Gospel text is Greek; **Jesus likely taught principally in Aramaic**, but his precise Aramaic wording is usually *not preserved*. Never fabricate Aramaic originals from Greek. |
| **What do Hebrew Bible passages say?** | Biblical Hebrew and Aramaic witnesses with textual criticism (Masoretic Text, Dead Sea Scrolls, Septuagint as a Greek witness when relevant). | Which manuscript tradition, redaction and translation matters. |
| **What did medieval Muslim chroniclers report about Salahuddin?** | Arabic chronicles, biographies, documents with original excerpts where available: Baha al-Din Ibn Shaddad, Ibn al-Athir, Imad al-Din al-Isfahani. | Sources differ in proximity, patronage, narrative purpose and transmission. Seek corroboration. |
| **What did crusader/Latin Christian accounts report?** | Appropriate **Latin**, **Old French** and other extant documentary languages for each source. | Do not reduce Christian perspectives to Arabic translations or vice versa. |
| **Do Persian, Syriac, Ottoman Turkish, Latin, Spanish, etc. sources matter?** | The original language of the specific document. | Label translations and subsequent copies, do not retroactively assume Arabic as the language of every Islamic-era artifact. |

**Priority order:** contemporary/closest original document or critical edition → established original-language scholarly commentary → independent opposing witnesses → multiple competent modern translations → interpretive synthesis → English explanation. Do not mistakenly promote a medieval tafsir to the same evidentiary status as Qur'anic wording; it is a valuable historical interpretation.

## 2. Mandatory source-card fields (minimum)

- **Exact claim/question**; status: empirical claim, scriptural text, normative interpretation, historical report, or personal value.
- **Witness:** author/text, language, passage location, edition/manuscript/reading where known, date and provenance.
- **Exact quotation in original script** (short and copyright-compliant); word-for-word segmentation/gloss only where necessary; retain punctuation/diacritics correctly; preserve verse number, orthographic form, and qira'a when material.
- **English rendering** as a clearly labeled translation. Cite whose translation, or mark as a working translation; *never* pass paraphrase off as a literal translation.
- **Key words and plausible competing renderings** (syntax/semantics, not speculative internet etymologies).
- **Context and strongest contrary texts**, including local textual context and relevant historical setting.
- **Witness disagreements and uncertainty**: variants, chains/attribution, dating, ideological incentives, editorial issues.
- **What follows / what does not follow**; explicitly separate textual content from proposed 'operating-system' abstraction and from societal evidence.
- **Confidence/status**: verified wording, supported reading, contested interpretation, unresolved; source links and next verification step.
- **English-ready explanation** after the above, tailored to the audience.

## 3. Practical multilingual agent workflow

1. Receive a question in English or Spanish; write a neutral research question in **the source language** only when doing so enables retrieval of Arabic/Greek/etc. scholarship, and **also** keep English search queries for independent scholarship and counterarguments.
2. Obtain Arabic original for Qur'an, Greek for Matthew, and the relevant original manuscript language for history. Record the edition/source and exact reference.
3. Use reliable corpus and concordance tools for morphology/syntax, not LLM recall for final quotations.
4. Compare 2+ English translations **after** reading source text; identify places where English merges distinct source words or overstates certainty.
5. Read classical and modern interpretations in their own languages where feasible and cite their schools/perspectives and dates.
6. Seek countertexts, contradictory episodes, enemy or independent witnesses, and possible interpretive capture.
7. Produce two outputs: **research-grade source card with raw original** and **clear natural-English synthesis with explicit uncertainty**. A later Spanish rendition may be added for bilingual use.
8. For permanent art, manuscripts, calligraphy, dates, or book text, obtain qualified human verification before external publication/skin; never tattoo an LLM-only transcription.

**Agent prompt header to reuse:**

```text
Research this claim SOURCE-FIRST. Identify the original surviving text and its language, quote the relevant exact source script with edition/verse locator, verify morphology/context, compare scholarly readings including strongest objections, distinguish text from interpretation, and only then write clear English. For Qur'an use Arabic; for canonical Gospel passages use earliest available Greek text, not an invented Aramaic reconstruction; for medieval history use original Arabic/Latin/other appropriate witnesses. Do not infer that language matching alone makes a claim true. Mark uncertainties and provide direct source links.
```

## 4. Seed comparison: mercy, justice, care for the least

**Qur'an 5:8 — Arabic, original Qur'anic wording, short span**

`وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ`

Working English: "Do not let hatred toward a people push you into failing to act justly. Be just; that is closer to God-consciousness." Exact nuance of `يَجْرِمَنَّكُمْ`, `شَنَآنُ`, and `التَّقْوَىٰ` deserves morphology/commentary review, not merely glossing each as an English equivalent.  
Arabic primary text: https://quran.com/5/8  
Interpretive witness (NOT Qur'anic text): Arabic al-Tabari https://quran.com/ar/5%3A8/tafsirs/ar-tafsir-al-tabari

**Qur'an 90:17 — Arabic**

`وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِ`

Working English: "and urged one another to steadfastness, and urged one another to compassion/mercy." The **reciprocal action** in `تَوَاصَوْا` is important: social reinforcement, not mere private feeling. Read 90:11–18 so this is situated beside the costly acts of freeing and feeding, rather than abstract sentimental kindness.  
Arabic primary text: https://quran.com/90/17

**Qur'an 16:90 — Arabic**

`إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ وَٱلْإِحْسَانِ`

Working English: "God commands justice and ihsan (doing good / excellence / beneficence)." Do **not** simply reduce `الإحسان` to English "mercy": distinct ethical vocabulary matters.  
Arabic primary text: https://quran.com/16/90

**Matthew 25:40 — Koine Greek, canonical text**

`ἐφ’ ὅσον ἐποιήσατε ἑνὶ τούτων τῶν ἀδελφῶν μου τῶν ἐλαχίστων, ἐμοὶ ἐποιήσατε.`

Working English: "Insofar as you did it to one of the least of these brothers of mine, you did it to me." The antecedent of `τῶν ἀδελφῶν μου τῶν ἐλαχίστων` is exegetically debated (scope may be specific to Jesus' disciples or broader needy people); **do not silently replace Greek 'brothers of mine' with 'every human being'** in a literal translation. This is the surviving Greek **Gospel report of Jesus**, not a verbatim recovered Aramaic transcript.  
Greek texts: https://www.greekbible.com/matthew/25/40 and https://biblehub.com/text/matthew/25-40.htm

**Baseline thesis—candidate, not proof:** Qur'anic justice under enmity, reciprocal exhortation toward compassion, and Gospel care for the least offer a plausible cross-tradition ethical bridge. Preserve both similarities and irreducible textual/theological disagreements.

## 5. Crucial research challenges

- The user observes the basmala at **113/114 surah openings** (with Surah 9 exception and 27:30 occurrence): verify what this says about the Qur'an's editorial/liturgical frame and what **cannot** be inferred automatically about all ethical passages.
- Add the toughest passages about war, punishment, legal inequality, and freedom of conscience before endorsing a totalized "mercy OS" explanation.
- Compare **blueprints with blueprints**, and **societies with societies**. Hospitality anecdotes and travel impressions are not controlled historical measures.
- Test whether institutions constrain **insiders with power**, not only extend benevolence when convenient.
- Distinguish Salahuddin's historical 1187 negotiations from selective later hagiography and from the fictional **`Kingdom of Heaven` sword prop**. No artistic fabrication should become an authenticated relic.

## 6. Outputs / owner boundaries

- **CMOS:** canonical methods, original-language source cards and adjudication, counterevidence, sourced book outline.
- **Truth & Peace Engine:** public explainers only after claims are validated and handed off by the canonical source-card deployment gate. No direct speculative publishing from this note.
- **Alex Personal OS:** symbolic personal values and tattoo taste; technical scene/artist references should not change historical source claims.

**Stop rule:** One completed bilingual original/English source card with the opposing reading, then evaluate before generalizing the method to all 114 surahs or building another autonomous agent.
