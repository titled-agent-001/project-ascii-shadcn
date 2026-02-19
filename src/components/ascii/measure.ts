"use client";

export function measureChars(el: HTMLElement): number {
  const { charWidth } = measureCharWidth(el);
  if (charWidth === 0) return 78;
  return Math.floor(el.clientWidth / charWidth);
}

export function measureCharWidth(el: HTMLElement): { charWidth: number; cols: number } {
  const probe = document.createElement("span");
  probe.style.visibility = "hidden";
  probe.style.position = "absolute";
  probe.style.whiteSpace = "pre";
  probe.style.font = getComputedStyle(el).font;
  probe.textContent = "X";
  el.appendChild(probe);
  const charWidth = probe.getBoundingClientRect().width;
  el.removeChild(probe);
  if (charWidth === 0) return { charWidth: 0, cols: 78 };
  return { charWidth, cols: Math.floor(el.clientWidth / charWidth) };
}

export function observeResize(el: HTMLElement, cb: (cols: number) => void): () => void {
  const ro = new ResizeObserver(() => {
    const cols = measureChars(el);
    cb(cols);
  });
  ro.observe(el);
  return () => ro.disconnect();
}
