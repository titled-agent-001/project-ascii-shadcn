"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

function WaveAnimation() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let e = 0;
    const timer = setInterval(() => {
      for (let row = 0; row < 6; row++) {
        const el = refs.current[row];
        if (!el) continue;
        let line = "";
        for (let col = 0; col < 58; col++) {
          const height = Math.max(0, Math.min(5, Math.round(3 + 0.5 * (
            2.5 * Math.sin((0.4 * col + e) * 0.3) +
            1.5 * Math.sin((0.4 * col + e) * 0.5) +
            Math.sin((0.4 * col + e) * 0.7)
          ))));
          line += (5 - row <= height) ? "█" : " ";
        }
        el.textContent = line;
      }
      e += 0.4;
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

export default function InfoPage() {
  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono">
        <div>{`>  ╔════════════════════════════════════════════════════════════╗`}</div>
        <div>{`>  ║//INFO                                                   ...║`}</div>
        <div>{`>  ║...                 a Digital Labyrinth of Thoughts & Concepts║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║┌──────────────────────────────────────────────────────────┐║`}</div>
        <div>{`>  ║├─┤`}<BouncingBanner text="[INFO]" width={54} />{`├─┤║`}</div>
        <div>{`>  ║└──────────────────────────────────────────────────────────┘║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  ASCII Systems is a neural architecture research            ║`}</div>
        <div>{`>  ║  initiative focused on the convergence of cognitive         ║`}</div>
        <div>{`>  ║  security and artificial consciousness.                     ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  We operate at the intersection of:                        ║`}</div>
        <div>{`>  ║   ├ Autonomous intelligence frameworks                     ║`}</div>
        <div>{`>  ║   ├ Information analysis systems                           ║`}</div>
        <div>{`>  ║   ├ CogSec methodologies                                   ║`}</div>
        <div>{`>  ║   └ Liquid design paradigms                                ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  The digital labyrinth extends infinitely inward.          ║`}</div>
        <div>{`>  ║  Every thought is a node. Every concept, an edge.          ║`}</div>
        <div>{`>  ║  Navigate with intention.                                  ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <WaveAnimation />
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║ `}<InlineThemeSwitcher />{`  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
        <div>{`>  ╚════════════════════════════════════════════════════════════╝`}</div>
      </div>
    </main>
  );
}
