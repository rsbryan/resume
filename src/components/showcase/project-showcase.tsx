"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SHOWCASE } from "@/data/showcase";
import { DeviceFrame, frameBox } from "@/components/showcase/device-frame";
import {
  ProjectDock,
  SHOWCASE_PANEL_ID,
  tabId,
} from "@/components/showcase/project-dock";
import { ProjectInfo } from "@/components/showcase/project-info";
import { SlideScreen } from "@/components/showcase/slide-screen";
import { StoryBar } from "@/components/showcase/story-bar";
import {
  useElementWidth,
  useOnScreen,
  usePageVisible,
  useReducedMotion,
} from "@/components/showcase/use-stage-observers";
import { useStory } from "@/components/showcase/use-story";

/** Below this stage width a phone sits above its details instead of beside them. */
const SIDE_BY_SIDE_MIN = 560;
/** Placeholder height before the stage has been measured. */
const UNMEASURED_HEIGHT = 560;
/** Fallback for browsers without requestIdleCallback. */
const WARM_DELAY_MS = 1500;
const DESK_DOTS = {
  backgroundImage: "radial-gradient(rgb(0 0 0 / 0.07) 1px, transparent 1px)",
  backgroundSize: "14px 14px",
};

/**
 * Every project in its own tab, each shown on the device it runs on. The
 * frame reshapes between a phone and a browser window as tabs change, and
 * real captures of the product play through like stories.
 */
export function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const width = useElementWidth(stageRef);
  const onScreen = useOnScreen(stageRef);
  const pageVisible = usePageVisible();
  const reducedMotion = useReducedMotion();
  const entry = SHOWCASE[active];

  // A shared link such as stevenb.dev/#sdopt opens on that project.
  useEffect(() => {
    const i = SHOWCASE.findIndex((e) => `#${e.slug}` === window.location.hash);
    if (i >= 0) setActive(i);
  }, []);

  // Warm the first capture of every project, so switching tabs never shows an empty screen.
  useEffect(() => {
    const warm = () =>
      SHOWCASE.forEach((e) => {
        const first = e.slides[0];
        const src = first.kind === "video" ? first.poster : first.src;
        if (src) new window.Image().src = src;
      });
    const idle =
      window.requestIdleCallback?.(warm) ??
      window.setTimeout(warm, WARM_DELAY_MS);
    return () =>
      window.cancelIdleCallback
        ? window.cancelIdleCallback(idle)
        : window.clearTimeout(idle);
  }, []);

  const select = useCallback((i: number) => {
    setActive(i);
    window.history.replaceState(null, "", `#${SHOWCASE[i].slug}`);
  }, []);

  const story = useStory({
    storyKey: entry.slug,
    slides: entry.slides,
    canPlay: onScreen && pageVisible && !hovered,
    startPaused: reducedMotion,
  });

  const box = width ? frameBox(entry.frame, entry.mediaAspect, width) : null;
  const sideBySide =
    entry.frame === "phone" && (width ?? 0) >= SIDE_BY_SIDE_MIN;

  return (
    <div
      className="rounded-2xl border border-black/[0.06] bg-[#f5f5f3] p-4 sm:p-6 lg:-mx-16"
      style={DESK_DOTS}
    >
      <ProjectDock entries={SHOWCASE} active={active} onSelect={select} />
      <div
        ref={stageRef}
        id={SHOWCASE_PANEL_ID}
        role="tabpanel"
        aria-labelledby={tabId(entry.slug)}
        className="mt-6"
        style={box ? undefined : { minHeight: UNMEASURED_HEIGHT }}
      >
        {box && (
          <div
            className={
              sideBySide ? "flex items-start gap-8" : "flex flex-col gap-5"
            }
          >
            <div
              className={
                entry.frame === "phone" && !sideBySide ? "self-center" : ""
              }
              style={{ width: box.width }}
              onPointerEnter={(e) =>
                e.pointerType === "mouse" && setHovered(true)
              }
              onPointerLeave={(e) =>
                e.pointerType === "mouse" && setHovered(false)
              }
            >
              <DeviceFrame
                kind={entry.frame}
                box={box}
                windowTitle={entry.windowTitle}
                animate={!reducedMotion}
              >
                <SlideScreen key={entry.slug} entry={entry} story={story} />
              </DeviceFrame>
              <StoryBar entry={entry} story={story} />
            </div>
            <div className={sideBySide ? "flex-1 pt-2" : ""}>
              <ProjectInfo key={entry.slug} entry={entry} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
