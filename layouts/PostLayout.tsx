import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-100 xl:dark:divide-gray-800/60">
          <header className="py-10 text-center">
            <div className="space-y-3">
              <time
                dateTime={date}
                suppressHydrationWarning
                className="text-sm font-medium text-gray-400 dark:text-gray-500"
              >
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
              <PageTitle>{title}</PageTitle>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {tags?.map((tag) => <Tag key={tag} text={tag} />)}
              </div>
            </div>
          </header>

          <div className="grid-rows-[auto_1fr] divide-y divide-gray-100 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:divide-y-0 dark:divide-gray-800/60">
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-100 xl:pt-11 xl:dark:border-gray-800/60">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-y-6 xl:space-x-0">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-3" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={36}
                          height={36}
                          alt="avatar"
                          className="h-9 w-9 rounded-full"
                        />
                      )}
                      <dl className="text-sm leading-5 font-medium">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>

            <div className="divide-y divide-gray-100 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-800/60">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
              <div className="flex gap-4 py-6 text-sm text-gray-400 dark:text-gray-500">
                <Link
                  href={discussUrl(path)}
                  rel="nofollow"
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Discuss on Twitter
                </Link>
                <span>·</span>
                <Link
                  href={editUrl(filePath)}
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                >
                  View on GitHub
                </Link>
              </div>
              {siteMetadata.comments && (
                <div className="py-8 text-center" id="comment">
                  <Comments slug={slug} />
                </div>
              )}
            </div>

            <footer className="text-sm font-medium xl:col-start-1 xl:row-start-2">
              <div className="divide-y divide-gray-100 dark:divide-gray-800/60">
                {(next || prev) && (
                  <div className="space-y-4 py-6">
                    {prev && prev.path && (
                      <div>
                        <h2 className="mb-1 text-xs font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                          Previous
                        </h2>
                        <Link
                          href={`/${prev.path}`}
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          {prev.title}
                        </Link>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="mb-1 text-xs font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
                          Next
                        </h2>
                        <Link
                          href={`/${next.path}`}
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          {next.title}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                <div className="py-6">
                  <Link
                    href={`/${basePath}`}
                    className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Back to the blog"
                  >
                    &larr; Back to the blog
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
