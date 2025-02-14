import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BadgeDollarSign,
  LineChart,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to your financial overview
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BadgeDollarSign className="h-5 w-5" />
              Compare Loans
            </CardTitle>
            <CardDescription>
              Find the best loan rates from multiple lenders
            </CardDescription>
            <Link href="/dashboard/loans" className="mt-2">
              <Button className="w-full gap-2">
                Start Comparison <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Chat with AI
            </CardTitle>
            <CardDescription>
              Get instant answers to your financial questions
            </CardDescription>
            <Link href="/dashboard/chat" className="mt-2">
              <Button className="w-full gap-2">
                Start Chat <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Financial Analysis
            </CardTitle>
            <CardDescription>
              View your personalized financial insights
            </CardDescription>
            <Link href="/dashboard/analysis" className="mt-2">
              <Button className="w-full gap-2">
                View Analysis <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
        </Card>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <Card>
          <CardHeader>
            <p className="text-sm text-muted-foreground">
              Your recent activity will appear here once you start using the
              platform.
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
