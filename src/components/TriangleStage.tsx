"use client";
import { useEffect, useRef } from "react";

export default function TriangleStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.innerHTML = "";

    const W = stage.offsetWidth;
    const H = window.innerHeight;
    const LIME = "#97DC39";

    function outline(size: number, sw: number) {
      const h = size * 0.866;
      const pts = `${size/2},${sw/2} ${size-sw/2},${h-sw/2} ${sw/2},${h-sw/2}`;
      return `<svg width="${size}" height="${h}" viewBox="0 0 ${size} ${h}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${pts}" stroke="${LIME}" stroke-width="${sw}" fill="none" stroke-linejoin="round"/>
      </svg>`;
    }

    function filled(size: number, op: number) {
      const h = size * 0.866;
      return `<svg width="${size}" height="${h}" viewBox="0 0 ${size} ${h}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${size/2},0 ${size},${h} 0,${h}" fill="rgba(151,220,57,${op})"/>
      </svg>`;
    }

    const r = (a: number, b: number) => a + Math.random() * (b - a);

    const COLS = 8, ROWS = 10;

    for (let ro = 0; ro < ROWS; ro++) {
      for (let co = 0; co < COLS; co++) {
        if (Math.random() > 0.68) continue;

        const el = document.createElement("div");
        el.style.position = "absolute";
        el.style.opacity = "0";

        const sz = r(11, 34);
        const sw = r(0.9, 1.6);
        const isFilled = Math.random() > 0.58;
        el.innerHTML = isFilled ? filled(sz, r(0.06, 0.22)) : outline(sz, sw);

        const x = (co / (COLS - 1)) * W * 0.88 + r(-22, 22);
        const y = (ro / (ROWS - 1)) * H * 0.84 + H * 0.08 + r(-20, 20);
        el.style.left = x + "px";
        el.style.top = y + "px";

        const rot = r(-140, 140);
        const dur = r(4, 7.5);
        const colDelay = (COLS - co) * 0.22;
        const delay = -(colDelay + r(0, 2.5));
        const op = isFilled ? r(0.15, 0.45) : r(0.45, 0.85);

        el.style.setProperty("--r", rot + "deg");
        el.style.setProperty("--dur", dur + "s");
        el.style.setProperty("--delay", delay + "s");
        el.style.setProperty("--op", String(op));
        el.style.animation = `elegantPulse ${dur}s ease-in-out ${delay}s infinite`;

        stage.appendChild(el);
      }
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes elegantPulse {
          0%   { transform: translateX(160px) scale(0.45) rotate(var(--r)); opacity: 0; }
          22%  { opacity: var(--op); }
          62%  { transform: translateX(0px) scale(1) rotate(var(--r)); opacity: var(--op); }
          90%  { transform: translateX(0px) scale(1) rotate(var(--r)); opacity: 0; }
          100% { transform: translateX(160px) scale(0.45) rotate(var(--r)); opacity: 0; }
        }
      `}</style>
      <div
        ref={stageRef}
        className="absolute right-0 top-0 bottom-0 w-1/3 sm:w-2/5 md:w-[55%] pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      />
    </>
  );
}
