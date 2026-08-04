# `.claude/hooks/` — the enforcement layer

**A hook is a guarantee; a doctrine file is a request — and requests measure 2.5%.**

## Why this exists

Measured across the portfolio on 2026-08-04: **7 of 279 open issues (2.5%)**
carried both an owner and a done-condition. The PM doctrine existed, was
findable, and fired at the right moment — in the repos that had it. The gap was
never doctrine. It was **coverage**: the enforcement hook was installed in 3 of
35 repos, and the three repos with none held **201 of 314 open issues (64%)**.

An issue with no board is invisible work. An issue with no done-condition can
never be closed on evidence, so it accumulates instead of resolving. Both are
settable in the *same* command that creates the issue — which makes the
follow-up "now shape it" command **deletable, not automatable**. This hook
deletes it.

## `capture-guard.sh`

`PreToolUse(Bash)`. Blocks `gh issue create` when the issue would be born
without a board, an owner, or a done-condition. `list` / `edit` / `comment` /
`view` pass through, as do `--web` and `--template` (both collect shape
elsewhere).

**The escape hatch is `# no-assign`, a shell comment — not `--no-assign`.** A
bare `--no-assign` flag would be handed to `gh`, which does not know it,
breaking the very command the operator is trying to run. A comment is invisible
to `gh`.

**`--project` takes the project TITLE, not its number.** `--project 2` fails
with `could not add to project: '2' not found` **and the issue is not created**;
only `--project "Supercharged Growth OS"` succeeds. Verified against
`gh 2.89.0`: `-p, --project title`. An earlier block message hinted `<n>`, so it
taught a failing command on every fire. The message now hints a title and the
selftest asserts it never hints a number. Titles come from
`gh project list --owner <org>` — deliberately *not* hardcoded here, because a
hardcoded title goes stale the moment a board is renamed and reintroduces the
exact defect.

### The done-condition markers

They mirror `.github/workflows/issue-shape.yml` and the Work Cell issue-form
field labels, so a template-created issue passes with **zero** extra work:

`Done when` · `Definition of done` · `Acceptance criteria` · `Success evidence` ·
`Desired state` · `Exit criteria` · `Done-condition`

A GitHub issue **form** renders those as `### Desired state` — a heading with
**no colon** — which is why the marker lead-in tolerates `#{0,6}` and an absent
colon. Anchoring to line start is load-bearing: without it a body saying "we
still need to define the done-condition" would read as if it *had* one.

Ownership is accepted **in the body** (`Owner: <role/agent/human>`) as well as
via `--assignee`. This org has exactly one assignable GitHub user, so the
assignee field cannot express *who* owns a thing; the body form is the
expressive one. `--assignee` is still accepted, so nothing that passed before
stopped passing.

### Two generations of this guard were wrong in opposite directions

Both were live on 2026-08-04 and both are now pinned in `selftest.sh` — `[G1]`
tags a false positive, `[G2]` a false negative. **Do not delete those cases.**

| Generation | Method | What it got wrong |
|---|---|---|
| G1 | substring match on the whole command line | `grep -rn "gh issue create" .` was **blocked** and told to add `--assignee` to a grep; `--body "the --web ui"` read as the real `--web` flag and was **allowed**; normalised with `tr '\n\t'`, which does **not** translate `\r`, so CRLF input failed open |
| G2 | `shlex.split` + `seg[:3] == [gh,issue,create]` | fixed all of G1 and introduced worse misses: **`cd /r; gh issue create` was allowed** (`shlex.split` glues `;` onto the previous token), and so was **every multi-line script** (`shlex` treats a newline as ordinary whitespace) |

G2's class is the more dangerous one: a guard that passes its own selftest while
missing the most common real-world form is a false green, and nobody
investigates a green check.

**A bare newline does not join a command.** `gh issue<newline>create` is *two*
commands to bash (`bash -n` confirms) and can never create an issue, so the
guard allows it — blocking it would be a pure false positive. What must be, and
is, caught is a create whose *flags* sit on later lines, because that one runs.

**Known limit:** `sh -c "gh issue create ..."` passes the whole command as a
single quoted token and is not inspected. That is a deliberate bypass, not an
accidental one, and `# no-assign` already exists for deliberate bypasses.

## Fail-open is structural, not a promise

Claude Code blocks a tool call on **exit 2** — and **bash also exits 2 on a
syntax error**. A naive guard would therefore hard-block *every* Bash command in
the repo the moment someone fat-fingered an edit, which is the most likely event
in this file's life.

Measured on the installed harness:

| condition | exit | meaning |
|---|---|---|
| bash syntax error | `2` | indistinguishable from a deliberate block |
| missing script | `127` | |
| runtime crash | `127` | |
| explicit `exit 1` | `1` | does **not** block; Claude runs the tool anyway |

So the guard signals a deliberate block with sentinel **`42`**, and the wrapper
in `settings.json` maps `42 → 2` and **everything else → 0**. Failure is
structurally unable to masquerade as enforcement.

Every unexpected condition — no python, unparseable stdin, unbalanced quotes,
an unreadable `--body-file` — exits 0. A broken guard must never wedge real work.

**Off switches:** `PORTFOLIO_CAPTURE_GUARD_OFF=1` (this hook) ·
`PORTFOLIO_HOOKS_OFF=1` (all hooks) · `# no-assign` (one command).

## Proving they work — `selftest.sh`

The corollary of structural fail-open is that **a broken guard is a silent
no-op**. Nothing would ever notice. `selftest.sh` is the thing that notices:

```
bash .claude/hooks/selftest.sh
```

It drives the real hook with synthetic `PreToolUse` envelopes and asserts exit
codes — including every fail-open path, every off-switch, and the literal
command string pulled out of `settings.json` (so the test exercises what Claude
will actually run, not an approximation). It creates no issues and touches no
live state. It exits non-zero on any failure and runs in CI on every push via
`.github/workflows/hooks-selftest.yml`.

**The CI job refuses to trust its own green.** Before running the suite it
breaks the guard on a scratch copy and *fails the run* if the selftest still
passes. A harness that cannot go red is decoration.

Two false greens this harness has already caught in itself, both worth
remembering:

- the `--body-file` fixtures used a git-bash `/tmp` path Windows python cannot
  open, so *both* body-file cases were fail-opening and "shaped body-file is
  allowed" was passing for the wrong reason;
- the "no interpreter installed" simulation used `PATH=/usr/bin`, which holds no
  python on Windows but *does* on an Ubuntu runner — so it quietly stopped
  removing the interpreter.

## Standing rule: the 30-day kill

**A hook that has never fired in 30 days is deleted, not kept "just in case".**
Enforcement that never fires is either solving a problem that no longer exists
or is broken and silently allowing everything — and the two are
indistinguishable from the outside. Re-run `selftest.sh` at the review: if it is
green and the hook still never fired, the behaviour it enforces has been
internalised and the hook is now pure overhead.
