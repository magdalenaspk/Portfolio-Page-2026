"use client";

import dynamic from "next/dynamic";

const PresentationViewer = dynamic(
  () => import("./PresentationViewer").then(m => m.PresentationViewer),
  {
    ssr: false,
    loading: () => <div className="h-64 rounded-2xl bg-neutral-100 animate-pulse" />,
  }
);

export function PresentationWrapper({ src }: { src: string }) {
  return <PresentationViewer src={src} />;
}
