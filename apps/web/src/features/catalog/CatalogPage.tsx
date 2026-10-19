import { useMemo, useState, type ReactElement } from "react";
import type { ProgressState } from "../../lib/content";
import type { LearningDocument, Skill } from "../../types";
import DocumentCard from "./DocumentCard";

const skills: Skill[] = ["All", "Grammar", "Vocabulary", "Writing", "Corrections"];
const languageLabels = { All: "Mọi ngôn ngữ", English: "English", Korean: "한국어" } as const;
const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2", "Advanced", "IELTS", "Personal"];
const levelDescriptions: Record<string, string> = {
  A1: "Nền tảng thiết yếu cho những tình huống quen thuộc.",
  A2: "Mở rộng vốn từ để xử lý đời sống thường ngày.",
  B1: "Từ vựng giúp diễn đạt ý kiến, công việc và xã hội.",
  B2: "Ngôn ngữ chính xác hơn cho học tập và thảo luận.",
  C1: "Các chủ đề chuyên sâu, học thuật và nghề nghiệp.",
  C2: "Sắc thái, lập luận và các lĩnh vực chuyên môn.",
  Advanced: "고급 한국어 어휘 — chính sách, xã hội và ngữ cảnh trang trọng.",
  IELTS: "Kho tham khảo để tra cứu và xây bộ ôn IELTS.",
  Personal: "Từ mới cá nhân đang được thu thập.",
};

type StatusFilter = "all" | "todo" | "progress" | "complete" | "saved";
type LanguageFilter = keyof typeof languageLabels;

const statusLabels: Record<StatusFilter, string> = {
  all: "Tất cả",
  todo: "Chưa học",
  progress: "Đang học",
  complete: "Đã xong",
  saved: "★ Đọc sau",
};

function isComplete(progress: ProgressState, id: string): boolean {
  return progress.completedIds.includes(id);
}

function sectionCount(progress: ProgressState, id: string): number {
  return progress.sectionsByLesson[id]?.length ?? 0;
}

function levelRank(level: string): number {
  const index = levelOrder.indexOf(level);
  return index < 0 ? levelOrder.length : index;
}

function levelTitle(level: string): string {
  return level === "Advanced" ? "Advanced · 고급 한국어" : level;
}

