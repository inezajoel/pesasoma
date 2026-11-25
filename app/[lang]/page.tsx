import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import LessonList from "@/components/LessonList";
import OfflineDownload from "@/components/OfflineDownload";
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
    <main className="space-y-6 lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:grid-rows-[auto_auto_1fr] lg:items-start lg:gap-x-12 lg:gap-y-6 lg:space-y-0">
      <header className="flex items-start justify-between gap-3 lg:col-start-1 lg:row-start-1">
        <div>
          <h1 className="text-3xl font-extrabold text-brand lg:text-4xl">{APP_NAME}</h1>
          <p className="text-stone-600">{ui.tagline[lang]}</p>
          <p className="mt-3 hidden text-sm leading-relaxed text-stone-600 lg:block">{ui.siteDescription[lang]}</p>
        </div>
        <LangSwitch lang={lang} />
      </header>

      <section className="space-y-4 lg:col-start-2 lg:row-span-3 lg:row-start-1">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">{ui.lessons[lang]}</h2>
        <LessonList lang={lang} />
      </section>

      <div className="lg:col-start-1 lg:row-start-2">
        <OfflineDownload lang={lang} />
      </div>

      <p className="text-center text-xs text-stone-500 lg:col-start-1 lg:row-start-3">{ui.offlineReady[lang]}</p>
    </main>
  );
}
