import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, RefreshCw, DollarSign, Phone, BarChart, Gift, Layout } from "lucide-react"

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[#004d40] font-semibold">Better</span>
            <span className="text-sm text-gray-500">Mortgage</span>
          </Link>
          <Link href="tel:(415) 523 8837" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <Phone className="w-4 h-4 mr-2" />
            Need help? Call (415) 523 8837
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <Image
                src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"
                alt="Betsy's profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Hi, I'm Betsy!</h1>
              <p className="text-xl">What can I help you with?</p>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-6"
              >
                <Home className="w-5 h-5 mr-4 text-[#004d40]" />
                Buying a home
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-6"
              >
                <RefreshCw className="w-5 h-5 mr-4 text-[#004d40]" />
                Refinance my mortgage
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4 px-6"
              >
                <DollarSign className="w-5 h-5 mr-4 text-[#004d40]" />
                Get cash from my home
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="text-center">
                <div className="text-2xl font-bold">$100B</div>
                <div className="text-sm text-gray-600">home loans funded entirely online</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">400K</div>
                <div className="text-sm text-gray-600">Customers who chose a Better Mortgage</div>
              </div>
            </div>

            <Card className="bg-gray-50 p-6">
              <p className="text-sm text-gray-600 mb-4">After a few questions, you&apos;ll unlock:</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart className="w-5 h-5 mr-3 text-[#004d40]" />
                  <span>Custom mortgage rates</span>
                </div>
                <div className="flex items-center">
                  <Gift className="w-5 h-5 mr-3 text-[#004d40]" />
                  <span>Exclusive offers</span>
                </div>
                <div className="flex items-center">
                  <Layout className="w-5 h-5 mr-3 text-[#004d40]" />
                  <span>A personalized dashboard</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="font-bold mb-2">Better</h2>
                <p className="text-sm text-gray-600">
                  Better is a family of companies serving all your homeownership needs.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-sm mb-1">Better Mortgage</h3>
                <p className="text-sm text-gray-600">
                  We can&apos;t wait to say &quot;Welcome home.&quot; Apply 100% online with expert customer support.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">Better Real Estate</h3>
                <p className="text-sm text-gray-600">
                  Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">Better Cover</h3>
                <p className="text-sm text-gray-600">
                  Shop, bundle, and save on insurance coverage for home, auto, life, and more.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">Better Inspect</h3>
                <p className="text-sm text-gray-600">
                  Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">Better Settlement Services</h3>
                <p className="text-sm text-gray-600">
                  Get transparent rates when you shop for title insurance at one convenient place.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-bold mb-4">Resources</h2>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Home affordability calculator</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mortgage calculator</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Free mortgage calculator</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mortgage calculator with taxes</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Mortgage calculator with PMI</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Rent vs buy calculator</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">HELOC payment calculator</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Buy a home</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Sell a home</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Get home inspection</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold mb-4">Company</h2>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Media</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Partner With Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Learning center</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Investor Relations</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold mb-4">Contact Us</h2>
              <ul className="space-y-2 text-sm">
                <li><Link href="mailto:hello@better.com" className="text-gray-600 hover:text-gray-900">hello@better.com</Link></li>
                <li><Link href="tel:415-523-8837" className="text-gray-600 hover:text-gray-900">415-523-8837</Link></li>
              </ul>

              <h2 className="font-bold mt-8 mb-4">Legal</h2>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">NMLS Consumer Access</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Use</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Disclosures &amp; Licensing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Affiliated Business</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Browser Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}