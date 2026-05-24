import type { ReactNode } from "react";

/**
 * MonoBlock — terminal-styled code block with optional macOS-style title bar.
 * Pass a fully-syntax-highlighted `children` (already styled via sql-* classes)
 * or plain text.
 */
interface MonoBlockProps {
  title?: string;
  children: ReactNode;
  /** Don't render the three traffic lights / title bar. */
  bare?: boolean;
  className?: string;
}

export function MonoBlock({ title, children, bare, className }: MonoBlockProps) {
  return (
    <div className={`terminal ${className ?? ""}`}>
      {!bare && (
        <div className="terminal-head">
          <span className="terminal-dot" style={{ background: "#ff5f57" }} />
          <span className="terminal-dot" style={{ background: "#febc2e" }} />
          <span className="terminal-dot" style={{ background: "#28c840" }} />
          {title && <span className="ml-3">{title}</span>}
        </div>
      )}
      <pre className="px-5 py-4 text-[0.78rem] leading-[1.65] text-[color:var(--color-text)] whitespace-pre-wrap break-words">
        {children}
      </pre>
    </div>
  );
}
