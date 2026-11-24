import Link from "next/link";
import type { Lang } from "@/lib/i18n";

/** Switches between Kinyarwanda and English while staying on the same page. */
export default function LangSwitch({ lang, path = "" }: { lang: Lang; path?: string }) {
  const other: Lang = lang === "rw" ? "en" : "rw";
  return (
    <Link
      href={`/${other}${path}`}
      className="rounded-full border border-brand px-3 py-1 text-sm font-semibold text-brand"
      aria-label={other === "rw" ? "Kinyarwanda" : "English"}
    >
      {other === "rw" ? "Kinyarwanda" : "English"}
    </Link>
  );
}
