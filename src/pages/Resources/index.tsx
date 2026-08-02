/**
 * Resources Page
 * Route: /resources
 * Curated learning guides, cheat sheets, and video tutorials.
 *
 * TODO: Migrate from HTML prototype once component library is complete.
 */
import { Container } from '@/components'
import { Section } from '@/components'

export function ResourcesPage() {
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
            Resources
          </h1>

          <p className="text-[#ccc3d8] text-lg max-w-md leading-relaxed">
            Curated learning guides, cheat sheets, and video tutorials.
          </p>

          <div className="mt-4 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#d2bbff] text-sm font-[family-name:var(--font-mono)]">
            route: <code>/resources</code>
          </div>
        </div>
      </Container>
    </Section>
  )
}
