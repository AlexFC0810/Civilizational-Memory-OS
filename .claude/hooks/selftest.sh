#!/usr/bin/env bash
# Proof harness for capture-guard.sh.   Run: bash .claude/hooks/selftest.sh
#
# This is not optional ceremony. The settings.json wrapper maps every exit code
# except 42 to 0, so A BROKEN GUARD IS A SILENT NO-OP -- and the most likely
# breakage event is someone editing the guard. This file is the only thing that
# notices, so it runs in CI on every push.
#
# It fires the hook deliberately -- including every fail-open and off-switch
# path -- and asserts the exit codes the Claude Code hook contract depends on.
# Cases tagged [G1] pin a FALSE POSITIVE / CRLF fail-open from the substring
# generation; cases tagged [G2] pin a FALSE NEGATIVE from the shlex.split
# generation. Both were live in this portfolio on 2026-08-04. Do not delete
# them: each one is a bug that already shipped.
#
# Exit 0 = all green. Exit 1 = at least one assertion failed.

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GUARD="$HERE/capture-guard.sh"
PASS=0
FAIL=0

# Keep the harness itself immune to inherited off-switches.
unset PORTFOLIO_HOOKS_OFF PORTFOLIO_CAPTURE_GUARD_OFF \
      PC_HOOKS_OFF PC_CAPTURE_GUARD_OFF CC_HOOKS_OFF CC_CAPTURE_GUARD_OFF

PY=""
for c in python3 python; do command -v "$c" >/dev/null 2>&1 && { PY="$c"; break; }; done
[ -z "$PY" ] && { echo "SKIP: no python on PATH — the guard itself fails open here"; exit 0; }

# A PATH with bash + coreutils but deliberately NO python, on any platform.
# `PATH=/usr/bin` used to stand in for this, but it is platform-dependent: on
# Windows /usr/bin holds bash and coreutils and no python, while on an Ubuntu CI
# runner /usr/bin/python3 exists -- so the simulation quietly stopped removing
# the interpreter and the assertion no longer meant what it said. Build the
# sandbox explicitly instead of trusting a directory's contents.
NOPY="$(mktemp -d)"
BASH_BIN="$(command -v bash)"
for b in bash cat sh; do
  src="$(command -v "$b" 2>/dev/null)" && ln -sf "$src" "$NOPY/$b" 2>/dev/null
done

payload() {  # $1 = bash command string -> a real PreToolUse envelope
  "$PY" -c '
import json,sys
print(json.dumps({
  "session_id":"selftest","transcript_path":"/tmp/t.jsonl","cwd":"/tmp",
  "permission_mode":"default","hook_event_name":"PreToolUse",
  "tool_name":"Bash","tool_input":{"command":sys.argv[1]},
  "tool_use_id":"toolu_selftest"}))' "$1"
}

check() {  # check <label> <expected_exit> <actual_exit>
  if [ "$2" = "$3" ]; then
    PASS=$((PASS+1)); printf '  ok    %-54s exit=%s\n' "$1" "$3"
  else
    FAIL=$((FAIL+1)); printf '  FAIL  %-54s exit=%s (wanted %s)\n' "$1" "$3" "$2"
  fi
}

guard() {  # guard <label> <expected_exit> <command string> [env assignments...]
  local label="$1" want="$2" cmd="$3"; shift 3
  payload "$cmd" | env "$@" bash "$GUARD" >/dev/null 2>&1
  check "$label" "$want" "$?"
}

# Fixtures. A shaped body carries an owner AND a done-condition; the Work Cell
# body is EXACTLY how a GitHub issue form renders the template (### headings,
# no colons) and must pass untouched.
SHAPED='Owner: cto-architect

Done when: the guard fires — receipt: selftest PASS'
WORKCELL='### Desired state

The guard blocks unshaped creates.

### Success evidence

- [ ] selftest passes

### Execution owner

cto-architect'
BOARD='--assignee @me --project "P"'

