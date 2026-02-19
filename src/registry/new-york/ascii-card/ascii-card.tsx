"use client";

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
    return `${v} ${trimmed}${" ".repeat(Math.max(0, width - 4 - trimmed.length))} ${v}`;
  };

  const hline = (l: string, r: string) => `${l}${h.repeat(width - 2)}${r}`;

  const lines: string[] = [];
  lines.push(hline(tl, tr));
  if (title !== undefined) {
    lines.push(...title.split("\n").map(padLine));
    if (content !== undefined) lines.push(hline(ml, mr));
  }
  if (content !== undefined) {
    lines.push(...content.split("\n").map(padLine));
  }
  lines.push(hline(bl, br));

  return <pre style={{ margin: 0, font: "inherit", lineHeight: "inherit" }}>{lines.join("\n")}</pre>;
}
