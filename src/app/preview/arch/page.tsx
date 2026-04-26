"use client";

import { JetBrains_Mono } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  profile,
  projects,
  experience,
  testimonials,
  education,
  values,
} from "@/lib/portfolio";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--p-mono",
});

// Catppuccin Mocha — full palette
const cat = {
  base: "#1E1E2E",
  mantle: "#181825",
  crust: "#11111B",
  surface0: "#313244",
  surface1: "#45475A",
  surface2: "#585B70",
  text: "#CDD6F4",
  subtext1: "#BAC2DE",
  subtext0: "#A6ADC8",
  overlay2: "#9399B2",
  overlay1: "#7F849C",
  overlay0: "#6C7086",
  blue: "#89B4FA",
  lavender: "#B4BEFE",
  sapphire: "#74C7EC",
  sky: "#89DCEB",
  teal: "#94E2D5",
  green: "#A6E3A1",
  yellow: "#F9E2AF",
  peach: "#FAB387",
  maroon: "#EBA0AC",
  red: "#F38BA8",
  pink: "#F5C2E7",
  mauve: "#CBA6F7",
  flamingo: "#F2CDCD",
  rosewater: "#F5E0DC",
};

const ARCH_LOGO = `                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`;

type LineKind = "cmd" | "out" | "err" | "warn" | "info" | "blank" | "raw";
type Line = { text: string; kind?: LineKind; color?: string };

const helpText: Line[] = [
  { text: "available commands:", kind: "info" },
  { text: "  help                show this list", kind: "out" },
  { text: "  whoami              who is this engineer", kind: "out" },
  { text: "  pwd                 print working directory", kind: "out" },
  { text: "  ls                  list project files", kind: "out" },
  { text: "  cat <file>          read a file (about, contact, projects)", kind: "out" },
  { text: "  pacman -Q[i] <pkg>  query installed packages", kind: "out" },
  { text: "  git log             show recent commits (experience)", kind: "out" },
  { text: "  neofetch            print system info", kind: "out" },
  { text: "  mail                open the mail client", kind: "out" },
  { text: "  date                show current date and time", kind: "out" },
  { text: "  history             show command history", kind: "out" },
  { text: "  vim                 do not press this", kind: "out" },
  { text: "  clear               clear the output", kind: "out" },
  { text: "  exit                close the session", kind: "out" },
  { text: "", kind: "blank" },
  { text: "tip: use ↑ ↓ to scroll command history.", kind: "info" },
];

