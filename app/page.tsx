import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[#004d40] font-semibold">Better</span>
            <span className="text-sm text-gray-500">Mortgage</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="/mortgage-calculator" className="text-sm text-gray-600 hover:text-gray-900">Mortgage Calculator</Link>
            <Link href="/start" className="text-sm text-gray-600 hover:text-gray-900">Get Started</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Better Mortgage</h1>
        <p className="mb-6">Discover a simpler way to get a mortgage.</p>
        <Button asChild>
          <Link href="/start">Get Started</Link>
        </Button>
      </main>
    </div>
  )
}