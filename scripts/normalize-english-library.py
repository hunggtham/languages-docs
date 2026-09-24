"""Safely reorganize the English learning library into stable, web-friendly paths.

The operation is intentionally idempotent: an item is skipped when its old path
is already gone and its normalized destination exists. It never deletes learning
content; only Finder .DS_Store metadata is removed.
"""

from __future__ import annotations

import re
import shutil
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def path(value: str) -> Path:
    return ROOT / value


def move_item(source: str, target: str) -> None:
    src, dst = path(source), path(target)
    if not src.exists():
        if dst.exists():
            print(f"skip (already normalized): {target}")
        else:
            print(f"missing (review): {source}")
        return
    if dst.exists():
        raise FileExistsError(f"Destination already exists: {dst}")
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.move(str(src), str(dst))
    print(f"move: {source} -> {target}")


def move_children(source_dir: str, target_dir: str, extension: str | None = None) -> None:
    src = path(source_dir)
    if not src.exists():
        return
    for item in sorted(src.iterdir()):
        if extension and item.suffix.lower() != extension:
            continue
        target = path(target_dir) / item.name
        if target.exists():
            raise FileExistsError(f"Destination already exists: {target}")
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(item), str(target))
        print(f"move: {item.relative_to(ROOT)} -> {target.relative_to(ROOT)}")


def slug(value: str, *, keep_extension: bool = True) -> str:
    suffix = Path(value).suffix if keep_extension else ""
    stem = Path(value).stem if keep_extension else value
    stem = unicodedata.normalize("NFKD", stem).encode("ascii", "ignore").decode()
    stem = re.sub(r"[^A-Za-z0-9]+", "-", stem).strip("-").lower()
    return f"{stem}{suffix.lower()}"


def rename_file(source: str, target_name: str) -> None:
    src = path(source)
    if not src.exists():
        return
    if src.name == target_name:
        return
    move_item(source, str(src.parent.relative_to(ROOT) / target_name))


def rename_dir(source: str, target_name: str) -> None:
    src = path(source)
    if not src.exists():
        return
    if src.name == target_name:
        return
    move_item(source, str(src.parent.relative_to(ROOT) / target_name))


def normalize_classwork() -> None:
    source = path("english/class")
    target = path("english/study/class")
    target.mkdir(parents=True, exist_ok=True)
    names = {
        "Quynh-homework.docx": "quynh-homework.docx",
        "Quỳnh (1).docx": "quynh-homework-1.docx",
        "Quỳnh.docx": "quynh.docx",
        "absent_student_catchup_travel_B1(PHT).docx": "absent-student-catchup-travel-b1-pht.docx",
        "absent_student_catchup_travel_B1.docx": "absent-student-catchup-travel-b1.docx",
        "homework_travel_B1 (PHT).docx": "homework-travel-b1-pht.docx",
        "homework_travel_B1 (quynh).docx": "homework-travel-b1-quynh.docx",
        "homework_travel_B1.docx": "homework-travel-b1.docx",
        "pht_homework_day1.txt": "pht-homework-day-01.txt",
        "say-tell-talk-worksheet.docx": "say-tell-talk-worksheet.docx",
        "hunggtham.docx": "hunggtham.docx",
    }
    for name, target_name in names.items():
        move_item(f"english/class/{name}", f"english/study/class/{target_name}")
    move_children("english/class/home_work", "english/study/class/homework")
    homework = path("english/study/class/homework")
    for item in sorted(homework.iterdir()) if homework.exists() else []:
        if item.name == ".DS_Store":
            item.unlink()
            continue
        normalized = slug(item.name)
        if normalized != item.name:
            rename_file(str(item.relative_to(ROOT)), normalized)


def normalize_grammar_and_ielts() -> None:
    move_item("english/grammar/English_Grammar_in_Use_Error_Notebook_Unit1-13.md", "english/lessons/grammar/error-notebook-unit-01-13.md")
    move_item("english/grammar/Raymond Murphy - English Grammar in Use - 4th Edition.pdf", "english/references/grammar/english-grammar-in-use-4th-edition.pdf")

    for item in sorted(path("english/ielts_docs/output/grammar").glob("*.md")):
        move_item(str(item.relative_to(ROOT)), f"english/lessons/grammar/{slug(item.name)}")
    for item in sorted(path("english/ielts_docs/output/cert").glob("*.md")):
        names = {
            "ielts_complete_exam_guide.md": "ielts-complete-exam-guide.md",
            "toeic_complete_exam_guide.md": "toeic-complete-exam-guide.md",
        }
        move_item(str(item.relative_to(ROOT)), f"english/lessons/exams/{names.get(item.name, slug(item.name))}")
    for item in sorted(path("english/ielts_docs/output").glob("*.md")):
        move_item(str(item.relative_to(ROOT)), f"english/lessons/grammar/{slug(item.name)}")
    for item in sorted(path("english/ielts_docs/raw_md").glob("*.md")):
        names = {
            "22000_tu_vung_IELTS.md": "ielts-vocabulary-22000-raw.md",
            "22000_tu_vung_IELTS_clean.md": "ielts-vocabulary-22000-clean.md",
        }
        move_item(str(item.relative_to(ROOT)), f"english/lessons/vocabulary/{names.get(item.name, slug(item.name))}")
    for item in sorted(path("english/ielts_docs/raw").iterdir()) if path("english/ielts_docs/raw").exists() else []:
        move_item(str(item.relative_to(ROOT)), f"english/references/ielts/{slug(item.name)}")


