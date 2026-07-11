"use client";

import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa6";
import { Reveal, SectionHeader } from "./Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
          description="A mix of full-stack builds and applied-AI experiments — each taken from idea to a working, demoable product."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <article className="glass glow-border card-hover flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--accent-violet)]/20 to-[var(--accent-cyan)]/20">
                  <span className="font-display text-3xl font-semibold text-muted/40">
                    {p.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 3)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0 text-[var(--accent-cyan)]"
                        />
                        <span className="text-muted">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={p.liveUrl}
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                    <a
                      href={p.githubUrl}
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium transition-transform hover:scale-[1.03]"
                    >
                      <Github size={13} /> Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
