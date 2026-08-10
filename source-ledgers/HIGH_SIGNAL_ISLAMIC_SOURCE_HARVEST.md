# High-Signal Islamic Source Harvest — Institutional Map

**Status:** Living source-routing ledger  
**Purpose:** Identify the small number of institutions whose archives can yield a disproportionate share of high-value Islamic intellectual, historical, Qur'anic, legal, ethical, and civilizational material.

---

## Governing rule

> **Harvest institutions aggressively; trust claims selectively.**

A source can be excellent for discovery, synthesis, framing, translation, or scholarly routing without being the terminal authority on every claim.

The ingestion pipeline should therefore separate:

`institution → item → speaker/author → claim → cited source → primary text → counterevidence → versioned verdict`

---

## Tier A — highest-priority institutional harvesting

### 1. Yaqeen Institute for Islamic Research

**Priority:** P0 / harvest systematically  
**Best for:** English-language research papers, long-form lectures, transcripts, contemporary ethical questions, hadith/history/apologetics, public-facing synthesis.

Why it matters:

- large searchable research and video archive;
- frequent transcripts make machine ingestion unusually efficient;
- contributors include scholars with strong academic credentials;
- papers often expose bibliographies that can be followed upstream;
- high overlap with Civilizational Memory OS themes: Islamic civilization, slavery, women, hadith, prophethood, anti-Blackness, politics, social justice, spiritual psychology.

**Important guardrail:** Yaqeen is often advocacy-oriented Muslim scholarship. Treat it as a high-quality routing and synthesis layer, then source-align disputed historical/legal claims.

Suggested harvest order:

1. Islamic Civilization topic hub.
2. Jonathan Brown corpus.
3. Omar Suleiman historical/social-justice series.
4. Mohammad Elshinawy corpus on prophethood, civilization, ethics, and apologetics.
5. Hatem al-Haj apologetics/methodology series.
6. Women in Islamic history.
7. Anti-Blackness / race / slavery.
8. Qur'an and hadith methodology.
9. Islam in the West / representation / political theology.
10. Bibliographies and footnotes from the strongest papers.

Primary domain: https://yaqeeninstitute.org/

---

### 2. Cambridge Muslim College

**Priority:** P0/P1  
**Best for:** Islamic intellectual tradition, theology, ethics, philosophy, education, science/technology ethics, contextual Islamic thought.

Why harvest:

- explicit research mission;
- bridges classical Islamic tradition and contemporary academic questions;
- lecture/course material can provide deeper conceptual frameworks than polemical content;
- useful counterweight to purely apologetic sources.

Research hub: https://www.cambridgemuslimcollege.ac.uk/research/

---

### 3. The Usuli Institute / Khaled Abou El Fadl archive

**Priority:** P0/P1  
**Best for:** Islamic law, Qur'anic ethics, moral reasoning, authority, patriarchy, abuse of religious power, modernity, jurisprudential methodology.

Why harvest:

- unusually explicit ethical/usuli reasoning;
- deep engagement with classical legal literature;
- valuable adversarial counterweight to more conservative or apologetic institutions;
- Project Illumine provides a large Qur'anic commentary corpus.

Primary domain: https://www.usuli.org/

---

### 4. Oxford Centre for Islamic Studies

**Priority:** P1  
**Best for:** academic Islamic history, civilization, politics, manuscripts, institutions, contemporary Muslim-world scholarship.

Why harvest:

- high-quality academic speakers;
- useful for civilizational history and institutional memory;
- less apologetic and often closer to mainstream academic scholarship.

Lectures: https://www.oxcis.ac.uk/lectures

---

### 5. Institute of Ismaili Studies

**Priority:** P1  
**Best for:** Shi'i/Ismaili history, Qur'anic studies, manuscripts, intellectual history, primary-text editions and translations.

Why harvest:

- major scholarly publication program;
- valuable for avoiding a Sunni-only reconstruction of Islamic civilization;
- strong manuscript and translation orientation;
- useful comparative source layer for sectarian and intellectual-history questions.

Primary domain: https://www.iis.ac.uk/

---

## Tier B — high-value domain specialists

### 6. Sapience Institute

**Best for:** theism, atheism, Christianity/Islam comparison, philosophical apologetics, Qur'an preservation, spread of Islam, debate methodology.

