import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Since I didn't install Badge, I'll use a simple div if it fails, or install it.
// Let me install Badge first.

export const Route = createFileRoute('/_app/tests/')({
  component: TestsListComponent,
})

function TestsListComponent() {
  const tests = [
    {
      id: '1',
      title: 'N3 Vocabulary Master',
      level: 'N3',
      duration: '30 mins',
      questions: 40,
    },
    {
      id: '2',
      title: 'N2 Full Mock Exam 2025',
      level: 'N2',
      duration: '120 mins',
      questions: 100,
    },
    {
      id: '3',
      title: 'N1 Grammar Intensive',
      level: 'N1',
      duration: '45 mins',
      questions: 50,
    },
    {
      id: '4',
      title: 'N4 Basic Reading',
      level: 'N4',
      duration: '40 mins',
      questions: 30,
    },
    {
      id: '5',
      title: 'N5 Comprehensive Review',
      level: 'N5',
      duration: '60 mins',
      questions: 60,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">All Mock Tests</h1>
        <p className="text-muted-foreground text-lg">
          Select a test to challenge your Japanese skills.
        </p>
      </div>

      <div className="flex gap-2 mb-8">
        {['All', 'N1', 'N2', 'N3', 'N4', 'N5'].map((l) => (
          <Button
            key={l}
            variant={l === 'All' ? 'default' : 'outline'}
            size="sm"
            className={l === 'All' ? 'bg-teal-600' : ''}
          >
            {l}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <Card key={test.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded">
                  {test.level}
                </div>
                <span className="text-xs text-muted-foreground">
                  {test.questions} Questions
                </span>
              </div>
              <CardTitle className="mt-2">{test.title}</CardTitle>
              <CardDescription>{test.duration} limit</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-gray-600">
                This test covers the essential components required for the{' '}
                {test.level} proficiency level.
              </p>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                <Link to="/tests/$testId" params={{ testId: test.id }}>
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
