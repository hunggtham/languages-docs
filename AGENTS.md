# Repository agent instructions

This repository is maintained as long-running learning material. Codex must preserve continuity across sessions instead of relying on chat context.

## Instruction order

Before editing anything, read the applicable files in this order:

1. this `AGENTS.md`;
2. `prompt/COMMON_PROMPT.md`;
3. the relevant specialist prompt such as `prompt/VOCAB_PROMPT.md` or `prompt/GRAMMAR_PROMPT.md`;
4. any more specific `AGENTS.md` inside the target area;
5. the existing README/specification and nearby canonical files;
6. the current task/state files if they exist.

More specific and newer instructions override general ones when they conflict.

## Working rules

Inspect existing files before creating or restructuring content. Preserve repository naming, Markdown order, terminology, lesson flow, and approved examples of format. Do not invent a parallel structure when a canonical one already exists.

Work in small durable batches. After each completed batch, validate the changed files, update the relevant progress/state file, and commit a coherent checkpoint. A later Codex session must be able to resume from repository state without needing the previous chat.

Do not stop merely to report progress while executable work remains. Continue to the next safe batch until the task is complete, the runtime/usage limit stops the session, or a genuine blocker requires human input.

Never mark work complete when validation is failing. Do not rewrite unrelated material. Do not merge into `main` unless the task explicitly asks for it.

## Content authoring boundary

- Read `prompt/COMMON_PROMPT.md` before creating, reviewing, or regenerating learning docs.
- Do not use Python, JavaScript, regex, templates, workers, generators, or other automation to invent, inject, duplicate, or rewrite learner-facing prose: introductions, transitions, explanations, examples, summaries, or conclusions.
- Scripts may perform structural work only: read and preserve source text, copy media, normalize paths, build indexes/manifests, write machine metadata, and run audits.
- Any new learner-facing prose must be reviewed manually for the specific topic. AI may propose a draft, but the draft is not accepted content until a human has reviewed the file and its evidence.
- Do not invent facts, current claims, citations, URLs, quotations, page numbers, IPA, CEFR levels, collocations, register judgments, translations, or examples. Mark unresolved claims as `UNVERIFIED` or `NEEDS_SOURCE` instead of guessing.
- Do not use generated/public output, catalogs, manifests, or a previous AI draft as the authoritative source for new prose. Preserve the canonical source and provenance boundary.
- Do not upload private notes, copyrighted books, exports, secrets, API keys, or credentials to an external AI/API service.
- Do not delete, overwrite, rename, reorder, or regenerate outside an explicit allowed-path manifest. Inspect status before the batch and the scoped diff after it.
- Do not expand from one requested lesson or batch into the next topic, level, or corpus-wide goal without explicit authorization.
- Do not modify a checker, count, metadata, or state file merely to make a batch pass. Do not claim `accepted`, `validated`, `published`, or `synced` without the corresponding evidence.
- Examples that contain invented people, organizations, events, numbers, or claims must be labeled hypothetical; never present them as real evidence.
- Do not copy or lightly paraphrase proprietary/reference definitions, translations, examples, or explanations. Use references to verify usage, then write original teaching prose.
- Never regenerate over manually authored content without inspecting the scoped diff. A green structural check does not prove that prose is natural or semantically correct.

## English vocabulary

For work under `english/lessons/vocabulary/`, read `english/lessons/vocabulary/AGENTS.md` before generating or editing vocabulary lessons.
