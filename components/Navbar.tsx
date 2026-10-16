"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navbarLinks = [
  { name: "Home", url: "/" },
  { name: "Work", url: "/#experience" },
  { name: "Projects", url: "/#projects" },
  { name: "Blog", url: "/blog" },
  { name: "Resume", url: "/resume.pdf" }
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // Handle mobile menu scroll lock and escape key
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="w-full bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-center relative">
        
        {/* Centered Desktop Nav */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-10">
          {navbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target={link.url.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.url.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              className="text-[15px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle - positioned right */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden absolute right-4 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-14 left-0 w-full bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 shadow-lg z-50 flex flex-col"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-4 gap-2">
            {navbarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target={link.url.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.url.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
