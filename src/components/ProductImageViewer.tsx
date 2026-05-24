"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

const ZOOM_LEVELS = [1, 1.5, 2.5] as const;

type ProductImageViewerProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
  className?: string;
  imageClassName?: string;
};

export function ProductImageViewer({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
  aspectClassName = "aspect-[5/4]",
  className,
  imageClassName,
}: ProductImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const zoom = ZOOM_LEVELS[zoomIndex];

  const open = useCallback(() => {
    setZoomIndex(0);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setZoomIndex(0);
  }, []);

  const zoomIn = useCallback(() => {
    setZoomIndex((current) => Math.min(current + 1, ZOOM_LEVELS.length - 1));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomIndex((current) => Math.max(current - 1, 0));
  }, []);

  useEffect(() => {
    setMounted(true);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
      if (event.key === "+" || event.key === "=") {
        zoomIn();
      }
      if (event.key === "-") {
        zoomOut();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, zoomIn, zoomOut]);

  const lightbox =
    mounted && isOpen
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged view: ${alt}`}
            className="fixed inset-0 z-[100] flex flex-col bg-white/95"
          >
            <button
              type="button"
              onClick={close}
              className="absolute inset-0"
              aria-label="Close enlarged image"
            />

            <div className="relative z-10 flex items-center justify-between border-b border-border bg-white px-4 py-4 sm:px-6">
              <p className="truncate text-sm font-medium text-ink">{alt}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={zoomIndex === 0}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink transition hover:border-ink/20 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Zoom out"
                >
                  −
                </button>
                <span className="min-w-[3rem] text-center text-xs text-muted">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={zoomIndex === ZOOM_LEVELS.length - 1}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink transition hover:border-ink/20 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="ml-2 rounded-lg border border-border px-3 py-2 text-sm text-muted transition hover:border-ink/20 hover:text-ink"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="relative z-10 flex-1 overflow-auto overscroll-contain">
              <div className="flex min-h-full min-w-full items-center justify-center p-4 sm:p-8">
                <div
                  className="relative transition-transform duration-200 ease-out"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "center center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt}
                    className="max-h-[calc(100vh-8rem)] max-w-[min(100vw-2rem,900px)] object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            <p className="relative z-10 border-t border-border bg-white px-4 py-3 text-center text-xs text-muted sm:px-6">
              Scroll or pinch to explore · Use +/− to zoom · Press Esc to close
            </p>
          </div>,
          document.body
        )
      : null;

  return (
    <div className={cn("relative min-w-0", className)}>
      <button
        type="button"
        onClick={open}
        aria-label={`Enlarge ${alt}`}
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-surface text-left",
          aspectClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-contain transition-transform duration-500 group-hover:scale-[1.03]",
            imageClassName
          )}
        />

        <div className="pointer-events-none absolute inset-0 bg-ink/0 transition group-hover:bg-ink/[0.04]" />

        <span className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg border border-border bg-white/95 px-3 py-1.5 text-xs font-medium text-ink shadow-sm md:opacity-0 md:transition md:group-hover:opacity-100">
          <ZoomIcon className="h-3.5 w-3.5" />
          Click to enlarge
        </span>
      </button>
      {lightbox}
    </div>
  );
}

function ZoomIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" strokeLinecap="round" />
    </svg>
  );
}
