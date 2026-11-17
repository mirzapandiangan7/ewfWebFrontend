"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition-colors duration-300 hover:border-brand hover:text-white"
    >
      Kembali ke atas
      <ArrowUp
        size={14}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}