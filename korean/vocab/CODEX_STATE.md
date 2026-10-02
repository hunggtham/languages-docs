# Korean Vocabulary Expansion State

## 2026-09-29 Vietnamese-first retrofit

- Applied the current Korean common-language contract to all 102 Korean lesson Markdown files under `korean/vocab/topics/` (legacy flat files included): `뉘앙스와 사용법`, reusable collocations/chunks, sentence patterns/components, social/topic register, `어휘 연결`, and `영어 참고` now carry Vietnamese explanations while retaining Korean/English lookup keywords.
- Added a Vietnamese `Dịch` line after every learner-facing Korean example. Structural audit covers 1,393 entries with no missing required fields; `git diff --check` passes.
- Follow-up cleanup removed generic translation placeholders and duplicate `Dịch` lines in the remaining legacy files; the final audit reports exactly one Vietnamese example translation per entry.
- Updated `korean/prompt/COMMON_PROMPT.md`, `VOCAB_PROMPT.md`, `GRAMMAR_PROMPT.md`, and `vocabulary_goal/GOAL.md` to make the Vietnamese-first rule explicit and to require English references to be explained in Vietnamese.
- This working tree cannot create `.git/index.lock` because the managed `.git` mount is read-only; changes are intentionally left unstaged for the next checkpoint commit in a writable checkout.

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
- Coverage: 14 advanced-native contract, document, quality, and accountability headwords (`윤곽`, `확고`, `수용`, `사주`, `인도`, `정본`, `결함`, `기간`, `문란`, `전취하다`, `수위`, `감축하다`, `정세`, `기산`) in one 121-eojeol `target_set` passage; the PDF was used as reference only and the prose is original.
- Validation: all 14 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-workplace-and-institutional-discourse`
- File: `03-strategic-judgment-and-institutional-independence.md`
- Coverage: 15 advanced-native institutional strategy and accountability headwords (`부합`, `자주적`, `독자적`, `본질적`, `현명하다`, `확신`, `사심`, `헌신`, `정서적`, `국한`, `앞세우다`, `치닫다`, `파탄`, `은연하다`, `수용적`) in one 110-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `04-cultural-memory-audience-ethics.md`
- Coverage: 15 advanced-native cultural-memory, audience, and media-ethics headwords (`심미`, `내로라하다`, `주연`, `방청객`, `간직`, `세월`, `미련`, `성희롱`, `표상`, `작품성`, `저작인격권`, `관람자`, `서사적`, `재맥락화`, `기억공동체`) in one 111-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `slang-and-pragmatic-spoken-korean`
- File: `02-sharp-judgments-and-relational-boundaries.md`
- Coverage: 15 advanced-native idiomatic and register-sensitive spoken headwords (`뜸을 들이다`, `버르장머리`, `떨거지`, `극성`, `뒷전`, `환장하다`, `싸가지가 없다`, `용하다`, `문어발`, `선을 넘다`, `뒤끝이 있다`, `낯이 두껍다`, `속내를 떠보다`, `말꼬리를 잡다`, `판을 깨다`) across `native_spoken` and `news_formal` lanes in one 115-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-science-and-technology-reporting`
- File: `05-evidence-statistics-and-diagnostic-uncertainty.md`
- Coverage: 15 advanced-native evidence, statistics, and diagnostic-uncertainty headwords (`통계적 유의성`, `신뢰구간`, `표본오차`, `교란변수`, `인과추론`, `검정력`, `민감도`, `특이도`, `위양성`, `위음성`, `검출한계`, `사전등록`, `메타분석`, `체리피킹`, `숫자를 마사지하다`) across `news_formal` and `native_spoken` lanes in one 119-eojeol `target_set` passage; prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-economic-and-labor-reporting`
- File: `04-business-distress-and-labor-distribution.md`
- Coverage: 15 advanced-native macroeconomic, corporate-distress, and labor-distribution headwords (`유동성 경색`, `한계기업`, `구조적 실업`, `노동소득분배율`, `소득탄력성`, `생산성 격차`, `부채비율`, `자본잠식`, `인플레이션 기대`, `재정승수`, `경기순환`, `불완전고용`, `전환비용`, `경제활동참가율`, `사업재편`) in one 112-eojeol `target_set` passage; prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-public-health-and-science-policy`
- File: `04-risk-stratification-and-care-allocation.md`
- Coverage: 15 advanced-native health-policy, clinical-outcomes, and care-allocation headwords (`위험층화`, `비용효과성`, `자원배분`, `건강결정요인`, `보건의료 거버넌스`, `사회적 처방`, `돌봄 연속성`, `의사결정 공유`, `환자보고결과`, `치료 순응도`, `의료 과잉이용`, `의료 과소이용`, `외적 타당도`, `내적 타당도`, `최소임상중요차이`) in one 105-eojeol `target_set` passage; prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-public-administration-and-regulation`
- File: `03-discretion-and-administrative-legitimacy.md`
- Coverage: 15 advanced-native administrative-law and regulatory-legitimacy headwords (`행정입법`, `재량통제`, `행정지도`, `절차적 정당성`, `규범력`, `법적 구속력`, `비례성`, `예측가능성`, `법치행정`, `정책재량`, `규제순응`, `규제포획`, `행정책임`, `공익형량`, `소급입법`) in one 112-eojeol `target_set` passage; prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `high-register-law-and-diplomacy`
- File: `04-sanctions-dispute-prevention-and-diplomatic-remedies.md`
- Coverage: 15 advanced-native international-law, sanctions, and conflict-prevention headwords (`국가면제`, `상호주의`, `강행규범`, `조약유보`, `외교적 보호`, `국제형사책임`, `보복조치`, `역외 적용`, `세컨더리 보이콧`, `제재 이행`, `분쟁예방`, `신뢰구축조치`, `외교적 항의`, `잠정조치`, `국제법상 의무`) in one 109-eojeol `target_set` passage; prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `05-information-ecosystems-and-context.md`
- Coverage: 15 advanced-native media, platform, public-sphere, and cultural-interpretation headwords (`미디어 편향`, `정보 비대칭`, `프레이밍 효과`, `공론장 분절`, `플랫폼 중개`, `알고리즘 증폭`, `주의경제`, `정보 과부하`, `출처 투명성`, `맥락 붕괴`, `공적 기억`, `문화적 번역`, `감정 노동`, `해석 공동체`, `검증 피로`) across `news_formal` and `native_spoken` lanes in one 121-eojeol `target_set` passage; prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `social-change-and-belonging`
- File: `03-citizenship-belonging-and-intersectionality.md`
- Coverage: 15 advanced-native social-policy, citizenship, and intersectionality headwords (`교차성`, `인정투쟁`, `상징폭력`, `제도적 차별`, `구조적 차별`, `소수자 정치`, `시민권화`, `문화적 시민권`, `정체성 정치`, `초국적 네트워크`, `시민권 격차`, `다문화 시민성`, `사회적 인정`, `상징적 경계`, `대표성 결핍`) in one 110-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-climate-and-environmental-governance`
- File: `03-adaptation-justice-and-ecosystem-accountability.md`
- Coverage: 15 advanced-native climate-adaptation, just-transition, biodiversity, and environmental-accountability headwords (`기후정의`, `적응재원`, `적응 격차`, `기후 회복력`, `기후망명`, `기후 손실`, `전환계획`, `탄소제거`, `메탄감축`, `배출경로`, `자연기반해법`, `생태계 서비스`, `생물다양성 순손실`, `공급망 실사`, `환경영향평가`) in one 115-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-mobility-and-transport-policy`
- File: `03-transport-equity-and-logistics-resilience.md`
- Coverage: 15 advanced-native transport-equity, freight-transition, logistics, mobility-data, and spatial-justice headwords (`교통 형평성`, `통행권`, `탄소집약도`, `물류 병목`, `공급망 회복력`, `화물전환`, `철도화물`, `친환경 선박`, `항공수요관리`, `도시물류`, `공동배송`, `교통 데이터 주권`, `이동데이터`, `접근성설계`, `공간적 배제`) in one 110-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-energy-transition-and-power-security`
- File: `03-grid-flexibility-and-energy-democracy.md`
- Coverage: 15 advanced-native power-system, electricity-market, storage, critical-mineral, and energy-democracy headwords (`계통 관성`, `계통혼잡`, `송전제약`, `출력예측`, `수요반응`, `전력중개시장`, `계통운영`, `무탄소전원`, `전력망 회복력`, `전력시장 가격신호`, `장주기 저장`, `배터리 재활용`, `핵심광물`, `에너지 민주주의`, `지역에너지`) in one 107-eojeol `target_set` passage; source PDF used as reference only and prose is original.
- Validation: all 15 target headings have the required entry fields, lexical-basis/register/source-lane metadata, natural passage coverage, hidden target metadata, topic README link, and global duplicate-heading check; `git diff --check` passed.

