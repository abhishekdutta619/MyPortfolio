"use client";

import { useState, FormEvent } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { profile } from "@/lib/data/profile";

// Uses Web3Forms (https://web3forms.com) — a free service that emails form
// submissions to you with zero backend code. Sign up, grab your access key,
// and replace the placeholder below. Until then, submissions will fail
// gracefully and the user is shown the direct mailto: link instead.
const WEB3FORMS_ACCESS_KEY = "92576832-3e56-4c7a-a855-e2d70e151230";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const configured = WEB3FORMS_ACCESS_KEY.length > 0;
  
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      setStatus(result.success ? "success" : "error");
      if (result.success) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's build something reliable." />
            <p className="text-text-muted leading-relaxed mb-8 max-w-sm">
              {profile.availability} Reach out directly, or use the form.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-text-muted hover:text-accent-teal transition-colors"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.links.linkedin}
                className="flex items-center gap-3 text-sm text-text-muted hover:text-accent-teal transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={profile.links.github}
                className="flex items-center gap-3 text-sm text-text-muted hover:text-accent-teal transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <MapPin size={16} /> {profile.location}, {profile.country}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-text-muted mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent-teal transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-text-muted mb-1.5">
                  Phone <span className="text-text-faint">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent-teal transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs text-text-muted mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent-teal transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs text-text-muted mb-1.5">
                  Company <span className="text-text-faint">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent-teal transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-text-muted mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none focus:border-accent-teal transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || !configured}
              className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-6 py-3 text-sm font-medium text-bg hover:bg-accent-tealDim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>

            {!configured && (
              <p className="text-xs text-accent-amber">
                Form isn&apos;t wired up yet — add a Web3Forms access key in{" "}
                <code className="font-mono">components/contact/Contact.tsx</code>, or use
                the email link instead.
              </p>
            )}
            {status === "success" && (
              <p className="text-xs text-accent-teal">Message sent — thanks, I&apos;ll reply soon.</p>
            )}
            {status === "error" && (
              <p className="text-xs text-accent-amber">
                Something went wrong — please use the email link instead.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
