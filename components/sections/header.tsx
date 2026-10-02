"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { profile } from "@/lib/data/profile"
import { socials } from "@/lib/data/socials"
import { SocialButton, SpotifyIcon } from "@/components/shared/social-button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="flex flex-col gap-6">
      {/* Top section: Avatar, Name, Meta, Theme Toggle */}
      <div className="flex items-start justify-between">
        
        <div className="flex items-center gap-5">
          {/* Avatar with colored ring */}
          <div className="relative flex items-center justify-center rounded-full p-[3px] bg-gradient-to-br from-accent/50 to-primary/20">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-sm"></div>
            <Avatar className="h-[4.5rem] w-[4.5rem] border-2 border-background relative z-10">
              <AvatarImage src="/avatar-placeholder.jpg" alt={profile.name} />
              <AvatarFallback className="bg-muted text-muted-foreground font-semibold text-lg">LC</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <h1 className="text-[1.5rem] md:text-[1.75rem] font-bold tracking-tight text-foreground leading-none">
              {profile.name}
            </h1>
            
            <div className="flex items-center gap-2 text-[0.9375rem] text-muted-foreground">
              <span>{profile.role}</span>
              <span className="text-border px-0.5">&middot;</span>
              <span>Student</span>
              <span className="text-border px-0.5">&middot;</span>
              <span className="hidden sm:inline">{profile.email}</span>
              <button 
                onClick={handleCopyEmail}
                className="hover:text-foreground hover:bg-muted/50 p-1 rounded-md transition-colors"
                aria-label="Copy email"
                title="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bio line */}
      <div className="mt-2">
        <p className="text-[0.9375rem] text-foreground font-medium">
          {profile.tagline}
        </p>
      </div>

      {/* Last played row */}
      <div className="flex items-center gap-2 mt-1">
        <SpotifyIcon className="w-4 h-4 text-[#1DB954]" />
        <span className="text-[0.875rem] text-muted-foreground">
          {/* TODO: Wire to Spotify API via next-auth or serverless route */}
          Last played — <span className="font-medium text-foreground/80">Never Gonna Give You Up</span> &middot; Rick Astley
        </span>
      </div>

      {/* Social icons row */}
      <div className="flex items-center gap-3 mt-4">
        {socials.map(social => (
          <SocialButton key={social.name} name={social.name} url={social.url} />
        ))}
      </div>
    </header>
  )
}
