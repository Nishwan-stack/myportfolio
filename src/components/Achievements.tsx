"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";
import { achievements } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader eyebrow="By the Numbers" title="Achievements" />

        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass glow-border rounded-2xl p-6 text-center"
              >
                <span className="gradient-text">
                  <Counter value={a.value} suffix={a.suffix} />
                </span>
                <p className="mt-2 text-sm text-muted">{a.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
