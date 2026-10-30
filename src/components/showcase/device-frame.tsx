import type { FrameKind } from "@/data/showcase";

export const CHROME_HEIGHT = 34;
export const PHONE_BEZEL = 10;
export const PHONE_MAX_WIDTH = 250;
const PHONE_WIDTH_SHARE = 0.72;
const PHONE_RADIUS = 46;
const PHONE_SCREEN_RADIUS = 36;
const BROWSER_RADIUS = 12;

export interface FrameBox {
  width: number;
  height: number;
}

/** Outer size of a frame that shows media of the given aspect at a stage width. */
export function frameBox(
  kind: FrameKind,
  mediaAspect: number,
  stageWidth: number,
): FrameBox {
  if (kind === "phone") {
    const width = Math.min(
      PHONE_MAX_WIDTH,
      Math.round(stageWidth * PHONE_WIDTH_SHARE),
    );
    return {
      width,
      height:
        Math.round((width - 2 * PHONE_BEZEL) / mediaAspect) + 2 * PHONE_BEZEL,
    };
  }
  return {
    width: stageWidth,
    height: Math.round(stageWidth / mediaAspect) + CHROME_HEIGHT,
  };
}

const EASE = "cubic-bezier(0.2, 0.8, 0.2, 1)";
const MORPH_MS = 520;

/**
 * One element that is a phone or a browser window. It stays mounted across
 * projects and transitions its size, radius, bezel and toolbar, so switching
 * tabs reshapes the device instead of swapping it.
 */
export function DeviceFrame({
  kind,
  box,
  windowTitle,
  animate,
  children,
}: {
  kind: FrameKind;
  box: FrameBox;
  windowTitle?: string;
  animate: boolean;
  children: React.ReactNode;
}) {
  const phone = kind === "phone";
  const transition = animate
    ? [
        "width",
        "height",
        "padding",
        "border-radius",
        "background-color",
        "box-shadow",
      ]
        .map((p) => `${p} ${MORPH_MS}ms ${EASE}`)
        .join(", ")
    : "none";
  return (
    <div
      className="relative flex flex-col overflow-hidden"
      style={{
        width: box.width,
        height: box.height,
        padding: phone ? PHONE_BEZEL : 0,
        borderRadius: phone ? PHONE_RADIUS : BROWSER_RADIUS,
        backgroundColor: phone ? "#0d0d0e" : "#e9e9e6",
        boxShadow: phone
          ? "0 0 0 1px rgb(0 0 0 / 0.5), 0 30px 50px -24px rgb(0 0 0 / 0.45)"
          : "0 0 0 1px rgb(0 0 0 / 0.08), 0 24px 48px -28px rgb(0 0 0 / 0.35)",
        transition,
      }}
    >
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-1.5 overflow-hidden px-3"
        style={{
          height: phone ? 0 : CHROME_HEIGHT,
          opacity: phone ? 0 : 1,
          transition: animate
            ? `height ${MORPH_MS}ms ${EASE}, opacity 200ms linear`
            : "none",
        }}
      >
        <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" />
        <span className="mx-auto min-w-0 truncate rounded-md bg-white/80 px-3 py-0.5 font-mono text-[11px] text-neutral-500">
          {windowTitle ?? ""}
        </span>
        <span className="w-[42px] shrink-0" />
      </div>
      <div
        className="relative min-h-0 flex-1 overflow-hidden bg-black"
        style={{
          borderRadius: phone ? PHONE_SCREEN_RADIUS : 0,
          transition: animate ? `border-radius ${MORPH_MS}ms ${EASE}` : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
