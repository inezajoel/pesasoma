"use client";

import { useEffect } from "react";

/** Registers the offline service worker (public/sw.js) in production only (and removes it in development). */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") {
      // Development: remove any worker left over from a production test on this
      // address, so old saved files never hide your latest changes.
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* offline support is a bonus; the app still works without it */
    });
  }, []);
  return null;
}
