import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 glow-orb" />

      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 font-mono text-sm text-accent">Portfolio · {siteConfig.location}</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{siteConfig.name}</span>
          <span className="text-muted"> — </span>
          {siteConfig.role}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{siteConfig.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
          >
            View my work
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:border-accent/50 hover:text-accent-soft"
          >
            <Mail size={16} />
            Email me
          </a>
        </div>

        <div className="mt-12 flex items-center gap-5">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition hover:text-foreground"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
