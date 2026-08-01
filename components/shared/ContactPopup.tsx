"use client";

// Note on what this actually does: this is a UX/decluttering pattern, not a
// real privacy mechanism. Everything rendered here still ships in the page's
// HTML/JS bundle -- it's exactly as visible to page-source viewers or
// scrapers as it would be printed directly in the Contact section. What it
// genuinely buys is a cleaner main page and a little friction against
// casual/automated scraping, not real exposure control.

import { useEffect, useRef, RefObject } from "react";
import { X, Mail, Phone, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data/profile";

export default function ContactPopup({
  open,
  onClose,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  triggerRef?: RefObject<HTMLElement | null>;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      (triggerRef?.current ?? previouslyFocused)?.focus();
    };
  }, [open, onClose, triggerRef]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-xl border border-border bg-surface p-6 outline-none shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors"
        >
          <X size={18} />
        </button>

        <h2 id="contact-popup-title" className="font-display text-lg text-text mb-1">
          Get in touch
        </h2>
        <p className="text-sm text-text-muted mb-5">Direct lines — no form needed.</p>

        <div className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm text-text hover:text-accent-teal transition-colors"
          >
            <Mail size={16} className="text-accent-teal shrink-0" />
            {profile.email}
          </a>

          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 text-sm text-text hover:text-accent-teal transition-colors"
            >
              <Phone size={16} className="text-accent-teal shrink-0" />
              {profile.phone}
            </a>
          )}

          <a
            href={profile.links.linkedin}
            className="flex items-center gap-3 text-sm text-text hover:text-accent-teal transition-colors"
          >
            <Linkedin size={16} className="text-accent-teal shrink-0" />
            LinkedIn
          </a>

          <a
            href={profile.links.github}
            className="flex items-center gap-3 text-sm text-text hover:text-accent-teal transition-colors"
          >
            <Github size={16} className="text-accent-teal shrink-0" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
