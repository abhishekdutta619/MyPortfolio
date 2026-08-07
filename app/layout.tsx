import type { Metadata } from "next";
import { display, body, mono } from "@/lib/fonts";
import { profile } from "@/lib/data/profile";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s — ${profile.brandName}`,
  },
  description: profile.subhead,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    siteName: `${profile.brandName}.`,
    title: `${profile.name} — ${profile.title}`,
    description: profile.subhead,
    images: [
      {
        url: `${profile.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.subhead,
    images: [`${profile.siteUrl}/og-image.png`],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: profile.siteUrl,
  email: profile.email,
  knowsAbout: [
    "Full-Stack Development",
    "UI Architecture",
    "React",
    "TypeScript",
    "Angular",
    "Node.js",
    "Next.js",
    "Performance Optimization",
    "Accessibility",
    "Cloud-Native Applications",
    "SaaS Platforms",
    "Enterprise Systems"
  ],
  sameAs: [profile.links.linkedin, profile.links.github].filter(
    (url) => !url.endsWith("/in/") && !url.endsWith(".com/") // skip unfilled placeholder links
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
