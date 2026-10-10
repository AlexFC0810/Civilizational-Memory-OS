# Islam from First Principles — Public Website

**Source:** `index.html` in this directory. Static, dependency-free site; original Arabic excerpt with working English gloss. Built as a research-facing alpha rather than a finished theological verdict.

**Vercel project:** `islam-from-first-principles` under the existing team, linked to `AlexFC0810/Civilizational-Memory-OS`, root directory `sites/islam-from-first-principles`, production branch `main`.

**Production alias:** https://islam-from-first-principles.vercel.app/ (check deployment protection/reachability before promising public access).

**Requested custom domain:** https://islamfromfirstprinciples.org/ — added to Vercel project. The Vercel project-domain ownership `verified` flag DOES NOT mean the domain's A records are configured. `get_domain_config` on 2026-10-10 reported `misconfigured: true`, SpaceShip nameservers `launch1.spaceship.net`, `launch2.spaceship.net`, and previous apex A records `34.216.117.25`, `54.149.79.189`. Vercel indicated new recommended apex A route as `216.198.79.1` and `64.29.17.1`, legacy alternative `76.76.21.21`. Do not change unrelated DNS/mail records. Have registrar/DNS admin confirm the authoritative configuration before cutover and recheck `get_domain_config`; HTTPS and public GET must also pass. Optionally add `www` CNAME after root is stable.

**Truth/corrections:** https://github.com/AlexFC0810/Civilizational-Memory-OS/issues/107; charter `initiatives/islam-from-first-principles/RESEARCH_CHARTER.md`. Do not display corpus root counts as command frequency or a doctrinal rank. For religious/legal case cards, source-lock original Arabic and relevant counterevidence before declaring conclusions. Maintain the discipline established in `AGENTS.md` and truth-constrained advocacy canon.

**Next work:** versioned Arabic source dataset, qira'at/orthography notes, bilingual content and specific counter-reading cards; design audit; site health and accessibility tests; publishing from approved cards only.