export default function ArchPreview() {
  const reduced = useReducedMotion();

  // ────── live clock
  const [clock, setClock] = useState(() => formatClock(new Date()));
  useEffect(() => {
    const id = setInterval(() => setClock(formatClock(new Date())), 30 * 1000);
    return () => clearInterval(id);
  }, []);

  // ────── btop fake stats
  const [cpu, setCpu] = useState(74);
  const [mem, setMem] = useState(62);
  const [stars] = useState(4128);
  const [net, setNet] = useState(12.4);
  const [spark, setSpark] = useState<number[]>(
    Array.from({ length: 28 }, () => 2 + Math.floor(Math.random() * 5))
  );
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setCpu((p) => clamp(Math.round(p + (Math.random() - 0.45) * 12), 32, 96));
      setMem((p) => clamp(Math.round(p + (Math.random() - 0.5) * 6), 48, 82));
      setNet((p) => Math.max(0, +(p + (Math.random() - 0.5) * 8).toFixed(1)));
      setSpark((s) => [...s.slice(1), Math.floor(Math.random() * 8)]);
    }, 1400);
    return () => clearInterval(id);
  }, [reduced]);

  // ────── workspace tabs (visual only; clicking scrolls to anchor)
  const [activeWs, setActiveWs] = useState(1);
  const wsAnchors: Record<number, string> = {
    1: "ws-1",
    2: "ws-2",
    3: "ws-3",
    4: "ws-4",
    5: "ws-5",
    6: "ws-6",
  };
  const goWs = useCallback((n: number) => {
    setActiveWs(n);
    const el = document.getElementById(wsAnchors[n]);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className={`${mono.variable} relative min-h-screen`}
      style={{
        background: cat.crust,
        color: cat.text,
        fontFamily: "var(--p-mono), ui-monospace, 'SF Mono', Menlo, monospace",
        fontSize: "13.5px",
        lineHeight: 1.6,
      }}
    >
      <DotGrid />

      {/* WINDOW CHROME */}
      <div
        className="relative z-10 mx-auto max-w-[1200px] mt-3 mb-0 rounded-t-[10px] overflow-hidden border"
        style={{ borderColor: cat.surface1, background: cat.mantle }}
      >
        <div
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{ borderColor: cat.surface0, background: cat.crust }}
        >
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ background: cat.red }} />
            <span className="h-3 w-3 rounded-full" style={{ background: cat.yellow }} />
            <span className="h-3 w-3 rounded-full" style={{ background: cat.green }} />
          </div>
          <div className="text-[12px]" style={{ color: cat.subtext0 }}>
            <span style={{ color: cat.green }}>ouss</span>
            <span style={{ color: cat.overlay0 }}>@</span>
            <span style={{ color: cat.sapphire }}>arch</span>
            <span style={{ color: cat.overlay0 }}>:</span>
            <span style={{ color: cat.lavender }}>~/portfolio</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]" style={{ color: cat.overlay1 }}>
            <span>tmux: portfolio</span>
            <span style={{ color: cat.surface2 }}>·</span>
            <span style={{ color: cat.peach }}>1280×800</span>
            <span style={{ color: cat.surface2 }}>·</span>
            <span>Hyprland</span>
          </div>
        </div>

        {/* WAYBAR */}
        <div
          className="flex items-center justify-between px-3 py-1.5 border-b text-[11.5px]"
          style={{ borderColor: cat.surface0, background: cat.mantle, color: cat.subtext0 }}
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              const isActive = activeWs === n;
              return (
                <button
                  key={n}
                  onClick={() => goWs(n)}
                  className="px-2.5 py-1 rounded transition-colors"
                  style={{
                    background: isActive ? cat.mauve : "transparent",
                    color: isActive ? cat.crust : cat.subtext0,
                    minHeight: 24,
                  }}
                  aria-label={`Workspace ${n}`}
                >
                  <span style={{ fontWeight: 600 }}>{n}</span>
                  <span className="ml-1 opacity-70">{wsLabel(n)}</span>
                </button>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-2 text-[11px]" style={{ color: cat.overlay2 }}>
            <span>● </span>
            <span>portfolio.tmux:0</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]" style={{ color: cat.overlay2 }}>
            <span style={{ color: cat.green }}>↓ 12.4 kb/s</span>
            <span>·</span>
            <span style={{ color: cat.peach }}>↑ 3.2 kb/s</span>
            <span>·</span>
            <span style={{ color: cat.yellow }}>vol 64%</span>
            <span>·</span>
            <span style={{ color: cat.teal }}>bat 87%</span>
            <span>·</span>
            <span style={{ color: cat.lavender, fontWeight: 600 }}>{clock}</span>
          </div>
        </div>

        {/* PANES */}
        <div className="grid grid-cols-12 gap-2 p-2" style={{ background: cat.crust }}>
          {/* WS 1 — neofetch + btop */}
          <Pane title="neofetch" icon="◉" className="col-span-12 lg:col-span-7" tone={cat.sapphire} anchor="ws-1">
            <NeofetchPane />
          </Pane>
          <Pane title="btop ── system stats" icon="▤" className="col-span-12 lg:col-span-5" tone={cat.green}>
            <BtopPane cpu={cpu} mem={mem} stars={stars} net={net} spark={spark} reduced={!!reduced} />
          </Pane>

          {/* WS 2 — pacman -Qe (projects) */}
          <Pane title={`pacman -Qe ── ${projects.length} explicit packages`} icon="⊕" className="col-span-12" tone={cat.yellow} anchor="ws-2">
            <PacmanPane />
          </Pane>

          {/* WS 3 — git log (experience) */}
          <Pane title="git log --graph --oneline --decorate" icon="⎇" className="col-span-12 lg:col-span-7" tone={cat.peach} anchor="ws-3">
            <GitLogPane />
          </Pane>

          {/* WS 4 — bat testimonials.md */}
          <Pane title="bat testimonials.md" icon="❝" className="col-span-12 lg:col-span-5" tone={cat.pink} anchor="ws-4">
            <BatPane />
          </Pane>

          {/* WS 5 — nvim about.md */}
          <Pane title="nvim ~/about.md" icon="✎" className="col-span-12 lg:col-span-7" tone={cat.lavender} anchor="ws-5">
            <NvimPane />
          </Pane>

          {/* man oussama-edu (academic) */}
          <Pane title="man oussama-edu(7)" icon="📖" className="col-span-12 lg:col-span-5" tone={cat.teal}>
            <ManPane />
          </Pane>

          {/* WS 6 — interactive shell */}
          <Pane title="zsh ── interactive · type 'help'" icon="❯" className="col-span-12" tone={cat.mauve} anchor="ws-6">
            <ShellPane />
          </Pane>
        </div>

        {/* TMUX STATUSLINE */}
        <div
          className="flex items-center justify-between px-3 py-1 border-t text-[11px]"
          style={{ borderColor: cat.surface0, background: cat.mantle }}
        >
          <div className="flex items-center gap-2">
            <span
              className="px-2 py-0.5 rounded"
              style={{ background: cat.mauve, color: cat.crust, fontWeight: 600 }}
            >
              {profile.location.split(" · ")[0]}
            </span>
            <span style={{ color: cat.overlay1 }}>tmux:</span>
            <span style={{ color: cat.text }}>portfolio</span>
            <span style={{ color: cat.surface2 }}>·</span>
            <span style={{ color: cat.green }}>● ws{activeWs}</span>
          </div>
          <div className="hidden md:flex items-center gap-3" style={{ color: cat.overlay2 }}>
            <span>★ {stars}</span>
            <span>·</span>
            <span>cpu {cpu}%</span>
            <span>·</span>
            <span>mem {mem}%</span>
            <span>·</span>
            <span>net {net.toFixed(1)} kb/s</span>
          </div>
          <div className="flex items-center gap-2" style={{ color: cat.overlay2 }}>
            <span style={{ color: cat.peach }}>arch · linux 6.14.2</span>
            <span style={{ color: cat.surface2 }}>·</span>
            <span style={{ color: cat.lavender }}>{clock}</span>
          </div>
        </div>
      </div>

      {/* footer note (outside the "window") */}
      <div
        className="mx-auto max-w-[1200px] py-3 text-center text-[11px]"
        style={{ color: cat.overlay0 }}
      >
        terminal preview · catppuccin mocha · jetbrains mono · interactive
      </div>
    </main>
  );
}

