"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lesson } from "@/lib/lessons";
import { ui, type Lang } from "@/lib/i18n";
import { recordResult } from "@/lib/progress";

export default function Quiz({ lesson, lang }: { lesson: Lesson; lang: Lang }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = lesson.quiz.length;
  const q = lesson.quiz[index];

  function check() {
    if (selected === null) return;
    setChecked(true);
    if (selected === q.answer) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 < total) {
      setIndex(index + 1);
      setSelected(null);
      setChecked(false);
    } else {
      recordResult(lesson.id, correctCount / total);
      setFinished(true);
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setCorrectCount(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <section className="rounded-2xl bg-brand-soft p-5 text-center">
        <p className="text-4xl" aria-hidden>
          {correctCount === total ? "🎉" : "👍"}
        </p>
        <p className="mt-2 text-xl font-bold">
          {ui.score[lang]} {correctCount}/{total}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <button onClick={restart} className="rounded-xl border border-brand px-4 py-3 font-semibold text-brand">
            {ui.tryAgain[lang]}
          </button>
          <Link href={`/${lang}`} className="rounded-xl bg-brand px-4 py-3 text-center font-semibold text-white">
            {ui.back[lang]}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="quiz-title" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h2 id="quiz-title" className="text-sm font-semibold uppercase tracking-wide text-stone-500">
        {ui.quiz[lang]} · {index + 1}/{total}
      </h2>
      <p className="mt-2 text-lg font-semibold">{q.question[lang]}</p>

      <div className="mt-4 space-y-2" role="radiogroup">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          let style = "border-stone-300 bg-white";
          if (checked && i === q.answer) style = "border-green-600 bg-green-50";
          else if (checked && isSelected) style = "border-red-500 bg-red-50";
          else if (isSelected) style = "border-brand bg-brand-soft";
          return (
            <button
              key={i}
              role="radio"
              aria-checked={isSelected}
              disabled={checked}
              onClick={() => setSelected(i)}
              className={`w-full rounded-xl border-2 px-4 py-3 text-left ${style}`}
            >
              {opt[lang]}
            </button>
          );
        })}
      </div>

      {checked && (
        <p className="mt-4 rounded-xl bg-stone-100 p-3 text-sm" role="status">
          <strong>{selected === q.answer ? ui.correct[lang] : ui.wrong[lang]}</strong> {q.explanation[lang]}
        </p>
      )}

      <button
        onClick={checked ? next : check}
        disabled={selected === null}
        className="mt-4 w-full rounded-xl bg-brand px-4 py-3 font-semibold text-white disabled:opacity-40"
      >
        {checked ? (index + 1 < total ? ui.next[lang] : ui.finish[lang]) : ui.check[lang]}
      </button>
    </section>
  );
}
