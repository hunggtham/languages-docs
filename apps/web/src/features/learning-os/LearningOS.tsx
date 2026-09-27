import { useRef, useState, type ReactElement } from "react";
import type { ProgressState, ReadingStatus } from "../../lib/content";
import type { LearningDocument } from "../../types";

type Tab = "read-later" | "bookmarks" | "review" | "sync";

interface LearningOSProps {
  documents: LearningDocument[];
  progress: ProgressState;
  onOpen: (document: LearningDocument, sectionId?: string) => void;
  onToggleReadLater: (id: string) => void;
  onSetStatus: (id: string, status: ReadingStatus) => void;
  onImport: (state: ProgressState) => void;
}

function docTitle(documents: LearningDocument[], id: string): string {
  return documents.find((document) => document.id === id)?.title ?? id;
}

function exportPayload(progress: ProgressState): string {
  return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), app: "language-lab", progress }, null, 2);
}

export default function LearningOS({ documents, progress, onOpen, onToggleReadLater, onSetStatus, onImport }: LearningOSProps): ReactElement {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("read-later");
  const importInput = useRef<HTMLInputElement>(null);

  const openTab = (nextTab: Tab) => { setTab(nextTab); setOpen(true); };
  const download = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([exportPayload(progress)], { type: "application/json" }));
    link.download = `language-lab-sync-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  };
  const importFile = async (file?: File) => {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text()) as { version?: number; progress?: ProgressState };
      if (parsed.version !== 1 || !parsed.progress) throw new Error("invalid snapshot");
      onImport(parsed.progress);
    } catch {
      window.alert("Sync file không hợp lệ.");
    }
  };

  const readLater = progress.readLaterIds.map((id) => documents.find((document) => document.id === id)).filter((document): document is LearningDocument => Boolean(document));
  const bookmarks = Object.entries(progress.bookmarksByLesson).flatMap(([lessonId, items]) => items.map((item) => ({ lessonId, ...item })));
  const review = documents.filter((document) => progress.statusByLesson[document.id] === "review");

  return (
    <>
      <button className="learning-os-button" type="button" onClick={() => openTab("read-later")} aria-label="Mở Learning OS">Learning OS</button>
      {open && <div className="os-modal" role="dialog" aria-modal="true" aria-label="Learning OS">
        <button className="os-backdrop" type="button" aria-label="Đóng Learning OS" onClick={() => setOpen(false)} />
        <section className="os-sheet">
          <header className="os-sheet-head"><div><span className="eyebrow">LEARNING OS</span><h2>Không gian học của bạn</h2></div><button className="os-close" type="button" onClick={() => setOpen(false)} aria-label="Đóng">×</button></header>
          <nav className="os-tabs" aria-label="Learning OS tabs">{(["read-later", "bookmarks", "review", "sync"] as Tab[]).map((item) => <button key={item} className={tab === item ? "active" : ""} type="button" onClick={() => setTab(item)}>{item === "read-later" ? "Đọc sau" : item === "bookmarks" ? "Bookmarks" : item === "review" ? "Review" : "Sync"}</button>)}</nav>
          <div className="os-body">
            {tab === "read-later" && <section><div className="os-panel-title"><div><span className="aside-label">READ LATER</span><h3>Tài liệu đã lưu</h3></div><strong>{readLater.length}</strong></div>{readLater.length ? <div className="os-list">{readLater.map((document) => <div className="os-list-row" key={document.id}><button type="button" onClick={() => { setOpen(false); onOpen(document); }}><strong>{document.title}</strong><span>{document.track ?? document.skill} · {Math.round(progress.progressPctByLesson[document.id] ?? 0)}%</span></button><button className="os-star active" type="button" onClick={() => onToggleReadLater(document.id)} aria-label={`Bỏ ${document.title} khỏi danh sách đọc sau`}>★</button></div>)}</div> : <p className="os-empty">Chưa có tài liệu nào. Bấm ☆ trên card hoặc trong reader để lưu.</p>}</section>}
            {tab === "bookmarks" && <section><div className="os-panel-title"><div><span className="aside-label">GLOBAL BOOKMARKS</span><h3>Section đã lưu</h3></div><strong>{bookmarks.length}</strong></div>{bookmarks.length ? <div className="os-list">{bookmarks.map((item) => <div className="os-list-row" key={`${item.lessonId}-${item.headingId}`}><button type="button" onClick={() => { const document = documents.find((candidate) => candidate.id === item.lessonId); if (document) { setOpen(false); onOpen(document, item.headingId); } }}><strong>{item.title}</strong><span>{docTitle(documents, item.lessonId)}</span></button></div>)}</div> : <p className="os-empty">Chưa có bookmark. Trong reader, bấm ☆ cạnh một mục lục.</p>}</section>}
            {tab === "review" && <section><div className="os-panel-title"><div><span className="aside-label">REVIEW QUEUE</span><h3>Ôn lại khi cần</h3></div><strong>{review.length}</strong></div>{review.length ? <div className="os-list">{review.map((document) => <div className="os-list-row" key={document.id}><button type="button" onClick={() => { setOpen(false); onOpen(document); }}><strong>{document.title}</strong><span>{Math.round(progress.progressPctByLesson[document.id] ?? 0)}% · {document.skill}</span></button><select aria-label={`Trạng thái ${document.title}`} value="review" onChange={(event) => onSetStatus(document.id, event.target.value as ReadingStatus)}><option value="review">Cần ôn lại</option><option value="reading">Đang đọc</option><option value="completed">Hoàn thành</option></select></div>)}</div> : <p className="os-empty">Review queue đang trống. Đổi trạng thái trong reader để thêm tài liệu.</p>}</section>}
            {tab === "sync" && <section><div className="os-panel-title"><div><span className="aside-label">PORTABLE SYNC</span><h3>Mang tiến độ theo bạn</h3></div><strong>JSON</strong></div><p className="os-copy">Snapshot này chứa trạng thái đọc, section đã xem, bookmark, danh sách Đọc sau và tài liệu hoàn thành. Export trên máy này rồi import sang máy khác.</p><div className="os-sync-actions"><button className="os-action" type="button" onClick={download}>Export sync file</button><button className="os-action" type="button" onClick={() => importInput.current?.click()}>Import sync file</button><input ref={importInput} hidden type="file" accept="application/json" onChange={(event) => importFile(event.target.files?.[0])} /></div><textarea className="os-sync-preview" readOnly value={exportPayload(progress)} aria-label="Sync snapshot preview" /></section>}
          </div>
        </section>
      </div>}
    </>
  );
}
