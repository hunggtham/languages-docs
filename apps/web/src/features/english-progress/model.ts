export type ReviewStatus = "due" | "practicing" | "stable";
export type TopicStatus = "strong" | "review" | "unverified";
export type LanguageCode = "en" | "ko";

export type SkillDomain =
  | "grammar"
  | "vocabulary"
  | "ielts"
  | "toeic"
  | "topik"
  | "conversation"
  | string;

export type ScoreTier = "needs_work" | "developing" | "proficient" | "mastery";

export interface ScoreMeta {
  score: number;
  tier: ScoreTier;
  tierLabel: string;
  rangeLabel: string;
  badgeClass: string;
  color: string;
  bgLight: string;
  actionHint: string;
}

export const SCORE_TIER_CONFIGS: Array<{
  tier: ScoreTier;
  tierLabel: string;
  rangeLabel: string;
  color: string;
  badgeClass: string;
  desc: string;
  actionHint: string;
}> = [
  {
    tier: "needs_work",
    tierLabel: "Cần bồi dưỡng",
    rangeLabel: "1 - 4",
    color: "#b85a48",
    badgeClass: "ep-score-needs-work",
    desc: "Cần ôn tập bài giảng lý thuyết và làm bài tập nền tảng (tỷ lệ lỗi cao)",
    actionHint: "Ưu tiên đọc lý thuyết bài học và làm lại bài sai",
  },
  {
    tier: "developing",
    tierLabel: "Đang tiến bộ",
    rangeLabel: "5 - 6",
    color: "#c96e40",
    badgeClass: "ep-score-developing",
    desc: "Đã hiểu quy tắc cơ bản nhưng phản xạ còn chậm hoặc dễ mắc bẫy đề thi",
    actionHint: "Cần tăng tốc độ phản xạ và chú ý bẫy đề thi",
  },
  {
    tier: "proficient",
    tierLabel: "Khá vững",
    rangeLabel: "7 - 8",
    color: "#52684e",
    badgeClass: "ep-score-proficient",
    desc: "Tự tin giải quyết các dạng đề và tình huống giao tiếp, ít sai sót nhỏ",
    actionHint: "Đạt chuẩn tự tin, tiếp tục làm bài luyện thực tế",
  },
  {
    tier: "mastery",
    tierLabel: "Tinh thông",
    rangeLabel: "9 - 10",
    color: "#1f683e",
    badgeClass: "ep-score-mastery",
    desc: "Đạt chuẩn học thuật/bản ngữ, phản xạ tự nhiên và chính xác tuyệt đối",
    actionHint: "Duy trì phản xạ và vận dụng văn cảnh nâng cao",
  },
];

export function getScoreMeta(score: number): ScoreMeta {
  const s = Math.min(10, Math.max(1, Math.round(Number.isFinite(score) ? score : 1)));
  if (s >= 9) {
    return {
      score: s,
      tier: "mastery",
      tierLabel: "Tinh thông",
      rangeLabel: "9 - 10",
      badgeClass: "ep-score-mastery",
      color: "#1f683e",
      bgLight: "rgba(31, 104, 62, 0.12)",
      actionHint: "Duy trì phản xạ và vận dụng văn cảnh nâng cao",
    };
  }
  if (s >= 7) {
    return {
      score: s,
      tier: "proficient",
      tierLabel: "Khá vững",
      rangeLabel: "7 - 8",
      badgeClass: "ep-score-proficient",
      color: "#52684e",
      bgLight: "rgba(82, 104, 78, 0.12)",
      actionHint: "Đạt chuẩn tự tin, tiếp tục làm bài luyện thực tế",
    };
  }
  if (s >= 5) {
    return {
      score: s,
      tier: "developing",
      tierLabel: "Đang tiến bộ",
      rangeLabel: "5 - 6",
      badgeClass: "ep-score-developing",
      color: "#c96e40",
      bgLight: "rgba(201, 110, 64, 0.12)",
      actionHint: "Cần tăng tốc độ phản xạ và chú ý bẫy đề thi",
    };
  }
  return {
    score: s,
    tier: "needs_work",
    tierLabel: "Cần bồi dưỡng",
    rangeLabel: "1 - 4",
    badgeClass: "ep-score-needs-work",
    color: "#b85a48",
    bgLight: "rgba(184, 90, 72, 0.12)",
    actionHint: "Ưu tiên đọc lý thuyết bài học và làm lại bài sai",
  };
}

export interface DomainMeta {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
}

export const DOMAIN_METAS_BY_LANG: Record<LanguageCode, Record<string, DomainMeta>> = {
  en: {
    grammar: {
      id: "grammar",
      label: "Grammar Foundations",
      shortLabel: "Grammar",
      description: "Hệ thống 12 thì, mệnh đề, thể bị động, câu điều kiện & ngữ pháp học thuật",
      icon: "Aa",
    },
    vocabulary: {
      id: "vocabulary",
      label: "Vocabulary & Collocations",
      shortLabel: "Vocabulary",
      description: "Academic Word List (AWL), CEFR A1~C2 & Từ vựng phân mảnh theo chủ đề",
      icon: "✦",
    },
    ielts: {
      id: "ielts",
      label: "IELTS 4 Kỹ năng",
      shortLabel: "IELTS",
      description: "Listening, Reading, Writing Task 1/2 & Speaking Part 1-3 chuẩn học thuật",
      icon: "↗",
    },
    toeic: {
      id: "toeic",
      label: "TOEIC Đa kỹ năng",
      shortLabel: "TOEIC",
      description: "Listening & Reading công sở (Part 1-7) cùng Speaking & Writing giao tiếp",
      icon: "✓",
    },
  },
  ko: {
    grammar: {
      id: "grammar",
      label: "Ngữ pháp tiếng Hàn (한국어 문법)",
      shortLabel: "Ngữ pháp",
      description: "Trợ từ 은/는, 이/가, 을/를; Kính ngữ 높임말; Đuôi câu 해요/하십시오 & Vĩ tố liên kết",
      icon: "가",
    },
    vocabulary: {
      id: "vocabulary",
      label: "Từ vựng tiếng Hàn (한국어 어휘)",
      shortLabel: "Từ vựng",
      description: "Từ vựng phân tầng TOPIK 1~6 và theo chủ đề đời sống, ẩm thực, công sở, y tế",
      icon: "✦",
    },
    topik: {
      id: "topik",
      label: "Luyện thi TOPIK (TOPIK I & II)",
      shortLabel: "TOPIK",
      description: "TOPIK I Nghe-Đọc, TOPIK II Nghe-Đọc và Kỹ năng viết luận câu 51-54",
      icon: "↗",
    },
    conversation: {
      id: "conversation",
      label: "Giao tiếp & Kính ngữ thực tế (실전 회화)",
      shortLabel: "Giao tiếp",
      description: "Phản xạ giao tiếp công sở, đàm thoại điện thoại và kính ngữ trong kinh doanh",
      icon: "✓",
    },
  },
};

// Default backward compatible domain metadata
export const DOMAIN_METAS: Record<string, DomainMeta> = DOMAIN_METAS_BY_LANG.en;

export interface StudyAttempt {
  id: string;
  date: string;
  title: string;
  correct: number;
  total: number;
  note: string;
}

export interface StudyError {
  id: string;
  category: string;
  incorrect: string;
  corrected: string;
  explanationVi: string;
  explanationKo: string;
  status: ReviewStatus;
  lessonId?: string;
  date?: string;
  topicId?: string; // 1-1 link with StudyTopic.id (Requirement 4)
}

export interface StudyTopic {
  id: string;
  domain: SkillDomain;
  category: string;
  subtopic?: string;
  label: string;
  score: number; // 1..10
  status?: TopicStatus;
  evidence: string;
  level?: string; // Requirement 3: e.g. "A1", "B2", "C1", "TOPIK 1", "TOPIK 4"
  topicGroup?: string; // Requirement 3: e.g. "Đời sống", "Ẩm thực", "Công sở", "Y tế", "Công nghệ", "Học thuật"
  theoryCompleted?: boolean; // Requirement 5: 50% theory credit
  theoryLessonId?: string; // Requirement 5: lesson that gave theory credit
  lessonIds?: string[]; // linked lessons
  keyPoints?: string[]; // Depth 4: Micro-skills / key points / pitfalls
}

export interface LanguageJourney {
  schemaVersion: 1;
  language: LanguageCode;
  attempts: StudyAttempt[];
  errors: StudyError[];
  topics: StudyTopic[];
  updatedAt: string;
}

// Backward compatibility alias
export type EnglishJourney = LanguageJourney;

