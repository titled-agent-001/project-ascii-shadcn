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
import { AsciiGutter } from "@/registry/new-york/ascii-gutter/ascii-gutter";

const dotText = [
  "..........██...........",
  ".........████..........",
  "........██..██.........",
  ".......██....██........",
  "......██████████.......",
  ".....██........██......",
  "....██..........██.....",
].join("\n");


const BOUNCING_BANNER_SRC = `"use client";

import { useEffect, useRef } from "react";

export interface BouncingBannerProps {
  text: string;
  width: number;
  speed?: number;
}

export function BouncingBanner({ text, width, speed = 150 }: BouncingBannerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = 0;
    const render = () => {
      const n = text.length;
      if (width <= n) { el.textContent = text.substring(0, width); return; }
      const leftPad = Math.floor((width - n) / 2);
      const rightPad = width - n - leftPad;
      const i = t % Math.max(leftPad, rightPad);
      const c = Math.min(i, leftPad - 1);
      const a = Math.min(i, rightPad - 1);
      el.textContent =
        "░".repeat(c) + (c < leftPad ? "█" : "") + "░".repeat(Math.max(0, leftPad - c - 1)) +
        text +
        "░".repeat(Math.max(0, rightPad - a - 1)) + (a < rightPad ? "█" : "") + "░".repeat(a);
      t = (t + 1) % 100;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [text, width, speed]);

  return <span ref={ref} />;
}
`;

const GRADIENT_BANNER_SRC = `"use client";

import { useEffect, useRef } from "react";

export interface GradientBannerProps {
  text: string;
  width: number;
  speed?: number;
}

export function GradientBanner({ text, width, speed = 150 }: GradientBannerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = 0;
    const n = text.length;
    if (width <= n) { el.textContent = text.substring(0, width); return; }
    const clp = Math.floor((width - n) / 2);
    const crp = width - n - clp;
    const maxP = Math.max(clp, crp);

    const render = () => {
      const ci = t % (maxP * 2);
      const pos = ci < maxP ? ci : maxP * 2 - ci - 1;
      let left = "";
      for (let j = 0; j < clp; j++) {
        const dist = Math.abs(j - Math.min(pos, clp - 1));
        left += dist === 0 ? "█" : dist === 1 ? "▓" : dist === 2 ? "▒" : "░";
      }
      let right = "";
      for (let j = 0; j < crp; j++) {
        const dist = Math.abs(j - Math.min(pos, crp - 1));
        right += dist === 0 ? "█" : dist === 1 ? "▓" : dist === 2 ? "▒" : "░";
      }
      el.textContent = left + text + right;
      t = (t + 1) % (maxP * 2);
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [text, width, speed]);

  return <span ref={ref} />;
}
`;

const SINE_WAVE_SRC = `"use client";

import { useEffect, useRef } from "react";

export interface SineWaveProps {
  width?: number;
  height?: number;
  speed?: number;
}

export function SineWaveChart({ width = 40, height = 8, speed = 100 }: SineWaveProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const rows: HTMLDivElement[] = [];
    for (let i = 0; i < height; i++) {
      const row = document.createElement("div");
      rows.push(row);
      el.appendChild(row);
    }
    let e = 0;
    const render = () => {
      for (let row = 0; row < height; row++) {
        let line = "";
        for (let col = 0; col < width; col++) {
          const h = Math.max(0, Math.min(height - 1, Math.round(height / 2 + 0.6 * (
            3.2 * Math.sin((0.5 * col + e) * 0.3) +
            1.8 * Math.sin((0.5 * col + e) * 0.5) +
            Math.sin((0.5 * col + e) * 0.7)
          ))));
          line += (height - 1 - row <= h) ? "█" : " ";
        }
        rows[row].textContent = line;
      }
      e += 0.5;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [width, height, speed]);

  return <div ref={ref} />;
}
`;

