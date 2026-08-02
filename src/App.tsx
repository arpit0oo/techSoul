import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'

/**
 * App root — provides the router to the entire component tree.
 * Suspense boundary handles lazy-loaded page chunks gracefully.
 */
function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
            <span className="text-[#ccc3d8] text-sm font-[family-name:var(--font-mono)] tracking-wider">
              Loading...
            </span>
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
