"use client";

import { useEffect, useRef } from "react";

export interface DotMatrixProps {
  text: string;
  speed?: number;
}

export function DotMatrix({ text, speed = 100 }: DotMatrixProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const originalLines = text.split("\n");
    const chars = [".", "░", "▒", "▓"];
    const rows: HTMLDivElement[] = [];
    for (let i = 0; i < originalLines.length; i++) {
      const row = document.createElement("div");
      rows.push(row);
      el.appendChild(row);
    }
    let e = 0;
    const render = () => {
      for (let r = 0; r < originalLines.length; r++) {
        const orig = originalLines[r];
        let line = "";
        for (let c = 0; c < orig.length; c++) {
          if (orig[c] === ".") {
            const noise = Math.sin(c * 0.3 + r * 0.5 + e) * 0.5 +
              Math.cos(c * 0.2 - r * 0.3 + e * 0.7) * 0.3 +
              Math.sin((c + r) * 0.15 + e * 0.5) * 0.2;
            const idx = Math.max(0, Math.min(chars.length - 1, Math.floor((noise + 1) / 2 * chars.length)));
            line += chars[idx];
          } else {
            line += orig[c];
          }
        }
        rows[r].textContent = line;
      }
      e += 0.15;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <div ref={ref} />;
}
