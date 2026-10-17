import { useRef, useState, type FormEvent, type ReactElement } from "react";
import { newJourney, parseJourney, type EnglishJourney, type ReviewStatus, type StudyAttempt, type StudyError, type TopicStatus } from "./model";

interface Props {
  value?: EnglishJourney;
  onChange: (next: EnglishJourney) => void;
}
type View = "overview" | "history" | "errors";
const statusLabels: Record<ReviewStatus, string> = {
  due: "Cần ôn",
  practicing: "Đang luyện",
  stable: "Tạm vững",
};
const topicLabels: Record<TopicStatus, string> = {
  strong: "Khá vững",
  review: "Cần ôn",
  unverified: "Chưa kiểm chứng",
};
function today(): string {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Seoul" });
}
function percent(a: StudyAttempt): number {
  return Math.round((a.correct / a.total) * 100);
}
function score(a: StudyAttempt): string {
  return String(a.correct) + "/" + String(a.total);
}
function safeId(): string {
  return "entry-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
}

export default function EnglishProgress({ value, onChange }: Props): ReactElement {
  const [view, setView] = useState<View>("overview");
  const [attemptDate, setAttemptDate] = useState(today);
  const [attemptTitle, setAttemptTitle] = useState("");
  const [correct, setCorrect] = useState("");
  const [total, setTotal] = useState("");
  const [note, setNote] = useState("");
  const [errorCategory, setErrorCategory] = useState("Verb forms");
  const [incorrect, setIncorrect] = useState("");
  const [corrected, setCorrected] = useState("");
  const [explanationVi, setExplanationVi] = useState("");
  const [explanationKo, setExplanationKo] = useState("");
  const [notice, setNotice] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  const journey = value ?? newJourney();
  const attempts = [...journey.attempts].sort((a,b) => b.date.localeCompare(a.date));
  const reviewedErrors = journey.errors.filter(x => x.status === "stable").length;
  const dueErrors = journey.errors.filter(x => x.status === "due");
  const average = attempts.length ? Math.round(attempts.reduce((n,x)=>n + percent(x),0) / attempts.length) : null;

  const save = (next: EnglishJourney) => onChange({ ...next, updatedAt: new Date().toISOString() });

  const addAttempt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const c = Number(correct), t = Number(total);
    if (!attemptTitle.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(attemptDate) || !Number.isFinite(c) || !Number.isFinite(t) ||
        c < 0 || t <= 0 || c > t || !Number.isInteger(c) || !Number.isInteger(t)) {
      setNotice("Kiểm tra lại ngày, tên bài và điểm (0 ≤ đúng ≤ tổng).");
      return;
    }
    save({ ...journey, attempts: [...journey.attempts, { id: safeId(), date: attemptDate, title: attemptTitle.trim(), correct: c, total: t, note: note.trim() }] });
    setAttemptTitle(""); setCorrect(""); setTotal(""); setNote("");
    setNotice("Đã lưu bài kiểm tra trong trình duyệt. Export hoặc sync để sao lưu.");
  };

  const addError = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!incorrect.trim() || !corrected.trim()) { setNotice("Nhập câu sai và câu đã sửa."); return; }
    const next: StudyError = {
      id: safeId(), category: errorCategory, incorrect: incorrect.trim(), corrected: corrected.trim(),
      explanationVi: explanationVi.trim(), explanationKo: explanationKo.trim(), status: "due",
    };
    save({ ...journey, errors: [...journey.errors, next] });
    setIncorrect(""); setCorrected(""); setExplanationVi(""); setExplanationKo("");
    setNotice("Đã đưa lỗi mới vào danh sách cần ôn.");
  };

  const updateError = (id: string, status: ReviewStatus) => {
    save({ ...journey, errors: journey.errors.map(e => e.id === id ? { ...e, status } : e) });
  };
  const updateTopic = (id: string, status: TopicStatus) => {
    save({ ...journey, topics: journey.topics.map(t => t.id === id ? { ...t, status } : t) });
  };
  const removeAttempt = (id: string) => {
    if (window.confirm("Xóa kết quả này khỏi tiến độ?")) {
      save({ ...journey, attempts: journey.attempts.filter(x => x.id !== id) });
    }
  };
  const removeError = (id: string) => {
    if (window.confirm("Xóa lỗi này khỏi sổ tay?")) {
      save({ ...journey, errors: journey.errors.filter(x => x.id !== id) });
    }
  };
  const exportFile = () => {
    const file = new Blob([JSON.stringify({ format: "language-lab-english-journey", journey }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url; link.download = "english-learning-progress-" + today() + ".json"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const importFile = async (file?: File) => {
    if (!file) return;
    try {
      const parsed: unknown = JSON.parse(await file.text());
      const wrapper = parsed as { format?: string; journey?: unknown };
      if (!wrapper || wrapper.format !== "language-lab-english-journey") throw new Error("Invalid format");
      const imported = parseJourney(wrapper.journey);
      if (!imported) throw new Error("Invalid data");
      if ((journey.attempts.length || journey.errors.length) && !window.confirm("Import sẽ thay thế toàn bộ English Progress hiện tại. Hãy export trước nếu muốn giữ bản cũ. Tiếp tục?")) return;
      save(imported);
      setNotice("Đã nhập dữ liệu. Hãy dùng Learning OS → Sync để sao lưu sang Supabase (nếu có cấu hình).");
    } catch { setNotice("File không hợp lệ. Cần JSON định dạng language-lab-english-journey."); }
    finally { if (fileInput.current) fileInput.current.value = ""; }
  };

  return <div className="ep-page">
    <section className="ep-hero">
      <div>
        <span className="eyebrow">ENGLISH · LEARNING RECORD</span>
        <h1>English Progress <em>Dashboard</em></h1>
        <p>Theo dõi kết quả thực tế, lỗi lặp lại và những phần cần ôn. Điểm quiz phản ánh từng bài tập, không phải IELTS band hay tỷ lệ thành thạo.</p>
      </div>
      <div className="ep-actions">
        <input ref={fileInput} type="file" accept=".json,application/json" hidden onChange={e => void importFile(e.target.files?.[0])}/>
        <button type="button" onClick={() => fileInput.current?.click()}>↑ Import dữ liệu</button>
        <button type="button" onClick={exportFile}>↓ Export JSON</button>
        <a href="#lesson/english-grammar-tense-review-map">Mở bản đồ 12 thì ↗</a>
      </div>
    </section>
    <p className="ep-sync-note">Dữ liệu nhập trên màn hình được lưu local trong snapshot LanguageLab hiện có. Muốn đồng bộ giữa thiết bị, mở Learning OS → Sync và đăng nhập Supabase nếu đã cấu hình. Repository công khai không lưu nhật ký cá nhân.</p>
    {notice && <p className="ep-notice" role="status">{notice}</p>}
    <section className="ep-stats" aria-label="Thống kê học tập">
      <div><strong>{attempts.length}</strong><span>Bài kiểm tra đã ghi</span></div>
      <div><strong>{average === null ? "—" : String(average) + "%"}</strong><span>Điểm trung bình bài tập*</span></div>
      <div><strong>{dueErrors.length}</strong><span>Lỗi cần ôn</span></div>
      <div><strong>{reviewedErrors}/{journey.errors.length}</strong><span>Lỗi tự đánh dấu tạm vững</span></div>
    </section>
    <div className="ep-tabs" role="tablist" aria-label="Các màn hình English Progress">
      {([["overview","Tổng quan"],["history","Lịch sử học"],["errors","Sổ lỗi cá nhân"]] as const).map(([id,label]) =>
        <button key={id} role="tab" aria-selected={view===id} className={view===id ? "active" : ""} type="button" onClick={() => setView(id)}>{label}</button>)}
    </div>
    {view === "overview" && <div className="ep-overview">
      <section className="ep-panel">
        <div className="ep-panel-heading"><div><span className="eyebrow">LEARNING SIGNALS</span><h2>Kết quả theo buổi</h2></div><button type="button" onClick={()=>setView("history")}>Thêm kết quả →</button></div>
        {attempts.length ? <div className="ep-chart">
          {attempts.map(a => <div className="ep-chart-row" key={a.id}>
            <div className="ep-chart-meta"><strong>{a.title}</strong><small>{a.date} · {score(a)}</small></div>
            <div className="ep-meter"><span style={{width: String(percent(a)) + "%"}} /></div>
            <b>{percent(a)}%</b>
          </div>)}
        </div> : <p className="ep-empty">Chưa có lịch sử. Import dữ liệu buổi học từ ChatGPT hoặc thêm bài kiểm tra mới.</p>}
        <p className="ep-footnote">*Trung bình số học của các bài có độ khó khác nhau; không dùng để suy ra trình độ IELTS.</p>
      </section>
      <section className="ep-panel">
        <div className="ep-panel-heading"><div><span className="eyebrow">SKILL MAP</span><h2>Độ vững theo chủ đề</h2></div></div>
        <div className="ep-topic-list">
          {journey.topics.map(t => <div className="ep-topic" key={t.id}>
            <div><strong>{t.label}</strong>{t.evidence && <p>{t.evidence}</p>}</div>
            <select aria-label={"Tình trạng " + t.label} value={t.status} onChange={e => updateTopic(t.id,e.target.value as TopicStatus)}>
              {(Object.keys(topicLabels) as TopicStatus[]).map(v => <option value={v} key={v}>{topicLabels[v]}</option>)}
            </select>
          </div>)}
        </div>
        <p className="ep-footnote">Trạng thái được cập nhật thủ công; “khá vững” chưa đồng nghĩa đã kiểm tra phản xạ nói.</p>
      </section>
      <section className="ep-panel ep-span">
        <div className="ep-panel-heading"><div><span className="eyebrow">NEXT REVIEW</span><h2>Ưu tiên trước khi học bài mới</h2></div><button type="button" onClick={()=>setView("errors")}>Mở sổ lỗi →</button></div>
        {dueErrors.length ? <div className="ep-priority">{dueErrors.slice(0,5).map(e => <div key={e.id}><span>{e.category}</span><s>{e.incorrect}</s><strong>{e.corrected}</strong></div>)}</div> :
          <p className="ep-empty">Chưa có lỗi ở trạng thái “Cần ôn”. Nếu chưa import dữ liệu, hãy nhập file lịch sử trước.</p>}
      </section>
    </div>}
    {view === "history" && <div className="ep-grid">
      <section className="ep-panel">
        <div className="ep-panel-heading"><div><span className="eyebrow">STUDY LOG</span><h2>Lịch sử kiểm tra</h2></div></div>
        {attempts.length ? <div className="ep-attempts">{attempts.map(a => <article key={a.id}>
          <div><strong>{a.title}</strong><small>{a.date} · {score(a)} · {percent(a)}%</small>{a.note && <p>{a.note}</p>}</div>
          <button type="button" aria-label={"Xóa " + a.title} onClick={()=>removeAttempt(a.id)}>×</button>
        </article>)}</div> : <p className="ep-empty">Chưa có lịch sử kiểm tra.</p>}
      </section>
      <section className="ep-panel">
        <div className="ep-panel-heading"><div><span className="eyebrow">NEW ATTEMPT</span><h2>Ghi một buổi ôn</h2></div></div>
        <form className="ep-form" onSubmit={addAttempt}>
          <label>Ngày<input type="date" required value={attemptDate} onChange={e=>setAttemptDate(e.target.value)}/></label>
          <label>Tên bài / Module<input required maxLength={100} value={attemptTitle} onChange={e=>setAttemptTitle(e.target.value)} placeholder="Ví dụ: Present Perfect — retest"/></label>
          <div className="ep-form-duo"><label>Số câu đúng<input type="number" min="0" step="1" required value={correct} onChange={e=>setCorrect(e.target.value)}/></label><label>Tổng số câu<input type="number" min="1" step="1" required value={total} onChange={e=>setTotal(e.target.value)}/></label></div>
          <label>Nhận xét ngắn<textarea rows={3} value={note} onChange={e=>setNote(e.target.value)} placeholder="Những lỗi còn mắc, phản xạ nói, nội dung đã học..."/></label>
          <button className="ep-primary" type="submit">+ Lưu kết quả</button>
        </form>
      </section>
    </div>}
    {view === "errors" && <div className="ep-grid">
      <section className="ep-panel">
        <div className="ep-panel-heading"><div><span className="eyebrow">ERROR BANK</span><h2>Lỗi và cách sửa</h2></div><strong>{journey.errors.length}</strong></div>
        {journey.errors.length ? <div className="ep-error-list">{journey.errors.map(e => <article key={e.id}>
          <div className="ep-error-heading"><span>{e.category}</span><button type="button" title="Xóa lỗi" aria-label={"Xóa lỗi " + e.id} onClick={()=>removeError(e.id)}>×</button></div>
          <p className="ep-incorrect">{e.incorrect}</p><p className="ep-corrected">→ {e.corrected}</p>
          {e.explanationVi && <p className="ep-description">{e.explanationVi}</p>}
          {e.explanationKo && <p className="ep-description" lang="ko">{e.explanationKo}</p>}
          <label className="ep-status">Tự đánh giá <select value={e.status} onChange={event => updateError(e.id,event.target.value as ReviewStatus)}>{(Object.keys(statusLabels) as ReviewStatus[]).map(s=><option key={s} value={s}>{statusLabels[s]}</option>)}</select></label>
        </article>)}</div> : <p className="ep-empty">Chưa có lỗi cá nhân. Import lịch sử hoặc thêm lỗi mới.</p>}
      </section>
      <section className="ep-panel">
        <div className="ep-panel-heading"><div><span className="eyebrow">CAPTURE A MISTAKE</span><h2>Thêm lỗi mới</h2></div></div>
        <form className="ep-form" onSubmit={addError}>
          <label>Nhóm lỗi<select value={errorCategory} onChange={e=>setErrorCategory(e.target.value)}><option>Verb forms</option><option>Tense choice</option><option>Spelling</option><option>Verb patterns</option><option>Prepositions / collocations</option><option>Natural expression</option></select></label>
          <label>Câu sai<input required value={incorrect} onChange={e=>setIncorrect(e.target.value)} placeholder="I have work here"/></label>
          <label>Câu đúng<input required value={corrected} onChange={e=>setCorrected(e.target.value)} placeholder="I've worked here"/></label>
          <label>Giải thích VI<textarea rows={2} value={explanationVi} onChange={e=>setExplanationVi(e.target.value)}/></label>
          <label>Giải thích KR<textarea rows={2} value={explanationKo} onChange={e=>setExplanationKo(e.target.value)}/></label>
          <button type="submit" className="ep-primary">+ Lưu lỗi vào sổ</button>
        </form>
      </section>
    </div>}
  </div>;
}
