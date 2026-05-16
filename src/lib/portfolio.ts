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
    company: "Independent",
    role: "Founder & Engineer",
    start: "Jan 2026",
    end: "Present",
    location: "Remote · Full Time",
    summary:
      "Independent engineering and consulting work on backend systems, distributed infrastructure, and product builds.",
    highlights: [
      "Building product software and taking on backend / AI engagements.",
    ],
    stack: ["TypeScript", "Spring Boot", "Next.js", "AWS"],
  },
  {
    company: "Tech-Instinct",
    role: "Backend Engineer",
    start: "Nov 2023",
    end: "Jan 2026",
    location: "Béjaïa · Full Time",
    summary:
      "Scaling a multi-frontend voting platform, leading cross-region AWS migration, and architecting backend infrastructure for invoicing.",
    highlights: [
      "Developed and optimized the Voteer platform serving 5 frontend apps with up to 100 concurrent users; reduced latency via Hazelcast distributed caching.",
      "Led AWS migration from Ireland to Paris region and built a dedicated staging environment.",
      "Designed backend architecture for the after-sales service module of FAST (invoicing app), including offline PWA functionality.",
      "Mentored a backend intern on Spring Boot, API design, and integration testing.",
    ],
    stack: ["Spring Boot", "Java", "AWS", "Hazelcast", "PWA"],
  },
  {
    company: "Abderrahmane Mira University",
    role: "Adjunct Professor",
    start: "Sept 2023",
    end: "Jan 2024",
    location: "Béjaïa · Part Time",
    summary:
      "Taught Object-Oriented Programming workshops to second-year Computer Engineering students.",
    highlights: [
      "Conducted Object-Oriented Programming workshops for 2nd-year Computer Engineering students.",
    ],
    stack: ["Java", "OOP"],
  },
  {
    company: "MSolution",
    role: "Full Stack Developer",
    start: "Jan 2023",
    end: "Nov 2023",
    location: "Béjaïa · Part Time",
    summary:
      "Built and deployed a multilingual web platform serving 1,000+ regional lawyers, end-to-end.",
    highlights: [
      "Built and deployed barreaubejaia.com for 1,000+ regional lawyers with multilingual support (Arabic, French, English).",
      "Django + SQLite backend with Bootstrap frontend; real-time announcements, council updates, and document access system.",
    ],
    stack: ["Django", "Python", "SQLite", "Bootstrap"],
  },
  {
    company: "University Hospital Center Khelil Amrane",
    role: "Data Science Intern",
    start: "May 2023",
    end: "June 2023",
    location: "Béjaïa · Internship",
    summary:
      "Trained CNNs on MRI imaging for neurosurgical decision support and shipped a Django decision-support tool.",
    highlights: [
      "Trained CNN models on 1,700 MRI images (+ augmentation) with TensorFlow, achieving 93% accuracy for neurosurgical decision prediction.",
      "Integrated the model into a Django web app as a decision-support tool for medical students.",
    ],
    stack: ["TensorFlow", "Python", "Django", "CNN"],
  },
  {
    company: "Rival School Béjaïa",
    role: "Coding Instructor",
    start: "April 2023",
    end: "June 2023",
    location: "Béjaïa · Part Time",
    summary:
      "Taught Python fundamentals and problem-solving techniques to students.",
    highlights: [
      "Taught Python fundamentals and problem-solving techniques to students.",
    ],
    stack: ["Python"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  year: string;
  tags: string[];
  stack: string[];
  metric?: { label: string; value: string };
  href?: string;
  demo?: string;
  feature?: boolean;
};

export const projects: Project[] = [
  {
    title: "Helix",
    blurb:
      "An opinionated open-source telemetry layer for React Server Components. Tracks server/client round-trips with sub-millisecond overhead, and surfaces waterfall traces directly inside the React DevTools.",
    year: "2026",
    tags: ["OSS", "Observability", "RSC"],
    stack: ["TypeScript", "Next.js", "React", "Vite", "OpenTelemetry", "Rust"],
    metric: { label: "GitHub stars", value: "4.1k" },
    href: "https://github.com/oussthecodeguy/helix",
    demo: "https://helix.dev",
    feature: true,
  },
  {
    title: "Atlas Editor",
    blurb:
      "A collaborative document editor with CRDT-backed offline sync, custom block primitives, and a plugin runtime. Real-time presence, keyboard-first authoring, and full export to portable formats.",
    year: "2025",
    tags: ["Product", "Collab", "CRDT"],
    stack: ["TypeScript", "React", "Yjs", "tRPC", "Postgres", "Tiptap"],
    metric: { label: "Daily active orgs", value: "320" },
    href: "https://github.com/oussthecodeguy/atlas-editor",
    demo: "https://atlas-editor.app",
    feature: true,
  },
  {
    title: "Pulse",
    blurb:
      "A lightweight uptime + Lighthouse runner for indie teams. Runs in your CI; posts deltas to Slack with regression-aware annotations and trend charts.",
    year: "2025",
    tags: ["Tooling", "Performance"],
    stack: ["Go", "Lighthouse", "GitHub Actions", "Slack API"],
    metric: { label: "Teams using", value: "1.2k" },
    href: "https://github.com/oussthecodeguy/pulse",
    demo: "https://pulse.run",
  },
  {
    title: "Fold",
    blurb:
      "A typographic blogging platform with built-in newsletter delivery and zero external runtime deps. Optimized for reading: sub-100kb pages, instant nav, no JS required for content.",
    year: "2024",
    tags: ["Product", "Web"],
    stack: ["Astro", "TypeScript", "MDX", "SQLite", "Resend"],
    metric: { label: "Posts published", value: "18k" },
    href: "https://github.com/oussthecodeguy/fold",
    demo: "https://fold.page",
  },
  {
    title: "Glyph",
    blurb:
      "A small, fast, type-safe i18n library with translation-state debugging baked into the React DevTools. ICU MessageFormat support, typed keys, and first-class server-component integration.",
    year: "2024",
    tags: ["OSS", "DX"],
    stack: ["TypeScript", "React", "ICU MessageFormat", "Vite"],
    metric: { label: "Weekly downloads", value: "82k" },
    href: "https://github.com/oussthecodeguy/glyph",
    demo: "https://glyph.dev",
  },
  {
    title: "Deck",
    blurb:
      "A presentation tool for engineers — write slides in MDX, render diagrams from code, export to PDF. Built around a dual-pane authoring loop: source on the left, rendered slide on the right.",
    year: "2023",
    tags: ["Product", "Side"],
    stack: ["Next.js", "MDX", "Mermaid", "Playwright"],
    href: "https://github.com/oussthecodeguy/deck",
    demo: "https://deck.show",
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
  grade?: string;
  thesis?: string;
  detail: string;
};

export const education: Education[] = [
  {
    institution: "Abderrahmane Mira University, Béjaïa",
    degree: "Master of Artificial Intelligence",
    start: "Sept 2021",
    end: "July 2023",
    grade: "17/20",
    thesis:
      "Deep Learning–based prediction of petrous tumour surgical approach.",
    detail:
      "Graduation: 17/20. Thesis: Deep Learning–based prediction of petrous tumour surgical approach.",
  },
  {
    institution: "Abderrahmane Mira University, Béjaïa",
    degree: "Bachelor of Computer Science",
    start: "Sept 2018",
    end: "May 2021",
    grade: "17/20",
    detail: "Graduation: 17/20.",
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
