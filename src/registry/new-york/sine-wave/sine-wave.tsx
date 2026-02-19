"use client";

import { useEffect, useRef } from "react";

export interface SineWaveProps {
  width?: number;
  height?: number;
  speed?: number;
}

export function SineWaveChart({ width = 40, height = 8, speed = 100 }: SineWaveProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const rows: HTMLDivElement[] = [];
    for (let i = 0; i < height; i++) {
      const row = document.createElement("div");
      rows.push(row);
      el.appendChild(row);
    }
    let e = 0;
    const render = () => {
      for (let row = 0; row < height; row++) {
        let line = "";
        for (let col = 0; col < width; col++) {
          const h = Math.max(0, Math.min(height - 1, Math.round(height / 2 + 0.6 * (
            3.2 * Math.sin((0.5 * col + e) * 0.3) +
            1.8 * Math.sin((0.5 * col + e) * 0.5) +
            Math.sin((0.5 * col + e) * 0.7)
          ))));
          line += (height - 1 - row <= h) ? "█" : " ";
        }
        rows[row].textContent = line;
      }
      e += 0.5;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [width, height, speed]);

  return <div ref={ref} />;
}
