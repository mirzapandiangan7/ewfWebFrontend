import type { CSSProperties } from "react";

/** Jeda animasi untuk satu elemen, dalam milidetik. */
export const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/** Jeda bertahap untuk daftar: item ke-i mulai setelah base + i * step ms. */
export const stagger = (i: number, step = 90, base = 0) => delay(base + i * step);