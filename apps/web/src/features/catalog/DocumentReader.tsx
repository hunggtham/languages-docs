import { useCallback, useEffect, useMemo, useRef, useState, type ReactElement } from "react";
import { fetchDocument } from "../../lib/content";
import type { LearningDocument } from "../../types";
import Markdown, { extractHeadings, type MarkdownHeading } from "../../shared/Markdown";

export default function DocumentReader({ document, completed, sectionProgress, lastSectionId, onBack, onComplete, onProgress }: { document: LearningDocument; completed: boolean; sectionProgress: string[]; lastSectionId?: string; onBack: () => void; onComplete: () => void; onProgress: (sections: string[], lastSectionId: string) => void }): ReactElement {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [readSections, setReadSections] = useState<string[]>(sectionProgress);
  const [activeHeading, setActiveHeading] = useState<string | null>(lastSectionId ?? null);
  const restoredDocument = useRef<string | null>(null);
  const headings = useMemo<MarkdownHeading[]>(() => content ? extractHeadings(content) : [], [content]);

  useEffect(() => {
    const controller = new AbortController();
    setContent(null); setError(null);
    fetchDocument(document.contentUrl, controller.signal).then(setContent).catch((reason: unknown) => {
      if (reason instanceof DOMException && reason.name === "AbortError") return;
      setError(reason instanceof Error ? reason.message : "Không đọc được bài học");
    });
    return () => controller.abort();
  }, [document]);

  useEffect(() => {
    setReadSections(sectionProgress);
    setActiveHeading(lastSectionId ?? null);
  }, [document.id, lastSectionId, sectionProgress]);

  const markSection = useCallback((id: string) => {
    setActiveHeading(id);
    setReadSections((current) => {
      const next = current.includes(id) ? current : [...current, id];
      onProgress(next, id);
      return next;
    });
  }, [onProgress]);

  useEffect(() => {
    if (!content || !headings.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
        const id = (entry.target as HTMLElement).dataset.lessonHeading;
        if (id) markSection(id);
      });
    }, { rootMargin: "-12% 0px -68% 0px", threshold: 0.05 });
    globalThis.document.querySelectorAll<HTMLElement>("[data-lesson-heading]").forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [content, headings, markSection]);

  useEffect(() => {
    if (!content || !lastSectionId || restoredDocument.current === document.id) return;
    restoredDocument.current = document.id;
    const frame = window.requestAnimationFrame(() => globalThis.document.getElementById(lastSectionId)?.scrollIntoView({ block: "start" }));
    return () => window.cancelAnimationFrame(frame);
  }, [content, document.id, lastSectionId]);

  const visibleSections = headings.filter((heading) => readSections.includes(heading.id));
  const progressPercent = headings.length ? Math.round((visibleSections.length / headings.length) * 100) : 0;
  const jumpTo = (heading: MarkdownHeading) => {
    markSection(heading.id);
    globalThis.document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="reader-page">
      <button className="back-button" type="button" onClick={onBack}>← Thư viện bài học</button>
      <div className="reader-header">
        <div><span className="eyebrow">{document.track ?? document.skill} · {document.level}</span><h1>{document.title}</h1><p>{document.description}</p></div>
        <button className={`complete-button ${completed ? "completed" : ""}`} type="button" onClick={onComplete}>{completed ? "✓ Đã hoàn thành" : "Đánh dấu hoàn thành"}</button>
      </div>
      <div className="reader-layout">
        <article className="lesson-surface">
          {error ? <div className="error-box">{error}</div> : content === null ? <div className="loading-state">Đang tải bài học…</div> : <Markdown content={content} />}
        </article>
        <aside className="reader-aside">
          <span className="aside-label">Tiến độ tự lưu</span>
          <div className="reader-progress-bar" role="progressbar" aria-label="Tiến độ bài học" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}><span style={{ width: `${progressPercent}%` }} /></div>
          <strong className="reader-progress-value">{progressPercent}%</strong>
          <p className="reader-progress-copy">{visibleSections.length}/{headings.length || "—"} mục đã đọc. Bạn có thể đóng trang và quay lại đúng mục đang học.</p>
          <div className="aside-rule" />
          <span className="aside-label">Mục lục</span>
          <nav className="lesson-toc" aria-label="Mục lục bài học">
            {headings.filter((heading) => heading.level <= 3).map((heading) => <button key={heading.id} className={`${activeHeading === heading.id ? "active" : ""} ${readSections.includes(heading.id) ? "read" : ""} toc-level-${heading.level}`} type="button" onClick={() => jumpTo(heading)}><span>{readSections.includes(heading.id) ? "✓" : "○"}</span>{heading.text}</button>)}
          </nav>
          <div className="aside-rule" />
          <span className="aside-label">Gợi ý học</span>
          <h3>Học một chút, đều đặn</h3>
          <p>Đọc một mục, tự đặt một câu ví dụ rồi nói thành tiếng trước khi chuyển sang bài khác.</p>
          <div className="aside-rule" /><span className="aside-label">Nguồn</span><code>{document.source}</code>
        </aside>
      </div>
    </section>
  );
}
