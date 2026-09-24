import { useMemo, useState, type ReactElement } from "react";
import type { ProgressState } from "../../lib/content";
import type { LearningDocument, Skill } from "../../types";
import DocumentCard from "./DocumentCard";

const skills: Skill[] = ["All", "Grammar", "Vocabulary", "Writing", "Corrections"];
type StatusFilter = "all" | "todo" | "progress" | "complete";

const statusLabels: Record<StatusFilter, string> = {
  all: "Tất cả",
  todo: "Chưa học",
  progress: "Đang học",
  complete: "Đã xong",
};

function isComplete(progress: ProgressState, id: string): boolean {
  return progress.completedIds.includes(id);
}

function sectionCount(progress: ProgressState, id: string): number {
  return progress.sectionsByLesson[id]?.length ?? 0;
}

export default function CatalogPage({ documents, progress, completed, onOpen, initialSkill = "All" }: { documents: LearningDocument[]; progress: ProgressState; completed: string[]; onOpen: (document: LearningDocument) => void; initialSkill?: Skill }): ReactElement {
  const [skill, setSkill] = useState<Skill>(initialSkill);
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"path" | "title" | "unfinished">("path");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = documents.filter((document) => {
      const count = sectionCount(progress, document.id);
      const done = isComplete(progress, document.id);
      const matchesStatus = status === "all" || (status === "complete" && done) || (status === "progress" && count > 0 && !done) || (status === "todo" && count === 0 && !done);
      const searchable = `${document.title} ${document.description} ${document.level} ${document.skill} ${document.track ?? ""}`.toLowerCase();
      return (skill === "All" || document.skill === skill) && matchesStatus && searchable.includes(normalizedQuery);
    });
    return [...result].sort((left, right) => sort === "title" ? left.title.localeCompare(right.title) : sort === "unfinished" ? Number(isComplete(progress, left.id)) - Number(isComplete(progress, right.id)) : (left.order ?? 999) - (right.order ?? 999));
  }, [documents, progress, query, skill, sort, status]);

  return <section className="library-page"><div className="library-heading"><div><span className="eyebrow">Thư viện</span><h1>Chọn bài học cho hôm nay</h1><p className="library-subtitle">Đi theo lộ trình hoặc lọc những phần bạn chưa hoàn thành.</p></div><span className="result-count">{filtered.length}/{documents.length} tài liệu</span></div><div className="library-toolbar"><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm theo chủ đề, level…" /></label><div className="library-controls"><label className="sort-control"><span>Sắp xếp</span><select value={sort} onChange={(event) => setSort(event.target.value as typeof sort)}><option value="path">Theo lộ trình</option><option value="unfinished">Chưa hoàn thành trước</option><option value="title">Theo tên</option></select></label><div className="skill-tabs">{skills.map((item) => <button className={skill === item ? "active" : ""} key={item} onClick={() => setSkill(item)} type="button">{item === "All" ? "Tất cả" : item}</button>)}</div></div></div><div className="status-tabs" role="tablist" aria-label="Trạng thái học">{(Object.keys(statusLabels) as StatusFilter[]).map((item) => <button className={status === item ? "active" : ""} key={item} onClick={() => setStatus(item)} type="button">{statusLabels[item]}</button>)}</div><div className="document-grid">{filtered.map((document) => <DocumentCard key={document.id} document={document} completed={completed.includes(document.id)} sectionCount={sectionCount(progress, document.id)} onOpen={() => onOpen(document)} />)}</div>{filtered.length === 0 && <div className="empty-state">Không tìm thấy tài liệu phù hợp. Thử từ khóa hoặc trạng thái khác nhé.</div>}</section>;
}
