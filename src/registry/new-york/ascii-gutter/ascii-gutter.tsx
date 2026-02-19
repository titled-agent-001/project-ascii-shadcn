"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AsciiGutterProps {
  /** The gutter character to display on each line */
  char?: string;
  /** Position of the gutter */
  side?: "left" | "right" | "both";
  /** Gap between gutter char and content (in ch units) */
  gap?: number;
  /** Opacity of the gutter characters (0-1) */
  opacity?: number;
  /** Content to wrap */
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
      // Get line height from computed style
      const style = window.getComputedStyle(el);
      const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2;
      const totalHeight = el.scrollHeight;
      const lines = Math.max(1, Math.round(totalHeight / lineHeight));
      setLineCount(lines);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    // Also observe mutations for dynamic content
    const mo = new MutationObserver(measure);
    mo.observe(el, { childList: true, subtree: true, characterData: true });

    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [children]);

  const gutterChars = Array.from({ length: lineCount }, () => char).join("\n");

  return (
    <div
      className={cn("font-mono flex", className)}
      style={{ lineHeight: "inherit", fontSize: "inherit" }}
    >
      {(side === "left" || side === "both") && (
        <div
          ref={gutterLeftRef}
          className="select-none shrink-0 whitespace-pre"
          style={{
            opacity,
            paddingRight: `${gap}ch`,
            lineHeight: "inherit",
            fontSize: "inherit",
          }}
          aria-hidden="true"
        >
          {gutterChars}
        </div>
      )}
      <div
        ref={contentRef}
        className="flex-1 min-w-0"
        style={{ lineHeight: "inherit", fontSize: "inherit" }}
      >
        {children}
      </div>
      {(side === "right" || side === "both") && (
        <div
          ref={gutterRightRef}
          className="select-none shrink-0 whitespace-pre"
          style={{
            opacity,
            paddingLeft: `${gap}ch`,
            lineHeight: "inherit",
            fontSize: "inherit",
          }}
          aria-hidden="true"
        >
          {gutterChars}
        </div>
      )}
    </div>
  );
}