Strength: highly relevant to Truth and Peace Engine argument mapping.

Guardrail: explicitly apologetic mission means claims should be adversarially audited and traced to scholarly sources.

Primary domain: https://www.sapienceinstitute.org/

---

### 7. Qalam Institute

**Best for:** seerah, hadith, prophetic biography, classical Islamic studies, long-form teaching.

Strength: the Seerah archive is particularly valuable because it attempts to make classical Prophetic-biography material accessible in English.

Primary domain: https://www.qalaminstitute.org/

---

### 8. Bayyinah Institute

**Best for:** Qur'an, Arabic, rhetoric, thematic structure, tafsir-style reflection.

Strength: very large Qur'an-focused corpus and strong linguistic/thematic framing.

Guardrail: distinguish linguistic insight, tafsir, devotional reflection, and historical claim.

Primary domain: https://bayyinah.com/

---

### 9. SeekersGuidance

**Best for:** traditional fiqh, theology, spirituality, school-specific legal reasoning, structured Islamic curriculum.

Strength: very large corpus of courses and answers from classically trained scholars.

Guardrail: excellent for reconstructing traditional jurisprudential positions; not necessarily a neutral historical source.

Primary domain: https://seekersguidance.org/

---

### 10. Zaytuna College

**Best for:** primary-text canon, Islamic/Western intellectual history, theology, philosophy, liberal arts, classical scholarly tradition.

Strength: Canon Lecture Series explicitly centers foundational primary texts and their commentary traditions.

Primary domain: https://zaytuna.edu/

---

## Source roles — do not flatten them

| Institution | Best role in the OS |
|---|---|
| Yaqeen | discovery + synthesis + bibliography routing |
| Cambridge Muslim College | conceptual depth + contextual theology/ethics |
| Usuli Institute | legal/ethical red-team + Qur'anic moral reasoning |
| Oxford Centre for Islamic Studies | academic history + institutions + scholarship |
| Institute of Ismaili Studies | Shi'i/Ismaili primary-text and intellectual-history correction |
| Sapience | apologetics + philosophy + objection mapping |
| Qalam | seerah + hadith teaching corpus |
| Bayyinah | Qur'anic language + thematic interpretation |
| SeekersGuidance | traditional fiqh/theology position reconstruction |
| Zaytuna | canon + primary-text intellectual tradition |

---

## Harvest architecture

For each institution, build:

1. `SOURCE_MANIFEST.md` — all discoverable videos, papers, courses, podcasts, books, and transcripts.
2. `AUTHOR_INDEX.md` — scholar → specialties → corpus links.
3. `TOPIC_GRAPH.md` — slavery, women, war, tolerance, science, medicine, waqf, animals, governance, hadith, Qur'an, etc.
4. `CLAIM_LEDGER.md` — claim + timestamp/page + source layer + confidence.
5. `BIBLIOGRAPHY_GRAPH.md` — every upstream book/paper/primary text cited.
6. `BREAKER_EVIDENCE.md` — evidence that challenges the institution's preferred framing.
7. `GOLDEN_THREADS.md` — unusually powerful facts, stories, frameworks, and unanswered questions.
8. `CANON_PROMOTION_QUEUE.md` — only claims that have survived source alignment and adversarial testing.

---

## Pareto strategy

Do **not** begin by indiscriminately transcribing every hour of video.

Start with material that has at least one of these properties:

- repeatedly cited by other high-signal scholars;
- directly addresses a major propaganda/polemic claim;
- provides primary-source references;
- contains a strong historical case study;
- maps a major institution or moral mechanism;
- creates a reusable conceptual framework;
- supplies a bibliography that unlocks a deeper academic source graph.

The objective is not maximum volume. It is maximum **evidence density per ingestion hour**.

---

## First Yaqeen harvest queue

1. Slavery / emancipation / Mamluks / race.
2. Women scholars and women in Islamic history.
3. Hadith authentication and criticism.
4. Islamic civilization topic hub.
5. Prophethood evidence.
6. Islam and anti-Blackness.
7. Social justice / 40 Hadith series.
8. Seerah character and governance case studies.
9. Islam in the West / representation / Islamophobia.
10. Every paper with a rich bibliography relevant to Civilizational Memory OS.

This should become a recursive process: every strong source reveals authors, books, papers, manuscripts, and institutions that enter the next harvest queue.
