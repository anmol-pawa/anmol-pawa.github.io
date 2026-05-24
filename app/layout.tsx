import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PROFILE } from "@/lib/content";
import "./globals.css";

/**
 * next/font self-hosts fonts at build time — no external request at runtime,
 * automatic subsetting, no CLS.
 */
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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://anmol-pawa.vercel.app");

const TITLE = "Anmol Pawa — Database Engineer → SDE / SWE";
const DESCRIPTION =
  "Database Administrator at Texas Instruments (~2.5 years) transitioning to SDE / SWE at FAANG and top-tier startups in 2026. Production PostgreSQL HA, six portfolio projects spanning RAG, agentic AI, serverless, microservices, and WebGL.";

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — Anmol Pawa" },
  description: DESCRIPTION,
  applicationName: "Anmol Pawa · Portfolio",
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  keywords: [
    "Anmol Pawa",
    "Software Engineer",
    "SDE",
    "SWE",
    "Database Administrator",
    "DBA",
    "PostgreSQL",
    "Oracle",
    "FAANG",
    "Texas Instruments",
    "Backend Engineer",
    "Bengaluru",
    "RAG",
    "Distributed Systems",
    "MCP",
    "A2A",
    "C++17",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Anmol Pawa",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

/**
 * JSON-LD: Person + WebSite. Helps Google's Knowledge Graph + recruiter
 * search-tools that scrape structured data. Kept inline so it ships with the
 * RSC payload (no client JS for SEO).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PROFILE.name,
      url: SITE_URL,
      email: `mailto:${PROFILE.email}`,
      jobTitle: "Database Engineer transitioning to Software Engineer",
      worksFor: { "@type": "Organization", name: "Texas Instruments" },
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
      sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.leetcode],
      knowsAbout: [
        "PostgreSQL", "Oracle", "Distributed Systems", "Microservices",
        "RAG", "Vector Search", "AWS", "Kubernetes", "C++17", "FastAPI", "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Anmol Pawa · Portfolio",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