// Depth 4 Micro-skills / key points / pitfalls catalog
export const KEYPOINTS_CATALOG: Record<string, string[]> = {
  // English Grammar
  present: ["Thói quen & Chân lý (V/Vs/es)", "Đang diễn ra (am/is/are + V-ing)", "Stative verbs (know, like, belong) không chia tiếp diễn"],
  past: ["Quá khứ đơn (V2/ed)", "Quá khứ tiếp diễn (was/were + V-ing)", "Hành động cắt ngang (When / While)"],
  "present-perfect": ["have/has + V3/ed", "since / for", "trải nghiệm (ever, never)", "kết quả hiện tại (just, already, yet)"],
  "perfect-continuous": ["have/has been + V-ing", "nhấn mạnh độ dài thời gian", "dấu vết hành động vừa dứt"],
  "past-perfect": ["had + V3/ed", "xảy ra trước một mốc quá khứ", "before / after / by the time / as soon as"],
  future: ["will vs be going to vs V-ing", "lời hứa / quyết định tức thì vs dự định sẵn", "mệnh đề thời gian không dùng will"],
  conditionals: ["Type 1: If + V, will + V", "Type 2: If + V2/ed, would + V", "Type 3: If + had V3, would have V3", "Mixed conditionals"],
  "passive-voice": ["be + V3/ed", "bị động kép với động từ tường thuật", "thể nhờ vả have/get something done"],
  "relative-clauses": ["who / whom / whose / which / that", "rút gọn chủ động V-ing & bị động V3/ed", "dấu phẩy trong mệnh đề không xác định"],
  modals: ["must vs have to (bắt buộc nội tâm vs khách quan)", "should / ought to khuyên bảo", "modal quá khứ: must have, could have, should have"],
  subjunctive: ["demand/suggest that + S + (should) V-inf", "it is vital/essential that", "cấu trúc wish / if only"],
  inversion: ["Đảo ngữ trạng từ phủ định: Hardly, Seldom, Never", "Đảo ngữ câu điều kiện: Should, Were, Had", "Only after / Only when đảo ngữ"],
  "gerund-infinitive": ["remember/forget to V vs V-ing", "stop to V vs stop V-ing", "giới từ + V-ing"],
  "articles-determiners": ["a/an với danh từ đếm được số ít", "the với danh từ xác định / duy nhất", "zero article với khái niệm chung"],
  "prepositions-advanced": ["in, on, at chỉ thời gian & địa điểm", "tính từ + giới từ đi kèm", "cụm giới từ cố định (in charge of, with respect to)"],
  "parallel-structure": ["song hành trong liệt kê (and, but, or)", "not only... but also...", "both... and... / either... or..."],

  // English Vocabulary
  "awl-sublist-1": ["Core academic roots (analyze, approach, concept)", "Collocations: establish a framework, conduct research"],
  "awl-sublist-2": ["Academic verbs: assess, conduct, perceive", "Word families: evaluate - evaluation - evaluative"],
  "awl-sublist-3": ["Technical & scholarly context", "Precision in academic writing"],
  "awl-sublist-4": ["Advanced discourse (hypothesis, empirical)", "Nuanced synonym differentiation"],
  "collocations-academic": ["adjective + noun: pivotal role, empirical evidence", "verb + noun: shed light on, draw a conclusion"],
  "phrasal-verbs-advanced": ["inseparable vs separable phrasal verbs", "bring about, carry out, account for, boil down to"],
  "idiomatic-expressions": ["see eye to eye, bite the bullet, double-edged sword", "dùng đúng ngữ cảnh Speaking, tránh lạm dụng trong Writing"],
  "vocab-a1-basic": ["Daily routine verbs", "Numbers, greetings, family & personal items"],
  "vocab-a2-elementary": ["Shopping, directions, weather, simple hobbies", "Past action vocabulary"],
  "vocab-b1-intermediate": ["Expressing feelings & opinions", "Workplace basics, travel experiences"],
  "vocab-b2-upper": ["Abstract concepts, workplace negotiations", "Cause & effect discourse markers"],
  "vocab-c1-advanced": ["Nuanced terminology, formal debate vocabulary", "Academic critique & diplomacy"],
  "vocab-c2-mastery": ["Literary vocabulary, rhetoric figures", "Native-like precision & figurative language"],
  "vocab-theme-daily": ["household chores, daily commute, routines", "collocations for personal life"],
  "vocab-theme-food": ["culinary terms, dining etiquette, dietary needs", "describing flavors & ingredients"],
  "vocab-theme-work": ["corporate ladder, project milestones, KPIs", "formal correspondence phrases"],
  "vocab-theme-health": ["symptoms, clinical treatments, wellness habits", "mental health vocabulary"],
  "vocab-theme-tech": ["AI algorithms, cybersecurity, cloud infrastructure", "digital trends & automation"],
  "vocab-theme-academic": ["peer-reviewed research, empirical methodology", "scholarly citations & peer critique"],

  // IELTS
  "ielts-listen-sec1-2": ["Form completion, numbers & spelling", "Multiple choice & map labeling in social context"],
  "ielts-listen-sec3-4": ["Academic lecture note-taking", "Multi-speaker academic tutorials & debates"],
  "ielts-read-skimming": ["Skimming for gist in 60s", "Scanning for key dates, names, figures", "Keywords & antonyms"],
  "ielts-read-tfng": ["True = matches text completely", "False = contradicts text", "Not Given = text lacks information"],
  "ielts-read-matching": ["Matching headings (topic sentences)", "Matching information to paragraphs", "Matching features & names"],
  "ielts-write-task1": ["Overview sentence (không số liệu cụ thể)", "Trend language: surge, plummet, plateau", "Comparative structures: whereas, while, twice as much"],
  "ielts-write-task2": ["4-paragraph academic essay", "Clear thesis statement in introduction", "PEEL paragraph framework", "Cohesive devices: Moreover, In contrast, Consequently"],
  "ielts-speak-part1": ["Direct answer + 1-2 extension sentences", "Natural fluency without long pauses", "Variety of tenses"],
  "ielts-speak-part2": ["1-minute planning (notes, not full sentences)", "Storytelling framework (Who, When, Where, What, Why)", "Speaking continuously for 2 minutes"],
  "ielts-speak-part3": ["Speculation phrases: It seems to me that...", "Exploring two sides of societal issues", "Extending abstract ideas"],

  // TOEIC
  "toeic-listen-part1": ["Mô tả hành động bị động (is being done)", "Đồ vật ở vị trí tĩnh (has been placed)", "Bẫy từ đồng âm và từ gây nhầm lẫn"],
  "toeic-listen-part2": ["Câu hỏi Wh- vs Yes/No", "Câu trả lời gián tiếp (I have no idea, check with Jane)", "Bẫy lặp lại từ cùng gốc"],
  "toeic-listen-part3": ["Đọc lướt 3 câu hỏi trước khi nghe", "Nhận diện người nói và địa điểm văn phòng", "Câu hỏi suy luận và liên kết biểu đồ"],
  "toeic-listen-part4": ["Thông báo sân bay/nhà ga, tin nhắn thoại, bản tin", "Nắm bắt mục đích chính ở câu đầu tiên"],
  "toeic-read-part5": ["Xác định từ loại (Noun, Verb, Adj, Adv) trong 10s", "Hòa hợp chủ vị và chia thì", "Từ vựng công sở và giới từ đi kèm"],
  "toeic-read-part6": ["Điền từ vào email/thông báo", "Điền câu phù hợp với mạch logic toàn đoạn", "Liên từ chuyển ý: Therefore, However, In addition"],
  "toeic-read-part7-single": ["Đọc lướt tiêu đề, người gửi, ngày tháng", "Xác định câu hỏi chi tiết vs suy luận", "Quản lý thời gian: dưới 1 phút/câu"],
  "toeic-read-part7-double": ["Liên kết thông tin giữa 2-3 văn bản", "Đối chiếu hóa đơn và email khiếu nại", "Câu hỏi về thời gian biểu và xác nhận"],
  "toeic-speak": ["Đọc to đoạn văn với ngữ điệu chuẩn", "Mô tả tranh công sở", "Đề xuất giải pháp cho vấn đề khách hàng"],
  "toeic-write": ["Viết câu dựa trên tranh với 2 từ cho trước", "Phản hồi email yêu cầu công việc", "Viết bài luận quan điểm ngắn (300 từ)"],

  // Korean Grammar
  "ko-g-particles-subject": ["은/는: tiêu điểm chủ đề / đối chiếu", "이/가: chủ ngữ ngữ pháp / thông tin mới", "nguyên âm + 는/가, phụ âm + 은/이"],
  "ko-g-particles-object": ["을/를: đánh dấu tân ngữ trực tiếp", "nguyên âm + 를, phụ âm + 을", "tác động của ngoại động từ"],
  "ko-g-particles-location": ["-에: địa điểm tồn tại (있다/없다) / đích đến", "-에서: nơi diễn ra hành động / xuất phát điểm", "-에게/한테: hướng tới đối tượng người"],
  "ko-g-honorifics": ["-(으)시- tôn kính hành động của chủ ngữ", "Kính ngữ từ vựng: 드시다, 주무시다, 말씀하시다", "Khiêm nhường từ: 드리ダ, 뵙다, 저/저희"],
  "ko-g-endings-polite": ["-아요/어요 thân mật lịch sự đời sống", "nguyên âm dương (ㅏ, ㅗ) ➔ -아요", "nguyên âm khác ➔ -어요, 하다 ➔ 해요"],
  "ko-g-endings-formal": ["-습니다/습니까 trang trọng, tin tức, công sở", "phụ âm cuối + 습니다, nguyên âm + ㅂ니다"],
  "ko-g-connective-and-but": ["-고: liệt kê theo thứ tự hoặc song song", "-지만: tương phản, tuy nhiên", "-(으)며: liên kết trang trọng trong văn viết"],
  "ko-g-connective-cause": ["-아/어서: nhân quả tự nhiên (cấm đuôi mệnh lệnh -(으)세요)", "-(으)니까: lý do chủ quan (dùng được mệnh lệnh, rủ rê)", "-기 때문에: nguyên nhân rõ ràng, trang trọng"],
  "ko-g-connective-condition": ["-(으)면: giả định nếu... thì...", "-(으)려면: nếu có ý định làm gì...", "-더라도: dù cho có... đi chăng nữa"],
  "ko-g-connective-contrast": ["-는데/(으)ㄴ데: mở đầu bối cảnh hoặc tương phản nhẹ", "-(으)ㄴ 반면에: đối chiếu hai vế trái ngược"],
  "ko-g-passive-causative": ["Bị động từ: -이/히/리/gi-", "Sai khiến: -게 하다 (bắt/cho phép ai làm)", "-아/어지다: trạng thái biến đổi"],
  "ko-g-reported-speech": ["Gián tiếp trần thuật: -다고 하다", "Gián tiếp nghi vấn: -(으)냐고 하다", "Mệnh lệnh gián tiếp: -(으)라고 하다", "Rủ rê: -자고 하다"],

  // Korean Vocabulary
  "ko-v-topik1": ["Đại từ nhân xưng, số đếm thuần Hàn & Hán Hàn", "Động từ đời sống cơ bản: 먹다, 가다, 자다", "Từ chỉ nơi chốn, ngày tháng, thời gian"],
  "ko-v-topik2": ["Hỏi đường, mua sắm, gọi món, thời tiết", "Từ vựng giao tiếp điện thoại, hẹn gặp"],
  "ko-v-topik3": ["Từ vựng miêu tả tính cách, cảm xúc, sức khỏe", "Từ Hán Hàn cơ bản (nhập môn, xuất phát)", "Sự kiện văn hóa & sở thích"],
  "ko-v-topik4": ["Thuật ngữ công việc, phỏng vấn, báo chí đơn giản", "Vấn đề xã hội, công nghệ, môi trường"],
  "ko-v-topik5": ["Kinh tế, chính trị, luật pháp, khoa học cơ bản", "Từ Hán Hàn trừu tượng và chuyên sâu"],
  "ko-v-topik6": ["Văn học, triết học, thành ngữ 4 chữ (사자성어)", "Văn phong học thuật và xã luận cao cấp"],
  "ko-v-theme-daily": ["Sinh hoạt hàng ngày, dọn dẹp, mua sắm", "Phương tiện giao thông công cộng, tàu điện ngầm"],
  "ko-v-theme-food": ["Món ăn truyền thống (김치, 불고기, 찌개)", "Cách chế biến (볶다, 끓이다, 굽다), hương vị"],
  "ko-v-theme-work": ["Chức danh công sở (대리, 과장, 부장)", "Thuật ngữ họp hành (회의, 보고서, 결재, 출장)"],
  "ko-v-theme-health": ["Triệu chứng bệnh (두통, 감기, 소화불량)", "Khám bệnh tại bệnh viện, đơn thuốc, hiệu thuốc"],
  "ko-v-theme-tech": ["Công nghệ số, mạng xã hội, trí tuệ nhân tạo", "Thương mại điện tử, thanh toán thông minh"],
  "ko-v-theme-academic": ["Luận văn, nghiên cứu thực nghiệm, trích dẫn", "Phê bình học thuật, hội thảo khoa học"],

  // Korean TOPIK & Conversation
  "ko-topik-i": ["TOPIK I Nghe: 30 câu hỏi hình ảnh và đối thoại ngắn", "TOPIK I Đọc: 40 câu hỏi quảng cáo, biển báo, đoạn văn ngắn"],
  "ko-topik-ii-listen": ["TOPIK II Nghe: 50 câu đối thoại phức tạp và bài giảng", "Ghi nhớ ý chính khi nghe 1 lần duy nhất ở các câu nâng cao"],
  "ko-topik-ii-read": ["TOPIK II Đọc: 50 câu điền từ, chọn tiêu đề báo, đọc hiểu xã luận", "Kỹ năng phân bổ thời gian: 70 phút cho 50 câu"],
  "ko-topik-ii-write": ["Câu 51-52: Điền vế câu vào thông báo/thư ngắn", "Câu 53: Viết bài giải thích biểu đồ (200-300 chữ)", "Câu 54: Viết luận xã hội (600-700 chữ) cấu trúc 3 phần"],
  "ko-c-business": ["Nguyên tắc xưng hô và trao danh thiếp trong văn hóa Hàn", "Email công việc theo thể formal (-ㅂ니다, 드리겠습니다)"],
  "ko-c-daily": ["Phản xạ trả lời tự nhiên đời sống", "Cách dùng từ đệm: 글쎄요, 맞아요, 그렇군요"],

  // EN Topics specific IDs
  "verb-patterns": ["Verb + to-infinitive (hope, decide, agree)", "Verb + V-ing (enjoy, avoid, mind)", "Verb + object + to-infinitive (advise, allow)"],
  "vocab-awl-1": ["Core academic roots (analyze, approach, concept)", "Collocations: establish a framework, conduct research"],
  "vocab-awl-2": ["Academic verbs: assess, conduct, perceive", "Word families: evaluate - evaluation - evaluative"],
  "vocab-collocations": ["adjective + noun: pivotal role, empirical evidence", "verb + noun: shed light on, draw a conclusion"],
  "vocab-phrasals": ["inseparable vs separable phrasal verbs", "bring about, carry out, account for, boil down to"],
  "vocab-word-building": ["Tiền tố / Hậu tố học thuật (un-, dis-, -tion, -ity)", "Chuyển đổi từ loại Noun ➔ Adj ➔ Adv"],
  "vocab-topic-food": ["culinary terms, dining etiquette, dietary needs", "describing flavors & ingredients"],
  "vocab-topic-health": ["symptoms, clinical treatments, wellness habits", "mental health vocabulary"],
  "vocab-topic-env": ["climate change, carbon footprint, renewable energy", "biodiversity & environmental policy"],
  "vocab-topic-tech": ["AI algorithms, cybersecurity, cloud infrastructure", "digital trends & automation"],
  "vocab-topic-work": ["corporate ladder, project milestones, KPIs", "formal correspondence phrases"],
  "vocab-topic-society": ["demographics, social mobility, urbanization", "civic responsibilities & welfare"],
  "vocab-topic-ethics": ["moral dilemmas, bioethics, ethical compliance", "academic integrity & philosophical discourse"],
  "ielts-listen-dialogues": ["Form completion, numbers & spelling", "Multiple choice in social context"],
  "ielts-listen-lectures": ["Academic lecture note-taking", "Multi-speaker academic tutorials & debates"],
  "ielts-read-headings": ["Matching headings (topic sentences)", "Skimming first & last sentences of paragraphs"],
  "ielts-read-completion": ["Summary & sentence completion with exact words", "Locating synonyms in text"],
  "ielts-write-task1-data": ["Overview sentence (không số liệu cụ thể)", "Trend language: surge, plummet, plateau", "Comparative structures: whereas, while, twice as much"],
  "ielts-write-task1-map-process": ["Passive voice in natural & manufacturing cycles", "Directional & spatial prepositions for maps"],
  "ielts-write-task2-opinion": ["Clear thesis statement in introduction", "PEEL paragraph framework (Point, Explanation, Evidence, Link)"],
  "ielts-write-task2-discussion": ["Exploring two opposing viewpoints fairly", "Clear personal opinion in conclusion", "Cohesive devices: Moreover, In contrast, Consequently"],
  production: ["Academic discourse markers", "Pronunciation intonation & natural pause units"],
  "toeic-read-part7-multi": ["Liên kết thông tin giữa 2-3 văn bản", "Đối chiếu hóa đơn và email khiếu nại", "Câu hỏi về thời gian biểu và xác nhận"],

  // KO Topics specific IDs
  "ko-g-particles-advanced": ["-마다 (mỗi), -(이)나 (hoặc/tận), -밖에 (chỉ còn)", "-치고 (đã là... thì), -조차 (ngay cả)"],
  "ko-g-sentence-endings": ["-거든요 (giải thích lý do)", "-잖아요 (nhắc lại điều cả hai đều biết)", "-(으)ㄹ게요 (hứa hẹn làm gì)"],
  "ko-g-indirect-speech": ["Trần thuật: -다고 하다", "Nghi vấn: -(으)냐고 하다", "Mệnh lệnh: -(으)라고 하다", "Rủ rê: -자고 하다"],
  "ko-g-advanced-connectors": ["-(으)ㄹ 뿐만 아니라 (không những... mà còn)", "-(으)ㄴ/는 대신에 (thay vì...)", "-도록 (để cho / đến mức)"],
  "ko-v-topik1-daily": ["Đại từ nhân xưng, số đếm thuần Hàn & Hán Hàn", "Động từ đời sống cơ bản: 먹다, 가다, 자다"],
  "ko-v-topik1-food": ["Món ăn truyền thống (김치, 불고기, 찌개)", "Cách gọi món và khẩu vị (달다, 짜다, 맵다)"],
  "ko-v-topik2-travel": ["Mua vé tàu, hỏi đường, đặt phòng khách sạn", "Từ vựng phương tiện giao thông (지하철, 기차, 비행기)"],
  "ko-v-topik3-work": ["Chức danh công sở (대리, 과장, 부장)", "Thuật ngữ họp hành (회의, 보고서, 결재, 출장)"],
  "ko-v-topik3-health": ["Triệu chứng bệnh (두통, 감기, 소화불량)", "Khám bệnh tại bệnh viện, đơn thuốc, hiệu thuốc"],
  "ko-v-topik4-tech": ["Công nghệ số, mạng xã hội, trí tuệ nhân tạo", "Thương mại điện tử, thanh toán thông minh"],
  "ko-v-topik4-society": ["Vấn đề việc làm, bất động sản, giáo dục", "Báo chí và tin tức xã hội hàng ngày"],
  "ko-v-topik5-culture": ["Lễ hội truyền thống (추석, 설날), nghệ thuật dân gian", "Hiện tượng làn sóng văn hóa Hàn Quốc (한류)"],
  "ko-v-topik6-academic": ["Văn học, triết học, thành ngữ 4 chữ (사자성어)", "Văn phong luận văn và xã luận cao cấp"],
  "ko-t-topik1-listen": ["30 câu hỏi hình ảnh và đối thoại ngắn đời sống", "Nhận biết bối cảnh và ý đồ người nói"],
  "ko-t-topik1-read": ["40 câu hỏi quảng cáo, biển báo, đoạn văn ngắn", "Nắm bắt từ khóa chính xác"],
  "ko-t-topik2-listen": ["50 câu đối thoại phức tạp và bài giảng", "Ghi nhớ ý chính khi nghe 1 lần duy nhất ở các câu 21-50"],
  "ko-t-topik2-read": ["50 câu điền từ, chọn tiêu đề báo, đọc hiểu xã luận", "Kỹ năng phân bổ thời gian: 70 phút cho 50 câu"],
  "ko-t-topik2-write-51-52": ["Câu 51-52: Điền vế câu vào thông báo/thư ngắn", "Dùng đúng đuôi câu -습니다/-(으)십시오"],
  "ko-t-topik2-write-53": ["Câu 53: Viết giải thích biểu đồ (200-300 chữ)", "Cấu trúc: Khảo sát ➔ Biến động ➔ Nguyên nhân ➔ Dự báo"],
  "ko-t-topik2-write-54": ["Câu 54: Viết luận xã hội (600-700 chữ)", "Dàn ý 3 câu hỏi gợi ý, văn phong học thuật (-ㄴ/는다 thể)"],
  "ko-c-business-call": ["Xưng hô điện thoại chuẩn thương mại (여보세요, -과장님 부탁드립니다)", "Ghi chép tin nhắn thoại và hẹn gọi lại"],
  "ko-c-meeting": ["Phát biểu ý kiến trong cuộc họp (제 생각에는, 찬성/반대)", "Đề xuất giải pháp và kết luận cuộc họp"],
};

