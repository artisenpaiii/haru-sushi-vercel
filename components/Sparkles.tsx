"use client";

import { useEffect, useRef } from "react";

const EMOJIS = ["✨", "⭐", "🌸", "💫", "🌟", "✦", "🌺"];

export function Sparkles({ count = 18 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "sparkle-dot";
      s.style.left = `${5 + Math.random() * 90}%`;
      s.style.top = `${5 + Math.random() * 90}%`;
      s.style.fontSize = `${0.65 + Math.random() * 0.9}rem`;
      s.style.animationDuration = `${1.8 + Math.random() * 3.5}s`;
      s.style.animationDelay = `${Math.random() * 6}s`;
      s.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      container.appendChild(s);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, [count]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
}
