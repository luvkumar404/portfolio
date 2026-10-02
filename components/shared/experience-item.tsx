import { Badge } from "@/components/ui/badge"
import { ToolTileRow } from "@/components/shared/tool-tile-row"
import type { ExperienceData } from "@/lib/data/experience"

export function ExperienceItem({
  company,
  status,
  role,
  dateShort,
  dateFull,
  locationShort,
  locationFull,
  workMode,
  tools,
  achievements
}: ExperienceData) {
  return (
    <div className="flex flex-col gap-6 py-8 border-b border-border/60 last:border-0 first:pt-2">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Left side: Company, Status, Role */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <h3 className="text-[1.125rem] font-bold text-foreground">{company}</h3>
            {status && (
              <Badge variant="secondary" className="font-mono text-[0.7rem] uppercase tracking-wider bg-foreground/5 text-foreground hover:bg-foreground/10 border-0 rounded-full px-2 py-0.5">
                {status}
              </Badge>
            )}
          </div>
          <div className="font-medium text-foreground text-[1rem]">
            {role}
          </div>
        </div>

        {/* Right side: Dates, Location */}
        <div className="flex flex-col md:items-end gap-1 md:gap-0.5 text-[0.875rem]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{dateShort}</span>
            <span className="text-muted-foreground hidden md:inline">• {dateFull}</span>
          </div>
          <div className="text-muted-foreground md:hidden">{dateFull}</div>
          
          <div className="flex items-center gap-2 mt-1 md:mt-0">
            <span className="font-semibold text-foreground">{locationShort}</span>
            <span className="text-muted-foreground hidden md:inline">• {locationFull} ({workMode})</span>
          </div>
          <div className="text-muted-foreground md:hidden">{locationFull} ({workMode})</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6">
        
        {/* Technologies & Tools - Icon tiles */}
        {tools.length > 0 && (
          <div className="flex flex-col gap-3">
            <h4 className="text-[0.75rem] font-bold text-foreground uppercase tracking-widest">Technologies & Tools</h4>
            <ToolTileRow tools={tools} />
          </div>
        )}

        {/* Achievements */}
        <div className="flex flex-col gap-2.5">
          <h4 className="text-[0.75rem] font-bold text-foreground uppercase tracking-widest">What I've done</h4>
          <ul className="list-outside list-disc ml-4 flex flex-col gap-2 text-[1rem] leading-relaxed text-muted-foreground">
            {achievements.map((item, idx) => (
              <li key={idx} className="pl-1 marker:text-muted-foreground/50">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
