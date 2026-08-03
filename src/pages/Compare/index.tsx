import { Link, useParams } from 'react-router-dom'
import {
  Container,
  Section,
  GlassPanel,
  AccordionItem,
  CtaBanner,
} from '@/components'
import { mockCompareData } from './mockData'

/**
 * ComparePage Component — Head-to-Head Software & Career Comparison view.
 * Migrated from Compare.html prototype.
 *
 * Route: /compare/:slug
 */
export function ComparePage() {
  const { slug: _slug } = useParams<{ slug: string }>()

  // Using mock data for photoshop-vs-coreldraw comparison
  const data = mockCompareData

  return (
    <div className="relative overflow-hidden">
      {/* ── 1. Hero Section ────────────────────────────────────────────── */}
      <Section className="relative pt-12 pb-16 overflow-hidden min-h-[750px] flex items-center">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#4cd7f6]/10 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase mb-4 block font-[family-name:var(--font-mono)]">
              Head to Head Battle
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#e8dfee] font-[family-name:var(--font-display)] mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-[#ccc3d8] max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-0 max-w-5xl mx-auto">
            {/* Tool A Card */}
            <div className="w-full md:w-[44%] group">
              <GlassPanel className="p-8 md:p-10 rounded-2xl border border-white/10 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300">
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className={`w-16 h-16 ${data.toolA.iconBg} rounded-xl flex items-center justify-center border ${data.toolA.iconBorderColor}`}
                  >
                    <span className={`text-3xl font-bold ${data.toolA.iconTextColor}`}>
                      {data.toolA.iconText}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                      {data.toolA.name}
                    </h2>
                    <span className="text-xs font-medium text-[#ccc3d8] font-[family-name:var(--font-mono)]">
                      {data.toolA.tagline}
                    </span>
                  </div>
                </div>
                <p className="text-[#ccc3d8] text-sm mb-6 leading-relaxed">
                  {data.toolA.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.toolA.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#7C3AED]/10 text-[#d2bbff] px-3 py-1 rounded-full text-xs font-medium font-[family-name:var(--font-mono)] border border-[#7C3AED]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </div>

            {/* VS Central Badge */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#7C3AED] to-[#5a00c6] rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-extrabold shadow-[0_0_40px_rgba(124,58,237,0.4)] z-20 shrink-0 my-2 md:my-0 font-[family-name:var(--font-display)] border-4 border-[#0D1117]">
              VS
            </div>

            {/* Tool B Card */}
            <div className="w-full md:w-[44%] group">
              <GlassPanel className="p-8 md:p-10 rounded-2xl border border-white/10 hover:border-[#4cd7f6]/50 hover:shadow-[0_0_30px_rgba(76,215,246,0.2)] transition-all duration-300">
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className={`w-16 h-16 ${data.toolB.iconBg} rounded-xl flex items-center justify-center border ${data.toolB.iconBorderColor}`}
                  >
                    <span className={`text-3xl font-bold ${data.toolB.iconTextColor}`}>
                      {data.toolB.iconText}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                      {data.toolB.name}
                    </h2>
                    <span className="text-xs font-medium text-[#ccc3d8] font-[family-name:var(--font-mono)]">
                      {data.toolB.tagline}
                    </span>
                  </div>
                </div>
                <p className="text-[#ccc3d8] text-sm mb-6 leading-relaxed">
                  {data.toolB.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.toolB.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#4cd7f6]/10 text-[#4cd7f6] px-3 py-1 rounded-full text-xs font-medium font-[family-name:var(--font-mono)] border border-[#4cd7f6]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 2. Quick Decision Section ──────────────────────────────────── */}
      <Section className="bg-[#1d1a24]">
        <Container>
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 text-[#e8dfee] font-[family-name:var(--font-display)]">
              Which one should I choose?
            </h2>
            <p className="text-[#ccc3d8] text-sm">
              Select your persona to see our direct recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.personas.map((persona) => (
              <GlassPanel
                key={persona.id}
                hoverable
                className="p-8 rounded-2xl border border-white/5 flex flex-col h-full"
              >
                <span
                  className={`material-symbols-outlined ${persona.iconColor} mb-6 text-4xl`}
                  aria-hidden="true"
                >
                  {persona.icon}
                </span>
                <h3 className="text-xl font-bold mb-2 text-[#e8dfee] font-[family-name:var(--font-display)]">
                  {persona.title}
                </h3>
                <p className="text-[#ccc3d8] text-sm flex-grow mb-6 leading-relaxed">
                  {persona.description}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className={`font-bold ${persona.toolColor}`}>
                    {persona.recommendedTool}
                  </span>
                  <span
                    className={`material-symbols-outlined ${persona.toolColor}`}
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </div>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 3. Head to Head Metrics ────────────────────────────────────── */}
      <Section>
        <Container className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Head to Head Metrics
          </h2>

          <div className="space-y-10">
            {data.metrics.map((metric) => (
              <div key={metric.id} className="space-y-4">
                <div className="flex justify-between text-sm font-medium font-[family-name:var(--font-mono)]">
                  <span className="text-[#e8dfee]">{metric.title}</span>
                  <span className={metric.leaderColor}>{metric.leaderText}</span>
                </div>
                <div className="space-y-3">
                  {/* Tool A Progress */}
                  <div className="flex items-center gap-4">
                    <span className="w-20 text-xs text-[#958da1] font-[family-name:var(--font-mono)]">
                      {data.toolA.iconText} ({metric.toolAScore}%)
                    </span>
                    <div className="h-2 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#7C3AED] rounded-full transition-all duration-500"
                        style={{ width: `${metric.toolAScore}%` }}
                      />
                    </div>
                  </div>
                  {/* Tool B Progress */}
                  <div className="flex items-center gap-4">
                    <span className="w-20 text-xs text-[#958da1] font-[family-name:var(--font-mono)]">
                      {data.toolB.iconText} ({metric.toolBScore}%)
                    </span>
                    <div className="h-2 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#4cd7f6] rounded-full transition-all duration-500"
                        style={{ width: `${metric.toolBScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Tech Soul Overall Score Card */}
            <div className="bg-[#7C3AED]/5 border border-[#7C3AED]/20 p-8 rounded-2xl mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                  Tech Soul Overall Score
                </h3>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-[#7C3AED] font-bold text-3xl font-[family-name:var(--font-display)]">
                      {data.toolA.score}
                    </div>
                    <div className="text-xs text-[#958da1] uppercase font-[family-name:var(--font-mono)]">
                      {data.toolA.iconText}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#4cd7f6] font-bold text-3xl font-[family-name:var(--font-display)]">
                      {data.toolB.score}
                    </div>
                    <div className="text-xs text-[#958da1] uppercase font-[family-name:var(--font-mono)]">
                      {data.toolB.iconText}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#ccc3d8] text-sm italic leading-relaxed">
                "{data.overallQuote}"
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. Feature Showdown ────────────────────────────────────────── */}
      <Section className="bg-[#161B22]">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Feature Showdown
          </h2>
          <div className="space-y-4">
            {data.showdown.map((item, index) => (
              <AccordionItem
                key={item.id}
                defaultOpen={index === 0}
                title={
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#7C3AED] text-2xl" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="text-lg md:text-xl font-bold font-[family-name:var(--font-display)]">
                        {item.title}
                      </span>
                    </div>
                    <span className={`${item.winnerColor} px-3 py-1 rounded-full text-xs font-semibold font-[family-name:var(--font-mono)]`}>
                      {item.winner}
                    </span>
                  </div>
                }
              >
                <div className="pt-2">
                  <p className="text-[#ccc3d8] leading-relaxed mb-4">{item.description}</p>
                  {item.toolABenefits && (
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <h4 className="font-bold text-[#e8dfee] mb-2">{data.toolB.name} Advantages</h4>
                        <ul className="text-[#ccc3d8] text-sm space-y-2">
                          {item.toolABenefits.map((b) => (
                            <li key={b}>• {b}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <h4 className="font-bold text-[#e8dfee] mb-2">{data.toolA.name} Trade-offs</h4>
                        <ul className="text-[#ccc3d8] text-sm space-y-2">
                          {item.toolBDownsides?.map((d) => (
                            <li key={d}>• {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </AccordionItem>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. Real Workflows ───────────────────────────────────────────── */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Real Workflows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.workflows.map((flow) => (
              <GlassPanel
                key={flow.id}
                hoverable
                className="rounded-2xl overflow-hidden border border-white/5 flex flex-col"
              >
                <div className="h-48 relative">
                  <img
                    src={flow.imageUrl}
                    alt={flow.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-4 right-4 ${flow.winnerColor} px-3 py-1 rounded-full text-xs font-bold font-[family-name:var(--font-mono)]`}
                  >
                    {flow.winner}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-[#e8dfee] font-[family-name:var(--font-display)]">
                    {flow.title}
                  </h3>
                  <p className="text-[#ccc3d8] text-sm flex-grow mb-6 leading-relaxed">
                    {flow.description}
                  </p>
                  <Link
                    to={`/blueprints/${flow.blueprintSlug}`}
                    className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-[#d2bbff] text-sm font-semibold transition-colors"
                  >
                    <span>See Blueprint</span>
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      arrow_outward
                    </span>
                  </Link>
                </div>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 6. Tech Soul Verdict ───────────────────────────────────────── */}
      <Section>
        <Container>
          <GlassPanel className="p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#e8dfee] font-[family-name:var(--font-display)]">
                {data.verdict.title}
              </h2>
              <p className="text-[#ccc3d8] text-lg max-w-2xl mx-auto leading-relaxed">
                {data.verdict.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              {/* Tool A Conditions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#7C3AED] font-[family-name:var(--font-display)]">
                  Choose {data.toolA.name} if...
                </h3>
                <ul className="space-y-4">
                  {data.verdict.toolAConditions.map((cond, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#7C3AED] shrink-0 mt-0.5" aria-hidden="true">
                        check_circle
                      </span>
                      <span className="text-[#ccc3d8] text-sm leading-relaxed">{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tool B Conditions */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#4cd7f6] font-[family-name:var(--font-display)]">
                  Choose {data.toolB.name} if...
                </h3>
                <ul className="space-y-4">
                  {data.verdict.toolBConditions.map((cond, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#4cd7f6] shrink-0 mt-0.5" aria-hidden="true">
                        check_circle
                      </span>
                      <span className="text-[#ccc3d8] text-sm leading-relaxed">{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassPanel>
        </Container>
      </Section>

      {/* ── 7. Learning Timeline ───────────────────────────────────────── */}
      <Section className="bg-[#1d1a24]">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Learning Timeline
          </h2>
          <div className="max-w-4xl mx-auto space-y-12 py-6">
            {/* Timeline Stepper */}
            <div className="relative">
              <div className="absolute h-1 w-full bg-white/5 top-1/2 -translate-y-1/2" />
              <div className="flex justify-between relative z-10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-white border-4 border-[#0D1117]">
                    1
                  </div>
                  <span className="font-bold text-[#e8dfee] text-sm">Beginner</span>
                  <p className="text-xs text-[#958da1] mt-1 font-[family-name:var(--font-mono)]">2-4 Weeks</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-white border-4 border-[#0D1117]">
                    2
                  </div>
                  <span className="font-bold text-[#e8dfee] text-sm">Intermediate</span>
                  <p className="text-xs text-[#958da1] mt-1 font-[family-name:var(--font-mono)]">3-6 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-white border-4 border-[#0D1117]">
                    3
                  </div>
                  <span className="font-bold text-[#e8dfee] text-sm">Professional</span>
                  <p className="text-xs text-[#958da1] mt-1 font-[family-name:var(--font-mono)]">1-2 Years</p>
                </div>
              </div>
            </div>

            {/* Curve comparison cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#ccc3d8]">
              <div className="p-6 bg-[#161B22] rounded-2xl border border-white/5">
                <h4 className="font-bold text-[#7C3AED] mb-2">{data.toolA.name} Curve</h4>
                <p className="text-sm leading-relaxed">{data.learningCurve.toolACurve}</p>
              </div>
              <div className="p-6 bg-[#161B22] rounded-2xl border border-white/5">
                <h4 className="font-bold text-[#4cd7f6] mb-2">{data.toolB.name} Curve</h4>
                <p className="text-sm leading-relaxed">{data.learningCurve.toolBCurve}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 8. Mastery Blueprints ──────────────────────────────────────── */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Mastery Blueprints
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.masteryBlueprints.map((bp) => (
              <GlassPanel
                key={bp.id}
                hoverable
                className="p-8 rounded-2xl border border-white/5 flex flex-col"
              >
                <h4 className="text-xl font-bold mb-3 text-[#e8dfee] font-[family-name:var(--font-display)]">
                  {bp.title}
                </h4>
                <p className="text-[#ccc3d8] text-sm flex-grow mb-6 leading-relaxed">
                  {bp.description}
                </p>
                <Link
                  to={`/blueprints/${bp.slug}`}
                  className="inline-flex items-center gap-2 text-[#7C3AED] font-semibold text-sm hover:text-[#d2bbff] transition-colors"
                >
                  <span>{bp.actionText}</span>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    {bp.actionIcon}
                  </span>
                </Link>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 9. Final CTA Banner (Reusing CtaBanner component) ──────────── */}
      <Section>
        <CtaBanner
          title="Still not sure?"
          description="Sometimes seeing is believing. Dive into our interactive blueprints to see these tools in action before you buy."
          buttonText="Explore Blueprints"
          footnoteText="Free career blueprints and stack recommendations"
          footnoteIcon="explore"
        />
      </Section>
    </div>
  )
}
