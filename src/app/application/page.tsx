"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

function StatusBar() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let s = 0;
    const timer = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const total = 40;
      const pos = Math.floor((Math.sin(s * 0.05) + 1) / 2 * total);
      let bar = "";
      for (let i = 0; i < total; i++) {
        const dist = Math.abs(i - pos);
        bar += dist === 0 ? "█" : dist === 1 ? "▓" : dist === 2 ? "▒" : dist === 3 ? "░" : "─";
      }
      const pct = Math.floor((Math.sin(s * 0.05) + 1) / 2 * 100);
      el.textContent = bar + ` ${String(pct).padStart(3)}%`;
      s++;
    }, 80);
    return () => clearInterval(timer);
  }, []);
  return <span ref={ref}>{"████████████████████████████████████████ 100%"}</span>;
}

function MatrixRain() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    const drops = Array.from({ length: 58 }, () => Math.random() * 20);
    const timer = setInterval(() => {
      for (let row = 0; row < 6; row++) {
        const el = refs.current[row];
        if (!el) continue;
        let line = "";
        for (let col = 0; col < 58; col++) {
          const dist = (row - drops[col] + 20) % 20;
          if (dist < 0.5) line += "█";
          else if (dist < 2) line += "▓";
          else if (dist < 3) line += "░";
          else line += " ";
        }
        el.textContent = line;
      }
      for (let i = 0; i < 58; i++) {
        drops[i] += 0.15 + Math.random() * 0.1;
        if (drops[i] > 20) drops[i] = 0;
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i}>{`>  ║ `}<span ref={(el) => { refs.current[i] = el; }}>{" ".repeat(58)}</span>{` ║`}</div>
      ))}
    </>
  );
}

export default function ApplicationPage() {
  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono">
        <div>{`>  ╔════════════════════════════════════════════════════════════╗`}</div>
        <div>{`>  ║//APPLICATION                                            ...║`}</div>
        <div>{`>  ║...                                 useful utilities & tools║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║┌──────────────────────────────────────────────────────────┐║`}</div>
        <div>{`>  ║├─┤`}<BouncingBanner text="[APPLICATION]" width={54} />{`├─┤║`}</div>
        <div>{`>  ║└──────────────────────────────────────────────────────────┘║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  Tools for navigating the information landscape:            ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║   ┌────────────────────────────────────────────────────┐    ║`}</div>
        <div>{`>  ║   │ NEURAL MAPPER v2.1       ─ cognitive topology tool │    ║`}</div>
        <div>{`>  ║   │ SIGNAL DECODER v1.4      ─ pattern recognition     │    ║`}</div>
        <div>{`>  ║   │ MATTER ANALYZER v3.0     ─ structural decomposer   │    ║`}</div>
        <div>{`>  ║   │ PLASMA RENDERER v0.9     ─ visualization engine     │    ║`}</div>
        <div>{`>  ║   │ COGSEC SCANNER v1.7      ─ threat surface mapper    │    ║`}</div>
        <div>{`>  ║   └────────────────────────────────────────────────────┘    ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  Status: `}<StatusBar />{`     ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <MatrixRain />
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║ `}<InlineThemeSwitcher />{`  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
        <div>{`>  ╚════════════════════════════════════════════════════════════╝`}</div>
      </div>
    </main>
  );
}
