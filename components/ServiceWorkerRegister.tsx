"use client";

import { useEffect } from "react";

/** Registers the offline service worker (public/sw.js) in production only. */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* offline support is a bonus; the app still works without it */
    });
  }, []);
  return null;
}
