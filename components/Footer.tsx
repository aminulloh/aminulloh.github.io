import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 dark:border-gray-800/60">
      <div className="flex flex-col items-center py-8 sm:flex-row sm:justify-between">
        <div className="flex space-x-4 text-gray-400 dark:text-gray-500">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="x" href={siteMetadata.x} size={5} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={5} />
        </div>
        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500 sm:mt-0" suppressHydrationWarning>
          {siteMetadata.author} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
