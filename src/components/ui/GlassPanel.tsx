import type { HTMLAttributes, ReactNode } from 'react'

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Adds a violet primary glow on hover */
  hoverable?: boolean
  /** Removes the border */
  borderless?: boolean
  /** Fills background more opaquely for overlays */
  elevated?: boolean
}

/**
 * GlassPanel — glassmorphic surface card using the Level 2 elevation
 * system from DESIGN.md: backdrop-blur, semi-transparent fill, subtle border.
 */
export function GlassPanel({
  children,
  hoverable = false,
  borderless = false,
  elevated = false,
  className = '',
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={[
        'rounded-2xl',
        elevated
          ? 'bg-[rgba(22,27,34,0.9)] backdrop-blur-2xl'
          : 'bg-[rgba(22,27,34,0.7)] backdrop-blur-xl',
        !borderless && 'border border-white/[0.08]',
        hoverable && [
          'transition-all duration-300 ease-in-out',
          'cursor-pointer',
          'hover:-translate-y-1 hover:scale-[1.01]',
          'hover:border-[#7C3AED]/40',
          'hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]',
        ].join(' '),
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
