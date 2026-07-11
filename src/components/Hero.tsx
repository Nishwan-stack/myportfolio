"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Code2 } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import { NeuralField } from "./NeuralField";
import { TypingText } from "./TypingText";
import { profile } from "@/lib/data";
import Image from "next/image";
import { DiVisualstudio } from "react-icons/di";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0">
        <NeuralField />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, var(--glow), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs section-eyebrow"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-cyan)]" />
          Open to SDE &amp; AI internship / new-grad roles
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-5 h-8 text-lg text-muted sm:text-xl"
        >
          <TypingText words={profile.roles} />
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={profile.resumeUrl}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="focus-ring glow-border glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} /> Get in Touch
          </a>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 flex items-center gap-4"
        >
          {[
            { href: profile.social.github, icon: Github, label: "GitHub" },
            { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full glass card-hover text-muted transition-colors hover:text-[var(--text-primary)]"
            >
              <Icon size={17} strokeWidth={1.75} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
