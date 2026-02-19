"use client";

import Link from "next/link";
import { AsciiGutter } from "@/registry/new-york/ascii-gutter/ascii-gutter";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { AsciiProgressBar } from "@/registry/new-york/progress-bar/progress-bar";
import { DotMatrix } from "@/registry/new-york/dot-matrix/dot-matrix";
import { AsciiTable } from "@/registry/new-york/ascii-table/ascii-table";
import { StatusPanel } from "@/registry/new-york/status-panel/status-panel";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

export default function ApplicationPage() {
  return (
    <AsciiGutter char=">" side="left">
      <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
        <div className="w-full font-mono whitespace-pre">
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
            headers={["Tool", "Description"]}
            rows={[
              ["NEURAL MAPPER v2.1", "cognitive topology tool"],
              ["SIGNAL DECODER v1.4", "pattern recognition"],
              ["MATTER ANALYZER v3.0", "structural decomposer"],
              ["PLASMA RENDERER v0.9", "visualization engine"],
              ["COGSEC SCANNER v1.7", "threat surface mapper"],
            ]}
            width={56}
          />
          <div>{`║                                                            ║`}</div>
          <div>{`║  Status: `}<AsciiProgressBar value={100} width={40} animated speed={80} />{`     ║`}</div>
          <div>{`║                                                            ║`}</div>
          <StatusPanel
            title="// SYSTEM STATUS"
            entries={{
              "Neural Net": "ONLINE",
              "Signal Bus": "ACTIVE",
              "Threat Level": "LOW",
              "Uptime": "99.97%",
            }}
            width={56}
          />
          <div>{`╠════════════════════════════════════════════════════════════╣`}</div>
          <DotMatrix
            text={[
              "                                                          ",
              "  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ",
              "  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ",
              "  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ",
              "  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ",
              "  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ",
            ].join("\n")}
          />
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
