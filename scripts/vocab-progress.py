#!/usr/bin/env python3
"""Report CEFR vocabulary lesson and learning-item progress.

The report is intentionally filesystem-based so it remains useful when a
checkpoint is resumed on another machine or branch. A lesson is a Markdown
file whose name starts with a numeric prefix; an item is a numbered ``##``
entry inside that file.
"""

from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VOCAB_ROOT = ROOT / "english" / "lessons" / "vocabulary" / "cefr"
LEVELS = ("a1", "a2", "b1", "b2", "c1", "c2", "c2-plus")
LESSON_RE = re.compile(r"^(\d+)-(.+)\.md$")
ENTRY_RE = re.compile(r"^##\s+(\d+)\.\s+(.+?)\s*$", re.MULTILINE)


def lesson_rows(level: str) -> list[tuple[int, Path, int]]:
    directory = VOCAB_ROOT / level
    if not directory.exists():
        return []
    rows: list[tuple[int, Path, int]] = []
    for path in directory.glob("*.md"):
        match = LESSON_RE.match(path.name)
        if not match:
            continue
        number = int(match.group(1))
        entries = len(ENTRY_RE.findall(path.read_text(encoding="utf-8")))
        rows.append((number, path, entries))
    return sorted(rows)


def main() -> None:
    total_lessons = 0
    total_items = 0
    print(f"Vocabulary root: {VOCAB_ROOT.relative_to(ROOT)}")
    for level in LEVELS:
        rows = lesson_rows(level)
        lessons = len(rows)
        items = sum(entry_count for _, _, entry_count in rows)
        total_lessons += lessons
        total_items += items
        if rows:
            numbers = [number for number, _, _ in rows]
            missing = [str(n) for n in range(1, max(numbers) + 1) if n not in numbers]
            next_number = next((n for n in range(1, max(numbers) + 2) if n not in numbers), max(numbers) + 1)
            suffix = f"; missing={','.join(missing)}" if missing else ""
            print(
                f"{level.upper():5} lessons={lessons:4} items={items:6} "
                f"range=01-{max(numbers):02d} next={next_number:02d}{suffix}"
            )
        else:
            print(f"{level.upper():5} lessons=   0 items=     0 next=01")
    print(f"TOTAL lessons={total_lessons} items={total_items}")
    print(f"TARGET 10k={'complete' if total_items >= 10_000 else f'{10_000 - total_items} remaining'}")
    print(f"TARGET 20k={'complete' if total_items >= 20_000 else f'{20_000 - total_items} remaining'}")


if __name__ == "__main__":
    main()
