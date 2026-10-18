import { Fragment, useMemo, useRef, useState, type FormEvent, type ReactElement } from "react";
import type { LearningDocument } from "../../types";
import {
  DOMAIN_METAS_BY_LANG,
  getScoreMeta,
  getStandardTopics,
  newJourney,
  parseJourney,
  applySmartAIPatch,
  generateAIStudyPrompt,
  generateAICompactProfile,
  type AIPatchResult,
  type LanguageCode,
  type LanguageJourney,
  type ReviewStatus,
  type ScoreMeta,
  type SkillDomain,
  type StudyAttempt,
  type StudyError,
  type StudyTopic,
  type TopicStatus,
} from "./model";

interface Props {
  value?: LanguageJourney;
  journeysByLanguage?: Record<string, LanguageJourney>;
  initialLanguage?: LanguageCode;
  documents?: LearningDocument[];
  onChange: (next: LanguageJourney, lang: LanguageCode) => void;
  onLanguageChange?: (lang: LanguageCode) => void;
}

type MainView = "overview" | "history" | "errors" | "admin";
type LayoutMode = "grid" | "table" | "chart";
type AdminSection = "scores" | "add-topic" | "add-attempt" | "add-error";
type TableSortColumn = "name" | "level" | "score" | "theory" | "errors";

const reviewStatusLabels: Record<ReviewStatus, string> = {
  due: "Cần ôn",
  practicing: "Đang luyện",
  stable: "Tạm vững",
};

const ERROR_CATEGORIES_BY_LANG: Record<LanguageCode, string[]> = {
  en: [
    "Tense choice (Chọn thì)",
    "Verb forms (Dạng động từ)",
    "Conditionals (Câu điều kiện)",
    "Passive Voice (Câu bị động)",
    "Relative Clauses (Mệnh đề quan hệ)",
    "Prepositions & Collocations (Giới từ & Cụm từ)",
    "Academic Vocabulary (Từ vựng học thuật)",
    "Spelling & Mechanics (Chính tả & Dấu câu)",
    "Natural Expression (Diễn đạt tự nhiên)",
    "Pronunciation & Intonation (Phát âm & Ngữ điệu)",
  ],
  ko: [
    "Trợ từ 은/는 vs 이/가 (Topic vs Subject)",
    "Trợ từ tân ngữ 을/를 & Vị trí 에/에서",
    "Kính ngữ 높임말 (드시다, 댁, 진지...)",
    "Đuôi câu 해요 vs 합니다 thể",
    "Vĩ tố liên kết -아서/어서 vs -(으)니까",
    "Vĩ tố dẫn nhập bối cảnh -는데/(으)ㄴ데",
    "Giả định -(으)면, -(으)려면, -더라도",
    "Câu gián tiếp -다고 하다, -(으)라고 하다",
    "Từ vựng TOPIK & Cụm từ chuyên môn",
    "Chính tả, phát âm & biến âm (받침)",
  ],
};

const VOCAB_LEVELS_BY_LANG: Record<LanguageCode, string[]> = {
  en: ["A1", "A2", "B1", "B2", "C1", "C2"],
  ko: ["TOPIK 1", "TOPIK 2", "TOPIK 3", "TOPIK 4", "TOPIK 5", "TOPIK 6"],
};

const VOCAB_TOPIC_GROUPS = [
  "Đời sống",
  "Ẩm thực",
  "Công sở",
  "Y tế",
  "Công nghệ",
  "Môi trường",
  "Học thuật",
];

function today(): string {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Seoul" });
}

function percent(a: StudyAttempt): number {
  return Math.round((a.correct / a.total) * 100);
}

function scoreRatio(a: StudyAttempt): string {
  return `${a.correct}/${a.total}`;
}

function safeId(): string {
  return "entry-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
}

