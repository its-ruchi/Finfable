"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // The component uses a portal to render the menu directly under <body>.
  // Rendering in a portal removes the menu from any parent stacking
  // contexts (position/transform/filter/opacity) so it won't be clipped
  // by parents. This satisfies the requirement to attach the menu outside
  // layout/hero/card containers.

  useEffect(() => {
    if (!isOpen) return

    // lock body scroll while menu is open
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const menu = (
    <div
      aria-modal="true"
      role="dialog"
      className="mobile-menu-backdrop" /* covers viewport and dims background */
      onClick={(e) => {
        // close when clicking backdrop (but not when clicking the card)
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="mobile-menu-card">
        <div className="flex justify-end">
          <button className="text-gray-700" onClick={onClose} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-2">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link href="/" className="block text-center py-3 px-4 rounded-md text-primary hover:bg-primary/5" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-center py-3 px-4 rounded-md text-primary hover:bg-primary/5" onClick={onClose}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="block text-center py-3 px-4 rounded-md text-primary hover:bg-primary/5" onClick={onClose}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block text-center py-3 px-4 rounded-md text-primary hover:bg-primary/5" onClick={onClose}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-center py-3 px-4 rounded-md text-primary hover:bg-primary/5" onClick={onClose}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-6 flex flex-col space-y-3">
            <Link href="/login" className="block w-full text-center py-3 rounded-md border border-primary text-primary bg-white" onClick={onClose}>
              Login
            </Link>
            <Link href="/signup" className="block w-full text-center py-3 rounded-md bg-primary text-white" onClick={onClose}>
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )

  return typeof document !== "undefined" ? createPortal(menu, document.body) : null
}
