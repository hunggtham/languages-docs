# Korean Vocabulary Expansion State

## Corpus baseline

- Existing flat files under `korean/vocab/topics/` are legacy lessons and remain in place.
- New lessons use topic subfolders with local file numbering, as specified in `korean/prompt/vocabulary_goal/GOAL.md`.
- Source PDFs and dictionaries are reference material only; lesson explanations and passages are original.
- Lexical audit: 214 nested target headwords retain `advanced_native` or `contemporary_native_hot` metadata; 71 common/support words were removed from target headings but remain available in explanations and passages. The 67 legacy flat headwords are preserved as `legacy_review`.

## Completed checkpoint

- Topic: `relationships-and-emotional-recovery`
- Files: `01-isolation-and-recovery.md`, `02-bonds-and-relationship-tension.md`
- Coverage: 27 retained advanced-native/contemporary-hot headwords; 3 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `public-affairs-and-accountability`
- File: `01-policy-and-responsibility.md`
- Coverage: 15 retained advanced-native/contemporary-hot headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `appearance-and-first-impressions`
- File: `01-first-impressions-and-character.md`
- Coverage: 15 retained advanced-native/contemporary-hot headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `body-symptoms-and-movement`
- File: `01-symptoms-and-movement.md`
- Coverage: 13 retained advanced-native/contemporary-hot headwords; 2 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `work-planning-and-business-succession`
- File: `01-planning-and-succession.md`
- Coverage: 15 retained advanced-native/contemporary-hot headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `folk-belief-and-public-rituals`
- File: `01-rituals-and-belief-language.md`
- Coverage: 15 retained advanced-native cultural headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; cultural claims are framed as beliefs or practices, not verified supernatural facts.

- Topic: `security-resources-and-conflict`
- File: `01-war-memory-and-resource-competition.md`
- Coverage: 15 retained advanced-native/news headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `speech-and-public-discourse`
- File: `01-conversation-and-discourse.md`
- Coverage: 15 retained advanced-native/contemporary-hot headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `social-change-and-belonging`
- File: `01-social-categories-and-inclusion.md`
- Coverage: 11 retained advanced-native headwords; 4 common/outdated support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; outdated or stigmatizing labels are explicitly contextualized and paired with respectful alternatives.

- Topic: `formal-notices-and-administration`
- File: `01-notices-and-administrative-process.md`
- Coverage: 15 retained advanced-native headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `contracts-and-outsourcing`
- File: `01-contracts-and-outsourcing.md`
- Coverage: 12 retained advanced-native headwords; 3 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; the initial `촉탁` candidate was replaced with `위임` after duplicate coverage was found in a legacy lesson.

- Topic: `practical-workplace-communication`
- File: `01-workplace-communication-and-collaboration.md`
- Coverage: 8 retained advanced-native/contemporary-hot headwords; 7 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `media-and-cultural-heritage`
- File: `01-media-and-cultural-heritage.md`
- Coverage: 15 retained advanced-native cultural/media headwords.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked. The shared branch also carried unrelated English files in commit `8cd58d5`; Korean scope was re-audited independently.

- Topic: `everyday-health-and-safety`
- File: `01-prevention-and-emergency-response.md`
- Coverage: 7 retained advanced-native/domain headwords; 8 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `food-and-everyday-life`
- File: `01-food-and-household-routines.md`
- Coverage: 5 retained advanced-native headwords; 10 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `travel-and-daily-mobility`
- File: `01-travel-planning-and-transit.md`
- Coverage: 1 retained advanced-native headword; 14 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.
- Audit note: shared-branch commit `ec748f6` also carried unrelated English files; the Korean files were independently re-audited.

