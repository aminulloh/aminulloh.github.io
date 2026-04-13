import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

import SpotlightCard from '@/components/SpotlightCard'
import SectionReveal from '@/components/SectionReveal'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>

      <div className="border-t border-gray-100 dark:border-gray-800/60">
        <section className="py-16">
          <SectionReveal>
            <div className="mb-10 flex items-baseline justify-between">
              <h2 className="text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                Latest Writing
              </h2>
              {posts.length > MAX_DISPLAY && (
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-gray-400 transition-colors hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  View all &rarr;
                </Link>
              )}
            </div>

            {!posts.length && <p className="text-gray-500 dark:text-gray-400">No posts found.</p>}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <Link key={slug} href={`/blog/${slug}`} className="group flex">
                    <SpotlightCard className="dark:hover:shadow-primary-900/10 flex flex-1 flex-col transition-all duration-300 hover:shadow-lg">
                      <div className="border-b border-gray-100 px-6 py-4 dark:border-gray-800/60">
                        <span className="text-primary-600 dark:text-primary-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                          {tags[0] ?? 'Writing'}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
                        <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 text-lg font-bold text-gray-900 transition-colors dark:text-white">
                          {title}
                        </h3>
                        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800/60">
                          <time
                            dateTime={date}
                            className="text-[10px] font-bold tracking-wider text-gray-400 uppercase dark:text-gray-500"
                          >
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                          <span className="text-primary-600 dark:text-primary-400 text-xs font-bold tracking-wider group-hover:underline">
                            READ &rarr;
                          </span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                )
              })}
            </div>
          </SectionReveal>
        </section>
      </div>
    </>
  )
}
