import type { ContentCatalog, ContentGraph, SearchIndexEntry } from "../types";

function resolvePublicAsset(path: string): string {
  const relativePath = path.replace(/^\/+/, "");
  return new URL(relativePath, new URL(import.meta.env.BASE_URL, window.location.origin)).toString();
}

export async function fetchCatalog(signal?: AbortSignal): Promise<ContentCatalog> {
  const response = await fetch(resolvePublicAsset("content/catalog.json"), { signal });
  if (!response.ok) throw new Error(`Catalog request failed (${response.status})`);
  return response.json() as Promise<ContentCatalog>;
}

export async function fetchDocument(url: string, signal?: AbortSignal): Promise<string> {
  const assetUrl = resolvePublicAsset(url);
  if ("caches" in globalThis) {
    try {
      const cached = await globalThis.caches.match(assetUrl);
      if (cached) return cached.text();
    } catch {
      // Cache storage can be disabled in private browsing; network remains the fallback.
    }
  }
  const response = await fetch(assetUrl, { signal });
  if (!response.ok) throw new Error(`Lesson request failed (${response.status})`);
  return response.text();
}

export async function fetchSearchIndex(signal?: AbortSignal): Promise<SearchIndexEntry[]> {
  const response = await fetch(resolvePublicAsset("content/search-index.json"), { signal });
  if (!response.ok) throw new Error(`Search index request failed (${response.status})`);
  const payload = await response.json() as { documents?: SearchIndexEntry[] };
  return payload.documents ?? [];
}

export async function fetchContentGraph(signal?: AbortSignal): Promise<ContentGraph> {
  const response = await fetch(resolvePublicAsset("content/graph.json"), { signal });
  if (!response.ok) throw new Error(`Content graph request failed (${response.status})`);
  return response.json() as Promise<ContentGraph>;
}

const PROGRESS_KEY = "language-lab-progress-v1";

export type ReadingStatus = "unread" | "reading" | "review" | "completed";

export interface SectionBookmark {
  headingId: string;
  title: string;
  savedAt: string;
}

export interface ProgressState {
  completedIds: string[];
  sectionsByLesson: Record<string, string[]>;
  lastSectionByLesson: Record<string, string>;
  statusByLesson: Record<string, ReadingStatus>;
  progressPctByLesson: Record<string, number>;
  lastOpenedByLesson: Record<string, string>;
  bookmarksByLesson: Record<string, SectionBookmark[]>;
  readLaterIds: string[];
}

const EMPTY_PROGRESS: ProgressState = {
  completedIds: [],
  sectionsByLesson: {},
  lastSectionByLesson: {},
  statusByLesson: {},
  progressPctByLesson: {},
  lastOpenedByLesson: {},
  bookmarksByLesson: {},
  readLaterIds: [],
};

export function readProgressState(): ProgressState {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "null");
    // Keep progress created by the first web version readable.
    if (Array.isArray(raw) && raw.every((item) => typeof item === "string")) {
      return { ...EMPTY_PROGRESS, completedIds: raw };
    }
    if (!raw || typeof raw !== "object") return EMPTY_PROGRESS;
    const value = raw as Partial<ProgressState>;
    return {
      completedIds: Array.isArray(value.completedIds) ? value.completedIds.filter((item): item is string => typeof item === "string") : [],
      sectionsByLesson: value.sectionsByLesson && typeof value.sectionsByLesson === "object" ? value.sectionsByLesson : {},
      lastSectionByLesson: value.lastSectionByLesson && typeof value.lastSectionByLesson === "object" ? value.lastSectionByLesson : {},
      statusByLesson: value.statusByLesson && typeof value.statusByLesson === "object" ? value.statusByLesson : {},
      progressPctByLesson: value.progressPctByLesson && typeof value.progressPctByLesson === "object" ? value.progressPctByLesson : {},
      lastOpenedByLesson: value.lastOpenedByLesson && typeof value.lastOpenedByLesson === "object" ? value.lastOpenedByLesson : {},
      bookmarksByLesson: value.bookmarksByLesson && typeof value.bookmarksByLesson === "object" ? value.bookmarksByLesson : {},
      readLaterIds: Array.isArray(value.readLaterIds) ? value.readLaterIds.filter((item): item is string => typeof item === "string") : [],
    };
  } catch {
    return EMPTY_PROGRESS;
  }
}

export function writeProgressState(state: ProgressState): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
}

export function readProgress(): string[] {
  return readProgressState().completedIds;
}

export function writeProgress(ids: string[]): void {
  const current = readProgressState();
  writeProgressState({ ...current, completedIds: [...new Set(ids)] });
}
