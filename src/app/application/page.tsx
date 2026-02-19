"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { AsciiTable } from "@/registry/new-york/ascii-table/ascii-table";
import { AsciiProgressBar } from "@/registry/new-york/progress-bar/progress-bar";
import { DotMatrix } from "@/registry/new-york/dot-matrix/dot-matrix";
import { StatusPanel } from "@/registry/new-york/status-panel/status-panel";
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

export default function ApplicationPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono flex gap-[1ch]" style={{ lineHeight: 1 }}>
        <Gutter contentRef={contentRef} />
        <div ref={contentRef} className="flex-1 min-w-0 whitespace-pre">
          <div>{`╔════════════════════════════════════════════════════════════╗`}</div>
          <div>{`║//APPLICATION                                            ...║`}</div>
          <div>{`║...                                 useful utilities & tools║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║┌──────────────────────────────────────────────────────────┐║`}</div>
          <div>{`║├─┤`}<BouncingBanner text="[APPLICATION]" width={54} />{`├─┤║`}</div>
          <div>{`║└──────────────────────────────────────────────────────────┘║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <div>{`║                                                            ║`}</div>
          <div>{`║  Tools for navigating the information landscape:            ║`}</div>
          <div>{`║                                                            ║`}</div>
          <AsciiTable
            headers={["Tool", "Version", "Description"]}
            rows={[
              ["NEURAL MAPPER", "v2.1", "cognitive topology"],
              ["SIGNAL DECODER", "v1.4", "pattern recognition"],
              ["MATTER ANALYZER", "v3.0", "structural decomposer"],
              ["PLASMA RENDERER", "v0.9", "visualization engine"],
              ["COGSEC SCANNER", "v1.7", "threat surface mapper"],
            ]}
          />
          <div>{`║                                                            ║`}</div>
          <div>{`║  Status:`}</div>
          <AsciiProgressBar label="SYSTEM" value={73} width={50} animated />
          <div>{`║                                                            ║`}</div>
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <StatusPanel
            entries={{
              "NETWORK": "ACTIVE",
              "NODES": "47 ONLINE",
              "LATENCY": "12ms",
              "UPTIME": "99.97%",
            }}
            width={60}
          />
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <DotMatrix text="ASCIISYSTEMS" speed={80} />
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
