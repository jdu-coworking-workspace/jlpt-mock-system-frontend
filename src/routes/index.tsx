import { createFileRoute, Link } from '@tanstack/react-router'
import {
  BookOpen,
  CheckCircle,
  Clock,
  LayoutDashboard,
  ShieldCheck,
  Trophy,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-teal-500" />,
      title: 'Full Mock Exams',
      description:
        'Experience the real JLPT environment with timed tests covering N5 to N1 levels.',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-teal-500" />,
      title: 'Instant Results',
      description:
        'Get immediate feedback and detailed scoring breakdowns after every test.',
    },
    {
      icon: <Clock className="w-12 h-12 text-teal-500" />,
      title: 'Time Management',
      description:
        'Practice with realistic time limits to improve your pace and accuracy.',
    },
    {
      icon: <LayoutDashboard className="w-12 h-12 text-teal-500" />,
      title: 'Personal Dashboard',
      description:
        'Track your progress over time and see which areas need more focus.',
    },
    {
      icon: <Trophy className="w-12 h-12 text-teal-500" />,
      title: 'Progress Tracking',
      description:
        'Keep a history of all your attempts and celebrate your improvement.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-teal-500" />,
      title: 'Master-led Content',
      description:
        'Exams are curated and monitored by experts to ensure quality and relevance.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gray-50 border-b">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Master the <span className="text-teal-600">JLPT</span> with
            Confidence
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            The ultimate mock system for the Japanese Language Proficiency Test.
            Practice with real exams, track your progress, and pass with flying
            colors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold rounded-lg transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our System?</h2>
          <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-teal-500">
              JLPT Mock System
            </h3>
            <p className="text-gray-400 mt-2">© 2026 Your Path to N1.</p>
          </div>
          <div className="flex gap-6">
            <Link to="/login" className="hover:text-teal-400 transition-colors">
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-teal-400 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
