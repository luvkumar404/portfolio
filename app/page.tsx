import { Header } from "@/components/sections/header"
import { Stack } from "@/components/sections/stack"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="w-full max-w-[680px] flex flex-col flex-1 gap-20 md:gap-24 px-6 pt-12 md:pt-24 pb-20 md:pb-24">
        <Header />
        <Experience />
        <Projects />
        <Stack />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
