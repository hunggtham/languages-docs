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

## Resume rule

Continue with the next coherent topic rather than following source-file order. Prefer the candidate topics recorded in `korean/vocab/korean-vietnamese-wordbook.md`, and check existing headword+sense coverage before adding a word.

## Next candidates

Potential next topics include high-register media and cultural criticism, another current public-policy topic, or a specialized science/economy reporting lane with verified native usage. Choose the first topic that can form a coherent semantic network; do not force unrelated words to reach 15.
