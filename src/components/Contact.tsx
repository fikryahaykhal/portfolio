import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="04" title="Contact" />
        <div className="mt-10 rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-elevated p-8 sm:p-12">
          <p className="max-w-xl text-lg text-muted">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-lg font-medium text-accent transition hover:text-accent-soft"
            >
              <Mail size={20} />
              {siteConfig.email}
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} />
              {siteConfig.location}
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.email}?subject=Hello%20from%20your%20portfolio`}
            className="mt-10 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-background transition hover:bg-accent-soft"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
