"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Code2, Send, CheckCircle2 } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import { Reveal, SectionHeader } from "./Reveal";
import { profile } from "@/lib/data";

// Replace with your real Formspree endpoint: https://formspree.io/f/xxxxxxx
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeyoqde";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const details = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: profile.location, href: undefined },
    { icon: Github, label: "GitHub", href: profile.social.github },
    { icon: Linkedin, label: "LinkedIn", href: profile.social.linkedin },
    { icon: Code2, label: "LeetCode", href: profile.social.leetcode },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Let's Talk"
          title="Get in touch"
          description="Hiring, collaborating, or just want to talk about an idea — the form goes straight to my inbox."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass glow-border h-full rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">Contact details</h3>
              <ul className="mt-5 space-y-4">
                {details.map((d) => (
                  <li key={d.label} className="flex items-center gap-3 text-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
                      <d.icon size={15} className="text-[var(--accent-cyan)]" />
                    </span>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="focus-ring text-muted hover:text-[var(--text-primary)]"
                      >
                        {d.label}
                      </a>
                    ) : (
                      <span className="text-muted">{d.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass glow-border rounded-2xl p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: true })}
                    className="focus-ring w-full rounded-lg border border-[var(--border)] bg-surface px-3.5 py-2.5 text-sm outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">Name is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    className="focus-ring w-full rounded-lg border border-[var(--border)] bg-surface px-3.5 py-2.5 text-sm outline-none"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">Email is required</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-xs text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject", { required: true })}
                  className="focus-ring w-full rounded-lg border border-[var(--border)] bg-surface px-3.5 py-2.5 text-sm outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: true })}
                  className="focus-ring w-full resize-none rounded-lg border border-[var(--border)] bg-surface px-3.5 py-2.5 text-sm outline-none"
                  placeholder="Tell me a bit about it..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 size={16} /> Message sent successfully
                  </>
                ) : (
                  <>
                    <Send size={16} /> {isSubmitting ? "Sending..." : "Send message"}
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="mt-3 text-xs text-red-400">
                  Something went wrong — email me directly at {profile.email}.
                </p>
              )}
              
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