const BAR_CHART_SRC = `"use client";

import { useEffect, useRef } from "react";

export interface BarChartProps {
  width?: number;
  height?: number;
  barCount?: number;
  speed?: number;
}

export function BarChart({ width = 32, height = 8, barCount = 8, speed = 100 }: BarChartProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const rows: HTMLDivElement[] = [];
    for (let i = 0; i < height; i++) {
      const row = document.createElement("div");
      rows.push(row);
      el.appendChild(row);
    }
    let e = 0;
    const render = () => {
      const barWidth = Math.max(1, Math.floor(width / barCount) - 1);
      const gap = Math.floor(width / barCount);
      const grid: string[][] = Array.from({ length: height }, () => Array(width).fill(" "));
      for (let b = 0; b < barCount; b++) {
        const x = gap * b;
        const h = Math.floor((0.4 * Math.sin((b + 0.1 * e) * 0.8) + 0.3 * Math.cos(1.3 * b + 0.15 * e) + 0.5) * height);
        for (let row = 0; row < height; row++) {
          if (height - 1 - row < h) {
            for (let dx = 0; dx < barWidth && x + dx < width; dx++) grid[row][x + dx] = "█";
          }
        }
      }
      for (let i = 0; i < height; i++) rows[i].textContent = grid[i].join("");
      e += 0.5;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [width, height, barCount, speed]);

  return <div ref={ref} />;
}
`;

const PLASMA_ORB_SRC = `"use client";

import { useEffect, useRef } from "react";

export interface PlasmaOrbProps {
  width?: number;
  height?: number;
  speed?: number;
}

export function PlasmaOrb({ width = 15, height = 10, speed = 120 }: PlasmaOrbProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const chars = [" ", "░", "▒", "▓", "█"];
    const rows: HTMLDivElement[] = [];
    for (let i = 0; i < height; i++) {
      const row = document.createElement("div");
      rows.push(row);
      el.appendChild(row);
    }
    let e = 0;
    const cx = width / 2, cy = height / 2;
    const render = () => {
      for (let row = 0; row < height; row++) {
        let line = "";
        for (let col = 0; col < width; col++) {
          const x = col - cx, y = row - cy;
          const dist = Math.sqrt(x * x + y * y);
          const val = Math.floor((
            0.5 * Math.sin(0.8 * dist - 0.5 * e) +
            0.3 * Math.sin(1.2 * dist - 0.3 * e) +
            0.2 * Math.cos(0.5 * dist - 0.4 * e) +
            0.3 * Math.sin(0.3 * e) +
            0.15 * Math.sin(3 * Math.atan2(y, x) + 0.2 * e) + 1.5
          ) / 3 * chars.length);
          line += chars[Math.max(0, Math.min(chars.length - 1, val))];
        }
        rows[row].textContent = line;
      }
      e += 0.15;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [width, height, speed]);

  return <div ref={ref} />;
}
`;

const DOT_MATRIX_SRC = `"use client";

import { useEffect, useRef } from "react";

export interface DotMatrixProps {
  text: string;
  speed?: number;
}

export function DotMatrix({ text, speed = 100 }: DotMatrixProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const originalLines = text.split("\\n");
    const chars = [".", "░", "▒", "▓"];
    const rows: HTMLDivElement[] = [];
    for (let i = 0; i < originalLines.length; i++) {
      const row = document.createElement("div");
      rows.push(row);
      el.appendChild(row);
    }
    let e = 0;
    const render = () => {
      for (let r = 0; r < originalLines.length; r++) {
        const orig = originalLines[r];
        let line = "";
        for (let c = 0; c < orig.length; c++) {
          if (orig[c] === ".") {
            const noise = Math.sin(c * 0.3 + r * 0.5 + e) * 0.5 +
              Math.cos(c * 0.2 - r * 0.3 + e * 0.7) * 0.3 +
              Math.sin((c + r) * 0.15 + e * 0.5) * 0.2;
            const idx = Math.max(0, Math.min(chars.length - 1, Math.floor((noise + 1) / 2 * chars.length)));
            line += chars[idx];
          } else {
            line += orig[c];
          }
        }
        rows[r].textContent = line;
      }
      e += 0.15;
    };
    render();
    const timer = setInterval(render, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <div ref={ref} />;
}
`;

