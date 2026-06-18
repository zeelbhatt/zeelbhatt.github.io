import * as React from "react";

/**
 * A bordered, rounded surface with optional cover image, title, meta and body.
 * @startingPoint section="Core" subtitle="Project / link card with cover image" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Cover image URL (16:10). */
  image?: string;
  imageAlt?: string;
  /** Card title. */
  title?: React.ReactNode;
  /** Monospace meta line (e.g. tech tags). */
  meta?: React.ReactNode;
  /** If set, the whole card becomes a link. */
  href?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
