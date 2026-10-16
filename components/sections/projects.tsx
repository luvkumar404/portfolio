import { projects } from "@/lib/data/projects"
import { ExternalLink, Briefcase, Share2, Sparkles, Layout, ArrowRight } from "lucide-react"
import { GithubIcon } from "@/components/shared/social-button"
import { ToolTileRow } from "@/components/shared/tool-tile-row"

export function Projects() {
  return (
    <section id="projects" className="w-full py-8 pb-16 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Projects
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-[72px]">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            // Icon and gradient mapping
            let ProjectIcon = Briefcase;
            let bgGradient = "from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10";
            let iconColor = "text-blue-500 dark:text-blue-400";
            
            if (project.title.includes("FileShare")) {
              ProjectIcon = Share2;
              bgGradient = "from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10";
              iconColor = "text-purple-500 dark:text-purple-400";
            } else if (project.title.includes("Agentic")) {
              ProjectIcon = Sparkles;
              bgGradient = "from-amber-100 to-orange-200 dark:from-amber-900/40 dark:to-orange-800/40";
              iconColor = "text-orange-500 dark:text-orange-400";
            } else if (project.title.includes("Portfolio")) {
              ProjectIcon = Layout;
              bgGradient = "from-emerald-100 to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-800/10";
              iconColor = "text-emerald-500 dark:text-emerald-400";
            }

            return (
              <article 
                key={idx}
                className={`group project-row grid grid-cols-1 min-[800px]:grid-cols-12 items-center ${
                  isEven ? "min-[800px]:-mt-6 even:min-[800px]:-mt-6" : ""
                }`}
                style={{ animation: `fadeUp 0.5s ease-out ${idx * 0.08}s both` }}
              >
                {/* Visual Area (Image Block) */}
                <div 
                  className={`relative flex items-center justify-center bg-gradient-to-br ${bgGradient} aspect-[16/10] w-full rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-900 dark:hover:border-neutral-700 transition-[box-shadow,transform,border-color] duration-200 will-change-transform overflow-hidden col-span-1 min-[800px]:col-span-6 min-[800px]:row-start-1 ${
                    isEven ? "min-[800px]:col-start-7" : "min-[800px]:col-start-1"
                  }`}
                >
                  {(project as any).image ? (
                    <img 
                      src={(project as any).image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <ProjectIcon className={`w-12 h-12 ${iconColor} transition-transform duration-300 group-hover:scale-105`} />
                  )}
                </div>

                {/* Content Area (Text Block) */}
                <div 
                  className={`flex flex-col flex-1 pt-6 min-[800px]:pt-0 col-span-1 min-[800px]:col-span-5 min-[800px]:row-start-1 ${
                    isEven ? "min-[800px]:col-start-1" : "min-[800px]:col-start-8"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <a href={project.repoUrl || project.liveUrl || "#"} target="_blank" rel="noopener noreferrer" className="outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {project.title}
                    </a>
                  </h3>
                  
                  <p className="text-base text-gray-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-col gap-5">
                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-2 relative z-10 pointer-events-auto overflow-visible">
                      <ToolTileRow tools={project.tools} />
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-neutral-800">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative z-10 flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 group/link"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-[opacity,transform] duration-200" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative z-10 flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 group/link"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Code</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-[opacity,transform] duration-200" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 800px) {
          .project-row:nth-child(even) {
            margin-top: -24px;
          }
        }
      `}} />
    </section>
  )
}
