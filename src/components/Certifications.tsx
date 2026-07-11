"use client";

import { Award } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Credentials" title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <div className="glass glow-border card-hover flex h-full items-start gap-4 rounded-2xl p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)]">
                  <Award size={18} className="text-white" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
