import type { ReactElement } from "react";
import type { LearningDocument } from "../../types";

const skillIcon: Record<LearningDocument["skill"], string> = {
  Grammar: "Aa",
  Vocabulary: "✦",
  Writing: "↗",
  Corrections: "✓",
};

export default function DocumentCard({ document, completed, sectionCount = 0, progressPercent = 0, readLater = false, onOpen, onToggleReadLater }: { document: LearningDocument; completed: boolean; sectionCount?: number; progressPercent?: number; readLater?: boolean; onOpen: () => void; onToggleReadLater?: () => void }): ReactElement {
  return (
    <article className={`document-card-shell ${completed ? "is-complete" : ""}`}>
      <button className="document-card" onClick={onOpen} type="button">
        <span className={`document-icon skill-${document.skill.toLowerCase()}`}>{skillIcon[document.skill]}</span>
        <span className="document-card-body">
          <span className="document-card-meta"><span>{document.language ?? "English"}</span><span>{document.track ?? document.skill}</span><span>{document.level}</span></span>
          <strong>{document.title}</strong>
          <span className="document-description">{document.description}</span>
          <span className="document-card-footer"><span>{Math.max(5, Math.round(document.characters / 9000))} phút đọc</span><span>{completed ? "✓ Đã hoàn thành" : sectionCount ? `Đã đọc ${sectionCount} mục` : "Chưa bắt đầu →"}</span></span>
        </span>
      </button>
      {onToggleReadLater && <button className={`card-read-later ${readLater ? "active" : ""}`} type="button" aria-label={readLater ? "Bỏ khỏi danh sách đọc sau" : "Lưu vào danh sách đọc sau"} aria-pressed={readLater} onClick={onToggleReadLater}>{readLater ? "★" : "☆"}</button>}
      {progressPercent > 0 && <span className="card-progress-rail" aria-label={`Tiến độ ${Math.round(progressPercent)}%`}><span style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }} /></span>}
    </article>
  );
}
