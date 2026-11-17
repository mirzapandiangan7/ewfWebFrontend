"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Contoh: "20+", "15.000+", "4". Angka desimal tidak didukung. */
  value: string;
  duration?: number;
};

const nf = new Intl.NumberFormat("id-ID");

export default function CountUp({ value, duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = /^(\D*)(\d[\d.]*)(.*)$/.exec(value);
    if (!el || !match) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/\./g, ""));
    const render = (n: number) => {
      el.textContent = `${prefix}${nf.format(Math.round(n))}${suffix}`;
    };

    render(0);
    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          render(target * (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))); // easeOutExpo
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}