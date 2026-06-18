import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** stagger index → animation delay */
  i?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-reveal wrapper. The element is fully visible by default — with no JS,
 * under prefers-reduced-motion, or for crawlers. RevealInit (client) adds the
 * `js` class to <html> and toggles `.is-in` via IntersectionObserver, at which
 * point globals.css hides-then-animates it. Motion is a pure enhancement.
 */
export default function Reveal({ children, i = 0, as, className }: Props) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={className}
      data-reveal=""
      style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
    >
      {children}
    </Tag>
  );
}
