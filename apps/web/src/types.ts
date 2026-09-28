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
