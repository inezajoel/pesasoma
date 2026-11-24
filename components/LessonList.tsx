"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { lessons } from "@/lib/lessons";
import { ui, type Lang } from "@/lib/i18n";
import { loadProgress, type Progress } from "@/lib/progress";

export default function LessonList({ lang }: { lang: Lang }) {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  return (
    <div className="space-y-4">
      {progress && progress.streak > 0 && (
        <p className="rounded-xl bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
          🔥 {ui.streak[lang]}: {progress.streak}
        </p>
      )}

      <ul className="space-y-3">
        {lessons.map((lesson) => {
          const score = progress?.completed[lesson.id];
          return (
            <li key={lesson.id}>
              <Link
                href={`/${lang}/lessons/${lesson.id}`}
                className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm active:scale-[0.99]"
              >
                <span className="text-3xl" aria-hidden>
                  {lesson.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold">{lesson.title[lang]}</span>
                  <span className="block text-sm text-stone-600">{lesson.summary[lang]}</span>
                  <span className="mt-1 block text-xs text-stone-500">
                    {lesson.minutes} {ui.minutes[lang]}
                    {score !== undefined && ` · ✓ ${ui.done[lang]} (${Math.round(score * 100)}%)`}
                  </span>
                </span>
                <span className="text-brand text-xl" aria-hidden>
                  ›
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
