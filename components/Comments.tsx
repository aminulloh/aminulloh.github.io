'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  const { resolvedTheme } = useTheme()

  if (!siteMetadata.comments?.provider) {
    return null
  }

  const comments = siteMetadata.comments as Record<string, unknown> & {
    giscusConfig: Record<string, unknown>
  }
  const commentsConfig = {
    ...siteMetadata.comments,
    giscusConfig: {
      ...comments.giscusConfig,
      theme: resolvedTheme === 'dark' ? 'transparent_dark' : 'light',
    },
  }

  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={commentsConfig} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
