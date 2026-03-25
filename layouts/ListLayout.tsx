'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="flex items-center justify-between border-t border-gray-100 py-8 dark:border-gray-800/60">
      <div>
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            &larr; Previous
          </Link>
        ) : (
          <span className="cursor-not-allowed text-sm text-gray-300 dark:text-gray-700">
            &larr; Previous
          </span>
        )}
      </div>
      <span className="text-sm text-gray-400 dark:text-gray-500">
        {currentPage} / {totalPages}
      </span>
      <div>
        {nextPage ? (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Next &rarr;
          </Link>
        ) : (
          <span className="cursor-not-allowed text-sm text-gray-300 dark:text-gray-700">
            Next &rarr;
          </span>
        )}
      </div>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="py-10">
        <div className="mb-10 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            {title}
          </h1>
          <div className="relative max-w-sm">
            <label>
              <span className="sr-only">Search articles</span>
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search…"
                className="focus:border-primary-400 focus:ring-primary-400 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:ring-1 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
              />
            </label>
            <svg
              className="absolute top-3 right-3 h-4 w-4 text-gray-400 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <ul className="space-y-0">
          {!filteredBlogPosts.length && (
            <p className="py-8 text-gray-500 dark:text-gray-400">No posts found.</p>
          )}
          {displayPosts.map((post) => {
            const { path, date, title, summary, tags } = post
            return (
              <li
                key={path}
                className="border-t border-gray-100 py-6 first:border-t-0 dark:border-gray-800/60"
              >
                <article className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
                  <time
                    dateTime={date}
                    suppressHydrationWarning
                    className="shrink-0 text-sm text-gray-400 dark:text-gray-500"
                  >
                    {formatDate(date, siteMetadata.locale)}
                  </time>
                  <div className="flex-1 space-y-2">
                    <h2 className="text-lg leading-snug font-semibold tracking-tight">
                      <Link
                        href={`/${path}`}
                        className="hover:text-primary-600 dark:hover:text-primary-400 text-gray-900 transition-colors dark:text-gray-100"
                      >
                        {title}
                      </Link>
                    </h2>
                    <div className="flex flex-wrap gap-1">
                      {tags?.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {summary}
                    </p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
