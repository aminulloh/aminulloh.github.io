'use client'

import { motion } from 'framer-motion'
import Link from '@/components/Link'

type Project = {
  status: string
  title: string
  description: string
  outcomes: string[]
  href?: string
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function ProjectHighlights({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={card}
          className="flex flex-col overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800/60"
        >
          {/* Header strip */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3 dark:border-gray-800/60">
            <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-widest uppercase">
              {project.status}
            </span>
          </div>
          {/* Body */}
          <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
            <div className="space-y-1.5">
              {project.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {outcome}
                </div>
              ))}
            </div>
            {project.href && (
              <Link
                href={project.href}
                className="text-primary-600 dark:text-primary-400 mt-4 text-xs font-medium hover:underline"
              >
                View project →
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