// ────── building blocks ──────

function Pane({
  title,
  icon,
  tone,
  className,
  anchor,
  children,
}: {
  title: string;
  icon: string;
  tone: string;
  className?: string;
  anchor?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={anchor}
      className={`relative rounded-md overflow-hidden border ${className ?? ""}`}
      style={{ borderColor: cat.surface0, background: cat.base }}
    >
      <header
        className="flex items-center justify-between px-3 py-1.5 border-b text-[11px]"
        style={{ borderColor: cat.surface0, background: cat.mantle }}
      >
        <div className="flex items-center gap-2">
          <span style={{ color: tone, fontWeight: 700 }}>{icon}</span>
          <span style={{ color: cat.subtext0 }}>{title}</span>
        </div>
        <div className="flex items-center gap-1.5" style={{ color: cat.overlay0 }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: cat.surface2 }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: cat.surface2 }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: tone }} />
        </div>
      </header>
      <div className="p-4">{children}</div>
    </section>
  );
}

function NeofetchPane() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-12 gap-x-4 gap-y-2"
    >
      <pre
        className="col-span-12 md:col-span-5 leading-[1.05] whitespace-pre"
        style={{
          fontSize: "10.5px",
          color: cat.sapphire,
          textShadow: `0 0 12px ${cat.sapphire}55`,
        }}
      >
        {ARCH_LOGO}
      </pre>
      <div className="col-span-12 md:col-span-7">
        <NeoLine k="" v={`${profile.handle.replace("@", "")}@arch`} keyColor={cat.green} valColor={cat.text} bold />
        <NeoLine k="" v={"-".repeat(20)} plain />
        <NeoLine k="OS" v="Arch Linux x86_64" keyColor={cat.green} />
        <NeoLine k="Host" v="OUSS-PORTFOLIO MMXXVI" keyColor={cat.yellow} />
        <NeoLine k="Kernel" v="6.14.2-arch1-1" keyColor={cat.peach} />
        <NeoLine k="Uptime" v="07 years, 21 days, 14 hours" keyColor={cat.maroon} />
        <NeoLine k="Packages" v={`${projects.length + experience.length + education.length} (pacman) · 6 (yay)`} keyColor={cat.red} />
        <NeoLine k="Shell" v="zsh 5.9 (with starship)" keyColor={cat.pink} />
        <NeoLine k="Resolution" v="3840x2160" keyColor={cat.mauve} />
        <NeoLine k="DE" v="—" keyColor={cat.lavender} />
        <NeoLine k="WM" v="Hyprland 0.41" keyColor={cat.blue} />
        <NeoLine k="WM Theme" v="Catppuccin-Mocha-Mauve" keyColor={cat.sapphire} />
        <NeoLine k="Theme" v="Catppuccin-Mocha-Standard-Mauve-Dark [GTK4]" keyColor={cat.sky} />
        <NeoLine k="Icons" v="Papirus-Dark" keyColor={cat.teal} />
        <NeoLine k="Terminal" v="alacritty (kitty fallback)" keyColor={cat.green} />
        <NeoLine k="CPU" v="Intel(R) Senior IC @ 4.8GHz" keyColor={cat.yellow} />
        <NeoLine k="GPU" v="Mind, single-threaded but well-rested" keyColor={cat.peach} />
        <NeoLine k="Memory" v={`${experience.length} jobs · ${projects.length} projects · ${testimonials.length} reviews`} keyColor={cat.maroon} />
        <NeoLine k="Locale" v={`${profile.location.toLowerCase()}`} keyColor={cat.red} />
        <div className="mt-2 flex items-center gap-1.5">
          {[
            cat.red,
            cat.peach,
            cat.yellow,
            cat.green,
            cat.teal,
            cat.blue,
            cat.mauve,
            cat.pink,
          ].map((c, i) => (
            <span
              key={i}
              className="h-3 w-6"
              style={{ background: c }}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function NeoLine({
  k,
  v,
  keyColor,
  valColor,
  bold,
  plain,
}: {
  k: string;
  v: string;
  keyColor?: string;
  valColor?: string;
  bold?: boolean;
  plain?: boolean;
}) {
  if (plain) {
    return <div style={{ color: cat.overlay1 }}>{v}</div>;
  }
  return (
    <div className="flex gap-2">
      {k ? (
        <span
          className="shrink-0"
          style={{ color: keyColor ?? cat.green, fontWeight: 600, minWidth: "10ch" }}
        >
          {k}
        </span>
      ) : null}
      <span
        style={{
          color: valColor ?? cat.text,
          fontWeight: bold ? 700 : 400,
        }}
      >
        {v}
      </span>
    </div>
  );
}

function BtopPane({
  cpu,
  mem,
  stars,
  net,
  spark,
  reduced,
}: {
  cpu: number;
  mem: number;
  stars: number;
  net: number;
  spark: number[];
  reduced: boolean;
}) {
  return (
    <div className="grid gap-3">
      <Gauge label="cpu" value={cpu} unit="%" colorMap="cpu" />
      <Gauge label="mem" value={mem} unit="%" colorMap="mem" />
      <Gauge label="stars" value={Math.min(100, Math.round((stars / 5000) * 100))} unit={`${stars.toLocaleString()}`} colorMap="stars" />
      <div>
        <div className="flex items-center justify-between text-[11px] mb-1">
          <span style={{ color: cat.subtext0 }}>net ▼</span>
          <span style={{ color: cat.green }}>{net.toFixed(1)} kb/s</span>
        </div>
        <div
          className="text-[14px] leading-none whitespace-pre"
          style={{ color: cat.green, letterSpacing: "0.02em" }}
        >
          {spark.map((v) => "▁▂▃▄▅▆▇█"[v]).join("")}
        </div>
      </div>
      <div className="text-[10.5px] grid grid-cols-2 gap-x-3 gap-y-0.5 mt-1 pt-2 border-t" style={{ borderColor: cat.surface0 }}>
        <span style={{ color: cat.overlay1 }}>uptime</span><span style={{ color: cat.text }}>07y 21d</span>
        <span style={{ color: cat.overlay1 }}>load avg</span><span style={{ color: cat.text }}>0.42 0.31 0.28</span>
        <span style={{ color: cat.overlay1 }}>processes</span><span style={{ color: cat.text }}>20+ shipped</span>
        <span style={{ color: cat.overlay1 }}>refresh</span><span style={{ color: reduced ? cat.overlay0 : cat.green }}>{reduced ? "paused" : "1.4s"}</span>
      </div>
    </div>
  );
}

function Gauge({
  label,
  value,
  unit,
  colorMap,
}: {
  label: string;
  value: number;
  unit: string;
  colorMap: "cpu" | "mem" | "stars";
}) {
  const total = 22;
  const filled = Math.round((value / 100) * total);
  const tone =
    colorMap === "cpu"
      ? value > 80
        ? cat.red
        : value > 60
        ? cat.peach
        : value > 40
        ? cat.yellow
        : cat.green
      : colorMap === "mem"
      ? value > 75
        ? cat.peach
        : value > 60
        ? cat.yellow
        : cat.teal
      : cat.mauve;
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] mb-1">
        <span style={{ color: cat.subtext0 }}>{label}</span>
        <span style={{ color: tone, fontWeight: 600 }}>{unit}</span>
      </div>
      <div
        className="text-[15px] leading-none whitespace-pre tabular-nums"
        style={{ color: tone, letterSpacing: "0.02em" }}
      >
        <motion.span
          initial={false}
          animate={{ opacity: [0.85, 1] }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {"█".repeat(filled)}
        </motion.span>
        <span style={{ color: cat.surface1 }}>{"░".repeat(total - filled)}</span>
      </div>
    </div>
  );
}

function PacmanPane() {
  return (
    <div className="space-y-1">
      <Line>
        <span style={{ color: cat.green }}>{"❯"}</span>{" "}
        <span style={{ color: cat.text }}>pacman</span>{" "}
        <span style={{ color: cat.peach }}>-Qe</span>
      </Line>
      <Line>
        <span style={{ color: cat.overlay1 }}>:: querying explicitly-installed packages...</span>
      </Line>
      <Line>
        <span style={{ color: cat.subtext1 }}>{"name".padEnd(18)}{"version".padEnd(14)}{"size".padEnd(9)}{"description"}</span>
      </Line>
      <div style={{ color: cat.surface2 }}>{"─".repeat(72)}</div>
      {projects.map((p, i) => (
        <PacmanRow key={p.title} project={p} index={i} />
      ))}
      <div style={{ color: cat.surface2 }} className="mt-1">
        {"─".repeat(72)}
      </div>
      <Line>
        <span style={{ color: cat.green, fontWeight: 600 }}>:: {projects.length} packages installed (explicit) ·{" "}
        </span>
        <span style={{ color: cat.peach }}>0 orphaned</span>
        <span style={{ color: cat.green }}> · </span>
        <span style={{ color: cat.mauve }}>last sync 2026-04-26</span>
      </Line>
    </div>
  );
}

function PacmanRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const name = project.title.toLowerCase().replace(/\s+/g, "-");
  const v = `${project.year}.${String(index + 1).padStart(2, "0")}-1`;
  const size = project.metric ? project.metric.value : "—";
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="grid grid-cols-12 gap-x-3 hover:bg-black/20 -mx-1 px-1 rounded"
    >
      <span className="col-span-12 md:col-span-3" style={{ color: cat.green, fontWeight: 600 }}>
        {name}
      </span>
      <span className="col-span-6 md:col-span-2" style={{ color: cat.peach }}>{v}</span>
      <span className="col-span-6 md:col-span-2 tabular-nums" style={{ color: cat.yellow }}>{size}</span>
      <span className="col-span-12 md:col-span-5" style={{ color: cat.subtext1 }}>
        {project.blurb.split(".")[0]}.
      </span>
    </motion.div>
  );
}

