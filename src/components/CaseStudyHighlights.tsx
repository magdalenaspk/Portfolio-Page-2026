import type React from "react";
import type { IconName, Point, Stat } from "@/content/types";

// Outline icons on a 24px grid, drawn with the same stroke style as the rest of the site.
const ICONS: Record<IconName, string> = {
  eye: "M2.04 12.32a1 1 0 0 1 0-.64C3.42 7.51 7.36 4.5 12 4.5c4.64 0 8.57 3 9.96 7.18a1 1 0 0 1 0 .64C20.58 16.49 16.64 19.5 12 19.5c-4.64 0-8.57-3-9.96-7.18ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  sparkle: "M9.81 15.9 9 18.75l-.81-2.85a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 0 0 3.09 3.09l2.85.81-2.85.81a4.5 4.5 0 0 0-3.09 3.09ZM18.26 8.72 18 9.75l-.26-1.03a3.38 3.38 0 0 0-2.46-2.46L14.25 6l1.03-.26a3.38 3.38 0 0 0 2.46-2.46L18 2.25l.26 1.03a3.38 3.38 0 0 0 2.46 2.46l1.03.26-1.03.26a3.38 3.38 0 0 0-2.46 2.46Z",
  users: "M15 19.13a9.38 9.38 0 0 0 2.63.37 9.34 9.34 0 0 0 4.12-.95 4.13 4.13 0 0 0-7.53-2.49M15 19.13v-.01c0-1.11-.29-2.16-.78-3.07M15 19.13v.11A12.32 12.32 0 0 1 8.62 21c-2.33 0-4.51-.65-6.37-1.76v-.11a6.38 6.38 0 0 1 11.96-3.08M12 6.38a3.38 3.38 0 1 1-6.75 0 3.38 3.38 0 0 1 6.75 0Zm8.25 2.25a2.63 2.63 0 1 1-5.25 0 2.63 2.63 0 0 1 5.25 0Z",
  cursor: "M15.04 21.69 13.36 15.4m0 0-2.47 2.25.56-9.4 5.18 7.86-3.27-.71ZM12 2.25V4.5m5.83.92-1.6 1.6M20.25 10.5H18M7.76 16.24l-1.6 1.6M6 10.5H3.75m4.01-4.74-1.6-1.6",
  expand: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15",
  layers: "M6.43 9.75 2.25 12l4.18 2.25m0-4.5 5.57 3 5.57-3m-11.14 0L2.25 7.5 12 2.25l9.75 5.25-4.18 2.25m0 0L21.75 12l-4.18 2.25m0 0 4.18 2.25L12 21.75 2.25 16.5l4.18-2.25m11.14 0-5.57 3-5.57-3",
  tag: "M9.57 3H5.25A2.25 2.25 0 0 0 3 5.25v4.32c0 .6.24 1.17.66 1.6l9.58 9.58a2.25 2.25 0 0 0 3.18 0l4.32-4.32a2.25 2.25 0 0 0 0-3.18L11.16 3.66A2.25 2.25 0 0 0 9.57 3ZM6 6h.01v.01H6V6Z",
  key: "M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.03 5.91c-.56-.1-1.16.03-1.56.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.82c0-.6.24-1.17.66-1.6l6.16-6.15c.4-.4.52-1 .43-1.56A6 6 0 1 1 21.75 8.25Z",
  beaker: "M9.75 3.1v5.72a2.25 2.25 0 0 1-.66 1.6L5 14.5M9.75 3.1c-.25.02-.5.05-.75.08m.75-.08a24.3 24.3 0 0 1 4.5 0m0 0v5.72c0 .6.24 1.17.66 1.6L19.8 15.3M14.25 3.1c.25.02.5.05.75.08M19.8 15.3l-1.57.39a9.06 9.06 0 0 1-6.23-.69 9.06 9.06 0 0 0-6.23-.69L5 14.5m14.8.8 1.4 1.4c1.23 1.23.65 3.32-1.07 3.62A48.3 48.3 0 0 1 12 21c-2.77 0-5.49-.24-8.13-.68-1.72-.3-2.3-2.39-1.07-3.62L5 14.5",
  chart: "M3 13.13C3 12.5 3.5 12 4.13 12h2.25c.62 0 1.12.5 1.12 1.13v6.75c0 .62-.5 1.12-1.12 1.12H4.13C3.5 21 3 20.5 3 19.88v-6.75ZM9.75 8.63c0-.63.5-1.13 1.13-1.13h2.25c.62 0 1.12.5 1.12 1.13v11.25c0 .62-.5 1.12-1.12 1.12h-2.25c-.63 0-1.13-.5-1.13-1.12V8.63ZM16.5 4.13c0-.63.5-1.13 1.13-1.13h2.25C20.5 3 21 3.5 21 4.13v15.75c0 .62-.5 1.12-1.12 1.12h-2.25c-.63 0-1.13-.5-1.13-1.12V4.13Z",
  bolt: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  gift: "M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.88A2.63 2.63 0 1 0 9.38 7.5H12m0-2.63V7.5m0-2.63a2.63 2.63 0 1 1 2.63 2.63H12m-8.63 3.75h17.25c.62 0 1.13-.5 1.13-1.13v-1.5c0-.62-.5-1.12-1.13-1.12H3.38c-.63 0-1.13.5-1.13 1.13v1.5c0 .62.5 1.12 1.13 1.12ZM12 7.5V21",
  shield: "M9 12.75 11.25 15 15 9.75m-3-7.04A11.96 11.96 0 0 1 3.6 6 12 12 0 0 0 3 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29Z",
  sort: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5",
  trash: "m14.74 9-.35 9m-4.78 0L9.26 9m9.97-3.21c.34.05.68.1 1.02.16m-1.02-.16L18.16 19.67a2.25 2.25 0 0 1-2.24 2.08H8.08a2.25 2.25 0 0 1-2.24-2.08L4.77 5.79m14.46 0a48.1 48.1 0 0 0-3.48-.4m-12 .56c.34-.06.68-.11 1.02-.16m0 0a48.1 48.1 0 0 1 3.48-.4m7.5 0v-.92c0-1.18-.91-2.16-2.09-2.2a52 52 0 0 0-3.32 0c-1.18.04-2.09 1.02-2.09 2.2v.92m7.5 0a48.67 48.67 0 0 0-7.5 0",
  undo: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3",
  chat: "M8.63 12a.38.38 0 1 1-.75 0 .38.38 0 0 1 .75 0Zm4.13 0a.38.38 0 1 1-.75 0 .38.38 0 0 1 .75 0Zm4.12 0a.38.38 0 1 1-.75 0 .38.38 0 0 1 .75 0ZM2.25 12.76c0 1.6 1.12 2.99 2.7 3.22 1.09.16 2.18.28 3.3.37V21l4.18-4.18c.21-.2.48-.32.78-.33A48.4 48.4 0 0 0 19.05 16c1.58-.23 2.7-1.62 2.7-3.22V6.74c0-1.6-1.12-2.99-2.7-3.22A48.4 48.4 0 0 0 12 3c-2.39 0-4.74.17-7.05.52-1.58.23-2.7 1.62-2.7 3.22v6.02Z",
  grid: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z",
  mail: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.24a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.61a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.92v-.24",
  sheet: "M3.75 4.5h16.5v15H3.75v-15Zm0 9h16.5M9 16.5h6",
  stack: "M3.75 4.5h16.5v6.75H3.75V4.5Zm0 9h16.5v6H3.75v-6Z",
  tabs: "M3.75 7.5h16.5v12H3.75v-12Zm0 0V5.25A1.5 1.5 0 0 1 5.25 3.75h4.5a1.5 1.5 0 0 1 1.5 1.5V7.5",
  x: "M6 18 18 6M6 6l12 12",
  phone: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  globe: "M12 21a9 9 0 0 0 8.72-6.75M12 21a9 9 0 0 1-8.72-6.75M12 21c2.49 0 4.5-4.03 4.5-9S14.49 3 12 3m0 18c-2.49 0-4.5-4.03-4.5-9S9.51 3 12 3m0 0a9 9 0 0 1 7.84 4.58M12 3a9 9 0 0 0-7.84 4.58m15.68 0A11.95 11.95 0 0 1 12 10.5c-2.9 0-5.56-1.03-7.84-2.92m15.68 0A8.96 8.96 0 0 1 21 12c0 .78-.1 1.53-.28 2.25m0 0A17.92 17.92 0 0 1 12 16.5c-3.16 0-6.13-.82-8.72-2.25m0 0A9 9 0 0 1 3 12c0-1.61.42-3.12 1.16-4.42",
};


