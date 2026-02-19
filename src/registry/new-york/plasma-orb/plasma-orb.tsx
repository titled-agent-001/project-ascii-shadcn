"use client";

import { useEffect, useRef } from "react";

export interface PlasmaOrbProps {
  width?: number;
  height?: number;
  speed?: number;
}

export function PlasmaOrb({ width = 15, height = 10, speed = 120 }: PlasmaOrbProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const chars = [" ", "░", "▒", "▓", "█"];
    const rows: HTMLDivElement[] = [];
    for (let i = 0; i < height; i++) {
      const row = document.createElement("div");
      rows.push(row);
      el.appendChild(row);
    }
    let e = 0;
    const cx = width / 2, cy = height / 2;
    const render = () => {
      for (let row = 0; row < height; row++) {
        let line = "";
        for (let col = 0; col < width; col++) {
          const x = col - cx, y = row - cy;
          const dist = Math.sqrt(x * x + y * y);
          const val = Math.floor((
            0.5 * Math.sin(0.8 * dist - 0.5 * e) +
            0.3 * Math.sin(1.2 * dist - 0.3 * e) +
            0.2 * Math.cos(0.5 * dist - 0.4 * e) +
            0.3 * Math.sin(0.3 * e) +
            0.15 * Math.sin(3 * Math.atan2(y, x) + 0.2 * e) + 1.5
          ) / 3 * chars.length);
          line += chars[Math.max(0, Math.min(chars.length - 1, val))];
        }
        rows[row].textContent = line;
      }
      e += 0.15;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [width, height, speed]);

  return <div ref={ref} />;
}
