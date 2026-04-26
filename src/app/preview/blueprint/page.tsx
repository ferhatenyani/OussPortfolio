"use client";

import { Inter_Tight, Source_Serif_4, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
  values,
} from "@/lib/portfolio";

const technical = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--p-tech",
});
const specimen = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--p-specimen",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--p-mono",
});

const palette = {
  cyan: "#1B3B6F",
  cyanDeep: "#102A55",
  paper: "#E8F1F2",
  amber: "#F77F00",
  grid: "#2A4F88",
  gridSoft: "#1F4279",
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function BlueprintPreview() {
  return (
    <main
      className={`${technical.variable} ${specimen.variable} ${mono.variable} relative min-h-screen`}
      style={{
        background: palette.cyan,
        color: palette.paper,
        fontFamily: "var(--p-tech), ui-sans-serif, system-ui, sans-serif",
        fontWeight: 300,
      }}
    >
      <GridBackground />

      {/* TITLE BLOCK BAND */}
      <div
        className="relative z-10 border-b mx-auto max-w-7xl px-6 lg:px-10 py-3 grid grid-cols-12 gap-x-4 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ borderColor: palette.amber, color: palette.paper }}
      >
        <div className="col-span-3">drawing — OB-01</div>
        <div className="col-span-3">scale — 1:1 / a1 capture</div>
        <div className="col-span-3">issued — 2026.04.26</div>
        <div className="col-span-3 text-right" style={{ color: palette.amber }}>
          revision — D
        </div>
      </div>

      {/* HERO — TITLE PAGE */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16">
        <div
          className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
          style={{ color: palette.amber }}
        >
          Sheet 00 — title page · oussama bendou · MMXXVI
        </div>
        <h1
          className="mt-10 font-[family-name:var(--p-specimen)] tracking-[-0.02em] leading-[0.96]"
          style={{ fontSize: "clamp(2.6rem, 7.4vw, 6.4rem)", fontWeight: 300 }}
        >
          <ClipLines
            lines={[
              <>An engineer drawn</>,
              <>
                to <em className="italic" style={{ color: palette.amber, fontWeight: 400 }}>scale</em>,
              </>,
              <>shipped to plan.</>,
            ]}
          />
        </h1>

        {/* dimension callouts on hero */}
        <div className="mt-8 flex flex-wrap items-end justify-between gap-y-6">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease }}
            className="max-w-md font-[family-name:var(--p-specimen)] tracking-[-0.005em]"
            style={{ fontSize: "17px", lineHeight: 1.6, color: palette.paper, fontWeight: 400 }}
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            <a
              href="#sheets"
              className="inline-flex items-center gap-2 px-5 py-3 text-[12.5px] font-[family-name:var(--p-mono)] uppercase tracking-[0.2em] border"
              style={{
                borderColor: palette.amber,
                color: palette.cyan,
                background: palette.amber,
                minHeight: 44,
              }}
            >
              ◆ enter sheets
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-[12.5px] font-[family-name:var(--p-mono)] uppercase tracking-[0.2em] border"
              style={{ borderColor: palette.paper, color: palette.paper, minHeight: 44 }}
            >
              ◯ correspond
            </a>
          </motion.div>
        </div>

        {/* DIMENSION SCHEDULE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease }}
          className="mt-16 border relative"
          style={{ borderColor: palette.amber }}
        >
          <DimensionFrame />
        </motion.div>
      </section>

      {/* SHEET INDEX */}
      <div
        className="relative z-10 border-y mx-auto max-w-7xl px-6 lg:px-10 py-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.2em] flex flex-wrap items-center gap-x-6 gap-y-1"
        style={{ borderColor: palette.amber, color: palette.paper }}
      >
        <span style={{ color: palette.amber }}>sheet index</span>
        <span>00 / title</span>
        <span>01 / works</span>
        <span>02 / programme</span>
        <span>03 / inscriptions</span>
        <span>04 / brief</span>
        <span>05 / precedents</span>
        <span>06 / sign-off</span>
      </div>

      {/* SHEET 01 — WORKS */}
      <section id="sheets" className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12">
        <SheetHead n="01" label="Works · Selected Drawings" />
        <div className="mt-10 grid grid-cols-12 gap-6">
          {projects.map((p, i) => (
            <ProjectDrawing key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* SHEET 02 — SCHEDULE */}
      <section
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-12 border-t"
        style={{ borderColor: palette.amber }}
      >
        <SheetHead n="02" label="Programme · Schedule of Works" />
        <div
          className="mt-10 border"
          style={{ borderColor: palette.amber, background: palette.cyanDeep }}
        >
          <div
            className="grid grid-cols-12 gap-x-4 px-5 py-3 border-b font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
            style={{ borderColor: palette.amber, color: palette.amber }}
          >
            <div className="col-span-2">period</div>
            <div className="col-span-3">studio</div>
            <div className="col-span-3">role</div>
            <div className="col-span-2">site</div>
            <div className="col-span-2 text-right">discipline</div>
          </div>
          {experience.map((role, i) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className={`grid grid-cols-12 gap-x-4 px-5 py-6 ${
                i < experience.length - 1 ? "border-b" : ""
              }`}
              style={{ borderColor: palette.gridSoft }}
            >
              <div
                className="col-span-2 font-[family-name:var(--p-mono)] text-[12px] tabular-nums"
                style={{ color: palette.paper }}
              >
                {role.start}–{role.end}
              </div>
              <div
                className="col-span-3 font-[family-name:var(--p-specimen)]"
                style={{ fontSize: "1.05rem", color: palette.paper, fontWeight: 500 }}
              >
                {role.company.toLowerCase()}
              </div>
              <div
                className="col-span-3 font-[family-name:var(--p-specimen)] italic text-[14.5px]"
                style={{ color: palette.paper, opacity: 0.8 }}
              >
                {role.role.toLowerCase()}
              </div>
              <div
                className="col-span-2 font-[family-name:var(--p-mono)] text-[11.5px] uppercase tracking-[0.18em]"
                style={{ color: palette.paper, opacity: 0.7 }}
              >
                {role.location.toLowerCase()}
              </div>
              <div
                className="col-span-2 text-right font-[family-name:var(--p-mono)] text-[11.5px]"
                style={{ color: palette.amber }}
              >
                {role.stack[0]?.toLowerCase()} · +{role.stack.length - 1}
              </div>
              <div
                className="col-span-12 mt-3 text-[14.5px] leading-[1.6] font-[family-name:var(--p-specimen)]"
                style={{ color: palette.paper, fontWeight: 400 }}
              >
                <em className="italic" style={{ color: palette.amber }}>note. </em>
                {role.summary}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SHEET 03 — INSCRIPTIONS */}
      <section
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-12 border-t"
        style={{ borderColor: palette.amber }}
      >
        <SheetHead n="03" label="Inscriptions · Selected Reviews" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.65, ease, delay: i * 0.06 }}
              className="border p-6"
              style={{ borderColor: palette.amber, background: palette.cyanDeep }}
            >
              <div
                className="font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
                style={{ color: palette.amber }}
              >
                inscription no. {String(i + 1).padStart(2, "0")} · plate
              </div>
              <blockquote
                className="mt-3 font-[family-name:var(--p-specimen)] tracking-[-0.005em]"
                style={{ fontSize: "1.05rem", lineHeight: 1.5, color: palette.paper, fontWeight: 400 }}
              >
                <em className="italic" style={{ color: palette.amber }}>“</em>
                {t.quote}
                <em className="italic" style={{ color: palette.amber }}>”</em>
              </blockquote>
              <figcaption
                className="mt-4 pt-3 border-t font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
                style={{ borderColor: palette.gridSoft, color: palette.paper, opacity: 0.85 }}
              >
                {t.name} · {t.role.toLowerCase()} · {t.org.toLowerCase()}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* SHEET 04 — BRIEF */}
      <section
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-12 border-t"
        style={{ borderColor: palette.amber }}
      >
        <SheetHead n="04" label="Brief · About the Engineer" />
        <div className="mt-10 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-7">
            <p
              className="font-[family-name:var(--p-specimen)] text-[16.5px] leading-[1.65]"
              style={{ textAlign: "justify", hyphens: "auto", fontWeight: 400 } as React.CSSProperties}
            >
              <span
                className="float-left mr-3 mt-1 font-[family-name:var(--p-specimen)] leading-[0.8]"
                style={{ fontSize: "5rem", fontWeight: 600, color: palette.amber }}
              >
                T
              </span>
              he subject of this drawing set is one engineer. Designs and builds
              performant, opinionated software — from full-stack platforms to
              interfaces engineered for speed and clarity. The drawings that
              follow document the projects, programme, and constraints under
              which the work is produced.
            </p>
            <p
              className="mt-4 font-[family-name:var(--p-specimen)] italic text-[15.5px] leading-[1.65]"
              style={{ color: palette.paper, opacity: 0.85, fontWeight: 400 }}
            >
              Brief issued by the engineer to himself, for the second quarter of
              the present year.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 mt-10 md:mt-0">
            <ul className="space-y-3">
              {values.map((v) => (
                <li
                  key={v.k}
                  className="border p-4"
                  style={{ borderColor: palette.gridSoft, background: palette.cyanDeep }}
                >
                  <div
                    className="font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: palette.amber }}
                  >
                    {v.k.toLowerCase()}
                  </div>
                  <p
                    className="mt-1 font-[family-name:var(--p-specimen)] text-[14px] leading-[1.55]"
                    style={{ color: palette.paper, fontWeight: 400 }}
                  >
                    {v.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SHEET 05 — PRECEDENTS */}
      <section
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-12 border-t"
        style={{ borderColor: palette.amber }}
      >
        <SheetHead n="05" label="Precedents · Studies" />
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((e, i) => (
            <motion.li
              key={e.institution}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, ease, delay: i * 0.05 }}
              className="border p-5 relative"
              style={{ borderColor: palette.amber, background: palette.cyanDeep }}
            >
              <div
                className="font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
                style={{ color: palette.amber }}
              >
                precedent {String(i + 1).padStart(2, "0")} · {e.start}–{e.end}
              </div>
              <div
                className="mt-2 font-[family-name:var(--p-specimen)] tracking-[-0.005em]"
                style={{ fontSize: "1.2rem", color: palette.paper, fontWeight: 500 }}
              >
                {e.institution.toLowerCase()}
              </div>
              <div
                className="font-[family-name:var(--p-specimen)] italic text-[13.5px]"
                style={{ color: palette.paper, opacity: 0.8 }}
              >
                {e.degree.toLowerCase()}
              </div>
              <p
                className="mt-3 font-[family-name:var(--p-specimen)] text-[14px] leading-[1.55]"
                style={{ color: palette.paper, fontWeight: 400 }}
              >
                {e.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* SHEET 06 — SIGN-OFF */}
      <section
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-20 border-t"
        style={{ borderColor: palette.amber }}
      >
        <SheetHead n="06" label="Sign-Off · Correspondence" />
        <div className="mt-10 grid grid-cols-12 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <h2
              className="font-[family-name:var(--p-specimen)] tracking-[-0.018em] leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)", fontWeight: 400, color: palette.paper }}
            >
              <em className="italic" style={{ color: palette.amber }}>countersign</em> the drawings.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block font-[family-name:var(--p-specimen)] tracking-[-0.012em]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                fontWeight: 500,
                color: palette.paper,
                borderBottom: `2px solid ${palette.amber}`,
              }}
            >
              {profile.email}
            </a>
            <ul className="mt-6 grid grid-cols-2 gap-y-1 font-[family-name:var(--p-mono)] text-[12px]">
              {profile.social.map((s) => (
                <li key={s.label}>
                  <span style={{ color: palette.amber }}>{s.label.toLowerCase()}: </span>
                  {s.handle}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-span-12 md:col-span-4 md:col-start-9 mt-10 md:mt-0 border p-5"
            style={{ borderColor: palette.amber, background: palette.cyanDeep }}
          >
            <div
              className="font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
              style={{ color: palette.amber }}
            >
              title block
            </div>
            <dl
              className="mt-3 grid grid-cols-12 gap-y-1.5 font-[family-name:var(--p-mono)] text-[11.5px]"
              style={{ color: palette.paper }}
            >
              <dt className="col-span-4" style={{ color: palette.amber }}>drawing</dt>
              <dd className="col-span-8">OB-PORTFOLIO-01</dd>
              <dt className="col-span-4" style={{ color: palette.amber }}>scale</dt>
              <dd className="col-span-8">1 : 1</dd>
              <dt className="col-span-4" style={{ color: palette.amber }}>issued</dt>
              <dd className="col-span-8">2026.04.26</dd>
              <dt className="col-span-4" style={{ color: palette.amber }}>revision</dt>
              <dd className="col-span-8">D</dd>
              <dt className="col-span-4" style={{ color: palette.amber }}>signed</dt>
              <dd className="col-span-8">O. Bendou</dd>
            </dl>
          </div>
        </div>
      </section>

      <div
        className="relative z-10 border-t-[2px] mx-auto max-w-7xl px-6 lg:px-10 py-4 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em] flex items-center justify-between"
        style={{ borderColor: palette.amber, color: palette.paper }}
      >
        <span>OB-PORTFOLIO-01 · sheet 06 of 06</span>
        <span style={{ color: palette.amber }}>do not scale from drawing</span>
        <span>— end of set —</span>
      </div>
    </main>
  );
}

function GridBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${palette.gridSoft} 1px, transparent 1px), linear-gradient(to bottom, ${palette.gridSoft} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: 0.45,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${palette.grid} 1px, transparent 1px), linear-gradient(to bottom, ${palette.grid} 1px, transparent 1px)`,
          backgroundSize: "160px 160px",
          opacity: 0.65,
        }}
      />
    </>
  );
}

function SheetHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <div className="flex items-end gap-5">
        <span
          aria-hidden
          className="font-[family-name:var(--p-specimen)] leading-[0.78]"
          style={{
            fontSize: "clamp(3rem, 6vw, 4.6rem)",
            fontWeight: 400,
            color: palette.amber,
          }}
        >
          {n}
        </span>
        <h2
          className="pb-2 font-[family-name:var(--p-specimen)] tracking-[-0.012em]"
          style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 400, color: palette.paper }}
        >
          <em className="italic">sheet {n}</em> — {label.toLowerCase()}
        </h2>
      </div>
      <span
        className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: palette.amber }}
      >
        scale 1:1 · cyanotype
      </span>
    </div>
  );
}

function DimensionFrame() {
  return (
    <div className="grid grid-cols-12 gap-x-4 p-6 relative">
      <div
        aria-hidden
        className="absolute -top-3 left-6 px-2 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ background: palette.cyan, color: palette.amber }}
      >
        plot — title page · 240×168 mm
      </div>
      <div className="col-span-12 md:col-span-3">
        <DimSpec label="years building" value="07+" />
        <DimSpec label="prod. systems" value="20+" />
      </div>
      <div className="col-span-12 md:col-span-3">
        <DimSpec label="open-source ★" value="4.1k" />
        <DimSpec label="available" value="Q2 2026" />
      </div>
      <div className="col-span-12 md:col-span-3">
        <DimSpec label="site" value={profile.location.split(" · ")[0].toLowerCase()} />
        <DimSpec label="utc" value="+1" />
      </div>
      <div className="col-span-12 md:col-span-3">
        <DimSpec label="now" value="senior @ lumen" amber />
        <DimSpec label="next" value="senior · staff" amber />
      </div>
    </div>
  );
}

function DimSpec({ label, value, amber }: { label: string; value: string; amber?: boolean }) {
  return (
    <div className="mb-3">
      <div
        className="font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
        style={{ color: palette.amber }}
      >
        {label}
      </div>
      <div
        className="mt-1 font-[family-name:var(--p-specimen)] tabular-nums"
        style={{ fontSize: "1.4rem", color: amber ? palette.amber : palette.paper, fontWeight: 500 }}
      >
        {value}
      </div>
    </div>
  );
}

function ProjectDrawing({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.65, ease, delay: (index % 3) * 0.06 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="col-span-12 md:col-span-6 group relative block border"
      style={{
        borderColor: palette.amber,
        background: palette.cyanDeep,
      }}
    >
      <div
        className="aspect-[4/3] relative overflow-hidden"
        style={{ background: palette.cyan }}
      >
        <ElevationDrawing index={index} hover={hover} />
        <span
          aria-hidden
          className="absolute top-3 left-3 px-2 py-0.5 font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em] border"
          style={{ borderColor: palette.amber, color: palette.amber }}
        >
          DWG-{String(index + 1).padStart(2, "0")} · ELEV
        </span>
        <span
          aria-hidden
          className="absolute top-3 right-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: palette.paper }}
        >
          {project.year}
        </span>
      </div>
      <div className="border-t p-5" style={{ borderColor: palette.amber }}>
        <h3
          className="font-[family-name:var(--p-specimen)] tracking-[-0.012em]"
          style={{ fontSize: "1.5rem", fontWeight: 500, color: palette.paper }}
        >
          {project.title.toLowerCase()}{" "}
          <em
            className="italic"
            style={{ color: palette.amber, fontWeight: 400, fontSize: "0.62em" }}
          >
            ({project.tags[0].toLowerCase()})
          </em>
        </h3>
        <p
          className="mt-2 font-[family-name:var(--p-specimen)] text-[14.5px] leading-[1.6]"
          style={{ color: palette.paper, fontWeight: 400 }}
        >
          {project.blurb}
        </p>
        <div
          className="mt-4 pt-3 border-t flex items-center justify-between font-[family-name:var(--p-mono)] text-[11px]"
          style={{ borderColor: palette.gridSoft, color: palette.paper }}
        >
          <span style={{ color: palette.amber }}>
            {project.tags.map((t) => t.toLowerCase()).join(" · ")}
          </span>
          {project.metric ? (
            <span style={{ color: palette.amber }} className="tabular-nums">
              ◆ {project.metric.value}
            </span>
          ) : null}
        </div>
      </div>
    </motion.a>
  );
}

function ElevationDrawing({ index, hover }: { index: number; hover: boolean }) {
  const v = index % 3;
  return (
    <svg
      viewBox="0 0 800 600"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* drawing grid */}
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={`g-${i}`}
          x1={i * 50}
          x2={i * 50}
          y1="0"
          y2="600"
          stroke={palette.gridSoft}
          strokeWidth="0.6"
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          x2="800"
          y1={i * 50}
          y2={i * 50}
          stroke={palette.gridSoft}
          strokeWidth="0.6"
        />
      ))}
      {/* main drawing */}
      {v === 0 ? (
        <>
          <rect x="180" y="120" width="440" height="360" fill="none" stroke={palette.paper} strokeWidth="1.6" />
          <rect x="240" y="180" width="320" height="240" fill="none" stroke={palette.paper} strokeWidth="1" />
          <line x1="240" y1="300" x2="560" y2="300" stroke={palette.amber} strokeWidth="1.6" />
          <circle cx="460" cy="300" r="6" fill={palette.amber} />
        </>
      ) : v === 1 ? (
        <>
          <circle cx="400" cy="300" r="180" fill="none" stroke={palette.paper} strokeWidth="1.6" />
          <circle cx="400" cy="300" r="90" fill="none" stroke={palette.paper} strokeWidth="1" />
          <line x1="400" y1="120" x2="400" y2="480" stroke={palette.amber} strokeWidth="1.4" strokeDasharray="6 4" />
          <line x1="220" y1="300" x2="580" y2="300" stroke={palette.amber} strokeWidth="1.4" strokeDasharray="6 4" />
        </>
      ) : (
        <>
          <polygon points="400,120 580,300 400,480 220,300" fill="none" stroke={palette.paper} strokeWidth="1.6" />
          <polygon points="400,180 520,300 400,420 280,300" fill="none" stroke={palette.paper} strokeWidth="1" />
          <line x1="400" y1="120" x2="400" y2="480" stroke={palette.amber} strokeWidth="1.4" strokeDasharray="4 4" />
        </>
      )}
      {/* dimension callouts on hover */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <line x1="180" y1="80" x2="620" y2="80" stroke={palette.amber} strokeWidth="0.8" />
        <line x1="180" y1="70" x2="180" y2="90" stroke={palette.amber} strokeWidth="0.8" />
        <line x1="620" y1="70" x2="620" y2="90" stroke={palette.amber} strokeWidth="0.8" />
        <text
          x="400"
          y="60"
          textAnchor="middle"
          fontFamily="Geist Mono, monospace"
          fontSize="13"
          fill={palette.amber}
          letterSpacing="2"
        >
          440 mm
        </text>
        <line x1="660" y1="120" x2="660" y2="480" stroke={palette.amber} strokeWidth="0.8" />
        <text
          x="685"
          y="305"
          fontFamily="Geist Mono, monospace"
          fontSize="13"
          fill={palette.amber}
          letterSpacing="2"
        >
          360
        </text>
      </motion.g>
    </svg>
  );
}

function ClipLines({ lines }: { lines: React.ReactNode[] }) {
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
            transition={{ delay: 0.2 + i * 0.12, duration: 0.85, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
