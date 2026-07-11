"use client";

import { Sparkles, Target, Brain, Lightbulb } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { profile } from "@/lib/data";

const points = [
  {
    icon: Target,
    title: "Career objective",
    text: "Land an engineering role at a product company where I can grow from writing features to owning systems.",
  },
  {
    icon: Brain,
    title: "AI & software engineering",
    text: "Drawn to the overlap between applied AI and solid software engineering — models are only useful once they ship.",
  },
  {
    icon: Lightbulb,
    title: "Problem-solving mindset",
    text: "I default to breaking a problem down before writing code, and I'd rather ship a correct, boring solution than a clever fragile one.",
  },
  {
    icon: Sparkles,
    title: "What drives me",
    text: "The moment a build finally works end-to-end — that feedback loop is why I keep building side projects outside coursework.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="About"
          title="A little about how I work"
          description={profile.summary}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass glow-border card-hover h-full rounded-2xl p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)]">
                  <p.icon size={18} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
