import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

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
        <div className="py-12">
          <h2 className="mb-8 text-base font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
            Latest Writing
          </h2>

          {!posts.length && <p className="text-gray-500 dark:text-gray-400">No posts found.</p>}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 transition-colors hover:border-gray-200 dark:border-gray-800/60 dark:hover:border-gray-700/60"
                >
                  <div className="border-b border-gray-100 px-5 py-3 dark:border-gray-800/60">
                    <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-widest uppercase">
                      {tags[0] ?? 'Writing'}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 text-base leading-snug font-semibold text-gray-900 transition-colors dark:text-white">
                      {title}
                    </h3>
                    <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <time dateTime={date} className="text-xs text-gray-400 dark:text-gray-500">
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      <span className="text-primary-600 dark:text-primary-400 text-xs font-medium">
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {posts.length > MAX_DISPLAY && (
            <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-800/60">
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                aria-label="All posts"
              >
                All posts &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
