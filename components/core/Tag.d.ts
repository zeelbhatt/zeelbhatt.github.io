import * as React from "react";

/**
 * A small monospace pill for skills, tech tags and metadata.
 * @startingPoint section="Core" subtitle="Monospace pill / skill chip" viewport="700x120"
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. */
  tone?: "neutral" | "accent";
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
