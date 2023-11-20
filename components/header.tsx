'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

const links = [
  {
    name: 'home',
    href: '/',
    segment: null,
  },
  {
    name: 'post',
    href: '/post',
    segment: 'post',
  },
  {
    name: 'algorithm',
    href: '/algorithm',
    segment: 'algorithm',
  },
]

export function Header() {
  const segment = useSelectedLayoutSegment()

  return (
    <header className='mb-10 space-x-4'>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(segment === link.segment && 'underline underline-offset-4')}
        >
          {link.name}
        </Link>
      ))}
    </header>
  )
}
