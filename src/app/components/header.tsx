"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
// AuthToggle removed; using separate Login / Sign Up buttons
import { Menu } from "lucide-react"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground site-header">
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center w-full gap-4">
          <div className="flex-shrink-0 -ml-4 md:-ml-6">
            <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary-foreground">
              FinFable
            </Link>
          </div>

          {/* Centered navigation on md+ using flex with flex-1 so it won't overlap */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex flex-nowrap gap-6 text-lg justify-center">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Button asChild variant="secondary" className="rounded-full px-4 py-2 shadow-md">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="ghost" className="bg-primary/95 text-white rounded-full px-4 py-2 border border-transparent hover:bg-primary/100">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="ml-auto md:ml-0">
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* MobileMenu is rendered via a portal under document.body to avoid
            parent stacking contexts and clipping. See mobile-menu.tsx. */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </nav>
    </header>
  )
}
