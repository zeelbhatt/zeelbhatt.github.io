import React from "react";

/**
 * Button — the primary action element for the portfolio system.
 * Variants map to the theme's link blue (primary), bordered neutral
 * (secondary) and quiet text (ghost). Styling is driven entirely by
 * design-system CSS custom properties.
 */
export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "6px 14px", fontSize: "var(--fs-caption)" },
    md: { padding: "10px 20px", fontSize: "var(--fs-small)" },
    lg: { padding: "14px 26px", fontSize: "var(--fs-body)" },
  };

  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--accent)",
    },
    secondary: {
      background: "var(--bg-card)",
      color: "var(--text-display)",
      border: "1px solid var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid transparent",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    textDecoration: "none",
    transition:
      "background var(--dur-fast) var(--ease-std), color var(--dur-fast) var(--ease-std), border-color var(--dur-fast) var(--ease-std), transform var(--dur-fast) var(--ease-std)",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const Tag = as;
  return (
    <Tag style={base} {...rest}>
      {children}
    </Tag>
  );
}
