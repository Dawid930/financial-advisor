import { UserButton } from "@clerk/nextjs"
import { LayoutDashboard, LineChart, MessageSquare } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Loan Comparison",
    href: "/dashboard/loans",
    icon: LineChart,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/chat",
    icon: MessageSquare,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <div className="h-16 w-full border-b px-4 flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50">
        <div className="font-semibold">AI Financial Advisor</div>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="flex pt-16 min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col fixed left-0 top-16 bottom-0 border-r bg-gray-50/40">
          <div className="flex flex-col gap-1 p-4">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 md:pl-64">
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
