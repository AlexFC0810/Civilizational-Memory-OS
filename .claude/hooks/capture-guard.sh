#!/usr/bin/env bash
# PreToolUse(Bash) — the capture guard.
#
# Blocks `gh issue create` when the issue would be born INVISIBLE (no board) or
# UNFINISHABLE (no done-condition). Those are the two properties that make an
# issue un-manageable, and both are settable in the SAME command that creates it
# — so the follow-up "now shape it" command is DELETABLE, not automatable.
#
# Contract (verified against Claude Code 2.1.119):
#   stdin  : JSON {session_id, transcript_path, cwd, hook_event_name,
#                  tool_name, tool_input:{command,...}, ...}
#   exit 0  : allow (silent)
#   exit 42 : DELIBERATE BLOCK -- see below. stderr carries the reason.
#
# ---------------------------------------------------------------------------
# WHY 42 AND NOT 2 -- do not "simplify" this away.
#
# Claude Code blocks a tool call on exit 2. But **bash also exits 2 on a syntax
# error**. So if anyone ever edits this file and leaves a typo, a naive script
# would exit 2 and HARD-BLOCK EVERY Bash COMMAND IN THE REPO -- the loudest
# possible violation of fail-open, triggered by the most likely event (editing
# the guard).
#
# Measured on this host:
#   bash syntax error -> 2      <- indistinguishable from a deliberate block
#   missing script    -> 127
#   runtime crash     -> 127
#   explicit exit 1   -> 1      <- does NOT block; Claude runs the tool anyway
#
# So this script signals a deliberate block with a sentinel (42) that bash can
# never produce by accident, and the wiring in .claude/settings.json maps
# 42 -> 2 and EVERYTHING ELSE -> 0. Failure is structurally unable to
# masquerade as enforcement.
#
# Corollary: a BROKEN guard is a SILENT NO-OP. That is the correct trade, but it
# means the selftest is the only thing standing between a typo and zero
# enforcement -- so `.claude/hooks/selftest.sh` runs in CI on every push.
# ---------------------------------------------------------------------------
#
# WHY THE DECISION LIVES IN PYTHON, NOT IN SHELL PATTERN-MATCHING.
#
# A command line is not a string, it is argv. Two generations of this guard got
# that wrong in OPPOSITE directions; both are pinned in selftest.sh.
#
# Generation 1 (substring match on the whole line) had FALSE POSITIVES:
#   * `grep -rn "gh issue create" .` was BLOCKED, and told the operator to add
#     --assignee to their grep. Merely *mentioning* the phrase tripped it.
#   * `gh issue create -t x --body "the --web ui is nice"` was ALLOWED --
#     --web inside a quoted body read as the real --web flag.
#   * it normalised with `tr '\n\t' '  '`, which does NOT translate \r, so a
#     CRLF heredoc (Windows -- the founder's own platform) arrived as
#     `gh issue\r create`, missed the match, and FAILED OPEN on exactly the
#     form it exists to catch.
#
# Generation 2 (shlex.split + `seg[:3] == [gh,issue,create]`) fixed all of the
# above and introduced FALSE NEGATIVES that are strictly more dangerous,
# measured 2026-08-04:
#   * `cd /repo; gh issue create -t x` was ALLOWED. shlex.split does not treat
#     `;` as an operator -- it glues it to the previous token (`/repo;`), so no
#     segment ever began with `gh`.
#   * `cd /repo\ngh issue create -t x` was ALLOWED, and so was EVERY multi-line
#     script, because shlex treats a newline as ordinary whitespace. That is the
#     single most common way these commands are actually written.
#
# A guard that misses the common form while passing its own selftest is the
# false-green disease this layer exists to cure. This generation fixes both
# directions:
#   1. heredoc BODIES are stripped first -- they are data, not commands;
#   2. unquoted newlines are converted to `;` by a quote-aware scanner;
#   3. tokenizing uses shlex with punctuation_chars=True, so `;` `&&` `||` `|`
#      `(` `)` become real operator tokens while a `;` or `--web` inside a
#      quoted body stays glued inside its single token;
#   4. flags are then read ONLY from the segment that literally IS the create.
#
# FAILS OPEN by design: every unexpected condition (no python, unparseable
# stdin, unbalanced quotes, missing field) exits 0. A broken guard must never
# wedge real work.
#
# Off switches:
#   PORTFOLIO_HOOKS_OFF=1          -> disables all portfolio hooks
#   PORTFOLIO_CAPTURE_GUARD_OFF=1  -> disables just this hook
#   trailing `# no-assign`         -> one-shot escape for a deliberate exception
#
# Why `# no-assign` and not `--no-assign`: a bare `--no-assign` flag would be
# passed through to `gh`, which does not know it, and would break the command
# the operator is trying to run. A shell comment is invisible to gh.

# No `set -e`: this script must reach its own exit statements, never abort early.
set +e

# Always drain stdin so the caller never sees SIGPIPE.
INPUT="$(cat 2>/dev/null)"

