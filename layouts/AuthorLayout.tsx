import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'
import AnimatedHeadline from '@/components/AnimatedHeadline'
import ExperienceCarousel from '@/components/ExperienceCarousel'
import ProjectHighlights from '@/components/ProjectHighlights'

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
    company: 'CReATE',
    period: 'Aug 2022 – Feb 2023',
    description:
      'Conducted applied research on electric vehicle systems and charging infrastructure for the Indonesian market.',
    impact: ['Applied EV charging infrastructure research for Indonesian market'],
  },
  {
    type: 'RESEARCH · ROBOTICS',
    title: 'Robotics Researcher',
    company: 'RoISC',
    period: 'Jul 2018 – Aug 2022',
    description:
      'Led robotics research projects focused on autonomous systems and control algorithms over 4 years.',
    impact: ['Led multi-year autonomous systems and control algorithm research'],
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
      <section className="pt-16 pb-12 md:pt-16 md:pb-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch">
          {/* Left: avatar */}
          {avatar && (
            <div className="shrink-0">
              <Image
                src={avatar}
                alt="avatar"
                width={288}
                height={400}
                className="h-52 w-36 rounded-2xl object-cover object-top ring-1 ring-gray-200 md:h-full md:w-72 dark:ring-gray-700/80"
              />
            </div>
          )}

          {/* Right: text */}
          <div className="max-w-2xl space-y-6">
            {/* Name */}
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
              {name}
            </h1>

            {/* Headline */}
            <AnimatedHeadline />

            {/* Subheadline */}
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              I&apos;m building PT Aminulloh Technology Service (ATS) &mdash; tackling fragmentation
              in Indonesia&apos;s EV aftersales ecosystem. 5+ years as an operator across
              engineering, product, and aftersales gives me an inside view of what&apos;s broken and
              what needs to be built.
            </p>

            {/* Credential */}
            <p className="text-xs text-gray-400 dark:text-gray-500">
              M.Sc. &amp; B.Eng. Electrical &amp; Mechatronics Engineering &middot; PENS
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#building"
                className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                See What I&apos;m Building
              </a>
              <a
                href="#experience"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800/50"
              >
                Track Record
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Let&apos;s Talk &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Building ── */}
      <section id="building" className="border-y border-gray-100 py-12 dark:border-gray-800/60">
        <h2 className="mb-8 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
          What I&apos;m Building
        </h2>
        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800/60">
          {/* Header strip */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3 dark:border-gray-800/60">
            <span className="text-base font-semibold text-gray-900 dark:text-white">
              {venture.name}
            </span>
            <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-widest uppercase">
              {venture.status}
            </span>
          </div>
          {/* Body */}
          <div className="px-6 pt-5 pb-6">
            <p className="mb-5 text-sm font-medium text-gray-700 dark:text-gray-200">
              {venture.tagline}
            </p>
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-1.5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  The Problem
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {venture.problem}
                </p>
              </div>
              <div>
                <p className="mb-1.5 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  The Insight
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {venture.insight}
                </p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4 dark:border-gray-800/60">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Currently Exploring
              </p>
              <div className="mb-5 space-y-2">
                {venture.lookingFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mb-4 text-xs text-gray-400 dark:text-gray-500">
                {venture.status_detail}
              </p>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Get in Touch &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Propositions ── */}
      <section className="border-y border-gray-100 py-12 dark:border-gray-800/60">
        <h2 className="mb-8 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
          What I Bring
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 transition-colors hover:border-gray-200 hover:bg-gray-50 dark:border-gray-800/60 dark:bg-gray-900/20 dark:hover:border-gray-700 dark:hover:bg-gray-900/40"
            >
              <div className="bg-primary-50 text-primary-600 dark:bg-primary-950/30 dark:text-primary-400 mb-3 flex h-8 w-8 items-center justify-center rounded-lg">
                {pillar.icon}
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-gray-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Project Highlights ── */}
      <section className="border-b border-gray-100 py-12 dark:border-gray-800/60">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs font-medium text-gray-400 transition-colors hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
          >
            View all &rarr;
          </Link>
        </div>
        <ProjectHighlights projects={projectHighlights} />
      </section>

      {/* ── Track Record ── */}
      <section id="experience" className="border-b border-gray-100 py-12 dark:border-gray-800/60">
        <h2 className="mb-2 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
          Track Record
        </h2>
        <p className="mb-8 text-xs text-gray-400 dark:text-gray-500">
          The operator background behind what I&apos;m building.
        </p>
        <ExperienceCarousel experiences={experiences} />
      </section>

      {/* ── Skills ── */}
      <section className="pt-12 pb-16">
        <h2 className="mb-8 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
          Skills &amp; Expertise
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-xs font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="bg-primary-500 h-1 w-1 shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
