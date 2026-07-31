import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

// Display face -- carries the page's personality, used with restraint
export const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body face -- neutral, highly readable workhorse
export const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Utility face -- metric chips, code, timestamps, labels
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
