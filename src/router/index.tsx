import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/DefaultLayout'

// Pages — lazy loaded for optimal bundle splitting
import { lazy } from 'react'

const HomePage           = lazy(() => import('@/pages/Home').then(m => ({ default: m.HomePage })))
const CareersPage        = lazy(() => import('@/pages/Careers').then(m => ({ default: m.CareersPage })))
const CareersDetailPage  = lazy(() => import('@/pages/CareersDetail').then(m => ({ default: m.CareersDetailPage })))
const SoftwarePage       = lazy(() => import('@/pages/Software').then(m => ({ default: m.SoftwarePage })))
const BlueprintsPage     = lazy(() => import('@/pages/Blueprints').then(m => ({ default: m.BlueprintsPage })))
const BlueprintDetailPage= lazy(() => import('@/pages/BlueprintDetail').then(m => ({ default: m.BlueprintDetailPage })))
const ComparePage        = lazy(() => import('@/pages/Compare').then(m => ({ default: m.ComparePage })))
const ResourcesPage      = lazy(() => import('@/pages/Resources').then(m => ({ default: m.ResourcesPage })))
const AboutPage          = lazy(() => import('@/pages/About').then(m => ({ default: m.AboutPage })))

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      // ─── Public Routes ───────────────────────────────────────────
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'careers',
        element: <CareersPage />,
      },
      {
        path: 'careers/:slug',
        element: <CareersDetailPage />,
      },
      {
        path: 'software/:slug',
        element: <SoftwarePage />,
      },
      {
        path: 'blueprints',
        element: <BlueprintsPage />,
      },
      {
        path: 'blueprints/:slug',
        element: <BlueprintDetailPage />,
      },
      {
        path: 'compare/:slug',
        element: <ComparePage />,
      },
      {
        path: 'resources',
        element: <ResourcesPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },

      // ─── Catch-All 404 ───────────────────────────────────────────
      {
        path: '*',
        element: (
          <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center px-5">
            <span className="text-6xl font-extrabold text-[#7C3AED] font-[family-name:var(--font-display)]">404</span>
            <p className="text-[#ccc3d8] text-lg">Page not found. The route you're looking for doesn't exist yet.</p>
          </div>
        ),
      },
    ],
  },
])
