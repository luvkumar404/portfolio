import { experience } from "@/lib/data/experience"
import { ExperienceItem } from "@/components/shared/experience-item"

export function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6 scroll-mt-20">
      <h2 className="text-[1.1rem] md:text-[1.25rem] font-semibold text-foreground">
        Work Experience
      </h2>
      <div className="flex flex-col">
        {experience.map((job, idx) => (
          <ExperienceItem 
            key={idx}
            {...job}
          />
        ))}
      </div>
    </section>
  )
}
