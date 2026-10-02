import Link from "next/link"
import { socials } from "@/lib/data/socials"
import { profile } from "@/lib/data/profile"
import { navLinks } from "@/lib/data/nav"
import { SocialButton } from "@/components/shared/social-button"

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#0a0a0a] border-t border-[#E7E5E4] dark:border-[#262626] text-[#171717] dark:text-[#F5F5F4] transition-colors mt-auto">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 md:py-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          
          {/* Column 1: Navigate */}
          <div className="flex flex-col">
            <h4 className="text-[0.6875rem] font-bold text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-widest mb-3">
              Navigate
            </h4>
            <nav className="flex flex-wrap md:flex-nowrap gap-5">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.url} 
                  className="text-[0.9375rem] text-[#171717] dark:text-[#F5F5F4] hover:text-[#71717A] dark:hover:text-[#A1A1AA] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Connect */}
          <div className="flex flex-col">
            <h4 className="text-[0.6875rem] font-bold text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-widest mb-3">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 w-fit">
              {socials.map((social) => (
                <SocialButton key={social.name} name={social.name} url={social.url} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-5 pt-4 border-t border-[#E7E5E4] dark:border-[#262626]">
          <p className="text-sm text-[#71717A] dark:text-[#A1A1AA] text-left">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
