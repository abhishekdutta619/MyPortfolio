import type { Metadata } from "next";
import { display, body, mono } from "@/lib/fonts";
import { profile } from "@/lib/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.subhead,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
