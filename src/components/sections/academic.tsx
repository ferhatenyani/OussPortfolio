"use client";

import { Reveal, SectionHeader } from "@/components/primitives";
import { education } from "@/lib/portfolio";

export function Academic() {
  return (
    <section id="academic" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="05"
          label="Academic"
          title="A foundation in systems, slowly maintained."
          kicker="Formal education and the habits I&apos;ve kept since."
        />

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            {education.map((ed, i) => (
              <Reveal key={ed.institution} delay={i * 0.06}>
                <article
                  className={`group grid grid-cols-12 gap-x-6 py-9 md:py-11 ${
                    i === 0 ? "" : "border-t border-[color:var(--line)]"
                  }`}
                >
                  <div className="col-span-12 md:col-span-3 mb-3 md:mb-0">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
                      {ed.start} — {ed.end}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="text-xl md:text-[1.4rem] font-medium tracking-[-0.01em]">
                      {ed.institution}
                    </h3>
                    <div className="mt-1 text-[color:var(--accent)] text-[14.5px]">
                      {ed.degree}
                    </div>
                    <p className="mt-3 max-w-2xl text-[color:var(--fg-muted)] leading-relaxed">
                      {ed.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
