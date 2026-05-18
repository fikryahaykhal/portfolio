import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="02" title="Skills" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.skills.map((skill) => (
            <li
              key={skill.name}
              className="group rounded-xl border border-border bg-surface p-5 transition hover:border-accent/40 hover:bg-surface-elevated"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-accent">
                {skill.category}
              </p>
              <p className="mt-2 font-medium">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
