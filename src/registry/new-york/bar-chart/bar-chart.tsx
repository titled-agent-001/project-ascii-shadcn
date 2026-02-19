"use client";

import { useEffect, useRef } from "react";

export interface BarChartProps {
  width?: number;
  height?: number;
  barCount?: number;
  speed?: number;
}

export function BarChart({ width = 32, height = 8, barCount = 8, speed = 100 }: BarChartProps) {
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
      const barWidth = Math.max(1, Math.floor(width / barCount) - 1);
      const gap = Math.floor(width / barCount);
      const grid: string[][] = Array.from({ length: height }, () => Array(width).fill(" "));
      for (let b = 0; b < barCount; b++) {
        const x = gap * b;
        const h = Math.floor((0.4 * Math.sin((b + 0.1 * e) * 0.8) + 0.3 * Math.cos(1.3 * b + 0.15 * e) + 0.5) * height);
        for (let row = 0; row < height; row++) {
          if (height - 1 - row < h) {
            for (let dx = 0; dx < barWidth && x + dx < width; dx++) grid[row][x + dx] = "█";
          }
        }
      }
      for (let i = 0; i < height; i++) rows[i].textContent = grid[i].join("");
      e += 0.5;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [width, height, barCount, speed]);

  return <div ref={ref} />;
}