const ASCII_CARD_SRC = `"use client";

export interface AsciiCardProps {
  title?: string;
  content?: string;
  width?: number;
  doubleBorder?: boolean;
}

export function AsciiCard({ title, content, width = 40, doubleBorder = false }: AsciiCardProps) {
  const [tl, tr, bl, br, h, v, ml, mr] = doubleBorder
    ? ["╔", "╗", "╚", "╝", "═", "║", "╠", "╣"]
    : ["┌", "┐", "└", "┘", "─", "│", "├", "┤"];

  const padLine = (line: string) => {
    const trimmed = line.substring(0, width - 4);
    return \`\${v} \${trimmed}\${" ".repeat(Math.max(0, width - 4 - trimmed.length))} \${v}\`;
  };

  const hline = (l: string, r: string) => \`\${l}\${h.repeat(width - 2)}\${r}\`;

  const lines: string[] = [];
  lines.push(hline(tl, tr));
  if (title !== undefined) {
    lines.push(...title.split("\\n").map(padLine));
    if (content !== undefined) lines.push(hline(ml, mr));
  }
  if (content !== undefined) {
    lines.push(...content.split("\\n").map(padLine));
  }
  lines.push(hline(bl, br));

  return <pre style={{ margin: 0, font: "inherit", lineHeight: "inherit" }}>{lines.join("\\n")}</pre>;
}
`;

const ASCII_TABLE_SRC = `"use client";

export interface AsciiTableProps {
  headers: string[];
  rows: string[][];
  colWidths?: number[];
  width?: number;
}

export function AsciiTable({ headers, rows, colWidths, width = 60 }: AsciiTableProps) {
  const cols = headers.length;

  const widths = colWidths || (() => {
    const natural = headers.map((h, i) => {
      let max = h.length;
      for (const row of rows) if (row[i] && row[i].length > max) max = row[i].length;
      return max + 2;
    });
    const usedByBorders = cols - 1 + 2;
    const available = width - usedByBorders;
    const naturalSum = natural.reduce((a, b) => a + b, 0);
    if (naturalSum <= available) {
      const extra = available - naturalSum;
      return natural.map((w, i) => w + (i === cols - 1 ? extra : 0));
    }
    return natural;
  })();

  const cell = (text: string, w: number) => \` \${text}\${" ".repeat(Math.max(0, w - text.length - 2))} \`;
  const hLine = (l: string, m: string, r: string, f: string) =>
    l + widths.map((w) => f.repeat(w)).join(m) + r;

  const lines: string[] = [];
  lines.push(hLine("╔", "╤", "╗", "═"));
  lines.push("║" + headers.map((h, i) => cell(h, widths[i])).join("│") + "║");
  lines.push(hLine("╠", "╪", "╣", "═"));
  for (const row of rows) {
    lines.push("║" + row.map((c, i) => cell(c || "", widths[i])).join("│") + "║");
  }
  lines.push(hLine("╚", "╧", "╝", "═"));

  return <pre style={{ margin: 0, font: "inherit", lineHeight: "inherit" }}>{lines.join("\\n")}</pre>;
}
`;

const PROGRESS_BAR_SRC = `"use client";

import { useEffect, useRef, useState } from "react";

export interface ProgressBarProps {
  value: number;
  max?: number;
  width?: number;
  label?: string;
  animated?: boolean;
  speed?: number;
}

export function AsciiProgressBar({ value, max = 100, width = 30, label, animated = false, speed = 80 }: ProgressBarProps) {
  const [current, setCurrent] = useState(animated ? 0 : value);

  useEffect(() => {
    if (!animated) { setCurrent(value); return; }
    setCurrent(0);
    let c = 0;
    const timer = setInterval(() => {
      c++;
      if (c >= value) { setCurrent(value); clearInterval(timer); }
      else setCurrent(c);
    }, speed);
    return () => clearInterval(timer);
  }, [value, animated, speed]);

  const pct = Math.min(1, Math.max(0, current / max));
  const filled = Math.round(pct * width);
  const empty = width - filled;
  const pctStr = \`\${Math.round(pct * 100)}%\`;
  const bar = "█".repeat(filled) + "░".repeat(empty);
  const text = label ? \`\${bar} [\${label}] \${pctStr}\` : \`\${bar} \${pctStr}\`;

  return <span>{text}</span>;
}
`;

