"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { PlasmaOrb } from "@/registry/new-york/plasma-orb/plasma-orb";
import { BarChart } from "@/registry/new-york/bar-chart/bar-chart";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

function Gutter({ contentRef }: { contentRef: React.RefObject<HTMLDivElement | null> }) {
  const [lines, setLines] = useState(30);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      const style = window.getComputedStyle(el);
      const lh = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2;
      setLines(Math.ceil(el.scrollHeight / lh));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const mo = new MutationObserver(measure);
    mo.observe(el, { childList: true, subtree: true, characterData: true });
    return () => { ro.disconnect(); mo.disconnect(); };
  }, [contentRef]);

  return (
    <div className="select-none shrink-0 whitespace-pre opacity-40" aria-hidden="true">
      {Array.from({ length: lines }, () => ">").join("\n")}
    </div>
  );
}

export default function DesignPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono flex gap-[1ch]" style={{ lineHeight: 1 }}>
        <Gutter contentRef={contentRef} />
        <div ref={contentRef} className="flex-1 min-w-0 whitespace-pre">
          <div>{`╔════════════════════════════════════════════════════════════╗`}</div>
          <div>{`║//DESIGN                                                 ...║`}</div>
          <div>{`║...                                        Design Concepts║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║┌──────────────────────────────────────────────────────────┐║`}</div>
          <div>{`║├─┤`}<BouncingBanner text="[DESIGN]" width={54} />{`├─┤║`}</div>
          <div>{`║└──────────────────────────────────────────────────────────┘║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`║  Design is the language of structured intention.            ║`}</div>
          <div>{`║  Where form dissolves into function and emerges             ║`}</div>
          <div>{`║  as something entirely new.                                 ║`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`║  Principles:                                               ║`}</div>
          <div>{`║   ├ Liquid aesthetics — fluid, adaptive, alive              ║`}</div>
          <div>{`║   ├ Terminal minimalism — constraint as freedom             ║`}</div>
          <div>{`║   ├ Monospace poetry — every character placed               ║`}</div>
          <div>{`║   └ Dark-first — designed for the void                     ║`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div className="flex">
            <PlasmaOrb width={17} height={10} />
            <div>
              <div>{`┌──────────────────────────────────────┐`}</div>
              <BarChart width={38} height={8} barCount={9} />
              <div>{`└──────────────────────────────────────┘`}</div>
            </div>
          </div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║ `}<InlineThemeSwitcher />{`  ║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
          <div>{`╚════════════════════════════════════════════════════════════╝`}</div>
        </div>
      </div>
    </main>
  );
}
