import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'flex items-center w-full glass justify-between py-4 px-4 sm:px-6 rounded-2xl border border-gray-100 dark:border-gray-800/60 mt-4 transition-all duration-300 transform-gpu'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-4 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center">
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-xl font-bold tracking-tight text-gray-900 sm:block dark:text-gray-100">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-1 leading-5 sm:space-x-2">
        <nav className="no-scrollbar hidden items-center gap-x-1 overflow-x-auto sm:flex">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="nav-link rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </nav>
        <div className="flex items-center space-x-1 pl-2">
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
