'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import SpotlightCard from '@/components/SpotlightCard'

type Experience = {
  type: string
  title: string
  company: string
  period: string
  description: string
  impact: string[]
}

const variants = {
  enter: (dir: number) => ({ x: dir * 40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -40, opacity: 0 }),
}

export default function ExperienceCarousel({ experiences }: { experiences: Experience[] }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1)
    setIndex(next)
  }

  const exp = experiences[index]

  return (
    <div>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <SpotlightCard className="glass-card">
              {/* Header strip */}
              <div className="flex items-center justify-between border-b border-gray-100 px-8 py-4 dark:border-gray-800/60">
                <span className="text-primary-600 dark:text-primary-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {exp.type}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase dark:text-gray-500">
                  {exp.period}
                </span>
              </div>

              {/* Body */}
              <div className="px-8 pt-6 pb-8">
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {exp.company}
                  </p>
                </div>
                <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
                <div className="border-t border-gray-100 pt-6 dark:border-gray-800/60">
                  <p className="mb-5 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                    Impact & Outcomes
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {exp.impact.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full opacity-60" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-gray-900 hover:text-gray-900 disabled:opacity-20 dark:border-gray-800 dark:hover:border-gray-100 dark:hover:text-gray-100"
          aria-label="Previous"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
        </button>
        <div className="flex gap-3">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? 'bg-primary-500 w-8' : 'w-2 bg-gray-200 dark:bg-gray-800'
              }`}
              aria-label={`Go to experience ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(index + 1)}
          disabled={index === experiences.length - 1}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-gray-900 hover:text-gray-900 disabled:opacity-20 dark:border-gray-800 dark:hover:border-gray-100 dark:hover:text-gray-100"
          aria-label="Next"
        >
          <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </button>
      </div>
    </div>
  )
}
