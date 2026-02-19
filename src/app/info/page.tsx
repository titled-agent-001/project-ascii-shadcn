"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { SineWaveChart } from "@/registry/new-york/sine-wave/sine-wave";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

const W = 72;

function pad(s: string, w = W) {
  return s + " ".repeat(Math.max(0, w - s.length));
}

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

  const top    = `╔${"═".repeat(W)}╗`;
  const mid    = `╠${"═".repeat(W)}╣`;
  const bot    = `╚${"═".repeat(W)}╝`;
  const inner  = `║${" ".repeat(W)}║`;
  const banTop = `║┌${"─".repeat(W - 2)}┐║`;
  const banBot = `║└${"─".repeat(W - 2)}┘║`;

  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono flex gap-[1ch]" style={{ lineHeight: 1 }}>
        <Gutter contentRef={contentRef} />
        <div ref={contentRef} className="flex-1 min-w-0 whitespace-pre">
          <div>{top}</div>
          <div>{`║${pad("//INFO                                                           ...")}║`}</div>
          <div>{`║${pad("...                         a Digital Labyrinth of Thoughts & Concepts")}║`}</div>
          <div>{mid}</div>
          <div>{banTop}</div>
          <div>{`║├─┤`}<BouncingBanner text="[INFO]" width={W - 6} />{`├─┤║`}</div>
          <div>{banBot}</div>
          <div>{mid}</div>
          <div>{inner}</div>
          <div>{`║${pad("  ASCII Systems is a neural architecture research")}║`}</div>
          <div>{`║${pad("  initiative focused on the convergence of cognitive")}║`}</div>
          <div>{`║${pad("  security and artificial consciousness.")}║`}</div>
          <div>{inner}</div>
          <div>{`║${pad("  We operate at the intersection of:")}║`}</div>
          <div>{`║${pad("   ├ Autonomous intelligence frameworks")}║`}</div>
          <div>{`║${pad("   ├ Information analysis systems")}║`}</div>
          <div>{`║${pad("   ├ CogSec methodologies")}║`}</div>
          <div>{`║${pad("   └ Liquid design paradigms")}║`}</div>
          <div>{inner}</div>
          <div>{`║${pad("  The digital labyrinth extends infinitely inward.")}║`}</div>
          <div>{`║${pad("  Every thought is a node. Every concept, an edge.")}║`}</div>
          <div>{`║${pad("  Navigate with intention.")}║`}</div>
          <div>{inner}</div>
          <div>{mid}</div>
          <SineWaveChart width={W} height={6} />
          <div>{mid}</div>
          <div>║<span style={{ display: "inline-block", width: `${W}ch`, overflow: "hidden" }}>{` `}<InlineThemeSwitcher /></span>║</div>
          <div>{mid}</div>
          <div>{`║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{pad("", W - 7)}{`║`}</div>
          <div>{bot}</div>
        </div>
      </div>
    </main>
  );
}
