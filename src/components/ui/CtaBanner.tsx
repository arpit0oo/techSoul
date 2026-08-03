import type { ReactNode } from 'react'
import { Container } from './Container'
import { Button } from './Button'

export interface CtaBannerProps {
  title: ReactNode
  description: ReactNode
  buttonText: string
  buttonHref?: string
  onButtonClick?: () => void
  footnoteIcon?: string
  footnoteText?: string
  className?: string
}

/**
 * CtaBanner — High-impact bottom CTA conversion panel.
 * Used across Software, Careers, Blueprints, Compare, and Resources pages.
 */
export function CtaBanner({
  title,
  description,
  buttonText,
  onButtonClick,
  footnoteIcon = 'lock',
  footnoteText,
  className = '',
}: CtaBannerProps) {
  return (
    <Container className={className}>
      <div className="relative bg-[#2c2833] rounded-[48px] p-12 text-center overflow-hidden border border-white/10">
        {/* Ambient glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#4cd7f6]/10 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#e8dfee] font-[family-name:var(--font-display)]">
            {title}
          </h2>
          <p className="text-lg text-[#ccc3d8] mb-10 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
          <Button
            size="lg"
            variant="primary"
            className="px-12 py-5 text-lg font-bold shadow-2xl mb-6"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
          {footnoteText && (
            <div className="flex items-center justify-center gap-2 text-[#958da1] text-xs font-[family-name:var(--font-mono)]">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                {footnoteIcon}
              </span>
              {footnoteText}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