// Equal-width columns. Four items go two by two; any shorter last row is
// centred, so nothing sits alone at the edge.
function colsFor(n: number, max: number): number {
  if (n <= max) return n;
  if (n === 4) return 2;
  return max;
}

// Flex-wrap grid: --cm columns on phones, --cd from md up, 1.5rem gaps.
const ITEM =
  "basis-[calc((100%_-_(var(--cm)_-_1)*1.5rem)/var(--cm))] md:basis-[calc((100%_-_(var(--cd)_-_1)*1.5rem)/var(--cd))] grow-0 shrink-0";

function gridVars(n: number, mobileMax: number, desktopMax: number) {
  return { "--cm": colsFor(n, mobileMax), "--cd": colsFor(n, desktopMax) } as React.CSSProperties;
}

function Icon({ name }: { name: IconName }) {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[name]} />
    </svg>
  );
}

export function StatRow({ stats, narrow }: { stats: Stat[]; narrow?: boolean }) {
  return (
    <dl
      className="flex flex-wrap justify-center gap-x-6 gap-y-8 pt-2"
      style={gridVars(stats.length, 2, narrow ? 2 : 3)}
    >
      {stats.map((s) => (
        <div key={s.value + s.label} className={`${ITEM} flex flex-col border-t-2 border-lime-300 pt-4`}>
          {s.context && (
            <p className="order-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
              {s.context}
            </p>
          )}
          {/* Label first in reading order, shown under the number. */}
          <dt className="order-3 mt-2 text-sm leading-snug text-neutral-600">{s.label}</dt>
          <dd className="order-2 font-sans font-bold text-4xl md:text-5xl tracking-tight tabular-nums text-neutral-900 leading-none">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PointList({ points, narrow }: { points: Point[]; narrow?: boolean }) {
  // Beside an image: a single list, icon left. Otherwise: columns with the
  // icon on top from md up, and a list with the icon left on phones.
  const columns = !narrow;
  // Icon on top only when items carry a description; short titles stay inline.
  const stacked = columns && points.some((p) => p.body);
  return (
    <ul
      className="flex flex-wrap justify-center gap-x-6 gap-y-8 pt-2"
      style={gridVars(points.length, 1, columns ? 3 : 1)}
    >
      {points.map((p) => (
        <li
          key={p.title}
          className={`${ITEM} flex gap-4 ${
            stacked ? "items-center md:flex-col md:items-start md:gap-3" : "items-center"
          }`}
        >
          <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 text-lime-600">
            <Icon name={p.icon} />
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-neutral-900 text-base leading-snug">
              {p.title}
              {p.tag && (
                <span className="ml-2 align-middle inline-block rounded-full border border-neutral-300 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-neutral-600">
                  {p.tag}
                </span>
              )}
            </p>
            {p.body && <p className="mt-1 text-sm md:text-base leading-relaxed text-neutral-600">{p.body}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
