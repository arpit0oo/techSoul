import type { HTMLAttributes, ReactNode } from 'react'
import type { BadgeVariant } from '@/types'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:   'bg-[#7C3AED]/10 text-[#d2bbff] border border-[#7C3AED]/20',
  secondary: 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20',
  tertiary:  'bg-[#ffb784]/10 text-[#ffb784] border border-[#ffb784]/20',
  error:     'bg-[#ffb4ab]/10 text-[#ffb4ab] border border-[#ffb4ab]/20',
  neutral:   'bg-white/5 text-[#ccc3d8] border border-white/10',
}

/**
 * Badge — small pill label for categories, scores, and status indicators.
 * Uses Geist mono font per DESIGN.md chip specification.
 */
export function Badge({ children, variant = 'primary', className = '', ...props }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        'px-2.5 py-0.5 rounded-full',
        'text-[0.6875rem] font-medium tracking-wide',
        'font-[family-name:var(--font-mono)]',
        'whitespace-nowrap',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}
