"use client";

import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { SineWaveChart } from "@/registry/new-york/sine-wave/sine-wave";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

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
        <div>{`>  ║`}</div>
        <SineWaveChart width={58} height={6} />
        <div>{`>  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║ `}<InlineThemeSwitcher />{`  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
        <div>{`>  ╚════════════════════════════════════════════════════════════╝`}</div>
      </div>
    </main>
  );
}
