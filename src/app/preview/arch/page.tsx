"use client";

import { JetBrains_Mono } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
  values,
} from "@/lib/portfolio";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--p-mono",
});

// Catppuccin Mocha
const cat = {
  base: "#1E1E2E",
  mantle: "#181825",
  crust: "#11111B",
  surface0: "#313244",
  surface1: "#45475A",
  surface2: "#585B70",
  text: "#CDD6F4",
  subtext1: "#BAC2DE",
  subtext0: "#A6ADC8",
  overlay1: "#7F849C",
  overlay0: "#6C7086",
  blue: "#89B4FA",
  lavender: "#B4BEFE",
  sapphire: "#74C7EC",
  sky: "#89DCEB",
  teal: "#94E2D5",
  green: "#A6E3A1",
  yellow: "#F9E2AF",
  peach: "#FAB387",
  maroon: "#EBA0AC",
  red: "#F38BA8",
  pink: "#F5C2E7",
  mauve: "#CBA6F7",
};

const ARCH_LOGO = `       /\\
      /  \\
     /\\   \\
    /  \\   \\
   / /\\ \\   \\
  / /  \\ \\   \\
 / /    \\ \\   \\
/_/______\\_\\___\\`;

type WS = {
  n: number;
  slug: string;
  label: string;
  cmd: string;
  tone: string;
};

