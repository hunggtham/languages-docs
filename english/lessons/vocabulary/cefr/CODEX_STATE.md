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
- B1: 1226 items in 61 topic files; topic-folder numbering resets per folder.
- B2: 318 items in 21 topic files; B2 expansion is active beyond the original pilot.
- C1: 1410 items in 93 topic files; topic-folder numbering resets per folder.
- C2: 4836 items in 242 topic files, including rhetoric plus the newer `computing`, `semiconductors`, and `biomedicine` topic lessons.
- C2+: 0 items.
- Total: 9691 items (authoritative script count after merge).

## Current position

Status: `READY`

Current level: `C2`

Next lesson: continue B1/B2/C1 expansion or create the next coherent C2 topic file; repository contents and `python3 scripts/vocab-progress.py` remain authoritative. Reuse `computing/47-...`, `semiconductors/24-...`, or `biomedicine/40-...` only when the next lesson belongs naturally to that network; otherwise create a new topic folder and start it at `01`.

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
- A2 reached its soft planning target at 1,501 items. The current expansion has added validated B1 technology, community/social-challenges, heritage/museums, data/digital-work, management/leadership, finance/economy, law/public-services, learning/assessment, healthcare/prevention, digital-communication, research/innovation, workplace-wellbeing, travel-planning, cybersecurity/digital-trust, creative-industries, business-operations, networks/emerging-technology, community-participation, healthy-routines, professional-communication, entrepreneurship, travel-safety, academic-life, climate-action, career-development, cultural-program, software-development, professional-writing, public-policy, patient-rights, assessment-support, financial-records, and housing/renting topics.
- Earlier C2 checkpoints added distributed systems, compilers/runtime systems, database internals, memory models/concurrency, observability, network transport, filesystems/storage I/O, container orchestration, virtualization, GPU architecture, CPU microarchitecture, memory allocation/GC, semiconductor fabrication, advanced packaging/chiplets, transistor scaling, semiconductor memory, wide-bandgap power devices, analog/mixed-signal design, RF/mmWave ICs, proteomics, single-cell genomics, genome editing, spatial transcriptomics, epigenomics, cancer immunotherapy, metabolomics, microbiome/metagenomics, flow cytometry, and liquid biopsy.
- Latest checkpoints added `computing/15-confidential-computing-and-trusted-execution.md`, `computing/16-scheduling-and-resource-allocation.md`, `computing/17-data-compression-and-encoding.md`, `computing/18-serverless-function-runtimes.md`, `computing/19-edge-computing-and-workload-placement.md`, `computing/20-event-driven-architecture-and-messaging`, `semiconductors/09-neuromorphic-and-quantum-devices.md`, `semiconductors/10-semiconductor-reliability-and-failure-analysis.md`, `semiconductors/11-semiconductor-reliability-and-thermal-qualification.md`, `semiconductors/12-semiconductor-process-control-and-metrology.md`, `semiconductors/13-silicon-photonics-and-optical-interconnects.md`, `semiconductors/14-semiconductor-sustainability-and-circular-manufacturing.md`, `biomedicine/13-organoid-and-disease-modeling.md`, `biomedicine/14-gene-therapy-vectors-and-delivery.md`, `biomedicine/15-biomarkers-and-clinical-trial-design.md`, `biomedicine/16-cell-therapy-manufacturing-and-release.md`, and `biomedicine/17-systems-pharmacokinetics-and-dose-modeling.md`; each uses one 20-item review passage except the serverless lesson, which uses two shorter passages, all with Vietnamese translations.
- The preceding checkpoint added five lessons: `computing/13-rdma-and-high-performance-networking.md`, `computing/14-distributed-object-storage-and-erasure-coding.md`, `semiconductors/08-cmos-image-sensors-and-pixel-readout.md`, `biomedicine/11-cryo-em-and-structural-biology.md`, and `biomedicine/12-glycomics-and-glycobiology.md`; those five lessons added 100 reviewed C2 learning items.
- Dedup validation searched the default corpus for the new semantic networks and representative high-risk terms including `dynamic range`, `zero-copy`, `glycosylation`, `object storage`, and `structural biology`; no existing ordinary headword+sense coverage was found. Nearby branch lessons were also checked to avoid overlap with transport, distributed systems, analog/RF, proteomics, and recent omics content.
- New computing coverage now spans registered-memory networking, queue-pair verbs, one-sided RDMA, InfiniBand/RoCE, object namespaces, failure-aware placement, erasure coding, repair, and background replica convergence. Semiconductor coverage now includes pixel charge conversion, image-sensor noise, shutter architecture, optical stacking, and backside illumination. Biomedicine coverage now includes cryo-EM specimen preparation, particle reconstruction, resolution validation, atomic-model refinement, and glycan structure, processing, recognition, and heterogeneity.
- The local rhetoric sequence now continues through `132-seismology-and-earthquake-hazards.md`; the latest local rhetoric checkpoints added sensory science and seismology.
- Next file: continue C2 from the next coherent topic folder; do not resume the old global `rhetoric/104` sequence unless the topic is actually rhetoric-related.
- Latest continuation added `c1/finance/02-financial-regulation-and-consumer-protection.md` with 20 financial-regulation and consumer-protection items, `c1/psychology/02-cognitive-habits-and-motivation.md` with 20 cognitive-habit and motivation items, `c2/semiconductors/16-compact-modeling-and-physical-design-signoff.md` with 20 semiconductor modeling and signoff items, `c2/biomedicine/18-mechanistic-dose-modeling-and-virtual-patients.md` with 20 mechanistic pharmacometrics items, `c2/computing/21-programmable-networking-and-function-offload.md` with 20 programmable-networking and hardware-offload items, `c2/computing/22-webassembly-and-portable-execution.md` with 20 WebAssembly and portable-execution items, `c2/semiconductors/17-hardware-verification-and-emulation.md` with 20 hardware-verification and emulation items, `c2/biomedicine/19-quantitative-medical-imaging-and-radiomics.md` with 20 quantitative-imaging and radiomics items, `c2/computing/23-distributed-ml-training-and-inference.md` with 20 distributed-training and inference items, `c2/computing/24-privacy-preserving-federated-learning.md` with 20 privacy-preserving and federated-learning items, `c2/computing/25-ai-compiler-and-graph-optimization.md` with 20 AI compiler and graph-optimization items, `c2/semiconductors/18-low-power-design-intent-and-power-domains.md` with 20 low-power design-intent and power-domain items, `c2/biomedicine/20-digital-pathology-and-computational-histology.md` with 20 digital-pathology and computational-histology items, `c2/computing/26-model-evaluation-and-uncertainty.md` with 20 model-evaluation and uncertainty items, `c2/computing/27-data-curation-and-active-learning.md` with 20 data-curation and active-learning items, `c2/computing/28-reproducible-builds-and-supply-chain-integrity.md` with 20 reproducible-builds and supply-chain-integrity items, `c2/semiconductors/19-chiplet-interconnect-and-die-to-die-links.md` with 20 chiplet-interconnect and die-to-die-link items, `c2/biomedicine/21-clinical-data-interoperability-and-standards.md` with 20 clinical-data interoperability and standards items, `c2/computing/29-ml-observability-and-deployment-lifecycle.md` with 20 ML-observability and deployment-lifecycle items, `c2/computing/30-carbon-aware-data-center-operations.md` with 20 carbon-aware data-center and cooling items, `c2/biomedicine/22-medical-device-lifecycle-and-surveillance.md` with 20 medical-device lifecycle and surveillance items, `c2/biomedicine/23-variant-interpretation-and-genetic-counseling.md` with 20 variant-interpretation and genetic-counseling items, `c2/computing/31-model-compression-and-efficient-inference.md` with 20 model-compression and efficient-inference items, `c2/biomedicine/24-health-economics-and-outcomes-research.md` with 20 health-economics and outcomes-research items, `c2/biomedicine/25-metabolic-phenotyping-and-clinical-nutrition.md` with 20 metabolic-phenotyping and clinical-nutrition items, `c2/biomedicine/26-sleep-medicine-and-circadian-physiology.md` with 20 sleep-medicine and circadian-physiology items, `c2/biomedicine/27-rehabilitation-science-and-gait-analysis.md` with 20 rehabilitation-science and gait-analysis items, `c2/biomedicine/28-digital-therapeutics-and-behavioral-intervention.md` with 20 digital-therapeutics and behavioral-intervention items, `c2/biomedicine/29-pain-science-and-chronic-pain-rehabilitation.md` with 20 chronic-pain and rehabilitation items, `c2/computing/32-confidential-inference-and-enclave-security.md` with 20 confidential-inference and enclave-security items, `c2/computing/33-workload-identity-and-zero-trust-authorization.md` with 20 workload-identity and zero-trust-authorization items, `c2/biomedicine/30-transplant-immunology-and-organ-allocation.md` with 20 transplant-immunology and organ-allocation items, `c2/biomedicine/31-antimicrobial-pharmacology-and-resistance-ecology.md` with 20 antimicrobial-pharmacology and resistance-ecology items, `c2/biomedicine/32-phage-therapy-and-pathogen-ecology.md` with 20 phage-therapy and pathogen-ecology items, and `c2/computing/34-ebpf-and-kernel-observability.md` with 20 eBPF and kernel-observability items.
- Latest continuation added `c2/semiconductors/20-design-for-test-and-silicon-validation.md` with 20 design-for-test, wafer-screening, and silicon-validation items.
- Latest continuation added `c2/biomedicine/33-clinical-neuroimmunology-and-neuroinflammation.md` with 20 clinical-neuroimmunology and neuroinflammation items.
- Latest continuation added `c2/computing/35-formal-methods-and-type-theoretic-verification.md` with 20 formal-methods and type-theoretic-verification items.
- Latest continuation added `c2/biomedicine/34-clinical-pharmacogenomics-and-drug-gene-interactions.md` with 20 clinical-pharmacogenomics and drug–gene-interaction items.
- Latest continuation added `c2/semiconductors/21-power-integrity-and-high-speed-signal-analysis.md` with 20 power-integrity and high-speed-signal-analysis items.
- Latest continuation added `c2/computing/36-stream-processing-and-event-time-semantics.md` with 20 stream-processing and event-time-semantics items.
- Latest continuation added `c2/computing/37-crdts-and-causal-consistency.md` with 20 CRDT and causal-consistency items.
- Latest continuation added `c2/biomedicine/35-clinical-trial-safety-and-data-oversight.md` with 20 clinical-trial safety and data-oversight items.
- Latest continuation added `c2/computing/38-database-recovery-and-logging.md` with 20 database-recovery and logging items.
- Latest continuation added `c2/semiconductors/22-euv-lithography-and-stochastic-process-control.md` with 20 EUV-lithography and stochastic-process-control items.
- Latest continuation added `c2/computing/39-lock-free-concurrency-and-memory-reclamation.md` with 20 lock-free-concurrency and memory-reclamation items.
- Latest continuation added `c2/computing/40-gpu-kernel-optimization-and-accelerator-performance.md` with 20 GPU-kernel-optimization and accelerator-performance items.
- Latest continuation added `c2/biomedicine/36-digital-biomarkers-and-endpoint-adjudication.md` with 20 digital-biomarker and endpoint-adjudication items.
- Latest continuation added `c2/semiconductors/23-electrothermal-design-and-package-thermal-behavior.md` with 20 electrothermal-design and package-thermal-behavior items.
- Latest continuation added `c2/computing/41-post-quantum-cryptography-and-migration.md` with 20 post-quantum-cryptography and migration items.
- Latest continuation added `c2/biomedicine/37-microbiome-therapeutics-and-live-biotherapeutics.md` with 20 microbiome-therapeutics and live-biotherapeutics items.
- Latest continuation added `c2/computing/42-measured-boot-and-remote-attestation.md` with 20 measured-boot and remote-attestation items.
- Latest continuation added `c2/computing/43-serializability-and-distributed-transactions.md` with 20 serializability and distributed-transaction items.
- Latest continuation added `c2/computing/44-homomorphic-encryption-and-private-computation.md` with 20 homomorphic-encryption and private-computation items.
- Latest continuation added `c2/computing/45-vector-search-and-approximate-nearest-neighbors.md` with 20 vector-search and approximate-nearest-neighbor items.
- Latest continuation added `c2/biomedicine/38-pharmacovigilance-and-signal-detection.md` with 20 pharmacovigilance and safety-signal-detection items.
- Latest continuation added `c2/computing/46-polyhedral-optimization-and-auto-vectorization.md` with 20 polyhedral-optimization and auto-vectorization items.
- Latest continuation added `c2/biomedicine/39-renal-biomarkers-and-drug-induced-nephrotoxicity.md` with 20 renal-biomarker and drug-induced-nephrotoxicity items.
- The merged corpus currently reports A1 400, A2 1501, B1 1226, B2 318, C1 1410, C2 4836, C2+ 0; total 9691 items. Re-run `python3 scripts/vocab-progress.py` if any counter becomes stale.
- Intentional repeated headword/sense notes: `staging` appears with distinct medical (disease extent) and aerospace (rocket-stage separation) senses. `retention time` appears in semiconductor memory and chromatography with materially different senses. `phase-locked loop synthesizer` is taught as the RF frequency-synthesis expression after the generic `phase-locked loop` concept in analog IC design. `lease`, `yield`, and other ordinary words in newer lessons are taught in distinct technical senses; no known vocabulary blocker in this batch.
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
- Every new lesson uses a natural review passage with a Vietnamese translation; B1 uses the concise practical format and B2 uses the deeper pilot format. Exact-heading scans were run against the merged corpus before continuing.
- Earlier C2 checkpoints added distributed systems, compilers/runtime systems, database internals, memory models/concurrency, observability, network transport, filesystems/storage I/O, container orchestration, virtualization, GPU architecture, CPU microarchitecture, memory allocation/GC, RDMA/high-performance networking, distributed object storage, semiconductor fabrication, advanced packaging/chiplets, transistor scaling, semiconductor memory, wide-bandgap power devices, analog/mixed-signal design, RF/mmWave ICs, CMOS image sensors, proteomics, single-cell genomics, genome editing, spatial transcriptomics, epigenomics, cancer immunotherapy, metabolomics, microbiome/metagenomics, flow cytometry, liquid biopsy, cryo-EM, and glycomics.
- The merged B1/B2/C1 expansion is retained alongside the C2 continuation above; preserve the different depth expectations for each CEFR level.
- Intentional repeated headword/sense notes from earlier checkpoints remain valid: `staging` appears with distinct medical and aerospace senses; `retention time` appears in semiconductor memory and chromatography with materially different senses; `phase-locked loop synthesizer` is taught as the RF frequency-synthesis expression after the generic `phase-locked loop` concept in analog IC design. No known vocabulary blocker in this merged B1/B2 batch.
