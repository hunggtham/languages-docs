# Codex vocabulary state

This file is the durable handoff between Codex runs. Recalculate repository reality before trusting stale counters, then update this file at every completed batch checkpoint.

## Mission

Build the English CEFR vocabulary corpus from A1 through C2+ using the canonical format in this directory.

- First milestone: 10,000 unique learning items
- Expansion target: 20,000 unique learning items
- Canonical lesson size: about 15 items
- Normal checkpoint: 3 complete lessons / about 45 items
- Target integration branch: `feat/vocabulary-learning`

## Current repository baseline

Approved pilot lessons already present:

- A1: `a1/01-daily-life-at-home-and-work.md` — 15 items
- B2: `b2/01-decisions-collaboration-and-results.md` — 15 items
- C2: `c2/01-nuance-evidence-and-argument.md` — 15 items

Known baseline total: 45 learning entries.

Directories still to be created when their turn begins: `a2/`, `b1/`, `c1/`, `c2-plus/`.

## Current position

Status: `READY`

Current level: `A1`

Next lesson: `a1/02-...md`

Before choosing the exact lesson topic and words:

1. read `../AGENTS.md`;
2. read `/prompt/COMMON_PROMPT.md` and `/prompt/VOCAB_PROMPT.md`;
3. read this directory's `README.md`;
4. inspect the complete A1 lesson 01;
5. scan existing vocabulary headings to avoid duplicates;
6. choose the next coherent A1 topic and continue sequential numbering.

## Resume protocol

At the beginning of every new run:

1. inspect Git status/branch and pull the latest task branch state;
2. run `python3 scripts/vocab-progress.py` when available;
3. compare actual lesson files with this state;
4. if this file is stale, repository contents win;
5. resume from the first incomplete or missing sequential lesson;
6. do not regenerate completed lessons without a concrete quality defect.

At the end of every checkpoint update:

- current level;
- last completed lesson;
- next lesson;
- actual entry count by level;
- total entry count;
- any intentional repeated headword with a distinct higher-level sense;
- blockers, if any.

## Last setup checkpoint

2026-09-23: latest `main` was synchronized into `feat/vocabulary-learning` before the autonomous-agent setup. Root and vocabulary-specific Codex instructions were added on `feat/vocabulary-autonomous-agent`.