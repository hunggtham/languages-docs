import { useEffect, useMemo, useRef, useState, type ReactElement } from "react";
import { fetchContentGraph, fetchSearchIndex, type ProgressState, type ReadingStatus } from "../../lib/content";
import { cloudConfigured, cloudSession, cloudSignIn, cloudSignOut, cloudSignUp, syncSnapshot } from "../../lib/cloudSync";
import type { ContentGraph, LearningDocument, SearchIndexEntry } from "../../types";

type Tab = "read-later" | "bookmarks" | "review" | "search" | "graph" | "sync" | "offline";
type InstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: "accepted" | "dismissed" }> };

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
  return JSON.stringify({ format: "language-lab-progress", snapshot_version: 2, exported_at: new Date().toISOString(), app: "language-lab", progress }, null, 2);
}

function snippet(text: string, query: string): string {
  const index = text.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
  if (index < 0) return text.slice(0, 180);
  return `${index > 70 ? "…" : ""}${text.slice(Math.max(0, index - 70), index + query.length + 110)}${index + query.length + 110 < text.length ? "…" : ""}`;
}

export default function LearningOS({ documents, progress, onOpen, onToggleReadLater, onSetStatus, onImport }: LearningOSProps): ReactElement {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("read-later");
  const [query, setQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState<SearchIndexEntry[] | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [graph, setGraph] = useState<ContentGraph | null>(null);
  const [graphLoading, setGraphLoading] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [offlineMessage, setOfflineMessage] = useState("");
  const [cloudEmail, setCloudEmail] = useState("");
  const [cloudPassword, setCloudPassword] = useState("");
  const [cloudUser, setCloudUser] = useState<string | null>(null);
  const [cloudMessage, setCloudMessage] = useState(cloudConfigured() ? "Chưa đăng nhập" : "Local only · chưa cấu hình Supabase");
  const [cloudBusy, setCloudBusy] = useState(false);
  const importInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (event: Event) => { event.preventDefault(); setInstallPrompt(event as InstallPromptEvent); };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  useEffect(() => {
    if (tab !== "search" || searchIndex || searchLoading) return;
    setSearchLoading(true);
    fetchSearchIndex().then(setSearchIndex).catch(() => setSearchIndex([])).finally(() => setSearchLoading(false));
  }, [searchIndex, searchLoading, tab]);

  useEffect(() => {
    if (tab !== "graph" || graph || graphLoading) return;
    setGraphLoading(true);
    fetchContentGraph().then(setGraph).catch(() => setGraph(null)).finally(() => setGraphLoading(false));
  }, [graph, graphLoading, tab]);

  useEffect(() => {
    if (!cloudConfigured()) return;
    cloudSession().then((session) => setCloudUser(session?.user?.email ?? null)).catch(() => setCloudUser(null));
  }, []);

  const openTab = (nextTab: Tab) => { setTab(nextTab); setOpen(true); };
  const download = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([exportPayload(progress)], { type: "application/json" }));
    link.download = `language-lab-sync-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  };
  const importFile = async (file?: File) => {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text()) as { version?: number; progress?: ProgressState; snapshot_version?: number };
      const next = parsed.progress;
      if ((!parsed.version && parsed.snapshot_version !== 2) || !next) throw new Error("invalid snapshot");
      onImport(next);
    } catch { window.alert("Sync file không hợp lệ."); }
  };
  const cacheIndexes = async () => {
    try {
      if (!("caches" in window)) throw new Error("cache unavailable");
      const cache = await caches.open("language-lab-user-v1");
      await cache.addAll(["content/catalog.json", "content/search-index.json", "content/graph.json"]);
      setOfflineMessage("Đã cache catalog, search và graph.");
    } catch { setOfflineMessage("Trình duyệt không cho phép cache index."); }
  };
  const install = async () => {
    if (!installPrompt) { setOfflineMessage("Hãy mở trang qua HTTPS hoặc localhost để cài PWA."); return; }
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };
  const cloudAction = async (action: () => Promise<void>, success: string) => {
    setCloudBusy(true); setCloudMessage("");
    try { await action(); setCloudMessage(success); } catch (error) { setCloudMessage(error instanceof Error ? error.message : "Cloud sync thất bại."); }
    finally { setCloudBusy(false); }
  };
  const signIn = () => cloudAction(async () => { await cloudSignIn(cloudEmail.trim(), cloudPassword); const session = await cloudSession(); setCloudUser(session?.user?.email ?? null); }, "Đã đăng nhập.");
  const signUp = () => cloudAction(async () => { await cloudSignUp(cloudEmail.trim(), cloudPassword); setCloudMessage("Đã gửi đăng ký; nếu bật email confirmation, hãy xác nhận trước khi sync."); }, "Đăng ký thành công.");
  const syncCloud = () => cloudAction(async () => { const remote = await syncSnapshot(progress); if (remote) onImport(remote); }, "Đã đồng bộ snapshot.");
  const signOut = () => cloudAction(async () => { await cloudSignOut(); setCloudUser(null); }, "Đã đăng xuất.");

  const readLater = progress.readLaterIds.map((id) => documents.find((document) => document.id === id)).filter((document): document is LearningDocument => Boolean(document));
  const bookmarks = Object.entries(progress.bookmarksByLesson).flatMap(([lessonId, items]) => items.map((item) => ({ lessonId, ...item })));
  const review = documents.filter((document) => progress.statusByLesson[document.id] === "review");
  const searchResults = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized || !searchIndex) return [];
    return searchIndex.filter((item) => `${item.title} ${item.skill} ${item.level} ${item.track ?? ""} ${item.headings.map((heading) => heading.text).join(" ")} ${item.text}`.toLocaleLowerCase().includes(normalized)).slice(0, 24);
  }, [query, searchIndex]);
  const graphRows = useMemo(() => {
    if (!graph) return [];
    const degree = new Map(graph.nodes.map((node) => [node.id, 0]));
    graph.edges.forEach((edge) => { degree.set(edge.source, (degree.get(edge.source) ?? 0) + 1); degree.set(edge.target, (degree.get(edge.target) ?? 0) + 1); });
    return [...graph.nodes].sort((left, right) => (degree.get(right.id) ?? 0) - (degree.get(left.id) ?? 0)).slice(0, 160).map((node) => ({ node, degree: degree.get(node.id) ?? 0 }));
  }, [graph]);

  return (
    <>
      <button className="learning-os-button" type="button" onClick={() => openTab("read-later")} aria-label="Mở Learning OS">Learning OS</button>
      {open && <div className="os-modal" role="dialog" aria-modal="true" aria-label="Learning OS">
        <button className="os-backdrop" type="button" aria-label="Đóng Learning OS" onClick={() => setOpen(false)} />
        <section className="os-sheet">
          <header className="os-sheet-head"><div><span className="eyebrow">LEARNING OS</span><h2>Không gian học của bạn</h2></div><button className="os-close" type="button" onClick={() => setOpen(false)} aria-label="Đóng">×</button></header>
          <nav className="os-tabs" aria-label="Learning OS tabs">{(["read-later", "bookmarks", "review", "search", "graph", "sync", "offline"] as Tab[]).map((item) => <button key={item} className={tab === item ? "active" : ""} type="button" onClick={() => setTab(item)}>{item === "read-later" ? "Đọc sau" : item === "bookmarks" ? "Bookmarks" : item === "review" ? "Review" : item === "search" ? "Search" : item === "graph" ? "Graph" : item === "sync" ? "Sync" : "Offline"}</button>)}</nav>
          <div className="os-body">
            {tab === "read-later" && <section><div className="os-panel-title"><div><span className="aside-label">READ LATER</span><h3>Tài liệu đã lưu</h3></div><strong>{readLater.length}</strong></div>{readLater.length ? <div className="os-list">{readLater.map((document) => <div className="os-list-row" key={document.id}><button type="button" onClick={() => { setOpen(false); onOpen(document); }}><strong>{document.title}</strong><span>{document.track ?? document.skill} · {Math.round(progress.progressPctByLesson[document.id] ?? 0)}%</span></button><button className="os-star active" type="button" onClick={() => onToggleReadLater(document.id)} aria-label={`Bỏ ${document.title} khỏi danh sách đọc sau`}>★</button></div>)}</div> : <p className="os-empty">Chưa có tài liệu nào. Bấm ☆ trên card hoặc trong reader để lưu.</p>}</section>}
            {tab === "bookmarks" && <section><div className="os-panel-title"><div><span className="aside-label">GLOBAL BOOKMARKS</span><h3>Section đã lưu</h3></div><strong>{bookmarks.length}</strong></div>{bookmarks.length ? <div className="os-list">{bookmarks.map((item) => <div className="os-list-row" key={`${item.lessonId}-${item.headingId}`}><button type="button" onClick={() => { const document = documents.find((candidate) => candidate.id === item.lessonId); if (document) { setOpen(false); onOpen(document, item.headingId); } }}><strong>{item.title}</strong><span>{docTitle(documents, item.lessonId)}</span></button></div>)}</div> : <p className="os-empty">Chưa có bookmark. Trong reader, bấm ☆ cạnh một mục lục.</p>}</section>}
            {tab === "review" && <section><div className="os-panel-title"><div><span className="aside-label">REVIEW QUEUE</span><h3>Ôn lại khi cần</h3></div><strong>{review.length}</strong></div>{review.length ? <div className="os-list">{review.map((document) => <div className="os-list-row" key={document.id}><button type="button" onClick={() => { setOpen(false); onOpen(document); }}><strong>{document.title}</strong><span>{Math.round(progress.progressPctByLesson[document.id] ?? 0)}% · {document.skill}</span></button><select aria-label={`Trạng thái ${document.title}`} value="review" onChange={(event) => onSetStatus(document.id, event.target.value as ReadingStatus)}><option value="review">Cần ôn lại</option><option value="reading">Đang đọc</option><option value="completed">Hoàn thành</option></select></div>)}</div> : <p className="os-empty">Review queue đang trống. Đổi trạng thái trong reader để thêm tài liệu.</p>}</section>}
            {tab === "search" && <section><div className="os-panel-title"><div><span className="aside-label">FULL-TEXT SEARCH</span><h3>Tìm trong nội dung</h3></div><strong>{searchResults.length}</strong></div><input className="os-search-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Từ khóa, heading hoặc cụm từ…" />{searchLoading && <p className="os-empty">Đang tải search index…</p>}{!searchLoading && query.trim().length < 2 && <p className="os-empty">Nhập ít nhất 2 ký tự để tìm trong toàn bộ bài học.</p>}{searchResults.length ? <div className="os-list">{searchResults.map((item) => { const document = documents.find((candidate) => candidate.id === item.id); return <div className="os-list-row" key={item.id}><button type="button" onClick={() => { if (document) { setOpen(false); onOpen(document); } }}><strong>{item.title}</strong><span>{item.skill} · {item.level}</span><small>{snippet(item.text, query)}</small></button></div>; })}</div> : query.trim().length >= 2 && !searchLoading ? <p className="os-empty">Không tìm thấy nội dung phù hợp.</p> : null}</section>}
            {tab === "graph" && <section><div className="os-panel-title"><div><span className="aside-label">KNOWLEDGE GRAPH</span><h3>Quan hệ giữa tài liệu</h3></div><strong>{graph?.edges.length ?? "—"}</strong></div>{graphLoading && <p className="os-empty">Đang tải graph index…</p>}{graph && <><p className="os-copy">{graph.nodes.length} nodes · {graph.edges.length} internal links. Các tài liệu nhiều liên kết hiện trước.</p><div className="os-list">{graphRows.map(({ node, degree }) => { const document = documents.find((candidate) => candidate.id === node.id); return <div className="os-list-row" key={node.id}><button type="button" onClick={() => { if (document) { setOpen(false); onOpen(document); } }}><strong>{node.title}</strong><span>{node.skill} · {node.level} · {degree} links</span></button></div>; })}</div></>}</section>}
            {tab === "sync" && <section><div className="os-panel-title"><div><span className="aside-label">PORTABLE SYNC V2</span><h3>Mang tiến độ theo bạn</h3></div><strong>JSON</strong></div><p className="os-copy">Snapshot v2 giữ nguyên tiến độ, section, bookmark, danh sách Đọc sau và các field mới. Nếu có Supabase config, bạn có thể đăng nhập để sync thêm.</p><div className="os-sync-actions"><button className="os-action" type="button" onClick={download}>Export sync file</button><button className="os-action" type="button" onClick={() => importInput.current?.click()}>Import sync file</button><input ref={importInput} hidden type="file" accept="application/json" onChange={(event) => importFile(event.target.files?.[0])} /></div><textarea className="os-sync-preview" readOnly value={exportPayload(progress)} aria-label="Sync snapshot preview" /><div className="cloud-sync-card"><strong>{cloudUser ?? cloudMessage}</strong>{cloudConfigured() && !cloudUser && <><input type="email" value={cloudEmail} onChange={(event) => setCloudEmail(event.target.value)} placeholder="Email" aria-label="Email Supabase" /><input type="password" value={cloudPassword} onChange={(event) => setCloudPassword(event.target.value)} placeholder="Password" aria-label="Password Supabase" /><div className="os-sync-actions"><button className="os-action" type="button" disabled={cloudBusy} onClick={signIn}>Đăng nhập</button><button className="os-action" type="button" disabled={cloudBusy} onClick={signUp}>Đăng ký</button></div></>}{cloudConfigured() && cloudUser && <div className="os-sync-actions"><button className="os-action" type="button" disabled={cloudBusy} onClick={syncCloud}>Sync cloud</button><button className="os-action" type="button" disabled={cloudBusy} onClick={signOut}>Đăng xuất</button></div>}</div></section>}
            {tab === "offline" && <section><div className="os-panel-title"><div><span className="aside-label">PWA / OFFLINE</span><h3>Đọc khi mất mạng</h3></div><strong>{navigator.onLine ? "Online" : "Offline"}</strong></div><p className="os-copy">Service worker cache app shell, catalog, search index, graph và những bài học bạn đã mở. Bạn có thể cài LanguageLab như một app riêng.</p><div className="os-sync-actions"><button className="os-action" type="button" onClick={install}>Cài LanguageLab</button><button className="os-action" type="button" onClick={cacheIndexes}>Cache index</button></div><p className="os-empty" aria-live="polite">{offlineMessage || ("serviceWorker" in navigator ? "Service worker được hỗ trợ trên trình duyệt này." : "Trình duyệt không hỗ trợ service worker.")}</p></section>}
          </div>
        </section>
      </div>}
    </>
  );
}
