"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { slug: "manual", label: "Manual", hint: "man(book)", group: "two-tone × terminal" },
  { slug: "split", label: "Split", hint: "two registers", group: "two-tone × terminal" },
  { slug: "cinema", label: "Cinema", hint: "widescreen", group: "two-tone × terminal" },
  { slug: "ticker", label: "Ticker", hint: "live letter", group: "two-tone × terminal" },
  { slug: "riso", label: "Riso", hint: "zine", group: "wild" },
  { slug: "bauhaus", label: "Bauhaus", hint: "constructivist", group: "wild" },
  { slug: "blueprint", label: "Blueprint", hint: "cyanotype", group: "wild" },
  { slug: "atelier", label: "Atelier", hint: "quiet warm", group: "wild" },
  { slug: "arch", label: "Arch", hint: "terminal", group: "wild" },
];

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isIndex = pathname === "/preview";

  return (
    <div className="relative min-h-screen">
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-black/10 bg-white/85 backdrop-blur-md text-[#0B0B0C]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5">
          <Link
            href="/"
            className="hidden md:inline shrink-0 font-mono text-[10.5px] uppercase tracking-[0.22em] text-black/65 hover:text-black transition-colors"
          >
            ← live
          </Link>
          <nav className="flex flex-1 items-center justify-center gap-0.5 overflow-x-auto px-1">
            {tabs.map((t) => {
              const active = pathname?.endsWith(`/preview/${t.slug}`);
              return (
                <Link
                  key={t.slug}
                  href={`/preview/${t.slug}`}
                  className={`group shrink-0 rounded-full px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  <span>{t.label}</span>
                  <span className="hidden xl:inline ml-1.5 normal-case tracking-[0.02em] text-[10px] opacity-70">
                    · {t.hint}
                  </span>
                </Link>
              );
            })}
          </nav>
          <Link
            href="/preview"
            className={`shrink-0 font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors ${
              isIndex ? "text-black" : "text-black/60 hover:text-black"
            }`}
          >
            index
          </Link>
        </div>
      </header>
      <div className="pt-[36px]">{children}</div>
    </div>
  );
}
