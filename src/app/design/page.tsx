"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

function DesignBanner() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let t = 0;
    const timer = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const n = "[DESIGN]".length;
      const w = 54;
      const lp = Math.floor((w - n) / 2);
      const rp = w - n - lp;
      const i = t % Math.max(lp, rp);
      const c = Math.min(i, lp - 1);
      const a = Math.min(i, rp - 1);
      el.textContent = "░".repeat(c) + (c < lp ? "█" : "") + "░".repeat(Math.max(0, lp - c - 1)) +
        "[DESIGN]" + "░".repeat(Math.max(0, rp - a - 1)) + (a < rp ? "█" : "") + "░".repeat(a);
      t = (t + 1) % 100;
    }, 150);
    return () => clearInterval(timer);
  }, []);
  return <span ref={ref}>{"░░░░░░░░░░░░░░░░░░░░░░░[DESIGN]░░░░░░░░░░░░░░░░░░░░░░░"}</span>;
}

function PlasmaAnimation() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    const pChars = [" ", "░", "▒", "▓", "█"];
    let e1 = 0;
    const timer = setInterval(() => {
      for (let row = 0; row < 10; row++) {
        const el = refs.current[row];
        if (!el) continue;
        let line = "";
        for (let col = 0; col < 15; col++) {
          const x = col - 7.5, y = row - 5;
          const dist = Math.sqrt(x * x + y * y);
          const val = Math.floor((
            0.5 * Math.sin(0.8 * dist - 0.5 * e1) +
            0.3 * Math.sin(1.2 * dist - 0.3 * e1) +
            0.2 * Math.cos(0.5 * dist - 0.4 * e1) +
            0.3 * Math.sin(0.3 * e1) +
            0.15 * Math.sin(3 * Math.atan2(y, x) + 0.2 * e1) + 1.5
          ) / 3 * pChars.length);
          line += pChars[Math.max(0, Math.min(pChars.length - 1, val))];
        }
        el.textContent = line;
      }
      e1 += 0.15;
    }, 120);
    return () => clearInterval(timer);
  }, []);
  return <>{Array.from({ length: 10 }, (_, i) => <span key={i} ref={(el) => { refs.current[i] = el; }}>{"               "}</span>)}</>;
}

function BarAnimation() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    let e2 = 0;
    const timer = setInterval(() => {
      const bars: string[][] = Array.from({ length: 8 }, () => Array(36).fill(" "));
      for (let b = 0; b < 9; b++) {
        const x = 4 * b;
        const height = Math.floor((0.4 * Math.sin((b + 0.1 * e2) * 0.8) + 0.3 * Math.cos(1.3 * b + 0.15 * e2) + 0.5) * 8);
        for (let row = 0; row < 8; row++) {
          if (7 - row < height) {
            for (let dx = 0; dx < 3 && x + dx < 36; dx++) bars[row][x + dx] = "█";
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        const el = refs.current[i];
        if (el) el.textContent = bars[i].join("");
      }
      e2 += 0.5;
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return <>{Array.from({ length: 8 }, (_, i) => <span key={i} ref={(el) => { refs.current[i] = el; }}>{" ".repeat(36)}</span>)}</>;
}

export default function DesignPage() {
  const plasmaRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // We need to wire up the refs from the sub-components
  // Let's just use inline refs directly

  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono">
        <div>{`>  ╔════════════════════════════════════════════════════════════╗`}</div>
        <div>{`>  ║//DESIGN                                                 ...║`}</div>
        <div>{`>  ║...                                        Design Concepts║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║┌──────────────────────────────────────────────────────────┐║`}</div>
        <div>{`>  ║├─┤`}<DesignBanner />{`├─┤║`}</div>
        <div>{`>  ║└──────────────────────────────────────────────────────────┘║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  Design is the language of structured intention.            ║`}</div>
        <div>{`>  ║  Where form dissolves into function and emerges             ║`}</div>
        <div>{`>  ║  as something entirely new.                                 ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  Principles:                                               ║`}</div>
        <div>{`>  ║   ├ Liquid aesthetics — fluid, adaptive, alive              ║`}</div>
        <div>{`>  ║   ├ Terminal minimalism — constraint as freedom             ║`}</div>
        <div>{`>  ║   ├ Monospace poetry — every character placed               ║`}</div>
        <div>{`>  ║   └ Dark-first — designed for the void                     ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <DesignVisualization />
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║ `}<InlineThemeSwitcher />{`  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
        <div>{`>  ╚════════════════════════════════════════════════════════════╝`}</div>
      </div>
    </main>
  );
}

function DesignVisualization() {
  const plasmaRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const pChars = [" ", "░", "▒", "▓", "█"];
    let e1 = 0;
    const plasmaTimer = setInterval(() => {
      for (let row = 0; row < 10; row++) {
        const el = plasmaRefs.current[row];
        if (!el) continue;
        let line = "";
        for (let col = 0; col < 15; col++) {
          const x = col - 7.5, y = row - 5;
          const dist = Math.sqrt(x * x + y * y);
          const val = Math.floor((
            0.5 * Math.sin(0.8 * dist - 0.5 * e1) +
            0.3 * Math.sin(1.2 * dist - 0.3 * e1) +
            0.2 * Math.cos(0.5 * dist - 0.4 * e1) +
            0.3 * Math.sin(0.3 * e1) +
            0.15 * Math.sin(3 * Math.atan2(y, x) + 0.2 * e1) + 1.5
          ) / 3 * pChars.length);
          line += pChars[Math.max(0, Math.min(pChars.length - 1, val))];
        }
        el.textContent = line;
      }
      e1 += 0.15;
    }, 120);

    let e2 = 0;
    const barTimer = setInterval(() => {
      const bars: string[][] = Array.from({ length: 8 }, () => Array(36).fill(" "));
      for (let b = 0; b < 9; b++) {
        const x = 4 * b;
        const height = Math.floor((0.4 * Math.sin((b + 0.1 * e2) * 0.8) + 0.3 * Math.cos(1.3 * b + 0.15 * e2) + 0.5) * 8);
        for (let row = 0; row < 8; row++) {
          if (7 - row < height) {
            for (let dx = 0; dx < 3 && x + dx < 36; dx++) bars[row][x + dx] = "█";
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        const el = barRefs.current[i];
        if (el) el.textContent = bars[i].join("");
      }
      e2 += 0.5;
    }, 100);

    return () => { clearInterval(plasmaTimer); clearInterval(barTimer); };
  }, []);

  // 10 rows: plasma has 10 rows, bars has 8. First row has ┌─┐, last has └─┘
  // Layout matches design.html exactly
  const lines = [];
  for (let i = 0; i < 10; i++) {
    const barPart = i === 0
      ? `┌──────────────────────────────────────┐`
      : i === 9
        ? `└──────────────────────────────────────┘`
        : <>{`│ `}<span ref={(el) => { barRefs.current[i - 1] = el; }}>{" ".repeat(36)}</span>{` │`}</>;

    lines.push(
      <div key={i}>
        {`>  ║ `}
        <span ref={(el) => { plasmaRefs.current[i] = el; }}>{"               "}</span>
        {` `}{barPart}{` ║`}
      </div>
    );
  }

  return <>{lines}</>;
}
