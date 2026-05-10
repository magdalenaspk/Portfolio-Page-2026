"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Props {
  src: string;
}

export function PresentationViewer({ src }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pdfRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderTaskRef = useRef<any>(null);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Load pdfjs outside of webpack (webpackIgnore) to avoid module-level crash
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore – intentionally bypassing webpack
        const pdfjs = await import(/* webpackIgnore: true */ "/pdf.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        const pdf = await pdfjs.getDocument(src).promise;
        if (cancelled) return;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setLoading(false);
      } catch (e) {
        console.error("PresentationViewer: failed to load PDF", e);
      }
    })();
    return () => { cancelled = true; };
  }, [src]);

  const renderPage = useCallback(async (pageNum: number) => {
    const pdf = pdfRef.current;
    const canvas = canvasRef.current;
    if (!pdf || !canvas) return;

    // Cancel any in-progress render
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
      renderTaskRef.current = null;
    }

    const pdfPage = await pdf.getPage(pageNum);
    const containerWidth = containerRef.current?.clientWidth ?? 700;
    const dpr = window.devicePixelRatio ?? 1;
    const viewport = pdfPage.getViewport({ scale: 1 });
    const scale = (containerWidth / viewport.width) * dpr;
    const scaledViewport = pdfPage.getViewport({ scale });

    // Physical pixels match DPR; CSS size stays at logical width
    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${scaledViewport.height / dpr}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const task = pdfPage.render({ canvasContext: ctx, viewport: scaledViewport });
    renderTaskRef.current = task;
    try {
      await task.promise;
    } catch {
      // cancelled — ignore
    }
  }, []);

  useEffect(() => {
    if (!loading) renderPage(page);
  }, [page, loading, renderPage]);

  // Keyboard navigation
  const prev = useCallback(() => setPage(p => Math.max(1, p - 1)), []);
  const next = useCallback(() => setPage(p => Math.min(numPages, p + 1)), [numPages]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="w-full" ref={containerRef}>
      {/* Slide canvas */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-sm">
        {loading && (
          <div className="flex items-center justify-center h-64 text-sm text-neutral-500">
            Loading…
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full"
          style={{ display: loading ? "none" : "block" }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4 px-1">
        <button
          onClick={prev}
          disabled={page === 1}
          className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </button>

        <span className="text-sm text-neutral-500 tabular-nums">
          {numPages > 0 ? `${page} / ${numPages}` : "—"}
        </span>

        <button
          onClick={next}
          disabled={page === numPages || numPages === 0}
          className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      {numPages > 0 && (
        <div className="flex justify-center gap-1.5 mt-3 flex-wrap">
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i + 1 === page ? 16 : 6,
                height: 6,
                background: i + 1 === page ? "#737373" : "#d4d4d4",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
