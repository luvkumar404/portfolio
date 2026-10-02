import { education } from "@/lib/data/education"
import { Badge } from "@/components/ui/badge"

export function Education() {
  return (
    <section id="education" className="flex flex-col gap-6 scroll-mt-20">
      <h2 className="text-[1.25rem] font-bold text-foreground tracking-tight">Education</h2>
      
      <div className="flex flex-col gap-6 border-b border-border/60 pb-8 last:border-0 pt-2">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.125rem] font-bold text-foreground">{education.institution}</h3>
            <div className="font-medium text-foreground text-[1rem]">
              {education.degree}
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-1 md:gap-0.5 text-[0.875rem]">
            <div className="font-semibold text-foreground">
              {education.period}
            </div>
            <div className="text-muted-foreground">
              {education.location}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 mt-2">
          <h4 className="text-[0.75rem] font-bold text-foreground uppercase tracking-widest">Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map(course => (
              <Badge key={course} variant="outline" className="font-mono text-[0.75rem] font-medium text-muted-foreground border-border bg-transparent rounded-md px-2.5 py-0.5 hover:bg-muted/50 transition-colors">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