export default function EnglishProgress({
  value,
  journeysByLanguage,
  initialLanguage = "en",
  documents = [],
  onChange,
  onLanguageChange,
}: Props): ReactElement {
  const [currentLang, setCurrentLang] = useState<LanguageCode>(initialLanguage);
  const [view, setView] = useState<MainView>("overview");
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("grid");
  const [adminSection, setAdminSection] = useState<AdminSection>("scores");

  // Filter states
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [selectedVocabLevel, setSelectedVocabLevel] = useState<string>("all");
  const [selectedVocabGroup, setSelectedVocabGroup] = useState<string>("all");
  const [tableSort, setTableSort] = useState<{ col: TableSortColumn; desc: boolean }>({
    col: "score",
    desc: true,
  });

  // Filter by topic in Sổ lỗi (Requirement 4)
  const [topicFilterForErrors, setTopicFilterForErrors] = useState<string | null>(null);
  const [errorStatusFilter, setErrorStatusFilter] = useState<ReviewStatus | "all">("all");
  const [errorSearch, setErrorSearch] = useState("");
  const [errorViewMode, setErrorViewMode] = useState<"cards" | "timeline">("cards");

  // Admin Drawer & Quick focus states (Requirement 3)
  const [adminDrawerOpen, setAdminDrawerOpen] = useState(false);
  const [selectedTopicForAdmin, setSelectedTopicForAdmin] = useState<string | null>(null);

  // Admin filters
  const [adminDomainFilter, setAdminDomainFilter] = useState<string>("all");
  const [adminSearch, setAdminSearch] = useState("");

  // Attempt Form
  const [attemptDate, setAttemptDate] = useState(today);
  const [attemptTitle, setAttemptTitle] = useState("");
  const [correct, setCorrect] = useState("");
  const [total, setTotal] = useState("");
  const [note, setNote] = useState("");

  // Custom Topic Form
  const [newTopicDomain, setNewTopicDomain] = useState<string>("grammar");
  const [newTopicCategory, setNewTopicCategory] = useState("Ngữ pháp học thuật");
  const [newTopicLabel, setNewTopicLabel] = useState("");
  const [newTopicSubtopic, setNewTopicSubtopic] = useState("");
  const [newTopicLevel, setNewTopicLevel] = useState<string>("B1");
  const [newTopicGroup, setNewTopicGroup] = useState<string>("Học thuật");
  const [newTopicScore, setNewTopicScore] = useState<number>(5);
  const [newTopicEvidence, setNewTopicEvidence] = useState("");

  // Error Form (Requirement 4: topicId link)
  const [errorDate, setErrorDate] = useState(today);
  const [errorTopicId, setErrorTopicId] = useState("");
  const [errorLessonId, setErrorLessonId] = useState("");
  const [errorCategory, setErrorCategory] = useState(ERROR_CATEGORIES_BY_LANG.en[0]);
  const [incorrect, setIncorrect] = useState("");
  const [corrected, setCorrected] = useState("");
  const [explanationVi, setExplanationVi] = useState("");
  const [explanationKo, setExplanationKo] = useState("");

  const [notice, setNotice] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  // Depth 2 & 4: Accordion collapse state for Category Groups & Micro-skills (Default: All Expanded)
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [showMicroSkills, setShowMicroSkills] = useState(true);
  const [collapsedCharts, setCollapsedCharts] = useState<Record<string, boolean>>({});

  const toggleChartCollapse = (chartId: string) => {
    setCollapsedCharts((prev) => ({ ...prev, [chartId]: !prev[chartId] }));
  };
  const expandAllCharts = () => setCollapsedCharts({});
  const collapseAllCharts = () => setCollapsedCharts({ d1: true, d2: true, d3: true, d4: true });

  // Category Quick-Nav Bar Filter state (Pills)
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("all");

  // Requirement 4: Smart AI Assistant Modal State
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiModalTab, setAiModalTab] = useState<"prompt" | "sync" | "profile">("prompt");
  const [aiSyncInput, setAiSyncInput] = useState("");
  const [aiPatchResult, setAiPatchResult] = useState<AIPatchResult | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Active Journey for current language
  const journey = useMemo<LanguageJourney>(() => {
    if (journeysByLanguage?.[currentLang]) {
      return journeysByLanguage[currentLang];
    }
    if (value && value.language === currentLang) {
      return value;
    }
    return newJourney(currentLang);
  }, [journeysByLanguage, value, currentLang]);

  const save = (next: LanguageJourney) => {
    onChange({ ...next, updatedAt: new Date().toISOString() }, currentLang);
  };

  const handleLanguageSwitch = (lang: LanguageCode) => {
    setCurrentLang(lang);
    setSelectedDomain("all");
    setSelectedCategoryFilter("all");
    setSelectedVocabLevel("all");
    setSelectedVocabGroup("all");
    setTopicFilterForErrors(null);
    setErrorCategory(ERROR_CATEGORIES_BY_LANG[lang][0]);
    onLanguageChange?.(lang);
  };

  const domainMetas = DOMAIN_METAS_BY_LANG[currentLang] ?? DOMAIN_METAS_BY_LANG.en;
  const standardTopics = getStandardTopics(currentLang);
  const standardIdSet = useMemo(() => new Set(standardTopics.map((t) => t.id)), [standardTopics]);

  // Topic ID -> error count map (Requirement 4)
  const errorsByTopicId = useMemo(() => {
    const map = new Map<string, number>();
    for (const err of journey.errors) {
      if (err.topicId) {
        map.set(err.topicId, (map.get(err.topicId) ?? 0) + 1);
      }
    }
    return map;
  }, [journey.errors]);

  // Topic ID -> topic object map
  const topicMap = useMemo(() => {
    const map = new Map<string, StudyTopic>();
    for (const t of journey.topics) {
      map.set(t.id, t);
    }
    return map;
  }, [journey.topics]);

  // Lesson Title Map
  const lessonTitleMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const doc of documents) {
      map.set(doc.id, doc.title);
    }
    return map;
  }, [documents]);

  // Competency Statistics
  const totalTopics = journey.topics.length;
  const avgCompetencyScore = totalTopics
    ? (journey.topics.reduce((acc, t) => acc + t.score, 0) / totalTopics).toFixed(1)
    : "0.0";
  const masteryCount = journey.topics.filter((t) => t.score >= 9).length;
  const proficientCount = journey.topics.filter((t) => t.score >= 7 && t.score < 9).length;
  const developingCount = journey.topics.filter((t) => t.score >= 5 && t.score < 7).length;
  const needsWorkCount = journey.topics.filter((t) => t.score < 5).length;
  const theoryCompletedCount = journey.topics.filter((t) => t.theoryCompleted).length;
  const verifiedCount = journey.topics.filter((t) => t.score >= 7).length;
  const topicsWithErrorsCount = Array.from(errorsByTopicId.keys()).length;

  const attempts = [...journey.attempts].sort((a, b) => b.date.localeCompare(a.date));
  const dueErrors = journey.errors.filter((x) => x.status === "due");

  // Domain score statistics
  const domainStats = useMemo(() => {
    const domainKeys = Object.keys(domainMetas);
    const stats: Record<string, { count: number; avg: string }> = {};
    for (const d of domainKeys) {
      const list = journey.topics.filter((t) => t.domain === d);
      const count = list.length;
      const avg = count ? (list.reduce((sum, item) => sum + item.score, 0) / count).toFixed(1) : "0.0";
      stats[d] = { count, avg };
    }
    return stats;
  }, [journey.topics, domainMetas]);

  // Available categories in active domain (for category quick-nav pills and statistics)
  const availableCategories = useMemo(() => {
    const list = journey.topics.filter((t) => {
      if (selectedDomain !== "all" && t.domain !== selectedDomain) return false;
      if (selectedVocabLevel !== "all" && t.level !== selectedVocabLevel) return false;
      if (selectedVocabGroup !== "all" && t.topicGroup !== selectedVocabGroup) return false;
      return true;
    });
    const map = new Map<string, StudyTopic[]>();
    for (const t of list) {
      const catList = map.get(t.category) ?? [];
      catList.push(t);
      map.set(t.category, catList);
    }
    return Array.from(map.entries()).map(([catName, topics]) => {
      const count = topics.length;
      const avg = count ? (topics.reduce((s, t) => s + t.score, 0) / count).toFixed(1) : "0.0";
      const theoryDone = topics.filter((t) => t.theoryCompleted).length;
      const errorCount = topics.reduce((s, t) => s + (errorsByTopicId.get(t.id) ?? 0), 0);
      const domain = topics[0]?.domain || "grammar";
      return {
        category: catName,
        domain,
        count,
        avg,
        theoryDone,
        errorCount,
        topics,
      };
    });
  }, [journey.topics, selectedDomain, selectedVocabLevel, selectedVocabGroup, errorsByTopicId]);

  // Filtered topics for Overview (Domain, Level, Topic Group, and Category Pill Filter)
  const filteredTopics = useMemo(() => {
    return journey.topics.filter((t) => {
      if (selectedDomain !== "all" && t.domain !== selectedDomain) return false;
      if (selectedVocabLevel !== "all" && t.level !== selectedVocabLevel) return false;
      if (selectedVocabGroup !== "all" && t.topicGroup !== selectedVocabGroup) return false;
      if (selectedCategoryFilter !== "all" && t.category !== selectedCategoryFilter) return false;
      return true;
    });
  }, [journey.topics, selectedDomain, selectedVocabLevel, selectedVocabGroup, selectedCategoryFilter]);

  // Grouped by Category for Grid View
  const categoryGroups = useMemo(() => {
    const map = new Map<string, StudyTopic[]>();
    for (const t of filteredTopics) {
      const list = map.get(t.category) ?? [];
      list.push(t);
      map.set(t.category, list);
    }
    return Array.from(map.entries());
  }, [filteredTopics]);

  const toggleCategoryCollapse = (cat: string) => {
    setCollapsedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const collapseAllCategories = () => {
    const next: Record<string, boolean> = {};
    for (const cat of availableCategories) {
      next[cat.category] = true;
    }
    setCollapsedCategories(next);
  };

  const expandAllCategories = () => {
    setCollapsedCategories({});
  };

  // Depth 2 Chart: Category Depth Breakdown stats
  const categoryBreakdownStats = useMemo(() => {
    const list = selectedDomain === "all" ? journey.topics : journey.topics.filter((t) => t.domain === selectedDomain);
    const map = new Map<string, StudyTopic[]>();
    for (const t of list) {
      const catList = map.get(t.category) ?? [];
      catList.push(t);
      map.set(t.category, catList);
    }
    return Array.from(map.entries()).map(([catName, topics]) => {
      const count = topics.length;
      const avg = count ? (topics.reduce((s, t) => s + t.score, 0) / count).toFixed(1) : "0.0";
      const theoryCount = topics.filter((t) => t.theoryCompleted).length;
      const errorCount = topics.reduce((s, t) => s + (errorsByTopicId.get(t.id) ?? 0), 0);
      const domain = topics[0]?.domain || "grammar";
      return {
        category: catName,
        domain,
        count,
        avg,
        theoryCount,
        errorCount,
        topics,
      };
    });
  }, [journey.topics, selectedDomain, errorsByTopicId]);

  // Depth 3 Chart: Priority Ranked Topics (sorted ascending from lowest score to 10)
  const priorityRankedTopics = useMemo(() => {
    return [...journey.topics].sort((a, b) => a.score - b.score);
  }, [journey.topics]);

  // Depth 4 Chart: CEFR / TOPIK Level Progression stats
  const levelProgressionStats = useMemo(() => {
    const levels = VOCAB_LEVELS_BY_LANG[currentLang];
    return levels.map((lvl) => {
      const lvlTopics = journey.topics.filter((t) => t.level === lvl);
      const count = lvlTopics.length;
      const avg = count ? (lvlTopics.reduce((s, t) => s + t.score, 0) / count).toFixed(1) : "0.0";
      const mastered = lvlTopics.filter((t) => t.score >= 7).length;
      const percentMastered = count ? Math.round((mastered / count) * 100) : 0;
      return {
        level: lvl,
        count,
        avg,
        mastered,
        percentMastered,
      };
    });
  }, [journey.topics, currentLang]);

  // AI Assistant helpers
  const generatedAiPrompt = useMemo(() => {
    return generateAIStudyPrompt(journey);
  }, [journey]);

  const compactAiProfile = useMemo(() => {
    return generateAICompactProfile(journey);
  }, [journey]);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback(`Đã sao chép ${label}!`);
      setTimeout(() => setCopyFeedback(null), 3000);
    } catch {
      setCopyFeedback("Không thể tự động sao chép. Hãy chọn văn bản và bấm Cmd/Ctrl + C.");
      setTimeout(() => setCopyFeedback(null), 4000);
    }
  };

  const handleAnalyzeAiInput = () => {
    if (!aiSyncInput.trim()) {
      setNotice("Vui lòng dán văn bản phản hồi từ AI vào ô bên dưới.");
      return;
    }
    const result = applySmartAIPatch(journey, aiSyncInput);
    setAiPatchResult(result);
  };

  const loadDemoAiPatch = () => {
    const isKo = currentLang === "ko";
    const demoText = isKo
      ? `Dưới đây là kết quả đánh giá buổi học tiếng Hàn hôm nay:
\`\`\`json
{
  "topic_updates": {
    "ko-g-connective-cause": {
      "score": 7,
      "evidence": "Nắm vững -아/어서 không đi với câu mệnh lệnh; phản xạ tốt với -(으)니까 trong 5 câu hỏi tình huống."
    },
    "ko-g-honorifics": {
      "score": 8,
      "evidence": "Sử dụng nhuần nhuyễn kính ngữ từ vựng (진지, 드시다, 댁)."
    }
  },
  "session": {
    "title": "Kiểm tra phản xạ Kính ngữ & Vĩ tố liên kết cùng AI",
    "correct": 9,
    "total": 10,
    "note": "Phản xạ nhanh, xử lý tình huống hội thoại công sở tốt"
  },
  "new_errors": [
    {
      "topicId": "ko-g-particles-location",
      "category": "Trợ từ vị trí",
      "incorrect": "도서관에 공부해요.",
      "corrected": "도서관에서 공부해요.",
      "explanationVi": "Hành động diễn ra tại địa điểm (공부하다) phải dùng trợ từ 에서, không dùng 에."
    }
  ],
  "resolved_errors": ["err-ko-sample-2"]
}
\`\`\`
Học viên đã tiến bộ vượt bậc!`
      : `Dưới đây là đánh giá buổi học ngữ pháp tiếng Anh:
\`\`\`json
{
  "topic_updates": {
    "past-perfect": {
      "score": 8,
      "evidence": "Phân biệt chính xác Past Perfect và Past Simple trong các câu có mốc thời gian before/by the time."
    },
    "conditionals": {
      "score": 7,
      "evidence": "Làm đúng 4/4 câu điều kiện loại 3 và loại hỗn hợp."
    }
  },
  "session": {
    "title": "Luyện phản xạ Quá khứ hoàn thành & Câu điều kiện",
    "correct": 8,
    "total": 10,
    "note": "Cải thiện rõ rệt mệnh đề giả định và thì hoàn thành"
  },
  "new_errors": [
    {
      "topicId": "inversion",
      "category": "Đảo ngữ",
      "incorrect": "Hardly I had arrived when it began to rain.",
      "corrected": "Hardly had I arrived when it began to rain.",
      "explanationVi": "Hardly đứng đầu câu phải đảo trợ động từ lên trước chủ ngữ (Hardly had I...)."
    }
  ],
  "resolved_errors": ["err-sample-1"]
}
\`\`\`
Tiếp tục phát huy nhé!`;

    setAiSyncInput(demoText);
    const result = applySmartAIPatch(journey, demoText);
    setAiPatchResult(result);
  };

  const handleApplyAiPatch = () => {
    if (!aiPatchResult || aiPatchResult.changesSummary.length === 0) return;
    save(aiPatchResult.journey);
    setNotice(`Đã áp dụng thành công ${aiPatchResult.changesSummary.length} thay đổi từ AI vào tiến độ học!`);
    setShowAiModal(false);
    setAiPatchResult(null);
    setAiSyncInput("");
  };

  // Sorted Topics for Table View
  const sortedTableTopics = useMemo(() => {
    const copy = [...filteredTopics];
    const { col, desc } = tableSort;
    copy.sort((a, b) => {
      let cmp = 0;
      if (col === "name") {
        cmp = a.label.localeCompare(b.label);
      } else if (col === "level") {
        cmp = (a.level ?? "").localeCompare(b.level ?? "");
      } else if (col === "score") {
        cmp = a.score - b.score;
      } else if (col === "theory") {
        cmp = (a.theoryCompleted ? 1 : 0) - (b.theoryCompleted ? 1 : 0);
      } else if (col === "errors") {
        const ea = errorsByTopicId.get(a.id) ?? 0;
        const eb = errorsByTopicId.get(b.id) ?? 0;
        cmp = ea - eb;
      }
      return desc ? -cmp : cmp;
    });
    return copy;
  }, [filteredTopics, tableSort, errorsByTopicId]);

  // Grouped and sorted categories for Table View (Grouped Data Grid)
  const tableCategoryGroups = useMemo(() => {
    let list = availableCategories;
    if (selectedCategoryFilter !== "all") {
      list = list.filter((c) => c.category === selectedCategoryFilter);
    }
    const { col, desc } = tableSort;
    return list.map((c) => {
      const sortedTopics = [...c.topics].sort((a, b) => {
        let cmp = 0;
        if (col === "name") {
          cmp = a.label.localeCompare(b.label);
        } else if (col === "level") {
          cmp = (a.level ?? "").localeCompare(b.level ?? "");
        } else if (col === "score") {
          cmp = a.score - b.score;
        } else if (col === "theory") {
          cmp = (a.theoryCompleted ? 1 : 0) - (b.theoryCompleted ? 1 : 0);
        } else if (col === "errors") {
          const ea = errorsByTopicId.get(a.id) ?? 0;
          const eb = errorsByTopicId.get(b.id) ?? 0;
          cmp = ea - eb;
        }
        return desc ? -cmp : cmp;
      });
      return {
        ...c,
        sortedTopics,
      };
    });
  }, [availableCategories, selectedCategoryFilter, tableSort, errorsByTopicId]);

  // Filtered topics for Admin console
  const adminFilteredTopics = useMemo(() => {
    return journey.topics.filter((t) => {
      if (selectedTopicForAdmin && t.id === selectedTopicForAdmin) return true;
      if (selectedTopicForAdmin && adminDomainFilter === "all" && !adminSearch.trim()) return false;
      if (adminDomainFilter !== "all" && t.domain !== adminDomainFilter) return false;
      if (adminSearch.trim()) {
        const query = adminSearch.toLowerCase().trim();
        const matchesLabel = t.label.toLowerCase().includes(query);
        const matchesCat = t.category.toLowerCase().includes(query);
        const matchesSub = t.subtopic ? t.subtopic.toLowerCase().includes(query) : false;
        const matchesEvidence = t.evidence.toLowerCase().includes(query);
        return matchesLabel || matchesCat || matchesSub || matchesEvidence;
      }
      return true;
    });
  }, [journey.topics, adminDomainFilter, adminSearch, selectedTopicForAdmin]);

  // Filtered Errors for Error Bank (Requirement 4)
  const filteredErrors = useMemo(() => {
    return journey.errors.filter((err) => {
      if (topicFilterForErrors && err.topicId !== topicFilterForErrors) return false;
      if (errorStatusFilter !== "all" && err.status !== errorStatusFilter) return false;
      if (errorSearch.trim()) {
        const q = errorSearch.toLowerCase().trim();
        const matchesIncorrect = err.incorrect.toLowerCase().includes(q);
        const matchesCorrected = err.corrected.toLowerCase().includes(q);
        const matchesCategory = err.category.toLowerCase().includes(q);
        const matchesVi = err.explanationVi.toLowerCase().includes(q);
        const matchesKo = err.explanationKo.toLowerCase().includes(q);
        const matchesLesson = err.lessonId ? err.lessonId.toLowerCase().includes(q) : false;
        return matchesIncorrect || matchesCorrected || matchesCategory || matchesVi || matchesKo || matchesLesson;
      }
      return true;
    });
  }, [journey.errors, topicFilterForErrors, errorStatusFilter, errorSearch]);

  // Group errors by date for Daily Lesson Error Log (Requirement 4)
  const errorsByDate = useMemo(() => {
    const map = new Map<string, StudyError[]>();
    const sorted = [...filteredErrors].sort((a, b) => {
      const da = a.date || "";
      const db = b.date || "";
      return db.localeCompare(da);
    });
    for (const err of sorted) {
      const d = err.date || "Nhật ký trước đó";
      const list = map.get(d) ?? [];
      list.push(err);
      map.set(d, list);
    }
    return Array.from(map.entries());
  }, [filteredErrors]);

  const openAdminForTopic = (topicId: string) => {
    setSelectedTopicForAdmin(topicId);
    setAdminDomainFilter("all");
    setAdminSearch("");
    setAdminSection("scores");
    setAdminDrawerOpen(true);
  };

  const cycleErrorStatus = (errorId: string, current: ReviewStatus) => {
    const next: ReviewStatus = current === "due" ? "practicing" : current === "practicing" ? "stable" : "due";
    updateError(errorId, next);
  };

  // Topic score updater
  const updateTopicScore = (id: string, nextScore: number) => {
    const score = Math.min(10, Math.max(1, Math.round(nextScore)));
    const status: TopicStatus = score >= 7 ? "strong" : score >= 5 ? "review" : "unverified";
    const nextTopics: StudyTopic[] = journey.topics.map((t) =>
      t.id === id ? { ...t, score, status } : t
    );
    save({ ...journey, topics: nextTopics });
  };

  const updateTopicEvidence = (id: string, evidence: string) => {
    const nextTopics = journey.topics.map((t) => (t.id === id ? { ...t, evidence } : t));
    save({ ...journey, topics: nextTopics });
  };

  const toggleTheoryCompleted = (id: string) => {
    const nextTopics = journey.topics.map((t) =>
      t.id === id ? { ...t, theoryCompleted: !t.theoryCompleted } : t
    );
    save({ ...journey, topics: nextTopics });
  };

  const removeTopic = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa chủ đề này khỏi bản đồ học tập?")) {
      save({ ...journey, topics: journey.topics.filter((t) => t.id !== id) });
    }
  };

  // Jump from Topic Error Badge directly to Error Bank with 1-1 filter
  const jumpToTopicErrors = (topicId: string) => {
    setTopicFilterForErrors(topicId);
    setView("errors");
  };

  // Custom Topic submission
  const handleAddTopic = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const label = newTopicLabel.trim();
    if (!label) {
      setNotice("Vui lòng nhập tên chủ đề.");
      return;
    }
    if (journey.topics.some((t) => t.label.toLowerCase() === label.toLowerCase())) {
      setNotice("Chủ đề này đã tồn tại trong bản đồ.");
      return;
    }
    const score = Math.min(10, Math.max(1, newTopicScore));
    const newTopicItem: StudyTopic = {
      id: safeId(),
      domain: newTopicDomain,
      category: newTopicCategory.trim() || "Chủ đề tự chọn",
      subtopic: newTopicSubtopic.trim() || undefined,
      label,
      score,
      status: score >= 7 ? "strong" : score >= 5 ? "review" : "unverified",
      evidence: newTopicEvidence.trim(),
      level: newTopicLevel,
      topicGroup: newTopicGroup,
      theoryCompleted: false,
    };
    save({ ...journey, topics: [...journey.topics, newTopicItem] });
    setNewTopicLabel("");
    setNewTopicSubtopic("");
    setNewTopicEvidence("");
    setNotice(`Đã thêm thành công chủ đề "${label}" vào nhóm.`);
  };

  // Attempt submission
  const addAttempt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const c = Number(correct);
    const t = Number(total);
    if (
      !attemptTitle.trim() ||
      !/^\d{4}-\d{2}-\d{2}$/.test(attemptDate) ||
      !Number.isFinite(c) ||
      !Number.isFinite(t) ||
      c < 0 ||
      t <= 0 ||
      c > t ||
      !Number.isInteger(c) ||
      !Number.isInteger(t)
    ) {
      setNotice("Kiểm tra lại ngày, tên bài và điểm (0 ≤ đúng ≤ tổng).");
      return;
    }
    save({
      ...journey,
      attempts: [
        ...journey.attempts,
        { id: safeId(), date: attemptDate, title: attemptTitle.trim(), correct: c, total: t, note: note.trim() },
      ],
    });
    setAttemptTitle("");
    setCorrect("");
    setTotal("");
    setNote("");
    setNotice("Đã lưu kết quả bài kiểm tra vào hệ thống.");
  };

  // Error submission (Requirement 4: topicId link)
  const addError = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!incorrect.trim() || !corrected.trim()) {
      setNotice("Vui lòng nhập đầy đủ câu sai và câu đã sửa.");
      return;
    }
    const next: StudyError = {
      id: safeId(),
      category: errorCategory,
      topicId: errorTopicId.trim() || undefined,
      lessonId: errorLessonId.trim() || undefined,
      date: errorDate.trim() || today(),
      incorrect: incorrect.trim(),
      corrected: corrected.trim(),
      explanationVi: explanationVi.trim(),
      explanationKo: explanationKo.trim(),
      status: "due",
    };
    save({ ...journey, errors: [...journey.errors, next] });
    setIncorrect("");
    setCorrected("");
    setExplanationVi("");
    setExplanationKo("");
    setNotice("Đã lưu lỗi mới vào Sổ tay và liên kết với chủ đề tương ứng.");
  };

  const updateError = (id: string, status: ReviewStatus) => {
    save({
      ...journey,
      errors: journey.errors.map((e) => (e.id === id ? { ...e, status } : e)),
    });
  };

  const removeAttempt = (id: string) => {
    if (window.confirm("Xóa kết quả này khỏi lịch sử kiểm tra?")) {
      save({ ...journey, attempts: journey.attempts.filter((x) => x.id !== id) });
    }
  };

  const removeError = (id: string) => {
    if (window.confirm("Xóa lỗi này khỏi sổ tay?")) {
      save({ ...journey, errors: journey.errors.filter((x) => x.id !== id) });
    }
  };

  // Export / Import
  const exportFile = () => {
    const file = new Blob([JSON.stringify({ format: "language-lab-english-journey", journey }, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `language-progress-${currentLang}-${today()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const importFile = async (file?: File) => {
    if (!file) return;
    try {
      const parsed: unknown = JSON.parse(await file.text());
      const wrapper = parsed as { format?: string; journey?: unknown };
      if (!wrapper || wrapper.format !== "language-lab-english-journey") throw new Error("Invalid format");
      const imported = parseJourney(wrapper.journey, currentLang);
      if (!imported) throw new Error("Invalid data");
      if (
        (journey.attempts.length || journey.errors.length) &&
        !window.confirm(
          "Import sẽ thay thế dữ liệu ngôn ngữ hiện tại bằng file nhập. Hãy export trước nếu muốn sao lưu. Tiếp tục?"
        )
      ) {
        return;
      }
      save(imported);
      setNotice("Đã nhập dữ liệu thành công. Cây năng lực đã được đồng bộ.");
    } catch {
      setNotice("File không hợp lệ. Cần JSON định dạng language-lab-english-journey.");
    } finally {
      if (fileInput.current) fileInput.current.value = "";
    }
  };

  const toggleSort = (col: TableSortColumn) => {
    setTableSort((curr) => ({
      col,
      desc: curr.col === col ? !curr.desc : true,
    }));
  };

  return (
    <div className="ep-page">
      {/* Language Switcher Bar (Requirement 1) */}
      <section className="ep-lang-bar" aria-label="Bộ chọn ngôn ngữ học tập">
        <div className="ep-lang-selector">
          <span className="ep-lang-label">NGÔN NGỮ HỌC TẬP:</span>
          <button
            type="button"
            className={`ep-lang-pill ${currentLang === "en" ? "active" : ""}`}
            onClick={() => handleLanguageSwitch("en")}
          >
            <span className="ep-lang-flag">🇬🇧</span>
            <strong>English (Tiếng Anh)</strong>
            <small>· CEFR / IELTS / TOEIC</small>
          </button>
          <button
            type="button"
            className={`ep-lang-pill ${currentLang === "ko" ? "active" : ""}`}
            onClick={() => handleLanguageSwitch("ko")}
          >
            <span className="ep-lang-flag">🇰🇷</span>
            <strong>한국어 (Tiếng Hàn)</strong>
            <small>· TOPIK I & II / Kính ngữ</small>
          </button>
        </div>
        <div className="ep-actions">
          <button
            type="button"
            className="ep-btn-ai-assistant"
            onClick={() => setShowAiModal(true)}
            title="Mở Trợ lý AI & Cập nhật tiến độ học 2 chiều"
          >
            🤖 Trợ lý AI &amp; Cập nhật nhanh
          </button>
          <input
            ref={fileInput}
            type="file"
            accept=".json,application/json"
            hidden
            onChange={(e) => void importFile(e.target.files?.[0])}
          />
          <button
            type="button"
            className="ep-admin-btn ep-admin-drawer-trigger"
            onClick={() => {
              setSelectedTopicForAdmin(null);
              setAdminDrawerOpen(true);
            }}
            title="Mở Bảng Quản trị & Chỉnh sửa chuyên nghiệp (Drawer)"
          >
            ⚙️ Quản lý &amp; Chỉnh sửa
          </button>
          <button type="button" onClick={() => fileInput.current?.click()}>
            ↑ Import JSON
          </button>
          <button type="button" onClick={exportFile}>
            ↓ Export JSON
          </button>
        </div>
      </section>

      {/* Hero Header */}
      <section className="ep-hero">
        <div>
          <span className="eyebrow">
            {currentLang === "ko" ? "KOREAN · HANGUL COMPETENCY OS" : "ENGLISH · COMPETENCY ARCHITECTURE"}
          </span>
          <h1>
            {currentLang === "ko" ? "한국어 Tiến độ Năng lực" : "English Progress"}{" "}
            <em>Dashboard</em>
          </h1>
          <p>
            {currentLang === "ko"
              ? "Theo dõi cây năng lực tiếng Hàn (Trợ từ 은/는, 이/가; Kính ngữ; Vĩ tố liên kết; Từ vựng TOPIK 1-6; Luyện thi TOPIK I & II) và tích hợp 50% tín chỉ lý thuyết khi đọc bài."
              : "Theo dõi năng lực học thuật đa tầng (Grammar, Vocabulary A1-C2, IELTS, TOEIC), thang đo độ vững 1~10 và nhật ký lỗi liên kết 1-1 với từng bài học."}
          </p>
        </div>
      </section>

      {notice && (
        <p className="ep-notice" role="status">
          {notice}
        </p>
      )}

      {/* High-level Stats Banner */}
      <section className="ep-stats" aria-label="Thống kê năng lực tổng quan">
        <div>
          <strong>{totalTopics}</strong>
          <span>Chủ đề năng lực theo dõi</span>
        </div>
        <div>
          <strong>{avgCompetencyScore} / 10</strong>
          <span>Độ vững trung bình</span>
        </div>
        <div>
          <strong>{theoryCompletedCount} / {totalTopics}</strong>
          <span>Đã học lý thuyết (50% credit)</span>
        </div>
        <div>
          <strong>{dueErrors.length} / {journey.errors.length}</strong>
          <span>Lỗi cần ưu tiên ôn lại</span>
        </div>
      </section>

      {/* Primary Navigation Tabs */}
      <div className="ep-tabs" role="tablist" aria-label="Màn hình English Progress">
        <button
          role="tab"
          aria-selected={view === "overview"}
          className={view === "overview" ? "active" : ""}
          type="button"
          onClick={() => setView("overview")}
        >
          Báo cáo năng lực ({totalTopics})
        </button>
        <button
          role="tab"
          aria-selected={view === "history"}
          className={view === "history" ? "active" : ""}
          type="button"
          onClick={() => setView("history")}
        >
          Lịch sử kiểm tra ({attempts.length})
        </button>
        <button
          role="tab"
          aria-selected={view === "errors"}
          className={view === "errors" ? "active" : ""}
          type="button"
          onClick={() => setView("errors")}
        >
          Sổ lỗi cá nhân ({journey.errors.length})
        </button>
        <button
          role="tab"
          aria-selected={view === "admin"}
          className={view === "admin" ? "active ep-tab-admin" : "ep-tab-admin"}
          type="button"
          onClick={() => setView("admin")}
        >
          ⚙ Quản lý & Cập nhật
        </button>
      </div>

      {/* VIEW 1: OVERVIEW DASHBOARD */}
      {view === "overview" && (
        <div className="ep-overview-layout">
          {/* Domain Filter Bar */}
          <div className="ep-domain-filter" role="toolbar" aria-label="Bộ lọc Domain năng lực">
            <button
              type="button"
              className={`ep-domain-pill ${selectedDomain === "all" ? "active" : ""}`}
              onClick={() => {
                setSelectedDomain("all");
                setSelectedCategoryFilter("all");
              }}
            >
              <span className="ep-domain-icon">◈</span>
              <strong>Tất cả Domain</strong>
              <small>({totalTopics} mục · TB {avgCompetencyScore})</small>
            </button>
            {Object.keys(domainMetas).map((dom) => {
              const meta = domainMetas[dom];
              const stat = domainStats[dom] ?? { count: 0, avg: "0.0" };
              return (
                <button
                  key={dom}
                  type="button"
                  className={`ep-domain-pill ${selectedDomain === dom ? "active" : ""}`}
                  onClick={() => {
                    setSelectedDomain(dom);
                    setSelectedCategoryFilter("all");
                  }}
                >
                  <span className="ep-domain-icon">{meta.icon}</span>
                  <strong>{meta.shortLabel}</strong>
                  <small>({stat.count} mục · TB {stat.avg})</small>
                </button>
              );
            })}
          </div>

          {/* Requirement 2: Visual Scale Legend Bar (1-10) */}
          <div className="ep-scale-legend-bar">
            <span className="ep-scale-legend-title">Thang điểm độ vững (1-10):</span>
            <div className="ep-scale-legend-capsules">
              <span className="ep-legend-cap ep-score-needs-work" title="1-4: Cần bồi dưỡng - Tỷ lệ đúng thấp, cần đọc lại lý thuyết">
                <span className="ep-legend-dot" /> 1 - 4: Cần bồi dưỡng
              </span>
              <span className="ep-legend-cap ep-score-developing" title="5-6: Đang tiến bộ - Đã hiểu nguyên lý, cần tăng phản xạ">
                <span className="ep-legend-dot" /> 5 - 6: Đang tiến bộ
              </span>
              <span className="ep-legend-cap ep-score-proficient" title="7-8: Khá vững - Đạt chuẩn làm bài và giao tiếp tốt">
                <span className="ep-legend-dot" /> 7 - 8: Khá vững
              </span>
              <span className="ep-legend-cap ep-score-mastery" title="9-10: Tinh thông - Phản xạ tự nhiên, chuẩn xác tuyệt đối">
                <span className="ep-legend-dot" /> 9 - 10: Tinh thông
              </span>
            </div>
          </div>

          {/* Vocabulary Level & Theme Filters (Requirement 3) */}
          {(selectedDomain === "vocabulary" || selectedDomain === "all") && (
            <div className="ep-vocab-filters-bar">
              <div className="ep-vocab-filter-group">
                <span className="ep-filter-title">CẤP ĐỘ (LEVEL):</span>
                <div className="ep-filter-pills">
                  <button
                    type="button"
                    className={`ep-subpill ${selectedVocabLevel === "all" ? "active" : ""}`}
                    onClick={() => setSelectedVocabLevel("all")}
                  >
                    Tất cả Level
                  </button>
                  {VOCAB_LEVELS_BY_LANG[currentLang].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      className={`ep-subpill ${selectedVocabLevel === lvl ? "active" : ""}`}
                      onClick={() => setSelectedVocabLevel(lvl)}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="ep-vocab-filter-group">
                <span className="ep-filter-title">CHỦ ĐỀ (THEME):</span>
                <div className="ep-filter-pills">
                  <button
                    type="button"
                    className={`ep-subpill ${selectedVocabGroup === "all" ? "active" : ""}`}
                    onClick={() => setSelectedVocabGroup("all")}
                  >
                    Tất cả chủ đề
                  </button>
                  {VOCAB_TOPIC_GROUPS.map((grp) => (
                    <button
                      key={grp}
                      type="button"
                      className={`ep-subpill ${selectedVocabGroup === grp ? "active" : ""}`}
                      onClick={() => setSelectedVocabGroup(grp)}
                    >
                      {grp}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Category Quick-Nav Bar (Bộ lọc nhanh Chuyên đề dạng Tabs/Pills - Requirement 2) */}
          <div className="ep-category-quicknav-bar" role="navigation" aria-label="Bộ lọc nhanh chuyên đề">
            <div className="ep-cat-quicknav-header">
              <span className="ep-cat-quicknav-title">
                <span className="ep-cat-quicknav-icon">🧭</span>
                CHUYÊN ĐỀ ({availableCategories.length}):
              </span>
              {selectedCategoryFilter !== "all" && (
                <button
                  type="button"
                  className="ep-cat-quicknav-clear"
                  onClick={() => setSelectedCategoryFilter("all")}
                >
                  ✕ Xem tất cả ({availableCategories.reduce((acc, c) => acc + c.count, 0)})
                </button>
              )}
            </div>
            <div className="ep-cat-quicknav-wrap">
              <button
                type="button"
                className={`ep-cat-nav-pill ${selectedCategoryFilter === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategoryFilter("all")}
              >
                <span className="ep-cat-nav-name">Tất cả chuyên đề</span>
                <span className="ep-cat-nav-count">
                  {availableCategories.reduce((acc, c) => acc + c.count, 0)}
                </span>
              </button>
              {availableCategories.map((cat) => (
                <button
                  key={cat.category}
                  type="button"
                  className={`ep-cat-nav-pill ${selectedCategoryFilter === cat.category ? "active" : ""}`}
                  onClick={() => setSelectedCategoryFilter(cat.category)}
                >
                  <span className="ep-cat-nav-name">{cat.category}</span>
                  <span className="ep-cat-nav-count">{cat.count}</span>
                  <span className="ep-cat-nav-avg">· {cat.avg}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Domain Summary Highlight */}
          <section className="ep-domain-summary-banner">
            <div className="ep-summary-left">
              <span className="eyebrow">
                {selectedDomain === "all"
                  ? `${currentLang === "ko" ? "HÀN QUỐC" : "ENGLISH"} · BẢN ĐỒ TỔNG THỂ`
                  : domainMetas[selectedDomain]?.label.toUpperCase()}
              </span>
              <h2>
                {selectedDomain === "all"
                  ? currentLang === "ko"
                    ? "Cây Năng lực Tiếng Hàn Toàn diện"
                    : "Bản đồ Năng lực Ngôn ngữ Tổng thể"
                  : domainMetas[selectedDomain]?.label}
              </h2>
              <p>
                {selectedDomain === "all"
                  ? currentLang === "ko"
                    ? "Cấu trúc phân tầng gồm Ngữ pháp nền tảng, Phân tầng từ vựng TOPIK 1-6 và Kỹ năng giải đề TOPIK I & II với cơ chế tự động ghi nhận 50% tín chỉ khi đọc lý thuyết."
                    : "Hệ thống năng lực chuẩn hóa phân tầng qua Ngữ pháp, Từ vựng A1-C2, IELTS 4 kỹ năng và TOEIC công sở."
                  : domainMetas[selectedDomain]?.description}
              </p>
            </div>

            <div className="ep-summary-right">
              {/* Layout Switcher (Requirement 2) */}
              <div className="ep-layout-switcher" role="radiogroup" aria-label="Bộ chuyển đổi chế độ xem">
                <button
                  type="button"
                  className={layoutMode === "grid" ? "active" : ""}
                  onClick={() => setLayoutMode("grid")}
                  title="Xem dạng lưới thẻ"
                >
                  ⊞ Lưới thẻ (Grid)
                </button>
                <button
                  type="button"
                  className={layoutMode === "table" ? "active" : ""}
                  onClick={() => setLayoutMode("table")}
                  title="Xem dạng bảng chi tiết"
                >
                  ☰ Bảng dữ liệu (Table)
                </button>
                <button
                  type="button"
                  className={layoutMode === "chart" ? "active" : ""}
                  onClick={() => setLayoutMode("chart")}
                  title="Xem biểu đồ phân tích"
                >
                  📊 Biểu đồ (Charts)
                </button>
              </div>

              <div className="ep-tier-legend">
                <span className="ep-legend-item mastery">
                  <i /> Tinh thông (9-10): <b>{masteryCount}</b>
                </span>
                <span className="ep-legend-item proficient">
                  <i /> Khá vững (7-8): <b>{proficientCount}</b>
                </span>
                <span className="ep-legend-item developing">
                  <i /> Đang tiến bộ (5-6): <b>{developingCount}</b>
                </span>
                <span className="ep-legend-item needs-work">
                  <i /> Cần bồi dưỡng (1-4): <b>{needsWorkCount}</b>
                </span>
              </div>
            </div>
          </section>

          {/* LAYOUT 1: GRID VIEW (Depth 1 ➔ Depth 4 Hierarchy) */}
          {layoutMode === "grid" && (
            <section className="ep-panel ep-competency-panel">
              {/* Depth 1 Header */}
              <div className="ep-panel-heading ep-depth1-heading">
                <div>
                  <span className="eyebrow">
                    DEPTH 1 · LĨNH VỰC ({selectedDomain === "all" ? "TẤT CẢ DOMAIN" : domainMetas[selectedDomain]?.shortLabel.toUpperCase()})
                  </span>
                  <h2>Cây Năng lực Phân cấp Đa tầng</h2>
                </div>
                <div className="ep-depth1-stats-strip">
                  <span className="ep-depth1-chip">
                    <strong>{filteredTopics.length}</strong> Chủ điểm (Depth 3)
                  </span>
                  <span className="ep-depth1-chip">
                    <strong>{categoryGroups.length}</strong> Chuyên đề lớn (Depth 2)
                  </span>
                  <span className="ep-depth1-chip highlight">
                    TB: <strong>{selectedDomain === "all" ? avgCompetencyScore : domainStats[selectedDomain]?.avg || "0.0"}</strong> / 10
                  </span>
                  <span className="ep-depth1-chip">
                    📖 <strong>{filteredTopics.filter((t) => t.theoryCompleted).length}/{filteredTopics.length}</strong> Lý thuyết (50%)
                  </span>
                </div>
              </div>

              {/* Accordion Controls Toolbar */}
              <div className="ep-depth-controls-bar">
                <div className="ep-depth-legend">
                  <span className="ep-depth-tag d1">D1: Domain</span>
                  <span className="ep-depth-sep">›</span>
                  <span className="ep-depth-tag d2">D2: Category</span>
                  <span className="ep-depth-sep">›</span>
                  <span className="ep-depth-tag d3">D3: Topic</span>
                  <span className="ep-depth-sep">›</span>
                  <span className="ep-depth-tag d4">D4: Micro-skills</span>
                </div>
                <div className="ep-depth-actions">
                  <button type="button" className="ep-mini-accordion-btn" onClick={expandAllCategories}>
                    ▾ Mở rộng tất cả chuyên đề (D2)
                  </button>
                  <button type="button" className="ep-mini-accordion-btn" onClick={collapseAllCategories}>
                    ▴ Thu gọn tất cả chuyên đề (D2)
                  </button>
                  <button
                    type="button"
                    className="ep-mini-accordion-btn"
                    onClick={() => setShowMicroSkills((prev) => !prev)}
                  >
                    {showMicroSkills ? "▴ Ẩn Micro-skills (D4)" : "▾ Hiện Micro-skills (D4)"}
                  </button>
                </div>
              </div>

              {categoryGroups.length ? (
                <div className="ep-categories-container">
                  {categoryGroups.map(([catName, catTopics]) => {
                    const catAvg = (catTopics.reduce((acc, t) => acc + t.score, 0) / catTopics.length).toFixed(1);
                    const catTheoryDone = catTopics.filter((t) => t.theoryCompleted).length;
                    const catErrors = catTopics.reduce((acc, t) => acc + (errorsByTopicId.get(t.id) ?? 0), 0);
                    const isCollapsed = !!collapsedCategories[catName];
                    const firstTopicDomain = catTopics[0]?.domain || "grammar";
                    const domainShort = domainMetas[firstTopicDomain]?.shortLabel || "Domain";

                    return (
                      <div key={catName} className={`ep-category-group ${isCollapsed ? "collapsed" : ""}`}>
                        {/* Depth 2: Category Header & Accordion Trigger */}
                        <div
                          className="ep-category-header ep-clickable-accordion"
                          onClick={() => toggleCategoryCollapse(catName)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleCategoryCollapse(catName);
                            }
                          }}
                          aria-expanded={!isCollapsed}
                          aria-label={`Chuyên đề ${catName}`}
                        >
                          <div className="ep-category-header-main">
                            {/* Breadcrumb Depth 1 > Depth 2 */}
                            <div className="ep-cat-breadcrumb">
                              <span className="ep-bc-domain">{domainShort}</span>
                              <span className="ep-bc-sep">›</span>
                              <span className="ep-bc-current">{catName}</span>
                            </div>
                            <div className="ep-category-header-title">
                              <span className="ep-category-marker">◆</span>
                              <h3>{catName}</h3>
                              <span className="ep-category-count">{catTopics.length} chủ điểm</span>
                            </div>
                          </div>

                          <div className="ep-category-header-meta">
                            <span className="ep-category-avg-pill" title="Điểm trung bình chuyên đề">
                              TB: <strong>{catAvg}</strong> / 10
                            </span>
                            <span className={`ep-cat-theory-badge ${catTheoryDone === catTopics.length ? "complete" : ""}`}>
                              📖 {catTheoryDone}/{catTopics.length} đã học (50%)
                            </span>
                            {catErrors > 0 && (
                              <span className="ep-cat-errors-badge">
                                ⚠️ {catErrors} lỗi
                              </span>
                            )}
                            <button
                              type="button"
                              className="ep-accordion-arrow-btn"
                              aria-label={isCollapsed ? "Mở rộng" : "Thu gọn"}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCategoryCollapse(catName);
                              }}
                            >
                              {isCollapsed ? "▼ Mở rộng" : "▲ Thu gọn"}
                            </button>
                          </div>
                        </div>

                        {/* Depth 3 & Depth 4: Topics and Micro-skills inside expanded category */}
                        {!isCollapsed && (
                          <div className="ep-category-grid">
                            {catTopics.map((topic) => {
                              const meta = getScoreMeta(topic.score);
                              const errorCount = errorsByTopicId.get(topic.id) ?? 0;
                              return (
                                <article key={topic.id} className="ep-topic-card">
                                  {/* Depth 3 Top Info */}
                                  <div className="ep-topic-card-top">
                                    <div className="ep-topic-name-wrap">
                                      <div className="ep-topic-pills">
                                        {topic.level && (
                                          <span className="ep-pill-level">{topic.level}</span>
                                        )}
                                        {topic.topicGroup && (
                                          <span className="ep-pill-group">{topic.topicGroup}</span>
                                        )}
                                        {/* 50% Theory Credit Badge */}
                                        {topic.theoryCompleted ? (
                                          <span className="ep-pill-theory done" title="Đã hoàn thành lý thuyết (50% credit)">
                                            📖 50% Lý thuyết
                                          </span>
                                        ) : (
                                          <span className="ep-pill-theory pending" title="Chưa hoàn thành bài đọc lý thuyết">
                                            ○ Lý thuyết: Chưa học
                                          </span>
                                        )}
                                      </div>

                                      <strong className="ep-topic-label">{topic.label}</strong>
                                      {topic.subtopic && <span className="ep-topic-sub">{topic.subtopic}</span>}
                                    </div>

                                    <div className="ep-topic-score-box">
                                      <span className={`ep-badge ${meta.badgeClass}`}>{meta.tierLabel}</span>
                                      <span className="ep-score-ratio">
                                        <strong>{topic.score}</strong>/10
                                      </span>
                                    </div>
                                  </div>

                                  {/* Requirement 2: 10-Segmented Visual Gauge Bar */}
                                  <div
                                    className="ep-meter-10seg"
                                    role="progressbar"
                                    aria-valuenow={topic.score}
                                    aria-valuemin={1}
                                    aria-valuemax={10}
                                    aria-label={`Độ vững ${topic.label}: ${topic.score}/10 (${meta.tierLabel})`}
                                    title={`Độ vững: ${topic.score}/10 — ${meta.tierLabel} (${meta.actionHint})`}
                                  >
                                    {Array.from({ length: 10 }).map((_, i) => (
                                      <span
                                        key={i}
                                        className={`ep-meter-seg ${i < topic.score ? "active" : ""}`}
                                        style={{ backgroundColor: i < topic.score ? meta.color : undefined }}
                                      />
                                    ))}
                                  </div>

                                  {/* Depth 4: Micro-skills / Keypoints / Pitfalls */}
                                  {showMicroSkills && topic.keyPoints && topic.keyPoints.length > 0 && (
                                    <div className="ep-topic-keypoints">
                                      <span className="ep-keypoint-heading">✦ Micro-skills &amp; Quy tắc:</span>
                                      <div className="ep-keypoint-tags">
                                        {topic.keyPoints.map((kp, idx) => (
                                          <span key={idx} className="ep-keypoint-tag" title={kp}>
                                            {kp}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* 1-1 Linked Errors Badge */}
                                  {errorCount > 0 && (
                                    <div className="ep-topic-linked-errors">
                                      <button
                                        type="button"
                                        className="ep-error-tag-btn"
                                        onClick={() => jumpToTopicErrors(topic.id)}
                                        title="Bấm để lọc xem danh sách lỗi sai của chủ đề này"
                                      >
                                        ⚠️ Có {errorCount} lỗi cần ôn lại →
                                      </button>
                                    </div>
                                  )}

                                  {topic.evidence && (
                                    <p className="ep-topic-evidence">
                                      <span className="ep-evidence-dot">✦</span> {topic.evidence}
                                    </p>
                                  )}

                                  {/* Requirement 3: Clean Card Edit Trigger for Admin Drawer */}
                                  <div className="ep-topic-card-footer">
                                    <button
                                      type="button"
                                      className="ep-card-edit-btn"
                                      onClick={() => openAdminForTopic(topic.id)}
                                      title={`Chỉnh sửa điểm độ vững và ghi chú cho ${topic.label}`}
                                    >
                                      ✏️ Chỉnh sửa điểm &amp; Ghi chú
                                    </button>
                                  </div>
                                </article>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="ep-empty">Không tìm thấy chủ đề phù hợp với bộ lọc.</p>
              )}
            </section>
          )}

          {/* LAYOUT 2: TABLE VIEW (Grouped Data Grid by Category - Requirement 3) */}
          {layoutMode === "table" && (
            <section className="ep-panel ep-table-panel">
              <div className="ep-panel-heading">
                <div>
                  <span className="eyebrow">TABLE VIEW · GROUPED COMPETENCY MATRIX</span>
                  <h2>Bảng theo dõi năng lực phân nhóm theo chuyên đề</h2>
                </div>
                <div className="ep-table-header-actions">
                  <button type="button" className="ep-mini-accordion-btn" onClick={expandAllCategories}>
                    ▾ Mở rộng tất cả nhóm
                  </button>
                  <button type="button" className="ep-mini-accordion-btn" onClick={collapseAllCategories}>
                    ▴ Thu gọn tất cả nhóm
                  </button>
                  <span className="ep-panel-meta-tag">
                    {tableCategoryGroups.reduce((acc, c) => acc + c.sortedTopics.length, 0)} hàng dữ liệu
                  </span>
                </div>
              </div>

              <div className="ep-table-responsive">
                <table className="ep-competency-table ep-grouped-table">
                  <thead>
                    <tr>
                      <th onClick={() => toggleSort("name")} className="sortable">
                        Chủ đề &amp; Phân nhánh {tableSort.col === "name" ? (tableSort.desc ? "↓" : "↑") : ""}
                      </th>
                      <th onClick={() => toggleSort("level")} className="sortable">
                        Lĩnh vực / Level {tableSort.col === "level" ? (tableSort.desc ? "↓" : "↑") : ""}
                      </th>
                      <th onClick={() => toggleSort("score")} className="sortable">
                        Độ vững (1-10) {tableSort.col === "score" ? (tableSort.desc ? "↓" : "↑") : ""}
                      </th>
                      <th onClick={() => toggleSort("theory")} className="sortable">
                        Lý thuyết {tableSort.col === "theory" ? (tableSort.desc ? "↓" : "↑") : ""}
                      </th>
                      <th onClick={() => toggleSort("errors")} className="sortable">
                        Lỗi liên kết {tableSort.col === "errors" ? (tableSort.desc ? "↓" : "↑") : ""}
                      </th>
                      <th>Minh chứng / Ghi chú</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableCategoryGroups.map((group) => {
                      const isCollapsed = !!collapsedCategories[group.category];
                      const domainShort = domainMetas[group.domain]?.shortLabel || group.domain;
                      return (
                        <Fragment key={group.category}>
                          {/* Category Group Header Row */}
                          <tr
                            className={`ep-table-group-header ${isCollapsed ? "collapsed" : ""}`}
                            onClick={() => toggleCategoryCollapse(group.category)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                toggleCategoryCollapse(group.category);
                              }
                            }}
                            aria-expanded={!isCollapsed}
                            title={`${isCollapsed ? "Mở rộng" : "Thu gọn"} chuyên đề ${group.category}`}
                          >
                            <td colSpan={7}>
                              <div className="ep-table-group-header-content">
                                <div className="ep-tgh-left">
                                  <span className="ep-tgh-toggle-icon">
                                    {isCollapsed ? "▶" : "▼"}
                                  </span>
                                  <span className="ep-tgh-breadcrumb">
                                    <span className="ep-tgh-domain">{domainShort}</span>
                                    <span className="ep-tgh-sep">›</span>
                                    <span className="ep-tgh-cat-name">{group.category}</span>
                                  </span>
                                  <span className="ep-tgh-count-pill">
                                    {group.count} chủ điểm
                                  </span>
                                </div>
                                <div className="ep-tgh-right">
                                  <span className="ep-tgh-score-badge" title="Điểm trung bình chuyên đề">
                                    TB: <strong>{group.avg}</strong> / 10
                                  </span>
                                  <span className={`ep-tgh-theory-badge ${group.theoryDone === group.count ? "complete" : ""}`}>
                                    📖 {group.theoryDone}/{group.count} đã học 50%
                                  </span>
                                  {group.errorCount > 0 && (
                                    <span className="ep-tgh-errors-badge">
                                      ⚠️ {group.errorCount} lỗi
                                    </span>
                                  )}
                                  <span className="ep-tgh-collapse-hint">
                                    {isCollapsed ? "Mở rộng" : "Thu gọn"}
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Child Topic Rows under this Category */}
                          {!isCollapsed &&
                            group.sortedTopics.map((topic) => {
                              const meta = getScoreMeta(topic.score);
                              const errorCount = errorsByTopicId.get(topic.id) ?? 0;
                              return (
                                <tr key={topic.id} className="ep-table-child-row">
                                  <td className="ep-td-title">
                                    <div className="ep-table-title-cell">
                                      <span className="ep-table-tree-marker" aria-hidden="true">└</span>
                                      <div className="ep-table-title-text">
                                        <strong>{topic.label}</strong>
                                        {topic.subtopic && <small>{topic.subtopic}</small>}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="ep-td-meta">
                                    <span className="ep-td-dom-tag">
                                      {domainMetas[topic.domain]?.shortLabel ?? topic.domain}
                                    </span>
                                    {topic.level && <span className="ep-td-level-tag">{topic.level}</span>}
                                    {topic.topicGroup && <span className="ep-td-group-tag">{topic.topicGroup}</span>}
                                  </td>
                                  <td className="ep-td-score">
                                    <div className="ep-table-score-wrap">
                                      <b className="ep-table-score-val">{topic.score}/10</b>
                                      <span className={`ep-badge ${meta.badgeClass}`}>{meta.tierLabel}</span>
                                      <div className="ep-table-meter-10seg" title={`Độ vững: ${topic.score}/10 — ${meta.tierLabel} (${meta.actionHint})`}>
                                        {Array.from({ length: 10 }).map((_, i) => (
                                          <span
                                            key={i}
                                            className={`ep-table-meter-seg ${i < topic.score ? "active" : ""}`}
                                            style={{ backgroundColor: i < topic.score ? meta.color : undefined }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="ep-td-theory">
                                    {topic.theoryCompleted ? (
                                      <span className="ep-theory-pill done" title="Đã nhận 50% credit lý thuyết">
                                        📖 50% Đã học
                                      </span>
                                    ) : (
                                      <span className="ep-theory-pill pending" title="Chưa đọc bài lý thuyết">
                                        ○ Chưa đọc
                                      </span>
                                    )}
                                  </td>
                                  <td className="ep-td-errors">
                                    {errorCount > 0 ? (
                                      <button
                                        type="button"
                                        className="ep-error-table-link"
                                        onClick={() => jumpToTopicErrors(topic.id)}
                                        title="Xem các lỗi sai của chủ đề này"
                                      >
                                        ⚠️ {errorCount} lỗi
                                      </button>
                                    ) : (
                                      <span className="ep-no-errors">—</span>
                                    )}
                                  </td>
                                  <td className="ep-td-evidence">
                                    <span className="ep-td-evidence-text">{topic.evidence || "—"}</span>
                                  </td>
                                  <td className="ep-td-actions">
                                    <button
                                      type="button"
                                      className="ep-table-action-edit"
                                      onClick={() => openAdminForTopic(topic.id)}
                                      title={`Chỉnh sửa điểm độ vững và minh chứng cho ${topic.label}`}
                                    >
                                      ✏️ Sửa
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* LAYOUT 3: CHART VIEW (4-Depth Analytics Suite - Requirement 2) */}
          {layoutMode === "chart" && (
            <div className="ep-chart-view-stack">
              {/* Chart View Intro Banner */}
              <div className="ep-chart-intro-banner">
                <div>
                  <span className="eyebrow">4-DEPTH ANALYTICS SUITE</span>
                  <h2>Hệ thống Biểu đồ Phân tích Đa Tầng (Depth 1 ➔ Depth 4)</h2>
                  <p>
                    Quan sát toàn diện từ mức tổng thể đa lĩnh vực, chi tiết chuyên đề, bảng ưu tiên bồi dưỡng từ điểm yếu nhất đến lộ trình chuẩn hóa CEFR / TOPIK.
                  </p>
                </div>
                <div className="ep-chart-intro-actions">
                  <button type="button" className="ep-mini-accordion-btn" onClick={expandAllCharts}>
                    ▾ Mở rộng tất cả biểu đồ (D1-D4)
                  </button>
                  <button type="button" className="ep-mini-accordion-btn" onClick={collapseAllCharts}>
                    ▴ Thu gọn tất cả biểu đồ
                  </button>
                </div>
              </div>

              {/* DEPTH 1 CHART: Domain Benchmark Comparison */}
              <section className={`ep-panel ep-depth-chart-card ${collapsedCharts.d1 ? "collapsed" : ""}`}>
                <div
                  className="ep-panel-heading ep-clickable-accordion"
                  onClick={() => toggleChartCollapse("d1")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleChartCollapse("d1");
                    }
                  }}
                  aria-expanded={!collapsedCharts.d1}
                >
                  <div>
                    <span className="eyebrow">DEPTH 1 CHART · DOMAIN BENCHMARKS</span>
                    <h2>So sánh Điểm chuẩn Tổng thể giữa các Lĩnh vực</h2>
                  </div>
                  <div className="ep-chart-head-actions">
                    <span className="ep-panel-meta-tag">{Object.keys(domainMetas).length} Lĩnh vực</span>
                    <button type="button" className="ep-accordion-arrow-btn">
                      {collapsedCharts.d1 ? "▼ Mở rộng" : "▲ Thu gọn"}
                    </button>
                  </div>
                </div>

                {!collapsedCharts.d1 && (
                  <div className="ep-domain-benchmark-list">
                    {Object.keys(domainMetas).map((dom) => {
                      const meta = domainMetas[dom];
                      const domTopics = journey.topics.filter((t) => t.domain === dom);
                      const count = domTopics.length;
                      const avgNum = count ? Number((domTopics.reduce((s, t) => s + t.score, 0) / count).toFixed(1)) : 0;
                      const theoryDone = domTopics.filter((t) => t.theoryCompleted).length;
                      const theoryPct = count ? Math.round((theoryDone / count) * 100) : 0;
                      const masterCount = domTopics.filter((t) => t.score >= 7).length;
                      const errorCount = domTopics.reduce((s, t) => s + (errorsByTopicId.get(t.id) ?? 0), 0);

                      // Tier distribution for this domain
                      const dMastery = domTopics.filter((t) => t.score >= 9).length;
                      const dProficient = domTopics.filter((t) => t.score >= 7 && t.score < 9).length;
                      const dDeveloping = domTopics.filter((t) => t.score >= 5 && t.score < 7).length;
                      const dNeedsWork = domTopics.filter((t) => t.score < 5).length;

                      return (
                        <div key={dom} className="ep-domain-bench-row">
                          <div className="ep-bench-main">
                            <div className="ep-bench-title-col">
                              <span className="ep-bench-icon">{meta.icon}</span>
                              <div>
                                <strong>{meta.label}</strong>
                                <small>{meta.description}</small>
                              </div>
                            </div>

                            <div className="ep-bench-score-col">
                              <b className="ep-bench-score">{avgNum.toFixed(1)} <small>/ 10</small></b>
                              <span className={`ep-badge ${avgNum >= 7 ? "ep-score-proficient" : avgNum >= 5 ? "ep-score-developing" : "ep-score-needs-work"}`}>
                                {avgNum >= 9 ? "Tinh thông" : avgNum >= 7 ? "Khá vững" : avgNum >= 5 ? "Đang tiến bộ" : "Cần bồi dưỡng"}
                              </span>
                            </div>
                          </div>

                          {/* Stacked mini-meter for tier distribution */}
                          <div className="ep-bench-bars-wrap">
                            <div className="ep-bench-track">
                              <span
                                style={{ width: `${count ? (dMastery / count) * 100 : 0}%`, background: "#1f683e" }}
                                title={`Tinh thông (9-10): ${dMastery}`}
                              />
                              <span
                                style={{ width: `${count ? (dProficient / count) * 100 : 0}%`, background: "#52684e" }}
                                title={`Khá vững (7-8): ${dProficient}`}
                              />
                              <span
                                style={{ width: `${count ? (dDeveloping / count) * 100 : 0}%`, background: "#c96e40" }}
                                title={`Đang tiến bộ (5-6): ${dDeveloping}`}
                              />
                              <span
                                style={{ width: `${count ? (dNeedsWork / count) * 100 : 0}%`, background: "#b85a48" }}
                                title={`Cần bồi dưỡng (1-4): ${dNeedsWork}`}
                              />
                            </div>

                            <div className="ep-bench-stats-meta">
                              <span>{count} chủ điểm</span>
                              <span>·</span>
                              <span>📖 Lý thuyết 50%: <b>{theoryDone}/{count} ({theoryPct}%)</b></span>
                              <span>·</span>
                              <span>🎯 Đạt chuẩn thực chiến: <b>{masterCount}/{count}</b></span>
                              {errorCount > 0 && (
                                <>
                                  <span>·</span>
                                  <span className="ep-bench-error-tag">⚠️ {errorCount} lỗi</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>

              {/* DEPTH 2 CHART: Category Depth Breakdown */}
              <section className={`ep-panel ep-depth-chart-card ${collapsedCharts.d2 ? "collapsed" : ""}`}>
                <div
                  className="ep-panel-heading ep-clickable-accordion"
                  onClick={() => toggleChartCollapse("d2")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleChartCollapse("d2");
                    }
                  }}
                  aria-expanded={!collapsedCharts.d2}
                >
                  <div>
                    <span className="eyebrow">DEPTH 2 CHART · CATEGORY BREAKDOWN</span>
                    <h2>Bản đồ Điểm số &amp; Độ vững theo từng Chuyên đề</h2>
                  </div>
                  <div className="ep-chart-head-actions">
                    <span className="ep-panel-meta-tag">{categoryBreakdownStats.length} Chuyên đề</span>
                    <button type="button" className="ep-accordion-arrow-btn">
                      {collapsedCharts.d2 ? "▼ Mở rộng" : "▲ Thu gọn"}
                    </button>
                  </div>
                </div>

                {!collapsedCharts.d2 && (
                  <div className="ep-cat-breakdown-list">
                  {categoryBreakdownStats.map((cat) => {
                    const avgVal = Number(cat.avg);
                    const theoryPct = cat.count ? Math.round((cat.theoryCount / cat.count) * 100) : 0;
                    const meta = getScoreMeta(avgVal);
                    const domainShort = domainMetas[cat.domain]?.shortLabel || "Domain";

                    return (
                      <div key={cat.category} className="ep-cat-breakdown-row">
                        <div className="ep-cat-breakdown-header">
                          <div className="ep-cat-title-wrap">
                            <span className="ep-cat-bc-mini">{domainShort} ›</span>
                            <strong>{cat.category}</strong>
                            <span className="ep-cat-topic-count">({cat.count} chủ điểm)</span>
                          </div>

                          <div className="ep-cat-score-badge">
                            <span className={`ep-badge ${meta.badgeClass}`}>{meta.tierLabel}</span>
                            <strong className="ep-cat-avg-num">{cat.avg} / 10</strong>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="ep-cat-progress-track">
                          <div
                            className="ep-cat-progress-fill"
                            style={{
                              width: `${avgVal * 10}%`,
                              background: meta.color,
                            }}
                          />
                        </div>

                        <div className="ep-cat-metrics-foot">
                          <span className="ep-cat-foot-item">
                            📖 Lý thuyết (50%): <b>{cat.theoryCount}/{cat.count} ({theoryPct}%)</b>
                          </span>
                          {cat.errorCount > 0 ? (
                            <span className="ep-cat-foot-item error">
                              ⚠️ Lỗi tồn đọng: <b>{cat.errorCount} lỗi</b>
                            </span>
                          ) : (
                            <span className="ep-cat-foot-item clean">
                              ✓ Không có lỗi tồn đọng
                            </span>
                          )}
                          <span className="ep-cat-foot-item status">
                            Độ hoàn thiện: <b>{avgVal >= 7 ? "Vững vàng" : avgVal >= 5 ? "Cải thiện" : "Cần bồi dưỡng"}</b>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

              {/* DEPTH 3 CHART: Priority Mastery Ranking */}
              <section className={`ep-panel ep-depth-chart-card ${collapsedCharts.d3 ? "collapsed" : ""}`}>
                <div
                  className="ep-panel-heading ep-clickable-accordion"
                  onClick={() => toggleChartCollapse("d3")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleChartCollapse("d3");
                    }
                  }}
                  aria-expanded={!collapsedCharts.d3}
                >
                  <div>
                    <span className="eyebrow">DEPTH 3 CHART · PRIORITY MASTERY RANKING</span>
                    <h2>Bảng Xếp hạng Độ vững từ Yếu đến Mạnh (Ưu tiên Ôn tập)</h2>
                    <p className="ep-chart-subtitle">
                      Sắp xếp tăng dần theo điểm số để học viên và Trợ lý AI nhận diện ngay lập tức các chủ đề yếu (1-4 và 5-6) cần tập trung bồi dưỡng trước.
                    </p>
                  </div>
                  <div className="ep-chart-head-actions">
                    <span className="ep-panel-meta-tag">{priorityRankedTopics.length} Chủ điểm</span>
                    <button type="button" className="ep-accordion-arrow-btn">
                      {collapsedCharts.d3 ? "▼ Mở rộng" : "▲ Thu gọn"}
                    </button>
                  </div>
                </div>

                {!collapsedCharts.d3 && (
                  <div className="ep-priority-ranked-list">
                  {priorityRankedTopics.map((topic, index) => {
                    const meta = getScoreMeta(topic.score);
                    const errorCount = errorsByTopicId.get(topic.id) ?? 0;
                    const isCritical = topic.score < 5;
                    const isWarning = topic.score >= 5 && topic.score < 7;

                    return (
                      <div
                        key={topic.id}
                        className={`ep-priority-row ${isCritical ? "critical" : isWarning ? "warning" : "good"}`}
                      >
                        <div className="ep-priority-rank-badge">
                          <span>#{index + 1}</span>
                        </div>

                        <div className="ep-priority-info">
                          <div className="ep-priority-tags-line">
                            <span className="ep-priority-cat-tag">{topic.category}</span>
                            {topic.level && <span className="ep-priority-lvl-tag">{topic.level}</span>}
                            {isCritical && <span className="ep-urgency-pill urgent">🚨 Ưu tiên bồi dưỡng</span>}
                            {isWarning && <span className="ep-urgency-pill improve">⚡ Đang rèn luyện</span>}
                            {topic.score >= 9 && <span className="ep-urgency-pill mastery">👑 Tinh thông</span>}
                            {topic.theoryCompleted && (
                              <span className="ep-priority-theory-done">📖 50% Lý thuyết</span>
                            )}
                          </div>

                          <strong className="ep-priority-topic-label">{topic.label}</strong>
                          {topic.subtopic && <p className="ep-priority-subtopic">{topic.subtopic}</p>}

                          {/* Micro-skills preview */}
                          {topic.keyPoints && topic.keyPoints.length > 0 && (
                            <div className="ep-priority-micro-skills">
                              {topic.keyPoints.map((kp, kIdx) => (
                                <span key={kIdx} className="ep-mini-kp-tag">{kp}</span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="ep-priority-score-col">
                          <div className="ep-priority-score-num">
                            <strong style={{ color: meta.color }}>{topic.score}</strong>
                            <small>/10</small>
                          </div>
                          <div className="ep-priority-meter-wrap">
                            <span style={{ width: `${topic.score * 10}%`, background: meta.color }} />
                          </div>
                          <span className={`ep-badge ${meta.badgeClass}`}>{meta.tierLabel}</span>
                        </div>

                        <div className="ep-priority-actions-col">
                          {errorCount > 0 && (
                            <button
                              type="button"
                              className="ep-priority-error-btn"
                              onClick={() => jumpToTopicErrors(topic.id)}
                              title="Xem các lỗi sai của chủ đề này trong Sổ tay"
                            >
                              ⚠️ {errorCount} lỗi →
                            </button>
                          )}
                          <div className="ep-stepper-group">
                            <button
                              type="button"
                              className="ep-priority-step-btn"
                              disabled={topic.score <= 1}
                              onClick={() => updateTopicScore(topic.id, topic.score - 1)}
                              title="Giảm điểm"
                            >
                              –
                            </button>
                            <button
                              type="button"
                              className="ep-priority-step-btn"
                              disabled={topic.score >= 10}
                              onClick={() => updateTopicScore(topic.id, topic.score + 1)}
                              title="Tăng điểm"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              </section>

              {/* DEPTH 4 CHART: CEFR / TOPIK Level Progression */}
              <section className={`ep-panel ep-depth-chart-card ${collapsedCharts.d4 ? "collapsed" : ""}`}>
                <div
                  className="ep-panel-heading ep-clickable-accordion"
                  onClick={() => toggleChartCollapse("d4")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleChartCollapse("d4");
                    }
                  }}
                  aria-expanded={!collapsedCharts.d4}
                >
                  <div>
                    <span className="eyebrow">
                      DEPTH 4 CHART · {currentLang === "ko" ? "TOPIK 1 ➔ 6" : "CEFR A1 ➔ C2"} PROGRESSION
                    </span>
                    <h2>Tiến trình Năng lực theo Khung Cấp độ Chuẩn</h2>
                  </div>
                  <div className="ep-chart-head-actions">
                    <span className="ep-panel-meta-tag">{levelProgressionStats.length} Bậc cấp độ</span>
                    <button type="button" className="ep-accordion-arrow-btn">
                      {collapsedCharts.d4 ? "▼ Mở rộng" : "▲ Thu gọn"}
                    </button>
                  </div>
                </div>

                {!collapsedCharts.d4 && (
                  <div className="ep-level-progression-ladder">
                    {levelProgressionStats.map((item, idx) => {
                      const isStandardMet = item.percentMastered >= 70;
                      const isUnderWay = item.percentMastered > 0 && item.percentMastered < 70;

                      return (
                        <div key={item.level} className={`ep-ladder-step ${isStandardMet ? "met" : isUnderWay ? "underway" : "pending"}`}>
                          <div className="ep-step-connector">
                            <span className="ep-step-circle">{idx + 1}</span>
                            {idx < levelProgressionStats.length - 1 && <span className="ep-step-line" />}
                          </div>

                          <div className="ep-step-content-box">
                            <div className="ep-step-top">
                              <div className="ep-step-title-wrap">
                                <span className="ep-step-badge">{item.level}</span>
                                <strong>
                                  {currentLang === "ko"
                                    ? `Cấp độ ${item.level} (${item.level.includes("1") || item.level.includes("2") ? "Sơ cấp" : item.level.includes("3") || item.level.includes("4") ? "Trung cấp" : "Cao cấp"})`
                                    : `Bậc chuẩn ${item.level} (${item.level.startsWith("A") ? "Cơ bản" : item.level.startsWith("B") ? "Độc lập" : "Thành thạo"})`}
                                </strong>
                              </div>

                              <div className="ep-step-score-wrap">
                                <span className="ep-step-avg">TB: <b>{item.avg}</b> / 10</span>
                                <span className={`ep-step-status-tag ${isStandardMet ? "done" : isUnderWay ? "prog" : "wait"}`}>
                                  {isStandardMet ? "✓ Đạt chuẩn bậc" : isUnderWay ? "⏳ Đang hoàn thiện" : "○ Cần bổ sung"}
                                </span>
                              </div>
                            </div>

                            <div className="ep-step-meter-bar">
                              <span style={{ width: `${item.percentMastered}%` }} />
                            </div>

                            <div className="ep-step-bottom-info">
                              <span>Tổng số: <b>{item.count} chủ điểm</b></span>
                              <span>·</span>
                              <span>Đạt chuẩn thực chiến (≥7/10): <b>{item.mastered} / {item.count} ({item.percentMastered}%)</b></span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            </div>
          )}

          {/* Lower Grid: Test Results and Priority Errors */}
          <div className="ep-overview-bottom-grid">
            {/* Test Results Summary */}
            <section className="ep-panel">
              <div className="ep-panel-heading">
                <div>
                  <span className="eyebrow">RECENT ATTEMPTS</span>
                  <h2>Kết quả kiểm tra gần nhất</h2>
                </div>
                <button type="button" onClick={() => setView("history")}>
                  Xem tất cả ({attempts.length}) →
                </button>
              </div>

              {attempts.length ? (
                <div className="ep-chart">
                  {attempts.slice(0, 5).map((a) => (
                    <div className="ep-chart-row" key={a.id}>
                      <div className="ep-chart-meta">
                        <strong>{a.title}</strong>
                        <small>
                          {a.date} · {scoreRatio(a)} câu
                        </small>
                      </div>
                      <div className="ep-meter">
                        <span style={{ width: `${percent(a)}%` }} />
                      </div>
                      <b>{percent(a)}%</b>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="ep-empty">Chưa có bài kiểm tra nào được ghi lại.</p>
              )}
            </section>

            {/* Next Review Errors */}
            <section className="ep-panel">
              <div className="ep-panel-heading">
                <div>
                  <span className="eyebrow">PRE-LESSON REVIEW</span>
                  <h2>Lỗi ưu tiên cần ôn lại</h2>
                </div>
                <button type="button" onClick={() => setView("errors")}>
                  Mở sổ lỗi ({dueErrors.length}) →
                </button>
              </div>

              {dueErrors.length ? (
                <div className="ep-priority-list">
                  {dueErrors.slice(0, 4).map((e) => {
                    const linkedTopic = e.topicId ? topicMap.get(e.topicId) : undefined;
                    return (
                      <div key={e.id} className="ep-priority-item">
                        <div className="ep-priority-tags">
                          <span>{e.category}</span>
                          {e.date && <small>📅 {e.date}</small>}
                          {linkedTopic && (
                            <span className="ep-priority-topic-tag">
                              🎯 {linkedTopic.label}
                            </span>
                          )}
                        </div>
                        <s>{e.incorrect}</s>
                        <strong>{e.corrected}</strong>
                        {e.explanationVi && <p className="ep-priority-expl">{e.explanationVi}</p>}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="ep-empty">Tất cả lỗi hiện tại đã được đánh dấu luyện tập hoặc tạm vững.</p>
              )}
            </section>
          </div>
        </div>
      )}

      {/* VIEW 2: STUDY HISTORY LOG */}
      {view === "history" && (
        <div className="ep-grid">
          <section className="ep-panel ep-span">
            <div className="ep-panel-heading">
              <div>
                <span className="eyebrow">TEST HISTORY & SCORES</span>
                <h2>Nhật ký làm bài kiểm tra ({currentLang.toUpperCase()})</h2>
              </div>
              <button
                type="button"
                className="ep-admin-shortcut"
                onClick={() => {
                  setAdminSection("add-attempt");
                  setView("admin");
                }}
              >
                + Ghi buổi kiểm tra mới →
              </button>
            </div>

            {attempts.length ? (
              <div className="ep-attempts-table">
                {attempts.map((a) => (
                  <article key={a.id} className="ep-attempt-row">
                    <div className="ep-attempt-info">
                      <div className="ep-attempt-head">
                        <strong>{a.title}</strong>
                        <span className="ep-attempt-date">{a.date}</span>
                      </div>
                      <div className="ep-attempt-score-bar">
                        <span className="ep-attempt-fraction">
                          Điểm: <b>{scoreRatio(a)}</b> ({percent(a)}%)
                        </span>
                        <div className="ep-meter ep-attempt-meter">
                          <span style={{ width: `${percent(a)}%` }} />
                        </div>
                      </div>
                      {a.note && <p className="ep-attempt-note">{a.note}</p>}
                    </div>
                    <button
                      type="button"
                      className="ep-delete-btn"
                      aria-label={"Xóa " + a.title}
                      onClick={() => removeAttempt(a.id)}
                    >
                      ×
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <p className="ep-empty">Chưa có bài kiểm tra nào được ghi nhận. Bấm "+ Ghi buổi kiểm tra mới" để thêm.</p>
            )}
          </section>
        </div>
      )}

      {/* VIEW 3: ERROR BANK (SỔ LỖI CÁ NHÂN - Requirement 4) */}
      {view === "errors" && (
        <div className="ep-grid">
          <section className="ep-panel ep-span">
            <div className="ep-panel-heading">
              <div>
                <span className="eyebrow">PERSONAL ERROR BANK ({currentLang.toUpperCase()})</span>
                <h2>Sổ tay các lỗi sai lặp lại & Liên kết năng lực</h2>
              </div>
              <button
                type="button"
                className="ep-admin-shortcut"
                onClick={() => {
                  setAdminSection("add-error");
                  setView("admin");
                }}
              >
                + Thêm lỗi mới vào sổ →
              </button>
            </div>

            {/* Active Topic Filter Banner */}
            {topicFilterForErrors && (
              <div className="ep-active-filter-alert">
                <span>
                  Đang lọc lỗi cho chủ đề năng lực:{" "}
                  <strong>{topicMap.get(topicFilterForErrors)?.label ?? topicFilterForErrors}</strong>
                </span>
                <button
                  type="button"
                  className="ep-clear-filter-btn"
                  onClick={() => setTopicFilterForErrors(null)}
                >
                  ✕ Bỏ lọc (Xem tất cả)
                </button>
              </div>
            )}

            {/* Error Controls */}
            <div className="ep-error-controls">
              {/* Requirement 4: View Mode Switcher (Card Grid vs Daily Lesson Timeline) */}
              <div className="ep-error-viewmode-tabs" role="tablist">
                <button
                  type="button"
                  className={errorViewMode === "cards" ? "active" : ""}
                  onClick={() => setErrorViewMode("cards")}
                >
                  📋 Thẻ lỗi ({filteredErrors.length})
                </button>
                <button
                  type="button"
                  className={errorViewMode === "timeline" ? "active" : ""}
                  onClick={() => setErrorViewMode("timeline")}
                >
                  📅 Nhật ký theo ngày &amp; Bài học ({errorsByDate.length} mốc ngày)
                </button>
              </div>

              <div className="ep-error-status-filter">
                <button
                  type="button"
                  className={errorStatusFilter === "all" ? "active" : ""}
                  onClick={() => setErrorStatusFilter("all")}
                >
                  Tất cả ({journey.errors.length})
                </button>
                <button
                  type="button"
                  className={errorStatusFilter === "due" ? "active" : ""}
                  onClick={() => setErrorStatusFilter("due")}
                >
                  Cần ôn ({journey.errors.filter((e) => e.status === "due").length})
                </button>
                <button
                  type="button"
                  className={errorStatusFilter === "practicing" ? "active" : ""}
                  onClick={() => setErrorStatusFilter("practicing")}
                >
                  Đang luyện ({journey.errors.filter((e) => e.status === "practicing").length})
                </button>
                <button
                  type="button"
                  className={errorStatusFilter === "stable" ? "active" : ""}
                  onClick={() => setErrorStatusFilter("stable")}
                >
                  Tạm vững ({journey.errors.filter((e) => e.status === "stable").length})
                </button>
              </div>
              <input
                type="search"
                className="ep-search-input"
                placeholder="Tìm lỗi theo từ khóa, câu sai, câu sửa..."
                value={errorSearch}
                onChange={(e) => setErrorSearch(e.target.value)}
              />
            </div>

            {/* Error View Mode 1: Cards */}
            {errorViewMode === "cards" && (
              filteredErrors.length ? (
                <div className="ep-error-list-full">
                  {filteredErrors.map((e) => {
                    const lessonTitle = e.lessonId ? lessonTitleMap.get(e.lessonId) : undefined;
                    const linkedTopic = e.topicId ? topicMap.get(e.topicId) : undefined;
                    return (
                      <article key={e.id} className="ep-error-card">
                        <div className="ep-error-card-head">
                          <div className="ep-error-meta-tags">
                            <span className="ep-error-cat-pill">{e.category}</span>
                            {e.date && <time className="ep-error-date">📅 {e.date}</time>}
                            {/* Linked Topic Badge (Requirement 4) */}
                            {linkedTopic && (
                              <span className="ep-linked-topic-pill">
                                🎯 {linkedTopic.label} ({linkedTopic.score}/10)
                              </span>
                            )}
                            {e.lessonId && (
                              <a
                                href={`#lesson/${encodeURIComponent(e.lessonId)}`}
                                className="ep-error-lesson-badge"
                                title="Mở bài đọc"
                              >
                                📖 {lessonTitle ?? e.lessonId} ↗
                              </a>
                            )}
                          </div>
                          <button
                            type="button"
                            className="ep-delete-btn"
                            title="Xóa lỗi"
                            aria-label={"Xóa lỗi " + e.id}
                            onClick={() => removeError(e.id)}
                          >
                            ×
                          </button>
                        </div>

                        <div className="ep-error-sentences">
                          <div className="ep-sentence-row wrong">
                            <span className="ep-sentence-prefix">Câu sai:</span>
                            <s>{e.incorrect}</s>
                          </div>
                          <div className="ep-sentence-row correct">
                            <span className="ep-sentence-prefix">Câu sửa:</span>
                            <strong>{e.corrected}</strong>
                          </div>
                        </div>

                        {e.explanationVi && (
                          <p className="ep-description">
                            <strong>Giải thích:</strong> {e.explanationVi}
                          </p>
                        )}
                        {e.explanationKo && (
                          <p className="ep-description" lang="ko">
                            <strong>설명:</strong> {e.explanationKo}
                          </p>
                        )}

                        <div className="ep-error-status-selector">
                          <span>Độ thành thạo:</span>
                          <button
                            type="button"
                            className={`ep-status-pill-toggle ep-status-${e.status}`}
                            onClick={() => cycleErrorStatus(e.id, e.status)}
                            title="Bấm để đổi nhanh trạng thái: Cần ôn ➔ Đang luyện ➔ Tạm vững"
                          >
                            {e.status === "stable" ? "✓ Tạm vững" : e.status === "practicing" ? "⏳ Đang luyện" : "○ Cần ôn"}
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p className="ep-empty">Không tìm thấy lỗi nào phù hợp với bộ lọc.</p>
              )
            )}

            {/* Error View Mode 2: Timeline by Date & Lesson (Requirement 4) */}
            {errorViewMode === "timeline" && (
              <div className="ep-error-timeline">
                {errorsByDate.length ? (
                  errorsByDate.map(([date, errs]) => (
                    <div key={date} className="ep-error-date-group">
                      <div className="ep-error-date-header">
                        <span className="ep-error-date-badge">📅 {date}</span>
                        <span className="ep-error-date-count">{errs.length} lỗi ghi nhận trong buổi học</span>
                      </div>
                      <div className="ep-error-timeline-cards">
                        {errs.map((e) => {
                          const lessonTitle = e.lessonId ? lessonTitleMap.get(e.lessonId) : undefined;
                          const linkedTopic = e.topicId ? topicMap.get(e.topicId) : undefined;
                          return (
                            <article key={e.id} className="ep-error-card ep-timeline-card-item">
                              <div className="ep-error-card-head">
                                <div className="ep-error-meta-tags">
                                  <span className="ep-error-cat-pill">{e.category}</span>
                                  {linkedTopic && (
                                    <span className="ep-linked-topic-pill">
                                      🎯 {linkedTopic.label} ({linkedTopic.score}/10)
                                    </span>
                                  )}
                                  {e.lessonId && (
                                    <a
                                      href={`#lesson/${encodeURIComponent(e.lessonId)}`}
                                      className="ep-error-lesson-badge"
                                      title="Mở bài đọc lý thuyết này"
                                    >
                                      📖 {lessonTitle ?? e.lessonId} ↗
                                    </a>
                                  )}
                                </div>
                                <button
                                  type="button"
                                  className="ep-delete-btn"
                                  title="Xóa lỗi"
                                  aria-label={"Xóa lỗi " + e.id}
                                  onClick={() => removeError(e.id)}
                                >
                                  ×
                                </button>
                              </div>

                              <div className="ep-error-sentences">
                                <div className="ep-sentence-row wrong">
                                  <span className="ep-sentence-prefix">Câu sai:</span>
                                  <s>{e.incorrect}</s>
                                </div>
                                <div className="ep-sentence-row correct">
                                  <span className="ep-sentence-prefix">Câu sửa:</span>
                                  <strong>{e.corrected}</strong>
                                </div>
                              </div>

                              {e.explanationVi && (
                                <p className="ep-description">
                                  <strong>Giải thích:</strong> {e.explanationVi}
                                </p>
                              )}
                              {e.explanationKo && (
                                <p className="ep-description" lang="ko">
                                  <strong>설명:</strong> {e.explanationKo}
                                </p>
                              )}

                              <div className="ep-error-status-selector">
                                <span>Độ thành thạo:</span>
                                <button
                                  type="button"
                                  className={`ep-status-pill-toggle ep-status-${e.status}`}
                                  onClick={() => cycleErrorStatus(e.id, e.status)}
                                  title="Bấm để đổi nhanh trạng thái: Cần ôn ➔ Đang luyện ➔ Tạm vững"
                                >
                                  {e.status === "stable" ? "✓ Tạm vững" : e.status === "practicing" ? "⏳ Đang luyện" : "○ Cần ôn"}
                                </button>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="ep-empty">Không tìm thấy lỗi nào phù hợp với bộ lọc.</p>
                )}
              </div>
            )}
          </section>
        </div>
      )}

      {/* VIEW 4: ADMIN / COMPETENCY MANAGEMENT CONSOLE */}
      {view === "admin" && (
        <div className="ep-admin-console">
          <div className="ep-admin-header">
            <div>
              <span className="eyebrow">ADMINISTRATION & SCORING CONSOLE ({currentLang.toUpperCase()})</span>
              <h2>Quản trị Năng lực & Nhập liệu</h2>
              <p>
                Cập nhật độ vững (thang điểm 1-10) bằng stepper/slider, ghi nhận buổi kiểm tra mới, thêm lỗi vào sổ tay
                và liên kết 1-1 với từng chủ đề năng lực.
              </p>
            </div>
          </div>

          <div className="ep-admin-subtabs" role="tablist">
            <button
              type="button"
              className={adminSection === "scores" ? "active" : ""}
              onClick={() => setAdminSection("scores")}
            >
              1. Cập nhật Điểm Năng lực (1-10)
            </button>
            <button
              type="button"
              className={adminSection === "add-topic" ? "active" : ""}
              onClick={() => setAdminSection("add-topic")}
            >
              2. Thêm Chủ đề Mới
            </button>
            <button
              type="button"
              className={adminSection === "add-attempt" ? "active" : ""}
              onClick={() => setAdminSection("add-attempt")}
            >
              3. Ghi Buổi Kiểm tra
            </button>
            <button
              type="button"
              className={adminSection === "add-error" ? "active" : ""}
              onClick={() => setAdminSection("add-error")}
            >
              4. Ghi nhận Lỗi Sai Mới
            </button>
          </div>

          {/* Admin Section 1: Competency Scores Editor */}
          {adminSection === "scores" && (
            <section className="ep-panel">
              <div className="ep-panel-heading">
                <div>
                  <span className="eyebrow">STEPPER & SLIDER SCORING</span>
                  <h2>Điều chỉnh điểm độ vững từng chủ đề</h2>
                  <p className="ep-admin-desc">
                    Điểm số 1~10 được tự động phân nhóm: 1-4 (Cần bồi dưỡng), 5-6 (Đang tiến bộ), 7-8 (Khá vững), 9-10 (Tinh thông).
                  </p>
                </div>
              </div>

              <div className="ep-admin-filter-bar">
                <div className="ep-admin-domain-buttons">
                  <button
                    type="button"
                    className={adminDomainFilter === "all" ? "active" : ""}
                    onClick={() => setAdminDomainFilter("all")}
                  >
                    Tất cả ({journey.topics.length})
                  </button>
                  {Object.keys(domainMetas).map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={adminDomainFilter === d ? "active" : ""}
                      onClick={() => setAdminDomainFilter(d)}
                    >
                      {domainMetas[d].shortLabel} ({journey.topics.filter((t) => t.domain === d).length})
                    </button>
                  ))}
                </div>
                <input
                  type="search"
                  className="ep-admin-search"
                  placeholder="Lọc chủ đề theo tên hoặc minh chứng..."
                  value={adminSearch}
                  onChange={(e) => setAdminSearch(e.target.value)}
                />
              </div>

              <div className="ep-admin-topic-list">
                {adminFilteredTopics.length ? (
                  adminFilteredTopics.map((topic) => {
                    const meta = getScoreMeta(topic.score);
                    const isCustom = !standardIdSet.has(topic.id);
                    return (
                      <article key={topic.id} className="ep-admin-topic-row">
                        <div className="ep-admin-topic-info">
                          <div className="ep-admin-topic-badges">
                            <span className="ep-admin-dom-tag">
                              {domainMetas[topic.domain]?.shortLabel ?? topic.domain}
                            </span>
                            <span className="ep-admin-cat-tag">{topic.category}</span>
                            {topic.level && <span className="ep-admin-sub-tag">Level: {topic.level}</span>}
                            {topic.theoryCompleted && (
                              <span className="ep-pill-theory done">📖 50% Lý thuyết</span>
                            )}
                          </div>
                          <strong className="ep-admin-topic-title">{topic.label}</strong>
                          <div className="ep-admin-evidence-field">
                            <label>
                              <span>Minh chứng / Ghi chú kiểm tra:</span>
                              <input
                                type="text"
                                value={topic.evidence}
                                placeholder="Ghi nhận điểm quiz, nhận xét bài tập..."
                                onChange={(e) => updateTopicEvidence(topic.id, e.target.value)}
                              />
                            </label>
                          </div>
                        </div>

                        <div className="ep-admin-controls-box">
                          <div className="ep-stepper-control">
                            <button
                              type="button"
                              className="ep-stepper-btn minus"
                              disabled={topic.score <= 1}
                              onClick={() => updateTopicScore(topic.id, topic.score - 1)}
                              aria-label={`Giảm điểm ${topic.label}`}
                            >
                              −
                            </button>
                            <div className="ep-score-number-display">
                              <strong>{topic.score}</strong>
                              <span>/10</span>
                            </div>
                            <button
                              type="button"
                              className="ep-stepper-btn plus"
                              disabled={topic.score >= 10}
                              onClick={() => updateTopicScore(topic.id, topic.score + 1)}
                              aria-label={`Tăng điểm ${topic.label}`}
                            >
                              +
                            </button>
                          </div>

                          <div className="ep-slider-container">
                            <input
                              type="range"
                              min="1"
                              max="10"
                              step="1"
                              value={topic.score}
                              className="ep-score-range"
                              aria-label={`Thanh trượt điểm cho ${topic.label}`}
                              onChange={(e) => updateTopicScore(topic.id, Number(e.target.value))}
                            />
                            <span className={`ep-badge ${meta.badgeClass}`}>{meta.tierLabel}</span>
                          </div>

                          {isCustom && (
                            <button
                              type="button"
                              className="ep-topic-delete-action"
                              onClick={() => removeTopic(topic.id)}
                            >
                              🗑 Xóa
                            </button>
                          )}
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <p className="ep-empty">Không tìm thấy chủ đề phù hợp với tìm kiếm.</p>
                )}
              </div>
            </section>
          )}

          {/* Admin Section 2: Add New Topic */}
          {adminSection === "add-topic" && (
            <section className="ep-panel ep-admin-form-panel">
              <div className="ep-panel-heading">
                <div>
                  <span className="eyebrow">CUSTOM COMPETENCY</span>
                  <h2>Thêm chủ đề mới vào Cây năng lực ({currentLang.toUpperCase()})</h2>
                </div>
              </div>

              <form className="ep-form" onSubmit={handleAddTopic}>
                <div className="ep-form-duo">
                  <label>
                    Lĩnh vực (Domain)
                    <select
                      value={newTopicDomain}
                      onChange={(e) => setNewTopicDomain(e.target.value)}
                    >
                      {Object.keys(domainMetas).map((d) => (
                        <option key={d} value={d}>
                          {domainMetas[d].label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Nhóm kỹ năng / Category
                    <input
                      required
                      value={newTopicCategory}
                      onChange={(e) => setNewTopicCategory(e.target.value)}
                      placeholder="Ví dụ: 12 thì, Mệnh đề quan hệ, TOPIK II Viết..."
                    />
                  </label>
                </div>

                <div className="ep-form-duo">
                  <label>
                    Tên chủ đề / Năng lực (Bắt buộc)
                    <input
                      required
                      maxLength={120}
                      value={newTopicLabel}
                      onChange={(e) => setNewTopicLabel(e.target.value)}
                      placeholder="Ví dụ: Đảo ngữ với trạng từ phủ định"
                    />
                  </label>
                  <label>
                    Phân nhánh nhỏ / Sub-topic (Tùy chọn)
                    <input
                      maxLength={120}
                      value={newTopicSubtopic}
                      onChange={(e) => setNewTopicSubtopic(e.target.value)}
                      placeholder="Ví dụ: Hardly, Seldom, Rarely"
                    />
                  </label>
                </div>

                <div className="ep-form-duo">
                  <label>
                    Cấp độ (Level)
                    <select value={newTopicLevel} onChange={(e) => setNewTopicLevel(e.target.value)}>
                      {VOCAB_LEVELS_BY_LANG[currentLang].map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Nhóm chủ đề (Theme)
                    <select value={newTopicGroup} onChange={(e) => setNewTopicGroup(e.target.value)}>
                      {VOCAB_TOPIC_GROUPS.map((grp) => (
                        <option key={grp} value={grp}>
                          {grp}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label>
                  Độ vững ban đầu: <b>{newTopicScore} / 10</b> ({getScoreMeta(newTopicScore).tierLabel})
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={newTopicScore}
                    onChange={(e) => setNewTopicScore(Number(e.target.value))}
                    className="ep-score-range"
                  />
                </label>

                <label>
                  Minh chứng / Ghi chú ban đầu
                  <input
                    value={newTopicEvidence}
                    onChange={(e) => setNewTopicEvidence(e.target.value)}
                    placeholder="Ví dụ: Đã làm bài test trên sách..."
                  />
                </label>

                <button type="submit" className="ep-primary">
                  + Thêm vào Bản đồ Năng lực
                </button>
              </form>
            </section>
          )}

          {/* Admin Section 3: Add Attempt */}
          {adminSection === "add-attempt" && (
            <section className="ep-panel ep-admin-form-panel">
              <div className="ep-panel-heading">
                <div>
                  <span className="eyebrow">NEW ATTEMPT LOG</span>
                  <h2>Ghi nhận một buổi kiểm tra / Quiz</h2>
                </div>
              </div>

              <form className="ep-form" onSubmit={addAttempt}>
                <div className="ep-form-duo">
                  <label>
                    Ngày kiểm tra
                    <input type="date" required value={attemptDate} onChange={(e) => setAttemptDate(e.target.value)} />
                  </label>
                  <label>
                    Tên bài / Module kiểm tra
                    <input
                      required
                      maxLength={100}
                      value={attemptTitle}
                      onChange={(e) => setAttemptTitle(e.target.value)}
                      placeholder="Ví dụ: TOPIK II Reading Test 1 hoặc Cambridge 18"
                    />
                  </label>
                </div>

                <div className="ep-form-duo">
                  <label>
                    Số câu đúng
                    <input
                      type="number"
                      min="0"
                      step="1"
                      required
                      value={correct}
                      onChange={(e) => setCorrect(e.target.value)}
                    />
                  </label>
                  <label>
                    Tổng số câu
                    <input
                      type="number"
                      min="1"
                      step="1"
                      required
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </label>
                </div>

                <label>
                  Nhận xét ngắn về buổi làm bài
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Những câu còn phân vân, bẫy từ khóa gặp phải..."
                  />
                </label>

                <button className="ep-primary" type="submit">
                  + Lưu kết quả kiểm tra
                </button>
              </form>
            </section>
          )}

          {/* Admin Section 4: Add Error (Requirement 4: 1-1 Topic Link) */}
          {adminSection === "add-error" && (
            <section className="ep-panel ep-admin-form-panel">
              <div className="ep-panel-heading">
                <div>
                  <span className="eyebrow">CAPTURE STUDY MISTAKE</span>
                  <h2>Thêm lỗi mới vào Sổ tay ({currentLang.toUpperCase()})</h2>
                  <p className="ep-admin-desc">
                    Liên kết trực tiếp 1-1 với một chủ đề năng lực để theo dõi các điểm còn hổng.
                  </p>
                </div>
              </div>

              <form className="ep-form" onSubmit={addError}>
                <div className="ep-form-duo">
                  <label>
                    Ngày mắc lỗi
                    <input type="date" required value={errorDate} onChange={(e) => setErrorDate(e.target.value)} />
                  </label>
                  <label>
                    Nhóm lỗi
                    <select value={errorCategory} onChange={(e) => setErrorCategory(e.target.value)}>
                      {ERROR_CATEGORIES_BY_LANG[currentLang].map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {/* Requirement 4: Topic Selection (1-1 Link) */}
                <label>
                  Chủ đề năng lực liên quan (Topic 1-1)
                  <select value={errorTopicId} onChange={(e) => setErrorTopicId(e.target.value)}>
                    <option value="">-- Không gắn riêng chủ đề cụ thể --</option>
                    {journey.topics.map((t) => (
                      <option key={t.id} value={t.id}>
                        [{domainMetas[t.domain]?.shortLabel ?? t.domain}] {t.label} ({t.score}/10)
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Bài học liên quan (Lesson ID)
                  {documents.length > 0 ? (
                    <select value={errorLessonId} onChange={(e) => setErrorLessonId(e.target.value)}>
                      <option value="">-- Không gắn riêng bài đọc --</option>
                      {documents.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.title} ({doc.skill} · {doc.id})
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value={errorLessonId}
                      onChange={(e) => setErrorLessonId(e.target.value)}
                      placeholder="Ví dụ: english-grammar-foundations-time"
                    />
                  )}
                </label>

                <label>
                  Câu sai (Original mistake)
                  <input
                    required
                    value={incorrect}
                    onChange={(e) => setIncorrect(e.target.value)}
                    placeholder="Ví dụ: 비가 와서 우산을 쓰세요."
                  />
                </label>

                <label>
                  Câu đúng (Correct sentence)
                  <input
                    required
                    value={corrected}
                    onChange={(e) => setCorrected(e.target.value)}
                    placeholder="Ví dụ: 비가 오니까 우산을 쓰세요."
                  />
                </label>

                <label>
                  Giải thích Tiếng Việt (VI)
                  <textarea
                    rows={2}
                    value={explanationVi}
                    onChange={(e) => setExplanationVi(e.target.value)}
                    placeholder="Phân tích vì sao sai và cách ghi nhớ..."
                  />
                </label>

                <label>
                  Giải thích 한국어 (KR)
                  <textarea
                    rows={2}
                    value={explanationKo}
                    onChange={(e) => setExplanationKo(e.target.value)}
                    placeholder="한국어 문법 설명..."
                  />
                </label>

                <button type="submit" className="ep-primary">
                  + Lưu lỗi vào sổ tay
                </button>
              </form>
            </section>
          )}
        </div>
      )}

      {/* ADMIN DRAWER / MODAL (Requirement 3: Dedicated drawer for score tuning & item management) */}
      {adminDrawerOpen && (
        <div
          className="ep-drawer-backdrop"
          onClick={() => {
            setAdminDrawerOpen(false);
            setSelectedTopicForAdmin(null);
          }}
        >
          <aside
            className="ep-admin-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Bảng quản lý và điều chỉnh năng lực"
          >
            <header className="ep-admin-drawer-header">
              <div className="ep-drawer-header-info">
                <span className="ep-drawer-badge">⚙️ BẢNG QUẢN LÝ TIẾN ĐỘ</span>
                <h3>Hiệu chỉnh Năng lực &amp; Minh chứng</h3>
                <p>Điều chỉnh điểm số độ vững 1~10, minh chứng kiểm tra hoặc bổ sung chủ đề/lỗi mới</p>
              </div>
              <button
                type="button"
                className="ep-drawer-close-btn"
                onClick={() => {
                  setAdminDrawerOpen(false);
                  setSelectedTopicForAdmin(null);
                }}
                aria-label="Đóng bảng điều khiển"
              >
                ✕
              </button>
            </header>

            {/* Drawer Sub-navigation tabs */}
            <nav className="ep-drawer-tabs">
              <button
                type="button"
                className={`ep-drawer-tab ${adminSection === "scores" ? "active" : ""}`}
                onClick={() => setAdminSection("scores")}
              >
                🎯 Điểm độ vững (1~10)
              </button>
              <button
                type="button"
                className={`ep-drawer-tab ${adminSection === "add-topic" ? "active" : ""}`}
                onClick={() => setAdminSection("add-topic")}
              >
                + Thêm chủ đề
              </button>
              <button
                type="button"
                className={`ep-drawer-tab ${adminSection === "add-attempt" ? "active" : ""}`}
                onClick={() => setAdminSection("add-attempt")}
              >
                + Ghi kiểm tra
              </button>
              <button
                type="button"
                className={`ep-drawer-tab ${adminSection === "add-error" ? "active" : ""}`}
                onClick={() => setAdminSection("add-error")}
              >
                + Ghi lỗi sai
              </button>
            </nav>

            <div className="ep-admin-drawer-body">
              {notice && <div className="ep-notice">{notice}</div>}

              {/* Drawer Tab 1: Scores & Evidence */}
              {adminSection === "scores" && (
                <div className="ep-drawer-section">
                  {selectedTopicForAdmin && (
                    <div className="ep-drawer-focused-banner">
                      <div className="ep-drawer-focus-text">
                        <span className="ep-drawer-focus-pill">Đang chỉnh sửa trực tiếp:</span>
                        <strong>{topicMap.get(selectedTopicForAdmin)?.label ?? selectedTopicForAdmin}</strong>
                      </div>
                      <button
                        type="button"
                        className="ep-drawer-clear-focus-btn"
                        onClick={() => setSelectedTopicForAdmin(null)}
                      >
                        ✕ Xem tất cả chủ đề
                      </button>
                    </div>
                  )}

                  <div className="ep-drawer-filter-row">
                    <input
                      type="search"
                      className="ep-drawer-search"
                      placeholder="Tìm theo tên hoặc minh chứng..."
                      value={adminSearch}
                      onChange={(e) => setAdminSearch(e.target.value)}
                    />
                    <select
                      className="ep-drawer-select"
                      value={adminDomainFilter}
                      onChange={(e) => setAdminDomainFilter(e.target.value)}
                      aria-label="Lọc theo miền năng lực"
                    >
                      <option value="all">Tất cả miền ({journey.topics.length})</option>
                      {Object.keys(domainMetas).map((d) => (
                        <option key={d} value={d}>
                          {domainMetas[d].shortLabel} ({journey.topics.filter((t) => t.domain === d).length})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="ep-drawer-topic-list">
                    {adminFilteredTopics.length ? (
                      adminFilteredTopics.map((topic) => {
                        const meta = getScoreMeta(topic.score);
                        const isCustom = !standardIdSet.has(topic.id);
                        const isHighlighted = selectedTopicForAdmin === topic.id;
                        return (
                          <article
                            key={topic.id}
                            className={`ep-drawer-topic-item ${isHighlighted ? "highlighted" : ""}`}
                          >
                            <div className="ep-drawer-topic-header">
                              <div className="ep-drawer-topic-badges">
                                <span className="ep-admin-dom-tag">
                                  {domainMetas[topic.domain]?.shortLabel ?? topic.domain}
                                </span>
                                <span className="ep-admin-cat-tag">{topic.category}</span>
                                {topic.subtopic && <span className="ep-admin-sub-tag">{topic.subtopic}</span>}
                                {topic.level && <span className="ep-admin-sub-tag">Level: {topic.level}</span>}
                              </div>
                              <span className={`ep-badge ${meta.badgeClass}`}>{meta.tierLabel}</span>
                            </div>

                            <h4 className="ep-drawer-topic-title">{topic.label}</h4>

                            {/* 10-Segmented Meter Bar */}
                            <div
                              className="ep-meter-10seg ep-meter-compact"
                              role="meter"
                              aria-valuenow={topic.score}
                              aria-valuemin={1}
                              aria-valuemax={10}
                            >
                              {Array.from({ length: 10 }, (_, i) => {
                                const segIndex = i + 1;
                                const active = segIndex <= topic.score;
                                return (
                                  <span
                                    key={segIndex}
                                    className={`ep-meter-seg ${active ? "active" : ""}`}
                                    style={{ backgroundColor: active ? meta.color : undefined }}
                                  />
                                );
                              })}
                            </div>

                            {/* Stepper + Slider */}
                            <div className="ep-drawer-controls-box">
                              <div className="ep-stepper-control">
                                <button
                                  type="button"
                                  className="ep-stepper-btn minus"
                                  disabled={topic.score <= 1}
                                  onClick={() => updateTopicScore(topic.id, topic.score - 1)}
                                  aria-label={`Giảm điểm ${topic.label}`}
                                >
                                  −
                                </button>
                                <div className="ep-score-number-display">
                                  <strong>{topic.score}</strong>
                                  <span>/10</span>
                                </div>
                                <button
                                  type="button"
                                  className="ep-stepper-btn plus"
                                  disabled={topic.score >= 10}
                                  onClick={() => updateTopicScore(topic.id, topic.score + 1)}
                                  aria-label={`Tăng điểm ${topic.label}`}
                                >
                                  +
                                </button>
                              </div>

                              <div className="ep-slider-container">
                                <input
                                  type="range"
                                  min="1"
                                  max="10"
                                  step="1"
                                  value={topic.score}
                                  className="ep-score-range"
                                  aria-label={`Thanh trượt điểm cho ${topic.label}`}
                                  onChange={(e) => updateTopicScore(topic.id, Number(e.target.value))}
                                />
                              </div>
                            </div>

                            {/* Evidence input */}
                            <div className="ep-drawer-evidence-field">
                              <label>
                                <span>Minh chứng / Ghi chú kiểm tra:</span>
                                <input
                                  type="text"
                                  value={topic.evidence}
                                  placeholder="Ghi nhận điểm quiz, nhận xét bài tập..."
                                  onChange={(e) => updateTopicEvidence(topic.id, e.target.value)}
                                />
                              </label>
                            </div>

                            <div className="ep-drawer-topic-footer-actions">
                              <label className="ep-theory-toggle-label">
                                <input
                                  type="checkbox"
                                  checked={!!topic.theoryCompleted}
                                  onChange={() => toggleTheoryCompleted(topic.id)}
                                />
                                <span>Đã học lý thuyết (50% tiến độ)</span>
                              </label>

                              {isCustom && (
                                <button
                                  type="button"
                                  className="ep-topic-delete-action"
                                  onClick={() => removeTopic(topic.id)}
                                  title="Xóa chủ đề tùy chỉnh này"
                                >
                                  🗑 Xóa
                                </button>
                              )}
                            </div>
                          </article>
                        );
                      })
                    ) : (
                      <div className="ep-empty">Không tìm thấy chủ đề nào phù hợp bộ lọc.</div>
                    )}
                  </div>
                </div>
              )}

              {/* Drawer Tab 2: Add Topic */}
              {adminSection === "add-topic" && (
                <form onSubmit={handleAddTopic} className="ep-drawer-form">
                  <p className="ep-drawer-hint">
                    Thêm chủ đề năng lực mới vào cây phân cấp Domain &rarr; Topic &rarr; Sub-topic.
                  </p>
                  <div className="ep-form-grid">
                    <label>
                      <span>Miền kiến thức</span>
                      <select
                        value={newTopicDomain}
                        onChange={(e) => {
                          const d = e.target.value;
                          setNewTopicDomain(d);
                          const existingCats = Array.from(
                            new Set(journey.topics.filter((t) => t.domain === d).map((t) => t.category))
                          );
                          if (existingCats.length) setNewTopicCategory(existingCats[0]);
                        }}
                      >
                        {Object.keys(domainMetas).map((d) => (
                          <option key={d} value={d}>
                            {domainMetas[d].label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      <span>Nhóm chủ đề (Category)</span>
                      <input
                        type="text"
                        list="drawer-category-options"
                        value={newTopicCategory}
                        onChange={(e) => setNewTopicCategory(e.target.value)}
                        placeholder="Chọn hoặc nhập nhóm..."
                      />
                      <datalist id="drawer-category-options">
                        {Array.from(
                          new Set(journey.topics.filter((t) => t.domain === newTopicDomain).map((t) => t.category))
                        ).map((cat) => (
                          <option key={cat} value={cat} />
                        ))}
                      </datalist>
                    </label>

                    <label>
                      <span>Tên chủ đề chi tiết (Topic)</span>
                      <input
                        type="text"
                        value={newTopicLabel}
                        onChange={(e) => setNewTopicLabel(e.target.value)}
                        placeholder="VD: Inversion with Negative Adverbials..."
                        required
                      />
                    </label>

                    <label>
                      <span>Tiểu mục cụ thể (Sub-topic - tùy chọn)</span>
                      <input
                        type="text"
                        value={newTopicSubtopic}
                        onChange={(e) => setNewTopicSubtopic(e.target.value)}
                        placeholder="VD: Hardly / Scarcely / No sooner..."
                      />
                    </label>

                    <label>
                      <span>Cấp độ ({currentLang === "en" ? "CEFR" : "TOPIK"})</span>
                      <select value={newTopicLevel} onChange={(e) => setNewTopicLevel(e.target.value)}>
                        {(VOCAB_LEVELS_BY_LANG[currentLang] ?? VOCAB_LEVELS_BY_LANG.en).map((lvl) => (
                          <option key={lvl} value={lvl}>
                            {lvl}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      <span>Phân loại nhóm từ / ứng dụng</span>
                      <select value={newTopicGroup} onChange={(e) => setNewTopicGroup(e.target.value)}>
                        {VOCAB_TOPIC_GROUPS.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="span-2">
                      <span>Điểm khởi đầu (1 ~ 10): <strong>{newTopicScore}/10</strong> ({getScoreMeta(newTopicScore).tierLabel})</span>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={newTopicScore}
                        onChange={(e) => setNewTopicScore(Number(e.target.value))}
                      />
                    </label>

                    <label className="span-2">
                      <span>Minh chứng ban đầu</span>
                      <input
                        type="text"
                        value={newTopicEvidence}
                        onChange={(e) => setNewTopicEvidence(e.target.value)}
                        placeholder="VD: Đạt 85% bài kiểm tra The Economist..."
                      />
                    </label>
                  </div>

                  <button type="submit" className="ep-primary ep-btn-full">
                    + Tạo &amp; Lưu chủ đề mới
                  </button>
                </form>
              )}

              {/* Drawer Tab 3: Add Attempt */}
              {adminSection === "add-attempt" && (
                <form onSubmit={addAttempt} className="ep-drawer-form">
                  <p className="ep-drawer-hint">
                    Ghi lại kết quả làm bài tập trắc nghiệm, bài test kỹ năng để cập nhật tiến độ.
                  </p>
                  <div className="ep-form-grid">
                    <label>
                      <span>Ngày kiểm tra</span>
                      <input
                        type="date"
                        value={attemptDate}
                        onChange={(e) => setAttemptDate(e.target.value)}
                        required
                      />
                    </label>

                    <label className="span-2">
                      <span>Tên bài kiểm tra / Nguồn đề</span>
                      <input
                        type="text"
                        value={attemptTitle}
                        onChange={(e) => setAttemptTitle(e.target.value)}
                        placeholder="VD: Cambridge IELTS 18 Test 2 Reading..."
                        required
                      />
                    </label>

                    <label>
                      <span>Số câu đúng</span>
                      <input
                        type="number"
                        min="0"
                        value={correct}
                        onChange={(e) => setCorrect(e.target.value)}
                        placeholder="VD: 34"
                        required
                      />
                    </label>

                    <label>
                      <span>Tổng số câu</span>
                      <input
                        type="number"
                        min="1"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        placeholder="VD: 40"
                        required
                      />
                    </label>

                    <label className="span-2">
                      <span>Ghi chú bài làm</span>
                      <textarea
                        rows={3}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Điểm mạnh, lỗi sai hay bẫy cần chú ý..."
                      />
                    </label>
                  </div>

                  <button type="submit" className="ep-primary ep-btn-full">
                    + Ghi nhận kết quả kiểm tra
                  </button>
                </form>
              )}

              {/* Drawer Tab 4: Add Error */}
              {adminSection === "add-error" && (
                <form onSubmit={addError} className="ep-drawer-form">
                  <p className="ep-drawer-hint">
                    Ghi nhận lỗi sai gặp phải khi làm bài hoặc viết luận để ôn lại trước bài học mới.
                  </p>
                  <div className="ep-form-grid">
                    <label>
                      <span>Ngày mắc lỗi</span>
                      <input
                        type="date"
                        value={errorDate}
                        onChange={(e) => setErrorDate(e.target.value)}
                        required
                      />
                    </label>

                    <label>
                      <span>Phân loại lỗi</span>
                      <select
                        value={errorCategory}
                        onChange={(e) => setErrorCategory(e.target.value)}
                      >
                        {(ERROR_CATEGORIES_BY_LANG[currentLang] ?? ERROR_CATEGORIES_BY_LANG.en).map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="span-2">
                      <span>Liên kết với Chủ đề năng lực (Độ vững sẽ phản ánh)</span>
                      <select
                        value={errorTopicId}
                        onChange={(e) => setErrorTopicId(e.target.value)}
                      >
                        <option value="">-- Chưa liên kết chủ đề cụ thể --</option>
                        {journey.topics.map((t) => (
                          <option key={t.id} value={t.id}>
                            [{domainMetas[t.domain]?.shortLabel ?? t.domain}] {t.category} &rarr; {t.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="span-2">
                      <span>Gắn với bài học (Lesson Markdown ID)</span>
                      <select
                        value={errorLessonId}
                        onChange={(e) => setErrorLessonId(e.target.value)}
                      >
                        <option value="">-- Tùy chọn: Chọn bài học --</option>
                        {documents.map((doc) => (
                          <option key={doc.id} value={doc.id}>
                            {doc.title} ({doc.id})
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="span-2">
                      <span>Câu/Cụm từ đã viết SAI:</span>
                      <input
                        type="text"
                        value={incorrect}
                        onChange={(e) => setIncorrect(e.target.value)}
                        placeholder="VD: Despite of the rain..."
                        required
                      />
                    </label>

                    <label className="span-2">
                      <span>Câu ĐÚNG chuẩn xác:</span>
                      <input
                        type="text"
                        value={corrected}
                        onChange={(e) => setCorrected(e.target.value)}
                        placeholder="VD: In spite of the rain / Despite the rain..."
                        required
                      />
                    </label>

                    <label className="span-2">
                      <span>Giải thích ngữ pháp (Tiếng Việt):</span>
                      <textarea
                        rows={2}
                        value={explanationVi}
                        onChange={(e) => setExplanationVi(e.target.value)}
                        placeholder="Despite là giới từ, đi trực tiếp với danh từ..."
                      />
                    </label>

                    <label className="span-2">
                      <span>Giải thích tiếng Hàn (한국어 설명):</span>
                      <textarea
                        rows={2}
                        value={explanationKo}
                        onChange={(e) => setExplanationKo(e.target.value)}
                        placeholder="한국어 문법 설명..."
                      />
                    </label>
                  </div>

                  <button type="submit" className="ep-primary ep-btn-full">
                    + Lưu lỗi vào Sổ tay
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      )}

      {/* SMART AI ASSISTANT MODAL (Requirement 3 & 4) */}
      {showAiModal && (
        <div className="ep-modal-backdrop" onClick={() => setShowAiModal(false)}>
          <div className="ep-ai-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <header className="ep-ai-modal-header">
              <div className="ep-ai-modal-title">
                <span className="ep-ai-icon-pulse">🤖</span>
                <div>
                  <h3>Trợ lý Học tập AI &amp; Cập nhật Tiến độ Tự động</h3>
                  <p>Học cùng ChatGPT / Claude theo đúng điểm yếu và đồng bộ tiến độ 2 chiều với LanguageLab</p>
                </div>
              </div>
              <button
                type="button"
                className="ep-ai-modal-close"
                onClick={() => setShowAiModal(false)}
                aria-label="Đóng"
              >
                ✕
              </button>
            </header>

            {/* AI Assistant Tabs */}
            <div className="ep-ai-tabs">
              <button
                type="button"
                className={`ep-ai-tab ${aiModalTab === "prompt" ? "active" : ""}`}
                onClick={() => setAiModalTab("prompt")}
              >
                📋 1. Tạo Prompt học cùng AI
              </button>
              <button
                type="button"
                className={`ep-ai-tab ${aiModalTab === "sync" ? "active" : ""}`}
                onClick={() => setAiModalTab("sync")}
              >
                🔄 2. Dán kết quả từ AI (Smart Sync)
              </button>
              <button
                type="button"
                className={`ep-ai-tab ${aiModalTab === "profile" ? "active" : ""}`}
                onClick={() => setAiModalTab("profile")}
              >
                📦 3. Xuất Profile cho AI (Compact)
              </button>
            </div>

            <div className="ep-ai-modal-body">
              {/* TAB 1: GENERATE PROMPT */}
              {aiModalTab === "prompt" && (
                <div className="ep-ai-tab-content">
                  <div className="ep-ai-alert">
                    <span className="ep-ai-alert-icon">💡</span>
                    <div>
                      <strong>Hồ sơ học tập được phát hiện:</strong>
                      <p>
                        Hệ thống đã tự động lọc ra <strong>{journey.topics.filter((t) => t.score < 7).length} chủ điểm yếu</strong> (điểm &lt; 7)
                        và <strong>{journey.errors.filter((e) => e.status === "due").length} lỗi sai tồn đọng</strong> trong Sổ tay của bạn.
                        Prompt bên dưới đã được chuẩn hóa để AI đóng vai gia sư luyện trúng đích các điểm này!
                      </p>
                    </div>
                  </div>

                  <div className="ep-ai-prompt-box">
                    <div className="ep-ai-prompt-header">
                      <span>PROMPT CHUẨN HÓA DÀNH CHO CHATGPT / CLAUDE:</span>
                      <button
                        type="button"
                        className="ep-ai-copy-btn"
                        onClick={() => copyToClipboard(generatedAiPrompt, "Prompt học AI")}
                      >
                        📋 Sao chép Prompt
                      </button>
                    </div>
                    <pre className="ep-ai-prompt-code">{generatedAiPrompt}</pre>
                  </div>

                  {copyFeedback && <div className="ep-ai-toast">{copyFeedback}</div>}

                  <div className="ep-ai-steps-grid">
                    <div className="ep-ai-step-card">
                      <span className="ep-step-num">1</span>
                      <h4>Sao chép Prompt</h4>
                      <p>Bấm nút <strong>Sao chép Prompt</strong> ở trên để copy toàn bộ nội dung đã cá nhân hóa.</p>
                    </div>
                    <div className="ep-ai-step-card">
                      <span className="ep-step-num">2</span>
                      <h4>Học cùng AI</h4>
                      <p>Dán vào ChatGPT hoặc Claude. Làm 5 bài tập thực hành phản xạ và nhận chấm điểm tức thì.</p>
                    </div>
                    <div className="ep-ai-step-card">
                      <span className="ep-step-num">3</span>
                      <h4>Đồng bộ về App</h4>
                      <p>Copy toàn bộ phản hồi chứa khối mã JSON ở cuối của AI và dán vào tab <strong>"2. Dán kết quả từ AI"</strong>.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SMART SYNC / PASTE RESULT */}
              {aiModalTab === "sync" && (
                <div className="ep-ai-tab-content">
                  <p className="ep-ai-instruction">
                    Dán toàn bộ câu trả lời của AI hoặc đoạn mã <code>```json ... ```</code> vào ô bên dưới.
                    Hệ thống sẽ tự động bóc tách các cập nhật điểm số, bài kiểm tra mới, lỗi mới và lỗi đã giải quyết:
                  </p>

                  <div className="ep-ai-sync-input-wrap">
                    <textarea
                      className="ep-ai-textarea"
                      rows={8}
                      value={aiSyncInput}
                      onChange={(e) => setAiSyncInput(e.target.value)}
                      placeholder="Dán phản hồi của AI (hoặc đoạn JSON) vào đây..."
                    />
                    <div className="ep-ai-sync-actions">
                      <button
                        type="button"
                        className="ep-btn-analyze"
                        onClick={handleAnalyzeAiInput}
                      >
                        🔍 Phân tích &amp; Xem trước thay đổi
                      </button>
                      <button
                        type="button"
                        className="ep-btn-demo"
                        onClick={loadDemoAiPatch}
                      >
                        🧪 Nạp mẫu phản hồi thử nghiệm
                      </button>
                    </div>
                  </div>

                  {/* AI Patch Diff Preview */}
                  {aiPatchResult && (
                    <div className="ep-ai-diff-panel">
                      {aiPatchResult.error ? (
                        <div className="ep-ai-diff-error">
                          ⚠️ {aiPatchResult.error}
                        </div>
                      ) : (
                        <div className="ep-ai-diff-success">
                          <div className="ep-ai-diff-header">
                            <h4>✅ Phát hiện {aiPatchResult.changesSummary.length} thay đổi hợp lệ:</h4>
                            <button
                              type="button"
                              className="ep-btn-apply-patch"
                              onClick={handleApplyAiPatch}
                            >
                              ✓ Lưu thay đổi vào Tiến độ học
                            </button>
                          </div>
                          <ul className="ep-ai-diff-list">
                            {aiPatchResult.changesSummary.map((item, idx) => (
                              <li key={idx} className="ep-ai-diff-item">
                                <span className="ep-diff-bullet">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: COMPACT PROFILE */}
              {aiModalTab === "profile" && (
                <div className="ep-ai-tab-content">
                  <div className="ep-ai-alert">
                    <span className="ep-ai-alert-icon">📌</span>
                    <div>
                      <strong>Hồ sơ năng lực tinh gọn (Compact Profile):</strong>
                      <p>
                        Dưới đây là bản tóm lược năng lực (dưới 100 dòng) được tối ưu cấu trúc. Bạn có thể sao chép và dán vào
                        <strong> Custom GPT Instructions</strong>, <strong>Claude Project Knowledge</strong> hoặc <strong>System Prompt</strong>
                        để AI luôn hiểu rõ trình độ của bạn trong mọi phiên trò chuyện sau này!
                      </p>
                    </div>
                  </div>

                  <div className="ep-ai-prompt-box">
                    <div className="ep-ai-prompt-header">
                      <span>COMPACT JSON PROFILE ({currentLang.toUpperCase()}):</span>
                      <button
                        type="button"
                        className="ep-ai-copy-btn"
                        onClick={() => copyToClipboard(compactAiProfile, "Compact Profile")}
                      >
                        📋 Sao chép Profile JSON
                      </button>
                    </div>
                    <pre className="ep-ai-prompt-code">{compactAiProfile}</pre>
                  </div>

                  {copyFeedback && <div className="ep-ai-toast">{copyFeedback}</div>}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
