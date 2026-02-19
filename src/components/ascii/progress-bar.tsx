"use client";

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
  const pctStr = `${Math.round(pct * 100)}%`;
  const bar = "█".repeat(filled) + "░".repeat(empty);
  const text = label ? `${bar} [${label}] ${pctStr}` : `${bar} ${pctStr}`;

  return <span>{text}</span>;
}
