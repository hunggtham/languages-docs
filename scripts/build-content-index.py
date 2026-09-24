"""Build a small, stable content API for the language-learning web app."""

from __future__ import annotations

import json
import re
import shutil
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "apps/web/public/content"
LESSON_OUTPUT = ROOT / "apps/web/public/lesson"
NORMALIZED = ROOT / "content/english"
def grammar_document(source: str, document_id: str, title: str, level: str, description: str, track: str) -> dict[str, str]:
    return {
        "source": source,
        "id": document_id,
        "title": title,
        "skill": "Grammar",
        "level": level,
        "track": track,
        "description": description,
    }


DOCUMENTS = [
    grammar_document("english/lessons/grammar/00-concept-map.md", "english-grammar-concept-map", "Grammar Concept Map", "Path guide", "Mental model and reading order for the full grammar path.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/01-how-an-english-sentence-works.md", "english-grammar-foundations-sentence", "How an English Sentence Works", "Foundation", "Sentence architecture, subjects, predicates and complements.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/02-reference-nouns-articles-and-quantity.md", "english-grammar-foundations-reference", "Reference, Nouns, Articles, and Quantity", "Foundation", "How English introduces, identifies and quantifies things.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/03-time-tense-and-aspect.md", "english-grammar-foundations-time", "Time, Tense, and Aspect", "Foundation", "Viewpoint, tense and aspect as one connected time system.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/04-modality-negation-and-questions.md", "english-grammar-foundations-modality", "Modality, Negation, and Questions", "Foundation", "Stance, possibility, obligation, negation and question structure.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/05-verb-patterns-and-connecting-ideas.md", "english-grammar-foundations-verb-patterns", "Verb Patterns and Connecting Ideas", "Foundation", "Complements, clause linking, passives, reporting and phrasal verbs.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/06-spoken-american-conversation-grammar.md", "english-grammar-foundations-spoken", "Spoken American Conversation Grammar", "Foundation", "Short answers, echoes, confirmation and recoverable ellipsis.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/07-noun-clauses-and-embedded-questions.md", "english-grammar-foundations-embedded", "Noun Clauses and Embedded Questions", "Foundation", "How propositions and questions become parts of larger clauses.", "Grammar path"),
    grammar_document("english/lessons/grammar/01-foundations/08-habit-familiarity-preference-and-advice.md", "english-grammar-foundations-habit", "Habit, Familiarity, Preference, and Advice", "Foundation", "Used to, be used to, would rather, prefer, should and had better.", "Grammar path"),
    grammar_document("english/lessons/grammar/02-core/01-perfect-meaning-and-narrative-time.md", "english-grammar-core-perfect", "Perfect Meaning and Narrative Time", "Core", "Reference points, perfect forms and narrative sequencing.", "Grammar path"),
    grammar_document("english/lessons/grammar/02-core/02-conditionals-counterfactuality-and-wish.md", "english-grammar-core-conditionals", "Conditionals, Counterfactuality, and Wish", "Core", "Reality, possibility, distance and counterfactual alternatives.", "Grammar path"),
    grammar_document("english/lessons/grammar/02-core/03-modal-perfects-deduction-and-evaluation.md", "english-grammar-core-modal-perfects", "Modal Perfects, Deduction, and Evaluation", "Core", "Must have, might have, should have and could have in context.", "Grammar path"),
    grammar_document("english/lessons/grammar/02-core/04-voice-reporting-and-clause-compression.md", "english-grammar-core-voice-reporting", "Voice, Reporting, and Clause Compression", "Core", "Active/passive perspective, reported messages and reduced clauses.", "Grammar path"),
    grammar_document("english/lessons/grammar/02-core/05-focus-emphasis-and-information-flow.md", "english-grammar-core-focus", "Focus, Emphasis, and Information Flow", "Core", "Clefts, fronting, inversion and information packaging.", "Grammar path"),
    grammar_document("english/lessons/grammar/02-core/06-causatives-get-have-and-agency.md", "english-grammar-core-causatives", "Causatives, get, have, and Agency", "Core", "Cause, arrangement, force, persuasion and affected participants.", "Grammar path"),
    grammar_document("english/lessons/grammar/03-advanced/01-register-subjunctive-and-formal-choices.md", "english-grammar-advanced-register", "Register, Subjunctive, and Formal Choices", "Advanced", "Register and formal choices in contemporary American English.", "Grammar path"),
    grammar_document("english/lessons/grammar/03-advanced/02-hedging-stance-and-evidential-grammar.md", "english-grammar-advanced-hedging", "Hedging, Stance, and Evidential Grammar", "Advanced", "Calibrate certainty, evidence and commitment to a claim.", "Grammar path"),
    grammar_document("english/lessons/grammar/03-advanced/03-marked-word-order-and-rhetorical-focus.md", "english-grammar-advanced-word-order", "Marked Word Order and Rhetorical Focus", "Advanced", "Marked order, negative inversion and rhetorical focus.", "Grammar path"),
    grammar_document("english/lessons/grammar/03-advanced/04-ellipsis-compression-and-nominalization.md", "english-grammar-advanced-compression", "Ellipsis, Compression, and Nominalization", "Advanced", "Efficient but readable spoken and professional writing.", "Grammar path"),
    grammar_document("english/lessons/grammar/03-advanced/05-american-british-bridges-and-native-choice.md", "english-grammar-advanced-us-uk", "American–British Bridges and Native Choice", "Advanced", "One stable American production target with useful international contrasts.", "Grammar path"),
    {
        "source": "english/lessons/grammar/error-notebook-unit-01-13.md",
        "id": "english-corrections-grammar-error-notebook",
        "title": "Grammar Error Notebook — Units 1–13",
        "skill": "Corrections",
        "level": "Personal",
        "track": "Review",
        "description": "Các lỗi ngữ pháp lặp lại và cách sửa để ôn theo SRS.",
    },
    {
        "source": "english/lessons/vocabulary/ielts-vocabulary-22000-clean.md",
        "id": "english-vocabulary-ielts",
        "title": "IELTS Vocabulary — 22,000 words",
        "skill": "Vocabulary",
        "level": "IELTS",
        "track": "Vocabulary bank",
        "description": "Kho từ vựng IELTS để tra cứu và chia nhỏ thành các phiên ôn tập.",
    },
    {
        "source": "english/lessons/vocabulary/new-words.md",
        "id": "english-vocabulary-new-words",
        "title": "New words",
        "skill": "Vocabulary",
        "level": "Personal",
        "track": "Vocabulary bank",
        "description": "Từ mới thu thập trong quá trình học.",
    },
    {
        "source": "english/lessons/writing/personal-topics/introduce-myself.md",
        "id": "english-writing-introduce-myself",
        "title": "Introduce myself",
        "skill": "Writing",
        "level": "Personal",
        "track": "Writing practice",
        "description": "Bài viết cá nhân để luyện câu giới thiệu và nói về bản thân.",
    },
    {
        "source": "english/lessons/writing/personal-topics/my-career-plan.md",
        "id": "english-writing-career-plan",
        "title": "My career plan",
        "skill": "Writing",
        "level": "Personal",
        "track": "Writing practice",
        "description": "Luyện viết về kế hoạch nghề nghiệp và mục tiêu tương lai.",
    },
    {
        "source": "english/lessons/writing/personal-topics/my-hometown.md",
        "id": "english-writing-hometown",
        "title": "My hometown",
        "skill": "Writing",
        "level": "Personal",
        "track": "Writing practice",
        "description": "Luyện mô tả quê hương bằng câu rõ ràng và tự nhiên.",
    },
    {
        "source": "english/lessons/writing/personal-topics/my-work.md",
        "id": "english-writing-my-work",
        "title": "My work",
        "skill": "Writing",
        "level": "Personal",
        "track": "Writing practice",
        "description": "Luyện nói và viết về công việc hiện tại.",
    },
    {
        "source": "english/lessons/writing/personal-topics/why-i-study-english.md",
        "id": "english-writing-why-study-english",
        "title": "Why I study English",
        "skill": "Writing",
        "level": "Personal",
        "track": "Writing practice",
        "description": "Luyện trình bày lý do, động lực và thói quen học ngoại ngữ.",
    },
    {
        "source": "english/lessons/corrections/teacher-corrections.md",
        "id": "english-corrections-teacher",
        "title": "Teacher corrections",
        "skill": "Corrections",
        "level": "Personal",
        "track": "Review",
        "description": "Các lỗi cá nhân cần ôn lại theo lịch SRS.",
    },
]


