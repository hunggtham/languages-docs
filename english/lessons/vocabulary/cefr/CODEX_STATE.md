# Codex vocabulary state

This file is the durable handoff for the CEFR vocabulary corpus. Repository contents and `python3 scripts/vocab-progress.py` are authoritative if a counter becomes stale.

## Mission

Build the English CEFR vocabulary corpus from A1 through C2+ using the canonical format in this directory.

- First milestone: 10,000 unique learning items
- Verified checkpoint: 20,000 unique learning items
- Expansion target: 30,000 unique learning items
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
- C1: 5150 items in 280 topic files; topic-folder numbering resets per folder.
- C2: 11405 items in 571 topic files, including rhetoric plus the newer `computing`, `semiconductors`, and `biomedicine` topic lessons.
- C2+: 260 items in 13 topic files; expansion is active in `food-and-wine`, `ceramics`, `textiles`, `horticulture`, `coffee`, `woodworking`, `book-arts`, `stagecraft`, `baking`, `spirits`, `cheesemaking`, `tea`, and `glasswork`.
- Total: 20260 items (authoritative script count after the latest C2+ checkpoint).

## Current position

Status: `READY_FOR_30K`

Current level: `C2+`

Next lesson: continue C2+ with the next coherent topic (or `food-and-wine/02-...` when the next lesson naturally extends that network). The 20,000-item count is a verified checkpoint; continue until the 30,000-item target. Repository contents and `python3 scripts/vocab-progress.py` remain authoritative. Reuse a topic folder only when a future lesson belongs naturally to that network; otherwise create a new topic folder and start it at `01`.

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

