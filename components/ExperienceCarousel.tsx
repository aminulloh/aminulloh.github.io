'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800/60"
          >
            {/* Header strip */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3 dark:border-gray-800/60">
              <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-widest uppercase">
                {exp.type}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">{exp.period}</span>
            </div>

            {/* Body */}
            <div className="px-6 pt-5 pb-6">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{exp.company}</p>
              <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
              <div className="border-t border-gray-100 pt-4 dark:border-gray-800/60">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Impact
                </p>
                <div className="space-y-2">
                  {exp.impact.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="text-gray-400 transition-colors hover:text-gray-700 disabled:opacity-25 dark:hover:text-gray-200"
          aria-label="Previous"
        >
          ←
        </button>
        <div className="flex gap-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === index ? 'bg-primary-500 w-4' : 'w-1.5 bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to experience ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(index + 1)}
          disabled={index === experiences.length - 1}
          className="text-gray-400 transition-colors hover:text-gray-700 disabled:opacity-25 dark:hover:text-gray-200"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  )
}