const workspaces: WS[] = [
  { n: 1, slug: "home", label: "Home", cmd: "~/home", tone: "#89B4FA" },
  { n: 2, slug: "work", label: "Work", cmd: "~/projects", tone: "#A6E3A1" },
  { n: 3, slug: "career", label: "Career", cmd: "~/experience", tone: "#FAB387" },
  { n: 4, slug: "reviews", label: "Reviews", cmd: "~/reviews", tone: "#F5C2E7" },
  { n: 5, slug: "about", label: "About", cmd: "~/about", tone: "#CBA6F7" },
  { n: 6, slug: "contact", label: "Contact", cmd: "~/contact", tone: "#94E2D5" },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ArchPreview() {
  const [activeN, setActiveN] = useState(1);
  const active = workspaces.find((w) => w.n === activeN) ?? workspaces[0];

  const [clock, setClock] = useState(() => formatClock(new Date()));
  useEffect(() => {
    const id = setInterval(() => setClock(formatClock(new Date())), 60_000);
    return () => clearInterval(id);
  }, []);

  // keyboard nav: 1–6 jumps workspaces
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        document.activeElement &&
        ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
      )
        return;
      const n = Number(e.key);
      if (n >= 1 && n <= 6) setActiveN(n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main
      className={`${mono.variable} relative min-h-screen`}
      style={{
        background: cat.crust,
        color: cat.text,
        fontFamily: "var(--p-mono), ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: "14px",
        lineHeight: 1.6,
      }}
    >
      <DotGrid />

      <div
        className="relative z-10 mx-auto max-w-[1100px] mt-6 mb-6 rounded-[10px] overflow-hidden border"
        style={{
          borderColor: cat.surface1,
          background: cat.base,
          boxShadow: `0 30px 60px -20px ${cat.crust}`,
        }}
      >
        {/* WINDOW CHROME */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{ borderColor: cat.surface0, background: cat.crust }}
        >
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ background: cat.red }} />
            <span className="h-3 w-3 rounded-full" style={{ background: cat.yellow }} />
            <span className="h-3 w-3 rounded-full" style={{ background: cat.green }} />
          </div>
          <div className="text-[12px]" style={{ color: cat.subtext0 }}>
            <span style={{ color: cat.green }}>ouss</span>
            <span style={{ color: cat.overlay0 }}>@</span>
            <span style={{ color: cat.sapphire }}>arch</span>
            <span style={{ color: cat.overlay0 }}>:</span>
            <span style={{ color: cat.lavender }}>{active.cmd}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px]" style={{ color: cat.overlay1 }}>
            <span>portfolio.session</span>
          </div>
        </div>

        {/* WAYBAR — workspaces */}
        <nav
          aria-label="Workspaces"
          className="flex items-center justify-between px-3 py-1.5 border-b text-[12px]"
          style={{ borderColor: cat.surface0, background: cat.mantle }}
        >
          <div className="flex items-center gap-1 overflow-x-auto">
            {workspaces.map((w) => {
              const isActive = w.n === activeN;
              return (
                <button
                  key={w.slug}
                  onClick={() => setActiveN(w.n)}
                  aria-current={isActive ? "page" : undefined}
                  className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors"
                  style={{
                    background: isActive ? w.tone : "transparent",
                    color: isActive ? cat.crust : cat.subtext0,
                    minHeight: 32,
                    fontWeight: isActive ? 700 : 500,
                  }}
                  title={`Press ${w.n}`}
                >
                  <span style={{ opacity: isActive ? 1 : 0.7 }}>{w.n}</span>
                  <span>{w.label}</span>
                </button>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px]" style={{ color: cat.overlay1 }}>
            <span>press 1–6 to switch</span>
            <span style={{ color: cat.surface2 }}>·</span>
            <span style={{ color: cat.lavender }}>{clock}</span>
          </div>
        </nav>

        {/* WORKSPACE BREADCRUMB */}
        <div
          className="flex items-center justify-between px-6 py-3 border-b text-[12px]"
          style={{ borderColor: cat.surface0, background: cat.base }}
        >
          <div className="flex items-center gap-2">
            <span style={{ color: cat.green }}>❯</span>
            <span style={{ color: cat.subtext1 }}>cd</span>
            <span style={{ color: active.tone, fontWeight: 600 }}>{active.cmd}</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]" style={{ color: cat.overlay1 }}>
            <span>workspace {String(active.n).padStart(2, "0")} of 06</span>
          </div>
        </div>

        {/* WORKSPACE CONTENT */}
        <div className="relative min-h-[640px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.28, ease }}
              className="px-6 md:px-10 py-10 md:py-14"
            >
              {active.slug === "home" && <HomeWS />}
              {active.slug === "work" && <WorkWS />}
              {active.slug === "career" && <CareerWS />}
              {active.slug === "reviews" && <ReviewsWS />}
              {active.slug === "about" && <AboutWS />}
              {active.slug === "contact" && <ContactWS />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* STATUS BAR */}
        <div
          className="flex items-center justify-between px-4 py-1.5 border-t text-[11px]"
          style={{ borderColor: cat.surface0, background: cat.mantle }}
        >
          <div className="flex items-center gap-2">
            <span
              className="px-2 py-0.5 rounded"
              style={{ background: active.tone, color: cat.crust, fontWeight: 700 }}
            >
              {profile.location.split(" · ")[0]}
            </span>
            <span style={{ color: cat.overlay1 }}>·</span>
            <span style={{ color: cat.green }}>● available</span>
          </div>
          <div className="hidden md:flex items-center gap-3" style={{ color: cat.overlay1 }}>
            <span>arch · linux 6.14</span>
            <span style={{ color: cat.surface2 }}>·</span>
            <span>catppuccin mocha</span>
            <span style={{ color: cat.surface2 }}>·</span>
            <span style={{ color: cat.lavender }}>{clock}</span>
          </div>
        </div>
      </div>

      <p
        className="mx-auto max-w-[1100px] pb-6 text-center text-[11px]"
        style={{ color: cat.overlay0 }}
      >
        Hyprland-style portfolio · click a workspace or press 1–6 to navigate
      </p>
    </main>
  );
}

// ────── workspaces ──────

