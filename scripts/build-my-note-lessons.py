#!/usr/bin/env python3
"""Copy the Notion export images into the web-ready lesson package.

The Markdown files are curated by hand; this script only performs the
deterministic media copy and writes the image manifest.
"""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "english" / "study" / "my_note" / "group 3 class"
DEST = ROOT / "english" / "study" / "my_note_lessons" / "media"


def natural_key(path: Path) -> tuple[int, str]:
    match = re.fullmatch(r"image(?: (\d+))?\.png", path.name)
    # Keep the numbered Notion attachments intuitive (image 1 → 001) and
    # place the unnumbered `image.png` export at the end.
    return (int(match.group(1)) if match and match.group(1) else 999, path.name)


def main() -> None:
    images = sorted(SOURCE.glob("*.png"), key=natural_key)
    if len(images) != 89:
        raise SystemExit(f"Expected 89 PNG files, found {len(images)}")
    DEST.mkdir(parents=True, exist_ok=True)
    rows = [
        "# Source images",
        "",
        "All PNG attachments are copied from the Notion export. The original files remain untouched.",
        "",
        "| Normalized file | Original export name |",
        "|---|---|",
    ]
    for index, source in enumerate(images, 1):
        target_name = f"notion-image-{index:03d}.png"
        shutil.copy2(source, DEST / target_name)
        rows.append(f"| `{target_name}` | `{source.name}` |\n")
    (DEST / "index.md").write_text("\n".join(rows), encoding="utf-8")
    payload = {
        "sourceDirectory": str(SOURCE.relative_to(ROOT)),
        "count": len(images),
        "images": [
            {"file": f"notion-image-{i:03d}.png", "source": p.name}
            for i, p in enumerate(images, 1)
        ],
    }
    (DEST / "manifest.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Copied {len(images)} images to {DEST}")


if __name__ == "__main__":
    main()
