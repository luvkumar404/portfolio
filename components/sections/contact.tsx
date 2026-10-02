import { Button } from "@/components/ui/button"
import { LinkRow } from "@/components/shared/link-row"

export function Contact() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[1.1rem] md:text-[1.25rem] font-semibold text-foreground">
        Get in touch
      </h2>
      
      <LinkRow 
        title="Email Me"
        description="Currently looking for new opportunities. My inbox is always open."
        url="mailto:lovechaudhary1090@gmail.com"
      />
      
      <div className="mt-2">
        <Button asChild className="rounded-[8px] bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </Button>
      </div>
    </section>
  )
}
