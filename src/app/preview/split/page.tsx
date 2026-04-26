"use client";

import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
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

export default function SplitPreview() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen`}
      style={{
        background: palette.paper,
        color: palette.ink,
        fontFamily: "var(--p-body), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* SPINE — 1px rule running down the page center */}
      <div
        aria-hidden
        className="hidden md:block fixed top-[40px] bottom-0 left-1/2 z-10 pointer-events-none"
        style={{ width: 1, background: palette.ink, opacity: 0.85 }}
      />

      {/* SCROLL META — corner labels */}
      <div
        aria-hidden
        className="hidden md:flex fixed top-12 left-6 z-20 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: palette.inkSoft }}
      >
        editorial · prose
      </div>
      <div
        aria-hidden
        className="hidden md:flex fixed top-12 right-6 z-20 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: palette.inkSoft }}
      >
        terminal · plain text
      </div>

      <div className="border-t-[2px]" style={{ borderColor: palette.ink }} />

      {/* HERO */}
      <Row palette={palette}>
        <LeftColumn>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
            style={{ color: palette.inkSoft }}
          >
            §1 — Identification
          </motion.div>
          <h1
            className="mt-8 font-[family-name:var(--p-display)] tracking-[-0.022em] leading-[0.96]"
            style={{ fontSize: "clamp(2.4rem, 6.4vw, 5.2rem)", fontWeight: 500 }}
          >
            <ClipLines
              lines={[
                <>Building considered</>,
                <>
                  software with the patience
                </>,
                <>
                  of a{" "}
                  <em
                    className="italic"
                    style={{ color: palette.accent, fontWeight: 500 }}
                  >
                    craftsman.
                  </em>
                </>,
              ]}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease }}
            className="mt-8 max-w-md text-[15.5px] leading-[1.65]"
            style={{ color: palette.ink }}
          >
            {profile.tagline}
          </motion.p>
        </LeftColumn>

        <RightColumn>
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="whitespace-pre-wrap font-[family-name:var(--p-mono)] text-[13px] leading-[1.7]"
            style={{ color: palette.ink }}
          >
            <PromptLine delay={0.4}>ouss --intro</PromptLine>
            <OutLine delay={0.65}>oussama bendou — software engineer.</OutLine>
            <OutLine delay={0.78}>casablanca / remote · utc+1</OutLine>
            <OutLine delay={0.92}>available q2 2026 · senior · staff</OutLine>
            <BlankLine delay={1.05} />
            <PromptLine delay={1.18}>cat tagline.txt</PromptLine>
            <OutLine delay={1.4}>{profile.tagline}</OutLine>
            <BlankLine delay={1.6} />
            <PromptLine delay={1.78}>./view --section=projects</PromptLine>
            <OutLine delay={1.95}>
              <span style={{ color: palette.inkSoft }}>↓ scrolling…</span>
            </OutLine>
          </motion.pre>
        </RightColumn>
      </Row>

      {/* PROJECTS */}
      <SectionHead label="§2 — Selected Works" mono="ls -la projects/" />

      {projects.map((p, i) => (
        <ProjectRow key={p.title} project={p} index={i} />
      ))}

      {/* EXPERIENCE */}
      <SectionHead label="§3 — History" mono="git log --pretty=oneline" />
      {experience.map((role, i) => (
        <Row key={role.company} palette={palette} index={i}>
          <LeftColumn>
            <div
              className="font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em] mb-3"
              style={{ color: palette.inkSoft }}
            >
              {role.start}–{role.end} · {role.location}
            </div>
            <h3
              className="font-[family-name:var(--p-display)] tracking-[-0.005em]"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)", fontWeight: 500 }}
            >
              <em className="italic" style={{ color: palette.inkSoft }}>
                {role.role.toLowerCase()},{" "}
              </em>
              {role.company.toLowerCase()}.
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65] max-w-prose"
              style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
            >
              {role.summary}
            </p>
          </LeftColumn>
          <RightColumn>
            <pre
              className="whitespace-pre-wrap font-[family-name:var(--p-mono)] text-[12.5px] leading-[1.65]"
              style={{ color: palette.ink }}
            >{`commit ${shortHash(role.company)}
Author: ${profile.name} <${profile.email}>
Date:   ${role.start}–${role.end} (${role.location})

    ${role.role}, ${role.company}

${role.highlights
  .map((h, idx) => `    [${String(idx + 1).padStart(2, "0")}]  ${h}`)
  .join("\n")}