// STANDARD TOPICS FOR ENGLISH
export const STANDARD_TOPICS_EN: Array<{
  id: string;
  domain: SkillDomain;
  category: string;
  subtopic: string;
  label: string;
  initialScore: number;
  initialEvidence?: string;
  level?: string;
  topicGroup?: string;
  lessonIds?: string[];
  keyPoints?: string[];
}> = [
  // 1. GRAMMAR
  {
    id: "present",
    domain: "grammar",
    category: "12 thì & Thể thời gian",
    subtopic: "Foundations & Stative Verbs",
    label: "Present Simple / Continuous",
    initialScore: 8,
    initialEvidence: "Nắm vững mốc thời gian và động từ trạng thái",
    level: "A1",
    lessonIds: ["english-grammar-foundations-time", "english-grammar-foundations-sentence"],
  },
  {
    id: "past",
    domain: "grammar",
    category: "12 thì & Thể thời gian",
    subtopic: "Narrative & Interrupted actions",
    label: "Past Simple / Continuous",
    initialScore: 7,
    initialEvidence: "Đã phản xạ tốt với thì quá khứ đơn",
    level: "A2",
    lessonIds: ["english-grammar-foundations-time"],
  },
  {
    id: "present-perfect",
    domain: "grammar",
    category: "12 thì & Thể thời gian",
    subtopic: "Life experience & Recent results",
    label: "Present Perfect",
    initialScore: 5,
    initialEvidence: "Thỉnh thoảng nhầm với Past Simple khi có trạng từ thời gian",
    level: "B1",
    lessonIds: ["english-grammar-foundations-time", "english-grammar-core-perfect"],
  },
  {
    id: "perfect-continuous",
    domain: "grammar",
    category: "12 thì & Thể thời gian",
    subtopic: "Duration & Ongoing relevance",
    label: "Perfect Continuous",
    initialScore: 4,
    initialEvidence: "Cần luyện phân biệt kết quả tức thì và quá trình kéo dài",
    level: "B1",
    lessonIds: ["english-grammar-foundations-time", "english-grammar-core-perfect"],
  },
  {
    id: "past-perfect",
    domain: "grammar",
    category: "12 thì & Thể thời gian",
    subtopic: "Time sequence before past events",
    label: "Past Perfect & Continuous",
    initialScore: 5,
    initialEvidence: "Cần chú ý liên từ before / after / by the time",
    level: "B2",
    lessonIds: ["english-grammar-foundations-time", "english-grammar-core-perfect"],
  },
  {
    id: "future",
    domain: "grammar",
    category: "12 thì & Thể thời gian",
    subtopic: "Intentions, plans & predictions",
    label: "Future forms (will / going to)",
    initialScore: 6,
    initialEvidence: "Đã phân biệt được dự định định trước và quyết định tức thời",
    level: "A2",
    lessonIds: ["english-grammar-foundations-time"],
  },
  {
    id: "conditionals",
    domain: "grammar",
    category: "Cấu trúc & Mệnh đề câu",
    subtopic: "Types 0, 1, 2, 3 & Mixed conditionals",
    label: "Conditionals (Câu điều kiện)",
    initialScore: 4,
    initialEvidence: "Cần củng cố câu điều kiện loại 3 và loại hỗn hợp",
    level: "B1",
    lessonIds: ["english-grammar-core-conditionals"],
  },
  {
    id: "passive-voice",
    domain: "grammar",
    category: "Cấu trúc & Mệnh đề câu",
    subtopic: "Academic style & Impersonal passive",
    label: "Passive Voice & Causatives",
    initialScore: 6,
    initialEvidence: "Vững bị động cơ bản; cần trau dồi thể nhờ vả và bị động khách quan",
    level: "B1",
    lessonIds: ["english-grammar-core-voice-reporting"],
  },
  {
    id: "relative-clauses",
    domain: "grammar",
    category: "Cấu trúc & Mệnh đề câu",
    subtopic: "Defining & Non-defining, Participle clauses",
    label: "Relative Clauses & Reduction",
    initialScore: 5,
    initialEvidence: "Cần luyện rút gọn mệnh đề quan hệ bằng V-ing / V3",
    level: "B2",
    lessonIds: ["english-grammar-foundations-reference"],
  },
  {
    id: "verb-patterns",
    domain: "grammar",
    category: "Cấu trúc & Mệnh đề câu",
    subtopic: "Gerunds vs Infinitives & Prepositional verbs",
    label: "Verb Patterns (Gerund / Infinitive)",
    initialScore: 6,
    initialEvidence: "Nhớ danh sách động từ đi kèm to-V và V-ing phổ biến",
    level: "B1",
    lessonIds: ["english-grammar-foundations-verb-patterns"],
  },
  {
    id: "modals",
    domain: "grammar",
    category: "Ngữ pháp Nâng cao & Học thuật",
    subtopic: "Deduction, obligation & Modal perfects",
    label: "Modals & Modal Perfects",
    initialScore: 5,
    initialEvidence: "Đang ôn suy đoán quá khứ: must have / could have / should have",
    level: "B2",
    lessonIds: ["english-grammar-foundations-modality", "english-grammar-core-modal-perfects"],
  },
  {
    id: "subjunctive",
    domain: "grammar",
    category: "Ngữ pháp Nâng cao & Học thuật",
    subtopic: "Demands, recommendations & Unreal conditions",
    label: "Subjunctive & Unreal Past (Thể giả định)",
    initialScore: 4,
    initialEvidence: "Luyện cấu trúc It is essential that + S + V-inf và wish/if only",
    level: "C1",
  },
  {
    id: "inversion",
    domain: "grammar",
    category: "Ngữ pháp Nâng cao & Học thuật",
    subtopic: "Negative adverbials & Cleft sentences",
    label: "Inversion & Emphasis (Đảo ngữ)",
    initialScore: 3,
    initialEvidence: "Chưa thành thạo đảo ngữ với Not only, Hardly, Rarely",
    level: "C1",
    lessonIds: ["english-grammar-core-focus"],
  },
  {
    id: "parallel-structure",
    domain: "grammar",
    category: "Ngữ pháp Nâng cao & Học thuật",
    subtopic: "Correlative conjunctions & Balanced elements",
    label: "Parallel Structure (Cấu trúc song hành)",
    initialScore: 6,
    initialEvidence: "Nắm vững nguyên tắc tương đương từ loại trong liên từ kết hợp",
    level: "B2",
  },
  {
    id: "prepositions-advanced",
    domain: "grammar",
    category: "Ngữ pháp Nâng cao & Học thuật",
    subtopic: "Adjective + Prep & Complex prepositional phrases",
    label: "Prepositions & Fixed Phrases (Giới từ nâng cao)",
    initialScore: 5,
    initialEvidence: "Cần tích lũy cụm cố định: in light of, with regard to, prone to",
    level: "B2",
  },
  {
    id: "articles-determiners",
    domain: "grammar",
    category: "Ngữ pháp Nâng cao & Học thuật",
    subtopic: "Definite, Indefinite & Zero articles",
    label: "Articles & Determiners (Mạo từ & Từ hạn định)",
    initialScore: 6,
    initialEvidence: "Thỉnh thoảng nhầm mạo từ 'the' khi nói về danh từ chung số nhiều",
    level: "B1",
  },

  // 2. VOCABULARY (With CEFR level & topicGroup)
  // Pillar A: Phân cấp CEFR (A1 ~ C2)
  {
    id: "vocab-a1-basic",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp CEFR (A1 ~ C2)",
    subtopic: "Personal details, family & immediate surroundings",
    label: "A1 Elementary: Đời sống & Thói quen",
    initialScore: 8,
    initialEvidence: "Vốn từ cơ bản về thông tin cá nhân và sinh hoạt hàng ngày",
    level: "A1",
    topicGroup: "Đời sống",
  },
  {
    id: "vocab-a2-elementary",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp CEFR (A1 ~ C2)",
    subtopic: "Shopping, local geography & employment",
    label: "A2 Pre-intermediate: Giao tiếp & Mua sắm",
    initialScore: 7,
    initialEvidence: "Giao tiếp tự tin trong các tình huống mua sắm và hỏi đường",
    level: "A2",
    topicGroup: "Đời sống",
  },
  {
    id: "vocab-b1-intermediate",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp CEFR (A1 ~ C2)",
    subtopic: "Experiences, events, dreams & ambitions",
    label: "B1 Intermediate: Công sở & Trải nghiệm",
    initialScore: 6,
    initialEvidence: "Mô tả được kinh nghiệm làm việc và kế hoạch cá nhân",
    level: "B1",
    topicGroup: "Công sở",
  },
  {
    id: "vocab-b2-upper",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp CEFR (A1 ~ C2)",
    subtopic: "Complex technical discussions & abstract ideas",
    label: "B2 Upper-intermediate: Đàm phán & Ý kiến",
    initialScore: 5,
    initialEvidence: "Trình bày quan điểm chuyên môn trong các cuộc họp",
    level: "B2",
    topicGroup: "Công sở",
  },
  {
    id: "vocab-c1-advanced",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp CEFR (A1 ~ C2)",
    subtopic: "Fluent discourse, implicit meaning & academic critique",
    label: "C1 Advanced: Học thuật & Tranh biện",
    initialScore: 4,
    initialEvidence: "Diễn đạt linh hoạt và hiểu hàm ý trong văn bản học thuật",
    level: "C1",
    topicGroup: "Học thuật",
  },
  {
    id: "vocab-c2-mastery",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp CEFR (A1 ~ C2)",
    subtopic: "Finer shades of meaning & idiomatic precision",
    label: "C2 Mastery: Văn phong bản ngữ & Tinh tế",
    initialScore: 4,
    initialEvidence: "Cần rèn luyện cách dùng từ tinh tế trong văn học và triết học",
    level: "C2",
    topicGroup: "Học thuật",
  },

  // Pillar B: Học thuật AWL & Cụm từ
  {
    id: "vocab-awl-1",
    domain: "vocabulary",
    category: "Từ vựng Học thuật AWL & Cụm từ",
    subtopic: "Core academic verbs, nouns & adverbs",
    label: "Academic Word List (Sublists 1-3)",
    initialScore: 6,
    initialEvidence: "Thuộc 180 từ thông dụng: factor, concept, approach, establish",
    level: "B1",
    topicGroup: "Học thuật",
  },
  {
    id: "vocab-awl-2",
    domain: "vocabulary",
    category: "Từ vựng Học thuật AWL & Cụm từ",
    subtopic: "Advanced concepts & Research vocabulary",
    label: "Academic Word List (Sublists 4-7)",
    initialScore: 4,
    initialEvidence: "Đang bồi dưỡng các từ nghiên cứu học thuật: hypothesis, empirical",
    level: "B2",
    topicGroup: "Học thuật",
  },
  {
    id: "vocab-collocations",
    domain: "vocabulary",
    category: "Từ vựng Học thuật AWL & Cụm từ",
    subtopic: "Verb + Noun & Adjective + Noun patterns",
    label: "Collocations & Fixed Phrases",
    initialScore: 5,
    initialEvidence: "Cần tránh dịch cụm từ theo tư duy từ điển từng chữ",
    level: "B1",
    topicGroup: "Đời sống",
  },
  {
    id: "vocab-phrasals",
    domain: "vocabulary",
    category: "Từ vựng Học thuật AWL & Cụm từ",
    subtopic: "High-frequency academic phrasals",
    label: "Phrasal Verbs in Context",
    initialScore: 5,
    initialEvidence: "Tập trung các cụm: account for, carry out, bring about, turn down",
    level: "B1",
    topicGroup: "Đời sống",
  },
  {
    id: "vocab-word-building",
    domain: "vocabulary",
    category: "Từ vựng Học thuật AWL & Cụm từ",
    subtopic: "Prefixes, Suffixes & Root words",
    label: "Word Formation & Morphology",
    initialScore: 6,
    initialEvidence: "Đoán nghĩa nhanh dựa vào tiền tố re-, un-, dis-, sub-",
    level: "B2",
    topicGroup: "Học thuật",
  },

  // Pillar C: Ngữ cảnh Đời sống & Công sở
  {
    id: "vocab-topic-food",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh Đời sống & Công sở",
    subtopic: "Culinary arts, ingredients & dining etiquette",
    label: "Food, Nutrition & Dining",
    initialScore: 7,
    initialEvidence: "Vốn từ quen thuộc về thực phẩm và thói quen ăn uống",
    level: "A2",
    topicGroup: "Ẩm thực",
  },
  {
    id: "vocab-topic-health",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh Đời sống & Công sở",
    subtopic: "Healthcare, mental wellness & medical conditions",
    label: "Healthcare & Well-being",
    initialScore: 5,
    initialEvidence: "Đang trau dồi thuật ngữ y tế phổ thông và chẩn đoán",
    level: "B2",
    topicGroup: "Y tế",
  },
  {
    id: "vocab-topic-work",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh Đời sống & Công sở",
    subtopic: "Corporate management, strategy & career",
    label: "Business & Workplace Lexis",
    initialScore: 5,
    initialEvidence: "Đang luyện từ vựng đàm phán và thuyết trình kinh doanh",
    level: "B2",
    topicGroup: "Công sở",
  },
  {
    id: "vocab-topic-env",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh Đời sống & Công sở",
    subtopic: "Climate, biodiversity & green energy",
    label: "Environment & Sustainability",
    initialScore: 5,
    initialEvidence: "Đã nắm carbon footprint, renewable resources, biodiversity loss",
    level: "B2",
    topicGroup: "Môi trường",
  },
  {
    id: "vocab-topic-tech",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh Đời sống & Công sở",
    subtopic: "AI, data privacy & automation",
    label: "Technology & Digital Era",
    initialScore: 6,
    initialEvidence: "Vốn từ khá phong phú về trí tuệ nhân tạo và chuyển đổi số",
    level: "B2",
    topicGroup: "Công nghệ",
  },
  {
    id: "vocab-topic-society",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh Đời sống & Công sở",
    subtopic: "Urbanization, demographics & culture",
    label: "Society & Global Issues",
    initialScore: 4,
    initialEvidence: "Cần tăng cường từ vựng dân số già hóa và đô thị hóa",
    level: "C1",
    topicGroup: "Học thuật",
  },
  {
    id: "vocab-topic-ethics",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh Đời sống & Công sở",
    subtopic: "Moral philosophy, bioethics & jurisprudence",
    label: "Ethics, Law & Philosophy",
    initialScore: 4,
    initialEvidence: "Từ vựng học thuật bậc cao C2 về triết học pháp quyền",
    level: "C2",
    topicGroup: "Học thuật",
  },

  // 3. IELTS (4 Kỹ năng)
  // Kỹ năng 1: IELTS Listening (Nghe hiểu)
  {
    id: "ielts-listen-dialogues",
    domain: "ielts",
    category: "IELTS Listening (Kỹ năng Nghe)",
    subtopic: "Form filling, numbers, spellings & maps",
    label: "Listening Section 1 & 2 (Social)",
    initialScore: 7,
    initialEvidence: "Bắt đúng thông tin tên riêng, số điện thoại và phương hướng bản đồ",
    level: "B1",
  },
  {
    id: "ielts-listen-lectures",
    domain: "ielts",
    category: "IELTS Listening (Kỹ năng Nghe)",
    subtopic: "Signposting, multiple choice & summaries",
    label: "Listening Section 3 & 4 (Academic)",
    initialScore: 5,
    initialEvidence: "Cần theo kịp tốc độ nói bài giảng và từ chỉ dấu bài nói",
    level: "B2",
  },
  // Kỹ năng 2: IELTS Reading (Đọc hiểu học thuật)
  {
    id: "ielts-read-skimming",
    domain: "ielts",
    category: "IELTS Reading (Kỹ năng Đọc hiểu)",
    subtopic: "Fast scanning & Paragraph main ideas",
    label: "Reading: Skimming & Scanning",
    initialScore: 7,
    initialEvidence: "Tốc độ quét từ khóa đạt ~220 từ/phút",
    level: "B2",
  },
  {
    id: "ielts-read-tfng",
    domain: "ielts",
    category: "IELTS Reading (Kỹ năng Đọc hiểu)",
    subtopic: "Distinguishing False from Not Given",
    label: "Reading: True / False / Not Given",
    initialScore: 5,
    initialEvidence: "Đôi khi suy diễn chủ quan dẫn đến nhầm lẫn False và Not Given",
    level: "B2",
  },
  {
    id: "ielts-read-headings",
    domain: "ielts",
    category: "IELTS Reading (Kỹ năng Đọc hiểu)",
    subtopic: "Matching headings & Paragraph theme",
    label: "Reading: Matching Headings",
    initialScore: 5,
    initialEvidence: "Cần đọc ý chính tổng quát thay vì bắt bẫy từ khóa đơn lẻ",
    level: "B2",
  },
  {
    id: "ielts-read-completion",
    domain: "ielts",
    category: "IELTS Reading (Kỹ năng Đọc hiểu)",
    subtopic: "Summary, flow-chart & diagram label",
    label: "Reading: Completion Tasks",
    initialScore: 6,
    initialEvidence: "Xác định đúng từ loại cần điền vào chỗ trống",
    level: "B2",
  },

  // Kỹ năng 3: IELTS Writing (Viết luận & Báo cáo)
  {
    id: "ielts-write-task1-data",
    domain: "ielts",
    category: "IELTS Writing (Kỹ năng Viết luận & Báo cáo)",
    subtopic: "Overview writing, key features & trends",
    label: "Writing Task 1: Data Reports",
    initialScore: 6,
    initialEvidence: "Đã viết tốt đoạn tổng quan (Overview) và so sánh xu hướng chính",
    level: "B2",
  },
  {
    id: "ielts-write-task1-map-process",
    domain: "ielts",
    category: "IELTS Writing (Kỹ năng Viết luận & Báo cáo)",
    subtopic: "Process stages, maps & passive voice",
    label: "Writing Task 1: Maps & Processes",
    initialScore: 4,
    initialEvidence: "Cần cải thiện từ nối mô tả giai đoạn quy trình và phương hướng",
    level: "B2",
  },
  {
    id: "ielts-write-task2-opinion",
    domain: "ielts",
    category: "IELTS Writing (Kỹ năng Viết luận & Báo cáo)",
    subtopic: "Thesis statement, topic sentences & arguments",
    label: "Writing Task 2: Opinion Essays",
    initialScore: 5,
    initialEvidence: "Cần luận điểm rõ ràng hơn ở mở bài và câu mở đoạn thân bài",
    level: "C1",
  },
  {
    id: "ielts-write-task2-discussion",
    domain: "ielts",
    category: "IELTS Writing (Kỹ năng Viết luận & Báo cáo)",
    subtopic: "Balanced views, solutions & causes",
    label: "Writing Task 2: Discussion Essays",
    initialScore: 5,
    initialEvidence: "Phát triển tốt lập luận cho cả hai góc nhìn",
    level: "C1",
  },

  // Kỹ năng 4: IELTS Speaking (Phỏng vấn & Thuyết trình)
  {
    id: "ielts-speak-part1",
    domain: "ielts",
    category: "IELTS Speaking (Kỹ năng Phỏng vấn & Thuyết trình)",
    subtopic: "Immediate fluency & everyday questions",
    label: "Speaking Part 1: Fluency & Range",
    initialScore: 6,
    initialEvidence: "Phản xạ nhanh với chủ đề quen thuộc (hobbies, work, hometown)",
    level: "B1",
  },
  {
    id: "production",
    domain: "ielts",
    category: "IELTS Speaking (Kỹ năng Phỏng vấn & Thuyết trình)",
    subtopic: "2-minute monologue & narrative structure",
    label: "Speaking Part 2: Long Turn",
    initialScore: 5,
    initialEvidence: "Nói liên tục được 1.5 phút; cần chuẩn bị cấu trúc câu chuyện tốt hơn",
    level: "B2",
  },
  {
    id: "ielts-speak-part3",
    domain: "ielts",
    category: "IELTS Speaking (Kỹ năng Phỏng vấn & Thuyết trình)",
    subtopic: "Abstract concepts, speculation & reasoning",
    label: "Speaking Part 3: In-depth Discussion",
    initialScore: 4,
    initialEvidence: "Cần dùng các cụm giả định: It could be argued that, From my perspective",
    level: "C1",
  },

  // 4. TOEIC (2/4 Kỹ năng)
  // Kỹ năng 1: TOEIC Listening (Nghe hiểu Part 1 ~ 4)
  {
    id: "toeic-listen-part1",
    domain: "toeic",
    category: "TOEIC Listening (Nghe hiểu Part 1 ~ 4)",
    subtopic: "Office and public scene descriptions",
    label: "Part 1: Photographs (Mô tả tranh)",
    initialScore: 8,
    initialEvidence: "Nhận diện tốt vị trí đồ vật và hành động người trong văn phòng",
    level: "A2",
  },
  {
    id: "toeic-listen-part2",
    domain: "toeic",
    category: "TOEIC Listening (Nghe hiểu Part 1 ~ 4)",
    subtopic: "Direct & indirect question-response fluency",
    label: "Part 2: Question - Response",
    initialScore: 6,
    initialEvidence: "Cần cảnh giác với các câu trả lời gián tiếp và từ đồng âm",
    level: "B1",
  },
  {
    id: "toeic-listen-part3",
    domain: "toeic",
    category: "TOEIC Listening (Nghe hiểu Part 1 ~ 4)",
    subtopic: "3-speaker dialogues & graphic linkage",
    label: "Part 3: Short Conversations",
    initialScore: 6,
    initialEvidence: "Đọc trước câu hỏi và phương án giúp tăng độ chính xác đáng kể",
    level: "B1",
  },
  {
    id: "toeic-listen-part4",
    domain: "toeic",
    category: "TOEIC Listening (Nghe hiểu Part 1 ~ 4)",
    subtopic: "Announcements, reports & telephone talks",
    label: "Part 4: Short Talks",
    initialScore: 6,
    initialEvidence: "Nắm bắt tốt mục đích người nói và hành động tiếp theo",
    level: "B2",
  },

  // Kỹ năng 2: TOEIC Reading (Đọc hiểu Part 5 ~ 7)
  {
    id: "toeic-read-part5",
    domain: "toeic",
    category: "TOEIC Reading (Đọc hiểu Part 5 ~ 7)",
    subtopic: "Speed grammar, word families & prepositions",
    label: "Part 5: Incomplete Sentences",
    initialScore: 7,
    initialEvidence: "Làm đúng 25/30 câu ngữ pháp và từ loại trong 10 phút",
    level: "B1",
  },
  {
    id: "toeic-read-part6",
    domain: "toeic",
    category: "TOEIC Reading (Đọc hiểu Part 5 ~ 7)",
    subtopic: "Paragraph completion & sentence insertion",
    label: "Part 6: Text Completion",
    initialScore: 6,
    initialEvidence: "Cần luyện thêm câu chèn toàn đoạn dựa vào mạch liên kết",
    level: "B1",
  },
  {
    id: "toeic-read-part7-single",
    domain: "toeic",
    category: "TOEIC Reading (Đọc hiểu Part 5 ~ 7)",
    subtopic: "Business emails, notices & advertisements",
    label: "Part 7: Single Passages",
    initialScore: 7,
    initialEvidence: "Đọc hiểu nhanh thư tín công việc và thông báo nội bộ",
    level: "B2",
  },
  {
    id: "toeic-read-part7-multi",
    domain: "toeic",
    category: "TOEIC Reading (Đọc hiểu Part 5 ~ 7)",
    subtopic: "Cross-referencing double and triple sets",
    label: "Part 7: Double & Triple Passages",
    initialScore: 5,
    initialEvidence: "Cần rèn kỹ năng đối chiếu thông tin giữa 2-3 văn bản liên kết",
    level: "B2",
  },

  // Kỹ năng 3: TOEIC Speaking (Giao tiếp & Xử lý tình huống)
  {
    id: "toeic-speak",
    domain: "toeic",
    category: "TOEIC Speaking (Giao tiếp & Xử lý tình huống)",
    subtopic: "Read aloud, picture response & express opinion",
    label: "TOEIC Speaking: Đọc & Trình bày giải pháp",
    initialScore: 5,
    initialEvidence: "Ngữ điệu rõ ràng; cần tăng tốc độ đưa ra giải pháp xử lý tình huống",
    level: "B2",
  },

  // Kỹ năng 4: TOEIC Writing (Thư tín & Luận thương mại)
  {
    id: "toeic-write",
    domain: "toeic",
    category: "TOEIC Writing (Thư tín & Luận thương mại)",
    subtopic: "Picture sentences, email response & opinion essay",
    label: "TOEIC Writing: Email & Luận ngắn",
    initialScore: 6,
    initialEvidence: "Viết email phản hồi chuẩn văn phong thương mại",
    level: "B2",
  },
];

