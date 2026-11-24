import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import LessonList from "@/components/LessonList";
import { APP_NAME, LANGS, isLang, ui } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({
    title: `${APP_NAME} - ${ui.tagline[lang]}`,
    description: ui.siteDescription[lang],
    path: `/${lang}`,
    lang,
  });
}

export default async function LessonsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <main className="space-y-6">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-brand">{APP_NAME}</h1>
          <p className="text-stone-600">{ui.tagline[lang]}</p>
        </div>
        <LangSwitch lang={lang} />
      </header>

      <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">{ui.lessons[lang]}</h2>
      <LessonList lang={lang} />

      <p className="text-center text-xs text-stone-500">{ui.offlineReady[lang]}</p>
    </main>
  );
}
