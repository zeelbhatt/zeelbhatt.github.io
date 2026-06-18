/* @ds-bundle: {"format":3,"namespace":"ZeelBhattPortfolioDesignSystem_cb7009","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"51b2542df990","components/core/Card.jsx":"74034dd163d4","components/core/Tag.jsx":"53ca18a4c802"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZeelBhattPortfolioDesignSystem_cb7009 = window.ZeelBhattPortfolioDesignSystem_cb7009 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action element for the portfolio system.
 * Variants map to the theme's link blue (primary), bordered neutral
 * (secondary) and quiet text (ghost). Styling is driven entirely by
 * design-system CSS custom properties.
 */
function Button({
  variant = "primary",
  size = "md",
  as = "button",
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "6px 14px",
      fontSize: "var(--fs-caption)"
    },
    md: {
      padding: "10px 20px",
      fontSize: "var(--fs-small)"
    },
    lg: {
      padding: "14px 26px",
      fontSize: "var(--fs-body)"
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--accent)"
    },
    secondary: {
      background: "var(--bg-card)",
      color: "var(--text-display)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid transparent"
    }
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
    transition: "background var(--dur-fast) var(--ease-std), color var(--dur-fast) var(--ease-std), border-color var(--dur-fast) var(--ease-std), transform var(--dur-fast) var(--ease-std)",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a bordered, rounded surface with an optional cover image,
 * title, tag line and body. Lifts gently on hover. Used for the
 * project grid and link cards across the portfolio.
 */
function Card({
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
  return /*#__PURE__*/React.createElement(Root, _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      textDecoration: "none",
      color: "inherit",
      boxShadow: "var(--shadow-xs)",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      aspectRatio: "16 / 10",
      objectFit: "cover",
      background: "var(--bg-card-subtle)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-5) var(--space-5)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-small)",
      marginBottom: meta || children ? "4px" : 0
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--text-muted)"
    }
  }, meta), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-body)",
      marginTop: "8px"
    }
  }, children)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small monospace pill used for skills, tech stacks and metadata.
 * Mirrors the skill chips on the portfolio rail.
 */
function Tag({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--bg-card-subtle)",
      color: "var(--text-subhead)",
      border: "1px solid var(--border)"
    },
    accent: {
      background: "var(--accent-tint)",
      color: "var(--accent-strong)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

})();
