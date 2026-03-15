"use client";

import { useEffect, useRef } from "react";

const PETAL_COUNT = 18;

export function Petals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.animationDuration = `${6 + Math.random() * 8}s`;
      petal.style.animationDelay = `${Math.random() * 12}s`;
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
