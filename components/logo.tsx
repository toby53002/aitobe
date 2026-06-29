import { cn } from '@/lib/utils'

/**
 * aiTOBE.cz wordmark as a transparent SVG (no background box).
 * "aiTOBE" uses currentColor so it adapts to dark or light surroundings,
 * the ".cz" stays in the warm gold accent.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 34"
      role="img"
      aria-label="aiTOBE.cz"
      className={cn('h-7 w-auto', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="25"
        className="fill-current"
        style={{
          fontFamily: 'var(--font-jakarta), sans-serif',
          fontSize: '26px',
          fontWeight: 800,
          letterSpacing: '-1px',
        }}
      >
        <tspan>aiTOBE</tspan>
        <tspan className="fill-accent">.cz</tspan>
      </text>
    </svg>
  )
}
