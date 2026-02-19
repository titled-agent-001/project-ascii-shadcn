"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { SineWaveChart } from "@/registry/new-york/sine-wave/sine-wave";
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

export default function InfoPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono flex gap-[1ch]" style={{ lineHeight: 1 }}>
        <Gutter contentRef={contentRef} />
        <div ref={contentRef} className="flex-1 min-w-0 whitespace-pre">
          <div>{`╔════════════════════════════════════════════════════════════╗`}</div>
          <div>{`║//INFO                                                   ...║`}</div>
          <div>{`║...                 a Digital Labyrinth of Thoughts & Concepts║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║┌──────────────────────────────────────────────────────────┐║`}</div>
          <div>{`║├─┤`}<BouncingBanner text="[INFO]" width={54} />{`├─┤║`}</div>
          <div>{`║└──────────────────────────────────────────────────────────┘║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`║  ASCII Systems is a neural architecture research            ║`}</div>
          <div>{`║  initiative focused on the convergence of cognitive         ║`}</div>
          <div>{`║  security and artificial consciousness.                     ║`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`║  We operate at the intersection of:                        ║`}</div>
          <div>{`║   ├ Autonomous intelligence frameworks                     ║`}</div>
          <div>{`║   ├ Information analysis systems                           ║`}</div>
          <div>{`║   ├ CogSec methodologies                                   ║`}</div>
          <div>{`║   └ Liquid design paradigms                                ║`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`║  The digital labyrinth extends infinitely inward.          ║`}</div>
          <div>{`║  Every thought is a node. Every concept, an edge.          ║`}</div>
          <div>{`║  Navigate with intention.                                  ║`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <SineWaveChart width={60} height={6} />
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
