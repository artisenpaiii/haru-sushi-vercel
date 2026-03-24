"use client";

import { useEffect } from "react";

const TRAIL_LENGTH = 18;

export function CursorTrail() {
  useEffect(() => {
    const dots: HTMLDivElement[] = [];
    const positions: { x: number; y: number }[] = Array(TRAIL_LENGTH).fill({ x: -300, y: -300 });
    let animFrame: number;

    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const dot = document.createElement("div");
      const size = Math.max(2, 11 - i * 0.52);
      const alpha = Math.max(0.04, 0.75 - i * 0.042);
      const hue = (i * 8) % 30; // slight hue variation
      dot.style.cssText = `
        position:fixed;pointer-events:none;z-index:9999;
        width:${size}px;height:${size}px;
        background:hsla(${0 + hue},65%,50%,${alpha});
        border-radius:50%;
        transform:translate(-50%,-50%);
        will-change:left,top;
        mix-blend-mode:multiply;
      `;
      document.body.appendChild(dot);
      dots.push(dot);
    }

    const latestPos = { x: -300, y: -300 };
    const onMove = (e: MouseEvent) => {
      latestPos.x = e.clientX;
      latestPos.y = e.clientY;
    };

    const render = () => {
      positions.unshift({ x: latestPos.x, y: latestPos.y });
      if (positions.length > TRAIL_LENGTH) positions.length = TRAIL_LENGTH;

      dots.forEach((dot, i) => {
        const p = positions[i];
        if (p) {
          dot.style.left = p.x + "px";
          dot.style.top = p.y + "px";
        }
      });
      animFrame = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
      dots.forEach((d) => d.remove());
    };
  }, []);

  return null;
}