function GitLogPane() {
  return (
    <div className="space-y-2">
      <Line>
        <span style={{ color: cat.green }}>{"❯"}</span>{" "}
        <span style={{ color: cat.text }}>git</span>{" "}
        <span style={{ color: cat.peach }}>log --graph --oneline --decorate</span>
      </Line>
      <div style={{ color: cat.surface2 }}>{"─".repeat(48)}</div>
      <ul className="space-y-3">
        {experience.map((role, i) => (
          <motion.li
            key={role.company}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="flex items-baseline gap-2">
              <span style={{ color: i === 0 ? cat.peach : cat.lavender, fontWeight: 700 }}>
                {i === 0 ? "* HEAD" : "*"}
              </span>
              <span style={{ color: cat.yellow }} className="tabular-nums">
                {shortHash(role.company)}
              </span>
              {i === 0 ? (
                <span style={{ color: cat.green, fontWeight: 600 }}>(HEAD ─&gt; main, origin/main)</span>
              ) : null}
              <span style={{ color: cat.text }}>
                {role.role.toLowerCase()} @ {role.company.toLowerCase()}
              </span>
            </div>
            <div className="ml-5 text-[12.5px]" style={{ color: cat.overlay1 }}>
              <span style={{ color: cat.peach }}>Author:</span> {profile.name} &lt;{profile.email}&gt;
            </div>
            <div className="ml-5 text-[12.5px]" style={{ color: cat.overlay1 }}>
              <span style={{ color: cat.peach }}>Date:</span> {role.start}–{role.end} ({role.location.toLowerCase()})
            </div>
            <div className="ml-5 mt-2 text-[13px]" style={{ color: cat.subtext0 }}>
              {role.summary}
            </div>
            <ul className="ml-5 mt-1.5 space-y-0.5">
              {role.highlights.slice(0, 2).map((h) => (
                <li key={h} className="text-[12.5px]" style={{ color: cat.text }}>
                  <span style={{ color: cat.green, fontWeight: 600 }}>+</span> {h}
                </li>
              ))}
            </ul>
            <div className="ml-5 mt-1.5 text-[11.5px]" style={{ color: cat.overlay0 }}>
              {role.stack.map((s) => `${s.toLowerCase()}`).join(" · ")}
            </div>
          </motion.li>
        ))}
      </ul>
      <div style={{ color: cat.surface2 }} className="mt-2">{"─".repeat(48)}</div>
      <Line>
        <span style={{ color: cat.overlay1 }}>{experience.length} commits, on branch </span>
        <span style={{ color: cat.green }}>main</span>
        <span style={{ color: cat.overlay1 }}> · </span>
        <span style={{ color: cat.peach }}>nothing to commit, working tree clean</span>
      </Line>
    </div>
  );
}

