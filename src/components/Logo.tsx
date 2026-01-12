export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#gradient)"
        strokeWidth="3"
        fill="none"
      />
      {/* Lightning bolt / Speed mark */}
      <path
        d="M55 20L35 50H48L42 80L65 45H50L55 20Z"
        fill="url(#gradient)"
      />
      {/* Speed lines */}
      <path
        d="M20 35L30 35"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 50L28 50"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 65L30 65"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b00" />
          <stop offset="100%" stopColor="#ff8533" />
        </linearGradient>
      </defs>
    </svg>
  );
}
