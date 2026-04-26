"use client";

import { Cormorant_Garamond, Inter_Tight, Caveat } from "next/font/google";
import { motion } from "framer-motion";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
  values,
} from "@/lib/portfolio";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--p-display",
});
const body = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--p-body",
});
const flourish = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--p-flourish",
});

const palette = {
  sand: "#DDD0BC",
  stone: "#635858",
  moss: "#4D5D4A",
  sumi: "#1A1817",
  hanko: "#5C2118",
  paper: "#F2EBDD",
  beige: "#E8E0CD",
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const blurIn = {
  initial: { opacity: 0, filter: "blur(10px)" as string, y: 8 },
  animate: { opacity: 1, filter: "blur(0px)" as string, y: 0 },
  transition: { duration: 1.2, ease },
};

export default function AtelierPreview() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${flourish.variable} relative min-h-screen`}
      style={{
        background: palette.paper,
        color: palette.sumi,
        fontFamily: "var(--p-body), ui-sans-serif, system-ui, sans-serif",
        fontWeight: 300,
      }}
    >
      <PaperGrain />

      {/* HERO — sparse */}
      <section className="relative min-h-[100vh] grid grid-cols-12 px-8 lg:px-16 pt-28 pb-16">
        <motion.div
          {...blurIn}
          className="col-span-12 md:col-span-4"
        >
          <div
            className="font-[family-name:var(--p-display)] tracking-[-0.005em]"
            style={{ fontSize: "1.4rem", color: palette.sumi, fontWeight: 400 }}
          >
            oussama bendou.
          </div>
          <div
            className="mt-2 italic font-[family-name:var(--p-display)]"
            style={{ fontSize: "1.05rem", color: palette.stone, fontWeight: 300 }}
          >
            engineer · {profile.location.split(" · ")[0].toLowerCase()}.
          </div>
        </motion.div>

        <motion.div
          {...blurIn}
          transition={{ duration: 1.4, delay: 0.4, ease }}
          className="col-span-12 md:col-span-8 md:col-start-5 mt-32 md:mt-48 lg:mt-64"
        >
          <p
            className="max-w-2xl font-[family-name:var(--p-display)] tracking-[-0.012em] leading-[1.2]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)", fontWeight: 300, color: palette.sumi }}
          >
            <em className="italic">software,</em> made in patient quantities, with
            attention to the parts that{" "}
            <em className="italic" style={{ color: palette.moss, fontWeight: 400 }}>
              compound.
            </em>
          </p>
          <div className="mt-16 flex flex-col gap-3 max-w-xs">
            <a
              href="#works"
              className="group inline-flex items-baseline gap-3 text-[15px]"
              style={{ color: palette.sumi, fontWeight: 400, minHeight: 44 }}
            >
              <span aria-hidden style={{ color: palette.stone }}>
                →
              </span>
              <span
                className="transition-colors"
                style={{ borderBottom: `1px solid ${palette.beige}` }}
              >
                see selected work
              </span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-baseline gap-3 text-[15px]"
              style={{ color: palette.sumi, fontWeight: 400, minHeight: 44 }}
            >
              <span aria-hidden style={{ color: palette.stone }}>
                →
              </span>
              <span style={{ borderBottom: `1px solid ${palette.beige}` }}>
                say hello
              </span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* WORK — each project a near-empty viewport */}
      <section id="works">
        {projects.map((p, i) => (
          <ProjectArticle key={p.title} project={p} index={i} />
        ))}
      </section>

      {/* PROGRAMME — experience, sparsely */}
      <section
        className="min-h-[60vh] grid grid-cols-12 px-8 lg:px-16 py-32"
        style={{ background: palette.beige }}
      >
        <motion.div
          {...blurIn}
          viewport={{ once: true, margin: "-25%" }}
          className="col-span-12 md:col-span-3"
        >
          <div
            className="italic font-[family-name:var(--p-display)] text-[14.5px]"
            style={{ color: palette.stone }}
          >
            elsewhere, lately —
          </div>
        </motion.div>
        <div className="col-span-12 md:col-span-8 md:col-start-5 mt-12 md:mt-0 space-y-14">
          {experience.map((role, i) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.0, ease, delay: i * 0.08 }}
            >
              <div
                className="italic font-[family-name:var(--p-display)] text-[13.5px]"
                style={{ color: palette.stone }}
              >
                {role.start}–{role.end}, {role.location.toLowerCase()}.
              </div>
              <div
                className="mt-2 font-[family-name:var(--p-display)] tracking-[-0.012em]"
                style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 400, color: palette.sumi }}
              >
                {role.role.toLowerCase()},{" "}
                <em
                  className="italic"
                  style={{ color: palette.moss, fontWeight: 400 }}
                >
                  {role.company.toLowerCase()}.
                </em>
              </div>
              <p
                className="mt-3 max-w-prose text-[15.5px] leading-[1.7]"
                style={{ color: palette.sumi, fontWeight: 300 }}
              >
                {role.summary.toLowerCase()}
              </p>
              <ul className="mt-3 space-y-1 max-w-prose">
                {role.highlights.slice(0, 2).map((h) => (
                  <li
                    key={h}
                    className="italic font-[family-name:var(--p-display)] text-[14.5px] leading-[1.55]"
                    style={{ color: palette.stone }}
                  >
                    — {h.toLowerCase()}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* VOICES — single oversized centered quote per viewport */}
      {testimonials.slice(0, 2).map((t, i) => (
        <section
          key={t.name}
          className="min-h-[80vh] flex items-center justify-center px-8 lg:px-16 py-32"
          style={{ background: i % 2 === 0 ? palette.paper : palette.beige }}
        >
          <motion.figure
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-25%" }}
            transition={{ duration: 1.4, ease }}
            className="max-w-2xl text-center"
          >
            <blockquote
              className="italic font-[family-name:var(--p-display)] tracking-[-0.012em] leading-[1.25]"
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                fontWeight: 300,
                color: palette.sumi,
              }}
            >
              {lowerSentences(t.quote)}
            </blockquote>
            <figcaption
              className="mt-10 italic font-[family-name:var(--p-display)] text-[14.5px]"
              style={{ color: palette.stone }}
            >
              — {t.name.toLowerCase()}, {t.role.toLowerCase()} at{" "}
              {t.org.toLowerCase()}.
            </figcaption>
          </motion.figure>
        </section>
      ))}

      {/* AUTHOR — quiet bio */}
      <section className="min-h-[60vh] grid grid-cols-12 px-8 lg:px-16 py-32">
        <motion.div
          {...blurIn}
          viewport={{ once: true, margin: "-25%" }}
          className="col-span-12 md:col-span-3"
        >
          <div
            className="italic font-[family-name:var(--p-display)] text-[14.5px]"
            style={{ color: palette.stone }}
          >
            about the maker —
          </div>
        </motion.div>
        <div className="col-span-12 md:col-span-7 md:col-start-5 mt-12 md:mt-0">
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.1, ease }}
            className="font-[family-name:var(--p-display)] tracking-[-0.005em] leading-[1.55]"
            style={{ fontSize: "1.3rem", fontWeight: 300, color: palette.sumi }}
          >
            oussama bendou is a software engineer working from{" "}
            {profile.location.split(" · ")[0].toLowerCase()}. he designs and
            builds performant, opinionated software — from full-stack platforms
            to interfaces engineered{" "}
            <em className="italic" style={{ color: palette.moss }}>
              for speed and clarity.
            </em>{" "}
            the practice is small, deliberate, and unhurried.
          </motion.p>
          <ul className="mt-12 space-y-8 max-w-prose">
            {values.map((v, i) => (
              <motion.li
                key={v.k}
                initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.0, ease, delay: i * 0.08 }}
              >
                <div
                  className="italic font-[family-name:var(--p-display)]"
                  style={{ fontSize: "1.15rem", fontWeight: 400, color: palette.moss }}
                >
                  {v.k.toLowerCase()}.
                </div>
                <p className="mt-1 text-[15px] leading-[1.65]" style={{ color: palette.sumi, fontWeight: 300 }}>
                  {v.v.toLowerCase()}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRECEDENTS — academic, quiet */}
      <section
        className="min-h-[40vh] grid grid-cols-12 px-8 lg:px-16 py-32"
        style={{ background: palette.beige }}
      >
        <motion.div
          {...blurIn}
          viewport={{ once: true, margin: "-25%" }}
          className="col-span-12 md:col-span-3"
        >
          <div
            className="italic font-[family-name:var(--p-display)] text-[14.5px]"
            style={{ color: palette.stone }}
          >
            before all of this —
          </div>
        </motion.div>
        <div className="col-span-12 md:col-span-7 md:col-start-5 mt-12 md:mt-0 space-y-10">
          {education.map((e, i) => (
            <motion.div
              key={e.institution}
              initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.0, ease, delay: i * 0.08 }}
            >
              <div
                className="italic font-[family-name:var(--p-display)] text-[13.5px]"
                style={{ color: palette.stone }}
              >
                {e.start}–{e.end}.
              </div>
              <div
                className="mt-1 font-[family-name:var(--p-display)] tracking-[-0.012em]"
                style={{ fontSize: "1.4rem", fontWeight: 400, color: palette.sumi }}
              >
                {e.institution.toLowerCase()}.
              </div>
              <div
                className="italic font-[family-name:var(--p-display)] text-[14.5px]"
                style={{ color: palette.moss }}
              >
                {e.degree.toLowerCase()}
              </div>
              <p
                className="mt-2 max-w-prose text-[15px] leading-[1.65]"
                style={{ color: palette.sumi, fontWeight: 300 }}
              >
                {e.detail.toLowerCase()}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLOSE — contact + hanko stamp */}
      <section className="min-h-[80vh] grid grid-cols-12 px-8 lg:px-16 py-32 items-end">
        <motion.div
          {...blurIn}
          viewport={{ once: true, margin: "-25%" }}
          className="col-span-12 md:col-span-3"
        >
          <div
            className="italic font-[family-name:var(--p-display)] text-[14.5px]"
            style={{ color: palette.stone }}
          >
            still here.
          </div>
        </motion.div>
        <div className="col-span-12 md:col-span-7 md:col-start-5 mt-12 md:mt-0 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="font-[family-name:var(--p-display)] tracking-[-0.012em] leading-[1.05]"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontWeight: 300,
                color: palette.sumi,
                display: "inline-block",
                borderBottom: `1px solid ${palette.beige}`,
                paddingBottom: "0.1em",
                minHeight: 44,
              }}
            >
              {profile.email}
            </a>
            <div
              className="mt-6 italic font-[family-name:var(--p-display)] text-[14.5px]"
              style={{ color: palette.stone }}
            >
              {profile.location.toLowerCase()} — replies usually within a day.
            </div>
            <ul
              className="mt-6 grid grid-cols-1 gap-y-1 italic font-[family-name:var(--p-display)] text-[14px]"
              style={{ color: palette.stone }}
            >
              {profile.social.slice(0, 3).map((s) => (
                <li key={s.label}>
                  <span style={{ color: palette.sumi, fontWeight: 400 }}>
                    {s.label.toLowerCase()}.{" "}
                  </span>
                  {s.handle.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
          <Hanko />
        </div>
      </section>

      <footer className="px-8 lg:px-16 py-10 flex items-end justify-between flex-wrap gap-y-3">
        <div
          className="italic font-[family-name:var(--p-display)] text-[14px]"
          style={{ color: palette.stone }}
        >
          set in cormorant garamond &amp; inter tight, with caveat for{" "}
          <span
            className="font-[family-name:var(--p-flourish)]"
            style={{ fontSize: "1.4rem", color: palette.hanko, fontWeight: 400 }}
          >
            ouss
          </span>
          .
        </div>
        <div
          className="italic font-[family-name:var(--p-display)] text-[14px]"
          style={{ color: palette.stone }}
        >
          mmxxvi · casablanca.
        </div>
      </footer>
    </main>
  );
}

function ProjectArticle({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article
      className="min-h-[90vh] grid grid-cols-12 items-center px-8 lg:px-16 py-32"
      style={{ background: index % 2 === 0 ? palette.paper : palette.beige }}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(14px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-25%" }}
        transition={{ duration: 1.6, ease }}
        className="col-span-12 md:col-span-7"
      >
        <Plate variant={index} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-25%" }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:mt-0"
      >
        <div
          className="italic font-[family-name:var(--p-display)] text-[14px]"
          style={{ color: palette.stone }}
        >
          n° {String(index + 1).padStart(2, "0")} — {project.year}
        </div>
        <h3
          className="mt-3 font-[family-name:var(--p-display)] tracking-[-0.012em]"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, color: palette.sumi }}
        >
          {project.title.toLowerCase()}.
        </h3>
        <p
          className="mt-3 italic font-[family-name:var(--p-display)] text-[16px] leading-[1.55]"
          style={{ color: palette.stone, fontWeight: 300 }}
        >
          {lowerSentences(project.blurb)}
        </p>
        <div
          className="mt-6 text-[13.5px]"
          style={{ color: palette.sumi, fontWeight: 400 }}
        >
          {project.tags.map((t) => t.toLowerCase()).join(", ")}.
        </div>
        {project.metric ? (
          <div
            className="mt-1 italic font-[family-name:var(--p-display)] text-[14px]"
            style={{ color: palette.moss }}
          >
            {project.metric.label.toLowerCase()}:{" "}
            <span style={{ color: palette.sumi, fontWeight: 400 }} className="not-italic">
              {project.metric.value}
            </span>
            .
          </div>
        ) : null}
      </motion.div>
    </article>
  );
}

function Plate({ variant }: { variant: number }) {
  const w = 800;
  const h = 600;
  return (
    <div
      className="relative w-full"
      style={{
        aspectRatio: "4 / 3",
        background: variant % 3 === 0 ? palette.sand : variant % 3 === 1 ? palette.beige : palette.stone,
      }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {variant % 3 === 0 ? (
          <>
            <path
              d={`M 0 ${h * 0.62} C ${w * 0.35} ${h * 0.55}, ${w * 0.65} ${h * 0.55}, ${w} ${h * 0.6}`}
              stroke={palette.stone}
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
            <circle cx={w * 0.7} cy={h * 0.4} r="100" fill={palette.stone} fillOpacity="0.18" />
            <circle cx={w * 0.3} cy={h * 0.55} r="50" fill={palette.moss} fillOpacity="0.22" />
          </>
        ) : variant % 3 === 1 ? (
          <>
            <rect
              x={w * 0.18}
              y={h * 0.22}
              width={w * 0.64}
              height={h * 0.56}
              fill={palette.stone}
              fillOpacity="0.12"
            />
            <line
              x1={w * 0.18}
              y1={h * 0.5}
              x2={w * 0.82}
              y2={h * 0.5}
              stroke={palette.moss}
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
            <circle cx={w * 0.5} cy={h * 0.5} r="6" fill={palette.hanko} />
          </>
        ) : (
          <>
            <circle cx={w * 0.5} cy={h * 0.5} r="180" fill={palette.sand} fillOpacity="0.5" />
            <circle cx={w * 0.5} cy={h * 0.5} r="280" fill="none" stroke={palette.sand} strokeWidth="1" strokeOpacity="0.4" />
          </>
        )}
      </svg>
    </div>
  );
}

function Hanko() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.6, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-30%" }}
      transition={{ duration: 1.4, ease, delay: 0.3 }}
      className="relative shrink-0"
      style={{ width: 120, height: 120 }}
    >
      <svg viewBox="0 0 120 120" width="120" height="120">
        <rect
          x="6"
          y="6"
          width="108"
          height="108"
          fill="none"
          stroke={palette.hanko}
          strokeWidth="3"
        />
        <rect
          x="14"
          y="14"
          width="92"
          height="92"
          fill={palette.hanko}
          fillOpacity="0.12"
          stroke={palette.hanko}
          strokeWidth="1.4"
        />
        <text
          x="60"
          y="58"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontStyle="italic"
          fontSize="36"
          fontWeight="500"
          fill={palette.hanko}
        >
          OB
        </text>
        <text
          x="60"
          y="86"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontSize="11"
          fill={palette.hanko}
          letterSpacing="3"
        >
          atelier
        </text>
        <text
          x="60"
          y="100"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontSize="9"
          fill={palette.hanko}
          fillOpacity="0.7"
          letterSpacing="2"
        >
          mmxxvi
        </text>
      </svg>
    </motion.div>
  );
}

function PaperGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        opacity: 0.07,
        mixBlendMode: "multiply",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>\")",
      }}
    />
  );
}

function lowerSentences(s: string) {
  return s.replace(/\b([A-Z])([a-z]+)/g, (_, h, t) => `${h.toLowerCase()}${t}`);
}
