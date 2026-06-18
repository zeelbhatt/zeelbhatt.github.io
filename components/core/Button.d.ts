import * as React from "react";

/**
 * The primary action element. Blue (primary), bordered (secondary) or quiet (ghost).
 * @startingPoint section="Core" subtitle="Action button — 3 variants, 3 sizes" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. */
  variant?: "primary" | "secondary" | "ghost";
  /** Control size / padding. */
  size?: "sm" | "md" | "lg";
  /** Render as a different element, e.g. "a" for links. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
