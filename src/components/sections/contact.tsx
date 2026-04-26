"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/primitives";
import { profile } from "@/lib/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        }) + " · UTC+1"
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-[color:var(--bg-elev)] border-t border-[color:var(--line)] overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-[0.45]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
            <div className="font-mono text-[11px] tracking-[0.18em] text-[color:var(--fg-faint)] uppercase flex items-center gap-3">
              <span className="text-[color:var(--accent)]">06</span>
              <span className="h-px w-8 bg-[color:var(--line-strong)]" />
              <span>Contact</span>
            </div>
            <div className="mt-12 hidden md:block space-y-3 text-[color:var(--fg-muted)] text-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-[color:var(--accent)] pulse-dot" />
                </span>
                <span>{time || "Loading…"}</span>
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em]">
                Reply within 24h on weekdays.
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-medium tracking-[-0.03em] leading-[0.98]">
                Let&apos;s build something that
                <br />
                <span className="text-[color:var(--accent)] italic font-serif">earns its keep.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-[color:var(--fg-muted)] text-[17px] leading-relaxed">
                I&apos;m taking on a small number of senior, staff, or trusted contract
                engagements through 2026. If your team values clarity, restraint, and
                shipping things that hold up — I&apos;d like to hear from you.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--accent)] px-5 py-3 text-[14px] font-medium text-[color:var(--bg)] hover:bg-[color:var(--accent-soft)] transition-colors"
                >
                  <span className="font-mono">{profile.email}</span>
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-[color:var(--bg)] text-[color:var(--accent)] group-hover:translate-x-0.5 transition-transform">
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(profile.email);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1600);
                    } catch {
                      // ignore
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg)] px-5 py-3 text-[14px] font-medium text-[color:var(--fg)] hover:border-[color:var(--fg-muted)] transition-colors"
                >
                  <motion.span
                    key={copied ? "y" : "n"}
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {copied ? "Copied to clipboard" : "Copy email"}
                  </motion.span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                {profile.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group block rounded-xl border border-[color:var(--line)] bg-[color:var(--bg)] p-4 hover:border-[color:var(--line-strong)] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-faint)]">
                          {s.label}
                        </span>
                        <span className="text-[color:var(--fg-faint)] group-hover:text-[color:var(--accent)] transition-colors">
                          ↗
                        </span>
                      </div>
                      <div className="mt-3 font-mono text-[12.5px] text-[color:var(--fg)] truncate">
                        {s.handle}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
