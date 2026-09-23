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
- A1 core topics 01–20 are now complete for this curriculum pass; the next level to generate is A2 lesson `01`.
- A2 lessons `01`–`04` are now generated and validated; continue with A2 lesson `05`.
