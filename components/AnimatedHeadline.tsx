'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const word = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function AnimatedHeadline() {
  return (
    <motion.p
      className="text-2xl leading-tight font-bold text-gray-900 md:text-4xl dark:text-white"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {['Engineer.', 'Strategist.', 'Leader.'].map((w, i) => (
        <motion.span
          key={w}
          variants={word}
          style={{ display: 'inline-block' }}
          className={
            w === 'Strategist.'
              ? 'text-primary-600 dark:text-primary-400 drop-shadow-[0_0_15px_rgba(var(--color-primary-500),0.3)]'
              : ''
          }
        >
          {w}
          {i < 2 ? '\u00a0' : ''}
        </motion.span>
      ))}
    </motion.p>
  )
}
