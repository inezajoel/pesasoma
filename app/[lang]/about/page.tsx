import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LangSwitch from "@/components/LangSwitch";
import { GITHUB_URL, about } from "@/lib/about";
import { LANGS, isLang, ui } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({
    title: `${ui.about[lang]} | PesaSoma`,
    description: about.why[lang],
    path: `/${lang}/about`,
    lang,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  // Optional photo: put a picture at public/about/joel.jpg and it appears automatically.
  const hasPhoto = existsSync(path.join(process.cwd(), "public", "about", "joel.jpg"));

  return (
    <main className="mx-auto max-w-2xl space-y-6">
      <nav className="flex items-center justify-between">
        <Link href={`/${lang}`} className="text-sm font-semibold text-brand">
          ‹ {ui.lessons[lang]}
        </Link>
        <LangSwitch lang={lang} path="/about" />
      </nav>

      <h1 className="text-3xl font-extrabold text-brand">{ui.about[lang]}</h1>

      <section>
        <h2 className="text-xl font-bold">{about.whyTitle[lang]}</h2>
        <p className="mt-2 leading-relaxed text-stone-700">{about.why[lang]}</p>
      </section>

      <section className="flex items-start gap-4">
        {hasPhoto && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/about/joel.jpg"
            alt="Ineza Semuhungu Joel"
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full object-cover"
          />
        )}
        <div>
          <h2 className="text-xl font-bold">{about.whoTitle[lang]}</h2>
          <p className="mt-2 leading-relaxed text-stone-700">{about.who[lang]}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">{about.howTitle[lang]}</h2>
        <p className="mt-2 leading-relaxed text-stone-700">{about.how[lang]}</p>
      </section>

      <section className="flex flex-col items-start gap-3 rounded-2xl bg-brand-soft p-4">
        <p className="text-stone-800">{about.feedback[lang]}</p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-brand px-4 py-3 font-semibold text-white"
        >
          {about.github[lang]} ↗
        </a>
      </section>
    </main>
  );
}
