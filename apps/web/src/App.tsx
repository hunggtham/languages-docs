import { useCallback, useEffect, useMemo, useState, type ReactElement } from "react";
import { fetchCatalog, readProgressState, writeProgressState, type ProgressState, type ReadingStatus, type SectionBookmark } from "./lib/content";
import type { ContentCatalog, LearningDocument, Skill } from "./types";
import CatalogPage from "./features/catalog/CatalogPage";
import DocumentCard from "./features/catalog/DocumentCard";
import DocumentReader from "./features/catalog/DocumentReader";
import LearningOS from "./features/learning-os/LearningOS";
import EnglishProgress from "./features/english-progress/EnglishProgress";
import {
  awardTheoryCredit,
  getErrorsForLesson,
  newJourney,
  type LanguageCode,
  type LanguageJourney,
  type ReviewStatus,
} from "./features/english-progress/model";

function hashLesson(): string | null {
  const match = window.location.hash.match(/^#lesson\/([^?]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function hashSection(): string | undefined {
  const match = window.location.hash.match(/[?&]section=([^&]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

function hashLibrarySkill(): Skill {
  const value = window.location.hash.replace(/^#library-?/, "");
  return (["Grammar", "Vocabulary", "Writing", "Corrections"] as const).find((skill) => skill.toLowerCase() === value) ?? "All";
}

function hasStarted(progress: ProgressState, id: string): boolean {
  return Boolean(progress.sectionsByLesson[id]?.length) || progress.completedIds.includes(id);
}

function statusFor(progress: ProgressState, id: string): ReadingStatus {
  if (progress.completedIds.includes(id)) return "completed";
  return progress.statusByLesson[id] ?? (hasStarted(progress, id) ? "reading" : "unread");
}

function updateState(current: ProgressState, patch: Partial<ProgressState>): ProgressState {
  return { ...current, ...patch };
}

export default function App(): ReactElement {
  const [catalog, setCatalog] = useState<ContentCatalog | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(hashLesson());
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [selectedSection, setSelectedSection] = useState<string | undefined>(hashSection());
  const [librarySkill, setLibrarySkill] = useState<Skill>(hashLibrarySkill());
  const [progress, setProgress] = useState<ProgressState>(readProgressState());
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const [dark, setDark] = useState(() => localStorage.getItem("language-lab-theme-v1") === "dark");

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
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("language-lab-theme-v1", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handler = () => {
      setCurrentHash(window.location.hash);
      setSelectedId(hashLesson());
      setSelectedSection(hashSection());
      setLibrarySkill(hashLibrarySkill());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const selected = useMemo(() => catalog?.documents.find((document) => document.id === selectedId) ?? null, [catalog, selectedId]);
  const persist = useCallback((recipe: (current: ProgressState) => ProgressState) => {
    setProgress((current) => {
      const next = recipe(current);
      writeProgressState(next);
      return next;
    });
  }, []);
  const open = useCallback((document: LearningDocument, sectionId?: string) => {
    window.location.hash = `lesson/${encodeURIComponent(document.id)}${sectionId ? `?section=${encodeURIComponent(sectionId)}` : ""}`;
  }, []);
  const back = () => { window.location.hash = ""; };
  const completed = progress.completedIds;

  const toggleComplete = useCallback(() => {
    if (!selected) return;
    persist((current) => {
      const isDone = current.completedIds.includes(selected.id);
      const completedIds = isDone ? current.completedIds.filter((id) => id !== selected.id) : [...current.completedIds, selected.id];

      let journeys = current.journeysByLanguage ?? {
        en: current.englishJourney ?? newJourney("en"),
        ko: newJourney("ko"),
      };

      if (!isDone) {
        const lang: LanguageCode =
          selected.language?.toLowerCase().startsWith("korean") || selected.id.includes("korean")
            ? "ko"
            : "en";
        const targetJourney = journeys[lang] ?? newJourney(lang);
        const { journey: updatedJourney } = awardTheoryCredit(targetJourney, selected.id, selected.title);
        journeys = { ...journeys, [lang]: updatedJourney };
      }

      return updateState(current, {
        completedIds,
        statusByLesson: { ...current.statusByLesson, [selected.id]: isDone ? "reading" : "completed" },
        progressPctByLesson: { ...current.progressPctByLesson, [selected.id]: isDone ? current.progressPctByLesson[selected.id] ?? 0 : 100 },
        journeysByLanguage: journeys,
        englishJourney: journeys.en,
      });
    });
  }, [persist, selected]);

  const saveLessonProgress = useCallback((lessonId: string, sections: string[], lastSectionId: string, progressPct: number) => {
    persist((current) => {
      let journeys = current.journeysByLanguage ?? {
        en: current.englishJourney ?? newJourney("en"),
        ko: newJourney("ko"),
      };

      if (progressPct >= 100 && selected && selected.id === lessonId) {
        const lang: LanguageCode =
          selected.language?.toLowerCase().startsWith("korean") || selected.id.includes("korean")
            ? "ko"
            : "en";
        const targetJourney = journeys[lang] ?? newJourney(lang);
        const { journey: updatedJourney } = awardTheoryCredit(targetJourney, lessonId, selected.title);
        journeys = { ...journeys, [lang]: updatedJourney };
      }

      return updateState(current, {
        sectionsByLesson: { ...current.sectionsByLesson, [lessonId]: [...new Set(sections)] },
        lastSectionByLesson: { ...current.lastSectionByLesson, [lessonId]: lastSectionId },
        progressPctByLesson: { ...current.progressPctByLesson, [lessonId]: progressPct },
        lastOpenedByLesson: { ...current.lastOpenedByLesson, [lessonId]: new Date().toISOString() },
        statusByLesson: { ...current.statusByLesson, [lessonId]: current.statusByLesson[lessonId] === "review" ? "review" : "reading" },
        journeysByLanguage: journeys,
        englishJourney: journeys.en,
      });
    });
  }, [persist, selected]);

  const toggleReadLater = useCallback((id: string) => {
    persist((current) => {
      const saved = current.readLaterIds.includes(id);
      return updateState(current, { readLaterIds: saved ? current.readLaterIds.filter((item) => item !== id) : [id, ...current.readLaterIds] });
    });
  }, [persist]);

  const toggleBookmark = useCallback((lessonId: string, headingId: string, title: string) => {
    persist((current) => {
      const existing = current.bookmarksByLesson[lessonId] ?? [];
      const index = existing.findIndex((item) => item.headingId === headingId);
      const bookmarks: SectionBookmark[] = index >= 0 ? existing.filter((item) => item.headingId !== headingId) : [...existing, { headingId, title, savedAt: new Date().toISOString() }];
      return updateState(current, { bookmarksByLesson: { ...current.bookmarksByLesson, [lessonId]: bookmarks }});
    });
  }, [persist]);

  const setStatus = useCallback((id: string, status: ReadingStatus) => {
    persist((current) => updateState(current, {
      statusByLesson: { ...current.statusByLesson, [id]: status },
      completedIds: status === "completed" ? [...new Set([...current.completedIds, id])] : current.completedIds.filter((item) => item !== id),
      progressPctByLesson: status === "completed" ? { ...current.progressPctByLesson, [id]: 100 } : current.progressPctByLesson,
    }));
  }, [persist]);

  const updateErrorStatus = useCallback((errorId: string, nextStatus: ReviewStatus) => {
    persist((current) => {
      const journeys = current.journeysByLanguage ?? {
        en: current.englishJourney ?? newJourney("en"),
        ko: newJourney("ko"),
      };
      const updatedJourneys: Record<string, LanguageJourney> = {};
      for (const [l, j] of Object.entries(journeys)) {
        updatedJourneys[l] = {
          ...j,
          errors: j.errors.map((e) => (e.id === errorId ? { ...e, status: nextStatus } : e)),
          updatedAt: new Date().toISOString(),
        };
      }
      return updateState(current, {
        journeysByLanguage: updatedJourneys,
        englishJourney: updatedJourneys.en,
      });
    });
  }, [persist]);

  const started = catalog?.documents.filter((document) => hasStarted(progress, document.id)) ?? [];
  const inProgress = started.filter((document) => !completed.includes(document.id) && statusFor(progress, document.id) !== "review");
  const orderedInProgress = [...inProgress].sort((left, right) => new Date(progress.lastOpenedByLesson[right.id] ?? 0).getTime() - new Date(progress.lastOpenedByLesson[left.id] ?? 0).getTime());
  const continueDocument = orderedInProgress[0] ?? catalog?.documents.find((document) => document.order !== 0) ?? null;
  const recent = (orderedInProgress.length ? orderedInProgress : (catalog?.documents.filter((document) => document.order !== 0) ?? [])).slice(0, 4);
  const completionRate = catalog?.documents.length ? Math.round((completed.length / catalog.documents.length) * 100) : 0;
  const bookmarkCount = Object.values(progress.bookmarksByLesson).reduce((total, items) => total + items.length, 0);
  const reviewCount = catalog?.documents.filter((document) => statusFor(progress, document.id) === "review").length ?? 0;

  const allLessonErrors = useMemo(() => {
    if (!selected) return [];
    const lang: LanguageCode =
      selected.language?.toLowerCase().startsWith("korean") || selected.id.includes("korean")
        ? "ko"
        : "en";
    const journeys = progress.journeysByLanguage ?? {
      en: progress.englishJourney ?? newJourney("en"),
      ko: newJourney("ko"),
    };
    const journey = journeys[lang] ?? journeys.en;
    return getErrorsForLesson(journey, selected.id);
  }, [progress.journeysByLanguage, progress.englishJourney, selected]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">L</span><span>Language<span>Lab</span></span></a>
        <nav aria-label="Điều hướng chính"><a className={!selected && !currentHash.startsWith("#library") && currentHash !== "#english-progress" && currentHash !== "#progress" ? "active" : ""} href="#">Tổng quan</a><a className={!selected && currentHash.startsWith("#library") ? "active" : ""} href="#library">Thư viện</a><a className={!selected && (currentHash === "#english-progress" || currentHash === "#progress") ? "active" : ""} href="#progress">Tiến độ năng lực</a></nav>
        <div className="topbar-actions">{catalog && <LearningOS documents={catalog.documents} progress={progress} onOpen={open} onToggleReadLater={toggleReadLater} onSetStatus={setStatus} onImport={(next) => { writeProgressState(next); setProgress(next); }} />}<button className="theme-toggle" type="button" aria-label={dark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"} onClick={() => setDark((current) => !current)}>{dark ? "☼" : "☾"}</button></div>
        <div className="topbar-status"><span className="status-dot" />{completed.length}/{catalog?.documents.length ?? "—"} bài hoàn thành</div>
      </header>

      {selected ? <main className="main-content"><DocumentReader document={selected} completed={completed.includes(selected.id)} status={statusFor(progress, selected.id)} sectionProgress={progress.sectionsByLesson[selected.id] ?? []} lastSectionId={progress.lastSectionByLesson[selected.id]} bookmarks={progress.bookmarksByLesson[selected.id] ?? []} readLater={progress.readLaterIds.includes(selected.id)} initialSectionId={selectedSection} onBack={back} onComplete={toggleComplete} onStatusChange={(status) => setStatus(selected.id, status)} onToggleReadLater={() => toggleReadLater(selected.id)} onToggleBookmark={(headingId, title) => toggleBookmark(selected.id, headingId, title)} onProgress={(sections, lastSectionId, percent) => saveLessonProgress(selected.id, sections, lastSectionId, percent)} lessonErrors={allLessonErrors} onUpdateErrorStatus={updateErrorStatus} /></main> : <main className="main-content">{catalogError ? <div className="error-box">{catalogError} Hãy chạy `python3 scripts/build-content-index.py` trước khi khởi động web.</div> : !catalog ? <div className="loading-state page-loading">Đang chuẩn bị không gian học…</div> : (currentHash === "#english-progress" || currentHash === "#progress") ? <EnglishProgress value={progress.journeysByLanguage?.[progress.selectedLanguage || "en"] ?? progress.englishJourney} journeysByLanguage={progress.journeysByLanguage} initialLanguage={progress.selectedLanguage || "en"} documents={catalog.documents} onLanguageChange={(lang) => { persist((current) => updateState(current, { selectedLanguage: lang })); }} onChange={(journey, lang) => { persist((current) => { const currentJourneys = current.journeysByLanguage ?? { en: current.englishJourney ?? newJourney("en"), ko: newJourney("ko") }; const updatedJourneys = { ...currentJourneys, [lang]: journey }; return updateState(current, { journeysByLanguage: updatedJourneys, englishJourney: lang === "en" ? journey : currentJourneys.en, selectedLanguage: lang }); }); }} /> : currentHash.startsWith("#library") ? <CatalogPage key={librarySkill} documents={catalog.documents} progress={progress} completed={completed} onOpen={open} onToggleReadLater={toggleReadLater} initialSkill={librarySkill} /> : <>
        <section className="hero"><div className="hero-copy"><span className="eyebrow">Học ngoại ngữ, theo nhịp của bạn</span><h1>Mỗi ngày một bước nhỏ.<br /><em>Tiến bộ thật.</em></h1><p>Không gian gọn gàng để bạn đi theo một lộ trình, lưu lại tiến độ và quay lại đúng chỗ đang học.</p><a className="primary-button" href="#library">Mở lộ trình <span>→</span></a></div><div className="hero-note"><span className="note-pin">✦</span><span className="eyebrow">{continueDocument && inProgress.length ? "Tiếp tục học" : "Gợi ý hôm nay"}</span><strong>{continueDocument?.title ?? "Một bài học đang chờ bạn"}</strong><span>{continueDocument?.description ?? "Chọn một tài liệu để bắt đầu."}</span>{continueDocument && <button type="button" onClick={() => open(continueDocument)}>{inProgress.length ? "Quay lại bài học" : "Mở bài học"}&nbsp; ↗</button>}</div></section>
        <section className="stats-row"><div><strong>{catalog.documents.length}</strong><span>tài liệu trong lộ trình</span></div><div><strong>{started.length}</strong><span>đang theo dõi</span></div><div><strong>{completed.length}</strong><span>đã hoàn thành</span></div><div className="streak"><strong>{completionRate}%</strong><span>tiến độ tổng</span><i>✦</i></div></section>
        <section className="ep-home-banner"><div><span className="eyebrow">ENGLISH PROGRESS</span><h2>Ôn đúng lỗi, thấy rõ tiến bộ.</h2><p>Lịch sử bài kiểm tra · sổ lỗi Anh–Hàn–Việt · theo dõi điểm yếu trước khi học bài mới.</p></div><a href="#english-progress">Xem tiến độ tiếng Anh →</a></section>
        <section className="os-dashboard"><div className="section-heading"><div><span className="eyebrow">LEARNING OS</span><h2>Nhịp học của bạn</h2></div><span className="dashboard-note">{bookmarkCount} bookmark · {reviewCount} cần ôn · {progress.readLaterIds.length} đọc sau</span></div><div className="os-dashboard-grid"><button type="button" onClick={() => continueDocument && open(continueDocument)}><span className="dashboard-icon">↗</span><strong>Continue Reading</strong><small>{continueDocument ? continueDocument.title : "Chưa có lịch sử đọc"}</small><i>{continueDocument ? `${Math.round(progress.progressPctByLesson[continueDocument.id] ?? 0)}% · Mở tiếp` : "Mở một bài học"}</i></button><button type="button" onClick={() => window.location.hash = "#library"}><span className="dashboard-icon">★</span><strong>Đọc sau</strong><small>{progress.readLaterIds.length ? `${progress.readLaterIds.length} tài liệu đang chờ` : "Chưa lưu tài liệu"}</small><i>Xem trong thư viện</i></button><button type="button" onClick={() => document.querySelector<HTMLButtonElement>(".learning-os-button")?.click()}><span className="dashboard-icon">☆</span><strong>Bookmarks</strong><small>{bookmarkCount ? `${bookmarkCount} section đã lưu` : "Chưa có bookmark"}</small><i>Mở Learning OS</i></button><button type="button" onClick={() => document.querySelector<HTMLButtonElement>(".learning-os-button")?.click()}><span className="dashboard-icon">↻</span><strong>Review Queue</strong><small>{reviewCount ? `${reviewCount} tài liệu cần ôn` : "Review queue đang trống"}</small><i>Đánh dấu trong reader</i></button></div></section>
        <section className="home-section"><div className="section-heading"><div><span className="eyebrow">{inProgress.length ? "Tiếp tục" : "Bắt đầu"}</span><h2>{inProgress.length ? "Quay lại nơi bạn dừng lại" : "Chọn một chủ đề để vào nhịp"}</h2></div><a href="#library">Xem tất cả →</a></div><div className="document-grid home-grid">{recent.map((document) => <DocumentCard key={document.id} document={document} completed={completed.includes(document.id)} sectionCount={progress.sectionsByLesson[document.id]?.length ?? 0} progressPercent={progress.progressPctByLesson[document.id] ?? 0} readLater={progress.readLaterIds.includes(document.id)} onOpen={() => open(document)} onToggleReadLater={() => toggleReadLater(document.id)} />)}</div></section>
        <section className="home-section skill-overview"><div className="section-heading"><div><span className="eyebrow">Lộ trình</span><h2>Học theo kỹ năng</h2></div></div><div className="skill-cards">{["Grammar", "Vocabulary", "Writing", "Corrections"].map((skill) => { const count = catalog.documents.filter((item) => item.skill === skill).length; return <a href={`#library-${skill.toLowerCase()}`} key={skill} className="skill-card"><span>{skill === "Grammar" ? "Aa" : skill === "Vocabulary" ? "✦" : skill === "Writing" ? "↗" : "✓"}</span><strong>{skill}</strong><small>{count} tài liệu</small><b>→</b></a>; })}</div></section>
      </>}</main>}
      <footer><span>LanguageLab · Personal learning workspace</span><span>{catalog?.language ?? "English"} → {catalog?.learnerLanguage ?? "Vietnamese"}</span></footer>
    </div>
  );
}