def normalize_vocab() -> None:
    move_item("english/vocab/raw_md/newword.md", "english/lessons/vocabulary/new-words.md")
    move_item("english/vocab/Oxford Word Skills Basic", "english/references/vocabulary/oxford-word-skills-basic")
    move_item("english/vocab/99.Archieve", "english/archives/vocabulary")
    move_item("english/vocab/rar", "english/archives/vocabulary/packages")
    names = {
        "tu vung ielts cho nguoi moi-nguyenlungdanh.pdf": "ielts-vocabulary-for-beginners.pdf",
        "Mindmap English Phrasal Verbs.pdf": "english-phrasal-verbs-mindmap.pdf",
    }
    for name, target_name in names.items():
        move_item(f"english/vocab/{name}", f"english/references/vocabulary/{target_name}")


def normalize_writing_and_corrections() -> None:
    move_item("english/writing/personal-topics", "english/lessons/writing/personal-topics")
    names = {
        "Collins Get Ready for IELTS Writing - Pre-intermediate A2+.pdf": "get-ready-for-ielts-writing-pre-intermediate-a2-plus.pdf",
        "Từ vựng “chất” và ý tưởng “hay” theo chủ đề cho bài thi IELTS Writing.pdf": "ielts-writing-topic-vocabulary-and-ideas.pdf",
    }
    for name, target_name in names.items():
        move_item(f"english/writing/{name}", f"english/references/writing/{target_name}")
    move_item("english/corrections/teacher-corrections.md", "english/lessons/corrections/teacher-corrections.md")
    move_item("english/english_grammar_in_use", "english/study/grammar-reviews")


def normalize_references() -> None:
    move_item("english/about_ielts", "english/references/ielts")
    rename_dir("english/references/ielts/The Official Cambridge Guide to IELTS (Full Ebook+Audio)", "official-cambridge-guide-to-ielts")
    rename_file("english/references/ielts/official-cambridge-guide-to-ielts/The Official cambridge guide to IELTS.PDF", "official-cambridge-guide-to-ielts.pdf")

    move_item("english/reading", "english/references/reading")
    rename_dir("english/references/reading/Get Ready for IELTS Reading Pre-Intermediate A2+", "get-ready-for-ielts-reading-pre-intermediate-a2-plus")
    rename_file("english/references/reading/Get Ready for IELTS Reading Pre-Intermediate A2+.rar", "get-ready-for-ielts-reading-pre-intermediate-a2-plus.rar")
    rename_file("english/references/reading/get-ready-for-ielts-reading-pre-intermediate-a2-plus/Get Ready for IELTS Reading Pre-Intermediate A2+ (ORG).pdf", "get-ready-for-ielts-reading-pre-intermediate-a2-plus.pdf")

    move_item("english/listenning", "english/references/listening")
    move_item("english/references/listening/99.Archirve", "english/archives/listening")
    rename_dir("english/references/listening/Full Tactics for Listening", "full-tactics-for-listening")
    rename_dir("english/references/listening/full-tactics-for-listening/Basic Tactics for Listening", "basic-tactics-for-listening")
    rename_dir("english/references/listening/full-tactics-for-listening/basic-tactics-for-listening/Basic Tactics for Listenning", "units")
    normalize_unit_names("english/references/listening/full-tactics-for-listening/basic-tactics-for-listening/units")
    normalize_unit_names("english/archives/listening/Developing Tactics for Listening/Developing Tactics for Listening - Test Booklet")
    normalize_unit_names("english/archives/listening/Expanding Tactics for Listening/Expanding Tactics for Listening - Test Booklet")

    move_item("english/speaking(ipa)", "english/references/pronunciation")
    move_item("english/references/pronunciation/99.Achierve", "english/archives/pronunciation")
    rename_dir("english/references/pronunciation/2. English Pronunciation in use", "english-pronunciation-in-use")
    rename_dir("english/references/pronunciation/english-pronunciation-in-use/1. Elementary", "elementary")
    rename_dir("english/references/pronunciation/english-pronunciation-in-use/elementary/1. Elementary", "units")
    normalize_cd_names("english/references/pronunciation/english-pronunciation-in-use/elementary/units")
    normalize_cd_names("english/archives/pronunciation/2. Intermediate/2. Intermediate")
    normalize_cd_names("english/archives/pronunciation/3. Advanced/3. Advanced")