export default function CatalogPage({ documents, progress, completed, onOpen, initialSkill = "All", onToggleReadLater }: { documents: LearningDocument[]; progress: ProgressState; completed: string[]; onOpen: (document: LearningDocument) => void; initialSkill?: Skill; onToggleReadLater: (id: string) => void }): ReactElement {
  const [skill, setSkill] = useState<Skill>(initialSkill);
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"path" | "title" | "unfinished">("path");
  const [language, setLanguage] = useState<LanguageFilter>("All");
  const [level, setLevel] = useState("All");
  const vocabularyMode = skill === "Vocabulary";

  const availableLanguages = useMemo<LanguageFilter[]>(() => ["All", ...new Set(documents.filter((document) => document.skill === "Vocabulary").map((document) => (document.language ?? "English") as Exclude<LanguageFilter, "All">))], [documents]);
  const availableLevels = useMemo(() => {
    const values = documents.filter((document) => document.skill === "Vocabulary" && (language === "All" || (document.language ?? "English") === language)).map((document) => document.level);
    return [...new Set(values)].sort((left, right) => levelRank(left) - levelRank(right) || left.localeCompare(right));
  }, [documents, language]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = documents.filter((document) => {
      const count = sectionCount(progress, document.id);
      const done = isComplete(progress, document.id);
      const matchesStatus = status === "all" || (status === "complete" && done) || (status === "progress" && count > 0 && !done) || (status === "todo" && count === 0 && !done) || (status === "saved" && progress.readLaterIds.includes(document.id));
      const documentLanguage = document.language ?? "English";
      const searchable = `${document.title} ${document.description} ${document.excerpt} ${document.level} ${document.skill} ${documentLanguage} ${document.track ?? ""}`.toLowerCase();
      const matchesLanguage = !vocabularyMode || language === "All" || documentLanguage === language;
      const matchesLevel = !vocabularyMode || level === "All" || document.level === level;
      return (skill === "All" || document.skill === skill) && matchesLanguage && matchesLevel && matchesStatus && searchable.includes(normalizedQuery);
    });
    return [...result].sort((left, right) => sort === "title" ? left.title.localeCompare(right.title) : sort === "unfinished" ? Number(isComplete(progress, left.id)) - Number(isComplete(progress, right.id)) : (left.order ?? 999) - (right.order ?? 999));
  }, [documents, language, level, progress, query, skill, sort, status, vocabularyMode]);

  const groupedByLevel = useMemo(() => {
    if (!vocabularyMode) return [];
    const groups = new Map<string, LearningDocument[]>();
    filtered.forEach((document) => groups.set(document.level, [...(groups.get(document.level) ?? []), document]));
    return [...groups.entries()].sort(([left], [right]) => levelRank(left) - levelRank(right) || left.localeCompare(right));
  }, [filtered, vocabularyMode]);

  const renderCard = (document: LearningDocument) => <DocumentCard key={document.id} document={document} completed={completed.includes(document.id)} sectionCount={sectionCount(progress, document.id)} progressPercent={progress.progressPctByLesson[document.id] ?? 0} readLater={progress.readLaterIds.includes(document.id)} onOpen={() => onOpen(document)} onToggleReadLater={() => onToggleReadLater(document.id)} />;
  const vocabularyCount = documents.filter((document) => document.skill === "Vocabulary").length;

  return <section className="library-page">
    <div className="library-heading">
      <div><span className="eyebrow">Thư viện</span><h1>{vocabularyMode ? "Vocabulary theo trình độ" : "Chọn bài học cho hôm nay"}</h1><p className="library-subtitle">{vocabularyMode ? "Chọn ngôn ngữ và tầng học trước, rồi mới đi vào từng chủ đề." : "Đi theo lộ trình hoặc lọc những phần bạn chưa hoàn thành."}</p></div>
      <span className="result-count">{filtered.length}/{vocabularyMode ? vocabularyCount : documents.length} tài liệu</span>
    </div>

    <div className="library-toolbar">
      <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm tiêu đề, nội dung, heading…" /></label>
      <div className="library-controls"><label className="sort-control"><span>Sắp xếp</span><select value={sort} onChange={(event) => setSort(event.target.value as typeof sort)}><option value="path">Theo lộ trình</option><option value="unfinished">Chưa hoàn thành trước</option><option value="title">Theo tên</option></select></label><div className="skill-tabs">{skills.map((item) => <button className={skill === item ? "active" : ""} key={item} onClick={() => setSkill(item)} type="button">{item === "All" ? "Tất cả" : item}</button>)}</div></div>
    </div>

    {vocabularyMode && <div className="vocabulary-map" aria-label="Bộ lọc vocabulary theo ngôn ngữ và trình độ">
      <div className="vocabulary-map-heading"><div><span className="eyebrow">Learning map</span><h2>Tìm đúng tầng để học tiếp</h2><p>Giống một kệ sách có nhãn: mỗi level là một chặng, không còn phải cuộn qua toàn bộ Markdown.</p></div><strong>{vocabularyCount}<small> vocabulary docs</small></strong></div>
      <div className="language-tabs" role="tablist" aria-label="Ngôn ngữ vocabulary">{availableLanguages.map((item) => <button className={language === item ? "active" : ""} key={item} onClick={() => { setLanguage(item); setLevel("All"); }} type="button">{languageLabels[item]}</button>)}</div>
      <div className="level-rail" role="tablist" aria-label="Trình độ vocabulary"><button className={level === "All" ? "active" : ""} onClick={() => setLevel("All")} type="button"><span>Tất cả level</span><b>{vocabularyCount}</b></button>{availableLevels.map((item) => <button className={level === item ? "active" : ""} key={item} onClick={() => setLevel(item)} type="button"><span>{item}</span><b>{documents.filter((document) => document.skill === "Vocabulary" && document.level === item && (language === "All" || (document.language ?? "English") === language)).length}</b></button>)}</div>
    </div>}

    <div className="status-tabs" role="tablist" aria-label="Trạng thái học">{(Object.keys(statusLabels) as StatusFilter[]).map((item) => <button className={status === item ? "active" : ""} key={item} onClick={() => setStatus(item)} type="button">{statusLabels[item]}</button>)}</div>

    {vocabularyMode ? <div className="catalog-groups">{groupedByLevel.map(([groupLevel, groupDocuments]) => {
      const completedCount = groupDocuments.filter((document) => completed.includes(document.id)).length;
      return <section className={`level-section level-${groupLevel.toLowerCase()}`} key={groupLevel}><div className="level-section-heading"><div><span className="level-kicker">{language === "All" ? "Vocabulary shelf" : languageLabels[language]}</span><h2>{levelTitle(groupLevel)}</h2><p>{levelDescriptions[groupLevel] ?? "Chọn một chủ đề để bắt đầu."}</p></div><div className="level-section-count"><strong>{groupDocuments.length}</strong><span>{completedCount} đã xong</span></div></div><div className="document-grid">{groupDocuments.map(renderCard)}</div></section>;
    })}</div> : <div className="document-grid">{filtered.map(renderCard)}</div>}
    {filtered.length === 0 && <div className="empty-state">Không tìm thấy tài liệu phù hợp. Thử level, ngôn ngữ hoặc trạng thái khác nhé.</div>}
  </section>;
}
