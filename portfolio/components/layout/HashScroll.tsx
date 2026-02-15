"use client";

import { useEffect } from "react";

/**
 * Scrolls to the element matching window.location.hash when the home page loads.
 * Used when navigating from a case study page to /#section (e.g. /#about).
 */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return null;
}
