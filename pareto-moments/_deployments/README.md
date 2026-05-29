# Deployments — engagement sync log

Append-only JSONL files written by the Truth & Peace engine's `workflow/sync-pareto-engagement.js`. One file per Pareto moment.

## File pattern

- `<moment-id>.jsonl` — one engagement reading per line.
- `<moment-id>.seen.jsonl` — sha1 fingerprints of already-synced readings. Idempotency guard. Delete a line to force re-sync.

## Line schema

```json
{
  "syncedAt": "ISO timestamp",
  "publishedAt": "ISO timestamp or null",
  "clipSlug": "kebab-slug",
  "platform": "youtube | tiktok | x | ...",
  "channel": "channel/account name or null",
  "paretoMomentIds": ["<moment-id>", "..."],
  "pillar": "P1 | P2 | P3 | P4 | combo or null",
  "axis": 1-8 or null,
  "movement": "truth-and-peace | ...",
  "manifestPath": "relative path in the engine repo",
  "engagement": {
    "views": number,
    "likes": number,
    "comments": number,
    "shares": number,
    "watchedSec": number or null,
    "notes": "free text or null",
    "recordedAt": "ISO timestamp"
  }
}
```

## How this folder learns

1. Engine publishes a clip via `prepare-publish.js --pareto <id> --pillar <P#>`.
2. Operator (or future API poller) posts engagement readings to viewer's `/engagement` endpoint.
3. `node workflow/sync-pareto-engagement.js` mirrors readings here, idempotent.
4. `node benchmarks/eval-distribution.js` reads here and computes per-moment / per-pillar / per-axis recalibration metrics.
5. Steward reviews and writes "Insight harvest" notes back into the moment file.

This is the substrate of the Engagement → OS loop in the masterplan.
