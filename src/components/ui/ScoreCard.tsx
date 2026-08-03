import { GlassPanel } from './GlassPanel'

export interface ScoreMetric {
  label: string
  score: number
  percentage: number
}

export interface ScoreCardProps {
  score: number
  label?: string
  metrics: ScoreMetric[]
  note?: string
  className?: string
}

/**
 * ScoreCard — Tech Soul overall rating score breakdown panel with progress bars.
 * Used across Software Detail, Compare, and Blueprint Result pages.
 */
export function ScoreCard({
  score,
  label = 'Tech Soul Score',
  metrics,
  note = 'Our score is based on practical testing, creator experience, community adoption, long-term value, and workflow efficiency.',
  className = '',
}: ScoreCardProps) {
  return (
    <GlassPanel className={`p-8 rounded-[32px] border border-white/10 text-center ${className}`}>
      <p className="text-[#ccc3d8] text-xs font-semibold uppercase tracking-widest mb-2 font-[family-name:var(--font-mono)]">
        {label}
      </p>
      <p className="text-7xl font-bold gradient-text mb-4 font-[family-name:var(--font-display)]">
        {score.toFixed(1)}
      </p>

      {/* Star Rating */}
      <div className="flex justify-center gap-1 mb-8" aria-label={`Rating: ${score} out of 10`}>
        {[1, 2, 3, 4].map((star) => (
          <span
            key={star}
            className="material-symbols-outlined text-[#7C3AED]"
            style={{ fontVariationSettings: '"FILL" 1' }}
            aria-hidden="true"
          >
            star
          </span>
        ))}
        <span className="material-symbols-outlined text-[#7C3AED]" aria-hidden="true">
          star_half
        </span>
      </div>

      {/* Breakdown Bars */}
      <div className="space-y-6 text-left">
        {metrics.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-2 text-xs font-medium font-[family-name:var(--font-mono)]">
              <span className="text-[#e8dfee]">{s.label}</span>
              <span className="text-[#7C3AED]">{s.score}/10</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7C3AED] rounded-full transition-all duration-500"
                style={{ width: `${s.percentage}%` }}
              />
            </div>
          </div>
        ))}

        {note && (
          <p className="text-[11px] text-[#958da1] mt-6 italic opacity-70 leading-relaxed font-[family-name:var(--font-mono)]">
            {note}
          </p>
        )}
      </div>
    </GlassPanel>
  )
}
