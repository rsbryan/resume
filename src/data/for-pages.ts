// Per-company pages at /for/<slug>. Each one carries a video Steven
// records for one person at that company. A page only builds once its
// `video` is set, so an entry can sit here before the video exists.

export type ForPage = {
  slug: string;
  company: string;
  /** First name the page greets. */
  person: string;
  /** YouTube or Loom share URL, or a path under /public such as /videos/tolan.mp4. */
  video?: string;
  /** One short paragraph in Steven's words, shown under the video. */
  note: string;
};

export const FOR_LINKS = [
  { label: "The Lifting App", url: "https://theliftingapp.com" },
  { label: "Resume", url: "https://stevenb.dev" },
  { label: "GitHub", url: "https://github.com/rsbryan" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/stevenbryan-/" },
] as const;

export const FOR_PAGES: readonly ForPage[] = [
  {
    slug: "tolan",
    company: "Tolan",
    person: "Quinten",
    note: "This is The Lifting App, an iOS app I built. You talk to it after a set, Whisper transcribes it, and Claude turns what you said into the rows of your workout, with a Live Activity on the lock screen while you train.",
  },
  {
    slug: "town",
    company: "Town",
    person: "Flora",
    note: "At Browserbase I helped build the evaluation infrastructure for Google's computer use model launch. The Lifting App, my iOS app, has a Live Activity and voice capture that turns a spoken set into typed rows.",
  },
  {
    slug: "mach9",
    company: "Mach9",
    person: "Andrew",
    note: "At Browserbase I helped build the evaluation infrastructure for Google's computer use model launch, a runner that executed and scored over 5,000 tasks with logs and screenshots for every one.",
  },
  {
    slug: "different",
    company: "Different",
    person: "Abhinav",
    note: "At Browserbase I helped build the evaluation infrastructure for Google's computer use model launch. Outside of work I built a watcher that reads a public listings feed every 30 minutes, filters it, and drops what's left into my own task app.",
  },
  {
    slug: "blacksmith",
    company: "Blacksmith",
    person: "Ryan",
    note: "At Browserbase I helped build the evaluation infrastructure for Google's computer use model launch, a runner that executed over 5,000 browser tasks and logged every one. Outside of class I built a six node Unix network with its own certificate authority and LDAP.",
  },
  {
    slug: "asi",
    company: "ASI",
    person: "Taejus",
    note: "At Browserbase I helped build the evaluation infrastructure for Google's computer use model launch and ran the benchmarks against OpenAI and Anthropic that went into the launch materials.",
  },
  {
    slug: "arda",
    company: "Arda",
    person: "Itamar",
    note: "The AI coach in The Lifting App writes a full training program through tool calls. Every plan gets coerced into typed rows, and any tool error goes back to the model so it fixes its own output.",
  },
  {
    slug: "eka",
    company: "Eka",
    person: "Evan",
    note: "At Browserbase I helped build the evaluation infrastructure for Google's computer use model launch, a runner that executed and logged over 5,000 tasks so the team could see what broke and why.",
  },
  {
    slug: "coherence",
    company: "Coherence",
    person: "Lawrence",
    note: "I built The Lifting App, an iOS app that turns a spoken set into typed workout rows, and at Browserbase I built evaluation infrastructure that ran and scored over 5,000 tasks.",
  },
];

export function findForPage(slug: string): ForPage | undefined {
  return FOR_PAGES.find((page) => page.slug === slug && Boolean(page.video));
}
