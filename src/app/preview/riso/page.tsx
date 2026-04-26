"use client";

import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
  values,
} from "@/lib/portfolio";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--p-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--p-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--p-mono",
});

const palette = {
  paper: "#F4EDD8",
  paperSoft: "#EDE4C8",
  ink: "#1A1A18",
  orange: "#FF5C39",
  blue: "#2D4ABF",
  overprint: "#562A8A",
  grit: "#5A4A2C",
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function RisoPreview() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen overflow-hidden`}
      style={{
        background: palette.paper,
        color: palette.ink,
        fontFamily: "var(--p-body), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* PAPER GRAIN OVERLAY */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60]"
        style={{
          opacity: 0.18,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>\")",
        }}
      />

      {/* MAGAZINE MAST */}
      <div
        className="border-b-[3px] mx-auto max-w-7xl px-6 lg:px-10 pt-12"
        style={{ borderColor: palette.ink }}
      >
        <div
          className="font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.32em] flex items-center justify-between"
          style={{ color: palette.blue }}
        >
          <span>Issue №09 · two-ink portfolio</span>
          <span>printed in casablanca · MMXXVI</span>
          <span>04 / 2026</span>
        </div>
        <div className="pt-3 pb-6 flex items-end justify-between flex-wrap gap-y-4">
          <h1
            className="font-[family-name:var(--p-display)] tracking-[-0.04em] leading-[0.86]"
            style={{
              fontSize: "clamp(3rem, 11vw, 9.5rem)",
              fontWeight: 700,
              color: palette.blue,
              textShadow: `2.5px 1.5px 0 ${palette.orange}`,
            }}
          >
            OUSS<span style={{ color: palette.orange, textShadow: `-2px -1px 0 ${palette.blue}` }}>·</span>ZINE
          </h1>
          <div
            className="font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em] text-right"
            style={{ color: palette.ink }}
          >
            <div>printed two colors</div>
            <div>cream · cadmium · ultra-marine</div>
            <div>200 lpi half-tone screen</div>
          </div>
        </div>
      </div>

      {/* COVER STORY — HERO */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-7">
            <Stamp variant="orange">FEATURE</Stamp>
            <h2
              className="mt-6 font-[family-name:var(--p-display)] tracking-[-0.035em] leading-[0.92]"
              style={{
                fontSize: "clamp(2.4rem, 7.5vw, 6.6rem)",
                fontWeight: 600,
                color: palette.ink,
              }}
            >
              <DoublePrint
                lines={[
                  <>building considered</>,
                  <>
                    <span style={{ color: palette.orange }}>software,</span>
                  </>,
                  <>printed by hand.</>,
                ]}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7, ease }}
              className="mt-8 max-w-md text-[16px] leading-[1.6]"
              style={{ color: palette.ink }}
            >
              {profile.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-5 py-3 text-[12.5px] font-[family-name:var(--p-mono)] uppercase tracking-[0.18em]"
                style={{
                  background: palette.blue,
                  color: palette.paper,
                  minHeight: 44,
                }}
              >
                read the features <span aria-hidden>→</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-[12.5px] font-[family-name:var(--p-mono)] uppercase tracking-[0.18em] border-2"
                style={{
                  borderColor: palette.blue,
                  color: palette.blue,
                  minHeight: 44,
                }}
              >
                subscribe ✉
              </a>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-5 mt-10 md:mt-0 flex items-end">
            <HalftonePlate variant="cover" />
          </div>
        </div>
      </section>

      {/* RUNNING ORDER */}
      <div
        className="border-y-[2px] mx-auto max-w-7xl px-6 lg:px-10 py-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em] flex items-center justify-between"
        style={{ borderColor: palette.ink, color: palette.ink }}
      >
        <span>contents · running order</span>
        <span style={{ color: palette.orange }}>features · history · letters · author · studies · post</span>
      </div>

      {/* FEATURES — PROJECTS */}
      <section id="features" className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        <SectionHead n="I" label="Selected Features" />
        <div className="mt-10 grid grid-cols-12 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* HISTORY */}
      <section
        className="border-t-[2px] py-16 md:py-20"
        style={{ borderColor: palette.ink, background: palette.paperSoft }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHead n="II" label="Brief history" />
          <div className="mt-10 space-y-10">
            {experience.map((role, i) => (
              <motion.article
                key={role.company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                className="grid grid-cols-12 gap-x-6 border-t-[2px] pt-6"
                style={{ borderColor: palette.ink }}
              >
                <div
                  className="col-span-12 md:col-span-3 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: palette.blue }}
                >
                  {role.start}–{role.end}
                  <div className="mt-1" style={{ color: palette.ink }}>
                    {role.location.toLowerCase()}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9 mt-3 md:mt-0">
                  <h3
                    className="font-[family-name:var(--p-display)] tracking-[-0.018em]"
                    style={{
                      fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)",
                      fontWeight: 600,
                      color: palette.ink,
                    }}
                  >
                    <span style={{ color: palette.blue, textShadow: `1.5px 1px 0 ${palette.orange}` }}>
                      {role.role.toLowerCase()}
                    </span>
                    , {role.company.toLowerCase()}.
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6]">{role.summary}</p>
                  <ul className="mt-4 space-y-1.5 list-none">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-[14.5px] leading-[1.55]">
                        <span style={{ color: palette.orange, fontWeight: 600 }}>★</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.18em] border"
                        style={{
                          borderColor: palette.ink,
                          color: palette.ink,
                          background: palette.paper,
                        }}
                      >
                        {s.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* LETTERS — TESTIMONIALS */}
      <section
        className="border-t-[2px] py-16 md:py-20"
        style={{ borderColor: palette.ink }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHead n="III" label="Letters from readers" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.65, ease, delay: i * 0.06 }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -top-4 -left-2 font-[family-name:var(--p-display)] leading-none"
                  style={{
                    fontSize: "8rem",
                    fontWeight: 700,
                    color: palette.orange,
                    opacity: 0.85,
                  }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="pl-12 font-[family-name:var(--p-display)] tracking-[-0.012em] leading-[1.18]"
                  style={{
                    fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                    fontWeight: 500,
                    color: palette.ink,
                  }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-5 pl-12 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
                  style={{ color: palette.blue }}
                >
                  — {t.name} · {t.role.toLowerCase()} · {t.org.toLowerCase()}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR — ABOUT */}
      <section
        className="border-t-[2px] py-16 md:py-20"
        style={{ borderColor: palette.ink, background: palette.paperSoft }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHead n="IV" label="About the author" />
          <div className="mt-10 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 md:col-span-5">
              <HalftonePlate variant="portrait" />
            </div>
            <div className="col-span-12 md:col-span-7 mt-10 md:mt-0">
              <p
                className="text-[16px] leading-[1.65]"
                style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
              >
                <span
                  className="float-left mr-3 mt-1 font-[family-name:var(--p-display)] leading-[0.78]"
                  style={{ fontSize: "5.4rem", fontWeight: 700, color: palette.orange }}
                >
                  o
                </span>
                ussama bendou. software engineer, working from {profile.location}. designs and
                builds performant, opinionated software — from full-stack platforms to
                interfaces engineered for speed and clarity. occasional zine printer.
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {values.map((v) => (
                  <li
                    key={v.k}
                    className="border-t-[2px] pt-3"
                    style={{ borderColor: palette.ink }}
                  >
                    <div
                      className="font-[family-name:var(--p-display)]"
                      style={{ fontSize: "1.05rem", fontWeight: 700, color: palette.blue }}
                    >
                      {v.k.toLowerCase()}.
                    </div>
                    <p className="mt-1 text-[14px] leading-[1.6]">{v.v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIES */}
      <section
        className="border-t-[2px] py-16 md:py-20"
        style={{ borderColor: palette.ink }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHead n="V" label="Earlier studies" />
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((e, i) => (
              <motion.li
                key={e.institution}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.55, ease, delay: i * 0.05 }}
                className="border-2 p-5 relative"
                style={{
                  borderColor: palette.ink,
                  background: palette.paperSoft,
                }}
              >
                <span
                  aria-hidden
                  className="absolute -top-3 left-4 px-2 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
                  style={{ background: palette.orange, color: palette.paper }}
                >
                  {e.start}–{e.end}
                </span>
                <div
                  className="mt-2 font-[family-name:var(--p-display)] tracking-[-0.012em]"
                  style={{ fontSize: "1.4rem", fontWeight: 600, color: palette.blue }}
                >
                  {e.institution.toLowerCase()}
                </div>
                <div
                  className="font-[family-name:var(--p-mono)] text-[12px] uppercase tracking-[0.18em] mt-1"
                  style={{ color: palette.ink }}
                >
                  {e.degree.toLowerCase()}
                </div>
                <p className="mt-3 text-[14px] leading-[1.6]">{e.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* POSTBOX — CONTACT */}
      <section
        className="border-t-[2px] py-16 md:py-20"
        style={{
          borderColor: palette.ink,
          background: palette.blue,
          color: palette.paper,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div
            className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
            style={{ color: palette.orange }}
          >
            VI — postbox · subscribe · write
          </div>
          <h2
            className="mt-6 font-[family-name:var(--p-display)] tracking-[-0.035em] leading-[0.9]"
            style={{
              fontSize: "clamp(2.4rem, 6.4vw, 5rem)",
              fontWeight: 700,
              color: palette.paper,
              textShadow: `2.5px 1.5px 0 ${palette.orange}`,
            }}
          >
            send a letter,
            <br />
            <span style={{ color: palette.orange, textShadow: `-2px -1px 0 ${palette.paper}` }}>
              the printer reads them.
            </span>
          </h2>
          <div className="mt-10 grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <a
                href={`mailto:${profile.email}`}
                className="font-[family-name:var(--p-display)] tracking-[-0.012em]"
                style={{
                  fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)",
                  fontWeight: 600,
                  color: palette.paper,
                  borderBottom: `3px solid ${palette.orange}`,
                  paddingBottom: "0.05em",
                }}
              >
                {profile.email}
              </a>
              <ul
                className="mt-6 grid grid-cols-2 gap-y-1 font-[family-name:var(--p-mono)] text-[12px]"
                style={{ color: palette.paper }}
              >
                {profile.social.map((s) => (
                  <li key={s.label}>
                    <span style={{ color: palette.orange }}>{s.label.toLowerCase()}: </span>
                    {s.handle}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-5 mt-10 md:mt-0">
              <SubscribeCard />
            </div>
          </div>
        </div>
      </section>

      <div
        className="border-t-[2px] mx-auto max-w-7xl px-6 lg:px-10 py-4 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em] flex items-center justify-between"
        style={{ borderColor: palette.ink, color: palette.ink }}
      >
        <span>OUSS·ZINE №09 · two ink portfolio · 2026</span>
        <span>printed locally — risograph A4 — 200 lpi</span>
      </div>
    </main>
  );
}

function SectionHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div className="flex items-end gap-5">
        <span
          aria-hidden
          className="font-[family-name:var(--p-display)] leading-[0.78]"
          style={{
            fontSize: "clamp(4rem, 8vw, 6.5rem)",
            fontWeight: 700,
            color: palette.orange,
            textShadow: `3px 2px 0 ${palette.blue}`,
          }}
        >
          {n}
        </span>
        <span
          className="font-[family-name:var(--p-display)] leading-[0.92]"
          style={{
            fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
            fontWeight: 600,
            color: palette.ink,
          }}
        >
          {label.toLowerCase()}
        </span>
      </div>
      <span
        className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: palette.blue }}
      >
        section · {n}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const tilt = (index % 4) - 1.5; // -1.5deg..+1.5deg
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.65, ease, delay: (index % 3) * 0.05 }}
      whileHover={{ rotate: tilt * 0.6, y: -4 }}
      className="col-span-12 md:col-span-6 lg:col-span-4 group relative block border-2 overflow-hidden"
      style={{
        borderColor: palette.ink,
        background: palette.paperSoft,
        transformOrigin: "center center",
      }}
    >
      <div
        className="aspect-[4/3] relative"
        style={{ background: palette.paper }}
      >
        <HalftoneArt index={index} />
        <span
          aria-hidden
          className="absolute top-3 left-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em] px-2 py-0.5"
          style={{ background: palette.orange, color: palette.paper }}
        >
          art. {String(index + 1).padStart(2, "0")}
        </span>
        <span
          aria-hidden
          className="absolute top-3 right-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: palette.blue }}
        >
          {project.year}
        </span>
      </div>
      <div className="border-t-2 p-5" style={{ borderColor: palette.ink }}>
        <h3
          className="font-[family-name:var(--p-display)] tracking-[-0.018em]"
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: palette.blue,
            textShadow: `1.5px 1px 0 ${palette.orange}`,
          }}
        >
          {project.title.toLowerCase()}
        </h3>
        <p className="mt-2 text-[14.5px] leading-[1.6]" style={{ color: palette.ink }}>
          {project.blurb}
        </p>
        <div className="mt-4 pt-3 border-t flex items-center justify-between" style={{ borderColor: palette.ink }}>
          <span
            className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.18em]"
            style={{ color: palette.ink }}
          >
            {project.tags.map((t) => t.toLowerCase()).join(" · ")}
          </span>
          {project.metric ? (
            <span
              className="font-[family-name:var(--p-mono)] text-[11.5px] tabular-nums"
              style={{ color: palette.orange }}
            >
              ★ {project.metric.value}
            </span>
          ) : null}
        </div>
      </div>
    </motion.a>
  );
}

function DoublePrint({ lines }: { lines: React.ReactNode[] }) {
  return (
    <span className="block">
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ paddingBottom: "0.04em" }}
        >
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              delay: 0.15 + i * 0.12,
              duration: 0.85,
              ease,
            }}
            style={{
              color: palette.ink,
              textShadow: `2.5px 1.5px 0 ${palette.orange}`,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Stamp({
  variant,
  children,
}: {
  variant: "orange" | "blue";
  children: React.ReactNode;
}) {
  const bg = variant === "orange" ? palette.orange : palette.blue;
  return (
    <span
      className="inline-block rotate-[-3deg] px-3 py-1 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
      style={{
        background: bg,
        color: palette.paper,
        boxShadow: `3px 3px 0 ${palette.ink}`,
      }}
    >
      {children}
    </span>
  );
}

function HalftonePlate({ variant }: { variant: "cover" | "portrait" }) {
  const isCover = variant === "cover";
  return (
    <div
      className="relative w-full border-2"
      style={{
        borderColor: palette.ink,
        background: palette.paper,
        aspectRatio: isCover ? "4/5" : "3/4",
      }}
    >
      <svg
        viewBox="0 0 600 720"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="ht-orange" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={palette.orange} stopOpacity="0.95" />
            <stop offset="100%" stopColor={palette.orange} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ht-blue" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={palette.blue} stopOpacity="0.85" />
            <stop offset="100%" stopColor={palette.blue} stopOpacity="0" />
          </radialGradient>
        </defs>
        {isCover ? (
          <>
            <ellipse cx="380" cy="280" rx="220" ry="220" fill="url(#ht-orange)" style={{ mixBlendMode: "multiply" }} />
            <ellipse cx="240" cy="440" rx="240" ry="200" fill="url(#ht-blue)" style={{ mixBlendMode: "multiply" }} />
          </>
        ) : (
          <>
            <ellipse cx="300" cy="360" rx="220" ry="280" fill="url(#ht-blue)" style={{ mixBlendMode: "multiply" }} />
            <ellipse cx="380" cy="240" rx="120" ry="120" fill="url(#ht-orange)" style={{ mixBlendMode: "multiply" }} />
          </>
        )}
        {/* halftone dots */}
        {Array.from({ length: 38 }).map((_, row) =>
          Array.from({ length: 30 }).map((_, col) => {
            const x = 16 + col * 19.5;
            const y = 16 + row * 19;
            const cx = isCover ? 320 : 300;
            const cy = isCover ? 360 : 360;
            const dist = Math.hypot(x - cx, y - cy);
            const r = Math.max(0, 4.2 - dist / 90);
            return r > 0.15 ? (
              <circle key={`${row}-${col}`} cx={x} cy={y} r={r} fill={palette.ink} fillOpacity="0.45" />
            ) : null;
          })
        )}
      </svg>
      <span
        aria-hidden
        className="absolute bottom-3 left-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: palette.ink }}
      >
        Pl. {isCover ? "I" : "II"} · halftone · 2 inks
      </span>
    </div>
  );
}

function HalftoneArt({ index }: { index: number }) {
  const variant = index % 3;
  return (
    <svg
      viewBox="0 0 800 600"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`art-o-${index}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={palette.orange} stopOpacity="0.9" />
          <stop offset="100%" stopColor={palette.orange} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`art-b-${index}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={palette.blue} stopOpacity="0.85" />
          <stop offset="100%" stopColor={palette.blue} stopOpacity="0" />
        </radialGradient>
      </defs>
      {variant === 0 ? (
        <>
          <ellipse cx="500" cy="220" rx="240" ry="200" fill={`url(#art-o-${index})`} style={{ mixBlendMode: "multiply" }} />
          <ellipse cx="280" cy="400" rx="260" ry="220" fill={`url(#art-b-${index})`} style={{ mixBlendMode: "multiply" }} />
        </>
      ) : variant === 1 ? (
        <>
          <rect x="60" y="120" width="380" height="380" fill={`url(#art-b-${index})`} style={{ mixBlendMode: "multiply" }} />
          <circle cx="600" cy="320" r="200" fill={`url(#art-o-${index})`} style={{ mixBlendMode: "multiply" }} />
        </>
      ) : (
        <>
          <ellipse cx="400" cy="300" rx="320" ry="220" fill={`url(#art-o-${index})`} style={{ mixBlendMode: "multiply" }} />
          <ellipse cx="400" cy="300" rx="180" ry="140" fill={`url(#art-b-${index})`} style={{ mixBlendMode: "multiply" }} />
        </>
      )}
      {Array.from({ length: 26 }).map((_, row) =>
        Array.from({ length: 36 }).map((_, col) => {
          const x = 14 + col * 21.5;
          const y = 14 + row * 22;
          const cx = 400;
          const cy = 300;
          const dist = Math.hypot(x - cx, y - cy);
          const r = Math.max(0, 3.4 - dist / 110);
          return r > 0.15 ? (
            <circle key={`${row}-${col}`} cx={x} cy={y} r={r} fill={palette.ink} fillOpacity="0.4" />
          ) : null;
        })
      )}
    </svg>
  );
}

function SubscribeCard() {
  return (
    <div
      className="relative border-2 p-5"
      style={{
        borderColor: palette.paper,
        background: palette.paper,
        color: palette.ink,
        boxShadow: `4px 4px 0 ${palette.orange}`,
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: palette.blue }}
        >
          subscriber card · printed in 2 inks
        </div>
        <div
          className="rotate-[3deg] font-[family-name:var(--p-display)] text-[14px] px-2 border-2"
          style={{ borderColor: palette.orange, color: palette.orange, fontWeight: 600 }}
        >
          ✶ paid
        </div>
      </div>
      <div
        className="mt-4 font-[family-name:var(--p-display)] tracking-[-0.012em]"
        style={{ fontSize: "1.4rem", fontWeight: 600, color: palette.ink }}
      >
        oussama bendou — issue №09
      </div>
      <div
        className="mt-1 font-[family-name:var(--p-mono)] text-[12px]"
        style={{ color: palette.ink }}
      >
        casablanca · biannual · single copy
      </div>
      <div
        className="mt-4 pt-3 border-t-[2px] font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ borderColor: palette.ink, color: palette.ink }}
      >
        signed · O.B. · MMXXVI
      </div>
    </div>
  );
}
