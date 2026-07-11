"use client";

import { Code, Layers, Cpu, Plug, Smartphone } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { services } from "@/lib/data";

const icons = [Code, Layers, Cpu, Plug, Smartphone];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="What I Do" title="Services" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="glass glow-border card-hover h-full rounded-2xl p-6">
                  <Icon size={20} className="text-[var(--accent-cyan)]" />
                  <h3 className="font-display mt-4 text-base font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
