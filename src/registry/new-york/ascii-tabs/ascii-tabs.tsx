"use client";

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
        parts.push(`${tl}${h}${h}${label}${h}${h}${tr}`);
      } else {
        parts.push(`${inactiveL}${h}${h}${label}${h}${h}${inactiveR}`);
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
    const activeTabStr = `${tl}${h}${h}${activeLabel}${h}${h}${tr}`;
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
    return `${v}${trimmed}${" ".repeat(Math.max(0, inner - trimmed.length))}${v}`;
  };

  const header = buildHeaders();
  const lineWidth = Math.max(width, header.length);
  const bottomLine = `${bl}${h.repeat(lineWidth - 2)}${br}`;

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
                ? `${tl}${h}${h}${tab.label}${h}${h}${tr}`
                : `${inactiveL}${h}${h}${tab.label}${h}${h}${inactiveR}`}
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
          {contentStr.split("\n").map((line, i) => (
            <div key={i}>{padLine(` ${line}`)}</div>
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
