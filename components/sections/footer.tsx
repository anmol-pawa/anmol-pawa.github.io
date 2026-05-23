"use client";

import { PROFILE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-slate-500 md:flex-row">
        <div className="font-mono">
          © {new Date().getFullYear()} {PROFILE.name} · Built with Next.js 15 + Tailwind v4 + Framer Motion
        </div>
        <div className="font-mono">
          <span className="text-slate-600">deployed:</span> anmol-pawa.github.io
        </div>
      </div>
    </footer>
  );
}
