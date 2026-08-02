import { useState, type ButtonHTMLAttributes, type ReactNode, type MouseEvent } from 'react'

interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onToggle'> {
  children: ReactNode
  /** Controlled active state — pair with onToggle for controlled mode */
  active?: boolean
  /** Called when chip is toggled */
  onToggle?: (nextActive: boolean) => void
  /** Initial active state for uncontrolled mode */
  defaultActive?: boolean
  leftIcon?: ReactNode
}

/**
 * Chip — interactive selectable tag for filter controls and wizard priority
 * selectors. Supports both controlled (`active` + `onToggle`) and
 * uncontrolled (`defaultActive`) modes.
 */
export function Chip({
  children,
  active: controlledActive,
  onToggle,
  defaultActive = false,
  leftIcon,
  className = '',
  onClick,
  ...props
}: ChipProps) {
  const [uncontrolledActive, setUncontrolledActive] = useState(defaultActive)

  const isControlled = controlledActive !== undefined
  const isActive = isControlled ? controlledActive : uncontrolledActive

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isControlled) {
      setUncontrolledActive((prev) => !prev)
    }
    onToggle?.(!isActive)
    onClick?.(e)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      // aria-pressed announces toggle state to screen readers
      aria-pressed={isActive}
      className={[
        'inline-flex items-center gap-2',
        'px-4 py-2 rounded-xl',
        'text-sm font-medium',
        'font-[family-name:var(--font-label)]',
        'border transition-all duration-200 ease-in-out',
        'cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/50 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0D1117]',
        isActive
          ? [
              'bg-[#7C3AED]/20 border-[#7C3AED]',
              'text-[#d2bbff]',
              'shadow-[0_0_15px_rgba(124,58,237,0.35)]',
            ].join(' ')
          : 'bg-transparent border-white/10 text-[#ccc3d8] hover:border-white/20 hover:bg-white/5',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {leftIcon && (
        <span className="shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
    </button>
  )
}
