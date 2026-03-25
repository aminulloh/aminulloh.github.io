import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <div className="py-12 md:py-20">
      <div className="flex flex-col items-center text-center">
        {avatar && (
          <div className="mb-6">
            <Image
              src={avatar}
              alt="avatar"
              width={120}
              height={120}
              className="h-28 w-28 rounded-full ring-2 ring-gray-100 dark:ring-gray-800"
            />
          </div>
        )}
        <h1 className="mb-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          {name}
        </h1>
        {occupation && (
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{occupation}</p>
        )}
        {company && <p className="text-sm text-gray-400 dark:text-gray-500">{company}</p>}
        <div className="mt-6 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${email}`} />
          <SocialIcon kind="github" href={github} />
          <SocialIcon kind="linkedin" href={linkedin} />
          <SocialIcon kind="x" href={twitter} />
          <SocialIcon kind="bluesky" href={bluesky} />
        </div>
      </div>
      <div className="prose dark:prose-invert mx-auto mt-10 max-w-2xl text-center">{children}</div>
    </div>
  )
}
