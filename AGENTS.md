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

## English vocabulary

For work under `english/lessons/vocabulary/`, read `english/lessons/vocabulary/AGENTS.md` before generating or editing vocabulary lessons.