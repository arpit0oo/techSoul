import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Adds interactive hover + focus state. Sets role="button" and tabIndex for keyboard access. */
  interactive?: boolean
  /** Use glass morphism style instead of solid surface */
  glass?: boolean
}

/**
 * Card — Level 1 surface card with optional interactivity.
 * Software cards, comparison cards, and resource cards all use this base.
 *
 * When `interactive`, the card is keyboard-accessible and announces
 * itself as a button to screen readers via role="button".
 * Consumer must supply an onClick handler for meaningful interaction.
 */
export function Card({
  children,
  interactive = false,
  glass = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      className={[
        'rounded-2xl overflow-hidden',
        glass
          ? 'bg-[rgba(22,27,34,0.7)] backdrop-blur-xl border border-white/[0.08]'
          : 'bg-[#221e28] border border-white/[0.05]',
        interactive && [
          'transition-all duration-300 ease-in-out cursor-pointer',
          'hover:-translate-y-1 hover:scale-[1.02]',
          'hover:border-[#d2bbff]/30',
          'hover:shadow-[0_20px_40px_-20px_rgba(124,58,237,0.3)]',
          // Keyboard: same visual as hover
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]',
          'focus-visible:-translate-y-1 focus-visible:border-[#d2bbff]/30',
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
