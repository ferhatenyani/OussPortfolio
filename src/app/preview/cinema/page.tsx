"use client";

import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
} from "@/lib/portfolio";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--p-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--p-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--p-mono",
});

const palette = {
  paper: "#FFFFFE",
  ink: "#0B0B0C",
  inkSoft: "#4B4B4F",
  accent: "#E5482A",
  hairline: "#E8E6E2",
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const scenes = [
  {
    n: 1,
    take: 1,
    code: "01:00:01:14",
    int: "INT. PORTFOLIO — DAY",
  },
  ...projects.map((_, i) => ({
    n: i + 2,
    take: 3,
    code: `01:0${i + 1}:${(15 + i * 17).toString().padStart(2, "0")}:09`,
    int: "EXT. SELECTED WORKS — CONTINUOUS",
  })),
  {
    n: projects.length + 2,
    take: 2,
    code: "01:08:42:02",
    int: "INT. ARCHIVE — NIGHT",
  },
  {
    n: projects.length + 3,
    take: 4,
    code: "01:10:14:18",
    int: "EXT. ON THE RECORD — DAY",
  },
  {
    n: projects.length + 4,
    take: 1,
    code: "01:12:08:21",
    int: "INT. NOTES — DAY",
  },
  {
    n: projects.length + 5,
    take: 1,
    code: "01:14:32:00",
    int: "INT. STUDIES — FLASHBACK",
  },
  {
    n: projects.length + 6,
    take: 5,
    code: "01:18:55:11",
    int: "EXT. END CREDITS — DAY",
  },
];

export default function CinemaPreview() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen`}
      style={{
        background: palette.paper,
        color: palette.ink,
        fontFamily: "var(--p-body), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* SCENE 01 — HERO */}
      <Scene slate={scenes[0]} first>
        <div className="relative grid h-full grid-cols-12 items-end gap-x-6 px-8 lg:px-16 pb-[10vh]">
          <div className="col-span-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em] mb-6"
              style={{ color: palette.inkSoft }}
            >
              A short film by O. Bendou — 2026
            </motion.div>
            <h1
              className="font-[family-name:var(--p-display)] tracking-[-0.025em] leading-[0.86]"
              style={{
                fontSize: "clamp(3rem, 12vw, 11rem)",
                fontWeight: 500,
                whiteSpace: "nowrap",
                marginRight: "-20vw",
              }}
            >
              <ClipLines
                lines={[
                  <>building considered</>,
                  <>
                    software{" "}
                    <em
                      className="italic"
                      style={{ color: palette.accent, fontWeight: 500 }}
                    >
                      ,
                    </em>
                  </>,
                ]}
                stagger={0.18}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7, ease }}
              className="mt-8 max-w-xl italic font-[family-name:var(--p-display)] tracking-[-0.005em]"
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)",
                fontWeight: 400,
                color: palette.inkSoft,
              }}
            >
              with the patience of a craftsman.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.6, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#scene-02"
                className="inline-flex items-center gap-2 px-5 py-3 text-[12.5px]"
                style={{ background: palette.ink, color: palette.paper, minHeight: 44 }}
              >
                <span>play</span>
                <span aria-hidden>▷</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-[12.5px] border"
                style={{ borderColor: palette.ink, color: palette.ink, minHeight: 44 }}
              >
                contact the studio
              </a>
            </motion.div>
          </div>
        </div>
      </Scene>

      {/* PROJECT SCENES */}
      <div id="scene-02" />
      {projects.map((p, i) => (
        <Scene key={p.title} slate={scenes[i + 1]}>
          <div className="grid h-full grid-cols-12 gap-x-6 px-8 lg:px-16 py-[10vh]">
            <KeyFrame variant={i} />
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-center mt-8 md:mt-0">
              <div
                className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.28em]"
                style={{ color: palette.inkSoft }}
              >
                Scene {String(scenes[i + 1].n).padStart(2, "0")} · {p.year}
              </div>
              <h2
                className="mt-4 font-[family-name:var(--p-display)] tracking-[-0.018em] leading-[0.92]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4.4rem)",
                  fontWeight: 500,
                }}
              >
                <span className="block">{p.title.toLowerCase()}</span>
                <em
                  className="italic"
                  style={{ color: palette.accent, fontWeight: 500, fontSize: "0.42em", letterSpacing: "0.02em" }}
                >
                  ({p.tags[0].toLowerCase()})
                </em>
              </h2>
              <p
                className="mt-5 max-w-md text-[15.5px] leading-[1.65]"
                style={{ color: palette.ink }}
              >
                {p.blurb}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md">
                {p.metric ? (
                  <Spec label={p.metric.label} value={p.metric.value} />
                ) : null}
                <Spec label="year" value={p.year} />
                <Spec
                  label="format"
                  value={`${p.title.toLowerCase().replace(/\s+/g, "")}.h264`}
                  span
                />
              </div>
            </div>
          </div>
        </Scene>
      ))}

      {/* HISTORY SCENE */}
      <Scene slate={scenes[projects.length + 1]}>
        <div className="grid h-full grid-cols-12 gap-x-6 px-8 lg:px-16 py-[10vh]">
          <div className="col-span-12 md:col-span-5">
            <div
              className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.28em]"
              style={{ color: palette.inkSoft }}
            >
              History · the prior productions
            </div>
            <h2
              className="mt-4 font-[family-name:var(--p-display)] tracking-[-0.018em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 500 }}
            >
              <em className="italic" style={{ color: palette.accent }}>six</em> years,
              <br />
              three studios.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 mt-10 md:mt-0 flex flex-col justify-center gap-8">
            {experience.map((role, idx) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease, delay: idx * 0.05 }}
                className="grid grid-cols-12 gap-x-4 border-t pt-5"
                style={{ borderColor: palette.hairline }}
              >
                <div
                  className="col-span-3 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.18em] tabular-nums"
                  style={{ color: palette.inkSoft }}
                >
                  {role.start}–{role.end}
                </div>
                <div className="col-span-9">
                  <div
                    className="font-[family-name:var(--p-display)]"
                    style={{ fontSize: "1.35rem", fontWeight: 500 }}
                  >
                    {role.role.toLowerCase()},{" "}
                    <em className="italic" style={{ color: palette.inkSoft }}>
                      {role.company.toLowerCase()}
                    </em>
                  </div>
                  <p
                    className="mt-2 max-w-md text-[14.5px] leading-[1.6]"
                    style={{ color: palette.ink }}
                  >
                    {role.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Scene>

      {/* TESTIMONIALS SCENE */}
      <Scene slate={scenes[projects.length + 2]}>
        <div className="grid h-full grid-cols-12 gap-x-6 px-8 lg:px-16 py-[10vh] items-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div
              className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.28em] mb-8"
              style={{ color: palette.inkSoft }}
            >
              On the record · selected reviews
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {testimonials.map((t, idx) => (
                <motion.figure
                  key={t.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, ease, delay: idx * 0.06 }}
                >
                  <blockquote
                    className="font-[family-name:var(--p-display)] tracking-[-0.005em]"
                    style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)", lineHeight: 1.45, fontWeight: 400 }}
                  >
                    <em className="italic" style={{ color: palette.accent, fontWeight: 500 }}>“</em>
                    {t.quote}
                    <em className="italic" style={{ color: palette.accent, fontWeight: 500 }}>”</em>
                  </blockquote>
                  <figcaption
                    className="mt-4 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
                    style={{ color: palette.inkSoft }}
                  >
                    — {t.name} · {t.role} · {t.org}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </Scene>

      {/* ABOUT SCENE */}
      <Scene slate={scenes[projects.length + 3]}>
        <div className="grid h-full grid-cols-12 gap-x-6 px-8 lg:px-16 py-[10vh] items-center">
          <div className="col-span-12 md:col-span-5">
            <SilhouetteFrame />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-10 md:mt-0">
            <div
              className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.28em]"
              style={{ color: palette.inkSoft }}
            >
              The author · about the engineer
            </div>
            <h2
              className="mt-4 font-[family-name:var(--p-display)] tracking-[-0.018em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)", fontWeight: 500 }}
            >
              <em className="italic">oussama bendou.</em>
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-[1.65]">
              Software engineer, working from {profile.location}. The kind of engineer
              founders want on day one — pragmatic, fast, and quietly raising the bar
              around him without making noise about it. Reading rotation: distributed
              systems, type theory, interaction design, the craft of writing.
            </p>
            <p
              className="mt-4 italic font-[family-name:var(--p-display)] text-[14.5px]"
              style={{ color: palette.inkSoft }}
            >
              currently: senior software engineer at lumen systems.
            </p>
          </div>
        </div>
      </Scene>

      {/* ACADEMIC SCENE */}
      <Scene slate={scenes[projects.length + 4]}>
        <div className="grid h-full grid-cols-12 gap-x-6 px-8 lg:px-16 py-[10vh]">
          <div className="col-span-12 md:col-span-5">
            <div
              className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.28em]"
              style={{ color: palette.inkSoft }}
            >
              Studies · earlier scenes
            </div>
            <h2
              className="mt-4 font-[family-name:var(--p-display)] tracking-[-0.018em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)", fontWeight: 500 }}
            >
              <em className="italic">where it began.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 mt-10 md:mt-0 flex flex-col justify-center gap-8">
            {education.map((e, idx) => (
              <motion.div
                key={e.institution}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.55, ease, delay: idx * 0.05 }}
                className="grid grid-cols-12 gap-x-4 border-t pt-5"
                style={{ borderColor: palette.hairline }}
              >
                <div
                  className="col-span-3 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.18em] tabular-nums"
                  style={{ color: palette.inkSoft }}
                >
                  {e.start}–{e.end}
                </div>
                <div className="col-span-9">
                  <div
                    className="font-[family-name:var(--p-display)]"
                    style={{ fontSize: "1.2rem", fontWeight: 500 }}
                  >
                    {e.institution.toLowerCase()}
                  </div>
                  <div
                    className="italic font-[family-name:var(--p-display)] text-[14px]"
                    style={{ color: palette.inkSoft }}
                  >
                    {e.degree.toLowerCase()}
                  </div>
                  <p className="mt-1 text-[14px] leading-[1.6]">{e.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Scene>

      {/* END CREDITS — CONTACT */}
      <Scene slate={scenes[projects.length + 5]} last>
        <div className="grid h-full grid-cols-12 gap-x-6 px-8 lg:px-16 py-[10vh] items-center">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <div
              className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.28em] text-center"
              style={{ color: palette.inkSoft }}
            >
              End credits · reach the studio
            </div>
            <h2
              className="mt-6 text-center font-[family-name:var(--p-display)] tracking-[-0.018em] leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)", fontWeight: 500 }}
            >
              <em className="italic">a film about software,</em>
              <br />
              still in production.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 mx-auto inline-flex items-center gap-2 px-6 py-3 text-[13px]"
              style={{
                background: palette.ink,
                color: palette.paper,
                minHeight: 44,
              }}
            >
              {profile.email} →
            </a>

            {/* CREDITS CRAWL */}
            <CreditsCrawl />
          </div>
        </div>
      </Scene>
    </main>
  );
}

function Scene({
  slate,
  children,
  first,
  last,
}: {
  slate: { n: number; take: number; code: string; int: string };
  children: React.ReactNode;
  first?: boolean;
  last?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100vh",
        background: palette.paper,
      }}
    >
      {/* TOP & BOTTOM LETTERBOX BARS */}
      <div
        className="absolute inset-x-0 top-0 z-20"
        style={{ height: "8vh", background: palette.ink }}
      >
        <div
          className="h-full mx-auto max-w-7xl px-8 lg:px-16 flex items-center justify-between font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.28em]"
          style={{ color: "#A6A6A4" }}
        >
          <span>SCENE {String(slate.n).padStart(2, "0")} · TAKE {String(slate.take).padStart(2, "0")}</span>
          <span className="hidden md:inline">{slate.int}</span>
          <span className="tabular-nums">{slate.code}</span>
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 z-20"
        style={{ height: "8vh", background: palette.ink }}
      >
        <div
          className="h-full mx-auto max-w-7xl px-8 lg:px-16 flex items-center justify-between font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.28em]"
          style={{ color: "#A6A6A4" }}
        >
          <span>OUSS-MMXXVI</span>
          <span className="hidden md:inline">aspect 21:9 · paper print</span>
          <span>{first ? "open" : last ? "fin" : "cont."}</span>
        </div>
      </div>

      {/* SCENE CUT WIPE — only on first frame entry */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30"
        initial={{ scaleX: 1, transformOrigin: "left center" }}
        whileInView={{ scaleX: 0, transformOrigin: "left center" }}
        viewport={{ once: true, margin: "-30%" }}
        transition={{ duration: 0.55, ease, delay: 0.05 }}
        style={{ background: palette.accent }}
      />

      {/* SCENE INNER FRAME — between bars */}
      <div
        className="relative h-screen flex flex-col"
        style={{ paddingTop: "8vh", paddingBottom: "8vh" }}
      >
        <div className="relative flex-1 overflow-hidden">{children}</div>
      </div>
    </section>
  );
}

function Spec({
  label,
  value,
  span,
}: {
  label: string;
  value: string;
  span?: boolean;
}) {
  return (
    <div className={span ? "col-span-2" : ""}>
      <div
        className="font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
        style={{ color: palette.inkSoft }}
      >
        {label}
      </div>
      <div
        className="mt-1 font-[family-name:var(--p-mono)] text-[13px] tabular-nums"
        style={{ color: palette.ink }}
      >
        {value}
      </div>
    </div>
  );
}

function ClipLines({
  lines,
  stagger = 0.14,
}: {
  lines: React.ReactNode[];
  stagger?: number;
}) {
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
              delay: 0.4 + i * stagger,
              duration: 0.95,
              ease,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function KeyFrame({ variant }: { variant: number }) {
  return (
    <div className="col-span-12 md:col-span-6 relative">
      <div
        className="relative w-full h-full min-h-[42vh] border"
        style={{ borderColor: palette.ink, background: "#FAF7F2" }}
      >
        <svg
          viewBox="0 0 800 600"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {variant % 3 === 0 ? (
            <>
              <circle
                cx="400"
                cy="300"
                r="180"
                fill="none"
                stroke={palette.ink}
                strokeWidth="1.5"
              />
              <circle cx="400" cy="300" r="6" fill={palette.accent} />
              <line
                x1="80"
                y1="300"
                x2="720"
                y2="300"
                stroke={palette.ink}
                strokeWidth="0.8"
                strokeOpacity="0.3"
              />
            </>
          ) : variant % 3 === 1 ? (
            <>
              <rect
                x="160"
                y="120"
                width="480"
                height="360"
                fill="none"
                stroke={palette.ink}
                strokeWidth="1.5"
              />
              <line
                x1="160"
                y1="300"
                x2="640"
                y2="300"
                stroke={palette.accent}
                strokeWidth="2.2"
              />
              <circle cx="540" cy="300" r="5" fill={palette.accent} />
            </>
          ) : (
            <>
              {Array.from({ length: 9 }).map((_, i) => (
                <line
                  key={i}
                  x1={120 + i * 70}
                  y1="100"
                  x2={120 + i * 70}
                  y2="500"
                  stroke={palette.ink}
                  strokeWidth="0.6"
                  strokeOpacity={0.15 + (i === 4 ? 0.7 : 0)}
                />
              ))}
              <rect
                x="380"
                y="100"
                width="40"
                height="400"
                fill={palette.accent}
                fillOpacity="0.85"
              />
            </>
          )}
        </svg>
        <div
          className="absolute bottom-3 left-3 font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
          style={{ color: palette.inkSoft }}
        >
          key frame · ratio 4:3 capture
        </div>
      </div>
    </div>
  );
}

function SilhouetteFrame() {
  return (
    <div
      className="relative w-full min-h-[50vh] border"
      style={{ borderColor: palette.ink, background: "#FAF7F2" }}
    >
      <svg
        viewBox="0 0 600 720"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* abstract shoulder + head silhouette */}
        <path
          d="M 60 720 C 60 540, 180 460, 180 380 C 180 320, 220 280, 300 280 C 380 280, 420 320, 420 380 C 420 460, 540 540, 540 720 Z"
          fill={palette.ink}
        />
        <circle cx="300" cy="220" r="92" fill={palette.ink} />
        <line
          x1="50"
          y1="600"
          x2="550"
          y2="600"
          stroke={palette.accent}
          strokeWidth="2"
        />
      </svg>
      <div
        className="absolute bottom-3 left-3 font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
        style={{ color: palette.inkSoft }}
      >
        the engineer · 35mm · 2026
      </div>
    </div>
  );
}

function CreditsCrawl() {
  const credits: [string, string][] = [
    ["Written & directed by", profile.name],
    ["Software design", profile.name],
    ["Performance engineering", profile.name],
    ["Edited in", "neovim · ghostty"],
    ["Stack", "next.js · postgres · clickhouse"],
    ["Color", "paper · ink · cadmium"],
    ["Typography", "fraunces · inter · ibm plex mono"],
    ["Score", "(no music; just keystrokes)"],
    ["Special thanks", "lumen · nordstack · cobalt"],
    ["Filmed entirely in", profile.location],
  ];
  return (
    <ul
      className="mt-10 max-w-md mx-auto grid grid-cols-2 gap-x-6 gap-y-2 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.2em]"
      style={{ color: palette.inkSoft }}
    >
      {credits.map(([k, v]) => (
        <li key={k} className="contents">
          <span className="text-right" style={{ color: palette.inkSoft }}>{k}</span>
          <span style={{ color: palette.ink }}>{v}</span>
        </li>
      ))}
    </ul>
  );
}