[ "${PORTFOLIO_HOOKS_OFF:-0}" = "1" ] && exit 0
[ "${PORTFOLIO_CAPTURE_GUARD_OFF:-0}" = "1" ] && exit 0
# Legacy per-repo off-switches, kept so existing muscle memory still works.
[ "${PC_HOOKS_OFF:-0}" = "1" ] && exit 0
[ "${PC_CAPTURE_GUARD_OFF:-0}" = "1" ] && exit 0
[ "${CC_HOOKS_OFF:-0}" = "1" ] && exit 0
[ "${CC_CAPTURE_GUARD_OFF:-0}" = "1" ] && exit 0

# jq is ABSENT on this host. Resolve a Python from what is actually here; if none
# exists, fail open. (Do NOT hardcode `python` -- it is not present everywhere.)
PY=""
for c in python3 python; do
  if command -v "$c" >/dev/null 2>&1; then PY="$c"; break; fi
done
[ -z "$PY" ] && exit 0

REASON="$(printf '%s' "$INPUT" | "$PY" -c '
import json, os, re, shlex, sys

def out(msg):
    sys.stdout.write(msg)
    sys.exit(0)

try:
    data = json.load(sys.stdin)
except Exception:
    sys.exit(0)                      # unparseable stdin -> fail open

cmd = str((data.get("tool_input") or {}).get("command", "") or "")
if not cmd.strip():
    sys.exit(0)

# One-shot operator escape, checked on the raw text before any parsing.
if "# no-assign" in cmd or "#no-assign" in cmd:
    sys.exit(0)

# --- 1. strip heredoc BODIES -------------------------------------------------
# A heredoc body is data. `cat > notes.md <<EOF / gh issue create ... / EOF`
# documents the command, it does not run it. Leaving the body in would make the
# guard block its own documentation (and its own selftest).
def strip_heredocs(text):
    lines, keep, i = text.split("\n"), [], 0
    while i < len(lines):
        line = lines[i]
        keep.append(line)
        m = re.search(r"<<-?\s*([\x27\"]?)([A-Za-z_][A-Za-z0-9_]*)\1", line)
        i += 1
        if m:
            delim = m.group(2)
            while i < len(lines) and lines[i].strip() != delim:
                i += 1
            i += 1               # drop the terminator line as well
    return "\n".join(keep)

# --- 2. line endings, continuations, and unquoted newline -> `;` -------------
# Three separate jobs, in this order:
#
#  (a) CRLF/CR -> LF. Windows is the founder\x27s own platform and heredocs arrive
#      \r\n-terminated. A stray \r is not whitespace to every consumer, and the
#      previous generation normalised with `tr \x27\n\t\x27 \x27  \x27` -- which does NOT
#      translate \r -- so it failed open on Windows-authored commands.
#
#  (b) `\` + newline is a LINE CONTINUATION: the shell deletes both. This is the
#      form real multi-line commands actually use. shlex does NOT handle it --
#      measured 2026-08-04, `gh issue create \<LF> --title x` tokenizes to
#      [gh, issue, create, \x27n\x27, --title, x], inventing a junk token. So the
#      continuation is removed here, before shlex ever sees it.
#
#  (c) a remaining unquoted newline TERMINATES a command, exactly like `;`.
#      shlex treats it as ordinary whitespace instead, which silently merged
#      every line of a multi-line script into one segment -- the bypass that let
#      `cd /repo\ngh issue create -t x` through. Converting restores the
#      boundary. Quote state is tracked so a newline inside a --body is left
#      alone.
def normalize(text):
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    res, q, i, n = [], None, 0, len(text)
    while i < n:
        ch = text[i]
        if ch == "\\" and q != "\x27" and i + 1 < n:
            if text[i + 1] == "\n":
                res.append(" "); i += 2; continue       # (b) continuation
            res.append(ch); res.append(text[i + 1]); i += 2; continue
        if q:
            if ch == q: q = None
            res.append(ch); i += 1; continue
        if ch in ("\x27", "\""):
            q = ch; res.append(ch); i += 1; continue
        res.append(";" if ch == "\n" else ch)           # (c) real terminator
        i += 1
    return "".join(res)

prepared = normalize(strip_heredocs(cmd))

# --- 3. tokenize with real operators -----------------------------------------
try:
    lex = shlex.shlex(prepared, posix=True, punctuation_chars=True)
    lex.whitespace_split = True
    tokens = list(lex)
except ValueError:
    sys.exit(0)                      # unbalanced quotes -> fail open
except Exception:
    sys.exit(0)

SEPS = {";", "&&", "||", "|", "&", "(", ")", ";;", "<", ">", ">>", "<<", "|&"}
segments, current = [], []
for t in tokens:
    if t in SEPS or (t and all(c in "();<>|&" for c in t)):
        if current: segments.append(current)
        current = []
    else:
        current.append(t)
if current:
    segments.append(current)

# Leading VAR=x assignments and command wrappers are not the command itself.
WRAPPERS = {"sudo", "env", "time", "nohup", "command", "exec", "stdbuf"}
def unwrap(seg):
    i = 0
    while i < len(seg) and (seg[i] in WRAPPERS or re.match(r"^[A-Za-z_][A-Za-z0-9_]*=", seg[i])):
        i += 1
    return seg[i:]