// STANDARD TOPICS FOR KOREAN (한국어)
export const STANDARD_TOPICS_KO: Array<{
  id: string;
  domain: SkillDomain;
  category: string;
  subtopic: string;
  label: string;
  initialScore: number;
  initialEvidence?: string;
  level?: string;
  topicGroup?: string;
  lessonIds?: string[];
  keyPoints?: string[];
}> = [
  // 1. KOREAN GRAMMAR
  // Pillar A: Trợ từ nền tảng (조사)
  {
    id: "ko-g-particles-subject",
    domain: "grammar",
    category: "Trợ từ nền tảng (조사)",
    subtopic: "Topic marker 은/는 vs Subject marker 이/가",
    label: "Trợ từ chủ ngữ: 은/는 vs 이/가",
    initialScore: 6,
    initialEvidence: "Phân biệt được tiêu điểm chủ đề và chủ ngữ hành động mới",
    level: "TOPIK 1",
  },
  {
    id: "ko-g-particles-object",
    domain: "grammar",
    category: "Trợ từ nền tảng (조사)",
    subtopic: "Object marker 을/를 & Location markers 에/에서",
    label: "Trợ từ tân ngữ 을/를 & Vị trí 에/에서",
    initialScore: 7,
    initialEvidence: "Nắm vững mốc thời gian, điểm đến (에) và địa điểm diễn ra hành động (에서)",
    level: "TOPIK 1",
  },
  {
    id: "ko-g-particles-advanced",
    domain: "grammar",
    category: "Trợ từ nền tảng (조사)",
    subtopic: "Auxiliary particles: 도, 만, 부터, 까지, (으)로",
    label: "Trợ từ bổ trợ: 도, 만, 부터~까지, (으)로",
    initialScore: 6,
    initialEvidence: "Dùng chuẩn phương tiện, công cụ (으)로 và phạm vi thời gian",
    level: "TOPIK 2",
  },

  // Pillar B: Kính ngữ & Nghi thức Lịch sự (높임말 & 어미)
  {
    id: "ko-g-honorifics",
    domain: "grammar",
    category: "Kính ngữ & Nghi thức Lịch sự (높임말 & 어미)",
    subtopic: "Subject honorific -(으)시- and honorific vocabulary",
    label: "Kính ngữ 높임말 (드시다, 주무시다, 댁, 진지)",
    initialScore: 5,
    initialEvidence: "Cần phản xạ nhanh khi giao tiếp với người lớn tuổi và cấp trên",
    level: "TOPIK 2",
  },
  {
    id: "ko-g-sentence-endings",
    domain: "grammar",
    category: "Kính ngữ & Nghi thức Lịch sự (높임말 & 어미)",
    subtopic: "Polite informal -아/어요 vs Formal -ㅂ/습니다",
    label: "Đuôi câu 해요 thể vs 합니다 thể",
    initialScore: 8,
    initialEvidence: "Thành thạo chia đuôi câu theo nguyên âm sáng/tối và bất quy tắc ㄷ, ㅂ",
    level: "TOPIK 1",
  },
  {
    id: "ko-g-indirect-speech",
    domain: "grammar",
    category: "Kính ngữ & Nghi thức Lịch sự (높임말 & 어미)",
    subtopic: "Quoted speech: -다고 하다, -냐고 하다, -(으)라고 하다",
    label: "Câu gián tiếp: Tường thuật & Mệnh lệnh",
    initialScore: 4,
    initialEvidence: "Cần luyện rút gọn dạng -대(요), -래(요) trong khẩu ngữ",
    level: "TOPIK 3",
  },

  // Pillar C: Vĩ tố liên kết & Cấu trúc câu (연결어미)
  {
    id: "ko-g-connective-cause",
    domain: "grammar",
    category: "Vĩ tố liên kết & Cấu trúc câu (연결어미)",
    subtopic: "Causal connectives: -아서/어서 vs -(으)니까",
    label: "Vĩ tố chỉ nguyên nhân: -아서/어서 vs -(으)니까",
    initialScore: 5,
    initialEvidence: "Lưu ý không dùng -아서/어서 với câu rủ rê, mệnh lệnh",
    level: "TOPIK 1",
  },
  {
    id: "ko-g-connective-contrast",
    domain: "grammar",
    category: "Vĩ tố liên kết & Cấu trúc câu (연결어미)",
    subtopic: "Background & contrast: -는데 / -(으)ㄴ데",
    label: "Vĩ tố dẫn nhập bối cảnh: -는데 / -(으)ㄴ데",
    initialScore: 6,
    initialEvidence: "Dùng linh hoạt khi đưa ra lý do đệm trước lời đề nghị",
    level: "TOPIK 2",
  },
  {
    id: "ko-g-connective-condition",
    domain: "grammar",
    category: "Vĩ tố liên kết & Cấu trúc câu (연결어미)",
    subtopic: "Conditions & concessions: -(으)면, -(으)려면, -더라도",
    label: "Giả định & Nhượng bộ: -(으)면, -더라도",
    initialScore: 5,
    initialEvidence: "Vững câu điều kiện đơn giản, đang củng cố nhượng bộ -더라도",
    level: "TOPIK 2",
  },
  {
    id: "ko-g-advanced-connectors",
    domain: "grammar",
    category: "Vĩ tố liên kết & Cấu trúc câu (연결어미)",
    subtopic: "Academic writing connectives: -(으)ㄹ 뿐만 아니라, -기 마련이다",
    label: "Vĩ tố học thuật TOPIK II: -기 마련이다, -(으)ㄹ 뿐만 아니라",
    initialScore: 4,
    initialEvidence: "Cần ứng dụng nhiều hơn trong bài viết luận TOPIK câu 54",
    level: "TOPIK 4",
  },

  // 2. KOREAN VOCABULARY (With TOPIK Level & Topic Group)
  // Pillar A: Từ vựng Phân cấp Chuẩn TOPIK (TOPIK 1 ~ 6)
  {
    id: "ko-v-topik1-daily",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp Chuẩn TOPIK (TOPIK 1 ~ 6)",
    subtopic: "Greetings, numbers, family & daily routine",
    label: "TOPIK 1: Đời sống & Gia đình (일상 및 가족)",
    initialScore: 8,
    initialEvidence: "Nắm vững số thuần Hàn, số Hán Hàn và xưng hô gia đình",
    level: "TOPIK 1",
    topicGroup: "Đời sống",
  },
  {
    id: "ko-v-topik2-travel",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp Chuẩn TOPIK (TOPIK 1 ~ 6)",
    subtopic: "Public transit, reservations & directions",
    label: "TOPIK 2: Du lịch & Giao thông (여행 및 교통)",
    initialScore: 6,
    initialEvidence: "Đổi tuyến tàu điện ngầm, hỏi đường và thời tiết",
    level: "TOPIK 2",
    topicGroup: "Đời sống",
  },
  {
    id: "ko-v-topik3-work",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp Chuẩn TOPIK (TOPIK 1 ~ 6)",
    subtopic: "Office communication, reports & meetings",
    label: "TOPIK 3: Môi trường Công sở (회사 및 비즈니스)",
    initialScore: 5,
    initialEvidence: "Đang tích lũy từ vựng chức vụ (부장, 과장), hợp đồng, gửi email",
    level: "TOPIK 3",
    topicGroup: "Công sở",
  },
  {
    id: "ko-v-topik4-society",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp Chuẩn TOPIK (TOPIK 1 ~ 6)",
    subtopic: "Demographics, urbanization & employment",
    label: "TOPIK 4: Xã hội & Đương đại (사회 및 환경)",
    initialScore: 4,
    initialEvidence: "Dân số già hóa (고령화), tỷ lệ sinh thấp (저출산), biến đổi khí hậu",
    level: "TOPIK 4",
    topicGroup: "Học thuật",
  },
  {
    id: "ko-v-topik5-culture",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp Chuẩn TOPIK (TOPIK 1 ~ 6)",
    subtopic: "Traditional heritage, art & modern media",
    label: "TOPIK 5: Văn hóa & Nghệ thuật (문화 및 예술)",
    initialScore: 4,
    initialEvidence: "Từ Hán Hàn học thuật về lịch sử và mỹ thuật truyền thống",
    level: "TOPIK 5",
    topicGroup: "Học thuật",
  },
  {
    id: "ko-v-topik6-academic",
    domain: "vocabulary",
    category: "Từ vựng Phân cấp Chuẩn TOPIK (TOPIK 1 ~ 6)",
    subtopic: "Macroeconomics, public policy & philosophy",
    label: "TOPIK 6: Kinh tế & Chính sách công (경제 및 정책)",
    initialScore: 3,
    initialEvidence: "Chính sách tài khóa, lạm phát và các học thuyết triết học xã hội",
    level: "TOPIK 6",
    topicGroup: "Học thuật",
  },

  // Pillar B: Từ vựng Ngữ cảnh & Đời sống Hàn Quốc
  {
    id: "ko-v-topik1-food",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh & Đời sống Hàn Quốc",
    subtopic: "Korean cuisine, flavors & ordering food",
    label: "TOPIK 1: Ẩm thực & Mua sắm (음식 및 쇼핑)",
    initialScore: 7,
    initialEvidence: "Gọi món, vị giác (맵다, 달다, 짜다) và đơn vị đếm",
    level: "TOPIK 1",
    topicGroup: "Ẩm thực",
  },
  {
    id: "ko-v-topik3-health",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh & Đời sống Hàn Quốc",
    subtopic: "Symptoms, hospital visits & pharmacy",
    label: "TOPIK 3: Y tế & Sức khỏe (병원 및 약국)",
    initialScore: 5,
    initialEvidence: "Mô tả triệu chứng bệnh, bảo hiểm y tế quốc dân (국민건강보험)",
    level: "TOPIK 3",
    topicGroup: "Y tế",
  },
  {
    id: "ko-v-topik4-tech",
    domain: "vocabulary",
    category: "Từ vựng Ngữ cảnh & Đời sống Hàn Quốc",
    subtopic: "AI disruption, digital economy & automation",
    label: "TOPIK 4: Khoa học & Công nghệ số (과학 및 기술)",
    initialScore: 5,
    initialEvidence: "Từ vựng chuyển đổi số, bảo mật thông tin và trí tuệ nhân tạo",
    level: "TOPIK 4",
    topicGroup: "Công nghệ",
  },

  // 3. TOPIK EXAM PREPARATION
  {
    id: "ko-t-topik1-listen",
    domain: "topik",
    category: "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
    subtopic: "Everyday dialogues, announcements & intent",
    label: "TOPIK I Listening: Đàm thoại & Ý chính",
    initialScore: 7,
    initialEvidence: "Làm đúng 26/30 câu nghe TOPIK I đề thi công khai gần nhất",
    level: "TOPIK 1",
  },
  {
    id: "ko-t-topik1-read",
    domain: "topik",
    category: "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
    subtopic: "Notice reading, cloze test & short passages",
    label: "TOPIK I Reading: Biển báo & Đoạn văn ngắn",
    initialScore: 7,
    initialEvidence: "Đọc hiểu nhanh thông báo quảng cáo và điền trợ từ/từ vựng",
    level: "TOPIK 2",
  },
  {
    id: "ko-t-topik2-listen",
    domain: "topik",
    category: "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
    subtopic: "Lectures, public debates & news reports",
    label: "TOPIK II Listening: Bài giảng & Tranh luận",
    initialScore: 5,
    initialEvidence: "Cần luyện bắt từ khóa bài giảng từ câu 30 trở đi",
    level: "TOPIK 4",
  },
  {
    id: "ko-t-topik2-read",
    domain: "topik",
    category: "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
    subtopic: "Newspaper editorials, research abstracts & essays",
    label: "TOPIK II Reading: Bài báo & Văn bản học thuật",
    initialScore: 5,
    initialEvidence: "Cần tăng tốc độ đọc quét từ câu 35-50 trong thời gian quy định",
    level: "TOPIK 5",
  },
  {
    id: "ko-t-topik2-write-51-52",
    domain: "topik",
    category: "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
    subtopic: "Short text cloze completion (Emails & Notices)",
    label: "TOPIK II Writing Câu 51 & 52 (Điền chỗ trống)",
    initialScore: 6,
    initialEvidence: "Nắm vững chia đuôi câu -(으)십시오 và -기 바랍니다",
    level: "TOPIK 3",
  },
  {
    id: "ko-t-topik2-write-53",
    domain: "topik",
    category: "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
    subtopic: "Data graph description (200~300 characters)",
    label: "TOPIK II Writing Câu 53 (Phân tích biểu đồ)",
    initialScore: 5,
    initialEvidence: "Thuộc mẫu câu tăng giảm: -에 불과하다, -에 달하다, 증가세를 보이다",
    level: "TOPIK 4",
  },
  {
    id: "ko-t-topik2-write-54",
    domain: "topik",
    category: "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
    subtopic: "Social argument essay (600~700 characters)",
    label: "TOPIK II Writing Câu 54 (Nghị luận xã hội)",
    initialScore: 4,
    initialEvidence: "Cần lập dàn ý 3 câu hỏi gợi ý và dùng từ nối học thuật",
    level: "TOPIK 5",
  },

  // 4. CONVERSATION & PRACTICAL
  {
    id: "ko-c-business-call",
    domain: "conversation",
    category: "Giao tiếp Thực tế & Công sở (실전 회화)",
    subtopic: "Phone etiquette, messages & appointments",
    label: "Điện thoại công sở (전화 비즈니스 응대)",
    initialScore: 5,
    initialEvidence: "Thành thạo câu: 잠시만 기다려 주시겠습니까?, 메모를 남겨 드릴까요?",
    level: "TOPIK 3",
  },
  {
    id: "ko-c-meeting",
    domain: "conversation",
    category: "Giao tiếp Thực tế & Công sở (실전 회화)",
    subtopic: "Meeting statements, polite disagreement & presentation",
    label: "Hội họp & Trình bày ý kiến (회의 및 발표)",
    initialScore: 5,
    initialEvidence: "Dùng tốt: 제 생각에는 ~, ~에 대해 어떻게 생각하십니까?",
    level: "TOPIK 4",
  },
];

