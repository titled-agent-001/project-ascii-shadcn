"use client";

import { useEffect, useRef } from "react";

export interface BouncingBannerProps {
  text: string;
  width: number;
  speed?: number;
}

export function BouncingBanner({ text, width, speed = 150 }: BouncingBannerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = 0;
    const render = () => {
      const n = text.length;
      if (width <= n) { el.textContent = text.substring(0, width); return; }
      const leftPad = Math.floor((width - n) / 2);
      const rightPad = width - n - leftPad;
      const i = t % Math.max(leftPad, rightPad);
      const c = Math.min(i, leftPad - 1);
      const a = Math.min(i, rightPad - 1);
      el.textContent =
        "░".repeat(c) + (c < leftPad ? "█" : "") + "░".repeat(Math.max(0, leftPad - c - 1)) +
        text +
        "░".repeat(Math.max(0, rightPad - a - 1)) + (a < rightPad ? "█" : "") + "░".repeat(a);
      t = (t + 1) % 100;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [text, width, speed]);

  return <span ref={ref} />;
}
