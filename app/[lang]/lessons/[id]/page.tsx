import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import Quiz from "@/components/Quiz";
import { LANGS, isLang, ui } from "@/lib/i18n";
import { getLesson, lessons } from "@/lib/lessons";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => lessons.map((l) => ({ lang, id: l.id })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const lesson = getLesson(id);
  if (!isLang(lang) || !lesson) return {};
  return buildMetadata({
    title: `${lesson.title[lang]} | PesaSoma`,
    description: lesson.summary[lang],
    path: `/${lang}/lessons/${id}`,
    lang,
  });
}

export default async function LessonPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  if (!isLang(lang)) notFound();
  const lesson = getLesson(id);
  if (!lesson) notFound();

  const audioSrc = lesson.audio?.[lang];

  return (
    <main className="space-y-6">
      <nav className="flex items-center justify-between">
        <Link href={`/${lang}`} className="text-sm font-semibold text-brand">
          ‹ {ui.lessons[lang]}
        </Link>
        <LangSwitch lang={lang} path={`/lessons/${id}`} />
      </nav>

      <header>
        <p className="text-4xl" aria-hidden>
          {lesson.icon}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">{lesson.title[lang]}</h1>
        <p className="mt-1 text-stone-600">{lesson.summary[lang]}</p>
      </header>

      {audioSrc && <audio controls preload="none" src={audioSrc} className="w-full" />}

      <ol className="space-y-3">
        {lesson.steps.map((step, i) => (
          <li key={i} className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h2 className="font-semibold">{step.title[lang]}</h2>
              <p className="mt-1 text-stone-700">{step.body[lang]}</p>
            </div>
          </li>
        ))}
      </ol>

      <aside className="rounded-2xl bg-brand-soft p-4">
        <h2 className="font-semibold text-brand-dark">💡 {ui.example[lang]}</h2>
        <p className="mt-1 text-stone-800">{lesson.example[lang]}</p>
      </aside>

      <Quiz lesson={lesson} lang={lang} />
    </main>
  );
}
