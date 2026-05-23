import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// next/font self-hosts fonts at build time — no external request at runtime,
// no CLS, automatic subsetting. Required for GitHub Pages (offline-friendly).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anmol-pawa.github.io"),
  title: "Anmol Pawa — DBA → SDE / SWE",
  description:
    "Database Administrator at Texas Instruments (~2.5 years) transitioning to SDE / SWE roles at FAANG & top-tier startups in 2026. Strong systems thinking, building production-grade software portfolio.",
  keywords: [
    "Anmol Pawa",
    "Software Engineer",
    "Database Administrator",
    "FAANG",
    "Texas Instruments",
    "PostgreSQL",
    "Oracle",
    "Backend Engineer",
    "Bengaluru",
  ],
  openGraph: {
    title: "Anmol Pawa — DBA → SDE / SWE",
    description:
      "Database engineer at TI building a portfolio of production-grade systems to transition into SDE/SWE roles at FAANG & startups.",
    url: "https://anmol-pawa.github.io",
    siteName: "Anmol Pawa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmol Pawa — DBA → SDE / SWE",
    description: "Database engineer at TI, building toward FAANG SDE/SWE in 2026.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
