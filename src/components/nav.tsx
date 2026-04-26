"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, sections } from "@/lib/portfolio";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[backdrop-filter,background] duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--bg)]/70 border-b border-[color:var(--line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-7 w-7 rounded-md bg-[color:var(--accent)] grid place-items-center overflow-hidden">
            <span className="absolute inset-0 bg-[color:var(--bg)] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative font-mono text-[12px] font-bold text-[color:var(--bg)] group-hover:text-[color:var(--accent)] transition-colors duration-500">
              O
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[13px] font-medium text-[color:var(--fg)]">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)] mt-1">
              Portfolio · 2026
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active === s.id
                  ? "text-[color:var(--fg)]"
                  : "text-[color:var(--fg-faint)] hover:text-[color:var(--fg)]"
              }`}
            >
              <span className="text-[color:var(--accent)] mr-1.5">{s.index}</span>
              {s.label}
              {active === s.id ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 bottom-0 h-px bg-[color:var(--accent)]"
                  transition={{ type: "spring", stiffness: 400, damping: 36 }}
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--fg-muted)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-[color:var(--accent)] pulse-dot" />
              <span className="absolute inset-0 rounded-full bg-[color:var(--accent)] opacity-40 blur-[3px]" />
            </span>
            Open to work
          </span>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-soft)] px-3.5 py-1.5 text-[12px] font-medium text-[color:var(--fg)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:border-[color:var(--accent)] transition-colors duration-300"
          >
            Get in touch
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-[color:var(--line-strong)]"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <span className={`block h-px w-4 bg-[color:var(--fg)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-[color:var(--fg)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[color:var(--line)]"
          >
            <div className="px-6 py-5 flex flex-col gap-1 bg-[color:var(--bg)]">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[color:var(--fg-muted)]"
                >
                  <span>
                    <span className="text-[color:var(--accent)] mr-2">{s.index}</span>
                    {s.label}
                  </span>
                  <span className="text-[color:var(--fg-faint)]">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
