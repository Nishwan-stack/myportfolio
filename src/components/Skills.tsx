"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Toolbox"
          title="Skills"
          description="What I reach for day to day, roughly ordered by how deep the practice runs."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.06}>
              <div className="glass glow-border card-hover h-full rounded-2xl p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-[var(--accent-cyan)]">
                  {group.label}
                </h3>
                <div className="mt-5 space-y-4">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span>{s.name}</span>
                        <span className="font-mono text-xs text-muted">
                          {s.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-cyan)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
