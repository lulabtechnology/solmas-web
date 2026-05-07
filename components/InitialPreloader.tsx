"use client";

import { useEffect } from "react";

const STORAGE_KEY = "solmas-initial-preloader-seen";

export default function InitialPreloader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;

    const root = document.documentElement;
    const shell = document.getElementById("solmas-preloader-shell");
    if (!shell || !root.classList.contains("solmas-preloader-active")) return;

    const closeTimer = window.setTimeout(() => {
      shell.classList.add("is-closing");
    }, 1200);

    const finishTimer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      } catch (error) {
        console.error("SOLMAS preloader storage error", error);
      }

      root.classList.remove("solmas-preloader-active");
      shell.classList.remove("is-closing");
    }, 1620);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(finishTimer);
      root.classList.remove("solmas-preloader-active");
      shell.classList.remove("is-closing");
    };
  }, []);

  return null;
}
