type Props = { className?: string; compact?: boolean };

/**
 * ONYX wordmark. The "O" is rendered as a gleaming ring — the halo of light
 * raking across a freshly-coated surface, in brand green.
 */
export default function Logo({ className, compact = false }: Props) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        letterSpacing: "-0.03em",
        fontSize: "1.35rem",
        lineHeight: 1,
      }}
      aria-label="Onyx Mobile Detailing"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <circle cx="12" cy="12" r="9" stroke="var(--line-strong)" strokeWidth="2" />
        <path
          d="M12 3a9 9 0 0 1 6.36 15.36"
          stroke="var(--brand)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span>
        Onyx
        {!compact && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              color: "var(--muted)",
              marginLeft: "0.5rem",
              fontWeight: 500,
              verticalAlign: "0.18em",
            }}
          >
            MOBILE&nbsp;DETAIL
          </span>
        )}
      </span>
    </span>
  );
}
