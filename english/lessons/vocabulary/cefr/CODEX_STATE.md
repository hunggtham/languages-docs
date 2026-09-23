# Codex vocabulary state

This file is the durable handoff for the CEFR vocabulary corpus. Repository contents and `python3 scripts/vocab-progress.py` are authoritative if a counter becomes stale.

## Mission

Build the English CEFR vocabulary corpus from A1 through C2+ using the canonical format in this directory.

- First milestone: 10,000 unique learning items
- Expansion target: 20,000 unique learning items
- Canonical lesson size: usually 15–20 items, with no hard 15-item quota; coherent topics may use 16–29 items with one or two review passages as specified in `VOCAB_PROMPT.md`.
- Every headword must be reused naturally in a review context.
- Target integration branch: `feat/vocabulary-learning`

## Current repository progress

- A1: 12 topic files covering source lessons `01`–`20`, 400 items; core A1 pass complete.
- A2: 34 topic files covering source lessons `01`–`81`, 1242 items; continue with A2 lesson `82`.
- B1: 0 items.
- B2: pilot lesson `01`, 15 items.
- C1: 0 items.
- C2: pilot lesson `01`, 15 items.
- C2+: 0 items.
- Total: 1672 items.

## Current position

Status: `READY`

Current level: `A2`

Next lesson: `a2/82-...md`

Before choosing the exact lesson topic and words:

1. read root and vocabulary-specific `AGENTS.md`;
2. read `/prompt/COMMON_PROMPT.md` and `/prompt/VOCAB_PROMPT.md`;
3. read this directory's `README.md` and this state file;
4. inspect the latest lesson in the active level and an approved pilot;
5. scan existing vocabulary headings to avoid duplicates;
6. choose the next coherent topic and continue sequential numbering.

New lessons should be placed in an existing or newly named topic folder when that improves discoverability. Keep the numeric lesson prefix in the filename; `scripts/vocab-progress.py` scans these folders recursively.

## Resume protocol

At the beginning of every new run:

1. inspect Git status/branch and pull the latest task branch state;
2. run `python3 scripts/vocab-progress.py` when available;
3. compare actual lesson files with this state;
4. if this file is stale, repository contents win;
5. resume from the first incomplete or missing sequential lesson;
6. do not regenerate completed lessons without a concrete quality defect.

At the end of every checkpoint update current level, last completed lesson, next lesson, actual counts by level, total count, intentional repeated senses, and blockers.

## Last checkpoint

- A1 and A2 source lessons have been consolidated into larger topic files with multiple review passages; all entries and contexts were revalidated.
- The latest content coverage remains A2 source lesson `81` (`food produce and staples`); continue with A2 lesson `82`.
- Next lesson: `english/lessons/vocabulary/cefr/a2/82-...md`.
- Actual counts: A1 400, A2 1242, B1 0, B2 15, C1 0, C2 15, C2+ 0; total 1672.
- No intentional repeated headwords or known vocabulary blocker in this batch.
