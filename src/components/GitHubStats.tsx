"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaGithub as Github } from "react-icons/fa6";
import { Reveal, SectionHeader } from "./Reveal";
import { githubUsername, profile } from "@/lib/data";

export function GitHubStats() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const themeParam = mounted && theme === "light" ? "default" : "radical";

  const cards = [
    `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${themeParam}&hide_border=true&bg_color=00000000`,
    `https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${themeParam}&hide_border=true&background=00000000`,
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${themeParam}&hide_border=true&bg_color=00000000`,
  ];

  return (
    <section id="github" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Activity"
          title="GitHub"
          description="Contribution graph, streaks, and language spread — pulled live from GitHub."
        />

        <Reveal>
          <div className="glass glow-border rounded-2xl p-6 text-center">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-[var(--text-primary)]"
            >
              <Github size={16} /> @{githubUsername}
            </a>
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt="GitHub stats card"
                  loading="lazy"
                  className="w-full rounded-xl"
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted">
              Swap {profile.social.github} in{" "}
              <code className="font-mono">lib/data.ts</code> once the real
              GitHub handle is live.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
