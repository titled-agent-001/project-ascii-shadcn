"use client";

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

  const labelStr = label ? ` ${label} ` : "";
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
        {topLine + "\n" + midLine + "\n" + botLine}
      </pre>
    </div>
  );
}
