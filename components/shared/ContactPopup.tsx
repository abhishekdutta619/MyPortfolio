"use client";

// Note on what this actually does: this is a UX/decluttering + branding
// pattern, not a real privacy mechanism. Everything rendered here still
// ships in the page's HTML/JS bundle -- it's exactly as visible to
// page-source viewers or scrapers as it would be printed directly in the
// Contact section. What it genuinely buys is a cleaner main page and a
// memorable, on-brand interaction.

import { useEffect, useRef, RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data/profile";

function formatPhone(phone: string): string {
  const match = phone.match(/^\+91(\d{5})(\d{5})$/);
  return match ? `+91 ${match[1]} ${match[2]}` : phone;
}

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
  const reduceMotion = useReducedMotion();

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[8vh] pb-8 overflow-y-auto"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

          {/* The phone-frame treatment: drops down from off-screen on open. */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            initial={reduceMotion ? { opacity: 0 } : { y: "-120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: "-120%", opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0.15 }
                : { type: "spring", damping: 22, stiffness: 220 }
            }
            className="relative w-full max-w-[360px] outline-none"
          >
            {/* Phone bezel */}
            <div className="relative bg-[#111318] rounded-[44px] p-3.5 border-2 border-[#2a2d35] shadow-2xl">
              <div className="absolute right-[-2px] top-[110px] w-[3px] h-14 bg-[#2a2d35] rounded-r" />
              <div className="absolute left-[-2px] top-[92px] w-[3px] h-9 bg-[#2a2d35] rounded-l" />
              <div className="absolute left-[-2px] top-[136px] w-[3px] h-9 bg-[#2a2d35] rounded-l" />

              {/* Screen -- fixed height now (~2x previous), so the frame reads
                  as an actual phone silhouette (~1:2 width:height) rather
                  than a card with a notch. Content is vertically centered in
                  the space between the notch and the home indicator instead
                  of just sitting at the top with empty space below. */}
              <div className="relative bg-bg rounded-[32px] overflow-hidden h-[640px] px-5 pt-9 pb-6 flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#111318] rounded-b-2xl" />

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="flex-1 flex flex-col justify-center">
                  <h2
                    id="contact-popup-title"
                    className="font-display text-2xl text-text mb-2"
                  >
                    Get in touch
                  </h2>
                  <p className="text-base text-text-muted mb-5">
                    Direct lines — no form needed.
                  </p>

                  <div className="inline-flex items-start gap-2 self-start rounded-2xl border border-accent-teal/30 bg-accent-teal/10 px-3.5 py-2.5 mb-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-teal shrink-0 mt-1.5" />
                    <span className="text-xs text-accent-teal font-medium">
                      {profile.availability}
                    </span>
                  </div>

                  <div className="space-y-5">
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center gap-4 text-base text-text hover:text-accent-teal transition-colors"
                    >
                      <Mail size={20} className="text-accent-teal shrink-0" />
                      <span className="break-all">{profile.email}</span>
                    </a>

                    {profile.phone && (
                      <a
                        href={`tel:${profile.phone}`}
                        className="flex items-center gap-4 text-base text-text hover:text-accent-teal transition-colors"
                      >
                        <Phone size={20} className="text-accent-teal shrink-0" />
                        {formatPhone(profile.phone)}
                      </a>
                    )}

                    <a
                      href={profile.links.linkedin}
                      className="flex items-center gap-4 text-base text-text hover:text-accent-teal transition-colors"
                    >
                      <Linkedin size={20} className="text-accent-teal shrink-0" />
                      LinkedIn
                    </a>

                    <a
                      href={profile.links.github}
                      className="flex items-center gap-4 text-base text-text hover:text-accent-teal transition-colors"
                    >
                      <Github size={20} className="text-accent-teal shrink-0" />
                      GitHub
                    </a>

                    <div className="flex items-center gap-4 text-base text-text">
                      <MapPin size={20} className="text-accent-teal shrink-0" />
                      {profile.location}, {profile.country}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <div className="w-28 h-1 bg-border rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
