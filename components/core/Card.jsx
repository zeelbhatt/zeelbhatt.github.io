import React from "react";

/**
 * Card — a bordered, rounded surface with an optional cover image,
 * title, tag line and body. Lifts gently on hover. Used for the
 * project grid and link cards across the portfolio.
 */
export function Card({
  image,
  imageAlt = "",
  title,
  meta,
  href,
  children,
  style,
  ...rest
}) {
  const Root = href ? "a" : "div";
  return (
    <Root
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        boxShadow: "var(--shadow-xs)",
        ...style,
      }}
      {...rest}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt}
          style={{
            width: "100%",
            aspectRatio: "16 / 10",
            objectFit: "cover",
            background: "var(--bg-card-subtle)",
            display: "block",
          }}
        />
      )}
      <div style={{ padding: "var(--space-4) var(--space-5) var(--space-5)" }}>
        {title && (
          <div
            style={{
              color: "var(--text-display)",
              fontWeight: "var(--fw-semibold)",
              fontSize: "var(--fs-small)",
              marginBottom: meta || children ? "4px" : 0,
            }}
          >
            {title}
          </div>
        )}
        {meta && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            {meta}
          </div>
        )}
        {children && (
          <div
            style={{
              fontSize: "var(--fs-small)",
              color: "var(--text-body)",
              marginTop: "8px",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </Root>
  );
}
