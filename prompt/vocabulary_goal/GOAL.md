# English CEFR Vocabulary Expansion Goal

This is the task-specific goal prompt for the English vocabulary corpus. Read it together with `../COMMON_PROMPT.md`, `../VOCAB_PROMPT.md`, the vocabulary `AGENTS.md`, the CEFR README, and `CODEX_STATE.md`.

## Objective

Continuously expand the English CEFR vocabulary corpus in this order:

`A1 → A2 → B1 → B2 → C1 → C2 → C2+`

Continue until the repository contains **20,000 valid learning items**, Codex/runtime limits prevent further execution, or a genuine blocker requires human input. Do not stop after a CEFR level, lesson, batch, restructuring, or checkpoint.

Quality, useful learner coverage, natural contemporary American English, CEFR suitability, and deduplication take priority over mechanical counting.

## Topic-first file policy

- Choose a coherent topic, situation, semantic network, or mini-story before selecting words.
- There is no default file size and no target of 15 words per file.
- Do not add words merely to reach a number, and do not split a coherent topic merely to make smaller files.
- Prefer one well-grouped file over several small files. Merge related legacy lessons when this reduces file sprawl without losing approved content or source context.
- Store lessons under CEFR-level topic folders, such as `a2/communication/` or `a2/home/`.
- Number files independently inside each topic folder. A new topic starts at `01`; an existing topic continues with its next local number.
- Preserve historical source coverage in metadata and keep README links accurate.

## Review-context policy

- Every headword must appear naturally in one of the file's `Review in context` passages.
- When a file has 15 items or fewer, write one suitable passage with a Vietnamese translation.
- When a coherent topic has 16–20 items, keep it in one file and write one passage covering all headwords, with a Vietnamese translation.
- When a coherent topic has 21–29 items, keep it in one file and write two shorter passages such as 10+10, 11+10, or 12+10; provide a Vietnamese translation for each passage.
- If a topic naturally exceeds 29 items, divide it into meaningful subtopics rather than applying an arbitrary quota. Legacy consolidation files may exceed 29 items only when needed to preserve already-approved source lessons, with one labeled context per source lesson.

## Entry requirements

Follow the approved repository entry order:

- headword and American IPA;
- part of speech and sentence position or usage;
- English-only core meaning;
- Vietnamese explanation and mental image when required by the applicable lesson format;
- pronunciation, grammar, collocations, register, and usage notes when useful;
- natural contemporary American English examples with Vietnamese translations;
- Korean linking last, only when it improves memory or distinction.

## Batch and validation workflow

1. Read all applicable instructions, this goal file, nearby lessons, and `CODEX_STATE.md`.
2. Inspect the active level and an approved pilot lesson.
3. Scan existing headings and meanings to prevent duplicate ordinary headword+sense coverage.
4. Generate the smallest practical number of coherent topic files; batch size is topic-driven, not fixed at three files or 45 items.
5. Validate entry format, CEFR placement, folder-local numbering, README links, duplicate coverage, and review passages.
6. Run the repository vocabulary progress and validation scripts.
7. Update relevant README files and `CODEX_STATE.md` with accurate counts, the next folder-local file, and checkpoint notes.
8. Commit only the relevant vocabulary changes as a durable checkpoint.
9. Continue automatically from the next unfinished topic or folder-local sequence.

Never mark the goal complete at A1, A2, B1, B2, C1, C2, after a restructuring, or after a batch. Completion means reaching 20,000 valid learning items.
