import Link from "next/link";
import { APP_NAME, ui } from "@/lib/i18n";

/** Language chooser: the first screen a new user sees. */
export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="text-6xl" aria-hidden>
        💰
      </p>
      <h1 className="mt-4 text-4xl font-extrabold text-brand">{APP_NAME}</h1>
      <p className="mt-2 text-stone-600">
        {ui.tagline.rw}
        <br />
        <span className="text-sm">{ui.tagline.en}</span>
      </p>

      <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-stone-500">
        {ui.chooseLanguage.rw} / {ui.chooseLanguage.en}
      </p>
      <div className="mt-3 flex w-full max-w-sm flex-col gap-3">
        <Link href="/rw" className="rounded-2xl bg-brand px-6 py-4 text-lg font-bold text-white">
          Kinyarwanda
        </Link>
        <Link href="/en" className="rounded-2xl border-2 border-brand px-6 py-4 text-lg font-bold text-brand">
          English
        </Link>
      </div>
    </main>
  );
}
