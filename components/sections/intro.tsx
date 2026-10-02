import { socials } from "@/lib/data/socials"
import { profile } from "@/lib/data/profile"
import { education } from "@/lib/data/education"

export function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <p className="text-base md:text-[1.0625rem] leading-relaxed text-foreground">
          {profile.about}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Currently pursuing a {education.degree} at {education.institution} ({education.period}), with coursework spanning {education.coursework.join(', ')}.
        </p>
      </div>
    </section>
  )
}
