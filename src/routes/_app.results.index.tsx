import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// I'll install Table component too.

export const Route = createFileRoute('/_app/results/')({
  component: ResultsHistoryComponent,
})

function ResultsHistoryComponent() {
  const attempts = [
    {
      id: 'att1',
      testTitle: 'N3 Full Mock Exam 2025',
      date: '2026-01-02',
      score: '142/180',
      status: 'Passed',
    },
    {
      id: 'att2',
      testTitle: 'N3 Vocabulary Master',
      date: '2025-12-28',
      score: '38/40',
      status: 'Passed',
    },
    {
      id: 'att3',
      testTitle: 'N2 Full Mock Exam 2025',
      date: '2025-12-15',
      score: '85/180',
      status: 'Failed',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Your Exam History</h1>
        <p className="text-muted-foreground">
          Review your performance across all mock tests.
        </p>
      </div>

      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Test Name</TableHead>
              <TableHead>Date Taken</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attempts.map((attempt) => (
              <TableRow key={attempt.id}>
                <TableCell className="font-medium">
                  {attempt.testTitle}
                </TableCell>
                <TableCell>{attempt.date}</TableCell>
                <TableCell>{attempt.score}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      attempt.status === 'Passed' ? 'secondary' : 'destructive'
                    }
                    className={
                      attempt.status === 'Passed'
                        ? 'bg-green-100 text-green-800 hover:bg-green-100'
                        : ''
                    }
                  >
                    {attempt.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="text-teal-600">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
