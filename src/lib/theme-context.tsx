"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const THEMES = ["m", "g", "r", "b", "o"] as const;
const MODES = ["day", "night"] as const;

type Theme = (typeof THEMES)[number];
type Mode = (typeof MODES)[number];

interface ThemeContextValue {
  theme: Theme;
  mode: Mode;
  setTheme: (t: Theme) => void;
  setMode: (m: Mode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "m",
  mode: "night",
  setTheme: () => {},
  setMode: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("m");
  const [mode, setModeState] = useState<Mode>("night");

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    THEMES.forEach((t) => html.classList.remove(`theme-${t}`));
    html.classList.add(`theme-${theme}`);
    MODES.forEach((m) => html.classList.remove(`mode-${m}`));
    html.classList.add(`mode-${mode}`);
  }, [theme, mode]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { THEMES, MODES };
export type { Theme, Mode };
