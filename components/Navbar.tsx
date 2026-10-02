"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navbarLinks = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Resume", url: "/resume.pdf" }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const pathname = usePathname()

  // Handle scroll shadow and scroll spy
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    
    // Initial check
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy for active sections
  React.useEffect(() => {
    const sectionIds = navbarLinks
      .map(link => link.url.split("#")[1])
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Trigger when section is near top
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id as string)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Sync scroll spy with current route
  const getIsActive = (url: string) => {
    if (url === "/") {
      // Home is active if we're on the root path and no specific section is highlighted
      return pathname === "/" && !activeSection
    }
    return activeSection ? url.includes(`#${activeSection}`) : false
  }

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
    <header 
      className={`sticky top-0 z-50 w-full transition-shadow duration-200 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link 
          href="/" 
          className="font-semibold text-gray-900 dark:text-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Love Kumar Chaudhary
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {navbarLinks.map((link) => {
            const isActive = getIsActive(link.url)
            return (
              <Link
                key={link.name}
                href={link.url}
                target={link.url.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.url.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1 ${
                  isActive 
                    ? "text-gray-900 dark:text-gray-100" 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-900 dark:bg-gray-100 rounded-t-md" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right side: Theme & Contact & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a 
              href="mailto:lovechaudhary1090@gmail.com"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
            >
              Contact
            </a>
          </div>
          <ThemeToggle />
          
          <button
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 -mr-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 shadow-lg flex flex-col"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-4 gap-2">
            {navbarLinks.map((link) => {
              const isActive = getIsActive(link.url)
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target={link.url.endsWith(".pdf") ? "_blank" : undefined}
                  rel={link.url.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-md text-base font-medium outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive 
                      ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100" 
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-900"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <a 
              href="mailto:lovechaudhary1090@gmail.com"
              className="py-3 px-4 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 mt-2 border-t border-gray-100 dark:border-neutral-800"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
