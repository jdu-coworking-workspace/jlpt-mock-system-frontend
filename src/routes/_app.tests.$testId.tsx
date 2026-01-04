import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Clock, HelpCircle, Trophy, AlertTriangle } from 'lucide-react'

export const Route = createFileRoute('/_app/tests/$testId')({
  component: TestDetailComponent,
})

function TestDetailComponent() {
  const { testId } = Route.useParams()

  // Mock data for the specific test
  const test = {
    id: testId,
    title: 'N3 Full Mock Exam 2025',
    level: 'N3',
    duration: '120 mins',
    questions: 100,
    passingScore: 95,
    totalScore: 180,
    description:
      'This is a full-length mock examination designed to simulate the actual JLPT N3 experience. It covers Vocabulary, Grammar, Reading, and Listening sections.',
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link
        to="/tests"
        className="text-teal-600 hover:underline flex items-center gap-1"
      >
        &larr; Back to Tests
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-teal-600 text-white text-sm font-bold rounded">
            {test.level}
          </div>
          <h1 className="text-4xl font-bold">{test.title}</h1>
        </div>
        <p className="text-xl text-muted-foreground">{test.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6 text-center space-y-2">
            <Clock className="mx-auto h-8 w-8 text-teal-600" />
            <div className="text-2xl font-bold">{test.duration}</div>
            <div className="text-xs text-muted-foreground uppercase">
              Duration
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center space-y-2">
            <HelpCircle className="mx-auto h-8 w-8 text-teal-600" />
            <div className="text-2xl font-bold">{test.questions}</div>
            <div className="text-xs text-muted-foreground uppercase">
              Questions
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center space-y-2">
            <Trophy className="mx-auto h-8 w-8 text-teal-600" />
            <div className="text-2xl font-bold">
              {test.passingScore}/{test.totalScore}
            </div>
            <div className="text-xs text-muted-foreground uppercase">
              Passing Score
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <CardTitle className="text-amber-800 text-lg">
            Important Instructions
          </CardTitle>
        </CardHeader>
        <CardContent className="text-amber-800 space-y-2 text-sm">
          <p>• Once you start the test, the timer cannot be paused.</p>
          <p>
            • Ensure you have a stable internet connection throughout the exam.
          </p>
          <p>
            • Do not refresh the page or navigate away, as your progress might
            be lost.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-teal-600 hover:bg-teal-700 px-12 py-6 text-xl h-auto"
        >
          <Link to="/tests/$testId/take" params={{ testId: test.id }}>
            Start Exam Now
          </Link>
        </Button>
      </div>
    </div>
  )
}
