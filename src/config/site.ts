export const siteConfig = {
  name: "Fikry Ahmad Haykhal",
  role: "Full-Stack Developer",
  tagline:
    "I build thoughtful web and mobile experiences — from polished interfaces to reliable APIs.",
  email: "fikryahaykhal@gmail.com",
  location: "Indonesia",
  social: {
    github: "https://github.com/fikryahaykhal",
    linkedin: "https://www.linkedin.com/in/fikry-ahmad-haykhal-a04a2a2a4/",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    { name: "TypeScript", category: "Language" },
    { name: "React / Next.js", category: "Frontend" },
    { name: "Flutter / Dart", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git & CI/CD", category: "Tools" },
    { name: "REST APIs", category: "Backend" },
  ],
  projects: [
    {
      title: "Batik Commerce Platform",
      description:
        "Full-stack marketplace for batik artisans with catalog browsing, cart, and admin dashboards.",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      href: "#",
      github: "#",
    },
    {
      title: "Vault Finance App",
      description:
        "Personal finance tracker with secure vault storage, insights, and clean mobile-first UI.",
      tags: ["Flutter", "REST API", "TypeScript"],
      href: "#",
      github: "#",
    },
    {
      title: "Portfolio & Brand Site",
      description:
        "Fast, accessible marketing site with animated sections and optimized Core Web Vitals.",
      tags: ["Next.js", "Tailwind", "Vercel"],
      href: "#",
      github: "#",
    },
  ],
  about: [
    "I'm a developer who cares about craft — clean code, clear UX, and products that feel fast and intentional.",
    "My work spans React/Next.js web apps and Flutter mobile projects. I enjoy owning features end-to-end, from database schema to pixel-perfect UI.",
    "When I'm not shipping, I'm exploring new frameworks, refining side projects, and learning what makes great software teams tick.",
  ],
} as const;
