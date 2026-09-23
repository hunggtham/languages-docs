# English CEFR Vocabulary Expansion Goal

Use this file as the durable goal prompt for the English vocabulary corpus. Combine it with `COMMON_PROMPT.md`, `VOCAB_PROMPT.md`, the vocabulary `AGENTS.md`, and the current `cefr/CODEX_STATE.md`.

## Objective

Continuously expand the English CEFR vocabulary corpus in this order:

`A1 → A2 → B1 → B2 → C1 → C2 → C2+`

Continue until the repository contains **20,000 valid learning items**, Codex/runtime limits prevent further execution, or a genuine blocker requires human input. Do not stop after a CEFR level, lesson, batch, or checkpoint.

Quality, useful learner coverage, natural contemporary American English, CEFR suitability, and deduplication take priority over mechanical quotas.

## Topic and file organization

- Choose a coherent topic, situation, semantic network, or mini-story before selecting items.
- Prefer one well-grouped file over several small files. Merge related legacy lessons when this reduces file sprawl without losing approved content or context.
- Store lessons under the CEFR level and a topic folder, such as `a2/communication/` or `a2/home/`.
- Number files independently inside each topic folder. For example, `a2/communication/01-...md` and `a2/home/01-...md` are both valid.
- A new topic starts at `01`; an existing topic continues with its next local number.
- Preserve historical source coverage in file metadata and keep all README links accurate.
- Do not stage or modify unrelated repository files.

## Lesson size and review contexts

- There is no hard requirement to create exactly 15 items per file.
- New files normally contain about 15–20 learning items, chosen because the topic needs them rather than to meet a quota.
- For 15 items or fewer, write one `Review in context` passage with a Vietnamese translation.
- For 16–20 items, keep the topic in one file and write one passage covering all headwords, with a Vietnamese translation.
- For 21–29 items, keep the topic in one file and write two shorter passages such as 10+10, 11+10, or 12+10; provide a Vietnamese translation for each passage.
- If a topic exceeds 29 items, divide it into natural subtopics. Only legacy consolidation files may exceed 29 items when needed to preserve already-approved source lessons, with one labeled context per source lesson.
- Every headword must appear naturally in one of the file's review passages.

## Entry requirements

Each entry must include, in the approved repository order:

- headword and American IPA;
- part of speech and sentence position or usage;
- an English-only core meaning;
- a Vietnamese-only core meaning and mental image;
- pronunciation, grammar, collocations, register, and usage notes when useful;
- natural contemporary American English examples with Vietnamese translations;
- Korean linking last, only when it improves memory or distinction.

## Batch workflow

For every batch:

1. Read all applicable instructions, this goal file, nearby lessons, and `CODEX_STATE.md`.
2. Inspect the active level and an approved pilot lesson.
3. Scan existing headings and meanings to prevent duplicate ordinary headword+sense coverage.
4. Generate the smallest practical number of coherent topic files.
5. Validate entry format, CEFR placement, numbering, README links, duplicate coverage, and review passages.
6. Run the repository vocabulary progress and validation scripts.
7. Update the relevant README files and `cefr/CODEX_STATE.md` with accurate counts and the next folder-local file.
8. Commit only the relevant vocabulary changes as a durable checkpoint.
9. Continue automatically from the next unfinished topic or folder-local sequence.

Never mark the goal complete at A1, A2, B1, B2, C1, C2, after a restructuring, or after a batch. Completion means reaching 20,000 valid learning items.
