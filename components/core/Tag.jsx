import React from "react";

/**
 * Tag — a small monospace pill used for skills, tech stacks and metadata.
 * Mirrors the skill chips on the portfolio rail.
 */
export function Tag({ tone = "neutral", children, style, ...rest }) {
  const tones = {
    neutral: {
      background: "var(--bg-card-subtle)",
      color: "var(--text-subhead)",
      border: "1px solid var(--border)",
    },
    accent: {
      background: "var(--accent-tint)",
      color: "var(--accent-strong)",
      border: "1px solid transparent",
    },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-eyebrow)",
        lineHeight: 1.4,
        whiteSpace: "nowrap",
        padding: "4px 10px",
        borderRadius: "var(--radius-pill)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
