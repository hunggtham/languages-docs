# English Study Tracker — personal learning record

This folder documents the **workflow**, not the learner's private answers or scores. The LanguageLab website now has a separate **English Progress** screen at `#english-progress`.

## What belongs where?

| Storage | Purpose |
|---|---|
| `english/study-tracker/` (GitHub) | Versioned tracker documentation and reusable study/review guidance |
| LanguageLab local snapshot (`localStorage`) | Session results, error notebook, topic confidence and new entries |
| JSON export/import from English Progress | Portable backup or the starting record from a tutoring session |
| Existing optional Supabase Learning OS sync | Cross-device snapshot after signing in and pressing Sync |

**Privacy:** This repository and GitHub Pages are public. Do not commit personal conversations, identifiable learning notes or quiz history. Share personal data only through private JSON import. English Progress does not publish personal records back to GitHub.

## First import

1. Open LanguageLab → **English Progress**.
2. Download the private English Progress JSON provided with the tutoring review. Choose **Import dữ liệu**.
3. Check **Tổng quan** (scores, topic status), **Lịch sử học** (attempts) and **Sổ lỗi cá nhân** (corrections).
4. After another class, add a quiz attempt and record mistakes. Update topics only after a real retest or speaking practice.
5. Choose **Export JSON** to back up the record. If Supabase is configured, open **Learning OS → Sync**, sign in and sync the existing LanguageLab snapshot.

**Important:** Local storage is browser-specific. It is not an automatic GitHub sync, and having a Supabase URL in source code does not prove that the live site has cloud sync enabled. Before switching browsers or syncing a different device, make an export. The current Learning OS cloud snapshot is a manual sync process; simultaneous device edits may overwrite one another.

## Data integrity

- Record *correct/total*, quiz title, date and a short note; never infer IELTS band from a grammar quiz.
- Do not mark an aspect "Khá vững" just because a multiple-choice or fill-in exercise was correct.
- Keep incorrect and corrected examples together, plus Vietnamese and Korean explanations when useful.
- Review one day later, then after several days; record another score to determine whether the same error recurs.
- Use `PROGRESS_SCHEMA.md` for the JSON contract and `REVIEW_GUIDE.md` for the next review sequence.

## Existing lessons

For deeper grammar explanations, use the canonical English grammar library instead of duplicating it:

- [Time, Tense and Aspect](../lessons/grammar/01-foundations/03-time-tense-and-aspect.md)
- [Perfect Meaning and Narrative Time](../lessons/grammar/02-core/01-perfect-meaning-and-narrative-time.md)

The tracker records **what has been practiced, what went wrong and what to revisit**. The grammar library remains the canonical learning content.
