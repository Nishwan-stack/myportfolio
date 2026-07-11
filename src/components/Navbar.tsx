"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`glass-strong flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-300 ${
            scrolled ? "py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]" : "py-3"
          }`}
        >
          <a
            href="#top"
            className="focus-ring font-display text-lg font-semibold tracking-tight"
          >
            <span className="gradient-text">Nishwan</span>
            <span className="text-muted">.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-[var(--text-primary)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              download
              className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-lg px-3 py-2.5 text-sm text-muted hover:text-[var(--text-primary)]"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={profile.resumeUrl}
                  download
                  className="focus-ring mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2.5 text-sm font-medium text-[var(--bg)]"
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
