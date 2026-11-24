import type { Metadata } from "next";
import type { Lang } from "./i18n";

/** Public address of the live site. Change this if you add a custom domain. */
export const SITE_URL = "https://pesasoma.vercel.app";

/** Picture shown when a link is shared (WhatsApp, Facebook, X, Telegram...). */
const SHARE_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "PesaSoma - Wige gucunga amafaranga yawe / Learn to manage your money",
};

type PageInfo = {
  title: string;
  description: string;
  /** Path of the page, e.g. "/rw/lessons/saving". */
  path: string;
  lang: Lang;
};

/** Builds the title, description and share-preview tags for one page. */
export function buildMetadata({ title, description, path, lang }: PageInfo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "PesaSoma",
      title,
      description,
      url: path,
      locale: lang === "rw" ? "rw_RW" : "en_US",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
