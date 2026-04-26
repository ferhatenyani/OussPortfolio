"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  kicker,
}: {
  index: string;
  label: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-6 mb-14 md:mb-20">
      <div className="col-span-12 md:col-span-3">
        <div className="font-mono text-[11px] tracking-[0.18em] text-[color:var(--fg-faint)] uppercase flex items-center gap-3">
          <span className="text-[color:var(--accent)]">{index}</span>
          <span className="h-px w-8 bg-[color:var(--line-strong)]" />
          <span>{label}</span>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 mt-4 md:mt-0">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] font-medium tracking-[-0.02em] leading-[1.05] text-[color:var(--fg)]">
            {title}
          </h2>
        </Reveal>
        {kicker ? (
          <Reveal delay={0.05}>
            <p className="mt-4 text-[color:var(--fg-muted)] text-base md:text-lg max-w-2xl leading-relaxed">
              {kicker}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-soft)] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[color:var(--fg-muted)]">
      {children}
    </span>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-[color:var(--line)] ${className}`} />;
}