- Latest continuation added `c2/semiconductors/155-heritage-conservation-and-museum-robotics.md` with 20 heritage-conservation, archaeology, museum, 3D-documentation, multispectral-imaging, and structural-condition items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/156-sports-robotics-and-athletic-performance-analysis.md` with 20 sports-robotics, athletic-training, motion-capture, performance-analysis, crowd-monitoring, and rehabilitation items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/157-live-event-production-and-stage-automation-robotics.md` with 20 live-event-production, stage-automation, camera-motion, show-control, safety, and teardown items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/158-retail-store-robotics-and-customer-fulfillment.md` with 20 retail-store, inventory, checkout, fulfillment, delivery, freshness, loss-prevention, and cleaning items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/159-airport-operations-and-ground-support-robotics.md` with 20 airport-service, baggage, runway, passenger-assistance, aircraft-turnaround, safety, and disruption-recovery items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/160-film-and-broadcast-production-robotics.md` with 20 film-production, motion-control, virtual-capture, broadcast, replay, teleprompter, and studio-coordination items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/161-smart-building-inspection-and-facility-robotics.md` with 20 smart-building inspection, indoor-environment, infrastructure-maintenance, emergency-guidance, and facility-digital-twin items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/162-hospitality-and-hotel-operations-robotics.md` with 20 hospitality, hotel-room, textile, guest-service, facility, accessibility, privacy, and checkout items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/163-pharmaceutical-manufacturing-and-sterile-processing-robotics.md` with 20 pharmaceutical-manufacturing, aseptic-processing, cleanroom, inspection, packaging, clinical-supply, and compounding items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/164-water-treatment-and-utility-infrastructure-robotics.md` with 20 water-treatment, wastewater, sewer, reservoir, dam, utility-maintenance, ecological-monitoring, and control-room items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/165-banking-branch-and-cash-operations-robotics.md` with 20 banking-branch, cash-processing, document-authentication, fraud-review, customer-routing, security, and ATM-maintenance items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/166-battery-manufacturing-and-energy-storage-robotics.md` with 20 battery-manufacturing, cell-assembly, electrode-processing, pack-testing, recycling, second-life, and energy-storage-safety items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/167-data-center-infrastructure-and-operations-robotics.md` with 20 data-center inspection, thermal, cabling, power, cooling, security, emergency-service, and remote-operations items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/168-chemical-plant-process-safety-robotics.md` with 20 chemical-plant inspection, hazardous-area, leak-detection, process-sampling, emergency-shutdown, decontamination, permit, and turnaround items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/169-wildfire-and-forest-response-robotics.md` with 20 wildfire detection, fireline mapping, forest-fuel, evacuation, crew-support, restoration, and post-fire erosion items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/170-livestock-aquaculture-and-animal-care-robotics.md` with 20 livestock monitoring, dairy, poultry, aquaculture, pasture, veterinary, disease-monitoring, and animal-welfare items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/171-precision-crop-and-agricultural-robotics.md` with 20 crop scouting, ripeness, weed control, planting, orchard, vineyard, greenhouse, phenotyping, irrigation, and field-logistics items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/172-road-and-highway-maintenance-robotics.md` with 20 road inspection, pavement repair, bridge scanning, lane marking, winter service, work-zone, drainage, incident-response, and highway-maintenance items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/173-railway-and-metro-infrastructure-robotics.md` with 20 railway ballast, track geometry, weld, overhead-line, pantograph, station, train, signaling, tunnel, depot, and fastener items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/174-offshore-renewable-and-marine-infrastructure-robotics.md` with 20 offshore wind, subsea cable, floating platform, marine turbine, foundation, coastal, sensor, safety, and decommissioning items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/175-nuclear-facility-and-radiation-safe-robotics.md` with 20 nuclear-facility inspection, reactor, radiation-mapping, fuel-handling, decontamination, emergency, waste, decommissioning, and security items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/176-launch-and-spaceport-operations-robotics.md` with 20 launch-pad, rocket-engine, cryogenic, payload, cleanroom, range-safety, mission-control, reentry, and spaceport-fire items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/177-medical-device-manufacturing-and-reprocessing-robotics.md` with 20 medical-device assembly, catheter, stent, implant, sterile-processing, prosthetic, diagnostic, usability, biocompatibility, and traceability items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/178-additive-and-composite-manufacturing-robotics.md` with 20 additive-manufacturing, metal-deposition, finishing, metrology, composite-layup, non-destructive-testing, inspection, and part-traceability items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/179-telecom-field-and-network-infrastructure-robotics.md` with 20 cell-tower, antenna, fiber, microwave, base-station, subsea-cable, emergency-site, spectrum, power, and remote-field items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/180-smart-grid-inspection-and-restoration-robotics.md` with 20 substation, transformer, transmission-line, breaker, battery, cable, fault-response, power-quality, storm-recovery, microgrid, and black-start items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/181-cold-chain-logistics-and-perishable-goods-robotics.md` with 20 cold-chain storage, refrigerated handling, perishable food, biologic delivery, quality, shelf-life, and refrigerant-monitoring items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/182-postal-mail-automation-and-parcel-robotics.md` with 20 postal sorting, address recognition, parcel inspection, route planning, locker, customs, returns, rural delivery, and weatherproof-handling items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/183-library-archive-digitization-and-preservation-robotics.md` with 20 archive scanning, book digitization, manuscript handling, shelf inventory, conservation, metadata, OCR, pest monitoring, and disaster recovery items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/184-weather-and-climate-observation-robotics.md` with 20 weather-radar, atmospheric-sampling, balloon, hazard-monitoring, seismic, flood, permafrost, drought, wind, and solar-observation items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/185-laboratory-automation-and-scientific-sample-robotics.md` with 20 sample transport, high-throughput processing, mass spectrometry, chromatography, biobank, accessioning, microscopy, reagent, contamination, animal-care, and scientific-imaging items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/186-construction-and-structural-inspection-robotics.md` with 20 concrete, rebar, surveying, crane, formwork, foundation, structural, prefabrication, safety, demolition, masonry, scaffold, and temporary-structure items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/187-mining-and-mineral-processing-robotics.md` with 20 ore-crushing, mineral-sorting, underground-mapping, ventilation, drilling, tailings, smelting, rescue, haulage, stockpile, and water-pumping items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/188-commercial-kitchen-and-restaurant-service-robotics.md` with 20 commercial-kitchen, cooking, bakery, beverage, inventory, allergen, sanitation, cold-storage, catering, dining-delivery, waste, and queue-forecasting items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/189-court-legal-records-and-secure-facility-robotics.md` with 20 court filing, evidence handling, forensic imaging, legal records, secure mail, visitor screening, translation, scheduling, and digital-evidence items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/190-insurance-claims-and-property-risk-robotics.md` with 20 insurance claim intake, damage inspection, policy extraction, triage, risk engineering, catastrophe mapping, payment verification, field adjustment, and recovery-coordination items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/191-cybersecurity-operations-and-secure-facility-robotics.md` with 20 security patrol, incident evidence, key ceremony, media destruction, access, forensic, backup, response-supply, evidence-locker, camera-maintenance, and threat-hunting items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/192-office-facility-and-workplace-service-robotics.md` with 20 office reception, meeting setup, mailroom, document destruction, cleaning, inventory, occupancy, safety, access, transcription, courier, sanitation, recycling, and desk-service items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/193-electronics-repair-and-refurbishment-robotics.md` with 20 electronics diagnosis, circuit-board repair, battery and screen service, testing, warranty, recycling, refurbishment, secure wiping, and packaging items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/194-music-instrument-and-studio-service-robotics.md` with 20 musical-instrument inspection, tuning, repair, digitization, transport, audio calibration, studio, orchestra, archive, humidity, and restoration items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/195-home-appliance-and-domestic-service-robotics.md` with 20 appliance diagnosis, repair, calibration, energy, accessibility, security, and recycling items; the lesson uses one integrated review passage with Vietnamese translation.
- Final target checkpoint added `c2/semiconductors/196-aquarium-and-aquatic-conservation-robotics.md` with 13 aquarium operations, aquatic education, animal-care, visitor-flow, and coral-restoration items; the lesson uses one integrated review passage with Vietnamese translation and brings the corpus to exactly 20,000 items.
- New continuation contract raises the verified corpus target from 20,000 to 30,000 items and starts the C2+ expansion from the next coherent topic folder.
- First C2+ continuation added `c2-plus/food-and-wine/01-wine-sensory-evaluation-and-cellar-language.md` with 20 advanced wine-production and sensory-evaluation items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/ceramics/01-studio-pottery-process-and-glaze-chemistry.md` with 20 studio-pottery forming, firing, glaze, and surface-treatment items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/textiles/01-textile-weaving-dyeing-and-finishing.md` with 20 weaving, resist-dyeing, fiber, and textile-finishing items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/horticulture/01-advanced-plant-propagation-and-growth.md` with 20 plant-propagation, growth-regulation, soil-biology, and trained-form items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/coffee/01-coffee-processing-and-sensory-analysis.md` with 20 coffee-processing, fermentation, roasting, brewing, and sensory-analysis items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/woodworking/01-advanced-joinery-and-lumber-behavior.md` with 20 joinery, hand-tool, lumber-defect, acclimation, and sawing items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/book-arts/01-bookbinding-and-manuscript-conservation.md` with 20 book-structure, binding, tooling, and paper-conservation items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/stagecraft/01-theater-stagecraft-and-costume-language.md` with 20 theater lighting, stage machinery, rehearsal, and costume-construction items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/baking/01-bread-and-pastry-fermentation-science.md` with 20 bread fermentation, laminated pastry, proofing, shaping, and filling items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/spirits/01-distilling-and-spirit-maturation.md` with 20 distilling, fraction selection, cask maturation, blending, and bottling items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/cheesemaking/01-cheesemaking-cultures-and-affinage.md` with 20 cheesemaking, cultures, rind development, pressing, salting, and aging items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/tea/01-tea-processing-and-brewing-language.md` with 20 tea processing, oxidation, grading, aging, and small-vessel brewing items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest C2+ continuation added `c2-plus/glasswork/01-glassblowing-and-kilnforming-language.md` with 20 glassblowing, patterning, kilnforming, annealing, and coldworking items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/154-port-automation-and-maritime-logistics-robotics.md` with 20 port automation, container handling, cargo inspection, maritime surveillance, intermodal dispatch, and yard-congestion items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/153-educational-and-social-robotics.md` with 20 educational, tutoring, social-interaction, affect, engagement, adaptive-learning, and robot-ethics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/152-healthcare-logistics-and-laboratory-robotics.md` with 20 hospital logistics, patient-support, disinfection, clinical-sample, pipetting, liquid-handling, and laboratory-automation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/151-transit-robotics-and-rail-operations.md` with 20 transit-service, passenger-safety, rail-inspection, track-maintenance, depot-automation, and dispatch items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/150-food-processing-robotics-and-packaging-quality.md` with 20 food-processing, packaging, hygiene, soft-product handling, portioning, quality-sorting, and defect-classification items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/149-waste-recycling-robotics-and-material-recovery.md` with 20 waste-sorting, recycling, material-recovery, contamination, conveyor-picking, processing, and collection items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/148-mining-robotics-and-geological-survey.md` with 20 mining-robotics, extraction, ventilation, slope-safety, subsurface-mapping, and mineral-analysis items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/147-environmental-monitoring-robotics-and-climate-sensing.md` with 20 environmental-monitoring, air/water sensing, habitat observation, shoreline, frozen-ground, methane, and carbon-flux items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/146-energy-infrastructure-robotics-and-asset-inspection.md` with 20 energy-infrastructure, utility-inspection, grid, and nondestructive-testing items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/145-disaster-response-robotics-and-rescue-navigation.md` with 20 disaster-response, victim-detection, hazardous-environment, teleoperation, and rescue-navigation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/144-construction-robotics-and-worksite-automation.md` with 20 construction-robotics, site-mapping, BIM, earthmoving, concrete, assembly, and facade-inspection items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/143-space-robotics-and-orbital-servicing.md` with 20 space-robotics, rendezvous, docking, microgravity, propulsion, debris-capture, and radiation-hardening items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/142-aerial-robotics-and-drone-autonomy.md` with 20 aerial-robotics, flight-control, landing, airspace, disturbance, failure, battery, and mapping items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/141-underwater-robotics-and-marine-navigation.md` with 20 underwater-robotics, acoustic-localization, sonar, buoyancy, navigation, marine-hardware, and subsea-manipulation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/140-agricultural-robotics-and-precision-field-operations.md` with 20 agricultural-robotics, crop-perception, field-navigation, soil-sensing, treatment, yield, and geofencing items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/139-medical-robotics-and-clinical-workflow-integration.md` with 20 medical-robot, surgical-navigation, rehabilitation, sterile-workflow, patient-model, and targeting items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/138-warehouse-robotics-and-order-fulfillment.md` with 20 warehouse-robotics, storage, picking, routing, inventory, fulfillment, and exception-handling items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/137-robot-testing-and-verification-practice.md` with 20 robot testing, acceptance, resilience, coverage, replay, and risk-based verification items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/136-robot-digital-twins-and-simulation-validation.md` with 20 digital-twin, simulation-fidelity, physics-model, sim-to-real, disturbance, and scenario-coverage items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/135-robot-fleet-operations-and-observability.md` with 20 fleet-management, dispatch, mapping, telemetry, observability, automation, and remote-intervention items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/134-robot-safety-cases-and-operational-governance.md` with 20 safety-case, assurance, hazard-analysis, operational-domain, oversight, provenance, and incident-reporting items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/133-robot-cybersecurity-and-secure-operations.md` with 20 robot-security, firmware trust, command integrity, attack resilience, and privacy-aware-perception items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/132-robot-energy-and-thermal-aware-planning.md` with 20 battery-aware planning, efficiency, thermal, power-management, and charging items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/131-robot-real-time-hardware-and-control-architecture.md` with 20 robot hardware, real-time execution, transport, pipeline, and embedded-control items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/130-robot-language-grounding-and-instruction-following.md` with 20 language-grounding, dialogue, disambiguation, multimodal-instruction, and grounded-planning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/129-robotic-active-perception-and-scene-understanding.md` with 20 active-perception, viewpoint-selection, affordance, segmentation, pose, fusion, and visual-grounding items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/128-robotic-skill-learning-and-policy-transfer.md` with 20 manipulation-skill, movement-primitive, policy-transfer, demonstration-learning, and constrained-reinforcement items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/127-human-robot-collaboration-and-shared-autonomy.md` with 20 human–robot collaboration, social navigation, shared-control, teleoperation, and operator-awareness items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/126-robotic-task-planning-and-multi-robot-coordination.md` with 20 task-planning, temporal-logic, allocation, and multi-robot coordination items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/125-robotic-fault-tolerance-and-health-aware-planning.md` with 20 fault-tolerance, diagnosis, reconfiguration, prognostics, and health-aware-planning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/124-robotic-reachability-and-runtime-safety.md` with 20 reachability, formal-safety, runtime-assurance, and conservative-set items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/123-robotic-system-identification-and-uncertainty-aware-control.md` with 20 system-identification, observer, uncertainty-modeling, and robust-control items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/122-robotic-trajectory-optimization-and-dynamic-feasibility.md` with 20 trajectory-optimization, control-theoretic, constrained-planning, and dynamic-feasibility items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/121-robotic-contact-control-and-constrained-planning.md` with 20 contact-control, grasp-stability, constrained-planning, and whole-body coordination items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/120-robotics-sensing-and-motion-planning-hardware.md` with 20 robotics-sensing, state-estimation, contact-control, collision-geometry, tactile, and motion-planning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/119-edge-ai-accelerator-mapping-and-quantization.md` with 20 edge-AI, quantization, accelerator-dataflow, compiler-mapping, memory-traffic, and deployment items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/118-process-analytics-and-adaptive-model-monitoring.md` with 20 process-analytics, representation-drift, active-learning, class-imbalance, model-maintenance, and deployment-monitoring items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/117-virtual-metrology-and-process-health-control.md` with 20 virtual-metrology, run-to-run-control, chamber-health, endpoint-sensing, sampling, and statistics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/116-scan-test-and-design-for-test-diagnostics.md` with 20 scan-test, DFT, fault-modeling, diagnosis, coverage-cost, and test-power items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/115-hardware-security-and-tamper-resistance.md` with 20 hardware-security, side-channel, tamper-response, entropy, lifecycle, attestation, and debug-control items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/114-formal-hardware-verification-and-coverage-evidence.md` with 20 formal-verification, assertion, coverage, proof, harness, mutation, and checker items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/113-clock-crossing-and-power-domain-integrity.md` with 20 clock-crossing, metastability, reset-domain, power-domain, startup, and synchronizer-integrity items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/112-frequency-dissemination-and-network-timing-errors.md` with 20 frequency-dissemination, fiber-transfer, network-timing, servo-limit, holdover, and timescale items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/111-time-transfer-and-clock-comparison-uncertainty.md` with 20 time-transfer, clock-comparison, delay-calibration, outage, uncertainty, and timescale-handoff items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/110-precision-clock-interrogation-and-stability-diagnostics.md` with 20 quantum-clock, state-preparation, field-shift, servo, timing-stability, and interrogation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/109-photon-detection-and-quantum-timing-diagnostics.md` with 20 photon-detection, detector-noise, timing, coincidence, photon-counting, and interference items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/108-photonic-components-and-resonator-control.md` with 20 photonic-component, grating, deflector, resonator, coupling, thermal-optic, and delay-line items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/107-coherent-optical-links-and-fiber-impairments.md` with 20 coherent-optics, photodetection, dispersion, nonlinear-fiber, polarization, and carrier-recovery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/106-serdes-link-training-and-jitter-tolerance.md` with 20 SerDes, clock-recovery, jitter, equalization, training, and lane-alignment items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/105-rf-filters-and-antenna-array-calibration.md` with 20 RF-filter, antenna-matching, phased-array, coupling, scanning, and polarization items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/104-rf-power-amplifier-efficiency-and-linearity.md` with 20 RF-power-amplifier, efficiency, predistortion, stability, thermal, and spectral-linearity items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/103-rf-receiver-linearity-and-noise-control.md` with 20 RF-receiver, compression, reciprocal-mixing, blocking, noise, gain-control, and quadrature items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/102-sensor-interface-calibration-and-fault-diagnostics.md` with 20 sensor-interface, precision-amplifier, self-test, fault-detection, and calibration items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/101-data-converter-linearity-and-sampling-diagnostics.md` with 20 converter-linearity, spectral-distortion, sampling, calibration, and anti-alias items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/100-secure-firmware-lifecycle-and-rolling-updates.md` with 20 firmware-authentication, staged-rollout, recovery, health-gate, and update-observability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/99-nvme-io-control-and-recovery-observability.md` with 20 NVMe, I/O-queue, DMA, controller-recovery, telemetry, and device-trust items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/98-memory-coherence-and-persistent-storage.md` with 20 cache-coherence, persistence-ordering, flash-management, recovery, and durability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/97-memory-controller-scheduling-and-data-integrity.md` with 20 controller-scheduling, memory-bandwidth, scrubbing, remapping, failover, and data-integrity items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/96-memory-retention-and-ecc-diagnostics.md` with 20 memory-retention, ECC, sensing-margin, decoder, and array-diagnostics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/95-package-qualification-and-interconnect-fatigue.md` with 20 package-qualification, interconnect-fatigue, bond-strength, shock, vibration, and humidity items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/94-advanced-packaging-and-chiplet-integration.md` with 20 chiplet, packaging, bonding, co-design, assembly, and interposer items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/93-yield-engineering-and-process-control.md` with 20 yield-engineering, statistical-control, containment, retest, and binning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/92-process-window-and-defectivity-control.md` with 20 process-window, lithography, etch, implantation, deposition, and defectivity items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/91-high-speed-link-integrity-and-emc.md` with 20 high-speed-link, equalization, crosstalk, mode-conversion, and EMC items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/90-power-integrity-and-transient-control.md` with 20 power-integrity, control-loop, transient-protection, and electromagnetic-compliance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/89-electrothermal-behavior-and-cooling-paths.md` with 20 electrothermal, cooling-path, transient, and thermal-diagnostics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/88-qualification-and-field-reliability-models.md` with 20 qualification, mission-profile, field-reliability, repairable-system, and service-life items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/87-reliability-statistics-and-life-modeling.md` with 20 reliability-statistics, lifetime-modeling, stress-profile, and prognostic items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/86-failure-analysis-and-reliability-screening.md` with 20 failure-analysis, physical-localization, package-reliability, and production-screening items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/85-metrology-readout-and-cross-instrument-validation.md` with 20 readout, metrology, cross-instrument, spectral, and reproducibility items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/84-probabilistic-model-selection-and-measurement-diagnostics.md` with 20 likelihood, model-selection, robust-estimation, drift-detection, and spectral-diagnostic items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/83-system-identification-and-active-calibration.md` with 20 uncertainty, benchmarking, Hamiltonian-inference, Bayesian-calibration, and experimental-design items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/82-process-representations-and-calibration-metrics.md` with 20 channel-representation, distance-metric, relaxation, calibration, and Hamiltonian-learning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/81-quantum-device-characterization.md` with 20 process-tomography, fidelity, SPAM, relaxation, coherence, and echo items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/80-correlated-noise-and-error-mitigation.md` with 20 correlated-noise, leakage, reset/readout, randomized-control, and mitigation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/79-fault-tolerant-syndrome-processing.md` with 20 syndrome-processing, fault-tolerance, correlated-noise, leakage, and decoder-throughput items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/78-quantum-error-codes-and-decoders.md` with 20 stabilizer-code, syndrome, code-family, fault-tolerance, and decoder items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/77-anyon-physics-and-topological-error-correction.md` with 20 fractional-quantum-Hall, anyon, fusion, topological-qubit, and error-correction items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/76-topological-band-theory-and-protected-states.md` with 20 topological-band, geometric-phase, protected-state, Hall-effect, and defect items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/75-criticality-and-nonequilibrium-quantum-dynamics.md` with 20 criticality, entanglement, topology, and nonequilibrium-dynamics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/74-quantum-simulation-and-many-body-dynamics.md` with 20 quantum-gate, spin-model, quench, correlation, and many-body-phase items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/73-neutral-atom-gate-fidelity-and-transport.md` with 20 neutral-atom transport, gate-fidelity, readout, and error-channel items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/72-rydberg-interactions-and-neutral-atom-control.md` with 20 Rydberg-interaction, neutral-atom gate, parity-measurement, and coherent-transport items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/71-optical-traps-and-tweezer-arrays.md` with 20 optical-trap, tweezer-array, confinement, heating, and collisional-control items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/70-laser-cooling-and-atomic-traps.md` with 20 laser-cooling, atomic-trap, temperature-limit, and phase-space-density items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/69-atomic-transitions-and-state-lifetimes.md` with 20 atomic-structure, transition-strength, selection-rule, and lifetime items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/68-precision-spectroscopy-and-linewidths.md` with 20 narrow-line spectroscopy, broadening, driven-transition, and fluorescence items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/67-time-scales-and-clock-steering.md` with 20 ensemble-time-scale, prediction, holdover, stability-statistics, and link-calibration items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/66-time-transfer-links-and-clock-networks.md` with 20 stabilized-link, delay-calibration, resilience, field-comparison, and clock-network items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/65-clock-comparison-and-relativistic-geodesy.md` with 20 clock-comparison, time-transfer, geodesy, and reference-link items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/64-atomic-clock-noise-and-state-control.md` with 20 clock-noise, state-preparation, fluorescence-detection, cooling, and light-shift items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/63-atomic-clock-shifts-and-interrogation.md` with 20 atomic-clock shifts, optical-lattice, ion-trap, and interrogation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/62-environmental-stability-and-optical-noise.md` with 20 environmental-coupling, reflection, fiber-noise, and precision-shift items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/61-ultrastable-lasers-and-control-loops.md` with 20 reference-cavity, laser-stability, discriminator, tuning, and servo-control items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/60-frequency-reference-and-pulse-quality.md` with 20 frequency-synthesis, comb-indexing, noise-analysis, and servo-control items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/59-frequency-comb-stabilization-and-pulse-diagnostics.md` with 20 comb-stabilization, phase-reference, frequency-calibration, and ultrafast-pulse-diagnostic items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/58-optical-combs-and-ultrafast-metrology.md` with 20 terahertz-generation, frequency-comb, ultrafast-pulse, and metrology items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/57-nonlinear-materials-and-optical-combs.md` with 20 material-nonlinearity, carrier-dynamics, electro-optic, and thermal-optics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/56-advanced-quantum-and-nonlinear-waveguides.md` with 20 quantum-confined emitter, specialty-fiber, ultrafast-propagation, and parametric-conversion items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/55-quantum-and-nonlinear-photonics.md` with 20 quantum-emitter, single-photon, nonlinear-optics, and photonic-resonator items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/54-photonic-link-noise-and-wavelength-control.md` with 20 optical-link, dispersion, coupling, noise-limit, and receiver front-end items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/53-photonic-integration-and-optical-link-engineering.md` with 20 photonic-integration, waveguide, optical-noise, calibration, and receiver-margin items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/52-power-system-dynamics-and-transmission-limits.md` with 20 fault-clearing, oscillation, excitation, line-rating, contingency, and voltage-stability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/51-grid-stability-and-wide-area-control.md` with 20 synchronized-measurement, frequency-defense, restoration, and grid-stability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/50-grid-protection-and-switchgear-reliability.md` with 20 fault-current, relay, switchgear, arc-flash, and surge-protection items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/49-grid-power-quality-and-harmonic-control.md` with 20 grid-impedance, power-quality, sequence-component, reactive-compensation, and harmonic-filter items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/48-renewable-inverters-and-energy-storage.md` with 20 photovoltaic, microgrid, inverter, islanding, battery, balancing, and bidirectional-converter items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/47-motor-control-and-inverter-modulation.md` with 20 motor-control, inverter-modulation, feedback-loop, sensing, and torque-management items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/46-power-converter-topologies-and-control.md` with 20 power-factor, converter-topology, feedback-control, startup, and protection items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/45-power-switching-and-gate-drive.md` with 20 power-switching, gate-drive, sensing, clamping, and soft-switching items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/44-power-thermal-and-isolation-design.md` with 20 power-delivery, thermal-path, board-layout, and high-voltage-isolation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/43-package-assembly-and-board-reliability.md` with 20 package-assembly, bonding, board, and mechanical-qualification items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/42-semiconductor-probing-and-package-mechanics.md` with 20 wafer-probing, socket, chuck, contact, and package-mechanics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/41-memory-controller-ecc-and-data-reliability.md` with 20 memory-array, refresh, error-correction, and decoder-reliability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/40-memory-programming-and-read-margin.md` with 20 memory endurance, programming, read-margin, decoding, and interference items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/39-semiconductor-test-flow-and-package-screening.md` with 20 semiconductor test-flow, fault-model, automated-equipment, and package-screening items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/38-semiconductor-yield-and-test-control.md` with 20 yield, wafer-sort, tool-matching, monitor-wafer, and lot-disposition items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/37-semiconductor-failure-analysis-and-microscopy.md` with 20 semiconductor failure-analysis, microscopy, spectroscopy, and localization items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/36-radiation-hardening-and-space-qualification.md` with 20 radiation-hardening, particle-effect, shielding, and space-qualification items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/35-device-aging-variability-and-radiation-reliability.md` with 20 device-variability, aging, statistical-reliability, and radiation-reliability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/34-process-control-and-wafer-metrology.md` with 20 wafer metrology, process-control, plasma, implantation, and electrical-check items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/semiconductors/33-lithography-etch-and-dopant-process-control.md` with 20 lithography, etch, deposition, implantation, and process-control items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/181-embedded-telemetry-and-profiling.md` with 20 embedded telemetry, tracing, and profiling items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/180-embedded-power-thermal-and-battery-management.md` with 20 embedded power, thermal, and battery-management items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/179-embedded-time-synchronization-and-sampling.md` with 20 embedded time-synchronization, clock, and sampling items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/178-embedded-device-buses-and-signal-integrity.md` with 20 embedded-bus, framing, arbitration, and signal-integrity items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/177-memory-reliability-and-memory-safety.md` with 20 memory-reliability, reclamation, and safety items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/176-hardware-bring-up-test-and-production.md` with 20 hardware bring-up, validation, and production-diagnostics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/175-secure-firmware-identity-and-update.md` with 20 secure-firmware, device-identity, and update-trust items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/174-embedded-diagnostics-power-and-fault-containment.md` with 20 embedded diagnostics, power-state, concurrency, and fault-containment items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/173-embedded-real-time-and-firmware.md` with 20 embedded real-time and firmware items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/172-robotics-control-and-motion-planning.md` with 20 robotics-control and motion-planning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/171-satellite-networking-and-link-engineering.md` with 20 satellite-networking and link-engineering items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/170-mobile-network-architecture-and-radio-resources.md` with 20 mobile-network architecture and radio-resource items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/169-network-telemetry-and-flow-analysis.md` with 20 network-telemetry and flow-analysis items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/168-network-overlay-routing-and-validation.md` with 20 network-overlay, routing, and validation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/167-edge-delivery-and-traffic-steering.md` with 20 edge-delivery and traffic-steering items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/166-distributed-replication-and-partitioning.md` with 20 distributed-replication and partitioning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/165-query-execution-and-storage-internals.md` with 20 query-execution and storage-internals items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/164-data-quality-and-observability.md` with 20 data-quality and observability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/163-production-ai-governance-and-accountability.md` with 20 production AI-governance and accountability items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/162-ai-evaluation-safety-and-governance.md` with 20 AI-evaluation, safety, and governance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/161-retrieval-grounding-and-context-engineering.md` with 20 retrieval, grounding, and context-engineering items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/160-llm-serving-and-structured-generation.md` with 20 LLM-serving and structured-generation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/159-ml-training-and-evaluation-lifecycle.md` with 20 machine-learning training and evaluation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/158-backup-restore-and-disaster-recovery.md` with 20 backup, restore, and disaster-recovery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/157-configuration-experimentation-and-policy-rollout.md` with 20 configuration, experimentation, and policy-rollout items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/156-observability-and-incident-operations.md` with 20 observability and incident-operations items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/155-release-engineering-and-operational-readiness.md` with 20 release-engineering and operational-readiness items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/154-testing-verification-and-failure-analysis.md` with 20 testing, verification, and failure-analysis items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/153-privacy-security-and-forensic-operations.md` with 20 privacy, security, and forensic-operations items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/152-analytical-storage-and-stream-delivery.md` with 20 analytical-storage and stream-delivery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/151-resilience-consistency-and-recovery.md` with 20 resilience, consistency, and recovery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/150-network-protocol-lifecycle.md` with 20 network-protocol lifecycle items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/149-os-io-and-service-supervision.md` with 20 operating-system I/O and service-supervision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/148-process-memory-and-kernel-io.md` with 20 process-memory and kernel-I/O items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/147-jit-optimization-and-runtime-representation.md` with 20 JIT-optimization and runtime-representation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/146-runtime-concurrency-and-memory-semantics.md` with 20 runtime-concurrency and memory-semantics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/145-compiled-artifacts-and-runtime-linking.md` with 20 compiled-artifact and runtime-linking items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/144-compiler-front-ends-and-static-analysis.md` with 20 compiler-front-end and static-analysis items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/104-data-lakehouse-and-open-table-formats.md` with 20 data-lakehouse and open-table-format items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/103-gpu-kernel-performance.md` with 20 GPU-kernel-performance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/102-edge-computing-and-serverless-delivery.md` with 20 edge-computing and serverless-delivery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/101-offline-first-sync-and-reconciliation.md` with 20 offline-first synchronization and reconciliation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/100-software-supply-chain-provenance.md` with 20 software-supply-chain provenance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/99-resilient-api-and-service-contracts.md` with 20 resilient-API and service-contract items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/98-stream-processing-and-time-semantics.md` with 20 stream-processing and time-semantics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/97-query-optimization-and-execution.md` with 20 query-optimization and execution items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/96-distributed-consensus-and-replication.md` with 20 distributed-consensus and replication items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/95-web-security-and-browser-isolation.md` with 20 web-security and browser-isolation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/94-web-performance-and-rendering.md` with 20 web-performance and rendering items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/93-language-model-inference-and-serving.md` with 20 language-model inference and serving items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/92-runtime-memory-and-jit-internals.md` with 20 runtime-memory and JIT-internals items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/91-network-transport-and-congestion.md` with 20 network-transport and congestion items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/90-database-storage-engines-and-recovery.md` with 20 database-storage-engine and recovery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/89-bioinformatics-sequence-analysis.md` with 20 bioinformatics and sequence-analysis items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/88-observability-and-distributed-tracing.md` with 20 observability and distributed-tracing items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/87-robotics-perception-and-motion-planning.md` with 20 robotics-perception and motion-planning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/86-generative-modeling-and-diffusion.md` with 20 generative-modeling and diffusion items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/85-causal-representation-learning.md` with 16 causal-representation-learning items; the topic-sized lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/84-multimodal-alignment-and-grounding.md` with 20 multimodal-alignment and grounding items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/83-reinforcement-learning-and-offline-policy.md` with 20 reinforcement-learning and offline-policy items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/82-graph-representation-and-geometric-learning.md` with 20 graph-representation and geometric-learning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/81-federated-learning-systems.md` with 20 federated-learning systems items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/80-adversarial-learning-and-robustness.md` with 20 adversarial-learning and robustness items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/79-differential-privacy-accounting-and-amplification.md` with 20 differential-privacy accounting and amplification items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/78-zero-knowledge-proof-systems.md` with 20 zero-knowledge proof-system items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/77-verified-compilation-and-program-semantics.md` with 20 verified-compilation and program-semantics items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/76-confidential-computing-and-hardware-attestation.md` with 20 confidential-computing and hardware-attestation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/75-formal-verification-of-cryptographic-protocols.md` with 20 formal-verification and cryptographic-protocol items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c2/computing/74-post-quantum-cryptography-migration.md` with 20 post-quantum cryptography migration items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/61-behavioral-inflation-expectations-and-household-finance.md` with 20 behavioral-inflation and household-finance items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/60-behavioral-economic-inequality-and-household-decisions.md` with 20 behavioral-economic-inequality and household-decision items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/59-behavioral-leadership-governance-and-team-accountability.md` with 20 behavioral-leadership, governance, and team-accountability items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/58-behavioral-learning-assessment-and-educational-motivation.md` with 20 behavioral-learning, assessment, and educational-motivation items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/57-behavioral-migration-belonging-and-identity.md` with 20 behavioral-migration, belonging, and identity items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/56-behavioral-aging-caregiving-and-intergenerational-decisions.md` with 20 behavioral-aging, caregiving, and intergenerational-decision items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/55-behavioral-health-decisions-and-treatment-adherence.md` with 20 behavioral-health-decisions and treatment-adherence items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/54-behavioral-environmental-stewardship-and-sustainable-habits.md` with 20 behavioral-environmental-stewardship and sustainable-habit items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/53-behavioral-fiscal-compliance-and-public-value.md` with 20 behavioral-fiscal-compliance and public-value items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/52-behavioral-knowledge-sharing-and-epistemic-trust.md` with 20 behavioral-knowledge-sharing and epistemic-trust items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/51-behavioral-digital-attention-and-platform-design.md` with 20 behavioral-digital-attention and platform-design items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/50-behavioral-negotiation-and-conflict-repair.md` with 20 behavioral-negotiation and conflict-repair items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/49-behavioral-workplace-wellbeing-and-organizational-change.md` with 20 behavioral-workplace-wellbeing and organizational-change items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/48-behavioral-policy-evaluation-and-program-learning.md` with 20 behavioral-policy-evaluation and program-learning items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/47-behavioral-crisis-response-and-collective-resilience.md` with 20 behavioral-crisis-response and collective-resilience items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/46-behavioral-public-services-and-administrative-experience.md` with 20 behavioral-public-services and administrative-experience items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/45-behavioral-science-and-institutional-legitimacy.md` with 20 behavioral-science and institutional-legitimacy items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/44-behavioral-science-communication-and-public-trust.md` with 20 behavioral-science-communication and public-trust items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/behavioral-economics/43-behavioral-civic-participation-and-elections.md` with 20 behavioral-civic-participation and election items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/42-behavioral-work-technology-and-automation.md` with 20 behavioral-work-technology and automation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/41-behavioral-child-development-and-learning-choice.md` with 20 behavioral-child-development and learning-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/40-behavioral-climate-finance-and-policy-choice.md` with 20 behavioral-climate-finance and policy-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/39-behavioral-language-learning-and-multilingual-choice.md` with 20 behavioral-language-learning and multilingual-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/38-behavioral-patient-care-and-health-service-choice.md` with 20 behavioral-patient-care and health-service-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/37-behavioral-pricing-and-consumer-choice.md` with 20 behavioral-pricing and consumer-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/36-behavioral-leadership-and-team-governance.md` with 20 behavioral-leadership and team-governance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/35-behavioral-hiring-and-career-decisions.md` with 20 behavioral-hiring and career-decision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/34-behavioral-media-and-entertainment-choice.md` with 20 behavioral-media and entertainment-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/33-behavioral-investing-and-financial-planning.md` with 20 behavioral-investing and financial-planning items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/32-behavioral-logistics-and-supply-choices.md` with 20 behavioral-logistics and supply-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/31-behavioral-travel-and-tourism-choices.md` with 20 behavioral-travel and tourism-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/30-behavioral-housing-and-neighborhood-choice.md` with 20 behavioral-housing and neighborhood-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/29-behavioral-security-and-digital-risk.md` with 20 behavioral-security and digital-risk items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/28-behavioral-households-relationships-and-care.md` with 20 behavioral-household, relationship, and care items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/27-behavioral-sport-and-performance.md` with 20 behavioral-sport and performance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/26-behavioral-citizen-services-and-administrative-choice.md` with 20 behavioral-citizen-service and administrative-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/25-behavioral-communication-and-negotiation.md` with 20 behavioral-communication and negotiation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/24-behavioral-culture-identity-and-participation.md` with 20 behavioral-culture, identity, and participation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/23-behavioral-innovation-and-scientific-discovery.md` with 20 behavioral-innovation and scientific-discovery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/22-behavioral-migration-and-belonging.md` with 20 behavioral-migration and belonging items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/21-behavioral-time-work-and-recovery.md` with 20 behavioral-time, work, and recovery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/20-behavioral-energy-and-household-resource-choices.md` with 20 behavioral-energy and household-resource-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/19-behavioral-climate-adaptation-and-disaster-preparedness.md` with 20 behavioral-climate-adaptation and disaster-preparedness items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/18-behavioral-food-health-and-nutrition-choices.md` with 20 behavioral-food, health, and nutrition-choice items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/17-behavioral-digital-platforms-and-attention.md` with 20 behavioral-digital-platform and attention items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/16-behavioral-urban-mobility-and-public-space.md` with 20 behavioral-urban-mobility and public-space items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/15-behavioral-law-and-institutional-legitimacy.md` with 20 behavioral-law and institutional-legitimacy items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/14-behavioral-evidence-and-experiment-design.md` with 20 behavioral-evidence and experiment-design items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/13-organizational-behavior-and-management-decisions.md` with 20 organizational-behavior and management-decision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/12-retirement-household-finance-and-aging-decisions.md` with 20 retirement, household-finance, and aging-decision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/11-behavioral-education-and-learning-decisions.md` with 20 behavioral-education and learning-decision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/10-behavioral-political-economy-and-voting.md` with 20 behavioral-political-economy and voting items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/09-behavioral-environmental-decisions-and-climate-action.md` with 20 behavioral-environmental and climate-action items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/08-behavioral-health-insurance-and-care-decisions.md` with 20 behavioral-health insurance and care-decision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/07-behavioral-labor-and-workplace-decisions.md` with 20 behavioral-labor and workplace-decision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/behavioral-economics/06-behavioral-public-finance-and-compliance.md` with 20 behavioral-public-finance and compliance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/60-event-studies-and-staggered-adoption.md` with 20 event-study and staggered-adoption items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/59-synthetic-control-and-counterfactual-panels.md` with 20 synthetic-control and counterfactual-panel items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/58-network-formation-and-strategic-links.md` with 20 network-formation and strategic-link items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/57-bayesian-nonparametric-models-and-processes.md` with 20 Bayesian-nonparametric and process-modeling items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/56-identification-and-asymptotic-inference.md` with 20 identification and asymptotic-inference items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/55-causal-survival-and-competing-risks.md` with 20 causal-survival and competing-risk items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/54-continuous-treatment-and-dose-response.md` with 20 continuous-treatment and dose-response items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/53-interference-spillovers-and-network-exposure.md` with 20 interference, spillover, and network-exposure items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/52-proxy-variables-and-measurement-error.md` with 20 proxy-variable and measurement-error items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/51-mediation-and-principal-stratification.md` with 20 mediation and principal-stratification items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/50-causal-machine-learning-and-heterogeneous-effects.md` with 20 causal-machine-learning and heterogeneous-effect items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/49-transportability-and-generalization-of-effects.md` with 20 transportability and effect-generalization items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/48-panel-attrition-and-missingness-processes.md` with 20 panel-attrition and missingness-process items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/47-hierarchical-panel-models-and-group-variation.md` with 20 hierarchical-panel and group-variation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/46-bayesian-state-space-forecasting-and-regime-uncertainty.md` with 20 Bayesian state-space, forecasting, and regime-uncertainty items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/45-bayesian-causal-decisions-and-treatment-uncertainty.md` with 20 Bayesian causal-decision and treatment-uncertainty items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/44-bayesian-computation-and-posterior-diagnostics.md` with 20 Bayesian-computation and posterior-diagnostic items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/econometrics/43-dynamic-discrete-choice-and-structural-decisions.md` with 20 dynamic-discrete-choice and structural-decision items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/20-media-law-and-rights-management.md` with 20 media-law and rights-management items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/19-audience-data-privacy-and-consent.md` with 20 audience-data privacy and consent items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/18-media-product-experiments-and-reader-behavior.md` with 20 media-product experimentation and reader-behavior items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/17-reader-subscriptions-and-newsletter-lifecycle.md` with 20 reader-subscription and newsletter-lifecycle items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/16-audience-participation-and-community-listening.md` with 20 audience-participation and community-listening items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/15-media-accessibility-and-inclusive-delivery.md` with 20 media-accessibility and inclusive-delivery items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/14-media-archives-and-digital-preservation.md` with 20 media-archive and digital-preservation items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/13-public-service-media-and-governance.md` with 20 public-service-media and governance items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/12-collaborative-investigations-and-source-verification.md` with 20 collaborative-investigation and source-verification items; the lesson uses one integrated review passage with Vietnamese translation.

- Latest continuation added `c1/media/11-media-organizations-and-community-reporting.md` with 20 media-organization and community-reporting items; the lesson uses one integrated review passage with Vietnamese translation.

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
- Latest continuation added `c2/computing/66-quantum-networking-and-entanglement-distribution.md` with 20 quantum-networking and entanglement-distribution items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/67-quantum-error-correction-and-fault-tolerance.md` with 20 quantum-error-correction and fault-tolerance items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/68-quantum-algorithms-and-variational-optimization.md` with 20 quantum-algorithm and variational-optimization items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/69-quantum-compilation-and-hardware-control.md` with 20 quantum-compilation and hardware-control items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/70-quantum-hardware-benchmarking-and-calibration.md` with 20 quantum-hardware-benchmarking and calibration items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/65-distributed-cache-consistency-and-invalidation.md` with 20 distributed-cache-consistency and invalidation items.
- Latest continuation added `c2/biomedicine/57-neuroimaging-connectivity-and-network-mapping.md` with 20 neuroimaging-connectivity and network-mapping items.
- Latest continuation added `c2/biomedicine/58-neurodegenerative-biomarkers-and-clinical-endpoints.md` with 20 neurodegenerative-biomarker and clinical-endpoint items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/71-quantum-sensing-and-metrology.md` with 20 quantum-sensing and metrology items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/72-quantum-machine-learning-and-data-encoding.md` with 20 quantum-machine-learning and data-encoding items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/semiconductors/32-advanced-packaging-and-heterogeneous-integration.md` with 20 advanced-packaging and heterogeneous-integration items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/biomedicine/59-cancer-biomarkers-and-immunotherapy-response.md` with 20 cancer-biomarker and immunotherapy-response items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/biomedicine/60-estimand-design-and-real-world-evidence.md` with 20 estimand-design and real-world-evidence items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c2/computing/73-quantum-cryptography-and-key-distribution.md` with 20 quantum-cryptography and key-distribution items; the lesson uses one integrated review passage with Vietnamese translation.
- Latest continuation added `c1/psychology/03-memory-retrieval-and-forgetting.md` with 20 memory-retrieval and forgetting items.
- Latest continuation added `c1/psychology/04-social-cognition-and-interpersonal-judgment.md` with 20 social-cognition and interpersonal-judgment items.
- Latest continuation added `c1/psychology/05-social-influence-and-group-decisions.md` with 20 social-influence and group-decision items.
- Latest continuation added `c1/psychology/06-emotion-and-moral-judgment.md` with 20 emotion and moral-judgment items.
- Latest continuation added `c1/psychology/07-personality-measurement-and-individual-differences.md` with 20 personality-measurement and individual-difference items.
- Latest continuation added `c1/psychometrics/01-scale-development-and-test-quality.md` with 20 scale-development and test-quality items.
- Latest continuation added `c1/psychometrics/02-clinical-test-interpretation-and-decision-thresholds.md` with 20 clinical-test-interpretation and decision-threshold items.
- Latest continuation added `c1/psychometrics/03-fairness-equating-and-assessment-access.md` with 20 fairness, equating, and assessment-access items.
- Latest continuation added `c1/psychometrics/04-longitudinal-change-and-missing-data.md` with 20 longitudinal-change and missing-data items.
- Latest continuation added `c1/psychometrics/05-adaptive-testing-and-diagnostic-classification.md` with 20 adaptive-testing and diagnostic-classification items.
- Latest continuation added `c1/psychometrics/06-bayesian-assessment-and-decision-uncertainty.md` with 20 Bayesian-assessment and decision-uncertainty items.
- Latest continuation added `c1/psychometrics/07-survey-sampling-and-response-bias.md` with 20 survey-sampling and response-bias items.
- Latest continuation added `c1/psychometrics/08-score-scaling-and-performance-standards.md` with 20 score-scaling and performance-standard items.
- Latest continuation added `c1/psychometrics/09-multivariate-profiles-and-latent-groups.md` with 20 multivariate-profile and latent-group items.
- Latest continuation added `c1/psychometrics/10-questionnaire-design-and-cognitive-interviewing.md` with 20 questionnaire-design and cognitive-interviewing items.
- Latest continuation added `c1/psychometrics/11-rater-mediated-assessment-and-scoring-consistency.md` with 20 rater-mediated-assessment and scoring-consistency items.
- Latest continuation added `c1/psychometrics/12-accessibility-and-assessment-accommodations.md` with 20 accessibility and assessment-accommodation items.
- Latest continuation added `c1/psychometrics/13-ethical-score-use-and-assessment-consequences.md` with 20 ethical-score-use and assessment-consequence items.
- Latest continuation added `c1/psychometrics/14-visual-score-communication-and-data-displays.md` with 20 visual-score-communication and data-display items.
- Latest continuation added `c1/psychometrics/15-cross-cultural-measurement-adaptation.md` with 20 cross-cultural-measurement and adaptation items.
- Latest continuation added `c1/psychometrics/16-automated-scoring-and-human-review.md` with 20 automated-scoring and human-review items.
- Latest continuation added `c1/psychometrics/17-reliability-generalization-and-reproducibility.md` with 20 reliability-generalization and reproducibility items.
- Latest continuation added `c1/psychometrics/18-simulation-based-validation-and-diagnostic-checks.md` with 20 simulation-based-validation and diagnostic-check items.
- Latest continuation added `c1/psychometrics/19-score-linking-and-equating-methods.md` with 20 score-linking and equating-method items.
- Latest continuation added `c1/psychometrics/20-norm-development-and-score-interpretation.md` with 20 norm-development and score-interpretation items.
- Latest continuation added `c1/psychometrics/21-diagnostic-invariance-and-model-fit.md` with 20 diagnostic-invariance and model-fit items.
- Latest continuation added `c1/psychometrics/22-evidence-centered-design-and-validity-arguments.md` with 20 evidence-centered-design and validity-argument items.
- Latest continuation added `c1/psychometrics/23-standard-setting-and-generalizability-decisions.md` with 20 standard-setting and generalizability-decision items.
- Latest continuation added `c1/psychometrics/24-score-precision-and-individual-interpretation.md` with 20 score-precision and individual-interpretation items.
- Latest continuation added `c1/psychometrics/25-score-use-and-responsible-decisions.md` with 20 score-use and responsible-decision items.
- Latest continuation added `c1/psychometrics/26-multilevel-measurement-and-clustered-data.md` with 20 multilevel-measurement and clustered-data items.
- Latest continuation added `c1/psychometrics/27-causal-inference-and-score-effects.md` with 20 causal-inference and score-effect items.
- Latest continuation added `c1/psychometrics/28-response-process-and-content-validity.md` with 20 response-process and content-validity items.
- Latest continuation added `c1/psychometrics/29-missing-data-and-longitudinal-robustness.md` with 20 missing-data and longitudinal-robustness items.
- Latest continuation added `c1/psychometrics/30-robust-resampling-and-sensitivity-checks.md` with 20 robust-resampling and sensitivity-check items.
- Latest continuation added `c1/psychometrics/31-cross-language-survey-adaptation.md` with 20 cross-language survey-adaptation items.
- Latest continuation added `c1/psychometrics/32-bayesian-hierarchical-assessment.md` with 20 Bayesian-hierarchical-assessment items.
- Latest continuation added `c1/psychometrics/33-item-response-curves-and-information.md` with 20 item-response-curve and information items.
- Latest continuation added `c1/econometrics/02-evaluation-design-and-estimands.md` with 20 evaluation-design and estimand-population items, plus `c1/econometrics/03-specification-diagnostics-and-panel-estimators.md` with 20 specification-diagnostic and panel-estimator items.
- Latest continuation added `c1/econometrics/04-time-series-dynamics-and-forecasting.md` with 20 time-series-dynamics and forecasting items.
- Latest continuation added `c1/econometrics/05-survey-sampling-and-weighted-inference.md` with 20 survey-sampling and weighted-inference items.
- Latest continuation added `c1/econometrics/06-volatility-and-risk-forecasting.md` with 20 volatility and risk-forecasting items.
- Latest continuation added `c1/econometrics/07-spatial-econometrics-and-geographic-dependence.md` with 20 spatial-econometrics and geographic-dependence items.
- Latest continuation added `c1/econometrics/08-matching-and-weighted-causal-estimation.md` with 20 matching and weighted-causal-estimation items.
- Latest continuation added `c1/econometrics/09-heterogeneous-and-mediated-treatment-effects.md` with 20 heterogeneous and mediated-treatment-effect items.
- Latest continuation added `c1/econometrics/10-sensitivity-and-robustness-analysis.md` with 20 sensitivity and robustness-analysis items.
- Latest continuation added `c1/econometrics/11-survival-and-time-to-event-analysis.md` with 20 survival and time-to-event analysis items.
- Latest continuation added `c1/econometrics/12-monte-carlo-and-estimator-diagnostics.md` with 20 Monte Carlo and estimator-diagnostics items.
- Latest continuation added `c1/econometrics/13-discrete-choice-and-limited-dependent-variables.md` with 20 discrete-choice and limited-dependent-variable items.
- Latest continuation added `c1/econometrics/14-nonparametric-and-semiparametric-estimation.md` with 20 nonparametric and semiparametric-estimation items.
- Latest continuation added `c1/econometrics/15-threshold-and-regime-switching-models.md` with 20 threshold and regime-switching items.
- Latest continuation added `c1/econometrics/16-errors-in-variables-and-misclassification.md` with 20 errors-in-variables and misclassification items.
- Latest continuation added `c1/econometrics/17-count-models-and-event-rates.md` with 20 count-model and event-rate items.
- Latest continuation added `c1/econometrics/18-instrumental-variables-and-weak-identification.md` with 20 instrumental-variable and weak-identification items.
- Latest continuation added `c1/econometrics/19-gmm-and-moment-based-estimation.md` with 20 GMM and moment-based-estimation items.
- Latest continuation added `c1/econometrics/20-policy-learning-and-causal-decision-rules.md` with 20 policy-learning and causal-decision-rule items.
- Latest continuation added `c1/econometrics/21-quantile-and-distributional-effects.md` with 20 quantile and distributional-effect items.
- Latest continuation added `c1/econometrics/22-network-econometrics-and-peer-effects.md` with 20 network-econometrics and peer-effect items.
- Latest continuation added `c1/econometrics/23-dynamic-panels-and-system-gmm.md` with 20 dynamic-panel and system-GMM items.
- Latest continuation added `c1/econometrics/24-forecast-evaluation-and-predictive-distributions.md` with 20 forecast-evaluation and predictive-distribution items.
- Latest continuation added `c1/econometrics/25-risk-backtesting-and-systemic-risk.md` with 20 risk-backtesting and systemic-risk items.
- Latest continuation added `c1/econometrics/26-asset-pricing-and-portfolio-econometrics.md` with 20 asset-pricing and portfolio-econometrics items.
- Latest continuation added `c1/econometrics/27-state-space-and-mixed-frequency-forecasting.md` with 20 state-space and mixed-frequency-forecasting items.
- Latest continuation added `c1/econometrics/28-environmental-and-energy-policy-econometrics.md` with 20 environmental and energy-policy-econometrics items.
- Latest continuation added `c1/econometrics/29-labor-market-econometrics-and-wage-dynamics.md` with 20 labor-market and wage-dynamics items.
- Latest continuation added `c1/econometrics/30-firm-productivity-and-industrial-dynamics.md` with 20 firm-productivity and industrial-dynamics items.
- Latest continuation added `c1/econometrics/31-taxation-and-fiscal-behavior.md` with 20 taxation and fiscal-behavior items.
- Latest continuation added `c1/econometrics/32-sovereign-debt-and-fiscal-sustainability.md` with 20 sovereign-debt and fiscal-sustainability items.
- Latest continuation added `c1/econometrics/33-monetary-policy-transmission-and-identification.md` with 20 monetary-policy transmission and identification items.
- Latest continuation added `c1/econometrics/34-international-macro-and-exchange-rates.md` with 20 international-macro and exchange-rate items.
- Latest continuation added `c1/econometrics/35-trade-policy-and-trade-elasticities.md` with 20 trade-policy and trade-elasticity items.
- Latest continuation added `c1/econometrics/36-development-and-household-policy-evaluation.md` with 20 development and household-policy-evaluation items.
- Latest continuation added `c1/econometrics/37-education-economics-and-skill-formation.md` with 20 education-economics and skill-formation items.
- Latest continuation added `c1/econometrics/38-urban-and-regional-economics.md` with 20 urban and regional-economics items.
- Latest continuation added `c1/econometrics/39-political-economy-and-institutional-performance.md` with 20 political-economy and institutional-performance items.
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
- Latest continuation added `c2/computing/47-change-data-capture-and-event-consistency.md` with 20 change-data-capture and event-consistency items.
- Latest continuation added `c2/computing/48-durable-workflows-and-task-orchestration.md` with 20 durable-workflow and task-orchestration items.
- Latest continuation added `c2/biomedicine/40-hepatotoxicity-and-drug-induced-liver-injury.md` with 20 hepatotoxicity and drug-induced-liver-injury items.
- Latest continuation added `c2/biomedicine/41-pulmonary-toxicity-and-drug-induced-interstitial-lung-disease.md` with 20 pulmonary-toxicity and drug-induced-interstitial-lung-disease items.
- Latest continuation added `c2/computing/49-policy-as-code-and-authorization-semantics.md` with 20 policy-as-code and authorization-semantics items.
- Latest continuation added `c2/biomedicine/42-cutaneous-drug-toxicity-and-severe-skin-reactions.md` with 20 cutaneous-drug-toxicity and severe-skin-reaction items.
- Latest continuation added `c2/semiconductors/24-gate-oxide-reliability-and-bias-temperature-instability.md` with 20 gate-oxide-reliability and bias-temperature-instability items.
- Latest continuation added `c2/computing/50-disaggregated-memory-fabrics-and-composable-infrastructure.md` with 20 disaggregated-memory-fabric and composable-infrastructure items.
- Latest continuation added `c2/biomedicine/43-neurotoxicity-and-neurobehavioral-safety.md` with 20 neurotoxicity and neurobehavioral-safety items.
- Latest continuation added `c2/semiconductors/25-backend-interconnect-and-via-reliability.md` with 20 backend-interconnect and via-reliability items.
- Latest continuation added `c2/computing/51-distributed-time-synchronization-and-clock-integrity.md` with 20 distributed-time-synchronization and clock-integrity items.
- Latest continuation added `c2/biomedicine/44-ocular-toxicity-and-retinal-safety.md` with 20 ocular-toxicity and retinal-safety items.
- Latest continuation added `c2/semiconductors/26-3d-integration-and-tsv-reliability.md` with 20 3D-integration and TSV-reliability items.
- Latest continuation added `c2/biomedicine/45-immunogenicity-and-anti-drug-antibody-assessment.md` with 20 immunogenicity and anti-drug-antibody-assessment items.
- Latest continuation added `c2/computing/52-capability-security-and-authority-containment.md` with 20 capability-security and authority-containment items.
- Latest continuation added `c2/computing/53-compiler-fuzzing-and-differential-testing.md` with 20 compiler-fuzzing and differential-testing items.
- Latest continuation added `c2/semiconductors/27-stacked-memory-controller-reliability.md` with 20 stacked-memory-controller and reliability items.
- Latest continuation added `c2/biomedicine/46-bioanalytical-assay-validation-and-matrix-effects.md` with 20 bioanalytical-assay-validation and matrix-effect items.
- Latest continuation added `c2/computing/54-storage-integrity-and-self-healing.md` with 20 storage-integrity and self-healing items.
- Latest continuation added `c2/biomedicine/47-clinical-event-adjudication-and-endpoint-governance.md` with 20 clinical-event-adjudication and endpoint-governance items.
- Latest continuation added `c2/semiconductors/28-photonic-interposers-and-co-packaged-optics.md` with 20 photonic-interposer and co-packaged-optics items.
- Latest continuation added `c2/computing/55-time-series-storage-and-query-engines.md` with 20 time-series-storage and query-engine items.
- Latest continuation added `c2/biomedicine/48-exposure-response-and-pharmacometric-dose-optimization.md` with 20 exposure-response and pharmacometric-dose-optimization items.
- Latest continuation added `c2/computing/56-stream-processing-state-and-delivery-semantics.md` with 20 stream-processing-state and delivery-semantics items.
- Latest continuation added `c2/semiconductors/29-neuromorphic-in-memory-computing-reliability.md` with 20 neuromorphic in-memory-computing and reliability items.
- Latest continuation added `c2/biomedicine/49-antimicrobial-susceptibility-and-resistance-surveillance.md` with 20 antimicrobial-susceptibility and resistance-surveillance items.
- Latest continuation added `c2/biomedicine/50-digital-pathology-validation-and-image-analysis-quality.md` with 20 digital-pathology-validation and image-analysis-quality items.
- Latest continuation added `c2/computing/57-schema-compatibility-and-contract-evolution.md` with 20 schema-compatibility and contract-evolution items.
- Latest continuation added `c2/biomedicine/51-implant-biocompatibility-and-device-safety.md` with 20 implant-biocompatibility and device-safety items.
- Latest continuation added `c2/computing/58-rate-limiting-and-quota-semantics.md` with 20 rate-limiting and quota-semantics items.
- Latest continuation added `c2/biomedicine/52-metabolic-support-and-nutrition-therapy.md` with 20 metabolic-support and nutrition-therapy items.
- Latest continuation added `c2/semiconductors/30-emerging-memory-switching-and-qualification.md` with 20 emerging-memory-switching and qualification items.
- Latest continuation added `c2/computing/59-trace-causality-and-observability-economics.md` with 20 trace-causality and observability-economics items.
- Latest continuation added `c2/biomedicine/53-gene-therapy-biodistribution-and-shedding.md` with 20 gene-therapy-biodistribution and shedding items.
- Latest continuation added `c2/computing/60-security-incident-response-and-forensic-reconstruction.md` with 20 security-incident-response and forensic-reconstruction items.
- Latest continuation added `c2/biomedicine/54-rare-disease-natural-history-and-endpoints.md` with 20 rare-disease-natural-history and endpoint-design items.
- Latest continuation added `c2/computing/61-differential-privacy-accounting-and-utility.md` with 20 differential-privacy-accounting and utility items.
- Latest continuation added `c2/computing/62-keyless-signing-and-provenance-attestations.md` with 20 keyless-signing and provenance-attestation items.
- Latest continuation added `c2/semiconductors/31-power-device-ruggedness-and-switching-failures.md` with 20 power-device-ruggedness and switching-failure items.
- Latest continuation added `c2/biomedicine/55-rehabilitation-outcomes-and-functional-recovery.md` with 20 rehabilitation-outcome and functional-recovery items.
- Latest continuation added `c2/computing/63-chaos-engineering-and-resilience-experiments.md` with 20 chaos-engineering and resilience-experiment items.
- Latest continuation added `c2/biomedicine/56-remote-monitoring-and-connected-care.md` with 20 remote-monitoring and connected-care items.
- Latest continuation added `c2/computing/64-cost-based-query-optimization-and-plan-stability.md` with 20 cost-based-query-optimization and plan-stability items.
- The merged corpus currently reports A1 400, A2 1501, B1 1226, B2 318, C1 1410, C2 5696, C2+ 0; total 10551 items. Re-run `python3 scripts/vocab-progress.py` if any counter becomes stale.
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
- Latest continuation added `c1/econometrics/40-industrial-organization-and-market-structure.md` with 20 industrial-organization and market-structure items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/econometrics/41-competition-policy-and-merger-remedies.md` with 20 competition-policy and merger-remedy items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/econometrics/42-auction-econometrics-and-demand-estimation.md` with 20 auction-econometrics and demand-estimation items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/behavioral-economics/02-biases-social-preferences-and-self-control.md` with 20 behavioral-economics items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/02-information-equilibria-and-mechanism-design.md` with 20 information, equilibrium, and mechanism-design items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/03-bargaining-matching-and-coalitions.md` with 20 bargaining, matching, and coalition items. Two overlapping generic headings were refined to `coalition allocation` and `coalition-building process`; the revised lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/04-learning-dynamics-and-equilibrium-selection.md` with 20 learning-dynamics and equilibrium-selection items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/05-social-choice-and-voting-mechanisms.md` with 20 social-choice and voting-mechanism items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/06-implementation-and-incentive-mechanisms.md` with 20 implementation-theory and incentive-mechanism items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/07-coordination-congestion-and-network-games.md` with 20 coordination, congestion, and network-game items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/08-information-aggregation-and-prediction-markets.md` with 20 information-aggregation and prediction-market items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/09-repeated-games-and-relational-contracts.md` with 20 repeated-game and relational-contract items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/10-experimental-game-theory-and-strategic-behavior.md` with 20 experimental-game-theory and strategic-behavior items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/game-theory/11-robust-mechanisms-and-uncertain-information.md` with 20 robust-mechanism and uncertain-information items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check` after restoring the full headwords in Review.
- Latest continuation added `c1/game-theory/12-fair-division-and-market-allocation.md` with 20 fair-division and market-allocation items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/02-media-economics-and-platform-attention.md` with 20 media-economics and platform-attention items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/03-digital-newsroom-workflows-and-reader-revenue.md` with 20 digital-newsroom and reader-revenue items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/behavioral-economics/03-frictions-social-norms-and-policy-interventions.md` with 20 friction, social-norm, and policy-intervention items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/behavioral-economics/04-behavioral-finance-and-market-anomalies.md` with 20 behavioral-finance and market-anomaly items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/behavioral-economics/05-behavioral-macroeconomics-and-household-expectations.md` with 20 behavioral-macroeconomics and household-expectation items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/04-crisis-communication-and-public-information.md` with 20 crisis-communication and public-information items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/05-media-ethics-disclosure-and-accountability.md` with 20 media-ethics, disclosure, and accountability items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/06-digital-publishing-infrastructure-and-content-portability.md` with 20 digital-publishing infrastructure and content-portability items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/07-audience-research-and-measurement.md` with 20 audience-research and measurement items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/08-audio-visual-and-interactive-journalism.md` with 20 audio, visual, and interactive-journalism items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/09-journalist-security-and-source-privacy.md` with 20 journalist-security and source-privacy items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
- Latest continuation added `c1/media/10-media-literacy-and-public-knowledge.md` with 20 media-literacy and public-knowledge items. The lesson passed exact-heading deduplication, review-context coverage, format checks, and `git diff --check`.
