"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Logo from "@/components/shared/Logo";
import ContactPopup from "@/components/shared/ContactPopup";

// Root-prefixed ("/#about") rather than bare ("#about") on purpose -- these
// links need to work correctly from /blog and /blog/[slug] too, not just
// from the homepage. A bare "#about" from /blog just appends the hash to
// the current URL instead of navigating home.
const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#projects" },
  { label: "Writing", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);
  const talkBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/#top"
          className="text-sm font-medium text-text hover:text-accent-teal transition-colors"
        >
          <Logo full />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={talkBtnRef}
          type="button"
          onClick={() => setTalkOpen(true)}
          className="hidden md:inline-flex items-center rounded-full border border-accent-teal/40 px-4 py-2 text-sm font-medium text-accent-teal hover:bg-accent-teal hover:text-bg transition-colors"
        >
          Let&apos;s talk
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden text-text p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav className="md:hidden border-t border-border bg-bg">
          <Container className="flex flex-col py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-text-muted hover:text-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTalkOpen(true);
              }}
              className="mt-2 py-3 text-sm font-medium text-accent-teal text-left"
            >
              Let&apos;s talk →
            </button>
          </Container>
        </nav>
      )}

      <ContactPopup open={talkOpen} onClose={() => setTalkOpen(false)} triggerRef={talkBtnRef} />
    </header>
  );
}