TMP="$(mktemp -d)"
# The guard reads --body-file with PYTHON. On Windows, git-bash's /tmp is not the
# path Windows python resolves, so a bare mktemp path made BOTH body-file cases
# fail open -- and the "shaped body-file is allowed" case then passed for the
# WRONG REASON. That is exactly the false-green class this harness exists to
# catch, so hand the guard a path its own interpreter can actually open. The
# bad.md case is what keeps this honest: if the path stops resolving, it flips
# from 42 to 0 and the suite goes red.
TMPP="$TMP"
command -v cygpath >/dev/null 2>&1 && TMPP="$(cygpath -m "$TMP")"
printf '%s' "$WORKCELL" > "$TMP/good.md"
printf '%s' 'just prose, no shape at all' > "$TMP/bad.md"

echo "capture-guard selftest"
echo
echo "=== 1. must BLOCK (raw script signals 42) ==="
guard "bare create, no flags"                 42 'gh issue create -t "x" -b "y"'
guard "on board but NO done-condition"        42 "gh issue create -t \"x\" $BOARD -b \"just prose\""
guard "no body at all"                        42 "gh issue create -t \"x\" $BOARD"
guard "done-condition but no project"         42 "gh issue create -t \"x\" -a @me -b \"$SHAPED\""
guard "--body-file whose body has no shape"   42 "gh issue create -t \"x\" $BOARD -F $TMPP/bad.md"
guard "odd whitespace"                        42 'gh   issue    create --title "x"'
guard "tab-separated"                         42 "$(printf 'gh issue\tcreate -t "x"')"
guard "[G2] semicolon: cd /r; <create>"       42 'cd /r; gh issue create -t "x"'
guard "[G2] newline-separated commands"       42 "$(printf 'cd /r\ngh issue create -t "x"')"
guard "[G2] multi-line script"                42 "$(printf 'set -e\nmkdir -p tmp\ngh issue create -t "x"')"
guard "[G2] CRLF multi-line script"           42 "$(printf 'set -e\r\nmkdir -p tmp\r\ngh issue create -t "x"')"
guard "compound: mkdir -p && <create>"        42 'mkdir -p tmp && gh issue create -t "x"'
guard "other cmd's -p/-a must not count"      42 'mkdir -p tmp && ls -a && gh issue create -t "x"'
guard "subshell parentheses"                  42 '(cd /r && gh issue create -t "x")'
guard "piped into"                            42 'echo hi | gh issue create -t "x"'
guard "VAR=x prefix"                          42 'GH_TOKEN=z gh issue create -t "x"'
guard "sudo wrapper"                          42 'sudo gh issue create -t "x"'
# A create whose flags sit on the NEXT line still runs as a create.
guard "flags on the next line (LF)"           42 "$(printf 'gh issue create\n--title "x"')"
guard "[G1] flags on the next line (CRLF)"    42 "$(printf 'gh issue create\r\n--title "x"')"
guard "[G1] backslash-continuation, CRLF"     42 "$(printf 'gh issue create \\\r\n  --title "x"')"

echo
echo "=== 2. must ALLOW (0): fully shaped creates ==="
guard "long flags + done-condition"           0 "gh issue create -t \"x\" $BOARD -b \"$SHAPED\""
guard "short flags + done-condition"          0 "gh issue create -t \"x\" -a @me -p \"P\" -b \"$SHAPED\""
guard "--flag=value form"                     0 "gh issue create --assignee=@me --project=P --body=\"$SHAPED\""
guard "owner in BODY, no --assignee"          0 "gh issue create -t \"x\" --project \"P\" -b \"$SHAPED\""
guard "Work Cell form body (### headings)"    0 "gh issue create -t \"x\" $BOARD -b \"$WORKCELL\""
guard "Work Cell via --body-file"             0 "gh issue create -t \"x\" $BOARD -F $TMPP/good.md"
guard "## Definition of done"                 0 "gh issue create -t \"x\" $BOARD -b \"## Definition of done
shipped\""
guard "- [ ] Acceptance: ..."                 0 "gh issue create -t \"x\" $BOARD -b \"- [ ] Acceptance: green CI\""
guard "**Done when:** bold form"              0 "gh issue create -t \"x\" $BOARD -b \"**Done when:** it fires\""
guard "[G1] --web INSIDE a quoted body"       0 "gh issue create -t \"x\" $BOARD -b \"the --web ui; $SHAPED\""
guard "backslash-continuation, LF, shaped"    0 "$(printf 'gh issue create \\\n  -t "x" %s \\\n  -b "%s"' "$BOARD" "$SHAPED")"
guard "backslash-continuation, CRLF, shaped"  0 "$(printf 'gh issue create \\\r\n  -t "x" %s \\\r\n  -b "%s"' "$BOARD" "$SHAPED")"
guard "--web hands off to the browser"        0 'gh issue create --web'
guard "--template hands off to the form"      0 'gh issue create -T work-cell.yml'
guard "escape hatch # no-assign"              0 'gh issue create -t "x" # no-assign'

