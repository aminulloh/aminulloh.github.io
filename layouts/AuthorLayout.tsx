'use client'

import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'
import AnimatedHeadline from '@/components/AnimatedHeadline'
import ExperienceCarousel from '@/components/ExperienceCarousel'
import ProjectHighlights from '@/components/ProjectHighlights'
import SpotlightCard from '@/components/SpotlightCard'
import SectionReveal from '@/components/SectionReveal'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

const venture = {
  name: 'PT Aminulloh Technology Service (ATS)',
  status: 'EARLY STAGE',
  tagline: 'Building infrastructure for Indonesia\u2019s EV aftersales ecosystem.',
  problem:
    'EV aftersales in Indonesia runs on fragmented manual processes \u2014 service data scattered across WhatsApp, Excel, and email. As the fleet scales, the gap between what operators need and what exists grows wider.',
  insight:
    'After 5+ years on the operator side \u2014 engineering, product, and aftersales \u2014 I\u2019ve experienced this firsthand. The opportunity is at the intersection of domain knowledge and digital infrastructure.',
  status_detail: 'Company registered. Exploring product direction and early partnerships.',
  lookingFor: [
    'Strategic partners in EV fleet operations or aftersales',
    'Co-founders with product or technology background',
    'Early-stage investors aligned with Indonesia\u2019s EV market',
  ],
}