def has(seg, *flags):
    for tok in seg:
        if tok in flags:
            return True
        for f in flags:
            if f.startswith("--") and tok.startswith(f + "="):
                return True
    return False

def value_of(seg, *flags):
    for i, tok in enumerate(seg):
        if tok in flags and i + 1 < len(seg):
            return seg[i + 1]
        for f in flags:
            if f.startswith("--") and tok.startswith(f + "="):
                return tok[len(f) + 1:]
    return None

# --- 4. the shape markers ----------------------------------------------------
# These MIRROR .github/workflows/issue-shape.yml so the pre-flight guard and the
# post-hoc CI check agree, and they match the Work Cell issue-form field labels
# (.github/ISSUE_TEMPLATE/work-cell.yml: desired_state / success_evidence /
# execution_owner) so a template-created issue passes with ZERO extra work.
# A GitHub issue FORM renders those as `### Desired state` -- a heading with NO
# colon -- which is why the lead-in tolerates `#{0,6}` and an absent colon.
#
# Anchoring to line start is load-bearing: without it a body saying "we still
# need to define the done-condition" would read as if it HAD one.
LEAD = r"^[ \t]*([-*+>][ \t]*)?(\[[ xX]\][ \t]*)?#{0,6}[ \t]*[*_]*[ \t]*"
DONE_RE = LEAD + (r"(done when|done[ -]condition|definition of done|acceptance criteria|"
                  r"acceptance[*_]*[ \t]*:|success evidence|success_evidence|exit criteria|"
                  r"desired state|desired_state)")
OWNER_RE = LEAD + r"(execution[ _])?(owner|owned by)[*_]*[ \t]*(:|$)"
F = re.MULTILINE | re.IGNORECASE

for raw in segments:
    seg = unwrap(raw)
    if seg[:3] != ["gh", "issue", "create"]:
        continue
    # The browser flow and the template flow both collect shape elsewhere.
    if has(seg, "-w", "--web") or has(seg, "-T", "--template"):
        continue

    body = value_of(seg, "-b", "--body") or ""
    bf = value_of(seg, "-F", "--body-file")
    if bf:
        try:
            if bf == "-":
                body = ""            # body on stdin: unreadable here -> fail open
                sys.exit(0)
            with open(bf, "r", encoding="utf-8", errors="replace") as fh:
                body += "\n" + fh.read()
        except Exception:
            sys.exit(0)              # cannot read the body -> fail open, never guess

    missing = []
    # Ownership: --assignee OR a named owner in the body. The body form is the
    # expressive one -- this org has exactly ONE assignable GitHub user, so the
    # assignee field cannot distinguish one owner from another. See the long
    # note in .github/workflows/issue-shape.yml. --assignee is still accepted so
    # that every command which passed before this change still passes.
    if not has(seg, "-a", "--assignee") and not re.search(OWNER_RE, body, F):
        missing.append("--assignee @me (or an `Owner:` line in the body)")
    if not has(seg, "-p", "--project"):
        missing.append("--project \"<project title>\"")
    # The binding constraint: 64% of open issues have no done-condition.
    if not re.search(DONE_RE, body, F):
        missing.append("a done-condition in the body (`Done when: ... — receipt: ...`)")

    if missing:
        out(" | ".join(missing))
sys.exit(0)
' 2>/dev/null)"
RC=$?

# Parser crashed -> fail open.
[ "$RC" -ne 0 ] 2>/dev/null && exit 0
[ -z "$REASON" ] && exit 0

# exit 42 => the settings.json wrapper turns this into the real block (exit 2).
# This stderr text is what Claude is told. Every line of it must be a command
# that actually works -- a guard that fires on every issue teaches its own hint
# every single time.
cat >&2 <<EOF
BLOCKED by .claude/hooks/capture-guard.sh — the issue would be born invisible
or unfinishable.

Missing: $REASON

Put it all in the SAME command — there is no second command:

  gh issue create \\
    --title "<title>" \\
    --assignee @me \\
    --project "<project title>" \\
    --body "Owner: <role/agent/human>

  Done when: <observable end state> — receipt: <artifact that proves it>"

\`--project\` takes the project TITLE, not its number: \`--project 2\` fails with
\`could not add to project: '2' not found\` AND the issue is NOT created.
List titles with: gh project list --owner <org>

Why: an off-board issue is invisible work, and an issue with no done-condition
can never be closed on evidence. Measured 2026-08-04 across the portfolio:
7 of 279 open issues (2.5%) carried both an owner and a done-condition.

The done-condition markers match the Work Cell template and the issue-shape CI
check, so anything created from the template passes untouched. Accepted forms
include: Done when / Definition of done / Acceptance criteria / Success
evidence / Desired state / Exit criteria.

Deliberate exception: append \`# no-assign\` to the command.
Disable entirely: PORTFOLIO_CAPTURE_GUARD_OFF=1
EOF
exit 42