def excerpt(text: str, limit: int = 180) -> str:
    text = re.sub(r"^#{1,6}\s+", "", text, flags=re.M)
    text = re.sub(r"[`*_>#|]", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text[:limit].rstrip() + ("…" if len(text) > limit else "")


def slug_filename(document_id: str, source: str) -> str:
    source_stem = Path(source).stem
    if source_stem.endswith("-revised"):
        value = unicodedata.normalize("NFKD", source_stem).encode("ascii", "ignore").decode()
        return re.sub(r"[^a-z0-9-]", "-", value.lower()).strip("-") + ".md"
    value = unicodedata.normalize("NFKD", document_id).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9-]", "-", value.lower()).strip("-") + ".md"


def main() -> None:
    # `public/lesson` is the only public Markdown directory consumed by the web.
    # Remove the previous generated layout so stale lesson files cannot remain visible.
    lesson_output = LESSON_OUTPUT
    if lesson_output.exists():
        shutil.rmtree(lesson_output)
    lesson_output.mkdir(parents=True, exist_ok=True)
    old_documents_dir = OUTPUT / "documents"
    if old_documents_dir.exists():
        shutil.rmtree(old_documents_dir)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    if NORMALIZED.exists():
        shutil.rmtree(NORMALIZED)
    NORMALIZED.mkdir(parents=True, exist_ok=True)
    catalog = []
    for item in DOCUMENTS:
        source = ROOT / item["source"]
        if not source.is_file():
            raise FileNotFoundError(f"Missing content source: {source}")
        text = source.read_text(encoding="utf-8")
        filename = slug_filename(item["id"], item["source"])
        normalized_dir = NORMALIZED / item["skill"].lower()
        normalized_dir.mkdir(parents=True, exist_ok=True)
        normalized_target = normalized_dir / filename
        shutil.copyfile(source, normalized_target)
        target = lesson_output / filename
        shutil.copyfile(normalized_target, target)
        record = {
            **item,
            "order": len(catalog),
            "contentPath": str(normalized_target.relative_to(ROOT)),
            "contentUrl": f"/lesson/{filename}",
            "excerpt": excerpt(text),
            "characters": len(text),
        }
        catalog.append(record)
    catalog_text = json.dumps({"version": 1, "language": "English", "learnerLanguage": "Vietnamese", "documents": catalog}, ensure_ascii=False, indent=2) + "\n"
    (ROOT / "content/catalog.json").write_text(catalog_text, encoding="utf-8")
    (OUTPUT / "catalog.json").write_text(catalog_text, encoding="utf-8")
    print(f"Built {len(catalog)} documents in {OUTPUT}")


if __name__ == "__main__":
    main()
