"use client";

import { Rocket } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { hackathons } from "@/lib/data";

export function Hackathons() {
  return (
    <section id="hackathons" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Under Pressure"
          title="Hackathons"
          description="Fixed timelines, ambiguous problems, and a working demo at the end — here's where I've stress-tested that."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {hackathons.map((h, i) => (
            <Reveal key={h.id} delay={i * 0.1}>
              <div className="glass glow-border card-hover flex h-full flex-col rounded-2xl p-6">
                <Rocket size={20} className="text-[var(--accent-cyan)]" />
                <h3 className="font-display mt-4 text-lg font-semibold">
                  {h.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {h.detail}
                </p>
                <span className="mt-4 inline-block w-fit rounded-full bg-surface px-3 py-1 font-mono text-[11px]">
                  {h.outcome}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
