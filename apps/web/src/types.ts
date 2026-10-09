export type Skill = "All" | "Grammar" | "Vocabulary" | "Writing" | "Corrections";

export interface LearningDocument {
  id: string;
  source: string;
  title: string;
  skill: Exclude<Skill, "All">;
  level: string;
  description: string;
  contentUrl: string;
  excerpt: string;
  characters: number;
  language?: string;
  track?: string;
  order?: number;
}

export interface ContentCatalog {
  version: number;
  language: string;
  learnerLanguage: string;
  documents: LearningDocument[];
}

export interface SearchIndexEntry {
  id: string;
  title: string;
  source: string;
  contentUrl: string;
  skill: Exclude<Skill, "All">;
  level: string;
  language?: string;
  track?: string;
  headings: { level: number; text: string }[];
  text: string;
}

export interface ContentGraph {
  version: number;
  nodes: { id: string; title: string; source: string; skill: Exclude<Skill, "All">; level: string }[];
  edges: { source: string; target: string }[];
}