const STATUS_PANEL_SRC = `"use client";

export interface StatusPanelProps {
  title?: string;
  entries: Record<string, string>;
  width?: number;
}

export function StatusPanel({ title = "// SYSTEM STATUS", entries, width = 40 }: StatusPanelProps) {
  const lines: string[] = [];
  lines.push("╔" + "═".repeat(width - 2) + "╗");
  lines.push("║ " + title + " ".repeat(Math.max(0, width - 3 - title.length)) + "║");
  lines.push("╠" + "═".repeat(width - 2) + "╣");
  for (const [k, v] of Object.entries(entries)) {
    const row = \`\${k}: \${v}\`;
    lines.push("║ " + row + " ".repeat(Math.max(0, width - 3 - row.length)) + "║");
  }
  lines.push("╚" + "═".repeat(width - 2) + "╝");

  return <pre style={{ margin: 0, font: "inherit", lineHeight: "inherit" }}>{lines.join("\\n")}</pre>;
}
`;

const NAV_MENU_SRC = `"use client";

import Link from "next/link";

export interface NavMenuItem {
  label: string;
  description: string;
  href: string;
}

export interface NavMenuProps {
  items: NavMenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  return (
    <div>
      {items.map((item, i) => {
        const prefix = i < items.length - 1 ? "├" : "└";
        return (
          <div key={item.label}>
            <Link href={item.href} className="hover:underline transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
              {\` \${prefix} \${item.label}\`}
            </Link>
            {\` ─ \${item.description}\`}
          </div>
        );
      })}
    </div>
  );
}
`;

const THEME_SWITCHER_SRC = `"use client";

import { useTheme, THEMES, MODES } from "@/lib/theme-context";

export interface ThemeSwitcherProps {
  width?: number;
}

export function ThemeSwitcher({ width = 40 }: ThemeSwitcherProps) {
  const { theme, mode, setTheme, setMode } = useTheme();
  const inner = width - 2;

  return (
    <div>
      <div>{"┌" + "─".repeat(inner) + "┐"}</div>
      <div>
        {"│ COLOUR "}
        {THEMES.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={\`hover:underline transition-colors\${t === theme ? " font-bold" : ""}\`}
            style={{ background: "transparent", border: "none", color: "inherit", font: "inherit", padding: 0, cursor: "pointer" }}
          >
            {\`[\${t.toUpperCase()}]\`}
          </button>
        ))}
        {" ".repeat(Math.max(0, inner - " COLOUR ".length - "[M][G][R][B][O]".length - 1))}
        {" │"}
      </div>
      <div>{"│" + " ".repeat(inner) + "│"}</div>
      <div>
        {"│ DAY/NIGHT "}
        {MODES.map((m, i) => (
          <span key={m}>
            <button
              onClick={() => setMode(m)}
              className={\`hover:underline transition-colors\${m === mode ? " font-bold" : ""}\`}
              style={{ background: "transparent", border: "none", color: "inherit", font: "inherit", padding: 0, cursor: "pointer" }}
            >
              {\`[\${m.toUpperCase()}]\`}
            </button>
            {i === 0 ? "   " : ""}
          </span>
        ))}
        {" ".repeat(Math.max(0, inner - " DAY/NIGHT ".length - "[DAY]   [NIGHT]".length - 1))}
        {" │"}
      </div>
      <div>{"└" + "─".repeat(inner) + "┘"}</div>
    </div>
  );
}
`;