echo
echo "=== 3. must ALLOW (0): merely MENTIONING the phrase is not creating ==="
guard "[G1] grep for the phrase"              0 'grep -rn "gh issue create" .'
guard "[G1] commit message mentions it"       0 'git commit -m "docs: explain gh issue create"'
guard "[G1] heredoc documents it"             0 "$(printf 'cat > d.md <<EOF\ngh issue create --title X\nEOF')"
guard "[G1] CRLF heredoc documents it"        0 "$(printf 'cat > d.md <<EOF\r\ngh issue create --title X\r\nEOF')"
guard "prose mentioning done-condition"       0 'grep -n "done-condition" README.md'
guard "gh issue list is not create"           0 'gh issue list --state open'
guard "gh issue comment is not create"        0 'gh issue comment 5 -F body.md'
guard "gh pr create is not gh issue create"   0 'gh pr create -t "x" -b "y"'
guard "bare newline: gh issue / create"       0 "$(printf 'gh issue\ncreate -t "x"')"
guard "unrelated command"                     0 'git status --porcelain'

echo
echo "=== 4. must FAIL OPEN (0): a broken guard must never wedge real work ==="
printf 'not json at all'   | bash "$GUARD" >/dev/null 2>&1; check "malformed stdin"      0 "$?"
printf ''                  | bash "$GUARD" >/dev/null 2>&1; check "empty stdin"          0 "$?"
printf '{}'                | bash "$GUARD" >/dev/null 2>&1; check "empty JSON object"    0 "$?"
printf '{"tool_input":{}}' | bash "$GUARD" >/dev/null 2>&1; check "no command field"     0 "$?"
guard "unbalanced quotes"                     0 'gh issue create -t "unclosed'
guard "--body-file that cannot be read"       0 "gh issue create -t \"x\" $BOARD -F /nope/missing.md"
# Simulate "no JSON parser installed" HONESTLY: the sandbox PATH holds bash and
# coreutils but no python, so the script runs fully and must still fail open.
# (Using PATH=/nonexistent would kill `env` before bash ever started -- that
# proves nothing about the hook. It cost one red test to notice.)
payload 'gh issue create -t "x"' | env PATH="$NOPY" "$BASH_BIN" "$GUARD" >/dev/null 2>&1
check "no python on PATH (would-block cmd)"   0 "$?"

echo
echo "=== 5. OFF SWITCHES (0 on a command that would otherwise block) ==="
guard "PORTFOLIO_HOOKS_OFF=1"                 0 'gh issue create -t "x"' PORTFOLIO_HOOKS_OFF=1
guard "PORTFOLIO_CAPTURE_GUARD_OFF=1"         0 'gh issue create -t "x"' PORTFOLIO_CAPTURE_GUARD_OFF=1

echo
echo "=== 6. the block message must name every missing piece ==="
MSG="$(payload 'gh issue create -t "x"' | bash "$GUARD" 2>&1 >/dev/null)"
for want in "assignee" "project" "done-condition"; do
  if printf '%s' "$MSG" | grep -qi -- "$want"; then
    PASS=$((PASS+1)); printf '  ok    block message names: %-34s\n' "$want"
  else
    FAIL=$((FAIL+1)); printf '  FAIL  block message never mentions: %-25s\n' "$want"
  fi