// Helper to get standard topics by language
export function getStandardTopics(lang: LanguageCode = "en") {
  return lang === "ko" ? STANDARD_TOPICS_KO : STANDARD_TOPICS_EN;
}

// Backward compatible export
export const STANDARD_TOPICS = STANDARD_TOPICS_EN;

export function newJourney(lang: LanguageCode = "en"): LanguageJourney {
  if (lang === "ko") {
    return {
      schemaVersion: 1,
      language: "ko",
      attempts: [
        {
          id: "att-ko-sample-1",
          date: "2026-10-16",
          title: "TOPIK II Ngữ pháp & Trợ từ chẩn đoán",
          correct: 17,
          total: 20,
          note: "Vững trợ từ cơ bản; cần củng cố câu gián tiếp và vĩ tố nhượng bộ -더라도.",
        },
      ],
      errors: [
        {
          id: "err-ko-sample-1",
          topicId: "ko-g-particles-subject",
          lessonId: "korean-vocab-advanced-practical-workplace-communication-01-workplace-communication",
          category: "Trợ từ 은/는 vs 이/가",
          incorrect: "이 책은 제가 읽었어요. nhưng lúc giới thiệu: 저는 이름이 안나입니다 (nhầm tiêu điểm).",
          corrected: "제 이름은 안나입니다. (Giới thiệu tên dùng 은/는 cho đề tài câu chuyện).",
          explanationVi: "Khi giới thiệu đề tài câu chuyện hoặc đối chiếu, dùng trợ từ 은/는; khi nhấn mạnh chủ thể hoặc thông tin mới, dùng 이/가.",
          explanationKo: "문장의 화제를 제시하거나 대조할 때는 '은/는'을 사용하고, 새로운 정보나 주어를 특정할 때는 '이/가'를 씁니다.",
          status: "due",
          date: "2026-10-16",
        },
        {
          id: "err-ko-sample-2",
          topicId: "ko-g-connective-cause",
          lessonId: "korean-vocab-advanced-practical-workplace-communication-01-workplace-communication",
          category: "Vĩ tố liên kết -아서/어서 vs -(으)니까",
          incorrect: "비가 와서 우산을 쓰세요.",
          corrected: "비가 오니까 우산을 쓰세요. (-아서/어서 không đi cùng câu mệnh lệnh/rủ rê).",
          explanationVi: "Mệnh đề có đuôi mệnh lệnh -(으)세요 hoặc rủ rê -(으)ㅂ시다 không được kết hợp với -아서/어서, phải dùng -(으)니까.",
          explanationKo: "청유형(-(으)ㅂ시다)이나 명령형(-(으)세요) 문장의 이유를 나타낼 때는 '-아서/어서'를 쓸 수 없고 '-(으)니까'를 써야 합니다.",
          status: "due",
          date: "2026-10-17",
        },
        {
          id: "err-ko-sample-3",
          topicId: "ko-g-honorifics",
          lessonId: "korean-vocab-advanced-practical-workplace-communication-01-workplace-communication",
          category: "Kính ngữ 높임말",
          incorrect: "할아버지께서 밥을 먹었어요.",
          corrected: "할아버지께서 진지를 드셨어요. (Kính ngữ từ vựng: 밥 -> 진지, 먹다 -> 드시다).",
          explanationVi: "Với ông bà, cha mẹ hoặc đối tượng tôn kính, danh từ và động từ phải dùng dạng kính ngữ đặc biệt (진지, 드시다).",
          explanationKo: "주어가 웃어른일 경우 '밥'은 '진지'로, '먹다'는 '드시다/잡수시다'로 높여 써야 합니다.",
          status: "practicing",
          date: "2026-10-18",
        },
      ],
      topics: STANDARD_TOPICS_KO.map((t) => ({
        id: t.id,
        domain: t.domain,
        category: t.category,
        subtopic: t.subtopic,
        label: t.label,
        score: t.initialScore,
        status: t.initialScore >= 7 ? "strong" : t.initialScore >= 5 ? "review" : "unverified",
        evidence: t.initialEvidence ?? "",
        level: t.level,
        topicGroup: t.topicGroup,
        lessonIds: t.lessonIds,
        theoryCompleted: false,
        keyPoints: t.keyPoints ?? KEYPOINTS_CATALOG[t.id] ?? [],
      })),
      updatedAt: new Date().toISOString(),
    };
  }

  // English Journey
  return {
    schemaVersion: 1,
    language: "en",
    attempts: [
      {
        id: "att-sample-1",
        date: "2026-10-15",
        title: "Tenses & Aspect Foundation Diagnostic",
        correct: 18,
        total: 20,
        note: "Vững thì hiện tại và quá khứ; cần chú ý phân biệt Quá khứ hoàn thành và Hiện tại hoàn thành khi có mốc thời gian rõ ràng.",
      },
    ],
    errors: [
      {
        id: "err-sample-1",
        topicId: "present-perfect",
        lessonId: "english-grammar-foundations-time",
        date: "2026-10-15",
        category: "Tense choice",
        incorrect: "I have lived in London for 3 years before I moved to Tokyo in 2024.",
        corrected: "I had lived in London for 3 years before I moved to Tokyo in 2024.",
        explanationVi: "Hành động sống ở London hoàn tất trước một mốc quá khứ khác (moved to Tokyo), cần dùng Quá khứ hoàn thành (Past Perfect), không dùng Hiện tại hoàn thành.",
        explanationKo: "과거의 특정 시점(moved to Tokyo)보다 이전에 완료된 동작이므로 과거완료(had lived)를 써야 합니다.",
        status: "due",
      },
      {
        id: "err-sample-2",
        topicId: "future",
        lessonId: "english-grammar-foundations-time",
        date: "2026-10-16",
        category: "Verb forms",
        incorrect: "By the time he will arrive tomorrow, the meeting will end.",
        corrected: "By the time he arrives tomorrow, the meeting will have ended.",
        explanationVi: "Trong mệnh đề chỉ thời gian với 'by the time', dùng Hiện tại đơn (arrives) thay vì tương lai; mệnh đề chính dùng Tương lai hoàn thành (will have ended).",
        explanationKo: "시간 부사절(by the time)에서는 will 대신 현재시제(arrives)를 쓰며, 주절은 미래완료(will have ended)를 씁니다.",
        status: "due",
      },
      {
        id: "err-sample-3",
        topicId: "conditionals",
        lessonId: "english-grammar-core-conditionals",
        date: "2026-10-14",
        category: "Conditionals",
        incorrect: "If I would have known the answer, I would tell you.",
        corrected: "If I had known the answer, I would have told you.",
        explanationVi: "Câu điều kiện loại 3 diễn tả giả định trái với quá khứ: Mệnh đề If dùng Past Perfect (had known), mệnh đề chính dùng would have + V3/ed.",
        explanationKo: "과거 사실의 반대를 가정하는 가정법 과거완료: If절은 had p.p., 주절은 would have p.p. 형태여야 합니다.",
        status: "practicing",
      },
      {
        id: "err-sample-4",
        topicId: "present",
        lessonId: "english-corrections-grammar-error-notebook",
        date: "2026-10-17",
        category: "Verb forms",
        incorrect: "I am knowing the answer right now.",
        corrected: "I know the answer right now. (Stative verbs không dùng thì tiếp diễn).",
        explanationVi: "Các động từ trạng thái (stative verbs: know, understand, believe, like, belong...) không dùng thì tiếp diễn ngay cả khi có 'right now'.",
        explanationKo: "상태 동사(know, understand 등)는 진행형으로 쓰이지 않으며 'right now'가 있어도 단순 현재시제를 씁니다.",
        status: "due",
      },
    ],
    topics: STANDARD_TOPICS_EN.map((t) => ({
      id: t.id,
      domain: t.domain,
      category: t.category,
      subtopic: t.subtopic,
      label: t.label,
      score: t.initialScore,
      status: t.initialScore >= 7 ? "strong" : t.initialScore >= 5 ? "review" : "unverified",
      evidence: t.initialEvidence ?? "",
      level: t.level,
      topicGroup: t.topicGroup,
      lessonIds: t.lessonIds,
      theoryCompleted: false,
      keyPoints: t.keyPoints ?? KEYPOINTS_CATALOG[t.id] ?? [],
    })),
    updatedAt: new Date().toISOString(),
  };
}