const ASCII_INPUT_SRC = `"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface AsciiInputProps {
  label?: string;
  placeholder?: string;
  width?: number;
  doubleBorder?: boolean;
  prefix?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

export function AsciiInput({
  label,
  placeholder = "",
  width = 40,
  doubleBorder = false,
  prefix = "> ",
  value: initialValue = "",
  onChange,
  onSubmit,
}: AsciiInputProps) {
  const [val, setVal] = useState(initialValue);
  const [focused, setFocused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!focused) { setCursorVisible(false); return; }
    setCursorVisible(true);
    const timer = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(timer);
  }, [focused]);

  const chars = doubleBorder
    ? { tl: "╔", tr: "╗", bl: "╚", br: "╝", h: "═", v: "║" }
    : { tl: "┌", tr: "┐", bl: "└", br: "┘", h: "─", v: "│" };

  const labelStr = label ? \` \${label} \` : "";
  const topFill = width - 2 - labelStr.length - 1;
  const topLine = chars.tl + chars.h + labelStr + chars.h.repeat(Math.max(0, topFill)) + chars.tr;

  const isEmpty = val.length === 0;
  const text = isEmpty ? placeholder : val;
  const cursor = focused && cursorVisible ? (isEmpty ? "_" : "█") : " ";
  const contentText = prefix + text + cursor;
  const innerW = width - 2;
  const padded = contentText.length < innerW
    ? contentText + " ".repeat(innerW - contentText.length)
    : contentText.slice(0, innerW);
  const midLine = chars.v + padded + chars.v;
  const botLine = chars.bl + chars.h.repeat(width - 2) + chars.br;

  return (
    <div style={{ position: "relative" }}>
      <input
        ref={inputRef}
        type="text"
        value={val}
        onChange={(e) => { setVal(e.target.value); onChange?.(e.target.value); }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={(e) => { if (e.key === "Enter") onSubmit?.(val); }}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0, overflow: "hidden" }}
      />
      <pre
        style={{ margin: 0, font: "inherit", lineHeight: "inherit", cursor: "text" }}
        onClick={() => inputRef.current?.focus()}
      >
        {topLine + "\\n" + midLine + "\\n" + botLine}
      </pre>
    </div>
  );
}
`;

const ASCII_3D_RENDERER_SRC = `"use client";

import { useEffect, useRef } from "react";
import type * as THREE from "three";

export interface Ascii3DRendererProps {
  width?: number;
  height?: number;
  charset?: string;
  geometry?: "torusknot" | "sphere" | "cube" | "torus" | "cylinder" | "horse";
  modelUrl?: string;
  modelScale?: number;
  color?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
  enableControls?: boolean;
  invert?: boolean;
}

export function Ascii3DRenderer({
  width = 500,
  height = 300,
  charset = " .:-+*=%@#",
  geometry = "torusknot",
  modelUrl,
  modelScale,
  color = "#ffffff",
  autoRotate = true,
  rotationSpeed = 1,
  enableControls = true,
  invert = false,
}: Ascii3DRendererProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animId: number | null = null;
    let renderer: any = null;
    let themeObserver: MutationObserver | null = null;

    // Dynamic import to avoid SSR issues with Three.js
    Promise.all([
      import("three"),
      import("three/examples/jsm/effects/AsciiEffect.js"),
      import("three/examples/jsm/controls/OrbitControls.js"),
      import("three/examples/jsm/loaders/GLTFLoader.js"),
    ]).then(([THREE, { AsciiEffect }, { OrbitControls }, { GLTFLoader }]) => {
      if (!el) return;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#000000");

      const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
      camera.position.z = 5;

      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambient);
      const point = new THREE.PointLight(0xffffff, 1.5, 100);
      point.position.set(10, 10, 10);
      scene.add(point);
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(-5, 5, 5);
      scene.add(dir);

      let mesh: THREE.Object3D | null = null;
      let mixer: THREE.AnimationMixer | null = null;
      const clock = new THREE.Clock();

      const gltfUrl = modelUrl ?? (geometry === "horse" ? "/models/Horse.glb" : null);

      if (gltfUrl) {
        const loader = new GLTFLoader();
        loader.load(gltfUrl, (gltf: any) => {
          const model = gltf.scene;
          const scale = modelScale ?? (geometry === "horse" ? 0.02 : 1);
          model.scale.set(scale, scale, scale);
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          model.traverse((child: any) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({ color: new THREE.Color(color) });
            }
          });
          scene.add(model);
          mesh = model;
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip: THREE.AnimationClip) => {
              mixer!.clipAction(clip).play();
            });
          }
        });
      } else {
        let geo: THREE.BufferGeometry;
        switch (geometry) {
          case "sphere": geo = new THREE.SphereGeometry(2, 32, 32); break;
          case "cube": geo = new THREE.BoxGeometry(2.5, 2.5, 2.5); break;
          case "torus": geo = new THREE.TorusGeometry(2, 0.6, 16, 100); break;
          case "cylinder": geo = new THREE.CylinderGeometry(1.5, 1.5, 3, 32); break;
          default: geo = new THREE.TorusKnotGeometry(1.5, 0.5, 128, 16); break;
        }
        const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(color) });
        mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);
      }

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);

      const effect = new AsciiEffect(renderer, charset, { invert });
      effect.setSize(width, height);

      const computedStyle = getComputedStyle(document.body);
      effect.domElement.style.color = computedStyle.color;
      effect.domElement.style.backgroundColor = computedStyle.backgroundColor;
      effect.domElement.style.fontFamily = "Menlo, Consolas, 'Courier New', monospace";
      effect.domElement.style.fontSize = "10px";
      effect.domElement.style.lineHeight = "10px";
      effect.domElement.style.overflow = "hidden";
      el.appendChild(effect.domElement);

      let controls: any = null;
      if (enableControls) {
        controls = new OrbitControls(camera, effect.domElement);
        controls.enableDamping = true;
      }

      themeObserver = new MutationObserver(() => {
        const style = getComputedStyle(document.body);
        effect.domElement.style.color = style.color;
        effect.domElement.style.backgroundColor = style.backgroundColor;
      });
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) mixer.update(delta);
        if (autoRotate && mesh) mesh.rotation.y += 0.01 * rotationSpeed;
        controls?.update();
        effect.render(scene, camera);
      };
      animate();
    });

    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
      themeObserver?.disconnect();
      renderer?.dispose();
      if (el) el.innerHTML = "";
    };
  }, [width, height, charset, geometry, modelUrl, modelScale, color, autoRotate, rotationSpeed, enableControls, invert]);

  return <div ref={ref} style={{ width, height, overflow: "hidden" }} />;
}
`;

