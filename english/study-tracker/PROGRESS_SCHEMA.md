# English Progress data contract

The user-facing **English Progress** page stores a versioned JSON object in the existing LanguageLab progress snapshot. This document is the contract for future updates; it does **not** contain private quiz results.

## Import/export envelope

The English Progress page accepts JSON with the top-level shape:

```json
{
  "format": "language-lab-english-journey",
  "journey": {
    "schemaVersion": 1,
    "attempts": [],
    "errors": [],
    "topics": [],
    "updatedAt": "2026-10-17T00:00:00.000Z"
  }
}
```

- **attempts[]**: `{id, date: "YYYY-MM-DD", title, correct, total, note}`. Scores must satisfy `0 <= correct <= total` and `total > 0`. Use stable unique IDs; decimal correct values are allowed for previously teacher-scored partial-credit exercises.
- **errors[]**: `{id, category, incorrect, corrected, explanationVi, explanationKo, status}`, with `status` in `due | practicing | stable`. Status reflects a learner's self-assessment, not automatic mastery.
- **topics[]**: `{id, label, status, evidence}`, with `status` in `strong | review | unverified`.
- **updatedAt**: ISO timestamp of the most recent local update.

On import, the screen validates the shape and **replaces** the English journey after confirmation. Export before replacing valuable data. The snapshot in Learning OS is different: it includes all Library reader progress as well as the English journey.

## Evolution guidelines

Keep `schemaVersion` stable unless a migration is implemented. Do not mix multiple learning sessions into one attempt, and do not silently revise historical scores: add a new attempt for a retest. Use stable error IDs so review status is preserved between imports.

Privacy: commit only this contract and generic study guidance to the public repository. Store real attempts and learner writing in local/private JSON or authenticated, row-level-secured storage.
