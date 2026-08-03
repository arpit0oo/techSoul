import { Link } from 'react-router-dom'
import { GlassPanel } from './GlassPanel'

export interface ToolCardProps {
  name: string
  description: string
  logoUrl: string
  actionLabel?: string
  actionHref: string
  className?: string
}

/**
 * ToolCard — Glass surface card for software tools, alternatives, and recommendations.
 * Used across Software, Compare, Home, Careers, and Resources pages.
 */
export function ToolCard({
  name,
  description,
  logoUrl,
  actionLabel = 'Compare',
  actionHref,
  className = '',
}: ToolCardProps) {
  return (
    <GlassPanel className={`p-8 rounded-3xl border border-white/5 hover:border-[#4cd7f6] transition-all ${className}`}>
      <div className="w-16 h-16 bg-white/5 rounded-2xl p-3 mb-6">
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
        />
      </div>
      <h4 className="text-xl font-bold mb-2 text-[#e8dfee] font-[family-name:var(--font-display)]">
        {name}
      </h4>
      <p className="text-[#ccc3d8] text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <Link
        to={actionHref}
        className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 font-bold transition-all inline-flex items-center justify-center text-[#e8dfee] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
      >
        {actionLabel}
      </Link>
    </GlassPanel>
  )
}
