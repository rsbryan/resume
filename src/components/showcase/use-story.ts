"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Slide } from "@/data/showcase";

/** How long a still slide stays up before the next one. */
export const IMAGE_SLIDE_MS = 4500;

export interface Story {
  index: number;
  playing: boolean;
  /** Set by the player when the user pauses; hover and off-screen pauses are separate. */
  userPaused: boolean;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  togglePause: () => void;
  /** The active video element, so progress can follow its playback. */
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  /** The current segment's fill, updated every frame without re-rendering. */
  fillRef: React.MutableRefObject<HTMLDivElement | null>;
}

/**
 * Stories-style playback for one project's slides: stills advance on a timer,
 * videos advance when they end, and the progress bar follows either. Switching
 * project (a new `storyKey`) starts again from the first slide.
 */
export function useStory({
  storyKey,
  slides,
  canPlay,
  startPaused,
}: {
  storyKey: string;
  slides: readonly Slide[];
  /** False while hovered, off screen, or in a hidden tab. */
  canPlay: boolean;
  startPaused: boolean;
}): Story {
  const [state, setState] = useState({ key: storyKey, index: 0 });
  const [userPaused, setUserPaused] = useState(startPaused);
  const index = state.key === storyKey ? state.index : 0;
  const count = slides.length;
  const elapsed = useRef(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);

  const goTo = useCallback(
    (target: number) => {
      elapsed.current = 0;
      setState({ key: storyKey, index: ((target % count) + count) % count });
    },
    [storyKey, count],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const togglePause = useCallback(() => setUserPaused((p) => !p), []);

  useEffect(() => {
    elapsed.current = 0;
  }, [storyKey]);

  const playing = canPlay && !userPaused;
  const slide = slides[index];

  useEffect(() => {
    const video = videoRef.current;
    if (slide?.kind !== "video" || !video) return;
    if (playing) video.play().catch(() => undefined);
    else video.pause();
  }, [playing, slide, index, storyKey]);

  useEffect(() => {
    if (!playing || !slide) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      let progress: number;
      if (slide.kind === "video") {
        const v = videoRef.current;
        progress = v && v.duration ? v.currentTime / v.duration : 0;
      } else {
        elapsed.current += now - last;
        progress = elapsed.current / IMAGE_SLIDE_MS;
        if (progress >= 1 && count > 1) {
          next();
          return;
        }
      }
      last = now;
      if (fillRef.current)
        fillRef.current.style.transform = `scaleX(${Math.min(1, progress)})`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, slide, count, next]);

  return {
    index,
    playing,
    userPaused,
    goTo,
    next,
    prev,
    togglePause,
    videoRef,
    fillRef,
  };
}
