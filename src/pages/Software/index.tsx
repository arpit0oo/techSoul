/**
 * Software Page
 * Route: /software/:slug
 * Full software review including pricing, AI features, and alternatives.
 *
 * TODO: Migrate from HTML prototype once component library is complete.
 */
import { Container } from '@/components'
import { Section } from '@/components'

export function SoftwarePage() {
  return (
    <Section>
      <Container>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED] font-[family-name:var(--font-mono)]">
            Coming Soon
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#e8dfee] font-[family-name:var(--font-display)]">
            Software
          </h1>

          <p className="text-[#ccc3d8] text-lg max-w-md leading-relaxed">
            Full software review including pricing, AI features, and alternatives.
          </p>

          <div className="mt-4 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#d2bbff] text-sm font-[family-name:var(--font-mono)]">
            route: <code>/software/:slug</code>
          </div>
        </div>
      </Container>
    </Section>
  )
}
