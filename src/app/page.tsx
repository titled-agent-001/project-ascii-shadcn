"use client";

import { useEffect, useRef } from "react";
import { BouncingBanner } from "@/registry/new-york/bouncing-banner/bouncing-banner";
import { GradientBanner } from "@/registry/new-york/gradient-banner/gradient-banner";
import { SineWaveChart } from "@/registry/new-york/sine-wave/sine-wave";
import { BarChart } from "@/registry/new-york/bar-chart/bar-chart";
import { PlasmaOrb } from "@/registry/new-york/plasma-orb/plasma-orb";
import { ThemeSwitcher } from "@/registry/new-york/theme-switcher/theme-switcher";
import { AsciiTabs } from "@/registry/new-york/ascii-tabs/ascii-tabs";
import { Ascii3DRenderer } from "@/registry/new-york/ascii-3d-renderer/ascii-3d-renderer";
import { measureCharWidth } from "@/registry/new-york/measure/measure";
import { useState } from "react";

const portrait = [
  "@@%%%%*#@@@%%%%%%%%%%%%@@@@%%%%%%%#%%%%%%%%%=...............",
  "%%%%%##%%@@%%%%%%%%%%@@@@@@@@@@@%%#%%%%%%%%%=...............",
  "%%%%#+*#%%%%%%%%%%%@@@%##*#%%%%%%++**#%%#%%%+...............",
  "%%###%#*#%%%%%%%%%@@@@@%*---=:=:=%+*+===+#%#-...............",
  "%#@@%+==+%@%%%%%%%@@@@@@@@%##*%%@@@@#==-===-................",
  "%%%@#===+%@@%%%%%%@@@@@@@@@@@#*%@@@%#=......................",
  "%%**%#+==+#%%%%%%%@@@@@@@@@@@@@%@@@@%=......................",
  "%#*+##%%*=*%%%%%%%@@@@@@@@@@@@@@@@@@@%#=....................",
  "%#+++=*%%%%@@%%%%%@@@@@@@@@@@@@@@@@@@@@%#:..................",
  "%#++*%%%%@%%@%%%%%@@@@@@@@@@@@@@%#=......................",
  "%#++%@@##%*+#%%%%%@@@@@@@@@@@@@@@@@@@#-...............:=%@=:",
  "%#+*@%#***%*+*%%%%@@@@@@@@@@@@@@@@@%%*:.............:-*#@@+:",
  "+%+*@@@%#%@%*=+%%%@@@@@@@@@@@@@@@%%#+:.............-*%%%@@+:",
  ":-=+*%@@@@@@@+=*%%%@@@@@@@@@@@@@@@@#:.............:=%%%*=-:.",
  ":::---=%%@@@@%+=*#==+#%%@@@@@@@@@@@*..............:=%%#=::..",
  "::::::--*%@@@%+=*#======+#%%%@@@@@%#:..............-=-:=%%=:",
  "%-:::::--+%%#====#======-===+*#%%%%%%%%%%%*:...:++::-=+#@@*:",
  "@%-:::-:::++======+==+#%%%%%@@@@@@@%%%%%%%%%=-::+=:=#%%%@@*-",
];

function PortraitAnimation({ width, border = "│" }: { width: number; border?: string }) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const dotChars = [".", "░", "▒", "▓"];
    const innerW = width - 2; // space between borders
    let e3 = 0;
    const render = () => {
      const lines: string[] = [];
      for (let r = 0; r < portrait.length; r++) {
        const orig = portrait[r];
        let line = "";
        for (let c = 0; c < innerW; c++) {
          if (c < orig.length) {
            if (orig[c] === ".") {
              const noise = Math.sin(c * 0.3 + r * 0.5 + e3) * 0.5 +
                Math.cos(c * 0.2 - r * 0.3 + e3 * 0.7) * 0.3 +
                Math.sin((c + r) * 0.15 + e3 * 0.5) * 0.2;
              const idx = Math.max(0, Math.min(dotChars.length - 1, Math.floor((noise + 1) / 2 * dotChars.length)));
              line += dotChars[idx];
            } else {
              line += orig[c];
            }
          } else {
            const noise = Math.sin(c * 0.3 + r * 0.5 + e3) * 0.5 +
              Math.cos(c * 0.2 - r * 0.3 + e3 * 0.7) * 0.3 +
              Math.sin((c + r) * 0.15 + e3 * 0.5) * 0.2;
            const idx = Math.max(0, Math.min(dotChars.length - 1, Math.floor((noise + 1) / 2 * dotChars.length)));
            line += dotChars[idx];
          }
        }
        lines.push(border + line + border);
      }
      el.textContent = lines.join("\n");
      e3 += 0.15;
    };
    render();
    const timer = setInterval(render, 100);
    return () => clearInterval(timer);
  }, [width, border]);

  return <pre ref={ref} style={{ margin: 0, font: "inherit", lineHeight: "inherit" }} />;
}