function BatPane() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 text-[11px]" style={{ color: cat.overlay1 }}>
        <span>
          <span style={{ color: cat.pink }}>───────┬</span>
          {"─".repeat(36)}
        </span>
        <span style={{ color: cat.pink }}>md</span>
      </div>
      <div className="flex items-center gap-2 mb-2 text-[12px]" style={{ color: cat.subtext0 }}>
        <span style={{ color: cat.pink }}>file:</span>
        <span style={{ color: cat.text }}>~/portfolio/testimonials.md</span>
      </div>
      <div className="space-y-3">
        {testimonials.map((t, i) => {
          const start = i * 6 + 1;
          return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-x-3"
            >
              <div className="col-span-1 text-right" style={{ color: cat.overlay0 }}>
                {String(start).padStart(3, "0")}
              </div>
              <div className="col-span-11" style={{ color: cat.subtext1 }}>
                <span style={{ color: cat.mauve, fontWeight: 600 }}>##</span>{" "}
                <span style={{ color: cat.text, fontWeight: 600 }}>review {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="col-span-1 text-right" style={{ color: cat.overlay0 }}>
                {String(start + 1).padStart(3, "0")}
              </div>
              <div className="col-span-11" style={{ color: cat.green }}>
                <span style={{ color: cat.peach }}>&gt;</span> &ldquo;{t.quote}&rdquo;
              </div>
              <div className="col-span-1 text-right" style={{ color: cat.overlay0 }}>
                {String(start + 2).padStart(3, "0")}
              </div>
              <div className="col-span-11" style={{ color: cat.subtext0 }}>
                <span style={{ color: cat.peach }}>&gt;</span>{" "}
                <span style={{ color: cat.lavender }}>—</span> {t.name},{" "}
                <em style={{ color: cat.yellow }}>{t.role}</em> @{" "}
                <span style={{ color: cat.teal }}>{t.org}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-3 text-[11px]" style={{ color: cat.overlay1 }}>
        <span style={{ color: cat.pink }}>───────┴</span>
        {"─".repeat(36)}
      </div>
    </div>
  );
}

function NvimPane() {
  const lines = [
    { n: 1, kind: "h1", text: "# whoami" },
    { n: 2, kind: "blank", text: "" },
    {
      n: 3,
      kind: "p",
      text: `${profile.name}. ${profile.role}, working from ${profile.location}.`,
    },
    {
      n: 4,
      kind: "p",
      text:
        "Designs and builds performant, opinionated software — from full-stack platforms to interfaces engineered for speed and clarity.",
    },
    { n: 5, kind: "blank", text: "" },
    { n: 6, kind: "h2", text: "## principles" },
    { n: 7, kind: "blank", text: "" },
    ...values.flatMap((v, i) => [
      { n: 8 + i * 3, kind: "li", text: `- **${v.k.toLowerCase()}** — ${v.v}` },
    ]),
  ] as const;

  return (
    <div>
      <div className="space-y-0.5">
        {lines.map((ln) => (
          <div key={ln.n} className="grid grid-cols-12 gap-x-3 text-[13px]">
            <span
              className="col-span-1 text-right"
              style={{ color: ln.kind === "blank" ? cat.surface1 : cat.overlay0 }}
            >
              {String(ln.n).padStart(3, " ")}
            </span>
            <span className="col-span-11">
              {ln.kind === "h1" ? (
                <span>
                  <span style={{ color: cat.peach }}>#</span>{" "}
                  <span style={{ color: cat.lavender, fontWeight: 700 }}>
                    {ln.text.replace("# ", "")}
                  </span>
                </span>
              ) : ln.kind === "h2" ? (
                <span>
                  <span style={{ color: cat.peach }}>##</span>{" "}
                  <span style={{ color: cat.mauve, fontWeight: 600 }}>
                    {ln.text.replace("## ", "")}
                  </span>
                </span>
              ) : ln.kind === "li" ? (
                <span style={{ color: cat.text }}>
                  <span style={{ color: cat.green, fontWeight: 600 }}>-</span>{" "}
                  {renderInlineMd(ln.text.replace(/^- /, ""))}
                </span>
              ) : ln.kind === "blank" ? (
                <span>&nbsp;</span>
              ) : (
                <span style={{ color: cat.subtext1 }}>{ln.text}</span>
              )}
            </span>
          </div>
        ))}
      </div>
      {/* vim status */}
      <div
        className="mt-3 -mx-4 -mb-4 px-3 py-1 flex items-center justify-between text-[11px] border-t"
        style={{
          borderColor: cat.surface0,
          background: cat.lavender,
          color: cat.crust,
        }}
      >
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded" style={{ background: cat.crust, color: cat.green, fontWeight: 700 }}>
            NORMAL
          </span>
          <span style={{ color: cat.crust, fontWeight: 600 }}>~/about.md</span>
          <span style={{ color: cat.crust, opacity: 0.65 }}>[md]</span>
        </div>
        <div className="flex items-center gap-3" style={{ color: cat.crust }}>
          <span>utf-8 · unix · md</span>
          <span>·</span>
          <span>{lines.length}L</span>
          <span>·</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}

function ManPane() {
  return (
    <div className="space-y-3 text-[13px]">
      <div style={{ color: cat.text }}>
        <span style={{ color: cat.teal, fontWeight: 700 }}>OUSSAMA-EDU(7)</span>
        <span style={{ color: cat.overlay1 }}>{"  "}Engineer&apos;s Manual{"  "}</span>
        <span style={{ color: cat.teal, fontWeight: 700 }}>OUSSAMA-EDU(7)</span>
      </div>
      <div>
        <div style={{ color: cat.peach, fontWeight: 700 }}>NAME</div>
        <div className="ml-4" style={{ color: cat.text }}>
          oussama-edu — chronological list of formative studies
        </div>
      </div>
      <div>
        <div style={{ color: cat.peach, fontWeight: 700 }}>SECTIONS</div>
        <div className="ml-4 space-y-3 mt-1">
          {education.map((e) => (
            <div key={e.institution}>
              <div>
                <span style={{ color: cat.green, fontWeight: 600 }}>{e.start}–{e.end}</span>{" "}
                <span style={{ color: cat.text, fontWeight: 600 }}>{e.institution.toLowerCase()}</span>
              </div>
              <div className="ml-4" style={{ color: cat.yellow }}>
                {e.degree.toLowerCase()}
              </div>
              <div className="ml-4 mt-1" style={{ color: cat.subtext1 }}>
                {e.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ color: cat.peach, fontWeight: 700 }}>SEE ALSO</div>
        <div className="ml-4" style={{ color: cat.text }}>
          <span style={{ color: cat.lavender }}>oussama(1)</span>,{" "}
          <span style={{ color: cat.lavender }}>oussama-projects(7)</span>,{" "}
          <span style={{ color: cat.lavender }}>oussama-experience(7)</span>
        </div>
      </div>
      <div className="text-[10.5px] pt-2 border-t flex items-center justify-between" style={{ borderColor: cat.surface0, color: cat.overlay1 }}>
        <span>OUSS-MMXXVI</span>
        <span>2026-04-26</span>
        <span>OUSSAMA-EDU(7)</span>
      </div>
    </div>
  );
}

function ShellPane() {
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [output, setOutput] = useState<Line[]>([
    { text: "Welcome to ouss@arch.", kind: "info" },
    { text: "type 'help' for available commands. ↑/↓ for history.", kind: "info" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);

  // auto-focus on mount and when clicking the area
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [output]);

  const append = useCallback((lines: Line[]) => {
    setOutput((prev) => [...prev, ...lines]);
  }, []);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      // echo prompt + input
      append([{ text: "PROMPT", kind: "cmd", color: raw }]);
      if (!cmd) return;
      const parts = cmd.split(/\s+/);
      const head = parts[0].toLowerCase();
      const args = parts.slice(1);
      switch (head) {
        case "help":
          append(helpText);
          break;
        case "whoami":
          append([
            { text: `${profile.name} — ${profile.role}`, kind: "out" },
            { text: `${profile.location}`, kind: "out" },
            { text: `<${profile.email}>`, kind: "info" },
          ]);
          break;
        case "pwd":
          append([{ text: "/home/ouss/portfolio", kind: "out" }]);
          break;
        case "ls":
          append([
            { text: "about.md  contact.md  projects/  experience.log  testimonials.md  studies.txt", kind: "out" },
          ]);
          break;
        case "cat": {
          if (!args.length) {
            append([{ text: "cat: missing operand · usage: cat <file>", kind: "err" }]);
            break;
          }
          const f = args[0].toLowerCase();
          if (f.startsWith("about")) {
            append([
              { text: "# whoami", kind: "info" },
              { text: profile.tagline, kind: "out" },
              { text: "", kind: "blank" },
              { text: "## principles", kind: "info" },
              ...values.map((v) => ({
                text: `- ${v.k.toLowerCase()}: ${v.v}`,
                kind: "out" as LineKind,
              })),
            ]);
          } else if (f.startsWith("contact")) {
            append([
              { text: `email     ${profile.email}`, kind: "out" },
              ...profile.social.map((s) => ({
                text: `${s.label.toLowerCase().padEnd(9)} ${s.handle}`,
                kind: "out" as LineKind,
              })),
            ]);
          } else if (f.startsWith("test")) {
            append(
              testimonials.flatMap((t, i) => [
                {
                  text: `## review ${String(i + 1).padStart(2, "0")}`,
                  kind: "info" as LineKind,
                },
                { text: `> "${t.quote}"`, kind: "out" as LineKind },
                {
                  text: `> — ${t.name}, ${t.role} @ ${t.org}`,
                  kind: "out" as LineKind,
                },
                { text: "", kind: "blank" as LineKind },
              ])
            );
          } else {
            append([{ text: `cat: ${args[0]}: No such file or directory`, kind: "err" }]);
          }
          break;
        }
        case "pacman": {
          if (args[0] === "-Q" || args[0] === "-Qe") {
            append(
              projects.map((p, i) => ({
                text: `${p.title.toLowerCase().replace(/\s+/g, "-").padEnd(18)} ${p.year}.${String(i + 1).padStart(2, "0")}-1`,
                kind: "out" as LineKind,
              }))
            );
          } else if (args[0] === "-Si") {
            const target = args[1]?.toLowerCase();
            const p = projects.find(
              (x) =>
                x.title.toLowerCase() === target ||
                x.title.toLowerCase().replace(/\s+/g, "-") === target
            );
            if (!p) {
              append([
                { text: `error: package '${target}' was not found`, kind: "err" },
              ]);
            } else {
              append([
                { text: `Repository      : community`, kind: "out" },
                { text: `Name            : ${p.title.toLowerCase().replace(/\s+/g, "-")}`, kind: "out" },
                { text: `Version         : ${p.year}.x-1`, kind: "out" },
                { text: `Description     : ${p.blurb}`, kind: "out" },
                { text: `Tags            : ${p.tags.join(", ")}`, kind: "out" },
                { text: `${p.metric ? `Stars/Users     : ${p.metric.value} (${p.metric.label})` : ""}`, kind: "out" },
              ]);
            }
          } else {
            append([{ text: "usage: pacman -Q | -Qe | -Si <package>", kind: "warn" }]);
          }
          break;
        }
        case "git": {
          if (args[0] === "log") {
            append([
              ...experience.flatMap((role, i) => [
                {
                  text: `* ${i === 0 ? "(HEAD -> main) " : ""}${shortHash(role.company)} — ${role.role.toLowerCase()} @ ${role.company.toLowerCase()}`,
                  kind: "out" as LineKind,
                },
                { text: `  ${role.start}–${role.end} · ${role.location}`, kind: "info" as LineKind },
              ]),
            ]);
          } else {
            append([{ text: "usage: git log", kind: "warn" }]);
          }
          break;
        }
        case "neofetch":
          append([
            { text: `${profile.handle.replace("@", "")}@arch`, kind: "info" },
            { text: "─".repeat(20), kind: "out" },
            { text: "OS: Arch Linux x86_64", kind: "out" },
            { text: "Kernel: 6.14.2-arch1-1", kind: "out" },
            { text: `Packages: ${projects.length} explicit`, kind: "out" },
            { text: "WM: Hyprland 0.41 · Catppuccin Mocha", kind: "out" },
            { text: "Shell: zsh 5.9 (starship)", kind: "out" },
            { text: `Memory: ${experience.length} jobs · ${projects.length} projects`, kind: "out" },
          ]);
          break;
        case "mail":
        case "email":
          append([
            { text: `opening mail client → mailto:${profile.email}`, kind: "info" },
          ]);
          if (typeof window !== "undefined") {
            window.location.href = `mailto:${profile.email}`;
          }
          break;
        case "date":
          append([{ text: new Date().toString(), kind: "out" }]);
          break;
        case "history":
          append(
            history.map((h, i) => ({
              text: `${String(i + 1).padStart(4, " ")}  ${h}`,
              kind: "out" as LineKind,
            }))
          );
          break;
        case "vim":
        case "vi":
          append([
            { text: "There's no escape.", kind: "err" },
            { text: ":q!", kind: "info" },
          ]);
          break;
        case "sudo":
          append([
            { text: `[sudo] password for ouss: `, kind: "warn" },
            { text: "Sorry, try again.", kind: "err" },
            { text: "Sorry, try again.", kind: "err" },
            { text: "sudo: 3 incorrect password attempts", kind: "err" },
          ]);
          break;
        case "rm":
          if (args[0] === "-rf" && args[1] === "/") {
            append([
              { text: "rm: cannot remove '/': Permission denied", kind: "err" },
              { text: "(nice try.)", kind: "info" },
            ]);
          } else {
            append([{ text: "rm: missing operand or path not found", kind: "err" }]);
          }
          break;
        case "clear":
          setOutput([]);
          break;
        case "exit":
          append([
            { text: "logout", kind: "info" },
            { text: "[connection closed.]", kind: "out" },
          ]);
          break;
        default:
          append([
            {
              text: `command not found: ${head}. type 'help' for available commands.`,
              kind: "err",
            },
          ]);
      }
      setHistory((h) => [...h, cmd]);
      setHIdx(-1);
    },
    [append, history]
  );

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = hIdx < 0 ? history.length - 1 : Math.max(0, hIdx - 1);
      setHIdx(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;
      const next = hIdx + 1;
      if (next >= history.length) {
        setHIdx(-1);
        setInput("");
      } else {
        setHIdx(next);
        setInput(history[next]);
      }
    }
  };

  return (
    <div onClick={() => inputRef.current?.focus()}>
      <div
        ref={outputRef}
        className="max-h-[260px] overflow-y-auto pr-1"
        style={{ scrollbarWidth: "thin" }}
        aria-live="polite"
      >
        {output.map((ln, i) => (
          <ShellLine key={i} line={ln} />
        ))}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <PowerlinePrompt />
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          spellCheck={false}
          autoComplete="off"
          aria-label="shell input"
          className="flex-1 bg-transparent outline-none border-none caret-transparent"
          style={{ color: cat.text, fontFamily: "inherit" }}
        />
        <BlinkingCursor />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10.5px]">
        {["help", "whoami", "ls", "cat about", "neofetch", "git log", "mail", "vim", "clear"].map((c) => (
          <button
            key={c}
            onClick={() => {
              run(c);
              setInput("");
              inputRef.current?.focus();
            }}
            className="rounded px-2 py-1 transition-colors"
            style={{
              background: cat.surface0,
              color: cat.subtext0,
              minHeight: 28,
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function ShellLine({ line }: { line: Line }) {
  if (line.kind === "cmd") {
    // line.color holds the raw user command in this case
    return (
      <div className="flex items-baseline gap-2 mt-2">
        <PowerlinePrompt />
        <span style={{ color: cat.text }}>{line.color ?? line.text}</span>
      </div>
    );
  }
  const color =
    line.kind === "err"
      ? cat.red
      : line.kind === "warn"
      ? cat.yellow
      : line.kind === "info"
      ? cat.sky
      : line.kind === "blank"
      ? "transparent"
      : cat.text;
  return (
    <div className="whitespace-pre-wrap" style={{ color }}>
      {line.text || " "}
    </div>
  );
}

function PowerlinePrompt() {
  return (
    <span className="select-none whitespace-nowrap text-[12.5px]" aria-hidden>
      <span
        className="px-2 py-0.5"
        style={{ background: cat.green, color: cat.crust, fontWeight: 700 }}
      >
        ouss
      </span>
      <span style={{ color: cat.green, background: cat.surface0 }}>{""}</span>
      <span
        className="px-2 py-0.5"
        style={{ background: cat.surface0, color: cat.lavender }}
      >
        ~/portfolio
      </span>
      <span style={{ color: cat.surface0, background: "transparent" }}>{""}</span>
      <span style={{ color: cat.mauve, fontWeight: 700 }}> ❯</span>
    </span>
  );
}

function BlinkingCursor() {
  return (
    <span
      aria-hidden
      className="inline-block"
      style={{
        width: "0.6ch",
        height: "1.05em",
        background: cat.lavender,
        animation: "ouss-arch-blink 1s steps(1) infinite",
      }}
    >
      <style>{`
        @keyframes ouss-arch-blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </span>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return <div className="text-[13px]">{children}</div>;
}

function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(${cat.surface0} 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        backgroundPosition: "-1px -1px",
        opacity: 0.5,
      }}
    />
  );
}

// ────── helpers ──────

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

function formatClock(d: Date) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const mon = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"][d.getMonth()];
  return `${dd} ${mon} ${hh}:${mm}`;
}

function shortHash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h).toString(16).slice(0, 7).padEnd(7, "0");
}

function wsLabel(n: number): string {
  return ({
    1: "neofetch",
    2: "pkgs",
    3: "git",
    4: "reviews",
    5: "nvim",
    6: "shell",
  } as Record<number, string>)[n];
}

function renderInlineMd(s: string): React.ReactNode {
  const parts = s.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <span key={i} style={{ color: cat.peach, fontWeight: 700 }}>
          {p.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
}