const ASCII_TABS_SRC = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AsciiTabsProps {
  tabs: Array<{
    label: string;
    content: React.ReactNode | string;
  }>;
  defaultTab?: number;
  width?: number;
  doubleBorder?: boolean;
  onChange?: (index: number) => void;
  className?: string;
}

export function AsciiTabs({
  tabs,
  defaultTab = 0,
  width = 60,
  doubleBorder = false,
  onChange,
  className,
}: AsciiTabsProps) {
  const [active, setActive] = React.useState(defaultTab);

  const [tl, tr, bl, br, h, v] = doubleBorder
    ? ["╔", "╗", "╚", "╝", "═", "║"]
    : ["┌", "┐", "└", "┘", "─", "│"];

  const inactiveL = doubleBorder ? "╶" : "╶";
  const inactiveR = doubleBorder ? "╴" : "╴";

  const handleSelect = (i: number) => {
    setActive(i);
    onChange?.(i);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = (active + 1) % tabs.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = (active - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = tabs.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    handleSelect(next);
  };

  // Build header line
  const buildHeaders = (): string => {
    const parts: string[] = [];
    for (let i = 0; i < tabs.length; i++) {
      const label = tabs[i].label;
      if (i === active) {
        parts.push(\`\${tl}\${h}\${h}\${label}\${h}\${h}\${tr}\`);
      } else {
        parts.push(\`\${inactiveL}\${h}\${h}\${label}\${h}\${h}\${inactiveR}\`);
      }
      if (i < tabs.length - 1) parts.push(" ");
    }
    return parts.join("");
  };

  // Build the connection line between tabs and content
  const buildConnectionLine = (): string => {
    const header = buildHeaders();
    const headerLen = header.length;
    // Find active tab position in the header string
    const activeLabel = tabs[active].label;
    const activeTabStr = \`\${tl}\${h}\${h}\${activeLabel}\${h}\${h}\${tr}\`;
    const activeStart = header.indexOf(activeTabStr);
    const activeEnd = activeStart + activeTabStr.length - 1;

    const lineWidth = Math.max(width, headerLen);
    const chars: string[] = [];
    for (let i = 0; i < lineWidth; i++) {
      if (i === 0) {
        // If active tab starts at 0, use the left border of content
        if (activeStart === 0) {
          chars.push(v);
        } else {
          chars.push(doubleBorder ? "╔" : "┌");
        }
      } else if (i === lineWidth - 1) {
        if (activeEnd === lineWidth - 1) {
          chars.push(v);
        } else {
          chars.push(doubleBorder ? "╗" : "┐");
        }
      } else if (i === activeStart) {
        // Bottom-right of active tab connects to content border
        chars.push(doubleBorder ? "╝" : "┘");
      } else if (i === activeEnd) {
        chars.push(doubleBorder ? "╚" : "└");
      } else if (i > activeStart && i < activeEnd) {
        chars.push(" ");
      } else {
        chars.push(h);
      }
    }
    return chars.join("");
  };

  const padLine = (text: string): string => {
    const header = buildHeaders();
    const lineWidth = Math.max(width, header.length);
    const inner = lineWidth - 2;
    const trimmed = text.substring(0, inner);
    return \`\${v}\${trimmed}\${" ".repeat(Math.max(0, inner - trimmed.length))}\${v}\`;
  };

  const header = buildHeaders();
  const lineWidth = Math.max(width, header.length);
  const bottomLine = \`\${bl}\${h.repeat(lineWidth - 2)}\${br}\`;

  const contentStr =
    typeof tabs[active].content === "string" ? (tabs[active].content as string) : null;

  return (
    <div
      className={cn("font-mono whitespace-pre leading-[1.2em]", className)}
      role="tablist"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="ASCII Tabs"
    >
      {/* Tab headers */}
      <div className="flex">
        {tabs.map((tab, i) => (
          <React.Fragment key={i}>
            <span
              role="tab"
              aria-selected={i === active}
              className={cn(
                "cursor-pointer select-none",
                i === active ? "opacity-100" : "opacity-60 hover:opacity-80"
              )}
              onClick={() => handleSelect(i)}
            >
              {i === active
                ? \`\${tl}\${h}\${h}\${tab.label}\${h}\${h}\${tr}\`
                : \`\${inactiveL}\${h}\${h}\${tab.label}\${h}\${h}\${inactiveR}\`}
            </span>
            {i < tabs.length - 1 && <span>{" "}</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Connection line */}
      <div>{buildConnectionLine()}</div>

      {/* Content area */}
      {contentStr !== null ? (
        <>
          {contentStr.split("\\n").map((line, i) => (
            <div key={i}>{padLine(\` \${line}\`)}</div>
          ))}
          <div>{padLine("")}</div>
        </>
      ) : (
        <div className="flex">
          <span>{v}</span>
          <div className="flex-1 px-2 py-1">{tabs[active].content}</div>
          <span>{v}</span>
        </div>
      )}

      {/* Bottom border */}
      <div>{bottomLine}</div>
    </div>
  );
}
`;

const ASCII_GUTTER_SRC = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AsciiGutterProps {
  char?: string;
  side?: "left" | "right" | "both";
  gap?: number;
  opacity?: number;
  children: React.ReactNode;
  className?: string;
}

export function AsciiGutter({
  char = ">",
  side = "left",
  gap = 1,
  opacity = 0.4,
  children,
  className,
}: AsciiGutterProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const gutterLeftRef = React.useRef<HTMLDivElement>(null);
  const gutterRightRef = React.useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = React.useState(0);

  React.useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      const style = window.getComputedStyle(el);
      const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2;
      const totalHeight = el.scrollHeight;
      const lines = Math.max(1, Math.round(totalHeight / lineHeight));
      setLineCount(lines);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const mo = new MutationObserver(measure);
    mo.observe(el, { childList: true, subtree: true, characterData: true });
    return () => { ro.disconnect(); mo.disconnect(); };
  }, [children]);

  const gutterChars = Array.from({ length: lineCount }, () => char).join("\\n");

  return (
    <div
      className={cn("font-mono flex", className)}
      style={{ lineHeight: "inherit", fontSize: "inherit" }}
    >
      {(side === "left" || side === "both") && (
        <div
          ref={gutterLeftRef}
          className="select-none shrink-0 whitespace-pre"
          style={{ opacity, paddingRight: \\\`\\\${gap}ch\\\`, lineHeight: "inherit", fontSize: "inherit" }}
          aria-hidden="true"
        >
          {gutterChars}
        </div>
      )}
      <div ref={contentRef} className="flex-1 min-w-0" style={{ lineHeight: "inherit", fontSize: "inherit" }}>
        {children}
      </div>
      {(side === "right" || side === "both") && (
        <div
          ref={gutterRightRef}
          className="select-none shrink-0 whitespace-pre"
          style={{ opacity, paddingLeft: \\\`\\\${gap}ch\\\`, lineHeight: "inherit", fontSize: "inherit" }}
          aria-hidden="true"
        >
          {gutterChars}
        </div>
      )}
    </div>
  );
}`;

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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/bouncing-banner.json"` },
                { label: "Manual", content: BOUNCING_BANNER_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/gradient-banner.json"` },
                { label: "Manual", content: GRADIENT_BANNER_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/sine-wave.json"` },
                { label: "Manual", content: SINE_WAVE_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/bar-chart.json"` },
                { label: "Manual", content: BAR_CHART_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/plasma-orb.json"` },
                { label: "Manual", content: PLASMA_ORB_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/dot-matrix.json"` },
                { label: "Manual", content: DOT_MATRIX_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/ascii-card.json"` },
                { label: "Manual", content: ASCII_CARD_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/ascii-table.json"` },
                { label: "Manual", content: ASCII_TABLE_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/progress-bar.json"` },
                { label: "Manual", content: PROGRESS_BAR_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/status-panel.json"` },
                { label: "Manual", content: STATUS_PANEL_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/nav-menu.json"` },
                { label: "Manual", content: NAV_MENU_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/theme-switcher.json"` },
                { label: "Manual", content: THEME_SWITCHER_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/ascii-input.json"` },
                { label: "Manual", content: ASCII_INPUT_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/ascii-3d-renderer.json"` },
                { label: "Manual", content: ASCII_3D_RENDERER_SRC },
              ]}
              width={70}
            />
          </div>
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
          <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
            <AsciiTabs
              tabs={[
                { label: "CLI", content: `npx shadcn add "${BASE}/r/ascii-tabs.json"` },
                { label: "Manual", content: ASCII_TABS_SRC },
              ]}
              width={70}
            />
          </div>
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

        {/* 16. AsciiGutter */}
        <div></div>
        <div>{`┌─ 16. AsciiGutter ─────────────────────────────────────────────────────────┐`}</div>
        <div></div>
        <div>{`  A side-gutter component that renders repeating characters`}</div>
        <div>{`  (like >) along the edge of content, matching line count.`}</div>
        <div>{`  Configurable: char, side, gap, opacity`}</div>
        <div></div>
        <div>{`  Demo:`}</div>
        <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
          <AsciiGutter char=">" side="left" gap={1} opacity={0.5}>
            <div style={{ whiteSpace: "pre", fontFamily: "inherit" }}>
              {`Line one of gutter content\nLine two of gutter content\nLine three of gutter content\nLine four of gutter content`}
            </div>
          </AsciiGutter>
        </div>
        <div>{`  Installation:`}</div>
        <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
          <AsciiTabs
            tabs={[
              { label: "CLI", content: `npx shadcn add "${BASE}/r/ascii-gutter.json"` },
              { label: "Manual", content: ASCII_GUTTER_SRC },
            ]}
            width={70}
          />
        </div>
        <div></div>
        <div>{`  Props:`}</div>
        <div style={{ margin: ".25rem 0 .5rem 2ch" }}>
          <AsciiTable
            headers={["Prop", "Type", "Default", "Description"]}
            rows={[
              ["char", "string", '">"', "Gutter character"],
              ["side", '"left"|"right"|"both"', '"left"', "Gutter position"],
              ["gap", "number", "1", "Gap in ch units"],
              ["opacity", "number", "0.4", "Gutter opacity"],
              ["children", "ReactNode", "—", "Content to wrap"],
            ]}
          />
        </div>
        <div></div>
        <div>{`  Usage:`}</div>
        <div></div>
        <div>{`    import { AsciiGutter }`}</div>
        <div>{`      from "@/registry/new-york/ascii-gutter/ascii-gutter"`}</div>
        <div></div>
        <div>{`    <AsciiGutter char=">" side="left" gap={1} opacity={0.5}>`}</div>
        <div>{`      <div>Your content here</div>`}</div>
        <div>{`    </AsciiGutter>`}</div>
        <div></div>
        <div>{`──────────────────────────────────────────────────────────────────────────────`}</div>

        <div></div>
        <div>{`══════════════════════════════════════════════════════════════════════════════`}</div>
        <div>{`  ascii systems ─ component library v1.0`}</div>
        <div></div>
      </div>
    </main>
  );
}