- Topic: `advanced-economic-and-labor-reporting`
- File: `05-inflation-interest-and-financial-stability.md`
- Coverage: 15 advanced-native macroeconomic and financial-stability headwords (`디플레이션`, `스태그플레이션`, `실질금리`, `명목금리`, `통화긴축`, `유동성 함정`, `금리 전가`, `금융불안`, `금융불균형`, `거시건전성`, `자본적정성`, `스트레스 테스트`, `연착륙`, `경착륙`, `부채 디플레이션`) in one 109-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-economic-and-labor-reporting`
- File: `06-household-balance-sheets-and-consumption.md`
- Coverage: 15 advanced-native household-finance and consumption headwords (`금융취약성`, `상환능력`, `원리금상환액`, `소비절벽`, `소비성향`, `저축률`, `가처분소득`, `자산효과`, `부의 효과`, `신용경색`, `대출규제`, `총부채상환비율`, `담보인정비율`, `가계레버리지`, `디레버리징`) in one 112-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `06-platform-culture-and-audience-politics.md`
- Coverage: 14 advanced-native/contemporary-native-hot media and cultural-criticism headwords (`재현 정치`, `정동 정치`, `문화적 헤게모니`, `기록화`, `참여문화`, `팬덤 정치`, `수용자 주권`, `문화권`, `탈식민적`, `재매개`, `매체성`, `콘텐츠화`, `문화적 기억`, `기억의 정치`) in one 112-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-public-administration-and-regulation`
- File: `04-digital-administration-and-data-publicness.md`
- Coverage: 15 advanced-native digital-administration and public-data headwords (`공공데이터 개방`, `디지털 공공재`, `데이터 최소화`, `디지털 포용`, `행정서비스 공동생산`, `정책실험`, `규제기술`, `공공성`, `알고리즘 책임성`, `디지털 신원`, `데이터 신탁`, `데이터 연계`, `공공데이터 거버넌스`, `행정 자동화`, `디지털 접근권`) in one 119-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-science-and-technology-reporting`
- File: `06-open-science-and-research-integrity.md`
- Coverage: 15 advanced-native/contemporary-native-hot research-integrity and open-science headwords (`연구 무결성`, `재현위기`, `데이터 공유`, `연구 투명성`, `저자기여`, `연구윤리`, `출판편향`, `선택적 보고`, `유의성 사냥`, `오픈 액세스`, `프리프린트`, `검증가능성`, `메타연구`, `과학 커뮤니케이션`, `시민과학`) in one 105-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-public-health-and-science-policy`
- File: `05-surveillance-equity-and-health-security.md`
- Coverage: 14 advanced-native/contemporary-native-hot public-health headwords (`예방의료`, `건강데이터`, `의료데이터`, `데이터 유출`, `질병감시`, `폐수 감시`, `조기경보`, `지역사회 건강`, `건강보험 사각지대`, `보건안보`, `백신 망설임`, `보건의료 인력`, `보건의료 회복력`, `감염병 대응`) in one 109-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only examples, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `high-register-law-and-diplomacy`
- File: `05-multilateral-security-and-international-legitimacy.md`
- Coverage: 15 advanced-native international-security and diplomatic-legitimacy headwords (`규범 기반 질서`, `국제기구 개혁`, `안보 딜레마`, `확장억제`, `군비통제`, `비확산`, `인도적 개입`, `보호책임`, `평화유지활동`, `분쟁조정`, `중재재판`, `국제공조`, `제도적 공백`, `국제적 정당성`, `외교적 고립`) in one 116-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `social-change-and-belonging`
- File: `04-justice-mobility-and-social-cohesion.md`
- Coverage: 14 advanced-native social-justice and cohesion headwords (`사회적 재분배`, `분배 정의`, `인정 정의`, `돌봄 정의`, `세대 정의`, `이주권`, `사회적 이동성`, `계층 재생산`, `불평등 재생산`, `사회적 응집력`, `사회적 신뢰`, `소속의 정치`, `문화적 중개`, `시민적 연대`) in one 110-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-public-administration-and-regulation`
- File: `05-audit-transparency-and-administrative-accountability.md`
- Coverage: 15 advanced-native administrative-accountability headwords (`감사 가능성`, `설명책임`, `행정감사`, `성과감사`, `규제 일몰`, `이해관계자 협의`, `공공책임`, `행정 투명성`, `정보공개 청구`, `옴부즈만`, `시민감사`, `독립감독`, `내부고발`, `행정심사`, `사후평가`) in one 109-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-climate-and-environmental-governance`
- File: `04-climate-finance-risk-and-transition-governance.md`
- Coverage: 15 advanced-native climate-finance and transition-governance headwords (`전환금융`, `적응 한계`, `기후 취약성`, `기후 리스크`, `물리적 리스크`, `전환 리스크`, `기후전환계획`, `자연자본`, `기후재정`, `기후외교`, `기후 스트레스 테스트`, `탄소 잠금`, `기후 주류화`, `적응 주류화`, `생태 복원`) in one 100-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-finance-and-consumer-protection`
- File: `04-financial-literacy-and-consumer-remedies.md`
- Coverage: 15 advanced-native finance-consumer-protection headwords (`금융문해력`, `소비자 금융`, `금융착취`, `신용회복`, `채무불이행`, `금융포용`, `금융배제`, `소비자 권리`, `적정성 원칙`, `금융분쟁조정`, `피해구제`, `취약차주`, `상환유예`, `금융비용`, `소비자 선택권`) in one 104-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-food-security-and-agricultural-policy`
- File: `03-food-sovereignty-and-rural-resilience.md`
- Coverage: 15 advanced-native food-sovereignty and rural-resilience headwords (`농업 회복력`, `식량 주권`, `식량 가격 변동성`, `농업 보조금`, `농업 전환`, `농촌 소멸`, `농촌 인구감소`, `농업 노동력`, `토지 수탈`, `농지 전용`, `농업 가치사슬`, `식품 폐기`, `식량 접근성`, `영양 안보`, `종자 주권`) in one 109-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-food-security-and-agricultural-policy`
- File: `04-digital-and-circular-food-systems.md`
- Coverage: 15 advanced-native agri-technology and circular-food-system headwords (`농업 디지털화`, `스마트 농업`, `농업 자동화`, `농업 데이터`, `농업 플랫폼`, `수직농장`, `도시농업`, `순환농업`, `농업 부산물`, `토양 탄소`, `물 발자국`, `식품 공급망`, `저온 유통망`, `지역 먹거리`, `로컬푸드`) in one 111-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-economic-and-labor-reporting`
- File: `07-labor-transition-and-wage-architecture.md`
- Coverage: 15 advanced-native labor-transition and wage-structure headwords (`노동시장 양극화`, `임금 압축`, `임금 격차`, `숙련 편향 기술변화`, `기술적 실업`, `직업 재훈련`, `평생직업`, `경력 사다리`, `고용 안정성`, `노동시장 유연화`, `비정규직화`, `생산성 공유`, `임금 투명성`, `직무 전환`, `임금 하방경직성`) in one 100-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-public-health-and-science-policy`
- File: `06-patient-safety-and-regional-care.md`
- Coverage: 15 advanced-native/contemporary-native-hot patient-safety, care-quality, regional-health, and health-cost headwords (`환자 안전`, `의료 질`, `의료 질 격차`, `응급의료 공백`, `재난의료`, `원격의료`, `진료 연속성`, `의료 인력 배치`, `지역의료`, `의료비 지출`, `건강 비용`, `의료비 재난`, `환자 경험`, `환자 안전사고`, `의료 오류`) in one 112-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and global duplicate-heading check passed; `git diff --check` passed.

- Topic: `advanced-medical-access-and-care-delivery`
- File: `03-continuity-and-referral-care.md`
- Coverage: 15 advanced-native/contemporary-native-hot referral, care-coordination, patient-navigation, and transitional-care headwords (`주치의`, `의뢰서`, `회송`, `다학제 진료`, `케어 코디네이션`, `진료협진`, `공동의사결정`, `환자 내비게이션`, `의료 이용`, `대기시간`, `진료 예약`, `방문진료`, `재택의료`, `퇴원계획`, `전환기 돌봄`) in one 110-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `07-public-interest-journalism-and-trust.md`
- Coverage: 15 advanced-native/contemporary-native-hot journalism, media-literacy, source-protection, and public-accountability headwords (`언론 신뢰`, `검증 보도`, `탐사보도`, `공익 제보`, `취재원 보호`, `편집권`, `언론 독립`, `지역 언론`, `시민 저널리즘`, `설명 저널리즘`, `솔루션 저널리즘`, `미디어 리터러시`, `정보 검증`, `에코체임버`, `감시견 기능`) in one 113-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `08-media-business-and-sustainability.md`
- Coverage: 15 advanced-native/contemporary-native-hot media-business, subscription, ownership, and sustainability headwords (`뉴스 비즈니스`, `광고 의존도`, `광고 수익`, `구독 수익`, `후원 모델`, `디지털 구독`, `유료벽`, `구독 전환`, `독자 관계`, `회원제`, `공익 미디어`, `미디어 소유 집중`, `미디어 지속가능성`, `수익 다변화`, `플랫폼 수수료`) in one 103-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `09-audience-data-and-newsroom-decisions.md`
- Coverage: 15 advanced-native/contemporary-native-hot audience-data, engagement-metric, newsroom-analytics, and algorithmic-editing headwords (`독자 데이터`, `독자 분석`, `오디언스 데이터`, `체류시간`, `참여율`, `클릭률`, `독자 이탈`, `추천 알고리즘`, `편집 데이터`, `성과 지표`, `뉴스룸 분석`, `데이터 대시보드`, `편집회의`, `독자 피드백`, `알고리즘 편집`) in one 102-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `10-newsroom-labor-and-reporting-ethics.md`
- Coverage: 15 advanced-native/contemporary-native-hot newsroom-labor, journalist-safety, reporting-ethics, verification, and corrections headwords (`취재 노동`, `기자 소진`, `업무 과부하`, `마감 압박`, `비정규 기자`, `프리랜서 기자`, `뉴스룸 문화`, `편집 데스크`, `취재 윤리`, `기자 안전`, `디지털 보안`, `언론 노동`, `콘텐츠 노동`, `사실 검증팀`, `정정 정책`) in one 103-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `11-automation-and-ai-journalism.md`
- Coverage: 15 advanced-native/contemporary-native-hot automated-journalism, generative-AI, model-governance, data-provenance, and disclosure headwords (`자동화 저널리즘`, `로봇 저널리즘`, `생성형 저널리즘`, `뉴스 자동화`, `데이터 기사 자동화`, `생성형 AI`, `대규모 언어모델`, `언어모델 편향`, `환각 현상`, `모델 투명성`, `추적가능성`, `데이터 출처`, `학습데이터`, `인간 검토`, `AI 사용 공개`) in one 102-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `12-copyright-and-content-authenticity.md`
- Coverage: 15 advanced-native/contemporary-native-hot copyright, synthetic-media, provenance, authorship, and content-labeling headwords (`저작권 침해`, `저작권 학습`, `콘텐츠 진위`, `합성 미디어`, `워터마크`, `출처 인증`, `AI 생성물`, `생성물 표시`, `원본성`, `저작자성`, `학습 동의`, `데이터 라이선스`, `딥페이크 탐지`, `진위 판별`, `콘텐츠 라벨링`) in one 112-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `13-platform-regulation-and-expression.md`
- Coverage: 15 advanced-native/contemporary-native-hot platform-regulation, expression, online-safety, content-moderation, procedural-remedy, and governance headwords (`플랫폼 규제`, `표현의 자유`, `언론 윤리`, `공적 감시`, `플랫폼 책임`, `중개자 책임`, `온라인 안전`, `온라인 유해성`, `유해 콘텐츠`, `콘텐츠 삭제`, `계정 정지`, `이의제기 절차`, `투명성 보고서`, `시스템 위험`, `플랫폼 거버넌스`) in one 103-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `14-rights-and-co-regulation.md`
- Coverage: 15 advanced-native/contemporary-native-hot co-regulation, digital-rights, information-access, press-freedom, moderation-error, public-sphere, and user-rights headwords (`플랫폼 자율규제`, `공동규제`, `미디어 규제`, `디지털 권리`, `정보 접근권`, `알 권리`, `언론 자유`, `검열 위험`, `사적 검열`, `과잉 삭제`, `삭제 오류`, `표현 제한`, `공론장 보호`, `규제 영향평가`, `이용자 권리`) in one 117-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `15-cross-border-media-governance.md`
- Coverage: 15 advanced-native/contemporary-native-hot cross-border-regulation, jurisdiction, international-cooperation, data-governance, standards, diplomacy, and disinformation headwords (`국경 간 규제`, `관할권 충돌`, `국제 협력`, `국제 공조`, `글로벌 플랫폼`, `다국적 플랫폼`, `국경 간 데이터`, `데이터 이전`, `데이터 현지화`, `법률 충돌`, `규제 조화`, `국제 표준`, `글로벌 거버넌스`, `디지털 외교`, `국경 간 허위정보`) in one 107-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `16-media-pluralism-and-digital-coloniality.md`
- Coverage: 14 advanced-native/contemporary-native-hot media-pluralism, cultural-diversity, language-rights, digital-coloniality, multistakeholder, translation-equity, decolonial-design, and cultural-sovereignty headwords (`미디어 다원성`, `문화 다양성`, `소수 언어`, `언어권`, `디지털 식민주의`, `플랫폼 식민주의`, `정보 식민주의`, `글로벌 사우스`, `지역 규범`, `다중 이해관계자`, `언어 접근성`, `번역 불평등`, `탈식민적 설계`, `문화적 주권`) in one 105-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `17-inclusive-media-and-community-capacity.md`
- Coverage: 15 advanced-native/contemporary-native-hot language-diversity, media-inclusion, data-coloniality, platform-power, local-media, indigenous-knowledge, inclusive-design, information-inequality, and co-creation headwords (`언어 다양성`, `미디어 포용`, `문화적 다양성`, `데이터 식민주의`, `기술 종속`, `플랫폼 권력`, `문화 제국주의`, `지역 미디어`, `토착 지식`, `지식 식민주의`, `포용적 설계`, `미디어 주권`, `접근성 설계`, `정보 불평등`, `공동 창작`) in one 112-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `18-community-media-and-digital-participation.md`
- Coverage: 14 advanced-native/contemporary-native-hot media-gap, community-media, civic-participation, digital-capability, disability-media, inclusive-content, and regional-platform headwords (`미디어 격차`, `커뮤니티 미디어`, `공동체 라디오`, `지역 방송`, `시민 미디어`, `참여 설계`, `데이터 역량`, `디지털 역량`, `장애 미디어`, `장애 재현`, `포용적 콘텐츠`, `시민 참여`, `참여 미디어`, `지역 플랫폼`) in one 109-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `19-media-literacy-and-digital-exclusion.md`
- Coverage: 15 advanced-native/contemporary-native-hot media-literacy, news-literacy, digital-exclusion, access-gap, information-discernment, algorithm-literacy, online-participation, and digital-citizenship headwords (`미디어 문해력`, `뉴스 리터러시`, `디지털 문해력`, `기술 접근성`, `정보 접근성`, `접속 격차`, `기기 격차`, `네트워크 격차`, `디지털 소외`, `미디어 소외`, `참여 격차`, `정보 판별력`, `알고리즘 문해력`, `온라인 참여`, `디지털 시민성`) in one 112-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `20-public-media-and-cultural-mediation.md`
- Coverage: 15 advanced-native/contemporary-native-hot public-media, civic-education, fact-checking-education, cultural-mediation, citizen-production, public-communication, public-broadcasting, consultation, local-agenda, community-archive, and cultural-access headwords (`공공 미디어`, `시민 교육`, `팩트체크 교육`, `문화 중개`, `시민 제작`, `주민 제작`, `공공 콘텐츠`, `공공 커뮤니케이션`, `문화 번역`, `공익 방송`, `공영 미디어`, `시민 자문`, `지역 의제`, `공동체 기록`, `문화 접근권`) in one 116-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `21-digital-archives-and-public-memory.md`
- Coverage: 15 advanced-native/contemporary-native-hot digital-memory, memory-politics, memory-institution, cultural-archive, digital-preservation, provenance, context, discoverability, and memory-rights headwords (`디지털 기억`, `기억 정치`, `기억 기관`, `문화 아카이브`, `디지털 아카이브`, `공공 아카이브`, `아카이브 접근성`, `기록 보존`, `기록 폐기`, `디지털 보존`, `보존 메타데이터`, `기록 진본성`, `기록 맥락`, `검색 가능성`, `기억의 권리`) in one 101-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `22-digital-afterlife-and-legacy.md`
- Coverage: 15 advanced-native/contemporary-native-hot deletion-rights, data-erasure, online-memorial, digital-legacy, posthumous-account, digital-funeral, family-rights, data-inheritance, and digital-heritage-preservation headwords (`삭제권`, `데이터 삭제`, `온라인 추모`, `디지털 유산`, `유산 관리`, `사후 데이터`, `사후 계정`, `디지털 장례`, `추모 페이지`, `기억 플랫폼`, `유족 권리`, `개인정보 상속`, `계정 상속`, `데이터 상속`, `디지털 유산 보존`) in one 118-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `23-algorithmic-memory-and-record-ethics.md`
- Coverage: 15 advanced-native/contemporary-native-hot memory-politics, platform-memory, algorithmic-memory, heritage-digitization, archival-sovereignty, data-memory, memory-rights, reputation, digital-trace, and record-ethics headwords (`망각의 정치`, `플랫폼 기억`, `검색 기억`, `알고리즘 기억`, `문화유산 디지털화`, `기록 공동체`, `아카이브 주권`, `기록 주권`, `데이터 기억`, `유산 접근권`, `기억 윤리`, `기록 윤리`, `온라인 평판`, `디지털 흔적`, `디지털 발자국`) in one 115-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `24-reputation-repair-and-the-right-to-forget.md`
- Coverage: 14 advanced-native/contemporary-native-hot search-delisting, reputation-repair, correction-rights, privacy, re-identification, permanent-record, record-surplus, and digital-stigma headwords (`검색 삭제`, `검색 결과 삭제`, `평판 회복`, `정정 기록`, `정정 가능성`, `오류 정정`, `정보 수정권`, `정보 정정권`, `사생활 보호`, `재식별 위험`, `데이터 재식별`, `영구 기록`, `기록 과잉`, `디지털 낙인`) in one 114-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `25-surveillance-and-privacy-governance.md`
- Coverage: 15 advanced-native/contemporary-native-hot surveillance, behavioral-tracking, location-data, biometric, privacy, pseudonymization, privacy-by-design, user-control, data-broker, profiling, and personalized-advertising headwords (`감시 자본주의`, `데이터 감시`, `행태 추적`, `위치정보 수집`, `생체인식`, `감시 기술`, `프라이버시 침해`, `개인정보 최소화`, `가명 처리`, `프라이버시 중심 설계`, `감시 사회`, `추적 거부`, `데이터 브로커`, `프로파일링`, `개인화 광고`) in one 118-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `26-automated-decisions-and-algorithmic-accountability.md`
- Coverage: 15 advanced-native algorithmic-decision, algorithmic-adjudication, risk-scoring, disparate-impact, automation-bias, model-audit, data-bias, decision-transparency, impact-assessment, automated-decision, contestation-rights, equality-impact, algorithmic-oversight, bias-check, and fairness-check headwords (`자동 의사결정`, `알고리즘 판정`, `위험 점수`, `차별적 영향`, `자동화 편향`, `모델 감사`, `데이터 편향`, `결정 투명성`, `영향 평가`, `자동화 결정`, `이의 제기권`, `차별 영향평가`, `알고리즘 감독`, `편향 점검`, `공정성 점검`) in one 104-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, and target-heading uniqueness check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `27-emotion-recognition-and-affective-governance.md`
- Coverage: 15 advanced-native affective-computing, emotion-recognition, sentiment-analysis, affective-inference, emotion-data, psychological-profile, affective-data, emotion-classification, facial-expression, voice-analysis, emotional-manipulation, affective-personalization, predictive-policing, social-scoring, and biosignal headwords (`감정 인식`, `감정 분석`, `정서 추론`, `감정 데이터`, `심리 프로파일`, `정서 데이터`, `감정 분류`, `얼굴 표정 분석`, `음성 분석`, `정서적 조작`, `정서적 개인화`, `예측 치안`, `사회적 점수`, `감정 컴퓨팅`, `생체 신호`) in one 115-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `28-digital-mental-health-and-care-automation.md`
- Coverage: 15 advanced-native/contemporary-native-hot digital-mental-health, mental-health-app, emotion-regulation-app, wellbeing-indicator, happiness-index, psychological-safety, mental-health-data, counseling-chatbot, care-automation, emotional-care, wearable-health, risk-signal-detection, mental-health-monitoring, emotional-resilience, and mental-health-stigma headwords (`디지털 정신건강`, `정신건강 앱`, `감정 조절 앱`, `웰빙 지표`, `행복 지수`, `심리 안전`, `정신건강 데이터`, `상담 챗봇`, `돌봄 자동화`, `정서적 돌봄`, `웨어러블 건강`, `위험 신호 탐지`, `정신건강 모니터링`, `정서적 회복력`, `정신건강 낙인`) in one 102-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `29-community-mental-health-and-crisis-language.md`
- Coverage: 15 advanced-native/contemporary-native-hot mental-health-literacy, suicide-prevention-language, crisis-intervention, resource-linkage, recovery-narrative, lived-experience, peer-support, mutual-aid, mental-health-rights, treatment-access, care-gap, mental-health-service-gap, stigma-reduction, mental-health-education, and peer-counseling headwords (`정신건강 문해력`, `자살 예방 언어`, `위기 개입`, `자원 연결`, `회복 서사`, `당사자 관점`, `동료 지원`, `상호부조`, `정신건강 권리`, `치료 접근성`, `돌봄 격차`, `정신건강 서비스 격차`, `낙인 완화`, `정신건강 교육`, `동료 상담`) in one 104-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `30-public-mental-health-infrastructure-and-continuity.md`
- Coverage: 15 advanced-native public-mental-health, community-mental-health, mental-health-workforce, mental-health-budget, psychosocial-support, counseling-wait, case-management, integrated-care, recovery-oriented, rights-based, mental-health-governance, mental-health-infrastructure, workforce-shortage, continuity-of-treatment, and mental-health-equity headwords (`공공 정신건강`, `지역사회 정신건강`, `정신건강 인력`, `정신건강 예산`, `심리지원`, `상담 대기`, `사례 관리`, `통합 돌봄`, `회복 지향`, `권리 기반`, `정신건강 거버넌스`, `정신건강 인프라`, `정신건강 인력 부족`, `치료 지속성`, `정신건강 형평성`) in one 107-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `31-culturally-responsive-and-inclusive-mental-health.md`
- Coverage: 15 advanced-native culturally competent, cultural humility, cultural responsiveness, language-support, interpretation-service, mental-health-interpretation, multicultural-counseling, migrant-mental-health, refugee-mental-health, minority-mental-health, LGBTQ+-mental-health, disability-inclusion, accessible-counseling, cultural-safety, and trauma-informed headwords (`문화적 역량`, `문화적 겸손`, `문화 대응성`, `언어 지원`, `통역 서비스`, `정신건강 통역`, `다문화 상담`, `이주민 정신건강`, `난민 정신건강`, `소수자 정신건강`, `성소수자 정신건강`, `장애 포용`, `접근 가능한 상담`, `문화적 안전`, `트라우마 인지`) in one 112-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `32-trauma-informed-reporting-and-media-ethics.md`
- Coverage: 15 advanced-native trauma-representation, victim-centered-reporting, privacy-protective-reporting, sensational-reporting, crime-reporting-ethics, victim-blaming, stigma-reproduction, compassion-fatigue, emotional-distancing, restorative-reporting, trauma-safe-reporting, anonymity-protection, reporting-guideline, trauma-reporting, and retraumatization headwords (`트라우마 재현`, `피해자 중심 보도`, `사생활 보호 보도`, `자극적 보도`, `범죄 보도 윤리`, `피해자 비난`, `낙인 재생산`, `공감 피로`, `감정적 거리두기`, `회복적 보도`, `안전한 취재`, `익명성 보장`, `보도 가이드라인`, `트라우마 보도`, `재피해화`) in one 110-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `33-reporting-children-and-vulnerable-sources.md`
- Coverage: 15 advanced-native child-reporting-ethics, minor-protection, secondary-exposure, identity-disclosure, face-blurring, post-event-reporting, victim-interview, interview-consent, withdrawal-right, publication-delay, public-interest-judgment, identity-nondisclosure, identity-protection, follow-up-investigation, and children’s-personal-data headwords (`아동 보도 윤리`, `미성년자 보호`, `2차 노출`, `신원 공개`, `얼굴 모자이크`, `사후 보도`, `피해자 인터뷰`, `인터뷰 동의`, `철회권`, `보도 유예`, `공익 판단`, `신원 비공개`, `신원 보호`, `후속 취재`, `아동 개인정보`) in one 106-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `34-grief-reporting-and-public-mourning.md`
- Coverage: 15 advanced-native grief-reporting, memorial-coverage, family-protection, bereaved-family-interview, mourning-space, collective-mourning, public-mourning, mourning-narrative, memorial-memory, memorial-culture, grief-labor, grief-support, bereavement-support, memorial-archive, and grief-community headwords (`애도 보도`, `추모 보도`, `유가족 보호`, `유가족 인터뷰`, `애도 공간`, `집단 애도`, `공적 애도`, `애도 서사`, `추모 기억`, `추모 문화`, `애도 노동`, `애도 지원`, `사별 지원`, `추모 아카이브`, `애도 공동체`) in one 109-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `35-contested-memory-and-historical-responsibility.md`
- Coverage: 15 advanced-native memory-conflict, memorial-conflict, monument-debate, monument-removal, historical-denial, exclusion-from-memory, victim-memory, perpetrator-memory, memory-justice, memorial-politics, public-memory, memory-activism, reconciliation-narrative, dealing-with-the-past, and historical-responsibility headwords (`기억 충돌`, `추모 갈등`, `기념비 논쟁`, `기념비 철거`, `역사 부정`, `기억의 배제`, `피해 기억`, `가해 기억`, `기억 정의`, `추모 정치`, `공공 기억`, `기억 투쟁`, `화해 서사`, `과거사 청산`, `역사적 책임`) in one 103-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `36-decolonial-museum-curation-and-restitution.md`
- Coverage: 15 advanced-native curation-politics, museum-decolonization, exhibition-narrative, artifact-restitution, cultural-property-repatriation, looted-cultural-property, collection-disclosure, exhibition-accessibility, visitor-participation, co-curation, polyphonic-narrative, colonial-heritage, museum-publicness, exhibition-ethics, and museum-transparency headwords (`큐레이션 정치`, `박물관 탈식민화`, `전시 서사`, `유물 반환`, `문화재 반환`, `약탈 문화재`, `소장품 공개`, `전시 접근성`, `관람객 참여`, `공동 큐레이션`, `다성적 서사`, `식민 유산`, `박물관 공공성`, `전시 윤리`, `박물관 투명성`) in one 102-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `37-provenance-ownership-and-cultural-restitution.md`
- Coverage: 15 advanced-native provenance-research, ownership-verification, co-ownership, temporary-restitution, long-term-loan, cultural-ownership, source-community, heritage-rights, illicit-cultural-property-export, restitution-justice, heritage-diplomacy, conservation-cooperation, repatriation-agreement, cultural-property-diplomacy, and ownership-dispute headwords (`출처 조사`, `소유권 검증`, `공동 소유`, `임시 반환`, `장기 대여`, `문화적 소유권`, `원산지 공동체`, `유산 권리`, `문화재 밀반출`, `반환 정의`, `유산 외교`, `보존 협력`, `귀환 협약`, `문화재 외교`, `소유권 분쟁`) in one 106-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `38-digital-repatriation-and-heritage-sovereignty.md`
- Coverage: 15 advanced-native digital-repatriation, virtual-restitution, 3D-digitization, digital-reproduction, virtual-exhibition, digital-custodianship, metadata-sovereignty, cultural-data, digital-community, digital-representation, virtual-museum, digital-reproduction-rights, remote-curation, digital-return, and digital-heritage-rights headwords (`디지털 반환`, `가상 반환`, `3D 디지털화`, `디지털 복제`, `가상 전시`, `디지털 소장권`, `메타데이터 주권`, `문화 데이터`, `디지털 공동체`, `디지털 재현`, `가상 박물관`, `디지털 복제권`, `원격 큐레이션`, `디지털 귀환`, `디지털 유산 권리`) in one 110-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `39-open-cultural-data-and-platform-monopoly.md`
- Coverage: 15 advanced-native open-access-culture, public-licensing, cultural-commons, data-sharing-agreement, open-archive, platform-dependence, data-monopoly, cultural-platform, public-API, copyright-exception, fair-use, remote-preservation, open-culture, shared-archive, and data-interoperability headwords (`오픈 액세스 문화`, `공공 라이선스`, `문화 공유지`, `데이터 공유 협약`, `개방형 아카이브`, `플랫폼 의존`, `데이터 독점`, `문화 플랫폼`, `공공 API`, `저작권 예외`, `공정 이용`, `원격 보존`, `개방형 문화`, `공유 아카이브`, `데이터 상호운용성`) in one 116-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `40-creator-rights-and-platform-economy.md`
- Coverage: 15 advanced-native creator-rights, cultural-labor, digital-labor, platform-revenue-sharing, patronage-economy, cultural-production-ecosystem, creator-autonomy, fan-labor, unpaid-creative-work, creator-collective, publicness-of-cultural-production, creator-economy, revenue-sharing-structure, creator-protection, and creator-cooperative headwords (`창작자 권리`, `문화 노동`, `디지털 노동`, `플랫폼 수익 배분`, `후원 경제`, `문화 생산 생태계`, `창작자 자율성`, `팬 노동`, `무급 창작`, `창작자 집단`, `문화 생산의 공공성`, `창작자 경제`, `수익 배분 구조`, `창작자 보호`, `창작자 협동조합`) in one 109-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `41-cultural-funding-and-policy-evaluation.md`
- Coverage: 15 advanced-native/contemporary-native-hot public-cultural-support, arts-support-system, competitive-grant, selection-principles, selection-procedure, grant-reconciliation, creative-stipend, artist-employment-insurance, artists-rights-protection, cultural-policy-experiment, cultural-decentralization, local-cultural-ecosystem, cultural-participation-gap, arts-and-cultural-education-rights, and public-value-assessment headwords (`문화예술 공공지원`, `예술 지원 제도`, `공모형 지원`, `심사 원칙`, `선정 절차`, `지원금 정산`, `창작 수당`, `예술인 고용보험`, `예술인 권리보장`, `문화 정책 실험`, `문화 분권`, `지역 문화 생태계`, `문화 향유 격차`, `문화예술 교육권`, `공공성 평가`) in one 106-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `42-cultural-institutions-and-participatory-governance.md`
- Coverage: 14 advanced-native/contemporary-native cultural-institution, cultural-governance, participatory-planning, audience-development, audience-participation, cultural-mediation, cultural-volunteering, cultural-accessibility, inclusive-attendance, cultural-program, local-cultural-facility, cultural-demand, cultural-impact-assessment, and cultural-participation-design headwords (`문화기관`, `문화 거버넌스`, `참여형 기획`, `관객 개발`, `관객 참여`, `문화 매개`, `문화 자원봉사`, `문화 접근성`, `포용적 관람`, `문화 프로그램`, `지역 문화시설`, `문화 수요`, `문화 영향평가`, `문화 참여 설계`) in one 118-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `43-cultural-diplomacy-and-international-exchange.md`
- Coverage: 15 advanced-native/contemporary-native cultural-diplomacy, international-cultural-exchange, cultural-exchange-agreement, cultural-envoy, national-image, reciprocity-in-cultural-exchange, cultural-cooperation, transnational-culture, cultural-exchange-platform, international-co-production, cultural-sphere-diplomacy, cultural-sanctions, cultural-boycott, cultural-exchange-network, and cultural-exchange-fund headwords (`문화 외교`, `국제 문화교류`, `문화 교류 협정`, `문화 사절`, `국가 이미지`, `문화 교류의 상호성`, `문화 협력`, `초국적 문화`, `문화 교류 플랫폼`, `국제 공동 제작`, `문화권 외교`, `문화 제재`, `문화 보이콧`, `문화 교류 네트워크`, `문화 교류 기금`) in one 105-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `44-cultural-tourism-and-creative-city-economy.md`
- Coverage: 15 advanced-native/contemporary-native cultural-tourism, heritage-tourism, cultural-content-export, cultural-branding, local-brand, cultural-city, creative-city, urban-cultural-strategy, cultural-cluster, creative-industry, cultural-industry-ecosystem, cultural-tourism-policy, touristification, cultural-consumer, and cultural-commodification headwords (`문화 관광`, `유산 관광`, `문화 콘텐츠 수출`, `문화 브랜딩`, `지역 브랜드`, `문화 도시`, `창의 도시`, `도시 문화 전략`, `문화 클러스터`, `창조 산업`, `문화 산업 생태계`, `문화 관광 정책`, `관광객화`, `문화 소비자`, `문화 상업화`) in one 102-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `45-cultural-events-and-public-space-regeneration.md`
- Coverage: 15 advanced-native/contemporary-native cultural-event, cultural-festival, festivalization, event-economy, cultural-space, public-space-activation, culture-based-regeneration, culture-led-regeneration, creative-placemaking, public-art, artwashing, cultural-gentrification, place-identity, urban-commons, and cultural-infrastructure headwords (`문화 행사`, `문화 축제`, `축제화`, `행사 경제`, `문화 공간`, `공공 공간 활성화`, `문화 기반 재생`, `문화 주도 재생`, `창의적 장소 만들기`, `공공 예술`, `예술 세탁`, `문화 젠트리피케이션`, `장소 정체성`, `도시 공공재`, `문화 인프라`) in one 104-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `46-culture-climate-and-environmental-justice.md`
- Coverage: 15 advanced-native/contemporary-native cultural-climate-crisis, climate-culture, environmental-humanities, ecological-culture, cultural-sustainability, climate-justice, environmental-justice, heritage-climate-risk, climate-adaptive-culture, ecological-transition, degrowth-culture, sustainable-festival, low-carbon-culture, environmental-communication, and climate-narrative headwords (`문화 기후위기`, `기후 문화`, `환경 인문학`, `생태 문화`, `문화적 지속가능성`, `기후 정의`, `환경 정의`, `문화유산 기후위험`, `기후 적응 문화`, `생태 전환`, `탈성장 문화`, `지속가능한 축제`, `저탄소 문화`, `환경 커뮤니케이션`, `기후 서사`) in one 109-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `47-science-communication-and-public-trust.md`
- Coverage: 15 advanced-native/contemporary-native science-popularization, citizen-science, science-literacy, research-reproducibility, uncertainty-communication, risk-communication, research-data-sharing, peer-review, research-misconduct, science-policy, evidence-based-policy, scientific-advice, public-research, science-distrust, and trust-in-science headwords (`과학 대중화`, `시민 과학`, `과학 리터러시`, `연구 재현성`, `불확실성 소통`, `위험 소통`, `연구 데이터 공개`, `동료평가`, `연구 부정행위`, `과학 정책`, `증거 기반 정책`, `과학 자문`, `공공 연구`, `과학 불신`, `과학 신뢰`) in one 115-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `48-health-information-and-public-health-trust.md`
- Coverage: 15 advanced-native/contemporary-native health-information, medical-information, health-literacy, medical-uncertainty, clinical-evidence, level-of-evidence, patient-reported-outcome, medical-misinformation, health-disinformation, prevention-communication, vaccine-hesitancy, public-health-trust, health-equity, medical-decision-making, and health-information-gap headwords (`건강 정보`, `의료 정보`, `건강 문해력`, `의료 불확실성`, `임상 근거`, `근거 수준`, `환자 보고 결과`, `의료 오정보`, `건강 허위정보`, `예방 커뮤니케이션`, `백신 주저`, `공중보건 신뢰`, `건강 형평성`, `의료 의사결정`, `건강 정보 격차`) in one 111-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `49-health-data-and-digital-medicine.md`
- Coverage: 15 advanced-native health-data, electronic-health-record, medical-data-sovereignty, health-data-sharing, medical-data-interoperability, telemedicine, medical-AI, algorithmic-medicine, clinical-decision-support, patient-data-rights, medical-personal-information, medical-automation, digital-healthcare, health-data-rights, and medical-data-governance headwords (`건강 데이터`, `전자건강기록`, `의료 데이터 주권`, `건강 데이터 공유`, `의료 데이터 상호운용성`, `원격 의료`, `의료 인공지능`, `알고리즘 의료`, `임상 의사결정 지원`, `환자 데이터 권리`, `의료 개인정보`, `의료 자동화`, `디지털 헬스케어`, `건강 데이터 권리`, `의료 데이터 거버넌스`) in one 116-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `50-genomics-bioethics-and-reproductive-justice.md`
- Coverage: 15 advanced-native genetic-information, genomic-medicine, medical-ethics, research-consent, biosignal-data, gene-therapy, reproductive-rights, reproductive-justice, clinical-ethics, patient-autonomy, medical-discrimination, biopolitics, genetic-counseling, genetic-privacy, and biotechnology-ethics headwords (`유전 정보`, `유전체 의학`, `의료 윤리`, `연구 동의`, `생체 데이터`, `유전자 치료`, `생식 권리`, `재생산 정의`, `임상 윤리`, `환자 자율성`, `의료 차별`, `생명정치`, `유전 상담`, `유전자 프라이버시`, `생명공학 윤리`) in one 113-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `51-care-economy-aging-and-end-of-life-rights.md`
- Coverage: 15 advanced-native care-economy, care-labor, long-term-care, elder-care, aging-society, healthy-life-expectancy, end-of-life-care, life-sustaining-treatment, hospice-care, care-community, family-caregiving, care-technology, age-friendly, older-persons-rights, and care-infrastructure headwords (`돌봄 경제`, `돌봄 노동`, `장기요양`, `노인 돌봄`, `고령화 사회`, `건강 수명`, `생애 말기 돌봄`, `연명의료`, `호스피스 돌봄`, `돌봄 공동체`, `가족 돌봄`, `돌봄 기술`, `고령 친화`, `노인 권리`, `돌봄 인프라`) in one 112-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `52-disability-rights-and-inclusive-access.md`
- Coverage: 15 advanced-native disability-culture, disability-rights, disability-arts, accessibility-rights, assistive-technology, reasonable-accommodation, universal-design, sensory-friendly, plain-language-information, sign-language-interpretation, audio-description, disability-led, accessibility-design, independent-living, and disability-equality headwords (`장애 문화`, `장애 권리`, `장애 예술`, `접근성 권리`, `보조공학`, `합리적 편의`, `유니버설 디자인`, `감각 친화`, `쉬운 정보`, `수어 통역`, `화면 해설`, `장애인 당사자성`, `접근성 디자인`, `장애인 자립`, `장애 평등`) in one 106-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `53-language-justice-and-multilingual-access.md`
- Coverage: 15 advanced-native language-justice, multilingual-service, interpreting-rights, translation-accessibility, linguistic-minority, language-barrier, plain-Korean, migrants-language-rights, public-interpreting, linguistic-marginalization, multilingual-information, linguistic-inclusion, right-to-language-justice, multilingual-public-services, and interpreting-accessibility headwords (`언어 정의`, `다언어 서비스`, `통역 권리`, `번역 접근성`, `언어 소수자`, `언어 장벽`, `쉬운 한국어`, `이주민 언어권`, `공공 통역`, `언어 소외`, `다언어 정보`, `언어 포용`, `언어 정의권`, `다언어 공공서비스`, `통역 접근성`) in one 109-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `54-language-technology-and-digital-language-rights.md`
- Coverage: 15 advanced-native speech-technology, speech-recognition, automatic-captioning, machine-translation, language-data, language-model, linguistic-sovereignty, low-resource-language, speech-data, linguistic-bias, translation-bias, multilingual-AI, language-resources, digital-language-rights, and language-technology headwords (`음성 기술`, `음성 인식`, `자동 자막`, `기계 번역`, `언어 데이터`, `언어 모델`, `언어 주권`, `저자원 언어`, `음성 데이터`, `언어 편향`, `번역 편향`, `다언어 AI`, `언어 자원`, `디지털 언어권`, `언어 기술`) in one 112-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `55-language-labor-and-automation.md`
- Coverage: 16 advanced-native/contemporary-native language-labor, annotation-labor, translation-labor, platform-translation, machine-translation-post-editing, language-worker, digital-interpreting, freelance-translator, translation-quality, language-data-labor, creative-assistance, automation-displacement, technological-unemployment, language-industry, translation-platform, and language-labor-rights headwords (`언어 노동`, `주석 노동`, `번역 노동`, `플랫폼 번역`, `기계 번역 후편집`, `언어 노동자`, `디지털 통역`, `프리랜서 번역가`, `번역 품질`, `언어 데이터 노동`, `창작 보조`, `자동화 대체`, `기술 실업`, `언어 산업`, `번역 플랫폼`, `언어 노동권`) in one 115-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `56-multilingual-moderation-and-online-safety.md`
- Coverage: 17 advanced-native/contemporary-native linguistic-safety, multilingual-moderation, automated-translation-censorship, online-hate-expression, verbal-violence, trust-and-safety, platform-reporting, user-protection, freedom-of-expression-and-safety, language-surveillance, language-filter, harmful-speech, online-harassment, digital-hate, hate-speech, content-review, and platform-safety headwords (`언어 안전`, `다언어 모더레이션`, `자동 번역 검열`, `온라인 혐오표현`, `언어 폭력`, `신뢰와 안전`, `플랫폼 신고`, `사용자 보호`, `표현의 자유와 안전`, `언어 감시`, `언어 필터`, `위험한 발화`, `온라인 괴롭힘`, `디지털 혐오`, `혐오 발화`, `콘텐츠 심사`, `플랫폼 안전`) in one 115-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `57-algorithmic-transparency-and-ranking-accountability.md`
- Coverage: 15 advanced-native algorithmic-transparency, explainability, recommender-system-audit, content-ranking, exposure-inequality, search-bias, data-access-rights, platform-audit, regulatory-reporting, ranking-manipulation, algorithmic-accountability, user-notification, recommendation-bias, ranking-transparency, and algorithm-disclosure headwords (`알고리즘 투명성`, `설명 가능성`, `추천 시스템 감사`, `콘텐츠 순위`, `노출 불평등`, `검색 편향`, `데이터 접근권`, `플랫폼 감사`, `규제 보고`, `순위 조작`, `알고리즘 책임`, `이용자 통지`, `추천 편향`, `순위 투명성`, `알고리즘 공개`) in one 111-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `58-platform-power-and-digital-competition.md`
- Coverage: 15 advanced-native platform-market-power, market-concentration, network-effects, lock-in-effect, switching-cost, multisided-market, self-preferencing, competitive-neutrality, fair-competition, digital-monopoly, platform-rules, economic-dependence, advertising-market-concentration, platform-competition, and market-entry-barrier headwords (`플랫폼 시장지배력`, `시장 집중도`, `네트워크 효과`, `잠금 효과`, `전환 비용`, `다면시장`, `자사우대`, `경쟁 중립성`, `공정 경쟁`, `디지털 독점`, `플랫폼 규칙`, `경제적 의존`, `광고 시장 집중`, `플랫폼 경쟁`, `시장 진입 장벽`) in one 105-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `59-digital-consumer-rights-and-subscription-economy.md`
- Coverage: 15 advanced-native platform-user-rights, consumer-data, personalized-pricing, dark-pattern, consent-fatigue, subscription-cancellation, consumer-switching-rights, algorithmic-pricing, transaction-transparency, consumer-protection, digital-consumer-rights, data-retention, contract-fairness, automatic-renewal, and subscription-dependence headwords (`플랫폼 이용자권`, `소비자 데이터`, `개인화 가격`, `다크 패턴`, `동의 피로`, `구독 해지`, `소비자 전환권`, `알고리즘 가격`, `거래 투명성`, `소비자 보호`, `디지털 소비자권`, `데이터 보유`, `계약 공정성`, `자동 갱신`, `구독 종속`) in one 106-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `60-fintech-and-digital-financial-inclusion.md`
- Coverage: 15 advanced-native/contemporary-native fintech-platform, digital-payment, mobile-payment, credit-scoring-algorithm, alternative-credit, financial-data, financial-consumer-protection, digital-financial-exclusion, payment-fee, financial-automation, financial-fraud, financial-data-rights, financial-accessibility, buy-now-pay-later, and financial-platform headwords (`핀테크 플랫폼`, `디지털 결제`, `모바일 결제`, `신용 평가 알고리즘`, `대안 신용`, `금융 데이터`, `금융 소비자 보호`, `디지털 금융 소외`, `결제 수수료`, `금융 자동화`, `금융 사기`, `금융 데이터 권리`, `금융 접근성`, `후불결제`, `금융 플랫폼`) in one 116-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `61-debt-justice-and-borrower-protection.md`
- Coverage: 15 advanced-native/contemporary-native debt-vulnerability, household-debt, over-lending, financial-exploitation, debt-adjustment, credit-recovery, personal-bankruptcy, financial-counseling, debt-stigma, debtor-rights, interest-burden, interest-rate-transparency, loan-accessibility, financial-education, and loan-default headwords (`채무 취약성`, `가계 부채`, `과잉 대출`, `금융 착취`, `채무 조정`, `신용 회복`, `개인 파산`, `금융 상담`, `부채 낙인`, `채무자 권리`, `금리 부담`, `이자율 투명성`, `대출 접근성`, `금융 교육`, `채무 불이행`) in one 110-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `62-financial-resilience-and-insurance-safety-net.md`
- Coverage: 15 advanced-native financial-resilience, liquidity-buffer, income-shock, asset-buffer, risk-diversification, insurance-gap, coverage-gap, insurance-premium-burden, insurance-claim, claims-adjustment, adverse-selection, policyholder-protection, disaster-insurance, public-guarantee, and asset-building headwords (`금융 회복력`, `유동성 완충`, `소득 충격`, `자산 완충`, `위험 분산`, `보험 사각지대`, `보장 공백`, `보험료 부담`, `보험금 청구`, `손해사정`, `역선택`, `보험 계약자 보호`, `재난 보험`, `공적 보장`, `자산 형성`) in one 115-eojeol `target_set` passage; prose is original and combines `news_formal` with `native_spoken` source lanes.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `63-pension-security-and-retirement-income-equity.md`
- Coverage: 15 advanced-native retirement-income-security, pension-coverage-gap, pension-credit, contribution-gap, occupational-pension, pension-entitlement, longevity-risk, old-age-poverty, intergenerational-equity, caregiving-credit, pension-reform, replacement-rate, pension-finance, social-insurance-contribution, and retirement-income-inequality headwords (`노후소득 보장`, `연금 사각지대`, `연금 크레딧`, `가입 기간 단절`, `퇴직연금`, `연금 수급권`, `장수 위험`, `노후 빈곤`, `세대 간 형평성`, `돌봄 크레딧`, `연금 개혁`, `소득 대체율`, `연금 재정`, `사회보험료`, `노후소득 격차`) in one 117-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

- Topic: `high-register-media-and-cultural-criticism`
- File: `64-housing-wealth-and-old-age-security.md`
- Coverage: 15 advanced-native housing-cost-overburden, housing-insecurity, housing-wealth-gap, intergenerational-asset-transfer, inheritance-inequality, older-adults-without-homeownership, housing-pension, reverse-mortgage, senior-housing, rent-indexation, residential-mobility, intergenerational-asset-turnover, inheritance-concentration, housing-poverty, and intergenerational-wealth-gap headwords (`주거비 과부담`, `주거 불안`, `주택 자산 격차`, `세대 자산 이전`, `상속 격차`, `무주택 노인`, `주거 연금`, `역모기지`, `고령자 주거`, `임대료 연동`, `주거 이동성`, `자산 세대교체`, `상속 자산 집중`, `주거 빈곤`, `세대 간 자산 격차`) in one 117-eojeol `target_set` passage; prose is original and uses the `news_formal` source lane.
- Validation: lexical-basis metadata, source-lane context, entry headings, passage target coverage, hidden target metadata, topic README link, folder-local numbering, Korean-only core meanings, target-heading uniqueness check, and Korean-only example check passed; `git diff --check` passed.

## Resume rule

Continue with the next coherent topic rather than following source-file order. Prefer the candidate topics recorded in `korean/vocab/korean-vietnamese-wordbook.md`, and check existing headword+sense coverage before adding a word.

## Next candidates

Potential next topics include high-register media and cultural criticism, another current public-policy topic, or a specialized science/economy reporting lane with verified native usage. Choose the first topic that can form a coherent semantic network; do not force unrelated words to reach 15.

## 2026-10-02 goal continuation checkpoint

- Goal: expand the Korean library toward approximately 5,000 valid advanced-native/C2-equivalent or contemporary-native-hot learning items, with explicit `news_formal`, `native_spoken`, and `slang_online` coverage.
- Topic: `slang-and-pragmatic-spoken-korean`
- File: `03-teasing-and-playful-online-reactions.md`
- Coverage: 16 contemporary-native-hot/advanced-native targets for playful teasing, indirect jabs, fandom reactions, and online slang (`긁다`, `약 올리다`, `뇌절하다`, `억텐`, `웃프다`, `주접 떨다`, `관종`, `안물안궁`, `폼 미쳤다`, `돌려까다`, `과몰입하다`, `노답`, `병맛`, `찐텐`, `훈수 두다`, `이왜진`).
- Passage coverage: two coherent passages with 8 targets each; each target appears in a natural Korean inflected form and has a Vietnamese translation.
- Validation: 16 entry metadata comments, Korean-only learner-facing headings, two `target_set` comments, topic README link, duplicate-heading scan, and `git diff --check` passed. The corpus now has 2,515 structured target entries by heading audit before any later deduplication review.
- Resume: continue from the next coherent news-formal or native-spoken/slang topic; do not regenerate this file unless a concrete audit defect is found.

## 2026-10-02 labor-governance checkpoint

- Topic: `advanced-economic-and-labor-reporting`
- File: `08-labor-governance-and-social-dialogue.md`
- Coverage: 15 new advanced-native news/formal targets for social dialogue, tripartite consultation, collective bargaining, labor disputes, essential services, union structure, workplace rules, and fundamental labor rights (`사회적 대화`, `노사정 협의`, `단체교섭`, `교섭 결렬`, `노동쟁의`, `쟁의행위`, `필수유지업무`, `파업권`, `부당노동행위`, `노조 조직률`, `산별노조`, `복수노조`, `교섭창구 단일화`, `취업규칙`, `노동기본권`).
- Passage coverage: one coherent 98-eojeol Korean news/policy passage with all 15 targets in one `target_set`, plus Vietnamese translation.
- Validation: 15 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,530 structured entries, 0 duplicates), README link, current-law/news usage cross-check, and `git diff --check` passed.
- Resume: continue with a distinct contemporary news or native-spoken topic; preserve this file as the local `08` checkpoint.

## 2026-10-02 interpersonal-signals checkpoint

- Topic: `advanced-interpersonal-nuance`
- File: `03-directness-and-relational-signals.md`
- Coverage: 15 contemporary-native-hot/advanced-native targets for direct remarks, indirect boundaries, social exhaustion, flirting, secondhand embarrassment, group dynamics, and public impression (`돌직구`, `뼈를 때리다`, `시치미 떼다`, `내숭 떨다`, `립서비스`, `선 긋다`, `눈치 주다`, `기 빨리다`, `플러팅`, `공감성 수치`, `기싸움`, `친목질`, `취향 저격`, `사바사`, `비호감`).
- Passage coverage: one coherent 108-eojeol Korean conversation/media passage with all 15 targets in one `target_set`, plus Vietnamese translation.
- Validation: 15 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,545 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with another distinct news-formal or native-spoken/slang topic; preserve this file as local `03` checkpoint.

## 2026-10-02 regulatory-coherence checkpoint

- Topic: `advanced-public-administration-and-regulation`
- File: `06-regulatory-coherence-and-policy-coordination.md`
- Coverage: 14 advanced-native news/formal targets for regulatory gaps, coherence, equity, proportionality, flexibility, compliance burden, uncertainty, and cross-government policy coordination (`규제 공백`, `규제 정합성`, `규제 형평성`, `규제 비례성`, `규제 유연화`, `규제 완화`, `규제 비용`, `규제 준수 비용`, `규제 불확실성`, `정책 조정`, `부처 간 조정`, `민관 협력`, `시민참여형 행정`, `정책 피드백`).
- Passage coverage: one coherent 98-eojeol Korean policy passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,559 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a separate current-affairs or native-spoken/slang topic; preserve this file as local `06` checkpoint.

## 2026-10-02 social-safety-net checkpoint

- Topic: `advanced-economic-and-labor-reporting`
- File: `09-social-safety-net-and-reentry.md`
- Coverage: 14 advanced-native/news targets for employment safety nets, job-search discouragement, involuntary part-time work, vulnerable employment, labor-market re-entry, shocks, resilience, transition support, career interruption, and employment barriers (`고용안전망`, `고용서비스`, `구직 단념자`, `비자발적 시간제`, `워킹푸어`, `취업 취약계층`, `일자리 미스매치`, `노동시장 재진입`, `고용 충격`, `고용 회복력`, `전직 지원`, `전환 수당`, `경력 단절`, `취업 장벽`).
- Passage coverage: one coherent 94-eojeol Korean labor-policy passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,573 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `09` checkpoint.

## 2026-10-02 transitional-justice checkpoint

- Topic: `high-register-law-and-diplomacy`
- File: `06-transitional-justice-and-humanitarian-monitoring.md`
- Coverage: 14 advanced-native news/formal targets for transitional justice, truth-seeking, victim reparation, accountability, international fact-finding, humanitarian corridors, civilian evacuation, ceasefire monitoring, mediation, and international guarantees (`전환기 정의`, `진실 규명`, `피해자 배상`, `배상 명령`, `책임성 메커니즘`, `국제 조사단`, `독립 조사`, `인도적 통로`, `민간인 대피`, `보호 의무`, `휴전 감시`, `분쟁 당사자`, `중재 절차`, `국제적 보장`).
- Passage coverage: one coherent 81-eojeol Korean conflict-policy passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,587 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `06` checkpoint.

## 2026-10-02 organizational-voice checkpoint

- Topic: `advanced-workplace-and-institutional-discourse`
- File: `04-organizational-voice-and-coordination.md`
- Coverage: 14 advanced-native/contemporary-workplace targets for silos, delegation, accountability, performance systems, psychological safety, voice, consensus, decision delay, leadership transition, change fatigue, and organizational inertia (`조직 사일로`, `권한 위임`, `책임 소재`, `성과 연동`, `성과주의`, `심리적 안전`, `발언권`, `이견 조정`, `합의 형성`, `의사결정 지연`, `리더십 공백`, `승계 계획`, `변화 피로`, `조직 관성`).
- Passage coverage: one coherent 91-eojeol Korean workplace passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,601 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `04` checkpoint.

## 2026-10-02 fandom-slang checkpoint

- Topic: `slang-and-pragmatic-spoken-korean`
- File: `04-fandom-and-current-online-slang.md`
- Coverage: 14 contemporary-native-hot targets for current fandom and online usage: aspirational style, optimistic reframing, check-in slang, fandom relationships, favorite objects, entering/leaving fandom, fan sentiment, harmless vibes, exaggerated praise, perseverance memes, playful suspicion, and legendary moments (`추구미`, `럭키비키`, `오운완`, `인생네컷`, `덕메`, `최애`, `입덕`, `탈덕`, `팬심`, `무해하다`, `갓벽하다`, `중꺾마`, `킹리적 갓심`, `레전드`).
- Passage coverage: one coherent 96-eojeol Korean fandom/online passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,615 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with another distinct news-formal or native-spoken/slang topic; preserve this file as local `04` checkpoint.

## 2026-10-02 algorithmic-accountability checkpoint

- Topic: `advanced-digital-rights-and-platform-governance`
- File: `03-algorithmic-accountability-and-user-control.md`
- Coverage: 12 advanced-native/news targets for data portability, explainability, algorithmic fairness, audit trails, human oversight, risk tiers, system safety, platform accountability, privacy defaults, digital vulnerability/autonomy, and data accessibility (`데이터 휴대권`, `알고리즘 설명가능성`, `알고리즘 공정성`, `감사 추적성`, `인간 감독`, `위험 분류`, `시스템 안전성`, `플랫폼 책임성`, `프라이버시 기본설정`, `디지털 취약성`, `디지털 자율성`, `데이터 접근성`).
- Passage coverage: one coherent 101-eojeol Korean digital-policy passage with all 12 targets in one `target_set`, plus Vietnamese translation.
- Validation: 12 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,627 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `03` checkpoint.

## 2026-10-02 information-integrity checkpoint

- Topic: `high-register-media-and-cultural-criticism`
- File: `65-information-integrity-and-media-verification.md`
- Coverage: 10 advanced-native/contemporary-news targets for content provenance labels, information integrity, misinformation spread, fact-checking, source tracing, manipulated video, published corrections, deepfake labels, information laundering, and contextualized reporting (`콘텐츠 출처 표기`, `정보 무결성`, `허위정보 확산`, `사실 검증`, `출처 추적`, `조작 영상`, `정정 보도`, `딥페이크 표기`, `정보 세탁`, `맥락화 보도`).
- Passage coverage: one coherent 100-eojeol Korean media-verification passage with all 10 targets in one `target_set`, plus Vietnamese translation.
- Validation: 10 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,715 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `65` checkpoint.

## 2026-10-02 evidence-to-practice checkpoint

- Topic: `advanced-science-and-technology-reporting`
- File: `07-evidence-to-practice-and-research-use.md`
- Coverage: 11 advanced-native/news-formal targets for real-world evidence, evidence synthesis, study registration, clinical endpoints, real-world clinical data, participant representativeness, scientific consensus, policy translation, research data management, data deposition, and research-results disclosure (`실사용근거`, `근거 합성`, `연구 등록`, `임상 종점`, `실제진료데이터`, `연구 참여자 대표성`, `과학적 합의`, `정책 전환`, `연구 데이터 관리`, `데이터 기탁`, `연구 결과 공개`).
- Passage coverage: one coherent 99-eojeol Korean evidence-use passage with all 11 targets in one `target_set`, plus Vietnamese translation.
- Validation: 11 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,726 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `07` checkpoint.

## 2026-10-02 everyday-reactions checkpoint

- Topic: `slang-and-pragmatic-spoken-korean`
- File: `05-everyday-reactions-and-social-slang.md`
- Coverage: 12 contemporary-native-hot native-spoken/slang targets for reality-check reactions, reading the room, condescending lecturing, playful dismissal, strong irritation, cutting ties, creator calls to action, taste matching, location requests, dinner recommendations, unsponsored purchases, and disciplined-lifestyle identity (`현타 오다`, `낄끼빠빠`, `꼰대질`, `어쩔티비`, `빡치다`, `손절하다`, `좋댓구알`, `완내스`, `주불`, `저메추`, `내돈내산`, `갓생러`).
- Passage coverage: one coherent 98-eojeol Korean everyday-chat passage with all 12 targets in one `target_set`, plus Vietnamese translation.
- Validation: 12 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,693 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `05` checkpoint.

## 2026-10-02 housing-affordability checkpoint

- Topic: `advanced-urban-and-housing-policy`
- File: `03-housing-affordability-and-urban-equity.md`
- Coverage: 12 advanced-native/news-formal targets for housing-cost burden, public-rental waitlists, residential displacement, vacant-home reuse, 15-minute cities, land-lease housing, rental-to-ownership conversion, rent caps, housing vulnerability, housing-rights protection, land-value capture, and developer public contributions (`주거비 부담률`, `공공임대 대기`, `둥지 내몰림`, `빈집 활용`, `15분 도시`, `토지임대부`, `분양전환`, `임대료 상한`, `주거 취약성`, `주거권 보장`, `개발이익 환수`, `공공기여`).
- Passage coverage: one coherent 98-eojeol Korean housing-policy passage with all 12 targets in one `target_set`, plus Vietnamese translation.
- Validation: 12 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,705 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `03` checkpoint.

## 2026-10-02 regional-medical-access checkpoint

- Topic: `advanced-public-health-and-science-policy`
- File: `07-regional-medical-access-and-resilience.md`
- Coverage: 14 advanced-native/news targets for access disparities, regional-care breakdown, delivery-system reform, public value, emergency demand, workforce drain, essential-care compensation, regionally complete care, underserved areas, cost burden, patient-safety culture, dispute mediation, public-care expansion, and resource maldistribution (`의료 접근 격차`, `지역 의료 붕괴`, `의료전달체계 개편`, `의료 공공성`, `응급의료 수요`, `의료 인력 유출`, `필수의료 보상`, `지역 완결형 의료`, `의료 취약지역`, `의료비 부담률`, `환자 안전 문화`, `의료분쟁 조정`, `공공의료 확충`, `의료 자원 편중`).
- Passage coverage: one coherent 79-eojeol Korean public-health policy passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,641 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `07` checkpoint.

## 2026-10-02 financial-stability checkpoint

- Topic: `advanced-finance-and-consumer-protection`
- File: `05-financial-stability-and-borrower-risk.md`
- Coverage: 14 advanced-native/news targets for loan deterioration, repayment capacity, credit crunch, lending regulation, interest burden, financial/asset inequality, safety nets, depositor protection, deposit-insurance limits, systemic risk, soft landing, household financial health, and financial soundness (`대출 부실화`, `채무 상환능력`, `신용 경색`, `대출 규제`, `이자 부담`, `금융 불평등`, `자산 양극화`, `금융 안전망`, `예금자 보호`, `예금보험 한도`, `시스템 리스크`, `대출 연착륙`, `가계 재무건전성`, `금융 건전성`).
- Passage coverage: one coherent 75-eojeol Korean financial-policy passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,655 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `05` checkpoint.

## 2026-10-02 migration-belonging checkpoint

- Topic: `advanced-cultural-identity-and-migration`
- File: `03-migration-belonging-and-citizenship.md`
- Coverage: 11 advanced-native/news-formal targets for multicultural coexistence, migrant rights, refugee protection, settlement support, migrant inclusion, citizenship access, transnational families, remittance flows, cultural boundaries, racialization, and discrimination against migrants (`다문화 공존`, `이주민 권리`, `난민 보호`, `정착 지원`, `이주민 포용`, `시민권 접근`, `초국적 가족`, `송금 흐름`, `문화적 경계`, `인종화`, `이주민 차별`).
- Passage coverage: one coherent 86-eojeol Korean migration and citizenship passage with all 11 targets in one `target_set`, plus Vietnamese translation.
- Validation: 11 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,681 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `03` checkpoint.

## 2026-10-02 climate-accounting checkpoint

- Topic: `advanced-climate-and-environmental-governance`
- File: `05-climate-accounting-and-environmental-implementation.md`
- Coverage: 14 advanced-native/news targets for carbon sinks, climate neutrality, climate disasters and mobility, ecosystem resilience, natural-capital accounting, biodiversity disclosure, environmental footprints, plastics circularity, waste reduction, circular design, climate budgeting, green procurement, and environmental externalities (`탄소 흡수원`, `기후 중립`, `기후 재난`, `기후 이주`, `생태계 복원력`, `자연 자본 회계`, `생물다양성 공시`, `환경 발자국`, `플라스틱 순환`, `폐기물 감량`, `순환 설계`, `기후 예산제`, `녹색 공공조달`, `환경 외부성`).
- Passage coverage: one coherent 80-eojeol Korean climate-policy passage with all 14 targets in one `target_set`, plus Vietnamese translation.
- Validation: 14 entry metadata comments, all required entry sections, Korean-only learner-facing headings, exact global heading uniqueness (2,669 structured entries, 0 duplicates), README link, and `git diff --check` passed.
- Resume: continue with a distinct current-affairs or native-spoken/slang topic; preserve this file as local `05` checkpoint.
