"use client";

import { useRef, type KeyboardEvent } from "react";
import type { ShowcaseEntry } from "@/data/showcase";
import { ProjectIcon } from "@/components/showcase/project-icons";

export const SHOWCASE_PANEL_ID = "project-showcase-panel";

export function tabId(slug: string): string {
  return `project-tab-${slug}`;
}

/**
 * The project tabs, drawn as an app dock: each project is its icon, and the
 * open one is raised with a dot under it like a running app.
 */
export function ProjectDock({
  entries,
  active,
  onSelect,
}: {
  entries: readonly ShowcaseEntry[];
  active: number;
  onSelect: (index: number) => void;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const move = (target: number) => {
    const i = (target + entries.length) % entries.length;
    onSelect(i);
    refs.current[i]?.focus();
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") move(active + 1);
    else if (e.key === "ArrowLeft") move(active - 1);
    else if (e.key === "Home") move(0);
    else if (e.key === "End") move(entries.length - 1);
    else return;
    e.preventDefault();
  };
  return (
    <div
      role="tablist"
      aria-label="Projects"
      className="flex justify-between sm:justify-start sm:gap-7"
      onKeyDown={onKeyDown}
    >
      {entries.map((entry, i) => {
        const selected = i === active;
        return (
          <button
            key={entry.slug}
            ref={(el) => {
              refs.current[i] = el;
            }}
            id={tabId(entry.slug)}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={SHOWCASE_PANEL_ID}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(i)}
            className="group flex w-[3.75rem] flex-col items-center gap-1.5 rounded-xl pt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <span
              className={`block size-11 overflow-hidden rounded-[11px] shadow-[0_1px_2px_rgb(0_0_0/0.14),0_6px_14px_-6px_rgb(0_0_0/0.35)] ring-1 ring-black/5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 ${
                selected ? "-translate-y-1 group-hover:-translate-y-1" : ""
              }`}
            >
              <ProjectIcon slug={entry.slug} />
            </span>
            <span
              className={`flex h-[2.6em] items-start justify-center text-center font-mono text-[10.5px] leading-tight transition-colors ${
                selected
                  ? "text-neutral-900"
                  : "text-neutral-500 group-hover:text-neutral-700"
              }`}
            >
              {entry.tabLabel}
            </span>
            <span
              className={`size-1 rounded-full bg-neutral-900 transition-opacity ${
                selected ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
