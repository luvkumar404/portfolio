"use client"

import { useState, useCallback, memo } from "react"
import { cn } from "@/lib/utils"
import type { ToolItem } from "@/lib/data/experience"

const ToolTile = memo(function ToolTile({ tool, isExpanded, onHover, onLeave }: {
  tool: ToolItem
  isExpanded: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const [iconError, setIconError] = useState(false)

  return (
    <div
      aria-label={tool.name}
      className={[
        "relative inline-flex items-center justify-center rounded-lg cursor-default select-none",
        "w-12 h-12 shrink-0",
        "transition-[background-color,border-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "motion-reduce:transition-none",
        "outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
        isExpanded
          ? "bg-muted/80 border border-border"
          : "bg-muted/40 border border-dashed border-border/30 hover:bg-muted/60",
      ].join(" ")}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {!iconError ? (
        <img
          src={tool.icon}
          alt=""
          draggable={false}
          className="w-6 h-6 object-contain shrink-0 select-none pointer-events-none"
          onError={() => setIconError(true)}
        />
      ) : (
        <span className="text-[0.625rem] font-mono text-muted-foreground leading-none text-center">
          {tool.name.slice(0, 3)}
        </span>
      )}

      {/* Tooltip — absolutely positioned, outside the flex flow */}
      <span
        className={[
          "absolute left-1/2 -translate-x-1/2 bottom-full mb-2",
          "px-2.5 py-1 rounded-md text-xs font-semibold text-foreground bg-muted border border-border shadow-sm",
          "whitespace-nowrap pointer-events-none",
          "transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isExpanded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1",
        ].join(" ")}
      >
        {tool.name}
      </span>
    </div>
  )
})

export const ToolTileRow = memo(function ToolTileRow({ tools, className }: { tools: ToolItem[]; className?: string }) {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  const handleHover = useCallback((name: string) => {
    setHoveredTool(name)
  }, [])

  const handleLeave = useCallback(() => {
    setHoveredTool(null)
  }, [])

  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {tools.map((tool) => (
        <ToolTile
          key={tool.name}
          tool={tool}
          isExpanded={hoveredTool === tool.name}
          onHover={() => handleHover(tool.name)}
          onLeave={handleLeave}
        />
      ))}
    </div>
  )
})
