"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { metaContact } from "@/lib/mock-data";
import { OrderButton } from "./OrderButton";

const NAV_LINKS = [
  { href: "/om-oss", label: "Om Oss" },
  { href: "/meny", label: "Meny" },
  { href: "/lunch", label: "Lunch" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-10 h-16 backdrop-blur-[12px] border-b-2 border-dashed border-border animate-slide-down max-sm:px-5"
      style={{ background: "rgba(253,246,236,0.9)" }}>
      <Link
        href="/"
        className="font-display text-[1.35rem] text-cherry flex items-center gap-2 transition-transform duration-300 hover:scale-[1.05] hover:rotate-[-1deg]"
      >
        🍣 Haru Sushi{" "}
        <span className="font-jp text-xs text-light font-light">はるすし</span>
      </Link>

      <button
        className="hidden max-sm:flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2"
        aria-label="Menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="block w-5 h-0.5 bg-dark rounded-sm transition-transform" />
        <span className="block w-5 h-0.5 bg-dark rounded-sm transition-transform" />
        <span className="block w-5 h-0.5 bg-dark rounded-sm transition-transform" />
      </button>

      <ul
        className={cn(
          "flex gap-8 list-none",
          "max-sm:hidden max-sm:absolute max-sm:top-16 max-sm:left-0 max-sm:right-0 max-sm:flex-col max-sm:gap-0 max-sm:backdrop-blur-[12px] max-sm:border-b-2 max-sm:border-dashed max-sm:border-border max-sm:py-2",
          menuOpen && "max-sm:!flex"
        )}
        style={menuOpen ? { background: "rgba(253,246,236,0.98)" } : undefined}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href} className="max-sm:border-t max-sm:border-border">
            <Link
              href={href}
              className={cn(
                "font-extrabold text-[0.9rem] text-mid relative pb-0.5 transition-all duration-200",
                "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-cherry after:rounded-sm after:transition-all after:duration-250",
                "hover:text-cherry hover:-translate-y-px hover:after:w-full",
                "max-sm:block max-sm:px-6 max-sm:py-4 max-sm:after:hidden",
                pathname === href && "text-cherry after:w-full"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      <OrderButton/>
      </ul>
    </nav>
  );
}