export const CATEGORY_MIGRATION_MAP: Record<string, string> = {
  // English Legacy Categories
  "Cấu trúc & Mệnh đề": "Cấu trúc & Mệnh đề câu",
  "Từ vựng học thuật (AWL)": "Từ vựng Học thuật AWL & Cụm từ",
  "Cụm từ & Liên kết": "Từ vựng Học thuật AWL & Cụm từ",
  "Từ vựng theo chủ đề": "Từ vựng Ngữ cảnh Đời sống & Công sở",
  "IELTS Listening": "IELTS Listening (Kỹ năng Nghe)",
  "IELTS Reading": "IELTS Reading (Kỹ năng Đọc hiểu)",
  "IELTS Writing": "IELTS Writing (Kỹ năng Viết luận & Báo cáo)",
  "IELTS Speaking": "IELTS Speaking (Kỹ năng Phỏng vấn & Thuyết trình)",
  "IELTS Kỹ năng Tiếp nhận (Listening & Reading)": "IELTS Listening (Kỹ năng Nghe)",
  "IELTS Kỹ năng Sản sinh (Writing & Speaking)": "IELTS Writing (Kỹ năng Viết luận & Báo cáo)",
  "TOEIC Listening": "TOEIC Listening (Nghe hiểu Part 1 ~ 4)",
  "TOEIC Reading": "TOEIC Reading (Đọc hiểu Part 5 ~ 7)",
  "TOEIC Speaking & Writing": "TOEIC Speaking (Giao tiếp & Xử lý tình huống)",
  "TOEIC Đọc hiểu & Nghe hiểu (Part 1 ~ 7)": "TOEIC Listening (Nghe hiểu Part 1 ~ 4)",
  "TOEIC Giao tiếp & Thư tín Thương mại": "TOEIC Speaking (Giao tiếp & Xử lý tình huống)",

  // Korean Legacy Categories
  "Trợ từ & Cấu trúc cơ bản": "Trợ từ nền tảng (조사)",
  "Đuôi câu & Kính ngữ (높임말)": "Kính ngữ & Nghi thức Lịch sự (높임말 & 어미)",
  "Vĩ tố liên kết (연결어미)": "Vĩ tố liên kết & Cấu trúc câu (연결어미)",
  "Luyện thi TOPIK I (Cấp 1 - 2)": "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
  "Luyện thi TOPIK II (Cấp 3 - 6)": "Chiến lược Thi TOPIK I & II (듣기 / 읽기 / 쓰기)",
  "Giao tiếp công sở & Đàm thoại": "Giao tiếp Thực tế & Công sở (실전 회화)",
};

