import Link from "next/link"
import React from "react"

interface LinkRowProps {
  title: string
  description: string
  url: string
}

export function LinkRow({ title, description, url }: LinkRowProps) {
  return (
    <Link 
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex flex-col justify-center p-4 md:p-5 rounded-[12px] border border-border hover:border-foreground transition-colors"
    >
      <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground mt-1">
        {description}
      </p>
    </Link>
  )
}
