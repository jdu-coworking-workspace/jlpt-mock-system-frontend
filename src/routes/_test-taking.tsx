import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_test-taking')({
  component: TestTakingLayout,
})

function TestTakingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-teal-600 text-white p-4 flex items-center justify-between sticky top-0 z-10">
        <Link
          to="/tests"
          className="flex items-center gap-2 hover:bg-teal-700 px-3 py-1 rounded transition-colors"
        >
          <span>&larr; Back</span>
        </Link>
        <div className="font-bold">JLPT Mock Exam</div>
        <div className="w-10"></div> {/* Spacer */}
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