export function parseJourney(value: unknown, lang: LanguageCode = "en"): LanguageJourney | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const str = (v: unknown): v is string => typeof v === "string";

  const resolvedLang: LanguageCode = raw.language === "ko" ? "ko" : lang;

  const attempts: StudyAttempt[] = [];
  if (Array.isArray(raw.attempts)) {
    for (const a of raw.attempts) {
      if (!a || typeof a !== "object") continue;
      const item = a as Record<string, unknown>;
      if (!str(item.id) || !str(item.date) || !/^\d{4}-\d{2}-\d{2}$/.test(item.date) || !str(item.title) ||
          typeof item.correct !== "number" || typeof item.total !== "number" ||
          !Number.isFinite(item.correct) || !Number.isFinite(item.total) || item.total <= 0 ||
          item.correct < 0 || item.correct > item.total || !str(item.note)) {
        continue;
      }
      attempts.push({
        id: item.id,
        date: item.date,
        title: item.title,
        correct: Math.round(item.correct),
        total: Math.round(item.total),
        note: item.note,
      });
    }
  }

  const errors: StudyError[] = [];
  if (Array.isArray(raw.errors)) {
    for (const e of raw.errors) {
      if (!e || typeof e !== "object") continue;
      const item = e as Record<string, unknown>;
      if (!str(item.id) || !str(item.category) || !str(item.incorrect) || !str(item.corrected) ||
          !str(item.explanationVi) || !str(item.explanationKo) ||
          (item.status !== "due" && item.status !== "practicing" && item.status !== "stable")) {
        continue;
      }
      const lessonId = str(item.lessonId) && item.lessonId.trim() ? item.lessonId.trim() : undefined;
      const date = str(item.date) && /^\d{4}-\d{2}-\d{2}$/.test(item.date) ? item.date : undefined;
      const topicId = str(item.topicId) && item.topicId.trim() ? item.topicId.trim() : undefined;
      errors.push({
        id: item.id,
        category: item.category,
        incorrect: item.incorrect,
        corrected: item.corrected,
        explanationVi: item.explanationVi,
        explanationKo: item.explanationKo,
        status: item.status,
        lessonId,
        date,
        topicId,
      });
    }
  }

  const standardList = getStandardTopics(resolvedLang);
  const standardMap = new Map(standardList.map((t) => [t.id, t]));
  const parsedTopics: StudyTopic[] = [];

  // Support BOTH formats:
  // 1. Array of topic objects
  // 2. Compact Dictionary { [topicId]: number | { score?: number, ... } }
  let rawTopicsList: unknown[] = [];
  if (Array.isArray(raw.topics)) {
    rawTopicsList = raw.topics;
  } else if (raw.topics && typeof raw.topics === "object") {
    for (const [key, val] of Object.entries(raw.topics as Record<string, unknown>)) {
      if (typeof val === "number") {
        rawTopicsList.push({ id: key, score: val });
      } else if (val && typeof val === "object") {
        rawTopicsList.push({ id: key, ...(val as Record<string, unknown>) });
      }
    }
  }

  for (const t of rawTopicsList) {
    if (!t || typeof t !== "object") continue;
    const item = t as Record<string, unknown>;
    const id = str(item.id) ? item.id.trim() : undefined;
    if (!id) continue;
    const std = standardMap.get(id);

    // Resolve score with backwards compatibility
    let resolvedScore = 2;
    if (typeof item.score === "number" && Number.isFinite(item.score)) {
      resolvedScore = Math.min(10, Math.max(1, Math.round(item.score)));
    } else if (item.status === "strong") {
      resolvedScore = 8;
    } else if (item.status === "review") {
      resolvedScore = 5;
    } else if (item.status === "unverified") {
      resolvedScore = 2;
    } else if (std) {
      resolvedScore = std.initialScore;
    }

    // Resolve domain
    let domain: SkillDomain = "grammar";
    if (typeof item.domain === "string" && item.domain.trim()) {
      domain = item.domain.trim();
    } else if (std) {
      domain = std.domain;
    } else if (id === "production") {
      domain = "ielts";
    }

    const label = str(item.label) && item.label.trim() ? item.label.trim() : (std?.label ?? id);
    let category = str(item.category) && item.category.trim() ? item.category.trim() : (std?.category ?? "Tổng quát");
    // Standardize category according to modern academic taxonomy
    if (std?.category) {
      category = std.category;
    } else if (CATEGORY_MIGRATION_MAP[category]) {
      category = CATEGORY_MIGRATION_MAP[category];
    }
    const subtopic = str(item.subtopic) && item.subtopic.trim() ? item.subtopic.trim() : std?.subtopic;
    const evidence = str(item.evidence) ? item.evidence : (std?.initialEvidence ?? "");
    const level = str(item.level) && item.level.trim() ? item.level.trim() : std?.level;
    const topicGroup = str(item.topicGroup) && item.topicGroup.trim() ? item.topicGroup.trim() : std?.topicGroup;
    const theoryCompleted = typeof item.theoryCompleted === "boolean" ? item.theoryCompleted : false;
    const theoryLessonId = str(item.theoryLessonId) ? item.theoryLessonId : undefined;
    const status: TopicStatus = resolvedScore >= 7 ? "strong" : resolvedScore >= 5 ? "review" : "unverified";

    // Depth 4 Micro-skills
    const keyPoints = Array.isArray(item.keyPoints)
      ? item.keyPoints.filter((k): k is string => typeof k === "string" && !!k.trim())
      : (std?.keyPoints ?? KEYPOINTS_CATALOG[id] ?? []);

    parsedTopics.push({
      id,
      domain,
      category,
      subtopic,
      label,
      score: resolvedScore,
      status,
      evidence,
      level,
      topicGroup,
      theoryCompleted,
      theoryLessonId,
      lessonIds: std?.lessonIds,
      keyPoints,
    });
  }

  const base = newJourney(resolvedLang);
  const mergedTopics: StudyTopic[] = [
    ...base.topics.map((t) => parsedTopics.find((x) => x.id === t.id) ?? t),
    ...parsedTopics.filter((t) => !base.topics.some((x) => x.id === t.id)),
  ];

  return {
    schemaVersion: 1,
    language: resolvedLang,
    attempts,
    errors,
    topics: mergedTopics,
    updatedAt: str(raw.updatedAt) ? raw.updatedAt : new Date().toISOString(),
  };
}

// Requirement 5: Award 50% theory credit upon reading a lesson
export function awardTheoryCredit(
  journey: LanguageJourney,
  lessonId: string,
  lessonTitle?: string
): { journey: LanguageJourney; updatedCount: number } {
  let updatedCount = 0;
  const nextTopics = journey.topics.map((t) => {
    const isDirectMatch = t.lessonIds?.includes(lessonId) || t.id === lessonId;
    const isNameMatch =
      lessonId.includes(t.id) ||
      t.id.includes(lessonId.replace(/^(english|korean)-grammar-(core|foundations)-/, ""));

    if (isDirectMatch || isNameMatch) {
      updatedCount++;
      const currentScore = t.score;
      // Auto-raise to at least 5/10 (50% theory credit baseline) if < 5
      const newScore = Math.max(5, currentScore);
      const theoryNote = `Đã hoàn thành lý thuyết (50%) từ bài: "${lessonTitle || lessonId}". Cần làm bài kiểm tra để nâng lên 7-10.`;
      const evidence = t.evidence && !t.evidence.startsWith("Đã hoàn thành lý thuyết")
        ? `${t.evidence} · ${theoryNote}`
        : theoryNote;

      return {
        ...t,
        theoryCompleted: true,
        theoryLessonId: lessonId,
        score: newScore,
        status: (newScore >= 7 ? "strong" : "review") as TopicStatus,
        evidence,
      };
    }
    return t;
  });

  if (updatedCount === 0) {
    return { journey, updatedCount: 0 };
  }

  return {
    journey: {
      ...journey,
      topics: nextTopics,
      updatedAt: new Date().toISOString(),
    },
    updatedCount,
  };
}

/**
 * Requirement 4: Helper to retrieve all study errors associated with a specific lesson ID,
 * matched either directly by error.lessonId or through topic.lessonIds.
 * Results are sorted chronologically descending (newest mistakes first).
 */
export function getErrorsForLesson(journey: LanguageJourney, lessonId: string): StudyError[] {
  const topicMap = new Map<string, StudyTopic>(journey.topics.map((t) => [t.id, t]));
  return journey.errors
    .filter((e) => {
      if (e.lessonId === lessonId) return true;
      if (e.topicId) {
        const topic = topicMap.get(e.topicId);
        if (topic?.lessonIds?.includes(lessonId)) return true;
      }
      return false;
    })
    .sort((a, b) => {
      const dateA = a.date || "";
      const dateB = b.date || "";
      return dateB.localeCompare(dateA);
    });
}

// ==========================================
// AI-FIRST PROGRESS ENGINE & ASSISTANT TOOLS
// ==========================================

export interface AIPatchResult {
  journey: LanguageJourney;
  changesSummary: string[];
  error?: string;
}

