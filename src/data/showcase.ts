import { RESUME_DATA } from "@/data/resume-data";

/**
 * The projects shown as tabs in the showcase, each with real captures of the
 * product. Bullets and stack come from RESUME_DATA so the printed resume and
 * the showcase never disagree; this file adds only what the showcase needs.
 */

export type FrameKind = "phone" | "browser";

export interface Slide {
  kind: "image" | "video";
  src: string;
  /** First frame of a video, shown before it loads. */
  poster?: string;
  alt: string;
  caption: string;
  /** A smaller capture floated over the slide, such as an extension popup. */
  overlay?: { src: string; alt: string; width: number; height: number };
}

export interface ShowcaseLink {
  label: string;
  href: string;
}

export interface ShowcaseEntry {
  slug: string;
  /** Short name under the tab icon. */
  tabLabel: string;
  /** Must match a title in RESUME_DATA.projects. */
  resumeTitle: string;
  name: string;
  tagline: string;
  platform: string;
  frame: FrameKind;
  /** Text in the browser frame's address bar. */
  windowTitle?: string;
  /** Width over height of every slide in this project. */
  mediaAspect: number;
  /**
   * Room above captures that have no status bar, such as a web build shown in
   * a phone frame, so the content clears the rounded corners.
   */
  screenInset?: { top: string; background: string };
  slides: Slide[];
  links: ShowcaseLink[];
}

const PHONE_ASPECT = 750 / 1631;
const BROWSER_ASPECT = 1600 / 1000;

