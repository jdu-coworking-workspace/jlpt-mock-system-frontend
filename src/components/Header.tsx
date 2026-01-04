import { Link, useNavigate } from '@tanstack/react-router'
import {
  ChevronDown,
  ChevronRight,
  Home,
  LogOut,
  Menu,
  Network,
  SquareFunction,
  StickyNote,
  User as UserIcon,
  X,
} from 'lucide-react'

import { useState } from 'react'
import { useAuth } from '@/lib/auth'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  const isMaster = user?.role === 'master'

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold flex-1">
          <Link to="/">JLPT Mock System</Link>
        </h1>
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300 hidden sm:inline">
              {user.name} ({user.role})
            </span>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-red-400"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        )}
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>

          {!isMaster && (
            <>
              <Link
                to="/tests"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                activeProps={{
                  className:
                    'flex items-center gap-3 p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors mb-2',
                }}
              >
                <StickyNote size={20} />
                <span className="font-medium">All Tests</span>
              </Link>

              <Link
                to="/results"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                activeProps={{
                  className:
                    'flex items-center gap-3 p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors mb-2',
                }}
              >
                <Network size={20} />
                <span className="font-medium">My Results</span>
              </Link>
            </>
          )}

          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors mb-2',
            }}
          >
            <UserIcon size={20} />
            <span className="font-medium">Profile</span>
          </Link>

          {isMaster && (
            <div className="mt-8 pt-4 border-t border-gray-700">
              <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Master Tools
              </h3>
              <Link
                to="/master/tests"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                activeProps={{
                  className:
                    'flex items-center gap-3 p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors mb-2',
                }}
              >
                <SquareFunction size={20} />
                <span className="font-medium">Manage Exams</span>
              </Link>
              <Link
                to="/master/users"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                activeProps={{
                  className:
                    'flex items-center gap-3 p-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors mb-2',
                }}
              >
                <Network size={20} />
                <span className="font-medium">User Progress</span>
              </Link>
            </div>
          )}
        </nav>
      </aside>
    </>
  )
}
