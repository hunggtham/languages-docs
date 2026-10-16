# Vocabulary Expansion State

## Baseline

- Intended base: `origin/feat/vocabulary-learning` (`8731972`), the vocabulary-learning merge branch.
- Vocabulary-specific guidance currently available: `prompt/VOCAB_PROMPT.md` and `english/lessons/vocabulary/cefr/README.md`.
- Historical note: `AGENTS.md` was not present when this checkpoint began; the current repository root now contains it.
- `CODEX_STATE.md` and `scripts/vocab-progress.py` were also missing; this file and the progress script establish the resumable checkpoint format.

## Completed local lessons

- A1 lessons `01`–`20` exist in `english/lessons/vocabulary/cefr/a1/`.
- These lessons contain 20 entries each and have been checked so every headword appears in its review context.
- The remote baseline contains pilot lessons for A1, B2, and C2; existing local lessons are preserved and must not be regenerated without a concrete reason.

## Resume rule

1. Run `python3 scripts/vocab-progress.py` before generating content.
2. Treat an existing numbered lesson as structurally complete only after structural/context validation; do not call it accepted until prose, evidence, and duplicate coverage receive human review. Continue at the first missing lesson number only within the explicitly authorized scope.
3. Keep each lesson topic-coherent. Do not force a fixed entry count. Use one context for 16–24 entries and split into two contexts when a lesson has more than 25 entries.
4. Validate before every checkpoint commit, update this state file, then commit only the relevant vocabulary/state files.
5. Continue A1 → A2 → B1 → B2 → C1 → C2 → C2+ only when the current task authorizes corpus expansion; the numeric target alone is not permission to continue.

## Current checkpoint

- Filesystem progress must be recalculated with `scripts/vocab-progress.py` at the start of every resumed run.
- Active Goal: Expanding English CEFR corpus toward **40,000 valid learning items** spread evenly across B2, C1, C2, and C2+.
- Unified corpus status:
  - English CEFR corpus: 1,646 lessons, 35,036 valid learning items (Wave 18 complete: +32 lessons, +800 items).
  - Korean vocabulary corpus: 838 lessons, 12,081 valid learning items.
  - All lessons strictly follow canonical H2 format, dual review-in-context, bilingual translations, and deduplication.
