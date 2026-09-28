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
- B1: 1126 items in 56 topic files; topic-folder numbering resets per folder.
- B2: 243 items in 16 topic files; B2 expansion is active beyond the original pilot.
- C1: 0 items.
- C2: 2775 items in 139 topic files, including the newer `computing`, `semiconductors`, and `biomedicine` topic lessons.
- C2+: 0 items.
- Total: 6045 items.

## Current position

Status: `READY`

Current level: `B1/B2`

Next lesson: continue B1 and B2 with coherent topic-driven expansion. Reuse `b2/society/03-...` or `b2/risk/03-...` only when the next lesson naturally belongs to that network; otherwise create a new topic folder and start at `01`.

Before choosing the exact lesson topic and words:

1. read root and vocabulary-specific `AGENTS.md`;
2. read `/prompt/COMMON_PROMPT.md`, `/prompt/VOCAB_PROMPT.md`, and `/prompt/vocabulary_goal/GOAL.md`;
3. read this directory's level README and this state file;
4. inspect the latest lesson in the active level and an approved nearby lesson;
5. scan existing vocabulary headings to avoid duplicates;
6. choose the next coherent topic and continue numbering within that topic folder.

B1 should remain direct and practical, usually with shorter entries and strong everyday usage. B2 should preserve the deeper pilot style: clearer register/nuance, collocation, linking, sentence behavior, and distinctions from near-synonyms. New lessons should be placed in an existing or newly named topic folder when that improves discoverability.

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
- A2 reached its soft planning target at 1,501 items. B1 expansion now covers technology, society, business, work, travel, health, education, culture, food, relationships, leisure, services, and household emergency preparedness. B2 expansion now covers decisions, risk, work, communication, research, education, technology, and society.
- The merged remote checkpoints added ten B1/B2 lessons: cooking/eating out, friendship/social plans, project risk/accountability, discussion/persuasion, evidence/trends, hobbies/fitness, appointments/forms, academic writing, data privacy, and urban life/housing. This checkpoint also retains `b1/home/02-household-emergency-preparedness.md` and `b2/risk/01-risk-assessment-and-preparedness.md`.
- Latest continuation added `b1/leisure/02-fitness-training-and-community-sports.md` with 20 practical fitness and community-sports items, plus `b2/education/02-academic-revision-and-editing.md` with 15 academic revision and editing items.
- Latest continuation added `b1/services/02-repairs-delivery-and-follow-up.md` with 20 service-resolution items, plus `b2/technology/02-security-controls-and-user-choice.md` with 15 security-control and user-choice items.
- Latest continuation added `b1/leisure/03-community-events-and-creative-hobbies.md` with 20 community-event and creative-hobby items, plus `b2/society/02-housing-policy-and-neighborhood-change.md` with 15 housing-policy and neighborhood-change items.
- Latest continuation added `b1/services/03-home-utilities-and-maintenance.md` with 20 home-utility and maintenance items, plus `b2/risk/02-risk-governance-and-response.md` with 15 risk-governance and response items.
- Latest continuation added `b1/leisure/04-hobby-clubs-and-learning-projects.md` with 20 hobby-club and learning-project items, plus `b2/communication/02-disagreement-and-consensus.md` with 15 disagreement and consensus items.
- Latest continuation added `b1/services/04-moving-in-and-building-support.md` with 20 moving and building-support items, plus `b2/education/03-research-and-submission.md` with 15 research and submission items.
- Latest continuation added `b1/leisure/05-club-project-planning.md` with 20 club and project-planning items, plus `b2/communication/03-consensus-and-negotiation.md` with 15 consensus and negotiation items.
- Latest continuation added `b1/technology/06-device-use-and-support.md` with 20 device-use and support items.
- Latest continuation added `b1/technology/07-account-and-privacy-tools.md` with 20 account and privacy-tool items, plus `b2/technology/03-security-governance-and-assurance.md` with 15 security-governance and assurance items.
- Every new lesson uses a natural review passage with a Vietnamese translation; B1 uses the concise practical format and B2 uses the deeper pilot format. Exact-heading scans were run against the merged corpus before continuing.
- Earlier C2 checkpoints added distributed systems, compilers/runtime systems, database internals, memory models/concurrency, observability, network transport, filesystems/storage I/O, container orchestration, virtualization, GPU architecture, CPU microarchitecture, memory allocation/GC, RDMA/high-performance networking, distributed object storage, semiconductor fabrication, advanced packaging/chiplets, transistor scaling, semiconductor memory, wide-bandgap power devices, analog/mixed-signal design, RF/mmWave ICs, CMOS image sensors, proteomics, single-cell genomics, genome editing, spatial transcriptomics, epigenomics, cancer immunotherapy, metabolomics, microbiome/metagenomics, flow cytometry, liquid biopsy, cryo-EM, and glycomics.
- Next file: continue B1/B2 expansion from `b2/technology/03-...`, `b2/society/03-...`, or `b2/risk/03-...`; preserve the different depth expectations for each CEFR level.
- Actual counts: A1 400, A2 1501, B1 1126, B2 243, C1 0, C2 2775, C2+ 0; total 6045.
- Intentional repeated headword/sense notes from earlier checkpoints remain valid: `staging` appears with distinct medical and aerospace senses; `retention time` appears in semiconductor memory and chromatography with materially different senses; `phase-locked loop synthesizer` is taught as the RF frequency-synthesis expression after the generic `phase-locked loop` concept in analog IC design. No known vocabulary blocker in this merged B1/B2 batch.
