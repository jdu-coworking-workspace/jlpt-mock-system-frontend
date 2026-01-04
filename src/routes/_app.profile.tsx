import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/_app/profile')({
  component: ProfileComponent,
})

function ProfileComponent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground text-lg">
          Manage your personal information and preferences.
        </p>
      </div>

      <Separator />

      <div className="grid gap-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p className="text-sm text-muted-foreground">
              Update your name and email address.
            </p>
          </div>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Basic Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@example.com"
                />
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button className="bg-teal-600 hover:bg-teal-700 ml-auto">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </section>

        <Separator />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">JLPT Preferences</h2>
            <p className="text-sm text-muted-foreground">
              Select your target level for better recommendations.
            </p>
          </div>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Learning Goal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="target-level">Current Target Level</Label>
                <select
                  id="target-level"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="N3"
                >
                  <option value="N1">N1 - Advanced</option>
                  <option value="N2">N2 - Upper Intermediate</option>
                  <option value="N3">N3 - Intermediate</option>
                  <option value="N4">N4 - Elementary</option>
                  <option value="N5">N5 - Basic</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button className="bg-teal-600 hover:bg-teal-700 ml-auto">
                Update Goal
              </Button>
            </CardFooter>
          </Card>
        </section>

        <Separator />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-destructive">
              Danger Zone
            </h2>
            <p className="text-sm text-muted-foreground">
              Irreversible actions for your account.
            </p>
          </div>
          <Card className="md:col-span-2 border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-destructive">Delete Account</CardTitle>
              <CardDescription>
                Once you delete your account, there is no going back. Please be
                certain.
              </CardDescription>
            </CardHeader>
            <CardFooter className="border-t border-destructive/10 pt-6">
              <Button variant="destructive">Delete Account</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}
