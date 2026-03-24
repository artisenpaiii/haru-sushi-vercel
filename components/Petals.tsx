"use client";

import { useEffect, useRef } from "react";

const PETAL_COUNT = 55;

export function Petals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      // spread petals wider, even off-screen left/right
      petal.style.left = `${-5 + Math.random() * 115}vw`;
      petal.style.animationDuration = `${3.5 + Math.random() * 10}s`;
      petal.style.animationDelay = `${Math.random() * 22}s`;

      // random size scaling
      const scale = 0.5 + Math.random() * 1.6;
      petal.style.setProperty("--scale", String(scale));
      petal.style.transformOrigin = "center";

      container.appendChild(petal);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      ref={containerRef}
    />
  );
}
