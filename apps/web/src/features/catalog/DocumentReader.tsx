import { useCallback, useEffect, useMemo, useRef, useState, type ReactElement } from "react";
import { fetchDocument, type ReadingStatus, type SectionBookmark } from "../../lib/content";
import type { LearningDocument } from "../../types";
import Markdown, { extractHeadings, type MarkdownHeading } from "../../shared/Markdown";

const statusLabels: Record<ReadingStatus, string> = { unread: "Chưa đọc", reading: "Đang đọc", review: "Cần ôn lại", completed: "Hoàn thành" };

export default function DocumentReader({ document, completed, status, sectionProgress, lastSectionId, bookmarks, readLater, initialSectionId, onBack, onComplete, onStatusChange, onToggleReadLater, onToggleBookmark, onProgress }: { document: LearningDocument; completed: boolean; status: ReadingStatus; sectionProgress: string[]; lastSectionId?: string; bookmarks: SectionBookmark[]; readLater: boolean; initialSectionId?: string; onBack: () => void; onComplete: () => void; onStatusChange: (status: ReadingStatus) => void; onToggleReadLater: () => void; onToggleBookmark: (headingId: string, title: string) => void; onProgress: (sections: string[], lastSectionId: string, percent: number) => void }): ReactElement {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [readSections, setReadSections] = useState<string[]>(sectionProgress);
  const [activeHeading, setActiveHeading] = useState<string | null>(lastSectionId ?? null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [offlineSaved, setOfflineSaved] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const restoredDocument = useRef<string | null>(null);
  const headings = useMemo<MarkdownHeading[]>(() => content ? extractHeadings(content) : [], [content]);
  const percentFor = useCallback((sections: string[]) => headings.length ? Math.round((sections.filter((id) => headings.some((heading) => heading.id === id)).length / headings.length) * 100) : 0, [headings]);

  useEffect(() => {
    const controller = new AbortController();
    setContent(null); setError(null); setDrawerOpen(false); setReadSections(sectionProgress); setActiveHeading(lastSectionId ?? null); restoredDocument.current = null;
    fetchDocument(document.contentUrl, controller.signal).then(setContent).catch((reason: unknown) => {
      if (reason instanceof DOMException && reason.name === "AbortError") return;
      setError(reason instanceof Error ? reason.message : "Không đọc được bài học");
    });
    return () => controller.abort();
  }, [document.id, document.contentUrl]);

  useEffect(() => () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); }, [document.id]);

  useEffect(() => {
    setReadSections(sectionProgress);
    setActiveHeading(lastSectionId ?? null);
  }, [document.id, lastSectionId, sectionProgress]);

  const markSection = useCallback((id: string) => {
    setActiveHeading(id);
    setReadSections((current) => {
      if (current.includes(id)) return current;
      const next = [...current, id];
      onProgress(next, id, percentFor(next));
      return next;
    });
  }, [onProgress, percentFor]);

  useEffect(() => {
    if (!content || !headings.length) return;
    const observer = new IntersectionObserver((entries) => entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
      const id = (entry.target as HTMLElement).dataset.lessonHeading;
      if (id) markSection(id);
    }), { rootMargin: "-12% 0px -68% 0px", threshold: 0.05 });
    globalThis.document.querySelectorAll<HTMLElement>("[data-lesson-heading]").forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [content, headings, markSection]);

  useEffect(() => {
    if (!content || restoredDocument.current === document.id) return;
    restoredDocument.current = document.id;
    const targetId = initialSectionId && headings.some((heading) => heading.id === initialSectionId) ? initialSectionId : lastSectionId;
    const frame = window.requestAnimationFrame(() => {
      if (targetId) globalThis.document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [content, document.id, headings, initialSectionId, lastSectionId]);

  const headingById = useMemo(() => new Map(headings.map((heading) => [heading.id, heading])), [headings]);
  const visibleSections = headings.filter((heading) => readSections.includes(heading.id));
  const progressPercent = percentFor(readSections);
  const jumpTo = (heading: MarkdownHeading) => {
    markSection(heading.id);
    globalThis.document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#lesson/${encodeURIComponent(document.id)}?section=${encodeURIComponent(heading.id)}`);
    setDrawerOpen(false);
  };
  const isBookmarked = (id: string) => bookmarks.some((item) => item.headingId === id);
  const setReaderStatus = (next: ReadingStatus) => { onStatusChange(next); };
  const saveOffline = async () => {
    try {
      if (!("caches" in window)) throw new Error("cache unavailable");
      const cache = await caches.open("language-lab-user-v1");
      const assetUrl = new URL(document.contentUrl.replace(/^\/+/, ""), new URL(import.meta.env.BASE_URL, window.location.origin)).toString();
      await cache.add(assetUrl);
      setOfflineSaved(true);
    } catch { setOfflineSaved(false); }
  };
  const toggleSpeech = () => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const text = (content ?? "").replace(/```[\s\S]*?```/g, "").replace(/[#>*_`|]/g, " ").replace(/\s+/g, " ").trim();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(utterance); setSpeaking(true);
  };

  return (
    <section className="reader-page">
      <button className="back-button" type="button" onClick={onBack}>← Thư viện bài học</button>
      <div className="reader-header"><div><span className="eyebrow">{document.track ?? document.skill} · {document.level}</span><h1>{document.title}</h1><p>{document.description}</p></div><div className="reader-header-actions"><select className="reader-status" aria-label="Trạng thái tài liệu" value={status} onChange={(event) => setReaderStatus(event.target.value as ReadingStatus)}>{(Object.keys(statusLabels) as ReadingStatus[]).map((item) => <option key={item} value={item}>{statusLabels[item]}</option>)}</select><button className={`read-later-button ${readLater ? "active" : ""}`} type="button" onClick={onToggleReadLater} aria-pressed={readLater}>{readLater ? "★ Đã lưu đọc sau" : "☆ Đọc sau"}</button><button className="reader-tool-button" type="button" onClick={saveOffline}>{offlineSaved ? "✓ Offline" : "↓ Offline"}</button><button className="reader-tool-button" type="button" onClick={toggleSpeech}>{speaking ? "■ Dừng đọc" : "🔊 Đọc từ đây"}</button><button className={`complete-button ${completed ? "completed" : ""}`} type="button" onClick={onComplete}>{completed ? "✓ Đã hoàn thành" : "Đánh dấu hoàn thành"}</button></div></div>
      <div className="reader-mobile-actions"><button type="button" onClick={() => setDrawerOpen(true)}>☰ Mục lục</button><button type="button" onClick={() => { const heading = activeHeading ? headingById.get(activeHeading) : undefined; if (heading) onToggleBookmark(heading.id, heading.text); }}>{activeHeading && isBookmarked(activeHeading) ? "★ Bookmark" : "☆ Bookmark"}</button></div>
      <div className="reader-layout">
        <article className="lesson-surface">{error ? <div className="error-box">{error}</div> : content === null ? <div className="loading-state">Đang tải bài học…</div> : <Markdown content={content} />}</article>
        <aside className={`reader-aside ${drawerOpen ? "open" : ""}`}><div className="reader-aside-head"><span className="aside-label">READING PROGRESS</span><button type="button" className="aside-close" onClick={() => setDrawerOpen(false)} aria-label="Đóng mục lục">×</button></div><div className="reader-progress-bar" role="progressbar" aria-label="Tiến độ bài học" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}><span style={{ width: `${progressPercent}%` }} /></div><strong className="reader-progress-value">{progressPercent}%</strong><p className="reader-progress-copy">{visibleSections.length}/{headings.length || "—"} mục đã đọc. Vị trí gần nhất được tự lưu.</p><div className="aside-rule" /><div className="aside-title-row"><span className="aside-label">MỤC LỤC</span><span className="aside-count">{headings.length}</span></div><nav className="lesson-toc" aria-label="Mục lục bài học">{headings.filter((heading) => heading.level <= 3).map((heading) => <div className={`toc-row ${activeHeading === heading.id ? "active" : ""}`} key={heading.id}><button className={`${readSections.includes(heading.id) ? "read" : ""} toc-level-${heading.level}`} type="button" onClick={() => jumpTo(heading)}><span>{readSections.includes(heading.id) ? "✓" : "○"}</span>{heading.text}</button><button className={`toc-star ${isBookmarked(heading.id) ? "active" : ""}`} type="button" onClick={() => onToggleBookmark(heading.id, heading.text)} aria-label={isBookmarked(heading.id) ? `Bỏ bookmark ${heading.text}` : `Bookmark ${heading.text}`} aria-pressed={isBookmarked(heading.id)}>{isBookmarked(heading.id) ? "★" : "☆"}</button></div>)}</nav><div className="aside-rule" /><div className="aside-title-row"><span className="aside-label">BOOKMARKS</span><span className="aside-count">{bookmarks.length}</span></div><div className="reader-bookmarks">{bookmarks.length ? bookmarks.map((bookmark) => <div className="reader-bookmark-row" key={bookmark.headingId}><button type="button" onClick={() => { const heading = headingById.get(bookmark.headingId); if (heading) jumpTo(heading); }}>{bookmark.title}</button><button type="button" className="bookmark-remove" onClick={() => onToggleBookmark(bookmark.headingId, bookmark.title)} aria-label={`Xóa bookmark ${bookmark.title}`}>×</button></div>) : <p className="reader-bookmark-empty">Bấm ☆ cạnh một section để lưu.</p>}</div><div className="aside-rule" /><span className="aside-label">GỢI Ý HỌC</span><h3>Học một chút, đều đặn</h3><p>Đọc một mục, tự đặt một câu ví dụ rồi nói thành tiếng trước khi chuyển sang bài khác.</p><div className="aside-rule" /><span className="aside-label">NGUỒN</span><code>{document.source}</code></aside>
      </div>
      {drawerOpen && <button className="reader-overlay" type="button" aria-label="Đóng mục lục" onClick={() => setDrawerOpen(false)} />}
      <div className="reading-progress-rail" aria-hidden="true"><span style={{ height: `${progressPercent}%` }} /></div>
    </section>
  );
}
