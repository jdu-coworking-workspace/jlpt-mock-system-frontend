import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/master/users/')({
  component: MasterUsersComponent,
})

function MasterUsersComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Monitor Users</h1>
      <p>Track student progress and performance.</p>
    </div>
  )
}
