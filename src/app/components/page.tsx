"use client";

import Link from "next/link";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { GradientBanner } from "@/registry/new-york/gradient-banner/gradient-banner";
import { SineWaveChart } from "@/registry/new-york/sine-wave/sine-wave";
import { BarChart } from "@/registry/new-york/bar-chart/bar-chart";
import { PlasmaOrb } from "@/registry/new-york/plasma-orb/plasma-orb";
import { DotMatrix } from "@/registry/new-york/dot-matrix/dot-matrix";
import { AsciiCard } from "@/registry/new-york/ascii-card/ascii-card";
import { AsciiTable } from "@/registry/new-york/ascii-table/ascii-table";
import { AsciiProgressBar } from "@/registry/new-york/progress-bar/progress-bar";
import { StatusPanel } from "@/registry/new-york/status-panel/status-panel";
import { NavMenu } from "@/registry/new-york/nav-menu/nav-menu";
import { ThemeSwitcher } from "@/registry/new-york/theme-switcher/theme-switcher";
import { AsciiInput } from "@/registry/new-york/ascii-input/ascii-input";
import { Ascii3DRenderer } from "@/registry/new-york/ascii-3d-renderer/ascii-3d-renderer";
import { AsciiTabs } from "@/registry/new-york/ascii-tabs/ascii-tabs";

const dotText = [
  "..........██...........",
  ".........████..........",
  "........██..██.........",
  ".......██....██........",
  "......██████████.......",
  ".....██........██......",
  "....██..........██.....",
].join("\n");

const BASE = "https://project-ascii-shadcn.vercel.app";

