"use client";

import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1024, minHeight = 0) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query =
      `(min-width: ${breakpoint}px)` +
      (minHeight ? ` and (min-height: ${minHeight}px)` : "");
    const mq = window.matchMedia(query);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint, minHeight]);

  return isDesktop;
}