"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Logo from "@/components/shared/Logo";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-sm font-medium tracking-wide text-text hover:text-accent-teal transition-colors"
        >
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-accent-teal/40 px-4 py-2 text-sm font-medium text-accent-teal hover:bg-accent-teal hover:text-bg transition-colors"
        >
          Let&apos;s talk
        </a>

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
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-text-muted hover:text-text transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 py-3 text-sm font-medium text-accent-teal"
            >
              Let&apos;s talk →
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
