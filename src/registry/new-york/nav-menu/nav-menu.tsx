"use client";

import Link from "next/link";

export interface NavMenuItem {
  label: string;
  description: string;
  href: string;
}

export interface NavMenuProps {
  items: NavMenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  return (
    <div>
      {items.map((item, i) => {
        const prefix = i < items.length - 1 ? "├" : "└";
        return (
          <div key={item.label}>
            <Link href={item.href} className="hover:underline transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
              {` ${prefix} ${item.label}`}
            </Link>
            {` ─ ${item.description}`}
          </div>
        );
      })}
    </div>
  );
}
