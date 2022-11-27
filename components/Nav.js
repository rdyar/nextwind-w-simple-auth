import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

export default function Nav() {
  const appRoute = useRouter()
  const desktopNav = [{ href: '/', label: 'Home' }]
  const mobileNav = [{ href: '/', label: 'Home' }]

  return (
    <div className="z-50 w-full border-b bg-white md:sticky md:top-0">
      <nav className="container mx-auto flex flex-col items-center px-6 py-2 md:flex-row md:justify-between 2xl:max-w-[1280px]">
        <div>
          <h2 className="text-3xl font-bold">
            <Link href="/" className="border-b-0">
              <span className="text-slate-700">Next</span>
              <span className="text-orange-600">Wind</span>
              <span className="text-sm font-normal text-slate-700">
                {' '}
                with Simple Auth
              </span>
            </Link>
          </h2>
        </div>
        {/* desktop nav  */}
        <div className="hidden md:mt-0 md:block">
          <ul className="my-2 flex w-full list-none flex-row items-center space-x-2 text-slate-700 md:my-0  md:space-x-5">
            {desktopNav.map(({ href, label }) => (
              <li
                key={href}
                className={
                  appRoute.pathname == href ? 'md:text-orange-600' : ''
                }
              >
                <Link href={href} className="nav-link">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </ul>
        </div>
        {/* end desktop nav  */}
        {/* mobile nav */}
        <div className="mt-1 md:hidden">
          <ul className="my-2 flex w-full list-none flex-row items-center space-x-2 text-slate-700 md:my-0 md:space-x-5">
            {mobileNav.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="nav-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile nav end */}
      </nav>
    </div>
  )
}
