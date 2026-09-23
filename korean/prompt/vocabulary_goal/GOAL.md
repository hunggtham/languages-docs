# Korean Vocabulary Expansion Goal

This goal governs the creation of new Korean vocabulary lessons. Use it together with `../COMMON_PROMPT.md`, `../VOCAB_PROMPT.md`, and the specific request for the current task.

## Objective

Expand the Korean library into topic-based lessons that help learners recognize core meaning, nuance, register, collocations, and natural usage in contemporary contexts. This goal is not constrained by the number, order, or boundaries of any PDF or source file. Sources are used only to discover and cross-check words; all wording, examples, and reading passages must be newly authored.

Do not create a file merely because words appeared next to one another in a source. First choose a coherent semantic field, situation, mental model, or mini-story, then select supporting words that form a useful learning network.

## Mandatory lexical selection gate

Every new target headword must satisfy at least one of these two requirements:

1. `advanced-native / C2-equivalent`: the word expresses abstract, precise, inferential, idiomatic, literary, formal, discourse-level, or highly nuanced meaning expected in advanced native Korean usage.
2. `contemporary-native-hot`: the word is actively used by Korean native speakers in current conversation, messaging, workplace talk, online communities, media, or news.

Do not treat rarity, length, dictionary presence, or appearance in a PDF as evidence of C2-level value. Common A1–B2 words may appear as supporting language in explanations, collocations, examples, and passages, but they must not become new target headings unless the task explicitly requests foundational vocabulary.

For each new target, record hidden metadata in the entry or file:

```html
<!-- lexical_basis: advanced_native | contemporary_native_hot; register: ...; context: ... -->
```

For contemporary-native-hot items, verify that the usage is current rather than stale slang. For advanced-native items, explain the nuance, register, collocations, and contexts in which native speakers would or would not use the word. If an existing legacy item does not satisfy either basis, preserve it but label it as legacy/review rather than presenting it as new C2 coverage.

## Directory and file structure

New lessons use this structure:

```text
korean/vocab/topics/<topic-slug>/
├── README.md
├── 01-<subtopic-slug>.md
├── 02-<subtopic-slug>.md
└── ...
```

Use lowercase, stable, hyphenated names for `<topic-slug>` and `<subtopic-slug>`. Titles, headings, and learner-facing labels inside the files must remain in Korean, as required by `COMMON_PROMPT`. Each folder represents a broad topic and may contain multiple Markdown files on related subtopics. Each file should be a coherent subtopic and has no hard quota for its total number of entries. Number files locally within each topic folder, starting at `01`.

Existing flat files in `korean/vocab/topics/` are legacy content. Do not move or rewrite them merely to fit the new structure. New lessons use topic subfolders; consolidate legacy content only under a separate task, preserving links, provenance, and approved content.

## Fifteen-word grouping and reading passages

One context unit contains at most 15 target headwords. For every group of 15 words, write one short, coherent Korean paragraph with a clear situation. The final group may contain fewer than 15 words when the topic ends. This is a passage-splitting rule, not a limit on the number of entries in a file.

- A file with 15 words uses one passage.
- A file with 30 words uses two passages, each with its own `target_set`.
- A file with 32 words uses three passages in groups of `15 + 15 + 2`; do not add unrelated words merely to reach 15.
- Count target headwords, not tokens. Natural tense, honorific, particle, or sentence-ending variants count as occurrences of the corresponding headword.

Each passage should contain about 3–7 natural sentences, usually around 80–140 Korean eojeol; this is a soft guideline. The passage should let learners infer meaning from context rather than simply stringing together isolated example sentences. Place a Vietnamese translation after the Korean passage and add a brief note about variants or common confusion when useful.

Each passage must include hidden metadata for coverage checks, for example:

```html
<!-- passage_word_count: 96 Korean eojeol; target_set: 단어1, 단어2, 단어3 -->
```

Every headword in `target_set` must appear naturally in the passage. Do not turn the passage into a word list or force an unnatural form into the context.

## Entry requirements

Keep the format used by the existing Korean lessons: the title is the Korean word or phrase, `품사` appears directly below it, followed by core meaning, Vietnamese meaning, mental image and nuance, reusable collocations/chunks, sentence patterns and typical arguments, register by social relationship/topic, natural examples, `어휘 연결`, and `영어 참고`. Add pronunciation, sound changes, near-synonyms, or unusable contexts when they help learners distinguish and use the item correctly.

Prefer natural Korean from daily life, 잡담, workplaces, journalism, and contemporary discourse. If an item is rare, archaic, specialized, slang, or dictionary-correct but unnatural in ordinary contexts, state its limitation and provide a more natural native alternative.

## Creation and validation workflow

1. Read the common prompts, vocabulary prompt, the current topic README, and nearby lessons before writing.
2. Check existing headword+sense coverage. If an item is reused for review, label it as review rather than pretending it is new coverage.
3. Choose a topic folder and subtopic file, continuing the local numbering for that folder.
4. Write the entries, divide the headwords into `target_set` groups of at most 15, and create the corresponding passages.
5. Manually check that learner-facing titles/headings are in Korean, every target appears naturally, translations preserve the meaning, README links are correct, and source text was not copied.
6. Audit every new target for `lexical_basis`, current register, duplicate sense coverage, and compliance with the C2-equivalent or contemporary-native-hot gate. Demote common supporting words to prose rather than claiming them as advanced targets.
7. Once a lesson batch exists, update the topic README and `korean/vocab/CODEX_STATE.md` with the next folder/file, completed target sets, and checkpoint notes. Create the state file only when the first content batch begins.
8. Run the appropriate repository checks, inspect the diff, and commit only the batch files and related state.

This is a continuous expansion goal. One topic folder, one file, or one 15-word batch is only a checkpoint; never consider the entire goal complete after a single batch.
