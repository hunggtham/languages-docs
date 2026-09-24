import type { ContentCatalog } from "../types";

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
  const response = await fetch(resolvePublicAsset(url), { signal });
  if (!response.ok) throw new Error(`Lesson request failed (${response.status})`);
  return response.text();
}

const PROGRESS_KEY = "language-lab-progress-v1";

export interface ProgressState {
  completedIds: string[];
  sectionsByLesson: Record<string, string[]>;
  lastSectionByLesson: Record<string, string>;
}

const EMPTY_PROGRESS: ProgressState = { completedIds: [], sectionsByLesson: {}, lastSectionByLesson: {} };

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
