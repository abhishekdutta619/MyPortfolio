"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import MetricChip from "@/components/shared/MetricChip";
import PhotoFrame from "@/components/shared/HeroPhotoFrame";
import { profile, impactMetrics } from "@/lib/data/profile";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <div className="grid lg:grid-cols-[1.3fr_0.8fr] gap-12 lg:gap-10 items-center">
          <div>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest2 text-accent-teal mb-6"
            >
              {profile.title} — {profile.yearsExperience} Years
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-balance text-4xl md:text-6xl font-medium leading-[1.1] text-text"
            >
              {profile.tagline}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-6 text-base md:text-lg text-text-muted max-w-xl leading-relaxed"
            >
              {profile.subhead}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-accent-teal px-6 py-3 text-sm font-medium text-bg hover:bg-accent-tealDim transition-colors"
              >
                View selected work
              </a>
              <a
                href={profile.links.resumePdf}
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:border-accent-teal hover:text-accent-teal transition-colors"
              >
                Download résumé
              </a>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <PhotoFrame
              src="/images/headshot-hero.png"
              className="aspect-square w-full max-w-[320px] ml-auto"
              sizes="320px"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-16"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-text-faint mb-3">
            Career impact, measured
          </p>
          <div className="flex flex-wrap gap-2.5">
            {impactMetrics.map((m) => (
              <MetricChip key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
