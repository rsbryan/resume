"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import type { ShowcaseEntry } from "@/data/showcase";
import type { Story } from "@/components/showcase/use-story";

function Control({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-6 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-black/5 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-neutral-900"
    >
      {children}
    </button>
  );
}

/** Progress segments, playback controls and the caption for the slide on screen. */
export function StoryBar({
  entry,
  story,
}: {
  entry: ShowcaseEntry;
  story: Story;
}) {
  const count = entry.slides.length;
  const caption = entry.slides[story.index]?.caption ?? "";
  return (
    <div className="mt-4">
      {count > 1 && (
        <div className="flex items-center gap-2">
          <div className="flex flex-1 gap-1" aria-hidden>
            {entry.slides.map((slide, i) => {
              const state =
                i < story.index ? "done" : i === story.index ? "now" : "next";
              return (
                <span
                  key={slide.src}
                  className="h-[3px] flex-1 overflow-hidden rounded-full bg-black/10"
                >
                  <span
                    key={state}
                    ref={state === "now" ? story.fillRef : undefined}
                    className="block h-full origin-left rounded-full bg-neutral-900"
                    style={{ transform: `scaleX(${state === "done" ? 1 : 0})` }}
                  />
                </span>
              );
            })}
          </div>
          <div className="flex shrink-0 items-center">
            <Control label="Previous slide" onClick={story.prev}>
              <ChevronLeft className="size-4" />
            </Control>
            <Control
              label={story.userPaused ? "Play slides" : "Pause slides"}
              onClick={story.togglePause}
            >
              {story.userPaused ? (
                <Play className="size-3.5" />
              ) : (
                <Pause className="size-3.5" />
              )}
            </Control>
            <Control label="Next slide" onClick={story.next}>
              <ChevronRight className="size-4" />
            </Control>
          </div>
        </div>
      )}
      <p
        className="mt-2 min-h-[2.75rem] text-pretty text-sm leading-snug text-neutral-700"
        aria-live="polite"
      >
        {count > 1 && (
          <span className="mr-2 font-mono text-xs tabular-nums text-neutral-400">
            {story.index + 1}/{count}
          </span>
        )}
        {caption}
      </p>
    </div>
  );
}
