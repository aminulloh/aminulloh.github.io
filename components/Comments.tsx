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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const giscusConfig = (siteMetadata.comments as any).giscusConfig ?? {}
  const commentsConfig = {
    ...siteMetadata.comments,
    giscusConfig: {
      ...giscusConfig,
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