def normalize_unit_names(directory: str) -> None:
    root = path(directory)
    if not root.exists():
        return
    for item in sorted(root.iterdir()):
        match = re.match(r"Unit\s+(\d+),?\s*(.*)", item.name, re.I)
        if not match:
            continue
        number = int(match.group(1))
        title = slug(match.group(2), keep_extension=False) or "untitled"
        rename_dir(str(item.relative_to(ROOT)), f"unit-{number:02d}-{title}")


def normalize_cd_names(directory: str) -> None:
    root = path(directory)
    if not root.exists():
        return
    for item in sorted(root.iterdir()):
        match = re.match(r"(?:English pronunciation in Use|Pronunciation In Use - Intermediate) CD(\d+)", item.name, re.I)
        if match:
            rename_dir(str(item.relative_to(ROOT)), f"cd-{int(match.group(1)):02d}")
        elif re.match(r"CD\s+[A-E]$", item.name, re.I):
            rename_dir(str(item.relative_to(ROOT)), f"cd-{item.name[-1].lower()}")


def normalize_planning() -> None:
    move_item("english/resource", "english/planning")
    mappings = {
        "English_Drive_Review.xlsx": "drive-review.xlsx",
        "English_Materials_Check_Summary.xlsx": "materials-check-summary.xlsx",
        "English_Materials_Check_Summary_UPDATED_Daily_Weekly_Monthly.xlsx": "materials-check-summary-daily-weekly-monthly.xlsx",
        "English_Materials_Check_Summary_UPDATED_Roadmap.xlsx": "materials-check-summary-roadmap.xlsx",
        "English_Materials_Check_Summary_WORKING_UPDATED_v2.xlsx": "materials-check-summary-working-v2.xlsx",
        "IELTS_From_Zero_Roadmap_Workbook.xlsx": "ielts-from-zero-roadmap.xlsx",
    }
    for name, target_name in mappings.items():
        rename_file(f"english/planning/{name}", target_name)
    for item in sorted(path("english/planning").glob("*.webloc")):
        rename_file(str(item.relative_to(ROOT)), slug(item.name))


