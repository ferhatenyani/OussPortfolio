"use client";

import { Reveal, SectionHeader } from "@/components/primitives";
import { testimonials } from "@/lib/portfolio";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          index="03"
          label="Testimonials"
          title="The kind of words colleagues choose to put on the record."
          kicker="From the people I&apos;ve shipped, scaled, and stood next to in production. Reach out for more references on request."
        />

        <div className="grid grid-cols-12 gap-6">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.07}
              className={`col-span-12 ${
                i % 4 === 0 || i % 4 === 3 ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <figure
                className={`group relative h-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-7 md:p-9 hover:border-[color:var(--line-strong)] transition-colors`}
              >
                <span
                  aria-hidden
                  className="absolute top-5 right-6 font-serif text-[5rem] leading-none text-[color:var(--accent)]/20 select-none"
                >
                  &#8220;
                </span>
                <blockquote className="relative text-[17px] md:text-[19px] leading-relaxed tracking-[-0.005em] text-[color:var(--fg)]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-[color:var(--line)] flex items-center gap-4">
                  <Avatar name={t.name} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[color:var(--fg)]">{t.name}</div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)] mt-1 truncate">
                      {t.role} · {t.org}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="relative h-10 w-10 shrink-0 rounded-full bg-[color:var(--bg-soft)] border border-[color:var(--line-strong)] grid place-items-center">
      <span className="font-mono text-[11px] tracking-[0.08em] text-[color:var(--fg-muted)]">
        {initials}
      </span>
    </div>
  );
}
