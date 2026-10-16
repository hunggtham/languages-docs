# Vocabulary Expansion State

## Baseline

- Intended base: `origin/feat/vocabulary-learning` (`8731972`), the vocabulary-learning merge branch.
- Vocabulary-specific guidance currently available: `prompt/VOCAB_PROMPT.md` and `english/lessons/vocabulary/cefr/README.md`.
- `AGENTS.md` was not present in the checkout when this run began.
- `CODEX_STATE.md` and `scripts/vocab-progress.py` were also missing; this file and the progress script establish the resumable checkpoint format.

## Completed local lessons

- A1 lessons `01`–`20` exist in `english/lessons/vocabulary/cefr/a1/`.
- These lessons contain 20 entries each and have been checked so every headword appears in its review context.
- The remote baseline contains pilot lessons for A1, B2, and C2; existing local lessons are preserved and must not be regenerated without a concrete reason.

## Resume rule

1. Run `python3 scripts/vocab-progress.py` before generating content.
2. Treat an existing numbered lesson as completed after structural/context validation; continue at the first missing lesson number in the current level.
3. Keep each lesson topic-coherent. Do not force a fixed entry count. Use one context for 16–24 entries and split into two contexts when a lesson has more than 25 entries.
4. Validate before every checkpoint commit, update this state file, then commit only the relevant vocabulary/state files.
5. Continue A1 → A2 → B1 → B2 → C1 → C2 → C2+ until the 10,000-item target and then the 20,000-item target are reached, unless runtime limits or a genuine blocker stops execution.

## Current checkpoint

- Filesystem progress must be recalculated with `scripts/vocab-progress.py` at the start of every resumed run.
- Live progress after the latest validated checkpoint (Wave 8):
  - A1: `12` files, `400` items
  - A2: `49` files, `1,501` items
  - B1: `128` files, `2,901` items
  - B2: `128` files, `2,993` items
  - C1: `287` files, `5,325` items
  - C2: `574` files, `11,480` items
  - C2+: `144` files, `3,296` items
  - **TOTAL**: `1,322` lessons, `27,896` valid learning items (`2,104` items remaining to reach the 30,000-item target).
- The latest checkpoint (Wave 8) added 16 parallel lessons (400 items) across B1 and B2:
  - B1: `culture/09`, `education/07`, `food/08`, `health/09`, `leisure/10`, `society/11`, `travel/11`, `work/08` (200 items)
  - B2: `art/06`, `business/06`, `economics/07`, `environment/14`, `finance/07`, `health/06`, `law/07`, `urban/13` (200 items)
  - All lessons strictly follow canonical H2 format, dual review-in-context with 100% headword bolding, and 0 duplicate headwords across the entire corpus.
- Continue to Wave 9 targeting B1, B2, and C1 expansion until the 30,000-item target is fully achieved.
