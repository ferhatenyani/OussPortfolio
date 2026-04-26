"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal, SectionHeader, Pill } from "@/components/primitives";
import { projects, type Project } from "@/lib/portfolio";

export function Projects() {
  const featured = projects.filter((p) => p.feature);
  const rest = projects.filter((p) => !p.feature);

  return (
    <section id="projects" className="relative py-28 md:py-40 bg-[color:var(--bg-elev)] border-y border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="02"
          label="Selected Projects"
          title="Work that earns its place in production."
          kicker="A small set of products and tools — open-source, internal, and shipped at scale. Each one is a study in what to build, and what to leave out."
        />

        <div className="grid grid-cols-12 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="col-span-12 md:col-span-6">
              <FeaturedCard project={p} />
            </Reveal>
          ))}
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="col-span-12 md:col-span-6 lg:col-span-3">
              <CompactCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-10 border-t border-[color:var(--line)]">
            <p className="max-w-md text-[color:var(--fg-muted)] text-sm leading-relaxed">
              These represent the work I&apos;m most willing to put my name beside.
              The complete archive — including consulting and exited projects — is available on request.
            </p>
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--fg)] hover:text-[color:var(--accent)] transition-colors"
            >
              <span className="h-px w-6 bg-current" /> Request the full archive
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-60, 60], [4, -4]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-60, 60], [-4, 4]), { stiffness: 200, damping: 20 });
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      ref={cardRef}
      href={project.href ?? "#"}
      onMouseMove={(e) => {
        const r = cardRef.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="group relative block rounded-2xl border border-[color:var(--line-strong)] bg-[color:var(--bg)] overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--bg-soft)]">
        <ProjectVisual title={project.title} hover={hover} />
        <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between">
          <Pill>{project.tags[0]}</Pill>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
            {project.year}
          </span>
        </div>
      </div>
      <div className="relative p-6 md:p-7">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-medium tracking-[-0.02em]">{project.title}</h3>
            <p className="mt-2 max-w-md text-[color:var(--fg-muted)] text-[15px] leading-relaxed">
              {project.blurb}
            </p>
          </div>
          <motion.span
            animate={{ x: hover ? 4 : 0, y: hover ? -4 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid place-items-center h-9 w-9 shrink-0 rounded-full border border-[color:var(--line-strong)] text-[color:var(--fg-muted)] group-hover:bg-[color:var(--accent)] group-hover:text-[color:var(--bg)] group-hover:border-[color:var(--accent)] transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </motion.span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 pt-5 border-t border-[color:var(--line)]">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(1).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          {project.metric ? (
            <div className="text-right">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
                {project.metric.label}
              </div>
              <div className="mt-1 font-mono text-sm text-[color:var(--accent)] tabular-nums">
                {project.metric.value}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </motion.a>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href ?? "#"}
      className="group relative flex flex-col h-full rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-6 hover:border-[color:var(--line-strong)] transition-colors"
    >
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
          {project.year}
        </span>
        <span className="grid place-items-center h-7 w-7 rounded-full border border-[color:var(--line)] text-[color:var(--fg-muted)] group-hover:bg-[color:var(--accent)] group-hover:text-[color:var(--bg)] group-hover:border-[color:var(--accent)] transition-colors">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <h3 className="text-xl font-medium tracking-[-0.01em]">{project.title}</h3>
      <p className="mt-2 text-[color:var(--fg-muted)] text-[14.5px] leading-relaxed flex-1">
        {project.blurb}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      {project.metric ? (
        <div className="mt-4 pt-4 border-t border-[color:var(--line)] flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)]">
            {project.metric.label}
          </span>
          <span className="font-mono text-[12px] text-[color:var(--fg)] tabular-nums">
            {project.metric.value}
          </span>
        </div>
      ) : null}
    </a>
  );
}

function ProjectVisual({ title, hover }: { title: string; hover: boolean }) {
  // Title-aware abstract visualizations (no external assets)
  if (title === "Helix") return <HelixVisual hover={hover} />;
  if (title === "Atlas Editor") return <AtlasVisual hover={hover} />;
  return <DefaultVisual hover={hover} />;
}

function HelixVisual({ hover }: { hover: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 30%, rgba(214,255,61,0.18), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(255,122,69,0.10), transparent 55%)",
        }}
      />
      <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="h-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#d6ff3d" stopOpacity="0" />
            <stop offset="50%" stopColor="#d6ff3d" stopOpacity="1" />
            <stop offset="100%" stopColor="#d6ff3d" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 40 + i * 22;
          const phase = i * 0.6;
          return (
            <motion.path
              key={i}
              d={`M 0 ${y} C 150 ${y - 18 + phase * 2} 300 ${y + 24 - phase * 2} 600 ${y}`}
              stroke="url(#h-line)"
              strokeWidth={hover ? 1.1 : 0.8}
              fill="none"
              opacity={0.35 + (i % 3) * 0.18}
              animate={{ x: hover ? -12 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}
      </svg>
      <div className="absolute bottom-4 left-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
        helix · rsc telemetry
      </div>
    </div>
  );
}

function AtlasVisual({ hover }: { hover: boolean }) {
  return (
    <div className="relative h-full w-full bg-[#0e0e11] overflow-hidden">
      <div className="absolute inset-0 p-6 grid grid-cols-12 gap-2">
        {Array.from({ length: 4 }).map((_, row) => (
          <motion.div
            key={row}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: hover ? 1 : 0.6 }}
            transition={{ duration: 0.4, delay: row * 0.05 }}
            className="col-span-12 flex gap-2"
          >
            <div className="h-2 w-12 rounded-sm bg-[color:var(--accent)]/70" />
            <div className="h-2 flex-1 rounded-sm bg-[#22222a]" />
            <div className="h-2 w-20 rounded-sm bg-[#22222a]" />
          </motion.div>
        ))}
        <div className="col-span-12 mt-2">
          <div className="h-3 w-3/5 rounded-sm bg-[#22222a]" />
        </div>
        <div className="col-span-12">
          <div className="h-2 w-2/3 rounded-sm bg-[#1a1a20]" />
          <div className="h-2 w-1/2 rounded-sm bg-[#1a1a20] mt-1.5" />
          <div className="h-2 w-3/5 rounded-sm bg-[#1a1a20] mt-1.5" />
        </div>
        <motion.div
          animate={{ y: hover ? -3 : 0 }}
          transition={{ duration: 0.4 }}
          className="col-span-12 mt-3 rounded-md border border-[#2a2a30] bg-[#15151a] p-3"
        >
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            <div className="font-mono text-[10px] text-[#a0a09a] uppercase tracking-[0.2em]">
              Block · Code
            </div>
          </div>
          <div className="mt-2 font-mono text-[11px] text-[#cfcfca] leading-relaxed">
            <span className="text-[#7a7a7a]">const</span>{" "}
            <span className="text-[color:var(--accent)]">atlas</span> ={" "}
            <span className="text-[#cfcfca]">createDoc</span>(<span className="text-[#ff7a45]">&quot;workspace&quot;</span>)
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
        atlas · collaborative editor
      </div>
    </div>
  );
}

function DefaultVisual({ hover }: { hover: boolean }) {
  return (
    <div className="relative h-full w-full bg-[color:var(--bg-soft)]">
      <motion.div
        animate={{ rotate: hover ? 6 : 0, scale: hover ? 1.04 : 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-12 rounded-3xl border border-[color:var(--line-strong)]"
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)]">
          Preview
        </span>
      </div>
    </div>
  );
}