stack: ${role.stack.join(", ")}`}</pre>
          </RightColumn>
        </Row>
      ))}

      {/* TESTIMONIALS */}
      <SectionHead label="§4 — See Also" mono="cat reviews.md" />
      <Row palette={palette}>
        <LeftColumn>
          <div className="space-y-10">
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.65, ease }}
              >
                <blockquote
                  className="font-[family-name:var(--p-display)] italic tracking-[-0.005em]"
                  style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: 1.5, fontWeight: 400 }}
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
                  className="mt-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.2em]"
                  style={{ color: palette.inkSoft }}
                >
                  — {t.name} · {t.role} · {t.org}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </LeftColumn>
        <RightColumn>
          <pre
            className="whitespace-pre-wrap font-[family-name:var(--p-mono)] text-[12.5px] leading-[1.7]"
            style={{ color: palette.ink }}
          >{testimonials
            .map(
              (t, i) =>
                `--- review ${String(i + 1).padStart(2, "0")} ---\nfrom: ${t.name}\nrole: ${t.role} @ ${t.org}\n\n  > ${wrap(t.quote, 52).join("\n  > ")}\n`
            )
            .join("\n")}</pre>
        </RightColumn>
      </Row>

      {/* ABOUT */}
      <SectionHead label="§5 — Author" mono="man oussama" />
      <Row palette={palette}>
        <LeftColumn>
          <p
            className="text-[16px] leading-[1.65]"
            style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
          >
            <span
              className="float-left mr-2 mt-1 font-[family-name:var(--p-display)] leading-[0.78]"
              style={{ fontSize: "4.6rem", fontWeight: 600, color: palette.accent }}
            >
              O
            </span>
            ussama Bendou is a software engineer working from {profile.location}. He
            designs and builds performant, opinionated software — from full-stack
            platforms to interfaces engineered for speed and clarity. He keeps a small
            number of public projects, and writes occasionally on the parts of the
            craft that compound over time.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-y-4">
            {values.map((v) => (
              <li key={v.k} className="border-t pt-3" style={{ borderColor: palette.hairline }}>
                <div
                  className="font-[family-name:var(--p-display)] italic"
                  style={{ fontSize: "1rem", fontWeight: 500 }}
                >
                  {v.k.toLowerCase()}.
                </div>
                <p className="mt-1 text-[14px] leading-[1.6]" style={{ color: palette.inkSoft }}>
                  {v.v}
                </p>
              </li>
            ))}
          </ul>
        </LeftColumn>
        <RightColumn>
          <pre
            className="whitespace-pre-wrap font-[family-name:var(--p-mono)] text-[12.5px] leading-[1.7]"
            style={{ color: palette.ink }}
          >{`OUSS(1)               Engineer's Manual              OUSS(1)

NAME
       oussama — software engineer

LOCATION
       ${profile.location}

PRINCIPLES
${values.map((v) => `       * ${v.k}\n         ${v.v}`).join("\n\n")}

BUGS
       Occasionally over-considered. Reach via email.`}</pre>
        </RightColumn>
      </Row>

      {/* ACADEMIC */}
      <SectionHead label="§6 — Studies" mono="ls -la education/" />
      <Row palette={palette}>
        <LeftColumn>
          <ol className="space-y-6">
            {education.map((e) => (
              <li key={e.institution}>
                <div
                  className="font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: palette.inkSoft }}
                >
                  {e.start}–{e.end}
                </div>
                <div
                  className="mt-1 font-[family-name:var(--p-display)] tracking-[-0.005em]"
                  style={{ fontSize: "1.25rem", fontWeight: 500 }}
                >
                  {e.institution.toLowerCase()}
                </div>
                <div
                  className="italic font-[family-name:var(--p-display)] text-[14.5px]"
                  style={{ color: palette.inkSoft }}
                >
                  {e.degree.toLowerCase()}
                </div>
                <p className="mt-2 text-[14.5px] leading-[1.6]">{e.detail}</p>
              </li>
            ))}
          </ol>
        </LeftColumn>
        <RightColumn>
          <pre
            className="whitespace-pre-wrap font-[family-name:var(--p-mono)] text-[12.5px] leading-[1.7]"
            style={{ color: palette.ink }}
          >{`drwxr-xr-x  ${education.length}  ouss  ouss  ${education.length * 256}  studies/

${education
  .map(
    (e) =>
      `-rw-r--r--   1  ouss  ouss   ${e.start}-${e.end}   ${e.institution.toLowerCase().replace(/\s+/g, "-")}.md`
  )
  .join("\n")}`}</pre>
        </RightColumn>
      </Row>

      {/* CONTACT */}
      <SectionHead label="§7 — Reach Out" mono="ssh ouss@bendou.dev" />
      <Row palette={palette} last>
        <LeftColumn>
          <p
            className="text-[16px] leading-[1.65]"
            style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
          >
            Correspondence to{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-[family-name:var(--p-mono)] relative inline-block"
              style={{ color: palette.accent }}
            >
              {profile.email}
            </a>
            . Replies usually within a working day. For senior &amp; staff
            engagements: brief, specific notes are preferred.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 text-[13px]"
            style={{ background: palette.ink, color: palette.paper, minHeight: 44 }}
          >
            Write to the engineer →
          </a>
        </LeftColumn>
        <RightColumn>
          <pre
            className="whitespace-pre-wrap font-[family-name:var(--p-mono)] text-[12.5px] leading-[1.7]"
            style={{ color: palette.ink }}
          >{`$ ssh ouss@bendou.dev

