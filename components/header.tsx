'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const links = [
    {
      name: 'home',
      href: '/',
    },
    {
      name: 'algorithm',
      href: '/algorithm',
    },
  ]

  return (
    <header className='mb-10 space-x-4'>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(pathname === link.href && 'underline underline-offset-4')}
        >
          {link.name}
        </Link>
      ))}
    </header>
  )
}