export function applySmartAIPatch(
  currentJourney: LanguageJourney,
  patchInput: string | Record<string, unknown>
): AIPatchResult {
  let patchData: Record<string, unknown>;

  if (typeof patchInput === "string") {
    const raw = patchInput.trim();
    // 1. Try markdown code block extraction
    const codeBlockMatch = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    const jsonCandidate = codeBlockMatch ? codeBlockMatch[1].trim() : raw;

    try {
      patchData = JSON.parse(jsonCandidate);
    } catch {
      // 2. Try regex to find outermost JSON object { ... }
      const firstBrace = raw.indexOf("{");
      const lastBrace = raw.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace > firstBrace) {
        try {
          patchData = JSON.parse(raw.slice(firstBrace, lastBrace + 1));
        } catch {
          return {
            journey: currentJourney,
            changesSummary: [],
            error: "Không thể phân tích cấu trúc JSON từ phản hồi của AI. Vui lòng kiểm tra lại định dạng.",
          };
        }
      } else {
        return {
          journey: currentJourney,
          changesSummary: [],
          error: "Không tìm thấy khối JSON hợp lệ trong dữ liệu được dán.",
        };
      }
    }
  } else if (patchInput && typeof patchInput === "object") {
    patchData = patchInput;
  } else {
    return {
      journey: currentJourney,
      changesSummary: [],
      error: "Đầu vào không hợp lệ.",
    };
  }

  const changesSummary: string[] = [];
  const nextJourney: LanguageJourney = {
    ...currentJourney,
    attempts: [...currentJourney.attempts],
    errors: [...currentJourney.errors],
    topics: currentJourney.topics.map((t) => ({ ...t })),
    updatedAt: new Date().toISOString(),
  };

  const findTopic = (id: string) => {
    const cleanId = id.trim().toLowerCase();
    // 1. Exact match on id
    const exactId = nextJourney.topics.find((t) => t.id.toLowerCase() === cleanId);
    if (exactId) return exactId;

    // 2. Exact match on label
    const exactLabel = nextJourney.topics.find((t) => t.label.toLowerCase() === cleanId);
    if (exactLabel) return exactLabel;

    // 3. Normalized slug match
    const normClean = cleanId.replace(/[-_]/g, " ");
    const slugMatch = nextJourney.topics.find(
      (t) =>
        t.id.toLowerCase().replace(/[-_]/g, " ") === normClean ||
        t.label.toLowerCase().replace(/[-_]/g, " ") === normClean
    );
    if (slugMatch) return slugMatch;

    // 4. Substring match only if long enough (> 5 chars)
    if (cleanId.length > 5) {
      return nextJourney.topics.find(
        (t) => t.id.toLowerCase().includes(cleanId) || t.label.toLowerCase().includes(cleanId)
      );
    }
    return undefined;
  };

  // A. Process topic updates
  const topicUpdates =
    patchData.topic_updates ||
    patchData.topics ||
    patchData.competencies ||
    patchData.topicUpdates;

  if (topicUpdates && typeof topicUpdates === "object") {
    if (Array.isArray(topicUpdates)) {
      for (const item of topicUpdates) {
        if (!item || typeof item !== "object") continue;
        const entry = item as Record<string, unknown>;
        const id =
          typeof entry.id === "string"
            ? entry.id
            : typeof entry.topicId === "string"
            ? entry.topicId
            : "";
        if (!id) continue;
        const topic = findTopic(id);
        if (topic) {
          const oldScore = topic.score;
          if (typeof entry.score === "number" && Number.isFinite(entry.score)) {
            topic.score = Math.min(10, Math.max(1, Math.round(entry.score)));
            topic.status = topic.score >= 7 ? "strong" : topic.score >= 5 ? "review" : "unverified";
          }
          if (typeof entry.evidence === "string" && entry.evidence.trim()) {
            topic.evidence = entry.evidence.trim();
          }
          if (Array.isArray(entry.keyPoints)) {
            const newPoints = entry.keyPoints.filter((k): k is string => typeof k === "string" && !!k.trim());
            topic.keyPoints = Array.from(new Set([...(topic.keyPoints || []), ...newPoints]));
          }
          if (typeof entry.theoryCompleted === "boolean") {
            topic.theoryCompleted = entry.theoryCompleted;
          }
          changesSummary.push(`Cập nhật "${topic.label}": Điểm ${oldScore} ➔ ${topic.score}/10`);
        }
      }
    } else {
      for (const [id, val] of Object.entries(topicUpdates)) {
        const topic = findTopic(id);
        if (!topic) continue;
        const oldScore = topic.score;
        if (typeof val === "number" && Number.isFinite(val)) {
          topic.score = Math.min(10, Math.max(1, Math.round(val)));
          topic.status = topic.score >= 7 ? "strong" : topic.score >= 5 ? "review" : "unverified";
          changesSummary.push(`Cập nhật "${topic.label}": Điểm ${oldScore} ➔ ${topic.score}/10`);
        } else if (val && typeof val === "object") {
          const entry = val as Record<string, unknown>;
          if (typeof entry.score === "number" && Number.isFinite(entry.score)) {
            topic.score = Math.min(10, Math.max(1, Math.round(entry.score)));
            topic.status = topic.score >= 7 ? "strong" : topic.score >= 5 ? "review" : "unverified";
          }
          if (typeof entry.evidence === "string" && entry.evidence.trim()) {
            topic.evidence = entry.evidence.trim();
          }
          if (Array.isArray(entry.keyPoints)) {
            const newPoints = entry.keyPoints.filter((k): k is string => typeof k === "string" && !!k.trim());
            topic.keyPoints = Array.from(new Set([...(topic.keyPoints || []), ...newPoints]));
          }
          if (typeof entry.theoryCompleted === "boolean") {
            topic.theoryCompleted = entry.theoryCompleted;
          }
          changesSummary.push(`Cập nhật "${topic.label}": Điểm ${oldScore} ➔ ${topic.score}/10`);
        }
      }
    }
  }

  // B. Process session / attempts
  const sessions = patchData.sessions || patchData.new_attempts || patchData.attempts;
  const singleSession = patchData.session || patchData.attempt || patchData.test;
  const attemptList: unknown[] = Array.isArray(sessions) ? sessions : singleSession ? [singleSession] : [];

  for (const s of attemptList) {
    if (!s || typeof s !== "object") continue;
    const entry = s as Record<string, unknown>;
    const title = typeof entry.title === "string" && entry.title.trim() ? entry.title.trim() : "Buổi học cùng Trợ lý AI";
    const correct = typeof entry.correct === "number" && Number.isFinite(entry.correct) ? Math.round(entry.correct) : 0;
    const total = typeof entry.total === "number" && Number.isFinite(entry.total) && entry.total > 0 ? Math.round(entry.total) : 10;
    const note = typeof entry.note === "string" ? entry.note.trim() : "Đồng bộ tự động từ buổi học AI";
    const date = typeof entry.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) ? entry.date : new Date().toISOString().slice(0, 10);

    const newAttempt: StudyAttempt = {
      id: `ai-att-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      date,
      title,
      correct: Math.min(correct, total),
      total,
      note,
    };
    nextJourney.attempts.unshift(newAttempt);
    changesSummary.push(`Ghi nhận bài kiểm tra: "${title}" (${newAttempt.correct}/${newAttempt.total})`);
  }

  // C. Process new errors
  const newErrors = patchData.new_errors || patchData.errors || patchData.newErrors;
  if (Array.isArray(newErrors)) {
    for (const err of newErrors) {
      if (!err || typeof err !== "object") continue;
      const entry = err as Record<string, unknown>;
      const incorrect = typeof entry.incorrect === "string"
        ? entry.incorrect.trim()
        : typeof entry.wrong === "string"
        ? entry.wrong.trim()
        : typeof entry.mistake === "string"
        ? entry.mistake.trim()
        : "";
      const corrected = typeof entry.corrected === "string"
        ? entry.corrected.trim()
        : typeof entry.correct === "string"
        ? entry.correct.trim()
        : typeof entry.right === "string"
        ? entry.right.trim()
        : "";
      if (!incorrect || !corrected) continue;

      const category = typeof entry.category === "string" && entry.category.trim() ? entry.category.trim() : "Lỗi từ buổi học AI";
      const explanationVi = typeof entry.explanationVi === "string"
        ? entry.explanationVi.trim()
        : typeof entry.explanation === "string"
        ? entry.explanation.trim()
        : "Cần lưu ý cấu trúc câu này theo hướng dẫn của AI.";
      const explanationKo = typeof entry.explanationKo === "string" ? entry.explanationKo.trim() : "";
      const topicId = typeof entry.topicId === "string"
        ? entry.topicId.trim()
        : typeof entry.topic === "string"
        ? entry.topic.trim()
        : undefined;
      const lessonId = typeof entry.lessonId === "string" ? entry.lessonId.trim() : undefined;
      const date = typeof entry.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) ? entry.date : new Date().toISOString().slice(0, 10);

      const studyError: StudyError = {
        id: `ai-err-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        category,
        incorrect,
        corrected,
        explanationVi,
        explanationKo,
        status: "due",
        date,
        topicId,
        lessonId,
      };
      nextJourney.errors.unshift(studyError);
      changesSummary.push(`Thêm lỗi mới vào Sổ tay: "${incorrect.slice(0, 35)}..."`);
    }
  }

  // D. Process resolved errors
  const resolvedErrors = patchData.resolved_errors || patchData.resolvedErrors || patchData.fixed_errors || patchData.resolveErrors;
  if (Array.isArray(resolvedErrors)) {
    for (const item of resolvedErrors) {
      const query = typeof item === "string" ? item.trim().toLowerCase() : "";
      if (!query) continue;
      for (const e of nextJourney.errors) {
        if (e.id.toLowerCase() === query || e.incorrect.toLowerCase().includes(query) || (e.topicId && e.topicId.toLowerCase() === query)) {
          if (e.status !== "stable") {
            e.status = "stable";
            changesSummary.push(`Đã khắc phục lỗi: "${e.incorrect.slice(0, 35)}..." ➔ Nhuần nhuyễn`);
          }
        }
      }
    }
  }

  if (changesSummary.length === 0) {
    return {
      journey: currentJourney,
      changesSummary: [],
      error: "Dữ liệu JSON hợp lệ nhưng không tìm thấy thông tin cập nhật nào (topics, session, new_errors, hoặc resolved_errors).",
    };
  }

  return {
    journey: nextJourney,
    changesSummary,
  };
}

export function generateAIStudyPrompt(journey: LanguageJourney): string {
  const isKo = journey.language === "ko";
  const langName = isKo ? "Tiếng Hàn (한국어)" : "Tiếng Anh (English)";
  const examName = isKo ? "TOPIK I & II" : "IELTS & TOEIC";

  // Find weakest topics (score < 7, sorted ascending)
  const weakTopics = [...journey.topics]
    .filter((t) => t.score < 7)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5);

  // Find due errors
  const dueErrors = journey.errors.filter((e) => e.status === "due").slice(0, 4);

  const weakTopicsList = weakTopics.length > 0
    ? weakTopics.map((t) => `- **[${t.id}] ${t.label}** (${t.category} · Cấp độ: ${t.level || "—"} · Điểm hiện tại: ${t.score}/10)
  * Micro-skills: ${t.keyPoints?.join(" · ") || t.subtopic || "Cần rèn luyện phản xạ"}
  * Hiện trạng: ${t.evidence || "Chưa làm bài kiểm tra kiểm chứng"}`).join("\n")
    : "- (Tất cả chủ điểm hiện tại đều đã đạt từ 7/10 trở lên. Hãy tập trung nâng band từ 7 ➔ 9-10).";

  const dueErrorsList = dueErrors.length > 0
    ? dueErrors.map((e) => `- Câu sai: "${e.incorrect}"
  ➔ Câu đúng: "${e.corrected}"
  ➔ Giải thích: ${e.explanationVi}`).join("\n\n")
    : "- Không có lỗi tồn đọng nghiêm trọng.";

  return `Bạn là Giảng viên Ngôn ngữ & Chuyên gia Khảo thí ${examName} cao cấp của LanguageLab.
Tôi đang học ${langName} và sử dụng hệ thống LanguageLab English/Korean Progress để quản lý năng lực phân cấp linh hoạt.

Dưới đây là hồ sơ năng lực thực tế của tôi được trích xuất từ hệ thống:

### 1. CÁC CHỦ ĐIỂM YẾU CẦN BỒI DƯỠNG TRỌNG TÂM:
${weakTopicsList}

### 2. CÁC LỖI TỒN ĐỌNG TRONG SỔ TAY CẦN KIỂM TRA LẠI:
${dueErrorsList}

---

### MỤC TIÊU & QUY TRÌNH BUỔI HỌC HÔM NAY:
1. **Ôn nhanh Micro-skills**: Tóm tắt cực ngắn gọn 2-3 quy tắc cốt lõi của các chủ điểm yếu nhất ở trên để tôi nắm chắc bản chất, không học vẹt.
2. **Kiểm tra Phản xạ thực chiến**: Cho tôi 5 bài tập trắc nghiệm / điền từ / dịch câu thực tế xoay quanh đúng các chủ điểm yếu và các lỗi sai trên.
3. **Chấm điểm & Xuất JSON Cập nhật Tiến độ**:
   Sau khi tôi trả lời và bạn chữa bài xong, hãy chấm điểm và TỔNG KẾT BUỔI HỌC bằng một khối mã JSON duy nhất đặt trong thẻ \`\`\`json ... \`\`\` ở cuối phản hồi theo đúng định dạng dưới đây để tôi dán trực tiếp vào LanguageLab:

\`\`\`json
{
  "topic_updates": {
    "${weakTopics[0]?.id || "past-perfect"}": {
      "score": 7,
      "evidence": "Đã nắm vững cách dùng trong bài kiểm tra 5 câu phản xạ cùng AI"
    }
  },
  "session": {
    "title": "Luyện phản xạ ${langName}: ${weakTopics[0]?.label || "Trọng điểm"}",
    "correct": 4,
    "total": 5,
    "note": "Tiến bộ rõ rệt ở cách dùng mốc thời gian và liên từ"
  },
  "new_errors": [
    {
      "topicId": "${weakTopics[0]?.id || "past-perfect"}",
      "category": "${weakTopics[0]?.category || "Ngữ pháp"}",
      "incorrect": "Câu tôi vừa làm sai nếu có",
      "corrected": "Câu sửa chính xác",
      "explanationVi": "Quy tắc ngữ pháp cần nhớ"
    }
  ],
  "resolved_errors": []
}
\`\`\`

Bây giờ hãy bắt đầu Bước 1 (Ôn nhanh micro-skills) và đưa ra các câu hỏi Bước 2 cho tôi ngay nhé!`;
}

export function generateAICompactProfile(journey: LanguageJourney): string {
  const totalTopics = journey.topics.length;
  const avg = totalTopics
    ? (journey.topics.reduce((acc, t) => acc + t.score, 0) / totalTopics).toFixed(1)
    : "0.0";

  const domainScores: Record<string, string> = {};
  for (const t of journey.topics) {
    if (!domainScores[t.domain]) {
      const domTopics = journey.topics.filter((x) => x.domain === t.domain);
      domainScores[t.domain] = (
        domTopics.reduce((acc, x) => acc + x.score, 0) / domTopics.length
      ).toFixed(1);
    }
  }

  const weakTopics = journey.topics
    .filter((t) => t.score < 7)
    .sort((a, b) => a.score - b.score)
    .slice(0, 10)
    .map((t) => ({
      id: t.id,
      label: t.label,
      score: t.score,
      level: t.level,
      category: t.category,
      keyPoints: t.keyPoints || [],
    }));

  const activeErrors = journey.errors.filter((e) => e.status === "due");

  const profile = {
    user: "LanguageLab Learner",
    language: journey.language,
    overallScore: `${avg} / 10`,
    domainAverages: domainScores,
    weakTopics,
    dueErrorsCount: activeErrors.length,
    dueErrorsSample: activeErrors.slice(0, 5).map((e) => ({
      incorrect: e.incorrect,
      corrected: e.corrected,
      topicId: e.topicId,
    })),
    recentAttempts: journey.attempts.slice(0, 3),
    updatedAt: journey.updatedAt,
  };

  return JSON.stringify(profile, null, 2);
}
