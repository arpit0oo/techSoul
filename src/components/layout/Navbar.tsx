import { useState, useEffect, useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom'

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Discover',   href: '/' },
  { label: 'Careers',    href: '/careers' },
  { label: 'Blueprints', href: '/blueprints' },
  { label: 'Resources',  href: '/resources' },
]

const MOBILE_NAV_ID = 'mobile-nav-menu'

/**
 * Navbar — sticky top navigation bar following the Level 2 glass elevation
 * system from DESIGN.md: backdrop-blur-xl, 1px bottom border at 5% opacity.
 *
 * Accessibility:
 * - Hamburger button is aria-controls bound to the drawer id
 * - Escape key closes the mobile drawer
 * - Active routes announced via aria-current="page"
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close drawer on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && mobileOpen) {
      setMobileOpen(false)
    }
  }, [mobileOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Close drawer on route change (window popstate or programmatic nav)
  useEffect(() => {
    setMobileOpen(false)
  }, [])

  return (
    // <header> carries the 'banner' landmark role implicitly — no need for role="banner"
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(22,27,34,0.85)] backdrop-blur-xl border-b border-white/[0.05] shadow-[0_20px_50px_rgba(124,58,237,0.06)]">
      <div className="flex items-center justify-between h-20 px-5 md:px-16 max-w-[80rem] mx-auto">
        {/* Brand Logo */}
        <Link
          to="/"
          aria-label="Tech Soul — Home"
          className="flex items-center gap-2 shrink-0 group"
        >
          <span className="text-xl font-extrabold tracking-tight text-[#e8dfee] font-[family-name:var(--font-display)] group-hover:text-[#d2bbff] transition-colors duration-200">
            Tech Soul
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                [
                  'text-sm font-medium font-[family-name:var(--font-label)] transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:underline focus-visible:decoration-[#7C3AED]',
                  isActive
                    ? 'text-[#d2bbff] border-b-2 border-[#7C3AED] pb-0.5'
                    : 'text-[#ccc3d8] hover:text-[#e8dfee]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search software"
            className="text-[#ccc3d8] hover:text-[#e8dfee] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              search
            </span>
          </button>
          {/* Styled Link matching primary Button — avoids useNavigate for better semantics */}
          <Link
            to="/blueprints"
            className="h-9 px-4 text-sm rounded-lg inline-flex items-center justify-center font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#4cd7f6] shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
          >
            Build Blueprint
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls={MOBILE_NAV_ID}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-[#ccc3d8] hover:text-[#e8dfee] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
        >
          <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <nav
          id={MOBILE_NAV_ID}
          aria-label="Mobile navigation"
          className="md:hidden bg-[rgba(22,27,34,0.97)] backdrop-blur-xl border-t border-white/[0.05] px-5 py-6 flex flex-col gap-4"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                [
                  'text-base font-medium py-2 transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:underline focus-visible:decoration-[#7C3AED]',
                  isActive ? 'text-[#d2bbff]' : 'text-[#ccc3d8] hover:text-[#e8dfee]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/blueprints"
            onClick={() => setMobileOpen(false)}
            className="mt-2 w-full h-11 px-6 rounded-xl inline-flex items-center justify-center font-semibold text-sm text-white bg-gradient-to-r from-[#7C3AED] to-[#4cd7f6] shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:brightness-110 transition-all"
          >
            Build Blueprint
          </Link>
        </nav>
      )}
    </header>
  )
}
