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
COVERAGE_RE = re.compile(r"Consolidates source lessons:\s*(.+)")


def lesson_rows(level: str) -> list[tuple[int, Path, int, set[int]]]:
    directory = VOCAB_ROOT / level
    if not directory.exists():
        return []
    rows: list[tuple[int, Path, int, set[int]]] = []
    # Topic folders are allowed under each CEFR level. Count every numbered
    # lesson recursively so reorganizing related lessons does not hide them.
    for path in directory.rglob("*.md"):
        match = LESSON_RE.match(path.name)
        if not match:
            continue
        number = int(match.group(1))
        text = path.read_text(encoding="utf-8")
        entries = len(ENTRY_RE.findall(text))
        coverage_match = COVERAGE_RE.search(text)
        coverage = {int(value) for value in re.findall(r"(?:^|,\s*)(\d+)-", coverage_match.group(1))} if coverage_match else {number}
        rows.append((number, path, entries, coverage))
    return sorted(rows)


def main() -> None:
    total_lessons = 0
    total_items = 0
    print(f"Vocabulary root: {VOCAB_ROOT.relative_to(ROOT)}")
    for level in LEVELS:
        rows = lesson_rows(level)
        lessons = len(rows)
        items = sum(entry_count for _, _, entry_count, _ in rows)
        total_lessons += lessons
        total_items += items
        if rows:
            covered = set().union(*(coverage for _, _, _, coverage in rows))
            max_covered = max(covered)
            next_number = max_covered + 1
            print(
                f"{level.upper():5} lessons={lessons:4} items={items:6} "
                f"coverage=01-{max_covered:02d} next={next_number:02d}"
            )
        else:
            print(f"{level.upper():5} lessons=   0 items=     0 next=01")
    print(f"TOTAL lessons={total_lessons} items={total_items}")
    print(f"TARGET 10k={'complete' if total_items >= 10_000 else f'{10_000 - total_items} remaining'}")
    print(f"TARGET 20k={'complete' if total_items >= 20_000 else f'{20_000 - total_items} remaining'}")


if __name__ == "__main__":
    main()
