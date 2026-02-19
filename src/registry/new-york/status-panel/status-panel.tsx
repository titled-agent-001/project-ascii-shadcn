"use client";

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
    const row = `${k}: ${v}`;
    lines.push("║ " + row + " ".repeat(Math.max(0, width - 3 - row.length)) + "║");
  }
  lines.push("╚" + "═".repeat(width - 2) + "╝");

  return <pre style={{ margin: 0, font: "inherit", lineHeight: "inherit" }}>{lines.join("\n")}</pre>;
}
