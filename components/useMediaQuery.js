"use client";

import { useSyncExternalStore } from "react";

function subscribe(query, callback) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

// SSR-safe media query read — matches the server snapshot (false) on the
// first client render to avoid a hydration mismatch, then syncs to the
// real value immediately after.
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => window.matchMedia(query).matches,
    () => false
  );
}
