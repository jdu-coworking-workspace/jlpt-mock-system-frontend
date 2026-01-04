import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/master/tests/')({
  component: MasterTestsComponent,
})

function MasterTestsComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Manage Tests</h1>
      <p>Create and edit JLPT mock exams.</p>
    </div>
  )
}
