"use client";

import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeader eyebrow="Timeline" title="Education" />

        <div className="relative ml-4 border-l border-[var(--border)] pl-8">
          {education.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.1} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full glass-strong">
                <GraduationCap size={15} className="text-[var(--accent-cyan)]" />
              </span>
              <div className="glass glow-border card-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                {e.institution && (
                  <p className="mt-1 text-sm text-[var(--accent-violet)]">
                    {e.institution}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.detail}</p>
                <span className="mt-3 inline-block rounded-full bg-surface px-3 py-1 font-mono text-xs">
                  {e.meta}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
