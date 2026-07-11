"use client";

import { Code2, Target, Flame } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { leetcodeUsername } from "@/lib/data";

const stats = [
  { icon: Target, label: "Focus", value: "Arrays, DP, Graphs" },
  { icon: Flame, label: "Practicing", value: "Daily problem streaks" },
  { icon: Code2, label: "Journey", value: "Building DSA fundamentals" },
];

export function LeetCodeStats() {
  return (
    <section id="leetcode" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Problem Solving"
          title="LeetCode"
          description="DSA is the part of the craft I practice deliberately — here's where that shows up."
        />

        <Reveal>
          <div className="glass glow-border rounded-2xl p-8 text-center">
            <a
              href={`https://leetcode.com/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 font-display text-lg font-semibold hover:text-[var(--accent-cyan)]"
            >
              <Code2 size={18} /> @{leetcodeUsername}
            </a>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-surface p-5">
                  <s.icon
                    size={18}
                    className="mx-auto text-[var(--accent-violet)]"
                  />
                  <p className="mt-3 font-mono text-xs uppercase tracking-wide text-muted">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm">{s.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted">
              Connect a live LeetCode stats widget (e.g. leetcard.jacoblin.cool)
              once the handle above is live.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
