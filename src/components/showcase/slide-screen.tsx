"use client";

import Image from "next/image";
import type { ShowcaseEntry } from "@/data/showcase";
import type { Story } from "@/components/showcase/use-story";

/**
 * Every slide of the project stacked in the screen, the active one visible.
 * Stills stay mounted so changing slide is a crossfade; only the active video
 * is mounted, so nothing downloads until it is on screen. Captures are already
 * sized WebP, so they are served as is rather than through the optimizer.
 */
export function SlideScreen({
  entry,
  story,
}: {
  entry: ShowcaseEntry;
  story: Story;
}) {
  const single = entry.slides.length === 1;
  return (
    <button
      type="button"
      onClick={story.next}
      disabled={single}
      aria-label={
        single
          ? entry.slides[0].alt
          : `Next: ${
              entry.slides[(story.index + 1) % entry.slides.length].caption
            }`
      }
      className="absolute inset-0 block size-full cursor-pointer disabled:cursor-default"
      style={{ background: entry.screenInset?.background }}
    >
      {entry.slides.map((slide, i) => {
        const active = i === story.index;
        return (
          <span
            key={slide.src}
            className="absolute inset-x-0 bottom-0 block transition-opacity duration-500"
            style={{
              opacity: active ? 1 : 0,
              top: entry.screenInset?.top ?? 0,
            }}
            aria-hidden={!active}
          >
            {slide.kind === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                unoptimized
                className="object-cover object-top"
                priority={i === 0 && entry.slug === "tla"}
              />
            ) : active ? (
              <>
                {slide.poster && (
                  <Image
                    src={slide.poster}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                )}
                <video
                  ref={story.videoRef}
                  src={slide.src}
                  poster={slide.poster}
                  muted
                  playsInline
                  loop={single}
                  preload="auto"
                  onEnded={story.next}
                  aria-label={slide.alt}
                  className="relative size-full object-cover object-top"
                />
              </>
            ) : slide.poster ? (
              <Image
                src={slide.poster}
                alt=""
                fill
                unoptimized
                className="object-cover object-top"
              />
            ) : null}
            {slide.overlay && active && (
              <span
                className="absolute right-[3%] top-[3%] block overflow-hidden rounded-lg shadow-[0_18px_40px_-12px_rgb(0_0_0/0.6)] ring-1 ring-black/40 duration-700 animate-in fade-in slide-in-from-top-2"
                style={{
                  width: "24%",
                  aspectRatio: `${slide.overlay.width} / ${slide.overlay.height}`,
                }}
              >
                <Image
                  src={slide.overlay.src}
                  alt={slide.overlay.alt}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </span>
            )}
          </span>
        );
      })}
    </button>
  );
}
