"""Validate the normalized English library and web selection."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LIBRARY = ROOT / "english"
EXPECTED_ROOTS = {"archives", "lessons", "planning", "references", "study"}
LEGACY_ROOTS = {"about_ielts", "class", "corrections", "english_grammar_in_use", "grammar", "ielts_docs", "listenning", "reading", "resource", "speaking(ipa)", "vocab", "writing"}
SAFE_NAME = re.compile(r"^[a-z0-9][a-z0-9./-]*$")


def main() -> None:
    errors: list[str] = []
    roots = {item.name for item in LIBRARY.iterdir() if item.is_dir()}
    if roots != EXPECTED_ROOTS:
        errors.append(f"top-level roots differ: expected {sorted(EXPECTED_ROOTS)}, found {sorted(roots)}")
    legacy = sorted(LEGACY_ROOTS & roots)
    if legacy:
        errors.append(f"legacy roots remain: {legacy}")
    metadata = list(LIBRARY.rglob(".DS_Store"))
    if metadata:
        errors.append(f"Finder metadata remains: {len(metadata)}")
    for item in LIBRARY.joinpath("lessons").rglob("*"):
        if item.name.startswith("."):
            continue
        if not SAFE_NAME.match(item.name):
            errors.append(f"non-normalized lesson name: {item.relative_to(ROOT)}")
        if item.is_file() and item.parent.name == "grammar" and item.name.startswith("english-structures-") and not item.stem.endswith("-revised"):
            errors.append(f"old non-revised grammar file remains: {item.relative_to(ROOT)}")

    catalog = json.loads((ROOT / "content/catalog.json").read_text(encoding="utf-8"))
    for document in catalog["documents"]:
        source = ROOT / document["source"]
        public = ROOT / "apps/web/public" / document["contentUrl"].lstrip("/")
        if not source.is_file():
            errors.append(f"catalog source missing: {document['source']}")
        if not public.is_file():
            errors.append(f"catalog public file missing: {document['contentUrl']}")

    if errors:
        print("English library validation failed:")
        for error in errors:
            print(f"- {error}")
        raise SystemExit(1)
    print(f"English library OK: {len(list(LIBRARY.rglob('*')))} paths; {len(catalog['documents'])} web documents selected.")


if __name__ == "__main__":
    main()
