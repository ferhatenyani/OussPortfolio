"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHeader, Pill } from "@/components/primitives";
import { experience } from "@/lib/portfolio";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="01"
          label="Experience"
          title="A trail of work that shipped, scaled, and stuck."
          kicker="Selected roles where I led product engineering, established team patterns, and turned ambiguous problems into measurable outcomes."
        />

        <div ref={ref} className="relative grid grid-cols-12 gap-x-6">
          {/* Timeline rail */}
          <div className="hidden md:block col-span-3 relative">
            <div className="sticky top-32 h-[260px]">
              <div className="absolute right-0 top-0 bottom-0 w-px bg-[color:var(--line)]" />
              <motion.div
                style={{ height: lineHeight }}
                className="absolute right-0 top-0 w-px bg-[color:var(--accent)]"
              />
              <div className="absolute right-[-3px] top-0 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              <div className="pr-6 text-right">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
                  Timeline
                </div>
                <div className="mt-2 text-[color:var(--fg-muted)] text-sm leading-relaxed">
                  Six years across analytics, payments, and logistics platforms.
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 flex flex-col">
            {experience.map((role, i) => (
              <Reveal key={role.company} delay={i * 0.05}>
                <article
                  className={`group relative grid grid-cols-12 gap-x-6 py-10 md:py-12 ${
                    i === 0 ? "" : "border-t border-[color:var(--line)]"
                  }`}
                >
                  <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
                      {role.start} — {role.end}
                    </div>
                    <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--fg-muted)]">
                      {role.location}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-2xl md:text-[1.75rem] font-medium tracking-[-0.02em]">
                        {role.role}
                      </h3>
                      <span className="text-[color:var(--fg-faint)]">·</span>
                      <span className="text-[color:var(--accent)] text-lg">{role.company}</span>
                    </header>
                    <p className="mt-3 max-w-2xl text-[color:var(--fg-muted)] leading-relaxed">
                      {role.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-[15px] text-[color:var(--fg)] leading-relaxed">
                          <span className="mt-2 h-1 w-3 shrink-0 bg-[color:var(--accent)]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {role.stack.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                  </div>

                  {/* Subtle hover ribbon */}
                  <motion.div
                    aria-hidden
                    initial={false}
                    className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/0 to-transparent group-hover:via-[color:var(--accent)]/60 transition-[--tw-gradient-stops] duration-500"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
