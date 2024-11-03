"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(50000)
  const [downPayment, setDownPayment] = useState(10000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [interestRate, setInterestRate] = useState(0.045) // 4.5%
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [propertyTax, setPropertyTax] = useState(265)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [homeInsurance, setHomeInsurance] = useState(132)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoaFees, setHoaFees] = useState(132)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [utilities, setUtilities] = useState(100)

  // Calculate monthly mortgage payment
  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 12
    const numberOfPayments = loanTerm * 12
    
    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    return isNaN(monthlyPayment) ? 0 : monthlyPayment
  }

  // Update down payment amount when percentage changes
  useEffect(() => {
    const newDownPayment = (homePrice * downPaymentPercent) / 100
    setDownPayment(Math.round(newDownPayment))
  }, [homePrice, downPaymentPercent])

  // Update down payment percentage when amount changes
  useEffect(() => {
    const newDownPaymentPercent = (downPayment / homePrice) * 100
    setDownPaymentPercent(Math.round(newDownPaymentPercent))
  }, [downPayment, homePrice])

  const monthlyPayment = calculateMonthlyPayment()
  const monthlyPrincipalAndInterest = monthlyPayment
  const totalMonthlyPayment = monthlyPrincipalAndInterest + propertyTax + homeInsurance + hoaFees + utilities

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[#004d40] font-semibold">Better</span>
            <span className="text-sm text-gray-500">Mortgage</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/about-us" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="/start" className="text-sm text-gray-600 hover:text-gray-900">Get Started</Link>
          </nav>
        </div>
      </header>
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <h1 className="text-3xl font-bold mb-2">Mortgage calculator</h1>
        <p className="text-gray-600 mb-8">
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and
          private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="grid gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6">
                <div>
                  <Label htmlFor="home-price">Home price</Label>
                  <div className="flex gap-4 items-center">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <Input
                        id="home-price"
                        type="number"
                        className="pl-7"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                      />
                    </div>
                    <div className="w-1/2">
                      <Slider
                        value={[homePrice]}
                        min={0}
                        max={1000000}
                        step={1000}
                        onValueChange={([value]) => setHomePrice(value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="down-payment">Down payment</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      <Input
                        id="down-payment"
                        type="number"
                        className="pl-7"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="down-payment-percent">Down payment %</Label>
                    <div className="relative">
                      <Input
                        id="down-payment-percent"
                        type="number"
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      />
                      <span className="absolute right-3 top-2.5 text-gray-500">%</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="loan-term">Loan term</Label>
                    <Select value={String(loanTerm)} onValueChange={(value) => setLoanTerm(Number(value))}>
                      
                      <SelectTrigger id="loan-term">
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Monthly payment breakdown</h2>
              <div className="text-3xl font-bold mb-6">${Math.round(totalMonthlyPayment)}/mo</div>

              <div className="relative h-4 rounded-full overflow-hidden mb-8">
                <div
                  className="absolute h-full bg-[#004d40]"
                  style={{
                    width: `${(monthlyPrincipalAndInterest / totalMonthlyPayment) * 100}%`,
                  }}
                />
                <div
                  className="absolute h-full bg-purple-500"
                  style={{
                    left: `${(monthlyPrincipalAndInterest / totalMonthlyPayment) * 100}%`,
                    width: `${(propertyTax / totalMonthlyPayment) * 100}%`,
                  }}
                />
                <div
                  className="absolute h-full bg-blue-400"
                  style={{
                    left: `${((monthlyPrincipalAndInterest + propertyTax) / totalMonthlyPayment) * 100}%`,
                    width: `${(homeInsurance / totalMonthlyPayment) * 100}%`,
                  }}
                />
                <div
                  className="absolute h-full bg-yellow-400"
                  style={{
                    left: `${((monthlyPrincipalAndInterest + propertyTax + homeInsurance) / totalMonthlyPayment) * 100}%`,
                    width: `${(hoaFees / totalMonthlyPayment) * 100}%`,
                  }}
                />
                <div
                  className="absolute h-full bg-red-400"
                  style={{
                    left: `${((monthlyPrincipalAndInterest + propertyTax + homeInsurance + hoaFees) / totalMonthlyPayment) * 100}%`,
                    width: `${(utilities / totalMonthlyPayment) * 100}%`,
                  }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#004d40]" />
                    <span>Principal & Interest</span>
                  </div>
                  <div className="font-semibold">${Math.round(monthlyPrincipalAndInterest)}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span>Property taxes</span>
                  </div>
                  <div className="font-semibold">${propertyTax}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <span>Homeowners insurance</span>
                  </div>
                  <div className="font-semibold">${homeInsurance}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span>HOA fees</span>
                  </div>
                  <div className="font-semibold">${hoaFees}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <span>Utilities</span>
                  </div>
                  <div className="font-semibold">${utilities}</div>
                </div>
              </div>

              <Button variant="secondary" className="w-full mt-6">
                Copy estimate link
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}