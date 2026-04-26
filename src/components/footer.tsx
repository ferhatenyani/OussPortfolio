"use client";

import { profile } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--line)] bg-[color:var(--bg)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-[color:var(--accent)] grid place-items-center">
            <span className="font-mono text-[12px] font-bold text-[color:var(--bg)]">O</span>
          </div>
          <div>
            <div className="text-sm text-[color:var(--fg)]">{profile.name}</div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--fg-faint)] mt-1">
              Crafted by hand · Last updated 2026.04
            </div>
          </div>
        </div>

        <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)] flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href="#top" className="hover:text-[color:var(--fg)] transition-colors">
            ↑ Back to top
          </a>
          <span className="hidden md:inline text-[color:var(--line-strong)]">·</span>
          <span>Built with Next.js & care</span>
          <span className="hidden md:inline text-[color:var(--line-strong)]">·</span>
          <span>© {new Date().getFullYear()} {profile.name.split(" ")[0]}</span>
        </div>
      </div>
    </footer>
  );
}
