import type { ReactNode } from "react";

/**
 * Section — page-level wrapper with the standard chrome: id anchor for nav,
 * eyebrow label, gradient heading, optional subtitle, body. Server component
 * (no client motion); use <Reveal> inside the body for entry animations.
 */
interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  /** When true, removes the max-w clamp so the section can bleed full-width. */
  bleed?: boolean;
}

export function Section({ id, eyebrow, title, subtitle, children, bleed }: SectionProps) {
  return (
    <section id={id} className="relative z-10 py-24 sm:py-32">
      <div className={bleed ? "px-6 sm:px-10" : "mx-auto max-w-7xl px-6 sm:px-10"}>
        <div className="mb-10 sm:mb-14">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-gradient sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base text-[color:var(--color-muted-2)]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
