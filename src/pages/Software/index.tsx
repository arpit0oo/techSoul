import { useParams } from 'react-router-dom'
import {
  Container,
  Section,
  GlassPanel,
  Button,
  AccordionItem,
  ScoreCard,
  ToolCard,
  CtaBanner,
} from '@/components'
import { mockPhotoshopData } from './mockData'

/**
 * SoftwarePage Component — Software Intelligence details view.
 * Uses extracted UI components (CtaBanner, ToolCard, ScoreCard, AccordionItem).
 *
 * Route: /software/:slug
 */
export function SoftwarePage() {
  const { slug: _slug } = useParams<{ slug: string }>()

  // Using mock data for photoshop
  const data = mockPhotoshopData

  return (
    <div className="relative overflow-hidden">
      {/* ── 1. Hero Section (Kept inline inside SoftwarePage) ───────────── */}
      <Section className="relative pt-12 pb-16 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#4cd7f6]/10 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10 max-w-4xl text-center">
          {/* Software Icon */}
          <div className="w-24 h-24 mx-auto mb-8 bg-[#221e28] rounded-3xl p-4 glass flex items-center justify-center shadow-xl">
            <img
              src={data.logoUrl}
              alt={`${data.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#e8dfee] font-[family-name:var(--font-display)] mb-6">
            Adobe <span className="gradient-text">{data.subtitle}</span>
          </h1>

          {/* Verification Badge */}
          {data.verified && (
            <div className="flex justify-center mb-6">
              <span className="bg-[#7C3AED]/20 text-[#d2bbff] px-4 py-1 rounded-full text-xs font-medium font-[family-name:var(--font-mono)] border border-[#7C3AED]/30">
                Tech Soul Verified
              </span>
            </div>
          )}

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#ccc3d8] mb-10 max-w-2xl mx-auto leading-relaxed">
            {data.tagline}
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {data.attributes.map((attr) => (
              <span
                key={attr.label}
                className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-xs font-medium font-[family-name:var(--font-mono)] border border-white/10 text-[#e8dfee]"
              >
                <span className={`material-symbols-outlined text-sm ${attr.color}`} aria-hidden="true">
                  {attr.icon}
                </span>
                {attr.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="primary" className="font-bold shadow-xl">
              Continue to Official Source
            </Button>
            <Button
              size="lg"
              variant="secondary"
              leftIcon={
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  play_circle
                </span>
              }
            >
              Watch Overview
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 2. Quick Snapshot / Included with Tech Soul ────────────────── */}
      <Section compact>
        <Container>
          <GlassPanel className="p-8 rounded-3xl border border-white/10 text-center">
            <h3 className="text-[#ccc3d8] text-xs font-semibold uppercase tracking-widest mb-6 font-[family-name:var(--font-mono)]">
              Included with Tech Soul
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {data.includedFeatures.map((feature) => (
                <span
                  key={feature}
                  className="bg-white/5 px-4 py-2 rounded-full text-xs text-[#e8dfee] font-medium font-[family-name:var(--font-mono)] border border-white/10"
                >
                  {feature}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#958da1] font-[family-name:var(--font-mono)]">
              Included at no additional cost.
            </p>
          </GlassPanel>
        </Container>
      </Section>

      {/* ── 3. Quick Specs Grid (SpecGrid not extracted per instructions) ─ */}
      <Section compact>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <GlassPanel className="p-6 rounded-2xl border border-white/5 hover:border-[#7C3AED]/30 transition-all">
              <p className="text-[#ccc3d8] text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                Best For
              </p>
              <p className="text-xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                {data.specs.bestFor}
              </p>
            </GlassPanel>

            {/* Special Highlight Offer Card */}
            <div className="glass p-6 rounded-2xl border-2 border-[#7C3AED] shadow-[0_0_20px_rgba(210,187,255,0.2)] hover:scale-105 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#7C3AED] text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg font-[family-name:var(--font-mono)]">
                {data.offer.badge}
              </div>
              <p className="text-[#d2bbff] text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                Tech Soul Offer
              </p>
              <p className="text-xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                {data.offer.price}{' '}
                <span className="text-sm font-normal text-[#ccc3d8]">{data.offer.period}</span>
              </p>
              <p className="text-[10px] text-[#958da1] mt-2 font-[family-name:var(--font-mono)]">
                {data.offer.note}
              </p>
            </div>

            <GlassPanel className="p-6 rounded-2xl border border-white/5 hover:border-[#7C3AED]/30 transition-all">
              <p className="text-[#ccc3d8] text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                Platform
              </p>
              <p className="text-xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                {data.specs.platform}
              </p>
            </GlassPanel>

            <GlassPanel className="p-6 rounded-2xl border border-white/5 hover:border-[#7C3AED]/30 transition-all">
              <p className="text-[#ccc3d8] text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                Difficulty
              </p>
              <p className="text-xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                {data.specs.difficulty}
              </p>
            </GlassPanel>

            <GlassPanel className="p-6 rounded-2xl border border-white/5 hover:border-[#7C3AED]/30 transition-all col-span-2 md:col-span-1">
              <p className="text-[#ccc3d8] text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                Category
              </p>
              <p className="text-xl font-bold text-[#e8dfee] font-[family-name:var(--font-display)]">
                {data.specs.category}
              </p>
            </GlassPanel>
          </div>
        </Container>
      </Section>

      {/* ── 4. Who Should Use This? ────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Perfect For */}
            <div className="bg-[#221e28] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-8xl text-[#7C3AED]" aria-hidden="true">
                  check_circle
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#e8dfee] font-[family-name:var(--font-display)]">
                <span
                  className="text-[#7C3AED] material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                  aria-hidden="true"
                >
                  recommend
                </span>
                Perfect For
              </h3>
              <ul className="space-y-6">
                {data.perfectFor.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#7C3AED] mt-1 shrink-0" aria-hidden="true">
                      check_circle
                    </span>
                    <div>
                      <p className="font-bold text-[#e8dfee]">{item.title}</p>
                      <p className="text-[#ccc3d8] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Ideal For */}
            <div className="bg-[#1d1a24] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-8xl text-[#ffb4ab]" aria-hidden="true">
                  cancel
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#e8dfee] font-[family-name:var(--font-display)]">
                <span className="text-[#ffb4ab] material-symbols-outlined" aria-hidden="true">
                  block
                </span>
                Not Ideal For
              </h3>
              <ul className="space-y-6">
                {data.notIdealFor.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#ffb4ab] mt-1 shrink-0" aria-hidden="true">
                      cancel
                    </span>
                    <div>
                      <p className="font-bold text-[#e8dfee]">{item.title}</p>
                      <p className="text-[#ccc3d8] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 5. Why Creators Choose Photoshop ───────────────────────────── */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Why Creators Choose <span className="text-[#7C3AED]">{data.name.split(' ')[1]}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feat) => (
              <GlassPanel
                key={feat.title}
                hoverable
                className="p-8 rounded-3xl border border-white/5"
              >
                <div
                  className={`w-12 h-12 ${feat.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                    aria-hidden="true"
                  >
                    {feat.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-[#e8dfee] font-[family-name:var(--font-display)]">
                  {feat.title}
                </h4>
                <p className="text-[#ccc3d8] text-sm leading-relaxed">{feat.description}</p>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 6. Immersive Workspace Gallery ────────────────────────────── */}
      <Section className="overflow-hidden">
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Immersive Workspace
          </h2>
        </Container>
        <div className="flex gap-6 overflow-x-auto pb-8 px-5 md:px-16 custom-scrollbar snap-x snap-mandatory max-w-[80rem] mx-auto">
          {data.screenshots.map((shot, i) => (
            <div
              key={i}
              className="flex-none w-[80vw] md:w-[60vw] aspect-video rounded-[32px] overflow-hidden snap-center border border-white/10 shadow-2xl"
            >
              <img
                src={shot.url}
                alt={shot.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ── 7. Tech Soul Review & Score Section (Using ScoreCard) ─────── */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Review Content (8 cols) */}
            <div className="lg:col-span-8">
              <GlassPanel className="p-8 rounded-[32px] border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white" aria-hidden="true">
                      star_rate
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-[#e8dfee] font-[family-name:var(--font-display)]">
                      Tech Soul Review
                    </h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Pros */}
                  <div>
                    <h4 className="text-[#7C3AED] font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined" aria-hidden="true">
                        add_circle
                      </span>{' '}
                      The Pros
                    </h4>
                    <ul className="space-y-3 text-[#ccc3d8] text-sm">
                      {data.review.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <span className="text-[#7C3AED]">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="text-[#ffb4ab] font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined" aria-hidden="true">
                        remove_circle
                      </span>{' '}
                      The Cons
                    </h4>
                    <ul className="space-y-3 text-[#ccc3d8] text-sm">
                      {data.review.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <span className="text-[#ffb4ab]">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict Box */}
                <div className="p-8 bg-[#221e28] rounded-2xl border border-white/5">
                  <h4 className="text-xl font-bold mb-4 text-[#e8dfee] font-[family-name:var(--font-display)]">
                    The Verdict
                  </h4>
                  <p className="text-[#ccc3d8] text-base leading-relaxed">
                    {data.review.verdict}
                  </p>
                </div>
              </GlassPanel>
            </div>

            {/* Right: Score Breakdown (Using extracted ScoreCard component) */}
            <div className="lg:col-span-4">
              <ScoreCard score={data.score} metrics={data.scores} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 8. Top Alternatives (Using ToolCard component) ────────────── */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Top Alternatives
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.alternatives.map((alt) => (
              <ToolCard
                key={alt.id}
                name={alt.name}
                description={alt.description}
                logoUrl={alt.logoUrl}
                actionHref={`/compare/${alt.compareSlug}`}
                actionLabel="Compare"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 9. Common Questions (FAQs) ────────────────────────────────── */}
      <Section>
        <Container className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#e8dfee] font-[family-name:var(--font-display)]">
            Common Questions
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <AccordionItem key={i} title={faq.question} defaultOpen={i === 0}>
                {faq.answer}
              </AccordionItem>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 10. Final CTA Banner (Using extracted CtaBanner component) ── */}
      <Section>
        <CtaBanner
          title="Ready to Start Creating?"
          description="Join millions of creators and master the art of digital imaging with Adobe Photoshop."
          buttonText="Continue to Official Purchase"
          footnoteText="Secure transaction via Adobe's Official Portal"
        />
      </Section>
    </div>
  )
}
