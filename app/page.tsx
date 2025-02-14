import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-full gap-y-4">
      <div className="flex flex-col items-center gap-y-6 max-w-3xl text-center">
        <h1 className="text-6xl font-bold">Your AI Financial Advisor</h1>
        <p className="text-xl text-muted-foreground">
          Get personalized loan recommendations and financial advice powered by
          AI
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <SignInButton mode="modal">
          <Button size="lg" variant="outline">
            Get Started
          </Button>
        </SignInButton>
        <Link
          href="https://github.com/your-username/financial-advisor"
          target="_blank"
        >
          <Button size="lg">GitHub</Button>
        </Link>
      </div>
    </div>
  )
}
