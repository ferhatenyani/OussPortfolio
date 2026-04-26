"use client";

import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { motion } from "framer-motion";
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
  panel: "#F7F4EE",
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const tickerEntries: { ticker: string; value: string; delta?: { dir: "up" | "down" | "flat"; value: string } }[] = [
  { ticker: "HELIX", value: "4,128★", delta: { dir: "up", value: "+6" } },
  { ticker: "ATLAS", value: "320 DAO", delta: { dir: "up", value: "+12%" } },
  { ticker: "PULSE", value: "1.2k TEAMS", delta: { dir: "flat", value: "—" } },
  { ticker: "FOLD", value: "18,002 POSTS", delta: { dir: "up", value: "+340" } },
  { ticker: "GLYPH", value: "82k DL/WK", delta: { dir: "up", value: "+4.1%" } },
  { ticker: "P95", value: "118 MS", delta: { dir: "down", value: "−8%" } },
  { ticker: "EVENTS", value: "12.4k/S", delta: { dir: "up", value: "+4.2%" } },
  { ticker: "ERROR", value: "0.014%", delta: { dir: "down", value: "−12%" } },
  { ticker: "STREAMS", value: "402", delta: { dir: "up", value: "+6" } },
  { ticker: "OUSS:NYSE", value: "AVAIL Q2", delta: { dir: "up", value: "▲" } },
];

