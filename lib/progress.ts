"use client";

/**
 * Progress is stored only on the user's phone (localStorage).
 * No account is needed, and it works offline.
 */
const KEY = "pesasoma:progress:v1";

export type Progress = {
  /** lesson id -> best score (0..1) */
  completed: Record<string, number>;
  streak: number;
  /** last day with activity, format YYYY-MM-DD */
  lastDay: string | null;
};

const empty: Progress = { completed: {}, streak: 0, lastDay: null };

function today(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

export function recordResult(lessonId: string, score: number): Progress {
  const p = loadProgress();
  const best = Math.max(p.completed[lessonId] ?? 0, score);
  let streak = p.streak;
  if (p.lastDay !== today()) {
    streak = p.lastDay === today(-1) ? p.streak + 1 : 1;
  }
  const next: Progress = {
    completed: { ...p.completed, [lessonId]: best },
    streak,
    lastDay: today(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage full or blocked: ignore, the app still works */
  }
  return next;
}