def normalize_remaining_names() -> None:
    """Normalize directory labels that were nested inside moved archives."""
    # Keep the uncleaned vocabulary source out of the curated lesson surface.
    move_item("english/lessons/vocabulary/ielts-vocabulary-22000-raw.md", "english/archives/vocabulary/ielts-vocabulary-22000-raw.md")
    directory_names = {
        "english/references/listening/full-tactics-for-listening/basic-tactics-for-listening/Basic Tactics for Listening - Test Booklet": "test-booklet",
        "english/archives/listening/Developing Tactics for Listening": "developing-tactics-for-listening",
        "english/archives/listening/Expanding Tactics for Listening": "expanding-tactics-for-listening",
        "english/archives/listening/developing-tactics-for-listening/Developing Tactics for Listening - Test Booklet": "test-booklet",
        "english/archives/listening/expanding-tactics-for-listening/Expanding Tactics for Listening - Test Booklet": "test-booklet",
        "english/archives/pronunciation/2. Intermediate": "intermediate",
        "english/archives/pronunciation/intermediate/2. Intermediate": "units",
        "english/archives/pronunciation/3. Advanced": "advanced",
        "english/archives/pronunciation/advanced/3. Advanced": "units",
        "english/references/vocabulary/oxford-word-skills-basic/Oxford Word Skills Basic CD ROM": "cd-rom",
        "english/references/vocabulary/oxford-word-skills-basic/cd-rom/wordlist_audio": "wordlist-audio",
    }
    for source, target_name in directory_names.items():
        rename_dir(source, target_name)

    replacements = {
        "unit-10-entertainmant": "unit-10-entertainment",
        "unit-12-resturants": "unit-12-restaurants",
    }
    for root in [path("english/references/listening"), path("english/archives/listening")]:
        for item in root.rglob("*"):
            if item.is_dir() and item.name in replacements:
                rename_dir(str(item.relative_to(ROOT)), replacements[item.name])
    for item in path("english/study/grammar-reviews").glob("*") if path("english/study/grammar-reviews").exists() else []:
        if item.is_file():
            rename_file(str(item.relative_to(ROOT)), slug(item.name))

    file_names = {
        "english/references/listening/full-tactics-for-listening/basic-tactics-for-listening/units/Basic Tactics for Listenning - Student Book.pdf": "basic-tactics-for-listening-student-book.pdf",
        "english/references/listening/full-tactics-for-listening/basic-tactics-for-listening/units/Basic Tactics for Listenning - Tapescript.pdf": "basic-tactics-for-listening-tapescript.pdf",
        "english/references/pronunciation/b_dialogues_everyday_conversations_english_lo_0.pdf": "b-dialogues-everyday-conversations-english-lo-0.pdf",
        "english/archives/pronunciation/advanced/Advanced_English_Pronunciation_in_Use.pdf": "advanced-english-pronunciation-in-use.pdf",
        "english/archives/pronunciation/advanced/units/Advanced_English_Pronunciation_in_Use.pdf": "advanced-english-pronunciation-in-use.pdf",
        "english/archives/pronunciation/intermediate/English Pronunciation In Use Intermediate.pdf의 사본.pdf": "english-pronunciation-in-use-intermediate-copy.pdf",
        "english/archives/vocabulary/Word_Skills_Idioms_and_Phrasal_Verbs_Advanced.pdf": "word-skills-idioms-and-phrasal-verbs-advanced.pdf",
        "english/archives/vocabulary/Word_skills_idioms_and_phrasal_verbs_-_intermediate.pdf": "word-skills-idioms-and-phrasal-verbs-intermediate.pdf",
        "english/archives/vocabulary/English Phrasal Verbs in Use Intermediate (2nd ed).pdf": "english-phrasal-verbs-in-use-intermediate-2nd-edition.pdf",
        "english/archives/vocabulary/packages/Oxford(basic_adv).zip": "oxford-basic-advanced.zip",
        "english/archives/vocabulary/packages/Oxford word skill imediate.zip": "oxford-word-skills-intermediate.zip",
        "english/archives/vocabulary/packages/The Official Cambridge Guide to IELTS (Full Ebook+Audio)-20260720T132538Z-1-001.zip": "official-cambridge-guide-to-ielts-full-ebook-audio.zip",
        "english/archives/vocabulary/drive-download-20260725T142237Z-1-001/1_English_Vocabulary_In_Use_Elementary_Cambridge_-_Third_Edition.pdf의 사본.pdf": "english-vocabulary-in-use-elementary-3rd-edition-copy.pdf",
        "english/archives/vocabulary/drive-download-20260725T142237Z-1-001/2_English_Vocabulary_In_Use_Pre-Intermediate_Cambridge_-_Fourth_Edition.pdf의 사본.pdf": "english-vocabulary-in-use-pre-intermediate-4th-edition-copy.pdf",
        "english/archives/vocabulary/drive-download-20260725T142237Z-1-001/3_English_Vocabulary_In_Use_Upper-Intermediate_Cambridge_-_Fourth_Edition.pdf의 사본.pdf": "english-vocabulary-in-use-upper-intermediate-4th-edition-copy.pdf",
        "english/archives/vocabulary/drive-download-20260725T142237Z-1-001/4_English_Vocabulary_In_Use_Advanced_Cambridge_-_Third_Edition.pdf의 사본.pdf": "english-vocabulary-in-use-advanced-3rd-edition-copy.pdf",
        "english/archives/listening/Full Tactics for Listening-20260724T034803Z-1-001.zip": "full-tactics-for-listening-package.zip",
        "english/archives/pronunciation/2. English Pronunciation in use-20260724T034623Z-1-001.zip": "english-pronunciation-in-use-package.zip",
    }
    for source, target_name in file_names.items():
        rename_file(source, target_name)
    rename_dir("english/archives/vocabulary/drive-download-20260725T142237Z-1-001", "english-vocabulary-in-use-copies-2026-07-25")


def clean_metadata() -> None:
    for item in path("english").rglob(".DS_Store"):
        item.unlink()
        print(f"remove metadata: {item.relative_to(ROOT)}")


def remove_empty_dirs() -> None:
    for directory in sorted(path("english").rglob("*"), key=lambda item: len(item.parts), reverse=True):
        if directory.is_dir() and not any(directory.iterdir()):
            directory.rmdir()
            print(f"remove empty directory: {directory.relative_to(ROOT)}")


def main() -> None:
    normalize_classwork()
    # Create the reference roots before moving the IELTS source PDFs into them.
    # The later file-level moves can safely add to these existing directories.
    normalize_references()
    normalize_grammar_and_ielts()
    normalize_vocab()
    normalize_writing_and_corrections()
    normalize_planning()
    normalize_remaining_names()
    clean_metadata()
    remove_empty_dirs()
    print("English library normalization complete.")


if __name__ == "__main__":
    main()
