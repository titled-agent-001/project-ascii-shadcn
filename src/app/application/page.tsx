"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { AsciiTable } from "@/registry/new-york/ascii-table/ascii-table";
import { AsciiProgressBar } from "@/registry/new-york/progress-bar/progress-bar";
import { DotMatrix } from "@/registry/new-york/dot-matrix/dot-matrix";
import { StatusPanel } from "@/registry/new-york/status-panel/status-panel";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

const W = 72;
const BW = W + 2; // full border width including ║…║

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

export default function ApplicationPage() {
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
          {/* ── Header ── */}
          <div>{top}</div>
          <div>{`║${pad("//APPLICATION                                                        ...")}║`}</div>
          <div>{`║${pad("...                                         useful utilities & tools")}║`}</div>
          <div>{mid}</div>
          <div>{banTop}</div>
          <div>{`║├─┤`}<BouncingBanner text="[APPLICATION]" width={W - 6} />{`├─┤║`}</div>
          <div>{banBot}</div>
          <div>{mid}</div>
          <div>{inner}</div>
          <div>{`║${pad("  Tools for navigating the information landscape:")}║`}</div>
          <div>{inner}</div>
          <div>{bot}</div>

          {/* ── Table (self-bordered, no bottom → connected to status) ── */}
          <div>
            <AsciiTable
              headers={["Tool", "Version", "Description"]}
              rows={[
                ["NEURAL MAPPER", "v2.1", "cognitive topology"],
                ["SIGNAL DECODER", "v1.4", "pattern recognition"],
                ["MATTER ANALYZER", "v3.0", "structural decomposer"],
                ["PLASMA RENDERER", "v0.9", "visualization engine"],
                ["COGSEC SCANNER", "v1.7", "threat surface mapper"],
              ]}
              width={BW}
              noBottom
            />
          </div>

          {/* ── Status bar (connected from table above) ── */}
          <div>{mid}</div>
          <div>{`║${pad("  Status:")}║`}</div>
          <div>║<span style={{ display: "inline-block", width: `${W}ch`, overflow: "hidden" }}>{`  `}<AsciiProgressBar label="SYSTEM" value={73} width={40} animated /></span>║</div>
          <div>{bot}</div>

          {/* ── Status panel (no bottom → connected to footer) ── */}
          <div>
            <StatusPanel
              entries={{
                "NETWORK": "ACTIVE",
                "NODES": "47 ONLINE",
                "LATENCY": "12ms",
                "UPTIME": "99.97%",
              }}
              width={BW}
              noBottom
            />
          </div>

          {/* ── Dot matrix ── */}
          <div>{mid}</div>
          <DotMatrix text="ASCIISYSTEMS" speed={80} />

          {/* ── Footer (connected from status panel) ── */}
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
