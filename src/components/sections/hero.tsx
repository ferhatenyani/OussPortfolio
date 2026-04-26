"use client";

import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { profile } from "@/lib/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[640px] grid-lines opacity-[0.55]" />
      <div aria-hidden className="noise" />

      {/* Above-the-fold pane */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)] flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-[color:var(--accent)] pulse-dot" />
                </span>
                Available · Q2 2026
              </span>
              <span className="h-px w-6 bg-[color:var(--line-strong)]" />
              <span>{profile.location}</span>
            </motion.div>

            <h1 className="mt-8 text-[clamp(2.6rem,7.6vw,6.4rem)] font-medium tracking-[-0.035em] leading-[0.96]">
              {splitInWords("Building considered software with the patience of a craftsman.")}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-[color:var(--fg-muted)] text-base md:text-[17px] leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-[13.5px] font-medium text-[color:var(--bg)] hover:bg-[color:var(--accent-soft)] transition-colors"
              >
                View selected work
                <span className="grid place-items-center h-5 w-5 rounded-full bg-[color:var(--bg)] text-[color:var(--accent)] group-hover:translate-x-0.5 transition-transform">
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-soft)] px-5 py-2.5 text-[13.5px] font-medium text-[color:var(--fg)] hover:border-[color:var(--fg-muted)] transition-colors"
              >
                Reach out
              </a>
              <span className="hidden sm:inline-flex items-center gap-2 ml-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
                <kbd className="rounded border border-[color:var(--line-strong)] bg-[color:var(--bg-soft)] px-1.5 py-0.5 text-[10px]">⌘</kbd>
                <kbd className="rounded border border-[color:var(--line-strong)] bg-[color:var(--bg-soft)] px-1.5 py-0.5 text-[10px]">K</kbd>
                to navigate
              </span>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-4 md:pl-6 md:border-l md:border-[color:var(--line)] flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-7"
            >
              <Stat label="Years building" value="07" suffix="+" />
              <Stat label="Production systems" value="20" suffix="+" />
              <Stat label="Open-source stars" value="4.1" suffix="k" />
              <div className="pt-3 border-t border-[color:var(--line)]">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)] mb-3">
                  Currently
                </div>
                <p className="text-sm text-[color:var(--fg)] leading-relaxed">
                  Senior Software Engineer at <span className="text-[color:var(--accent)]">Lumen Systems</span>.
                  Open to senior / staff roles & high-trust contract work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-6">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)]">
            Scroll · Selected works render below
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="hidden sm:flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)]"
          >
            <span>↓</span>
            <span>Continue</span>
          </motion.div>
        </div>
      </div>

      {/* Container scroll reveal — keeps the 21st.dev component but feeds it a branded preview */}
      <div className="relative -mt-10 md:-mt-2">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center text-center">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)] mb-4">
                ⌘ — Live preview
              </div>
              <h2 className="text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium tracking-[-0.02em] leading-[1.05] text-[color:var(--fg)]">
                Engineering work that earns its weight.
              </h2>
              <p className="mt-3 max-w-xl text-[color:var(--fg-muted)] text-sm md:text-[15px]">
                A glimpse of the dashboards, tools, and systems I&apos;ve shipped — designed
                to be inspected, not just admired.
              </p>
            </div>
          }
        >
          <PreviewPane />
        </ContainerScroll>
      </div>
    </section>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
        {label}
      </span>
      <span className="text-2xl md:text-3xl font-medium tracking-[-0.02em] tabular-nums">
        {value}
        <span className="text-[color:var(--accent)]">{suffix}</span>
      </span>
    </div>
  );
}

function splitInWords(text: string) {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 0.15 + i * 0.045,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.22em]"
        >
          {w === "craftsman." ? (
            <span className="text-[color:var(--accent)] italic font-serif tracking-tight">{w}</span>
          ) : (
            w
          )}
        </motion.span>
      ))}
    </span>
  );
}

