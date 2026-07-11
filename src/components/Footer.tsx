import { Code2, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <a href="#top" className="font-display text-lg font-semibold">
          <span className="gradient-text">Nishwan</span>
          <span className="text-muted">.dev</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring text-sm text-muted hover:text-[var(--text-primary)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { href: profile.social.github, icon: Github },
            { href: profile.social.linkedin, icon: Linkedin },
            { href: profile.social.leetcode, icon: Code2 },
            { href: `mailto:${profile.email}`, icon: Mail },
          ].map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full glass card-hover text-muted hover:text-[var(--text-primary)]"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind CSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
