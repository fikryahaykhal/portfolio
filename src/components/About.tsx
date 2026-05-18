import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="01" title="About" />
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-5xl font-semibold text-accent/80">
              {new Date().getFullYear() - 2021}+
            </p>
            <p className="mt-2 text-sm text-muted">Years building products</p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Based in</dt>
                <dd className="mt-1 font-medium">{siteConfig.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Focus</dt>
                <dd className="mt-1 font-medium">Web · Mobile · APIs</dd>
              </div>
            </dl>
          </div>
          <div className="space-y-5 leading-relaxed text-muted">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
