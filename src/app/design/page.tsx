"use client";

import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { PlasmaOrb } from "@/registry/new-york/plasma-orb/plasma-orb";
import { BarChart } from "@/registry/new-york/bar-chart/bar-chart";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

export default function DesignPage() {
  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono">
        <div>{`>  ╔════════════════════════════════════════════════════════════╗`}</div>
        <div>{`>  ║//DESIGN                                                 ...║`}</div>
        <div>{`>  ║...                                        Design Concepts║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║┌──────────────────────────────────────────────────────────┐║`}</div>
        <div>{`>  ║├─┤`}<BouncingBanner text="[DESIGN]" width={54} />{`├─┤║`}</div>
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
        <div className="flex" style={{ whiteSpace: "pre" }}>
          <div>
            <PlasmaOrb width={17} height={10} />
          </div>
          <div>
            <div>{`┌──────────────────────────────────────┐`}</div>
            <BarChart width={38} height={8} barCount={9} />
            <div>{`└──────────────────────────────────────┘`}</div>
          </div>
        </div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║ `}<InlineThemeSwitcher />{`  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
        <div>{`>  ╚════════════════════════════════════════════════════════════╝`}</div>
      </div>
    </main>
  );
}
