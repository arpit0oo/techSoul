import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { ButtonVariant, ButtonSize } from '@/types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
  fullWidth?: boolean
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-gradient-to-r from-[#7C3AED] to-[#4cd7f6]',
    'text-white font-semibold',
    'shadow-[0_0_30px_rgba(124,58,237,0.3)]',
    'hover:brightness-110 hover:scale-[1.02]',
    'active:scale-[0.98]',
  ].join(' '),

  secondary: [
    'bg-transparent border border-[#958da1]',
    'text-[#e8dfee] font-semibold',
    'hover:bg-white/5 hover:border-[#7C3AED]',
    'active:scale-[0.98]',
  ].join(' '),

  ghost: [
    'bg-transparent',
    'text-[#ccc3d8] font-medium',
    'hover:bg-white/5 hover:text-[#e8dfee]',
    'active:scale-[0.98]',
  ].join(' '),

  danger: [
    'bg-transparent border border-[#ffb4ab]',
    'text-[#ffb4ab] font-semibold',
    'hover:bg-[#ffb4ab]/10',
    'active:scale-[0.98]',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm rounded-lg gap-1.5',
  md: 'h-11 px-6 text-sm rounded-xl gap-2',
  lg: 'h-14 px-10 text-base rounded-full gap-3',
}

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  disabled,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      // Default to 'button' to prevent accidental form submission
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      aria-disabled={isDisabled}
      className={[
        'inline-flex items-center justify-center',
        'font-[family-name:var(--font-label)]',
        'transition-all duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
        'cursor-pointer select-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {/* Spinner replaces leftIcon slot when loading */}
      {isLoading ? (
        <span
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0"
          aria-hidden="true"
        />
      ) : (
        leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="shrink-0" aria-hidden="true">{rightIcon}</span>
      )}
    </button>
  )
}
