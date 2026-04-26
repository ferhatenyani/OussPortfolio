"use client";

import { Archivo_Black, Inter, Space_Mono } from "next/font/google";
import { motion } from "framer-motion";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
  values,
} from "@/lib/portfolio";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--p-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--p-body",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--p-mono",
});

const palette = {
  paper: "#FFF8E7",
  ink: "#0A0A0A",
  red: "#E63946",
  navy: "#1D3557",
  mustard: "#F4A261",
  bone: "#EFE8D2",
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function BauhausPreview() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen overflow-hidden`}
      style={{
        background: palette.paper,
        color: palette.ink,
        fontFamily: "var(--p-body), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <section className="relative min-h-[100vh] flex flex-col">
        {/* shape ornaments */}
        <motion.div
          aria-hidden
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
          className="absolute -top-[8vw] -right-[8vw] z-0"
          style={{
            width: "44vw",
            height: "44vw",
            borderRadius: "9999px",
            background: palette.red,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease, delay: 0.25 }}
          className="absolute z-0"
          style={{
            top: "32%",
            left: 0,
            width: "26vw",
            height: "26vw",
            background: palette.navy,
          }}
        />
        <motion.svg
          aria-hidden
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.4 }}
          viewBox="0 0 200 173"
          className="absolute z-0"
          style={{
            bottom: "-4vw",
            left: "44%",
            width: "22vw",
            height: "auto",
          }}
        >
          <polygon points="100,0 200,173 0,173" fill={palette.mustard} />
        </motion.svg>

        {/* rotated marginal type */}
        <div
          className="absolute right-3 top-1/2 origin-right rotate-90 z-10 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
          style={{ color: palette.ink }}
        >
          MMXXVI · BENDOU · CASABLANCA · UTC+1
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-8 lg:px-16 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.32em]"
            style={{ color: palette.navy, fontWeight: 700 }}
          >
            Manifesto № 01 — A Working Programme
          </motion.div>

          <h1
            className="mt-auto font-[family-name:var(--p-display)] tracking-[-0.045em] leading-[0.82] uppercase"
            style={{ fontSize: "clamp(3.4rem, 12.5vw, 11rem)", color: palette.ink }}
          >
            <BlockReveal>building</BlockReveal>
            <BlockReveal accent={palette.red}>considered</BlockReveal>
            <BlockReveal>software.</BlockReveal>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease }}
            className="mt-10 grid grid-cols-12 gap-6 items-end"
          >
            <p
              className="col-span-12 md:col-span-6 text-[16px] leading-[1.5]"
              style={{ color: palette.ink, fontWeight: 500 }}
            >
              {profile.tagline}
            </p>
            <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-2">
              <a
                href="#works"
                className="inline-flex items-center justify-between gap-2 px-5 py-3 text-[12.5px] uppercase tracking-[0.18em] font-[family-name:var(--p-mono)]"
                style={{
                  background: palette.ink,
                  color: palette.paper,
                  fontWeight: 700,
                  minHeight: 44,
                }}
              >
                works <span aria-hidden>↓</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-between gap-2 px-5 py-3 text-[12.5px] uppercase tracking-[0.18em] font-[family-name:var(--p-mono)]"
                style={{
                  background: palette.red,
                  color: palette.paper,
                  fontWeight: 700,
                  minHeight: 44,
                }}
              >
                contact <span aria-hidden>↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RUNNING ORDER */}
      <div
        className="border-y-[3px] py-3 px-8 lg:px-16 flex flex-wrap items-center gap-x-6 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
        style={{ borderColor: palette.ink, background: palette.bone, color: palette.ink, fontWeight: 700 }}
      >
        <span style={{ color: palette.red }}>I works</span>
        <span style={{ color: palette.navy }}>II programme</span>
        <span style={{ color: palette.red }}>III voices</span>
        <span style={{ color: palette.navy }}>IV the worker</span>
        <span style={{ color: palette.red }}>V studies</span>
        <span style={{ color: palette.navy }}>VI dispatch</span>
      </div>

      {/* WORKS — PROJECTS */}
      <section id="works" className="px-8 lg:px-16 pt-20 pb-10">
        <ProgrammeHead numeral="I" label="Works" color={palette.red} />
        <h2
          className="mt-6 max-w-4xl font-[family-name:var(--p-display)] uppercase tracking-[-0.04em] leading-[0.86]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.6rem)", color: palette.ink }}
        >
          <span style={{ color: palette.navy }}>six</span> things, made <span style={{ color: palette.red }}>well</span>.
        </h2>
      </section>

      <section className="border-t-[3px]" style={{ borderColor: palette.ink }}>
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
        <div
          className="border-t-[3px] py-6 px-8 lg:px-16 flex items-center justify-between font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
          style={{ borderColor: palette.ink, color: palette.ink }}
        >
          <span>end of works</span>
          <span style={{ color: palette.red }}>★ {projects.length} entries · MMXXVI</span>
        </div>
      </section>

      {/* PROGRAMME — EXPERIENCE */}
      <section
        className="px-8 lg:px-16 py-20"
        style={{ background: palette.navy, color: palette.paper }}
      >
        <ProgrammeHead numeral="II" label="Programme" color={palette.mustard} dark />
        <h2
          className="mt-6 max-w-4xl font-[family-name:var(--p-display)] uppercase tracking-[-0.04em] leading-[0.86]"
          style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)", color: palette.paper }}
        >
          history of <span style={{ color: palette.mustard }}>shipped work</span>.
        </h2>
        <ol className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12">
          {experience.map((role, i) => (
            <motion.li
              key={role.company}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.65, ease, delay: i * 0.05 }}
              className="col-span-12 md:col-span-4 relative"
            >
              <div
                aria-hidden
                className="absolute -left-2 -top-12 font-[family-name:var(--p-display)] uppercase leading-[0.78]"
                style={{
                  fontSize: "8rem",
                  color: palette.mustard,
                  opacity: 0.2,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className="relative font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
                style={{ color: palette.mustard, fontWeight: 700 }}
              >
                {role.start}–{role.end} · {role.location.toLowerCase()}
              </div>
              <h3
                className="relative mt-3 font-[family-name:var(--p-display)] uppercase tracking-[-0.025em]"
                style={{ fontSize: "1.6rem", color: palette.paper, lineHeight: 0.95 }}
              >
                {role.role.toLowerCase()}
              </h3>
              <div
                className="relative mt-1 font-[family-name:var(--p-display)] uppercase"
                style={{ fontSize: "1.2rem", color: palette.mustard, lineHeight: 0.95 }}
              >
                {role.company.toLowerCase()}
              </div>
              <p className="relative mt-4 text-[14.5px] leading-[1.55]" style={{ color: "#D9D9D9" }}>
                {role.summary}
              </p>
              <ul className="relative mt-3 space-y-1.5">
                {role.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex gap-2 text-[13.5px] leading-[1.5]" style={{ color: "#D9D9D9" }}>
                    <span style={{ color: palette.red, fontWeight: 700 }}>■</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* VOICES — TESTIMONIALS */}
      <section className="px-8 lg:px-16 py-20">
        <ProgrammeHead numeral="III" label="Voices" color={palette.red} />
        <div className="mt-12 grid grid-cols-12 gap-6">
          {testimonials.map((t, i) => {
            const colors = [palette.red, palette.navy, palette.mustard, palette.ink];
            const c = colors[i % colors.length];
            const fg = c === palette.mustard ? palette.ink : palette.paper;
            return (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                className="col-span-12 md:col-span-6 relative p-8 md:p-10"
                style={{ background: c, color: fg }}
              >
                <span
                  aria-hidden
                  className="absolute top-4 left-5 font-[family-name:var(--p-display)] leading-[0.7]"
                  style={{ fontSize: "9rem", color: fg, opacity: 0.45 }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="relative font-[family-name:var(--p-display)] uppercase tracking-[-0.03em] leading-[0.92]"
                  style={{ fontSize: "clamp(1.3rem, 1.8vw, 1.65rem)", color: fg }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-8 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: fg, opacity: 0.85, fontWeight: 700 }}
                >
                  — {t.name} · {t.role.toLowerCase()} · {t.org.toLowerCase()}
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </section>

      {/* THE WORKER — ABOUT */}
      <section
        className="px-8 lg:px-16 py-20 relative overflow-hidden"
        style={{ background: palette.bone }}
      >
        <ProgrammeHead numeral="IV" label="The Worker" color={palette.navy} />
        <div className="mt-10 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-5 relative">
            <WorkerComposition />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-0">
            <h2
              className="font-[family-name:var(--p-display)] uppercase tracking-[-0.035em] leading-[0.88]"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)", color: palette.ink }}
            >
              one engineer.
              <br />
              <span style={{ color: palette.red }}>built to ship.</span>
            </h2>
            <p
              className="mt-6 max-w-md text-[15.5px] leading-[1.6]"
              style={{ color: palette.ink, fontWeight: 500 }}
            >
              oussama bendou. software engineer. {profile.location}. designs and
              builds performant, opinionated software — from full-stack platforms
              to interfaces engineered for speed and clarity.
            </p>
            <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <li
                  key={v.k}
                  className="border-[3px] p-4"
                  style={{
                    borderColor: palette.ink,
                    background: i % 2 === 0 ? palette.paper : palette.mustard,
                  }}
                >
                  <div
                    className="font-[family-name:var(--p-display)] uppercase tracking-[-0.02em]"
                    style={{ fontSize: "1.05rem", color: palette.ink }}
                  >
                    {v.k}
                  </div>
                  <p className="mt-1 text-[13.5px] leading-[1.5]" style={{ color: palette.ink }}>
                    {v.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STUDIES */}
      <section
        className="px-8 lg:px-16 py-20 border-t-[3px]"
        style={{ borderColor: palette.ink }}
      >
        <ProgrammeHead numeral="V" label="Studies" color={palette.red} />
        <ol className="mt-10 grid grid-cols-12 gap-6">
          {education.map((e, i) => (
            <motion.li
              key={e.institution}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, ease, delay: i * 0.05 }}
              className="col-span-12 md:col-span-4 border-[3px] p-6 relative"
              style={{ borderColor: palette.ink, background: palette.paper }}
            >
              <div
                aria-hidden
                className="absolute -top-5 left-4 px-2 py-0.5 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
                style={{
                  background: i === 0 ? palette.red : i === 1 ? palette.navy : palette.mustard,
                  color: i === 2 ? palette.ink : palette.paper,
                  fontWeight: 700,
                }}
              >
                {e.start}–{e.end}
              </div>
              <div
                className="mt-2 font-[family-name:var(--p-display)] uppercase tracking-[-0.02em] leading-[0.95]"
                style={{ fontSize: "1.4rem", color: palette.ink }}
              >
                {e.institution}
              </div>
              <div
                className="mt-1 font-[family-name:var(--p-mono)] text-[12.5px] uppercase tracking-[0.18em]"
                style={{ color: palette.navy, fontWeight: 700 }}
              >
                {e.degree.toLowerCase()}
              </div>
              <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: palette.ink }}>
                {e.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* DISPATCH — CONTACT */}
      <section
        className="relative overflow-hidden"
        style={{ background: palette.red, color: palette.paper }}
      >
        <motion.div
          aria-hidden
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="absolute -top-[8vw] -left-[8vw] z-0"
          style={{
            width: "44vw",
            height: "44vw",
            borderRadius: "9999px",
            background: palette.navy,
          }}
        />
        <div className="relative z-10 px-8 lg:px-16 py-20">
          <ProgrammeHead numeral="VI" label="Dispatch" color={palette.mustard} dark />
          <h2
            className="mt-6 max-w-5xl font-[family-name:var(--p-display)] uppercase tracking-[-0.04em] leading-[0.86]"
            style={{ fontSize: "clamp(2.6rem, 8vw, 7rem)", color: palette.paper }}
          >
            send word.
            <br />
            <span style={{ color: palette.mustard }}>say something specific.</span>
          </h2>
          <div className="mt-12 grid grid-cols-12 gap-x-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <a
                href={`mailto:${profile.email}`}
                className="font-[family-name:var(--p-display)] uppercase tracking-[-0.025em]"
                style={{
                  fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)",
                  color: palette.paper,
                  borderBottom: `4px solid ${palette.mustard}`,
                  paddingBottom: "0.05em",
                }}
              >
                {profile.email}
              </a>
              <ul
                className="mt-8 grid grid-cols-2 gap-y-1 font-[family-name:var(--p-mono)] text-[12.5px]"
                style={{ color: palette.paper, fontWeight: 700 }}
              >
                {profile.social.map((s) => (
                  <li key={s.label}>
                    <span style={{ color: palette.mustard }}>{s.label.toUpperCase()}: </span>
                    {s.handle}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-0">
              <a
                href={`mailto:${profile.email}`}
                className="block w-full text-center px-5 py-5 font-[family-name:var(--p-display)] uppercase tracking-[-0.02em]"
                style={{
                  background: palette.paper,
                  color: palette.red,
                  fontSize: "1.4rem",
                  minHeight: 44,
                  border: `4px solid ${palette.ink}`,
                  boxShadow: `8px 8px 0 ${palette.ink}`,
                }}
              >
                write now ★
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        className="px-8 lg:px-16 py-4 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em] flex items-center justify-between"
        style={{ background: palette.ink, color: palette.paper }}
      >
        <span>BENDOU · MANIFESTO MMXXVI</span>
        <span style={{ color: palette.mustard }}>shape · colour · type</span>
        <span>printed in casablanca</span>
      </div>
    </main>
  );
}

function ProgrammeHead({
  numeral,
  label,
  color,
  dark,
}: {
  numeral: string;
  label: string;
  color: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-end gap-5">
      <span
        aria-hidden
        className="font-[family-name:var(--p-display)] leading-[0.78]"
        style={{ fontSize: "clamp(4rem, 9vw, 7.5rem)", color }}
      >
        {numeral}
      </span>
      <span
        className="pb-2 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.32em]"
        style={{ color: dark ? "#D9D9D9" : palette.ink, fontWeight: 700 }}
      >
        — {label}
      </span>
    </div>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const shapes: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];
  const colors = [palette.red, palette.navy, palette.mustard];
  const shape = shapes[index % 3];
  const color = colors[index % 3];
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, ease, delay: (index % 3) * 0.05 }}
      whileHover={{ x: 4 }}
      className="group block border-b-[3px] px-8 lg:px-16 py-10 md:py-14"
      style={{ borderColor: palette.ink }}
    >
      <div className="grid grid-cols-12 gap-x-6 items-center">
        <div className="col-span-12 md:col-span-2 flex items-center gap-4">
          <span
            aria-hidden
            className="font-[family-name:var(--p-display)] leading-[0.78]"
            style={{
              fontSize: "clamp(3.6rem, 7vw, 5.4rem)",
              color: palette.ink,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <Shape kind={shape} color={color} size={48} />
        </div>
        <div className="col-span-12 md:col-span-7">
          <h3
            className="font-[family-name:var(--p-display)] uppercase tracking-[-0.035em] leading-[0.88]"
            style={{
              fontSize: "clamp(2rem, 4.4vw, 3.6rem)",
              color: palette.ink,
            }}
          >
            <span style={{ color }}>{project.title.toLowerCase()}</span>{" "}
            <span style={{ color: palette.ink }}>·</span>{" "}
            <span style={{ fontSize: "0.55em" }}>{project.tags[0].toLowerCase()}</span>
          </h3>
          <p
            className="mt-3 max-w-2xl text-[15px] leading-[1.55]"
            style={{ color: palette.ink, fontWeight: 500 }}
          >
            {project.blurb}
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 mt-3 md:mt-0 md:text-right">
          <div
            className="font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
            style={{ color: palette.ink, fontWeight: 700 }}
          >
            year · {project.year}
          </div>
          {project.metric ? (
            <div
              className="mt-2 font-[family-name:var(--p-display)] uppercase tracking-[-0.02em]"
              style={{ fontSize: "1.6rem", color }}
            >
              {project.metric.value}
            </div>
          ) : null}
          <div
            className="mt-1 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.18em]"
            style={{ color: palette.ink }}
          >
            {project.metric?.label.toLowerCase() ?? "live"}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function Shape({
  kind,
  color,
  size,
}: {
  kind: "circle" | "square" | "triangle";
  color: string;
  size: number;
}) {
  if (kind === "circle") {
    return (
      <span
        aria-hidden
        className="inline-block"
        style={{ width: size, height: size, borderRadius: 9999, background: color }}
      />
    );
  }
  if (kind === "square") {
    return (
      <span aria-hidden className="inline-block" style={{ width: size, height: size, background: color }} />
    );
  }
  return (
    <svg width={size} height={size * 0.86} viewBox="0 0 100 86" aria-hidden>
      <polygon points="50,0 100,86 0,86" fill={color} />
    </svg>
  );
}

function BlockReveal({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <span className="block overflow-hidden" style={{ paddingBottom: "0.04em" }}>
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.85, ease, delay: 0.55 }}
        style={accent ? { color: accent } : undefined}
      >
        {children}
      </motion.span>
    </span>
  );
}

function WorkerComposition() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="600" height="600" fill={palette.bone} />
        <circle cx="200" cy="220" r="140" fill={palette.red} />
        <rect x="280" y="280" width="220" height="220" fill={palette.navy} />
        <polygon points="380,80 520,300 240,300" fill={palette.mustard} opacity="0.92" />
        <line x1="50" y1="500" x2="550" y2="500" stroke={palette.ink} strokeWidth="6" />
        <text
          x="60"
          y="540"
          fontFamily="Space Mono, monospace"
          fontSize="14"
          fill={palette.ink}
          letterSpacing="2"
        >
          THE WORKER · 1:1 STUDY
        </text>
      </svg>
    </div>
  );
}
