# Codex vocabulary state

This file is the durable handoff for the CEFR vocabulary corpus. Repository contents and `python3 scripts/vocab-progress.py` are authoritative if a counter becomes stale.

## Mission

Build the English CEFR vocabulary corpus from A1 through C2+ using the canonical format in this directory.

- First milestone: 10,000 unique learning items
- Expansion target: 20,000 unique learning items
- Lesson size is topic-driven; there is no default item count or hard per-file quota. Review-context rules are defined in `/prompt/vocabulary_goal/GOAL.md`.
- Every headword must be reused naturally in a review context.
- Target integration branch: `feat/vocabulary-learning`

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
- B1: 1546 items in 77 topic files; topic-folder numbering resets per folder.
- B2: 558 items in 37 topic files; B2 expansion is active beyond the original pilot.
- C1: 1370 items in 91 topic files; topic-folder numbering resets per folder.
- C2: 2775 items in 139 topic files, including the newer `computing`, `semiconductors`, and `biomedicine` topic lessons.
- C2+: 0 items.
- Total: 7590 items.

## Current position

Status: `READY`

Current level: `B1/B2/C1`

Next lesson: continue B1/B2 expansion or create the next coherent C1 topic file; repository contents and `python3 scripts/vocab-progress.py` remain authoritative.

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
- C1 expansion now covers 91 topic files and 1,370 items through programming-languages, alongside the B1/B2 expansion below.
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
- Latest continuation added `b1/society/06-community-help-and-local-access.md` with 20 community-support and local-access items, plus `b2/society/03-housing-supply-and-planning.md` with 15 housing-policy and planning items.
- Latest continuation added `b1/home/03-home-safety-and-recovery.md` with 20 home-safety and recovery items, plus `b2/risk/03-risk-monitoring-and-continuity.md` with 15 risk-monitoring and continuity items.
- Latest continuation added `b1/work/04-work-planning-and-career-steps.md` with 20 work-planning and career items, plus `b2/decisions/02-decision-quality-and-implementation.md` with 15 decision-quality and implementation items.
- Latest continuation added `b1/health/05-health-visits-and-self-care.md` with 20 health-visit and self-care items, plus `b2/research/02-study-design-and-evidence.md` with 15 study-design and evidence items.
- Latest continuation added `b1/travel/04-travel-documents-and-local-plans.md` with 20 travel-document and local-planning items, plus `b2/education/04-teaching-and-assessment-design.md` with 15 teaching and assessment-design items.
- Latest continuation added `b1/culture/04-public-arts-and-cultural-events.md` with 20 public-arts and cultural-event items, plus `b2/communication/04-discourse-and-interpretation.md` with 15 discourse and interpretation items.
- Latest continuation added `b1/transport/02-active-travel-and-commuter-choices.md` with 20 active-travel and commuter-choice items, plus `b2/work/02-organizational-change-and-workplace-performance.md` with 15 organizational-change and workplace-performance items.
- Latest continuation added `b1/food/02-food-shopping-and-nutrition.md` with 20 food-shopping and nutrition items, plus `b2/research/03-research-reproducibility-and-reporting.md` with 15 reproducibility and reporting items.
- Latest continuation added `b1/relationships/02-community-and-social-support.md` with 20 community and social-support items, plus `b2/decisions/03-priority-setting-and-decision-timing.md` with 15 priority-setting and decision-timing items.
- Latest continuation added `b1/travel/05-accommodation-and-local-etiquette.md` with 20 accommodation and local-etiquette items, plus `b2/technology/04-platforms-and-digital-infrastructure.md` with 15 platform and digital-infrastructure items.
- Latest continuation added `b1/science/04-scientific-method-and-experiments.md` with 20 scientific-method and experiment items, plus `b2/risk/04-continuity-and-recovery-operations.md` with 15 continuity and recovery-operation items.
- Latest continuation added `b1/health/06-healthcare-follow-up-and-prevention.md` with 20 healthcare follow-up and prevention items, plus `b2/education/05-learning-quality-and-equity.md` with 15 learning-quality and equity items.
- Latest continuation added `b1/business/07-business-cash-and-planning.md` with 20 business-cash and planning items, plus `b2/communication/05-public-messaging-and-trust.md` with 15 public-messaging and trust items.
- Latest continuation added `b1/services/05-consumer-returns-and-service-resolution.md` with 20 consumer-returns and service-resolution items, plus `b2/society/04-housing-access-and-urban-growth.md` with 15 housing-access and urban-growth items.
- Latest continuation added `b1/education/05-study-planning-and-academic-progress.md` with 20 study-planning and academic-progress items, plus `b2/decisions/04-decision-ownership-and-implementation.md` with 15 decision-ownership and implementation items.
- Latest continuation added `b1/transport/03-driving-and-road-safety.md` with 20 driving and road-safety items, plus `b2/research/04-publication-and-research-impact.md` with 15 publication and research-impact items.
- Latest continuation added `b1/health/07-medication-and-pharmacy-use.md` with 20 medication and pharmacy-use items, plus `b2/society/05-civic-participation-and-local-policy.md` with 15 civic-participation and local-policy items.
- Latest continuation added `b1/business/08-sustainable-business-and-consumer-choices.md` with 20 sustainable-business and consumer-choice items, plus `b2/technology/05-service-reliability-and-platform-design.md` with 15 service-reliability and platform-design items.
- Latest continuation added `b1/communication/05-everyday-work-messages.md` with 20 everyday-work-message items, plus `b2/work/03-leadership-and-organizational-learning.md` with 15 leadership and organizational-learning items.
- Latest continuation added `b1/science/05-weather-and-climate-action.md` with 20 weather and climate-action items, plus `b2/communication/06-public-reasoning-and-debate-framing.md` with 15 public-reasoning and debate-framing items.
- Latest continuation added `b1/food/03-food-preparation-and-safe-shopping.md` with 20 food-preparation and safe-shopping items, plus `b2/risk/05-operational-risk-controls-and-reporting.md` with 15 operational-risk controls and reporting items.
- Every new lesson uses a natural review passage with a Vietnamese translation; B1 uses the concise practical format and B2 uses the deeper pilot format. Exact-heading scans were run against the merged corpus before continuing.
- Earlier C2 checkpoints added distributed systems, compilers/runtime systems, database internals, memory models/concurrency, observability, network transport, filesystems/storage I/O, container orchestration, virtualization, GPU architecture, CPU microarchitecture, memory allocation/GC, RDMA/high-performance networking, distributed object storage, semiconductor fabrication, advanced packaging/chiplets, transistor scaling, semiconductor memory, wide-bandgap power devices, analog/mixed-signal design, RF/mmWave ICs, CMOS image sensors, proteomics, single-cell genomics, genome editing, spatial transcriptomics, epigenomics, cancer immunotherapy, metabolomics, microbiome/metagenomics, flow cytometry, liquid biopsy, cryo-EM, and glycomics.
- Next file: continue B1/B2 expansion from `b2/technology/03-...`, `b2/society/03-...`, or `b2/risk/03-...`; preserve the different depth expectations for each CEFR level.
- Actual counts: A1 400, A2 1501, B1 1226, B2 318, C1 0, C2 2775, C2+ 0; total 6220.
- Intentional repeated headword/sense notes from earlier checkpoints remain valid: `staging` appears with distinct medical and aerospace senses; `retention time` appears in semiconductor memory and chromatography with materially different senses; `phase-locked loop synthesizer` is taught as the RF frequency-synthesis expression after the generic `phase-locked loop` concept in analog IC design. No known vocabulary blocker in this merged B1/B2 batch.
- Actual counts after latest continuation: A1 400, A2 1501, B1 1546, B2 558, C1 1370, C2 2775, C2+ 0; total 8150.