const valuePillars = [
  {
    title: 'Systems Thinking',
    description:
      'I design solutions with end-to-end operational impact \u2014 from vehicle systems to service ecosystems.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <path d="M5.636 5.636l2.122 2.122M16.243 16.243l2.121 2.121M5.636 18.364l2.122-2.122M16.243 7.757l2.121-2.121" />
      </svg>
    ),
  },
  {
    title: 'Product Mindset',
    description:
      'I build for user problems, not features. Every initiative maps to a measurable outcome.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Business Acumen',
    description:
      "I've made strategic and financial decisions in real operations \u2014 not just slide decks.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Execution & Ownership',
    description: 'I ship. I own outcomes beyond my formal scope. I close loops.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

const skillGroups = [
  {
    category: 'Engineering & Systems',
    items: [
      'EV Systems',
      'CAN Bus',
      'Fleet Management',
      'Mechanical Engineering',
      'Electrical Systems',
      'System Architecture',
    ],
  },
  {
    category: 'Product & Strategy',
    items: [
      'Product Management',
      'Roadmapping',
      'User Research',
      'Service Design',
      'Digital Transformation',
      'Requirements Definition',
    ],
  },
  {
    category: 'Business & Finance',
    items: [
      'Cost Analysis',
      'Business Development',
      'Strategic Planning',
      'Operational Management',
      'Customer Success',
      'Aftersales Strategy',
    ],
  },
  {
    category: 'Tools & Technology',
    items: ['Next.js', 'Python', 'Git', 'Figma', 'MS Project', 'ERP Systems'],
  },
]

const projectHighlights = [
  {
    status: 'IN PROGRESS',
    title: 'Aftersales Documentation Portal',
    description:
      'Centralized knowledge base for EV aftersales operations — covering service manuals, warranty docs, and parts catalog.',
    outcomes: [
      'Replacing fragmented WhatsApp/email chains with structured documentation',
      'Reducing technician response time for field issues',
    ],
    href: '/projects',
  },
  {
    status: 'PLANNING',
    title: 'FleetOS Service Integration',
    description:
      'Defining the integration layer between aftersales operations and a future FleetOS service ticketing platform.',
    outcomes: [
      'Aligning aftersales workflows with digital fleet management strategy',
      'Scoping API requirements and data model for service events',
    ],
    href: '/projects',
  },
  {
    status: 'CONCEPT',
    title: 'EV Lifecycle Cost Analytics',
    description:
      'Dashboard concept for tracking cost-per-vehicle metrics across the Indonesia EV fleet.',
    outcomes: [
      'Identifying maintenance cost patterns across vehicle cohorts',
      'Supporting data-driven aftersales pricing decisions',
    ],
    href: '/projects',
  },
]

const experiences = [
  {
    type: 'LEADERSHIP · OPERATIONS',
    title: 'Aftersales Service Lead — Indonesia Market',
    company: 'Contemporary Synland Technology Co., Ltd.',
    period: 'Oct 2025 – Present',
    description:
      "Led end-to-end aftersales operations for Indonesia's EV market — bridging engineering, customers, and business stakeholders.",
    impact: [
      'Built centralized aftersales documentation portal from zero',
      'Initiated FleetOS service ticketing integration roadmap',
      'Drove cost reduction analysis and product feedback loops',
    ],
  },
  {
    type: 'ENGINEERING · PRODUCT',
    title: 'EV Product Engineer',
    company: 'PT VKTR Teknologi Mobilitas Tbk.',
    period: 'Feb 2023 – Sep 2025',
    description:
      "Developed and validated EV product systems for Indonesia's public transport sector, contributing to system architecture and cross-functional product development.",
    impact: [
      'System architecture and technical documentation for EV platforms',
      'Cross-functional collaboration across engineering and product teams',
    ],
  },
  {
    type: 'RESEARCH · ENGINEERING',
    title: 'EV Researcher',
    company:
      'Center for Research and Innovation on Advanced Transportation Electrification (CReATE)',
    period: 'Aug 2022 – Feb 2023',
    description:
      'Conducted applied research on electric vehicle systems and charging infrastructure for the Indonesian market.',
    impact: ['Produce 1 research paper and 1 patent'],
  },
  {
    type: 'RESEARCH · ROBOTICS',
    title: 'Robotics Researcher',
    company: 'Robotics and Intelligent Systems Center (RoISC)',
    period: 'Jul 2018 – Aug 2022',
    description:
      'Conducted robotics research projects focused on autonomous systems and control algorithms over 4 years.',
    impact: ['Produce 3 research papers and 2 patents'],
  },
  {
    type: 'MANAGEMENT · OPERATIONS',
    title: 'Project Manager',
    company: 'PT Bayu Dinamika Abadi',
    period: 'Nov 2020 – Jul 2021',
    description:
      'Managed cross-functional project delivery, stakeholder communication, and operational execution.',
    impact: ['End-to-end project delivery and stakeholder management'],
  },
]

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, email, twitter, bluesky, linkedin, github } = content

  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          {/* Left: avatar */}
          {avatar && (
            <SectionReveal direction="right" className="shrink-0">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image
                  src={avatar}
                  alt="avatar"
                  width={288}
                  height={400}
                  className="h-64 w-44 rounded-3xl object-cover object-top ring-1 shadow-2xl ring-gray-200 md:h-[450px] md:w-80 dark:ring-gray-700/80"
                />
              </motion.div>
            </SectionReveal>
          )}

          {/* Right: text */}
          <SectionReveal className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl dark:text-white">
                {name}
              </h1>
              <AnimatedHeadline />
            </div>

            <p className="text-lg leading-relaxed text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m building PT Aminulloh Technology Service (ATS) &mdash; tackling fragmentation
              in Indonesia&apos;s EV aftersales ecosystem. 5+ years as an operator across
              engineering, product, and aftersales gives me an inside view of what&apos;s broken and
              what needs to be built.
            </p>

            <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
              M.Sc. &amp; B.Eng. Electrical &amp; Mechatronics Engineering &middot; PENS
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#building" className="btn-premium">
                See What I&apos;m Building
              </a>
              <a href="#experience" className="btn-premium btn-premium-outline">
                Track Record
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Let&apos;s Talk &rarr;
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Building ── */}
      <section id="building" className="border-y border-gray-100 py-20 dark:border-gray-800/60">
        <SectionReveal>
          <h2 className="mb-10 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
            What I&apos;m Building
          </h2>
          <SpotlightCard className="glass-card">
            {/* Header strip */}
            <div className="flex items-center justify-between border-b border-gray-100 px-8 py-4 dark:border-gray-800/60">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {venture.name}
              </span>
              <span className="text-primary-600 dark:text-primary-400 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full"></span>
                </span>
                {venture.status}
              </span>
            </div>
            {/* Body */}
            <div className="px-8 pt-6 pb-8">
              <p className="mb-6 text-base font-medium text-gray-800 dark:text-gray-100">
                {venture.tagline}
              </p>
              <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    The Problem
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {venture.problem}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    The Insight
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {venture.insight}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6 dark:border-gray-800/60">
                <p className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Currently Exploring
                </p>
                <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {venture.lookingFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3 text-sm text-gray-600 dark:bg-gray-800/30 dark:text-gray-300"
                    >
                      <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(var(--color-primary-500),0.5)]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {venture.status_detail}
                  </p>
                  <a href={`mailto:${email}`} className="btn-premium">
                    Get in Touch &rarr;
                  </a>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </SectionReveal>
      </section>

      <section className="border-y border-gray-100 py-20 dark:border-gray-800/60">
        <SectionReveal>
          <h2 className="mb-10 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
            What I Bring
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuePillars.map((pillar) => (
              <SpotlightCard
                key={pillar.title}
                className="dark:hover:shadow-primary-900/10 p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400 mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
                  {pillar.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {pillar.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* ── Project Highlights ── */}
      <section className="border-b border-gray-100 py-16 dark:border-gray-800/60">
        <SectionReveal>
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
              Featured Initiatives
            </h2>
            <Link
              href="/projects"
              className="text-xs font-semibold text-gray-400 transition-colors hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
            >
              View all &rarr;
            </Link>
          </div>
          <ProjectHighlights projects={projectHighlights} />
        </SectionReveal>
      </section>

      {/* ── Track Record ── */}
      <section id="experience" className="border-b border-gray-100 py-16 dark:border-gray-800/60">
        <SectionReveal>
          <h2 className="mb-2 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
            Track Record
          </h2>
          <p className="mb-10 text-xs text-gray-400 dark:text-gray-500">
            The operator background behind what I&apos;m building.
          </p>
          <ExperienceCarousel experiences={experiences} />
        </SectionReveal>
      </section>

      {/* ── Skills ── */}
      <section className="pt-16 pb-20">
        <SectionReveal>
          <h2 className="mb-10 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
            Skills &amp; Expertise
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="bg-primary-500 h-1.5 w-1.5 shrink-0 rounded-full opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
