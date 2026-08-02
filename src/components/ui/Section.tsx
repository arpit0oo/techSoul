import type { HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  /** Tighter vertical spacing */
  compact?: boolean
}

/**
 * Section — semantic <section> wrapper with consistent vertical padding
 * following the 8px grid rhythm (stack-lg = 48px, compact = 24px).
 */
export function Section({ children, compact = false, className = '', ...props }: SectionProps) {
  return (
    <section
      className={[compact ? 'py-6' : 'py-12 md:py-20', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}
