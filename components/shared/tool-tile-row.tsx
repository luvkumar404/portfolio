"use client"

import { useState } from "react"
import type { ToolItem } from "@/lib/data/experience"

function ToolTile({ tool, isExpanded, onHover, onLeave }: {
  tool: ToolItem
  isExpanded: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const [iconError, setIconError] = useState(false)

  return (
    <div
      aria-label={tool.name}
      title={tool.name}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-lg overflow-hidden whitespace-nowrap cursor-default select-none",
        "h-[42px] shrink-0",
        "transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
        "motion-reduce:transition-none",
        isExpanded
          ? "w-auto px-3.5 bg-muted/80 border border-border"
          : "w-[42px] bg-muted/40 border border-dashed border-border/30 hover:bg-muted/60",
      ].join(" ")}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {!iconError ? (
        <img
          src={tool.icon}
          alt=""
          className="w-5 h-5 object-contain shrink-0"
          onError={() => setIconError(true)}
        />
      ) : (
        <span className="text-[0.625rem] font-mono text-muted-foreground leading-none text-center">
          {tool.name.slice(0, 3)}
        </span>
      )}

      <span
        className={[
          "text-[0.8125rem] font-semibold text-foreground whitespace-nowrap overflow-hidden",
          "motion-reduce:transition-none",
          isExpanded
            ? "max-w-[120px] opacity-100 transition-[max-width,opacity] duration-[250ms] delay-[100ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            : "max-w-0 opacity-0 transition-[max-width,opacity] duration-[100ms] delay-0 ease-[cubic-bezier(0.4,0,0.2,1)]",
        ].join(" ")}
      >
        {tool.name}
      </span>
    </div>
  )
}

export function ToolTileRow({ tools }: { tools: ToolItem[] }) {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  return (
    <div className="flex flex-wrap gap-2.5">
      {tools.map((tool) => (
        <ToolTile
          key={tool.name}
          tool={tool}
          isExpanded={hoveredTool === tool.name}
          onHover={() => setHoveredTool(tool.name)}
          onLeave={() => setHoveredTool(null)}
        />
      ))}
    </div>
  )
}
