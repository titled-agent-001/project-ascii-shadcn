"use client";

import { useTheme, THEMES, MODES } from "@/lib/theme-context";

export function InlineThemeSwitcher() {
  const { theme, mode, setTheme, setMode } = useTheme();

  return (
    <span>
      {"COLOUR  "}
      {THEMES.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`hover:underline transition-colors${t === theme ? " font-bold" : ""}`}
        >
          {`[${t.toUpperCase()}]`}
        </button>
      ))}
      {"  DAY/NIGHT "}
      {MODES.map((m, i) => (
        <span key={m}>
          <button
            onClick={() => setMode(m)}
            className={`hover:underline transition-colors${m === mode ? " font-bold" : ""}`}
          >
            {`[${m.toUpperCase()}]`}
          </button>
          {i === 0 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
