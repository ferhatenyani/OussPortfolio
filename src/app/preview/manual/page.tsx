"use client";

import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
  values,
} from "@/lib/portfolio";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function ManualPreview() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const pageNum = useTransform(progress, (v) => {
    const total = 24;
    const n = Math.max(1, Math.min(total, Math.round(v * total)));
    return `p. ${String(n).padStart(2, "0")} / ${total}`;
  });

  return (
    <main
      ref={root}
      className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen`}
      style={{
        background: palette.paper,
        color: palette.ink,
        fontFamily: "var(--p-body), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* RUNNING HEAD — vertical left rail */}
      <aside className="hidden lg:flex fixed left-0 top-[40px] bottom-0 w-12 z-30 flex-col items-center justify-between py-10 pointer-events-none">
        <div
          className="origin-center -rotate-90 whitespace-nowrap font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
          style={{ color: palette.inkSoft }}
        >
          OUSS(1) · Engineer&apos;s Manual
        </div>
        <motion.div
          className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.18em] tabular-nums"
          style={{ color: palette.inkSoft }}
        >
          {pageNum}
        </motion.div>
        <div
          className="origin-center -rotate-90 whitespace-nowrap font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
          style={{ color: palette.inkSoft }}
        >
          MMXXVI · O. Bendou
        </div>
      </aside>

      {/* TOP BANNER RULE */}
      <div className="border-b-[2px]" style={{ borderColor: palette.ink }} />

      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* PAGE HEADER */}
        <div
          className="flex items-center justify-between py-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: palette.inkSoft }}
        >
          <span>OUSS(1)</span>
          <span>Engineer&apos;s Manual · MMXXVI</span>
          <span>OUSS(1)</span>
        </div>
        <div className="border-b" style={{ borderColor: palette.ink }} />

        {/* NAME — hero */}
        <Section label="Name" intro={
          <p
            className="italic font-[family-name:var(--p-display)] text-[14px]"
            style={{ color: palette.inkSoft }}
          >
            Section §1 — Identification
          </p>
        }>
          <h1
            className="font-[family-name:var(--p-display)] tracking-[-0.022em] leading-[0.96]"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.8rem)", fontWeight: 500 }}
          >
            <ClipLines
              lines={[
                <>oussama bendou —</>,
                <>
                  software{" "}
                  <em
                    className="italic"
                    style={{ color: palette.accent, fontWeight: 500 }}
                  >
                    engineer.
                  </em>
                </>,
              ]}
            />
          </h1>
        </Section>

        {/* SYNOPSIS */}
        <Section label="Synopsis">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
            className="italic font-[family-name:var(--p-display)] tracking-[-0.005em]"
            style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.55rem)", lineHeight: 1.4, fontWeight: 400 }}
          >
            ouss [<span className="not-italic" style={{ color: palette.accent }}>--available</span>]{" "}
            [<span className="not-italic" style={{ color: palette.accent }}>--senior</span> |{" "}
            <span className="not-italic" style={{ color: palette.accent }}>--staff</span>]{" "}
            [<span className="not-italic">{profile.location}</span>]
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-3 font-[family-name:var(--p-mono)] text-[12.5px]"
            style={{ color: palette.inkSoft }}
          >
            ¶ available q2 2026 — accepting senior &amp; staff engagements
          </motion.p>
        </Section>

        {/* DESCRIPTION */}
        <Section label="Description">
          <div className="grid gap-y-5">
            <p
              className="text-[16px] leading-[1.65]"
              style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
            >
              <span
                className="float-left mr-3 mt-1 font-[family-name:var(--p-display)] leading-[0.78]"
                style={{
                  fontSize: "5.4rem",
                  fontWeight: 600,
                  color: palette.accent,
                }}
              >
                T
              </span>
              he <strong style={{ fontWeight: 600 }}>ouss</strong> utility designs and
              builds performant, opinionated software — from full-stack platforms to
              interfaces engineered for speed and clarity. It is invoked by founders
              and senior engineering teams on the parts of a product that compound
              over time: interfaces, data models, and the primitives those rest on.
            </p>
            <p
              className="text-[16px] leading-[1.65]"
              style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
            >
              By default, <strong style={{ fontWeight: 600 }}>ouss</strong> exits with a working,
              well-instrumented system in production. With the{" "}
              <span className="font-[family-name:var(--p-mono)] text-[14px]" style={{ color: palette.accent }}>
                --senior
              </span>{" "}
              flag, additional behaviors are enabled: technical-design authorship,
              cross-team RFCs, code-review culture work, and direct mentoring. See{" "}
              <em className="italic">EXAMPLES</em> for typical usage.
            </p>
          </div>
        </Section>

        <BookRule />

        {/* CHAPTERS — projects */}
        <Section label="Examples — Selected Works">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease, delay: (i % 3) * 0.06 }}
              className="group relative grid grid-cols-12 gap-x-6 py-12 border-t"
              style={{ borderColor: palette.hairline }}
            >
              <div
                className="col-span-3 md:col-span-2 font-[family-name:var(--p-display)] leading-[0.78] tracking-[-0.02em]"
                style={{
                  fontSize: "clamp(4rem, 11vw, 8rem)",
                  fontWeight: 500,
                  color: palette.ink,
                }}
              >
                {ROMAN[i]}
              </div>
              <div className="col-span-9 md:col-span-10">
                <div
                  className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
                  style={{ color: palette.inkSoft }}
                >
                  Chapter {ROMAN[i]} · {p.year}
                </div>
                <h3
                  className="mt-2 font-[family-name:var(--p-display)] tracking-[-0.012em]"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 500 }}
                >
                  <a href="#" className="relative inline-block">
                    {p.title.toLowerCase()}
                    <span
                      className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 transition-[width] duration-200 group-hover:w-full"
                      style={{ background: palette.accent }}
                    />
                  </a>
                </h3>
                <p
                  className="mt-3 max-w-prose text-[15.5px] leading-[1.65]"
                  style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
                >
                  <em
                    className="italic"
                    style={{ color: palette.inkSoft, fontFamily: "var(--p-display), serif" }}
                  >
                    Description.{" "}
                  </em>
                  {p.blurb}
                </p>
                <dl
                  className="mt-5 grid grid-cols-12 gap-y-1 font-[family-name:var(--p-mono)] text-[12.5px]"
                  style={{ color: palette.ink }}
                >
                  <dt className="col-span-3" style={{ color: palette.inkSoft }}>OPTIONS</dt>
                  <dd className="col-span-9">
                    {p.tags.map((t, idx) => (
                      <span key={t}>
                        <span style={{ color: palette.accent }}>--{t.toLowerCase().replace(/\s+/g, "-")}</span>
                        {idx < p.tags.length - 1 ? "  " : ""}
                      </span>
                    ))}
                  </dd>
                  {p.metric ? (
                    <>
                      <dt className="col-span-3" style={{ color: palette.inkSoft }}>EXIT STATUS</dt>
                      <dd className="col-span-9">
                        0 — <span style={{ color: palette.accent }}>{p.metric.value}</span>{" "}
                        <span style={{ color: palette.inkSoft }}>({p.metric.label.toLowerCase()})</span>
                      </dd>
                    </>
                  ) : null}
                </dl>
              </div>
            </motion.article>
          ))}
        </Section>

        <BookRule />

        {/* HISTORY — experience */}
        <Section label="History">
          <div className="space-y-10">
            {experience.map((role, i) => (
              <motion.article
                key={role.company}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                className="grid grid-cols-12 gap-x-6"
              >
                <div
                  className="col-span-3 font-[family-name:var(--p-mono)] text-[12px] uppercase tracking-[0.18em]"
                  style={{ color: palette.inkSoft }}
                >
                  {role.start}–{role.end}
                </div>
                <div className="col-span-9">
                  <h4
                    className="font-[family-name:var(--p-display)] tracking-[-0.005em]"
                    style={{ fontSize: "1.4rem", fontWeight: 500 }}
                  >
                    {role.role.toLowerCase()},{" "}
                    <em className="italic" style={{ color: palette.inkSoft }}>
                      {role.company.toLowerCase()}
                    </em>
                  </h4>
                  <p
                    className="mt-2 text-[15px] leading-[1.65]"
                    style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
                  >
                    {role.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5 list-none">
                    {role.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-[14.5px] leading-[1.55] pl-5 relative"
                      >
                        <span
                          className="absolute left-0 font-[family-name:var(--p-display)]"
                          style={{ color: palette.accent }}
                        >
                          ¶
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <BookRule />

        {/* SEE ALSO — testimonials */}
        <Section label="See Also">
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, ease, delay: i * 0.06 }}
              >
                <blockquote
                  className="font-[family-name:var(--p-display)] tracking-[-0.005em] italic"
                  style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)", lineHeight: 1.45, fontWeight: 400 }}
                >
                  <span style={{ color: palette.accent, fontWeight: 500 }} className="not-italic mr-1">
                    “
                  </span>
                  {t.quote}
                  <span style={{ color: palette.accent, fontWeight: 500 }} className="not-italic ml-1">
                    ”
                  </span>
                </blockquote>
                <figcaption
                  className="mt-3 font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: palette.inkSoft }}
                >
                  — {t.name} · {t.role} · {t.org}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Section>

        <BookRule />

        {/* AUTHOR — about */}
        <Section label="Author">
          <p
            className="text-[16px] leading-[1.65]"
            style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
          >
            <strong style={{ fontWeight: 600 }}>{profile.name}.</strong> {profile.role.toLowerCase()},
            writing from {profile.location}. The author maintains{" "}
            <em
              className="italic"
              style={{ color: palette.inkSoft }}
            >
              ouss(1)
            </em>{" "}
            and contributes occasionally to its dependencies. Reading rotation:{" "}
            distributed systems, type theory, interaction design, the craft of writing.
          </p>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {values.map((v) => (
              <li key={v.k} className="border-t pt-3" style={{ borderColor: palette.hairline }}>
                <div
                  className="font-[family-name:var(--p-display)] italic text-[15px]"
                  style={{ color: palette.ink, fontWeight: 500 }}
                >
                  {v.k.toLowerCase()}.
                </div>
                <p className="mt-1 text-[14px] leading-[1.6]" style={{ color: palette.inkSoft }}>
                  {v.v}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <BookRule />

        {/* STUDIES — academic */}
        <Section label="Studies">
          <ol className="space-y-6">
            {education.map((e) => (
              <motion.li
                key={e.institution}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.55, ease }}
                className="grid grid-cols-12 gap-x-6"
              >
                <div
                  className="col-span-3 font-[family-name:var(--p-mono)] text-[12px] uppercase tracking-[0.18em]"
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
                  <div className="italic font-[family-name:var(--p-display)] text-[14.5px]" style={{ color: palette.inkSoft }}>
                    {e.degree.toLowerCase()}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-[1.6]">{e.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </Section>

        <BookRule />

        {/* REPORTING — contact */}
        <Section label="Reporting Bugs · Reaching Out">
          <p
            className="text-[16px] leading-[1.65]"
            style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
          >
            Correspondence to{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-[family-name:var(--p-mono)] relative inline-block"
              style={{ color: palette.accent, textUnderlineOffset: "3px" }}
            >
              {profile.email}
            </a>
            . The author replies, on average, within a working day. For senior &amp;
            staff engagements beginning the second quarter of the present year, brief
              replies are preferred over long ones; specifics are appreciated.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-[13px]"
              style={{ background: palette.ink, color: palette.paper, minHeight: 44 }}
            >
              <span>Write to the author</span>
              <span aria-hidden>→</span>
            </a>
            {profile.social.slice(0, 3).map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-[13px] border"
                style={{ borderColor: palette.ink, color: palette.ink, minHeight: 44 }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </Section>

        {/* COLOPHON */}
        <div className="border-t mt-20 pt-3" style={{ borderColor: palette.ink }} />
        <div
          className="flex items-center justify-between py-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: palette.inkSoft }}
        >
          <span>OUSS(1)</span>
          <span>2026-04 · printed in casablanca</span>
          <span>OUSS(1)</span>
        </div>
      </div>
      <div className="border-t-[2px] mt-0" style={{ borderColor: palette.ink }} />
      <div className="h-12" />
    </main>
  );
}

function Section({
  label,
  intro,
  children,
}: {
  label: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-16 md:pt-20 pb-2">
      <header className="mb-8">
        <h2
          className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
          style={{ color: palette.ink, fontWeight: 500 }}
        >
          {label}
        </h2>
        {intro ? <div className="mt-2">{intro}</div> : null}
      </header>
      {children}
    </section>
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
            transition={{
              delay: 0.15 + i * 0.12,
              duration: 0.85,
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

function BookRule() {
  return (
    <div className="my-8 flex items-center justify-center gap-4" aria-hidden>
      <span className="h-px w-24" style={{ background: palette.hairline }} />
      <span
        className="font-[family-name:var(--p-display)] italic text-[14px]"
        style={{ color: palette.inkSoft }}
      >
        ✦
      </span>
      <span className="h-px w-24" style={{ background: palette.hairline }} />
    </div>
  );
}
