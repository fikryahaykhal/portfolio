import { ArrowUpRight, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="03" title="Selected work" />
        <ul className="mt-10 flex flex-col gap-6">
          {siteConfig.projects.map((project, index) => (
            <li
              key={project.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/30 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex shrink-0 gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm text-muted transition hover:border-foreground/30 hover:text-foreground"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-1 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition hover:bg-accent-soft"
                  >
                    Live
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