Welcome to ouss.
Last login was a working day ago.

email     ${profile.email}
${profile.social
  .map((s) => `${s.label.toLowerCase().padEnd(9)} ${s.handle}`)
  .join("\n")}

$ logout`}</pre>
        </RightColumn>
      </Row>

      {/* FOOTER */}
      <div className="border-t-[2px] mt-0" style={{ borderColor: palette.ink }} />
      <footer
        className="mx-auto max-w-7xl px-6 lg:px-12 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: palette.inkSoft }}
      >
        <div>set in fraunces · ibm plex mono · inter</div>
        <div className="md:text-right">
          oussama bendou · 2026 · {profile.location.split(" · ")[0]}
        </div>
      </footer>
    </main>
  );
}

function Row({
  children,
  palette: _palette,
  last,
}: {
  children: React.ReactNode;
  palette: typeof palette;
  index?: number;
  last?: boolean;
}) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 ${
        last ? "" : "border-b"
      }`}
      style={{ borderColor: palette.hairline }}
    >
      {children}
    </section>
  );
}

function LeftColumn({ children }: { children: React.ReactNode }) {
  return <div className="md:pr-6">{children}</div>;
}

function RightColumn({ children }: { children: React.ReactNode }) {
  return <div className="md:pl-6 mt-10 md:mt-0">{children}</div>;
}

function SectionHead({
  label,
  mono,
}: {
  label: string;
  mono: string;
}) {
  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 pt-20 pb-2"
    >
      <h2
        className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
        style={{ color: palette.ink, fontWeight: 500 }}
      >
        {label}
      </h2>
      <h2
        className="md:pl-6 mt-2 md:mt-0 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
        style={{ color: palette.ink, fontWeight: 500 }}
      >
        $ {mono}
      </h2>
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
  const [hover, setHover] = useState(false);
  return (
    <Row palette={palette} index={index}>
      <div
        className="md:pr-6"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease, delay: (index % 3) * 0.06 }}
        >
          <div
            className="font-[family-name:var(--p-mono)] text-[11px] uppercase tracking-[0.22em]"
            style={{ color: palette.inkSoft }}
          >
            no. {String(index + 1).padStart(2, "0")} · {project.year}
          </div>
          <h3
            className="mt-3 font-[family-name:var(--p-display)] tracking-[-0.012em]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 500 }}
          >
            <span className="relative inline-block">
              {project.title.toLowerCase()}
              <motion.span
                aria-hidden
                className="absolute -bottom-0.5 left-0 right-0 h-px origin-right"
                style={{ background: palette.accent }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hover ? 1 : 0, transformOrigin: hover ? "left" : "right" }}
                transition={{ duration: 0.2, ease }}
              />
            </span>
          </h3>
          <p
            className="mt-4 max-w-prose text-[15.5px] leading-[1.65]"
            style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
          >
            <em className="italic font-[family-name:var(--p-display)]" style={{ color: palette.inkSoft }}>
              Description.{" "}
            </em>
            {project.blurb}
          </p>
          {project.metric ? (
            <p
              className="mt-3 italic font-[family-name:var(--p-display)] text-[14px]"
              style={{ color: palette.inkSoft }}
            >
              {project.metric.label}:{" "}
              <span style={{ color: palette.accent, fontWeight: 500 }} className="not-italic">
                {project.metric.value}
              </span>
              .
            </p>
          ) : null}
        </motion.article>
      </div>
      <div
        className="md:pl-6 mt-8 md:mt-0"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.pre
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="whitespace-pre-wrap font-[family-name:var(--p-mono)] text-[12.5px] leading-[1.7]"
          style={{ color: palette.ink }}
        >{`$ ${project.title.toLowerCase().replace(/\s+/g, "-")} --info

NAME
       ${project.title.toLowerCase()}(${index + 1}) — ${shortDesc(project.blurb)}

YEAR     ${project.year}
TAGS     ${project.tags.map((t) => t.toLowerCase()).join(", ")}
${project.metric ? `${project.metric.label.toUpperCase().padEnd(9)}${project.metric.value}` : ""}
REPO     github.com/oussthecodeguy/${project.title.toLowerCase().replace(/\s+/g, "-")}`}</motion.pre>
      </div>
    </Row>
  );
}

function PromptLine({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.2 }}
      className="block"
    >
      <span style={{ color: palette.accent, fontWeight: 500 }}>{">"} </span>
      {children}
    </motion.span>
  );
}

function OutLine({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.2 }}
      className="block"
    >
      {children}
    </motion.span>
  );
}

function BlankLine({ delay }: { delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.1 }}
      className="block"
    >
      &nbsp;
    </motion.span>
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

function shortHash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h).toString(16).slice(0, 7).padEnd(7, "0");
}

function shortDesc(s: string) {
  return s.split(".")[0].toLowerCase();
}

function wrap(text: string, width: number): string[] {
  const words = text.split(/\s+/);
  const out: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > width) {
      if (cur) out.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) out.push(cur);
  return out;
}
