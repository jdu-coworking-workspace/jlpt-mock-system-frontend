import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, CheckCircle2, Clock, Trophy } from 'lucide-react'

import { useAuth } from '@/lib/auth'

export const Route = createFileRoute('/_app/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
  const { user } = useAuth()

  const studentStats = [
    {
      title: 'Total Tests Taken',
      value: '12',
      icon: <BookOpen className="h-4 w-4 text-teal-600" />,
      description: '+2 from last week',
    },
    {
      title: 'Average Score',
      value: '78%',
      icon: <Trophy className="h-4 w-4 text-teal-600" />,
      description: 'N3 Level Practice',
    },
    {
      title: 'Time Spent',
      value: '24h',
      icon: <Clock className="h-4 w-4 text-teal-600" />,
      description: 'Mock exams only',
    },
    {
      title: 'Passed Exams',
      value: '8',
      icon: <CheckCircle2 className="h-4 w-4 text-teal-600" />,
      description: '67% pass rate',
    },
  ]

  const masterStats = [
    {
      title: 'Total Students',
      value: '1,240',
      icon: <CheckCircle2 className="h-4 w-4 text-teal-600" />,
      description: 'Across all levels',
    },
    {
      title: 'Active Exams',
      value: '45',
      icon: <BookOpen className="h-4 w-4 text-teal-600" />,
      description: 'Currently published',
    },
    {
      title: 'Exams Taken Today',
      value: '156',
      icon: <Clock className="h-4 w-4 text-teal-600" />,
      description: '+12% from yesterday',
    },
    {
      title: 'Average Pass Rate',
      value: '64%',
      icon: <Trophy className="h-4 w-4 text-teal-600" />,
      description: 'Historical data',
    },
  ]

  const isMaster = user?.role === 'master'
  const stats = isMaster ? masterStats : studentStats

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome, {user?.name || 'Guest'}!
        </h1>
        <p className="text-muted-foreground">
          {isMaster
            ? "Here's the system-wide overview for today."
            : "Here's an overview of your JLPT progress."}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest mock exam attempts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-sm">
                      N3 Full Mock Exam #{i + 100}
                    </p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-teal-600">85/100</p>
                    <p className="text-[10px] text-green-600 font-semibold uppercase">
                      Passed
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recommended Tests</CardTitle>
            <CardDescription>Based on your target level (N3).</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Vocabulary Focus', 'Grammar Drill', 'Full N3 Mock'].map(
                (name, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
                      N3
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{name}</p>
                      <p className="text-xs text-muted-foreground">
                        {30 + i * 15} mins
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-teal-600 h-8"
                    >
                      Start
                    </Button>
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
