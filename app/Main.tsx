import Link from '@/components/Link'
import Tag from '@/components/Tag'
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
        <div className="py-10">
          <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            Latest Writing
          </h2>

          <ul className="space-y-0">
            {!posts.length && (
              <p className="text-gray-500 dark:text-gray-400">No posts found.</p>
            )}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="group border-t border-gray-100 py-6 first:border-t-0 dark:border-gray-800/60">
                  <article>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
                      <time
                        dateTime={date}
                        className="shrink-0 text-sm text-gray-400 dark:text-gray-500"
                      >
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-semibold leading-snug tracking-tight">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-gray-900 transition-colors hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                          >
                            {title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {posts.length > MAX_DISPLAY && (
            <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-800/60">
              <Link
                href="/blog"
                className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                aria-label="All posts"
              >
                All writing &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
