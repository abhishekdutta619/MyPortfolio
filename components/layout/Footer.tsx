import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import Container from "./Container";
import { profile } from "@/lib/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-display text-sm text-text">
            {profile.name}
          </p>
          <p className="text-xs text-text-faint mt-1">
            {profile.title} · Building scalable, accessible UI systems.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            aria-label="GitHub"
            className="text-text-muted hover:text-accent-teal transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent-teal transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-text-muted hover:text-accent-teal transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.links.resumePdf}
            aria-label="Download résumé"
            className="flex items-center gap-1.5 text-text-muted hover:text-accent-teal transition-colors"
          >
            <FileDown size={18} />
            <span className="text-xs">Résumé</span>
          </a>
        </div>

        <p className="text-xs text-text-faint">
          © {year} {profile.name}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
