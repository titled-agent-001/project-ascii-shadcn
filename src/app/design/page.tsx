"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

const W = 72; // inner width between ║ borders
const PLASMA_W = 17;
const GAP = 2;
const CHART_W = W - PLASMA_W - GAP;
const VIS_H = 10;

/** Renders plasma + bar chart as bordered ASCII lines */
function PlasmaBarSection({ width }: { width: number }) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Plasma state
    const plasmaChars = [" ", "░", "▒", "▓", "█"];
    // Bar chart state
    let epoch = 0;

    const render = () => {
      const lines: string[] = [];
      // Generate plasma
      const plasma: string[][] = [];
      for (let y = 0; y < VIS_H; y++) {
        const row: string[] = [];
        for (let x = 0; x < PLASMA_W; x++) {
          const v = Math.sin(x * 0.3 + epoch) * 0.5 +
            Math.cos(y * 0.4 + epoch * 0.7) * 0.3 +
            Math.sin((x + y) * 0.2 + epoch * 0.5) * 0.2;
          const idx = Math.max(0, Math.min(plasmaChars.length - 1,
            Math.floor((v + 1) / 2 * plasmaChars.length)));
          row.push(plasmaChars[idx]);
        }
        plasma.push(row);
      }

      // Generate bar chart
      const barCount = 9;
      const barW = Math.max(1, Math.floor(CHART_W / barCount) - 1);
      const barGap = Math.floor(CHART_W / barCount);
      const chartGrid: string[][] = Array.from({ length: VIS_H }, () => Array(CHART_W).fill(" "));
      for (let b = 0; b < barCount; b++) {
        const x = barGap * b;
        const h = Math.floor((0.4 * Math.sin((b + 0.1 * epoch) * 0.8) +
          0.3 * Math.cos(1.3 * b + 0.15 * epoch) + 0.5) * VIS_H);
        for (let row = 0; row < VIS_H; row++) {
          if (VIS_H - 1 - row < h) {
            for (let dx = 0; dx < barW && x + dx < CHART_W; dx++)
              chartGrid[row][x + dx] = "█";
          }
        }
      }

      // Compose lines
      for (let y = 0; y < VIS_H; y++) {
        const p = plasma[y].join("");
        const gap = " ".repeat(GAP);
        const c = chartGrid[y].join("");
        const content = p + gap + c;
        const padded = content + " ".repeat(Math.max(0, width - content.length));
        lines.push("║" + padded + "║");
      }

      el.textContent = lines.join("\n");
      epoch += 0.15;
    };

    render();
    const timer = setInterval(render, 100);
    return () => clearInterval(timer);
  }, [width]);

  return <pre ref={ref} style={{ margin: 0, font: "inherit", lineHeight: "inherit" }} />;
}

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
          <div>{`║${pad("//DESIGN                                                         ...")}║`}</div>
          <div>{`║${pad("...                                              Design Concepts")}║`}</div>
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
          <PlasmaBarSection width={W} />
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
