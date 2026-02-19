"use client";

import Link from "next/link";
import { BouncingBanner } from "@/components/ascii/bouncing-banner";
import { GradientBanner } from "@/components/ascii/gradient-banner";
import { SineWaveChart } from "@/components/ascii/sine-wave";
import { BarChart } from "@/components/ascii/bar-chart";
import { PlasmaOrb } from "@/components/ascii/plasma-orb";
import { DotMatrix } from "@/components/ascii/dot-matrix";
import { AsciiCard } from "@/components/ascii/ascii-card";
import { AsciiTable } from "@/components/ascii/ascii-table";
import { AsciiProgressBar } from "@/components/ascii/progress-bar";
import { StatusPanel } from "@/components/ascii/status-panel";
import { NavMenu } from "@/components/ascii/nav-menu";
import { ThemeSwitcher } from "@/components/ascii/theme-switcher";
import { AsciiInput } from "@/components/ascii/ascii-input";
import { Ascii3DRenderer } from "@/components/ascii/ascii-3d-renderer";

const dotText = [
  "..........██...........",
  ".........████..........",
  "........██..██.........",
  ".......██....██........",
  "......██████████.......",
  ".....██........██......",
  "....██..........██.....",
].join("\n");

export default function ComponentsPage() {
  return (
    <main className="preserve-spaces flex min-h-screen flex-col items-start justify-start p-4">
      <div className="w-full font-mono">
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
          <div>{`┌─ 01. BouncingBanner ───────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Animated ░█ blocks bouncing across a label.                               │`}</div>
          <div>{`│  Configurable: text, width, speed (ms)                                     │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo: (see header above ↑)`}</div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const bb = new BouncingBanner(el, {                                      │`}</div>
          <div>{`  │   text: '[MY-LABEL]', width: 54, speed: 150                              │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ bb.start();                                                              │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 02. GradientBanner */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 02. GradientBanner ───────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  ▓▒░ gradient trail behind a bouncing █.                                   │`}</div>
          <div>{`│  Configurable: text, width, speed                                          │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div>{`  ├─┤`}<GradientBanner text="[GRADIENT]" width={50} />{`├─┤`}</div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const gb = new GradientBanner(el, {                                      │`}</div>
          <div>{`  │   text: '[CLEAR]', width: 52, speed: 150                                 │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ gb.start();                                                              │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 03. SineWaveChart */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 03. SineWaveChart ────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Animated sine wave using █ characters.                                    │`}</div>
          <div>{`│  Configurable: width, height, speed                                        │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><SineWaveChart width={40} height={8} /></div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const sw = new SineWaveChart(el, {                                       │`}</div>
          <div>{`  │   width: 40, height: 8, speed: 100                                       │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ sw.start();                                                              │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 04. BarChart */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 04. BarChart ─────────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Animated bar chart with grouped bars.                                     │`}</div>
          <div>{`│  Configurable: width, height, barCount, speed                              │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><BarChart width={40} height={8} barCount={10} /></div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const bc = new BarChart(el, {                                            │`}</div>
          <div>{`  │   width: 32, height: 8, barCount: 8                                      │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ bc.start();                                                              │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 05. PlasmaOrb */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 05. PlasmaOrb ────────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Rippling plasma ░▒▓█ density effect.                                      │`}</div>
          <div>{`│  Configurable: width, height, speed                                        │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><PlasmaOrb width={20} height={12} /></div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const po = new PlasmaOrb(el, {                                           │`}</div>
          <div>{`  │   width: 15, height: 10, speed: 120                                      │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ po.start();                                                              │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 06. DotMatrix */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 06. DotMatrix ────────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Animates . chars with .░▒▓ density.                                       │`}</div>
          <div>{`│  Configurable: text, speed                                                 │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}><DotMatrix text={dotText} /></div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const dm = new DotMatrix(el, {                                           │`}</div>
          <div>{`  │   text: '..██..', speed: 100                                             │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ dm.start();                                                              │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 07. AsciiCard */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 07. AsciiCard ────────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Box-drawing card with title and content.                                  │`}</div>
          <div>{`│  Configurable: title, content, width                                       │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
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
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ new AsciiCard(el, {                                                      │`}</div>
          <div>{`  │   title: 'My Card',                                                      │`}</div>
          <div>{`  │   content: 'Content here',                                               │`}</div>
          <div>{`  │   width: 40, doubleBorder: false                                         │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 08. AsciiTable */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 08. AsciiTable ───────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Box-drawing table with headers and rows.                                  │`}</div>
          <div>{`│  Configurable: headers, rows, colWidths                                    │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
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
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ new AsciiTable(el, {                                                     │`}</div>
          <div>{`  │   headers: ['Key', 'Value'],                                             │`}</div>
          <div>{`  │   rows: [['foo','bar'],['baz','qux']]                                    │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 09. AsciiProgressBar */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 09. AsciiProgressBar ─────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Progress bar with optional animation.                                     │`}</div>
          <div>{`│  Configurable: value, max, width, label                                    │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (static):`}</div>
          <div>{`  `}<AsciiProgressBar value={75} width={30} /></div>
          <div>{`  Demo (animated):`}</div>
          <div>{`  `}<AsciiProgressBar value={100} width={30} label="LOADING" animated speed={40} /></div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const pb = new AsciiProgressBar(el, {                                    │`}</div>
          <div>{`  │   value: 75, width: 30,                                                  │`}</div>
          <div>{`  │   label: 'LOADING', animated: true                                       │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ pb.start();                                                              │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 10. StatusPanel */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 10. StatusPanel ──────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  System status panel with key-value pairs.                                 │`}</div>
          <div>{`│  Configurable: title, entries, width                                       │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo:`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <StatusPanel entries={{ Version: "2025.1", Components: "12", Status: "OPERATIONAL", Theme: "ACTIVE" }} />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ new StatusPanel(el, {                                                    │`}</div>
          <div>{`  │   title: '// SYSTEM STATUS',                                             │`}</div>
          <div>{`  │   entries: {Version:'2025.1',Status:'OK'}                                │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 11. NavMenu */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 11. NavMenu ──────────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Navigation ├ LINK ─ description entries.                                  │`}</div>
          <div>{`│  Configurable: items (label, desc, href)                                   │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
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
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ new NavMenu(el, {                                                        │`}</div>
          <div>{`  │   items: [                                                               │`}</div>
          <div>{`  │     {label:'HOME',desc:'Main',href:'/'},                                 │`}</div>
          <div>{`  │     {label:'INFO',desc:'About',href:'/info'}                             │`}</div>
          <div>{`  │   ]                                                                      │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 12. ThemeSwitcher */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 12. ThemeSwitcher ────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  Colour theme + day/night mode control.                                    │`}</div>
          <div>{`│  Configurable: defaultTheme, defaultMode                                   │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`  Demo (try it!):`}</div>
          <div className="demo-block" style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <ThemeSwitcher />
          </div>
          <div></div>
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ new ThemeSwitcher(el, {                                                  │`}</div>
          <div>{`  │   defaultTheme: 'm', defaultMode: 'night'                                │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 13. AsciiInput */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 13. AsciiInput ───────────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  ASCII box-drawing styled text input field.                                │`}</div>
          <div>{`│  Configurable: label, placeholder, width, prefix                           │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
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
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ new AsciiInput(el, {                                                     │`}</div>
          <div>{`  │   label: 'COMMAND',                                                      │`}</div>
          <div>{`  │   placeholder: 'type here...',                                           │`}</div>
          <div>{`  │   width: 40, doubleBorder: false,                                        │`}</div>
          <div>{`  │   onSubmit: (val) => console.log(val)                                    │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
          <div></div>
          <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>
        </div>

        {/* 15. Ascii3DRenderer */}
        <div style={{ marginBottom: "2rem" }}>
          <div>{`┌─ 15. Ascii3DRenderer ──────────────────────────────────────────────────────┐`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`│  3D model rendered as live ASCII art using Three.js + AsciiEffect.         │`}</div>
          <div>{`│  Configurable: geometry, charset, colors, rotation, controls               │`}</div>
          <div>{`│                                                                            │`}</div>
          <div>{`└────────────────────────────────────────────────────────────────────────────┘`}</div>
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
          <div>{`  Usage:`}</div>
          <div>{`  ┌──────────────────────────────────────────────────────────────────────────┐`}</div>
          <div>{`  │ const renderer = new Ascii3DRenderer(el, {                               │`}</div>
          <div>{`  │   geometry: 'torusknot',                                                 │`}</div>
          <div>{`  │   width: 500, height: 300,                                               │`}</div>
          <div>{`  │   charset: ' .:-+*=%@#',                                                 │`}</div>
          <div>{`  │   autoRotate: true, enableControls: true                                 │`}</div>
          <div>{`  │ });                                                                      │`}</div>
          <div>{`  │ renderer.start();                                                        │`}</div>
          <div>{`  └──────────────────────────────────────────────────────────────────────────┘`}</div>
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
