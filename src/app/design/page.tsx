"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { PlasmaOrb } from "@/registry/new-york/plasma-orb/plasma-orb";
import { BarChart } from "@/registry/new-york/bar-chart/bar-chart";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

const W = 60; // inner width between ║ borders

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

export default function DesignPage() {
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
          <div>{`║${pad("//DESIGN                                               ...")}║`}</div>
          <div>{`║${pad("...                                      Design Concepts")}║`}</div>
          <div>{mid}</div>
          <div>{banTop}</div>
          <div>{`║├─┤`}<BouncingBanner text="[DESIGN]" width={W - 6} />{`├─┤║`}</div>
          <div>{banBot}</div>
          <div>{mid}</div>
          <div>{inner}</div>
          <div>{`║${pad("  Design is the language of structured intention.")}║`}</div>
          <div>{`║${pad("  Where form dissolves into function and emerges")}║`}</div>
          <div>{`║${pad("  as something entirely new.")}║`}</div>
          <div>{inner}</div>
          <div>{`║${pad("  Principles:")}║`}</div>
          <div>{`║${pad("   ├ Liquid aesthetics — fluid, adaptive, alive")}║`}</div>
          <div>{`║${pad("   ├ Terminal minimalism — constraint as freedom")}║`}</div>
          <div>{`║${pad("   ├ Monospace poetry — every character placed")}║`}</div>
          <div>{`║${pad("   └ Dark-first — designed for the void")}║`}</div>
          <div>{inner}</div>
          <div>{mid}</div>
          <div className="flex">
            <span>║</span>
            <PlasmaOrb width={17} height={10} />
            <div>
              <div>{`┌${"─".repeat(W - 19)}┐`}</div>
              <BarChart width={W - 19} height={8} barCount={9} />
              <div>{`└${"─".repeat(W - 19)}┘`}</div>
            </div>
            <span>║</span>
          </div>
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