export default function TickerPreview() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-screen`}
      style={{
        background: palette.paper,
        color: palette.ink,
        fontFamily: "var(--p-body), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* TICKER BAR */}
      <div
        className="sticky top-[40px] z-30 border-y overflow-hidden focus-within:[&_.t-track]:[animation-play-state:paused] hover:[&_.t-track]:[animation-play-state:paused]"
        style={{
          borderColor: palette.ink,
          background: palette.ink,
          color: palette.paper,
          height: 40,
        }}
        tabIndex={0}
        aria-label="Live ticker. Hover or focus to pause."
      >
        <div
          className="t-track flex items-center whitespace-nowrap motion-reduce:animate-none"
          style={{
            animation: "ticker-scroll 60s linear infinite",
          }}
        >
          <TickerLine />
          <TickerLine />
        </div>
        <style>{`
          @keyframes ticker-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .t-track { animation: none !important; transform: translateX(0) !important; }
          }
        `}</style>
      </div>

      <div className="border-t" style={{ borderColor: palette.ink }} />

      {/* HERO LETTER */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10 pt-16 md:pt-20 pb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.32em]"
            style={{ color: palette.inkSoft }}
          >
            Q2 2026 · Letter to Readers
          </motion.div>
          <h1
            className="mt-8 font-[family-name:var(--p-display)] tracking-[-0.018em] leading-[0.96]"
            style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.8rem)", fontWeight: 500 }}
          >
            <ClipLines
              lines={[
                <>To the readers of this</>,
                <>
                  letter, with{" "}
                  <em
                    className="italic"
                    style={{ color: palette.accent, fontWeight: 500 }}
                  >
                    candour.
                  </em>
                </>,
              ]}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="mt-6 italic font-[family-name:var(--p-display)] tracking-[-0.005em]"
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              fontWeight: 400,
              color: palette.inkSoft,
            }}
          >
            Annual report on the engineering practice of Oussama Bendou,
            <br />
            for the second quarter of the present year.
          </motion.p>
        </div>

        <div
          className="my-12 mx-auto h-px max-w-md"
          style={{ background: palette.ink }}
        />

        {/* TWO-COLUMN BODY WITH DROP CAP */}
        <div className="columns-1 md:columns-2 gap-10">
          <p
            className="text-[16px] leading-[1.65] mb-4 break-inside-avoid"
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
              D
            </span>
            ear reader, the past several quarters have been characterised by
            patient work — fewer products shipped, more attention paid to the
            primitives those products rest upon. {profile.tagline}
          </p>
          <p
            className="text-[16px] leading-[1.65] mb-4 break-inside-avoid"
            style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
          >
            The quarterly performance summaries that follow are drawn from work
            shipped in production. Where useful, the metric is given alongside
            its delta against the prior period. Where a metric would mislead,
            none is given.
          </p>
          <p
            className="text-[16px] leading-[1.65] mb-4 break-inside-avoid italic font-[family-name:var(--p-display)]"
            style={{
              textAlign: "justify",
              hyphens: "auto",
              color: palette.inkSoft,
            } as React.CSSProperties}
          >
            With my regards,
            <br />
            <span className="not-italic font-[family-name:var(--p-display)]" style={{ fontWeight: 600, color: palette.ink }}>
              O. Bendou
            </span>
            <br />
            Casablanca, the present quarter.
          </p>
        </div>

        {/* SIGNATURE MONOGRAM */}
        <div className="mt-10 flex items-center justify-end gap-3">
          <span
            className="font-[family-name:var(--p-display)] italic text-[12px]"
            style={{ color: palette.inkSoft }}
          >
            seal —
          </span>
          <Monogram />
        </div>
      </section>

      <SectionDivider label="I — Selected Holdings" />

      {/* PROJECTS — quarterly performance cards */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-16 grid grid-cols-1 gap-6">
        {projects.map((p, i) => (
          <PerformanceCard key={p.title} project={p} index={i} />
        ))}
      </section>

      <SectionDivider label="II — Prior Engagements" />

      {/* EXPERIENCE — financial-summary table */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-16">
        <div
          className="border"
          style={{ borderColor: palette.ink, background: palette.panel }}
        >
          <div
            className="grid grid-cols-12 gap-x-4 px-5 py-3 border-b font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
            style={{ borderColor: palette.ink, color: palette.inkSoft }}
          >
            <div className="col-span-2">period</div>
            <div className="col-span-3">issuer</div>
            <div className="col-span-3">role</div>
            <div className="col-span-2">location</div>
            <div className="col-span-2 text-right">notes</div>
          </div>
          {experience.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              className={`grid grid-cols-12 gap-x-4 px-5 py-5 ${
                i < experience.length - 1 ? "border-b" : ""
              }`}
              style={{ borderColor: palette.hairline }}
            >
              <div
                className="col-span-2 font-[family-name:var(--p-mono)] text-[12.5px] tabular-nums"
                style={{ color: palette.ink }}
              >
                {role.start}–{role.end}
              </div>
              <div
                className="col-span-3 font-[family-name:var(--p-display)]"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
              >
                {role.company.toLowerCase()}
              </div>
              <div className="col-span-3 italic font-[family-name:var(--p-display)] text-[14.5px]" style={{ color: palette.inkSoft }}>
                {role.role.toLowerCase()}
              </div>
              <div
                className="col-span-2 font-[family-name:var(--p-mono)] text-[12px] uppercase tracking-[0.18em]"
                style={{ color: palette.inkSoft }}
              >
                {role.location.toLowerCase()}
              </div>
              <div
                className="col-span-2 text-right font-[family-name:var(--p-mono)] text-[12px]"
                style={{ color: palette.accent }}
              >
                ▲ shipped
              </div>
              <div className="col-span-12 mt-3 text-[14.5px] leading-[1.6]">
                <em className="italic font-[family-name:var(--p-display)]" style={{ color: palette.inkSoft }}>
                  Notes.{" "}
                </em>
                {role.summary}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider label="III — Investor Feedback" />

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.65, ease, delay: i * 0.05 }}
            className="border p-6"
            style={{ borderColor: palette.hairline, background: palette.paper }}
          >
            <div
              className="font-[family-name:var(--p-mono)] text-[10px] uppercase tracking-[0.22em]"
              style={{ color: palette.inkSoft }}
            >
              statement no. {String(i + 1).padStart(2, "0")}
            </div>
            <blockquote
              className="mt-3 font-[family-name:var(--p-display)] tracking-[-0.005em]"
              style={{ fontSize: "1.05rem", lineHeight: 1.5, fontWeight: 400 }}
            >
              <em className="italic" style={{ color: palette.accent, fontWeight: 500 }}>“</em>
              {t.quote}
              <em className="italic" style={{ color: palette.accent, fontWeight: 500 }}>”</em>
            </blockquote>
            <figcaption
              className="mt-4 pt-3 border-t font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
              style={{ borderColor: palette.hairline, color: palette.inkSoft }}
            >
              {t.name} · {t.role} · {t.org}
            </figcaption>
          </motion.figure>
        ))}
      </section>

      <SectionDivider label="IV — On the Author" />

      {/* ABOUT — continuation of letter */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10 pb-16">
        <p
          className="text-[16px] leading-[1.65]"
          style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
        >
          The author writes from {profile.location}. The practice is small by
          design: a single engineer of senior calibre, available to founders
          and senior teams on the parts of a product where considered work
          compounds. The reading rotation includes distributed systems, type
          theory, interaction design, and the craft of writing.
        </p>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {values.map((v, i) => (
            <motion.li
              key={v.k}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, ease, delay: i * 0.05 }}
              className="border-t pt-3"
              style={{ borderColor: palette.hairline }}
            >
              <div
                className="font-[family-name:var(--p-display)] italic"
                style={{ fontSize: "1.05rem", fontWeight: 500 }}
              >
                {v.k.toLowerCase()}.
              </div>
              <p className="mt-1 text-[14.5px] leading-[1.6]" style={{ color: palette.inkSoft }}>
                {v.v}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>

      <SectionDivider label="V — Formative Investments" />

      {/* ACADEMIC */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10 pb-16">
        <ol className="space-y-8">
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
                className="col-span-3 font-[family-name:var(--p-mono)] text-[11.5px] uppercase tracking-[0.18em] tabular-nums"
                style={{ color: palette.inkSoft }}
              >
                {e.start}–{e.end}
              </div>
              <div className="col-span-9">
                <div
                  className="font-[family-name:var(--p-display)] tracking-[-0.005em]"
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
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      <SectionDivider label="VI — Correspondence" />

      {/* CONTACT — closing signature card */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10 pb-24">
        <p
          className="text-[16px] leading-[1.65] max-w-prose"
          style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
        >
          Correspondence is welcomed. Brief, specific notes are preferred.
          Replies are usually returned within a working day.
        </p>
        <div className="mt-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div
              className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
              style={{ color: palette.inkSoft }}
            >
              direct address
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-block font-[family-name:var(--p-display)] tracking-[-0.012em]"
              style={{
                fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)",
                fontWeight: 500,
                color: palette.ink,
                borderBottom: `2px solid ${palette.accent}`,
              }}
            >
              {profile.email}
            </a>
            <ul
              className="mt-6 grid grid-cols-1 gap-y-1 font-[family-name:var(--p-mono)] text-[12px]"
              style={{ color: palette.ink }}
            >
              {profile.social.map((s) => (
                <li key={s.label}>
                  <span style={{ color: palette.inkSoft }}>{s.label.toLowerCase().padEnd(10)}</span>
                  {s.handle}
                </li>
              ))}
            </ul>
          </div>
          <Monogram large />
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="mt-12 inline-flex items-center gap-2 px-5 py-3 text-[13px]"
          style={{ background: palette.ink, color: palette.paper, minHeight: 44 }}
        >
          Send a letter →
        </a>
      </section>

      {/* FOOTER */}
      <div className="border-t" style={{ borderColor: palette.ink }} />
      <footer
        className="mx-auto max-w-5xl px-6 lg:px-10 py-6 grid grid-cols-1 md:grid-cols-3 gap-x-6 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: palette.inkSoft }}
      >
        <div>OUSS · annual report · MMXXVI</div>
        <div className="md:text-center">set in fraunces · ibm plex mono · inter</div>
        <div className="md:text-right">no shareholders · no fees · just letters.</div>
      </footer>
    </main>
  );
}

function TickerLine() {
  return (
    <div className="flex items-center font-[family-name:var(--p-mono)] text-[12.5px] uppercase tracking-[0.18em] tabular-nums">
      {tickerEntries.map((e, i) => (
        <span key={i} className="flex items-center gap-2 px-6 shrink-0">
          <span style={{ color: palette.paper, fontWeight: 500 }}>{e.ticker}</span>
          <span style={{ color: "#D9D6CE" }}>{e.value}</span>
          {e.delta ? (
            <span
              style={{
                color:
                  e.delta.dir === "up"
                    ? palette.accent
                    : e.delta.dir === "down"
                    ? "#7DB3FF"
                    : "#9A9A98",
              }}
            >
              {e.delta.dir === "up" ? "▲" : e.delta.dir === "down" ? "▼" : "·"}{" "}
              {e.delta.value}
            </span>
          ) : null}
          <span style={{ color: "#444" }}>·</span>
        </span>
      ))}
    </div>
  );
}

function PerformanceCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.65, ease, delay: (index % 3) * 0.05 }}
      className="grid grid-cols-12 gap-x-6 gap-y-4 border p-6"
      style={{
        borderColor: palette.hairline,
        background: palette.paper,
      }}
    >
      <div className="col-span-12 md:col-span-7">
        <div
          className="flex items-baseline gap-3 font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: palette.inkSoft }}
        >
          <span>holding {String(index + 1).padStart(2, "0")}</span>
          <span style={{ color: palette.hairline }}>·</span>
          <span>{project.year}</span>
          <span style={{ color: palette.hairline }}>·</span>
          <span>{project.tags.map((t) => t.toLowerCase()).join(", ")}</span>
        </div>
        <h3
          className="mt-3 font-[family-name:var(--p-display)] tracking-[-0.012em]"
          style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", fontWeight: 500 }}
        >
          {project.title.toLowerCase()}
        </h3>
        <p
          className="mt-3 max-w-prose text-[15px] leading-[1.65]"
          style={{ textAlign: "justify", hyphens: "auto" } as React.CSSProperties}
        >
          <em className="italic font-[family-name:var(--p-display)]" style={{ color: palette.inkSoft }}>
            Position summary.{" "}
          </em>
          {project.blurb}
        </p>
      </div>
      <div
        className="col-span-12 md:col-span-5 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6"
        style={{ borderColor: palette.hairline }}
      >
        <div
          className="font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
          style={{ color: palette.inkSoft }}
        >
          Spec sheet
        </div>
        <dl
          className="mt-3 grid grid-cols-12 gap-y-2 font-[family-name:var(--p-mono)] text-[12.5px]"
          style={{ color: palette.ink }}
        >
          <SpecRow k="ticker" v={project.title.toUpperCase().slice(0, 6)} />
          <SpecRow k="year" v={project.year} />
          {project.metric ? (
            <SpecRow
              k={project.metric.label.toLowerCase()}
              v={project.metric.value}
              accent
            />
          ) : null}
          <SpecRow k="status" v="shipped · maintained" />
          <SpecRow k="repo" v={`gh/oussthecodeguy/${project.title.toLowerCase().replace(/\s+/g, "-")}`} />
        </dl>
        <div
          className="mt-4 inline-flex items-baseline gap-2 px-2 py-1 font-[family-name:var(--p-mono)] text-[11px]"
          style={{ background: palette.ink, color: palette.accent }}
        >
          <span>▲</span>
          <span>holding</span>
        </div>
      </div>
    </motion.article>
  );
}

function SpecRow({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <>
      <dt className="col-span-4" style={{ color: palette.inkSoft }}>
        {k}
      </dt>
      <dd
        className="col-span-8 truncate"
        style={{ color: accent ? palette.accent : palette.ink }}
      >
        {v}
      </dd>
    </>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div
      className="mx-auto max-w-5xl px-6 lg:px-10 py-3 border-t border-b flex items-center justify-between font-[family-name:var(--p-mono)] text-[10.5px] uppercase tracking-[0.22em]"
      style={{ borderColor: palette.ink, color: palette.ink }}
    >
      <span>{label}</span>
      <span style={{ color: palette.inkSoft }}>Q2 2026</span>
    </div>
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
              delay: 0.2 + i * 0.12,
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

function Monogram({ large }: { large?: boolean }) {
  const size = large ? 96 : 56;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ shapeRendering: "geometricPrecision" }}
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke={palette.accent}
        strokeWidth="1.4"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontSize={large ? 38 : 24}
        fontWeight={500}
        fontStyle="italic"
        fill={palette.ink}
      >
        OB
      </text>
      <text
        x="50"
        y="78"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="6"
        fill={palette.inkSoft}
        letterSpacing="2"
      >
        MMXXVI
      </text>
    </svg>
  );
}
