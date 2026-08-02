import { Link } from 'react-router-dom'

const FOOTER_LINKS = {
  Platform: [
    { label: 'Discover',   href: '/' },
    { label: 'Careers',    href: '/careers' },
    { label: 'Blueprints', href: '/blueprints' },
    { label: 'Compare',    href: '/compare/photoshop-vs-coreldraw' },
  ],
  Resources: [
    { label: 'Learning Hub', href: '/resources' },
    { label: 'AI Tools',     href: '/resources?type=ai' },
    { label: 'Cheat Sheets', href: '/resources?type=cheatsheet' },
  ],
  Company: [
    { label: 'About',    href: '/about' },
    { label: 'Contact',  href: '/about#contact' },
    { label: 'Privacy',  href: '/privacy' },
    { label: 'Terms',    href: '/terms' },
  ],
}

// Computed once at module load — avoids recalculating on every render
const CURRENT_YEAR = new Date().getFullYear()

/**
 * Footer — brand signature, three-column navigation grid,
 * and copyright notice. Uses surface-dim background.
 *
 * Note: <footer> carries the 'contentinfo' landmark role implicitly.
 */
export function Footer() {

  return (
    <footer className="w-full bg-[#15121b] border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-[80rem] mx-auto px-5 md:px-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="text-xl font-extrabold tracking-tight text-[#e8dfee] font-[family-name:var(--font-display)] hover:text-[#d2bbff] transition-colors duration-200"
            >
              Tech Soul
            </Link>
            <p className="mt-4 text-sm text-[#958da1] leading-relaxed max-w-[220px]">
              The creative career platform for software discovery and career growth.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#958da1] mb-4 font-[family-name:var(--font-mono)]">
                {group}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#ccc3d8] hover:text-[#e8dfee] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#958da1] font-[family-name:var(--font-mono)]">
            © {CURRENT_YEAR} Tech Soul. Curated for the creative soul.
          </p>
          <p className="text-xs text-[#4a4455] font-[family-name:var(--font-mono)]">
            Built with React + Firebase
          </p>
        </div>
      </div>
    </footer>
  )
}
