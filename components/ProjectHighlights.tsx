import Link from '@/components/Link'

import SpotlightCard from '@/components/SpotlightCard'

type Project = {
  status: string
  title: string
  description: string
  outcomes: string[]
  href?: string
}

export default function ProjectHighlights({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <SpotlightCard key={project.title} className="flex flex-col">
          {/* Header strip */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-800/60">
            <span className="text-primary-600 dark:text-primary-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              {project.status}
            </span>
          </div>
          {/* Body */}
          <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
            <div className="space-y-3">
              {project.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full opacity-60" />
                  {outcome}
                </div>
              ))}
            </div>
            {project.href && (
              <Link
                href={project.href}
                className="text-primary-600 dark:text-primary-400 mt-6 text-xs font-bold tracking-wider hover:underline"
              >
                DETAILS &rarr;
              </Link>
            )}
          </div>
        </SpotlightCard>
      ))}
    </div>
  )
}
