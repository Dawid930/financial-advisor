import { UserButton } from "@clerk/nextjs"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
      <div className="h-16 w-full border-b px-4 flex items-center justify-between">
        <div className="font-semibold">AI Financial Advisor</div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <main className="h-[calc(100%-4rem)]">{children}</main>
    </div>
  )
}