- Topic: `housing-and-neighborhood-life`
- File: `01-renting-and-neighborhood-routines.md`
- Coverage: 5 retained advanced-native/contemporary-hot headwords; 10 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `education-and-lifelong-learning`
- File: `01-learning-process-and-direction.md`
- Coverage: 5 retained advanced-native headwords; 10 common support words moved out of target headings.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `technology-and-digital-life`
- File: `01-online-trust-and-digital-risks.md`
- Coverage: 15 new advanced-native/contemporary-hot headwords in one `target_set` passage.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `media-literacy-and-public-trust`
- File: `01-reading-information-and-public-discourse.md`
- Coverage: 15 new advanced-native/contemporary-hot headwords in one `target_set` passage.
- Validation: lexical-basis metadata, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `ethics-and-social-responsibility`
- File: `01-accountability-and-public-interest.md`
- Coverage: 15 new harder advanced-native/contemporary-hot headwords across `news_formal` and `native_spoken` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `slang-and-pragmatic-spoken-korean`
- File: `01-pragmatic-slang-and-online-reactions.md`
- Coverage: 15 contemporary-native-hot headwords across `native_spoken` and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-workplace-and-institutional-discourse`
- File: `01-strategy-and-institutional-progress.md`
- Coverage: 15 harder advanced-native headwords across `news_formal` and discourse-sensitive workplace lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-interpersonal-nuance`
- File: `01-subtle-attitudes-and-replies.md`
- Coverage: 15 harder advanced-native/contemporary-spoken headwords in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-emotion-and-conflict`
- File: `01-escalation-and-conflict-discourse.md`
- Coverage: 15 harder advanced-native headwords across `news_formal` and `native_spoken` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-science-and-technology-reporting`
- File: `01-commercialization-and-ai-accountability.md`
- Coverage: 12 harder advanced-native science/technology headwords plus 3 contemporary-native-hot AI expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-economic-and-labor-reporting`
- File: `01-recession-and-labor-market-restructuring.md`
- Coverage: 13 harder advanced-native economic/labor headwords plus 2 contemporary-native-hot workplace expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-public-health-and-science-policy`
- File: `01-epidemiology-and-health-policy.md`
- Coverage: 14 harder advanced-native public-health/science-policy headwords plus 1 contemporary-native-hot healthcare expression across `news_formal` and `native_spoken` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-cultural-identity-and-migration`
- File: `01-belonging-and-cultural-boundaries.md`
- Coverage: 14 harder advanced-native cultural/migration headwords plus 1 contemporary-native-hot expression across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `high-register-law-and-diplomacy`
- File: `01-sovereignty-and-diplomatic-negotiation.md`
- Coverage: 15 harder advanced-native international-law, security, and diplomacy headwords across the `news_formal` lane in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-climate-and-environmental-governance`
- File: `01-carbon-transition-and-environmental-justice.md`
- Coverage: 13 harder advanced-native climate/environment headwords plus 2 contemporary-native-hot climate-business expressions across `news_formal` and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `high-register-media-and-cultural-criticism`
- File: `01-memory-politics-and-cultural-production.md`
- Coverage: 12 harder advanced-native cultural/media headwords plus 3 contemporary-native-hot culture expressions across `news_formal` and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-public-administration-and-regulation`
- File: `01-rulemaking-and-administrative-control.md`
- Coverage: 15 harder advanced-native administrative, regulatory, and constitutional-law headwords across the `news_formal` lane in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-urban-and-housing-policy`
- File: `01-urban-restructuring-and-housing-rights.md`
- Coverage: 14 harder advanced-native urban/housing policy headwords plus 1 contemporary-native-hot housing expression across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-labor-rights-and-social-protection`
- File: `01-precarious-work-and-social-safety.md`
- Coverage: 14 harder advanced-native labor/welfare headwords plus 1 contemporary-native-hot workplace expression across `news_formal` and `native_spoken` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-education-and-demographic-policy`
- File: `01-education-gaps-and-demographic-transition.md`
- Coverage: 12 harder advanced-native education/demographic headwords plus 3 contemporary-native-hot policy expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-finance-and-consumer-protection`
- File: `01-debt-quality-and-financial-protection.md`
- Coverage: 14 harder advanced-native finance/consumer-protection headwords plus 1 contemporary-native-hot banking expression across `news_formal` and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-health-insurance-and-aging-policy`
- File: `01-health-costs-and-aging-security.md`
- Coverage: 14 harder advanced-native health-insurance/aging-policy headwords plus 1 contemporary-native-hot caregiving expression across `news_formal` and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-medical-access-and-care-delivery`
- File: `01-essential-care-and-regional-delivery.md`
- Coverage: 12 harder advanced-native medical-access/care-delivery headwords plus 3 contemporary-native-hot healthcare-crisis expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-legal-procedure-and-judicial-accountability`
- File: `01-constitutional-review-and-criminal-procedure.md`
- Coverage: 13 harder advanced-native constitutional/criminal-procedure headwords plus 2 contemporary-native-hot judicial-accountability expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-energy-transition-and-power-security`
- File: `01-grid-security-and-energy-transition.md`
- Coverage: 13 harder advanced-native energy-transition/power-grid headwords plus 2 contemporary-native-hot energy-debate expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-digital-rights-and-platform-governance`
- File: `01-data-rights-and-platform-control.md`
- Coverage: 13 harder advanced-native digital-rights/platform-governance headwords plus 2 contemporary-native-hot platform expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-food-security-and-agricultural-policy`
- File: `01-food-supply-and-rural-transition.md`
- Coverage: 13 harder advanced-native food-security/agricultural-policy headwords plus 2 contemporary-native-hot food-price expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `high-register-media-and-cultural-criticism`
- File: `02-representation-and-cultural-power.md`
- Coverage: 13 harder advanced-native media/cultural-criticism headwords plus 2 contemporary-native-hot fandom expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-mobility-and-transport-policy`
- File: `01-urban-mobility-and-transport-transition.md`
- Coverage: 13 harder advanced-native mobility/transport-policy headwords plus 2 contemporary-native-hot urban-convenience expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `high-register-law-and-diplomacy`
- File: `02-humanitarian-law-and-conflict-diplomacy.md`
- Coverage: 13 harder advanced-native international humanitarian-law/diplomacy headwords plus 2 contemporary-native-hot conflict expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-education-and-demographic-policy`
- File: `02-demographic-structure-and-care-economy.md`
- Coverage: 13 harder advanced-native demographic/care-policy headwords plus 2 contemporary-native-hot household/care expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-public-administration-and-regulation`
- File: `02-public-procurement-and-integrity.md`
- Coverage: 13 harder advanced-native procurement/integrity headwords plus 2 contemporary-native-hot revolving-door expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-finance-and-consumer-protection`
- File: `02-household-debt-and-fintech-inclusion.md`
- Coverage: 13 harder advanced-native debt/fintech-inclusion headwords plus 2 contemporary-native-hot leveraged-investment expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-climate-and-environmental-governance`
- File: `02-climate-risk-and-transition-finance.md`
- Coverage: 13 harder advanced-native climate-risk/transition-finance headwords plus 2 contemporary-native-hot climate-accountability expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-science-and-technology-reporting`
- File: `02-ai-evaluation-and-compute-governance.md`
- Coverage: 13 harder advanced-native AI/data/compute-governance headwords plus 2 contemporary-native-hot AI practice expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-labor-rights-and-social-protection`
- File: `02-labor-transition-and-wage-reform.md`
- Coverage: 13 harder advanced-native labor-transition/wage-policy headwords plus 2 contemporary-native-hot workplace expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-urban-and-housing-policy`
- File: `02-housing-finance-and-tenant-protection.md`
- Coverage: 13 harder advanced-native housing-finance/tenant-protection headwords plus 2 contemporary-native-hot real-estate expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-public-health-and-science-policy`
- File: `02-primary-care-and-health-surveillance.md`
- Coverage: 13 harder advanced-native primary-care/surveillance headwords plus 2 contemporary-native-hot public-health expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-cultural-identity-and-migration`
- File: `02-migration-policy-and-social-integration.md`
- Coverage: 13 harder advanced-native migration/integration-policy headwords plus 2 contemporary-native-hot immigration-discourse expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-emotion-and-conflict`
- File: `02-reconciliation-and-public-apology.md`
- Coverage: 13 harder advanced-native conflict-resolution/accountability headwords plus 2 contemporary-native-hot apology/accountability expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-workplace-and-institutional-discourse`
- File: `02-decision-structure-and-organizational-resilience.md`
- Coverage: 13 harder advanced-native organizational-management/crisis-resilience headwords plus 2 contemporary-native-hot workplace expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `social-change-and-belonging`
- File: `02-mobility-stratification-and-social-capital.md`
- Coverage: 13 harder advanced-native inequality/social-capital headwords plus 2 contemporary-native-hot generation/class expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-mobility-and-transport-policy`
- File: `02-transport-demand-logistics-and-decarbonization.md`
- Coverage: 13 harder advanced-native transport-demand/logistics/decarbonization headwords plus 2 contemporary-native-hot mobility lifestyle expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-digital-rights-and-platform-governance`
- File: `02-privacy-content-and-platform-accountability.md`
- Coverage: 13 harder advanced-native privacy/content/platform-accountability headwords plus 2 contemporary-native-hot online expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-energy-transition-and-power-security`
- File: `02-power-flexibility-storage-and-energy-equity.md`
- Coverage: 13 harder advanced-native power-flexibility/storage/energy-transition headwords plus 2 contemporary-native-hot electricity-infrastructure expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-food-security-and-agricultural-policy`
- File: `02-climate-smart-farming-and-rural-value-chains.md`
- Coverage: 13 harder advanced-native climate-smart farming/rural value-chain headwords plus 2 contemporary-native-hot food-market expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-health-insurance-and-aging-policy`
- File: `02-integrated-care-and-later-life-security.md`
- Coverage: 13 harder advanced-native integrated-care/later-life security headwords plus 2 contemporary-native-hot family-care expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-medical-access-and-care-delivery`
- File: `02-emergency-coordination-and-regional-capacity.md`
- Coverage: 13 harder advanced-native emergency-coordination/regional-capacity headwords plus 2 contemporary-native-hot healthcare-access expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-legal-procedure-and-judicial-accountability`
- File: `02-evidence-defense-and-access-to-justice.md`
- Coverage: 13 harder advanced-native evidence/defense/access-to-justice headwords plus 2 contemporary-native-hot legal-discourse expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-legal-procedure-and-judicial-accountability`
- File: `03-confinement-and-institutional-control.md`
- Coverage: 3 advanced-native legal/institutional-control headwords (`수감하다`, `복종`, `동조적`) in one `target_set` passage.
- Validation: lexical-basis metadata, register/context metadata, entry headings, passage target coverage, hidden metadata, topic README link, and local numbering checked.

- Topic: `advanced-economic-and-labor-reporting`
- File: `02-productivity-skills-and-work-patterns.md`
- Coverage: 13 harder advanced-native productivity/skills/work-pattern headwords plus 2 contemporary-native-hot labor-lifestyle expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-interpersonal-nuance`
- File: `02-boundaries-implicature-and-digital-replies.md`
- Coverage: 13 harder advanced-native discourse/boundary/emotional-communication headwords plus 2 contemporary-native-hot digital relationship expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `media-and-cultural-heritage`
- File: `02-heritage-interpretation-and-cultural-participation.md`
- Coverage: 13 harder advanced-native heritage interpretation/cultural-participation headwords plus 2 contemporary-native-hot cultural-visit expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `media-literacy-and-public-trust`
- File: `02-information-warfare-and-verification.md`
- Coverage: 13 harder advanced-native information-verification/public-trust headwords plus 2 contemporary-native-hot online media expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `contracts-and-outsourcing`
- File: `02-risk-allocation-and-outsourcing-disputes.md`
- Coverage: 13 harder advanced-native contract-risk/dispute headwords plus 2 contemporary-native-hot outsourcing failure expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `formal-notices-and-administration`
- File: `02-remedies-and-citizen-facing-procedures.md`
- Coverage: 13 harder advanced-native administrative-remedy/procedure headwords plus 2 contemporary-native-hot citizen-burden expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-science-and-technology-reporting`
- File: `03-quantum-photonics-and-robotics.md`
- Coverage: 13 harder advanced-native quantum/photonics/robotics headwords plus 2 contemporary-native-hot robotics expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `advanced-science-and-technology-reporting`
- File: `04-biomedical-innovation-and-regulatory-science.md`
- Coverage: 13 harder advanced-native biomedical/regulatory headwords plus 2 contemporary-native-hot health-tech expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; the contemporary-hot usage of `초개인화` and `바이오해킹` was cross-checked against current Korean health-tech and wellness discourse.

- Topic: `high-register-media-and-cultural-criticism`
- File: `03-news-platforms-and-public-attention.md`
- Coverage: 13 harder advanced-native media/platform headwords plus 2 contemporary-native-hot newsroom/subscription expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; the contemporary-hot usage of `어뷰징` and `구독 피로감` was cross-checked against current Korean media and audience discourse.

- Topic: `advanced-finance-and-consumer-protection`
- File: `03-digital-finance-and-tokenized-money.md`
- Coverage: 13 harder advanced-native digital-finance/tokenization headwords plus 2 contemporary-native-hot fintech/payment expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; the contemporary-hot usage of `BNPL` and `테크핀` was cross-checked against current Korean fintech and consumer-finance reporting.

- Topic: `advanced-economic-and-labor-reporting`
- File: `03-platform-labor-and-automation.md`
- Coverage: 13 harder advanced-native labor/automation headwords plus 2 contemporary-native-hot workplace expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; the contemporary-hot usage of `퇴준생` and `사이드잡` was cross-checked against current Korean career and workplace discourse.

- Topic: `high-register-law-and-diplomacy`
- File: `03-economic-security-and-cyber-diplomacy.md`
- Coverage: 13 harder advanced-native sanctions/economic-security/cyber-diplomacy headwords plus 2 contemporary-native-hot geopolitical expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; the contemporary-hot usage of `디커플링` and `디리스킹` was cross-checked against current Korean economic-security reporting.

- Topic: `advanced-public-health-and-science-policy`
- File: `03-pandemic-preparedness-and-biosecurity.md`
- Coverage: 13 harder advanced-native pandemic/biosecurity headwords plus 2 contemporary-native-hot post-pandemic expressions across `news_formal`, `native_spoken`, and `slang_online` lanes in one `target_set` passage.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked; the contemporary-hot usage of `코로나 후유증` and `방역 피로감` was cross-checked against current Korean public-health reporting and patient discourse.

- Topic: `contracts-and-outsourcing`
- File: `03-service-contracts-and-field-accountability.md`
- Coverage: 14 advanced-native contract, document, quality, and accountability headwords (`윤곽`, `확고`, `수용`, `사주`, `인도`, `정본`, `결함`, `기간`, `문란`, `전취하다`, `수위`, `감축하다`, `정세`, `기산`) in one 142-eojeol `target_set` passage; the PDF was used as reference only and the prose is original.
- Validation: all 14 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-workplace-and-institutional-discourse`
- File: `03-strategic-judgment-and-institutional-independence.md`
- Coverage: 15 advanced-native institutional strategy and accountability headwords (`부합`, `자주적`, `독자적`, `본질적`, `현명하다`, `확신`, `사심`, `헌신`, `정서적`, `국한`, `앞세우다`, `치닫다`, `파탄`, `은연하다`, `수용적`) in one 132-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `04-cultural-memory-audience-ethics.md`
- Coverage: 15 advanced-native cultural-memory, audience, and media-ethics headwords (`심미`, `내로라하다`, `주연`, `방청객`, `간직`, `세월`, `미련`, `성희롱`, `표상`, `작품성`, `저작인격권`, `관람자`, `서사적`, `재맥락화`, `기억공동체`) in one 112-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `slang-and-pragmatic-spoken-korean`
- File: `02-sharp-judgments-and-relational-boundaries.md`
- Coverage: 15 advanced-native idiomatic and register-sensitive spoken headwords (`뜸을 들이다`, `버르장머리`, `떨거지`, `극성`, `뒷전`, `환장하다`, `싸가지가 없다`, `용하다`, `문어발`, `선을 넘다`, `뒤끝이 있다`, `낯이 두껍다`, `속내를 떠보다`, `말꼬리를 잡다`, `판을 깨다`) across `native_spoken` and `news_formal` lanes in one 123-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

## Resume rule

Continue with the next coherent topic rather than following source-file order. Prefer the candidate topics recorded in `korean/vocab/korean-vietnamese-wordbook.md`, and check existing headword+sense coverage before adding a word.

## Next candidates

Potential next topics include high-register media and cultural criticism, another current public-policy topic, or a specialized science/economy reporting lane with verified native usage. Choose the first topic that can form a coherent semantic network; do not force unrelated words to reach 15.
