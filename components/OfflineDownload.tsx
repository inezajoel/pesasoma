"use client";

import { useEffect, useState } from "react";
import { LANGS, ui, type Lang } from "@/lib/i18n";
import { lessons } from "@/lib/lessons";

/**
 * Own cache for downloaded lessons. The name must NOT start with "pesasoma-",
 * otherwise public/sw.js would delete it when it cleans old caches.
 * public/sw.js finds files here automatically (caches.match searches every cache).
 */
const CACHE_NAME = "lessons-offline-v1";
const SAVED_FLAG = "pesasoma:offline:v1";

type Status = "idle" | "working" | "done" | "error";

/** Every page of the app, in both languages. */
function pageUrls(): string[] {
  const urls = ["/"];
  for (const lang of LANGS) {
    urls.push(`/${lang}`);
    urls.push(`/${lang}/about`);
    for (const lesson of lessons) urls.push(`/${lang}/lessons/${lesson.id}`);
  }
  return urls;
}

export default function OfflineDownload({ lang }: { lang: Lang }) {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!("caches" in window)) {
      setSupported(false);
      return;
    }
    try {
      if (localStorage.getItem(SAVED_FLAG)) setStatus("done");
    } catch {
      /* storage blocked: the button simply starts in its normal state */
    }
  }, []);

  async function download() {
    setStatus("working");
    try {
      const cache = await caches.open(CACHE_NAME);
      const pages = pageUrls();
      const assets = new Set<string>([
        "/manifest.webmanifest",
        "/icons/icon-192.png",
        "/icons/icon-512.png",
        "/icons/icon-maskable-512.png",
      ]);

      let done = 0;
      let total = pages.length + assets.size;
      setProgress({ done, total });
      const tick = () => {
        done += 1;
        setProgress({ done, total });
      };

      // 1) Save every page, and note which script/style files each page needs.
      for (const url of pages) {
        const res = await fetch(url, { cache: "reload" });
        if (!res.ok) throw new Error(`${url} -> ${res.status}`);
        const html = await res.clone().text();
        await cache.put(url, res);
        for (const match of html.matchAll(/\/_next\/static\/[^"'\\\s)<>]+/g)) {
          if (!assets.has(match[0])) {
            assets.add(match[0]);
            total += 1;
          }
        }
        tick();
      }

      // 2) Save those script/style/icon files so quizzes work offline too.
      for (const url of assets) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${url} -> ${res.status}`);
        await cache.put(url, res);
        tick();
      }

      try {
        localStorage.setItem(SAVED_FLAG, new Date().toISOString());
      } catch {
        /* ignore */
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (!supported) return null;

  const percent = progress.total ? Math.round((progress.done / progress.total) * 100) : 0;
  const working = status === "working";

  return (
    <section className="rounded-2xl border border-brand/30 bg-brand-soft p-4">
      {status === "done" && (
        <p className="font-semibold text-brand-dark" role="status">
          ✓ {ui.downloaded[lang]}
        </p>
      )}
      {status === "error" && (
        <p className="mb-2 text-sm font-medium text-red-700" role="alert">
          {ui.downloadFailed[lang]}
        </p>
      )}

      {working && (
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-white"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-full bg-brand transition-all" style={{ width: `${percent}%` }} />
        </div>
      )}

      <button
        onClick={download}
        disabled={working}
        className={`mt-2 w-full rounded-xl px-4 py-3 font-semibold disabled:opacity-60 ${
          status === "done" ? "border border-brand text-brand" : "bg-brand text-white"
        }`}
      >
        {working
          ? `${ui.downloading[lang]} ${percent}%`
          : status === "done"
            ? ui.updateDownload[lang]
            : `⬇ ${ui.downloadAll[lang]}`}
      </button>
    </section>
  );
}
