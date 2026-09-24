# Codex vocabulary state

This file is the durable handoff for the CEFR vocabulary corpus. Repository contents and `python3 scripts/vocab-progress.py` are authoritative if a counter becomes stale.

## Mission

Build the English CEFR vocabulary corpus from A1 through C2+ using the canonical format in this directory.

- First milestone: 10,000 unique learning items
- Expansion target: 20,000 unique learning items
- Lesson size is topic-driven; there is no default item count or hard per-file quota. Review-context rules are defined in `/prompt/vocabulary_goal/GOAL.md`.
- Every headword must be reused naturally in a review context.
- Target integration branch: `main` via short-lived task branches created from the latest `main`.

## Active generation contract

The durable generation goal is defined in `/prompt/vocabulary_goal/GOAL.md`. Read that file before every vocabulary run; this state file records repository position and checkpoint history, not a second copy of the goal prompt.

- Work in the order `A1 → A2 → B1 → B2 → C1 → C2 → C2+`, while keeping CEFR placement and learner usefulness ahead of quotas.
- Choose a coherent topic or situation first, then add the words needed to teach it. Prefer one well-grouped file over several small files; merge related legacy lessons when that reduces file sprawl without losing coverage.
- Put each file under its CEFR level and topic folder. Number files independently inside each topic folder (`a2/communication/01-...`, `a2/home/01-...`); a new topic starts at `01`. Preserve historical source coverage in metadata and README links.
- Do not impose a default item count. Keep each coherent topic together when practical; follow `/prompt/vocabulary_goal/GOAL.md` for review-context handling and legacy consolidation exceptions.
- For every batch: inspect instructions and nearby lessons, scan headings for duplicate headword+sense coverage, generate original contemporary American-English entries, validate every headword/context and numbering rule, update README and this state file, commit a scoped checkpoint, and continue from the next folder-local number.

## Current repository progress

- A1: 12 topic files covering source lessons `01`–`20`, 400 items; core A1 pass complete.
- A2: 49 topic files covering source lessons `01`–`81` plus the new expansion batches, 1501 items; topic-folder numbering resets per folder.
- B1: 848 items in 42 topic files; topic-folder numbering resets per folder.
- B2: pilot lesson `01`, 15 items.
- C1: 0 items.
- C2: 2195 items in 110 topic files, including the new `computing`, `semiconductors`, and `biomedicine` topic lessons.
- C2+: 0 items.
- Total: 4959 items.

## Current position

Status: `READY`

Current level: `C2`

Next lesson: continue with the next coherent C2 topic. Reuse `computing/04-...`, `semiconductors/02-...`, or `biomedicine/02-...` only when the next lesson belongs naturally to that network; otherwise create a new topic folder and start it at `01`.

Before choosing the exact lesson topic and words:

1. read root and vocabulary-specific `AGENTS.md`;
2. read `/prompt/COMMON_PROMPT.md`, `/prompt/VOCAB_PROMPT.md`, and `/prompt/vocabulary_goal/GOAL.md`;
3. read this directory's `README.md` and this state file;
4. inspect the latest lesson in the active level and an approved pilot;
5. scan existing vocabulary headings to avoid duplicates;
6. choose the next coherent topic and continue numbering within that topic folder.

New lessons should be placed in an existing or newly named topic folder when that improves discoverability. Number files independently within that folder; `scripts/vocab-progress.py` scans and reports each folder separately.

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
- A2 reached its soft planning target at 1,501 items. The current expansion has added validated B1 technology, community/social-challenges, heritage/museums, data/digital-work, management/leadership, finance/economy, law/public-services, learning/assessment, healthcare/prevention, digital-communication, research/innovation, workplace-wellbeing, travel-planning, cybersecurity/digital-trust, creative-industries, business-operations, networks/emerging-technology, community-participation, healthy-routines, professional-communication, entrepreneurship, travel-safety, academic-life, climate-action, career-development, cultural-program, software-development, professional-writing, public-policy, patient-rights, assessment-support, financial-records, and housing/renting topics.
- This C2 run previously added `computing/01-distributed-systems-and-consensus.md`, `semiconductors/01-semiconductor-fabrication-and-lithography.md`, `computing/02-compilers-and-runtime-systems.md`, and `biomedicine/01-proteomics-and-mass-spectrometry.md`.
- Latest checkpoint added `computing/03-database-internals-and-query-optimization.md`, containing 20 reviewed learning items from query optimization through storage, recovery, and concurrency internals.
- The database lesson uses one review passage that naturally reuses all 20 headwords and includes a Vietnamese translation, as required for a 16–20-item topic.
- Next file: continue C2 from the next coherent topic folder; do not resume the old global `rhetoric/104` sequence unless the topic is actually rhetoric-related.
- Actual counts: A1 400, A2 1501, B1 848, B2 15, C1 0, C2 2195, C2+ 0; total 4959.
- Intentional repeated headword: `staging` appears with distinct medical (disease extent) and aerospace (rocket-stage separation) senses. `lease`, `yield`, and other ordinary words in newer lessons are taught in distinct technical senses; no known vocabulary blocker in this batch.
