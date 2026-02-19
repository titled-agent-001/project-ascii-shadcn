"use client";

import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { AsciiTable } from "@/registry/new-york/ascii-table/ascii-table";
import { AsciiProgressBar } from "@/registry/new-york/progress-bar/progress-bar";
import { DotMatrix } from "@/registry/new-york/dot-matrix/dot-matrix";
import { StatusPanel } from "@/registry/new-york/status-panel/status-panel";
import { InlineThemeSwitcher } from "@/registry/new-york/inline-theme-switcher/inline-theme-switcher";

export default function ApplicationPage() {
  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono">
        <div>{`>  ╔════════════════════════════════════════════════════════════╗`}</div>
        <div>{`>  ║//APPLICATION                                            ...║`}</div>
        <div>{`>  ║...                                 useful utilities & tools║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║┌──────────────────────────────────────────────────────────┐║`}</div>
        <div>{`>  ║├─┤`}<BouncingBanner text="[APPLICATION]" width={54} />{`├─┤║`}</div>
        <div>{`>  ║└──────────────────────────────────────────────────────────┘║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  Tools for navigating the information landscape:            ║`}</div>
        <div>{`>  ║                                                            ║`}</div>
        <div style={{ paddingLeft: "3ch" }}>
          <AsciiTable
            headers={["Tool", "Version", "Description"]}
            rows={[
              ["NEURAL MAPPER", "v2.1", "cognitive topology tool"],
              ["SIGNAL DECODER", "v1.4", "pattern recognition"],
              ["MATTER ANALYZER", "v3.0", "structural decomposer"],
              ["PLASMA RENDERER", "v0.9", "visualization engine"],
              ["COGSEC SCANNER", "v1.7", "threat surface mapper"],
            ]}
          />
        </div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ║  Status:`}</div>
        <div style={{ paddingLeft: "5ch" }}>
          <AsciiProgressBar label="SYSTEM" value={73} width={50} animated />
        </div>
        <div>{`>  ║                                                            ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div style={{ paddingLeft: "3ch" }}>
          <StatusPanel
            entries={{
              "NETWORK": "ACTIVE",
              "NODES": "47 ONLINE",
              "LATENCY": "12ms",
              "UPTIME": "99.97%",
            }}
            width={58}
          />
        </div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║`}</div>
        <DotMatrix width={58} height={6} />
        <div>{`>  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║ `}<InlineThemeSwitcher />{`  ║`}</div>
        <div>{`>  ╠════════════════════════════════════════════════════════════╣`}</div>
        <div>{`>  ║`}<Link href="/" className="hover:underline transition-colors">{` ◄ HOME`}</Link>{`                                                      ║`}</div>
        <div>{`>  ╚════════════════════════════════════════════════════════════╝`}</div>
      </div>
    </main>
  );
}
