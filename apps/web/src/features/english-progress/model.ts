export type ReviewStatus = "due" | "practicing" | "stable";
export type TopicStatus = "strong" | "review" | "unverified";

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
}

export interface StudyTopic {
  id: string;
  label: string;
  status: TopicStatus;
  evidence: string;
}

export interface EnglishJourney {
  schemaVersion: 1;
  attempts: StudyAttempt[];
  errors: StudyError[];
  topics: StudyTopic[];
  updatedAt: string;
}

const topicLabels = [
  ["present", "Present Simple / Continuous"],
  ["past", "Past Simple / Continuous"],
  ["present-perfect", "Present Perfect"],
  ["perfect-continuous", "Perfect Continuous"],
  ["past-perfect", "Past Perfect"],
  ["future", "Future forms"],
  ["production", "Speaking / sentence production"],
] as const;

export function newJourney(): EnglishJourney {
  return {
    schemaVersion: 1,
    attempts: [],
    errors: [],
    topics: topicLabels.map(([id, label]) => ({ id, label, status: "unverified", evidence: "" })),
    updatedAt: new Date().toISOString(),
  };
}

export function parseJourney(value: unknown): EnglishJourney | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Partial<EnglishJourney>;
  if (raw.schemaVersion !== 1 || !Array.isArray(raw.attempts) || !Array.isArray(raw.errors) || !Array.isArray(raw.topics)) return null;
  const str = (v: unknown) => typeof v === "string";
  const attempts = raw.attempts.filter((a): a is StudyAttempt =>
    !!a && str(a.id) && str(a.date) && /^\d{4}-\d{2}-\d{2}$/.test(a.date) && str(a.title) &&
    Number.isFinite(a.correct) && Number.isFinite(a.total) && a.total > 0 &&
    a.correct >= 0 && a.correct <= a.total && str(a.note));
  const errors = raw.errors.filter((e): e is StudyError =>
    !!e && str(e.id) && str(e.category) && str(e.incorrect) && str(e.corrected) &&
    str(e.explanationVi) && str(e.explanationKo) &&
    (e.status === "due" || e.status === "practicing" || e.status === "stable"));
  const topics = raw.topics.filter((t): t is StudyTopic =>
    !!t && str(t.id) && str(t.label) && str(t.evidence) &&
    (t.status === "strong" || t.status === "review" || t.status === "unverified"));
  if (attempts.length !== raw.attempts.length || errors.length !== raw.errors.length || topics.length !== raw.topics.length) return null;
  const unique = (ids: string[]) => new Set(ids).size === ids.length;
  if (!unique(attempts.map(x => x.id)) || !unique(errors.map(x => x.id)) || !unique(topics.map(x => x.id))) return null;
  const base = newJourney();
  return {
    schemaVersion: 1,
    attempts,
    errors,
    topics: [
      ...base.topics.map(t => topics.find(x => x.id === t.id) ?? t),
      ...topics.filter(t => !base.topics.some(x => x.id === t.id)),
    ],
    updatedAt: str(raw.updatedAt) ? raw.updatedAt! : new Date().toISOString(),
  };
}
