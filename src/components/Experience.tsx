"use client";

import { Briefcase } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeader eyebrow="Timeline" title="Experience" />

        <div className="relative ml-4 border-l border-[var(--border)] pl-8">
          {experience.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.1} className="relative pb-2">
              <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full glass-strong">
                <Briefcase size={14} className="text-[var(--accent-violet)]" />
              </span>
              <div className="glass glow-border card-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--accent-cyan)]">{e.org}</p>
                <ul className="mt-4 space-y-1.5">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-violet)]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
