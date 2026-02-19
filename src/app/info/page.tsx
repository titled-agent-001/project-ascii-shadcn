"use client";

import Link from "next/link";
import { AsciiGutter } from "@/registry/new-york/ascii-gutter/ascii-gutter";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { SineWaveChart } from "@/registry/new-york/sine-wave/sine-wave";
import { AsciiCard } from "@/registry/new-york/ascii-card/ascii-card";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

export default function InfoPage() {
  return (
    <AsciiGutter char=">" side="left">
      <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
        <div className="w-full font-mono whitespace-pre">
          <div>{`╔════════════════════════════════════════════════════════════╗`}</div>
          <div>{`║//INFO                                                   ...║`}</div>
          <div>{`║...                 a Digital Labyrinth of Thoughts & Concepts║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║┌──────────────────────────────────────────────────────────┐║`}</div>
          <div>{`║├─┤`}<BouncingBanner text="[INFO]" width={54} />{`├─┤║`}</div>
          <div>{`║└──────────────────────────────────────────────────────────┘║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <AsciiCard
            width={62}
            content={[
              "ASCII Systems is a neural architecture research",
              "initiative focused on the convergence of cognitive",
              "security and artificial consciousness.",
              "",
              "We operate at the intersection of:",
              " ├ Autonomous intelligence frameworks",
              " ├ Information analysis systems",
              " ├ CogSec methodologies",
              " └ Liquid design paradigms",
              "",
              "The digital labyrinth extends infinitely inward.",
              "Every thought is a node. Every concept, an edge.",
              "Navigate with intention.",
            ].join("\n")}
          />
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <SineWaveChart width={60} height={6} />
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║ `}<InlineThemeSwitcher />{`  ║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
          <div>{`╚════════════════════════════════════════════════════════════╝`}</div>
        </div>
      </main>
    </AsciiGutter>
  );
}