export default function ComponentsPage() {
  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full max-w-[78ch] overflow-x-auto font-mono">
        <div>{`╔════════════════════════════════════════════════════════════════════════════╗`}</div>
        <div>{`║ ┌─┤`}<BouncingBanner text="[COMPONENT-LIBRARY]" width={54} />{`├─┐               ║`}</div>
        <div>{`║ ASCII UI Components ─ Interactive Documentation                            ║`}</div>
        <div>{`╚════════════════════════════════════════════════════════════════════════════╝`}</div>
        <div></div>
        <div>{` `}<Link href="/" className="hover:underline transition-colors">{`← HOME`}</Link></div>
        <div></div>
        <div>{`══════════════════════════════════════════════════════════════════════════════`}</div>

        {/* 01. BouncingBanner */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 01. BouncingBanner ─────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Animated ░█ blocks bouncing across a label.                             │`}</div>
          <div>{`│  Configurable: text, width, speed (ms)                                   │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo: (see header above ↑)`}</div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/bouncing-banner.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/bouncing-banner/bouncing-banner.tsx`}</div>
          <div>{`    →  components/bouncing-banner.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["text", "string", "required", "Label text to display"],
                ["width", "number", "required", "Total width in characters"],
                ["speed", "number", "150", "Animation interval (ms)"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { BouncingBanner }`}</div>
          <div>{`      from "@/registry/new-york/bouncing-banner/bouncing-banner"`}</div>
          <div></div>
          <div>{`    <BouncingBanner text="[MY-LABEL]" width={54} speed={150} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 02. GradientBanner */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 02. GradientBanner ─────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  ▓▒░ gradient trail behind a bouncing █.                                 │`}</div>
          <div>{`│  Configurable: text, width, speed                                        │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div>{`  ├─┤`}<GradientBanner text="[GRADIENT]" width={50} />{`├─┤`}</div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/gradient-banner.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/gradient-banner/gradient-banner.tsx`}</div>
          <div>{`    →  components/gradient-banner.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["text", "string", "required", "Label text to display"],
                ["width", "number", "required", "Total width in characters"],
                ["speed", "number", "150", "Animation interval (ms)"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { GradientBanner }`}</div>
          <div>{`      from "@/registry/new-york/gradient-banner/gradient-banner"`}</div>
          <div></div>
          <div>{`    <GradientBanner text="[GRADIENT]" width={52} speed={150} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 03. SineWaveChart */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 03. SineWaveChart ───────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Animated sine wave using █ characters.                                  │`}</div>
          <div>{`│  Configurable: width, height, speed                                      │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><SineWaveChart width={40} height={8} /></div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/sine-wave.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/sine-wave/sine-wave.tsx`}</div>
          <div>{`    →  components/sine-wave.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["width", "number", "40", "Width in characters"],
                ["height", "number", "8", "Height in rows"],
                ["speed", "number", "100", "Animation interval (ms)"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { SineWaveChart }`}</div>
          <div>{`      from "@/registry/new-york/sine-wave/sine-wave"`}</div>
          <div></div>
          <div>{`    <SineWaveChart width={40} height={8} speed={100} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 04. BarChart */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 04. BarChart ────────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Animated bar chart with grouped bars.                                   │`}</div>
          <div>{`│  Configurable: width, height, barCount, speed                            │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><BarChart width={40} height={8} barCount={10} /></div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/bar-chart.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/bar-chart/bar-chart.tsx`}</div>
          <div>{`    →  components/bar-chart.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["width", "number", "32", "Total width in characters"],
                ["height", "number", "8", "Height in rows"],
                ["barCount", "number", "8", "Number of bars"],
                ["speed", "number", "100", "Animation interval (ms)"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { BarChart }`}</div>
          <div>{`      from "@/registry/new-york/bar-chart/bar-chart"`}</div>
          <div></div>
          <div>{`    <BarChart width={32} height={8} barCount={8} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 05. PlasmaOrb */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 05. PlasmaOrb ───────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Rippling plasma ░▒▓█ density effect.                                    │`}</div>
          <div>{`│  Configurable: width, height, speed                                      │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><PlasmaOrb width={20} height={12} /></div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/plasma-orb.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/plasma-orb/plasma-orb.tsx`}</div>
          <div>{`    →  components/plasma-orb.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["width", "number", "15", "Width in characters"],
                ["height", "number", "10", "Height in rows"],
                ["speed", "number", "120", "Animation interval (ms)"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { PlasmaOrb }`}</div>
          <div>{`      from "@/registry/new-york/plasma-orb/plasma-orb"`}</div>
          <div></div>
          <div>{`    <PlasmaOrb width={15} height={10} speed={120} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 06. DotMatrix */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 06. DotMatrix ───────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Animates . chars with .░▒▓ density.                                     │`}</div>
          <div>{`│  Configurable: text, speed                                               │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><DotMatrix text={dotText} /></div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/dot-matrix.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/dot-matrix/dot-matrix.tsx`}</div>
          <div>{`    →  components/dot-matrix.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["text", "string", "required", "Dot pattern text (. chars animate)"],
                ["speed", "number", "100", "Animation interval (ms)"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { DotMatrix }`}</div>
          <div>{`      from "@/registry/new-york/dot-matrix/dot-matrix"`}</div>
          <div></div>
          <div>{`    <DotMatrix text={"..██..\\n.████."} speed={100} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 07. AsciiCard */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 07. AsciiCard ───────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Box-drawing card with title and content.                                │`}</div>
          <div>{`│  Configurable: title, content, width                                     │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (single):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiCard title="Component Card" content={"This is a reusable\nASCII card component\nwith box-drawing borders."} width={35} />
          </div>
          <div>{`  Demo (double):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiCard title="Double Border" content={"Same card component\nbut with ═ double borders."} width={35} doubleBorder />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/ascii-card.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/ascii-card/ascii-card.tsx`}</div>
          <div>{`    →  components/ascii-card.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["title", "string", "—", "Card title"],
                ["content", "string", "—", "Card body content"],
                ["width", "number", "40", "Card width in characters"],
                ["doubleBorder", "boolean", "false", "Use ═║ double border style"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { AsciiCard }`}</div>
          <div>{`      from "@/registry/new-york/ascii-card/ascii-card"`}</div>
          <div></div>
          <div>{`    <AsciiCard`}</div>
          <div>{`      title="My Card"`}</div>
          <div>{`      content="Content here"`}</div>
          <div>{`      width={40}`}</div>
          <div>{`      doubleBorder={false}`}</div>
          <div>{`    />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 08. AsciiTable */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 08. AsciiTable ──────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Box-drawing table with headers and rows.                                │`}</div>
          <div>{`│  Configurable: headers, rows, colWidths                                  │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Component", "Type", "Animated"]}
              rows={[
                ["BouncingBanner", "banner", "yes"],
                ["AsciiCard", "static", "no"],
                ["PlasmaOrb", "effect", "yes"],
                ["ProgressBar", "widget", "opt"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/ascii-table.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/ascii-table/ascii-table.tsx`}</div>
          <div>{`    →  components/ascii-table.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["headers", "string[]", "required", "Column header labels"],
                ["rows", "string[][]", "required", "Row data arrays"],
                ["colWidths", "number[]", "auto", "Column widths (auto-calculated)"],
                ["width", "number", "60", "Total table width"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { AsciiTable }`}</div>
          <div>{`      from "@/registry/new-york/ascii-table/ascii-table"`}</div>
          <div></div>
          <div>{`    <AsciiTable`}</div>
          <div>{`      headers={["Key", "Value"]}`}</div>
          <div>{`      rows={[["foo", "bar"], ["baz", "qux"]]}`}</div>
          <div>{`    />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 09. AsciiProgressBar */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 09. AsciiProgressBar ────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Progress bar with optional animation.                                   │`}</div>
          <div>{`│  Configurable: value, max, width, label                                  │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (static):`}</div>
          <div>{`  `}<AsciiProgressBar value={75} width={30} /></div>
          <div>{`  Demo (animated):`}</div>
          <div>{`  `}<AsciiProgressBar value={100} width={30} label="LOADING" animated speed={40} /></div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/progress-bar.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/progress-bar/progress-bar.tsx`}</div>
          <div>{`    →  components/progress-bar.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["value", "number", "required", "Current progress value"],
                ["max", "number", "100", "Maximum value"],
                ["width", "number", "30", "Bar width in characters"],
                ["label", "string", "—", "Label text after bar"],
                ["animated", "boolean", "false", "Animate from 0 to value"],
                ["speed", "number", "80", "Animation step interval (ms)"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { AsciiProgressBar }`}</div>
          <div>{`      from "@/registry/new-york/progress-bar/progress-bar"`}</div>
          <div></div>
          <div>{`    <AsciiProgressBar value={75} width={30} />`}</div>
          <div>{`    <AsciiProgressBar value={100} label="LOADING" animated />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 10. StatusPanel */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 10. StatusPanel ─────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  System status panel with key-value pairs.                               │`}</div>
          <div>{`│  Configurable: title, entries, width                                     │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <StatusPanel entries={{ Version: "2025.1", Components: "12", Status: "OPERATIONAL", Theme: "ACTIVE" }} />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/status-panel.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/status-panel/status-panel.tsx`}</div>
          <div>{`    →  components/status-panel.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["title", "string", '"// SYSTEM STAT"', "Panel title"],
                ["entries", "Record<str,str>", "required", "Key-value pairs"],
                ["width", "number", "40", "Panel width"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { StatusPanel }`}</div>
          <div>{`      from "@/registry/new-york/status-panel/status-panel"`}</div>
          <div></div>
          <div>{`    <StatusPanel`}</div>
          <div>{`      title="// SYSTEM STATUS"`}</div>
          <div>{`      entries={{ Version: "2025.1", Status: "OK" }}`}</div>
          <div>{`    />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 11. NavMenu */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 11. NavMenu ─────────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Navigation ├ LINK ─ description entries.                                │`}</div>
          <div>{`│  Configurable: items (label, desc, href)                                 │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <NavMenu items={[
              { label: "HOME", description: "Return to main page", href: "/" },
              { label: "INFO", description: "A Digital Labyrinth", href: "/info" },
              { label: "DESIGN", description: "Design Concepts", href: "/design" },
              { label: "APPLICATION", description: "Useful utilities", href: "/application" },
            ]} />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/nav-menu.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/nav-menu/nav-menu.tsx`}</div>
          <div>{`    →  components/nav-menu.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["items", "NavMenuItem[]", "required", "Array of menu items"],
                ["items[].label", "string", "required", "Link label text"],
                ["items[].description", "string", "required", "Description text"],
                ["items[].href", "string", "required", "Link URL"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { NavMenu }`}</div>
          <div>{`      from "@/registry/new-york/nav-menu/nav-menu"`}</div>
          <div></div>
          <div>{`    <NavMenu items={[`}</div>
          <div>{`      { label: "HOME", description: "Main", href: "/" },`}</div>
          <div>{`      { label: "INFO", description: "About", href: "/info" },`}</div>
          <div>{`    ]} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 12. ThemeSwitcher */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 12. ThemeSwitcher ───────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Colour theme + day/night mode control.                                  │`}</div>
          <div>{`│  Configurable: width                                                     │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (try it!):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <ThemeSwitcher />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/theme-switcher.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/theme-switcher/theme-switcher.tsx`}</div>
          <div>{`    →  components/theme-switcher.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["width", "number", "40", "Panel width in characters"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { ThemeSwitcher }`}</div>
          <div>{`      from "@/registry/new-york/theme-switcher/theme-switcher"`}</div>
          <div></div>
          <div>{`    <ThemeSwitcher width={40} />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 13. AsciiInput */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 13. AsciiInput ──────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  ASCII box-drawing styled text input field.                              │`}</div>
          <div>{`│  Configurable: label, placeholder, width, prefix                         │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (single):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiInput label="COMMAND" placeholder="type here..." width={40} />
          </div>
          <div>{`  Demo (double):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiInput label="SEARCH" placeholder="search components..." width={40} doubleBorder onSubmit={(v) => console.log("Search:", v)} />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/ascii-input.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/ascii-input/ascii-input.tsx`}</div>
          <div>{`    →  components/ascii-input.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["label", "string", "—", "Input label text"],
                ["placeholder", "string", '""', "Placeholder text"],
                ["width", "number", "40", "Input width"],
                ["doubleBorder", "boolean", "false", "Use double border"],
                ["prefix", "string", '"> "', "Input prefix"],
                ["value", "string", '""', "Initial value"],
                ["onChange", "(val:string)=>void", "—", "Change callback"],
                ["onSubmit", "(val:string)=>void", "—", "Submit callback"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { AsciiInput }`}</div>
          <div>{`      from "@/registry/new-york/ascii-input/ascii-input"`}</div>
          <div></div>
          <div>{`    <AsciiInput`}</div>
          <div>{`      label="COMMAND"`}</div>
          <div>{`      placeholder="type here..."`}</div>
          <div>{`      width={40}`}</div>
          <div>{`      onSubmit={(val) => console.log(val)}`}</div>
          <div>{`    />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 15. Ascii3DRenderer */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 15. Ascii3DRenderer ─────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  3D model rendered as live ASCII art using Three.js + AsciiEffect.       │`}</div>
          <div>{`│  Configurable: geometry, charset, colors, rotation, controls             │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (torus knot):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <Ascii3DRenderer geometry="torusknot" width={300} height={200} />
          </div>
          <div></div>
          <div>{`  Demo (horse — animated GLTF model):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <Ascii3DRenderer geometry="horse" width={300} height={200} autoRotate={false} />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/ascii-3d-renderer.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/ascii-3d-renderer/ascii-3d-renderer.tsx`}</div>
          <div>{`    →  components/ascii-3d-renderer.tsx`}</div>
          <div></div>
          <div>{`  Requires: npm install three @types/three`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["width", "number", "500", "Canvas width"],
                ["height", "number", "300", "Canvas height"],
                ["charset", "string", '" .:-+*=%"', "ASCII chars"],
                ["geometry", '"torusknot"|"sphere"|...', '"torusknot"', "Shape type"],
                ["modelUrl", "string", "—", "Custom GLTF URL"],
                ["modelScale", "number", "—", "Model scale"],
                ["color", "string", '"#ffffff"', "Mesh color"],
                ["autoRotate", "boolean", "true", "Auto rotate"],
                ["rotationSpeed", "number", "1", "Rotation speed"],
                ["enableControls", "boolean", "true", "Orbit controls"],
                ["invert", "boolean", "false", "Invert chars"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { Ascii3DRenderer }`}</div>
          <div>{`      from "@/registry/new-york/ascii-3d-renderer/ascii-3d-renderer"`}</div>
          <div></div>
          <div>{`    <Ascii3DRenderer`}</div>
          <div>{`      geometry="torusknot"`}</div>
          <div>{`      width={500}`}</div>
          <div>{`      height={300}`}</div>
          <div>{`      autoRotate={true}`}</div>
          <div>{`      enableControls={true}`}</div>
          <div>{`    />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 16. AsciiTabs */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 16. AsciiTabs ───────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`│  Tabbed interface using ASCII box-drawing characters.                    │`}</div>
          <div>{`│  Configurable: tabs, width, doubleBorder, keyboard navigation            │`}</div>
          <div>{`│                                                                          │`}</div>
          <div>{`└──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (single border):`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "HOME", content: "Welcome to ASCII UI.\nEverything is monospaced." },
                { label: "ABOUT", content: "Built with box-drawing characters.\nNo images needed." },
                { label: "SETTINGS", content: "Theme: dark\nFont: Menlo 14px\nBorder: single" },
                { label: "HELP", content: "Use ← → arrow keys to navigate tabs.\nPress Home/End to jump." },
              ]}
              width={60}
            />
          </div>
          <div></div>
          <div>{`  Demo (double border):`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "STATUS", content: "All systems operational." },
                { label: "LOGS", content: "[OK] Boot sequence complete\n[OK] Services started" },
              ]}
              width={50}
              doubleBorder
            />
          </div>
          <div></div>
          <div>{`  Installation:`}</div>
          <div></div>
          <div>{`  CLI:`}</div>
          <div>{`  npx shadcn add "${BASE}/r/ascii-tabs.json"`}</div>
          <div></div>
          <div>{`  Manual:`}</div>
          <div>{`  Copy: registry/new-york/ascii-tabs/ascii-tabs.tsx`}</div>
          <div>{`    →  components/ascii-tabs.tsx`}</div>
          <div></div>
          <div>{`  Props:`}</div>
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTable
              headers={["Prop", "Type", "Default", "Description"]}
              rows={[
                ["tabs", "Array<{label,content}>", "required", "Tab definitions"],
                ["defaultTab", "number", "0", "Initially active tab index"],
                ["width", "number", "60", "Width in characters"],
                ["doubleBorder", "boolean", "false", "Use double border chars"],
                ["onChange", "(index:number)=>void", "—", "Tab change callback"],
              ]}
            />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div></div>
          <div>{`    import { AsciiTabs }`}</div>
          <div>{`      from "@/registry/new-york/ascii-tabs/ascii-tabs"`}</div>
          <div></div>
          <div>{`    <AsciiTabs`}</div>
          <div>{`      tabs={[`}</div>
          <div>{`        { label: "HOME", content: "Welcome home." },`}</div>
          <div>{`        { label: "ABOUT", content: "About page." },`}</div>
          <div>{`      ]}`}</div>
          <div>{`      width={60}`}</div>
          <div>{`      doubleBorder={false}`}</div>
          <div>{`    />`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        <div></div>
        <div>{`══════════════════════════════════════════════════════════════════════════════`}</div>
        <div>{`  shimazu systems ─ component library v1.0`}</div>
        <div></div>
      </div>
    </main>
  );
}
