import Link from "next/link";

type Card = {
  slug: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  swatches: string[];
  type: string;
  group: "two-tone × terminal" | "wild";
};

const cards: Card[] = [
  {
    slug: "manual",
    label: "01",
    title: "man(book)",
    tagline: "the man page set in book type",
    description:
      "Unix man-page semantics typeset with the dignity of a fine-press printed book. Roman numeral chapters at 12rem.",
    swatches: ["#FFFFFE", "#0B0B0C", "#E5482A", "#E8E6E2"],
    type: "Fraunces · Inter · IBM Plex Mono",
    group: "two-tone × terminal",
  },
  {
    slug: "split",
    label: "02",
    title: "the split",
    tagline: "two registers, one spine",
    description:
      "Vertical fold down the page center. Left half = editorial Fraunces. Right half = Plex Mono terminal output. Same content in parallel.",
    swatches: ["#FFFFFE", "#0B0B0C", "#E5482A", "#E8E6E2"],
    type: "Fraunces · Inter · IBM Plex Mono",
    group: "two-tone × terminal",
  },
  {
    slug: "cinema",
    label: "03",
    title: "widescreen",
    tagline: "cinematic scene cards",
    description:
      "Letterboxed 21:9 frames. Mono slates carry scene/take/timecode. Massive Fraunces headlines run off the right edge.",
    swatches: ["#FFFFFE", "#0B0B0C", "#E5482A", "#E8E6E2"],
    type: "Fraunces · Inter · IBM Plex Mono",
    group: "two-tone × terminal",
  },
  {
    slug: "ticker",
    label: "04",
    title: "the ticker",
    tagline: "quarterly letter under live data",
    description:
      "Bloomberg ticker scrolls perpetually with real metrics. Below: Berkshire-style quarterly letter to readers.",
    swatches: ["#FFFFFE", "#0B0B0C", "#E5482A", "#E8E6E2"],
    type: "Fraunces · Inter · IBM Plex Mono",
    group: "two-tone × terminal",
  },
  {
    slug: "riso",
    label: "05",
    title: "riso",
    tagline: "zine printed on a risograph",
    description:
      "Two-ink overprint with deliberate misregistration. Halftone screens. Cream paper grain. Indie-press energy without being cute.",
    swatches: ["#F4EDD8", "#FF5C39", "#2D4ABF", "#1A1A18"],
    type: "Bricolage Grotesque · Inter · JetBrains Mono",
    group: "wild",
  },
  {
    slug: "bauhaus",
    label: "06",
    title: "bauhaus",
    tagline: "constructivist propaganda",
    description:
      "Geometric primary-color blocks as architecture. El Lissitzky composition. Headlines fragmented across shapes. Loud, deliberate, asymmetric.",
    swatches: ["#FFF8E7", "#E63946", "#1D3557", "#F4A261", "#0A0A0A"],
    type: "Archivo Black · Inter · Space Mono",
    group: "wild",
  },
  {
    slug: "blueprint",
    label: "07",
    title: "blueprint",
    tagline: "cyanotype technical drawing",
    description:
      "Architect's blueprint of an engineer. Cyan field, amber-line accents, dimension callouts on hover, sections fold open like construction plans.",
    swatches: ["#1B3B6F", "#E8F1F2", "#F77F00", "#2A4F88"],
    type: "Inter Tight · Source Serif 4 · Geist Mono",
    group: "wild",
  },
  {
    slug: "atelier",
    label: "08",
    title: "atelier",
    tagline: "warm material minimalism",
    description:
      "Sand, stone, moss, sumi ink, single hanko-red stamp. All lowercase, generous whitespace, slow blur-fade transitions. Aesop × kaiseki.",
    swatches: ["#DDD0BC", "#635858", "#4D5D4A", "#1A1817", "#5C2118"],
    type: "Cormorant Garamond · Inter Tight · Caveat",
    group: "wild",
  },
  {
    slug: "arch",
    label: "09",
    title: "arch",
    tagline: "neofetch · btop · tmux · interactive prompt",
    description:
      "A full Arch Linux + Hyprland desktop experience. Catppuccin Mocha palette, ASCII Arch logo, animated btop gauges, tmux-style multi-pane terminal, real interactive shell that accepts commands.",
    swatches: ["#1E1E2E", "#CBA6F7", "#A6E3A1", "#FAB387", "#F38BA8"],
    type: "JetBrains Mono only · 24 colors",
    group: "wild",
  },
];

export default function PreviewIndex() {
  const groups: Card["group"][] = ["two-tone × terminal", "wild"];
  return (
    <main className="min-h-screen text-[#0B0B0C]" style={{ background: "#FFFFFE" }}>
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-black/55">
          Preview · 8 directions · 2 batches
        </div>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4rem)] font-medium tracking-[-0.025em] leading-[1.02]">
          Eight self-contained portfolio directions. Same data, eight design lineages.
        </h1>
        <p className="mt-6 max-w-xl text-black/65 text-[15.5px] leading-[1.65]">
          The first batch hybridises two-tone minimalism with terminal semantics. The second batch goes
          further afield — risograph zine, constructivist propaganda, cyanotype blueprint, warm material
          minimalism — each with its own palette, typography, and motion personality.
        </p>

        {groups.map((group) => (
          <section key={group} className="mt-16">
            <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-black/55">
              <span>{group === "two-tone × terminal" ? "Batch 01 — Two-tone × terminal" : "Batch 02 — Going wild"}</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {cards.filter((c) => c.group === group).map((c) => (
                <Link
                  key={c.slug}
                  href={`/preview/${c.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-black/10 bg-white p-7 transition-colors hover:border-black/40"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-black/55">
                        {c.label} · {c.tagline}
                      </div>
                      <h2 className="mt-3 text-[clamp(1.6rem,2.4vw,2.05rem)] font-medium tracking-[-0.02em] leading-[1.04]">
                        {c.title}
                      </h2>
                    </div>
                    <span className="grid place-items-center h-9 w-9 shrink-0 rounded-full border border-black/15 text-black/60 group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                      <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2 8L8 2M8 2H3M8 2V7"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-4 text-black/70 text-[14.5px] leading-[1.65]">{c.description}</p>
                  <div className="mt-5 flex items-center gap-1.5">
                    {c.swatches.map((s) => (
                      <span
                        key={s}
                        className="h-7 w-10 rounded-md border border-black/10"
                        style={{ background: s }}
                        title={s}
                      />
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-black/10 font-mono text-[10.5px] uppercase tracking-[0.18em] text-black/55">
                    {c.type}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-20 pt-8 border-t border-black/10 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-black/55">
          <span>not the live site</span>
          <Link href="/" className="hover:text-black transition-colors">
            ← back to live site
          </Link>
        </div>
      </div>
    </main>
  );
}
