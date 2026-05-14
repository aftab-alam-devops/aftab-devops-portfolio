import { cn } from "@/lib/utils"

/**
 * Unique mark for Aftab Alam.
 * - Hexagonal "container/pod" frame nodding to Docker + Kubernetes
 * - Stacked "A.A" monogram cut by a terminal prompt slash
 * - A small status dot at the bottom-right corner (CI green light)
 * - Animated rotating outer ring on hover for interactivity
 */
export function Logo({
  className,
  size = 36,
  showRing = true,
}: {
  className?: string
  size?: number
  showRing?: boolean
}) {
  return (
    <span
      className={cn("relative inline-flex items-center justify-center group", className)}
      style={{ width: size, height: size }}
      aria-label="Aftab Alam logo"
    >
      {showRing && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-xl ring-1 ring-primary/30 animate-pulse-ring"
        />
      )}
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="relative drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aa-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.85 0.18 195)" />
            <stop offset="55%" stopColor="oklch(0.78 0.16 185)" />
            <stop offset="100%" stopColor="oklch(0.82 0.18 155)" />
          </linearGradient>
          <linearGradient id="aa-fill" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.85 0.18 195 / 0.18)" />
            <stop offset="100%" stopColor="oklch(0.82 0.18 155 / 0.05)" />
          </linearGradient>
        </defs>

        {/* Hexagonal container frame (Kubernetes / Docker nod) */}
        <path
          d="M32 4 L56 18 L56 46 L32 60 L8 46 L8 18 Z"
          stroke="url(#aa-grad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="url(#aa-fill)"
        />

        {/* Inner subtle hex */}
        <path
          d="M32 12 L49 22 L49 42 L32 52 L15 42 L15 22 Z"
          stroke="oklch(0.85 0.18 195 / 0.25)"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Terminal prompt chevron in top-left */}
        <path
          d="M18 24 L23 28 L18 32"
          stroke="oklch(0.85 0.18 195)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="25.5"
          y1="32.5"
          x2="31"
          y2="32.5"
          stroke="oklch(0.85 0.18 195)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Stylized "A" monogram on the right */}
        <path
          d="M34 44 L41 22 L48 44 M36.5 37 L45.5 37"
          stroke="oklch(0.82 0.18 155)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Status dot — CI green light */}
        <circle cx="50" cy="48" r="2.4" fill="oklch(0.82 0.18 155)">
          <animate attributeName="opacity" values="1;0.35;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </span>
  )
}
