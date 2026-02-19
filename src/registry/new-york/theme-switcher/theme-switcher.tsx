"use client";

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
            className={`hover:underline transition-colors${t === theme ? " font-bold" : ""}`}
            style={{ background: "transparent", border: "none", color: "inherit", font: "inherit", padding: 0, cursor: "pointer" }}
          >
            {`[${t.toUpperCase()}]`}
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
              className={`hover:underline transition-colors${m === mode ? " font-bold" : ""}`}
              style={{ background: "transparent", border: "none", color: "inherit", font: "inherit", padding: 0, cursor: "pointer" }}
            >
              {`[${m.toUpperCase()}]`}
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