function PreviewPane() {
  return (
    <div className="relative h-full w-full bg-[#0c0c0e] text-[color:var(--fg)] overflow-hidden flex flex-col">
      {/* Faux window chrome */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-[#1d1d22] bg-[#0a0a0c]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a40]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a40]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a40]" />
        </div>
        <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#5a5a5c]">
          helix · /dashboard/overview
        </div>
        <div className="font-mono text-[10.5px] text-[#5a5a5c] hidden sm:block">v1.4.0</div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-3 p-3 md:p-5 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex col-span-2 flex-col gap-1.5 border-r border-[#19191d] pr-3">
          {["Overview", "Streams", "Schemas", "Latency", "Errors", "Settings"].map((label, i) => (
            <div
              key={label}
              className={`px-2 py-1.5 rounded text-[11px] font-medium ${
                i === 0
                  ? "bg-[#16161a] text-[color:var(--accent)]"
                  : "text-[#7a7a7a]"
              }`}
            >
              {label}
            </div>
          ))}
          <div className="mt-auto pt-3 border-t border-[#19191d]">
            <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#4a4a4d]">
              Region
            </div>
            <div className="text-[11px] text-[#a0a09a] mt-1">eu-central-1</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-10 flex flex-col gap-3">
          {/* Top KPIs */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { k: "Events / s", v: "12,418", d: "+4.2%", up: true },
              { k: "p95 latency", v: "118 ms", d: "−8%", up: true },
              { k: "Error rate", v: "0.014%", d: "−12%", up: true },
              { k: "Active streams", v: "402", d: "+6", up: true },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-md border border-[#1c1c20] bg-[#101013] p-3"
              >
                <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#5a5a5d]">
                  {s.k}
                </div>
                <div className="mt-2 text-base md:text-lg font-medium tabular-nums">
                  {s.v}
                </div>
                <div
                  className={`mt-1 text-[10px] font-mono ${
                    s.up ? "text-[color:var(--accent)]" : "text-[#ff7a45]"
                  }`}
                >
                  {s.d}
                </div>
              </div>
            ))}
          </div>

          {/* Chart row */}
          <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">
            <div className="col-span-2 rounded-md border border-[#1c1c20] bg-[#0e0e11] p-4 flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#5a5a5d]">
                    Throughput · last 24h
                  </div>
                  <div className="text-sm text-[#dcdcd8] mt-1">948.2k events</div>
                </div>
                <div className="flex gap-1.5">
                  {["1H", "6H", "24H", "7D"].map((p, i) => (
                    <span
                      key={p}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                        i === 2
                          ? "bg-[color:var(--accent)] text-[color:var(--bg)]"
                          : "bg-[#16161a] text-[#7a7a7d]"
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex-1 min-h-0">
                <FauxChart />
              </div>
            </div>

            <div className="col-span-1 rounded-md border border-[#1c1c20] bg-[#0e0e11] p-4 flex flex-col">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#5a5a5d]">
                Top streams
              </div>
              <div className="mt-3 flex-1 flex flex-col gap-2.5 overflow-hidden">
                {[
                  { n: "checkout.completed", v: 412 },
                  { n: "user.identified", v: 318 },
                  { n: "page.viewed", v: 264 },
                  { n: "feed.scrolled", v: 192 },
                  { n: "asset.uploaded", v: 87 },
                ].map((row) => (
                  <div key={row.n}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10.5px] text-[#bdbdb8]">{row.n}</span>
                      <span className="font-mono text-[10.5px] text-[#bdbdb8] tabular-nums">{row.v}</span>
                    </div>
                    <div className="mt-1 h-[3px] rounded-full bg-[#15151a] overflow-hidden">
                      <div
                        className="h-full bg-[color:var(--accent)]"
                        style={{ width: `${(row.v / 412) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer log */}
          <div className="rounded-md border border-[#1c1c20] bg-[#0e0e11] p-3 hidden md:block">
            <div className="font-mono text-[10.5px] text-[#7a7a7d] flex items-center gap-3 overflow-hidden whitespace-nowrap">
              <span className="text-[color:var(--accent)]">●</span>
              <span>02:14:08</span>
              <span className="text-[#4a4a4d]">/</span>
              <span className="text-[#dcdcd8]">stream.ack</span>
              <span className="text-[#4a4a4d]">checkout.completed → ingested 1 event (12ms)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FauxChart() {
  // SVG line chart, gentle hand-tuned shape
  const points = [
    [0, 56],
    [40, 48],
    [80, 62],
    [120, 38],
    [160, 50],
    [200, 30],
    [240, 42],
    [280, 22],
    [320, 32],
    [360, 18],
    [400, 26],
  ];
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
    .join(" ");
  const area = `${path} L 400 80 L 0 80 Z`;
  return (
    <svg viewBox="0 0 400 80" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d6ff3d" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d6ff3d" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#area)" />
      <path d={path} stroke="#d6ff3d" strokeWidth="1.4" fill="none" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === points.length - 2 ? 2.5 : 0} fill="#d6ff3d" />
      ))}
    </svg>
  );
}
