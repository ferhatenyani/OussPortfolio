export const profile = {
  name: "Oussama Bendou",
  handle: "@oussthecodeguy",
  role: "Software Engineer · Product Builder",
  location: "Casablanca / Remote · UTC+1",
  email: "oussthecodeguy@gmail.com",
  available: true,
  tagline:
    "I design and build performant, opinionated software — from full-stack platforms to interfaces engineered for speed and clarity.",
  social: [
    { label: "GitHub", href: "https://github.com/oussthecodeguy", handle: "github/oussthecodeguy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oussthecodeguy", handle: "in/oussthecodeguy" },
    { label: "X / Twitter", href: "https://twitter.com/oussthecodeguy", handle: "x/oussthecodeguy" },
    { label: "Email", href: "mailto:oussthecodeguy@gmail.com", handle: "oussthecodeguy@gmail.com" },
  ],
};

export const sections = [
  { id: "experience", index: "01", label: "Experience" },
  { id: "projects", index: "02", label: "Projects" },
  { id: "testimonials", index: "03", label: "Testimonials" },
  { id: "about", index: "04", label: "About" },
  { id: "academic", index: "05", label: "Academic" },
  { id: "contact", index: "06", label: "Contact" },
] as const;

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Lumen Systems",
    role: "Senior Software Engineer",
    start: "2024",
    end: "Present",
    location: "Remote",
    summary:
      "Lead engineer on a real-time analytics platform serving 40M+ events/day. Owns the data ingestion pipeline and the customer-facing dashboard.",
    highlights: [
      "Cut p95 dashboard load from 2.6s → 380ms via streaming SSR and edge caching",
      "Designed an event schema registry adopted by 12 product teams",
      "Mentored 4 engineers; established the platform-team RFC process",
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Redis", "ClickHouse", "Kafka"],
  },
  {
    company: "Nordstack",
    role: "Software Engineer",
    start: "2022",
    end: "2024",
    location: "Stockholm",
    summary:
      "Shipped a multi-tenant billing engine and rebuilt the merchant portal. First engineer in the EU squad.",
    highlights: [
      "Rebuilt the merchant portal in 6 weeks; +28% WAU within a quarter",
      "Authored idempotent webhooks layer processing 1.2M req/day at four-9s",
      "Introduced visual regression tests, eliminating four UI-related Sev-2s",
    ],
    stack: ["Next.js", "tRPC", "Drizzle", "Postgres", "Stripe", "Playwright"],
  },
  {
    company: "Cobalt Labs",
    role: "Full-Stack Engineer",
    start: "2020",
    end: "2022",
    location: "Berlin / Remote",
    summary:
      "Built internal tooling and customer-facing features for a B2B logistics SaaS. Worked across the stack with a small founding team.",
    highlights: [
      "Built an offline-first warehouse client used in 9 countries",
      "Owned the migration from REST to GraphQL across the platform",
      "Led the design-engineering pairing program with the product team",
    ],
    stack: ["React", "GraphQL", "Node", "Postgres", "AWS"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  year: string;
  tags: string[];
  metric?: { label: string; value: string };
  href?: string;
  feature?: boolean;
};

export const projects: Project[] = [
  {
    title: "Helix",
    blurb:
      "An opinionated open-source telemetry layer for React Server Components. Tracks server/client round-trips with sub-millisecond overhead.",
    year: "2026",
    tags: ["OSS", "Observability", "RSC"],
    metric: { label: "GitHub stars", value: "4.1k" },
    href: "#",
    feature: true,
  },
  {
    title: "Atlas Editor",
    blurb:
      "A collaborative document editor with CRDT-backed offline sync, custom block primitives, and a plugin runtime.",
    year: "2025",
    tags: ["Product", "Collab", "CRDT"],
    metric: { label: "Daily active orgs", value: "320" },
    href: "#",
    feature: true,
  },
  {
    title: "Pulse",
    blurb:
      "A lightweight uptime + lighthouse runner for indie teams. Runs in your CI; posts deltas to Slack.",
    year: "2025",
    tags: ["Tooling", "Performance"],
    metric: { label: "Teams using", value: "1.2k" },
    href: "#",
  },
  {
    title: "Fold",
    blurb:
      "A typographic blogging platform with built-in newsletter delivery and zero external runtime deps.",
    year: "2024",
    tags: ["Product", "Web"],
    metric: { label: "Posts published", value: "18k" },
    href: "#",
  },
  {
    title: "Glyph",
    blurb:
      "A small, fast, type-safe i18n library with translation-state debugging baked into the React DevTools.",
    year: "2024",
    tags: ["OSS", "DX"],
    metric: { label: "Weekly downloads", value: "82k" },
    href: "#",
  },
  {
    title: "Deck",
    blurb:
      "A presentation tool for engineers — write slides in MDX, render diagrams from code, export to PDF.",
    year: "2023",
    tags: ["Product", "Side"],
    href: "#",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ouss is the rare engineer who pairs taste with rigor. He shipped our analytics platform in a quarter — every detail considered, every regression accounted for.",
    name: "Maya Lindberg",
    role: "VP of Engineering",
    org: "Lumen Systems",
  },
  {
    quote:
      "Watching Ouss work is a masterclass. He left the codebase materially better than he found it, and our team picked up his patterns long after he moved on.",
    name: "Daniel Park",
    role: "Staff Engineer",
    org: "Nordstack",
  },
  {
    quote:
      "He treats the product like a craftsman treats wood — patient, exacting, never wasteful. Our merchant portal is the cleanest surface in the stack because of him.",
    name: "Chiara Romano",
    role: "Head of Product",
    org: "Nordstack",
  },
  {
    quote:
      "The kind of engineer founders want on day one. Pragmatic, fast, and quietly raises the bar around him without making noise about it.",
    name: "Tomás Ferreira",
    role: "Co-founder & CTO",
    org: "Cobalt Labs",
  },
];

export type Education = {
  institution: string;
  degree: string;
  start: string;
  end: string;
  detail: string;
};

export const education: Education[] = [
  {
    institution: "École Centrale",
    degree: "M.Eng. — Software & Distributed Systems",
    start: "2018",
    end: "2020",
    detail:
      "Thesis on consistency models for collaborative editing. Published one paper, presented at a regional research workshop.",
  },
  {
    institution: "Université Mohammed V",
    degree: "B.Sc. — Computer Science",
    start: "2015",
    end: "2018",
    detail:
      "Graduated with honors. Captained the algorithms competition team; reached the regional finals two years running.",
  },
  {
    institution: "Continuous",
    degree: "Self-directed study",
    start: "2014",
    end: "—",
    detail:
      "Reading rotation: distributed systems, type theory, interaction design, the craft of writing.",
  },
];

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Go",
  "Rust",
  "Postgres",
  "ClickHouse",
  "Redis",
  "Kafka",
  "Docker",
  "AWS",
  "Vercel",
  "Cloudflare",
  "Tailwind",
  "Framer Motion",
];

export const values = [
  { k: "Bias for clarity", v: "Code, copy, and interfaces should reduce ambiguity, not introduce it." },
  { k: "Performance is a feature", v: "Speed earns trust. Most performance issues are design issues in disguise." },
  { k: "Ship to learn", v: "Production teaches what staging cannot. Small, observable releases beat grand reveals." },
  { k: "Craft compounds", v: "Spending an extra hour on a primitive saves a week on the things built with it." },
];
