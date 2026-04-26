"use client";

import { Reveal, SectionHeader, Pill } from "@/components/primitives";
import { stack, values } from "@/lib/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-[color:var(--bg-elev)] border-y border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="04"
          label="About"
          title="An engineer who treats every commit like it might be permanent."
          kicker="A short note on how I work, what I optimize for, and the tools I reach for first."
        />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="space-y-6 text-[color:var(--fg)] text-[17px] leading-[1.75] max-w-2xl">
              <p>
                I write software the way I think one ought to write anything that
                outlives the moment of its making — slowly enough to be considered,
                quickly enough to be useful. Most of my career has been spent on
                the seam between product and platform, where ideas get turned into
                durable systems.
              </p>
              <p>
                I&apos;ve led teams, mentored engineers, and shipped to production at
                early-stage startups and at scale. The work I&apos;m proudest of doesn&apos;t
                announce itself: low p95s, quiet dashboards, lines of code other
                people didn&apos;t have to write because the primitive was right.
              </p>
              <p>
                Outside of work, I read across architecture, type theory, and the
                history of typography. I keep a small open-source garden, run a
                weekly correspondence with two engineers I admire, and spend more
                time than I should debating shipping cadences.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l lg:border-[color:var(--line)]">
            <div className="space-y-10">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)] mb-5">
                  Operating principles
                </div>
                <dl className="space-y-5">
                  {values.map((v) => (
                    <div key={v.k} className="grid grid-cols-12 gap-3">
                      <dt className="col-span-5 text-[14px] text-[color:var(--fg)] font-medium">
                        {v.k}
                      </dt>
                      <dd className="col-span-7 text-[14px] text-[color:var(--fg-muted)] leading-relaxed">
                        {v.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)] mb-4">
                  Stack & tools
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
