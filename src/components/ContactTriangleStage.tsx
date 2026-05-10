"use client";
import { useEffect, useRef } from "react";

export default function ContactTriangleStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.innerHTML = "";

    const W = stage.offsetWidth;
    const H = stage.offsetHeight;
    const LIME = "#97DC39";

    function outline(size: number, sw: number) {
      const h = size * 0.866;
      const pts = `${size / 2},${sw / 2} ${size - sw / 2},${h - sw / 2} ${sw / 2},${h - sw / 2}`;
      return `<svg width="${size}" height="${h}" viewBox="0 0 ${size} ${h}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${pts}" stroke="${LIME}" stroke-width="${sw}" fill="none" stroke-linejoin="round"/>
      </svg>`;
    }

    function filled(size: number, op: number) {
      const h = size * 0.866;
      return `<svg width="${size}" height="${h}" viewBox="0 0 ${size} ${h}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${size / 2},0 ${size},${h} 0,${h}" fill="rgba(151,220,57,${op})"/>
      </svg>`;
    }

    const r = (a: number, b: number) => a + Math.random() * (b - a);

    // Place triangles along the left and right thirds, avoiding the centre
    const count = 28;
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.opacity = "0";

      const sz = r(10, 32);
      const sw = r(0.9, 1.6);
      const isFilled = Math.random() > 0.55;
      el.innerHTML = isFilled ? filled(sz, r(0.06, 0.18)) : outline(sz, sw);

      // Distribute along left 25% or right 25% of the container
      const side = Math.random() > 0.5 ? "left" : "right";
      const xFrac = side === "left" ? r(0, 0.25) : r(0.75, 1.0);
      const x = xFrac * W;
      const y = r(0.05, 0.95) * H;

      el.style.left = x + "px";
      el.style.top = y + "px";

      const rot = r(-160, 160);
      const dur = r(5, 9);
      const delay = -r(0, dur);
      const op = isFilled ? r(0.12, 0.38) : r(0.4, 0.8);

      el.style.setProperty("--r", rot + "deg");
      el.style.setProperty("--dur", dur + "s");
      el.style.setProperty("--delay", delay + "s");
      el.style.setProperty("--op", String(op));
      el.style.animation = `contactPulse ${dur}s ease-in-out ${delay}s infinite`;

      stage.appendChild(el);
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes contactPulse {
          0%   { transform: translateY(20px) scale(0.5) rotate(var(--r)); opacity: 0; }
          20%  { opacity: var(--op); }
          60%  { transform: translateY(-10px) scale(1) rotate(var(--r)); opacity: var(--op); }
          88%  { transform: translateY(-10px) scale(1) rotate(var(--r)); opacity: 0; }
          100% { transform: translateY(20px) scale(0.5) rotate(var(--r)); opacity: 0; }
        }
      `}</style>
      <div
        ref={stageRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      />
    </>
  );
}
