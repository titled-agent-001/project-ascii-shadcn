"use client";

import { useEffect, useRef } from "react";

export interface GradientBannerProps {
  text: string;
  width: number;
  speed?: number;
}

export function GradientBanner({ text, width, speed = 150 }: GradientBannerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = 0;
    const n = text.length;
    if (width <= n) { el.textContent = text.substring(0, width); return; }
    const clp = Math.floor((width - n) / 2);
    const crp = width - n - clp;
    const maxP = Math.max(clp, crp);

    const render = () => {
      const ci = t % (maxP * 2);
      const pos = ci < maxP ? ci : maxP * 2 - ci - 1;
      let left = "";
      for (let j = 0; j < clp; j++) {
        const dist = Math.abs(j - Math.min(pos, clp - 1));
        left += dist === 0 ? "█" : dist === 1 ? "▓" : dist === 2 ? "▒" : "░";
      }
      let right = "";
      for (let j = 0; j < crp; j++) {
        const dist = Math.abs(j - Math.min(pos, crp - 1));
        right += dist === 0 ? "█" : dist === 1 ? "▓" : dist === 2 ? "▒" : "░";
      }
      el.textContent = left + text + right;
      t = (t + 1) % (maxP * 2);
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [text, width, speed]);

  return <span ref={ref} />;
}