export const SHOWCASE: readonly ShowcaseEntry[] = [
  {
    slug: "tla",
    tabLabel: "Lifting App",
    resumeTitle: "The Lifting App — AI Strength Coach",
    name: "The Lifting App",
    tagline:
      "An iOS workout log with a coach that reads your training history before it answers.",
    platform: "iOS app, in TestFlight beta",
    frame: "phone",
    mediaAspect: PHONE_ASPECT,
    slides: [
      {
        kind: "image",
        src: "/projects/tla/01-home.webp",
        alt: "The Lifting App home screen with strength growth, weekly tonnage rings and recent sessions",
        caption:
          "Home shows the day's plan, strength growth per week, and this week's volume.",
      },
      {
        kind: "image",
        src: "/projects/tla/02-coach.webp",
        alt: "Coach conversation that cites the user's logged lifts",
        caption:
          "The coach checks your training data before it answers, and shows each lookup.",
      },
      {
        kind: "image",
        src: "/projects/tla/03-coach-dark.webp",
        alt: "The same coach conversation in dark mode with suggested follow-up questions",
        caption:
          "Every answer comes from your own lifts, with follow-up questions underneath.",
      },
      {
        kind: "image",
        src: "/projects/tla/04-split.webp",
        alt: "Pick your split screen with templates and a build custom option",
        caption:
          "New lifters pick a split from templates, or dictate their own.",
      },
    ],
    links: [
      { label: "theliftingapp.com", href: "https://theliftingapp.com" },
      { label: "GitHub", href: "https://github.com/rsbryan/the-lifting-app" },
    ],
  },
  {
    slug: "sdopt",
    tabLabel: "SDOPT",
    resumeTitle: "SDOPT — South Bay Plume Tracker",
    name: "SDOPT",
    tagline:
      "Where the Tijuana River sewage plume is drifting along the South Bay coast, and which beaches are in its path.",
    platform: "Web app on live public data",
    frame: "browser",
    windowTitle: "SDOPT · South Bay plume tracker",
    mediaAspect: BROWSER_ASPECT,
    slides: [
      {
        kind: "video",
        src: "/projects/sdopt/01-live.mp4",
        poster: "/projects/sdopt/01-live.poster.webp",
        alt: "Animated surface currents off the South Bay with beach stations colored by county status",
        caption:
          "Live HF radar currents, with every county beach colored by its official status.",
      },
      {
        kind: "video",
        src: "/projects/sdopt/02-answer.mp4",
        poster: "/projects/sdopt/02-answer.poster.webp",
        alt: "Scrolling the sidebar from the drift answer to the wave and river sections",
        caption:
          "The sidebar says which way the plume is drifting, then shows the waves and river flow behind it.",
      },
    ],
    links: [],
  },
  {
    slug: "chess-coach",
    tabLabel: "Chess Coach",
    resumeTitle: "Chess Coach — Game Review Extension",
    name: "Chess Coach",
    tagline:
      "A free Chrome extension that gives every chess.com game a full Stockfish review, right in the browser.",
    platform: "Chrome extension",
    frame: "browser",
    windowTitle: "Chess Coach · Game Review",
    mediaAspect: BROWSER_ASPECT,
    slides: [
      {
        kind: "image",
        src: "/projects/chess-coach/01-review.webp",
        alt: "Game review of Morphy's Opera Game with 13.Rxd7 marked Brilliant and accuracy scores",
        caption:
          "Morphy's Opera Game from 1858, reviewed. The extension marks 13.Rxd7 as Brilliant.",
        overlay: {
          src: "/projects/chess-coach/popup.webp",
          alt: "Chess Coach extension popup",
          width: 260,
          height: 322,
        },
      },
      {
        kind: "video",
        src: "/projects/chess-coach/02-key-moments.mp4",
        poster: "/projects/chess-coach/02-key-moments.poster.webp",
        alt: "Clicking the evaluation graph to step through the game",
        caption: "Click the evaluation graph to jump between the key moments.",
      },
      {
        kind: "video",
        src: "/projects/chess-coach/03-explore.mp4",
        poster: "/projects/chess-coach/03-explore.poster.webp",
        alt: "Showing the best move, then dragging pieces to build a variation",
        caption: "Show the best move, then drag pieces to try your own line.",
      },
      {
        kind: "image",
        src: "/projects/chess-coach/04-history.webp",
        alt: "History and stats page with record, average accuracy and openings",
        caption: "History and stats build up across every game you review.",
      },
    ],
    links: [],
  },
  {
    slug: "pokerlab",
    tabLabel: "PokerLab",
    resumeTitle: "PokerLab — Poker Decision Trainer",
    name: "PokerLab",
    tagline:
      "A poker trainer that deals realistic 6-max spots and grades every decision.",
    platform: "Web app",
    frame: "browser",
    windowTitle: "PokerLab",
    mediaAspect: BROWSER_ASPECT,
    slides: [
      {
        kind: "image",
        src: "/projects/pokerlab/01-modes.webp",
        alt: "PokerLab home with three modes: random hands, walkthrough and coached play",
        caption:
          "Three ways to train: random spots, full-hand walkthroughs, and coached play.",
      },
      {
        kind: "video",
        src: "/projects/pokerlab/02-walkthrough.mp4",
        poster: "/projects/pokerlab/02-walkthrough.poster.webp",
        alt: "A walkthrough hand where the other players act before the user picks a raise size",
        caption:
          "In a walkthrough the other players act live, then you pick your move and sizing.",
      },
      {
        kind: "image",
        src: "/projects/pokerlab/03-random.webp",
        alt: "A random turn spot on a six-max table",
        caption: "A random turn spot, waiting on your decision.",
      },
    ],
    links: [],
  },
  {
    slug: "vitals",
    tabLabel: "Vitals",
    resumeTitle: "Vitals — Health and Training Dashboard",
    name: "Vitals",
    tagline:
      "A health and training dashboard that reads Apple Watch data on iOS and shows the same numbers on the web.",
    platform: "iOS and web app",
    frame: "phone",
    mediaAspect: PHONE_ASPECT,
    screenInset: { top: "5%", background: "#ffffff" },
    slides: [
      {
        kind: "image",
        src: "/projects/vitals/01-dashboard.webp",
        alt: "Vitals dashboard with sample data: score, biological age, recovery and heart cards, and a biomarker range",
        caption:
          "The dashboard on sample data: recovery, heart, and blood markers at a glance.",
      },
    ],
    links: [],
  },
];

type ResumeProject = (typeof RESUME_DATA.projects)[number];

/** The resume entry behind a showcase tab. Throws at build time if a title drifts. */
export function resumeProject(entry: ShowcaseEntry): ResumeProject {
  const project = RESUME_DATA.projects.find(
    (p) => p.title === entry.resumeTitle,
  );
  if (!project)
    throw new Error(
      `Showcase entry ${entry.slug} has no resume project titled "${entry.resumeTitle}"`,
    );
  return project;
}

/** Resume projects that have no showcase tab, listed under it as plain cards. */
export const OTHER_PROJECTS = RESUME_DATA.projects.filter(
  (p) => !SHOWCASE.some((entry) => entry.resumeTitle === p.title),
);
