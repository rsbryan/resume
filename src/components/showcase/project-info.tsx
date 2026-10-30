import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { resumeProject, type ShowcaseEntry } from "@/data/showcase";

/** Name, pitch, what was built, stack and links for the open project. */
export function ProjectInfo({ entry }: { entry: ShowcaseEntry }) {
  const project = resumeProject(entry);
  return (
    <div className="min-w-0 duration-500 animate-in fade-in slide-in-from-bottom-1">
      <div className="font-mono text-xs text-neutral-500">{entry.platform}</div>
      <h3 className="mt-1 text-balance text-lg font-semibold leading-snug">
        {entry.name}
      </h3>
      <p className="mt-1 text-pretty text-sm text-neutral-600">
        {entry.tagline}
      </p>
      <ul className="mt-4 list-disc space-y-1.5 pl-4 font-mono text-xs leading-relaxed text-muted-foreground">
        {project.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-1">
        {project.techStack.map((tag) => (
          <Badge
            key={tag}
            className="border-black/[0.08] bg-white px-1.5 py-0 text-[10px] font-medium text-neutral-700"
            variant="outline"
          >
            {tag}
          </Badge>
        ))}
      </div>
      {entry.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
          {entry.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-0.5 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
            >
              {link.label}
              <ArrowUpRight className="size-3" aria-hidden />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