done
# The hint it prints must be a command that WORKS. `--project` takes the project
# TITLE: `--project 2` fails with "could not add to project: '2' not found" AND
# the issue is not created, so a numeric hint teaches a failing command on every
# single block. Verified against gh 2.89.0: `-p, --project title`.
# Only the RECOMMENDED form is checked; the message also quotes the numeric form
# as a counter-example, and that sentence must not trip this assertion.
if printf '%s' "$MSG" | grep -q -- '--project "<project title>"' &&
   ! printf '%s' "$MSG" | grep -v -i 'fails\|not found' | grep -qE -- '--project[= ]+[0-9]'; then
  PASS=$((PASS+1)); echo "  ok    block message hints --project by TITLE, not number"
else
  FAIL=$((FAIL+1)); echo "  FAIL  block message hints a NUMERIC --project — that command fails"
fi

echo
echo "=== 7. AS WIRED: the literal command string out of settings.json ==="
# Strongest available proof short of a live session: pull the exact command
# Claude Code will run out of settings.json and execute THAT, not an
# approximation of it. The Bash entry is located by matcher, never by index.
WIRED="$("$PY" -c '
import json,sys
d=json.load(open(sys.argv[1], encoding="utf-8"))
for e in d["hooks"]["PreToolUse"]:
    if e.get("matcher")=="Bash":
        sys.stdout.write(e["hooks"][0]["command"]); break
else:
    sys.exit(1)
' "$HERE/../settings.json")" || { echo "  FAIL  no PreToolUse[matcher=Bash] entry in settings.json"; FAIL=$((FAIL+1)); }
export CLAUDE_PROJECT_DIR="$(cd "$HERE/../.." && pwd)"
echo "  cmd: $WIRED"

payload 'gh issue create -t "x"' | bash -c "$WIRED" >/dev/null 2>&1
check "wired: unshaped create -> 2 (real block)" 2 "$?"
payload "gh issue create -t \"x\" $BOARD -b \"$SHAPED\"" | bash -c "$WIRED" >/dev/null 2>&1
check "wired: shaped create   -> 0 (allowed)"    0 "$?"
payload 'ls -la' | bash -c "$WIRED" >/dev/null 2>&1
check "wired: unrelated cmd   -> 0 (allowed)"    0 "$?"

# THE fail-open case that matters: someone edits the guard and leaves a typo.
# Bare bash would exit 2 here and hard-block every Bash command in the repo.
BROKEN="$(mktemp -d)"
mkdir -p "$BROKEN/proj/.claude/hooks"
# The typo must sit where bash PARSES it. Bash reads a script incrementally, so
# a broken line appended after an early `exit 0` is never reached and the test
# would pass for the wrong reason -- it did, on the first run of this harness.
printf '#!/usr/bin/env bash\nif [ this is not valid bash\n' > "$BROKEN/proj/.claude/hooks/capture-guard.sh"
printf '%s' 'x' | env CLAUDE_PROJECT_DIR="$BROKEN/proj" bash -c "$WIRED" >/dev/null 2>&1
check "wired: guard has SYNTAX ERROR -> 0 (fails open)" 0 "$?"
printf '%s' 'x' | bash "$BROKEN/proj/.claude/hooks/capture-guard.sh" >/dev/null 2>&1
check "...and bare bash WOULD have exited 2 (why the wrapper exists)" 2 "$?"
rm -rf "$BROKEN" "$TMP"

echo
echo "=== 8. settings.json is valid JSON and wires the guard ==="
"$PY" -c '
import json,sys
d=json.load(open(sys.argv[1], encoding="utf-8"))
pre=d["hooks"]["PreToolUse"]
e=[x for x in pre if x.get("matcher")=="Bash"]
assert e, "no Bash matcher"
c=e[0]["hooks"][0]["command"]
assert "capture-guard.sh" in c, "Bash hook does not call capture-guard.sh"
assert "42" in c and "exit 2" in c, "42->2 mapping missing: blocks would never fire"
assert "exit 0" in c, "no trailing exit 0: a broken guard would not fail open"
' "$HERE/../settings.json" 2>/dev/null
check "settings.json valid + 42->2 mapping intact" 0 "$?"

echo
echo "======================================"
echo " passed=$PASS  failed=$FAIL"
echo "======================================"
[ "$FAIL" -eq 0 ] || exit 1
