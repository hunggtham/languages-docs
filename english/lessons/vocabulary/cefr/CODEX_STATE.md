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
- B1: 888 items in 44 topic files; topic-folder numbering resets per folder.
- B2: 60 items in 4 topic files; B2 expansion is now active beyond the original pilot.
- C1: 0 items.
- C2: 2775 items in 139 topic files, including the newer `computing`, `semiconductors`, and `biomedicine` topic lessons.
- C2+: 0 items.
- Total: 5624 items.

## Current position

Status: `READY`

Current level: `B1/B2`

Next lesson: continue B1 and B2 with coherent topic-driven expansion. Reuse `b1/food/02-...`, `b1/relationships/02-...`, `b2/work/02-...`, `b2/communication/02-...`, or `b2/research/02-...` only when the next lesson belongs naturally to that network; otherwise create a new topic folder and start at `01`.

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
- A2 reached its soft planning target at 1,501 items. Earlier B1 expansion added technology, community/social-challenges, heritage/museums, data/digital-work, management/leadership, finance/economy, law/public-services, learning/assessment, healthcare/prevention, digital-communication, research/innovation, workplace-wellbeing, travel-planning, cybersecurity/digital-trust, creative-industries, business-operations, networks/emerging-technology, community-participation, healthy-routines, professional-communication, entrepreneurship, travel-safety, academic-life, climate-action, career-development, cultural-program, software-development, professional-writing, public-policy, patient-rights, assessment-support, financial-records, and housing/renting topics.
- Earlier C2 checkpoints added distributed systems, compilers/runtime systems, database internals, memory models/concurrency, observability, network transport, filesystems/storage I/O, container orchestration, virtualization, GPU architecture, CPU microarchitecture, memory allocation/GC, RDMA/high-performance networking, distributed object storage, semiconductor fabrication, advanced packaging/chiplets, transistor scaling, semiconductor memory, wide-bandgap power devices, analog/mixed-signal design, RF/mmWave ICs, CMOS image sensors, proteomics, single-cell genomics, genome editing, spatial transcriptomics, epigenomics, cancer immunotherapy, metabolomics, microbiome/metagenomics, flow cytometry, liquid biopsy, cryo-EM, and glycomics.
- Latest checkpoint switched active generation to B1/B2 and added five lessons: `b1/food/01-cooking-and-eating-out.md`, `b1/relationships/01-friendship-conflict-and-social-plans.md`, `b2/work/01-project-risk-and-accountability.md`, `b2/communication/01-discussion-persuasion-and-interpretation.md`, and `b2/research/01-evidence-trends-and-interpretation.md`.
- The two B1 lessons add 40 reviewed learning items using the established concise B1 format. The three B2 lessons add 45 reviewed items using the deeper 15-item B2 pilot format. Every lesson includes a review passage that naturally reuses all headwords and a Vietnamese translation.
- Dedup validation searched the default corpus for the new semantic networks and representative high-risk expressions including `ingredient`, `friendship`, `stakeholder`, `assumption`, `correlation`, `representative sample`, `evidence-based`, and `rule out`; no existing ordinary headword+sense coverage was found in those searches.
- New B1 coverage now includes cooking methods, restaurant interaction, dietary needs, friendship maintenance, interpersonal boundaries, conflict repair, and social plans. New B2 coverage now includes project accountability/risk, analytical disagreement and persuasion, and evidence/trend interpretation.
- Next file: continue B1/B2 expansion from coherent topic folders; preserve the different depth expectations for each CEFR level.
- Actual counts: A1 400, A2 1501, B1 888, B2 60, C1 0, C2 2775, C2+ 0; total 5624.
- Intentional repeated headword/sense notes from earlier checkpoints remain valid: `staging` appears with distinct medical and aerospace senses; `retention time` appears in semiconductor memory and chromatography with materially different senses; `phase-locked loop synthesizer` is taught as the RF frequency-synthesis expression after the generic `phase-locked loop` concept in analog IC design. No known vocabulary blocker in this B1/B2 batch.
