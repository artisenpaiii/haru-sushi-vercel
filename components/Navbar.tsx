"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/om-oss", label: "Om Oss", emoji: "🌸" },
  { href: "/meny",   label: "Meny",   emoji: "🍱" },
  { href: "/lunch",  label: "Lunch",  emoji: "🍜" },
  { href: "/kontakt",label: "Kontakt",emoji: "📍" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-10 h-16 backdrop-blur-[14px] border-b-2 border-dashed border-border animate-slide-down max-sm:px-5"
      style={{ background: "rgba(253,246,236,0.92)" }}
    >
      {/* Logo — neon glow + wild hover */}
      <Link
        href="/"
        className="font-display text-[1.35rem] text-cherry flex items-center gap-2 animate-neon-glow animate-rubber-band"
        style={{ animationDuration: "3s" }}
      >
        <span className="inline-block animate-heartbeat" style={{ animationDuration: "2s" }}>🍣</span>
        {" "}Haru Sushi{" "}
        <span className="font-jp text-xs text-light font-light animate-fade-up" style={{ animationDelay: "0.3s" }}>はるすし</span>
      </Link>

      {/* Mobile hamburger */}
      <button
        className={cn(
          "hidden max-sm:flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 transition-all duration-300",
          menuOpen && "animate-tada"
        )}
        aria-label="Menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={cn("block w-6 h-0.5 bg-cherry rounded-sm transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
        <span className={cn("block w-6 h-0.5 bg-cherry rounded-sm transition-all duration-300", menuOpen && "opacity-0")} />
        <span className={cn("block w-6 h-0.5 bg-cherry rounded-sm transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
      </button>

      {/* Nav links */}
      <ul
        className={cn(
          "flex gap-8 list-none",
          "max-sm:hidden max-sm:absolute max-sm:top-16 max-sm:left-0 max-sm:right-0 max-sm:flex-col max-sm:gap-0 max-sm:backdrop-blur-[14px] max-sm:border-b-2 max-sm:border-dashed max-sm:border-border max-sm:py-2",
          menuOpen && "max-sm:!flex"
        )}
        style={menuOpen ? { background: "rgba(253,246,236,0.98)" } : undefined}
      >
        {NAV_LINKS.map(({ href, label, emoji }, i) => (
          <li key={href} className="max-sm:border-t max-sm:border-border animate-nav-link-in" style={{ animationDelay: `${i * 0.08}s` }}>
            <Link
              href={href}
              className={cn(
                "font-extrabold text-[0.9rem] text-mid relative pb-0.5 transition-all duration-200 flex items-center gap-1",
                "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-cherry after:rounded-sm after:transition-all after:duration-250",
                "hover:text-cherry hover:-translate-y-px hover:after:w-full animate-jello",
                "max-sm:block max-sm:px-6 max-sm:py-4 max-sm:after:hidden",
                pathname === href && "text-cherry after:w-full animate-glow-pulse"
              )}
              onClick={() => setMenuOpen(false)}
            >
              <span className="max-sm:hidden animate-bounce-big" style={{ animationDuration: `${2.5 + i * 0.3}s`, fontSize: "0.9em" }}>{emoji}</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
