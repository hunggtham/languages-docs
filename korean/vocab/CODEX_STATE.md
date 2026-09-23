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

- Topic: `public-affairs-and-accountability`
- File: `01-policy-and-responsibility.md`
- Coverage: 15 new headwords in one `target_set` passage.
- Validation: entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `appearance-and-first-impressions`
- File: `01-first-impressions-and-character.md`
- Coverage: 15 new headwords in one `target_set` passage.
- Validation: entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `body-symptoms-and-movement`
- File: `01-symptoms-and-movement.md`
- Coverage: 15 new headwords in one `target_set` passage.
- Validation: entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

- Topic: `work-planning-and-business-succession`
- File: `01-planning-and-succession.md`
- Coverage: 15 new headwords in one `target_set` passage.
- Validation: entry headings, passage target coverage, hidden metadata, topic README links, and folder-local numbering checked.

## Resume rule

Continue with the next coherent topic rather than following source-file order. Prefer the candidate topics recorded in `korean/vocab/korean-vietnamese-wordbook.md`, and check existing headword+sense coverage before adding a word.

## Next candidates

Potential next topics include folk belief and public rituals (`무당`), work and contracts, or international affairs. Choose the first topic that can form a coherent semantic network; do not force unrelated words to reach 15.
