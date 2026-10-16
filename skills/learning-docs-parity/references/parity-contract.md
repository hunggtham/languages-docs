# Learning Docs Parity Contract

This repository can share a Supabase project with the Study Library, but it is a separate application.

## Identity boundary

| Concern | Study Library source | This repository |
| --- | --- | --- |
| `app_id` | `study-library` | `languages-docs-web` |
| document namespace | derived from Study Library category | `languages-docs` |
| local progress keys | `study-shelf-*` | `languages-docs-progress-v1:<scope>` |
| remote table | `learning_progress` | `learning_progress`, filtered by this app/namespace |

Rows are scoped by `user_id + app_id + content_namespace + content_type + content_id`. RLS must require `user_id = auth.uid()`. The frontend may use only the public/anon Supabase key; never copy a service-role key into Vite env or Pages artifacts.

## Feature mapping

- Study Library progress fields map to `completed_sections`, `current_section`, `progress_pct`, `status`, and `updated_at` in the target's `ProgressState`/sync adapter.
- Selection translation should remain selection-only, short-lived, and preserve the original selected text. English targets Vietnamese/Korean; Korean targets Vietnamese/English.
- Speech reading uses browser `SpeechSynthesis`; cancel speech on reader unmount or route change.
- Account changes must switch local scope before applying remote state. Never show the previous account's progress while the new account is loading.

## Verification boundary

Static type-check/build and unauthenticated RLS checks do not prove an authenticated round trip. Only claim sync success after a real account can write, reload, and read back its own target-app row while a second account and the Study Library remain isolated.
