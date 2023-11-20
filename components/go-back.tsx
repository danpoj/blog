import clsx from 'clsx'
import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function GoBack({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={clsx('flex gap-2 font-semibold px-4 py-2 hover:bg-neutral-100 w-fit rounded-lg mb-6', className)}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
      </svg>

      {children}
    </Link>
  )
}
