#!/usr/bin/env python3
"""Report CEFR vocabulary lesson progress and duplicate surface headings."""

from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CEFR = ROOT / "english" / "lessons" / "vocabulary" / "cefr"
LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2", "c2-plus"]
ENTRY_RE = re.compile(r"^##\s+\d+\.\s+(.+?)\s*$")
IPA_SUFFIX_RE = re.compile(r"\s+/[^/]+/\s*$")


def normalize_heading(text: str) -> str:
    return IPA_SUFFIX_RE.sub("", text).strip().casefold()


def scan() -> dict:
    level_counts: dict[str, int] = {}
    lesson_counts: dict[str, int] = {}
    occurrences: dict[str, list[str]] = defaultdict(list)

    for level in LEVELS:
        level_dir = CEFR / level
        count = 0
        if level_dir.exists():
            for path in sorted(level_dir.glob("*.md")):
                entries = 0
                for line in path.read_text(encoding="utf-8").splitlines():
                    match = ENTRY_RE.match(line)
                    if not match:
                        continue
                    entries += 1
                    headword = normalize_heading(match.group(1))
                    occurrences[headword].append(str(path.relative_to(ROOT)))
                lesson_counts[str(path.relative_to(ROOT))] = entries
                count += entries
        level_counts[level] = count

    duplicates = {
        headword: paths
        for headword, paths in sorted(occurrences.items())
        if len(paths) > 1
    }

    return {
        "levels": level_counts,
        "total": sum(level_counts.values()),
        "lessons": lesson_counts,
        "duplicate_surface_headings": duplicates,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true", help="emit JSON")
    args = parser.parse_args()
    report = scan()

    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
        return

    print("Vocabulary progress")
    for level in LEVELS:
        print(f"  {level.upper():7} {report['levels'][level]:5} entries")
    print(f"  TOTAL   {report['total']:5} entries")

    unusual = {
        path: count
        for path, count in report["lessons"].items()
        if count != 15
    }
    if unusual:
        print("\nLessons not containing exactly 15 numbered entries:")
        for path, count in unusual.items():
            print(f"  {count:3}  {path}")

    duplicates = report["duplicate_surface_headings"]
    if duplicates:
        print("\nRepeated surface headings (review; distinct senses may be intentional):")
        for headword, paths in duplicates.items():
            print(f"  {headword}: {'; '.join(paths)}")


if __name__ == "__main__":
    main()
