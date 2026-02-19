"use client";

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

  const cell = (text: string, w: number) => ` ${text}${" ".repeat(Math.max(0, w - text.length - 2))} `;
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

  return <pre style={{ margin: 0, font: "inherit", lineHeight: "inherit" }}>{lines.join("\n")}</pre>;
}
