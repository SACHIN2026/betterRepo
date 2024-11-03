import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  const timelineEvents = [
    { year: "2014", content: "Better Mortgage was founded in response to a personal frustration with the home-buying process." },
    { year: "2015", content: "Better Mortgage brings its first mortgage origination platform to market." },
    { year: "2016", content: "Better Mortgage launches its first end-to-end digital mortgage platform." },
    { year: "2017", content: "Better expands into 10+ states and reaches $1B+ in mortgages funded." },
    { year: "2018", content: "Better hits $1B in annual loan volume." },
    { year: "2019", content: "Better Mortgage launches its 24/7 verified pre-approval letter service." },
    { year: "2020", content: "Better surpasses $25B in total mortgages funded and expands to 44 states." },
    { year: "2021", content: "Better Mortgage launches its One Day Mortgage initiative." },
    { year: "2022", content: "Better Mortgage launches One Day Mortgage." },
    { year: "2023", content: "Better Mortgage continues to help more families achieve their homeownership dreams." },
    { year: "Present", content: "Our commitment to making homeownership more accessible continues to drive us forward.", current: true }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[#004d40] font-semibold">Better</span>
            <span className="text-sm text-gray-500">Mortgage</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/mortgage-calculator" className="text-sm text-gray-600 hover:text-gray-900">Mortgage Calculator</Link>
            <Link href="/start" className="text-sm text-gray-600 hover:text-gray-900">Get Started</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Our mission
                </h1>
                <p className="text-2xl md:text-3xl font-medium leading-tight">
                  We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
                </p>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">The status quo is broken</h2>
                  <p className="text-gray-600">
                    The traditional experience of getting a mortgage is time-consuming, confusing, and unnecessarily expensive. We believe buying a home should be better for everyone involved.
                  </p>
                  <Button className="bg-[#00c853] hover:bg-[#00c853]/90 text-white">
                    Read more
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="https://media.better.com/video/vishal-mission.jpg"
                  alt="Team member"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#004d40] text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-6">How we&apos;re changing things</h2>
            <p className="text-lg text-white/90 max-w-3xl">
              We&apos;re committed to making homeownership more accessible by removing unnecessary fees, using technology to reduce costs, and offering a fully digital experience that puts you in control.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-12">Company timeline</h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className="relative">
                    <div className={`flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <div className="flex-1 md:text-right">
                        <div className={`inline-block px-4 py-2 rounded-full ${
                          event.current ? 'bg-[#00c853] text-white' : 'bg-gray-100'
                        }`}>
                          {event.year}
                        </div>
                      </div>
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-200 rounded-full -translate-x-1/2 mt-3" />
                      <div className="flex-1">
                        <p className="text-gray-600">{event.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}