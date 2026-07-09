# Religion-Civilization Causal Data Engine

**Status:** Research agenda seed  
**Use case:** Build an evidence system stronger than screenshot debates, map overlays, and selective statistics.  
**Core function:** Generate a truth-seeking empirical model of religion, secularization, literacy, institutions, morality, and civilizational outcomes.

---

## 1. Why this exists

The debate cannot stay at the level of:

> My map versus your map.

Maps can reveal patterns, but they can also hide causality, reporting bias, confounders, and variable-definition problems.

The goal is to build a real data engine that can test competing claims with better variables.

---

## 2. Central hypothesis

The relevant variable is not simple religiosity.

The relevant stack is:

> Blueprint + literacy + interpretation + institutions + incentives + existential security + inner accountability + outer accountability.

Religious identity alone is too blunt.

---

## 3. Main competing hypotheses

### H1 — Anti-religion causal hypothesis

High religiosity causes worse social outcomes by increasing obedience, patriarchy, authoritarianism, scientific illiteracy, sexual repression, and tribalism.

### H2 — Existential insecurity hypothesis

Poverty, war, weak institutions, insecurity, and low education increase religiosity. Religion is often an effect or coping structure inside insecurity, not necessarily its root cause.

### H3 — Political-capture hypothesis

Religion becomes harmful when captured by state, tribe, nationalism, patriarchy, clerical monopoly, or ruling-class incentives.

### H4 — Prophetic-accountability hypothesis

Religious ethics improve outcomes when they function as anti-idolatry, justice, literacy, care for the vulnerable, and critique of power.

### H5 — Secular-institution hypothesis

High-quality secular institutions can perform many social functions religion historically performed: welfare, law, education, health, pensions, policing, and public trust.

### H6 — Hybrid-accountability hypothesis

The best outcomes require both inner accountability and outer accountability: conscience/taqwa plus institutions/law/education/state capacity.

---

## 4. Core variable distinction

Do not collapse these into one variable:

- religious identity;
- public religiosity;
- intrinsic religiosity;
- extrinsic religiosity;
- religious literacy;
- scriptural access;
- religious practice;
- political religion;
- state religion;
- prophetic religion;
- clerical monopoly;
- taqwa / inner accountability;
- moral courage against one’s own side;
- anti-idolatry in practice.

Most current public arguments only use the first two.

That is not enough.

---

## 5. Data sources to collect

### Religiosity / values

- World Values Survey
- Pew Research Center Global Attitudes / Religious Landscape
- Gallup religiosity and wellbeing data
- Arab Barometer
- Afrobarometer
- Asian Barometer
- Latinobarómetro

### Development and security

- UNDP Human Development Index
- World Bank GDP per capita
- World Bank poverty data
- World Bank education/literacy indicators
- WHO life expectancy and health indicators
- UNICEF child poverty / child welfare data

### Governance and law

- Worldwide Governance Indicators
- World Justice Project Rule of Law Index
- Transparency International Corruption Perceptions Index
- Varieties of Democracy dataset
- Freedom House
- Economist Democracy Index

### Violence and conflict

- UNODC homicide data
- Uppsala Conflict Data Program
- Global Peace Index
- Armed Conflict Location & Event Data Project

### Gender and vulnerability

- UN Women datasets
- World Bank Women, Business and the Law
- OECD Social Institutions and Gender Index
- UNODC trafficking data
- WHO violence against women estimates

### Religion-specific literacy / implementation proxies

Harder to collect but crucial:

- Qur’an/Bible literacy surveys where available;
- religious education quality;
- literacy rate by gender;
- access to scripture in vernacular language;
- clerical monopoly / state control of religious institutions;
- religious freedom;
- mosque/church civic service presence;
- charitable giving and volunteering;
- waqf/zakat or church charity infrastructure;
- divorce/widow/orphan protection in practice;
- animal welfare laws and enforcement.

---

## 6. Model architecture

### Level 1: Raw correlation

Compare religiosity with outcomes.

Purpose: see the pattern.

Danger: easy to overread.

### Level 2: Controlled regression

Control for:

- GDP per capita;
- HDI;
- education;
- literacy;
- inequality;
- region;
- colonial history;
- conflict exposure;
- state capacity;
- democracy;
- urbanization;
- age structure;
- natural resource dependence;
- sanctions;
- legal system;
- reporting capacity.

Purpose: test whether religiosity still predicts outcomes after major confounders.

### Level 3: Interaction effects

Test whether religion behaves differently under different conditions:

- high literacy vs low literacy;
- democratic vs authoritarian;
- state religion vs religious freedom;
- high poverty vs low poverty;
- high conflict vs low conflict;
- high rule of law vs low rule of law.

Purpose: identify when religion becomes protective, neutral, or harmful.

### Level 4: Within-country analysis

Compare people inside the same country:

- religious attendance;
- religious literacy;
- intrinsic religiosity;
- volunteering;
- crime;
- family stability;
- charity;
- substance abuse;
- prejudice;
- authoritarianism;
- trust;
- political tolerance.

Purpose: reduce ecological fallacy.

### Level 5: Historical process tracing

Study movements and moments:

- abolition;
- civil rights;
- anti-colonial resistance;
- zakat/waqf systems;
- liberation theology;
- Quaker abolitionism;
- Islamic Golden Ages;
- reform movements;
- religious nationalism;
- fascism;
- Soviet/Maoist secular sacred politics;
- secular welfare state construction.

Purpose: understand mechanisms over time.

---

## 7. Data-integrity rules

1. Never use a screenshot as final evidence.
2. Always identify the source, date, definition, and methodology.
3. Separate actual incidence from reported incidence.
4. Separate country-level and individual-level evidence.
5. Control for poverty, education, conflict, state capacity, and region.
6. Treat religiosity as multiple variables, not one variable.
7. Track exceptions and breaker examples.
8. Include non-Western datasets where possible.
9. Include sources critical of religion and sympathetic to religion.
10. Do not let the desired conclusion choose the data.

---

## 8. ASI-level insight

The question is not whether religion or secularism wins in the abstract.

The question is:

> Which systems produce humans and institutions that remain just when power, fear, appetite, tribe, money, and secrecy reward injustice?

That is the real dependent variable.

---

## 9. Potential thesis after research

Likely synthesis to test:

> Public religiosity alone is not a reliable predictor of civilizational health. Societies improve when moral blueprints are combined with literacy, education, institutional accountability, economic security, protection of vulnerable groups, and anti-idolatry strong enough to judge rulers, tribes, markets, and religious institutions themselves.

---

## 10. Output goals

1. Build `datasets/religion-civilization-panel.csv`.
2. Build a reproducible notebook for analysis.
3. Build visualizations comparing raw vs controlled relationships.
4. Build a public essay: `Religion Is Not One Variable`.
5. Build a debate response packet.
6. Build a moral-civilizational benchmark dashboard.

---

## 11. Compressed synthesis

> The legendary move is not to win a screenshot war. It is to build the data engine that distinguishes religion as identity, religion as literacy, religion as power, religion as coping, religion as corruption, and religion as prophetic accountability.
