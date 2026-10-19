import type { ProgressState } from "./content";

type Session = { user?: { email?: string | null } } | null;
type SupabaseClientLike = {
  auth: {
    getSession: () => Promise<{ data: { session: Session }; error?: { message?: string } | null }>;
    signInWithPassword: (input: { email: string; password: string }) => Promise<{ error?: { message?: string } | null }>;
    signUp: (input: { email: string; password: string }) => Promise<{ error?: { message?: string } | null }>;
    signOut: () => Promise<{ error?: { message?: string } | null }>;
  };
  from: (table: string) => { select: (columns: string) => any; upsert: (row: Record<string, unknown>, options: Record<string, unknown>) => any };
};

declare global {
  interface Window {
    supabase?: { createClient: (url: string, anonKey: string, options?: Record<string, unknown>) => SupabaseClientLike };
  }
}

const APP_ID = "languages-docs";
const CONTENT_NAMESPACE = "language-lab";
const CONTENT_TYPE = "snapshot";
const CONTENT_ID = "language-lab-progress-v2";
let clientPromise: Promise<SupabaseClientLike> | null = null;

const config = {
  url: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
};

export function cloudConfigured(): boolean {
  return Boolean(config.url && config.anonKey);
}

async function loadClient(): Promise<SupabaseClientLike> {
  if (!cloudConfigured()) throw new Error("Supabase chưa được cấu hình.");
  if (!clientPromise) {
    clientPromise = (async () => {
      if (!window.supabase?.createClient) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Không tải được Supabase client."));
          document.head.append(script);
        });
      }
      if (!window.supabase?.createClient) throw new Error("Supabase client không sẵn sàng.");
      return window.supabase.createClient(config.url!, config.anonKey!, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
    })();
  }
  return clientPromise;
}

function errorMessage(error: { message?: string } | null | undefined): string | null {
  return error?.message ? error.message : null;
}

export async function cloudSession(): Promise<Session> {
  const client = await loadClient();
  const result = await client.auth.getSession();
  const error = errorMessage(result.error);
  if (error) throw new Error(error);
  return result.data.session;
}

export async function cloudSignIn(email: string, password: string): Promise<void> {
  const client = await loadClient();
  const result = await client.auth.signInWithPassword({ email, password });
  const error = errorMessage(result.error);
  if (error) throw new Error(error);
}

export async function cloudSignUp(email: string, password: string): Promise<void> {
  const client = await loadClient();
  const result = await client.auth.signUp({ email, password });
  const error = errorMessage(result.error);
  if (error) throw new Error(error);
}

export async function cloudSignOut(): Promise<void> {
  const client = await loadClient();
  const result = await client.auth.signOut();
  const error = errorMessage(result.error);
  if (error) throw new Error(error);
}

export async function syncSnapshot(progress: ProgressState): Promise<ProgressState | null> {
  const client = await loadClient();
  const session = await cloudSession();
  const userId = (session as { user?: { id?: string } } | null)?.user?.id;
  if (!userId) throw new Error("Chưa đăng nhập Supabase.");
  const builder = client.from("learning_progress");
  const existingResult = await builder.select("*").eq("user_id", userId).eq("app_id", APP_ID).eq("content_namespace", CONTENT_NAMESPACE).eq("content_type", CONTENT_TYPE).eq("content_id", CONTENT_ID).maybeSingle();
  if (existingResult.error) throw new Error(existingResult.error.message);
  const remote = existingResult.data?.state?.language_lab as ProgressState | undefined;
  const seenKey = `language-lab-cloud-seen:${userId}`;
  const useRemote = Boolean(remote && !localStorage.getItem(seenKey));
  const next = useRemote ? remote! : progress;
  const row = {
    user_id: userId,
    app_id: APP_ID,
    content_namespace: CONTENT_NAMESPACE,
    content_type: CONTENT_TYPE,
    content_id: CONTENT_ID,
    status: "reading",
    progress_pct: Math.max(...Object.values(next.progressPctByLesson), 0),
    state: { language_lab: next },
    schema_version: 2,
    last_opened_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  const writeResult = await builder.upsert(row, { onConflict: "user_id,app_id,content_namespace,content_type,content_id" });
  if (writeResult.error) throw new Error(writeResult.error.message);
  localStorage.setItem(seenKey, new Date().toISOString());
  return useRemote ? remote! : null;
}
