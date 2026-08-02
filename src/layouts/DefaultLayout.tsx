import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

/**
 * DefaultLayout — wraps all standard pages with the sticky Navbar
 * and Footer. Uses React Router's <Outlet /> to render child routes.
 * <ScrollRestoration /> resets scroll position on route changes.
 */
export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D1117]">
      <Navbar />

      {/* Offset for fixed navbar height (80px) */}
      <main id="main-content" className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  )
}
