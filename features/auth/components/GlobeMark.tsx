export default function GlobeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="auth-globe" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#ffb066" />
          <stop offset="0.55" stopColor="#ec7013" />
          <stop offset="1" stopColor="#8a3d08" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="20" fill="url(#auth-globe)" />
      <g fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1">
        <ellipse cx="32" cy="32" rx="9" ry="20" />
        <path d="M12 32h40M15 22h34M15 42h34" />
      </g>
      <ellipse
        cx="32"
        cy="38"
        rx="29"
        ry="9"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.85"
        strokeWidth="2.5"
        transform="rotate(-18 32 32)"
      />
    </svg>
  );
}