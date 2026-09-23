# Korean Vocabulary Expansion State

## Corpus baseline

- Existing flat files under `korean/vocab/topics/` are legacy lessons and remain in place.
- New lessons use topic subfolders with local file numbering, as specified in `korean/prompt/vocabulary_goal/GOAL.md`.
- Source PDFs and dictionaries are reference material only; lesson explanations and passages are original.

## Completed checkpoint

- Topic: `relationships-and-emotional-recovery`
- Files: `01-isolation-and-recovery.md`, `02-bonds-and-relationship-tension.md`
- Coverage: 30 new headwords in two `target_set` passages of 15 words each.
- Validation: entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

## Resume rule

Continue with the next coherent topic rather than following source-file order. Prefer the candidate topics recorded in `korean/vocab/korean-vietnamese-wordbook.md`, and check existing headword+sense coverage before adding a word.

## Next candidates

Potential next topics include appearance and folk belief (`관상`, `무당`), public affairs and policy, work and contracts, or physical sensation. Choose the first topic that can form a coherent semantic network; do not force unrelated words to reach 15.
