# English vocabulary autonomous agent

## Mission

Expand the reviewed CEFR vocabulary track from A1 through C2+ into a large, coherent learning corpus. The working target is **20,000 unique learning items**, with **10,000 items as the first milestone**. These are planning targets, not official CEFR word counts.

The corpus must remain useful to a learner, not become a raw word dump. Quality, deduplication, natural contemporary American English, and consistency with the approved lesson format take priority over mechanically reaching a number.

## Canonical instructions

Always read and follow:

- `/prompt/COMMON_PROMPT.md`
- `/prompt/VOCAB_PROMPT.md`
- `/english/lessons/vocabulary/cefr/README.md`
- `/english/lessons/vocabulary/cefr/CODEX_STATE.md`

Before generating a new lesson, inspect the latest lesson in the same level and at least one approved pilot lesson. The current A1, B2, and C2 pilots are approved format references and must not be reformatted casually.

## Scope and level plan

Generate in this order unless the state file says otherwise:

`A1 → A2 → B1 → B2 → C1 → C2 → C2+`

Use these only as soft planning targets for the 20,000-item corpus:

- A1: about 1,000
- A2: about 1,500
- B1: about 2,500
- B2: about 3,500
- C1: about 4,500
- C2: about 4,000
- C2+: about 3,000

Do not distort CEFR placement just to satisfy a quota. Rebalance when linguistic quality requires it.

## Lesson batching

The canonical lesson size is about **15 words/phrases per file**, grouped by a natural topic, situation, semantic network, or mini-story. Keep the approved entry order and the review passage convention from `cefr/README.md`.

Work continuously in batches of **3 lessons / about 45 learning items** when practical. After each batch:

1. review every entry against the prompt and canonical format;
2. check for duplicate headword+sense coverage;
3. check file naming and sequential lesson numbering;
4. update `cefr/CODEX_STATE.md`;
5. commit the batch as one durable checkpoint;
6. immediately continue with the next batch while the runtime allows.

If a session is likely to end before three lessons are complete, checkpoint any fully completed lesson instead of leaving untracked finished work.

## Coverage and deduplication

A learning item is a headword, phrasal verb, fixed expression, or a meaning/use that deserves its own teaching entry. The same surface word may reappear at a higher level only when the later entry teaches a materially different sense, register, collocation system, figurative use, or discourse function. Do not duplicate the same ordinary meaning merely to fill a level.

Before choosing a new batch, scan existing CEFR lesson headings and nearby content. Prefer high-frequency and high-utility vocabulary first within each level, then broaden into less frequent but still real contemporary usage. C2+ may include rare, literary, technical-adjacent, rhetorical, journalistic, or highly nuanced vocabulary that educated native speakers still encounter.

## Source policy

`ielts-vocabulary-22000-clean.md` is only a **candidate pool/reference source**, not a template. It contains legacy material and must not be copied mechanically.

Do not copy definitions, example sentences, translations, or explanatory prose from that file or from proprietary dictionaries/word lists. Write original explanations and original examples consistent with contemporary General American English. Use external references only to verify usage, sense, pronunciation, register, or CEFR plausibility when needed.

When the legacy source contains outdated, unnatural, duplicated, malformed, or overly exam-specific material, skip or modernize the candidate instead of preserving it blindly.

## Quality gate for every entry

An entry must be understandable without opening another dictionary. Preserve the approved order: headword + American IPA heading; part of speech and sentence position; English-only core meaning; Vietnamese-only core meaning and mental image; then pronunciation/grammar/collocation/American usage/register/linking/word family/common mistakes/examples as relevant; Korean linking last.

Any teaching phrase or technical label in English outside the English-only core definition must be explained in Vietnamese immediately when it may block comprehension. Examples stay natural and are followed by Vietnamese translations.

Do not inflate easy A1/A2 words with unnecessary academic detail. Do not oversimplify B2-C2+ nuance. Depth should scale with the word.

## Continuous-run behavior

Once started on the vocabulary expansion task, do not stop after one lesson or one batch merely to summarize progress. Continue selecting, writing, validating, checkpointing, and committing the next batch until one of these conditions occurs:

- the 20,000-item target is reached with acceptable quality;
- Codex/runtime usage limits prevent another turn or continuation;
- an unrecoverable Git conflict or repository failure occurs;
- a decision genuinely requires the user.

Usage limits do not require special handling inside the content. The repository checkpoint is the recovery mechanism. On the next run, recalculate the current repository state, read `CODEX_STATE.md`, and resume from the first unfinished lesson.

Do not restart from A1 lesson 01. Do not regenerate completed lessons unless validation finds a concrete defect.