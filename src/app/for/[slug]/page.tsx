import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { FOR_LINKS, FOR_PAGES, findForPage } from "@/data/for-pages";

type Params = { params: { slug: string } };

// Only pages with a recorded video exist; every other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return FOR_PAGES.filter((page) => page.video).map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = findForPage(params.slug);
  if (!page) return {};
  return {
    title: `For ${page.person} at ${page.company} | Steven Bryan`,
    description: `A short video from Steven Bryan for ${page.person} at ${page.company}.`,
    robots: { index: false, follow: false },
  };
}

type Embed = { kind: "iframe"; src: string } | { kind: "video"; src: string };

function toEmbed(video: string): Embed {
  const youtube = video.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);
  if (youtube) return { kind: "iframe", src: `https://www.youtube-nocookie.com/embed/${youtube[1]}` };
  const loom = video.match(/loom\.com\/(?:share|embed)\/([\w]+)/);
  if (loom) return { kind: "iframe", src: `https://www.loom.com/embed/${loom[1]}` };
  return { kind: "video", src: video };
}

export default function ForPageView({ params }: Params) {
  const page = findForPage(params.slug);
  if (!page?.video) notFound();
  const embed = toEmbed(page.video);

  return (
    <Section className="gap-y-6">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-bold">
          Hey {page.person}, this one is for {page.company}.
        </h1>
        <p className="font-mono text-sm text-muted-foreground">
          Steven Bryan, senior CS at San Diego State, graduating May 2027
        </p>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg border border-muted bg-black">
        {embed.kind === "iframe" ? (
          <iframe
            src={embed.src}
            title={`Video for ${page.company}`}
            className="size-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={embed.src} className="size-full" controls playsInline preload="metadata" />
        )}
      </div>

      <p className="text-pretty text-sm text-muted-foreground">{page.note}</p>

      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
        {FOR_LINKS.map((link) => (
          <a key={link.url} href={link.url} className="underline hover:text-foreground">
            {link.label}
          </a>
        ))}
        <a href="mailto:sbryancs@gmail.com" className="underline hover:text-foreground">
          sbryancs@gmail.com
        </a>
      </div>
    </Section>
  );
}
