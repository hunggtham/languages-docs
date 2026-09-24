import { useCallback, useEffect, useMemo, useState, type ReactElement } from "react";
import { fetchCatalog, readProgressState, writeProgressState, type ProgressState } from "./lib/content";
import type { ContentCatalog, LearningDocument, Skill } from "./types";
import CatalogPage from "./features/catalog/CatalogPage";
import DocumentCard from "./features/catalog/DocumentCard";
import DocumentReader from "./features/catalog/DocumentReader";

function hashLesson(): string | null {
  const match = window.location.hash.match(/^#lesson\/(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function hashLibrarySkill(): Skill {
  const value = window.location.hash.replace(/^#library-?/, "");
  return (["Grammar", "Vocabulary", "Writing", "Corrections"] as const).find((skill) => skill.toLowerCase() === value) ?? "All";
}

function hasStarted(progress: ProgressState, id: string): boolean {
  return Boolean(progress.sectionsByLesson[id]?.length) || progress.completedIds.includes(id);
}

export default function App(): ReactElement {
  const [catalog, setCatalog] = useState<ContentCatalog | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(hashLesson());
  const [librarySkill, setLibrarySkill] = useState<Skill>(hashLibrarySkill());
  const [progress, setProgress] = useState<ProgressState>(readProgressState());
  const [catalogError, setCatalogError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchCatalog(controller.signal)
      .then(setCatalog)
      .catch((reason: unknown) => {
        if (!(reason instanceof DOMException && reason.name === "AbortError")) setCatalogError("Chưa tải được thư viện nội dung.");
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const handler = () => {
      setSelectedId(hashLesson());
      setLibrarySkill(hashLibrarySkill());
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const selected = useMemo(() => catalog?.documents.find((document) => document.id === selectedId) ?? null, [catalog, selectedId]);
  const open = (document: LearningDocument) => { window.location.hash = `lesson/${encodeURIComponent(document.id)}`; };
  const back = () => { window.location.hash = ""; };
  const completed = progress.completedIds;

  const toggleComplete = useCallback(() => {
    if (!selected) return;
    setProgress((current) => {
      const next: ProgressState = {
        ...current,
        completedIds: current.completedIds.includes(selected.id)
          ? current.completedIds.filter((id) => id !== selected.id)
          : [...current.completedIds, selected.id],
      };
      writeProgressState(next);
      return next;
    });
  }, [selected]);

  const saveLessonProgress = useCallback((lessonId: string, sections: string[], lastSectionId: string) => {
    setProgress((current) => {
      const next: ProgressState = {
        ...current,
        sectionsByLesson: { ...current.sectionsByLesson, [lessonId]: [...new Set(sections)] },
        lastSectionByLesson: { ...current.lastSectionByLesson, [lessonId]: lastSectionId },
      };
      writeProgressState(next);
      return next;
    });
  }, []);

  const started = catalog?.documents.filter((document) => hasStarted(progress, document.id)) ?? [];
  const inProgress = started.filter((document) => !completed.includes(document.id));
  const continueDocument = inProgress[0] ?? catalog?.documents.find((document) => document.order !== 0) ?? null;
  const recent = inProgress.slice(0, 4).length ? inProgress.slice(0, 4) : (catalog?.documents.filter((document) => document.order !== 0).slice(0, 4) ?? []);
  const completionRate = catalog?.documents.length ? Math.round((completed.length / catalog.documents.length) * 100) : 0;

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">L</span><span>Language<span>Lab</span></span></a>
        <nav aria-label="Điều hướng chính">
          <a className={!selected && !window.location.hash.startsWith("#library") ? "active" : ""} href="#">Tổng quan</a>
          <a className={!selected && window.location.hash.startsWith("#library") ? "active" : ""} href="#library">Thư viện</a>
        </nav>
        <div className="topbar-status"><span className="status-dot" />{completed.length}/{catalog?.documents.length ?? "—"} bài hoàn thành</div>
      </header>

      {selected ? (
        <main className="main-content"><DocumentReader document={selected} completed={completed.includes(selected.id)} sectionProgress={progress.sectionsByLesson[selected.id] ?? []} lastSectionId={progress.lastSectionByLesson[selected.id]} onBack={back} onComplete={toggleComplete} onProgress={(sections, lastSectionId) => saveLessonProgress(selected.id, sections, lastSectionId)} /></main>
      ) : (
        <main className="main-content">
          {catalogError ? <div className="error-box">{catalogError} Hãy chạy `python3 scripts/build-content-index.py` trước khi khởi động web.</div> : !catalog ? <div className="loading-state page-loading">Đang chuẩn bị không gian học…</div> : window.location.hash.startsWith("#library") ? <CatalogPage key={librarySkill} documents={catalog.documents} progress={progress} completed={completed} onOpen={open} initialSkill={librarySkill} /> : (
            <>
              <section className="hero">
                <div className="hero-copy"><span className="eyebrow">Học ngoại ngữ, theo nhịp của bạn</span><h1>Mỗi ngày một bước nhỏ.<br /><em>Tiến bộ thật.</em></h1><p>Không gian gọn gàng để bạn đi theo một lộ trình, lưu lại tiến độ và quay lại đúng chỗ đang học.</p><a className="primary-button" href="#library">Mở lộ trình <span>→</span></a></div>
                <div className="hero-note"><span className="note-pin">✦</span><span className="eyebrow">{continueDocument && inProgress.length ? "Tiếp tục học" : "Gợi ý hôm nay"}</span><strong>{continueDocument?.title ?? "Một bài học đang chờ bạn"}</strong><span>{continueDocument?.description ?? "Chọn một tài liệu để bắt đầu."}</span>{continueDocument && <button type="button" onClick={() => open(continueDocument)}>{inProgress.length ? "Quay lại bài học" : "Mở bài học"}&nbsp; ↗</button>}</div>
              </section>
              <section className="stats-row"><div><strong>{catalog.documents.length}</strong><span>tài liệu trong lộ trình</span></div><div><strong>{started.length}</strong><span>đang theo dõi</span></div><div><strong>{completed.length}</strong><span>đã hoàn thành</span></div><div className="streak"><strong>{completionRate}%</strong><span>tiến độ tổng</span><i>✦</i></div></section>
              <section className="home-section"><div className="section-heading"><div><span className="eyebrow">{inProgress.length ? "Tiếp tục" : "Bắt đầu"}</span><h2>{inProgress.length ? "Quay lại nơi bạn dừng lại" : "Chọn một chủ đề để vào nhịp"}</h2></div><a href="#library">Xem tất cả →</a></div><div className="document-grid home-grid">{recent.map((document) => <DocumentCard key={document.id} document={document} completed={completed.includes(document.id)} sectionCount={progress.sectionsByLesson[document.id]?.length ?? 0} onOpen={() => open(document)} />)}</div></section>
              <section className="home-section skill-overview"><div className="section-heading"><div><span className="eyebrow">Lộ trình</span><h2>Học theo kỹ năng</h2></div></div><div className="skill-cards">{["Grammar", "Vocabulary", "Writing", "Corrections"].map((skill) => { const count = catalog.documents.filter((item) => item.skill === skill).length; return <a href={`#library-${skill.toLowerCase()}`} key={skill} className="skill-card"><span>{skill === "Grammar" ? "Aa" : skill === "Vocabulary" ? "✦" : skill === "Writing" ? "↗" : "✓"}</span><strong>{skill}</strong><small>{count} tài liệu</small><b>→</b></a>; })}</div></section>
            </>
          )}
        </main>
      )}
      <footer><span>LanguageLab · Personal learning workspace</span><span>{catalog?.language ?? "English"} → {catalog?.learnerLanguage ?? "Vietnamese"}</span></footer>
    </div>
  );
}
