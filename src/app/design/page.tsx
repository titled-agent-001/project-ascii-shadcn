"use client";

import Link from "next/link";
import { AsciiGutter } from "@/registry/new-york/ascii-gutter/ascii-gutter";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { PlasmaOrb } from "@/registry/new-york/plasma-orb/plasma-orb";
import { BarChart } from "@/registry/new-york/bar-chart/bar-chart";
import { AsciiCard } from "@/registry/new-york/ascii-card/ascii-card";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

export default function DesignPage() {
  return (
    <AsciiGutter char=">" side="left">
      <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
        <div className="w-full font-mono whitespace-pre">
          <div>{`╔════════════════════════════════════════════════════════════╗`}</div>
          <div>{`║//DESIGN                                                 ...║`}</div>
          <div>{`║...                                        Design Concepts║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║┌──────────────────────────────────────────────────────────┐║`}</div>
          <div>{`║├─┤`}<BouncingBanner text="[DESIGN]" width={54} />{`├─┤║`}</div>
          <div>{`║└──────────────────────────────────────────────────────────┘║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <AsciiCard
            width={62}
            content={[
              "Design is the language of structured intention.",
              "Where form dissolves into function and emerges",
              "as something entirely new.",
              "",
              "Principles:",
              " ├ Liquid aesthetics — fluid, adaptive, alive",
              " ├ Terminal minimalism — constraint as freedom",
              " ├ Monospace poetry — every character placed",
              " └ Dark-first — designed for the void",
            ].join("\n")}
          />
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div className="flex gap-2">
            <PlasmaOrb width={15} height={10} />
            <BarChart width={36} height={10} barCount={9} />
          </div>
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
