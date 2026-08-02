import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Remove horizontal padding for full-bleed sections */
  flush?: boolean
}

/**
 * Container — constrains content to the design system's max width (1280px)
 * and applies consistent horizontal padding (mobile: 20px, desktop: 64px).
 */
export function Container({ children, flush = false, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={[
        'w-full mx-auto',
        'max-w-[80rem]',
        !flush && 'px-5 md:px-16',
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
