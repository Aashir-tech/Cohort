"use client"
import Link from "next/link"
import { CreditCard, Smartphone, Wallet, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Glassmorphic Navbar */}
      <MainNav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/signin">
            <Button variant="ghost" className="text-white bg-white/10 backdrop-blur-md hover:bg-white/20">
              Sign In
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </MainNav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        {/* Glowing orbs for futuristic effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
            Welcome to WalletGo
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Your One-Stop Solution for Digital Payments in the Modern World
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-xl shadow-[0_0_15px_rgba(149,128,255,0.5)] transition-all duration-300">
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-xl shadow-[0_0_15px_rgba(149,128,255,0.5)] transition-all duration-300">
                <Send size={20} className="mr-2" />
                Send Money
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background/80 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/20 shadow-xl transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Digital Wallet</h3>
                <p className="text-muted-foreground">
                  Securely store and manage your money with advanced encryption and real-time tracking.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/20 shadow-xl transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Mobile Recharge</h3>
                <p className="text-muted-foreground">
                  Quick and easy recharges for all mobile operators with instant confirmation.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/20 shadow-xl transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Bill Payments</h3>
                <p className="text-muted-foreground">
                  Pay all your utility bills hassle-free with automated reminders and payment history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-md"></div>
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-full h-full flex items-center justify-center">
              <svg className="w-16 h-16" viewBox="0 0 100 100">
                <path d="M30 50 L70 50 M50 30 L50 70" stroke="white" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            WalletGo
          </h2>
          <p className="text-xl text-muted-foreground">Simplifying Digital Payments</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">WalletGo</h3>
              <p className="text-blue-200">Your trusted digital payment partner.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Facebook
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Twitter
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center">
            <p className="text-blue-200">&copy; 2023 WalletGo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
