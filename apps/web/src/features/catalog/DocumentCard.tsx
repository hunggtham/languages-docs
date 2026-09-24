import type { ReactElement } from "react";
import type { LearningDocument } from "../../types";

const skillIcon: Record<LearningDocument["skill"], string> = {
  Grammar: "Aa",
  Vocabulary: "✦",
  Writing: "↗",
  Corrections: "✓",
};

export default function DocumentCard({ document, completed, sectionCount = 0, onOpen }: { document: LearningDocument; completed: boolean; sectionCount?: number; onOpen: () => void }): ReactElement {
  return (
    <button className={`document-card ${completed ? "is-complete" : ""}`} onClick={onOpen} type="button">
      <span className={`document-icon skill-${document.skill.toLowerCase()}`}>{skillIcon[document.skill]}</span>
      <span className="document-card-body">
        <span className="document-card-meta"><span>{document.track ?? document.skill}</span><span>{document.level}</span></span>
        <strong>{document.title}</strong>
        <span className="document-description">{document.description}</span>
        <span className="document-card-footer"><span>{Math.max(5, Math.round(document.characters / 9000))} phút đọc</span><span>{completed ? "✓ Đã hoàn thành" : sectionCount ? `Đã đọc ${sectionCount} mục` : "Chưa bắt đầu →"}</span></span>
      </span>
    </button>
  );
}