function ChartCard({ title, spanWidth, children }: { title: string; spanWidth: number; children: React.ReactNode }) {
  return (
    <div>
      <div>{"┌" + "─".repeat(spanWidth + 4) + "┐"}</div>
      <div>
        {"├─┤"}
        <BouncingBanner text={title} width={spanWidth} />
        {"├─┤"}
      </div>
      {children}
      <div>{"└" + "─".repeat(spanWidth + 4) + "┘"}</div>
    </div>
  );
}

export default function HomePage() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [W, setW] = useState(78);

  useEffect(() => {
    const el = layoutRef.current;
    if (!el) return;
    const measure = () => {
      const { cols } = measureCharWidth(el);
      setW(cols);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const H = "═";
  const V = "║";
  const inner = W - 4;
  const hline = (l: string, r: string) => l + H.repeat(W - 2) + r;
  const pad = (text: string) => {
    return text.split("\n").map((line) => {
      const t = line.substring(0, inner);
      return `${V} ${t}${" ".repeat(Math.max(0, inner - t.length))} ${V}`;
    }).join("\n");
  };

  const homeTitle = "//HOME" + " ".repeat(Math.max(0, inner - 6 - 3)) + "...";
  const homeSub = "..." + " ".repeat(Math.max(0, inner - 3 - "the beginning of sanctuary".length)) + "the beginning of sanctuary";

  const descLines = [
    "",
    "Neural architecture specializing in AI intelligence frameworks",
    "Designing autonomous systems for information analysis   ...",
    "CogSec meets artificial consciousness                  ...",
    "where design becomes liquid, and appeal flows in a new state",
  ];

  const menuLines = [
    " ├ INFO – a Digital Labyrinth of Thoughts & Concepts",
    " ├ DESIGN – Design Concepts",
    " ├ APPLICATION – useful utilities & tools",
    " └ COMPONENTS – ASCII UI component registry",
  ];

  const navTitle = "//NAVIGATION MENU" + " ".repeat(Math.max(0, inner - 17 - 3)) + "...";
  const bSpanW = W - 10;
  const clearSpanW = W - 10;
  const cpSpanW = W - 6;

  // Chart card width: each chart takes ~1/3 of W
  // We'll use a fixed reasonable width for the chart banners
  const chartSpanW = Math.max(8, Math.floor(W / 3) - 6);
  const chartW = chartSpanW + 4; // width inside the card borders

  return (
    <main className="p-4">
      <div
        ref={layoutRef}
        style={{
          width: "100%",
          fontFamily: "Menlo, Consolas, 'Courier New', monospace",
          whiteSpace: "normal",
          lineHeight: 1,
          fontSize: "min(12px, calc((100vw - 2rem) / 46.8))",
          gap: 0,
        }}
        className="home-layout"
      >
        {/* 1. Home header */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          {hline("╔", "╗") + "\n" + pad(homeTitle + "\n" + homeSub) + "\n" + hline("╠", "╣")}
        </div>

        {/* 2. Shimazu banner */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          <div>{V + " ┌" + "─".repeat(W - 6) + "┐ " + V}</div>
          <div>
            {V + " ├─┤"}
            <BouncingBanner text="[ASCIISYSTEMS]" width={bSpanW} />
            {"├─┤ " + V}
          </div>
          <div>{V + " └" + "─".repeat(W - 6) + "┘ " + V}</div>
          <div>{hline("╠", "╣")}</div>
        </div>

        {/* 3. Description */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          {pad(descLines.join("\n")) + "\n" + hline("╠", "╣")}
        </div>

        {/* 4. System status */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          {pad("// SYSTEM STATUS\nVersion: 2025.1") + "\n" + hline("╠", "╣")}
        </div>

        {/* 5. Character animation with tabs */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          <AsciiTabs
            tabs={[
              {
                label: "ARES",
                content: <PortraitAnimation width={W} />,
              },
              {
                label: "MORPH",
                content: <Ascii3DRenderer geometry="horse" width={Math.min(400, (W - 4) * 8)} height={portrait.length * 13} autoRotate={false} />,
              },
            ]}
            width={W - 2}
          />
          <div>{hline("╠", "╣")}</div>
        </div>

        {/* 6. Mobile disclaimer */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          {pad("[MOBILE USER DISCLAIMER]: RENDERING NOT OPTIMISED FOR MOBILE") + "\n" + hline("╚", "╝")}
        </div>

        {/* 7. Navigation header + clear banner */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          {hline("╔", "╗") + "\n" + pad(navTitle) + "\n" + hline("╠", "╣")}
          {"\n"}
          <div>{V + " ┌" + "─".repeat(W - 6) + "┐ " + V}</div>
          <div>
            {V + " ├─┤"}
            <GradientBanner text="[CLEAR]" width={clearSpanW} />
            {"├─┤ " + V}
          </div>
          <div>{V + " └" + "─".repeat(W - 6) + "┘ " + V}</div>
          <div>{hline("╠", "╣")}</div>
        </div>

        {/* 8. Nav menu items */}
        <div
          className="section section-full"
          style={{ whiteSpace: "pre" }}
        >
          {menuLines.map((line, i) => (
            <div
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (line.includes("INFO")) window.location.href = "/info";
                else if (line.includes("DESIGN")) window.location.href = "/design";
                else if (line.includes("APPLICATION")) window.location.href = "/application";
                else if (line.includes("COMPONENTS")) window.location.href = "/components";
              }}
            >
              {pad(line)}
            </div>
          ))}
          {"\n" + hline("╚", "╝")}
        </div>

        {/* 9. Charts row */}
        <div className="charts-row section-full" style={{ whiteSpace: "pre" }}>
          <div className="section" style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
            <ChartCard title="[SIGNAL]" spanWidth={chartSpanW}>
              <SineWaveChart width={chartW} height={8} />
            </ChartCard>
          </div>
          <div className="section" style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
            <ChartCard title="[MATTER]" spanWidth={chartSpanW}>
              <BarChart width={chartW} height={8} barCount={8} />
            </ChartCard>
          </div>
          <div className="section" style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
            <div>
              <div>{"┌" + "─".repeat(chartW) + "┐"}</div>
              <PlasmaOrb width={chartW + 2} height={10} />
              <div>{"└" + "─".repeat(chartW) + "┘"}</div>
            </div>
          </div>
        </div>

        {/* 10. Control panel */}
        <div className="section section-full" style={{ whiteSpace: "pre" }}>
          <div>{"┌" + "─".repeat(W - 2) + "┐"}</div>
          <div>
            {"├─┤"}
            <BouncingBanner text="[CONTROL-PANEL]" width={cpSpanW} />
            {"├─┤"}
          </div>
          <div>{"├─┬" + "─".repeat(W - 6) + "┬─┤"}</div>
          <ThemeSwitcher width={W - 4} />
          <div>{"└" + "─".repeat(W - 2) + "┘"}</div>
        </div>
      </div>

      <style jsx>{`
        .home-layout {
          width: 100%;
          font-family: Menlo, Consolas, 'Courier New', monospace;
          white-space: normal;
          line-height: 1;
          font-size: min(12px, calc((100vw - 2rem) / 46.8));
          gap: 0;
        }
        .section {
          overflow: hidden;
          min-width: 0;
          white-space: pre;
          padding: 0;
          margin: 0;
          line-height: 1;
        }
        .section div, .section { display: block; }
        .section *, .section div, .section span {
          margin: 0; padding: 0; line-height: 1;
          font-family: inherit; font-size: inherit;
        }
        .charts-row { display: flex; gap: 0; }
        .charts-row > .section { flex: 1; min-width: 0; }
        @media (min-width: 640px) {
          .home-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            font-size: min(12px, calc((100vw - 2rem) / 93.6));
          }
          .section-full { grid-column: 1 / -1; }
          .charts-row { grid-column: 1 / -1; }
        }
      `}</style>
    </main>
  );
}