function HomeWS() {
  return (
    <section className="grid grid-cols-12 gap-x-8 gap-y-8 items-center">
      <div className="col-span-12 md:col-span-7">
        <div className="text-[11.5px] uppercase tracking-[0.22em]" style={{ color: cat.peach }}>
          $ whoami
        </div>
        <h1
          className="mt-4 tracking-[-0.02em] leading-[1.05]"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 700,
            color: cat.text,
          }}
        >
          {profile.name}.
        </h1>
        <p
          className="mt-3 text-[16px]"
          style={{ color: cat.lavender, fontWeight: 500 }}
        >
          {profile.role} · {profile.location}
        </p>
        <p
          className="mt-6 max-w-xl text-[15.5px] leading-[1.7]"
          style={{ color: cat.subtext1 }}
        >
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const btn = document.querySelector<HTMLButtonElement>(
                "nav button[aria-current='page']"
              );
              btn?.parentElement?.children[1]?.dispatchEvent(
                new MouseEvent("click", { bubbles: true })
              );
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[13px]"
            style={{
              background: cat.green,
              color: cat.crust,
              fontWeight: 600,
              minHeight: 44,
            }}
          >
            view selected work →
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[13px] border"
            style={{
              borderColor: cat.surface2,
              color: cat.text,
              minHeight: 44,
            }}
          >
            send mail
          </a>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5">
        <div
          className="rounded-md border p-6"
          style={{ borderColor: cat.surface0, background: cat.mantle }}
        >
          <pre
            className="leading-[1.1] whitespace-pre"
            style={{
              fontSize: "12px",
              color: cat.sapphire,
              textShadow: `0 0 10px ${cat.sapphire}40`,
            }}
          >
            {ARCH_LOGO}
          </pre>
          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 text-[12.5px]">
            <KV k="OS" v="Arch Linux" tone={cat.green} />
            <KV k="Shell" v="zsh" tone={cat.peach} />
            <KV k="Years" v="07+" tone={cat.yellow} />
            <KV k="Projects" v={`${projects.length}+`} tone={cat.maroon} />
            <KV k="Stack" v="Next · TS · Go" tone={cat.mauve} />
            <KV k="Status" v="open" tone={cat.green} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkWS() {
  return (
    <section>
      <Header
        kicker="$ ls -la projects/"
        title="Selected work"
        subtitle={`${projects.length} packages, all shipped, all maintained.`}
        tone={cat.green}
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href ?? "#"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: i * 0.04 }}
            className="group rounded-md border p-5 transition-colors hover:border-current"
            style={{
              borderColor: cat.surface0,
              background: cat.mantle,
              color: cat.green,
            }}
          >
            <div className="flex items-baseline justify-between">
              <h3
                className="tracking-[-0.005em]"
                style={{ fontSize: "1.2rem", fontWeight: 700, color: cat.text }}
              >
                {p.title.toLowerCase()}
              </h3>
              <span style={{ color: cat.peach, fontSize: "11.5px" }}>
                {p.year}
              </span>
            </div>
            <p
              className="mt-2 text-[13.5px] leading-[1.65]"
              style={{ color: cat.subtext1 }}
            >
              {p.blurb}
            </p>
            <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t" style={{ borderColor: cat.surface0 }}>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10.5px] uppercase tracking-[0.12em]"
                    style={{ background: cat.surface0, color: cat.sapphire }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.metric ? (
                <div className="text-right shrink-0">
                  <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: cat.overlay1 }}>
                    {p.metric.label}
                  </div>
                  <div className="text-[13px] tabular-nums" style={{ color: cat.green, fontWeight: 600 }}>
                    {p.metric.value}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function CareerWS() {
  return (
    <section>
      <Header
        kicker="$ git log --oneline"
        title="Career history"
        subtitle="Six years across analytics, payments, and logistics platforms."
        tone={cat.peach}
      />
      <ol className="mt-10 space-y-8">
        {experience.map((role, i) => (
          <motion.li
            key={role.company}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: i * 0.05 }}
            className="grid grid-cols-12 gap-x-6 pb-8 border-b"
            style={{ borderColor: cat.surface0 }}
          >
            <div className="col-span-12 md:col-span-3">
              <div
                className="text-[11px] uppercase tracking-[0.18em] tabular-nums"
                style={{ color: cat.peach, fontWeight: 600 }}
              >
                {role.start}–{role.end}
              </div>
              <div
                className="mt-1 text-[11.5px]"
                style={{ color: cat.overlay1 }}
              >
                {role.location.toLowerCase()}
              </div>
            </div>
            <div className="col-span-12 md:col-span-9 mt-3 md:mt-0">
              <h3
                className="tracking-[-0.005em]"
                style={{ fontSize: "1.25rem", fontWeight: 700, color: cat.text }}
              >
                {role.role}
                <span style={{ color: cat.overlay0 }}> · </span>
                <span style={{ color: cat.lavender, fontWeight: 500 }}>
                  {role.company}
                </span>
              </h3>
              <p
                className="mt-2 max-w-2xl text-[14.5px] leading-[1.7]"
                style={{ color: cat.subtext1 }}
              >
                {role.summary}
              </p>
              <ul className="mt-3 space-y-1.5">
                {role.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-[14px] leading-[1.6]"
                    style={{ color: cat.text }}
                  >
                    <span style={{ color: cat.green, fontWeight: 700 }}>+</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[10.5px] uppercase tracking-[0.12em]"
                    style={{ background: cat.surface0, color: cat.subtext0 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

function ReviewsWS() {
  return (
    <section>
      <Header
        kicker="$ cat reviews.md"
        title="What teammates say"
        subtitle="Selected words from people who shipped alongside."
        tone={cat.pink}
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: i * 0.05 }}
            className="rounded-md border p-6"
            style={{ borderColor: cat.surface0, background: cat.mantle }}
          >
            <span
              aria-hidden
              className="block leading-none mb-2"
              style={{
                fontSize: "2.5rem",
                color: cat.pink,
                fontWeight: 700,
              }}
            >
              &ldquo;
            </span>
            <blockquote
              className="text-[15px] leading-[1.65]"
              style={{ color: cat.text }}
            >
              {t.quote}
            </blockquote>
            <figcaption
              className="mt-5 pt-4 border-t text-[11.5px]"
              style={{ borderColor: cat.surface0, color: cat.subtext0 }}
            >
              <span style={{ color: cat.text, fontWeight: 600 }}>{t.name}</span>
              <span style={{ color: cat.overlay0 }}> · </span>
              <span>{t.role}</span>
              <span style={{ color: cat.overlay0 }}> · </span>
              <span style={{ color: cat.lavender }}>{t.org}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function AboutWS() {
  return (
    <section>
      <Header
        kicker="$ cat about.md"
        title="About"
        subtitle="The shape of the practice and where it was learned."
        tone={cat.mauve}
      />
      <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-10">
        <div className="col-span-12 md:col-span-7">
          <p className="text-[15.5px] leading-[1.75]" style={{ color: cat.text }}>
            {profile.name} is a software engineer working from {profile.location}.
            He designs and builds performant, opinionated software — from full-stack
            platforms to interfaces engineered for speed and clarity. Prefers
            production over staging, primitives over abstractions, and small
            observable releases over grand reveals.
          </p>
          <h3
            className="mt-10 text-[11.5px] uppercase tracking-[0.22em]"
            style={{ color: cat.peach }}
          >
            $ cat principles.txt
          </h3>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {values.map((v) => (
              <li
                key={v.k}
                className="rounded-md border p-4"
                style={{ borderColor: cat.surface0, background: cat.mantle }}
              >
                <div
                  className="text-[13px]"
                  style={{ color: cat.green, fontWeight: 700 }}
                >
                  {v.k}.
                </div>
                <p
                  className="mt-1.5 text-[13px] leading-[1.65]"
                  style={{ color: cat.subtext1 }}
                >
                  {v.v}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-5">
          <h3
            className="text-[11.5px] uppercase tracking-[0.22em]"
            style={{ color: cat.peach }}
          >
            $ ls studies/
          </h3>
          <ol className="mt-4 space-y-5">
            {education.map((e) => (
              <li
                key={e.institution}
                className="rounded-md border p-4"
                style={{ borderColor: cat.surface0, background: cat.mantle }}
              >
                <div
                  className="text-[11px] uppercase tracking-[0.18em] tabular-nums"
                  style={{ color: cat.peach, fontWeight: 600 }}
                >
                  {e.start}–{e.end}
                </div>
                <div
                  className="mt-1 text-[14px]"
                  style={{ color: cat.text, fontWeight: 700 }}
                >
                  {e.institution}
                </div>
                <div
                  className="text-[12.5px]"
                  style={{ color: cat.lavender }}
                >
                  {e.degree}
                </div>
                <p
                  className="mt-2 text-[12.5px] leading-[1.65]"
                  style={{ color: cat.subtext0 }}
                >
                  {e.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactWS() {
  return (
    <section>
      <Header
        kicker="$ mail --new"
        title="Get in touch"
        subtitle="Brief, specific notes are preferred. Replies usually within a day."
        tone={cat.teal}
      />
      <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-10 items-end">
        <div className="col-span-12 md:col-span-7">
          <div
            className="text-[11.5px] uppercase tracking-[0.22em]"
            style={{ color: cat.peach }}
          >
            email
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 inline-block tracking-[-0.005em]"
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
              color: cat.text,
              fontWeight: 700,
              borderBottom: `2px solid ${cat.teal}`,
              paddingBottom: "0.06em",
            }}
          >
            {profile.email}
          </a>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5">
            {profile.social.map((s) => (
              <li key={s.label} className="text-[13.5px]">
                <span
                  style={{ color: cat.peach, fontWeight: 600 }}
                  className="mr-2"
                >
                  {s.label.toLowerCase().padEnd(9, " ")}
                </span>
                <a
                  href={s.href}
                  className="transition-colors"
                  style={{ color: cat.text }}
                >
                  {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div
            className="rounded-md border p-6"
            style={{ borderColor: cat.surface0, background: cat.mantle }}
          >
            <div
              className="text-[11.5px] uppercase tracking-[0.22em]"
              style={{ color: cat.teal }}
            >
              status
            </div>
            <div className="mt-3 grid grid-cols-2 gap-y-2 text-[13px]">
              <KV k="open to" v="senior · staff" tone={cat.green} />
              <KV k="from" v="Q2 2026" tone={cat.peach} />
              <KV k="region" v="EU / remote" tone={cat.mauve} />
              <KV k="reply" v="≤ 1 day" tone={cat.lavender} />
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-md text-[13px]"
              style={{
                background: cat.teal,
                color: cat.crust,
                fontWeight: 700,
                minHeight: 44,
              }}
            >
              compose message →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────── shared bits ──────

function Header({
  kicker,
  title,
  subtitle,
  tone,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  tone: string;
}) {
  return (
    <div>
      <div
        className="text-[11.5px] uppercase tracking-[0.22em]"
        style={{ color: tone, fontWeight: 600 }}
      >
        {kicker}
      </div>
      <h2
        className="mt-3 tracking-[-0.012em]"
        style={{
          fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
          fontWeight: 700,
          color: cat.text,
        }}
      >
        {title}
      </h2>
      <p
        className="mt-2 max-w-2xl text-[14.5px]"
        style={{ color: cat.subtext0 }}
      >
        {subtitle}
      </p>
    </div>
  );
}

function KV({ k, v, tone }: { k: string; v: string; tone: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span style={{ color: cat.overlay1 }}>{k}</span>
      <span style={{ color: tone, fontWeight: 600 }}>{v}</span>
    </div>
  );
}

function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(${cat.surface0} 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        backgroundPosition: "-1px -1px",
        opacity: 0.5,
      }}
    />
  );
}

function formatClock(d: Date) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}
